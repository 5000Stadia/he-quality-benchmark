"""Original reproducible surface channels and controlled delivery tiers.

Run Python with NumPy and Pillow AVIF: scripts/prepare-study.py. Uses the already-installed
Pillow/NumPy and KTX encoder. No downloaded executable or remote asset.
"""
from pathlib import Path
from datetime import datetime, timezone
import hashlib
import json
import subprocess
import time
import os
import numpy as np
from PIL import Image

SITE = Path(__file__).resolve().parents[1]
ROOT = SITE.parent
OUT = SITE / 'assets/study'
KTX = Path(os.environ.get('KTX_ENCODER', ROOT / 'tools/KTX-Software-4.4.2-Linux-x86_64/bin/toktx'))
SIZE = 1024
SEED = 192706
ROLES = {'paint': .25, 'bark': .45, 'leaf': .20, 'fabric': .20, 'wood': .50}
START = datetime.now(timezone.utc).isoformat()
timings = []


def periodic_noise(rng, scale):
    a = rng.standard_normal((SIZE, SIZE))
    fy = np.fft.fftfreq(SIZE)[:, None]
    fx = np.fft.rfftfreq(SIZE)[None, :]
    spectrum = np.fft.rfft2(a) * np.exp(-(fx*fx+fy*fy)*scale*scale)
    field = np.fft.irfft2(spectrum, s=(SIZE, SIZE))
    return field / max(field.std(), 1e-8)


def channels(role):
    rng = np.random.default_rng(SEED + list(ROLES).index(role))
    u, v = np.meshgrid(np.arange(SIZE)/SIZE, np.arange(SIZE)/SIZE)
    fine = periodic_noise(rng, 2)
    slow = periodic_noise(rng, 72)
    alpha = None
    if role == 'paint':
        # Pigment color, tiny independent flake height and coating micro-roughness.
        field = .6*slow + .10*fine
        color = np.array([35, 89, 95])[None, None, :] + field[..., None]*2.5
        height = fine*.000002 + slow*.000001
        rough = .77 + .035*fine
    elif role == 'bark':
        w = u + .014*np.sin(2*np.pi*v*3) + .008*np.sin(2*np.pi*(v*7+u*2))
        furrows = np.power(.5+.5*np.cos(2*np.pi*w*23), 9)
        grain = .5+.5*np.sin(2*np.pi*(u*91+.5*np.sin(v*2*np.pi*5)))
        field = -30*furrows + 6*slow + 3*fine + 8*grain
        color = np.array([105, 82, 54])[None, None, :] + field[..., None]*np.array([1, .87, .70])
        height = -.0020*furrows + .00012*grain + .00005*slow
        rough = .83 + .07*furrows + .025*slow
    elif role == 'fabric':
        # Interlaced yarn field, not normals inferred from the color photograph.
        x, y = u*192, v*192
        tx, ty = (.5+.5*np.cos(2*np.pi*x))**1.8, (.5+.5*np.cos(2*np.pi*y))**1.8
        parity = np.mod(np.floor(x)+np.floor(y), 2)
        weave = np.where(parity > .5, tx+.25*ty, ty+.25*tx)
        field = 12*weave + 3*slow + 1.7*fine
        color = np.array([170, 129, 81])[None, None, :] + field[..., None]
        height = .00016*weave + .000007*fine
        rough = .88 - .06*weave + .015*slow
    elif role == 'wood':
        w = u + .012*np.sin(2*np.pi*v*2) + .006*np.sin(2*np.pi*(v*5+u))
        rings = .5+.5*np.sin(2*np.pi*(w*37+.12*np.sin(v*2*np.pi)))
        pores = (.5+.5*np.sin(2*np.pi*(u*179+.25*np.sin(v*2*np.pi*4))))**8
        field = 19*rings - 8*pores + 4*slow + 1.5*fine
        color = np.array([83, 47, 26])[None, None, :] + field[..., None]*np.array([1, .73, .45])
        height = -.00014*pores + .00002*rings
        rough = .80 + .08*pores - .03*rings
    else:
        x, y = (u-.5)*2, v
        serration = 1 + .035*np.sin(y*2*np.pi*28)
        width = np.maximum(0, np.sin(np.pi*y))**.78 * (.84-.12*y)*serration
        alpha = np.clip((width-np.abs(x))*SIZE*.65+.5, 0, 1)
        center = np.exp(-(x/.025)**2)
        veinphase = np.abs(x)*10-y*8
        veins = np.exp(-((np.mod(veinphase+.5, 1)-.5)/.065)**2) * (1-np.abs(x))
        field = 9*slow + 2*fine + 10*center + 5*veins
        # Transparent RGB stays leaf green to avoid black bilinear edge halos.
        color = np.array([62, 108, 34])[None, None, :] + field[..., None]*np.array([.6, 1, .35])
        height = .00020*center + .00008*veins + .000015*slow
        rough = .79 - .08*center - .025*veins + .02*slow
    # Image rows increase downward; OpenGL +Y tangent normal points upward.
    metres_per_pixel = ROLES[role]/SIZE
    dx = (np.roll(height, -1, 1)-np.roll(height, 1, 1))/(2*metres_per_pixel)
    dy = (np.roll(height, -1, 0)-np.roll(height, 1, 0))/(2*metres_per_pixel)
    normal = np.stack((-dx, dy, np.ones_like(dx)), -1)
    normal /= np.linalg.norm(normal, axis=-1, keepdims=True)
    rgb = np.clip(color, 0, 255).astype(np.uint8)
    if alpha is not None:
        rgb = np.dstack((rgb, np.round(alpha*255).astype(np.uint8)))
    rough_rgb = np.repeat(np.clip(rough*255, 0, 255).astype(np.uint8)[..., None], 3, -1)
    return {'color': Image.fromarray(rgb),
            'normal': Image.fromarray(np.round((normal*.5+.5)*255).astype(np.uint8)),
            'roughness': Image.fromarray(rough_rgb)}


