var ef=0,Xl=1,nf=2;var So=1,Ya=2,lr=3,Nn=0,ke=1,Je=2,ti=0,hr=1,ql=2,Yl=3,Jl=4,sf=5;var os=100,rf=101,of=102,af=103,cf=104,lf=200,hf=201,uf=202,ff=203,Zl=204,$l=205,df=206,Af=207,pf=208,mf=209,gf=210,_f=211,xf=212,yf=213,Ef=214,Sa=0,Ma=1,va=2,Ks=3,Ca=4,Ia=5,ba=6,wa=7,Ja=0,Sf=1,Mf=2,On=0,jl=1,th=2,eh=3,Mo=4,nh=5,vo=6,Co=7;var ih=300,gi=301,as=302,ur=303,Za=304,Io=306,Xs=1e3,hn=1001,Ta=1002,De=1003,$a=1004;var bo=1005;var ae=1006,ja=1007;var wn=1008;var Qt=1009,sh=1010,rh=1011,_i=1012,tc=1013,Qn=1014,ve=1015,Ee=1016,ec=1017,nc=1018,fr=1020,dr=35902,Ar=35899,oh=1021,cs=1022,Oe=1023,qn=1026,Gi=1027,ei=1028,ic=1029,mn=1030,sc=1031;var rc=1033,ki=33776,xi=33777,wo=33778,yi=33779,pr=35840,oc=35841,Vi=35842,ls=35843,mr=36196,hs=37492,us=37496,gr=37488,_r=37489,fs=37490,xr=37491,Ei=37808,ac=37809,cc=37810,lc=37811,Hi=37812,hc=37813,uc=37814,fc=37815,dc=37816,Ac=37817,pc=37818,mc=37819,gc=37820,_c=37821,zi=36492,xc=36494,yr=36495,Er=36283,Sr=36284,ds=36285,Mr=36286;var to=2300,Ba=2301,ya=2302,Ol=2303,Ql=2400,Gl=2401,kl=2402;var vf=3200;var To=0,Cf=1,gn="",be="srgb",Ai="srgb-linear",qs="linear",se="srgb";var Ea=7680;var If=519,bf=512,wf=513,Tf=514,yc=515,Bf=516,Rf=517,Ec=518,Df=519,Ff=35044;var ah="300 es",Pn=2e3,Ys=2001;function Bp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Rp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Lf(){let i=Js("canvas");return i.style.display="block",i}var bu={},Zs=null;function ch(...i){let t="THREE."+i.shift();Zs?Zs("log",t,...i):console.log(t,...i)}function Pf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ft(...i){i=Pf(i);let t="THREE."+i.shift();if(Zs)Zs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ut(...i){i=Pf(i);let t="THREE."+i.shift();if(Zs)Zs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ns(...i){let t=i.join(" ");t in bu||(bu[t]=!0,Ft(...i))}function Uf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Nf={[Sa]:Ma,[va]:ba,[Ca]:wa,[Ks]:Ia,[Ma]:Sa,[ba]:va,[wa]:Ca,[Ia]:Ks},Yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wu=1234567,$r=Math.PI/180,$s=180/Math.PI;function vr(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function Vt(i,t,e){return Math.max(t,Math.min(e,i))}function lh(i,t){return(i%t+t)%t}function Dp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Fp(i,t,e){return i!==t?(e-i)/(t-i):0}function jr(i,t,e){return(1-e)*i+e*t}function Lp(i,t,e,n){return jr(i,t,1-Math.exp(-e*n))}function Pp(i,t=1){return t-Math.abs(lh(i,t*2)-t)}function Up(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Np(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Op(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Qp(i,t){return i+Math.random()*(t-i)}function Gp(i){return i*(.5-Math.random())}function kp(i){i!==void 0&&(wu=i);let t=wu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vp(i){return i*$r}function Hp(i){return i*$s}function zp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Wp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Kp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Xp(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),u=o((t+n)/2),f=r((t-n)/2),h=o((t-n)/2),d=r((n-t)/2),m=o((n-t)/2);switch(s){case"XYX":i.set(a*u,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*u,a*l);break;default:Ft("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function cn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ce={DEG2RAD:$r,RAD2DEG:$s,generateUUID:vr,clamp:Vt,euclideanModulo:lh,mapLinear:Dp,inverseLerp:Fp,lerp:jr,damp:Lp,pingpong:Pp,smoothstep:Up,smootherstep:Np,randInt:Op,randFloat:Qp,randFloatSpread:Gp,seededRandom:kp,degToRad:Vp,radToDeg:Hp,isPowerOfTwo:zp,ceilPowerOfTwo:Wp,floorPowerOfTwo:Kp,setQuaternionFromProperEuler:Xp,normalize:cn,denormalize:Hs},Gt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},In=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],m=r[o+2],_=r[o+3];if(f!==_||c!==h||l!==d||u!==m){let p=c*h+l*d+u*m+f*_;p<0&&(h=-h,d=-d,m=-m,_=-_,p=-p);let A=1-a;if(p<.9995){let y=Math.acos(p),I=Math.sin(y);A=Math.sin(A*y)/I,a=Math.sin(a*y)/I,c=c*A+h*a,l=l*A+d*a,u=u*A+m*a,f=f*A+_*a}else{c=c*A+h*a,l=l*A+d*a,u=u*A+m*a,f=f*A+_*a;let y=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=y,l*=y,u*=y,f*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],m=r[o+3];return t[e]=a*m+u*f+c*d-l*h,t[e+1]=c*m+u*h+l*f-a*d,t[e+2]=l*m+u*d+a*h-c*f,t[e+3]=u*m-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(s/2),f=a(r/2),h=c(n/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"YZX":this._x=h*u*f+l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f-h*d*m;break;case"XZY":this._x=h*u*f-l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f+h*d*m;break;default:Ft("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Vt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+s*l-r*c,this._y=s*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-s*a,this._w=o*u-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+c*l+o*f-a*u,this.y=n+c*u+a*l-r*f,this.z=s+c*f+r*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dl.copy(this).projectOnVector(t),this.sub(dl)}reflect(t){return this.sub(dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Vt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dl=new U,Tu=new In,Ot=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],_=s[0],p=s[3],A=s[6],y=s[1],I=s[4],x=s[7],E=s[2],M=s[5],w=s[8];return r[0]=o*_+a*y+c*E,r[3]=o*p+a*I+c*M,r[6]=o*A+a*x+c*w,r[1]=l*_+u*y+f*E,r[4]=l*p+u*I+f*M,r[7]=l*A+u*x+f*w,r[2]=h*_+d*y+m*E,r[5]=h*p+d*I+m*M,r[8]=h*A+d*x+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,m=e*f+n*h+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=f*_,t[1]=(s*l-u*n)*_,t[2]=(a*n-s*o)*_,t[3]=h*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=d*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Al.makeScale(t,e)),this}rotate(t){return ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Al.makeRotation(-t)),this}translate(t,e){return ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Al.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Al=new Ot,Bu=new Ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ru=new Ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qp(){let i={enabled:!0,workingColorSpace:Ai,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===se&&(s.r=di(s.r),s.g=di(s.g),s.b=di(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===se&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===gn?qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ai]:{primaries:t,whitePoint:n,transfer:qs,toXYZ:Bu,fromXYZ:Ru,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:t,whitePoint:n,transfer:se,toXYZ:Bu,fromXYZ:Ru,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:be}}}),i}var Jt=qp();function di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function zs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Is,Ra=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Is===void 0&&(Is=Js("canvas")),Is.width=t.width,Is.height=t.height;let s=Is.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Is}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Js("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=di(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(di(e[n]/255)*255):e[n]=di(e[n]);return{data:e,width:t.width,height:t.height}}else return Ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yp=0,js=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yp++}),this.uuid=vr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(pl(s[o].image)):r.push(pl(s[o]))}else r=pl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function pl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ra.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ft("Texture: Unable to serialize Texture."),{})}var Jp=0,ml=new U,sn=class i extends Yn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=hn,s=hn,r=ae,o=wn,a=Oe,c=Qt,l=i.DEFAULT_ANISOTROPY,u=gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=vr(),this.name="",this.source=new js(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Gt(0,0),this.repeat=new Gt(1,1),this.center=new Gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ml).x}get height(){return this.source.getSize(ml).y}get depth(){return this.source.getSize(ml).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ft(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ih)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xs:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xs:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=ih;sn.DEFAULT_ANISOTROPY=1;var Se=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],m=c[9],_=c[2],p=c[6],A=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+A-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(l+1)/2,x=(d+1)/2,E=(A+1)/2,M=(u+h)/4,w=(f+_)/4,g=(m+p)/4;return I>x&&I>E?I<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(I),s=M/n,r=w/n):x>E?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=M/s,r=g/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=w/r,s=g/r),this.set(n,s,r,e),this}let y=Math.sqrt((p-m)*(p-m)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(f-_)/y,this.z=(h-u)/y,this.w=Math.acos((l+d+A-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Vt(this.x,t.x,e.x),this.y=Vt(this.y,t.y,e.y),this.z=Vt(this.z,t.z,e.z),this.w=Vt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Vt(this.x,t,e),this.y=Vt(this.y,t,e),this.z=Vt(this.z,t,e),this.w=Vt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Vt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Da=class extends Yn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ae,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new sn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ae,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new js(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pn=class extends Da{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},eo=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var tr=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ht=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,o,a,c,l,u,f,h,d,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,u,f,h,d,m,_,p)}set(t,e,n,s,r,o,a,c,l,u,f,h,d,m,_,p){let A=this.elements;return A[0]=t,A[4]=e,A[8]=n,A[12]=s,A[1]=r,A[5]=o,A[9]=a,A[13]=c,A[2]=l,A[6]=u,A[10]=f,A[14]=h,A[3]=d,A[7]=m,A[11]=_,A[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/bs.setFromMatrixColumn(t,0).length(),r=1/bs.setFromMatrixColumn(t,1).length(),o=1/bs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,d=o*f,m=a*u,_=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+m*l,e[5]=h-_*l,e[9]=-a*c,e[2]=_-h*l,e[6]=m+d*l,e[10]=o*c}else if(t.order==="YXZ"){let h=c*u,d=c*f,m=l*u,_=l*f;e[0]=h+_*a,e[4]=m*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=_+h*a,e[10]=o*c}else if(t.order==="ZXY"){let h=c*u,d=c*f,m=l*u,_=l*f;e[0]=h-_*a,e[4]=-o*f,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=_-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let h=o*u,d=o*f,m=a*u,_=a*f;e[0]=c*u,e[4]=m*l-d,e[8]=h*l+_,e[1]=c*f,e[5]=_*l+h,e[9]=d*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let h=o*c,d=o*l,m=a*c,_=a*l;e[0]=c*u,e[4]=_-h*f,e[8]=m*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+m,e[10]=h-_*f}else if(t.order==="XZY"){let h=o*c,d=o*l,m=a*c,_=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+_,e[5]=o*u,e[9]=d*f-m,e[2]=m*f-d,e[6]=a*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zp,t,$p)}lookAt(t,e,n){let s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),wi.crossVectors(n,xn),wi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),wi.crossVectors(n,xn)),wi.normalize(),jo.crossVectors(xn,wi),s[0]=wi.x,s[4]=jo.x,s[8]=xn.x,s[1]=wi.y,s[5]=jo.y,s[9]=xn.y,s[2]=wi.z,s[6]=jo.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],_=n[6],p=n[10],A=n[14],y=n[3],I=n[7],x=n[11],E=n[15],M=s[0],w=s[4],g=s[8],v=s[12],C=s[1],B=s[5],R=s[9],D=s[13],b=s[2],F=s[6],P=s[10],O=s[14],W=s[3],N=s[7],G=s[11],H=s[15];return r[0]=o*M+a*C+c*b+l*W,r[4]=o*w+a*B+c*F+l*N,r[8]=o*g+a*R+c*P+l*G,r[12]=o*v+a*D+c*O+l*H,r[1]=u*M+f*C+h*b+d*W,r[5]=u*w+f*B+h*F+d*N,r[9]=u*g+f*R+h*P+d*G,r[13]=u*v+f*D+h*O+d*H,r[2]=m*M+_*C+p*b+A*W,r[6]=m*w+_*B+p*F+A*N,r[10]=m*g+_*R+p*P+A*G,r[14]=m*v+_*D+p*O+A*H,r[3]=y*M+I*C+x*b+E*W,r[7]=y*w+I*B+x*F+E*N,r[11]=y*g+I*R+x*P+E*G,r[15]=y*v+I*D+x*O+E*H,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],m=t[3],_=t[7],p=t[11],A=t[15],y=c*d-l*h,I=a*d-l*f,x=a*h-c*f,E=o*d-l*u,M=o*h-c*u,w=o*f-a*u;return e*(_*y-p*I+A*x)-n*(m*y-p*E+A*M)+s*(m*I-_*E+A*w)-r*(m*x-_*M+p*w)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],u=t[10];return e*(o*u-a*l)-n*(r*u-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],m=t[12],_=t[13],p=t[14],A=t[15],y=e*a-n*o,I=e*c-s*o,x=e*l-r*o,E=n*c-s*a,M=n*l-r*a,w=s*l-r*c,g=u*_-f*m,v=u*p-h*m,C=u*A-d*m,B=f*p-h*_,R=f*A-d*_,D=h*A-d*p,b=y*D-I*R+x*B+E*C-M*v+w*g;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/b;return t[0]=(a*D-c*R+l*B)*F,t[1]=(s*R-n*D-r*B)*F,t[2]=(_*w-p*M+A*E)*F,t[3]=(h*M-f*w-d*E)*F,t[4]=(c*C-o*D-l*v)*F,t[5]=(e*D-s*C+r*v)*F,t[6]=(p*x-m*w-A*I)*F,t[7]=(u*w-h*x+d*I)*F,t[8]=(o*R-a*C+l*g)*F,t[9]=(n*C-e*R-r*g)*F,t[10]=(m*M-_*x+A*y)*F,t[11]=(f*x-u*M-d*y)*F,t[12]=(a*v-o*B-c*g)*F,t[13]=(e*B-n*v+s*g)*F,t[14]=(_*I-m*E-p*y)*F,t[15]=(u*E-f*I+h*y)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,u*a+n,u*c-s*o,0,l*c-s*a,u*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,m=r*f,_=o*u,p=o*f,A=a*f,y=c*l,I=c*u,x=c*f,E=n.x,M=n.y,w=n.z;return s[0]=(1-(_+A))*E,s[1]=(d+x)*E,s[2]=(m-I)*E,s[3]=0,s[4]=(d-x)*M,s[5]=(1-(h+A))*M,s[6]=(p+y)*M,s[7]=0,s[8]=(m+I)*w,s[9]=(p-y)*w,s[10]=(1-(h+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=bs.set(s[0],s[1],s[2]).length(),a=bs.set(s[4],s[5],s[6]).length(),c=bs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Dn.copy(this);let l=1/o,u=1/a,f=1/c;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,e.setFromRotationMatrix(Dn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Pn,c=!1){let l=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),m,_;if(c)m=r/(o-r),_=o*r/(o-r);else if(a===Pn)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ys)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Pn,c=!1){let l=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),m,_;if(c)m=1/(o-r),_=o/(o-r);else if(a===Pn)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ys)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},bs=new U,Dn=new Ht,Zp=new U(0,0,0),$p=new U(1,1,1),wi=new U,jo=new U,xn=new U,Du=new Ht,Fu=new In,Jn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Vt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Vt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Du,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fu.setFromEuler(this),this.setFromQuaternion(Fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var no=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},jp=0,Lu=new U,ws=new In,ri=new Ht,ta=new U,Kr=new U,tm=new U,em=new In,Pu=new U(1,0,0),Uu=new U(0,1,0),Nu=new U(0,0,1),Ou={type:"added"},nm={type:"removed"},Ts={type:"childadded",child:null},gl={type:"childremoved",child:null},We=class i extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jp++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new Jn,n=new In,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ht},normalMatrix:{value:new Ot}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new no,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(Pu,t)}rotateY(t){return this.rotateOnAxis(Uu,t)}rotateZ(t){return this.rotateOnAxis(Nu,t)}translateOnAxis(t,e){return Lu.copy(t).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pu,t)}translateY(t){return this.translateOnAxis(Uu,t)}translateZ(t){return this.translateOnAxis(Nu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ta.copy(t):ta.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(Kr,ta,this.up):ri.lookAt(ta,Kr,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),ws.setFromRotationMatrix(ri),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ut("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ou),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nm),gl.child=t,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ou),Ts.child=t,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,t,tm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,em,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};We.DEFAULT_UP=new U(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},im={type:"move"},er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),A=this._getHandJoint(l,_);p!==null&&(A.matrix.fromArray(p.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=p.radius),A.visible=p!==null}let u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&h>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(im)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new fi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},ea={h:0,s:0,l:0};function _l(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=lh(t,1),e=Vt(e,0,1),n=Vt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=_l(o,r,t+1/3),this.g=_l(o,r,t),this.b=_l(o,r,t-1/3)}return Jt.colorSpaceToWorking(this,s),this}setStyle(t,e=be){function n(r){r!==void 0&&parseFloat(r)<1&&Ft("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ft("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ft("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let n=Of[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ft("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=di(t.r),this.g=di(t.g),this.b=di(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return Jt.workingToColorSpace(en.copy(this),t),Math.round(Vt(en.r*255,0,255))*65536+Math.round(Vt(en.g*255,0,255))*256+Math.round(Vt(en.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.workingToColorSpace(en.copy(this),e);let n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Jt.workingColorSpace){return Jt.workingToColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=be){Jt.workingToColorSpace(en.copy(this),t);let e=en.r,n=en.g,s=en.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ti),this.setHSL(Ti.h+t,Ti.s+e,Ti.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ti),t.getHSL(ea);let n=jr(Ti.h,ea.h,e),s=jr(Ti.s,ea.s,e),r=jr(Ti.l,ea.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new kt;kt.NAMES=Of;var is=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Fn=new U,oi=new U,xl=new U,ai=new U,Bs=new U,Rs=new U,Qu=new U,yl=new U,El=new U,Sl=new U,Ml=new Se,vl=new Se,Cl=new Se,nn=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Fn.subVectors(t,e),s.cross(Fn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Fn.subVectors(s,e),oi.subVectors(n,e),xl.subVectors(t,e);let o=Fn.dot(Fn),a=Fn.dot(oi),c=Fn.dot(xl),l=oi.dot(oi),u=oi.dot(xl),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(l*c-a*u)*h,m=(o*u-a*c)*h;return r.set(1-d-m,m,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ai.x),c.addScaledVector(o,ai.y),c.addScaledVector(a,ai.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ml.setScalar(0),vl.setScalar(0),Cl.setScalar(0),Ml.fromBufferAttribute(t,e),vl.fromBufferAttribute(t,n),Cl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ml,r.x),o.addScaledVector(vl,r.y),o.addScaledVector(Cl,r.z),o}static isFrontFacing(t,e,n,s){return Fn.subVectors(n,e),oi.subVectors(t,e),Fn.cross(oi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Fn.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Bs.subVectors(s,n),Rs.subVectors(r,n),yl.subVectors(t,n);let c=Bs.dot(yl),l=Rs.dot(yl);if(c<=0&&l<=0)return e.copy(n);El.subVectors(t,s);let u=Bs.dot(El),f=Rs.dot(El);if(u>=0&&f<=u)return e.copy(s);let h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(Bs,o);Sl.subVectors(t,r);let d=Bs.dot(Sl),m=Rs.dot(Sl);if(m>=0&&d<=m)return e.copy(r);let _=d*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Rs,a);let p=u*m-d*f;if(p<=0&&f-u>=0&&d-m>=0)return Qu.subVectors(r,s),a=(f-u)/(f-u+(d-m)),e.copy(s).addScaledVector(Qu,a);let A=1/(p+_+h);return o=_*A,a=h*A,e.copy(n).addScaledVector(Bs,o).addScaledVector(Rs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},fe=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),na.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),na.copy(n.boundingBox)),na.applyMatrix4(t.matrixWorld),this.union(na)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xr),ia.subVectors(this.max,Xr),Ds.subVectors(t.a,Xr),Fs.subVectors(t.b,Xr),Ls.subVectors(t.c,Xr),Bi.subVectors(Fs,Ds),Ri.subVectors(Ls,Fs),$i.subVectors(Ds,Ls);let e=[0,-Bi.z,Bi.y,0,-Ri.z,Ri.y,0,-$i.z,$i.y,Bi.z,0,-Bi.x,Ri.z,0,-Ri.x,$i.z,0,-$i.x,-Bi.y,Bi.x,0,-Ri.y,Ri.x,0,-$i.y,$i.x,0];return!Il(e,Ds,Fs,Ls,ia)||(e=[1,0,0,0,1,0,0,0,1],!Il(e,Ds,Fs,Ls,ia))?!1:(sa.crossVectors(Bi,Ri),e=[sa.x,sa.y,sa.z],Il(e,Ds,Fs,Ls,ia))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ci),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ci=[new U,new U,new U,new U,new U,new U,new U,new U],Ln=new U,na=new fe,Ds=new U,Fs=new U,Ls=new U,Bi=new U,Ri=new U,$i=new U,Xr=new U,ia=new U,sa=new U,ji=new U;function Il(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ji.fromArray(i,r);let a=s.x*Math.abs(ji.x)+s.y*Math.abs(ji.y)+s.z*Math.abs(ji.z),c=t.dot(ji),l=e.dot(ji),u=n.dot(ji);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var ui=sm();function sm(){let i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function rm(i){Math.abs(i)>65504&&Ft("DataUtils.toHalfFloat(): Value out of range."),i=Vt(i,-65504,65504),ui.floatView[0]=i;let t=ui.uint32View[0],e=t>>23&511;return ui.baseTable[e]+((t&8388607)>>ui.shiftTable[e])}function om(i){let t=i>>10;return ui.uint32View[0]=ui.mantissaTable[ui.offsetTable[t]+(i&1023)]+ui.exponentTable[t],ui.floatView[0]}var Fi=class{static toHalfFloat(t){return rm(t)}static fromHalfFloat(t){return om(t)}},Ne=new U,ra=new Gt,am=0,Re=class extends Yn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:am++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ff,this.updateRanges=[],this.gpuType=ve,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ra.fromBufferAttribute(this,e),ra.applyMatrix3(t),this.setXY(e,ra.x,ra.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=cn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=cn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=cn(e,this.array),n=cn(n,this.array),s=cn(s,this.array),r=cn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var io=class extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var so=class extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ye=class extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}},cm=new fe,qr=new U,bl=new U,Zn=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):cm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qr.subVectors(t,this.center);let e=qr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qr.copy(t.center).add(bl)),this.expandByPoint(qr.copy(t.center).sub(bl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},lm=0,Cn=new Ht,wl=new We,Ps=new U,yn=new fe,Yr=new fe,ze=new U,Ye=class i extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bp(t)?so:io)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ot().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return wl.lookAt(t),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ye(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fe);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Yr.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(yn.min,Yr.min),yn.expandByPoint(ze),ze.addVectors(yn.max,Yr.max),yn.expandByPoint(ze)):(yn.expandByPoint(Yr.min),yn.expandByPoint(Yr.max))}yn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ze.fromBufferAttribute(a,l),c&&(Ps.fromBufferAttribute(t,l),ze.add(Ps)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Re(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let g=0;g<n.count;g++)a[g]=new U,c[g]=new U;let l=new U,u=new U,f=new U,h=new Gt,d=new Gt,m=new Gt,_=new U,p=new U;function A(g,v,C){l.fromBufferAttribute(n,g),u.fromBufferAttribute(n,v),f.fromBufferAttribute(n,C),h.fromBufferAttribute(r,g),d.fromBufferAttribute(r,v),m.fromBufferAttribute(r,C),u.sub(l),f.sub(l),d.sub(h),m.sub(h);let B=1/(d.x*m.y-m.x*d.y);isFinite(B)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(f,-d.y).multiplyScalar(B),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(B),a[g].add(_),a[v].add(_),a[C].add(_),c[g].add(p),c[v].add(p),c[C].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let g=0,v=y.length;g<v;++g){let C=y[g],B=C.start,R=C.count;for(let D=B,b=B+R;D<b;D+=3)A(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let I=new U,x=new U,E=new U,M=new U;function w(g){E.fromBufferAttribute(s,g),M.copy(E);let v=a[g];I.copy(v),I.sub(E.multiplyScalar(E.dot(v))).normalize(),x.crossVectors(M,v);let B=x.dot(c[g])<0?-1:1;o.setXYZW(g,I.x,I.y,I.z,B)}for(let g=0,v=y.length;g<v;++g){let C=y[g],B=C.start,R=C.count;for(let D=B,b=B+R;D<b;D+=3)w(t.getX(D+0)),w(t.getX(D+1)),w(t.getX(D+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,u=new U,f=new U;if(t)for(let h=0,d=t.count;h<d;h+=3){let m=t.getX(h+0),_=t.getX(h+1),p=t.getX(h+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,c){let l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u),d=0,m=0;for(let _=0,p=c.length;_<p;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let A=0;A<u;A++)h[m++]=l[d++]}return new Re(h,u,f)}if(this.index===null)return Ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){let h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){let d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,u=o.length;l<u;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Tl=new U,hm=new U,um=new Ot,ln=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Tl.subVectors(n,e).cross(hm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Tl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||um.getNormalMatrix(t),s=this.coplanarPoint(Tl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},fm=0,pi=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=hr,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zl,this.blendDst=$l,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=If,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ea,this.stencilZFail=Ea,this.stencilZPass=Ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ft(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ft(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Gt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Gt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var li=new U,Bl=new U,oa=new U,aa=new U,nr=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(li.copy(this.origin).addScaledVector(this.direction,e),li.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Bl.copy(t).add(e).multiplyScalar(.5),oa.copy(e).sub(t).normalize(),aa.copy(this.origin).sub(Bl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(oa),a=aa.dot(this.direction),c=-aa.dot(oa),l=aa.lengthSq(),u=Math.abs(1-o*o),f,h,d,m;if(u>0)if(f=o*c-a,h=o*a-c,m=r*u,f>=0)if(h>=-m)if(h<=m){let _=1/u;f*=_,h*=_,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-m?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=m?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Bl).addScaledVector(oa,h),d}intersectSphere(t,e){if(t.radius<0)return null;li.subVectors(t.center,this.origin);let n=li.dot(this.direction),s=li.dot(li)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,li)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,d=t.z-o.z,m=e.x-o.x,_=e.y-o.y,p=e.z-o.z,A=n.x-o.x,y=n.y-o.y,I=n.z-o.z,x=Math.abs(c),E=Math.abs(l),M=Math.abs(u),w,g,v,C,B,R,D,b,F,P,O,W;if(x>=E&&x>=M?(v=c,R=f,F=m,W=A,c>=0?(w=l,g=u,C=h,B=d,D=_,b=p,P=y,O=I):(w=u,g=l,C=d,B=h,D=p,b=_,P=I,O=y)):E>=M?(v=l,R=h,F=_,W=y,l>=0?(w=u,g=c,C=d,B=f,D=p,b=m,P=I,O=A):(w=c,g=u,C=f,B=d,D=m,b=p,P=A,O=I)):(v=u,R=d,F=p,W=I,u>=0?(w=c,g=l,C=f,B=h,D=m,b=_,P=A,O=y):(w=l,g=c,C=h,B=f,D=_,b=m,P=y,O=A)),v===0)return null;let N=w/v,G=g/v,H=1/v,$=C-N*R,it=B-G*R,wt=D-N*F,_t=b-G*F,Tt=P-N*W,Y=O-G*W,tt=Tt*_t-Y*wt,rt=$*Y-it*Tt,yt=wt*it-_t*$;if(s){if(tt<0||rt<0||yt<0)return null}else if((tt<0||rt<0||yt<0)&&(tt>0||rt>0||yt>0))return null;let ct=tt+rt+yt;if(ct===0)return null;let Ct=H*(tt*R+rt*F+yt*W);return(ct>0?Ct<0:Ct>0)?null:this.at(Ct/ct,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ro=class extends pi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gu=new Ht,ts=new nr,ca=new Zn,ku=new U,la=new U,ha=new U,ua=new U,Rl=new U,fa=new U,Vu=new U,da=new U,ge=class extends We{constructor(t=new Ye,e=new ro){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){fa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],f=r[c];u!==0&&(Rl.fromBufferAttribute(f,t),o?fa.addScaledVector(Rl,u):fa.addScaledVector(Rl.sub(e),u))}e.add(fa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ca.copy(n.boundingSphere),ca.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(ca.containsPoint(ts.origin)===!1&&(ts.intersectSphere(ca,ku)===null||ts.origin.distanceToSquared(ku)>(t.far-t.near)**2))&&(Gu.copy(r).invert(),ts.copy(t.ray).applyMatrix4(Gu),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){let p=h[m],A=o[p.materialIndex],y=Math.max(p.start,d.start),I=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,E=I;x<E;x+=3){let M=a.getX(x),w=a.getX(x+1),g=a.getX(x+2);s=Aa(this,A,t,n,l,u,f,M,w,g),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let p=m,A=_;p<A;p+=3){let y=a.getX(p),I=a.getX(p+1),x=a.getX(p+2);s=Aa(this,o,t,n,l,u,f,y,I,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=h.length;m<_;m++){let p=h[m],A=o[p.materialIndex],y=Math.max(p.start,d.start),I=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,E=I;x<E;x+=3){let M=x,w=x+1,g=x+2;s=Aa(this,A,t,n,l,u,f,M,w,g),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let p=m,A=_;p<A;p+=3){let y=p,I=p+1,x=p+2;s=Aa(this,o,t,n,l,u,f,y,I,x),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function dm(i,t,e,n,s,r,o,a){let c;if(t.side===ke?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Nn,a),c===null)return null;da.copy(a),da.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(da);return l<e.near||l>e.far?null:{distance:l,point:da.clone(),object:i}}function Aa(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,la),i.getVertexPosition(c,ha),i.getVertexPosition(l,ua);let u=dm(i,t,e,n,la,ha,ua,Vu);if(u){let f=new U;nn.getBarycoord(Vu,la,ha,ua,f),s&&(u.uv=nn.getInterpolatedAttribute(s,a,c,l,f,new Gt)),r&&(u.uv1=nn.getInterpolatedAttribute(r,a,c,l,f,new Gt)),o&&(u.normal=nn.getInterpolatedAttribute(o,a,c,l,f,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new U,materialIndex:0};nn.getNormal(la,ha,ua,h.normal),u.face=h,u.barycoord=f}return u}var Un=class extends sn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=De,u=De,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ir=class extends Re{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Us=new Ht,Hu=new Ht,pa=[],zu=new fe,Am=new Ht,Jr=new ge,Zr=new Zn,oo=class extends ge{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ir(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Am)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new fe),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),zu.copy(t.boundingBox).applyMatrix4(Us),this.boundingBox.union(zu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Zn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Us),Zr.copy(t.boundingSphere).applyMatrix4(Us),this.boundingSphere.union(Zr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Jr.geometry=this.geometry,Jr.material=this.material,Jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zr.copy(this.boundingSphere),Zr.applyMatrix4(n),t.ray.intersectsSphere(Zr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Us),Hu.multiplyMatrices(n,Us),Jr.matrixWorld=Hu,Jr.raycast(t,pa);for(let o=0,a=pa.length;o<a;o++){let c=pa[o];c.instanceId=r,c.object=this,e.push(c)}pa.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ir(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Un(new Float32Array(s*this.count),s,this.count,ei,ve));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;return r[c]=a,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},es=new Zn,pm=new Gt(.5,.5),ma=new U,sr=class{constructor(t=new ln,e=new ln,n=new ln,s=new ln,r=new ln,o=new ln){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],u=r[4],f=r[5],h=r[6],d=r[7],m=r[8],_=r[9],p=r[10],A=r[11],y=r[12],I=r[13],x=r[14],E=r[15];if(s[0].setComponents(l-o,d-u,A-m,E-y).normalize(),s[1].setComponents(l+o,d+u,A+m,E+y).normalize(),s[2].setComponents(l+a,d+f,A+_,E+I).normalize(),s[3].setComponents(l-a,d-f,A-_,E-I).normalize(),n)s[4].setComponents(c,h,p,x).normalize(),s[5].setComponents(l-c,d-h,A-p,E-x).normalize();else if(s[4].setComponents(l-c,d-h,A-p,E-x).normalize(),e===Pn)s[5].setComponents(l+c,d+h,A+p,E+x).normalize();else if(e===Ys)s[5].setComponents(c,h,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){es.center.set(0,0,0);let e=pm.distanceTo(t.center);return es.radius=.7071067811865476+e,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ma.x=s.normal.x>0?t.max.x:t.min.x,ma.y=s.normal.y>0?t.max.y:t.min.y,ma.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Li=class extends sn{constructor(t,e,n,s,r,o,a,c,l,u,f,h){super(null,o,a,c,l,u,s,r,f,h),this.isCompressedTexture=!0,this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}},ao=class extends Li{constructor(t,e,n,s,r,o){super(t,e,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=hn,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},co=class extends Li{constructor(t,e,n){super(void 0,t[0].width,t[0].height,e,n,gi),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=t}},lo=class extends sn{constructor(t=[],e=gi,n,s,r,o,a,c,l,u){super(t,e,n,s,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var Pi=class extends sn{constructor(t,e,n=Qn,s,r,o,a=De,c=De,l,u=qn,f=1){if(u!==qn&&u!==Gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new js(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Fa=class extends Pi{constructor(t,e=Qn,n=gi,s,r,o=De,a=De,c,l=qn){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ho=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},bn=class i extends Ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],f=[],h=0,d=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(f,2));function m(_,p,A,y,I,x,E,M,w,g,v){let C=x/w,B=E/g,R=x/2,D=E/2,b=M/2,F=w+1,P=g+1,O=0,W=0,N=new U;for(let G=0;G<P;G++){let H=G*B-D;for(let $=0;$<F;$++){let it=$*C-R;N[_]=it*y,N[p]=H*I,N[A]=b,l.push(N.x,N.y,N.z),N[_]=0,N[p]=0,N[A]=M>0?1:-1,u.push(N.x,N.y,N.z),f.push($/w),f.push(1-G/g),O+=1}}for(let G=0;G<g;G++)for(let H=0;H<w;H++){let $=h+H+F*G,it=h+H+F*(G+1),wt=h+(H+1)+F*(G+1),_t=h+(H+1)+F*G;c.push($,it,_t),c.push(it,wt,_t),W+=6}a.addGroup(d,W,v),d+=W,h+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ss=class i extends Ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],m=0,_=[],p=n/2,A=0;y(),o===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(u),this.setAttribute("position",new ye(f,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(d,2));function y(){let x=new U,E=new U,M=0,w=(e-t)/n;for(let g=0;g<=r;g++){let v=[],C=g/r,B=C*(e-t)+t;for(let R=0;R<=s;R++){let D=R/s,b=D*c+a,F=Math.sin(b),P=Math.cos(b);E.x=B*F,E.y=-C*n+p,E.z=B*P,f.push(E.x,E.y,E.z),x.set(F,w,P).normalize(),h.push(x.x,x.y,x.z),d.push(D,1-C),v.push(m++)}_.push(v)}for(let g=0;g<s;g++)for(let v=0;v<r;v++){let C=_[v][g],B=_[v+1][g],R=_[v+1][g+1],D=_[v][g+1];(t>0||v!==0)&&(u.push(C,B,D),M+=3),(e>0||v!==r-1)&&(u.push(B,R,D),M+=3)}l.addGroup(A,M,0),A+=M}function I(x){let E=m,M=new Gt,w=new U,g=0,v=x===!0?t:e,C=x===!0?1:-1;for(let R=1;R<=s;R++)f.push(0,p*C,0),h.push(0,C,0),d.push(.5,.5),m++;let B=m;for(let R=0;R<=s;R++){let b=R/s*c+a,F=Math.cos(b),P=Math.sin(b);w.x=v*P,w.y=p*C,w.z=v*F,f.push(w.x,w.y,w.z),h.push(0,C,0),M.x=F*.5+.5,M.y=P*.5*C+.5,d.push(M.x,M.y),m++}for(let R=0;R<s;R++){let D=E+R,b=B+R;x===!0?u.push(b,b+1,D):u.push(b+1,b,D),g+=3}l.addGroup(A,g,x===!0?1:2),A+=g}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var rr=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ft("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let u=n[s],h=n[s+1]-u,d=(o-u)/h;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Gt:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],o=[],a=new U,c=new Ht;for(let d=0;d<=t;d++){let m=d/t;s[d]=this.getTangentAt(m,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE,u=Math.abs(s[0].x),f=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),h<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Vt(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Vt(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function hh(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,f){let h=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+f)+(c-a)/f;h*=u,d*=u,s(o,a,h,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var Wu=new U,Ku=new U,Dl=new hh,Fl=new hh,Ll=new hh,$n=class extends rr{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=s[(a-1)%r]:(Ku.subVectors(s[0],s[1]).add(s[0]),l=Ku);let f=s[a%r],h=s[(a+1)%r];if(this.closed||a+2<r?u=s[(a+2)%r]:(Wu.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Wu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),p=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),m<1e-4&&(m=_),p<1e-4&&(p=_),Dl.initNonuniformCatmullRom(l.x,f.x,h.x,u.x,m,_,p),Fl.initNonuniformCatmullRom(l.y,f.y,h.y,u.y,m,_,p),Ll.initNonuniformCatmullRom(l.z,f.z,h.z,u.z,m,_,p)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(l.x,f.x,h.x,u.x,this.tension),Fl.initCatmullRom(l.y,f.y,h.y,u.y,this.tension),Ll.initCatmullRom(l.z,f.z,h.z,u.z,this.tension));return n.set(Dl.calc(c),Fl.calc(c),Ll.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var rs=class i extends Ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,u=c+1,f=t/a,h=e/c,d=[],m=[],_=[],p=[];for(let A=0;A<u;A++){let y=A*h-o;for(let I=0;I<l;I++){let x=I*f-r;m.push(x,-y,0),_.push(0,0,1),p.push(I/a),p.push(1-A/c)}}for(let A=0;A<c;A++)for(let y=0;y<a;y++){let I=y+l*A,x=y+l*(A+1),E=y+1+l*(A+1),M=y+1+l*A;d.push(I,x,M),d.push(x,E,M)}this.setIndex(d),this.setAttribute("position",new ye(m,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var uo=class i extends Ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],u=[],f=[],h=new U,d=new U,m=new U;for(let _=0;_<=n;_++){let p=o+_/n*a;for(let A=0;A<=s;A++){let y=A/s*r;d.x=(t+e*Math.cos(p))*Math.cos(y),d.y=(t+e*Math.cos(p))*Math.sin(y),d.z=e*Math.sin(p),l.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),m.subVectors(d,h).normalize(),u.push(m.x,m.y,m.z),f.push(A/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=s;p++){let A=(s+1)*_+p-1,y=(s+1)*(_-1)+p-1,I=(s+1)*(_-1)+p,x=(s+1)*_+p;c.push(A,y,x),c.push(y,I,x)}this.setIndex(c),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function As(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Xu(s))s.isRenderTargetTexture?(Ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Xu(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function rn(i){let t={};for(let e=0;e<i.length;e++){let n=As(i[e]);for(let s in n)t[s]=n[s]}return t}function Xu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function mm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}var Qf={clone:As,merge:rn},gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_m=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends pi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gm,this.fragmentShader=_m,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=As(t.uniforms),this.uniformsGroups=mm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new kt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ot().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ht().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},La=class extends En{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},mi=class extends pi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=To,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},fo=class extends mi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Vt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new kt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new kt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new kt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Ao=class extends pi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=To,this.normalScale=new Gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Ja,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Pa=class extends pi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ua=class extends pi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ns(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Pl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ui=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Na=class extends Ui{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ql,endingEnd:Ql}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Gl:r=t,a=2*e-n;break;case kl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gl:o=t,c=2*n-e;break;case kl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-e)/(s-e),_=m*m,p=_*m,A=-h*p+2*h*_-h*m,y=(1+h)*p+(-1.5-2*h)*_+(-.5+h)*m+1,I=(-1-d)*p+(1.5+d)*_+.5*m,x=d*p-d*_;for(let E=0;E!==a;++E)r[E]=A*o[u+E]+y*o[l+E]+I*o[c+E]+x*o[f+E];return r}},Oa=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[l+h]*f+o[c+h]*u;return r}},Qa=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ga=class extends Ui{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let m=(n-e)/(s-e),_=1-m;for(let p=0;p!==a;++p)r[p]=o[l+p]*_+o[c+p]*m;return r}let h=a*2,d=t-1;for(let m=0;m!==a;++m){let _=o[l+m],p=o[c+m],A=d*h+m*2,y=f[A],I=f[A+1],x=t*h+m*2,E=u[x],M=u[x+1],w=ym(n,e,y,E,s);r[m]=Gf(w,_,I,M,p)}return r}};function Gf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function xm(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ym(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Gf(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=xm(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ns(e,this.TimeBufferType),this.values=Ns(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ns(t.times,Array),values:Ns(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Pl(t.settings)&&(n.settings={inTangents:Ns(t.settings.inTangents,Array),outTangents:Ns(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Na(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ga(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case to:e=this.InterpolantFactoryMethodDiscrete;break;case Ba:e=this.InterpolantFactoryMethodLinear;break;case ya:e=this.InterpolantFactoryMethodSmooth;break;case Ol:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ft("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return Ba;case this.InterpolantFactoryMethodSmooth:return ya;case this.InterpolantFactoryMethodBezier:return Ol}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Pl(this.settings)&&(qu(this.settings.inTangents,t),qu(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ut("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ut("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Ut("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Ut("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&Rp(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Ut("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ya,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],u=t[a+1];if(l!==u&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*n,h=f-n,d=f+n;for(let m=0;m!==n;++m){let _=e[f+m];if(_!==e[h+m]||_!==e[d+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Pl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function qu(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Sn.prototype.ValueTypeName="";Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Ba;var Ni=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=to;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};ka.prototype.ValueTypeName="color";var Va=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};Va.prototype.ValueTypeName="number";var Ha=class extends Ui{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let u=l+a;l!==u;l+=4)In.slerpFlat(r,0,o,l-a,o,l,c);return r}},po=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ha(this.times,this.values,this.getValueSize(),t)}};po.prototype.ValueTypeName="quaternion";po.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends Sn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=to;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends Sn{constructor(t,e,n,s){super(t,e,n,s)}};za.prototype.ValueTypeName="vector";var Ws={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Yu(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Yu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Yu(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Wa=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){let f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){let d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kf=new Wa,jn=class{constructor(t){this.manager=t!==void 0?t:kf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};jn.DEFAULT_MATERIAL_NAME="__DEFAULT";var hi={},Vl=class extends Error{constructor(t,e){super(t),this.response=e}},Qi=class extends jn{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Ws.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(hi[t]!==void 0){hi[t].push({onLoad:e,onProgress:n,onError:s});return}hi[t]=[],hi[t].push({onLoad:e,onProgress:n,onError:s});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ft("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=hi[t],f=l.body.getReader(),h=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0,_=0,p=new ReadableStream({start(A){y();function y(){f.read().then(({done:I,value:x})=>{if(I)A.close();else{_+=x.byteLength;let E=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:d});for(let M=0,w=u.length;M<w;M++){let g=u[M];g.onProgress&&g.onProgress(E)}A.enqueue(x),y()}},I=>{A.error(I)})}}});return new Response(p)}else throw new Vl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a==="")return l.text();{let f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{Ws.add(`file:${t}`,l);let u=hi[t];delete hi[t];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{let u=hi[t];if(u===void 0)throw this.manager.itemError(t),l;delete hi[t];for(let f=0,h=u.length;f<h;f++){let d=u[f];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Os=new WeakMap,Ka=class extends jn{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Ws.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let f=Os.get(o);f===void 0&&(f=[],Os.set(o,f)),f.push({onLoad:e,onError:s})}return o}let a=Js("img");function c(){u(),e&&e(this);let f=Os.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}Os.delete(this),r.manager.itemEnd(t)}function l(f){u(),s&&s(f),Ws.remove(`image:${t}`);let h=Os.get(this)||[];for(let d=0;d<h.length;d++){let m=h[d];m.onError&&m.onError(f)}Os.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ws.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var mo=class extends jn{constructor(t){super(t)}load(t,e,n,s){let r=this,o=new Un,a=new Qi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(t,function(c){let l;try{l=r.parse(c)}catch(u){s!==void 0?s(u):Ut(u);return}r._applyTexData(o,l),e&&e(o,l)},n,s),o}createDataTexture(t){let e=new Un;return this._applyTexData(e,this.parse(t)),e}_applyTexData(t,e){e.image!==void 0?t.image=e.image:e.data!==void 0&&(t.image.width=e.width,t.image.height=e.height,t.image.data=e.data),t.wrapS=e.wrapS!==void 0?e.wrapS:hn,t.wrapT=e.wrapT!==void 0?e.wrapT:hn,t.magFilter=e.magFilter!==void 0?e.magFilter:ae,t.minFilter=e.minFilter!==void 0?e.minFilter:ae,t.anisotropy=e.anisotropy!==void 0?e.anisotropy:1,e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.mipmaps!==void 0&&(t.mipmaps=e.mipmaps,t.minFilter=wn),e.mipmapCount===1&&(t.minFilter=ae),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),t.needsUpdate=!0}},go=class extends jn{constructor(t){super(t)}load(t,e,n,s){let r=new sn,o=new Ka(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},or=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},_o=class extends or{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Ul=new Ht,Ju=new U,Zu=new U,xo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Gt(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sr,this._frameExtents=new Gt(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Ju.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ju),Zu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ul,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Ys||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ga=new U,_a=new In,Xn=new U,yo=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ga,_a,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ga,_a,Xn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ga,_a,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ga,_a,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Di=new U,$u=new Gt,ju=new Gt,qe=class extends yo{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=$s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $s*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Di.x,Di.y).multiplyScalar(-t/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-t/Di.z)}getViewSize(t,e){return this.getViewBounds(t,$u,ju),e.subVectors(ju,$u)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($r*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Hl=class extends xo{constructor(){super(new qe(90,1,.5,500)),this.isPointLightShadow=!0}},Eo=class extends or{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Hl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},ar=class extends yo{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},zl=class extends xo{constructor(){super(new ar(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends or{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new zl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Qs=-90,Gs=1,Xa=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(Qs,Gs,t,e);s.layers=this.layers,this.add(s);let r=new qe(Qs,Gs,t,e);r.layers=this.layers,this.add(r);let o=new qe(Qs,Gs,t,e);o.layers=this.layers,this.add(o);let a=new qe(Qs,Gs,t,e);a.layers=this.layers,this.add(a);let c=new qe(Qs,Gs,t,e);c.layers=this.layers,this.add(c);let l=new qe(Qs,Gs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ys)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},qa=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var fh="\\[\\]\\.:\\/",Em=new RegExp("["+fh+"]","g"),dh="[^"+fh+"]",Sm="[^"+fh.replace("\\.","")+"]",Mm=/((?:WC+[\/:])*)/.source.replace("WC",dh),vm=/(WCOD+)?/.source.replace("WCOD",Sm),Cm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dh),Im=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dh),bm=new RegExp("^"+Mm+vm+Cm+Im+"$"),wm=["material","materials","bones","map"],Wl=class{constructor(t,e,n){let s=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Em,"")}static parseTrackName(t){let e=bm.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ft("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ut("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ut("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ut("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ut("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ut("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Ut("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;Ut("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ut("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xe.Composite=Wl;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var LE=new Float32Array(1);var Kl=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var tf=new U,xa=new U,ks=new U,Vs=new U,Nl=new U,Tm=new U,Bm=new U,un=class{constructor(t=new U,e=new U){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){tf.subVectors(t,this.start),xa.subVectors(this.end,this.start);let n=xa.dot(xa);if(n===0)return 0;let r=xa.dot(tf)/n;return e&&(r=Vt(r,0,1)),r}closestPointToPoint(t,e,n){let s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}distanceSqToLine3(t,e=Tm,n=Bm){let s=10000000000000001e-32,r,o,a=this.start,c=t.start,l=this.end,u=t.end;ks.subVectors(l,a),Vs.subVectors(u,c),Nl.subVectors(a,c);let f=ks.dot(ks),h=Vs.dot(Vs),d=Vs.dot(Nl);if(f<=s&&h<=s)return e.copy(a),n.copy(c),e.sub(n),e.dot(e);if(f<=s)r=0,o=d/h,o=Vt(o,0,1);else{let m=ks.dot(Nl);if(h<=s)o=0,r=Vt(-m/f,0,1);else{let _=ks.dot(Vs),p=f*h-_*_;p!==0?r=Vt((_*d-m*h)/p,0,1):r=0,o=(_*r+d)/h,o<0?(o=0,r=Vt(-m/f,0,1)):o>1&&(o=1,r=Vt((_-m)/f,0,1))}}return e.copy(a).addScaledVector(ks,r),n.copy(c).addScaledVector(Vs,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};function Ah(i,t,e,n){let s=Rm(n);switch(e){case oh:return i*t;case ei:return i*t/s.components*s.byteLength;case ic:return i*t/s.components*s.byteLength;case mn:return i*t*2/s.components*s.byteLength;case sc:return i*t*2/s.components*s.byteLength;case cs:return i*t*3/s.components*s.byteLength;case Oe:return i*t*4/s.components*s.byteLength;case rc:return i*t*4/s.components*s.byteLength;case ki:case xi:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case wo:case yi:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oc:case ls:return Math.max(i,16)*Math.max(t,8)/4;case pr:case Vi:return Math.max(i,8)*Math.max(t,8)/2;case mr:case hs:case gr:case _r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case us:case fs:case xr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ei:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case cc:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case lc:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Hi:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case hc:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case uc:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case fc:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case dc:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ac:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case pc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case mc:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case gc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case _c:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zi:case xc:case yr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Er:case Sr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ds:case Mr:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rm(i){switch(i){case Qt:case sh:return{byteLength:1,components:1};case _i:case rh:case Ee:return{byteLength:2,components:1};case ec:case nc:return{byteLength:2,components:4};case Qn:case tc:case ve:return{byteLength:4,components:1};case dr:case Ar:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function ld(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Nm(i){let t=new WeakMap;function e(a,c){let l=a.array,u=a.usage,f=l.byteLength,h=i.createBuffer();i.bindBuffer(c,h),i.bufferData(c,l,u),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let u=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,u);else{f.sort((d,m)=>d.start-m.start);let h=0;for(let d=1;d<f.length;d++){let m=f[h],_=f[d];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++h,f[h]=_)}f.length=h+1;for(let d=0,m=f.length;d<m;d++){let _=f[d];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Om=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Xm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ym=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$m=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ng=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ag=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,hg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ug=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,fg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ag="gl_FragColor = linearToOutputTexel( gl_FragColor );",pg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,gg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_g=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Eg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Bg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Rg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Dg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ug=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Ng=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Og=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Qg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,kg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Wg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$g=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,jg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,t0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,e0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,i0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,s0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,a0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,c0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,l0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,u0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,f0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,A0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,m0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,g0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,E0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,S0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,M0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,v0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,b0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,w0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,T0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,D0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,L0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,N0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,O0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Q0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,G0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,H0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,W0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,K0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,X0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,q0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,r_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,c_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,l_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,d_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,m_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,g_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:Om,alphahash_pars_fragment:Qm,alphamap_fragment:Gm,alphamap_pars_fragment:km,alphatest_fragment:Vm,alphatest_pars_fragment:Hm,aomap_fragment:zm,aomap_pars_fragment:Wm,batching_pars_vertex:Km,batching_vertex:Xm,begin_vertex:qm,beginnormal_vertex:Ym,bsdfs:Jm,iridescence_fragment:Zm,bumpmap_pars_fragment:$m,clipping_planes_fragment:jm,clipping_planes_pars_fragment:tg,clipping_planes_pars_vertex:eg,clipping_planes_vertex:ng,color_fragment:ig,color_pars_fragment:sg,color_pars_vertex:rg,color_vertex:og,common:ag,cube_uv_reflection_fragment:cg,defaultnormal_vertex:lg,displacementmap_pars_vertex:hg,displacementmap_vertex:ug,emissivemap_fragment:fg,emissivemap_pars_fragment:dg,colorspace_fragment:Ag,colorspace_pars_fragment:pg,envmap_fragment:mg,envmap_common_pars_fragment:gg,envmap_pars_fragment:_g,envmap_pars_vertex:xg,envmap_physical_pars_fragment:Bg,envmap_vertex:yg,fog_vertex:Eg,fog_pars_vertex:Sg,fog_fragment:Mg,fog_pars_fragment:vg,gradientmap_pars_fragment:Cg,lightmap_pars_fragment:Ig,lights_lambert_fragment:bg,lights_lambert_pars_fragment:wg,lights_pars_begin:Tg,lights_toon_fragment:Rg,lights_toon_pars_fragment:Dg,lights_phong_fragment:Fg,lights_phong_pars_fragment:Lg,lights_physical_fragment:Pg,lights_physical_pars_fragment:Ug,lights_fragment_begin:Ng,lights_fragment_maps:Og,lights_fragment_end:Qg,lightprobes_pars_fragment:Gg,logdepthbuf_fragment:kg,logdepthbuf_pars_fragment:Vg,logdepthbuf_pars_vertex:Hg,logdepthbuf_vertex:zg,map_fragment:Wg,map_pars_fragment:Kg,map_particle_fragment:Xg,map_particle_pars_fragment:qg,metalnessmap_fragment:Yg,metalnessmap_pars_fragment:Jg,morphinstance_vertex:Zg,morphcolor_vertex:$g,morphnormal_vertex:jg,morphtarget_pars_vertex:t0,morphtarget_vertex:e0,normal_fragment_begin:n0,normal_fragment_maps:i0,normal_pars_fragment:s0,normal_pars_vertex:r0,normal_vertex:o0,normalmap_pars_fragment:a0,clearcoat_normal_fragment_begin:c0,clearcoat_normal_fragment_maps:l0,clearcoat_pars_fragment:h0,iridescence_pars_fragment:u0,opaque_fragment:f0,packing:d0,premultiplied_alpha_fragment:A0,project_vertex:p0,dithering_fragment:m0,dithering_pars_fragment:g0,roughnessmap_fragment:_0,roughnessmap_pars_fragment:x0,shadowmap_pars_fragment:y0,shadowmap_pars_vertex:E0,shadowmap_vertex:S0,shadowmask_pars_fragment:M0,skinbase_vertex:v0,skinning_pars_vertex:C0,skinning_vertex:I0,skinnormal_vertex:b0,specularmap_fragment:w0,specularmap_pars_fragment:T0,tonemapping_fragment:B0,tonemapping_pars_fragment:R0,transmission_fragment:D0,transmission_pars_fragment:F0,uv_pars_fragment:L0,uv_pars_vertex:P0,uv_vertex:U0,worldpos_vertex:N0,background_vert:O0,background_frag:Q0,backgroundCube_vert:G0,backgroundCube_frag:k0,cube_vert:V0,cube_frag:H0,depth_vert:z0,depth_frag:W0,distance_vert:K0,distance_frag:X0,equirect_vert:q0,equirect_frag:Y0,linedashed_vert:J0,linedashed_frag:Z0,meshbasic_vert:$0,meshbasic_frag:j0,meshlambert_vert:t_,meshlambert_frag:e_,meshmatcap_vert:n_,meshmatcap_frag:i_,meshnormal_vert:s_,meshnormal_frag:r_,meshphong_vert:o_,meshphong_frag:a_,meshphysical_vert:c_,meshphysical_frag:l_,meshtoon_vert:h_,meshtoon_frag:u_,points_vert:f_,points_frag:d_,shadow_vert:A_,shadow_frag:p_,sprite_vert:m_,sprite_frag:g_},pt={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new Gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},ii={basic:{uniforms:rn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:rn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new kt(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:rn([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:rn([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:rn([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new kt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:rn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:rn([pt.points,pt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:rn([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:rn([pt.common,pt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:rn([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:rn([pt.sprite,pt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:rn([pt.common,pt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:rn([pt.lights,pt.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};ii.physical={uniforms:rn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Sc={r:0,b:0,g:0},__=new Ht,hd=new Ot;hd.set(-1,0,0,0,1,0,0,0,1);function x_(i,t,e,n,s,r){let o=new kt(0),a=s===!0?0:1,c,l,u=null,f=0,h=null;function d(y){let I=y.isScene===!0?y.background:null;if(I&&I.isTexture){let x=y.backgroundBlurriness>0;I=t.get(I,x)}return I}function m(y){let I=!1,x=d(y);x===null?p(o,a):x&&x.isColor&&(p(x,1),I=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||I)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(y,I){let x=d(I);x&&(x.isCubeTexture||x.mapping===Io)?(l===void 0&&(l=new ge(new bn(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:As(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,M,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(__.makeRotationFromEuler(I.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(hd),l.material.toneMapped=Jt.getTransfer(x.colorSpace)!==se,(u!==x||f!==x.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new ge(new rs(2,2),new En({name:"BackgroundMaterial",uniforms:As(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(x.colorSpace)!==se,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,h=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,I){y.getRGB(Sc,uh(i)),e.buffers.color.setClear(Sc.r,Sc.g,Sc.b,I,r)}function A(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,I=1){o.set(y),a=I,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:m,addToRenderList:_,dispose:A}}function y_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(B,R,D,b,F){let P=!1,O=f(B,b,D,R);r!==O&&(r=O,l(r.object)),P=d(B,b,D,F),P&&m(B,b,D,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(P||o)&&(o=!1,x(B,R,D,b),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return i.createVertexArray()}function l(B){return i.bindVertexArray(B)}function u(B){return i.deleteVertexArray(B)}function f(B,R,D,b){let F=b.wireframe===!0,P=n[R.id];P===void 0&&(P={},n[R.id]=P);let O=B.isInstancedMesh===!0?B.id:0,W=P[O];W===void 0&&(W={},P[O]=W);let N=W[D.id];N===void 0&&(N={},W[D.id]=N);let G=N[F];return G===void 0&&(G=h(c()),N[F]=G),G}function h(B){let R=[],D=[],b=[];for(let F=0;F<e;F++)R[F]=0,D[F]=0,b[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:b,object:B,attributes:{},index:null}}function d(B,R,D,b){let F=r.attributes,P=R.attributes,O=0,W=D.getAttributes();for(let N in W)if(W[N].location>=0){let H=F[N],$=P[N];if($===void 0&&(N==="instanceMatrix"&&B.instanceMatrix&&($=B.instanceMatrix),N==="instanceColor"&&B.instanceColor&&($=B.instanceColor)),H===void 0||H.attribute!==$||$&&H.data!==$.data)return!0;O++}return r.attributesNum!==O||r.index!==b}function m(B,R,D,b){let F={},P=R.attributes,O=0,W=D.getAttributes();for(let N in W)if(W[N].location>=0){let H=P[N];H===void 0&&(N==="instanceMatrix"&&B.instanceMatrix&&(H=B.instanceMatrix),N==="instanceColor"&&B.instanceColor&&(H=B.instanceColor));let $={};$.attribute=H,H&&H.data&&($.data=H.data),F[N]=$,O++}r.attributes=F,r.attributesNum=O,r.index=b}function _(){let B=r.newAttributes;for(let R=0,D=B.length;R<D;R++)B[R]=0}function p(B){A(B,0)}function A(B,R){let D=r.newAttributes,b=r.enabledAttributes,F=r.attributeDivisors;D[B]=1,b[B]===0&&(i.enableVertexAttribArray(B),b[B]=1),F[B]!==R&&(i.vertexAttribDivisor(B,R),F[B]=R)}function y(){let B=r.newAttributes,R=r.enabledAttributes;for(let D=0,b=R.length;D<b;D++)R[D]!==B[D]&&(i.disableVertexAttribArray(D),R[D]=0)}function I(B,R,D,b,F,P,O){O===!0?i.vertexAttribIPointer(B,R,D,F,P):i.vertexAttribPointer(B,R,D,b,F,P)}function x(B,R,D,b){_();let F=b.attributes,P=D.getAttributes(),O=R.defaultAttributeValues;for(let W in P){let N=P[W];if(N.location>=0){let G=F[W];if(G===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(G=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(G=B.instanceColor)),G!==void 0){let H=G.normalized,$=G.itemSize,it=t.get(G);if(it===void 0)continue;let wt=it.buffer,_t=it.type,Tt=it.bytesPerElement,Y=_t===i.INT||_t===i.UNSIGNED_INT||G.gpuType===tc;if(G.isInterleavedBufferAttribute){let tt=G.data,rt=tt.stride,yt=G.offset;if(tt.isInstancedInterleavedBuffer){for(let ct=0;ct<N.locationSize;ct++)A(N.location+ct,tt.meshPerAttribute);B.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let ct=0;ct<N.locationSize;ct++)p(N.location+ct);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let ct=0;ct<N.locationSize;ct++)I(N.location+ct,$/N.locationSize,_t,H,rt*Tt,(yt+$/N.locationSize*ct)*Tt,Y)}else{if(G.isInstancedBufferAttribute){for(let tt=0;tt<N.locationSize;tt++)A(N.location+tt,G.meshPerAttribute);B.isInstancedMesh!==!0&&b._maxInstanceCount===void 0&&(b._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let tt=0;tt<N.locationSize;tt++)p(N.location+tt);i.bindBuffer(i.ARRAY_BUFFER,wt);for(let tt=0;tt<N.locationSize;tt++)I(N.location+tt,$/N.locationSize,_t,H,$*Tt,$/N.locationSize*tt*Tt,Y)}}else if(O!==void 0){let H=O[W];if(H!==void 0)switch(H.length){case 2:i.vertexAttrib2fv(N.location,H);break;case 3:i.vertexAttrib3fv(N.location,H);break;case 4:i.vertexAttrib4fv(N.location,H);break;default:i.vertexAttrib1fv(N.location,H)}}}}y()}function E(){v();for(let B in n){let R=n[B];for(let D in R){let b=R[D];for(let F in b){let P=b[F];for(let O in P)u(P[O].object),delete P[O];delete b[F]}}delete n[B]}}function M(B){if(n[B.id]===void 0)return;let R=n[B.id];for(let D in R){let b=R[D];for(let F in b){let P=b[F];for(let O in P)u(P[O].object),delete P[O];delete b[F]}}delete n[B.id]}function w(B){for(let R in n){let D=n[R];for(let b in D){let F=D[b];if(F[B.id]===void 0)continue;let P=F[B.id];for(let O in P)u(P[O].object),delete P[O];delete F[B.id]}}}function g(B){for(let R in n){let D=n[R],b=B.isInstancedMesh===!0?B.id:0,F=D[b];if(F!==void 0){for(let P in F){let O=F[P];for(let W in O)u(O[W].object),delete O[W];delete F[P]}delete D[b],Object.keys(D).length===0&&delete n[R]}}}function v(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:v,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:M,releaseStatesOfObject:g,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:p,disableUnusedAttributes:y}}function E_(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function a(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let d=0;d<u;d++)h+=l[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function S_(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==Oe&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let g=w===Ee&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Qt&&w!==ve&&!g&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Ft("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ft("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),A=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),I=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),M=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:A,maxVertexUniforms:y,maxVaryings:I,maxFragmentUniforms:x,maxSamples:E,samples:M}}function M_(i){let t=this,e=null,n=0,s=!1,r=!1,o=new ln,a=new Ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let m=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,A=i.get(f);if(!s||m===null||m.length===0||r&&!p)r?u(null):l();else{let y=r?0:n,I=y*4,x=A.clippingState||null;c.value=x,x=u(m,h,I,d);for(let E=0;E!==I;++E)x[E]=e[E];A.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,m){let _=f!==null?f.length:0,p=null;if(_!==0){if(p=c.value,m!==!0||p===null){let A=d+_*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<A)&&(p=new Float32Array(A));for(let I=0,x=d;I!==_;++I,x+=4)o.copy(f[I]).applyMatrix4(y,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var Ir=4,v_=6,C_=20,I_=256,Bo=new ar,Vf=new kt,ph=null,mh=0,gh=0,_h=!1,b_=new U,ps=new U,wr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=b_}=r;ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ph,mh,gh),this._renderer.xr.enabled=_h,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===gi||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ph=this._renderer.getRenderTarget(),mh=this._renderer.getActiveCubeFace(),gh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ae,minFilter:ae,generateMipmaps:!1,type:Ee,format:Oe,colorSpace:Ai,depthBuffer:!1},s=Hf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=w_(r)),this._blurMaterial=B_(r,t,e),this._ggxMaterial=T_(r,t,e)}return s}_compileMaterial(t){let e=new ge(new Ye,t);this._renderer.compile(e,Bo)}_sceneToCubeUV(t,e,n,s,r){let c=new qe(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Vf),f.toneMapping=On,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ge(new bn,new ro({name:"PMREM.Background",side:ke,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,A=!1,y=t.background;y?y.isColor&&(p.color.copy(y),t.background=null,A=!0):(p.color.copy(Vf),A=!0);for(let I=0;I<6;I++){let x=I%3;x===0?(c.up.set(0,l[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[I],r.y,r.z)):x===1?(c.up.set(0,0,l[I]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[I],r.z)):(c.up.set(0,l[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[I]));let E=this._cubeSize;Cr(s,x*E,I>2?E:0,E,E),f.setRenderTarget(s),A&&f.render(_,c),f.render(t,c)}f.toneMapping=d,f.autoClear=h,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===gi||t.mapping===as;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Cr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Bo)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u),h=l*1.25,d=f*h,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-Ir?n-m+Ir:0),A=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=m-e,Cr(r,p,A,3*_,2*_),s.setRenderTarget(r),s.render(a,Bo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Cr(t,p,A,3*_,2*_),s.setRenderTarget(t),s.render(a,Bo)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-Ir?s-this._lodMax+Ir:0),h=4*(this._cubeSize-u);Cr(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(c,Bo)}};function w_(i){let t=[],e=[],n=i,s=i-Ir+1+v_;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,u=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,h=6,d=3,m=new Float32Array(d*h*f),_=new Float32Array(d*h*f);for(let A=0;A<f;A++){let y=A%3*2/3-1,I=A>2?0:-1,x=[y,I,0,y+2/3,I,0,y+2/3,I+1,0,y,I,0,y+2/3,I+1,0,y,I+1,0];m.set(x,d*h*A);for(let E=0;E<h;E++){let M=u[E*2]*2-1,w=u[E*2+1]*2-1;A===0?ps.set(1,w,M):A===1?ps.set(-M,1,-w):A===2?ps.set(-M,w,1):A===3?ps.set(-1,w,-M):A===4?ps.set(-M,-1,w):ps.set(M,w,-1),ps.toArray(_,(A*h+E)*d)}}let p=new Ye;p.setAttribute("position",new Re(m,d)),p.setAttribute("outputDirection",new Re(_,d)),e.push(new ge(p,null)),n>Ir&&n--}return{lodMeshes:e,sizeLods:t}}function Hf(i,t,e){let n=new pn(i,t,e);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function T_(i,t,e){return new En({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:I_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ic(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function B_(i,t,e){return new En({name:"SphericalGaussianBlur",defines:{SAMPLES:C_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ic(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function zf(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Wf(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Ic(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var vc=class extends pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lo(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new bn(5,5,5),r=new En({name:"CubemapFromEquirect",uniforms:As(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ke,blending:ti});r.uniforms.tEquirect.value=e;let o=new ge(s,r),a=e.minFilter;return e.minFilter===wn&&(e.minFilter=ae),new Xa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function R_(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===ur||d===Za)if(t.has(h)){let m=t.get(h).texture;return a(m,h.mapping)}else{let m=h.image;if(m&&m.height>0){let _=new vc(m.height);return _.fromEquirectangularTexture(i,h),t.set(h,_),h.addEventListener("dispose",l),a(_.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,m=d===ur||d===Za,_=d===gi||d===as;if(m||_){let p=e.get(h),A=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==A)return n===null&&(n=new wr(i)),p=m?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let y=h.image;return m&&y&&y.height>0||_&&y&&c(y)?(n===null&&(n=new wr(i)),p=m?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",u),p.texture):null}}}return h}function a(h,d){return d===ur?h.mapping=gi:d===Za&&(h.mapping=as),h}function c(h){let d=0,m=6;for(let _=0;_<m;_++)h[_]!==void 0&&d++;return d===m}function l(h){let d=h.target;d.removeEventListener("dispose",l);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function D_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ns("WebGLRenderer: "+n+" extension not supported."),s}}}function F_(i,t,e,n){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let m in h.attributes)t.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function c(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function l(f){let h=[],d=f.index,m=f.attributes.position,_=0;if(m===void 0)return;if(d!==null){let y=d.array;_=d.version;for(let I=0,x=y.length;I<x;I+=3){let E=y[I+0],M=y[I+1],w=y[I+2];h.push(E,M,M,w,w,E)}}else{let y=m.array;_=m.version;for(let I=0,x=y.length/3-1;I<x;I+=3){let E=I+0,M=I+1,w=I+2;h.push(E,M,M,w,w,E)}}let p=new(m.count>=65535?so:io)(h,1);p.version=_;let A=r.get(f);A&&t.remove(A),r.set(f,p)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function L_(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function l(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*o,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let _=0;for(let p=0;p<d;p++)_+=h[p];e.update(_,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function P_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Ut("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function U_(i,t,e){let n=new WeakMap,s=new Se;function r(o,a,c){let l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let v=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",v)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],I=0;d===!0&&(I=1),m===!0&&(I=2),_===!0&&(I=3);let x=a.attributes.position.count*I,E=1;x>t.maxTextureSize&&(E=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let M=new Float32Array(x*E*4*f),w=new eo(M,x,E,f);w.type=ve,w.needsUpdate=!0;let g=I*4;for(let C=0;C<f;C++){let B=p[C],R=A[C],D=y[C],b=x*E*4*C;for(let F=0;F<B.count;F++){let P=F*g;d===!0&&(s.fromBufferAttribute(B,F),M[b+P+0]=s.x,M[b+P+1]=s.y,M[b+P+2]=s.z,M[b+P+3]=0),m===!0&&(s.fromBufferAttribute(R,F),M[b+P+4]=s.x,M[b+P+5]=s.y,M[b+P+6]=s.z,M[b+P+7]=0),_===!0&&(s.fromBufferAttribute(D,F),M[b+P+8]=s.x,M[b+P+9]=s.y,M[b+P+10]=s.z,M[b+P+11]=D.itemSize===4?s.w:1)}}h={count:f,texture:w,size:new Gt(x,E)},n.set(a,h),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let _=0;_<l.length;_++)d+=l[_];let m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function N_(i,t,e,n,s){let r=new WeakMap;function o(l){let u=s.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var O_={[jl]:"LINEAR_TONE_MAPPING",[th]:"REINHARD_TONE_MAPPING",[eh]:"CINEON_TONE_MAPPING",[Mo]:"ACES_FILMIC_TONE_MAPPING",[vo]:"AGX_TONE_MAPPING",[Co]:"NEUTRAL_TONE_MAPPING",[nh]:"CUSTOM_TONE_MAPPING"};function Q_(i,t,e,n,s,r){let o=new pn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Ye;l.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ye([0,2,0,0,2,0],2));let u=new La({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ge(l,u),h=new ar(-1,1,1,-1,0,1),d=null,m=null,_=!1,p,A=null,y=[],I=!1;this.setSize=function(x,E){o.setSize(x,E),a!==null&&a.setSize(x,E),c!==null&&c.setSize(x,E);for(let M=0;M<y.length;M++){let w=y[M];w.setSize&&w.setSize(x,E)}},this.setEffects=function(x){y=x,I=y.length>0&&y[0].isRenderPass===!0;let E=o.width,M=o.height;y.length>0&&a===null&&(a=new pn(E,M,{type:Ee,depthBuffer:!1,stencilBuffer:!1}),c=new pn(E,M,{type:Ee,depthBuffer:!1,stencilBuffer:!1}));for(let w=0;w<y.length;w++){let g=y[w];g.setSize&&g.setSize(E,M)}},this.begin=function(x,E){if(_||x.toneMapping===On&&y.length===0)return!1;if(A=E,E!==null){let M=E.width,w=E.height;(o.width!==M||o.height!==w)&&this.setSize(M,w)}return I===!1&&x.setRenderTarget(o),p=x.toneMapping,x.toneMapping=On,!0},this.hasRenderPass=function(){return I},this.end=function(x,E){x.toneMapping=p,_=!0;let M=o,w=a;for(let g=0;g<y.length;g++){let v=y[g];v.enabled!==!1&&(v.render(x,w,M,E),v.needsSwap!==!1&&(M=w,w=w===a?c:a))}if(d!==x.outputColorSpace||m!==x.toneMapping){d=x.outputColorSpace,m=x.toneMapping,u.defines={},Jt.getTransfer(d)===se&&(u.defines.SRGB_TRANSFER="");let g=O_[m];g&&(u.defines[g]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=M.texture,x.setRenderTarget(A),x.render(f,h),A=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var ud=new sn,Eh=new Pi(1,1),fd=new eo,dd=new tr,Ad=new lo,Kf=[],Xf=[],qf=new Float32Array(16),Yf=new Float32Array(9),Jf=new Float32Array(4);function Tr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Kf[s];if(r===void 0&&(r=new Float32Array(s),Kf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function He(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function bc(i,t){let e=Xf[t];e===void 0&&(e=new Int32Array(t),Xf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function G_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function k_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),He(e,t)}}function V_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),He(e,t)}}function H_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),He(e,t)}}function z_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;Jf.set(n),i.uniformMatrix2fv(this.addr,!1,Jf),He(e,n)}}function W_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;Yf.set(n),i.uniformMatrix3fv(this.addr,!1,Yf),He(e,n)}}function K_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;qf.set(n),i.uniformMatrix4fv(this.addr,!1,qf),He(e,n)}}function X_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function q_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),He(e,t)}}function Y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),He(e,t)}}function J_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),He(e,t)}}function Z_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function $_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),He(e,t)}}function j_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),He(e,t)}}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),He(e,t)}}function ex(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Eh.compareFunction=e.isReversedDepthBuffer()?Ec:yc,r=Eh):r=ud,e.setTexture2D(t||r,s)}function nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||dd,s)}function ix(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ad,s)}function sx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fd,s)}function rx(i){switch(i){case 5126:return G_;case 35664:return k_;case 35665:return V_;case 35666:return H_;case 35674:return z_;case 35675:return W_;case 35676:return K_;case 5124:case 35670:return X_;case 35667:case 35671:return q_;case 35668:case 35672:return Y_;case 35669:case 35673:return J_;case 5125:return Z_;case 36294:return $_;case 36295:return j_;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return nx;case 35680:case 36300:case 36308:case 36293:return ix;case 36289:case 36303:case 36311:case 36292:return sx}}function ox(i,t){i.uniform1fv(this.addr,t)}function ax(i,t){let e=Tr(t,this.size,2);i.uniform2fv(this.addr,e)}function cx(i,t){let e=Tr(t,this.size,3);i.uniform3fv(this.addr,e)}function lx(i,t){let e=Tr(t,this.size,4);i.uniform4fv(this.addr,e)}function hx(i,t){let e=Tr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function ux(i,t){let e=Tr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function fx(i,t){let e=Tr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function dx(i,t){i.uniform1iv(this.addr,t)}function Ax(i,t){i.uniform2iv(this.addr,t)}function px(i,t){i.uniform3iv(this.addr,t)}function mx(i,t){i.uniform4iv(this.addr,t)}function gx(i,t){i.uniform1uiv(this.addr,t)}function _x(i,t){i.uniform2uiv(this.addr,t)}function xx(i,t){i.uniform3uiv(this.addr,t)}function yx(i,t){i.uniform4uiv(this.addr,t)}function Ex(i,t,e){let n=this.cache,s=t.length,r=bc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Eh:o=ud;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function Sx(i,t,e){let n=this.cache,s=t.length,r=bc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||dd,r[o])}function Mx(i,t,e){let n=this.cache,s=t.length,r=bc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ad,r[o])}function vx(i,t,e){let n=this.cache,s=t.length,r=bc(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||fd,r[o])}function Cx(i){switch(i){case 5126:return ox;case 35664:return ax;case 35665:return cx;case 35666:return lx;case 35674:return hx;case 35675:return ux;case 35676:return fx;case 5124:case 35670:return dx;case 35667:case 35671:return Ax;case 35668:case 35672:return px;case 35669:case 35673:return mx;case 5125:return gx;case 36294:return _x;case 36295:return xx;case 36296:return yx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ex;case 35679:case 36299:case 36307:return Sx;case 35680:case 36300:case 36308:case 36293:return Mx;case 36289:case 36303:case 36311:case 36292:return vx}}var Sh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rx(e.type)}},Mh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cx(e.type)}},vh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},xh=/(\w+)(\])?(\[|\.)?/g;function Zf(i,t){i.seq.push(t),i.map[t.id]=t}function Ix(i,t,e){let n=i.name,s=n.length;for(xh.lastIndex=0;;){let r=xh.exec(n),o=xh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Zf(e,l===void 0?new Sh(a,i,t):new Mh(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new vh(a),Zf(e,f)),e=f}}}var br=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);Ix(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function $f(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var bx=37297,wx=0;function Tx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var jf=new Ot;function Bx(i){Jt._getMatrix(jf,Jt.workingColorSpace,i);let t=`mat3( ${jf.elements.map(e=>e.toFixed(4))} )`;switch(Jt.getTransfer(i)){case qs:return[t,"LinearTransferOETF"];case se:return[t,"sRGBTransferOETF"];default:return Ft("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function td(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Tx(i.getShaderSource(t),a)}else return r}function Rx(i,t){let e=Bx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Dx={[jl]:"Linear",[th]:"Reinhard",[eh]:"Cineon",[Mo]:"ACESFilmic",[vo]:"AgX",[Co]:"Neutral",[nh]:"Custom"};function Fx(i,t){let e=Dx[t];return e===void 0?(Ft("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Mc=new U;function Lx(){Jt.getLuminanceCoefficients(Mc);let i=Mc.x.toFixed(4),t=Mc.y.toFixed(4),e=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Px(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function Ux(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Nx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Do(i){return i!==""}function ed(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(i){return i.replace(Ox,Gx)}var Qx=new Map;function Gx(i,t){let e=qt[t];if(e===void 0){let n=Qx.get(t);if(n!==void 0)e=qt[n],Ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ch(e)}var kx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function id(i){return i.replace(kx,Vx)}function Vx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Hx={[So]:"SHADOWMAP_TYPE_PCF",[lr]:"SHADOWMAP_TYPE_VSM"};function zx(i){return Hx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Wx={[gi]:"ENVMAP_TYPE_CUBE",[as]:"ENVMAP_TYPE_CUBE",[Io]:"ENVMAP_TYPE_CUBE_UV"};function Kx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Wx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Xx={[as]:"ENVMAP_MODE_REFRACTION"};function qx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Xx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Yx={[Ja]:"ENVMAP_BLENDING_MULTIPLY",[Sf]:"ENVMAP_BLENDING_MIX",[Mf]:"ENVMAP_BLENDING_ADD"};function Jx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Yx[i.combine]||"ENVMAP_BLENDING_NONE"}function Zx(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $x(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=zx(e),l=Kx(e),u=qx(e),f=Jx(e),h=Zx(e),d=Px(e),m=Ux(r),_=s.createProgram(),p,A,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Do).join(`
`),p.length>0&&(p+=`
`),A=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Do).join(`
`),A.length>0&&(A+=`
`)):(p=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),A=[sd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?qt.tonemapping_pars_fragment:"",e.toneMapping!==On?Fx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,Rx("linearToOutputTexel",e.outputColorSpace),Lx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Do).join(`
`)),o=Ch(o),o=ed(o,e),o=nd(o,e),a=Ch(a),a=ed(a,e),a=nd(a,e),o=id(o),a=id(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,A=["#define varying in",e.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);let I=y+p+o,x=y+A+a,E=$f(s,s.VERTEX_SHADER,I),M=$f(s,s.FRAGMENT_SHADER,x);s.attachShader(_,E),s.attachShader(_,M),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(B){if(i.debug.checkShaderErrors){let R=s.getProgramInfoLog(_)||"",D=s.getShaderInfoLog(E)||"",b=s.getShaderInfoLog(M)||"",F=R.trim(),P=D.trim(),O=b.trim(),W=!0,N=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,M);else{let G=td(s,E,"vertex"),H=td(s,M,"fragment");Ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+F+`
`+G+`
`+H)}else F!==""?Ft("WebGLProgram: Program Info Log:",F):(P===""||O==="")&&(N=!1);N&&(B.diagnostics={runnable:W,programLog:F,vertexShader:{log:P,prefix:p},fragmentShader:{log:O,prefix:A}})}s.deleteShader(E),s.deleteShader(M),g=new br(s,_),v=Nx(s,_)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,bx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=wx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=M,this}var jx=0,Ih=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bh(t),e.set(t,n)),n}},bh=class{constructor(t){this.id=jx++,this.code=t,this.usedTimes=0}};function ty(i){return i===mn||i===fs||i===ds}function ey(i,t,e,n,s,r){let o=new no,a=new Ih,c=new Set,l=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,v,C,B,R,D){let b=B.fog,F=R.geometry,P=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?B.environment:null,O=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,W=t.get(g.envMap||P,O),N=W&&W.mapping===Io?W.image.height:null,G=d[g.type];g.precision!==null&&(h=n.getMaxPrecision(g.precision),h!==g.precision&&Ft("WebGLProgram.getParameters:",g.precision,"not supported, using",h,"instead."));let H=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,$=H!==void 0?H.length:0,it=0;F.morphAttributes.position!==void 0&&(it=1),F.morphAttributes.normal!==void 0&&(it=2),F.morphAttributes.color!==void 0&&(it=3);let wt,_t,Tt,Y;if(G){let pe=ii[G];wt=pe.vertexShader,_t=pe.fragmentShader}else{wt=g.vertexShader,_t=g.fragmentShader;let pe=a.getVertexShaderStage(g),re=a.getFragmentShaderStage(g);a.update(g,pe,re),Tt=pe.id,Y=re.id}let tt=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),yt=R.isInstancedMesh===!0,ct=R.isBatchedMesh===!0,Ct=!!g.map,zt=!!g.matcap,Nt=!!W,Wt=!!g.aoMap,jt=!!g.lightMap,Yt=!!g.bumpMap&&g.wireframe===!1,he=!!g.normalMap,Te=!!g.displacementMap,An=!!g.emissiveMap,Me=!!g.metalnessMap,Pe=!!g.roughnessMap,V=g.anisotropy>0,$e=g.clearcoat>0,ce=g.dispersion>0,L=g.retroreflectivity>0,S=g.iridescence>0,z=g.sheen>0,q=g.transmission>0,Z=V&&!!g.anisotropyMap,ot=$e&&!!g.clearcoatMap,lt=$e&&!!g.clearcoatNormalMap,j=$e&&!!g.clearcoatRoughnessMap,nt=S&&!!g.iridescenceMap,ht=S&&!!g.iridescenceThicknessMap,Bt=z&&!!g.sheenColorMap,At=z&&!!g.sheenRoughnessMap,ut=!!g.specularMap,Rt=!!g.specularColorMap,Pt=!!g.specularIntensityMap,Kt=q&&!!g.transmissionMap,k=q&&!!g.thicknessMap,ft=!!g.gradientMap,et=!!g.alphaMap,dt=g.alphaTest>0,xt=!!g.alphaHash,st=!!g.extensions,Dt=On;g.toneMapped&&(tt===null||tt.isXRRenderTarget===!0)&&(Dt=i.toneMapping);let It={shaderID:G,shaderType:g.type,shaderName:g.name,vertexShader:wt,fragmentShader:_t,defines:g.defines,customVertexShaderID:Tt,customFragmentShaderID:Y,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:h,batching:ct,batchingColor:ct&&R._colorsTexture!==null,instancing:yt,instancingColor:yt&&R.instanceColor!==null,instancingMorph:yt&&R.morphTexture!==null,outputColorSpace:tt===null?i.outputColorSpace:tt.isXRRenderTarget===!0?tt.texture.colorSpace:Jt.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ct,matcap:zt,envMap:Nt,envMapMode:Nt&&W.mapping,envMapCubeUVHeight:N,aoMap:Wt,lightMap:jt,bumpMap:Yt,normalMap:he,displacementMap:Te,emissiveMap:An,normalMapObjectSpace:he&&g.normalMapType===Cf,normalMapTangentSpace:he&&g.normalMapType===To,packedNormalMap:he&&g.normalMapType===To&&ty(g.normalMap.format),metalnessMap:Me,roughnessMap:Pe,anisotropy:V,anisotropyMap:Z,clearcoat:$e,clearcoatMap:ot,clearcoatNormalMap:lt,clearcoatRoughnessMap:j,dispersion:ce,retroreflection:L,iridescence:S,iridescenceMap:nt,iridescenceThicknessMap:ht,sheen:z,sheenColorMap:Bt,sheenRoughnessMap:At,specularMap:ut,specularColorMap:Rt,specularIntensityMap:Pt,transmission:q,transmissionMap:Kt,thicknessMap:k,gradientMap:ft,opaque:g.transparent===!1&&g.blending===hr&&g.alphaToCoverage===!1,alphaMap:et,alphaTest:dt,alphaHash:xt,combine:g.combine,mapUv:Ct&&m(g.map.channel),aoMapUv:Wt&&m(g.aoMap.channel),lightMapUv:jt&&m(g.lightMap.channel),bumpMapUv:Yt&&m(g.bumpMap.channel),normalMapUv:he&&m(g.normalMap.channel),displacementMapUv:Te&&m(g.displacementMap.channel),emissiveMapUv:An&&m(g.emissiveMap.channel),metalnessMapUv:Me&&m(g.metalnessMap.channel),roughnessMapUv:Pe&&m(g.roughnessMap.channel),anisotropyMapUv:Z&&m(g.anisotropyMap.channel),clearcoatMapUv:ot&&m(g.clearcoatMap.channel),clearcoatNormalMapUv:lt&&m(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&m(g.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&m(g.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&m(g.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&m(g.sheenColorMap.channel),sheenRoughnessMapUv:At&&m(g.sheenRoughnessMap.channel),specularMapUv:ut&&m(g.specularMap.channel),specularColorMapUv:Rt&&m(g.specularColorMap.channel),specularIntensityMapUv:Pt&&m(g.specularIntensityMap.channel),transmissionMapUv:Kt&&m(g.transmissionMap.channel),thicknessMapUv:k&&m(g.thicknessMap.channel),alphaMapUv:et&&m(g.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(he||V),vertexNormals:!!F.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!F.attributes.uv&&(Ct||et),fog:!!b,useFog:g.fog===!0,fogExp2:!!b&&b.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||F.attributes.normal===void 0&&he===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:rt,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:it,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Ct&&g.map.isVideoTexture===!0&&Jt.getTransfer(g.map.colorSpace)===se,decodeVideoTextureEmissive:An&&g.emissiveMap.isVideoTexture===!0&&Jt.getTransfer(g.emissiveMap.colorSpace)===se,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Je,flipSided:g.side===ke,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:st&&g.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&g.extensions.multiDraw===!0||ct)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return It.vertexUv1s=c.has(1),It.vertexUv2s=c.has(2),It.vertexUv3s=c.has(3),c.clear(),It}function p(g){let v=[];if(g.shaderID?v.push(g.shaderID):(v.push(g.customVertexShaderID),v.push(g.customFragmentShaderID)),g.defines!==void 0)for(let C in g.defines)v.push(C),v.push(g.defines[C]);return g.isRawShaderMaterial===!1&&(A(v,g),y(v,g),v.push(i.outputColorSpace)),v.push(g.customProgramCacheKey),v.join()}function A(g,v){g.push(v.precision),g.push(v.outputColorSpace),g.push(v.envMapMode),g.push(v.envMapCubeUVHeight),g.push(v.mapUv),g.push(v.alphaMapUv),g.push(v.lightMapUv),g.push(v.aoMapUv),g.push(v.bumpMapUv),g.push(v.normalMapUv),g.push(v.displacementMapUv),g.push(v.emissiveMapUv),g.push(v.metalnessMapUv),g.push(v.roughnessMapUv),g.push(v.anisotropyMapUv),g.push(v.clearcoatMapUv),g.push(v.clearcoatNormalMapUv),g.push(v.clearcoatRoughnessMapUv),g.push(v.iridescenceMapUv),g.push(v.iridescenceThicknessMapUv),g.push(v.sheenColorMapUv),g.push(v.sheenRoughnessMapUv),g.push(v.specularMapUv),g.push(v.specularColorMapUv),g.push(v.specularIntensityMapUv),g.push(v.transmissionMapUv),g.push(v.thicknessMapUv),g.push(v.combine),g.push(v.fogExp2),g.push(v.sizeAttenuation),g.push(v.morphTargetsCount),g.push(v.morphAttributeCount),g.push(v.numSunLights),g.push(v.numDirLights),g.push(v.numPointLights),g.push(v.numSpotLights),g.push(v.numSpotLightMaps),g.push(v.numHemiLights),g.push(v.numRectAreaLights),g.push(v.numSunLightShadows),g.push(v.numDirLightShadows),g.push(v.numPointLightShadows),g.push(v.numSpotLightShadows),g.push(v.numSpotLightShadowsWithMaps),g.push(v.numLightProbes),g.push(v.shadowMapType),g.push(v.toneMapping),g.push(v.numClippingPlanes),g.push(v.numClipIntersection),g.push(v.depthPacking)}function y(g,v){o.disableAll(),v.instancing&&o.enable(0),v.instancingColor&&o.enable(1),v.instancingMorph&&o.enable(2),v.matcap&&o.enable(3),v.envMap&&o.enable(4),v.normalMapObjectSpace&&o.enable(5),v.normalMapTangentSpace&&o.enable(6),v.clearcoat&&o.enable(7),v.iridescence&&o.enable(8),v.alphaTest&&o.enable(9),v.vertexColors&&o.enable(10),v.vertexAlphas&&o.enable(11),v.vertexUv1s&&o.enable(12),v.vertexUv2s&&o.enable(13),v.vertexUv3s&&o.enable(14),v.vertexTangents&&o.enable(15),v.anisotropy&&o.enable(16),v.alphaHash&&o.enable(17),v.batching&&o.enable(18),v.dispersion&&o.enable(19),v.retroreflection&&o.enable(24),v.batchingColor&&o.enable(20),v.gradientMap&&o.enable(21),v.packedNormalMap&&o.enable(22),v.vertexNormals&&o.enable(23),g.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),v.numLightProbeGrids>0&&o.enable(22),v.hasPositionAttribute&&o.enable(23),g.push(o.mask)}function I(g){let v=d[g.type],C;if(v){let B=ii[v];C=Qf.clone(B.uniforms)}else C=g.uniforms;return C}function x(g,v){let C=u.get(v);return C!==void 0?++C.usedTimes:(C=new $x(i,v,g,s),l.push(C),u.set(v,C)),C}function E(g){if(--g.usedTimes===0){let v=l.indexOf(g);l[v]=l[l.length-1],l.pop(),u.delete(g.cacheKey),g.destroy()}}function M(g){a.remove(g)}function w(){a.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:I,acquireProgram:x,releaseProgram:E,releaseShaderCache:M,programs:l,dispose:w}}function ny(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function iy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function rd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function od(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,m,_,p,A){let y=i[t];return y===void 0?(y={id:h.id,object:h,geometry:d,material:m,materialVariant:o(h),groupOrder:_,renderOrder:h.renderOrder,z:p,group:A},i[t]=y):(y.id=h.id,y.object=h,y.geometry=d,y.material=m,y.materialVariant=o(h),y.groupOrder=_,y.renderOrder=h.renderOrder,y.z=p,y.group=A),t++,y}function c(h,d,m,_,p,A,y){y.reversedDepth===!0&&(p=-p);let I=a(h,d,m,_,p,A);m.transmission>0?n.push(I):m.transparent===!0?s.push(I):e.push(I)}function l(h,d,m,_,p,A){let y=a(h,d,m,_,p,A);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):e.unshift(y)}function u(h,d){e.length>1&&e.sort(h||iy),n.length>1&&n.sort(d||rd),s.length>1&&s.sort(d||rd)}function f(){for(let h=t,d=i.length;h<d;h++){let m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:u}}function sy(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new od,i.set(n,[o])):s>=r.length?(o=new od,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function ry(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new kt};break;case"SpotLight":e={position:new U,direction:new U,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function oy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var ay=0;function cy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function ly(i){let t=new ry,e=oy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new Ht,o=new Ht;function a(l){let u=0,f=0,h=0;for(let R=0;R<9;R++)n.probe[R].set(0,0,0);let d=0,m=0,_=0,p=0,A=0,y=0,I=0,x=0,E=0,M=0,w=0,g=0,v=0,C=0;l.sort(cy);for(let R=0,D=l.length;R<D;R++){let b=l[R],F=b.color,P=b.intensity,O=b.distance,W=null;if(b.shadow&&b.shadow.map&&(b.shadow.map.texture.format===mn?W=b.shadow.map.texture:W=b.shadow.map.depthTexture||b.shadow.map.texture),b.isAmbientLight)u+=F.r*P,f+=F.g*P,h+=F.b*P;else if(b.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(b.sh.coefficients[N],P);C++}else if(b.isSunLight){let N=t.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let G=b.shadow,H=e.get(b);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[m]=H,n.sunShadowMap[m]=W;let $=G.getViewportCount();for(let it=0;it<$;it++)n.sunShadowMatrix[_+it]=G.getMatrix(it),n.sunShadowCascade[_+it]=G._cascadeData[it];_+=$,m++}n.sun[d]=N,d++}else if(b.isDirectionalLight){let N=t.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let G=b.shadow,H=e.get(b);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=b.shadow.matrix,E++}n.directional[p]=N,p++}else if(b.isSpotLight){let N=t.get(b);N.position.setFromMatrixPosition(b.matrixWorld),N.color.copy(F).multiplyScalar(P),N.distance=O,N.coneCos=Math.cos(b.angle),N.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),N.decay=b.decay,n.spot[y]=N;let G=b.shadow;if(b.map&&(n.spotLightMap[g]=b.map,g++,G.updateMatrices(b),b.castShadow&&v++),n.spotLightMatrix[y]=G.matrix,b.castShadow){let H=e.get(b);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,n.spotShadow[y]=H,n.spotShadowMap[y]=W,w++}y++}else if(b.isRectAreaLight){let N=t.get(b);N.color.copy(F).multiplyScalar(P),N.halfWidth.set(b.width*.5,0,0),N.halfHeight.set(0,b.height*.5,0),n.rectArea[I]=N,I++}else if(b.isPointLight){let N=t.get(b);if(N.color.copy(b.color).multiplyScalar(b.intensity),N.distance=b.distance,N.decay=b.decay,b.castShadow){let G=b.shadow,H=e.get(b);H.shadowIntensity=G.intensity,H.shadowBias=G.bias,H.shadowNormalBias=G.normalBias,H.shadowRadius=G.radius,H.shadowMapSize=G.mapSize,H.shadowCameraNear=G.camera.near,H.shadowCameraFar=G.camera.far,n.pointShadow[A]=H,n.pointShadowMap[A]=W,n.pointShadowMatrix[A]=b.shadow.matrix,M++}n.point[A]=N,A++}else if(b.isHemisphereLight){let N=t.get(b);N.skyColor.copy(b.color).multiplyScalar(P),N.groundColor.copy(b.groundColor).multiplyScalar(P),n.hemi[x]=N,x++}}I>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let B=n.hash;(B.sunLength!==d||B.directionalLength!==p||B.pointLength!==A||B.spotLength!==y||B.rectAreaLength!==I||B.hemiLength!==x||B.numSunShadows!==m||B.numDirectionalShadows!==E||B.numPointShadows!==M||B.numSpotShadows!==w||B.numSpotMaps!==g||B.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=p,n.spot.length=y,n.rectArea.length=I,n.point.length=A,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.pointShadowMatrix.length=M,n.spotShadow.length=w,n.spotShadowMap.length=w,n.spotLightMatrix.length=w+g-v,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=v,n.numLightProbes=C,B.sunLength=d,B.directionalLength=p,B.pointLength=A,B.spotLength=y,B.rectAreaLength=I,B.hemiLength=x,B.numSunShadows=m,B.numDirectionalShadows=E,B.numPointShadows=M,B.numSpotShadows=w,B.numSpotMaps=g,B.numLightProbes=C,n.version=ay++)}function c(l,u){let f=0,h=0,d=0,m=0,_=0,p=0,A=u.matrixWorldInverse;for(let y=0,I=l.length;y<I;y++){let x=l[y];if(x.isSunLight){let E=n.sun[f];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(A),f++}else if(x.isDirectionalLight){let E=n.directional[h];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(A),h++}else if(x.isSpotLight){let E=n.spot[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(A),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(A),m++}else if(x.isRectAreaLight){let E=n.rectArea[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(A),o.identity(),r.copy(x.matrixWorld),r.premultiply(A),o.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){let E=n.point[d];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(A),d++}else if(x.isHemisphereLight){let E=n.hemi[p];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(A),p++}}}return{setup:a,setupView:c,state:n}}function ad(i){let t=new ly(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function hy(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ad(i),t.set(s,[a])):r>=o.length?(a=new ad(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var uy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,dy=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Ay=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],cd=new Ht,Ro=new U,yh=new U;function py(i,t,e){let n=new sr,s=new Gt,r=new Gt,o=new Se,a=new Pa,c=new Ua,l={},u=e.maxTextureSize,f={[Nn]:ke,[ke]:Nn,[Je]:Je},h=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Gt},radius:{value:4}},vertexShader:uy,fragmentShader:fy}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let m=new Ye;m.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ge(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=So;let A=this.type;this.render=function(M,w,g){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===Ya&&(Ft("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=So);let v=i.getRenderTarget(),C=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),R=i.state;R.setBlending(ti),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let D=A!==this.type;D&&w.traverse(function(b){b.material&&(Array.isArray(b.material)?b.material.forEach(F=>F.needsUpdate=!0):b.material.needsUpdate=!0)});for(let b=0,F=M.length;b<F;b++){let P=M[b],O=P.shadow;if(O===void 0){Ft("WebGLShadowMap:",P,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let W=O.getFrameExtents();s.multiply(W),r.copy(O.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/W.x),s.x=r.x*W.x,O.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/W.y),s.y=r.y*W.y,O.mapSize.y=r.y));let N=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=N,O.map===null||D===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===lr){if(P.isPointLight){Ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new pn(s.x,s.y,{format:mn,type:Ee,minFilter:ae,magFilter:ae,generateMipmaps:!1}),O.map.texture.name=P.name+".shadowMap",O.map.depthTexture=new Pi(s.x,s.y,ve),O.map.depthTexture.name=P.name+".shadowMapDepth",O.map.depthTexture.format=qn,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=De,O.map.depthTexture.magFilter=De}else P.isPointLight?(O.map=new vc(s.x),O.map.depthTexture=new Fa(s.x,Qn)):(O.map=new pn(s.x,s.y),O.map.depthTexture=new Pi(s.x,s.y,Qn)),O.map.depthTexture.name=P.name+".shadowMap",O.map.depthTexture.format=qn,this.type===So?(O.map.depthTexture.compareFunction=N?Ec:yc,O.map.depthTexture.minFilter=ae,O.map.depthTexture.magFilter=ae):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=De,O.map.depthTexture.magFilter=De);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let G=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();P.isPointLight!==!0&&O.updateMatrices(P,g);for(let H=0;H<G;H++){let $=O.getCamera(H);if(P.isPointLight){let it=O.camera,wt=O.matrix,_t=P.distance||it.far;_t!==it.far&&(it.far=_t,it.updateProjectionMatrix()),Ro.setFromMatrixPosition(P.matrixWorld),it.position.copy(Ro),yh.copy(it.position),yh.add(dy[H]),it.up.copy(Ay[H]),it.lookAt(yh),it.updateMatrixWorld(),wt.makeTranslation(-Ro.x,-Ro.y,-Ro.z),cd.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),O._frustum.setFromProjectionMatrix(cd,it.coordinateSystem,it.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,H),i.clear();else{H===0&&(i.setRenderTarget(O.map),i.clear());let it=O.getViewport(H);o.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),R.viewport(o)}n=O.getFrustum(H),x(w,g,$,P,this.type)}O.isPointLightShadow!==!0&&this.type===lr&&y(O,g),O.needsUpdate=!1}A=this.type,p.needsUpdate=!1,i.setRenderTarget(v,C,B)};function y(M,w){let g=t.update(_);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null?M.mapPass=new pn(s.x,s.y,{format:mn,type:Ee}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),h.uniforms.shadow_pass.value=M.map.depthTexture,h.uniforms.resolution.value.set(M.map.width,M.map.height),h.uniforms.radius.value=M.radius,i.setRenderTarget(M.mapPass),i.clear(),i.renderBufferDirect(w,null,g,h,_,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value.set(M.map.width,M.map.height),d.uniforms.radius.value=M.radius,i.setRenderTarget(M.map),i.clear(),i.renderBufferDirect(w,null,g,d,_,null)}function I(M,w,g,v){let C=null,B=g.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(B!==void 0)C=B;else if(C=g.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let R=C.uuid,D=w.uuid,b=l[R];b===void 0&&(b={},l[R]=b);let F=b[D];F===void 0&&(F=C.clone(),b[D]=F,w.addEventListener("dispose",E)),C=F}if(C.visible=w.visible,C.wireframe=w.wireframe,v===lr?C.side=w.shadowSide!==null?w.shadowSide:w.side:C.side=w.shadowSide!==null?w.shadowSide:f[w.side],C.alphaMap=w.alphaMap,C.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,C.map=w.map,C.clipShadows=w.clipShadows,C.clippingPlanes=w.clippingPlanes,C.clipIntersection=w.clipIntersection,C.displacementMap=w.displacementMap,C.displacementScale=w.displacementScale,C.displacementBias=w.displacementBias,C.wireframeLinewidth=w.wireframeLinewidth,C.linewidth=w.linewidth,g.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let R=i.properties.get(C);R.light=g}return C}function x(M,w,g,v,C){if(M.visible===!1)return;if(M.layers.test(w.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&C===lr)&&(!M.frustumCulled||M.intersectsFrustum(n))){M.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,M.matrixWorld);let D=t.update(M),b=M.material;if(Array.isArray(b)){let F=D.groups;for(let P=0,O=F.length;P<O;P++){let W=F[P],N=b[W.materialIndex];if(N&&N.visible){let G=I(M,N,v,C);M.onBeforeShadow(i,M,w,g,D,G,W),i.renderBufferDirect(g,null,D,G,M,W),M.onAfterShadow(i,M,w,g,D,G,W)}}}else if(b.visible){let F=I(M,b,v,C);M.onBeforeShadow(i,M,w,g,D,F,null),i.renderBufferDirect(g,null,D,F,M,null),M.onAfterShadow(i,M,w,g,D,F,null)}}let R=M.children;for(let D=0,b=R.length;D<b;D++)x(R[D],w,g,v,C)}function E(M){M.target.removeEventListener("dispose",E);for(let g in l){let v=l[g],C=M.target.uuid;C in v&&(v[C].dispose(),delete v[C])}}}function my(i,t){function e(){let k=!1,ft=new Se,et=null,dt=new Se(0,0,0,0);return{setMask:function(xt){et!==xt&&!k&&(i.colorMask(xt,xt,xt,xt),et=xt)},setLocked:function(xt){k=xt},setClear:function(xt,st,Dt,It,pe){pe===!0&&(xt*=It,st*=It,Dt*=It),ft.set(xt,st,Dt,It),dt.equals(ft)===!1&&(i.clearColor(xt,st,Dt,It),dt.copy(ft))},reset:function(){k=!1,et=null,dt.set(-1,0,0,0)}}}function n(){let k=!1,ft=!1,et=null,dt=null,xt=null;return{setReversed:function(st){if(ft!==st){let Dt=t.get("EXT_clip_control");st?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),ft=st;let It=xt;xt=null,this.setClear(It)}},getReversed:function(){return ft},setTest:function(st){st?tt(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(st){et!==st&&!k&&(i.depthMask(st),et=st)},setFunc:function(st){if(ft&&(st=Nf[st]),dt!==st){switch(st){case Sa:i.depthFunc(i.NEVER);break;case Ma:i.depthFunc(i.ALWAYS);break;case va:i.depthFunc(i.LESS);break;case Ks:i.depthFunc(i.LEQUAL);break;case Ca:i.depthFunc(i.EQUAL);break;case Ia:i.depthFunc(i.GEQUAL);break;case ba:i.depthFunc(i.GREATER);break;case wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=st}},setLocked:function(st){k=st},setClear:function(st){xt!==st&&(xt=st,ft&&(st=1-st),i.clearDepth(st))},reset:function(){k=!1,et=null,dt=null,xt=null,ft=!1}}}function s(){let k=!1,ft=null,et=null,dt=null,xt=null,st=null,Dt=null,It=null,pe=null;return{setTest:function(re){k||(re?tt(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(re){ft!==re&&!k&&(i.stencilMask(re),ft=re)},setFunc:function(re,Rn,Wn){(et!==re||dt!==Rn||xt!==Wn)&&(i.stencilFunc(re,Rn,Wn),et=re,dt=Rn,xt=Wn)},setOp:function(re,Rn,Wn){(st!==re||Dt!==Rn||It!==Wn)&&(i.stencilOp(re,Rn,Wn),st=re,Dt=Rn,It=Wn)},setLocked:function(re){k=re},setClear:function(re){pe!==re&&(i.clearStencil(re),pe=re)},reset:function(){k=!1,ft=null,et=null,dt=null,xt=null,st=null,Dt=null,It=null,pe=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,u={},f={},h={},d=new WeakMap,m=[],_=null,p=!1,A=null,y=null,I=null,x=null,E=null,M=null,w=null,g=new kt(0,0,0),v=0,C=!1,B=null,R=null,D=null,b=null,F=null,P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,W=0,N=i.getParameter(i.VERSION);N.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(N)[1]),O=W>=1):N.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),O=W>=2);let G=null,H={},$=i.getParameter(i.SCISSOR_BOX),it=i.getParameter(i.VIEWPORT),wt=new Se().fromArray($),_t=new Se().fromArray(it);function Tt(k,ft,et,dt){let xt=new Uint8Array(4),st=i.createTexture();i.bindTexture(k,st),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<et;Dt++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,dt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(ft+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return st}let Y={};Y[i.TEXTURE_2D]=Tt(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=Tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=Tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=Tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),tt(i.DEPTH_TEST),o.setFunc(Ks),Yt(!1),he(Xl),tt(i.CULL_FACE),Wt(ti);function tt(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function rt(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function yt(k,ft){return h[k]!==ft?(i.bindFramebuffer(k,ft),h[k]=ft,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ft),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function ct(k,ft){let et=m,dt=!1;if(k){et=d.get(ft),et===void 0&&(et=[],d.set(ft,et));let xt=k.textures;if(et.length!==xt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Dt=xt.length;st<Dt;st++)et[st]=i.COLOR_ATTACHMENT0+st;et.length=xt.length,dt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,dt=!0);dt&&i.drawBuffers(et)}function Ct(k){return _!==k?(i.useProgram(k),_=k,!0):!1}let zt={[os]:i.FUNC_ADD,[rf]:i.FUNC_SUBTRACT,[of]:i.FUNC_REVERSE_SUBTRACT};zt[af]=i.MIN,zt[cf]=i.MAX;let Nt={[lf]:i.ZERO,[hf]:i.ONE,[uf]:i.SRC_COLOR,[Zl]:i.SRC_ALPHA,[gf]:i.SRC_ALPHA_SATURATE,[pf]:i.DST_COLOR,[df]:i.DST_ALPHA,[ff]:i.ONE_MINUS_SRC_COLOR,[$l]:i.ONE_MINUS_SRC_ALPHA,[mf]:i.ONE_MINUS_DST_COLOR,[Af]:i.ONE_MINUS_DST_ALPHA,[_f]:i.CONSTANT_COLOR,[xf]:i.ONE_MINUS_CONSTANT_COLOR,[yf]:i.CONSTANT_ALPHA,[Ef]:i.ONE_MINUS_CONSTANT_ALPHA};function Wt(k,ft,et,dt,xt,st,Dt,It,pe,re){if(k===ti){p===!0&&(rt(i.BLEND),p=!1);return}if(p===!1&&(tt(i.BLEND),p=!0),k!==sf){if(k!==A||re!==C){if((y!==os||E!==os)&&(i.blendEquation(i.FUNC_ADD),y=os,E=os),re)switch(k){case hr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ut("WebGLState: Invalid blending: ",k);break}else switch(k){case hr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yl:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jl:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",k);break}I=null,x=null,M=null,w=null,g.set(0,0,0),v=0,A=k,C=re}return}xt=xt||ft,st=st||et,Dt=Dt||dt,(ft!==y||xt!==E)&&(i.blendEquationSeparate(zt[ft],zt[xt]),y=ft,E=xt),(et!==I||dt!==x||st!==M||Dt!==w)&&(i.blendFuncSeparate(Nt[et],Nt[dt],Nt[st],Nt[Dt]),I=et,x=dt,M=st,w=Dt),(It.equals(g)===!1||pe!==v)&&(i.blendColor(It.r,It.g,It.b,pe),g.copy(It),v=pe),A=k,C=!1}function jt(k,ft){k.side===Je?rt(i.CULL_FACE):tt(i.CULL_FACE);let et=k.side===ke;ft&&(et=!et),Yt(et),k.blending===hr&&k.transparent===!1?Wt(ti):Wt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),r.setMask(k.colorWrite);let dt=k.stencilWrite;a.setTest(dt),dt&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),An(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?tt(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Yt(k){B!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),B=k)}function he(k){k!==ef?(tt(i.CULL_FACE),k!==R&&(k===Xl?i.cullFace(i.BACK):k===nf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),R=k}function Te(k){k!==D&&(O&&i.lineWidth(k),D=k)}function An(k,ft,et){k?(tt(i.POLYGON_OFFSET_FILL),(b!==ft||F!==et)&&(b=ft,F=et,o.getReversed()&&(ft=-ft),i.polygonOffset(ft,et))):rt(i.POLYGON_OFFSET_FILL)}function Me(k){k?tt(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function Pe(k){k===void 0&&(k=i.TEXTURE0+P-1),G!==k&&(i.activeTexture(k),G=k)}function V(k,ft,et){et===void 0&&(G===null?et=i.TEXTURE0+P-1:et=G);let dt=H[et];dt===void 0&&(dt={type:void 0,texture:void 0},H[et]=dt),(dt.type!==k||dt.texture!==ft)&&(G!==et&&(i.activeTexture(et),G=et),i.bindTexture(k,ft||Y[k]),dt.type=k,dt.texture=ft)}function $e(){let k=H[G];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ce(){try{i.compressedTexImage2D(...arguments)}catch(k){Ut("WebGLState:",k)}}function L(){try{i.compressedTexImage3D(...arguments)}catch(k){Ut("WebGLState:",k)}}function S(){try{i.texSubImage2D(...arguments)}catch(k){Ut("WebGLState:",k)}}function z(){try{i.texSubImage3D(...arguments)}catch(k){Ut("WebGLState:",k)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(k){Ut("WebGLState:",k)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(k){Ut("WebGLState:",k)}}function ot(){try{i.texStorage2D(...arguments)}catch(k){Ut("WebGLState:",k)}}function lt(){try{i.texStorage3D(...arguments)}catch(k){Ut("WebGLState:",k)}}function j(){try{i.texImage2D(...arguments)}catch(k){Ut("WebGLState:",k)}}function nt(){try{i.texImage3D(...arguments)}catch(k){Ut("WebGLState:",k)}}function ht(k){return f[k]!==void 0?f[k]:i.getParameter(k)}function Bt(k,ft){f[k]!==ft&&(i.pixelStorei(k,ft),f[k]=ft)}function At(k){wt.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),wt.copy(k))}function ut(k){_t.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),_t.copy(k))}function Rt(k,ft){let et=l.get(ft);et===void 0&&(et=new WeakMap,l.set(ft,et));let dt=et.get(k);dt===void 0&&(dt=i.getUniformBlockIndex(ft,k.name),et.set(k,dt))}function Pt(k,ft){let dt=l.get(ft).get(k);c.get(ft)!==dt&&(i.uniformBlockBinding(ft,dt,k.__bindingPointIndex),c.set(ft,dt))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},G=null,H={},h={},d=new WeakMap,m=[],_=null,p=!1,A=null,y=null,I=null,x=null,E=null,M=null,w=null,g=new kt(0,0,0),v=0,C=!1,B=null,R=null,D=null,b=null,F=null,wt.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:tt,disable:rt,bindFramebuffer:yt,drawBuffers:ct,useProgram:Ct,setBlending:Wt,setMaterial:jt,setFlipSided:Yt,setCullFace:he,setLineWidth:Te,setPolygonOffset:An,setScissorTest:Me,activeTexture:Pe,bindTexture:V,unbindTexture:$e,compressedTexImage2D:ce,compressedTexImage3D:L,texImage2D:j,texImage3D:nt,pixelStorei:Bt,getParameter:ht,updateUBOMapping:Rt,uniformBlockBinding:Pt,texStorage2D:ot,texStorage3D:lt,texSubImage2D:S,texSubImage3D:z,compressedTexSubImage2D:q,compressedTexSubImage3D:Z,scissor:At,viewport:ut,reset:Kt}}function gy(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Gt,u=new WeakMap,f=new Set,h,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,S){return m?new OffscreenCanvas(L,S):Js("canvas")}function p(L,S,z){let q=1,Z=ce(L);if((Z.width>z||Z.height>z)&&(q=z/Math.max(Z.width,Z.height)),q<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let ot=Math.floor(q*Z.width),lt=Math.floor(q*Z.height);h===void 0&&(h=_(ot,lt));let j=S?_(ot,lt):h;return j.width=ot,j.height=lt,j.getContext("2d").drawImage(L,0,0,ot,lt),Ft("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ot+"x"+lt+")."),j}else return"data"in L&&Ft("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),L;return L}function A(L){return L.generateMipmaps}function y(L){i.generateMipmap(L)}function I(L){return L.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?i.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(L,S,z,q,Z,ot=!1){if(L!==null){if(i[L]!==void 0)return i[L];Ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let lt;q&&(lt=t.get("EXT_texture_norm16"),lt||Ft("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=S;if(S===i.RED&&(z===i.FLOAT&&(j=i.R32F),z===i.HALF_FLOAT&&(j=i.R16F),z===i.UNSIGNED_BYTE&&(j=i.R8),z===i.UNSIGNED_SHORT&&lt&&(j=lt.R16_EXT),z===i.SHORT&&lt&&(j=lt.R16_SNORM_EXT)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.R8UI),z===i.UNSIGNED_SHORT&&(j=i.R16UI),z===i.UNSIGNED_INT&&(j=i.R32UI),z===i.BYTE&&(j=i.R8I),z===i.SHORT&&(j=i.R16I),z===i.INT&&(j=i.R32I)),S===i.RG&&(z===i.FLOAT&&(j=i.RG32F),z===i.HALF_FLOAT&&(j=i.RG16F),z===i.UNSIGNED_BYTE&&(j=i.RG8),z===i.UNSIGNED_SHORT&&lt&&(j=lt.RG16_EXT),z===i.SHORT&&lt&&(j=lt.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RG8UI),z===i.UNSIGNED_SHORT&&(j=i.RG16UI),z===i.UNSIGNED_INT&&(j=i.RG32UI),z===i.BYTE&&(j=i.RG8I),z===i.SHORT&&(j=i.RG16I),z===i.INT&&(j=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGB8UI),z===i.UNSIGNED_SHORT&&(j=i.RGB16UI),z===i.UNSIGNED_INT&&(j=i.RGB32UI),z===i.BYTE&&(j=i.RGB8I),z===i.SHORT&&(j=i.RGB16I),z===i.INT&&(j=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),z===i.UNSIGNED_INT&&(j=i.RGBA32UI),z===i.BYTE&&(j=i.RGBA8I),z===i.SHORT&&(j=i.RGBA16I),z===i.INT&&(j=i.RGBA32I)),S===i.RGB&&(z===i.UNSIGNED_SHORT&&lt&&(j=lt.RGB16_EXT),z===i.SHORT&&lt&&(j=lt.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),S===i.RGBA){let nt=ot?qs:Jt.getTransfer(Z);z===i.FLOAT&&(j=i.RGBA32F),z===i.HALF_FLOAT&&(j=i.RGBA16F),z===i.UNSIGNED_BYTE&&(j=nt===se?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&lt&&(j=lt.RGBA16_EXT),z===i.SHORT&&lt&&(j=lt.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function E(L,S){let z;return L?S===null||S===Qn||S===fr?z=i.DEPTH24_STENCIL8:S===ve?z=i.DEPTH32F_STENCIL8:S===_i&&(z=i.DEPTH24_STENCIL8,Ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Qn||S===fr?z=i.DEPTH_COMPONENT24:S===ve?z=i.DEPTH_COMPONENT32F:S===_i&&(z=i.DEPTH_COMPONENT16),z}function M(L,S){return A(L)===!0||L.isFramebufferTexture&&L.minFilter!==De&&L.minFilter!==ae?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function w(L){let S=L.target;S.removeEventListener("dispose",w),v(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&f.delete(S)}function g(L){let S=L.target;S.removeEventListener("dispose",g),B(S)}function v(L){let S=n.get(L);if(S.__webglInit===void 0)return;let z=L.source,q=d.get(z);if(q){let Z=q[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(L),Object.keys(q).length===0&&d.delete(z)}n.remove(L)}function C(L){let S=n.get(L);i.deleteTexture(S.__webglTexture);let z=L.source,q=d.get(z);delete q[S.__cacheKey],o.memory.textures--}function B(L){let S=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let Z=0;Z<S.__webglFramebuffer[q].length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[q][Z]);else i.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)i.deleteFramebuffer(S.__webglFramebuffer[q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let z=L.textures;for(let q=0,Z=z.length;q<Z;q++){let ot=n.get(z[q]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(z[q])}n.remove(L)}let R=0;function D(){R=0}function b(){return R}function F(L){R=L}function P(){let L=R;return L>=s.maxTextures&&Ft("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+s.maxTextures),R+=1,L}function O(L){let S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function W(L,S){let z=n.get(L);if(L.isVideoTexture&&V(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&z.__version!==L.version){let q=L.image;if(q===null)Ft("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Ft("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(z,L,S);return}}else L.isExternalTexture&&(z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function N(L,S){let z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){rt(z,L,S);return}else L.isExternalTexture&&(z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function G(L,S){let z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&z.__version!==L.version){rt(z,L,S);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function H(L,S){let z=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&z.__version!==L.version){yt(z,L,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}let $={[Xs]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[Ta]:i.MIRRORED_REPEAT},it={[De]:i.NEAREST,[$a]:i.NEAREST_MIPMAP_NEAREST,[bo]:i.NEAREST_MIPMAP_LINEAR,[ae]:i.LINEAR,[ja]:i.LINEAR_MIPMAP_NEAREST,[wn]:i.LINEAR_MIPMAP_LINEAR},wt={[bf]:i.NEVER,[Df]:i.ALWAYS,[wf]:i.LESS,[yc]:i.LEQUAL,[Tf]:i.EQUAL,[Ec]:i.GEQUAL,[Bf]:i.GREATER,[Rf]:i.NOTEQUAL};function _t(L,S){if(S.type===ve&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===ae||S.magFilter===ja||S.magFilter===bo||S.magFilter===wn||S.minFilter===ae||S.minFilter===ja||S.minFilter===bo||S.minFilter===wn)&&Ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(L,i.TEXTURE_WRAP_S,$[S.wrapS]),i.texParameteri(L,i.TEXTURE_WRAP_T,$[S.wrapT]),(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)&&i.texParameteri(L,i.TEXTURE_WRAP_R,$[S.wrapR]),i.texParameteri(L,i.TEXTURE_MAG_FILTER,it[S.magFilter]),i.texParameteri(L,i.TEXTURE_MIN_FILTER,it[S.minFilter]),S.compareFunction&&(i.texParameteri(L,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(L,i.TEXTURE_COMPARE_FUNC,wt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===De||S.minFilter!==bo&&S.minFilter!==wn||S.type===ve&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(L,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Tt(L,S){let z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",w));let q=S.source,Z=d.get(q);Z===void 0&&(Z={},d.set(q,Z));let ot=O(S);if(ot!==L.__cacheKey){Z[ot]===void 0&&(Z[ot]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Z[ot].usedTimes++;let lt=Z[L.__cacheKey];lt!==void 0&&(Z[L.__cacheKey].usedTimes--,lt.usedTimes===0&&C(S)),L.__cacheKey=ot,L.__webglTexture=Z[ot].texture}return z}function Y(L,S,z){return Math.floor(Math.floor(L/z)/S)}function tt(L,S,z,q){let ot=L.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,z,q,S.data);else{ot.sort((Bt,At)=>Bt.start-At.start);let lt=0;for(let Bt=1;Bt<ot.length;Bt++){let At=ot[lt],ut=ot[Bt],Rt=At.start+At.count,Pt=Y(ut.start,S.width,4),Kt=Y(At.start,S.width,4);ut.start<=Rt+1&&Pt===Kt&&Y(ut.start+ut.count-1,S.width,4)===Pt?At.count=Math.max(At.count,ut.start+ut.count-At.start):(++lt,ot[lt]=ut)}ot.length=lt+1;let j=e.getParameter(i.UNPACK_ROW_LENGTH),nt=e.getParameter(i.UNPACK_SKIP_PIXELS),ht=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Bt=0,At=ot.length;Bt<At;Bt++){let ut=ot[Bt],Rt=Math.floor(ut.start/4),Pt=Math.ceil(ut.count/4),Kt=Rt%S.width,k=Math.floor(Rt/S.width),ft=Pt,et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,k),e.texSubImage2D(i.TEXTURE_2D,0,Kt,k,ft,et,z,q,S.data)}L.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,j),e.pixelStorei(i.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(i.UNPACK_SKIP_ROWS,ht)}}function rt(L,S,z){let q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=i.TEXTURE_3D);let Z=Tt(L,S),ot=S.source;e.bindTexture(q,L.__webglTexture,i.TEXTURE0+z);let lt=n.get(ot);if(ot.version!==lt.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let et=Jt.getPrimaries(Jt.workingColorSpace),dt=S.colorSpace===gn?null:Jt.getPrimaries(S.colorSpace),xt=S.colorSpace===gn||et===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt)}e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let nt=p(S.image,!1,s.maxTextureSize);nt=$e(S,nt);let ht=r.convert(S.format,S.colorSpace),Bt=r.convert(S.type),At=x(S.internalFormat,ht,Bt,S.normalized,S.colorSpace,S.isVideoTexture);_t(q,S);let ut,Rt=S.mipmaps,Pt=S.isVideoTexture!==!0,Kt=lt.__version===void 0||Z===!0,k=ot.dataReady,ft=M(S,nt);if(S.isDepthTexture)At=E(S.format===Gi,S.type),Kt&&(Pt?e.texStorage2D(i.TEXTURE_2D,1,At,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,At,nt.width,nt.height,0,ht,Bt,null));else if(S.isDataTexture)if(Rt.length>0){Pt&&Kt&&e.texStorage2D(i.TEXTURE_2D,ft,At,Rt[0].width,Rt[0].height);for(let et=0,dt=Rt.length;et<dt;et++)ut=Rt[et],Pt?k&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ut.width,ut.height,ht,Bt,ut.data):e.texImage2D(i.TEXTURE_2D,et,At,ut.width,ut.height,0,ht,Bt,ut.data);S.generateMipmaps=!1}else Pt?(Kt&&e.texStorage2D(i.TEXTURE_2D,ft,At,nt.width,nt.height),k&&tt(S,nt,ht,Bt)):e.texImage2D(i.TEXTURE_2D,0,At,nt.width,nt.height,0,ht,Bt,nt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Pt&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,At,Rt[0].width,Rt[0].height,nt.depth);for(let et=0,dt=Rt.length;et<dt;et++)if(ut=Rt[et],S.format!==Oe)if(ht!==null)if(Pt){if(k)if(S.layerUpdates.size>0){let xt=Ah(ut.width,ut.height,S.format,S.type);for(let st of S.layerUpdates){let Dt=ut.data.subarray(st*xt/ut.data.BYTES_PER_ELEMENT,(st+1)*xt/ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,st,ut.width,ut.height,1,ht,Dt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,nt.depth,ht,ut.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,At,ut.width,ut.height,nt.depth,0,ut.data,0,0);else Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pt?k&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,ut.width,ut.height,nt.depth,ht,Bt,ut.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,At,ut.width,ut.height,nt.depth,0,ht,Bt,ut.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Pt&&Kt&&e.texStorage2D(i.TEXTURE_2D,ft,At,Rt[0].width,Rt[0].height);for(let et=0,dt=Rt.length;et<dt;et++)ut=Rt[et],S.format!==Oe?ht!==null?Pt?k&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,ut.width,ut.height,ht,ut.data):e.compressedTexImage2D(i.TEXTURE_2D,et,At,ut.width,ut.height,0,ut.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pt?k&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ut.width,ut.height,ht,Bt,ut.data):e.texImage2D(i.TEXTURE_2D,et,At,ut.width,ut.height,0,ht,Bt,ut.data)}else if(S.isDataArrayTexture)if(Pt){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,At,nt.width,nt.height,nt.depth),k)if(S.layerUpdates.size>0){let et=Ah(nt.width,nt.height,S.format,S.type);for(let dt of S.layerUpdates){let xt=nt.data.subarray(dt*et/nt.data.BYTES_PER_ELEMENT,(dt+1)*et/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,dt,nt.width,nt.height,1,ht,Bt,xt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,ht,Bt,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,At,nt.width,nt.height,nt.depth,0,ht,Bt,nt.data);else if(S.isData3DTexture)Pt?(Kt&&e.texStorage3D(i.TEXTURE_3D,ft,At,nt.width,nt.height,nt.depth),k&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,ht,Bt,nt.data)):e.texImage3D(i.TEXTURE_3D,0,At,nt.width,nt.height,nt.depth,0,ht,Bt,nt.data);else if(S.isFramebufferTexture){if(Kt)if(Pt)e.texStorage2D(i.TEXTURE_2D,ft,At,nt.width,nt.height);else{let et=nt.width,dt=nt.height;for(let xt=0;xt<ft;xt++)e.texImage2D(i.TEXTURE_2D,xt,At,et,dt,0,ht,Bt,null),et>>=1,dt>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let et=i.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),nt.parentNode!==et){et.appendChild(nt),f.add(S),et.onpaint=dt=>{let xt=dt.changedElements;for(let st of f)xt.includes(st.image)&&(st.needsUpdate=!0)},et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,nt);else{let xt=i.RGBA,st=i.RGBA,Dt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xt,st,Dt,nt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Rt.length>0){if(Pt&&Kt){let et=ce(Rt[0]);e.texStorage2D(i.TEXTURE_2D,ft,At,et.width,et.height)}for(let et=0,dt=Rt.length;et<dt;et++)ut=Rt[et],Pt?k&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,ht,Bt,ut):e.texImage2D(i.TEXTURE_2D,et,At,ht,Bt,ut);S.generateMipmaps=!1}else if(Pt){if(Kt){let et=ce(nt);e.texStorage2D(i.TEXTURE_2D,ft,At,et.width,et.height)}k&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,Bt,nt)}else e.texImage2D(i.TEXTURE_2D,0,At,ht,Bt,nt);A(S)&&y(q),lt.__version=ot.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function yt(L,S,z){if(S.image.length!==6)return;let q=Tt(L,S),Z=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+z);let ot=n.get(Z);if(Z.version!==ot.__version||q===!0){e.activeTexture(i.TEXTURE0+z);let lt=Jt.getPrimaries(Jt.workingColorSpace),j=S.colorSpace===gn?null:Jt.getPrimaries(S.colorSpace),nt=S.colorSpace===gn||lt===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let ht=S.isCompressedTexture||S.image[0].isCompressedTexture,Bt=S.image[0]&&S.image[0].isDataTexture,At=[];for(let st=0;st<6;st++)!ht&&!Bt?At[st]=p(S.image[st],!0,s.maxCubemapSize):At[st]=Bt?S.image[st].image:S.image[st],At[st]=$e(S,At[st]);let ut=At[0],Rt=r.convert(S.format,S.colorSpace),Pt=r.convert(S.type),Kt=x(S.internalFormat,Rt,Pt,S.normalized,S.colorSpace),k=S.isVideoTexture!==!0,ft=ot.__version===void 0||q===!0,et=Z.dataReady,dt=M(S,ut);_t(i.TEXTURE_CUBE_MAP,S);let xt;if(ht){k&&ft&&e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Kt,ut.width,ut.height);for(let st=0;st<6;st++){xt=At[st].mipmaps;for(let Dt=0;Dt<xt.length;Dt++){let It=xt[Dt];S.format!==Oe?Rt!==null?k?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,0,0,It.width,It.height,Rt,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,Kt,It.width,It.height,0,It.data):Ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,0,0,It.width,It.height,Rt,Pt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt,Kt,It.width,It.height,0,Rt,Pt,It.data)}}}else{if(xt=S.mipmaps,k&&ft){xt.length>0&&dt++;let st=ce(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,dt,Kt,st.width,st.height)}for(let st=0;st<6;st++)if(Bt){k?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,At[st].width,At[st].height,Rt,Pt,At[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Kt,At[st].width,At[st].height,0,Rt,Pt,At[st].data);for(let Dt=0;Dt<xt.length;Dt++){let pe=xt[Dt].image[st].image;k?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,0,0,pe.width,pe.height,Rt,Pt,pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,Kt,pe.width,pe.height,0,Rt,Pt,pe.data)}}else{k?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Rt,Pt,At[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Kt,Rt,Pt,At[st]);for(let Dt=0;Dt<xt.length;Dt++){let It=xt[Dt];k?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,0,0,Rt,Pt,It.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Dt+1,Kt,Rt,Pt,It.image[st])}}}A(S)&&y(i.TEXTURE_CUBE_MAP),ot.__version=Z.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function ct(L,S,z,q,Z,ot){let lt=r.convert(z.format,z.colorSpace),j=r.convert(z.type),nt=x(z.internalFormat,lt,j,z.normalized,z.colorSpace),ht=n.get(S),Bt=n.get(z);if(Bt.__renderTarget=S,!ht.__hasExternalTextures){let At=Math.max(1,S.width>>ot),ut=Math.max(1,S.height>>ot);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,ot,nt,At,ut,S.depth,0,lt,j,null):e.texImage2D(Z,ot,nt,At,ut,0,lt,j,null)}e.bindFramebuffer(i.FRAMEBUFFER,L),Pe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,Z,Bt.__webglTexture,0,Me(S)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,Z,Bt.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(L,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,L),S.depthBuffer){let q=S.depthTexture,Z=q&&q.isDepthTexture?q.type:null,ot=E(S.stencilBuffer,Z),lt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Pe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(S),ot,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(S),ot,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ot,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,L)}else{let q=S.textures;for(let Z=0;Z<q.length;Z++){let ot=q[Z],lt=r.convert(ot.format,ot.colorSpace),j=r.convert(ot.type),nt=x(ot.internalFormat,lt,j,ot.normalized,ot.colorSpace);Pe(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Me(S),nt,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Me(S),nt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,nt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function zt(L,S,z){let q=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(S.depthTexture);if(Z.__renderTarget=S,(!Z.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),q){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),_t(i.TEXTURE_CUBE_MAP,S.depthTexture);let ht=r.convert(S.depthTexture.format),Bt=r.convert(S.depthTexture.type),At;S.depthTexture.format===qn?At=i.DEPTH_COMPONENT24:S.depthTexture.format===Gi&&(At=i.DEPTH24_STENCIL8);for(let ut=0;ut<6;ut++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,At,S.width,S.height,0,ht,Bt,null)}}else W(S.depthTexture,0);let ot=Z.__webglTexture,lt=Me(S),j=q?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,nt=S.depthTexture.format===Gi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===qn)Pe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,j,ot,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,nt,j,ot,0);else if(S.depthTexture.format===Gi)Pe(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,j,ot,0,lt):i.framebufferTexture2D(i.FRAMEBUFFER,nt,j,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Nt(L){let S=n.get(L),z=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){let q=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){let Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",Z)};q.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=q}if(L.depthTexture&&!S.__autoAllocateDepthBuffer)if(z)for(let q=0;q<6;q++)zt(S.__webglFramebuffer[q],L,q);else{let q=L.texture.mipmaps;q&&q.length>0?zt(S.__webglFramebuffer[0],L,0):zt(S.__webglFramebuffer,L,0)}else if(z){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=i.createRenderbuffer(),Ct(S.__webglDepthbuffer[q],L,!1);else{let Z=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ot)}}else{let q=L.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Ct(S.__webglDepthbuffer,L,!1);else{let Z=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ot)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(L,S,z){let q=n.get(L);S!==void 0&&ct(q.__webglFramebuffer,L,L.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Nt(L)}function jt(L){let S=L.texture,z=n.get(L),q=n.get(S);L.addEventListener("dispose",g);let Z=L.textures,ot=L.isWebGLCubeRenderTarget===!0,lt=Z.length>1;if(lt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=S.version,o.memory.textures++),ot){z.__webglFramebuffer=[];for(let j=0;j<6;j++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[j]=[];for(let nt=0;nt<S.mipmaps.length;nt++)z.__webglFramebuffer[j][nt]=i.createFramebuffer()}else z.__webglFramebuffer[j]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let j=0;j<S.mipmaps.length;j++)z.__webglFramebuffer[j]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(lt)for(let j=0,nt=Z.length;j<nt;j++){let ht=n.get(Z[j]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),o.memory.textures++)}if(L.samples>0&&Pe(L)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let j=0;j<Z.length;j++){let nt=Z[j];z.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[j]);let ht=r.convert(nt.format,nt.colorSpace),Bt=r.convert(nt.type),At=x(nt.internalFormat,ht,Bt,nt.normalized,nt.colorSpace,L.isXRRenderTarget===!0),ut=Me(L);i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,At,L.width,L.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,z.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),L.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(z.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),_t(i.TEXTURE_CUBE_MAP,S);for(let j=0;j<6;j++)if(S.mipmaps&&S.mipmaps.length>0)for(let nt=0;nt<S.mipmaps.length;nt++)ct(z.__webglFramebuffer[j][nt],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,nt);else ct(z.__webglFramebuffer[j],L,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);A(S)&&y(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(lt){for(let j=0,nt=Z.length;j<nt;j++){let ht=Z[j],Bt=n.get(ht),At=i.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(At=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(At,Bt.__webglTexture),_t(At,ht),ct(z.__webglFramebuffer,L,ht,i.COLOR_ATTACHMENT0+j,At,0),A(ht)&&y(At)}e.unbindTexture()}else{let j=i.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(j=L.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(j,q.__webglTexture),_t(j,S),S.mipmaps&&S.mipmaps.length>0)for(let nt=0;nt<S.mipmaps.length;nt++)ct(z.__webglFramebuffer[nt],L,S,i.COLOR_ATTACHMENT0,j,nt);else ct(z.__webglFramebuffer,L,S,i.COLOR_ATTACHMENT0,j,0);A(S)&&y(j),e.unbindTexture()}L.depthBuffer&&Nt(L)}function Yt(L){let S=L.textures;for(let z=0,q=S.length;z<q;z++){let Z=S[z];if(A(Z)){let ot=I(L),lt=n.get(Z).__webglTexture;e.bindTexture(ot,lt),y(ot),e.unbindTexture()}}}let he=[],Te=[];function An(L){if(L.samples>0){if(Pe(L)===!1){let S=L.textures,z=L.width,q=L.height,Z=i.COLOR_BUFFER_BIT,ot=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=n.get(L),j=S.length>1;if(j)for(let ht=0;ht<S.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,lt.__webglMultisampledFramebuffer);let nt=L.texture.mipmaps;nt&&nt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglFramebuffer);for(let ht=0;ht<S.length;ht++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ht]);let Bt=n.get(S[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Bt,0)}i.blitFramebuffer(0,0,z,q,0,0,z,q,Z,i.NEAREST),c===!0&&(he.length=0,Te.length=0,he.push(i.COLOR_ATTACHMENT0+ht),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(he.push(ot),Te.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Te)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let ht=0;ht<S.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,lt.__webglColorRenderbuffer[ht]);let Bt=n.get(S[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,Bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,lt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&c){let S=L.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Me(L){return Math.min(s.maxSamples,L.samples)}function Pe(L){let S=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function V(L){let S=o.render.frame;u.get(L)!==S&&(u.set(L,S),L.update())}function $e(L,S){let z=L.colorSpace,q=L.format,Z=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||z!==Ai&&z!==gn&&(Jt.getTransfer(z)===se?(q!==Oe||Z!==Qt)&&Ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",z)),S}function ce(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(l.width=L.naturalWidth||L.width,l.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(l.width=L.displayWidth,l.height=L.displayHeight):(l.width=L.width,l.height=L.height),l}this.allocateTextureUnit=P,this.resetTextureUnits=D,this.getTextureUnits=b,this.setTextureUnits=F,this.setTexture2D=W,this.setTexture2DArray=N,this.setTexture3D=G,this.setTextureCube=H,this.rebindTextures=Wt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=An,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Pe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function _y(i,t){function e(n,s=gn){let r,o=Jt.getTransfer(s);if(n===Qt)return i.UNSIGNED_BYTE;if(n===ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===dr)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ar)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sh)return i.BYTE;if(n===rh)return i.SHORT;if(n===_i)return i.UNSIGNED_SHORT;if(n===tc)return i.INT;if(n===Qn)return i.UNSIGNED_INT;if(n===ve)return i.FLOAT;if(n===Ee)return i.HALF_FLOAT;if(n===oh)return i.ALPHA;if(n===cs)return i.RGB;if(n===Oe)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===Gi)return i.DEPTH_STENCIL;if(n===ei)return i.RED;if(n===ic)return i.RED_INTEGER;if(n===mn)return i.RG;if(n===sc)return i.RG_INTEGER;if(n===rc)return i.RGBA_INTEGER;if(n===ki||n===xi||n===wo||n===yi)if(o===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ki)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yi)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ki)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xi)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yi)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pr||n===oc||n===Vi||n===ls)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vi)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ls)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===mr||n===hs||n===us||n===gr||n===_r||n===fs||n===xr)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===mr||n===hs)return o===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===us)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===gr)return r.COMPRESSED_R11_EAC;if(n===_r)return r.COMPRESSED_SIGNED_R11_EAC;if(n===fs)return r.COMPRESSED_RG11_EAC;if(n===xr)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ei||n===ac||n===cc||n===lc||n===Hi||n===hc||n===uc||n===fc||n===dc||n===Ac||n===pc||n===mc||n===gc||n===_c)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ei)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ac)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===cc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===lc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Hi)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===hc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===dc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ac)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===pc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===mc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===gc)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_c)return o===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zi||n===xc||n===yr)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===zi)return o===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yr)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Er||n===Sr||n===ds||n===Mr)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Er)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Sr)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ds)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mr)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===fr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ho(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new En({vertexShader:xy,fragmentShader:yy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ge(new rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Th=class extends Yn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,m=null,_=typeof XRWebGLBinding<"u",p=new wh,A={},y=e.getContextAttributes(),I=null,x=null,E=[],M=[],w=new Gt,g=null,v=null,C=new qe;C.viewport=new Se;let B=new qe;B.viewport=new Se;let R=[C,B],D=new qa,b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let tt=E[Y];return tt===void 0&&(tt=new er,E[Y]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(Y){let tt=E[Y];return tt===void 0&&(tt=new er,E[Y]=tt),tt.getGripSpace()},this.getHand=function(Y){let tt=E[Y];return tt===void 0&&(tt=new er,E[Y]=tt),tt.getHandSpace()};function P(Y){let tt=M.indexOf(Y.inputSource);if(tt===-1)return;let rt=E[tt];rt!==void 0&&(rt.update(Y.inputSource,Y.frame,l||o),rt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){s.removeEventListener("select",P),s.removeEventListener("selectstart",P),s.removeEventListener("selectend",P),s.removeEventListener("squeeze",P),s.removeEventListener("squeezestart",P),s.removeEventListener("squeezeend",P),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",W);for(let Y=0;Y<E.length;Y++){let tt=M[Y];tt!==null&&(M[Y]=null,E[Y].disconnect(tt))}b=null,F=null,p.reset();for(let Y in A)delete A[Y];if(t.setRenderTarget(I),d=null,h=null,f=null,s=null,x=null,Tt.stop(),n.isPresenting=!1,t.setPixelRatio(g),t.setSize(w.width,w.height,!1),v!==null){let Y=v.camera;Y.fov=v.fov,Y.zoom=v.zoom,Y.updateProjectionMatrix(),v=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(I=t.getRenderTarget(),s.addEventListener("select",P),s.addEventListener("selectstart",P),s.addEventListener("selectend",P),s.addEventListener("squeeze",P),s.addEventListener("squeezestart",P),s.addEventListener("squeezeend",P),s.addEventListener("end",O),s.addEventListener("inputsourceschange",W),y.xrCompatible!==!0&&await e.makeXRCompatible(),g=t.getPixelRatio(),t.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,yt=null,ct=null;y.depth&&(ct=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=y.stencil?Gi:qn,yt=y.stencil?fr:Qn);let Ct={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Ct),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new pn(h.textureWidth,h.textureHeight,{format:Oe,type:Qt,depthTexture:new Pi(h.textureWidth,h.textureHeight,yt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let rt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new pn(d.framebufferWidth,d.framebufferHeight,{format:Oe,type:Qt,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Tt.setContext(s),Tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function W(Y){for(let tt=0;tt<Y.removed.length;tt++){let rt=Y.removed[tt],yt=M.indexOf(rt);yt>=0&&(M[yt]=null,E[yt].disconnect(rt))}for(let tt=0;tt<Y.added.length;tt++){let rt=Y.added[tt],yt=M.indexOf(rt);if(yt===-1){for(let Ct=0;Ct<E.length;Ct++)if(Ct>=M.length){M.push(rt),yt=Ct;break}else if(M[Ct]===null){M[Ct]=rt,yt=Ct;break}if(yt===-1)break}let ct=E[yt];ct&&ct.connect(rt)}}let N=new U,G=new U;function H(Y,tt,rt){N.setFromMatrixPosition(tt.matrixWorld),G.setFromMatrixPosition(rt.matrixWorld);let yt=N.distanceTo(G),ct=tt.projectionMatrix.elements,Ct=rt.projectionMatrix.elements,zt=ct[14]/(ct[10]-1),Nt=ct[14]/(ct[10]+1),Wt=(ct[9]+1)/ct[5],jt=(ct[9]-1)/ct[5],Yt=(ct[8]-1)/ct[0],he=(Ct[8]+1)/Ct[0],Te=zt*Yt,An=zt*he,Me=yt/(-Yt+he),Pe=Me*-Yt;if(tt.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pe),Y.translateZ(Me),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ct[10]===-1)Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let V=zt+Me,$e=Nt+Me,ce=Te-Pe,L=An+(yt-Pe),S=Wt*Nt/$e*V,z=jt*Nt/$e*V;Y.projectionMatrix.makePerspective(ce,L,S,z,V,$e),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function $(Y,tt){tt===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(tt.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let tt=Y.near,rt=Y.far;p.texture!==null&&(p.depthNear>0&&(tt=p.depthNear),p.depthFar>0&&(rt=p.depthFar)),D.near=B.near=C.near=tt,D.far=B.far=C.far=rt,(b!==D.near||F!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),b=D.near,F=D.far),D.layers.mask=Y.layers.mask|6,C.layers.mask=D.layers.mask&-5,B.layers.mask=D.layers.mask&-3;let yt=Y.parent,ct=D.cameras;$(D,yt);for(let Ct=0;Ct<ct.length;Ct++)$(ct[Ct],yt);ct.length===2?H(D,C,B):D.projectionMatrix.copy(C.projectionMatrix),v===null&&Y.isPerspectiveCamera&&(v={camera:Y,fov:Y.fov,zoom:Y.zoom}),it(Y,D,yt)};function it(Y,tt,rt){rt===null?Y.matrix.copy(tt.matrixWorld):(Y.matrix.copy(rt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(tt.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(tt.projectionMatrix),Y.projectionMatrixInverse.copy(tt.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=$s*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(Y){c=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(Y){return A[Y]};let wt=null;function _t(Y,tt){if(u=tt.getViewerPose(l||o),m=tt,u!==null){let rt=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let yt=!1;rt.length!==D.cameras.length&&(D.cameras.length=0,yt=!0);for(let Nt=0;Nt<rt.length;Nt++){let Wt=rt[Nt],jt=null;if(d!==null)jt=d.getViewport(Wt);else{let he=f.getViewSubImage(h,Wt);jt=he.viewport,Nt===0&&(t.setRenderTargetTextures(x,he.colorTexture,he.depthStencilTexture),t.setRenderTarget(x))}let Yt=R[Nt];Yt===void 0&&(Yt=new qe,Yt.layers.enable(Nt),Yt.viewport=new Se,R[Nt]=Yt),Yt.matrix.fromArray(Wt.transform.matrix),Yt.matrix.decompose(Yt.position,Yt.quaternion,Yt.scale),Yt.projectionMatrix.fromArray(Wt.projectionMatrix),Yt.projectionMatrixInverse.copy(Yt.projectionMatrix).invert(),Yt.viewport.set(jt.x,jt.y,jt.width,jt.height),Nt===0&&(D.matrix.copy(Yt.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),yt===!0&&D.cameras.push(Yt)}let ct=s.enabledFeatures;if(ct&&ct.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let Nt=f.getDepthInformation(rt[0]);Nt&&Nt.isValid&&Nt.texture&&p.init(Nt,s.renderState)}if(ct&&ct.includes("camera-access")&&_){t.state.unbindTexture(),f=n.getBinding();for(let Nt=0;Nt<rt.length;Nt++){let Wt=rt[Nt].camera;if(Wt){let jt=A[Wt];jt||(jt=new ho,A[Wt]=jt);let Yt=f.getCameraImage(Wt);jt.sourceTexture=Yt}}}}for(let rt=0;rt<E.length;rt++){let yt=M[rt],ct=E[rt];yt!==null&&ct!==void 0&&ct.update(yt,tt,l||o)}wt&&wt(Y,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),m=null}let Tt=new ld;Tt.setAnimationLoop(_t),this.setAnimationLoop=function(Y){wt=Y},this.dispose=function(){}}},Ey=new Ht,pd=new Ot;pd.set(-1,0,0,0,1,0,0,0,1);function Sy(i,t){function e(p,A){p.matrixAutoUpdate===!0&&p.updateMatrix(),A.value.copy(p.matrix)}function n(p,A){A.color.getRGB(p.fogColor.value,uh(i)),A.isFog?(p.fogNear.value=A.near,p.fogFar.value=A.far):A.isFogExp2&&(p.fogDensity.value=A.density)}function s(p,A,y,I,x){A.isNodeMaterial?A.uniformsNeedUpdate=!1:A.isMeshBasicMaterial?r(p,A):A.isMeshLambertMaterial?(r(p,A),A.envMap&&(p.envMapIntensity.value=A.envMapIntensity)):A.isMeshToonMaterial?(r(p,A),f(p,A)):A.isMeshPhongMaterial?(r(p,A),u(p,A),A.envMap&&(p.envMapIntensity.value=A.envMapIntensity)):A.isMeshStandardMaterial?(r(p,A),h(p,A),A.isMeshPhysicalMaterial&&d(p,A,x)):A.isMeshMatcapMaterial?(r(p,A),m(p,A)):A.isMeshDepthMaterial?r(p,A):A.isMeshDistanceMaterial?(r(p,A),_(p,A)):A.isMeshNormalMaterial?r(p,A):A.isLineBasicMaterial?(o(p,A),A.isLineDashedMaterial&&a(p,A)):A.isPointsMaterial?c(p,A,y,I):A.isSpriteMaterial?l(p,A):A.isShadowMaterial?(p.color.value.copy(A.color),p.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function r(p,A){p.opacity.value=A.opacity,A.color&&p.diffuse.value.copy(A.color),A.emissive&&p.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(p.map.value=A.map,e(A.map,p.mapTransform)),A.alphaMap&&(p.alphaMap.value=A.alphaMap,e(A.alphaMap,p.alphaMapTransform)),A.bumpMap&&(p.bumpMap.value=A.bumpMap,e(A.bumpMap,p.bumpMapTransform),p.bumpScale.value=A.bumpScale,A.side===ke&&(p.bumpScale.value*=-1)),A.normalMap&&(p.normalMap.value=A.normalMap,e(A.normalMap,p.normalMapTransform),p.normalScale.value.copy(A.normalScale),A.side===ke&&p.normalScale.value.negate()),A.displacementMap&&(p.displacementMap.value=A.displacementMap,e(A.displacementMap,p.displacementMapTransform),p.displacementScale.value=A.displacementScale,p.displacementBias.value=A.displacementBias),A.emissiveMap&&(p.emissiveMap.value=A.emissiveMap,e(A.emissiveMap,p.emissiveMapTransform)),A.specularMap&&(p.specularMap.value=A.specularMap,e(A.specularMap,p.specularMapTransform)),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest);let y=t.get(A),I=y.envMap,x=y.envMapRotation;I&&(p.envMap.value=I,p.envMapRotation.value.setFromMatrix4(Ey.makeRotationFromEuler(x)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(pd),p.reflectivity.value=A.reflectivity,p.ior.value=A.ior,p.refractionRatio.value=A.refractionRatio),A.lightMap&&(p.lightMap.value=A.lightMap,p.lightMapIntensity.value=A.lightMapIntensity,e(A.lightMap,p.lightMapTransform)),A.aoMap&&(p.aoMap.value=A.aoMap,p.aoMapIntensity.value=A.aoMapIntensity,e(A.aoMap,p.aoMapTransform))}function o(p,A){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,A.map&&(p.map.value=A.map,e(A.map,p.mapTransform))}function a(p,A){p.dashSize.value=A.dashSize,p.totalSize.value=A.dashSize+A.gapSize,p.scale.value=A.scale}function c(p,A,y,I){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,p.size.value=A.size*y,p.scale.value=I*.5,A.map&&(p.map.value=A.map,e(A.map,p.uvTransform)),A.alphaMap&&(p.alphaMap.value=A.alphaMap,e(A.alphaMap,p.alphaMapTransform)),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest)}function l(p,A){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,p.rotation.value=A.rotation,A.map&&(p.map.value=A.map,e(A.map,p.mapTransform)),A.alphaMap&&(p.alphaMap.value=A.alphaMap,e(A.alphaMap,p.alphaMapTransform)),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest)}function u(p,A){p.specular.value.copy(A.specular),p.shininess.value=Math.max(A.shininess,1e-4)}function f(p,A){A.gradientMap&&(p.gradientMap.value=A.gradientMap)}function h(p,A){p.metalness.value=A.metalness,A.metalnessMap&&(p.metalnessMap.value=A.metalnessMap,e(A.metalnessMap,p.metalnessMapTransform)),p.roughness.value=A.roughness,A.roughnessMap&&(p.roughnessMap.value=A.roughnessMap,e(A.roughnessMap,p.roughnessMapTransform)),A.envMap&&(p.envMapIntensity.value=A.envMapIntensity)}function d(p,A,y){p.ior.value=A.ior,A.sheen>0&&(p.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),p.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(p.sheenColorMap.value=A.sheenColorMap,e(A.sheenColorMap,p.sheenColorMapTransform)),A.sheenRoughnessMap&&(p.sheenRoughnessMap.value=A.sheenRoughnessMap,e(A.sheenRoughnessMap,p.sheenRoughnessMapTransform))),A.clearcoat>0&&(p.clearcoat.value=A.clearcoat,p.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(p.clearcoatMap.value=A.clearcoatMap,e(A.clearcoatMap,p.clearcoatMapTransform)),A.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap,e(A.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),A.clearcoatNormalMap&&(p.clearcoatNormalMap.value=A.clearcoatNormalMap,e(A.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),A.side===ke&&p.clearcoatNormalScale.value.negate())),A.dispersion>0&&(p.dispersion.value=A.dispersion),A.retroreflectivity>0&&(p.retroreflectivity.value=A.retroreflectivity),A.iridescence>0&&(p.iridescence.value=A.iridescence,p.iridescenceIOR.value=A.iridescenceIOR,p.iridescenceThicknessMinimum.value=A.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=A.iridescenceThicknessRange[1],A.iridescenceMap&&(p.iridescenceMap.value=A.iridescenceMap,e(A.iridescenceMap,p.iridescenceMapTransform)),A.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=A.iridescenceThicknessMap,e(A.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),A.transmission>0&&(p.transmission.value=A.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),A.transmissionMap&&(p.transmissionMap.value=A.transmissionMap,e(A.transmissionMap,p.transmissionMapTransform)),p.thickness.value=A.thickness,A.thicknessMap&&(p.thicknessMap.value=A.thicknessMap,e(A.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=A.attenuationDistance,p.attenuationColor.value.copy(A.attenuationColor)),A.anisotropy>0&&(p.anisotropyVector.value.set(A.anisotropy*Math.cos(A.anisotropyRotation),A.anisotropy*Math.sin(A.anisotropyRotation)),A.anisotropyMap&&(p.anisotropyMap.value=A.anisotropyMap,e(A.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=A.specularIntensity,p.specularColor.value.copy(A.specularColor),A.specularColorMap&&(p.specularColorMap.value=A.specularColorMap,e(A.specularColorMap,p.specularColorMapTransform)),A.specularIntensityMap&&(p.specularIntensityMap.value=A.specularIntensityMap,e(A.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,A){A.matcap&&(p.matcap.value=A.matcap)}function _(p,A){let y=t.get(A).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function My(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,E){let M=E.program;n.uniformBlockBinding(x,M)}function l(x,E){let M=s[x.id];M===void 0&&(p(x),M=u(x),s[x.id]=M,x.addEventListener("dispose",y));let w=E.program;n.updateUBOMapping(x,w);let g=t.render.frame;r[x.id]!==g&&(h(x),r[x.id]=g)}function u(x){let E=f();x.__bindingPointIndex=E;let M=i.createBuffer(),w=x.__size,g=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,w,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){let E=s[x.id],M=x.uniforms,w=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let g=0,v=M.length;g<v;g++){let C=M[g];if(Array.isArray(C))for(let B=0,R=C.length;B<R;B++)d(C[B],g,B,w);else d(C,g,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,E,M,w){if(_(x,E,M,w)===!0){let g=x.__offset,v=x.value;if(Array.isArray(v)){let C=0;for(let B=0;B<v.length;B++){let R=v[B],D=A(R);m(R,x.__data,C),typeof R!="number"&&typeof R!="boolean"&&!R.isMatrix3&&!ArrayBuffer.isView(R)&&(C+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(v,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,x.__data)}}function m(x,E,M){typeof x=="number"||typeof x=="boolean"?E[0]=x:x.isMatrix3?(E[0]=x.elements[0],E[1]=x.elements[1],E[2]=x.elements[2],E[3]=0,E[4]=x.elements[3],E[5]=x.elements[4],E[6]=x.elements[5],E[7]=0,E[8]=x.elements[6],E[9]=x.elements[7],E[10]=x.elements[8],E[11]=0):ArrayBuffer.isView(x)?E.set(new x.constructor(x.buffer,x.byteOffset,E.length)):x.toArray(E,M)}function _(x,E,M,w){let g=x.value,v=E+"_"+M;if(w[v]===void 0)return typeof g=="number"||typeof g=="boolean"?w[v]=g:ArrayBuffer.isView(g)?w[v]=g.slice():w[v]=g.clone(),!0;{let C=w[v];if(typeof g=="number"||typeof g=="boolean"){if(C!==g)return w[v]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(C.equals(g)===!1)return C.copy(g),!0}}return!1}function p(x){let E=x.uniforms,M=0,w=16;for(let v=0,C=E.length;v<C;v++){let B=Array.isArray(E[v])?E[v]:[E[v]];for(let R=0,D=B.length;R<D;R++){let b=B[R],F=Array.isArray(b.value)?b.value:[b.value];for(let P=0,O=F.length;P<O;P++){let W=F[P],N=A(W),G=M%w,H=G%N.boundary,$=G+H;M+=H,$!==0&&w-$<N.storage&&(M+=w-$),b.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),b.__offset=M,M+=N.storage}}}let g=M%w;return g>0&&(M+=w-g),x.__size=M,x.__cache={},this}function A(x){let E={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(E.boundary=4,E.storage=4):x.isVector2?(E.boundary=8,E.storage=8):x.isVector3||x.isColor?(E.boundary=16,E.storage=12):x.isVector4?(E.boundary=16,E.storage=16):x.isMatrix3?(E.boundary=48,E.storage=48):x.isMatrix4?(E.boundary=64,E.storage=64):x.isTexture?Ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(E.boundary=16,E.storage=x.byteLength):Ft("WebGLRenderer: Unsupported uniform value type.",x),E}function y(x){let E=x.target;E.removeEventListener("dispose",y);let M=o.indexOf(E.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function I(){for(let x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:c,update:l,dispose:I}}var vy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function Cy(){return ni===null&&(ni=new Un(vy,16,16,mn,Ee),ni.name="DFG_LUT",ni.minFilter=ae,ni.magFilter=ae,ni.wrapS=hn,ni.wrapT=hn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var Cc=class{constructor(t={}){let{canvas:e=Lf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=Qt}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=d,p=new Set([rc,sc,ic]),A=new Set([Qt,Qn,_i,fr,ec,nc]),y=new Uint32Array(4),I=new Int32Array(4),x=new U,E=null,M=null,w=[],g=[],v=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,B=!1,R=null,D=null,b=null,F=null;this._outputColorSpace=be;let P=0,O=0,W=null,N=-1,G=null,H=new Se,$=new Se,it=null,wt=new kt(0),_t=0,Tt=e.width,Y=e.height,tt=1,rt=null,yt=null,ct=new Se(0,0,Tt,Y),Ct=new Se(0,0,Tt,Y),zt=!1,Nt=new sr,Wt=!1,jt=!1,Yt=new Ht,he=new U,Te=new Se,An={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Me=!1;function Pe(){return W===null?tt:1}let V=n;function $e(T,Q){return e.getContext(T,Q)}let ce,L,S,z,q,Z,ot,lt,j,nt,ht,Bt,At,ut,Rt,Pt,Kt,k,ft,et,dt,xt,st;try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",pe,!1),e.addEventListener("webglcontextrestored",re,!1),e.addEventListener("webglcontextcreationerror",Rn,!1),V===null){let Q="webgl2";if(V=$e(Q,T),V===null)throw $e(Q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(T){throw e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Rn,!1),Ut("WebGLRenderer: "+T.message),T}function Dt(){ce=new D_(V),ce.init(),dt=new _y(V,ce),L=new S_(V,ce,t,dt),S=new my(V,ce),L.reversedDepthBuffer&&h&&S.buffers.depth.setReversed(!0),D=V.createFramebuffer(),b=V.createFramebuffer(),F=V.createFramebuffer(),z=new P_(V),q=new ny,Z=new gy(V,ce,S,q,L,dt,z),ot=new R_(C),lt=new Nm(V),xt=new y_(V,lt),j=new F_(V,lt,z,xt),nt=new N_(V,j,lt,xt,z),k=new U_(V,L,Z),Rt=new M_(q),ht=new ey(C,ot,ce,L,xt,Rt),Bt=new Sy(C,q),At=new sy,ut=new hy(ce),Kt=new x_(C,ot,S,nt,m,c),Pt=new py(C,nt,L),st=new My(V,z,L,S),ft=new E_(V,ce,z),et=new L_(V,ce,z),z.programs=ht.programs,C.capabilities=L,C.extensions=ce,C.properties=q,C.renderLists=At,C.shadowMap=Pt,C.state=S,C.info=z}_!==Qt&&(v=new Q_(_,e.width,e.height,a,s,r));let It=new Th(C,V);this.xr=It,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){let T=ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return tt},this.setPixelRatio=function(T){T!==void 0&&(tt=T,this.setSize(Tt,Y,!1))},this.getSize=function(T){return T.set(Tt,Y)},this.setSize=function(T,Q,J=!0){if(It.isPresenting){Ft("WebGLRenderer: Can't change size while VR device is presenting.");return}Tt=T,Y=Q,e.width=Math.floor(T*tt),e.height=Math.floor(Q*tt),J===!0&&(e.style.width=T+"px",e.style.height=Q+"px"),v!==null&&v.setSize(e.width,e.height),this.setViewport(0,0,T,Q)},this.getDrawingBufferSize=function(T){return T.set(Tt*tt,Y*tt).floor()},this.setDrawingBufferSize=function(T,Q,J){Tt=T,Y=Q,tt=J,e.width=Math.floor(T*J),e.height=Math.floor(Q*J),this.setViewport(0,0,T,Q)},this.setEffects=function(T){if(_===Qt){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let Q=0;Q<T.length;Q++)if(T[Q].isOutputPass===!0){Ft("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}v.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(H)},this.getViewport=function(T){return T.copy(ct)},this.setViewport=function(T,Q,J,K){T.isVector4?ct.set(T.x,T.y,T.z,T.w):ct.set(T,Q,J,K),S.viewport(H.copy(ct).multiplyScalar(tt).round())},this.getScissor=function(T){return T.copy(Ct)},this.setScissor=function(T,Q,J,K){T.isVector4?Ct.set(T.x,T.y,T.z,T.w):Ct.set(T,Q,J,K),S.scissor($.copy(Ct).multiplyScalar(tt).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(T){S.setScissorTest(zt=T)},this.setOpaqueSort=function(T){rt=T},this.setTransparentSort=function(T){yt=T},this.getClearColor=function(T){return T.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(T=!0,Q=!0,J=!0){let K=0;if(T){let X=!1;if(W!==null){let gt=W.texture.format;X=p.has(gt)}if(X){let gt=W.texture.type,St=A.has(gt),mt=Kt.getClearColor(),Mt=Kt.getClearAlpha(),bt=mt.r,Xt=mt.g,Zt=mt.b;St?(y[0]=bt,y[1]=Xt,y[2]=Zt,y[3]=Mt,V.clearBufferuiv(V.COLOR,0,y)):(I[0]=bt,I[1]=Xt,I[2]=Zt,I[3]=Mt,V.clearBufferiv(V.COLOR,0,I))}else K|=V.COLOR_BUFFER_BIT}Q&&(K|=V.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(K|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&V.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),R=T},this.dispose=function(){e.removeEventListener("webglcontextlost",pe,!1),e.removeEventListener("webglcontextrestored",re,!1),e.removeEventListener("webglcontextcreationerror",Rn,!1),Kt.dispose(),At.dispose(),ut.dispose(),q.dispose(),ot.dispose(),nt.dispose(),xt.dispose(),st.dispose(),ht.dispose(),It.dispose(),It.removeEventListener("sessionstart",_u),It.removeEventListener("sessionend",xu),Zi.stop()};function pe(T){T.preventDefault(),ch("WebGLRenderer: Context Lost."),B=!0}function re(){ch("WebGLRenderer: Context Restored."),B=!1;let T=z.autoReset,Q=Pt.enabled,J=Pt.autoUpdate,K=Pt.needsUpdate,X=Pt.type;Dt(),z.autoReset=T,Pt.enabled=Q,Pt.autoUpdate=J,Pt.needsUpdate=K,Pt.type=X}function Rn(T){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Wn(T){let Q=T.target;Q.removeEventListener("dispose",Wn),Mp(Q)}function Mp(T){vp(T),q.remove(T)}function vp(T){let Q=q.get(T).programs;Q!==void 0&&(Q.forEach(function(J){ht.releaseProgram(J)}),T.isShaderMaterial&&ht.releaseShaderCache(T))}this.renderBufferDirect=function(T,Q,J,K,X,gt){Q===null&&(Q=An);let St=X.isMesh&&X.matrixWorld.determinantAffine()<0,mt=bp(T,Q,J,K,X);S.setMaterial(K,St);let Mt=J.index,bt=1;if(K.wireframe===!0){if(Mt=j.getWireframeAttribute(J),Mt===void 0)return;bt=2}let Xt=J.drawRange,Zt=J.attributes.position,vt=Xt.start*bt,oe=(Xt.start+Xt.count)*bt;gt!==null&&(vt=Math.max(vt,gt.start*bt),oe=Math.min(oe,(gt.start+gt.count)*bt)),Mt!==null?(vt=Math.max(vt,0),oe=Math.min(oe,Mt.count)):Zt!=null&&(vt=Math.max(vt,0),oe=Math.min(oe,Zt.count));let Ue=oe-vt;if(Ue<0||Ue===1/0)return;xt.setup(X,K,mt,J,Mt);let _e,ue=ft;if(Mt!==null&&(_e=lt.get(Mt),ue=et,ue.setIndex(_e)),X.isMesh)K.wireframe===!0?(S.setLineWidth(K.wireframeLinewidth*Pe()),ue.setMode(V.LINES)):ue.setMode(V.TRIANGLES);else if(X.isLine){let je=K.linewidth;je===void 0&&(je=1),S.setLineWidth(je*Pe()),X.isLineSegments?ue.setMode(V.LINES):X.isLineLoop?ue.setMode(V.LINE_LOOP):ue.setMode(V.LINE_STRIP)}else X.isPoints?ue.setMode(V.POINTS):X.isSprite&&ue.setMode(V.TRIANGLES);if(X.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))ue.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let je=X._multiDrawStarts,Et=X._multiDrawCounts,an=X._multiDrawCount,ee=Mt?lt.get(Mt).bytesPerElement:1,vn=q.get(K).currentProgram.getUniforms();for(let Kn=0;Kn<an;Kn++)vn.setValue(V,"_gl_DrawID",Kn),ue.render(je[Kn]/ee,Et[Kn])}else if(X.isInstancedMesh)ue.renderInstances(vt,Ue,X.count);else if(J.isInstancedBufferGeometry){let je=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Et=Math.min(J.instanceCount,je);ue.renderInstances(vt,Ue,Et)}else ue.render(vt,Ue)};function gu(T,Q,J,K){R!==null&&T.isNodeMaterial&&R.setObject(K,T),Wt===!0&&Rt.setState(T,J,!1),T.transparent===!0&&T.side===Je&&T.forceSinglePass===!1?(T.side=ke,T.needsUpdate=!0,$o(T,Q,K),T.side=Nn,T.needsUpdate=!0,$o(T,Q,K),T.side=Je):$o(T,Q,K)}this.compile=function(T,Q,J=null){J===null&&(J=T),R!==null&&R.renderStart(T,Q,J),M=ut.get(J),M.init(Q),g.push(M),J.traverseVisible(function(X){X.isLight&&X.layers.test(Q.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),T!==J&&T.traverseVisible(function(X){X.isLight&&X.layers.test(Q.layers)&&(M.pushLight(X),X.castShadow&&M.pushShadow(X))}),M.setupLights(),R!==null&&R.updateLights(M.state.lightsArray),jt=this.localClippingEnabled,Wt=Rt.init(this.clippingPlanes,jt),Wt===!0&&Rt.setGlobalState(this.clippingPlanes,Q),R!==null&&Pt.render(M.state.shadowsArray,J,Q);let K=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let gt=X.material;if(gt)if(Array.isArray(gt))for(let St=0;St<gt.length;St++){let mt=gt[St];gu(mt,J,Q,X),K.add(mt)}else gu(gt,J,Q,X),K.add(gt)}),M=g.pop(),R!==null&&R.renderEnd(),K},this.compileAsync=function(T,Q,J=null){let K=this.compile(T,Q,J);return new Promise(X=>{function gt(){if(K.forEach(function(St){let Mt=q.get(St).currentProgram;(Mt===void 0||Mt.isReady())&&K.delete(St)}),K.size===0){X(T);return}setTimeout(gt,10)}ce.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let ul=null;function Cp(T){ul&&ul(T)}function _u(){Zi.stop()}function xu(){Zi.start()}let Zi=new ld;Zi.setAnimationLoop(Cp),typeof self<"u"&&Zi.setContext(self),this.setAnimationLoop=function(T){ul=T,It.setAnimationLoop(T),T===null?Zi.stop():Zi.start()},It.addEventListener("sessionstart",_u),It.addEventListener("sessionend",xu),this.render=function(T,Q){if(Q!==void 0&&Q.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;R!==null&&R.renderStart(T,Q);let J=It.enabled===!0&&It.isPresenting===!0,K=v!==null&&(W===null||J)&&v.begin(C,W);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(v===null||v.isCompositing()===!1)&&(It.cameraAutoUpdate===!0&&It.updateCamera(Q),Q=It.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,Q,W),M=ut.get(T,g.length),M.init(Q),M.state.textureUnits=Z.getTextureUnits(),g.push(M),Yt.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),Nt.setFromProjectionMatrix(Yt,Pn,Q.reversedDepth),jt=this.localClippingEnabled,Wt=Rt.init(this.clippingPlanes,jt),E=At.get(T,w.length),E.init(),w.push(E),It.enabled===!0&&It.isPresenting===!0){let St=C.xr.getDepthSensingMesh();St!==null&&fl(St,Q,-1/0,C.sortObjects)}fl(T,Q,0,C.sortObjects),E.finish(),R!==null&&R.updateLights(M.state.lightsArray),C.sortObjects===!0&&E.sort(rt,yt),Me=It.enabled===!1||It.isPresenting===!1||It.hasDepthSensing()===!1,Me&&Kt.addToRenderList(E,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Wt===!0&&Rt.beginShadows();let X=M.state.shadowsArray;if(Pt.render(X,T,Q),Wt===!0&&Rt.endShadows(),(K&&v.hasRenderPass())===!1){let St=E.opaque,mt=E.transmissive;if(M.setupLights(),Q.isArrayCamera){let Mt=Q.cameras;if(mt.length>0)for(let bt=0,Xt=Mt.length;bt<Xt;bt++){let Zt=Mt[bt];Eu(St,mt,T,Zt)}Me&&Kt.render(T);for(let bt=0,Xt=Mt.length;bt<Xt;bt++){let Zt=Mt[bt];yu(E,T,Zt,Zt.viewport)}}else mt.length>0&&Eu(St,mt,T,Q),Me&&Kt.render(T),yu(E,T,Q)}W!==null&&O===0&&(Z.updateMultisampleRenderTarget(W),Z.updateRenderTargetMipmap(W)),K&&v.end(C),T.isScene===!0&&T.onAfterRender(C,T,Q),xt.resetDefaultState(),N=-1,G=null,g.pop(),g.length>0?(M=g[g.length-1],Z.setTextureUnits(M.state.textureUnits),Wt===!0&&Rt.setGlobalState(C.clippingPlanes,M.state.camera)):M=null,w.pop(),w.length>0?E=w[w.length-1]:E=null,R!==null&&R.renderEnd()};function fl(T,Q,J,K){if(T.visible===!1)return;if(T.layers.test(Q.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(Q);else if(T.isLightProbeGrid)M.pushLightProbeGrid(T);else if(T.isLight)M.pushLight(T),T.castShadow&&M.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Nt)){K&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Yt);let St=nt.update(T),mt=T.material;mt.visible&&E.push(T,St,mt,J,Te.z,null,Q)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Nt))){let St=nt.update(T),mt=T.material;if(K&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Te.copy(St.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(Yt)),Array.isArray(mt)){let Mt=St.groups;for(let bt=0,Xt=Mt.length;bt<Xt;bt++){let Zt=Mt[bt],vt=mt[Zt.materialIndex];vt&&vt.visible&&E.push(T,St,vt,J,Te.z,Zt,Q)}}else mt.visible&&E.push(T,St,mt,J,Te.z,null,Q)}}let gt=T.children;for(let St=0,mt=gt.length;St<mt;St++)fl(gt[St],Q,J,K)}function yu(T,Q,J,K){let{opaque:X,transmissive:gt,transparent:St}=T;M.setupLightsView(J),Wt===!0&&Rt.setGlobalState(C.clippingPlanes,J),K&&S.viewport(H.copy(K)),X.length>0&&Zo(X,Q,J),gt.length>0&&Zo(gt,Q,J),St.length>0&&Zo(St,Q,J),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function Eu(T,Q,J,K){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[K.id]===void 0){let vt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[K.id]=new pn(1,1,{generateMipmaps:!0,type:vt?Ee:Qt,minFilter:wn,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Jt.workingColorSpace})}let gt=M.state.transmissionRenderTarget[K.id],St=K.viewport||H;gt.setSize(St.z*C.transmissionResolutionScale,St.w*C.transmissionResolutionScale);let mt=C.getRenderTarget(),Mt=C.getActiveCubeFace(),bt=C.getActiveMipmapLevel();C.setRenderTarget(gt),C.getClearColor(wt),_t=C.getClearAlpha(),_t<1&&C.setClearColor(16777215,.5),C.clear(),Me&&Kt.render(J);let Xt=C.toneMapping;C.toneMapping=On;let Zt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),M.setupLightsView(K),Wt===!0&&Rt.setGlobalState(C.clippingPlanes,K),Zo(T,J,K),Z.updateMultisampleRenderTarget(gt),Z.updateRenderTargetMipmap(gt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let oe=0,Ue=Q.length;oe<Ue;oe++){let _e=Q[oe],{object:ue,geometry:je,material:Et,group:an}=_e;if(Et.side===Je&&ue.layers.test(K.layers)){let ee=Et.side;Et.side=ke,Et.needsUpdate=!0,Su(ue,J,K,je,Et,an),Et.side=ee,Et.needsUpdate=!0,vt=!0}}vt===!0&&(Z.updateMultisampleRenderTarget(gt),Z.updateRenderTargetMipmap(gt))}C.setRenderTarget(mt,Mt,bt),C.setClearColor(wt,_t),Zt!==void 0&&(K.viewport=Zt),C.toneMapping=Xt}function Zo(T,Q,J){let K=Q.isScene===!0?Q.overrideMaterial:null;for(let X=0,gt=T.length;X<gt;X++){let St=T[X],{object:mt,geometry:Mt,group:bt}=St,Xt=St.material;Xt.allowOverride===!0&&K!==null&&(Xt=K),mt.layers.test(J.layers)&&Su(mt,Q,J,Mt,Xt,bt)}}function Su(T,Q,J,K,X,gt){R!==null&&X.isNodeMaterial&&R.setObject(T,X),T.onBeforeRender(C,Q,J,K,X,gt),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(C,Q,J,K,T,gt),X.transparent===!0&&X.side===Je&&X.forceSinglePass===!1?(X.side=ke,X.needsUpdate=!0,C.renderBufferDirect(J,Q,K,X,T,gt),X.side=Nn,X.needsUpdate=!0,C.renderBufferDirect(J,Q,K,X,T,gt),X.side=Je):C.renderBufferDirect(J,Q,K,X,T,gt),T.onAfterRender(C,Q,J,K,X,gt)}function $o(T,Q,J){Q.isScene!==!0&&(Q=An);let K=q.get(T),X=M.state.lights,gt=M.state.shadowsArray,St=X.state.version,mt=ht.getParameters(T,X.state,gt,Q,J,M.state.lightProbeGridArray),Mt=ht.getProgramCacheKey(mt),bt=K.programs;K.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?Q.environment:null,K.fog=Q.fog;let Xt=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;K.envMap=ot.get(T.envMap||K.environment,Xt),K.envMapRotation=K.environment!==null&&T.envMap===null?Q.environmentRotation:T.envMapRotation,bt===void 0&&(T.addEventListener("dispose",Wn),bt=new Map,K.programs=bt);let Zt=bt.get(Mt);if(Zt!==void 0){if(K.currentProgram===Zt&&K.lightsStateVersion===St)return vu(T,mt),Zt}else mt.uniforms=ht.getUniforms(T),R!==null&&T.isNodeMaterial&&R.build(T,J,mt),T.onBeforeCompile(mt,C),Zt=ht.acquireProgram(mt,Mt),bt.set(Mt,Zt),K.uniforms=mt.uniforms;let vt=K.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(vt.clippingPlanes=Rt.uniform),vu(T,mt),K.needsLights=Tp(T),K.lightsStateVersion=St,K.needsLights&&(vt.ambientLightColor.value=X.state.ambient,vt.lightProbe.value=X.state.probe,vt.sunLights.value=X.state.sun,vt.sunLightShadows.value=X.state.sunShadow,vt.directionalLights.value=X.state.directional,vt.directionalLightShadows.value=X.state.directionalShadow,vt.spotLights.value=X.state.spot,vt.spotLightShadows.value=X.state.spotShadow,vt.rectAreaLights.value=X.state.rectArea,vt.ltc_1.value=X.state.rectAreaLTC1,vt.ltc_2.value=X.state.rectAreaLTC2,vt.pointLights.value=X.state.point,vt.pointLightShadows.value=X.state.pointShadow,vt.hemisphereLights.value=X.state.hemi,vt.sunShadowMatrix.value=X.state.sunShadowMatrix,vt.sunShadowCascade.value=X.state.sunShadowCascade,vt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,vt.spotLightMatrix.value=X.state.spotLightMatrix,vt.spotLightMap.value=X.state.spotLightMap,vt.pointShadowMatrix.value=X.state.pointShadowMatrix),K.lightProbeGrid=M.state.lightProbeGridArray.length>0,K.currentProgram=Zt,K.uniformsList=null,Zt}function Mu(T){if(T.uniformsList===null){let Q=T.currentProgram.getUniforms();T.uniformsList=br.seqWithValue(Q.seq,T.uniforms)}return T.uniformsList}function vu(T,Q){let J=q.get(T);J.outputColorSpace=Q.outputColorSpace,J.batching=Q.batching,J.batchingColor=Q.batchingColor,J.instancing=Q.instancing,J.instancingColor=Q.instancingColor,J.instancingMorph=Q.instancingMorph,J.skinning=Q.skinning,J.morphTargets=Q.morphTargets,J.morphNormals=Q.morphNormals,J.morphColors=Q.morphColors,J.morphTargetsCount=Q.morphTargetsCount,J.numClippingPlanes=Q.numClippingPlanes,J.numIntersection=Q.numClipIntersection,J.vertexAlphas=Q.vertexAlphas,J.vertexTangents=Q.vertexTangents,J.toneMapping=Q.toneMapping}function Ip(T,Q){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(Q.matrixWorld);for(let J=0,K=T.length;J<K;J++){let X=T[J];if(X.texture!==null&&X.boundingBox.containsPoint(x))return X}return null}function bp(T,Q,J,K,X){Q.isScene!==!0&&(Q=An),Z.resetTextureUnits();let gt=Q.fog,St=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?Q.environment:null,mt=W===null?C.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Jt.workingColorSpace,Mt=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,bt=ot.get(K.envMap||St,Mt),Xt=K.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Zt=!!J.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),vt=!!J.morphAttributes.position,oe=!!J.morphAttributes.normal,Ue=!!J.morphAttributes.color,_e=On;K.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(_e=C.toneMapping);let ue=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,je=ue!==void 0?ue.length:0,Et=q.get(K),an=M.state.lights;if(Wt===!0&&(jt===!0||T!==G)){let me=T===G&&K.id===N;Rt.setState(K,T,me)}let ee=!1;K.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==an.state.version||Et.outputColorSpace!==mt||X.isBatchedMesh&&Et.batching===!1||!X.isBatchedMesh&&Et.batching===!0||X.isBatchedMesh&&Et.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Et.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Et.instancing===!1||!X.isInstancedMesh&&Et.instancing===!0||X.isSkinnedMesh&&Et.skinning===!1||!X.isSkinnedMesh&&Et.skinning===!0||X.isInstancedMesh&&Et.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Et.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Et.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Et.instancingMorph===!1&&X.morphTexture!==null||Et.envMap!==bt||K.fog===!0&&Et.fog!==gt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==Rt.numPlanes||Et.numIntersection!==Rt.numIntersection)||Et.vertexAlphas!==Xt||Et.vertexTangents!==Zt||Et.morphTargets!==vt||Et.morphNormals!==oe||Et.morphColors!==Ue||Et.toneMapping!==_e||Et.morphTargetsCount!==je||!!Et.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(ee=!0):(ee=!0,Et.__version=K.version);let vn=Et.currentProgram;ee===!0&&(vn=$o(K,Q,X),R&&K.isNodeMaterial&&R.onUpdateProgram(K,vn,Et));let Kn=!1,Ci=!1,vs=!1,le=vn.getUniforms(),Be=Et.uniforms;if(S.useProgram(vn.program)&&(Kn=!0,Ci=!0,vs=!0),K.id!==N&&(N=K.id,Ci=!0),Et.needsLights){let me=Ip(M.state.lightProbeGridArray,X);Et.lightProbeGrid!==me&&(Et.lightProbeGrid=me,Ci=!0)}if(Kn||G!==T){S.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),le.setValue(V,"projectionMatrix",T.projectionMatrix),le.setValue(V,"viewMatrix",T.matrixWorldInverse);let bi=le.map.cameraPosition;bi!==void 0&&bi.setValue(V,he.setFromMatrixPosition(T.matrixWorld)),L.logarithmicDepthBuffer&&le.setValue(V,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&le.setValue(V,"isOrthographic",T.isOrthographicCamera===!0),G!==T&&(G=T,Ci=!0,vs=!0)}if(Et.needsLights&&(an.state.sunShadowMap.length>0&&le.setValue(V,"sunShadowMap",an.state.sunShadowMap,Z),an.state.directionalShadowMap.length>0&&le.setValue(V,"directionalShadowMap",an.state.directionalShadowMap,Z),an.state.spotShadowMap.length>0&&le.setValue(V,"spotShadowMap",an.state.spotShadowMap,Z),an.state.pointShadowMap.length>0&&le.setValue(V,"pointShadowMap",an.state.pointShadowMap,Z)),X.isSkinnedMesh){le.setOptional(V,X,"bindMatrix"),le.setOptional(V,X,"bindMatrixInverse");let me=X.skeleton;me&&(me.boneTexture===null&&me.computeBoneTexture(),le.setValue(V,"boneTexture",me.boneTexture,Z))}X.isBatchedMesh&&(le.setOptional(V,X,"batchingTexture"),le.setValue(V,"batchingTexture",X._matricesTexture,Z),le.setOptional(V,X,"batchingIdTexture"),le.setValue(V,"batchingIdTexture",X._indirectTexture,Z),le.setOptional(V,X,"batchingColorTexture"),X._colorsTexture!==null&&le.setValue(V,"batchingColorTexture",X._colorsTexture,Z));let Ii=J.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&k.update(X,J,vn),(Ci||Et.receiveShadow!==X.receiveShadow)&&(Et.receiveShadow=X.receiveShadow,le.setValue(V,"receiveShadow",X.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&Q.environment!==null&&(Be.envMapIntensity.value=Q.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=Cy()),Ci){if(le.setValue(V,"toneMappingExposure",C.toneMappingExposure),Et.needsLights&&wp(Be,vs),gt&&K.fog===!0&&Bt.refreshFogUniforms(Be,gt),Bt.refreshMaterialUniforms(Be,K,tt,Y,M.state.transmissionRenderTarget[T.id]),Et.needsLights&&Et.lightProbeGrid){let me=Et.lightProbeGrid;Be.probesSH.value=me.texture,Be.probesMin.value.copy(me.boundingBox.min),Be.probesMax.value.copy(me.boundingBox.max),Be.probesResolution.value.copy(me.resolution)}br.upload(V,Mu(Et),Be,Z)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(br.upload(V,Mu(Et),Be,Z),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&le.setValue(V,"center",X.center),le.setValue(V,"modelViewMatrix",X.modelViewMatrix),le.setValue(V,"normalMatrix",X.normalMatrix),le.setValue(V,"modelMatrix",X.matrixWorld),K.uniformsGroups!==void 0){let me=K.uniformsGroups;for(let bi=0,Cs=me.length;bi<Cs;bi++){let Iu=me[bi];st.update(Iu,vn),st.bind(Iu,vn)}}return vn}function wp(T,Q){T.ambientLightColor.needsUpdate=Q,T.lightProbe.needsUpdate=Q,T.sunLights.needsUpdate=Q,T.sunLightShadows.needsUpdate=Q,T.directionalLights.needsUpdate=Q,T.directionalLightShadows.needsUpdate=Q,T.pointLights.needsUpdate=Q,T.pointLightShadows.needsUpdate=Q,T.spotLights.needsUpdate=Q,T.spotLightShadows.needsUpdate=Q,T.rectAreaLights.needsUpdate=Q,T.hemisphereLights.needsUpdate=Q}function Tp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(T,Q,J){let K=q.get(T);K.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),q.get(T.texture).__webglTexture=Q,q.get(T.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:J,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,Q){let J=q.get(T);J.__webglFramebuffer=Q,J.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(T,Q=0,J=0){W=T,P=Q,O=J;let K=null,X=!1,gt=!1;if(T){let mt=q.get(T);if(mt.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(V.FRAMEBUFFER,mt.__webglFramebuffer),H.copy(T.viewport),$.copy(T.scissor),it=T.scissorTest,S.viewport(H),S.scissor($),S.setScissorTest(it),N=-1;return}else if(mt.__webglFramebuffer===void 0)Z.setupRenderTarget(T);else if(mt.__hasExternalTextures)Z.rebindTextures(T,q.get(T.texture).__webglTexture,q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Xt=T.depthTexture;if(mt.__boundDepthTexture!==Xt){if(Xt!==null&&q.has(Xt)&&(T.width!==Xt.image.width||T.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(T)}}let Mt=T.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(gt=!0);let bt=q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(bt[Q])?K=bt[Q][J]:K=bt[Q],X=!0):T.samples>0&&Z.useMultisampledRTT(T)===!1?K=q.get(T).__webglMultisampledFramebuffer:Array.isArray(bt)?K=bt[J]:K=bt,H.copy(T.viewport),$.copy(T.scissor),it=T.scissorTest}else H.copy(ct).multiplyScalar(tt).floor(),$.copy(Ct).multiplyScalar(tt).floor(),it=zt;if(J!==0&&(K=D),S.bindFramebuffer(V.FRAMEBUFFER,K)&&S.drawBuffers(T,K),S.viewport(H),S.scissor($),S.setScissorTest(it),X){let mt=q.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt.__webglTexture,J)}else if(gt){let mt=Q;for(let Mt=0;Mt<T.textures.length;Mt++){let bt=q.get(T.textures[Mt]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Mt,bt.__webglTexture,J,mt)}}else if(T!==null&&J!==0){let mt=q.get(T.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,mt.__webglTexture,J)}N=-1};function Cu(T){let Q=q.get(T);return(Q.__readFormat!==T.format||Q.__readType!==T.type)&&(Q.__readFormat=T.format,Q.__readType=T.type,Q.__formatReadable=L.textureFormatReadable(T.format),Q.__typeReadable=L.textureTypeReadable(T.type)),Q}this.readRenderTargetPixels=function(T,Q,J,K,X,gt,St,mt=0){if(!(T&&T.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St]),Mt){S.bindFramebuffer(V.FRAMEBUFFER,Mt);try{let bt=T.textures[mt],Xt=bt.format,Zt=bt.type;T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+mt);let vt=Cu(bt);if(vt.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(vt.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=T.width-K&&J>=0&&J<=T.height-X&&V.readPixels(Q,J,K,X,dt.convert(Xt),dt.convert(Zt),gt)}finally{let bt=W!==null?q.get(W).__webglFramebuffer:null;S.bindFramebuffer(V.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(T,Q,J,K,X,gt,St,mt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&St!==void 0&&(Mt=Mt[St]),Mt)if(Q>=0&&Q<=T.width-K&&J>=0&&J<=T.height-X){S.bindFramebuffer(V.FRAMEBUFFER,Mt);let bt=T.textures[mt],Xt=bt.format,Zt=bt.type;T.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+mt);let vt=Cu(bt);if(vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,oe),V.bufferData(V.PIXEL_PACK_BUFFER,gt.byteLength,V.STREAM_READ),V.readPixels(Q,J,K,X,dt.convert(Xt),dt.convert(Zt),0),V.bindBuffer(V.PIXEL_PACK_BUFFER,null);let Ue=W!==null?q.get(W).__webglFramebuffer:null;S.bindFramebuffer(V.FRAMEBUFFER,Ue);let _e=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await Uf(V,_e,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,oe),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,gt),V.bindBuffer(V.PIXEL_PACK_BUFFER,null),V.deleteBuffer(oe),V.deleteSync(_e),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,Q=null,J=0){let K=Math.pow(2,-J),X=Math.floor(T.image.width*K),gt=Math.floor(T.image.height*K),St=Q!==null?Q.x:0,mt=Q!==null?Q.y:0;Z.setTexture2D(T,0),V.copyTexSubImage2D(V.TEXTURE_2D,J,0,0,St,mt,X,gt),S.unbindTexture()},this.copyTextureToTexture=function(T,Q,J=null,K=null,X=0,gt=0){let St,mt,Mt,bt,Xt,Zt,vt,oe,Ue,_e=T.isCompressedTexture?T.mipmaps[gt]:T.image;if(J!==null)St=J.max.x-J.min.x,mt=J.max.y-J.min.y,Mt=J.isBox3?J.max.z-J.min.z:1,bt=J.min.x,Xt=J.min.y,Zt=J.isBox3?J.min.z:0;else{let Be=Math.pow(2,-X);St=Math.floor(_e.width*Be),mt=Math.floor(_e.height*Be),T.isDataArrayTexture?Mt=_e.depth:T.isData3DTexture?Mt=Math.floor(_e.depth*Be):Mt=1,bt=0,Xt=0,Zt=0}K!==null?(vt=K.x,oe=K.y,Ue=K.z):(vt=0,oe=0,Ue=0);let ue=dt.convert(Q.format),je=dt.convert(Q.type),Et;Q.isData3DTexture?(Z.setTexture3D(Q,0),Et=V.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(Z.setTexture2DArray(Q,0),Et=V.TEXTURE_2D_ARRAY):(Z.setTexture2D(Q,0),Et=V.TEXTURE_2D),S.activeTexture(V.TEXTURE0),S.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,Q.flipY),S.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),S.pixelStorei(V.UNPACK_ALIGNMENT,Q.unpackAlignment);let an=S.getParameter(V.UNPACK_ROW_LENGTH),ee=S.getParameter(V.UNPACK_IMAGE_HEIGHT),vn=S.getParameter(V.UNPACK_SKIP_PIXELS),Kn=S.getParameter(V.UNPACK_SKIP_ROWS),Ci=S.getParameter(V.UNPACK_SKIP_IMAGES);S.pixelStorei(V.UNPACK_ROW_LENGTH,_e.width),S.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_e.height),S.pixelStorei(V.UNPACK_SKIP_PIXELS,bt),S.pixelStorei(V.UNPACK_SKIP_ROWS,Xt),S.pixelStorei(V.UNPACK_SKIP_IMAGES,Zt);let vs=T.isDataArrayTexture||T.isData3DTexture,le=Q.isDataArrayTexture||Q.isData3DTexture;if(T.isDepthTexture){let Be=q.get(T),Ii=q.get(Q),me=q.get(Be.__renderTarget),bi=q.get(Ii.__renderTarget);S.bindFramebuffer(V.READ_FRAMEBUFFER,me.__webglFramebuffer),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Cs=0;Cs<Mt;Cs++)vs&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,q.get(T).__webglTexture,X,Zt+Cs),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,q.get(Q).__webglTexture,gt,Ue+Cs)),V.blitFramebuffer(bt,Xt,St,mt,vt,oe,St,mt,V.DEPTH_BUFFER_BIT,V.NEAREST);S.bindFramebuffer(V.READ_FRAMEBUFFER,null),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||q.has(T)){let Be=q.get(T),Ii=q.get(Q);S.bindFramebuffer(V.READ_FRAMEBUFFER,b),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,F);for(let me=0;me<Mt;me++)vs?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Be.__webglTexture,X,Zt+me):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Be.__webglTexture,X),le?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ii.__webglTexture,gt,Ue+me):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ii.__webglTexture,gt),X!==0?V.blitFramebuffer(bt,Xt,St,mt,vt,oe,St,mt,V.COLOR_BUFFER_BIT,V.NEAREST):le?V.copyTexSubImage3D(Et,gt,vt,oe,Ue+me,bt,Xt,St,mt):V.copyTexSubImage2D(Et,gt,vt,oe,bt,Xt,St,mt);S.bindFramebuffer(V.READ_FRAMEBUFFER,null),S.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else le?T.isDataTexture||T.isData3DTexture?V.texSubImage3D(Et,gt,vt,oe,Ue,St,mt,Mt,ue,je,_e.data):Q.isCompressedArrayTexture?V.compressedTexSubImage3D(Et,gt,vt,oe,Ue,St,mt,Mt,ue,_e.data):V.texSubImage3D(Et,gt,vt,oe,Ue,St,mt,Mt,ue,je,_e):T.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,gt,vt,oe,St,mt,ue,je,_e.data):T.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,gt,vt,oe,_e.width,_e.height,ue,_e.data):V.texSubImage2D(V.TEXTURE_2D,gt,vt,oe,St,mt,ue,je,_e);S.pixelStorei(V.UNPACK_ROW_LENGTH,an),S.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ee),S.pixelStorei(V.UNPACK_SKIP_PIXELS,vn),S.pixelStorei(V.UNPACK_SKIP_ROWS,Kn),S.pixelStorei(V.UNPACK_SKIP_IMAGES,Ci),gt===0&&Q.generateMipmaps&&V.generateMipmap(Et),S.unbindTexture()},this.initRenderTarget=function(T){q.get(T).__webglFramebuffer===void 0&&Z.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?Z.setTextureCube(T,0):T.isData3DTexture?Z.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Z.setTexture2DArray(T,0):Z.setTexture2D(T,0),S.unbindTexture()},this.resetState=function(){P=0,O=0,W=null,S.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Jt._getUnpackColorSpace()}};var Lo=new U;function Tn(i,t,e,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Lo.copy(t),Lo[n]=0,Lo.normalize();let l=.5*o/(o+a),u=1-Lo.angleTo(i)/c;return Math.sign(Lo[e])===1?u*l:a/(o+a)+l+l*(1-u)}var Tc=class i extends bn{constructor(t=1,e=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new U,l=new U,u=new U(t,e,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,_=new U,p=.5/o;for(let A=0,y=0;A<f.length;A+=3,y+=2)switch(c.fromArray(f,A),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),f[A+0]=u.x*Math.sign(c.x)+l.x*r,f[A+1]=u.y*Math.sign(c.y)+l.y*r,f[A+2]=u.z*Math.sign(c.z)+l.z*r,h[A+0]=l.x,h[A+1]=l.y,h[A+2]=l.z,Math.floor(A/m)){case 0:_.set(1,0,0),d[y+0]=Tn(_,l,"z","y",r,n),d[y+1]=1-Tn(_,l,"y","z",r,e);break;case 1:_.set(-1,0,0),d[y+0]=1-Tn(_,l,"z","y",r,n),d[y+1]=1-Tn(_,l,"y","z",r,e);break;case 2:_.set(0,1,0),d[y+0]=1-Tn(_,l,"x","z",r,t),d[y+1]=Tn(_,l,"z","x",r,n);break;case 3:_.set(0,-1,0),d[y+0]=1-Tn(_,l,"x","z",r,t),d[y+1]=1-Tn(_,l,"z","x",r,n);break;case 4:_.set(0,0,1),d[y+0]=1-Tn(_,l,"x","y",r,t),d[y+1]=1-Tn(_,l,"y","x",r,e);break;case 5:_.set(0,0,-1),d[y+0]=Tn(_,l,"x","y",r,t),d[y+1]=1-Tn(_,l,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function Bc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Ye,l=0;for(let u=0;u<i.length;++u){let f=i[u],h=0;if(e!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in f.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(f.attributes[d]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in f.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(f.morphAttributes[d])}if(t){let d;if(e)d=f.index.count;else if(f.attributes.position!==void 0)d=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(e){let u=0,f=[];for(let h=0;h<i.length;++h){let d=i[h].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+u);u+=i[h].attributes.position.count}c.setIndex(f)}for(let u in r){let f=md(r[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,f)}for(let u in o){let f=o[u][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let h=0;h<f;++h){let d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][h]);let m=md(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(m)}}}return c}function md(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let u=i[l];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let o=new t(r),a=new Re(o,e,n),c=0;for(let l=0;l<i.length;++l){let u=i[l];if(u.isInterleavedBufferAttribute){let f=c/e;for(let h=0,d=u.count;h<d;h++)for(let m=0;m<e;m++){let _=u.getComponent(h,m);a.setComponent(h+f,m,_)}}else o.set(u.array,c);c+=u.count*e}return s!==void 0&&(a.gpuType=s),a}function gd(i,t=1e-4){t=Math.max(t,Number.EPSILON);let e={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,o=0,a=Object.keys(i.attributes),c={},l={},u=[],f=["getX","getY","getZ","getW"],h=["setX","setY","setZ","setW"];for(let y=0,I=a.length;y<I;y++){let x=a[y],E=i.attributes[x];c[x]=new E.constructor(new E.array.constructor(E.count*E.itemSize),E.itemSize,E.normalized);let M=i.morphAttributes[x];M&&(l[x]||(l[x]=[]),M.forEach((w,g)=>{let v=new w.array.constructor(w.count*w.itemSize);l[x][g]=new w.constructor(v,w.itemSize,w.normalized)}))}let d=t*.5,m=Math.log10(1/t),_=Math.pow(10,m),p=d*_;for(let y=0;y<r;y++){let I=n?n.getX(y):y,x="";for(let E=0,M=a.length;E<M;E++){let w=a[E],g=i.getAttribute(w),v=g.itemSize;for(let C=0;C<v;C++)x+=`${Math.trunc(g[f[C]](I)*_+p)},`}if(x in e)u.push(e[x]);else{for(let E=0,M=a.length;E<M;E++){let w=a[E],g=i.getAttribute(w),v=i.morphAttributes[w],C=g.itemSize,B=c[w],R=l[w];for(let D=0;D<C;D++){let b=f[D],F=h[D];if(B[F](o,g[b](I)),v)for(let P=0,O=v.length;P<O;P++)R[P][F](o,v[P][b](I))}}e[x]=o,u.push(o),o++}}let A=i.clone();for(let y in i.attributes){let I=c[y];if(A.setAttribute(y,new I.constructor(I.array.slice(0,o*I.itemSize),I.itemSize,I.normalized)),y in l)for(let x=0;x<l[y].length;x++){let E=l[y][x];A.morphAttributes[y][x]=new E.constructor(E.array.slice(0,o*E.itemSize),E.itemSize,E.normalized)}}return A.setIndex(u),A}var Rh={car:["paint","chrome","rubber","glass","light"],tree:["bark","leaf"],chair:["fabric","wood","stitch"]},kn={car:{label:"Unbranded touring coupe",dimensions:[2.15,1.42,4.44],seed:3081,description:"Section-swept painted coachwork, curved opaque glazing, panel lines, wheels and trim.",views:{close:{position:[2,1.36,2.65],target:[.56,.82,1.12],fov:35},medium:{position:[4.9,3,6.3],target:[0,.72,0],fov:35},silhouette:{position:[8.6,1.3,.25],target:[0,.72,0],fov:35}}},tree:{label:"Branched broadleaf tree",dimensions:[3.02,4.4,3.28],seed:6197,description:"Curving tapered trunk and three branch orders with deterministic clustered leaf cards.",views:{close:{position:[1.5,2.6,2],target:[.16,2.58,.08],fov:35},medium:{position:[6.8,4.7,7.4],target:[0,2.1,0],fov:35},silhouette:{position:[10.8,2.85,.25],target:[0,2.1,0],fov:35}}},chair:{label:"Upholstered lounge chair",dimensions:[.844,.953,.816],seed:9271,description:"Soft shaped cushions, stitched piping, curved timber arms and splayed wooden legs.",views:{close:{position:[.86,.87,1],target:[.18,.57,.23],fov:35},medium:{position:[1.65,1.25,1.9],target:[0,.46,0],fov:35},silhouette:{position:[2.65,.78,.1],target:[0,.46,0],fov:35}}}};for(let[i,t]of Object.entries(kn))t.roles=Rh[i];var Lt=(i,t,e)=>new U(i,t,e);function Iy(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t^=t+Math.imul(t^t>>>7,61|t),((t^t>>>14)>>>0)/4294967296}}function by(i){return i.computeVertexNormals(),i.index&&i.attributes.uv&&i.computeTangents(),i}function Rc(i,t,e,n=(s,r)=>[s,r]){let s=[],r=[],o=[];for(let c=0;c<=t;c++)for(let l=0;l<=i;l++){let u=l/i,f=c/t,h=e(u,f);s.push(h.x,h.y,h.z),r.push(...n(u,f))}for(let c=0;c<t;c++)for(let l=0;l<i;l++){let u=c*(i+1)+l,f=u+1,h=u+i+1,d=h+1;o.push(u,f,h,f,d,h)}let a=new Ye;return a.setAttribute("position",new ye(s,3)),a.setAttribute("uv",new ye(r,2)),a.setIndex(o),by(a)}function Gn(i,t,e,n,s){let r=new Tc(i,t,e,s,n),o=r.attributes.position,a=r.attributes.normal,c=r.attributes.uv;for(let l=0;l<o.count;l++){let u=[Math.abs(a.getX(l)),Math.abs(a.getY(l)),Math.abs(a.getZ(l))],f=u.indexOf(Math.max(...u));c.setXY(l,f===0?o.getZ(l):o.getX(l),f===1?o.getZ(l):o.getY(l))}return r}function Br(i,t,e,n,s,r=!1){let o=new $n(i);if(r)return _d(o,t,e,n,s);let a=o.computeFrenetFrames(n,!1),c=o.getLength();return Rc(s,n,(l,u)=>{let f=Math.round(u*n),h=l*Math.PI*2,d=Ce.lerp(t,e,u);return o.getPointAt(u).addScaledVector(a.normals[f],Math.cos(h)*d).addScaledVector(a.binormals[f],Math.sin(h)*d)},(l,u)=>[l*2*Math.PI*t,u*c])}function ms(i){let t=new rr;return t.arcLengthDivisions=512,t.getPoint=(e,n=Lt(0,0,0))=>n.copy(i(e)),t}function _d(i,t,e,n,s,r=!1){let o=i.computeFrenetFrames(n,r),a=i.getLength(),c=[],l=[],u=[],f=[];for(let d=0;d<=n;d++){let m=d/n,_=i.getPointAt(m),p=Ce.lerp(t,e,m);for(let A=0;A<=s;A++){let y=A/s*Math.PI*2,I=o.normals[d].clone().multiplyScalar(Math.cos(y)).addScaledVector(o.binormals[d],Math.sin(y));c.push(..._.clone().addScaledVector(I,p).toArray()),l.push(...I.addScaledVector(o.tangents[d],-(e-t)/a).normalize().toArray()),u.push(A/s*2*Math.PI*t,m*a)}}for(let d=0;d<n;d++)for(let m=0;m<s;m++){let _=d*(s+1)+m,p=_+1,A=_+s+1,y=A+1;f.push(_,p,A,p,y,A)}if(!r)for(let d of[0,n]){let m=i.getPointAt(d/n),_=d?e:t,p=o.tangents[d].clone().multiplyScalar(d?1:-1),A=c.length/3;c.push(...m.toArray()),l.push(...p.toArray()),u.push(0,0);for(let y=0;y<=s;y++){let I=y/s*Math.PI*2,x=Math.cos(I)*_,E=Math.sin(I)*_;c.push(...m.clone().addScaledVector(o.normals[d],x).addScaledVector(o.binormals[d],E).toArray()),l.push(...p.toArray()),u.push(x,E)}for(let y=0;y<s;y++)d?f.push(A,A+y+1,A+y+2):f.push(A,A+y+2,A+y+1)}let h=new Ye;return h.setAttribute("position",new ye(c,3)),h.setAttribute("normal",new ye(l,3)),h.setAttribute("uv",new ye(u,2)),h.setIndex(f),h.computeTangents(),h}function Bh(i,t,e){let s=i(Math.min(1,t+1e-4),e).sub(i(Math.max(0,t-1e-4),e)),r=i(t,Math.min(1,e+1e-4)).sub(i(t,Math.max(0,e-1e-4)));return s.cross(r).normalize()}function wy(i,t,e,n,s,r=0){let o=Ce.clamp(n,0,1)*t,a=Ce.clamp(s,0,1)*e,c=Math.min(t-1,Math.floor(o)),l=Math.min(e-1,Math.floor(a)),u=l*(t+1)+c,f=o-c,h=a-l,d=f+h<=1?[u,u+1,u+t+1]:[u+1,u+t+2,u+t+1],m=f+h<=1?[1-f-h,f,h]:[1-h,f+h-1,1-f],_=Lt(0,0,0),p=Lt(0,0,0);for(let A=0;A<3;A++)_.addScaledVector(Lt(0,0,0).fromBufferAttribute(i.attributes.position,d[A]),m[A]),p.addScaledVector(Lt(0,0,0).fromBufferAttribute(i.attributes.normal,d[A]),m[A]);return p.normalize(),{point:_.addScaledVector(p,r),normal:p}}function Fe(i,t,e,n,s,r){let o=t.attributes.uv,a=t.parameters;if(o&&a&&["TorusGeometry","CylinderGeometry","BoxGeometry"].includes(t.type)){for(let l=0;l<o.count;l++)if(t.type==="TorusGeometry"&&o.setXY(l,o.getX(l)*2*Math.PI*a.radius,o.getY(l)*2*Math.PI*a.tube),t.type==="CylinderGeometry"&&o.setXY(l,o.getX(l)*Math.PI*(a.radiusTop+a.radiusBottom),o.getY(l)*a.height),t.type==="BoxGeometry"){let u=t.attributes.normal,f=t.attributes.position;o.setXY(l,Math.abs(u.getX(l))>.5?f.getZ(l):f.getX(l),Math.abs(u.getY(l))>.5?f.getZ(l):f.getY(l))}}let c=new ge(t,e);return c.name=n,c.castShadow=!0,c.receiveShadow=!0,s&&c.position.set(...s),r&&c.rotation.set(...r),i.add(c),c}function Wi(i,t,e,n,s,r,o=!1){return Fe(i,_d(t,e,e,r?96:32,r?8:4,o),n,s)}function Po(i,t,e,n,s,r){return Wi(i,new $n(t.map(o=>Array.isArray(o)?Lt(...o):o)),e,n,s,r)}function Dc(i,t,e,n){let s=t.map(a=>{let l=(a.index?a.toNonIndexed():a).clone();for(let u of Object.keys(l.attributes))["position","normal","uv"].includes(u)||l.deleteAttribute(u);return l}),r=Bc(s,!1),o=gd(r,1e-7);r.dispose(),o.computeTangents();for(let a of s)a.dispose();for(let a of t)a.dispose();return Fe(i,o,e,n)}function Ty(i,t,e){let n=[[-2.2,.64,.58,.2],[-2.08,.81,.62,.28],[-1.6,.9,.67,.3],[-.9,.91,.68,.31],[0,.915,.69,.31],[1.15,.89,.67,.29],[1.85,.83,.61,.25],[2.13,.71,.58,.2],[2.2,.55,.56,.14]],s=new $n(n.map(C=>Lt(C[1],C[2],C[3])),!1,"catmullrom",.3),r=new $n(n.map(C=>Lt(C[0],0,0)),!1,"catmullrom",.3);function o(C){let B=0,R=1;for(let D=0;D<30;D++){let b=(B+R)/2;r.getPoint(b).x<C?B=b:R=b}return(B+R)/2}function a(C,B){let R=s.getPoint(o(B));return R.y+R.z*Math.sqrt(Math.max(0,1-Math.pow(Math.abs(C)/R.x,2/.65)))}function c(C){let B=r.getPoint(C).x,R=s.getPoint(C),D=Math.min(Math.abs(B-1.36),Math.abs(B+1.35));if(D>=.43)return-Math.PI/2;let b=.363+Math.sqrt(.43*.43-D*D);return Math.asin(Ce.clamp((b-R.y)/R.z,-1,1))}let l=e?80:32,u=e?64:28,f=e?24:8,h=[];for(let C=0;C<=u;C++)h.push(C/u);for(let C of[-1.35,1.36])for(let B=0;B<=f;B++)h.push(o(C+.43*Math.cos(B/f*Math.PI)));let d=h.sort((C,B)=>C-B).filter((C,B,R)=>!B||C-R[B-1]>1e-8),m=d.length-1;function _(C){let B=C*m,R=Math.min(m-1,Math.floor(B));return Ce.lerp(d[R],d[R+1],B-R)}function p(C){let B=0,R=m;for(;R-B>1;){let D=B+R>>1;d[D]<C?B=D:R=D}return(B+(C-d[B])/(d[R]-d[B]))/m}function A(C,B){let R=c(B);return Ce.lerp(R,Math.PI-R,C)}let I=Rc(l,m,(C,B)=>{let R=_(B),D=A(C,R),b=s.getPoint(R);return Lt(b.x*Math.sign(Math.cos(D))*Math.pow(Math.abs(Math.cos(D)),.65),b.y+Math.sin(D)*b.z,r.getPoint(R).x)},(C,B)=>{let R=_(B);return[A(C,R)/(Math.PI*2)*4.4,R*4.4]});for(let C=0;C<=m;C++){let B=d[C],R=s.getPoint(B),D=Math.max(0,B-1e-4),b=Math.min(1,B+1e-4),F=s.getPoint(b).sub(s.getPoint(D)).divideScalar(r.getPoint(b).x-r.getPoint(D).x),P=2/.65;for(let O=0;O<=l;O++){let W=A(O/l,B),N=Math.sign(Math.cos(W))*Math.pow(Math.abs(Math.cos(W)),.65),G=Math.sin(W),H=Math.pow(Math.abs(N),P),$=Lt(P/R.x*Math.sign(N)*Math.pow(Math.abs(N),P-1),2*G/R.z,-P*H*F.x/R.x-2*G*F.y/R.z-2*G*G*F.z/R.z).normalize();I.attributes.normal.setXYZ(C*(l+1)+O,$.x,$.y,$.z)}}I.computeTangents(),Fe(i,I,t.paint,"paint-coachwork");function x(C,B,R){let D=c(B);return wy(I,l,m,(C-D)/(Math.PI-2*D),p(B),R)}function E(C,B,R,D=4e-4){let b=o(R),F=s.getPoint(b),P=Math.asin(Ce.clamp((B-F.y)/F.z,-.999,.999));return x(C>0?P:Math.PI-P,b,D)}function M(C,B,R=3e-4){let D=o(B),b=s.getPoint(D),F=Math.acos(Math.sign(C)*Math.pow(Math.min(1,Math.abs(C)/b.x),1/.65));return x(F,D,R).point}for(let C of[-2.19,2.19])Fe(i,Gn(1.12,.24,.035,.07,e?6:2),t.paint,"paint-end-panel",[0,.57,C]);let w=(C,B)=>{let R=Ce.lerp(-1.27,.96,B),D=.69+.075*Math.sin(Math.PI*B),b=C*Math.PI,F=Math.cos(b)*D,P=B<.27?Math.sin(B/.27*Math.PI/2):B>.73?Math.sin((1-B)/.27*Math.PI/2):1;return Lt(F,a(F,R)+.38*Math.max(0,P)*Math.pow(Math.max(0,Math.sin(b)),.45),R)},g=[0,.19,.225,.775,.81,1],v=[0,.245,.27,.49,.515,.73,.755,1];for(let C=0;C<v.length-1;C++)for(let B=0;B<g.length-1;B++){let R=g[B],D=g[B+1],b=v[C],F=v[C+1],P=B===2&&b>=.245&&F<=.755,O=B===1||B===3||(B===0||B===4)&&b===.49,W=Math.max(2,Math.ceil((D-R)*(e?80:24))),N=Math.max(2,Math.ceil((F-b)*(e?72:24))),G=Rc(W,N,(H,$)=>w(Ce.lerp(R,D,H),Ce.lerp(b,F,$)),(H,$)=>[(R+H*(D-R))*2.1,(b+$*(F-b))*2.23]);for(let H=0;H<=N;H++)for(let $=0;$<=W;$++){let it=Bh(w,Ce.lerp(R,D,$/W),Ce.lerp(b,F,H/N));G.attributes.normal.setXYZ(H*(W+1)+$,it.x,it.y,it.z)}G.computeTangents(),Fe(i,G,P||O?t.paint:t.glass,P?"paint-roof":O?"paint-window-pillar":"glass-curved-cabin")}for(let C of[0,1])Wi(i,ms(B=>w(B,C).addScaledVector(Bh(w,B,C),.001)),.009,t.chrome,"chrome-window-header",e);for(let C of[-1,1]){let B=C>0?0:1;Wi(i,ms(N=>w(B,N).addScaledVector(Bh(w,B,N),.001)),.01,t.chrome,"chrome-window-sill",e);let R=new $n([Lt(0,.88,.65),Lt(0,.65,.62),Lt(0,.47,.45),Lt(0,.45,-.72),Lt(0,.61,-.91),Lt(0,.87,-.97)]);Wi(i,ms(N=>{let G=R.getPoint(N);return E(C,G.y,G.z).point}),.003,t.rubber,"rubber-door-gap",e);let D=E(C,.81,-.59,.013),b=Fe(i,Gn(.028,.025,.19,.01,e?4:1),t.chrome,"chrome-door-handle",D.point.toArray()),F=Lt(0,0,1).addScaledVector(D.normal,-D.normal.z).normalize(),P=F.clone().cross(D.normal).normalize();b.quaternion.setFromRotationMatrix(new Ht().makeBasis(D.normal,P,F));let O=E(C,.91,.72,.004).point;Po(i,[O,Lt(C*.95,1,.64)],.019,t.paint,"paint-mirror-stalk",e),Fe(i,Gn(.2,.105,.27,.048,e?6:2),t.paint,"paint-mirror-shell",[C*.966,1.035,.64]),Fe(i,Gn(.007,.073,.18,.025,e?4:1),t.glass,"glass-mirror",[C*1.071,1.041,.625]);let W=new $n([Lt(C*.57,0,1),Lt(C*.61,0,1.45),Lt(C*.57,0,1.96)]);Wi(i,ms(N=>{let G=W.getPoint(N);return M(G.x,G.z)}),.0028,t.rubber,"rubber-hood-gap",e);for(let N of[-1.35,1.36]){let G=C*.82;Fe(i,new uo(.279,.084,e?16:6,e?96:28),t.rubber,"rubber-tire",[G,.363,N],[0,Math.PI/2,0]),Fe(i,new ss(.235,.235,.12,e?64:16),t.chrome,"chrome-wheel",[C*.907,.363,N],[0,0,Math.PI/2]),Fe(i,new ss(.185,.185,.126,e?48:12),t.rubber,"rubber-wheel-inset",[C*.912,.363,N],[0,0,Math.PI/2]),Fe(i,new ss(.061,.061,.138,e?32:10),t.chrome,"chrome-wheel-hub",[C*.921,.363,N],[0,0,Math.PI/2]);for(let H=0;H<10;H++){let $=H*Math.PI/5;Fe(i,Gn(.018,.16,.028,.008,e?3:1),t.chrome,"chrome-wheel-spoke",[C*.982,.363+Math.sin($)*.13,N+Math.cos($)*.13],[$-Math.PI/2,0,0])}for(let H=0;H<40;H++){let $=H*Math.PI/20,it=new bn(.105,.003,.027);Fe(i,it,t.rubber,"rubber-tire-tread",[G,.363+Math.cos($)*.363,N+Math.sin($)*.363],[$,0,.18]).rotateX(0)}}for(let N of[-1,1])Fe(i,Gn(.39,.105,.075,.045,e?6:2),t.light,N>0?"light-headlamp":"light-taillamp",[C*.53,.7,N*2.12])}Fe(i,Gn(1,.13,.055,.055,e?6:2),t.rubber,"rubber-front-grille",[0,.48,2.19]);for(let C=-4;C<=4;C++)Fe(i,Gn(.007,.085,.012,.003,e?3:1),t.chrome,"chrome-grille-slat",[C*.1,.48,2.224]);for(let C of[-2.17,2.17])Po(i,[[-.65,.4,C],[0,.38,C+.015],[.65,.4,C]],.016,t.chrome,"chrome-bumper-edge",e)}function By(i,t,e){let n=Iy(kn.tree.seed),s=[],r=[],o=[Lt(0,0,0),Lt(-.07,.8,.025),Lt(.06,1.65,-.02),Lt(-.035,2.48,.08),Lt(.05,3.23,.02),Lt(.02,3.94,0)];s.push(Br(o,.17,.012,e?64:16,e?16:6));for(let c=0;c<7;c++){let l=c*2*Math.PI/7;s.push(Br([Lt(Math.cos(l)*.43,.015,Math.sin(l)*.43),Lt(Math.cos(l)*.22,.09,Math.sin(l)*.22),Lt(0,.42,0)],.025,.075,e?14:5,e?8:4))}function a(c,l,u,f){let d=Rc(e?4:1,e?6:1,(p,A)=>Lt((p-.5)*u*.56,Math.sin(A*Math.PI)*.035,(A-.5)*u),(p,A)=>[p,A]),m=new In().setFromUnitVectors(Lt(0,0,1),l.clone().normalize()),_=new Ht().compose(c,m,new U(1,1,1));d.applyMatrix4(_),d.rotateY(0),r.push(d)}for(let c=0;c<17;c++){let l=c*2.39996323+n()*.28,u=1.34+c*.128,f=(1-Math.pow((u-2.5)/2,2))*(.99+n()*.33),h=Lt(Math.sin(u*2)*.05,u,0),d=Lt(Math.cos(l)*f,u+.49+n()*.22,Math.sin(l)*f);s.push(Br([h,h.clone().lerp(d,.4).add(Lt(0,-.1,0)),d],.055*(1-(u-1.3)*.2),.008,e?24:7,e?10:5));for(let m=0;m<6;m++){let _=.36+m*.115,p=h.clone().lerp(d,_),A=l+(m%2?1:-1)*(.46+n()*.55),y=.29+n()*.28,I=p.clone().add(Lt(Math.cos(A)*y,.22+n()*.25,Math.sin(A)*y));s.push(Br([p,p.clone().lerp(I,.5).add(Lt(0,.035,0)),I],.012,.0025,e?12:4,e?7:3));for(let x=0;x<10;x++){let E=.2+n()*.9,M=p.clone().lerp(I,Math.min(E,1)),w=n()*Math.PI*2,g=.05+n()*.16;M.add(Lt(Math.cos(w)*g,(n()-.3)*.18,Math.sin(w)*g));let v=Lt(Math.cos(w),.35+n()*.8,Math.sin(w));a(M,v,.15+n()*.085,n())}}}Dc(i,s,t.bark,"bark-trunk-branches-twigs"),Dc(i,r,t.leaf,"leaf-cluster-cards"),i.userData.leafCount=r.length,i.userData.branchCount=s.length,i.userData.leafUv="individual normalized alpha silhouette; leaf length 0.15\u20130.235 m"}function Ry(i,t,e){let n=e?7:2,s=Fe(i,Gn(.76,.16,.76,.075,n),t.fabric,"fabric-seat-cushion",[0,.45,.045]),r=Fe(i,Gn(.73,.5,.16,.08,n),t.fabric,"fabric-back-cushion",[0,.712,-.285],[-.15,0,0]);Fe(i,Gn(.73,.09,.65,.035,n),t.wood,"wood-seat-frame",[0,.337,.02]);for(let f of[-1,1]){for(let h of[-1,1]){let d=Lt(f*.365,.015,h*.355),m=Lt(f*.315,.345,h*.285);Fe(i,Br([d,d.clone().lerp(m,.5),m],.027,.038,e?16:4,e?12:5,!0),t.wood,"wood-splayed-leg")}Po(i,[[f*.367,.36,.255],[f*.375,.54,.2],[f*.375,.65,.11]],.026,t.wood,"wood-arm-front-support",e),Po(i,[[f*.375,.38,-.28],[f*.375,.67,-.3]],.026,t.wood,"wood-arm-rear-support",e),Po(i,[[f*.376,.64,.33],[f*.385,.665,.18],[f*.385,.68,-.12],[f*.375,.67,-.34]],.035,t.wood,"wood-curved-arm",e)}function o(f,h,d,m){let _=Math.PI*m/2,p=2*(h-m),A=2*(d-m),y=[_,A,_,p,_,A,_,p],I=f%1*y.reduce((M,w)=>M+w,0),x=0;for(;x<7&&I>y[x];)I-=y[x++];let E=I/y[x];if(x%2===0){let M=x/2,w=Math.PI/2-M*Math.PI/2-E*Math.PI/2,g=(M<2?1:-1)*(h-m),v=(M===0||M===3?1:-1)*(d-m);return Lt(g+Math.cos(w)*m,v+Math.sin(w)*m,0)}return x===1?Lt(h,Ce.lerp(d-m,-d+m,E),0):x===3?Lt(Ce.lerp(h-m,-h+m,E),-d,0):x===5?Lt(-h,Ce.lerp(-d+m,d-m,E),0):Lt(Ce.lerp(-h+m,h-m,E),d,0)}function a(f,h,d,m,_){let p=Lt(...h).multiplyScalar(.5).subScalar(d),A=Lt(Ce.clamp(f.x,-p.x,p.x),Ce.clamp(f.y,-p.y,p.y),Ce.clamp(f.z,-p.z,p.z));return A.addScaledVector(f.clone().sub(A).normalize(),d+_).applyEuler(m.rotation).add(m.position)}function c(f,h){let m=Math.sqrt(.005625-Math.pow(f-.005,2));return ms(_=>{let p=o(_,.305+m,.305+m,m);return a(Lt(p.x,f,p.y),[.76,.16,.76],.075,s,h)})}function l(f,h){let m=Math.sqrt(.0064-f*f);return ms(_=>{let p=o(_,.285+m,.17+m,m);return a(Lt(p.x,p.y,f),[.73,.5,.16],.08,r,h)})}Wi(i,c(.026,25e-5),.0032,t.stitch,"stitch-seat-piping",e,!0),Wi(i,l(.05,25e-5),.0032,t.stitch,"stitch-back-piping",e,!0);let u=[];for(let f of[c(.048,2e-4),l(.063,2e-4)]){let h=f.getLength(),d=Math.floor(h/.014);for(let m=0;m<d;m++){let _=f.getPointAt(m/d),p=f.getPointAt(Math.min(1,m/d+.006/h));u.push(Br([_,p],85e-5,85e-5,1,e?5:3,!0))}}Dc(i,u,t.stitch,"stitch-individual-thread-dashes");for(let f of[-.18,.18])Wi(i,ms(h=>a(Lt(f,.08,Ce.lerp(.235,-.205,h)),[.76,.16,.76],.075,s,15e-5)),.001,t.stitch,"stitch-seat-tailoring",e)}function xd(i,t,e="master"){if(!kn[i])throw new Error(`Unknown study subject: ${i}`);if(!["master","reduced"].includes(e))throw new Error(`Unknown geometry tier: ${e}`);for(let r of Rh[i])if(!t[r])throw new Error(`Missing ${i} material role: ${r}`);let n=new fi;if(n.name=`${i}-${e}`,n.userData={subjectId:i,geometryTier:e,seed:kn[i].seed,authorship:"Original procedural study geometry",uvUnits:"metres; leaf cards normalized"},{car:Ty,tree:By,chair:Ry}[i](n,t,e==="master"),i==="car"||i==="chair")for(let r of Rh[i]){let o=n.children.filter(l=>l.isMesh&&l.name.startsWith(`${r}-`));if(o.length<2)continue;let a=o.map(l=>(l.updateMatrix(),l.geometry.clone().applyMatrix4(l.matrix))),c=Dc(n,a,t[r],`${r}-assembled-details`);c.userData.parts=o.map(l=>l.name);for(let l of o)n.remove(l),l.geometry.dispose()}let s={car:.011,tree:.016,chair:-.008}[i];for(let r of n.children)r.geometry.translate(0,s,0);return n.userData.groundOffset=s,n.updateMatrixWorld(!0),n}var Fc=class{constructor(t=4){this.pool=t,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0,this.workerCreator=null}_initWorker(t){if(!this.workers[t]){let e=this.workerCreator();e.addEventListener("message",this._onMessage.bind(this,t)),this.workers[t]=e}}_getIdleWorker(){for(let t=0;t<this.pool;t++)if(!(this.workerStatus&1<<t))return t;return-1}_onMessage(t,e){let n=this.workersResolve[t];if(n&&n(e),this.queue.length){let{resolve:s,msg:r,transfer:o}=this.queue.shift();this.workersResolve[t]=s,this.workers[t].postMessage(r,o)}else this.workerStatus^=1<<t}setWorkerCreator(t){this.workerCreator=t}setWorkerLimit(t){this.pool=t}postMessage(t,e){return new Promise(n=>{let s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=n,this.workers[s].postMessage(t,e)):this.queue.push({resolve:n,msg:t,transfer:e})})}dispose(){this.workers.forEach(t=>t.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}};var gs=class{constructor(t,e,n,s){this._dataView=void 0,this._littleEndian=void 0,this._offset=void 0,this._dataView=new DataView(t.buffer,t.byteOffset+e,n),this._littleEndian=s,this._offset=0}_nextUint8(){let t=this._dataView.getUint8(this._offset);return this._offset+=1,t}_nextUint16(){let t=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,t}_nextUint32(){let t=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,t}_nextUint64(){let t=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,t}_nextInt32(){let t=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,t}_nextUint8Array(t){let e=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._offset,t);return this._offset+=t,e}_skip(t){return this._offset+=t,this}_scan(t,e=0){let n=this._offset,s=0;for(;this._dataView.getUint8(this._offset)!==e&&s<t;)s++,this._offset++;return s<t&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,s)}},iC=new Uint8Array([0]),fn=[171,75,84,88,32,50,48,187,13,10,26,10];function yd(i){return new TextDecoder().decode(i)}function Ed(i){let t=new Uint8Array(i.buffer,i.byteOffset,fn.length);if(t[0]!==fn[0]||t[1]!==fn[1]||t[2]!==fn[2]||t[3]!==fn[3]||t[4]!==fn[4]||t[5]!==fn[5]||t[6]!==fn[6]||t[7]!==fn[7]||t[8]!==fn[8]||t[9]!==fn[9]||t[10]!==fn[10]||t[11]!==fn[11])throw new Error("Missing KTX 2.0 identifier.");let e={vkFormat:0,typeSize:1,pixelWidth:0,pixelHeight:0,pixelDepth:0,layerCount:0,faceCount:1,levelCount:0,supercompressionScheme:0,levels:[],dataFormatDescriptor:[{vendorId:0,descriptorType:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],keyValue:{},globalData:null},n=17*Uint32Array.BYTES_PER_ELEMENT,s=new gs(i,fn.length,n,!0);e.vkFormat=s._nextUint32(),e.typeSize=s._nextUint32(),e.pixelWidth=s._nextUint32(),e.pixelHeight=s._nextUint32(),e.pixelDepth=s._nextUint32(),e.layerCount=s._nextUint32(),e.faceCount=s._nextUint32(),e.levelCount=s._nextUint32(),e.supercompressionScheme=s._nextUint32();let r=s._nextUint32(),o=s._nextUint32(),a=s._nextUint32(),c=s._nextUint32(),l=s._nextUint64(),u=s._nextUint64(),f=3*Math.max(e.levelCount,1)*8,h=new gs(i,fn.length+n,f,!0);for(let H=0,$=Math.max(e.levelCount,1);H<$;H++)e.levels.push({levelData:new Uint8Array(i.buffer,i.byteOffset+h._nextUint64(),h._nextUint64()),uncompressedByteLength:h._nextUint64()});let d=new gs(i,r,o,!0);d._skip(4);let m=d._nextUint16(),_=d._nextUint16(),p=d._nextUint16(),A=d._nextUint16(),y={vendorId:m,descriptorType:_,versionNumber:p,colorModel:d._nextUint8(),colorPrimaries:d._nextUint8(),transferFunction:d._nextUint8(),flags:d._nextUint8(),texelBlockDimension:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],bytesPlane:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],samples:[]},I=(A/4-6)/4;for(let H=0;H<I;H++){let $={bitOffset:d._nextUint16(),bitLength:d._nextUint8(),channelType:d._nextUint8(),samplePosition:[d._nextUint8(),d._nextUint8(),d._nextUint8(),d._nextUint8()],sampleLower:Number.NEGATIVE_INFINITY,sampleUpper:Number.POSITIVE_INFINITY};64&$.channelType?($.sampleLower=d._nextInt32(),$.sampleUpper=d._nextInt32()):($.sampleLower=d._nextUint32(),$.sampleUpper=d._nextUint32()),y.samples[H]=$}e.dataFormatDescriptor.length=0,e.dataFormatDescriptor.push(y);let x=new gs(i,a,c,!0);for(;x._offset<c;){let H=x._nextUint32(),$=x._scan(H),it=yd($);if(e.keyValue[it]=x._nextUint8Array(H-$.byteLength-1),it.match(/^ktx/i)){let wt=yd(e.keyValue[it]);e.keyValue[it]=wt.substring(0,wt.lastIndexOf("\0"))}x._skip(H%4?4-H%4:0)}if(u<=0)return e;let E=new gs(i,l,u,!0),M=E._nextUint16(),w=E._nextUint16(),g=E._nextUint32(),v=E._nextUint32(),C=E._nextUint32(),B=E._nextUint32(),R=[];for(let H=0,$=Math.max(e.levelCount,1);H<$;H++)R.push({imageFlags:E._nextUint32(),rgbSliceByteOffset:E._nextUint32(),rgbSliceByteLength:E._nextUint32(),alphaSliceByteOffset:E._nextUint32(),alphaSliceByteLength:E._nextUint32()});let D=l+E._offset,b=D+g,F=b+v,P=F+C,O=new Uint8Array(i.buffer,i.byteOffset+D,g),W=new Uint8Array(i.buffer,i.byteOffset+b,v),N=new Uint8Array(i.buffer,i.byteOffset+F,C),G=new Uint8Array(i.buffer,i.byteOffset+P,B);return e.globalData={endpointCount:M,selectorCount:w,imageDescs:R,endpointsData:O,selectorsData:W,tablesData:N,extendedData:G},e}var Dh,Si,Lh,Fh={env:{emscripten_notify_memory_growth:function(i){Lh=new Uint8Array(Si.exports.memory.buffer)}}},Lc=class{init(){return Dh||(Dh=typeof fetch<"u"?fetch("data:application/wasm;base64,"+Sd).then(t=>t.arrayBuffer()).then(t=>WebAssembly.instantiate(t,Fh)).then(this._init):WebAssembly.instantiate(Buffer.from(Sd,"base64"),Fh).then(this._init),Dh)}_init(t){Si=t.instance,Fh.env.emscripten_notify_memory_growth(0)}decode(t,e=0){if(!Si)throw new Error("ZSTDDecoder: Await .init() before decoding.");let n=t.byteLength,s=Si.exports.malloc(n);Lh.set(t,s),e=e||Number(Si.exports.ZSTD_findDecompressedSize(s,n));let r=Si.exports.malloc(e),o=Si.exports.ZSTD_decompress(r,e,s,n),a=Lh.slice(r,r+o);return Si.exports.free(s),Si.exports.free(r),a}},Sd="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IAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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";var Md="display-p3",vd="display-p3-linear";var aC={...Jt.spaces[be],outputColorSpaceConfig:{drawingBufferColorSpace:be,toneMappingMode:"extended"}};var Oy=new URL("../libs/basis/basis_transcoder.wasm",import.meta.url).toString(),Qy=new URL("../libs/basis/basis_transcoder.js",import.meta.url).toString(),Ph=new WeakMap,Uh=0,Nh,Mi=class i extends jn{constructor(t){super(t),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new Fc,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(t){return this.transcoderPath=t,this}setWorkerLimit(t){return this.workerPool.setWorkerLimit(t),this}async detectSupportAsync(t){return console.warn('KTX2Loader: "detectSupportAsync()" has been deprecated. Use "detectSupport()" and "await renderer.init();" when creating the renderer.'),await t.init(),this.detectSupport(t)}detectSupport(t){return t.isWebGPURenderer===!0?this.workerConfig={astcSupported:t.hasFeature("texture-compression-astc"),astcHDRSupported:!1,etc1Supported:t.hasFeature("texture-compression-etc1"),etc2Supported:t.hasFeature("texture-compression-etc2"),dxtSupported:t.hasFeature("texture-compression-s3tc"),bptcSupported:t.hasFeature("texture-compression-bc"),pvrtcSupported:t.hasFeature("texture-compression-pvrtc")}:(this.workerConfig={astcSupported:t.extensions.has("WEBGL_compressed_texture_astc"),astcHDRSupported:t.extensions.has("WEBGL_compressed_texture_astc")&&t.extensions.get("WEBGL_compressed_texture_astc").getSupportedProfiles().includes("hdr"),etc1Supported:t.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:t.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:t.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:t.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:t.extensions.has("WEBGL_compressed_texture_pvrtc")||t.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},typeof navigator<"u"&&typeof navigator.platform<"u"&&typeof navigator.userAgent<"u"&&navigator.platform.indexOf("Linux")>=0&&navigator.userAgent.indexOf("Android")<0&&this.workerConfig.astcSupported&&this.workerConfig.etc2Supported&&this.workerConfig.bptcSupported&&this.workerConfig.dxtSupported&&(this.workerConfig.astcSupported=!1,this.workerConfig.etc1Supported=!1,this.workerConfig.etc2Supported=!1)),this}init(){if(!this.transcoderPending){let t=new Qi(this.manager);t.setWithCredentials(this.withCredentials);let e=new Qi(this.manager);e.setWithCredentials(this.withCredentials),e.setResponseType("arraybuffer");let n,s;this.transcoderPath===""?(n=t.loadAsync(Qy),s=e.loadAsync(Oy)):(t.setPath(this.transcoderPath),n=t.loadAsync("basis_transcoder.js"),e.setPath(this.transcoderPath),s=e.loadAsync("basis_transcoder.wasm")),this.transcoderPending=Promise.all([n,s]).then(([r,o])=>{let a=i.BasisWorker.toString(),c=["/* constants */","let _EngineFormat = "+JSON.stringify(i.EngineFormat),"let _EngineType = "+JSON.stringify(i.EngineType),"let _TranscoderFormat = "+JSON.stringify(i.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(i.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([c])),this.transcoderBinary=o,this.workerPool.setWorkerCreator(()=>{let l=new Worker(this.workerSourceURL),u=this.transcoderBinary.slice(0);return l.postMessage({type:"init",config:this.workerConfig,transcoderBinary:u},[u]),l})}),Uh>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Uh++}return this.transcoderPending}load(t,e,n,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");let r=new Qi(this.manager);r.setPath(this.path),r.setCrossOrigin(this.crossOrigin),r.setWithCredentials(this.withCredentials),r.setRequestHeader(this.requestHeader),r.setResponseType("arraybuffer"),r.load(t,o=>{this.parse(o,e,s)},n,s)}parse(t,e,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");if(Ph.has(t))return Ph.get(t).promise.then(e).catch(n);this._createTexture(t).then(s=>e?e(s):null).catch(n)}_createTextureFrom(t,e){let{type:n,error:s,data:{faces:r,width:o,height:a,format:c,type:l,dfdFlags:u}}=t;if(n==="error")return Promise.reject(s);let f;if(e.faceCount===6)f=new co(r,c,l);else{let h=r[0].mipmaps;f=e.layerCount>1?new ao(h,o,a,e.layerCount,c,l):new Li(h,o,a,c,l)}return f.minFilter=r[0].mipmaps.length===1?ae:wn,f.magFilter=ae,f.generateMipmaps=!1,f.needsUpdate=!0,f.colorSpace=AA(e),f.premultiplyAlpha=!!(u&1),f}async _createTexture(t,e={}){let n=Ed(new Uint8Array(t)),s=n.vkFormat===1000066e3&&n.dataFormatDescriptor[0].colorModel===167;if(!(n.vkFormat===0||s&&!this.workerConfig.astcHDRSupported))return Vy(n);let o=e,a=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:t,taskConfig:o},[t])).then(c=>this._createTextureFrom(c.data,n));return Ph.set(t,{promise:a}),a}dispose(){this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Uh--}};Mi.BasisFormat={ETC1S:0,UASTC:1,UASTC_HDR:2};Mi.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16,BC6H:22,RGB_HALF:24,RGBA_HALF:25};Mi.EngineFormat={RGBAFormat:Oe,RGBA_ASTC_4x4_Format:Ei,RGB_BPTC_UNSIGNED_Format:yr,RGBA_BPTC_Format:zi,RGBA_ETC2_EAC_Format:us,RGBA_PVRTC_4BPPV1_Format:Vi,RGBA_S3TC_DXT5_Format:yi,RGB_ETC1_Format:mr,RGB_ETC2_Format:hs,RGB_PVRTC_4BPPV1_Format:pr,RGBA_S3TC_DXT1_Format:xi};Mi.EngineType={UnsignedByteType:Qt,HalfFloatType:Ee,FloatType:ve};Mi.BasisWorker=function(){let i,t,e,n=_EngineFormat,s=_EngineType,r=_TranscoderFormat,o=_BasisFormat;self.addEventListener("message",function(m){let _=m.data;switch(_.type){case"init":i=_.config,a(_.transcoderBinary);break;case"transcode":t.then(()=>{try{let{faces:p,buffers:A,width:y,height:I,hasAlpha:x,format:E,type:M,dfdFlags:w}=c(_.buffer);self.postMessage({type:"transcode",id:_.id,data:{faces:p,width:y,height:I,hasAlpha:x,format:E,type:M,dfdFlags:w}},A)}catch(p){console.error(p),self.postMessage({type:"error",id:_.id,error:p.message})}});break}});function a(m){t=new Promise(_=>{e={wasmBinary:m,onRuntimeInitialized:_},BASIS(e)}).then(()=>{e.initializeBasis(),e.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function c(m){let _=new e.KTX2File(new Uint8Array(m));function p(){_.close(),_.delete()}if(!_.isValid())throw p(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");let A;if(_.isUASTC())A=o.UASTC;else if(_.isETC1S())A=o.ETC1S;else if(_.isHDR())A=o.UASTC_HDR;else throw new Error("THREE.KTX2Loader: Unknown Basis encoding");let y=_.getWidth(),I=_.getHeight(),x=_.getLayers()||1,E=_.getLevels(),M=_.getFaces(),w=_.getHasAlpha(),g=_.getDFDFlags(),{transcoderFormat:v,engineFormat:C,engineType:B}=f(A,y,I,w);if(!y||!I||!E)throw p(),new Error("THREE.KTX2Loader:	Invalid texture");if(!_.startTranscoding())throw p(),new Error("THREE.KTX2Loader: .startTranscoding failed");let R=[],D=[];for(let b=0;b<M;b++){let F=[];for(let P=0;P<E;P++){let O=[],W,N;for(let H=0;H<x;H++){let $=_.getImageLevelInfo(P,H,b);b===0&&P===0&&H===0&&($.origWidth%4!==0||$.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),E>1?(W=$.origWidth,N=$.origHeight):(W=$.width,N=$.height);let it=new Uint8Array(_.getImageTranscodedSizeInBytes(P,H,0,v)),wt=_.transcodeImage(it,P,H,b,v,0,-1,-1);if(B===s.HalfFloatType&&(it=new Uint16Array(it.buffer,it.byteOffset,it.byteLength/Uint16Array.BYTES_PER_ELEMENT)),!wt)throw p(),new Error("THREE.KTX2Loader: .transcodeImage failed.");O.push(it)}let G=d(O);F.push({data:G,width:W,height:N}),D.push(G.buffer)}R.push({mipmaps:F,width:y,height:I,format:C,type:B})}return p(),{faces:R,buffers:D,width:y,height:I,hasAlpha:w,dfdFlags:g,format:C,type:B}}let l=[{if:"astcSupported",basisFormat:[o.UASTC],transcoderFormat:[r.ASTC_4x4,r.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],engineType:[s.UnsignedByteType],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.BC7_M5,r.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],engineType:[s.UnsignedByteType],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.BC1,r.BC3],engineFormat:[n.RGBA_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],engineType:[s.UnsignedByteType],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.ETC1,r.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],engineType:[s.UnsignedByteType],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.ETC1],engineFormat:[n.RGB_ETC1_Format],engineType:[s.UnsignedByteType],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.PVRTC1_4_RGB,r.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],engineType:[s.UnsignedByteType],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0},{if:"bptcSupported",basisFormat:[o.UASTC_HDR],transcoderFormat:[r.BC6H],engineFormat:[n.RGB_BPTC_UNSIGNED_Format],engineType:[s.HalfFloatType],priorityHDR:1,needsPowerOfTwo:!1},{basisFormat:[o.ETC1S,o.UASTC],transcoderFormat:[r.RGBA32,r.RGBA32],engineFormat:[n.RGBAFormat,n.RGBAFormat],engineType:[s.UnsignedByteType,s.UnsignedByteType],priorityETC1S:100,priorityUASTC:100,needsPowerOfTwo:!1},{basisFormat:[o.UASTC_HDR],transcoderFormat:[r.RGBA_HALF],engineFormat:[n.RGBAFormat],engineType:[s.HalfFloatType],priorityHDR:100,needsPowerOfTwo:!1}],u={[o.ETC1S]:l.filter(m=>m.basisFormat.includes(o.ETC1S)).sort((m,_)=>m.priorityETC1S-_.priorityETC1S),[o.UASTC]:l.filter(m=>m.basisFormat.includes(o.UASTC)).sort((m,_)=>m.priorityUASTC-_.priorityUASTC),[o.UASTC_HDR]:l.filter(m=>m.basisFormat.includes(o.UASTC_HDR)).sort((m,_)=>m.priorityHDR-_.priorityHDR)};function f(m,_,p,A){let y=u[m];for(let I=0;I<y.length;I++){let x=y[I];if(x.if&&!i[x.if]||!x.basisFormat.includes(m)||A&&x.transcoderFormat.length<2||x.needsPowerOfTwo&&!(h(_)&&h(p)))continue;let E=x.transcoderFormat[A?1:0],M=x.engineFormat[A?1:0],w=x.engineType[0];return{transcoderFormat:E,engineFormat:M,engineType:w}}throw new Error("THREE.KTX2Loader: Failed to identify transcoding target.")}function h(m){return m<=2?!0:(m&m-1)===0&&m!==0}function d(m){if(m.length===1)return m[0];let _=0;for(let y=0;y<m.length;y++){let I=m[y];_+=I.byteLength}let p=new Uint8Array(_),A=0;for(let y=0;y<m.length;y++){let I=m[y];p.set(I,A),A+=I.byteLength}return p}};var Gy=new Set([Oe,cs,mn,ei]),ky=new Set([91]),Oh={109:Oe,103:mn,100:ei,97:Oe,83:mn,76:ei,91:Oe,43:Oe,37:Oe,22:mn,16:mn,15:ei,9:ei,123:cs,122:cs,152:us,148:hs,153:gr,154:_r,155:fs,156:xr,1000066e3:Ei,158:Ei,157:Ei,1000066004:Hi,166:Hi,165:Hi,134:xi,133:xi,132:ki,131:ki,138:yi,137:yi,140:Sr,139:Er,142:Mr,141:ds,146:zi,145:zi,1000054005:Vi,1000054001:Vi,1000054004:ls,1000054e3:ls},_s={109:ve,103:ve,100:ve,97:Ee,83:Ee,76:Ee,91:_i,43:Qt,37:Qt,22:Qt,16:Qt,15:Qt,9:Qt,123:dr,122:Ar,152:Qt,148:Qt,153:Qt,154:Qt,155:Qt,156:Qt,1000066e3:Ee,158:Qt,157:Qt,1000066004:Ee,166:Qt,165:Qt,134:Qt,133:Qt,132:Qt,131:Qt,138:Qt,137:Qt,140:Qt,139:Qt,142:Qt,141:Qt,146:Qt,145:Qt,1000054005:Qt,1000054001:Qt,1000054004:Qt,1000054e3:Qt};async function Vy(i){let{vkFormat:t}=i;if(Oh[t]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat: "+t);_s[t]===void 0&&console.warn('THREE.KTX2Loader: Missing ".type" for vkFormat: '+t);let e;i.supercompressionScheme===2&&(Nh||(Nh=new Promise(async o=>{let a=new Lc;await a.init(),o(a)})),e=await Nh);let n=[];for(let o=0;o<i.levels.length;o++){let a=Math.max(1,i.pixelWidth>>o),c=Math.max(1,i.pixelHeight>>o),l=i.pixelDepth?Math.max(1,i.pixelDepth>>o):0,u=i.levels[o],f;if(i.supercompressionScheme===0)f=u.levelData;else if(i.supercompressionScheme===2)f=e.decode(u.levelData,u.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let h;_s[t]===ve?h=new Float32Array(f.buffer,f.byteOffset,f.byteLength/Float32Array.BYTES_PER_ELEMENT):_s[t]===Ee||_s[t]===_i?h=new Uint16Array(f.buffer,f.byteOffset,f.byteLength/Uint16Array.BYTES_PER_ELEMENT):_s[t]===dr||_s[t]===Ar?h=new Uint32Array(f.buffer,f.byteOffset,f.byteLength/Uint32Array.BYTES_PER_ELEMENT):h=f,n.push({data:h,width:a,height:c,depth:l})}let s=i.levelCount===0||n.length>1,r;if(Gy.has(Oh[t]))r=i.pixelDepth===0?new Un(n[0].data,i.pixelWidth,i.pixelHeight):new tr(n[0].data,i.pixelWidth,i.pixelHeight,i.pixelDepth),r.minFilter=s?$a:De,r.magFilter=De,r.generateMipmaps=i.levelCount===0,r.normalized=ky.has(t);else{if(i.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");r=new Li(n,i.pixelWidth,i.pixelHeight),r.minFilter=s?wn:ae,r.magFilter=ae}return r.mipmaps=n,r.type=_s[t],r.format=Oh[t],r.colorSpace=AA(i),r.needsUpdate=!0,Promise.resolve(r)}function AA(i){let t=i.dataFormatDescriptor[0];return t.colorPrimaries===1?t.transferFunction===2?be:Ai:t.colorPrimaries===10?t.transferFunction===2?Md:vd:t.colorPrimaries===0?gn:(console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${t.colorPrimaries}"`),gn)}var Uc={paint:{color:16777215,roughness:.34,metalness:0,clearcoat:.8,clearcoatRoughness:.12,tileMetres:.25,mapped:!0,substrate:"painted metal"},chrome:{color:13093057,roughness:.18,metalness:1,substrate:"metal"},rubber:{color:1514009,roughness:.92,metalness:0,substrate:"rubber"},glass:{color:1586236,roughness:.13,metalness:0,clearcoat:1,substrate:"opaque glazing control"},light:{color:15525848,roughness:.18,metalness:0,substrate:"lamp cover"},bark:{color:16777215,roughness:.96,metalness:0,tileMetres:.45,mapped:!0,substrate:"bark"},leaf:{color:16777215,roughness:.85,metalness:0,tileMetres:.2,mapped:!0,substrate:"leaf"},fabric:{color:16777215,roughness:.94,metalness:0,sheen:.7,sheenRoughness:.65,tileMetres:.2,mapped:!0,substrate:"woven fabric"},wood:{color:16777215,roughness:.46,metalness:0,clearcoat:.18,clearcoatRoughness:.28,tileMetres:.5,mapped:!0,substrate:"wood"},stitch:{color:13350284,roughness:.9,metalness:0,substrate:"thread"},leather:{color:1392434,roughness:.67,metalness:0,substrate:"constant untextured leather control"},brass:{color:12099158,roughness:.3,metalness:1,substrate:"brass"},dark:{color:1447702,roughness:.65,metalness:0,substrate:"painted plinth"}},Pc={matte:{paint:{roughness:.88,clearcoat:0},wood:{roughness:.92,clearcoat:0}},satin:{paint:{roughness:.34,clearcoat:.8,clearcoatRoughness:.12},wood:{roughness:.46,clearcoat:.18,clearcoatRoughness:.28}},glossy:{paint:{roughness:.19,clearcoat:1,clearcoatRoughness:.045},wood:{roughness:.23,clearcoat:1,clearcoatRoughness:.07}}},Hy=["clean","worn","graphic"],zy=["reference","avif90","avif80","uastc1024","uastc512"];function Wy({baseId:i,finishId:t,conditionId:e,physicalScale:n}){if(!Uc[i])throw Error(`Unknown base material: ${i}`);if(!Pc[t])throw Error(`Unknown finish: ${t}`);if(!Hy.includes(e))throw Error(`Unknown condition: ${e}`);if(!(n>0)||!Number.isFinite(n))throw Error("Physical scale must be positive finite metres");return{baseId:i,finishId:t,conditionId:e,physicalScale:n,finishApplied:!!Pc[t][i],fallback:Pc[t][i]?null:"Coating preset inapplicable; retain the base material response",conditionApplied:e==="clean"||["paint","wood","fabric","bark","leaf"].includes(i),conditionFallback:e!=="clean"&&!["paint","wood","fabric","bark","leaf"].includes(i)?"No authored condition for this base; retain its response":null,metalness:Uc[i].metalness}}function Ky(i,t,e){e==="clean"||!["paint","wood","fabric","bark","leaf"].includes(t)||(i.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vStudyLocal; varying vec3 vStudyNormal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vStudyLocal = position; vStudyNormal = normal;`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vStudyLocal; varying vec3 vStudyNormal;`);let r=`float studyField = .5+.22*sin(vStudyLocal.x*13.1+vStudyLocal.z*5.7)*sin(vStudyLocal.z*15.3+vStudyLocal.y*4.7)+.18*sin(vStudyLocal.x*37.9+sin(vStudyLocal.z*17.2)+vStudyLocal.y*9.);
      float studyWear = clamp((${t==="fabric"?"smoothstep(.38,.48,vStudyLocal.y)*(1.-smoothstep(.54,.64,vStudyLocal.y))":t==="paint"?"smoothstep(.60,.9,abs(vStudyLocal.x)) + .25*max(0.,vStudyNormal.y)":t==="bark"?"(.3+.7*max(0.,vStudyNormal.x))*(1.-smoothstep(1.,3.,vStudyLocal.y))":t==="leaf"?".65":".8*exp(-pow((vStudyLocal.y-.68)*9.,2.))+.2*exp(-pow((vStudyLocal.y-.08)*14.,2.))"})*smoothstep(.68,.88,studyField),0.,1.);`,o=e==="graphic"?"float studyStripe=step(.55,fract((vStudyLocal.x+vStudyLocal.z)*9.)); diffuseColor.rgb=mix(diffuseColor.rgb, mix(vec3(.025,.20,.18),vec3(.75,.53,.15),studyStripe),.6);":"diffuseColor.rgb=mix(diffuseColor.rgb, diffuseColor.rgb*.83+vec3(.065,.05,.03),studyWear*.65);";n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
${r}
${o}`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=clamp(roughnessFactor+studyWear*.22,0.04,1.);`)},i.customProgramCacheKey=()=>`study-condition-1:${t}:${e}`)}var Nc=class{constructor(t,e,n){this.renderer=t,this.manifest=n,this.disposed=!1,this.cache=new Map,this.textures=new Set,this.materials=new Set,this.groups=new Set,this.assets=new Map,this.ktx=new Mi().setTranscoderPath("assets/basis/").setWorkerLimit(2).detectSupport(t),this.policy="Three.js capability-selected compressed format",/AMD|Radeon/i.test(e)&&this.ktx.workerConfig.bptcSupported&&(this.ktx.workerConfig.astcSupported=!1,this.policy="BC7 on the previously tested AMD desktop path")}async texture(t,e,n){if(this.disposed)throw new DOMException("Obsolete preparation","AbortError");let s=t.url;if(!this.cache.has(s)){let r=(async()=>{let o=t.url.endsWith(".ktx2")?await this.ktx.loadAsync(t.url):await new go().loadAsync(t.url);if(this.disposed)throw o.dispose(),new DOMException("Obsolete preparation","AbortError");o.colorSpace=e==="color"?be:gn,o.wrapS=o.wrapT=Xs,o.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());let a=n==="leaf"?1:1/Uc[n].tileMetres;return o.repeat.set(a,a),this.textures.add(o),this.assets.set(t.url,t),o})();this.cache.set(s,r)}return this.cache.get(s)}async materialSet(t,e,n="satin",s="clean",r={}){if(!zy.includes(e))throw Error(`Unknown delivery tier ${e}`);let o={},c=(await Promise.allSettled(t.map(async l=>{let u=Uc[l];if(!u)throw Error(`Missing base ${l}`);let{tileMetres:f,mapped:h,substrate:d,...m}=u,_=Wy({baseId:l,finishId:n,conditionId:s,physicalScale:f||1}),p={};if(h){let y=this.manifest.roles[l].tiers[e].channels,I=await Promise.allSettled(Object.entries(y).map(async([E,M])=>[E,await this.texture(M,E,l)])),x=I.find(E=>E.status==="rejected");if(x)throw x.reason;for(let{value:[E,M]}of I)p[E==="color"?"map":`${E}Map`]=M}if(this.disposed)throw new DOMException("Obsolete preparation","AbortError");let A=new fo({...m,...Pc[n][l],...p});A.name=`${l}:${e}:${n}:${s}`,A.userData={..._,tier:e,substrate:d,source:u.mapped?this.manifest.provenance:"Scalar authored control"},l==="leaf"&&(A.side=Je,A.alphaTest=.48,A.alphaToCoverage=!0),l==="fabric"&&(A.sheenColor=new kt(14862750)),l==="glass"&&r.glass&&(A.color.set(15069422),A.transmission=.92,A.thickness=.035,A.ior=1.5),Ky(A,l,s),this.materials.add(A),o[l]=A}))).find(l=>l.status==="rejected");if(c)throw c.reason;return o}track(t){return this.groups.add(t),t}dispose(){if(!this.disposed){this.disposed=!0;for(let t of this.groups)t.traverse(e=>e.geometry?.dispose());for(let t of this.materials)t.dispose();for(let t of this.textures)t.dispose();this.ktx.dispose(),this.cache.clear()}}};function pA(i){return()=>{let t=i+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function mA(i,t){let e=[...i];for(let n=e.length-1;n>0;n--){let s=Math.floor(t()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}function kh(i,t){if(!i.length)return null;let e=[...i].sort((n,s)=>n-s);return e[Math.floor((e.length-1)*t)]}function Vh(i){return{p50:kh(i,.5),p95:kh(i,.95),p99:kh(i,.99),max:i.length?Math.max(...i):null}}var Oc=class extends is{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new bn;t.deleteAttribute("uv");let e=new mi({side:ke}),n=new mi,s=new Eo(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ge(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let o=new oo(t,n,6),a=new We;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let c=new ge(t,Rr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new ge(t,Rr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new ge(t,Rr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let f=new ge(t,Rr(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let h=new ge(t,Rr(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let d=new ge(t,Rr(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Rr(i){return new Ao({color:0,emissive:16777215,emissiveIntensity:i})}var Qc=class extends mo{constructor(t){super(t),this.type=Ee}parse(t){let o=function(g,v){switch(g){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(v||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(v||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(v||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(v||""))}},f=function(g,v,C){v=v||1024;let R=g.pos,D=-1,b=0,F="",P=String.fromCharCode.apply(null,new Uint16Array(g.subarray(R,R+128)));for(;0>(D=P.indexOf(`
`))&&b<v&&R<g.byteLength;)F+=P,b+=P.length,R+=128,P=String.fromCharCode.apply(null,new Uint16Array(g.subarray(R,R+128)));return-1<D?(C!==!1&&(g.pos+=b+D+1),F+P.slice(0,D)):!1},h=function(g){let v=/^#\?(\S+)/,C=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,R=/^\s*FORMAT=(\S+)\s*$/,D=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,b={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},F,P;for((g.pos>=g.byteLength||!(F=f(g)))&&o(1,"no header found"),(P=F.match(v))||o(3,"bad initial token"),b.valid|=1,b.programtype=P[1],b.string+=F+`
`;F=f(g),F!==!1;){if(b.string+=F+`
`,F.charAt(0)==="#"){b.comments+=F+`
`;continue}if((P=F.match(C))&&(b.gamma=parseFloat(P[1])),(P=F.match(B))&&(b.exposure=parseFloat(P[1])),(P=F.match(R))&&(b.valid|=2,b.format=P[1]),(P=F.match(D))&&(b.valid|=4,b.height=parseInt(P[1],10),b.width=parseInt(P[2],10)),b.valid&2&&b.valid&4)break}return b.valid&2||o(3,"missing format specifier"),b.valid&4||o(3,"missing image size specifier"),b},d=function(g,v,C){let B=v;if(B<8||B>32767||g[0]!==2||g[1]!==2||g[2]&128)return new Uint8Array(g);B!==(g[2]<<8|g[3])&&o(3,"wrong scanline width");let R=new Uint8Array(4*v*C);R.length||o(4,"unable to allocate buffer space");let D=0,b=0,F=4*B,P=new Uint8Array(4),O=new Uint8Array(F),W=C;for(;W>0&&b<g.byteLength;){b+4>g.byteLength&&o(1),P[0]=g[b++],P[1]=g[b++],P[2]=g[b++],P[3]=g[b++],(P[0]!=2||P[1]!=2||(P[2]<<8|P[3])!=B)&&o(3,"bad rgbe scanline format");let N=0,G;for(;N<F&&b<g.byteLength;){G=g[b++];let $=G>128;if($&&(G-=128),(G===0||N+G>F)&&o(3,"bad scanline data"),$){let it=g[b++];for(let wt=0;wt<G;wt++)O[N++]=it}else O.set(g.subarray(b,b+G),N),N+=G,b+=G}let H=B;for(let $=0;$<H;$++){let it=0;R[D]=O[$+it],it+=B,R[D+1]=O[$+it],it+=B,R[D+2]=O[$+it],it+=B,R[D+3]=O[$+it],D+=4}W--}return R},m=function(g,v,C,B){let R=g[v+3],D=Math.pow(2,R-128)/255;C[B+0]=g[v+0]*D,C[B+1]=g[v+1]*D,C[B+2]=g[v+2]*D,C[B+3]=1},_=function(g,v,C,B){let R=g[v+3],D=Math.pow(2,R-128)/255;C[B+0]=Fi.toHalfFloat(Math.min(g[v+0]*D,65504)),C[B+1]=Fi.toHalfFloat(Math.min(g[v+1]*D,65504)),C[B+2]=Fi.toHalfFloat(Math.min(g[v+2]*D,65504)),C[B+3]=Fi.toHalfFloat(1)},p=new Uint8Array(t);p.pos=0;let A=h(p),y=A.width,I=A.height,x=d(p.subarray(p.pos),y,I),E,M,w;switch(this.type){case ve:w=x.length/4;let g=new Float32Array(w*4);for(let C=0;C<w;C++)m(x,C*4,g,C*4);E=g,M=ve;break;case Ee:w=x.length/4;let v=new Uint16Array(w*4);for(let C=0;C<w;C++)_(x,C*4,v,C*4);E=v,M=Ee;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:I,data:E,header:A.string,gamma:A.gamma,exposure:A.exposure,type:M,colorSpace:Ai,minFilter:ae,magFilter:ae,generateMipmaps:!1,flipY:!0}}setDataType(t){return this.type=t,this}};var gA=Math.pow(2,-24),Gc=Symbol("SKIP_GENERATION");function Xy(i){return i.index?i.index.count:i.attributes.position.count}function si(i){return Xy(i)/3}function qy(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function _A(i,t){if(!i.index){let e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=qy(e,n);i.setIndex(new Re(s,1));for(let r=0;r<e;r++)s[r]=r}}function Hh(i,t){let e=si(i),n=t||i.drawRange,s=n.start/3,r=(n.start+n.count)/3,o=Math.max(0,s),a=Math.min(e,r)-o;return[{offset:Math.floor(o),count:Math.floor(a)}]}function zh(i,t){if(!i.groups||!i.groups.length)return Hh(i,t);let e=[],n=new Set,s=t||i.drawRange,r=s.start/3,o=(s.start+s.count)/3;for(let c of i.groups){let l=c.start/3,u=(c.start+c.count)/3;n.add(Math.max(r,l)),n.add(Math.min(o,u))}let a=Array.from(n.values()).sort((c,l)=>c-l);for(let c=0;c<a.length-1;c++){let l=a[c],u=a[c+1];e.push({offset:Math.floor(l),count:Math.floor(u-l)})}return e}function xA(i,t){let e=si(i),n=zh(i,t).sort((o,a)=>o.offset-a.offset),s=n[n.length-1];s.count=Math.min(e-s.offset,s.count);let r=0;return n.forEach(({count:o})=>r+=o),e!==r}function kc(i,t,e,n,s){let r=1/0,o=1/0,a=1/0,c=-1/0,l=-1/0,u=-1/0,f=1/0,h=1/0,d=1/0,m=-1/0,_=-1/0,p=-1/0;for(let A=t*6,y=(t+e)*6;A<y;A+=6){let I=i[A+0],x=i[A+1],E=I-x,M=I+x;E<r&&(r=E),M>c&&(c=M),I<f&&(f=I),I>m&&(m=I);let w=i[A+2],g=i[A+3],v=w-g,C=w+g;v<o&&(o=v),C>l&&(l=C),w<h&&(h=w),w>_&&(_=w);let B=i[A+4],R=i[A+5],D=B-R,b=B+R;D<a&&(a=D),b>u&&(u=b),B<d&&(d=B),B>p&&(p=B)}n[0]=r,n[1]=o,n[2]=a,n[3]=c,n[4]=l,n[5]=u,s[0]=f,s[1]=h,s[2]=d,s[3]=m,s[4]=_,s[5]=p}function yA(i,t=null,e=null,n=null){let s=i.attributes.position,r=i.index?i.index.array:null,o=si(i),a=s.normalized,c;t===null?(c=new Float32Array(o*6),e=0,n=o):(c=t,e=e||0,n=n||o);let l=s.array,u=s.offset||0,f=3;s.isInterleavedBufferAttribute&&(f=s.data.stride);let h=["getX","getY","getZ"];for(let d=e;d<e+n;d++){let m=d*3,_=d*6,p=m+0,A=m+1,y=m+2;r&&(p=r[p],A=r[A],y=r[y]),a||(p=p*f+u,A=A*f+u,y=y*f+u);for(let I=0;I<3;I++){let x,E,M;a?(x=s[h[I]](p),E=s[h[I]](A),M=s[h[I]](y)):(x=l[p+I],E=l[A+I],M=l[y+I]);let w=x;E<w&&(w=E),M<w&&(w=M);let g=x;E>g&&(g=E),M>g&&(g=M);let v=(g-w)/2,C=I*2;c[_+C+0]=w+v,c[_+C+1]=v+(Math.abs(w)+v)*gA}}return c}function de(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Wh(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){let s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function Kh(i,t){t.set(i)}function Xh(i,t,e){let n,s;for(let r=0;r<3;r++){let o=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[o],s=t[o],e[o]=n>s?n:s}}function Uo(i,t,e){for(let n=0;n<3;n++){let s=t[i+2*n],r=t[i+2*n+1],o=s-r,a=s+r;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Dr(i){let t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}var vi=32,Jy=(i,t)=>i.candidate-t.candidate,Ki=new Array(vi).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Vc=new Float32Array(6);function MA(i,t,e,n,s,r){let o=-1,a=0;if(r===0)o=Wh(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(r===1)o=Wh(i),o!==-1&&(a=Zy(e,n,s,o));else if(r===2){let c=Dr(i),l=1.25*s,u=n*6,f=(n+s)*6;for(let h=0;h<3;h++){let d=t[h],p=(t[h+3]-d)/vi;if(s<vi/4){let A=[...Ki];A.length=s;let y=0;for(let x=u;x<f;x+=6,y++){let E=A[y];E.candidate=e[x+2*h],E.count=0;let{bounds:M,leftCacheBounds:w,rightCacheBounds:g}=E;for(let v=0;v<3;v++)g[v]=1/0,g[v+3]=-1/0,w[v]=1/0,w[v+3]=-1/0,M[v]=1/0,M[v+3]=-1/0;Uo(x,e,M)}A.sort(Jy);let I=s;for(let x=0;x<I;x++){let E=A[x];for(;x+1<I&&A[x+1].candidate===E.candidate;)A.splice(x+1,1),I--}for(let x=u;x<f;x+=6){let E=e[x+2*h];for(let M=0;M<I;M++){let w=A[M];E>=w.candidate?Uo(x,e,w.rightCacheBounds):(Uo(x,e,w.leftCacheBounds),w.count++)}}for(let x=0;x<I;x++){let E=A[x],M=E.count,w=s-E.count,g=E.leftCacheBounds,v=E.rightCacheBounds,C=0;M!==0&&(C=Dr(g)/c);let B=0;w!==0&&(B=Dr(v)/c);let R=1+1.25*(C*M+B*w);R<l&&(o=h,l=R,a=E.candidate)}}else{for(let I=0;I<vi;I++){let x=Ki[I];x.count=0,x.candidate=d+p+I*p;let E=x.bounds;for(let M=0;M<3;M++)E[M]=1/0,E[M+3]=-1/0}for(let I=u;I<f;I+=6){let M=~~((e[I+2*h]-d)/p);M>=vi&&(M=vi-1);let w=Ki[M];w.count++,Uo(I,e,w.bounds)}let A=Ki[vi-1];Kh(A.bounds,A.rightCacheBounds);for(let I=vi-2;I>=0;I--){let x=Ki[I],E=Ki[I+1];Xh(x.bounds,E.rightCacheBounds,x.rightCacheBounds)}let y=0;for(let I=0;I<vi-1;I++){let x=Ki[I],E=x.count,M=x.bounds,g=Ki[I+1].rightCacheBounds;E!==0&&(y===0?Kh(M,Vc):Xh(M,Vc,Vc)),y+=E;let v=0,C=0;y!==0&&(v=Dr(Vc)/c);let B=s-y;B!==0&&(C=Dr(g)/c);let R=1+1.25*(v*y+C*B);R<l&&(o=h,l=R,a=x.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:o,pos:a}}function Zy(i,t,e,n){let s=0;for(let r=t,o=t+e;r<o;r++)s+=i[r*6+n*2];return s/e}var Fr=class{constructor(){this.boundingData=new Float32Array(6)}};function vA(i,t,e,n,s,r){let o=n,a=n+s-1,c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){for(let u=0;u<3;u++){let f=t[o*3+u];t[o*3+u]=t[a*3+u],t[a*3+u]=f}for(let u=0;u<6;u++){let f=e[o*6+u];e[o*6+u]=e[a*6+u],e[a*6+u]=f}o++,a--}else return o}}function CA(i,t,e,n,s,r){let o=n,a=n+s-1,c=r.pos,l=r.axis*2;for(;;){for(;o<=a&&e[o*6+l]<c;)o++;for(;o<=a&&e[a*6+l]>=c;)a--;if(o<a){let u=i[o];i[o]=i[a],i[a]=u;for(let f=0;f<6;f++){let h=e[o*6+f];e[o*6+f]=e[a*6+f],e[a*6+f]=h}o++,a--}else return o}}function Ie(i,t){return t[i+15]===65535}function Le(i,t){return t[i+6]}function Qe(i,t){return t[i+14]}function Ke(i){return i+8}function Xe(i,t){return t[i+6]}function Hc(i,t){return t[i+7]}var IA,No,zc,bA,$y=Math.pow(2,32);function Wc(i){return"count"in i?1:1+Wc(i.left)+Wc(i.right)}function wA(i,t,e){return IA=new Float32Array(e),No=new Uint32Array(e),zc=new Uint16Array(e),bA=new Uint8Array(e),qh(i,t)}function qh(i,t){let e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let o=0;o<6;o++)IA[e+o]=r[o];if(s)if(t.buffer){let o=t.buffer;bA.set(new Uint8Array(o),i);for(let a=i,c=i+o.byteLength;a<c;a+=32){let l=a/2;Ie(l,zc)||(No[a/4+6]+=e)}return i+o.byteLength}else{let o=t.offset,a=t.count;return No[e+6]=o,zc[n+14]=a,zc[n+15]=65535,i+32}else{let o=t.left,a=t.right,c=t.splitAxis,l;if(l=qh(i+32,o),l/4>$y)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return No[e+6]=l/4,l=qh(l,a),No[e+7]=c,l}}function jy(i,t){let e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,s=n?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),o=n?new Uint32Array(r):new Uint16Array(r);for(let a=0,c=o.length;a<c;a++)o[a]=a;return o}function tE(i,t,e,n,s){let{maxDepth:r,verbose:o,maxLeafTris:a,strategy:c,onProgress:l,indirect:u}=s,f=i._indirectBuffer,h=i.geometry,d=h.index?h.index.array:null,m=u?CA:vA,_=si(h),p=new Float32Array(6),A=!1,y=new Fr;return kc(t,e,n,y.boundingData,p),x(y,e,n,p),y;function I(E){l&&l(E/_)}function x(E,M,w,g=null,v=0){if(!A&&v>=r&&(A=!0,o&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(h))),w<=a||v>=r)return I(M+w),E.offset=M,E.count=w,E;let C=MA(E.boundingData,g,t,M,w,c);if(C.axis===-1)return I(M+w),E.offset=M,E.count=w,E;let B=m(f,d,t,M,w,C);if(B===M||B===M+w)I(M+w),E.offset=M,E.count=w;else{E.splitAxis=C.axis;let R=new Fr,D=M,b=B-M;E.left=R,kc(t,D,b,R.boundingData,p),x(R,D,b,p,v+1);let F=new Fr,P=B,O=w-b;E.right=F,kc(t,P,O,F.boundingData,p),x(F,P,O,p,v+1)}return E}}function TA(i,t){let e=i.geometry;t.indirect&&(i._indirectBuffer=jy(e,t.useSharedArrayBuffer),xA(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||_A(e,t);let n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=yA(e),r=t.indirect?Hh(e,t.range):zh(e,t.range);i._roots=r.map(o=>{let a=tE(i,s,o.offset,o.count,t),c=Wc(a),l=new n(32*c);return wA(0,a,l),l})}var _n=class{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,o=t.length;r<o;r++){let c=t[r][e];n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,o=e.length;r<o;r++){let a=e[r],c=t.dot(a);n=c<n?c:n,s=c>s?c:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}};_n.prototype.setFromBox=(function(){let i=new U;return function(e,n){let s=n.min,r=n.max,o=1/0,a=-1/0;for(let c=0;c<=1;c++)for(let l=0;l<=1;l++)for(let u=0;u<=1;u++){i.x=s.x*c+r.x*(1-c),i.y=s.y*l+r.y*(1-l),i.z=s.z*u+r.z*(1-u);let f=e.dot(i);o=Math.min(f,o),a=Math.max(f,a)}this.min=o,this.max=a}})();var qC=(function(){let i=new _n;return function(e,n){let s=e.points,r=e.satAxes,o=e.satBounds,a=n.points,c=n.satAxes,l=n.satBounds;for(let u=0;u<3;u++){let f=o[u],h=r[u];if(i.setFromPoints(h,a),f.isSeparated(i))return!1}for(let u=0;u<3;u++){let f=l[u],h=c[u];if(i.setFromPoints(h,s),f.isSeparated(i))return!1}}})();var eE=(function(){let i=new U,t=new U,e=new U;return function(s,r,o){let a=s.start,c=i,l=r.start,u=t;e.subVectors(a,l),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);let f=e.dot(u),h=u.dot(c),d=u.dot(u),m=e.dot(c),p=c.dot(c)*d-h*h,A,y;p!==0?A=(f*h-m*d)/p:A=0,y=(f+A*h)/d,o.x=A,o.y=y}})(),Qo=(function(){let i=new Gt,t=new U,e=new U;return function(s,r,o,a){eE(s,r,i);let c=i.x,l=i.y;if(c>=0&&c<=1&&l>=0&&l<=1){s.at(c,o),r.at(l,a);return}else if(c>=0&&c<=1){l<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else if(l>=0&&l<=1){c<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else{let u;c<0?u=s.start:u=s.end;let f;l<0?f=r.start:f=r.end;let h=t,d=e;if(s.closestPointToPoint(f,!0,t),r.closestPointToPoint(u,!0,e),h.distanceToSquared(f)<=d.distanceToSquared(u)){o.copy(h),a.copy(f);return}else{o.copy(u),a.copy(d);return}}}})(),BA=(function(){let i=new U,t=new U,e=new ln,n=new un;return function(r,o){let{radius:a,center:c}=r,{a:l,b:u,c:f}=o;if(n.start=l,n.end=u,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a||(n.start=l,n.end=f,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a)||(n.start=u,n.end=f,n.closestPointToPoint(c,!0,i).distanceTo(c)<=a))return!0;let _=o.getPlane(e);if(Math.abs(_.distanceToPoint(c))<=a){let A=_.projectPoint(c,t);if(o.containsPoint(A))return!0}return!1}})();var nE=1e-15;function Yh(i){return Math.abs(i)<nE}var Ze=class extends nn{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new U),this.satBounds=new Array(4).fill().map(()=>new _n),this.points=[this.a,this.b,this.c],this.sphere=new Zn,this.plane=new ln,this.needsUpdate=!0}intersectsSphere(t){return BA(t,this)}update(){let t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,o=this.satBounds,a=r[0],c=o[0];this.getNormal(a),c.setFromPoints(a,s);let l=r[1],u=o[1];l.subVectors(t,e),u.setFromPoints(l,s);let f=r[2],h=o[2];f.subVectors(e,n),h.setFromPoints(f,s);let d=r[3],m=o[3];d.subVectors(n,t),m.setFromPoints(d,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}};Ze.prototype.closestPointToSegment=(function(){let i=new U,t=new U,e=new un;return function(s,r=null,o=null){let{start:a,end:c}=s,l=this.points,u,f=1/0;for(let h=0;h<3;h++){let d=(h+1)%3;e.start.copy(l[h]),e.end.copy(l[d]),Qo(e,s,i,t),u=i.distanceToSquared(t),u<f&&(f=u,r&&r.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),u=a.distanceToSquared(i),u<f&&(f=u,r&&r.copy(i),o&&o.copy(a)),this.closestPointToPoint(c,i),u=c.distanceToSquared(i),u<f&&(f=u,r&&r.copy(i),o&&o.copy(c)),Math.sqrt(f)}})();Ze.prototype.intersectsTriangle=(function(){let i=new Ze,t=new Array(3),e=new Array(3),n=new _n,s=new _n,r=new U,o=new U,a=new U,c=new U,l=new U,u=new un,f=new un,h=new un,d=new U;function m(_,p,A){let y=_.points,I=0,x=-1;for(let E=0;E<3;E++){let{start:M,end:w}=u;M.copy(y[E]),w.copy(y[(E+1)%3]),u.delta(o);let g=Yh(p.distanceToPoint(M));if(Yh(p.normal.dot(o))&&g){A.copy(u),I=2;break}let v=p.intersectLine(u,d);if(!v&&g&&d.copy(M),(v||g)&&!Yh(d.distanceTo(w))){if(I<=1)(I===1?A.start:A.end).copy(d),g&&(x=I);else if(I>=2){(x===1?A.start:A.end).copy(d),I=2;break}if(I++,I===2&&x===-1)break}}return I}return function(p,A=null,y=!1){this.needsUpdate&&this.update(),p.isExtendedTriangle?p.needsUpdate&&p.update():(i.copy(p),i.update(),p=i);let I=this.plane,x=p.plane;if(Math.abs(I.normal.dot(x.normal))>1-1e-10){let E=this.satBounds,M=this.satAxes;e[0]=p.a,e[1]=p.b,e[2]=p.c;for(let v=0;v<4;v++){let C=E[v],B=M[v];if(n.setFromPoints(B,e),C.isSeparated(n))return!1}let w=p.satBounds,g=p.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let v=0;v<4;v++){let C=w[v],B=g[v];if(n.setFromPoints(B,t),C.isSeparated(n))return!1}for(let v=0;v<4;v++){let C=M[v];for(let B=0;B<4;B++){let R=g[B];if(r.crossVectors(C,R),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return A&&(y||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),A.start.set(0,0,0),A.end.set(0,0,0)),!0}else{let E=m(this,x,f);if(E===1&&p.containsPoint(f.end))return A&&(A.start.copy(f.end),A.end.copy(f.end)),!0;if(E!==2)return!1;let M=m(p,I,h);if(M===1&&this.containsPoint(h.end))return A&&(A.start.copy(h.end),A.end.copy(h.end)),!0;if(M!==2)return!1;if(f.delta(a),h.delta(c),a.dot(c)<0){let D=h.start;h.start=h.end,h.end=D}let w=f.start.dot(a),g=f.end.dot(a),v=h.start.dot(a),C=h.end.dot(a),B=g<v,R=w<C;return w!==C&&v!==g&&B===R?!1:(A&&(l.subVectors(f.start,h.start),l.dot(a)>0?A.start.copy(f.start):A.start.copy(h.start),l.subVectors(f.end,h.end),l.dot(a)<0?A.end.copy(f.end):A.end.copy(h.end)),!0)}}})();Ze.prototype.distanceToPoint=(function(){let i=new U;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();Ze.prototype.distanceToTriangle=(function(){let i=new U,t=new U,e=["a","b","c"],n=new un,s=new un;return function(o,a=null,c=null){let l=a||c?n:null;if(this.intersectsTriangle(o,l))return(a||c)&&(a&&l.getCenter(a),c&&l.getCenter(c)),0;let u=1/0;for(let f=0;f<3;f++){let h,d=e[f],m=o[d];this.closestPointToPoint(m,i),h=m.distanceToSquared(i),h<u&&(u=h,a&&a.copy(i),c&&c.copy(m));let _=this[d];o.closestPointToPoint(_,i),h=_.distanceToSquared(i),h<u&&(u=h,a&&a.copy(_),c&&c.copy(i))}for(let f=0;f<3;f++){let h=e[f],d=e[(f+1)%3];n.set(this[h],this[d]);for(let m=0;m<3;m++){let _=e[m],p=e[(m+1)%3];s.set(o[_],o[p]),Qo(n,s,i,t);let A=i.distanceToSquared(t);A<u&&(u=A,a&&a.copy(i),c&&c.copy(t))}}return Math.sqrt(u)}})();var we=class{constructor(t,e,n){this.isOrientedBox=!0,this.min=new U,this.max=new U,this.matrix=new Ht,this.invMatrix=new Ht,this.points=new Array(8).fill().map(()=>new U),this.satAxes=new Array(3).fill().map(()=>new U),this.satBounds=new Array(3).fill().map(()=>new _n),this.alignedSatBounds=new Array(3).fill().map(()=>new _n),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}};we.prototype.update=(function(){return function(){let t=this.matrix,e=this.min,n=this.max,s=this.points;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){let h=1*l|2*u|4*f,d=s[h];d.x=l?n.x:e.x,d.y=u?n.y:e.y,d.z=f?n.z:e.z,d.applyMatrix4(t)}let r=this.satBounds,o=this.satAxes,a=s[0];for(let l=0;l<3;l++){let u=o[l],f=r[l],h=1<<l,d=s[h];u.subVectors(a,d),f.setFromPoints(u,s)}let c=this.alignedSatBounds;c[0].setFromPointsField(s,"x"),c[1].setFromPointsField(s,"y"),c[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();we.prototype.intersectsBox=(function(){let i=new _n;return function(e){this.needsUpdate&&this.update();let n=e.min,s=e.max,r=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,a[0].isSeparated(i)||(i.min=n.y,i.max=s.y,a[1].isSeparated(i))||(i.min=n.z,i.max=s.z,a[2].isSeparated(i)))return!1;for(let c=0;c<3;c++){let l=o[c],u=r[c];if(i.setFromBox(l,e),u.isSeparated(i))return!1}return!0}})();we.prototype.intersectsTriangle=(function(){let i=new Ze,t=new Array(3),e=new _n,n=new _n,s=new U;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);let a=this.satBounds,c=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let h=0;h<3;h++){let d=a[h],m=c[h];if(e.setFromPoints(m,t),d.isSeparated(e))return!1}let l=o.satBounds,u=o.satAxes,f=this.points;for(let h=0;h<3;h++){let d=l[h],m=u[h];if(e.setFromPoints(m,f),d.isSeparated(e))return!1}for(let h=0;h<3;h++){let d=c[h];for(let m=0;m<4;m++){let _=u[m];if(s.crossVectors(d,_),e.setFromPoints(s,t),n.setFromPoints(s,f),e.isSeparated(n))return!1}}return!0}})();we.prototype.closestPointToPoint=(function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}})();we.prototype.distanceToPoint=(function(){let i=new U;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}})();we.prototype.distanceToBox=(function(){let i=["x","y","z"],t=new Array(12).fill().map(()=>new un),e=new Array(12).fill().map(()=>new un),n=new U,s=new U;return function(o,a=0,c=null,l=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(c||l)&&(o.getCenter(s),this.closestPointToPoint(s,n),o.closestPointToPoint(n,s),c&&c.copy(n),l&&l.copy(s)),0;let u=a*a,f=o.min,h=o.max,d=this.points,m=1/0;for(let p=0;p<8;p++){let A=d[p];s.copy(A).clamp(f,h);let y=A.distanceToSquared(s);if(y<m&&(m=y,c&&c.copy(A),l&&l.copy(s),y<u))return Math.sqrt(y)}let _=0;for(let p=0;p<3;p++)for(let A=0;A<=1;A++)for(let y=0;y<=1;y++){let I=(p+1)%3,x=(p+2)%3,E=A<<I|y<<x,M=1<<p|A<<I|y<<x,w=d[E],g=d[M];t[_].set(w,g);let C=i[p],B=i[I],R=i[x],D=e[_],b=D.start,F=D.end;b[C]=f[C],b[B]=A?f[B]:h[B],b[R]=y?f[R]:h[B],F[C]=h[C],F[B]=A?f[B]:h[B],F[R]=y?f[R]:h[B],_++}for(let p=0;p<=1;p++)for(let A=0;A<=1;A++)for(let y=0;y<=1;y++){s.x=p?h.x:f.x,s.y=A?h.y:f.y,s.z=y?h.z:f.z,this.closestPointToPoint(s,n);let I=s.distanceToSquared(n);if(I<m&&(m=I,c&&c.copy(n),l&&l.copy(s),I<u))return Math.sqrt(I)}for(let p=0;p<12;p++){let A=t[p];for(let y=0;y<12;y++){let I=e[y];Qo(A,I,n,s);let x=n.distanceToSquared(s);if(x<m&&(m=x,c&&c.copy(n),l&&l.copy(s),x<u))return Math.sqrt(x)}}return Math.sqrt(m)}})();var Xi=class{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){let t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}};var Jh=class extends Xi{constructor(){super(()=>new Ze)}},dn=new Jh;var Zh=class{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;let t=[],e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}},ne=new Zh;var qi,Pr,Lr=[],Xc=new Xi(()=>new fe);function RA(i,t,e,n,s,r){qi=Xc.getPrimitive(),Pr=Xc.getPrimitive(),Lr.push(qi,Pr),ne.setBuffer(i._roots[t]);let o=$h(0,i.geometry,e,n,s,r);ne.clearBuffer(),Xc.releasePrimitive(qi),Xc.releasePrimitive(Pr),Lr.pop(),Lr.pop();let a=Lr.length;return a>0&&(Pr=Lr[a-1],qi=Lr[a-2]),o}function $h(i,t,e,n,s=null,r=0,o=0){let{float32Array:a,uint16Array:c,uint32Array:l}=ne,u=i*2;if(Ie(u,c)){let h=Le(i,l),d=Qe(u,c);return de(i,a,qi),n(h,d,!1,o,r+i,qi)}else{let C=function(R){let{uint16Array:D,uint32Array:b}=ne,F=R*2;for(;!Ie(F,D);)R=Ke(R),F=R*2;return Le(R,b)},B=function(R){let{uint16Array:D,uint32Array:b}=ne,F=R*2;for(;!Ie(F,D);)R=Xe(R,b),F=R*2;return Le(R,b)+Qe(F,D)},h=Ke(i),d=Xe(i,l),m=h,_=d,p,A,y,I;if(s&&(y=qi,I=Pr,de(m,a,y),de(_,a,I),p=s(y),A=s(I),A<p)){m=d,_=h;let R=p;p=A,A=R,y=I}y||(y=qi,de(m,a,y));let x=Ie(m*2,c),E=e(y,x,p,o+1,r+m),M;if(E===2){let R=C(m),b=B(m)-R;M=n(R,b,!0,o+1,r+m,y)}else M=E&&$h(m,t,e,n,s,r,o+1);if(M)return!0;I=Pr,de(_,a,I);let w=Ie(_*2,c),g=e(I,w,A,o+1,r+_),v;if(g===2){let R=C(_),b=B(_)-R;v=n(R,b,!0,o+1,r+_,I)}else v=g&&$h(_,t,e,n,s,r,o+1);return!!v}}var Go=new U,tu=new U;function DA(i,t,e={},n=0,s=1/0){let r=n*n,o=s*s,a=1/0,c=null;if(i.shapecast({boundsTraverseOrder:u=>(Go.copy(t).clamp(u.min,u.max),Go.distanceToSquared(t)),intersectsBounds:(u,f,h)=>h<a&&h<o,intersectsTriangle:(u,f)=>{u.closestPointToPoint(t,Go);let h=t.distanceToSquared(Go);return h<a&&(tu.copy(Go),a=h,c=f),h<r}}),a===1/0)return null;let l=Math.sqrt(a);return e.point?e.point.copy(tu):e.point=tu.clone(),e.distance=l,e.faceIndex=c,e}var sE=parseInt("186")>=169,xs=new U,ys=new U,Es=new U,qc=new Gt,Yc=new Gt,Jc=new Gt,FA=new U,LA=new U,PA=new U,ko=new U;function rE(i,t,e,n,s,r,o,a){let c;if(r===ke?c=i.intersectTriangle(n,e,t,!0,s):c=i.intersectTriangle(t,e,n,r!==Je,s),c===null)return null;let l=i.origin.distanceTo(s);return l<o||l>a?null:{distance:l,point:s.clone()}}function oE(i,t,e,n,s,r,o,a,c,l,u){xs.fromBufferAttribute(t,r),ys.fromBufferAttribute(t,o),Es.fromBufferAttribute(t,a);let f=rE(i,xs,ys,Es,ko,c,l,u);if(f){let h=new U;nn.getBarycoord(ko,xs,ys,Es,h),n&&(qc.fromBufferAttribute(n,r),Yc.fromBufferAttribute(n,o),Jc.fromBufferAttribute(n,a),f.uv=nn.getInterpolation(ko,xs,ys,Es,qc,Yc,Jc,new Gt)),s&&(qc.fromBufferAttribute(s,r),Yc.fromBufferAttribute(s,o),Jc.fromBufferAttribute(s,a),f.uv1=nn.getInterpolation(ko,xs,ys,Es,qc,Yc,Jc,new Gt)),e&&(FA.fromBufferAttribute(e,r),LA.fromBufferAttribute(e,o),PA.fromBufferAttribute(e,a),f.normal=nn.getInterpolation(ko,xs,ys,Es,FA,LA,PA,new U),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));let d={a:r,b:o,c:a,normal:new U,materialIndex:0};nn.getNormal(xs,ys,Es,d.normal),f.face=d,f.faceIndex=r,sE&&(f.barycoord=h)}return f}function Ur(i,t,e,n,s,r,o){let a=n*3,c=a+0,l=a+1,u=a+2,f=i.index;i.index&&(c=f.getX(c),l=f.getX(l),u=f.getX(u));let{position:h,normal:d,uv:m,uv1:_}=i.attributes,p=oE(e,h,d,m,_,c,l,u,t,r,o);return p?(p.faceIndex=n,s&&s.push(p),p):null}function Ae(i,t,e,n){let s=i.a,r=i.b,o=i.c,a=t,c=t+1,l=t+2;e&&(a=e.getX(a),c=e.getX(c),l=e.getX(l)),s.x=n.getX(a),s.y=n.getY(a),s.z=n.getZ(a),r.x=n.getX(c),r.y=n.getY(c),r.z=n.getZ(c),o.x=n.getX(l),o.y=n.getY(l),o.z=n.getZ(l)}function UA(i,t,e,n,s,r,o,a){let{geometry:c,_indirectBuffer:l}=i;for(let u=n,f=n+s;u<f;u++)Ur(c,t,e,u,r,o,a)}function NA(i,t,e,n,s,r,o){let{geometry:a,_indirectBuffer:c}=i,l=1/0,u=null;for(let f=n,h=n+s;f<h;f++){let d;d=Ur(a,t,e,f,null,r,o),d&&d.distance<l&&(u=d,l=d.distance)}return u}function OA(i,t,e,n,s,r,o){let{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=i,f=t+i;u<f;u++){let h;if(h=u,Ae(o,h*3,c,l),o.needsUpdate=!0,n(o,h,s,r))return!0}return!1}function QA(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position,r,o,a,c,l=0,u=i._roots;for(let h=0,d=u.length;h<d;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,d,m=!1){let _=h*2;if(a[_+15]===65535){let A=o[h+6],y=a[_+14],I=1/0,x=1/0,E=1/0,M=-1/0,w=-1/0,g=-1/0;for(let v=3*A,C=3*(A+y);v<C;v++){let B=n[v],R=s.getX(B),D=s.getY(B),b=s.getZ(B);R<I&&(I=R),R>M&&(M=R),D<x&&(x=D),D>w&&(w=D),b<E&&(E=b),b>g&&(g=b)}return c[h+0]!==I||c[h+1]!==x||c[h+2]!==E||c[h+3]!==M||c[h+4]!==w||c[h+5]!==g?(c[h+0]=I,c[h+1]=x,c[h+2]=E,c[h+3]=M,c[h+4]=w,c[h+5]=g,!0):!1}else{let A=h+8,y=o[h+6],I=A+d,x=y+d,E=m,M=!1,w=!1;t?E||(M=t.has(I),w=t.has(x),E=!M&&!w):(M=!0,w=!0);let g=E||M,v=E||w,C=!1;g&&(C=f(A,d,E));let B=!1;v&&(B=f(y,d,E));let R=C||B;if(R)for(let D=0;D<3;D++){let b=A+D,F=y+D,P=c[b],O=c[b+3],W=c[F],N=c[F+3];c[h+D]=P<W?P:W,c[h+D+3]=O>N?O:N}return R}}}function Bn(i,t,e,n,s){let r,o,a,c,l,u,f=1/e.direction.x,h=1/e.direction.y,d=1/e.direction.z,m=e.origin.x,_=e.origin.y,p=e.origin.z,A=t[i],y=t[i+3],I=t[i+1],x=t[i+3+1],E=t[i+2],M=t[i+3+2];return f>=0?(r=(A-m)*f,o=(y-m)*f):(r=(y-m)*f,o=(A-m)*f),h>=0?(a=(I-_)*h,c=(x-_)*h):(a=(x-_)*h,c=(I-_)*h),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),d>=0?(l=(E-p)*d,u=(M-p)*d):(l=(M-p)*d,u=(E-p)*d),r>u||l>o)?!1:((l>r||r!==r)&&(r=l),(u<o||o!==o)&&(o=u),r<=s&&o>=n)}function GA(i,t,e,n,s,r,o,a){let{geometry:c,_indirectBuffer:l}=i;for(let u=n,f=n+s;u<f;u++){let h=l?l[u]:u;Ur(c,t,e,h,r,o,a)}}function kA(i,t,e,n,s,r,o){let{geometry:a,_indirectBuffer:c}=i,l=1/0,u=null;for(let f=n,h=n+s;f<h;f++){let d;d=Ur(a,t,e,c?c[f]:f,null,r,o),d&&d.distance<l&&(u=d,l=d.distance)}return u}function VA(i,t,e,n,s,r,o){let{geometry:a}=e,{index:c}=a,l=a.attributes.position;for(let u=i,f=t+i;u<f;u++){let h;if(h=e.resolveTriangleIndex(u),Ae(o,h*3,c,l),o.needsUpdate=!0,n(o,h,s,r))return!0}return!1}function HA(i,t,e,n,s,r,o){ne.setBuffer(i._roots[t]),eu(0,i,e,n,s,r,o),ne.clearBuffer()}function eu(i,t,e,n,s,r,o){let{float32Array:a,uint16Array:c,uint32Array:l}=ne,u=i*2;if(Ie(u,c)){let h=Le(i,l),d=Qe(u,c);UA(t,e,n,h,d,s,r,o)}else{let h=Ke(i);Bn(h,a,n,r,o)&&eu(h,t,e,n,s,r,o);let d=Xe(i,l);Bn(d,a,n,r,o)&&eu(d,t,e,n,s,r,o)}}var aE=["x","y","z"];function zA(i,t,e,n,s,r){ne.setBuffer(i._roots[t]);let o=nu(0,i,e,n,s,r);return ne.clearBuffer(),o}function nu(i,t,e,n,s,r){let{float32Array:o,uint16Array:a,uint32Array:c}=ne,l=i*2;if(Ie(l,a)){let f=Le(i,c),h=Qe(l,a);return NA(t,e,n,f,h,s,r)}else{let f=Hc(i,c),h=aE[f],m=n.direction[h]>=0,_,p;m?(_=Ke(i),p=Xe(i,c)):(_=Xe(i,c),p=Ke(i));let y=Bn(_,o,n,s,r)?nu(_,t,e,n,s,r):null;if(y){let E=y.point[h];if(m?E<=o[p+f]:E>=o[p+f+3])return y}let x=Bn(p,o,n,s,r)?nu(p,t,e,n,s,r):null;return y&&x?y.distance<=x.distance?y:x:y||x||null}}var Zc=new fe,Nr=new Ze,Or=new Ze,Vo=new Ht,WA=new we,$c=new we;function KA(i,t,e,n){ne.setBuffer(i._roots[t]);let s=iu(0,i,e,n);return ne.clearBuffer(),s}function iu(i,t,e,n,s=null){let{float32Array:r,uint16Array:o,uint32Array:a}=ne,c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),WA.set(e.boundingBox.min,e.boundingBox.max,n),s=WA),Ie(c,o)){let u=t.geometry,f=u.index,h=u.attributes.position,d=e.index,m=e.attributes.position,_=Le(i,a),p=Qe(c,o);if(Vo.copy(n).invert(),e.boundsTree)return de(i,r,$c),$c.matrix.copy(Vo),$c.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>$c.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let I=_*3,x=(p+_)*3;I<x;I+=3)if(Ae(Or,I,f,h),Or.needsUpdate=!0,y.intersectsTriangle(Or))return!0;return!1}});for(let A=_*3,y=(p+_)*3;A<y;A+=3){Ae(Nr,A,f,h),Nr.a.applyMatrix4(Vo),Nr.b.applyMatrix4(Vo),Nr.c.applyMatrix4(Vo),Nr.needsUpdate=!0;for(let I=0,x=d.count;I<x;I+=3)if(Ae(Or,I,d,m),Or.needsUpdate=!0,Nr.intersectsTriangle(Or))return!0}}else{let u=i+8,f=a[i+6];return de(u,r,Zc),!!(s.intersectsBox(Zc)&&iu(u,t,e,n,s)||(de(f,r,Zc),s.intersectsBox(Zc)&&iu(f,t,e,n,s)))}}var jc=new Ht,su=new we,Ho=new we,cE=new U,lE=new U,hE=new U,uE=new U;function XA(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),su.set(t.boundingBox.min,t.boundingBox.max,e),su.needsUpdate=!0;let a=i.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,f=t.index,h=dn.getPrimitive(),d=dn.getPrimitive(),m=cE,_=lE,p=null,A=null;s&&(p=hE,A=uE);let y=1/0,I=null,x=null;return jc.copy(e).invert(),Ho.matrix.copy(jc),i.shapecast({boundsTraverseOrder:E=>su.distanceToBox(E),intersectsBounds:(E,M,w)=>w<y&&w<o?(M&&(Ho.min.copy(E.min),Ho.max.copy(E.max),Ho.needsUpdate=!0),!0):!1,intersectsRange:(E,M)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:g=>Ho.distanceToBox(g),intersectsBounds:(g,v,C)=>C<y&&C<o,intersectsRange:(g,v)=>{for(let C=g,B=g+v;C<B;C++){Ae(d,3*C,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let R=E,D=E+M;R<D;R++){Ae(h,3*R,l,c),h.needsUpdate=!0;let b=h.distanceToTriangle(d,m,p);if(b<y&&(_.copy(m),A&&A.copy(p),y=b,I=R,x=C),b<r)return!0}}}});{let w=si(t);for(let g=0,v=w;g<v;g++){Ae(d,3*g,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let C=E,B=E+M;C<B;C++){Ae(h,3*C,l,c),h.needsUpdate=!0;let R=h.distanceToTriangle(d,m,p);if(R<y&&(_.copy(m),A&&A.copy(p),y=R,I=C,x=g),R<r)return!0}}}}}),dn.releasePrimitive(h),dn.releasePrimitive(d),y===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=y,n.faceIndex=I,s&&(s.point?s.point.copy(A):s.point=A.clone(),s.point.applyMatrix4(jc),_.applyMatrix4(jc),s.distance=_.sub(s.point).length(),s.faceIndex=x),n)}function qA(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));let e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position,r,o,a,c,l=0,u=i._roots;for(let h=0,d=u.length;h<d;h++)r=u[h],o=new Uint32Array(r),a=new Uint16Array(r),c=new Float32Array(r),f(0,l),l+=r.byteLength;function f(h,d,m=!1){let _=h*2;if(a[_+15]===65535){let A=o[h+6],y=a[_+14],I=1/0,x=1/0,E=1/0,M=-1/0,w=-1/0,g=-1/0;for(let v=A,C=A+y;v<C;v++){let B=3*i.resolveTriangleIndex(v);for(let R=0;R<3;R++){let D=B+R;D=n?n[D]:D;let b=s.getX(D),F=s.getY(D),P=s.getZ(D);b<I&&(I=b),b>M&&(M=b),F<x&&(x=F),F>w&&(w=F),P<E&&(E=P),P>g&&(g=P)}}return c[h+0]!==I||c[h+1]!==x||c[h+2]!==E||c[h+3]!==M||c[h+4]!==w||c[h+5]!==g?(c[h+0]=I,c[h+1]=x,c[h+2]=E,c[h+3]=M,c[h+4]=w,c[h+5]=g,!0):!1}else{let A=h+8,y=o[h+6],I=A+d,x=y+d,E=m,M=!1,w=!1;t?E||(M=t.has(I),w=t.has(x),E=!M&&!w):(M=!0,w=!0);let g=E||M,v=E||w,C=!1;g&&(C=f(A,d,E));let B=!1;v&&(B=f(y,d,E));let R=C||B;if(R)for(let D=0;D<3;D++){let b=A+D,F=y+D,P=c[b],O=c[b+3],W=c[F],N=c[F+3];c[h+D]=P<W?P:W,c[h+D+3]=O>N?O:N}return R}}}function YA(i,t,e,n,s,r,o){ne.setBuffer(i._roots[t]),ru(0,i,e,n,s,r,o),ne.clearBuffer()}function ru(i,t,e,n,s,r,o){let{float32Array:a,uint16Array:c,uint32Array:l}=ne,u=i*2;if(Ie(u,c)){let h=Le(i,l),d=Qe(u,c);GA(t,e,n,h,d,s,r,o)}else{let h=Ke(i);Bn(h,a,n,r,o)&&ru(h,t,e,n,s,r,o);let d=Xe(i,l);Bn(d,a,n,r,o)&&ru(d,t,e,n,s,r,o)}}var fE=["x","y","z"];function JA(i,t,e,n,s,r){ne.setBuffer(i._roots[t]);let o=ou(0,i,e,n,s,r);return ne.clearBuffer(),o}function ou(i,t,e,n,s,r){let{float32Array:o,uint16Array:a,uint32Array:c}=ne,l=i*2;if(Ie(l,a)){let f=Le(i,c),h=Qe(l,a);return kA(t,e,n,f,h,s,r)}else{let f=Hc(i,c),h=fE[f],m=n.direction[h]>=0,_,p;m?(_=Ke(i),p=Xe(i,c)):(_=Xe(i,c),p=Ke(i));let y=Bn(_,o,n,s,r)?ou(_,t,e,n,s,r):null;if(y){let E=y.point[h];if(m?E<=o[p+f]:E>=o[p+f+3])return y}let x=Bn(p,o,n,s,r)?ou(p,t,e,n,s,r):null;return y&&x?y.distance<=x.distance?y:x:y||x||null}}var tl=new fe,Qr=new Ze,Gr=new Ze,zo=new Ht,ZA=new we,el=new we;function $A(i,t,e,n){ne.setBuffer(i._roots[t]);let s=au(0,i,e,n);return ne.clearBuffer(),s}function au(i,t,e,n,s=null){let{float32Array:r,uint16Array:o,uint32Array:a}=ne,c=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),ZA.set(e.boundingBox.min,e.boundingBox.max,n),s=ZA),Ie(c,o)){let u=t.geometry,f=u.index,h=u.attributes.position,d=e.index,m=e.attributes.position,_=Le(i,a),p=Qe(c,o);if(zo.copy(n).invert(),e.boundsTree)return de(i,r,el),el.matrix.copy(zo),el.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:y=>el.intersectsBox(y),intersectsTriangle:y=>{y.a.applyMatrix4(n),y.b.applyMatrix4(n),y.c.applyMatrix4(n),y.needsUpdate=!0;for(let I=_,x=p+_;I<x;I++)if(Ae(Gr,3*t.resolveTriangleIndex(I),f,h),Gr.needsUpdate=!0,y.intersectsTriangle(Gr))return!0;return!1}});for(let A=_,y=p+_;A<y;A++){let I=t.resolveTriangleIndex(A);Ae(Qr,3*I,f,h),Qr.a.applyMatrix4(zo),Qr.b.applyMatrix4(zo),Qr.c.applyMatrix4(zo),Qr.needsUpdate=!0;for(let x=0,E=d.count;x<E;x+=3)if(Ae(Gr,x,d,m),Gr.needsUpdate=!0,Qr.intersectsTriangle(Gr))return!0}}else{let u=i+8,f=a[i+6];return de(u,r,tl),!!(s.intersectsBox(tl)&&au(u,t,e,n,s)||(de(f,r,tl),s.intersectsBox(tl)&&au(f,t,e,n,s)))}}var nl=new Ht,cu=new we,Wo=new we,dE=new U,AE=new U,pE=new U,mE=new U;function jA(i,t,e,n={},s={},r=0,o=1/0){t.boundingBox||t.computeBoundingBox(),cu.set(t.boundingBox.min,t.boundingBox.max,e),cu.needsUpdate=!0;let a=i.geometry,c=a.attributes.position,l=a.index,u=t.attributes.position,f=t.index,h=dn.getPrimitive(),d=dn.getPrimitive(),m=dE,_=AE,p=null,A=null;s&&(p=pE,A=mE);let y=1/0,I=null,x=null;return nl.copy(e).invert(),Wo.matrix.copy(nl),i.shapecast({boundsTraverseOrder:E=>cu.distanceToBox(E),intersectsBounds:(E,M,w)=>w<y&&w<o?(M&&(Wo.min.copy(E.min),Wo.max.copy(E.max),Wo.needsUpdate=!0),!0):!1,intersectsRange:(E,M)=>{if(t.boundsTree){let w=t.boundsTree;return w.shapecast({boundsTraverseOrder:g=>Wo.distanceToBox(g),intersectsBounds:(g,v,C)=>C<y&&C<o,intersectsRange:(g,v)=>{for(let C=g,B=g+v;C<B;C++){let R=w.resolveTriangleIndex(C);Ae(d,3*R,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let D=E,b=E+M;D<b;D++){let F=i.resolveTriangleIndex(D);Ae(h,3*F,l,c),h.needsUpdate=!0;let P=h.distanceToTriangle(d,m,p);if(P<y&&(_.copy(m),A&&A.copy(p),y=P,I=D,x=C),P<r)return!0}}}})}else{let w=si(t);for(let g=0,v=w;g<v;g++){Ae(d,3*g,f,u),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let C=E,B=E+M;C<B;C++){let R=i.resolveTriangleIndex(C);Ae(h,3*R,l,c),h.needsUpdate=!0;let D=h.distanceToTriangle(d,m,p);if(D<y&&(_.copy(m),A&&A.copy(p),y=D,I=C,x=g),D<r)return!0}}}}}),dn.releasePrimitive(h),dn.releasePrimitive(d),y===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=y,n.faceIndex=I,s&&(s.point?s.point.copy(A):s.point=A.clone(),s.point.applyMatrix4(nl),_.applyMatrix4(nl),s.distance=_.sub(s.point).length(),s.faceIndex=x),n)}function tp(){return typeof SharedArrayBuffer<"u"}var Ko=new ne.constructor,il=new ne.constructor,Yi=new Xi(()=>new fe),kr=new fe,Vr=new fe,lu=new fe,hu=new fe,uu=!1;function ep(i,t,e,n){if(uu)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");uu=!0;let s=i._roots,r=t._roots,o,a=0,c=0,l=new Ht().copy(e).invert();for(let u=0,f=s.length;u<f;u++){Ko.setBuffer(s[u]),c=0;let h=Yi.getPrimitive();de(0,Ko.float32Array,h),h.applyMatrix4(l);for(let d=0,m=r.length;d<m&&(il.setBuffer(r[d]),o=Vn(0,0,e,l,n,a,c,0,0,h),il.clearBuffer(),c+=r[d].length,!o);d++);if(Yi.releasePrimitive(h),Ko.clearBuffer(),a+=s[u].length,o)break}return uu=!1,o}function Vn(i,t,e,n,s,r=0,o=0,a=0,c=0,l=null,u=!1){let f,h;u?(f=il,h=Ko):(f=Ko,h=il);let d=f.float32Array,m=f.uint32Array,_=f.uint16Array,p=h.float32Array,A=h.uint32Array,y=h.uint16Array,I=i*2,x=t*2,E=Ie(I,_),M=Ie(x,y),w=!1;if(M&&E)u?w=s(Le(t,A),Qe(t*2,y),Le(i,m),Qe(i*2,_),c,o+t,a,r+i):w=s(Le(i,m),Qe(i*2,_),Le(t,A),Qe(t*2,y),a,r+i,c,o+t);else if(M){let g=Yi.getPrimitive();de(t,p,g),g.applyMatrix4(e);let v=Ke(i),C=Xe(i,m);de(v,d,kr),de(C,d,Vr);let B=g.intersectsBox(kr),R=g.intersectsBox(Vr);w=B&&Vn(t,v,n,e,s,o,r,c,a+1,g,!u)||R&&Vn(t,C,n,e,s,o,r,c,a+1,g,!u),Yi.releasePrimitive(g)}else{let g=Ke(t),v=Xe(t,A);de(g,p,lu),de(v,p,hu);let C=l.intersectsBox(lu),B=l.intersectsBox(hu);if(C&&B)w=Vn(i,g,e,n,s,r,o,a,c+1,l,u)||Vn(i,v,e,n,s,r,o,a,c+1,l,u);else if(C)if(E)w=Vn(i,g,e,n,s,r,o,a,c+1,l,u);else{let R=Yi.getPrimitive();R.copy(lu).applyMatrix4(e);let D=Ke(i),b=Xe(i,m);de(D,d,kr),de(b,d,Vr);let F=R.intersectsBox(kr),P=R.intersectsBox(Vr);w=F&&Vn(g,D,n,e,s,o,r,c,a+1,R,!u)||P&&Vn(g,b,n,e,s,o,r,c,a+1,R,!u),Yi.releasePrimitive(R)}else if(B)if(E)w=Vn(i,v,e,n,s,r,o,a,c+1,l,u);else{let R=Yi.getPrimitive();R.copy(hu).applyMatrix4(e);let D=Ke(i),b=Xe(i,m);de(D,d,kr),de(b,d,Vr);let F=R.intersectsBox(kr),P=R.intersectsBox(Vr);w=F&&Vn(v,D,n,e,s,o,r,c,a+1,R,!u)||P&&Vn(v,b,n,e,s,o,r,c,a+1,R,!u),Yi.releasePrimitive(R)}}return w}var sl=new we,np=new fe,gE={strategy:0,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null},Xo=class i{static serialize(t,e={}){e={cloneBuffers:!0,...e};let n=t.geometry,s=t._roots,r=t._indirectBuffer,o=n.getIndex(),a;return e.cloneBuffers?a={roots:s.map(c=>c.slice()),index:o?o.array.slice():null,indirectBuffer:r?r.slice():null}:a={roots:s,index:o?o.array:null,indirectBuffer:r},a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};let{index:s,roots:r,indirectBuffer:o}=t,a=new i(e,{...n,[Gc]:!0});if(a._roots=r,a._indirectBuffer=o||null,n.setIndex){let c=e.getIndex();if(c===null){let l=new Re(t.index,1,!1);e.setIndex(l)}else c.array!==s&&(c.array.set(s),c.needsUpdate=!0)}return a}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...gE,[Gc]:!1},e),e.useSharedArrayBuffer&&!tp())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Gc]||(TA(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new fe))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?qA:QA)(this,t)}traverse(t,e=0){let n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);o(0);function o(a,c=0){let l=a*2,u=r[l+15]===65535;if(u){let f=s[a+6],h=r[l+14];t(c,u,new Float32Array(n,a*4,6),f,h)}else{let f=a+32/4,h=s[a+6],d=s[a+7];t(c,u,new Float32Array(n,a*4,6),d)||(o(f,c+1),o(h,c+1))}}}raycast(t,e=Nn,n=0,s=1/0){let r=this._roots,o=this.geometry,a=[],c=e.isMaterial,l=Array.isArray(e),u=o.groups,f=c?e.side:e,h=this.indirect?YA:HA;for(let d=0,m=r.length;d<m;d++){let _=l?e[u[d].materialIndex].side:f,p=a.length;if(h(this,d,_,t,a,n,s),l){let A=u[d].materialIndex;for(let y=p,I=a.length;y<I;y++)a[y].face.materialIndex=A}}return a}raycastFirst(t,e=Nn,n=0,s=1/0){let r=this._roots,o=this.geometry,a=e.isMaterial,c=Array.isArray(e),l=null,u=o.groups,f=a?e.side:e,h=this.indirect?JA:zA;for(let d=0,m=r.length;d<m;d++){let _=c?e[u[d].materialIndex].side:f,p=h(this,d,_,t,n,s);p!=null&&(l==null||p.distance<l.distance)&&(l=p,c&&(p.face.materialIndex=u[d].materialIndex))}return l}intersectsGeometry(t,e){let n=!1,s=this._roots,r=this.indirect?$A:KA;for(let o=0,a=s.length;o<a&&(n=r(this,o,t,e),!n);o++);return n}shapecast(t){let e=dn.getPrimitive(),n=this.indirect?VA:OA,{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:o,intersectsTriangle:a}=t;if(o&&a){let f=o;o=(h,d,m,_,p)=>f(h,d,m,_,p)?!0:n(h,d,this,a,m,_,e)}else o||(a?o=(f,h,d,m)=>n(f,h,this,a,d,m,e):o=(f,h,d)=>d);let c=!1,l=0,u=this._roots;for(let f=0,h=u.length;f<h;f++){let d=u[f];if(c=RA(this,f,r,o,s,l),c)break;l+=d.byteLength}return dn.releasePrimitive(e),c}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n,o=dn.getPrimitive(),a=this.geometry.index,c=this.geometry.attributes.position,l=this.indirect?m=>{let _=this.resolveTriangleIndex(m);Ae(o,_*3,a,c)}:m=>{Ae(o,m*3,a,c)},u=dn.getPrimitive(),f=t.geometry.index,h=t.geometry.attributes.position,d=t.indirect?m=>{let _=t.resolveTriangleIndex(m);Ae(u,_*3,f,h)}:m=>{Ae(u,m*3,f,h)};if(r){let m=(_,p,A,y,I,x,E,M)=>{for(let w=A,g=A+y;w<g;w++){d(w),u.a.applyMatrix4(e),u.b.applyMatrix4(e),u.c.applyMatrix4(e),u.needsUpdate=!0;for(let v=_,C=_+p;v<C;v++)if(l(v),o.needsUpdate=!0,r(o,u,v,w,I,x,E,M))return!0}return!1};if(s){let _=s;s=function(p,A,y,I,x,E,M,w){return _(p,A,y,I,x,E,M,w)?!0:m(p,A,y,I,x,E,M,w)}}else s=m}return ep(this,t,e,s)}intersectsBox(t,e){return sl.set(t.min,t.max,e),sl.needsUpdate=!0,this.shapecast({intersectsBounds:n=>sl.intersectsBox(n),intersectsTriangle:n=>sl.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,o=1/0){return(this.indirect?jA:XA)(this,t,e,n,s,r,o)}closestPointToPoint(t,e={},n=0,s=1/0){return DA(this,t,e,n,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{de(0,new Float32Array(n),np),t.union(np)}),t}};var ip=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`;var sp=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`;var aw=`
	${ip}
	${sp}
`;var xE=3228223,yE="assets/hdri/kloofendal_48d_partly_cloudy_puresky_2k.hdr",EE={aces:Mo,agx:vo,neutral:Co};function rp(i,{floorY:t=0}={}){i.outputColorSpace=be,i.shadowMap.type=Ya;let e=i.getContext(),n=new is;n.background=new kt(xE);let s=new qe(35,1,.01,200),r=new wr(i),o=new Oc,a=r.fromScene(o,.04).texture;o.dispose();let c=new _o(14806513,7958621,1.4),l=new cr(16772562,3.2),u=new cr(13164543,1.1);u.position.set(4,4,-3),n.add(c,l,l.target,u);let f=new mi({color:4411724,roughness:1}),h=new ge(new rs(40,40),f);h.rotation.x=-Math.PI/2,h.position.y=t,h.receiveShadow=!0,n.add(h);let d=null,m=new U;function _(b,F){let P=[],O=F,W=()=>(O=O*16807%2147483647,O/2147483647);for(let N=0;N<b;N++){let G=(N+W())/b,H=W(),$=Math.sqrt(G),it=2*Math.PI*H;P.push(new U($*Math.cos(it),$*Math.sin(it),Math.sqrt(1-G)))}return P}function p(b){let F=Math.abs(b.y)<.99?new U(0,1,0):new U(1,0,0),P=new U().crossVectors(F,b).normalize(),O=new U().crossVectors(b,P);return[P,O]}function A(b,F,P){let O=[],W=[];b.traverse(Tt=>{Tt.isMesh&&(Tt.material.alphaTest>0?O:W).push(Tt)});let N=Tt=>{let Y=Tt.map(rt=>{let yt=rt.geometry.clone();yt.applyMatrix4(rt.matrixWorld);for(let ct of Object.keys(yt.attributes))ct!=="position"&&yt.deleteAttribute(ct);return yt.index?yt.toNonIndexed():yt});if(!Y.length)return null;let tt=Bc(Y,!1);return Y.forEach(rt=>rt.dispose()),new Xo(tt)},G=.35,H=N(W),$=N(O),it=new nr,wt=_(P,7);return{occluded:(Tt,Y)=>{let[tt,rt]=p(Y),yt=0;for(let ct of wt){if(it.origin.copy(Tt),it.direction.set(0,0,0).addScaledVector(tt,ct.x).addScaledVector(rt,ct.y).addScaledVector(Y,ct.z),it.direction.y<-1e-4){let Nt=(t-Tt.y)/it.direction.y;if(Nt>0&&Nt<F){yt++;continue}}let Ct=H?.raycastFirst(it,Je,0,F);if(Ct&&Ct.distance>1e-4){yt++;continue}let zt=$?.raycastFirst(it,Je,0,F);zt&&zt.distance>1e-4&&(yt+=G)}return 1-yt/wt.length},dispose:()=>{H?.geometry.dispose(),$?.geometry.dispose()}}}function y(b,F,{rays:P=32,groundN:O=192}={}){b.updateMatrixWorld(!0);let W=performance.now(),N=.15*F,G=A(b,N,P),H=new U,$=new U,it=new Ot,wt=[];b.traverse(Ct=>{if(!Ct.isMesh)return;let zt=Ct.geometry.attributes.position,Nt=Ct.geometry.attributes.normal,Wt=new Uint8Array(zt.count);it.getNormalMatrix(Ct.matrixWorld);for(let jt=0;jt<zt.count;jt++)H.fromBufferAttribute(zt,jt).applyMatrix4(Ct.matrixWorld),$.fromBufferAttribute(Nt,jt).applyMatrix3(it).normalize(),H.addScaledVector($,2e-4),Wt[jt]=Math.round(G.occluded(H,$)*255);wt.push({name:Ct.name,count:zt.count,ao:Wt})});let _t=performance.now()-W,Tt=new fe().setFromObject(b),Y=O,tt=N*1.2,rt=[Tt.min.x-tt,Tt.max.x+tt,Tt.min.z-tt,Tt.max.z+tt],yt=new Uint8Array(Y*Y),ct=new U(0,1,0);for(let Ct=0;Ct<Y;Ct++)for(let zt=0;zt<Y;zt++){let Nt=zt===0||Ct===0||zt===Y-1||Ct===Y-1;yt[Ct*Y+zt]=Nt?255:Math.round(255*G.occluded(new U(rt[0]+(zt+.5)/Y*(rt[1]-rt[0]),t+2e-4,rt[2]+(Ct+.5)/Y*(rt[3]-rt[2])),ct))}return G.dispose(),{meshes:wt,ground:{N:Y,bounds:rt,grid:yt},radius:N,rays:P,vertexMs:_t,totalMs:performance.now()-W}}function I(b){let F=JSON.stringify({format:"v3-occlusion-1",radius:b.radius,rays:b.rays,meshes:b.meshes.map(G=>({name:G.name,count:G.count})),ground:{N:b.ground.N,bounds:b.ground.bounds}}),P=new TextEncoder().encode(F),O=4+P.length+b.meshes.reduce((G,H)=>G+H.count,0)+b.ground.grid.length,W=new Uint8Array(O);new DataView(W.buffer).setUint32(0,P.length,!0),W.set(P,4);let N=4+P.length;for(let G of b.meshes)W.set(G.ao,N),N+=G.count;return W.set(b.ground.grid,N),W}function x(b){let F=new Uint8Array(b),P=new DataView(b).getUint32(0,!0),O=JSON.parse(new TextDecoder().decode(F.subarray(4,4+P))),W=4+P,N=O.meshes.map(H=>{let $=F.slice(W,W+H.count);return W+=H.count,{...H,ao:$}}),G=F.slice(W,W+O.ground.N**2);return{...O,meshes:N,ground:{...O.ground,grid:G}}}function E(b,F){let P=new Map(F.meshes.map(_t=>[_t.name,_t]));b.traverse(_t=>{if(!_t.isMesh)return;let Tt=P.get(_t.name);if(!Tt||Tt.count!==_t.geometry.attributes.position.count)throw new Error(`Occlusion does not match mesh ${_t.name}`);_t.geometry.setAttribute("vao",new Re(Tt.ao,1,!0))});let{N:O,bounds:[W,N,G,H],grid:$}=F.ground,it=new Uint8Array(O*O*4);for(let _t=0;_t<O*O;_t++)it[_t*4]=it[_t*4+1]=it[_t*4+2]=$[_t],it[_t*4+3]=255;let wt=new Un(it,O,O);return wt.needsUpdate=!0,wt.minFilter=wt.magFilter=ae,wt.generateMipmaps=!1,wt.wrapS=wt.wrapT=hn,wt.repeat.set(40/(N-W),40/(H-G)),wt.offset.set(-(W+20)/(N-W),-(20-H)/(H-G)),b.userData.groundAO?.dispose(),b.userData.groundAO=wt,{vertexBytes:F.meshes.reduce((_t,Tt)=>_t+Tt.count,0),groundTexels:O*O}}function M(b,F){b.onBeforeCompile=F?P=>{P.vertexShader=P.vertexShader.replace("#include <common>",`#include <common>
attribute float vao;
varying float vVao;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vVao = vao;`),P.fragmentShader=P.fragmentShader.replace("#include <common>",`#include <common>
varying float vVao;`).replace("#include <aomap_fragment>",`
          float ambientOcclusion = vVao;
          reflectedLight.indirectDiffuse *= ambientOcclusion;
          #if defined( USE_CLEARCOAT )
            clearcoatSpecularIndirect *= ambientOcclusion;
          #endif
          #if defined( USE_SHEEN )
            sheenSpecularIndirect *= ambientOcclusion;
          #endif
          #if defined( USE_ENVMAP ) && defined( STANDARD )
            float dotNVao = saturate( dot( geometryNormal, geometryViewDir ) );
            reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNVao, ambientOcclusion, material.roughness );
          #endif`)}:()=>{},b.customProgramCacheKey=()=>F?"vao":"plain",b.needsUpdate=!0}async function w(b=yE,F=null){let P=await new Qc().setDataType(F?Ee:ve).loadAsync(b),O=F;if(!F){let{width:N,height:G,data:H}=P.image,$=rt=>.2126*H[rt]+.7152*H[rt+1]+.0722*H[rt+2],it=0;for(let rt=0;rt<H.length;rt+=4)it=Math.max(it,$(rt));let wt=Math.min(it,40),_t=[0,0,0],Tt=new U,Y=new U;for(let rt=0;rt<G;rt++){let yt=(.5-(rt+.5)/G)*Math.PI,ct=2*Math.PI/N*(Math.PI/G)*Math.cos(yt);for(let Ct=0;Ct<N;Ct++){let zt=(rt*N+Ct)*4,Nt=$(zt);if(Nt<=wt)continue;let Wt=(Nt-wt)/Nt,jt=((Ct+.5)/N-.5)*2*Math.PI,Yt=H[zt]*Wt*ct,he=H[zt+1]*Wt*ct,Te=H[zt+2]*Wt*ct;_t[0]+=Yt,_t[1]+=he,_t[2]+=Te,Tt.addScaledVector(Y.set(Math.cos(yt)*Math.cos(jt),Math.sin(yt),Math.cos(yt)*Math.sin(jt)),.2126*Yt+.7152*he+.0722*Te),H[zt]*=1-Wt,H[zt+1]*=1-Wt,H[zt+2]*=1-Wt}}let tt=Math.max(..._t);O={direction:Tt.normalize().toArray(),color:_t.map(rt=>rt/tt),intensity:tt,peak:it,clip:wt,source:b},d={remainder:P.image}}P.mapping=ur,P.needsUpdate=!0;let W=r.fromEquirectangular(P).texture;return P.dispose(),d={...d,env:W,record:O,direction:new U(...O.direction),color:new kt(...O.color),intensity:O.intensity},d}function g(){let{width:b,height:F,data:P}=d.remainder,O=b>>1,W=F>>1,N=new TextEncoder().encode(`#?RADIANCE
FORMAT=32-bit_rle_rgbe

-Y ${W} +X ${O}
`),G=new Uint8Array(N.length+O*W*4);G.set(N);for(let H=0;H<W;H++)for(let $=0;$<O;$++){let it=[0,0,0];for(let[tt,rt]of[[0,0],[1,0],[0,1],[1,1]]){let yt=((2*H+rt)*b+2*$+tt)*4;it[0]+=P[yt]/4,it[1]+=P[yt+1]/4,it[2]+=P[yt+2]/4}let wt=Math.max(...it),_t=N.length+(H*O+$)*4;if(wt<1e-32){G[_t]=G[_t+1]=G[_t+2]=G[_t+3]=0;continue}let Tt=Math.ceil(Math.log2(wt)+1e-9),Y=256/2**Tt;G[_t]=Math.min(255,it[0]*Y),G[_t+1]=Math.min(255,it[1]*Y),G[_t+2]=Math.min(255,it[2]*Y),G[_t+3]=Tt+128}return G}function v(b,F,P,O="aces"){let W=F>=2,N=F===3;if(N&&!d)throw new Error("Rung L3 needs loadSky() first");if(n.environment=N?d.env:a,c.visible=!N,u.visible=!N,i.toneMapping=EE[O],N?(l.color.copy(d.color),l.intensity=d.intensity,m.copy(d.direction).multiplyScalar(P*3)):(l.color.set(16772562),l.intensity=3.2,m.set(-.8*P,1.5*P,.8*P)),l.position.copy(m),l.target.position.set(0,0,0),i.shadowMap.enabled=W,l.castShadow=W,W){let G=l.shadow.camera,H=P*.9;G.left=-H,G.right=H,G.top=H,G.bottom=-H,G.near=.01,G.far=P*8,l.shadow.mapSize.set(2048,2048),l.shadow.bias=-4e-4,l.shadow.normalBias=.01*P/4,l.shadow.radius=3,G.updateProjectionMatrix(),l.shadow.needsUpdate=!0}b.traverse(G=>{G.isMesh&&(G.castShadow=W,G.receiveShadow=W,M(G.material,F>=1))}),f.aoMap=F>=1?b.userData.groundAO??null:null,f.aoMapIntensity=1,f.needsUpdate=!0}function C(b){l.position.copy(m),l.position.x+=b}function B(b,F){s.fov=b.fov,s.aspect=F,s.position.set(...b.position),s.lookAt(...b.target),s.updateProjectionMatrix()}function R(){i.render(n,s);let b=e.drawingBufferWidth,F=e.drawingBufferHeight,P=new Uint8Array(b*F*4);e.readPixels(0,0,b,F,e.RGBA,e.UNSIGNED_BYTE,P);let O=N=>(N/=255,N<=.04045?N/12.92:((N+.055)/1.055)**2.4),W=0;for(let N=0;N<P.length;N+=16)W+=.2126*O(P[N])+.7152*O(P[N+1])+.0722*O(P[N+2]);return W/(P.length/16)}function D(b){let F=.95;for(let P=0;P<8;P++){i.toneMappingExposure=F;let O=R();if(Math.abs(O/b-1)<.01)break;F*=Math.pow(b/O,.9)}return{exposure:i.toneMappingExposure,mean:R(),target:b}}return{scene:n,camera:s,gl:e,floorMaterial:f,get sky(){return d},loadSky:w,preparedSkyHDR:g,bake:y,encodeOcclusion:I,decodeOcclusion:x,attachOcclusion:E,applyRung:v,sweepKey:C,setView:B,meanLuminance:R,matchExposure:D}}var SE={chair:{macro:{position:[.1+.35*.62,.47+.35*.27,.3+.35*.7],target:[.1,.47,.3],fov:35}}},fu=i=>SE[i.subject]?.[i.view]??kn[i.subject].views[i.view],ie=(i=0,t="master",e="reference",n=null)=>({rung:i,geometryTier:t,textureTier:e,variant:n}),op={better:{prompt:"Which looks better?",A:"A looks better",B:"B looks better",tie:"No visible difference"},photo:{prompt:"Which looks more like a real photograph?",A:"A looks more real",B:"B looks more real",tie:"Can't tell them apart"}},ME=[{key:"C1-identical",group:"control",subject:"chair",view:"close",motion:!1,dpr:1.5,question:"better",X:ie(),Y:ie()},{key:"C2-wood32",group:"control",subject:"chair",view:"close",motion:!1,dpr:1.5,question:"better",X:ie(),Y:ie(0,"master","reference","wood-32")},{key:"C3-normalOff",group:"informative",subject:"chair",view:"close",motion:!1,dpr:1.5,question:"better",X:ie(),Y:ie(0,"master","reference","normalOff")},{key:"C4-leafShimmer",group:"control",subject:"tree",view:"close",motion:!0,dpr:1.5,question:"better",X:ie(),Y:ie(0,"master","reference","shimmer")},{key:"D1-chair512-macro-dpr3",group:"resolution",subject:"chair",view:"macro",motion:!1,dpr:3,question:"better",X:ie(),Y:ie(0,"master","uastc512")},{key:"D2-tree512-dpr3",group:"resolution",subject:"tree",view:"close",motion:!1,dpr:3,question:"better",X:ie(),Y:ie(0,"master","uastc512")},{key:"M1-treeGeometry-motion",group:"motion",subject:"tree",view:"medium",motion:!0,dpr:1.5,question:"better",X:ie(),Y:ie(0,"reduced")},{key:"M2-tree512-motion",group:"motion",subject:"tree",view:"close",motion:!0,dpr:1.5,question:"better",X:ie(),Y:ie(0,"master","uastc512")},{key:"G1-chair-L0-L2",group:"lighting",subject:"chair",view:"medium",motion:!1,dpr:1.5,question:"photo",X:ie(0),Y:ie(2)},{key:"G2-car-L0-L2",group:"lighting",subject:"car",view:"medium",motion:!1,dpr:1.5,question:"photo",X:ie(0),Y:ie(2)},{key:"G3-tree-L0-L2-motion",group:"lighting",subject:"tree",view:"medium",motion:!0,dpr:1.5,question:"photo",X:ie(0),Y:ie(2)},{key:"G4-chair-L0-L1",group:"lighting",subject:"chair",view:"medium",motion:!1,dpr:1.5,question:"photo",X:ie(0),Y:ie(1)},{key:"G5-chair-L2-L3",group:"lighting",subject:"chair",view:"medium",motion:!1,dpr:1.5,question:"photo",X:ie(2),Y:ie(3)},{key:"X1-chair-L2reduced-L0master",group:"cross",subject:"chair",view:"medium",motion:!1,dpr:1.5,question:"photo",X:ie(0),Y:ie(2,"reduced")},{key:"X2-car-L2reduced-L0master",group:"cross",subject:"car",view:"medium",motion:!1,dpr:1.5,question:"photo",X:ie(0),Y:ie(2,"reduced")},{key:"X3-chair-L2tex512-L0ref",group:"cross",subject:"chair",view:"close",motion:!1,dpr:1.5,question:"photo",X:ie(0),Y:ie(2,"master","uastc512")}];function ap(i){let t=pA(i),e=ME.map(n=>{let s=t()>.5;return{...n,id:`v3-${n.key}`,mapping:s?{A:n.Y,B:n.X}:{A:n.X,B:n.Y}}});return mA(e,t)}var rl={buildId:"v3-a7e9e1b335bd879a",builtFrom:["src/v3/study.js","src/v3/stage.js","src/v3/trials.js","src/cases/subjects.js","src/cases/materials.js","src/cases/protocol.js","study-v3/index.html","src/v3/bench.js","study-v3/bench.html","assets/v3/exposure.json","assets/v3/sky-sun.json","assets/v3/planted/planted.json","package-lock.json"]};var up="he-study-v3",al=`${up}-${rl.buildId}`,CE=3,IE={still:1,motion:3},$t=i=>document.getElementById(i),cp=!0,Au={get(i=al){try{return JSON.parse(localStorage.getItem(i))}catch{return null}},set(i,t=al){try{return localStorage.setItem(t,JSON.stringify(i)),!0}catch{return!1}},otherSessions(){try{return Object.keys(localStorage).filter(i=>i.startsWith(up)&&i!==al)}catch{return[]}}},Hn=i=>{$t("status").textContent=i},pu=i=>JSON.parse(JSON.stringify(i)),Mn=()=>new Date().toISOString(),te=Au.get()??{schema:"he-quality-study-v3",buildId:rl.buildId,startedUTC:Mn(),sessionSeed:crypto.getRandomValues(new Uint32Array(1))[0],votes:[],drafts:{},attempts:[],interruptions:[],failures:[],environment:null,meaning:"One observer on one device. Each first choice is one observation; repeated sessions are repeated trials of the same person, not new observers."};te.drafts??={};te.attempts??=[];te.otherBuildSessions=Au.otherSessions();for(let i of te.attempts)i.outcome||(i.outcome="ended",i.endedUTC=Mn(),i.error="page ended before a choice");var Ji=ap(te.sessionSeed),Ms=i=>te.votes.find(t=>t.trialId===i),lp=i=>te.attempts.filter(t=>t.trialId===i&&(t.outcome==="failed"||t.outcome==="ended")).length,mu=i=>te.failures.some(t=>t.trialId===i);function fp(i,t){!Ms(i)&&!mu(i)&&lp(i)>=CE&&te.failures.push({trialId:i,atUTC:Mn(),error:t,attempts:lp(i)})}for(let i of Ji)fp(i.id,"repeated attempts ended without a choice");var on=null,Ge,dp,Ap,at=null,ll=0,Hr="A",ol=0,cl=0,zr=!1,pp=!1;function zn(){te.updatedUTC=Mn();let i=Au.set(te);!i&&cp&&Hn("This browser is not saving choices (private mode or storage full). Export with Copy before leaving."),cp=i}function qo(){let i=pu(te);if(!te.completedUTC){for(let t of i.votes)delete t.mapping;i.mappingRedacted="Study incomplete: mappings follow from sessionSeed + buildId."}return JSON.stringify(i,null,1)}function bE(){let i=async()=>{Yo();try{await navigator.clipboard.writeText(qo()),Hn("Copied.")}catch{$t("raw").hidden=!1,$t("raw").value=qo(),Hn("Copy blocked: select the text below.")}},t=()=>{Yo();let n=document.createElement("a");n.href=URL.createObjectURL(new Blob([qo()],{type:"application/json"})),n.download=`he-study-v3-${te.sessionSeed}.json`,n.click()},e=async()=>{if(Yo(),!navigator.share)return Hn("Sharing unavailable here: use Copy or Download.");try{await navigator.share({title:"HE study v3 results",text:qo()})}catch(n){Hn(n.name==="AbortError"?"Share cancelled.":"Sharing failed: use Copy or Download.")}};for(let n of["","2"])$t("copy"+n).onclick=i,$t("download"+n).onclick=t,$t("share"+n).onclick=e}function Yo(){if(!at)return;let i=$t("note").value,t=Ms(at.trial.id);t?i!==t.note?(t.laterNote=i,t.laterNoteUTC=Mn()):(delete t.laterNote,delete t.laterNoteUTC):i?te.drafts[at.trial.id]=i:delete te.drafts[at.trial.id],zn()}function wE(){let i=$t("viewport").getBoundingClientRect();return{width:Math.max(1,Math.round(i.width)),height:Math.max(1,Math.round(i.width*620/549))}}function TE(i){let t=Math.min(devicePixelRatio,i),{width:e,height:n}=wE();return on.setPixelRatio(t),on.setSize(e,n,!1),on.domElement.style.width=e+"px",on.domElement.style.height=n+"px",{width:on.domElement.width,height:on.domElement.height,cssWidth:e,cssHeight:n,dpr:t,requestedDpr:i}}async function Jo(i,t="json"){let e=await fetch(i);if(!e.ok)throw new Error(`${i}: HTTP ${e.status}`);return t==="json"?e.json():e.arrayBuffer()}async function BE(i,t,e){let n=(await Jo("assets/v3/planted/planted.json"))[`${t}-${e}`],s={};for(let r of["color","normal","roughness"])s[r]=await i.texture(n[r],r,t);return s}async function hp(i,t,e){let n=new Nc(on,te.environment.gpu,dp);try{let s=await n.materialSet(kn[i.subject].roles,t.textureTier);if(e!==ll)throw new DOMException("Obsolete","AbortError");let r=/^(\w+)-(\d+)$/.exec(t.variant??"");if(r){let[,c,l]=r,u=await BE(n,c,l);Object.assign(s[c],{map:u.color,normalMap:u.normal,roughnessMap:u.roughness}),s[c].needsUpdate=!0}if(t.variant==="normalOff")for(let c of Object.values(s))c.normalMap=null,c.needsUpdate=!0;t.variant==="shimmer"&&(s.leaf.alphaToCoverage=!1,s.leaf.needsUpdate=!0);let o=n.track(xd(i.subject,s,t.geometryTier)),a="build-time file";try{Ge.attachOcclusion(o,Ge.decodeOcclusion(await Jo(`assets/v3/${i.subject}-${t.geometryTier}.ao.bin`,"binary")))}catch(c){Hn("Preparing (computing shading on this device)\u2026"),o.updateMatrixWorld(!0),Ge.attachOcclusion(o,Ge.bake(o,Math.max(...kn[i.subject].dimensions))),a=`device bake after: ${c.message}`}return o.visible=!1,Ge.scene.add(o),{group:o,resources:n,side:t,aoSource:a}}catch(s){throw n.dispose(),s}}function hl(i){if(!at?.ready||zr)return;Hr=i;for(let n of["A","B"])at.sides[n].group.visible=n===i;let t=at.sides[i].side,e=Math.max(...kn[at.trial.subject].dimensions);Ge.applyRung(at.sides[i].group,t.rung,e),on.toneMappingExposure=t.rung===0?.95:Ap[at.trial.subject][at.trial.view][`L${t.rung}`],at.switches++,$t("showA").setAttribute("aria-pressed",i==="A"),$t("showB").setAttribute("aria-pressed",i==="B"),Wr()}var RE=()=>IE[at.trial.motion?"motion":"still"],Ss=i=>at.viewedS[i]>=RE();function Wr(){let i=!!at?.ready&&!zr,t=i&&Ss("A")&&Ss("B"),e=!!at&&!!Ms(at.trial.id);for(let s of["showA","showB"])$t(s).disabled=!i;for(let s of["chooseA","chooseB","chooseTie"])$t(s).disabled=!t||e;$t("next").disabled=!(e||at?.failed),$t("next").textContent=at?.failed?"Skip":"Next";let n=i&&!e&&!t?["A","B"].filter(s=>!Ss(s)):[];$t("voteHint").textContent=i?e?"Choice saved. Tap Next.":n.length?`Look at ${n.join(" and ")} on screen${at.trial.motion?" for a few seconds":""} before choosing.`:"":""}function mp(){if(at){for(let i of Object.values(at.sides??{}))Ge.scene.remove(i.group),i.group.userData.groundAO?.dispose(),i.resources.dispose();at=null}}function gp(i,t={}){let e=at?.attempt;!e||e.outcome||(Object.assign(e,{outcome:i,endedUTC:Mn(),...t}),zn())}function _p(i){at&&(gp("failed",{error:i}),at.ready=!1,at.failed=!0,fp(at.trial.id,i),zn(),Hn(mu(at.trial.id)?"This pair could not be shown on this device and is recorded as invalid. Tap Skip.":"This pair did not load. Tap Skip to retry it later."),Wr())}async function xp(i){let t=++ll;mp();let e=Ji[i],n=op[e.question],s={trialId:e.id,number:te.attempts.filter(o=>o.trialId===e.id).length+1,startedUTC:Mn()};te.attempts.push(s),zn(),at={trial:e,index:i,attempt:s,ready:!1,failed:!1,viewedS:{A:0,B:0},switches:0,frames:{A:[],B:[]},startedMs:performance.now(),interruptionsAtStart:te.interruptions.length},$t("progress").textContent=`${te.votes.length} of ${Ji.length} answered \xB7 pair ${i+1} of ${Ji.length}`,$t("question").textContent=n.prompt,$t("chooseA").textContent=n.A,$t("chooseB").textContent=n.B,$t("chooseTie").textContent=n.tie,$t("motionNote").textContent=e.motion?"This pair moves: watch each side for a few seconds.":"This pair is still.",$t("note").value=te.drafts[e.id]??"",Wr();let r=setInterval(()=>{at?.trial===e&&!at.ready&&!at.failed&&Hn(`Preparing\u2026 ${Math.round((performance.now()-at.startedMs)/1e3)} s`)},500);try{if(zr)throw new Error("Graphics context lost");let o=TE(e.dpr);Ge.setView(fu(e),o.width/o.height),[e.mapping.A,e.mapping.B].some(l=>l.rung===3)&&!Ge.sky&&await Ge.loadSky("assets/v3/sky-remainder-1k.hdr",await Jo("assets/v3/sky-sun.json"));let a=await hp(e,e.mapping.A,t),c;try{c=await hp(e,e.mapping.B,t)}catch(l){throw Ge.scene.remove(a.group),a.resources.dispose(),l}if(t!==ll){for(let l of[a,c])Ge.scene.remove(l.group),l.resources.dispose();return}at.sides={A:a,B:c},at.output=o;for(let l of["A","B"])at.ready=!0,hl(l),on.render(Ge.scene,Ge.camera);if(on.getContext().isContextLost())throw new Error("Graphics context lost during preparation");at.switches=0,at.viewedS={A:0,B:0},at.frames={A:[],B:[]},at.preparedMs=Math.round(performance.now()-at.startedMs),s.shownUTC=Mn(),s.preparedMs=at.preparedMs,s.aoSource={A:a.aoSource,B:c.aoSource},zn(),hl("A"),Hn(""),cl=0}catch(o){if(o.name==="AbortError")return;_p(String(o))}finally{clearInterval(r)}}function du(i){if(!at?.ready||zr||Ms(at.trial.id)||!Ss("A")||!Ss("B"))return;let{trial:t}=at,e={A:Vh(at.frames.A),B:Vh(at.frames.B)};te.votes.push({trialId:t.id,key:t.key,group:t.group,subject:t.subject,view:t.view,question:t.question,choice:i,note:$t("note").value,votedUTC:Mn(),mapping:pu(t.mapping),motion:t.motion,attempt:at.attempt.number,output:at.output,viewedSeconds:{A:+at.viewedS.A.toFixed(1),B:+at.viewedS.B.toFixed(1)},switches:at.switches,secondsOnPair:Math.round((performance.now()-at.startedMs)/100)/10,interruptionsDuringPair:te.interruptions.slice(at.interruptionsAtStart).map(n=>n.reason),preparedMs:at.preparedMs,aoSource:{A:at.sides.A.aoSource,B:at.sides.B.aoSource},frameMs:e,frameSamples:{A:at.frames.A.length,B:at.frames.B.length},frameMeaning:"requestAnimationFrame intervals while each side was on screen; refresh-limited at 60 Hz, not GPU cost"}),delete te.drafts[t.id],gp("voted"),zn(),Wr()}function yp(){let i=e=>!Ms(e.id)&&!mu(e.id),t=Ji.findIndex((e,n)=>n>(at?.index??-1)&&i(e));return t>=0?t:Ji.findIndex(i)}function DE(){if(Yo(),at&&!at.failed&&!Ms(at.trial.id))return;let i=yp();if(i<0)return Ep();xp(i),$t("viewport").scrollIntoView({block:"start"})}function Ep(){ll++,mp(),te.completedUTC??=Mn(),zn(),$t("trial").hidden=!0,$t("done").hidden=!1;let i=te.failures.filter(t=>t.trialId).length;$t("doneText").textContent=`${te.votes.length} of ${Ji.length} pairs answered`+(i?`; ${i} could not be shown on this device.`:".")+" What each side was is now included in the results. Please send them with Copy, Download or Share.",$t("summary").textContent=te.votes.map(t=>`${t.key}: ${t.choice}`+(t.note?` \u2014 "${t.note}"`:"")+(t.laterNote?` (later: "${t.laterNote}")`:"")).join(`
`)}function Sp(i){if(requestAnimationFrame(Sp),!at?.ready||zr){ol=0;return}let t=ol?(i-ol)/1e3:0;if(ol=i,at.trial.motion){cl+=t;let e=fu(at.trial),n=Math.max(...kn[at.trial.subject].dimensions),s=new U(...e.target),r=new U(...e.position).sub(s).applyAxisAngle(new U(0,1,0),Math.sin(cl*Math.PI/4)*.08).add(s);Ge.camera.position.copy(r),Ge.camera.lookAt(s),Ge.sweepKey(Math.sin(cl*Math.PI/4)*n*.75)}if(on.render(Ge.scene,Ge.camera),t>0&&t<.5&&pp&&document.visibilityState==="visible"){let e=Ss(Hr);at.viewedS[Hr]+=t,at.frames[Hr].push(t*1e3),!e&&Ss(Hr)&&Wr()}}async function FE(){bE(),$t("note").oninput=Yo,$t("next").onclick=DE,$t("showA").onclick=()=>hl("A"),$t("showB").onclick=()=>hl("B"),$t("chooseA").onclick=()=>du("A"),$t("chooseB").onclick=()=>du("B"),$t("chooseTie").onclick=()=>du("tie"),zn(),on=new Cc({antialias:!0,powerPreference:"high-performance"}),$t("viewport").appendChild(on.domElement),new IntersectionObserver(([n])=>{pp=n.intersectionRatio>=.5},{threshold:[0,.5,1]}).observe($t("viewport")),Ge=rp(on);let i=on.getContext(),t=i.getExtension("WEBGL_debug_renderer_info");te.environment??={},Object.assign(te.environment,{userAgent:navigator.userAgent,devicePixelRatio,three:"186",rendererBackend:"WebGLRenderer",gpu:t?i.getParameter(t.UNMASKED_RENDERER_WEBGL):i.getParameter(i.RENDERER),msaa:i.getContextAttributes()?.antialias??null,maxTextureSize:i.getParameter(i.MAX_TEXTURE_SIZE),screen:[screen.width,screen.height],buildId:rl.buildId}),on.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),zr=!0,te.interruptions.push({trialId:at?.trial.id??null,atUTC:Mn(),reason:"context lost"}),at&&!Ms(at.trial.id)&&_p("graphics context lost"),zn(),Wr(),Hn("The graphics stopped (this happens when the phone reclaims memory). Reload the page: saved choices are kept and this pair restarts.")}),document.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&at&&(te.interruptions.push({trialId:at.trial.id,atUTC:Mn(),reason:"tab hidden"}),zn())}),dp=await Jo("assets/study/manifest.json"),Ap=(await Jo("assets/v3/exposure.json")).exposure,requestAnimationFrame(Sp),new URLSearchParams(location.search).get("debug")==="1"&&(window.studyV3={state:()=>({trialId:at?.trial.id,ready:at?.ready,failed:at?.failed,activeSide:Hr,viewedS:at?.viewedS,mapping:at?.trial.mapping,output:at?.output}),result:()=>pu(te),queue:()=>Ji.map(n=>n.id),exportText:qo,storeKey:al});let e=yp();e<0?Ep():await xp(e)}FE().catch(i=>{te.failures.push({atUTC:Mn(),error:String(i)}),zn(),Hn("Unable to start: "+i.message+". Saved choices can still be exported with Copy.")});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