def descriptor(path, size, channel):
    return {'url': path.relative_to(SITE).as_posix(), 'width': size,
            'height': size, 'bytes': path.stat().st_size,
            'sha256': hashlib.sha256(path.read_bytes()).hexdigest(),
            'colorSpace': 'srgb' if channel == 'color' else 'linear'}


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    manifest = {'schema': 'he-quality-surfaces/1', 'version': 'analytic-1024-v1',
                'startedUTC': START, 'seed': SEED, 'nativeSize': SIZE,
                'provenance': 'Original analytic authored channels; not scanned or measured material data.',
                'normalConvention': 'OpenGL tangent +Y; derived from authored height, independent of albedo.',
                'encoder': 'KTX Software 4.4.2 toktx UASTC quality 2 + zstd 10; Pillow AVIF speed 6 4:4:4',
                'roles': {}, 'timings': timings}
    for role, scale in ROLES.items():
        t = time.perf_counter()
        images = channels(role)
        folder = OUT/role
        folder.mkdir(exist_ok=True)
        ref = {}
        for channel, image in images.items():
            path = folder/f'ref-{channel}.png'
            image.save(path, compress_level=9)
            ref[channel] = descriptor(path, SIZE, channel)
        timings.append({'role': role, 'step': 'authored-channel-generation', 'seconds': time.perf_counter()-t})
        tiers = {'reference': {'channels': ref, 'factor': 'lossless native authored channels'}}
        for quality in (90, 80):
            t = time.perf_counter()
            path = folder/f'avif{quality}-color.avif'
            images['color'].save(path, quality=quality, speed=6, subsampling='4:4:4', max_threads=2)
            tiers[f'avif{quality}'] = {'channels': {**ref, 'color': descriptor(path, SIZE, 'color')},
                                      'factor': 'color encoding only; lossless reference normal/roughness unchanged'}
            timings.append({'role': role, 'step': f'avif{quality}', 'seconds': time.perf_counter()-t})
        for size in (1024, 512):
            cs = {}
            for channel, im in images.items():
                png = folder/f'input-{size}-{channel}.png'
                resized = im.resize((size, size), Image.Resampling.LANCZOS)
                if channel == 'normal':
                    n = np.asarray(resized, float)/127.5-1
                    n /= np.maximum(np.linalg.norm(n, axis=-1, keepdims=True), 1e-8)
                    resized = Image.fromarray(np.clip(np.round((n*.5+.5)*255), 0, 255).astype(np.uint8))
                resized.save(png)
                output = folder/f'uastc{size}-{channel}.ktx2'
                args = [str(KTX), '--t2', '--genmipmap', '--lower_left_maps_to_s0t0',
                        '--assign_oetf', 'srgb' if channel == 'color' else 'linear',
                        '--threads', '2', '--encode', 'uastc', '--uastc_quality', '2',
                        '--zcmp', '10', str(output), str(png)]
                t = time.perf_counter()
                result = subprocess.run(args, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
                if result.returncode:
                    raise RuntimeError(result.stdout)
                timings.append({'role': role, 'step': f'uastc{size}', 'channel': channel,
                                'seconds': time.perf_counter()-t,
                                'command': ['tools/KTX-Software-4.4.2-Linux-x86_64/bin/toktx', *[a.replace(str(ROOT), '.') for a in args[1:]]]})
                cs[channel] = descriptor(output, size, channel)
                png.unlink()  # Reproducible temporary encoder input, not a public dependency.
            tiers[f'uastc{size}'] = {'channels': cs,
                                   'factor': f'all three channels UASTC {size}; resolution and encoding when 512'}
        manifest['roles'][role] = {'tileMetres': scale, 'alpha': role == 'leaf', 'tiers': tiers}
        manifest['finishedUTC'] = datetime.now(timezone.utc).isoformat()
        (OUT/'manifest.json').write_text(json.dumps(manifest, indent=2)+'\n')
        print(role, 'complete', flush=True)
    manifest['scriptSha256'] = hashlib.sha256(Path(__file__).read_bytes()).hexdigest()
    manifest['elapsedSeconds'] = sum(r['seconds'] for r in timings)
    (OUT/'manifest.json').write_text(json.dumps(manifest, indent=2)+'\n')
    print('All 5 roles and 5 tiers ready:', OUT/'manifest.json', flush=True)


if __name__ == '__main__':
    main()
