var e0=Object.defineProperty;var t0=(i,e)=>{for(var t in e)e0(i,t,{get:e[t],enumerable:!0})};var Bn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Yn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Td=0,Qc=1,Ad=2;var eh=1,Ho=2,hi=3,Tn=0,fn=1,jt=2,Pi=0,_s=1,th=2,nh=3,ih=4,Rd=5,Ji=100,Cd=101,Id=102,Pd=103,Ld=104,Dd=200,Nd=201,Ud=202,Bd=203,mo=204,go=205,Od=206,Fd=207,kd=208,zd=209,Hd=210,Gd=211,Vd=212,jd=213,Wd=214,Go=0,Vo=1,jo=2,xs=3,Wo=4,Xo=5,qo=6,Yo=7,sh=0,Xd=1,qd=2,Li=0,Yd=1,Kd=2,Zd=3,Ko=4,Jd=5,$d=6,Qd=7,Hc="attached",ef="detached",rh=300,Rs=301,Cs=302,Zo=303,Jo=304,Ta=306,$i=1e3,ei=1001,nr=1002,Yt=1003,$o=1004;var Is=1005;var cn=1006,xr=1007;var Kn=1008;var Zn=1009,ah=1010,oh=1011,yr=1012,Qo=1013,ns=1014,On=1015,vr=1016,el=1017,tl=1018,br=1020,lh=35902,ch=35899,hh=1021,uh=1022,Rn=1023,ir=1026,Mr=1027,nl=1028,il=1029,dh=1030,sl=1031;var rl=1033,Aa=33776,Ra=33777,Ca=33778,Ia=33779,al=35840,ol=35841,ll=35842,cl=35843,hl=36196,ul=37492,dl=37496,fl=37808,pl=37809,ml=37810,gl=37811,_l=37812,xl=37813,yl=37814,vl=37815,bl=37816,Ml=37817,Sl=37818,wl=37819,El=37820,Tl=37821,Al=36492,Rl=36494,Cl=36495,Il=36283,Pl=36284,Ll=36285,Dl=36286;var ys=2300,vs=2301,po=2302,Gc=2400,Vc=2401,jc=2402,tf=2500;var fh=0,Pa=1,Sr=2,nf=3200,sf=3201;var ph=0,rf=1,Di="",Pt="srgb",Kt="srgb-linear",Yr="linear",dt="srgb";var gs=7680;var Wc=519,af=512,of=513,lf=514,mh=515,cf=516,hf=517,uf=518,df=519,_o=35044;var gh="300 es",jn=2e3,Kr=2001;var ni=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hu=1234567,jr=Math.PI/180,bs=180/Math.PI;function Wn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]).toLowerCase()}function je(i,e,t){return Math.max(e,Math.min(t,i))}function _h(i,e){return(i%e+e)%e}function n0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function i0(i,e,t){return i!==e?(t-i)/(e-i):0}function Wr(i,e,t){return(1-t)*i+t*e}function s0(i,e,t,n){return Wr(i,e,1-Math.exp(-t*n))}function r0(i,e=1){return e-Math.abs(_h(i,e*2)-e)}function a0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function o0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function l0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function c0(i,e){return i+Math.random()*(e-i)}function h0(i){return i*(.5-Math.random())}function u0(i){i!==void 0&&(Hu=i);let e=Hu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function d0(i){return i*jr}function f0(i){return i*bs}function p0(i){return(i&i-1)===0&&i!==0}function m0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function g0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),_=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*u,l*d,o*c);break;case"YZY":i.set(l*d,o*h,l*u,o*c);break;case"ZXZ":i.set(l*u,l*d,o*h,o*c);break;case"XZX":i.set(o*h,l*_,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*_,o*c);break;case"ZYZ":i.set(l*_,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ut(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ps={DEG2RAD:jr,RAD2DEG:bs,generateUUID:Wn,clamp:je,euclideanModulo:_h,mapLinear:n0,inverseLerp:i0,lerp:Wr,damp:s0,pingpong:r0,smoothstep:a0,smootherstep:o0,randInt:l0,randFloat:c0,randFloatSpread:h0,seededRandom:u0,degToRad:d0,radToDeg:f0,isPowerOfTwo:p0,ceilPowerOfTwo:m0,floorPowerOfTwo:g0,setQuaternionFromProperEuler:_0,normalize:ut,denormalize:Vn},ce=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[a+0],f=r[a+1],_=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=x;return}if(u!==x||l!==d||c!==f||h!==_){let m=1-o,p=l*d+c*f+h*_+u*x,R=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){let P=Math.sqrt(E),b=Math.atan2(P,p*R);m=Math.sin(m*b)/P,o=Math.sin(o*b)/P}let M=o*R;if(l=l*m+d*M,c=c*m+f*M,h=h*m+_*M,u=u*m+x*M,m===1-o){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],d=r[a+1],f=r[a+2],_=r[a+3];return e[t]=o*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-o*f,e[t+2]=c*_+h*f+o*d-l*u,e[t+3]=h*_-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),d=l(n/2),f=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>u){let f=2*Math.sqrt(1+n-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-n-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return uc.copy(this).projectOnVector(e),this.sub(uc)}reflect(e){return this.sub(uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},uc=new I,Gu=new hn,Ge=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],x=s[0],m=s[3],p=s[6],R=s[1],E=s[4],M=s[7],P=s[2],b=s[5],w=s[8];return r[0]=a*x+o*R+l*P,r[3]=a*m+o*E+l*b,r[6]=a*p+o*M+l*w,r[1]=c*x+h*R+u*P,r[4]=c*m+h*E+u*b,r[7]=c*p+h*M+u*w,r[2]=d*x+f*R+_*P,r[5]=d*m+f*E+_*b,r[8]=d*p+f*M+_*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,_=t*u+n*d+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/_;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(dc.makeScale(e,t)),this}rotate(e){return this.premultiply(dc.makeRotation(-e)),this}translate(e,t){return this.premultiply(dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},dc=new Ge;function xh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function sr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ff(){let i=sr("canvas");return i.style.display="block",i}var Vu={};function rr(i){i in Vu||(Vu[i]=!0,console.warn(i))}function pf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ju=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Wu=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function x0(){let i={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(s.r=Ei(s.r),s.g=Ei(s.g),s.b=Ei(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(s.r=tr(s.r),s.g=tr(s.g),s.b=tr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Di?Yr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return rr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return rr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Kt]:{primaries:e,whitePoint:n,transfer:Yr,toXYZ:ju,fromXYZ:Wu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pt},outputColorSpaceConfig:{drawingBufferColorSpace:Pt}},[Pt]:{primaries:e,whitePoint:n,transfer:dt,toXYZ:ju,fromXYZ:Wu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pt}}}),i}var Qe=x0();function Ei(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function tr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hs,xo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hs===void 0&&(Hs=sr("canvas")),Hs.width=e.width,Hs.height=e.height;let s=Hs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Hs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=sr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ei(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ei(t[n]/255)*255):t[n]=Ei(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},y0=0,ar=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fc(s[a].image)):r.push(fc(s[a]))}else r=fc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function fc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var v0=0,pc=new I,Bt=class i extends ni{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ei,s=ei,r=cn,a=Kn,o=Rn,l=Zn,c=i.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Wn(),this.name="",this.source=new ar(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(pc).x}get height(){return this.source.getSize(pc).y}get depth(){return this.source.getSize(pc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $i:e.x=e.x-Math.floor(e.x);break;case ei:e.x=e.x<0?0:1;break;case nr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $i:e.y=e.y-Math.floor(e.y);break;case ei:e.y=e.y<0?0:1;break;case nr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=rh;Bt.DEFAULT_ANISOTROPY=1;var it=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,M=(f+1)/2,P=(p+1)/2,b=(h+d)/4,w=(u+x)/4,A=(_+m)/4;return E>M&&E>P?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=b/n,r=w/n):M>P?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=A/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=w/r,s=A/r),this.set(n,s,r,t),this}let R=Math.sqrt((m-_)*(m-_)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(R)<.001&&(R=1),this.x=(m-_)/R,this.y=(u-x)/R,this.z=(d-h)/R,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yo=class extends ni{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Bt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ar(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ii=class extends yo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Zr=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var vo=class extends Bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var un=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(r,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ga.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ga.copy(n.boundingBox)),Ga.applyMatrix4(e.matrixWorld),this.union(Ga)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),Va.subVectors(this.max,Br),Gs.subVectors(e.a,Br),Vs.subVectors(e.b,Br),js.subVectors(e.c,Br),ji.subVectors(Vs,Gs),Wi.subVectors(js,Vs),ds.subVectors(Gs,js);let t=[0,-ji.z,ji.y,0,-Wi.z,Wi.y,0,-ds.z,ds.y,ji.z,0,-ji.x,Wi.z,0,-Wi.x,ds.z,0,-ds.x,-ji.y,ji.x,0,-Wi.y,Wi.x,0,-ds.y,ds.x,0];return!mc(t,Gs,Vs,js,Va)||(t=[1,0,0,0,1,0,0,0,1],!mc(t,Gs,Vs,js,Va))?!1:(ja.crossVectors(ji,Wi),t=[ja.x,ja.y,ja.z],mc(t,Gs,Vs,js,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yi=[new I,new I,new I,new I,new I,new I,new I,new I],zn=new I,Ga=new un,Gs=new I,Vs=new I,js=new I,ji=new I,Wi=new I,ds=new I,Br=new I,Va=new I,ja=new I,fs=new I;function mc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fs.fromArray(i,r);let o=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),l=e.dot(fs),c=t.dot(fs),h=n.dot(fs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var b0=new un,Or=new I,gc=new I,gn=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):b0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Or.subVectors(e,this.center);let t=Or.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Or,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Or.copy(e.center).add(gc)),this.expandByPoint(Or.copy(e.center).sub(gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},vi=new I,_c=new I,Wa=new I,Xi=new I,xc=new I,Xa=new I,yc=new I,si=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=vi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,t),vi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_c.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),Xi.copy(this.origin).sub(_c);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Wa),o=Xi.dot(this.direction),l=-Xi.dot(Wa),c=Xi.lengthSq(),h=Math.abs(1-a*a),u,d,f,_;if(h>0)if(u=a*l-o,d=a*o-l,_=r*h,u>=0)if(d>=-_)if(d<=_){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(_c).addScaledVector(Wa,d),f}intersectSphere(e,t){vi.subVectors(e.center,this.origin);let n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,t,n,s,r){xc.subVectors(t,e),Xa.subVectors(n,e),yc.crossVectors(xc,Xa);let a=this.direction.dot(yc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,e);let l=o*this.direction.dot(Xa.crossVectors(Xi,Xa));if(l<0)return null;let c=o*this.direction.dot(xc.cross(Xi));if(c<0||l+c>a)return null;let h=-o*Xi.dot(yc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ze=class i{constructor(e,t,n,s,r,a,o,l,c,h,u,d,f,_,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,d,f,_,x,m)}set(e,t,n,s,r,a,o,l,c,h,u,d,f,_,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ws.setFromMatrixColumn(e,0).length(),r=1/Ws.setFromMatrixColumn(e,1).length(),a=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,_=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=_+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,_=c*h,x=c*u;t[0]=d+x*o,t[4]=_*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-_,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,_=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=_+f*o,t[1]=f+_*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,_=o*h,x=o*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=f*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,_=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=_*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*l,f=a*c,_=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(M0,e,S0)}lookAt(e,t,n){let s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),qi.crossVectors(n,wn),qi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),qi.crossVectors(n,wn)),qi.normalize(),qa.crossVectors(wn,qi),s[0]=qi.x,s[4]=qa.x,s[8]=wn.x,s[1]=qi.y,s[5]=qa.y,s[9]=wn.y,s[2]=qi.z,s[6]=qa.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],x=n[6],m=n[10],p=n[14],R=n[3],E=n[7],M=n[11],P=n[15],b=s[0],w=s[4],A=s[8],y=s[12],v=s[1],L=s[5],U=s[9],k=s[13],G=s[2],Y=s[6],j=s[10],te=s[14],V=s[3],le=s[7],fe=s[11],Ae=s[15];return r[0]=a*b+o*v+l*G+c*V,r[4]=a*w+o*L+l*Y+c*le,r[8]=a*A+o*U+l*j+c*fe,r[12]=a*y+o*k+l*te+c*Ae,r[1]=h*b+u*v+d*G+f*V,r[5]=h*w+u*L+d*Y+f*le,r[9]=h*A+u*U+d*j+f*fe,r[13]=h*y+u*k+d*te+f*Ae,r[2]=_*b+x*v+m*G+p*V,r[6]=_*w+x*L+m*Y+p*le,r[10]=_*A+x*U+m*j+p*fe,r[14]=_*y+x*k+m*te+p*Ae,r[3]=R*b+E*v+M*G+P*V,r[7]=R*w+E*L+M*Y+P*le,r[11]=R*A+E*U+M*j+P*fe,r[15]=R*y+E*k+M*te+P*Ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],x=e[7],m=e[11],p=e[15];return _*(+r*l*u-s*c*u-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+n*a*f+r*o*h-n*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-n*a*d+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],x=e[13],m=e[14],p=e[15],R=u*m*c-x*d*c+x*l*f-o*m*f-u*l*p+o*d*p,E=_*d*c-h*m*c-_*l*f+a*m*f+h*l*p-a*d*p,M=h*x*c-_*u*c+_*o*f-a*x*f-h*o*p+a*u*p,P=_*u*l-h*x*l-_*o*d+a*x*d+h*o*m-a*u*m,b=t*R+n*E+s*M+r*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/b;return e[0]=R*w,e[1]=(x*d*r-u*m*r-x*s*f+n*m*f+u*s*p-n*d*p)*w,e[2]=(o*m*r-x*l*r+x*s*c-n*m*c-o*s*p+n*l*p)*w,e[3]=(u*l*r-o*d*r-u*s*c+n*d*c+o*s*f-n*l*f)*w,e[4]=E*w,e[5]=(h*m*r-_*d*r+_*s*f-t*m*f-h*s*p+t*d*p)*w,e[6]=(_*l*r-a*m*r-_*s*c+t*m*c+a*s*p-t*l*p)*w,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*w,e[8]=M*w,e[9]=(_*u*r-h*x*r-_*n*f+t*x*f+h*n*p-t*u*p)*w,e[10]=(a*x*r-_*o*r+_*n*c-t*x*c-a*n*p+t*o*p)*w,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*f-t*o*f)*w,e[12]=P*w,e[13]=(h*x*s-_*u*s+_*n*d-t*x*d-h*n*m+t*u*m)*w,e[14]=(_*o*s-a*x*s-_*n*l+t*x*l+a*n*m-t*o*m)*w,e[15]=(a*u*s-h*o*s+h*n*l-t*u*l-a*n*d+t*o*d)*w,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,_=r*u,x=a*h,m=a*u,p=o*u,R=l*c,E=l*h,M=l*u,P=n.x,b=n.y,w=n.z;return s[0]=(1-(x+p))*P,s[1]=(f+M)*P,s[2]=(_-E)*P,s[3]=0,s[4]=(f-M)*b,s[5]=(1-(d+p))*b,s[6]=(m+R)*b,s[7]=0,s[8]=(_+E)*w,s[9]=(m-R)*w,s[10]=(1-(d+x))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ws.set(s[0],s[1],s[2]).length(),a=Ws.set(s[4],s[5],s[6]).length(),o=Ws.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hn.copy(this);let c=1/r,h=1/a,u=1/o;return Hn.elements[0]*=c,Hn.elements[1]*=c,Hn.elements[2]*=c,Hn.elements[4]*=h,Hn.elements[5]*=h,Hn.elements[6]*=h,Hn.elements[8]*=u,Hn.elements[9]*=u,Hn.elements[10]*=u,t.setFromRotationMatrix(Hn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=jn,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),_,x;if(l)_=r/(a-r),x=a*r/(a-r);else if(o===jn)_=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Kr)_=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=jn,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),_,x;if(l)_=1/(a-r),x=a/(a-r);else if(o===jn)_=-2/(a-r),x=-(a+r)/(a-r);else if(o===Kr)_=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ws=new I,Hn=new ze,M0=new I(0,0,0),S0=new I(1,1,1),qi=new I,qa=new I,wn=new I,Xu=new ze,qu=new hn,Xn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Xu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Xu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qu.setFromEuler(this),this.setFromQuaternion(qu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var or=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},w0=0,Yu=new I,Xs=new hn,bi=new ze,Ya=new I,Fr=new I,E0=new I,T0=new hn,Ku=new I(1,0,0),Zu=new I(0,1,0),Ju=new I(0,0,1),$u={type:"added"},A0={type:"removed"},qs={type:"childadded",child:null},vc={type:"childremoved",child:null},ct=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w0++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new Xn,n=new hn,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ze},normalMatrix:{value:new Ge}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new or,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(Ku,e)}rotateY(e){return this.rotateOnAxis(Zu,e)}rotateZ(e){return this.rotateOnAxis(Ju,e)}translateOnAxis(e,t){return Yu.copy(e).applyQuaternion(this.quaternion),this.position.add(Yu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ku,e)}translateY(e){return this.translateOnAxis(Zu,e)}translateZ(e){return this.translateOnAxis(Ju,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ya.copy(e):Ya.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Fr,Ya,this.up):bi.lookAt(Ya,Fr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Xs.setFromRotationMatrix(bi),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($u),qs.child=e,this.dispatchEvent(qs),qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(A0),vc.child=e,this.dispatchEvent(vc),vc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($u),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,e,E0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fr,T0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ct.DEFAULT_UP=new I(0,1,0);ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=new I,Mi=new I,bc=new I,Si=new I,Ys=new I,Ks=new I,Qu=new I,Mc=new I,Sc=new I,wc=new I,Ec=new it,Tc=new it,Ac=new it,Zi=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Gn.subVectors(e,t),s.cross(Gn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Gn.subVectors(s,t),Mi.subVectors(n,t),bc.subVectors(e,t);let a=Gn.dot(Gn),o=Gn.dot(Mi),l=Gn.dot(bc),c=Mi.dot(Mi),h=Mi.dot(bc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,_=(a*h-o*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Si)===null?!1:Si.x>=0&&Si.y>=0&&Si.x+Si.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Si.x),l.addScaledVector(a,Si.y),l.addScaledVector(o,Si.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ec.setScalar(0),Tc.setScalar(0),Ac.setScalar(0),Ec.fromBufferAttribute(e,t),Tc.fromBufferAttribute(e,n),Ac.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ec,r.x),a.addScaledVector(Tc,r.y),a.addScaledVector(Ac,r.z),a}static isFrontFacing(e,t,n,s){return Gn.subVectors(n,t),Mi.subVectors(e,t),Gn.cross(Mi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gn.subVectors(this.c,this.b),Mi.subVectors(this.a,this.b),Gn.cross(Mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ys.subVectors(s,n),Ks.subVectors(r,n),Mc.subVectors(e,n);let l=Ys.dot(Mc),c=Ks.dot(Mc);if(l<=0&&c<=0)return t.copy(n);Sc.subVectors(e,s);let h=Ys.dot(Sc),u=Ks.dot(Sc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Ys,a);wc.subVectors(e,r);let f=Ys.dot(wc),_=Ks.dot(wc);if(_>=0&&f<=_)return t.copy(r);let x=f*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(Ks,o);let m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return Qu.subVectors(r,s),o=(u-h)/(u-h+(f-_)),t.copy(s).addScaledVector(Qu,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(Ys,a).addScaledVector(Ks,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Rc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Qe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Qe.workingColorSpace){if(e=_h(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Rc(a,r,e+1/3),this.g=Rc(a,r,e),this.b=Rc(a,r,e-1/3)}return Qe.colorSpaceToWorking(this,s),this}setStyle(e,t=Pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pt){let n=mf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ei(e.r),this.g=Ei(e.g),this.b=Ei(e.b),this}copyLinearToSRGB(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pt){return Qe.workingToColorSpace(en.copy(this),e),Math.round(je(en.r*255,0,255))*65536+Math.round(je(en.g*255,0,255))*256+Math.round(je(en.b*255,0,255))}getHexString(e=Pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.workingToColorSpace(en.copy(this),t);let n=en.r,s=en.g,r=en.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Qe.workingColorSpace){return Qe.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Pt){Qe.workingToColorSpace(en.copy(this),e);let t=en.r,n=en.g,s=en.b;return e!==Pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+t,Yi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yi),e.getHSL(Ka);let n=Wr(Yi.h,Ka.h,t),s=Wr(Yi.s,Ka.s,t),r=Wr(Yi.l,Ka.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},en=new Ce;Ce.NAMES=mf;var R0=0,_n=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=_s,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mo,this.blendDst=go,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_s&&(n.blending=this.blending),this.side!==Tn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mo&&(n.blendSrc=this.blendSrc),this.blendDst!==go&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},tn=class extends _n{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dt=new I,Za=new ce,C0=0,Ut=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_o,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Za.fromBufferAttribute(this,t),Za.applyMatrix3(e),this.setXY(t,Za.x,Za.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_o&&(e.usage=this.usage),e}};var Jr=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var $r=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var at=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},I0=0,Dn=new ze,Cc=new ct,Zs=new I,En=new un,kr=new un,Vt=new I,Lt=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I0++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xh(e)?$r:Jr)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ge().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return Cc.lookAt(e),Cc.updateMatrix(),this.applyMatrix4(Cc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zs).negate(),this.translate(Zs.x,Zs.y,Zs.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];En.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];kr.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(En.min,kr.min),En.expandByPoint(Vt),Vt.addVectors(En.max,kr.max),En.expandByPoint(Vt)):(En.expandByPoint(kr.min),En.expandByPoint(kr.max))}En.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Vt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Vt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Vt.fromBufferAttribute(o,c),l&&(Zs.fromBufferAttribute(e,c),Vt.add(Zs)),s=Math.max(s,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<n.count;A++)o[A]=new I,l[A]=new I;let c=new I,h=new I,u=new I,d=new ce,f=new ce,_=new ce,x=new I,m=new I;function p(A,y,v){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,A),f.fromBufferAttribute(r,y),_.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),_.sub(d);let L=1/(f.x*_.y-_.x*f.y);isFinite(L)&&(x.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(L),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(L),o[A].add(x),o[y].add(x),o[v].add(x),l[A].add(m),l[y].add(m),l[v].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let A=0,y=R.length;A<y;++A){let v=R[A],L=v.start,U=v.count;for(let k=L,G=L+U;k<G;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let E=new I,M=new I,P=new I,b=new I;function w(A){P.fromBufferAttribute(s,A),b.copy(P);let y=o[A];E.copy(y),E.sub(P.multiplyScalar(P.dot(y))).normalize(),M.crossVectors(b,y);let L=M.dot(l[A])<0?-1:1;a.setXYZW(A,E.x,E.y,E.z,L)}for(let A=0,y=R.length;A<y;++A){let v=R[A],L=v.start,U=v.count;for(let k=L,G=L+U;k<G;k+=3)w(e.getX(k+0)),w(e.getX(k+1)),w(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new Ut(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},ed=new ze,ps=new si,Ja=new gn,td=new I,$a=new I,Qa=new I,eo=new I,Ic=new I,to=new I,nd=new I,no=new I,ht=class extends ct{constructor(e=new Lt,t=new tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){to.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Ic.fromBufferAttribute(u,e),a?to.addScaledVector(Ic,h):to.addScaledVector(Ic.sub(t),h))}t.add(to)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(Ja.containsPoint(ps.origin)===!1&&(ps.intersectSphere(Ja,td)===null||ps.origin.distanceToSquared(td)>(e.far-e.near)**2))&&(ed.copy(r).invert(),ps.copy(e.ray).applyMatrix4(ed),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){let m=d[_],p=a[m.materialIndex],R=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let M=R,P=E;M<P;M+=3){let b=o.getX(M),w=o.getX(M+1),A=o.getX(M+2);s=io(this,p,e,n,c,h,u,b,w,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){let R=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=io(this,a,e,n,c,h,u,R,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){let m=d[_],p=a[m.materialIndex],R=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=R,P=E;M<P;M+=3){let b=M,w=M+1,A=M+2;s=io(this,p,e,n,c,h,u,b,w,A),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let m=_,p=x;m<p;m+=3){let R=m,E=m+1,M=m+2;s=io(this,a,e,n,c,h,u,R,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function P0(i,e,t,n,s,r,a,o){let l;if(e.side===fn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Tn,o),l===null)return null;no.copy(o),no.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(no);return c<t.near||c>t.far?null:{distance:c,point:no.clone(),object:i}}function io(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,$a),i.getVertexPosition(l,Qa),i.getVertexPosition(c,eo);let h=P0(i,e,t,n,$a,Qa,eo,nd);if(h){let u=new I;Zi.getBarycoord(nd,$a,Qa,eo,u),s&&(h.uv=Zi.getInterpolatedAttribute(s,o,l,c,u,new ce)),r&&(h.uv1=Zi.getInterpolatedAttribute(r,o,l,c,u,new ce)),a&&(h.normal=Zi.getInterpolatedAttribute(a,o,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};Zi.getNormal($a,Qa,eo,d.normal),h.face=d,h.barycoord=u}return h}var Nn=class i extends Lt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(u,2));function _(x,m,p,R,E,M,P,b,w,A,y){let v=M/w,L=P/A,U=M/2,k=P/2,G=b/2,Y=w+1,j=A+1,te=0,V=0,le=new I;for(let fe=0;fe<j;fe++){let Ae=fe*L-k;for(let Ke=0;Ke<Y;Ke++){let xt=Ke*v-U;le[x]=xt*R,le[m]=Ae*E,le[p]=G,c.push(le.x,le.y,le.z),le[x]=0,le[m]=0,le[p]=b>0?1:-1,h.push(le.x,le.y,le.z),u.push(Ke/w),u.push(1-fe/A),te+=1}}for(let fe=0;fe<A;fe++)for(let Ae=0;Ae<w;Ae++){let Ke=d+Ae+Y*fe,xt=d+Ae+Y*(fe+1),Mt=d+(Ae+1)+Y*(fe+1),ot=d+(Ae+1)+Y*fe;l.push(Ke,xt,ot),l.push(xt,Mt,ot),V+=6}o.addGroup(f,V,y),f+=V,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ls(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function nn(i){let e={};for(let t=0;t<i.length;t++){let n=Ls(i[t]);for(let s in n)e[s]=n[s]}return e}function L0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function yh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}var gf={clone:Ls,merge:nn},D0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qn=class extends _n{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D0,this.fragmentShader=N0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ls(e.uniforms),this.uniformsGroups=L0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Qr=class extends ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ki=new I,id=new ce,sd=new ce,Nt=class extends Qr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=bs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z),Ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ki.x,Ki.y).multiplyScalar(-e/Ki.z)}getViewSize(e,t){return this.getViewBounds(e,id,sd),t.subVectors(sd,id)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(jr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Js=-90,$s=1,bo=class extends ct{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nt(Js,$s,e,t);s.layers=this.layers,this.add(s);let r=new Nt(Js,$s,e,t);r.layers=this.layers,this.add(r);let a=new Nt(Js,$s,e,t);a.layers=this.layers,this.add(a);let o=new Nt(Js,$s,e,t);o.layers=this.layers,this.add(o);let l=new Nt(Js,$s,e,t);l.layers=this.layers,this.add(l);let c=new Nt(Js,$s,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ea=class extends Bt{constructor(e=[],t=Rs,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mo=class extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ea(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Nn(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:Ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Pi});r.uniforms.tEquirect.value=t;let a=new ht(s,r),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=cn),new bo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},rt=class extends ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},U0={type:"move"},lr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(U0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ta=class extends ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},cr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_o,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new I,hr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ut(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),n=ut(n,this.array),s=ut(s,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var rd=new I,ad=new it,od=new it,B0=new I,ld=new ze,so=new I,Pc=new gn,cd=new ze,Lc=new si,na=class extends ht{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Hc,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new un),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,so),this.boundingBox.expandByPoint(so)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new gn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,so),this.boundingSphere.expandByPoint(so)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pc.copy(this.boundingSphere),Pc.applyMatrix4(s),e.ray.intersectsSphere(Pc)!==!1&&(cd.copy(s).invert(),Lc.copy(e.ray).applyMatrix4(cd),!(this.boundingBox!==null&&Lc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Lc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new it,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Hc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ef?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;ad.fromBufferAttribute(s.attributes.skinIndex,e),od.fromBufferAttribute(s.attributes.skinWeight,e),rd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=od.getComponent(r);if(a!==0){let o=ad.getComponent(r);ld.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(B0.copy(rd).applyMatrix4(ld),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},ur=class extends ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},ia=class extends Bt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Yt,h=Yt,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},hd=new ze,O0=new ze,sa=class i{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:O0;hd.multiplyMatrices(o,t[r]),hd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new ia(t,e,e,Rn,On);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new ur),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},Qi=class extends Ut{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Qs=new ze,ud=new ze,ro=[],dd=new un,F0=new ze,zr=new ht,Hr=new gn,ri=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,F0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new un),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),dd.copy(e.boundingBox).applyMatrix4(Qs),this.boundingBox.union(dd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Qs),Hr.copy(e.boundingSphere).applyMatrix4(Qs),this.boundingSphere.union(Hr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(zr.geometry=this.geometry,zr.material=this.material,zr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hr.copy(this.boundingSphere),Hr.applyMatrix4(n),e.ray.intersectsSphere(Hr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Qs),ud.multiplyMatrices(n,Qs),zr.matrixWorld=ud,zr.raycast(e,ro);for(let a=0,o=ro.length;a<o;a++){let l=ro[a];l.instanceId=r,l.object=this,t.push(l)}ro.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ia(new Float32Array(s*this.count),s,this.count,nl,On));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Dc=new I,k0=new I,z0=new Ge,mn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Dc.subVectors(n,t).cross(k0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Dc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||z0.getNormalMatrix(e),s=this.coplanarPoint(Dc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ms=new gn,H0=new ce(.5,.5),ao=new I,dr=class{constructor(e=new mn,t=new mn,n=new mn,s=new mn,r=new mn,a=new mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],_=r[8],x=r[9],m=r[10],p=r[11],R=r[12],E=r[13],M=r[14],P=r[15];if(s[0].setComponents(c-a,f-h,p-_,P-R).normalize(),s[1].setComponents(c+a,f+h,p+_,P+R).normalize(),s[2].setComponents(c+o,f+u,p+x,P+E).normalize(),s[3].setComponents(c-o,f-u,p-x,P-E).normalize(),n)s[4].setComponents(l,d,m,M).normalize(),s[5].setComponents(c-l,f-d,p-m,P-M).normalize();else if(s[4].setComponents(c-l,f-d,p-m,P-M).normalize(),t===jn)s[5].setComponents(c+l,f+d,p+m,P+M).normalize();else if(t===Kr)s[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);let t=H0.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ao.x=s.normal.x>0?e.max.x:e.min.x,ao.y=s.normal.y>0?e.max.y:e.min.y,ao.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ao)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var es=class extends _n{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},So=new I,wo=new I,fd=new ze,Gr=new si,oo=new gn,Nc=new I,pd=new I,Ti=class extends ct{constructor(e=new Lt,t=new es){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)So.fromBufferAttribute(t,s-1),wo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=So.distanceTo(wo);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oo.copy(n.boundingSphere),oo.applyMatrix4(s),oo.radius+=r,e.ray.intersectsSphere(oo)===!1)return;fd.copy(s).invert(),Gr.copy(e.ray).applyMatrix4(fd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let x=f,m=_-1;x<m;x+=c){let p=h.getX(x),R=h.getX(x+1),E=lo(this,e,Gr,l,p,R,x);E&&t.push(E)}if(this.isLineLoop){let x=h.getX(_-1),m=h.getX(f),p=lo(this,e,Gr,l,x,m,_-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=f,m=_-1;x<m;x+=c){let p=lo(this,e,Gr,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=lo(this,e,Gr,l,_-1,f,_-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function lo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(So.fromBufferAttribute(o,s),wo.fromBufferAttribute(o,r),t.distanceSqToSegment(So,wo,Nc,pd)>n)return;Nc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Nc);if(!(c<e.near||c>e.far))return{distance:c,point:pd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var md=new I,gd=new I,ra=class extends Ti{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)md.fromBufferAttribute(t,s),gd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+md.distanceTo(gd);e.setAttribute("lineDistance",new at(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},aa=class extends Ti{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},fr=class extends _n{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},_d=new ze,Xc=new si,co=new gn,ho=new I,oa=class extends ct{constructor(e=new Lt,t=new fr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),co.radius+=r,e.ray.intersectsSphere(co)===!1)return;_d.copy(s).invert(),Xc.copy(e.ray).applyMatrix4(_d);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let _=d,x=f;_<x;_++){let m=c.getX(_);ho.fromBufferAttribute(u,m),xd(ho,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let _=d,x=f;_<x;_++)ho.fromBufferAttribute(u,_),xd(ho,_,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xd(i,e,t,n,s,r,a){let o=Xc.distanceSqToPoint(i);if(o<t){let l=new I;Xc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var la=class extends Bt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ca=class extends Bt{constructor(e,t,n=ns,s,r,a,o=Yt,l=Yt,c,h=ir,u=1){if(h!==ir&&h!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ar(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ha=class extends Bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Ot=class i extends Lt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],_=0,x=[],m=n/2,p=0;R(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function R(){let M=new I,P=new I,b=0,w=(t-e)/n;for(let A=0;A<=r;A++){let y=[],v=A/r,L=v*(t-e)+e;for(let U=0;U<=s;U++){let k=U/s,G=k*l+o,Y=Math.sin(G),j=Math.cos(G);P.x=L*Y,P.y=-v*n+m,P.z=L*j,u.push(P.x,P.y,P.z),M.set(Y,w,j).normalize(),d.push(M.x,M.y,M.z),f.push(k,1-v),y.push(_++)}x.push(y)}for(let A=0;A<s;A++)for(let y=0;y<r;y++){let v=x[y][A],L=x[y+1][A],U=x[y+1][A+1],k=x[y][A+1];(e>0||y!==0)&&(h.push(v,L,k),b+=3),(t>0||y!==r-1)&&(h.push(L,U,k),b+=3)}c.addGroup(p,b,0),p+=b}function E(M){let P=_,b=new ce,w=new I,A=0,y=M===!0?e:t,v=M===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),_++;let L=_;for(let U=0;U<=s;U++){let G=U/s*l+o,Y=Math.cos(G),j=Math.sin(G);w.x=y*j,w.y=m*v,w.z=y*Y,u.push(w.x,w.y,w.z),d.push(0,v,0),b.x=Y*.5+.5,b.y=j*.5*v+.5,f.push(b.x,b.y),_++}for(let U=0;U<s;U++){let k=P+U,G=L+U;M===!0?h.push(G,G+1,k):h.push(G+1,G,k),A+=3}c.addGroup(p,A,M===!0?1:2),p+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},An=class i extends Ot{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},ua=class i extends Lt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new at(r,3)),this.setAttribute("normal",new at(r.slice(),3)),this.setAttribute("uv",new at(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(R){let E=new I,M=new I,P=new I;for(let b=0;b<t.length;b+=3)f(t[b+0],E),f(t[b+1],M),f(t[b+2],P),l(E,M,P,R)}function l(R,E,M,P){let b=P+1,w=[];for(let A=0;A<=b;A++){w[A]=[];let y=R.clone().lerp(M,A/b),v=E.clone().lerp(M,A/b),L=b-A;for(let U=0;U<=L;U++)U===0&&A===b?w[A][U]=y:w[A][U]=y.clone().lerp(v,U/L)}for(let A=0;A<b;A++)for(let y=0;y<2*(b-A)-1;y++){let v=Math.floor(y/2);y%2===0?(d(w[A][v+1]),d(w[A+1][v]),d(w[A][v])):(d(w[A][v+1]),d(w[A+1][v+1]),d(w[A+1][v]))}}function c(R){let E=new I;for(let M=0;M<r.length;M+=3)E.x=r[M+0],E.y=r[M+1],E.z=r[M+2],E.normalize().multiplyScalar(R),r[M+0]=E.x,r[M+1]=E.y,r[M+2]=E.z}function h(){let R=new I;for(let E=0;E<r.length;E+=3){R.x=r[E+0],R.y=r[E+1],R.z=r[E+2];let M=m(R)/2/Math.PI+.5,P=p(R)/Math.PI+.5;a.push(M,1-P)}_(),u()}function u(){for(let R=0;R<a.length;R+=6){let E=a[R+0],M=a[R+2],P=a[R+4],b=Math.max(E,M,P),w=Math.min(E,M,P);b>.9&&w<.1&&(E<.2&&(a[R+0]+=1),M<.2&&(a[R+2]+=1),P<.2&&(a[R+4]+=1))}}function d(R){r.push(R.x,R.y,R.z)}function f(R,E){let M=R*3;E.x=e[M+0],E.y=e[M+1],E.z=e[M+2]}function _(){let R=new I,E=new I,M=new I,P=new I,b=new ce,w=new ce,A=new ce;for(let y=0,v=0;y<r.length;y+=9,v+=6){R.set(r[y+0],r[y+1],r[y+2]),E.set(r[y+3],r[y+4],r[y+5]),M.set(r[y+6],r[y+7],r[y+8]),b.set(a[v+0],a[v+1]),w.set(a[v+2],a[v+3]),A.set(a[v+4],a[v+5]),P.copy(R).add(E).add(M).divideScalar(3);let L=m(P);x(b,v+0,R,L),x(w,v+2,E,L),x(A,v+4,M,L)}}function x(R,E,M,P){P<0&&R.x===1&&(a[E]=R.x-1),M.x===0&&M.z===0&&(a[E]=P/2/Math.PI+.5)}function m(R){return Math.atan2(R.z,-R.x)}function p(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},pr=class i extends ua{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Un=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ce:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new ze;for(let f=0;f<=e;f++){let _=f/e;s[f]=this.getTangentAt(_,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let _=Math.acos(je(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,_))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(je(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(s[_],f*_)),a[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},da=class extends Un{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ce){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Eo=class extends da{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function vh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var uo=new I,Uc=new vh,Bc=new vh,Oc=new vh,mr=class extends Un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(uo.subVectors(s[0],s[1]).add(s[0]),c=uo);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(uo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=uo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),_<1e-4&&(_=x),m<1e-4&&(m=x),Uc.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,x,m),Bc.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,x,m),Oc.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,x,m)}else this.curveType==="catmullrom"&&(Uc.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Bc.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Oc.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Uc.calc(l),Bc.calc(l),Oc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function yd(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function G0(i,e){let t=1-i;return t*t*e}function V0(i,e){return 2*(1-i)*i*e}function j0(i,e){return i*i*e}function Xr(i,e,t,n){return G0(i,e)+V0(i,t)+j0(i,n)}function W0(i,e){let t=1-i;return t*t*t*e}function X0(i,e){let t=1-i;return 3*t*t*i*e}function q0(i,e){return 3*(1-i)*i*i*e}function Y0(i,e){return i*i*i*e}function qr(i,e,t,n,s){return W0(i,e)+X0(i,t)+q0(i,n)+Y0(i,s)}var To=class extends Un{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qr(e,s.x,r.x,a.x,o.x),qr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ao=class extends Un{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(qr(e,s.x,r.x,a.x,o.x),qr(e,s.y,r.y,a.y,o.y),qr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ro=class extends Un{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Co=class extends Un{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Io=class extends Un{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Xr(e,s.x,r.x,a.x),Xr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fa=class extends Un{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Xr(e,s.x,r.x,a.x),Xr(e,s.y,r.y,a.y),Xr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(yd(o,l.x,c.x,h.x,u.x),yd(o,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},K0=Object.freeze({__proto__:null,ArcCurve:Eo,CatmullRomCurve3:mr,CubicBezierCurve:To,CubicBezierCurve3:Ao,EllipseCurve:da,LineCurve:Ro,LineCurve3:Co,QuadraticBezierCurve:Io,QuadraticBezierCurve3:fa,SplineCurve:Po});var Ms=class i extends ua{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ss=class i extends Lt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],_=[],x=[],m=[];for(let p=0;p<h;p++){let R=p*d-a;for(let E=0;E<c;E++){let M=E*u-r;_.push(M,-R,0),x.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let R=0;R<o;R++){let E=R+c*p,M=R+c*(p+1),P=R+1+c*(p+1),b=R+1+c*p;f.push(E,M,b),f.push(M,P,b)}this.setIndex(f),this.setAttribute("position",new at(_,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ws=class i extends Lt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],u=e,d=(t-e)/s,f=new I,_=new ce;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,h.push(_.x,_.y)}u+=d}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let R=p+m,E=R,M=R+n+1,P=R+n+2,b=R+1;o.push(E,M,b),o.push(M,P,b)}}this.setIndex(o),this.setAttribute("position",new at(l,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ts=class i extends Lt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new I,d=new I,f=[],_=[],x=[],m=[];for(let p=0;p<=n;p++){let R=[],E=p/n,M=0;p===0&&a===0?M=.5/t:p===n&&l===Math.PI&&(M=-.5/t);for(let P=0;P<=t;P++){let b=P/t;u.x=-e*Math.cos(s+b*r)*Math.sin(a+E*o),u.y=e*Math.cos(a+E*o),u.z=e*Math.sin(s+b*r)*Math.sin(a+E*o),_.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(b+M,1-E),R.push(c++)}h.push(R)}for(let p=0;p<n;p++)for(let R=0;R<t;R++){let E=h[p][R+1],M=h[p][R],P=h[p+1][R],b=h[p+1][R+1];(p!==0||a>0)&&f.push(E,M,b),(p!==n-1||l<Math.PI)&&f.push(M,P,b)}this.setIndex(f),this.setAttribute("position",new at(_,3)),this.setAttribute("normal",new at(x,3)),this.setAttribute("uv",new at(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var pa=class i extends Lt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let _=0;_<=s;_++){let x=_/s*r,m=f/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=s;_++){let x=(s+1)*f+_-1,m=(s+1)*(f-1)+_-1,p=(s+1)*(f-1)+_,R=(s+1)*f+_;a.push(x,m,R),a.push(m,p,R)}this.setIndex(a),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(l,3)),this.setAttribute("uv",new at(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ma=class i extends Lt{constructor(e=new fa(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new ce,h=new I,u=[],d=[],f=[],_=[];x(),this.setIndex(_),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(d,3)),this.setAttribute("uv",new at(f,2));function x(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),R(),p()}function m(E){h=e.getPointAt(E/t,h);let M=a.normals[E],P=a.binormals[E];for(let b=0;b<=s;b++){let w=b/s*Math.PI*2,A=Math.sin(w),y=-Math.cos(w);l.x=y*M.x+A*P.x,l.y=y*M.y+A*P.y,l.z=y*M.z+A*P.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=t;E++)for(let M=1;M<=s;M++){let P=(s+1)*(E-1)+(M-1),b=(s+1)*E+(M-1),w=(s+1)*E+M,A=(s+1)*(E-1)+M;_.push(P,b,A),_.push(b,w,A)}}function R(){for(let E=0;E<=t;E++)for(let M=0;M<=s;M++)c.x=E/t,c.y=M/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new K0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var dn=class extends _n{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ph,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xn=class extends dn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Lo=class extends _n{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Do=class extends _n{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function fo(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Z0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function J0(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function vd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function _f(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Ai=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},No=class extends Ai{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Gc,endingEnd:Gc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vc:r=e,o=2*t-n;break;case jc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Vc:a=e,l=2*n-t;break;case jc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(s-t),x=_*_,m=x*_,p=-d*m+2*d*x-d*_,R=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*_+1,E=(-1-f)*m+(1.5+f)*x+.5*_,M=f*m-f*x;for(let P=0;P!==o;++P)r[P]=p*a[h+P]+R*a[c+P]+E*a[l+P]+M*a[u+P];return r}},Uo=class extends Ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},Bo=class extends Ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},yn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fo(t,this.TimeBufferType),this.values=fo(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fo(e.times,Array),values:fo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Uo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new No(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ys:t=this.InterpolantFactoryMethodDiscrete;break;case vs:t=this.InterpolantFactoryMethodLinear;break;case po:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return vs;case this.InterpolantFactoryMethodSmooth:return po}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Z0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===po,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){let x=t[u+_];if(x!==t[d+_]||x!==t[f+_]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};yn.prototype.ValueTypeName="";yn.prototype.TimeBufferType=Float32Array;yn.prototype.ValueBufferType=Float32Array;yn.prototype.DefaultInterpolation=vs;var Ri=class extends yn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=ys;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};ga.prototype.ValueTypeName="color";var ai=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};ai.prototype.ValueTypeName="number";var Oo=class extends Ai{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)hn.slerpFlat(r,0,a,c-o,a,c,l);return r}},oi=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Oo(this.times,this.values,this.getValueSize(),e)}};oi.prototype.ValueTypeName="quaternion";oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ci=class extends yn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="string";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=ys;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends yn{constructor(e,t,n,s){super(e,t,n,s)}};li.prototype.ValueTypeName="vector";var _a=class{constructor(e="",t=-1,n=[],s=tf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Wn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Q0(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(yn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let h=J0(l);l=vd(l,1,h),c=vd(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ai(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,_,x){if(f.length!==0){let m=[],p=[];_f(f,m,p,_),m.length!==0&&x.push(new u(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},_;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let x=0;x<d[_].morphTargets.length;x++)f[d[_].morphTargets[x]]=-1;for(let x in f){let m=[],p=[];for(let R=0;R!==d[_].morphTargets.length;++R){let E=d[_];m.push(E.time),p.push(E.morphTarget===x?1:0)}s.push(new ai(".morphTargetInfluence["+x+"]",m,p))}l=f.length*a}else{let f=".bones["+t[u].name+"]";n(li,f+".position",d,"pos",s),n(oi,f+".quaternion",d,"rot",s),n(li,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function $0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ai;case"vector":case"vector2":case"vector3":case"vector4":return li;case"color":return ga;case"quaternion":return oi;case"bool":case"boolean":return Ri;case"string":return Ci}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Q0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=$0(i.type);if(i.times===void 0){let t=[],n=[];_f(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ti={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Fo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},xf=new Fo,ci=class{constructor(e){this.manager=e!==void 0?e:xf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ci.DEFAULT_MATERIAL_NAME="__DEFAULT";var wi={},qc=class extends Error{constructor(e,t){super(e),this.response=t}},gr=class extends ci{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ti.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(wi[e]!==void 0){wi[e].push({onLoad:t,onProgress:n,onError:s});return}wi[e]=[],wi[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=wi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0,x=0,m=new ReadableStream({start(p){R();function R(){u.read().then(({done:E,value:M})=>{if(E)p.close();else{x+=M.byteLength;let P=new ProgressEvent("progress",{lengthComputable:_,loaded:x,total:f});for(let b=0,w=h.length;b<w;b++){let A=h[b];A.onProgress&&A.onProgress(P)}p.enqueue(M),R()}},E=>{p.error(E)})}}});return new Response(m)}else throw new qc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{ti.add(`file:${e}`,c);let h=wi[e];delete wi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=wi[e];if(h===void 0)throw this.manager.itemError(e),c;delete wi[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var er=new WeakMap,ko=class extends ci{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ti.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=er.get(a);u===void 0&&(u=[],er.set(a,u)),u.push({onLoad:t,onError:s})}return a}let o=sr("img");function l(){h(),t&&t(this);let u=er.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}er.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),ti.remove(`image:${e}`);let d=er.get(this)||[];for(let f=0;f<d.length;f++){let _=d[f];_.onError&&_.onError(u)}er.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ti.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var xa=class extends ci{constructor(e){super(e)}load(e,t,n,s){let r=new Bt,a=new ko(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Es=class extends ct{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},ya=class extends Es{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Fc=new ze,bd=new I,Md=new I,va=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new dr,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(bd),Md.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Md),t.updateMatrixWorld(),Fc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Yc=class extends va{constructor(){super(new Nt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=bs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ba=class extends Es{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Yc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Sd=new ze,Vr=new I,kc=new I,Kc=class extends va{constructor(){super(new Nt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ce(4,2),this._viewportCount=6,this._viewports=[new it(2,1,1,1),new it(0,1,1,1),new it(3,1,1,1),new it(1,1,1,1),new it(3,0,1,1),new it(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vr),kc.copy(n.position),kc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(kc),n.updateMatrixWorld(),s.makeTranslation(-Vr.x,-Vr.y,-Vr.z),Sd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd,n.coordinateSystem,n.reversedDepth)}},Ma=class extends Es{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Kc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ts=class extends Qr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zc=class extends va{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},As=class extends Es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ct.DEFAULT_UP),this.updateMatrix(),this.target=new ct,this.shadow=new Zc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Ii=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var zc=new WeakMap,Sa=class extends ci{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ti.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(zc.has(a)===!0)s&&s(zc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ti.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),zc.set(l,c),ti.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ti.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var zo=class extends Nt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var bh="\\[\\]\\.:\\/",em=new RegExp("["+bh+"]","g"),Mh="[^"+bh+"]",tm="[^"+bh.replace("\\.","")+"]",nm=/((?:WC+[\/:])*)/.source.replace("WC",Mh),im=/(WCOD+)?/.source.replace("WCOD",tm),sm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Mh),rm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Mh),am=new RegExp("^"+nm+im+sm+rm+"$"),om=["material","materials","bones","map"],Jc=class{constructor(e,t,n){let s=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(em,"")}static parseTrackName(e){let t=am.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);om.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=Jc;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ey=new Float32Array(1);var wd=new ze,wa=class{constructor(e,t,n=0,s=1/0){this.ray=new si(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new or,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wd),this}intersectObject(e,t=!0,n=[]){return $c(e,this,n,t),n.sort(Ed),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)$c(e[s],this,n,t);return n.sort(Ed),n}};function Ed(i,e){return i.distance-e.distance}function $c(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)$c(r[a],e,t,!0)}}var _r=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ea=class extends ni{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function Sh(i,e,t,n){let s=lm(n);switch(t){case hh:return i*e;case nl:return i*e/s.components*s.byteLength;case il:return i*e/s.components*s.byteLength;case dh:return i*e*2/s.components*s.byteLength;case sl:return i*e*2/s.components*s.byteLength;case uh:return i*e*3/s.components*s.byteLength;case Rn:return i*e*4/s.components*s.byteLength;case rl:return i*e*4/s.components*s.byteLength;case Aa:case Ra:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ca:case Ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:case cl:return Math.max(i,16)*Math.max(e,8)/4;case al:case ll:return Math.max(i,8)*Math.max(e,8)/2;case hl:case ul:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case gl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Al:case Rl:case Cl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Il:case Pl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ll:case Dl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lm(i){switch(i){case Zn:case ah:return{byteLength:1,components:1};case yr:case oh:case vr:return{byteLength:2,components:1};case el:case tl:return{byteLength:2,components:4};case ns:case Qo:case On:return{byteLength:4,components:1};case lh:case ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Gf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function hm(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],x=u[f];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let x=u[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var um=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dm=`#ifdef USE_ALPHAHASH
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
#endif`,fm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_m=`#ifdef USE_AOMAP
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
#endif`,xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ym=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wm=`#ifdef USE_IRIDESCENCE
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
#endif`,Em=`#ifdef USE_BUMPMAP
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Im=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nm=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Um=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bm=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Om=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Km=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$m=`#ifdef USE_GRADIENTMAP
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
}`,Qm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ng=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,ig=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,sg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ag=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,og=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,cg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hg=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_g=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vg=`#if defined( USE_POINTS_UV )
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
#endif`,bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ag=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dg=`#ifdef USE_NORMALMAP
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
#endif`,Ng=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ug=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Og=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,Yg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,Kg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,Zg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jg=`#ifdef USE_SKINNING
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
#endif`,$g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,e_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,n_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,i_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s_=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,r_=`#ifdef USE_TRANSMISSION
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
#endif`,a_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,h_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u_=`uniform sampler2D t2D;
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
}`,d_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,p_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g_=`#include <common>
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
}`,__=`#if DEPTH_PACKING == 3200
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
}`,x_=`#define DISTANCE
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
}`,y_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`uniform float scale;
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
}`,S_=`uniform vec3 diffuse;
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
}`,w_=`#include <common>
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
}`,E_=`uniform vec3 diffuse;
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
}`,T_=`#define LAMBERT
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
}`,A_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,R_=`#define MATCAP
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
}`,C_=`#define MATCAP
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
}`,I_=`#define NORMAL
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
}`,P_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,L_=`#define PHONG
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
}`,D_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,N_=`#define STANDARD
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
}`,U_=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,B_=`#define TOON
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
}`,O_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,F_=`uniform float size;
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
}`,k_=`uniform vec3 diffuse;
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
}`,z_=`#include <common>
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
}`,H_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,G_=`uniform float rotation;
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
}`,V_=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:um,alphahash_pars_fragment:dm,alphamap_fragment:fm,alphamap_pars_fragment:pm,alphatest_fragment:mm,alphatest_pars_fragment:gm,aomap_fragment:_m,aomap_pars_fragment:xm,batching_pars_vertex:ym,batching_vertex:vm,begin_vertex:bm,beginnormal_vertex:Mm,bsdfs:Sm,iridescence_fragment:wm,bumpmap_pars_fragment:Em,clipping_planes_fragment:Tm,clipping_planes_pars_fragment:Am,clipping_planes_pars_vertex:Rm,clipping_planes_vertex:Cm,color_fragment:Im,color_pars_fragment:Pm,color_pars_vertex:Lm,color_vertex:Dm,common:Nm,cube_uv_reflection_fragment:Um,defaultnormal_vertex:Bm,displacementmap_pars_vertex:Om,displacementmap_vertex:Fm,emissivemap_fragment:km,emissivemap_pars_fragment:zm,colorspace_fragment:Hm,colorspace_pars_fragment:Gm,envmap_fragment:Vm,envmap_common_pars_fragment:jm,envmap_pars_fragment:Wm,envmap_pars_vertex:Xm,envmap_physical_pars_fragment:ig,envmap_vertex:qm,fog_vertex:Ym,fog_pars_vertex:Km,fog_fragment:Zm,fog_pars_fragment:Jm,gradientmap_pars_fragment:$m,lightmap_pars_fragment:Qm,lights_lambert_fragment:eg,lights_lambert_pars_fragment:tg,lights_pars_begin:ng,lights_toon_fragment:sg,lights_toon_pars_fragment:rg,lights_phong_fragment:ag,lights_phong_pars_fragment:og,lights_physical_fragment:lg,lights_physical_pars_fragment:cg,lights_fragment_begin:hg,lights_fragment_maps:ug,lights_fragment_end:dg,logdepthbuf_fragment:fg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:gg,map_fragment:_g,map_pars_fragment:xg,map_particle_fragment:yg,map_particle_pars_fragment:vg,metalnessmap_fragment:bg,metalnessmap_pars_fragment:Mg,morphinstance_vertex:Sg,morphcolor_vertex:wg,morphnormal_vertex:Eg,morphtarget_pars_vertex:Tg,morphtarget_vertex:Ag,normal_fragment_begin:Rg,normal_fragment_maps:Cg,normal_pars_fragment:Ig,normal_pars_vertex:Pg,normal_vertex:Lg,normalmap_pars_fragment:Dg,clearcoat_normal_fragment_begin:Ng,clearcoat_normal_fragment_maps:Ug,clearcoat_pars_fragment:Bg,iridescence_pars_fragment:Og,opaque_fragment:Fg,packing:kg,premultiplied_alpha_fragment:zg,project_vertex:Hg,dithering_fragment:Gg,dithering_pars_fragment:Vg,roughnessmap_fragment:jg,roughnessmap_pars_fragment:Wg,shadowmap_pars_fragment:Xg,shadowmap_pars_vertex:qg,shadowmap_vertex:Yg,shadowmask_pars_fragment:Kg,skinbase_vertex:Zg,skinning_pars_vertex:Jg,skinning_vertex:$g,skinnormal_vertex:Qg,specularmap_fragment:e_,specularmap_pars_fragment:t_,tonemapping_fragment:n_,tonemapping_pars_fragment:i_,transmission_fragment:s_,transmission_pars_fragment:r_,uv_pars_fragment:a_,uv_pars_vertex:o_,uv_vertex:l_,worldpos_vertex:c_,background_vert:h_,background_frag:u_,backgroundCube_vert:d_,backgroundCube_frag:f_,cube_vert:p_,cube_frag:m_,depth_vert:g_,depth_frag:__,distanceRGBA_vert:x_,distanceRGBA_frag:y_,equirect_vert:v_,equirect_frag:b_,linedashed_vert:M_,linedashed_frag:S_,meshbasic_vert:w_,meshbasic_frag:E_,meshlambert_vert:T_,meshlambert_frag:A_,meshmatcap_vert:R_,meshmatcap_frag:C_,meshnormal_vert:I_,meshnormal_frag:P_,meshphong_vert:L_,meshphong_frag:D_,meshphysical_vert:N_,meshphysical_frag:U_,meshtoon_vert:B_,meshtoon_frag:O_,points_vert:F_,points_frag:k_,shadow_vert:z_,shadow_frag:H_,sprite_vert:G_,sprite_frag:V_},oe={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ui={basic:{uniforms:nn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:nn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:nn([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:nn([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:nn([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:nn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:nn([oe.points,oe.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:nn([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:nn([oe.common,oe.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:nn([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:nn([oe.sprite,oe.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:nn([oe.common,oe.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:nn([oe.lights,oe.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};ui.physical={uniforms:nn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};var Nl={r:0,b:0,g:0},Ds=new Xn,j_=new ze;function W_(i,e,t,n,s,r,a){let o=new Ce(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function x(E){let M=!1,P=_(E);P===null?p(o,l):P&&P.isColor&&(p(P,1),M=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,M){let P=_(M);P&&(P.isCubeTexture||P.mapping===Ta)?(h===void 0&&(h=new ht(new Nn(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:Ls(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ds.copy(M.backgroundRotation),Ds.x*=-1,Ds.y*=-1,Ds.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ds.y*=-1,Ds.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(j_.makeRotationFromEuler(Ds)),h.material.toneMapped=Qe.getTransfer(P.colorSpace)!==dt,(u!==P||d!==P.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=P,d=P.version,f=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new ht(new Ss(2,2),new qn({name:"BackgroundMaterial",uniforms:Ls(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(P.colorSpace)!==dt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||d!==P.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=P,d=P.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,M){E.getRGB(Nl,yh(i)),n.buffers.color.setClear(Nl.r,Nl.g,Nl.b,M,a)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,M=1){o.set(E),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:x,addToRenderList:m,dispose:R}}function X_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(v,L,U,k,G){let Y=!1,j=u(k,U,L);r!==j&&(r=j,c(r.object)),Y=f(v,k,U,G),Y&&_(v,k,U,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(v,L,U,k),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,L,U){let k=U.wireframe===!0,G=n[v.id];G===void 0&&(G={},n[v.id]=G);let Y=G[L.id];Y===void 0&&(Y={},G[L.id]=Y);let j=Y[k];return j===void 0&&(j=d(l()),Y[k]=j),j}function d(v){let L=[],U=[],k=[];for(let G=0;G<t;G++)L[G]=0,U[G]=0,k[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:k,object:v,attributes:{},index:null}}function f(v,L,U,k){let G=r.attributes,Y=L.attributes,j=0,te=U.getAttributes();for(let V in te)if(te[V].location>=0){let fe=G[V],Ae=Y[V];if(Ae===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(Ae=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(Ae=v.instanceColor)),fe===void 0||fe.attribute!==Ae||Ae&&fe.data!==Ae.data)return!0;j++}return r.attributesNum!==j||r.index!==k}function _(v,L,U,k){let G={},Y=L.attributes,j=0,te=U.getAttributes();for(let V in te)if(te[V].location>=0){let fe=Y[V];fe===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor));let Ae={};Ae.attribute=fe,fe&&fe.data&&(Ae.data=fe.data),G[V]=Ae,j++}r.attributes=G,r.attributesNum=j,r.index=k}function x(){let v=r.newAttributes;for(let L=0,U=v.length;L<U;L++)v[L]=0}function m(v){p(v,0)}function p(v,L){let U=r.newAttributes,k=r.enabledAttributes,G=r.attributeDivisors;U[v]=1,k[v]===0&&(i.enableVertexAttribArray(v),k[v]=1),G[v]!==L&&(i.vertexAttribDivisor(v,L),G[v]=L)}function R(){let v=r.newAttributes,L=r.enabledAttributes;for(let U=0,k=L.length;U<k;U++)L[U]!==v[U]&&(i.disableVertexAttribArray(U),L[U]=0)}function E(v,L,U,k,G,Y,j){j===!0?i.vertexAttribIPointer(v,L,U,G,Y):i.vertexAttribPointer(v,L,U,k,G,Y)}function M(v,L,U,k){x();let G=k.attributes,Y=U.getAttributes(),j=L.defaultAttributeValues;for(let te in Y){let V=Y[te];if(V.location>=0){let le=G[te];if(le===void 0&&(te==="instanceMatrix"&&v.instanceMatrix&&(le=v.instanceMatrix),te==="instanceColor"&&v.instanceColor&&(le=v.instanceColor)),le!==void 0){let fe=le.normalized,Ae=le.itemSize,Ke=e.get(le);if(Ke===void 0)continue;let xt=Ke.buffer,Mt=Ke.type,ot=Ke.bytesPerElement,K=Mt===i.INT||Mt===i.UNSIGNED_INT||le.gpuType===Qo;if(le.isInterleavedBufferAttribute){let $=le.data,_e=$.stride,Oe=le.offset;if($.isInstancedInterleavedBuffer){for(let Te=0;Te<V.locationSize;Te++)p(V.location+Te,$.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Te=0;Te<V.locationSize;Te++)m(V.location+Te);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let Te=0;Te<V.locationSize;Te++)E(V.location+Te,Ae/V.locationSize,Mt,fe,_e*ot,(Oe+Ae/V.locationSize*Te)*ot,K)}else{if(le.isInstancedBufferAttribute){for(let $=0;$<V.locationSize;$++)p(V.location+$,le.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let $=0;$<V.locationSize;$++)m(V.location+$);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let $=0;$<V.locationSize;$++)E(V.location+$,Ae/V.locationSize,Mt,fe,Ae*ot,Ae/V.locationSize*$*ot,K)}}else if(j!==void 0){let fe=j[te];if(fe!==void 0)switch(fe.length){case 2:i.vertexAttrib2fv(V.location,fe);break;case 3:i.vertexAttrib3fv(V.location,fe);break;case 4:i.vertexAttrib4fv(V.location,fe);break;default:i.vertexAttrib1fv(V.location,fe)}}}}R()}function P(){A();for(let v in n){let L=n[v];for(let U in L){let k=L[U];for(let G in k)h(k[G].object),delete k[G];delete L[U]}delete n[v]}}function b(v){if(n[v.id]===void 0)return;let L=n[v.id];for(let U in L){let k=L[U];for(let G in k)h(k[G].object),delete k[G];delete L[U]}delete n[v.id]}function w(v){for(let L in n){let U=n[L];if(U[v.id]===void 0)continue;let k=U[v.id];for(let G in k)h(k[G].object),delete k[G];delete U[v.id]}}function A(){y(),a=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:R}}function q_(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)a(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let x=0;x<u;x++)_+=h[x]*d[x];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Y_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Rn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){let A=w===vr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Zn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==On&&!A)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,b=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:R,maxVaryings:E,maxFragmentUniforms:M,vertexTextures:P,maxSamples:b}}function K_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new mn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||_===null||_.length===0||r&&!m)r?h(null):c();else{let R=r?0:n,E=R*4,M=p.clippingState||null;l.value=M,M=h(_,d,E,f);for(let P=0;P!==E;++P)M[P]=t[P];p.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,_){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,_!==!0||m===null){let p=f+x*4,R=d.matrixWorldInverse;o.getNormalMatrix(R),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=f;E!==x;++E,M+=4)a.copy(u[E]).applyMatrix4(R,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Z_(i){let e=new WeakMap;function t(a,o){return o===Zo?a.mapping=Rs:o===Jo&&(a.mapping=Cs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Zo||o===Jo)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Mo(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Er=4,yf=[.125,.215,.35,.446,.526,.582],Bs=20,wh=new Ts,vf=new Ce,Eh=null,Th=0,Ah=0,Rh=!1,Us=(1+Math.sqrt(5))/2,wr=1/Us,bf=[new I(-Us,wr,0),new I(Us,wr,0),new I(-wr,0,Us),new I(wr,0,Us),new I(0,Us,-wr),new I(0,Us,wr),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],J_=new I,Ol=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=J_}=r;Eh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eh,Th,Ah),this._renderer.xr.enabled=Rh,e.scissorTest=!1,Ul(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Rs||e.mapping===Cs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Rh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:vr,format:Rn,colorSpace:Kt,depthBuffer:!1},s=Mf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mf(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$_(r)),this._blurMaterial=Q_(r,e,t)}return s}_compileMaterial(e){let t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,wh)}_sceneToCubeUV(e,t,n,s,r){let l=new Nt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(vf),u.toneMapping=Li,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null));let x=new tn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),m=new ht(new Nn,x),p=!1,R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,p=!0):(x.color.copy(vf),p=!0);for(let E=0;E<6;E++){let M=E%3;M===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):M===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));let P=this._cubeSize;Ul(s,M*P,E>2?P:0,P,P),u.setRenderTarget(s),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=R}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Rs||e.mapping===Cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Ul(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,wh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=bf[(s-r-1)%bf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new ht(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Bs-1),x=r/_,m=isFinite(r)?1+Math.floor(h*x):Bs;m>Bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Bs}`);let p=[],R=0;for(let w=0;w<Bs;++w){let A=w/x,y=Math.exp(-A*A/2);p.push(y),w===0?R+=y:w<m&&(R+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/R;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-n;let M=this._sizeLods[s],P=3*M*(s>E-Er?s-E+Er:0),b=4*(this._cubeSize-M);Ul(t,P,b,3*M,2*M),l.setRenderTarget(t),l.render(u,wh)}};function $_(i){let e=[],t=[],n=[],s=i,r=i-Er+1+yf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Er?l=yf[a-i+Er-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,x=3,m=2,p=1,R=new Float32Array(x*_*f),E=new Float32Array(m*_*f),M=new Float32Array(p*_*f);for(let b=0;b<f;b++){let w=b%3*2/3-1,A=b>2?0:-1,y=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];R.set(y,x*_*b),E.set(d,m*_*b);let v=[b,b,b,b,b,b];M.set(v,p*_*b)}let P=new Lt;P.setAttribute("position",new Ut(R,x)),P.setAttribute("uv",new Ut(E,m)),P.setAttribute("faceIndex",new Ut(M,p)),e.push(P),s>Er&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Mf(i,e,t){let n=new ii(i,e,t);return n.texture.mapping=Ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ul(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Q_(i,e,t){let n=new Float32Array(Bs),s=new I(0,1,0);return new qn({name:"SphericalGaussianBlur",defines:{n:Bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Sf(){return new qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fh(),fragmentShader:`

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
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function wf(){return new qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Fh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function e1(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Zo||l===Jo,h=l===Rs||l===Cs;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ol(i)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Ol(i)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function t1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&rr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function n1(i,e,t,n){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,_=u.attributes.position,x=0;if(f!==null){let R=f.array;x=f.version;for(let E=0,M=R.length;E<M;E+=3){let P=R[E+0],b=R[E+1],w=R[E+2];d.push(P,b,b,w,w,P)}}else if(_!==void 0){let R=_.array;x=_.version;for(let E=0,M=R.length/3-1;E<M;E+=3){let P=E+0,b=E+1,w=E+2;d.push(P,b,b,w,w,P)}}else return;let m=new(xh(d)?$r:Jr)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function i1(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,_){_!==0&&(i.drawElementsInstanced(n,f,r,d*a,_),t.update(f,n,_))}function h(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function u(d,f,_,x){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,_);let p=0;for(let R=0;R<_;R++)p+=f[R]*x[R];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function s1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function r1(i,e,t){let n=new WeakMap,s=new it;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==u){let y=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],E=0;f===!0&&(E=1),_===!0&&(E=2),x===!0&&(E=3);let M=o.attributes.position.count*E,P=1;M>e.maxTextureSize&&(P=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let b=new Float32Array(M*P*4*u),w=new Zr(b,M,P,u);w.type=On,w.needsUpdate=!0;let A=E*4;for(let v=0;v<u;v++){let L=m[v],U=p[v],k=R[v],G=M*P*4*v;for(let Y=0;Y<L.count;Y++){let j=Y*A;f===!0&&(s.fromBufferAttribute(L,Y),b[G+j+0]=s.x,b[G+j+1]=s.y,b[G+j+2]=s.z,b[G+j+3]=0),_===!0&&(s.fromBufferAttribute(U,Y),b[G+j+4]=s.x,b[G+j+5]=s.y,b[G+j+6]=s.z,b[G+j+7]=0),x===!0&&(s.fromBufferAttribute(k,Y),b[G+j+8]=s.x,b[G+j+9]=s.y,b[G+j+10]=s.z,b[G+j+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new ce(M,P)},n.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let _=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function a1(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Vf=new Bt,Ef=new ca(1,1),jf=new Zr,Wf=new vo,Xf=new ea,Tf=[],Af=[],Rf=new Float32Array(16),Cf=new Float32Array(9),If=new Float32Array(4);function Ar(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Tf[s];if(r===void 0&&(r=new Float32Array(s),Tf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ft(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kl(i,e){let t=Af[e];t===void 0&&(t=new Int32Array(e),Af[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function o1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function l1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function c1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ft(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function h1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function u1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;If.set(n),i.uniformMatrix2fv(this.addr,!1,If),kt(t,n)}}function d1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;Cf.set(n),i.uniformMatrix3fv(this.addr,!1,Cf),kt(t,n)}}function f1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ft(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ft(t,n))return;Rf.set(n),i.uniformMatrix4fv(this.addr,!1,Rf),kt(t,n)}}function p1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function m1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function g1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function _1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function x1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function y1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ft(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function v1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ft(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function b1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ft(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function M1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ef.compareFunction=mh,r=Ef):r=Vf,t.setTexture2D(e||r,s)}function S1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Wf,s)}function w1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Xf,s)}function E1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||jf,s)}function T1(i){switch(i){case 5126:return o1;case 35664:return l1;case 35665:return c1;case 35666:return h1;case 35674:return u1;case 35675:return d1;case 35676:return f1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return _1;case 5125:return x1;case 36294:return y1;case 36295:return v1;case 36296:return b1;case 35678:case 36198:case 36298:case 36306:case 35682:return M1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return E1}}function A1(i,e){i.uniform1fv(this.addr,e)}function R1(i,e){let t=Ar(e,this.size,2);i.uniform2fv(this.addr,t)}function C1(i,e){let t=Ar(e,this.size,3);i.uniform3fv(this.addr,t)}function I1(i,e){let t=Ar(e,this.size,4);i.uniform4fv(this.addr,t)}function P1(i,e){let t=Ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function L1(i,e){let t=Ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function D1(i,e){let t=Ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function N1(i,e){i.uniform1iv(this.addr,e)}function U1(i,e){i.uniform2iv(this.addr,e)}function B1(i,e){i.uniform3iv(this.addr,e)}function O1(i,e){i.uniform4iv(this.addr,e)}function F1(i,e){i.uniform1uiv(this.addr,e)}function k1(i,e){i.uniform2uiv(this.addr,e)}function z1(i,e){i.uniform3uiv(this.addr,e)}function H1(i,e){i.uniform4uiv(this.addr,e)}function G1(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Vf,r[a])}function V1(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Wf,r[a])}function j1(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Xf,r[a])}function W1(i,e,t){let n=this.cache,s=e.length,r=kl(t,s);Ft(n,r)||(i.uniform1iv(this.addr,r),kt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||jf,r[a])}function X1(i){switch(i){case 5126:return A1;case 35664:return R1;case 35665:return C1;case 35666:return I1;case 35674:return P1;case 35675:return L1;case 35676:return D1;case 5124:case 35670:return N1;case 35667:case 35671:return U1;case 35668:case 35672:return B1;case 35669:case 35673:return O1;case 5125:return F1;case 36294:return k1;case 36295:return z1;case 36296:return H1;case 35678:case 36198:case 36298:case 36306:case 35682:return G1;case 35679:case 36299:case 36307:return V1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return W1}}var Ih=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=T1(t.type)}},Ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=X1(t.type)}},Lh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ch=/(\w+)(\])?(\[|\.)?/g;function Pf(i,e){i.seq.push(e),i.map[e.id]=e}function q1(i,e,t){let n=i.name,s=n.length;for(Ch.lastIndex=0;;){let r=Ch.exec(n),a=Ch.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pf(t,c===void 0?new Ih(o,i,e):new Ph(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new Lh(o),Pf(t,u)),t=u}}}var Tr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);q1(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Lf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Y1=37297,K1=0;function Z1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Df=new Ge;function J1(i){Qe._getMatrix(Df,Qe.workingColorSpace,i);let e=`mat3( ${Df.elements.map(t=>t.toFixed(4))} )`;switch(Qe.getTransfer(i)){case Yr:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Nf(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Z1(i.getShaderSource(e),o)}else return r}function $1(i,e){let t=J1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Q1(i,e){let t;switch(e){case Yd:t="Linear";break;case Kd:t="Reinhard";break;case Zd:t="Cineon";break;case Ko:t="ACESFilmic";break;case $d:t="AgX";break;case Qd:t="Neutral";break;case Jd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Bl=new I;function ex(){Qe.getLuminanceCoefficients(Bl);let i=Bl.x.toFixed(4),e=Bl.y.toFixed(4),t=Bl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(La).join(`
`)}function nx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ix(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function La(i){return i!==""}function Uf(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dh(i){return i.replace(sx,ax)}var rx=new Map;function ax(i,e){let t=Xe[e];if(t===void 0){let n=rx.get(e);if(n!==void 0)t=Xe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Dh(t)}var ox=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Of(i){return i.replace(ox,lx)}function lx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ff(i){let e=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===eh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ho?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hi&&(e="SHADOWMAP_TYPE_VSM"),e}function hx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Rs:case Cs:e="ENVMAP_TYPE_CUBE";break;case Ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ux(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Cs:e="ENVMAP_MODE_REFRACTION";break}return e}function dx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sh:e="ENVMAP_BLENDING_MULTIPLY";break;case Xd:e="ENVMAP_BLENDING_MIX";break;case qd:e="ENVMAP_BLENDING_ADD";break}return e}function fx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function px(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=cx(t),c=hx(t),h=ux(t),u=dx(t),d=fx(t),f=tx(t),_=nx(r),x=s.createProgram(),m,p,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(La).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(La).join(`
`),p.length>0&&(p+=`
`)):(m=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(La).join(`
`),p=[Ff(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?Xe.tonemapping_pars_fragment:"",t.toneMapping!==Li?Q1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,$1("linearToOutputTexel",t.outputColorSpace),ex(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(La).join(`
`)),a=Dh(a),a=Uf(a,t),a=Bf(a,t),o=Dh(o),o=Uf(o,t),o=Bf(o,t),a=Of(a),o=Of(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===gh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=R+m+a,M=R+p+o,P=Lf(s,s.VERTEX_SHADER,E),b=Lf(s,s.FRAGMENT_SHADER,M);s.attachShader(x,P),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(L){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(x)||"",k=s.getShaderInfoLog(P)||"",G=s.getShaderInfoLog(b)||"",Y=U.trim(),j=k.trim(),te=G.trim(),V=!0,le=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,P,b);else{let fe=Nf(s,P,"vertex"),Ae=Nf(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+fe+`
`+Ae)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(j===""||te==="")&&(le=!1);le&&(L.diagnostics={runnable:V,programLog:Y,vertexShader:{log:j,prefix:m},fragmentShader:{log:te,prefix:p}})}s.deleteShader(P),s.deleteShader(b),A=new Tr(s,x),y=ix(s,x)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,Y1)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=b,this}var mx=0,Nh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uh(e),t.set(e,n)),n}},Uh=class{constructor(e){this.id=mx++,this.code=e,this.usedTimes=0}};function gx(i,e,t,n,s,r,a){let o=new or,l=new Nh,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,L,U,k){let G=U.fog,Y=k.geometry,j=y.isMeshStandardMaterial?U.environment:null,te=(y.isMeshStandardMaterial?t:e).get(y.envMap||j),V=te&&te.mapping===Ta?te.image.height:null,le=_[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let fe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ae=fe!==void 0?fe.length:0,Ke=0;Y.morphAttributes.position!==void 0&&(Ke=1),Y.morphAttributes.normal!==void 0&&(Ke=2),Y.morphAttributes.color!==void 0&&(Ke=3);let xt,Mt,ot,K;if(le){let lt=ui[le];xt=lt.vertexShader,Mt=lt.fragmentShader}else xt=y.vertexShader,Mt=y.fragmentShader,l.update(y),ot=l.getVertexShaderID(y),K=l.getFragmentShaderID(y);let $=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Oe=k.isInstancedMesh===!0,Te=k.isBatchedMesh===!0,tt=!!y.map,$t=!!y.matcap,D=!!te,St=!!y.aoMap,He=!!y.lightMap,Ne=!!y.bumpMap,ve=!!y.normalMap,wt=!!y.displacementMap,be=!!y.emissiveMap,We=!!y.metalnessMap,Gt=!!y.roughnessMap,It=y.anisotropy>0,C=y.clearcoat>0,S=y.dispersion>0,F=y.iridescence>0,q=y.sheen>0,J=y.transmission>0,W=It&&!!y.anisotropyMap,Ee=C&&!!y.clearcoatMap,se=C&&!!y.clearcoatNormalMap,Me=C&&!!y.clearcoatRoughnessMap,Se=F&&!!y.iridescenceMap,ne=F&&!!y.iridescenceThicknessMap,de=q&&!!y.sheenColorMap,De=q&&!!y.sheenRoughnessMap,we=!!y.specularMap,he=!!y.specularColorMap,Ve=!!y.specularIntensityMap,N=J&&!!y.transmissionMap,ie=J&&!!y.thicknessMap,re=!!y.gradientMap,me=!!y.alphaMap,Q=y.alphaTest>0,Z=!!y.alphaHash,ye=!!y.extensions,ke=Li;y.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ke=i.toneMapping);let yt={shaderID:le,shaderType:y.type,shaderName:y.name,vertexShader:xt,fragmentShader:Mt,defines:y.defines,customVertexShaderID:ot,customFragmentShaderID:K,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Te,batchingColor:Te&&k._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&k.instanceColor!==null,instancingMorph:Oe&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Kt,alphaToCoverage:!!y.alphaToCoverage,map:tt,matcap:$t,envMap:D,envMapMode:D&&te.mapping,envMapCubeUVHeight:V,aoMap:St,lightMap:He,bumpMap:Ne,normalMap:ve,displacementMap:d&&wt,emissiveMap:be,normalMapObjectSpace:ve&&y.normalMapType===rf,normalMapTangentSpace:ve&&y.normalMapType===ph,metalnessMap:We,roughnessMap:Gt,anisotropy:It,anisotropyMap:W,clearcoat:C,clearcoatMap:Ee,clearcoatNormalMap:se,clearcoatRoughnessMap:Me,dispersion:S,iridescence:F,iridescenceMap:Se,iridescenceThicknessMap:ne,sheen:q,sheenColorMap:de,sheenRoughnessMap:De,specularMap:we,specularColorMap:he,specularIntensityMap:Ve,transmission:J,transmissionMap:N,thicknessMap:ie,gradientMap:re,opaque:y.transparent===!1&&y.blending===_s&&y.alphaToCoverage===!1,alphaMap:me,alphaTest:Q,alphaHash:Z,combine:y.combine,mapUv:tt&&x(y.map.channel),aoMapUv:St&&x(y.aoMap.channel),lightMapUv:He&&x(y.lightMap.channel),bumpMapUv:Ne&&x(y.bumpMap.channel),normalMapUv:ve&&x(y.normalMap.channel),displacementMapUv:wt&&x(y.displacementMap.channel),emissiveMapUv:be&&x(y.emissiveMap.channel),metalnessMapUv:We&&x(y.metalnessMap.channel),roughnessMapUv:Gt&&x(y.roughnessMap.channel),anisotropyMapUv:W&&x(y.anisotropyMap.channel),clearcoatMapUv:Ee&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:se&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Se&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:de&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(y.sheenRoughnessMap.channel),specularMapUv:we&&x(y.specularMap.channel),specularColorMapUv:he&&x(y.specularColorMap.channel),specularIntensityMapUv:Ve&&x(y.specularIntensityMap.channel),transmissionMapUv:N&&x(y.transmissionMap.channel),thicknessMapUv:ie&&x(y.thicknessMap.channel),alphaMapUv:me&&x(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(ve||It),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(tt||me),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:_e,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ae,morphTextureStride:Ke,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:ke,decodeVideoTexture:tt&&y.map.isVideoTexture===!0&&Qe.getTransfer(y.map.colorSpace)===dt,decodeVideoTextureEmissive:be&&y.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(y.emissiveMap.colorSpace)===dt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===jt,flipSided:y.side===fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ye&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&y.extensions.multiDraw===!0||Te)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return yt.vertexUv1s=c.has(1),yt.vertexUv2s=c.has(2),yt.vertexUv3s=c.has(3),c.clear(),yt}function p(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let L in y.defines)v.push(L),v.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(R(v,y),E(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function R(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function E(y,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),v.dispersion&&o.enable(20),v.batchingColor&&o.enable(21),v.gradientMap&&o.enable(22),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.reversedDepthBuffer&&o.enable(4),v.skinning&&o.enable(5),v.morphTargets&&o.enable(6),v.morphNormals&&o.enable(7),v.morphColors&&o.enable(8),v.premultipliedAlpha&&o.enable(9),v.shadowMapEnabled&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.decodeVideoTextureEmissive&&o.enable(20),v.alphaToCoverage&&o.enable(21),y.push(o.mask)}function M(y){let v=_[y.type],L;if(v){let U=ui[v];L=gf.clone(U.uniforms)}else L=y.uniforms;return L}function P(y,v){let L;for(let U=0,k=h.length;U<k;U++){let G=h[U];if(G.cacheKey===v){L=G,++L.usedTimes;break}}return L===void 0&&(L=new px(i,v,y,r),h.push(L)),L}function b(y){if(--y.usedTimes===0){let v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function w(y){l.remove(y)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:P,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:A}}function _x(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function xx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function kf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function zf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u,d,f,_,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function o(u,d,f,_,x,m){let p=a(u,d,f,_,x,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,_,x,m){let p=a(u,d,f,_,x,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||xx),n.length>1&&n.sort(d||kf),s.length>1&&s.sort(d||kf)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function yx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new zf,i.set(n,[a])):s>=r.length?(a=new zf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function vx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ce};break;case"SpotLight":t={position:new I,direction:new I,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function bx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Mx=0;function Sx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function wx(i){let e=new vx,t=bx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new ze,a=new ze;function o(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,_=0,x=0,m=0,p=0,R=0,E=0,M=0,P=0,b=0,w=0;c.sort(Sx);for(let y=0,v=c.length;y<v;y++){let L=c[y],U=L.color,k=L.intensity,G=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=U.r*k,u+=U.g*k,d+=U.b*k;else if(L.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(L.sh.coefficients[j],k);w++}else if(L.isDirectionalLight){let j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let te=L.shadow,V=t.get(L);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=Y,n.directionalShadowMatrix[f]=L.shadow.matrix,R++}n.directional[f]=j,f++}else if(L.isSpotLight){let j=e.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(U).multiplyScalar(k),j.distance=G,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,n.spot[x]=j;let te=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,te.updateMatrices(L),L.castShadow&&b++),n.spotLightMatrix[x]=te.matrix,L.castShadow){let V=t.get(L);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=Y,M++}x++}else if(L.isRectAreaLight){let j=e.get(L);j.color.copy(U).multiplyScalar(k),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=j,m++}else if(L.isPointLight){let j=e.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){let te=L.shadow,V=t.get(L);V.shadowIntensity=te.intensity,V.shadowBias=te.bias,V.shadowNormalBias=te.normalBias,V.shadowRadius=te.radius,V.shadowMapSize=te.mapSize,V.shadowCameraNear=te.camera.near,V.shadowCameraFar=te.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=L.shadow.matrix,E++}n.point[_]=j,_++}else if(L.isHemisphereLight){let j=e.get(L);j.skyColor.copy(L.color).multiplyScalar(k),j.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[p]=j,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==f||A.pointLength!==_||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==R||A.numPointShadows!==E||A.numSpotShadows!==M||A.numSpotMaps!==P||A.numLightProbes!==w)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=M+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,A.directionalLength=f,A.pointLength=_,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=R,A.numPointShadows=E,A.numSpotShadows=M,A.numSpotMaps=P,A.numLightProbes=w,n.version=Mx++)}function l(c,h){let u=0,d=0,f=0,_=0,x=0,m=h.matrixWorldInverse;for(let p=0,R=c.length;p<R;p++){let E=c[p];if(E.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(E.isSpotLight){let M=n.spot[f];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(E.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(E.width*.5,0,0),M.halfHeight.set(0,E.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(E.matrixWorld),M.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(E.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function Hf(i){let e=new wx(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Ex(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Hf(i),e.set(s,[o])):r>=a.length?(o=new Hf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Tx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ax=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rx(i,e,t){let n=new dr,s=new ce,r=new ce,a=new it,o=new Lo({depthPacking:sf}),l=new Do,c={},h=t.maxTextureSize,u={[Tn]:fn,[fn]:Tn,[jt]:jt},d=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:Tx,fragmentShader:Ax}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new Lt;_.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ht(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eh;let p=this.type;this.render=function(b,w,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;let y=i.getRenderTarget(),v=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Pi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let k=p!==hi&&this.type===hi,G=p===hi&&this.type!==hi;for(let Y=0,j=b.length;Y<j;Y++){let te=b[Y],V=te.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let le=V.getFrameExtents();if(s.multiply(le),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/le.x),s.x=r.x*le.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/le.y),s.y=r.y*le.y,V.mapSize.y=r.y)),V.map===null||k===!0||G===!0){let Ae=this.type!==hi?{minFilter:Yt,magFilter:Yt}:{};V.map!==null&&V.map.dispose(),V.map=new ii(s.x,s.y,Ae),V.map.texture.name=te.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();let fe=V.getViewportCount();for(let Ae=0;Ae<fe;Ae++){let Ke=V.getViewport(Ae);a.set(r.x*Ke.x,r.y*Ke.y,r.x*Ke.z,r.y*Ke.w),U.viewport(a),V.updateMatrices(te,Ae),n=V.getFrustum(),M(w,A,V.camera,te,this.type)}V.isPointLightShadow!==!0&&this.type===hi&&R(V,A),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(y,v,L)};function R(b,w){let A=e.update(x);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ii(s.x,s.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(w,null,A,d,x,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(w,null,A,f,x,null)}function E(b,w,A,y){let v=null,L=A.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)v=L;else if(v=A.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let U=v.uuid,k=w.uuid,G=c[U];G===void 0&&(G={},c[U]=G);let Y=G[k];Y===void 0&&(Y=v.clone(),G[k]=Y,w.addEventListener("dispose",P)),v=Y}if(v.visible=w.visible,v.wireframe=w.wireframe,y===hi?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let U=i.properties.get(v);U.light=A}return v}function M(b,w,A,y,v){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&v===hi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,b.matrixWorld);let k=e.update(b),G=b.material;if(Array.isArray(G)){let Y=k.groups;for(let j=0,te=Y.length;j<te;j++){let V=Y[j],le=G[V.materialIndex];if(le&&le.visible){let fe=E(b,le,y,v);b.onBeforeShadow(i,b,w,A,k,fe,V),i.renderBufferDirect(A,null,k,fe,b,V),b.onAfterShadow(i,b,w,A,k,fe,V)}}}else if(G.visible){let Y=E(b,G,y,v);b.onBeforeShadow(i,b,w,A,k,Y,null),i.renderBufferDirect(A,null,k,Y,b,null),b.onAfterShadow(i,b,w,A,k,Y,null)}}let U=b.children;for(let k=0,G=U.length;k<G;k++)M(U[k],w,A,y,v)}function P(b){b.target.removeEventListener("dispose",P);for(let A in c){let y=c[A],v=b.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}var Cx={[Go]:Vo,[jo]:qo,[Wo]:Yo,[xs]:Xo,[Vo]:Go,[qo]:jo,[Yo]:Wo,[Xo]:xs};function Ix(i,e){function t(){let N=!1,ie=new it,re=null,me=new it(0,0,0,0);return{setMask:function(Q){re!==Q&&!N&&(i.colorMask(Q,Q,Q,Q),re=Q)},setLocked:function(Q){N=Q},setClear:function(Q,Z,ye,ke,yt){yt===!0&&(Q*=ke,Z*=ke,ye*=ke),ie.set(Q,Z,ye,ke),me.equals(ie)===!1&&(i.clearColor(Q,Z,ye,ke),me.copy(ie))},reset:function(){N=!1,re=null,me.set(-1,0,0,0)}}}function n(){let N=!1,ie=!1,re=null,me=null,Q=null;return{setReversed:function(Z){if(ie!==Z){let ye=e.get("EXT_clip_control");Z?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),ie=Z;let ke=Q;Q=null,this.setClear(ke)}},getReversed:function(){return ie},setTest:function(Z){Z?$(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(Z){re!==Z&&!N&&(i.depthMask(Z),re=Z)},setFunc:function(Z){if(ie&&(Z=Cx[Z]),me!==Z){switch(Z){case Go:i.depthFunc(i.NEVER);break;case Vo:i.depthFunc(i.ALWAYS);break;case jo:i.depthFunc(i.LESS);break;case xs:i.depthFunc(i.LEQUAL);break;case Wo:i.depthFunc(i.EQUAL);break;case Xo:i.depthFunc(i.GEQUAL);break;case qo:i.depthFunc(i.GREATER);break;case Yo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}me=Z}},setLocked:function(Z){N=Z},setClear:function(Z){Q!==Z&&(ie&&(Z=1-Z),i.clearDepth(Z),Q=Z)},reset:function(){N=!1,re=null,me=null,Q=null,ie=!1}}}function s(){let N=!1,ie=null,re=null,me=null,Q=null,Z=null,ye=null,ke=null,yt=null;return{setTest:function(lt){N||(lt?$(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(lt){ie!==lt&&!N&&(i.stencilMask(lt),ie=lt)},setFunc:function(lt,xi,Qn){(re!==lt||me!==xi||Q!==Qn)&&(i.stencilFunc(lt,xi,Qn),re=lt,me=xi,Q=Qn)},setOp:function(lt,xi,Qn){(Z!==lt||ye!==xi||ke!==Qn)&&(i.stencilOp(lt,xi,Qn),Z=lt,ye=xi,ke=Qn)},setLocked:function(lt){N=lt},setClear:function(lt){yt!==lt&&(i.clearStencil(lt),yt=lt)},reset:function(){N=!1,ie=null,re=null,me=null,Q=null,Z=null,ye=null,ke=null,yt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],_=null,x=!1,m=null,p=null,R=null,E=null,M=null,P=null,b=null,w=new Ce(0,0,0),A=0,y=!1,v=null,L=null,U=null,k=null,G=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,te=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(V)[1]),j=te>=1):V.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),j=te>=2);let le=null,fe={},Ae=i.getParameter(i.SCISSOR_BOX),Ke=i.getParameter(i.VIEWPORT),xt=new it().fromArray(Ae),Mt=new it().fromArray(Ke);function ot(N,ie,re,me){let Q=new Uint8Array(4),Z=i.createTexture();i.bindTexture(N,Z),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ye=0;ye<re;ye++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ie,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,Q):i.texImage2D(ie+ye,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Q);return Z}let K={};K[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(xs),Ne(!1),ve(Qc),$(i.CULL_FACE),St(Pi);function $(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function _e(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Oe(N,ie){return u[N]!==ie?(i.bindFramebuffer(N,ie),u[N]=ie,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ie),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ie),!0):!1}function Te(N,ie){let re=f,me=!1;if(N){re=d.get(ie),re===void 0&&(re=[],d.set(ie,re));let Q=N.textures;if(re.length!==Q.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,ye=Q.length;Z<ye;Z++)re[Z]=i.COLOR_ATTACHMENT0+Z;re.length=Q.length,me=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,me=!0);me&&i.drawBuffers(re)}function tt(N){return _!==N?(i.useProgram(N),_=N,!0):!1}let $t={[Ji]:i.FUNC_ADD,[Cd]:i.FUNC_SUBTRACT,[Id]:i.FUNC_REVERSE_SUBTRACT};$t[Pd]=i.MIN,$t[Ld]=i.MAX;let D={[Dd]:i.ZERO,[Nd]:i.ONE,[Ud]:i.SRC_COLOR,[mo]:i.SRC_ALPHA,[Hd]:i.SRC_ALPHA_SATURATE,[kd]:i.DST_COLOR,[Od]:i.DST_ALPHA,[Bd]:i.ONE_MINUS_SRC_COLOR,[go]:i.ONE_MINUS_SRC_ALPHA,[zd]:i.ONE_MINUS_DST_COLOR,[Fd]:i.ONE_MINUS_DST_ALPHA,[Gd]:i.CONSTANT_COLOR,[Vd]:i.ONE_MINUS_CONSTANT_COLOR,[jd]:i.CONSTANT_ALPHA,[Wd]:i.ONE_MINUS_CONSTANT_ALPHA};function St(N,ie,re,me,Q,Z,ye,ke,yt,lt){if(N===Pi){x===!0&&(_e(i.BLEND),x=!1);return}if(x===!1&&($(i.BLEND),x=!0),N!==Rd){if(N!==m||lt!==y){if((p!==Ji||M!==Ji)&&(i.blendEquation(i.FUNC_ADD),p=Ji,M=Ji),lt)switch(N){case _s:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case th:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case _s:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case th:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case nh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ih:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}R=null,E=null,P=null,b=null,w.set(0,0,0),A=0,m=N,y=lt}return}Q=Q||ie,Z=Z||re,ye=ye||me,(ie!==p||Q!==M)&&(i.blendEquationSeparate($t[ie],$t[Q]),p=ie,M=Q),(re!==R||me!==E||Z!==P||ye!==b)&&(i.blendFuncSeparate(D[re],D[me],D[Z],D[ye]),R=re,E=me,P=Z,b=ye),(ke.equals(w)===!1||yt!==A)&&(i.blendColor(ke.r,ke.g,ke.b,yt),w.copy(ke),A=yt),m=N,y=!1}function He(N,ie){N.side===jt?_e(i.CULL_FACE):$(i.CULL_FACE);let re=N.side===fn;ie&&(re=!re),Ne(re),N.blending===_s&&N.transparent===!1?St(Pi):St(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let me=N.stencilWrite;o.setTest(me),me&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),be(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(N){v!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),v=N)}function ve(N){N!==Td?($(i.CULL_FACE),N!==L&&(N===Qc?i.cullFace(i.BACK):N===Ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),L=N}function wt(N){N!==U&&(j&&i.lineWidth(N),U=N)}function be(N,ie,re){N?($(i.POLYGON_OFFSET_FILL),(k!==ie||G!==re)&&(i.polygonOffset(ie,re),k=ie,G=re)):_e(i.POLYGON_OFFSET_FILL)}function We(N){N?$(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function Gt(N){N===void 0&&(N=i.TEXTURE0+Y-1),le!==N&&(i.activeTexture(N),le=N)}function It(N,ie,re){re===void 0&&(le===null?re=i.TEXTURE0+Y-1:re=le);let me=fe[re];me===void 0&&(me={type:void 0,texture:void 0},fe[re]=me),(me.type!==N||me.texture!==ie)&&(le!==re&&(i.activeTexture(re),le=re),i.bindTexture(N,ie||K[N]),me.type=N,me.texture=ie)}function C(){let N=fe[le];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function se(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(N){xt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),xt.copy(N))}function De(N){Mt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Mt.copy(N))}function we(N,ie){let re=c.get(ie);re===void 0&&(re=new WeakMap,c.set(ie,re));let me=re.get(N);me===void 0&&(me=i.getUniformBlockIndex(ie,N.name),re.set(N,me))}function he(N,ie){let me=c.get(ie).get(N);l.get(ie)!==me&&(i.uniformBlockBinding(ie,me,N.__bindingPointIndex),l.set(ie,me))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},le=null,fe={},u={},d=new WeakMap,f=[],_=null,x=!1,m=null,p=null,R=null,E=null,M=null,P=null,b=null,w=new Ce(0,0,0),A=0,y=!1,v=null,L=null,U=null,k=null,G=null,xt.set(0,0,i.canvas.width,i.canvas.height),Mt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:_e,bindFramebuffer:Oe,drawBuffers:Te,useProgram:tt,setBlending:St,setMaterial:He,setFlipSided:Ne,setCullFace:ve,setLineWidth:wt,setPolygonOffset:be,setScissorTest:We,activeTexture:Gt,bindTexture:It,unbindTexture:C,compressedTexImage2D:S,compressedTexImage3D:F,texImage2D:Se,texImage3D:ne,updateUBOMapping:we,uniformBlockBinding:he,texStorage2D:se,texStorage3D:Me,texSubImage2D:q,texSubImage3D:J,compressedTexSubImage2D:W,compressedTexSubImage3D:Ee,scissor:de,viewport:De,reset:Ve}}function Px(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,S){return f?new OffscreenCanvas(C,S):sr("canvas")}function x(C,S,F){let q=1,J=It(C);if((J.width>F||J.height>F)&&(q=F/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let W=Math.floor(q*J.width),Ee=Math.floor(q*J.height);u===void 0&&(u=_(W,Ee));let se=S?_(W,Ee):u;return se.width=W,se.height=Ee,se.getContext("2d").drawImage(C,0,0,W,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+W+"x"+Ee+")."),se}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function R(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,S,F,q,J=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let W=S;if(S===i.RED&&(F===i.FLOAT&&(W=i.R32F),F===i.HALF_FLOAT&&(W=i.R16F),F===i.UNSIGNED_BYTE&&(W=i.R8)),S===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.R8UI),F===i.UNSIGNED_SHORT&&(W=i.R16UI),F===i.UNSIGNED_INT&&(W=i.R32UI),F===i.BYTE&&(W=i.R8I),F===i.SHORT&&(W=i.R16I),F===i.INT&&(W=i.R32I)),S===i.RG&&(F===i.FLOAT&&(W=i.RG32F),F===i.HALF_FLOAT&&(W=i.RG16F),F===i.UNSIGNED_BYTE&&(W=i.RG8)),S===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RG8UI),F===i.UNSIGNED_SHORT&&(W=i.RG16UI),F===i.UNSIGNED_INT&&(W=i.RG32UI),F===i.BYTE&&(W=i.RG8I),F===i.SHORT&&(W=i.RG16I),F===i.INT&&(W=i.RG32I)),S===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RGB8UI),F===i.UNSIGNED_SHORT&&(W=i.RGB16UI),F===i.UNSIGNED_INT&&(W=i.RGB32UI),F===i.BYTE&&(W=i.RGB8I),F===i.SHORT&&(W=i.RGB16I),F===i.INT&&(W=i.RGB32I)),S===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(W=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(W=i.RGBA16UI),F===i.UNSIGNED_INT&&(W=i.RGBA32UI),F===i.BYTE&&(W=i.RGBA8I),F===i.SHORT&&(W=i.RGBA16I),F===i.INT&&(W=i.RGBA32I)),S===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(W=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(W=i.R11F_G11F_B10F)),S===i.RGBA){let Ee=J?Yr:Qe.getTransfer(q);F===i.FLOAT&&(W=i.RGBA32F),F===i.HALF_FLOAT&&(W=i.RGBA16F),F===i.UNSIGNED_BYTE&&(W=Ee===dt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(W=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(W=i.RGB5_A1)}return(W===i.R16F||W===i.R32F||W===i.RG16F||W===i.RG32F||W===i.RGBA16F||W===i.RGBA32F)&&e.get("EXT_color_buffer_float"),W}function M(C,S){let F;return C?S===null||S===ns||S===br?F=i.DEPTH24_STENCIL8:S===On?F=i.DEPTH32F_STENCIL8:S===yr&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ns||S===br?F=i.DEPTH_COMPONENT24:S===On?F=i.DEPTH_COMPONENT32F:S===yr&&(F=i.DEPTH_COMPONENT16),F}function P(C,S){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Yt&&C.minFilter!==cn?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function b(C){let S=C.target;S.removeEventListener("dispose",b),A(S),S.isVideoTexture&&h.delete(S)}function w(C){let S=C.target;S.removeEventListener("dispose",w),v(S)}function A(C){let S=n.get(C);if(S.__webglInit===void 0)return;let F=C.source,q=d.get(F);if(q){let J=q[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&y(C),Object.keys(q).length===0&&d.delete(F)}n.remove(C)}function y(C){let S=n.get(C);i.deleteTexture(S.__webglTexture);let F=C.source,q=d.get(F);delete q[S.__cacheKey],a.memory.textures--}function v(C){let S=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(S.__webglFramebuffer[q]))for(let J=0;J<S.__webglFramebuffer[q].length;J++)i.deleteFramebuffer(S.__webglFramebuffer[q][J]);else i.deleteFramebuffer(S.__webglFramebuffer[q]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[q])}else{if(Array.isArray(S.__webglFramebuffer))for(let q=0;q<S.__webglFramebuffer.length;q++)i.deleteFramebuffer(S.__webglFramebuffer[q]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let q=0;q<S.__webglColorRenderbuffer.length;q++)S.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let F=C.textures;for(let q=0,J=F.length;q<J;q++){let W=n.get(F[q]);W.__webglTexture&&(i.deleteTexture(W.__webglTexture),a.memory.textures--),n.remove(F[q])}n.remove(C)}let L=0;function U(){L=0}function k(){let C=L;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),L+=1,C}function G(C){let S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function Y(C,S){let F=n.get(C);if(C.isVideoTexture&&We(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&F.__version!==C.version){let q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(F,C,S);return}}else C.isExternalTexture&&(F.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+S)}function j(C,S){let F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){K(F,C,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+S)}function te(C,S){let F=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){K(F,C,S);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+S)}function V(C,S){let F=n.get(C);if(C.version>0&&F.__version!==C.version){$(F,C,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+S)}let le={[$i]:i.REPEAT,[ei]:i.CLAMP_TO_EDGE,[nr]:i.MIRRORED_REPEAT},fe={[Yt]:i.NEAREST,[$o]:i.NEAREST_MIPMAP_NEAREST,[Is]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[xr]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},Ae={[af]:i.NEVER,[df]:i.ALWAYS,[of]:i.LESS,[mh]:i.LEQUAL,[lf]:i.EQUAL,[uf]:i.GEQUAL,[cf]:i.GREATER,[hf]:i.NOTEQUAL};function Ke(C,S){if(S.type===On&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===cn||S.magFilter===xr||S.magFilter===Is||S.magFilter===Kn||S.minFilter===cn||S.minFilter===xr||S.minFilter===Is||S.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,le[S.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,le[S.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,le[S.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,fe[S.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,fe[S.minFilter]),S.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Ae[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Yt||S.minFilter!==Is&&S.minFilter!==Kn||S.type===On&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function xt(C,S){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",b));let q=S.source,J=d.get(q);J===void 0&&(J={},d.set(q,J));let W=G(S);if(W!==C.__cacheKey){J[W]===void 0&&(J[W]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),J[W].usedTimes++;let Ee=J[C.__cacheKey];Ee!==void 0&&(J[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&y(S)),C.__cacheKey=W,C.__webglTexture=J[W].texture}return F}function Mt(C,S,F){return Math.floor(Math.floor(C/F)/S)}function ot(C,S,F,q){let W=C.updateRanges;if(W.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,F,q,S.data);else{W.sort((ne,de)=>ne.start-de.start);let Ee=0;for(let ne=1;ne<W.length;ne++){let de=W[Ee],De=W[ne],we=de.start+de.count,he=Mt(De.start,S.width,4),Ve=Mt(de.start,S.width,4);De.start<=we+1&&he===Ve&&Mt(De.start+De.count-1,S.width,4)===he?de.count=Math.max(de.count,De.start+De.count-de.start):(++Ee,W[Ee]=De)}W.length=Ee+1;let se=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),Se=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let ne=0,de=W.length;ne<de;ne++){let De=W[ne],we=Math.floor(De.start/4),he=Math.ceil(De.count/4),Ve=we%S.width,N=Math.floor(we/S.width),ie=he,re=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ve),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,Ve,N,ie,re,F,q,S.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,se),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,Se)}}function K(C,S,F){let q=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(q=i.TEXTURE_3D);let J=xt(C,S),W=S.source;t.bindTexture(q,C.__webglTexture,i.TEXTURE0+F);let Ee=n.get(W);if(W.version!==Ee.__version||J===!0){t.activeTexture(i.TEXTURE0+F);let se=Qe.getPrimaries(Qe.workingColorSpace),Me=S.colorSpace===Di?null:Qe.getPrimaries(S.colorSpace),Se=S.colorSpace===Di||se===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);let ne=x(S.image,!1,s.maxTextureSize);ne=Gt(S,ne);let de=r.convert(S.format,S.colorSpace),De=r.convert(S.type),we=E(S.internalFormat,de,De,S.colorSpace,S.isVideoTexture);Ke(q,S);let he,Ve=S.mipmaps,N=S.isVideoTexture!==!0,ie=Ee.__version===void 0||J===!0,re=W.dataReady,me=P(S,ne);if(S.isDepthTexture)we=M(S.format===Mr,S.type),ie&&(N?t.texStorage2D(i.TEXTURE_2D,1,we,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,we,ne.width,ne.height,0,de,De,null));else if(S.isDataTexture)if(Ve.length>0){N&&ie&&t.texStorage2D(i.TEXTURE_2D,me,we,Ve[0].width,Ve[0].height);for(let Q=0,Z=Ve.length;Q<Z;Q++)he=Ve[Q],N?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,de,De,he.data):t.texImage2D(i.TEXTURE_2D,Q,we,he.width,he.height,0,de,De,he.data);S.generateMipmaps=!1}else N?(ie&&t.texStorage2D(i.TEXTURE_2D,me,we,ne.width,ne.height),re&&ot(S,ne,de,De)):t.texImage2D(i.TEXTURE_2D,0,we,ne.width,ne.height,0,de,De,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){N&&ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,we,Ve[0].width,Ve[0].height,ne.depth);for(let Q=0,Z=Ve.length;Q<Z;Q++)if(he=Ve[Q],S.format!==Rn)if(de!==null)if(N){if(re)if(S.layerUpdates.size>0){let ye=Sh(he.width,he.height,S.format,S.type);for(let ke of S.layerUpdates){let yt=he.data.subarray(ke*ye/he.data.BYTES_PER_ELEMENT,(ke+1)*ye/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ke,he.width,he.height,1,de,yt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,ne.depth,de,he.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,we,he.width,he.height,ne.depth,0,he.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?re&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,he.width,he.height,ne.depth,de,De,he.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,we,he.width,he.height,ne.depth,0,de,De,he.data)}else{N&&ie&&t.texStorage2D(i.TEXTURE_2D,me,we,Ve[0].width,Ve[0].height);for(let Q=0,Z=Ve.length;Q<Z;Q++)he=Ve[Q],S.format!==Rn?de!==null?N?re&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,de,he.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,we,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,he.width,he.height,de,De,he.data):t.texImage2D(i.TEXTURE_2D,Q,we,he.width,he.height,0,de,De,he.data)}else if(S.isDataArrayTexture)if(N){if(ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,me,we,ne.width,ne.height,ne.depth),re)if(S.layerUpdates.size>0){let Q=Sh(ne.width,ne.height,S.format,S.type);for(let Z of S.layerUpdates){let ye=ne.data.subarray(Z*Q/ne.data.BYTES_PER_ELEMENT,(Z+1)*Q/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,de,De,ye)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,de,De,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,ne.width,ne.height,ne.depth,0,de,De,ne.data);else if(S.isData3DTexture)N?(ie&&t.texStorage3D(i.TEXTURE_3D,me,we,ne.width,ne.height,ne.depth),re&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,de,De,ne.data)):t.texImage3D(i.TEXTURE_3D,0,we,ne.width,ne.height,ne.depth,0,de,De,ne.data);else if(S.isFramebufferTexture){if(ie)if(N)t.texStorage2D(i.TEXTURE_2D,me,we,ne.width,ne.height);else{let Q=ne.width,Z=ne.height;for(let ye=0;ye<me;ye++)t.texImage2D(i.TEXTURE_2D,ye,we,Q,Z,0,de,De,null),Q>>=1,Z>>=1}}else if(Ve.length>0){if(N&&ie){let Q=It(Ve[0]);t.texStorage2D(i.TEXTURE_2D,me,we,Q.width,Q.height)}for(let Q=0,Z=Ve.length;Q<Z;Q++)he=Ve[Q],N?re&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,de,De,he):t.texImage2D(i.TEXTURE_2D,Q,we,de,De,he);S.generateMipmaps=!1}else if(N){if(ie){let Q=It(ne);t.texStorage2D(i.TEXTURE_2D,me,we,Q.width,Q.height)}re&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,de,De,ne)}else t.texImage2D(i.TEXTURE_2D,0,we,de,De,ne);m(S)&&p(q),Ee.__version=W.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function $(C,S,F){if(S.image.length!==6)return;let q=xt(C,S),J=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+F);let W=n.get(J);if(J.version!==W.__version||q===!0){t.activeTexture(i.TEXTURE0+F);let Ee=Qe.getPrimaries(Qe.workingColorSpace),se=S.colorSpace===Di?null:Qe.getPrimaries(S.colorSpace),Me=S.colorSpace===Di||Ee===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Se=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,de=[];for(let Z=0;Z<6;Z++)!Se&&!ne?de[Z]=x(S.image[Z],!0,s.maxCubemapSize):de[Z]=ne?S.image[Z].image:S.image[Z],de[Z]=Gt(S,de[Z]);let De=de[0],we=r.convert(S.format,S.colorSpace),he=r.convert(S.type),Ve=E(S.internalFormat,we,he,S.colorSpace),N=S.isVideoTexture!==!0,ie=W.__version===void 0||q===!0,re=J.dataReady,me=P(S,De);Ke(i.TEXTURE_CUBE_MAP,S);let Q;if(Se){N&&ie&&t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ve,De.width,De.height);for(let Z=0;Z<6;Z++){Q=de[Z].mipmaps;for(let ye=0;ye<Q.length;ye++){let ke=Q[ye];S.format!==Rn?we!==null?N?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,ke.width,ke.height,we,ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,Ve,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,0,0,ke.width,ke.height,we,he,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye,Ve,ke.width,ke.height,0,we,he,ke.data)}}}else{if(Q=S.mipmaps,N&&ie){Q.length>0&&me++;let Z=It(de[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,me,Ve,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){N?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,de[Z].width,de[Z].height,we,he,de[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,de[Z].width,de[Z].height,0,we,he,de[Z].data);for(let ye=0;ye<Q.length;ye++){let yt=Q[ye].image[Z].image;N?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,yt.width,yt.height,we,he,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,Ve,yt.width,yt.height,0,we,he,yt.data)}}else{N?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we,he,de[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,we,he,de[Z]);for(let ye=0;ye<Q.length;ye++){let ke=Q[ye];N?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,0,0,we,he,ke.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ye+1,Ve,we,he,ke.image[Z])}}}m(S)&&p(i.TEXTURE_CUBE_MAP),W.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function _e(C,S,F,q,J,W){let Ee=r.convert(F.format,F.colorSpace),se=r.convert(F.type),Me=E(F.internalFormat,Ee,se,F.colorSpace),Se=n.get(S),ne=n.get(F);if(ne.__renderTarget=S,!Se.__hasExternalTextures){let de=Math.max(1,S.width>>W),De=Math.max(1,S.height>>W);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,W,Me,de,De,S.depth,0,Ee,se,null):t.texImage2D(J,W,Me,de,De,0,Ee,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),be(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,J,ne.__webglTexture,0,wt(S)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,J,ne.__webglTexture,W),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(C,S,F){if(i.bindRenderbuffer(i.RENDERBUFFER,C),S.depthBuffer){let q=S.depthTexture,J=q&&q.isDepthTexture?q.type:null,W=M(S.stencilBuffer,J),Ee=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=wt(S);be(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,W,S.width,S.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,W,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,W,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,C)}else{let q=S.textures;for(let J=0;J<q.length;J++){let W=q[J],Ee=r.convert(W.format,W.colorSpace),se=r.convert(W.type),Me=E(W.internalFormat,Ee,se,W.colorSpace),Se=wt(S);F&&be(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Se,Me,S.width,S.height):be(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Se,Me,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Me,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Te(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let q=n.get(S.depthTexture);q.__renderTarget=S,(!q.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Y(S.depthTexture,0);let J=q.__webglTexture,W=wt(S);if(S.depthTexture.format===ir)be(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(S.depthTexture.format===Mr)be(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,W):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function tt(C){let S=n.get(C),F=C.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==C.depthTexture){let q=C.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),q){let J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=q}if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");let q=C.texture.mipmaps;q&&q.length>0?Te(S.__webglFramebuffer[0],C):Te(S.__webglFramebuffer,C)}else if(F){S.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[q]),S.__webglDepthbuffer[q]===void 0)S.__webglDepthbuffer[q]=i.createRenderbuffer(),Oe(S.__webglDepthbuffer[q],C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,W)}}else{let q=C.texture.mipmaps;if(q&&q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Oe(S.__webglDepthbuffer,C,!1);else{let J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,W=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,W),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,W)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $t(C,S,F){let q=n.get(C);S!==void 0&&_e(q.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&tt(C)}function D(C){let S=C.texture,F=n.get(C),q=n.get(S);C.addEventListener("dispose",w);let J=C.textures,W=C.isWebGLCubeRenderTarget===!0,Ee=J.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=S.version,a.memory.textures++),W){F.__webglFramebuffer=[];for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[se]=[];for(let Me=0;Me<S.mipmaps.length;Me++)F.__webglFramebuffer[se][Me]=i.createFramebuffer()}else F.__webglFramebuffer[se]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)F.__webglFramebuffer[se]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let se=0,Me=J.length;se<Me;se++){let Se=n.get(J[se]);Se.__webglTexture===void 0&&(Se.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&be(C)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){let Me=J[se];F.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[se]);let Se=r.convert(Me.format,Me.colorSpace),ne=r.convert(Me.type),de=E(Me.internalFormat,Se,ne,Me.colorSpace,C.isXRRenderTarget===!0),De=wt(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,De,de,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,F.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),Oe(F.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(W){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,S);for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)_e(F.__webglFramebuffer[se][Me],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me);else _e(F.__webglFramebuffer[se],C,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(S)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let se=0,Me=J.length;se<Me;se++){let Se=J[se],ne=n.get(Se),de=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,ne.__webglTexture),Ke(de,Se),_e(F.__webglFramebuffer,C,Se,i.COLOR_ATTACHMENT0+se,de,0),m(Se)&&p(de)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,q.__webglTexture),Ke(se,S),S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)_e(F.__webglFramebuffer[Me],C,S,i.COLOR_ATTACHMENT0,se,Me);else _e(F.__webglFramebuffer,C,S,i.COLOR_ATTACHMENT0,se,0);m(S)&&p(se),t.unbindTexture()}C.depthBuffer&&tt(C)}function St(C){let S=C.textures;for(let F=0,q=S.length;F<q;F++){let J=S[F];if(m(J)){let W=R(C),Ee=n.get(J).__webglTexture;t.bindTexture(W,Ee),p(W),t.unbindTexture()}}}let He=[],Ne=[];function ve(C){if(C.samples>0){if(be(C)===!1){let S=C.textures,F=C.width,q=C.height,J=i.COLOR_BUFFER_BIT,W=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(C),se=S.length>1;if(se)for(let Se=0;Se<S.length;Se++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer);let Me=C.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let Se=0;Se<S.length;Se++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);let ne=n.get(S[Se]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,F,q,0,0,F,q,J,i.NEAREST),l===!0&&(He.length=0,Ne.length=0,He.push(i.COLOR_ATTACHMENT0+Se),C.depthBuffer&&C.resolveDepthBuffer===!1&&(He.push(W),Ne.push(W),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let Se=0;Se<S.length;Se++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[Se]);let ne=n.get(S[Se]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Se,i.TEXTURE_2D,ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let S=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function wt(C){return Math.min(s.maxSamples,C.samples)}function be(C){let S=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function We(C){let S=a.render.frame;h.get(C)!==S&&(h.set(C,S),C.update())}function Gt(C,S){let F=C.colorSpace,q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Kt&&F!==Di&&(Qe.getTransfer(F)===dt?(q!==Rn||J!==Zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function It(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=Y,this.setTexture2DArray=j,this.setTexture3D=te,this.setTextureCube=V,this.rebindTextures=$t,this.setupRenderTarget=D,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=be}function Lx(i,e){function t(n,s=Di){let r,a=Qe.getTransfer(s);if(n===Zn)return i.UNSIGNED_BYTE;if(n===el)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ch)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ah)return i.BYTE;if(n===oh)return i.SHORT;if(n===yr)return i.UNSIGNED_SHORT;if(n===Qo)return i.INT;if(n===ns)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===vr)return i.HALF_FLOAT;if(n===hh)return i.ALPHA;if(n===uh)return i.RGB;if(n===Rn)return i.RGBA;if(n===ir)return i.DEPTH_COMPONENT;if(n===Mr)return i.DEPTH_STENCIL;if(n===nl)return i.RED;if(n===il)return i.RED_INTEGER;if(n===dh)return i.RG;if(n===sl)return i.RG_INTEGER;if(n===rl)return i.RGBA_INTEGER;if(n===Aa||n===Ra||n===Ca||n===Ia)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===al||n===ol||n===ll||n===cl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===al)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ol)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===hl||n===ul||n===dl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===hl||n===ul)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===dl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fl||n===pl||n===ml||n===gl||n===_l||n===xl||n===yl||n===vl||n===bl||n===Ml||n===Sl||n===wl||n===El||n===Tl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===pl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ml)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===gl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_l)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ml)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Al||n===Rl||n===Cl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Al)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===Pl||n===Ll||n===Dl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Il)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Dl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===br?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Dx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nx=`
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

}`,Bh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ha(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qn({vertexShader:Dx,fragmentShader:Nx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new Ss(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Oh=class extends ni{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,x=typeof XRWebGLBinding<"u",m=new Bh,p={},R=t.getContextAttributes(),E=null,M=null,P=[],b=[],w=new ce,A=null,y=new Nt;y.viewport=new it;let v=new Nt;v.viewport=new it;let L=[y,v],U=new zo,k=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let $=P[K];return $===void 0&&($=new lr,P[K]=$),$.getTargetRaySpace()},this.getControllerGrip=function(K){let $=P[K];return $===void 0&&($=new lr,P[K]=$),$.getGripSpace()},this.getHand=function(K){let $=P[K];return $===void 0&&($=new lr,P[K]=$),$.getHandSpace()};function Y(K){let $=b.indexOf(K.inputSource);if($===-1)return;let _e=P[$];_e!==void 0&&(_e.update(K.inputSource,K.frame,c||a),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function j(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",te);for(let K=0;K<P.length;K++){let $=b[K];$!==null&&(b[K]=null,P[K].disconnect($))}k=null,G=null,m.reset();for(let K in p)delete p[K];e.setRenderTarget(E),f=null,d=null,u=null,s=null,M=null,ot.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",j),s.addEventListener("inputsourceschange",te),R.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Oe=null,Te=null;R.depth&&(Te=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=R.stencil?Mr:ir,Oe=R.stencil?br:ns);let tt={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(tt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new ii(d.textureWidth,d.textureHeight,{format:Rn,type:Zn,depthTexture:new ca(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let _e={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ii(f.framebufferWidth,f.framebufferHeight,{format:Rn,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ot.setContext(s),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(K){for(let $=0;$<K.removed.length;$++){let _e=K.removed[$],Oe=b.indexOf(_e);Oe>=0&&(b[Oe]=null,P[Oe].disconnect(_e))}for(let $=0;$<K.added.length;$++){let _e=K.added[$],Oe=b.indexOf(_e);if(Oe===-1){for(let tt=0;tt<P.length;tt++)if(tt>=b.length){b.push(_e),Oe=tt;break}else if(b[tt]===null){b[tt]=_e,Oe=tt;break}if(Oe===-1)break}let Te=P[Oe];Te&&Te.connect(_e)}}let V=new I,le=new I;function fe(K,$,_e){V.setFromMatrixPosition($.matrixWorld),le.setFromMatrixPosition(_e.matrixWorld);let Oe=V.distanceTo(le),Te=$.projectionMatrix.elements,tt=_e.projectionMatrix.elements,$t=Te[14]/(Te[10]-1),D=Te[14]/(Te[10]+1),St=(Te[9]+1)/Te[5],He=(Te[9]-1)/Te[5],Ne=(Te[8]-1)/Te[0],ve=(tt[8]+1)/tt[0],wt=$t*Ne,be=$t*ve,We=Oe/(-Ne+ve),Gt=We*-Ne;if($.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Gt),K.translateZ(We),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Te[10]===-1)K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let It=$t+We,C=D+We,S=wt-Gt,F=be+(Oe-Gt),q=St*D/C*It,J=He*D/C*It;K.projectionMatrix.makePerspective(S,F,q,J,It,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Ae(K,$){$===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices($.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let $=K.near,_e=K.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(_e=m.depthFar)),U.near=v.near=y.near=$,U.far=v.far=y.far=_e,(k!==U.near||G!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,G=U.far),U.layers.mask=K.layers.mask|6,y.layers.mask=U.layers.mask&3,v.layers.mask=U.layers.mask&5;let Oe=K.parent,Te=U.cameras;Ae(U,Oe);for(let tt=0;tt<Te.length;tt++)Ae(Te[tt],Oe);Te.length===2?fe(U,y,v):U.projectionMatrix.copy(y.projectionMatrix),Ke(K,U,Oe)};function Ke(K,$,_e){_e===null?K.matrix.copy($.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply($.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy($.projectionMatrix),K.projectionMatrixInverse.copy($.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=bs*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(K){return p[K]};let xt=null;function Mt(K,$){if(h=$.getViewerPose(c||a),_=$,h!==null){let _e=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Oe=!1;_e.length!==U.cameras.length&&(U.cameras.length=0,Oe=!0);for(let D=0;D<_e.length;D++){let St=_e[D],He=null;if(f!==null)He=f.getViewport(St);else{let ve=u.getViewSubImage(d,St);He=ve.viewport,D===0&&(e.setRenderTargetTextures(M,ve.colorTexture,ve.depthStencilTexture),e.setRenderTarget(M))}let Ne=L[D];Ne===void 0&&(Ne=new Nt,Ne.layers.enable(D),Ne.viewport=new it,L[D]=Ne),Ne.matrix.fromArray(St.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(St.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(He.x,He.y,He.width,He.height),D===0&&(U.matrix.copy(Ne.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Oe===!0&&U.cameras.push(Ne)}let Te=s.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let D=u.getDepthInformation(_e[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Te&&Te.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<_e.length;D++){let St=_e[D].camera;if(St){let He=p[St];He||(He=new ha,p[St]=He);let Ne=u.getCameraImage(St);He.sourceTexture=Ne}}}}for(let _e=0;_e<P.length;_e++){let Oe=b[_e],Te=P[_e];Oe!==null&&Te!==void 0&&Te.update(Oe,$,c||a)}xt&&xt(K,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),_=null}let ot=new Gf;ot.setAnimationLoop(Mt),this.setAnimationLoop=function(K){xt=K},this.dispose=function(){}}},Ns=new Xn,Ux=new ze;function Bx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,yh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,R,E,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,R,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let R=e.get(p),E=R.envMap,M=R.envMapRotation;E&&(m.envMap.value=E,Ns.copy(M),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),m.envMapRotation.value.setFromMatrix4(Ux.makeRotationFromEuler(Ns)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,R,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*R,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,R){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let R=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ox(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,E){let M=E.program;n.uniformBlockBinding(R,M)}function c(R,E){let M=s[R.id];M===void 0&&(_(R),M=h(R),s[R.id]=M,R.addEventListener("dispose",m));let P=E.program;n.updateUBOMapping(R,P);let b=e.render.frame;r[R.id]!==b&&(d(R),r[R.id]=b)}function h(R){let E=u();R.__bindingPointIndex=E;let M=i.createBuffer(),P=R.__size,b=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,M),M}function u(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(R){let E=s[R.id],M=R.uniforms,P=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let b=0,w=M.length;b<w;b++){let A=Array.isArray(M[b])?M[b]:[M[b]];for(let y=0,v=A.length;y<v;y++){let L=A[y];if(f(L,b,y,P)===!0){let U=L.__offset,k=Array.isArray(L.value)?L.value:[L.value],G=0;for(let Y=0;Y<k.length;Y++){let j=k[Y],te=x(j);typeof j=="number"||typeof j=="boolean"?(L.__data[0]=j,i.bufferSubData(i.UNIFORM_BUFFER,U+G,L.__data)):j.isMatrix3?(L.__data[0]=j.elements[0],L.__data[1]=j.elements[1],L.__data[2]=j.elements[2],L.__data[3]=0,L.__data[4]=j.elements[3],L.__data[5]=j.elements[4],L.__data[6]=j.elements[5],L.__data[7]=0,L.__data[8]=j.elements[6],L.__data[9]=j.elements[7],L.__data[10]=j.elements[8],L.__data[11]=0):(j.toArray(L.__data,G),G+=te.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(R,E,M,P){let b=R.value,w=E+"_"+M;if(P[w]===void 0)return typeof b=="number"||typeof b=="boolean"?P[w]=b:P[w]=b.clone(),!0;{let A=P[w];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return P[w]=b,!0}else if(A.equals(b)===!1)return A.copy(b),!0}return!1}function _(R){let E=R.uniforms,M=0,P=16;for(let w=0,A=E.length;w<A;w++){let y=Array.isArray(E[w])?E[w]:[E[w]];for(let v=0,L=y.length;v<L;v++){let U=y[v],k=Array.isArray(U.value)?U.value:[U.value];for(let G=0,Y=k.length;G<Y;G++){let j=k[G],te=x(j),V=M%P,le=V%te.boundary,fe=V+le;M+=le,fe!==0&&P-fe<te.storage&&(M+=P-fe),U.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=te.storage}}}let b=M%P;return b>0&&(M+=P-b),R.__size=M,R.__cache={},this}function x(R){let E={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(E.boundary=4,E.storage=4):R.isVector2?(E.boundary=8,E.storage=8):R.isVector3||R.isColor?(E.boundary=16,E.storage=12):R.isVector4?(E.boundary=16,E.storage=16):R.isMatrix3?(E.boundary=48,E.storage=48):R.isMatrix4?(E.boundary=64,E.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),E}function m(R){let E=R.target;E.removeEventListener("dispose",m);let M=a.indexOf(E.__bindingPointIndex);a.splice(M,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Fl=class{constructor(e={}){let{canvas:t=ff(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let _=new Uint32Array(4),x=new Int32Array(4),m=null,p=null,R=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let M=this,P=!1;this._outputColorSpace=Pt;let b=0,w=0,A=null,y=-1,v=null,L=new it,U=new it,k=null,G=new Ce(0),Y=0,j=t.width,te=t.height,V=1,le=null,fe=null,Ae=new it(0,0,j,te),Ke=new it(0,0,j,te),xt=!1,Mt=new dr,ot=!1,K=!1,$=new ze,_e=new I,Oe=new it,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},tt=!1;function $t(){return A===null?V:1}let D=n;function St(T,B){return t.getContext(T,B)}try{let T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",Q,!1),D===null){let B="webgl2";if(D=St(B,T),D===null)throw St(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let He,Ne,ve,wt,be,We,Gt,It,C,S,F,q,J,W,Ee,se,Me,Se,ne,de,De,we,he,Ve;function N(){He=new t1(D),He.init(),we=new Lx(D,He),Ne=new Y_(D,He,e,we),ve=new Ix(D,He),Ne.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),wt=new s1(D),be=new _x,We=new Px(D,He,ve,be,Ne,we,wt),Gt=new Z_(M),It=new e1(M),C=new hm(D),he=new X_(D,C),S=new n1(D,C,wt,he),F=new a1(D,S,C,wt),ne=new r1(D,Ne,We),se=new K_(be),q=new gx(M,Gt,It,He,Ne,he,se),J=new Bx(M,be),W=new yx,Ee=new Ex(He),Se=new W_(M,Gt,It,ve,F,f,l),Me=new Rx(M,F,Ne),Ve=new Ox(D,wt,Ne,ve),de=new q_(D,He,wt),De=new i1(D,He,wt),wt.programs=q.programs,M.capabilities=Ne,M.extensions=He,M.properties=be,M.renderLists=W,M.shadowMap=Me,M.state=ve,M.info=wt}N();let ie=new Oh(M,D);this.xr=ie,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let T=He.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=He.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(T){T!==void 0&&(V=T,this.setSize(j,te,!1))},this.getSize=function(T){return T.set(j,te)},this.setSize=function(T,B,z=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,te=B,t.width=Math.floor(T*V),t.height=Math.floor(B*V),z===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(j*V,te*V).floor()},this.setDrawingBufferSize=function(T,B,z){j=T,te=B,V=z,t.width=Math.floor(T*z),t.height=Math.floor(B*z),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(Ae)},this.setViewport=function(T,B,z,H){T.isVector4?Ae.set(T.x,T.y,T.z,T.w):Ae.set(T,B,z,H),ve.viewport(L.copy(Ae).multiplyScalar(V).round())},this.getScissor=function(T){return T.copy(Ke)},this.setScissor=function(T,B,z,H){T.isVector4?Ke.set(T.x,T.y,T.z,T.w):Ke.set(T,B,z,H),ve.scissor(U.copy(Ke).multiplyScalar(V).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(T){ve.setScissorTest(xt=T)},this.setOpaqueSort=function(T){le=T},this.setTransparentSort=function(T){fe=T},this.getClearColor=function(T){return T.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(T=!0,B=!0,z=!0){let H=0;if(T){let O=!1;if(A!==null){let ee=A.texture.format;O=ee===rl||ee===sl||ee===il}if(O){let ee=A.texture.type,ue=ee===Zn||ee===ns||ee===yr||ee===br||ee===el||ee===tl,xe=Se.getClearColor(),pe=Se.getClearAlpha(),Le=xe.r,Ue=xe.g,Re=xe.b;ue?(_[0]=Le,_[1]=Ue,_[2]=Re,_[3]=pe,D.clearBufferuiv(D.COLOR,0,_)):(x[0]=Le,x[1]=Ue,x[2]=Re,x[3]=pe,D.clearBufferiv(D.COLOR,0,x))}else H|=D.COLOR_BUFFER_BIT}B&&(H|=D.DEPTH_BUFFER_BIT),z&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Se.dispose(),W.dispose(),Ee.dispose(),be.dispose(),Gt.dispose(),It.dispose(),F.dispose(),he.dispose(),Ve.dispose(),q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Qn),ie.removeEventListener("sessionend",Uu),hs.stop()};function re(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function me(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let T=wt.autoReset,B=Me.enabled,z=Me.autoUpdate,H=Me.needsUpdate,O=Me.type;N(),wt.autoReset=T,Me.enabled=B,Me.autoUpdate=z,Me.needsUpdate=H,Me.type=O}function Q(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Z(T){let B=T.target;B.removeEventListener("dispose",Z),ye(B)}function ye(T){ke(T),be.remove(T)}function ke(T){let B=be.get(T).programs;B!==void 0&&(B.forEach(function(z){q.releaseProgram(z)}),T.isShaderMaterial&&q.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,z,H,O,ee){B===null&&(B=Te);let ue=O.isMesh&&O.matrixWorld.determinant()<0,xe=Yp(T,B,z,H,O);ve.setMaterial(H,ue);let pe=z.index,Le=1;if(H.wireframe===!0){if(pe=S.getWireframeAttribute(z),pe===void 0)return;Le=2}let Ue=z.drawRange,Re=z.attributes.position,$e=Ue.start*Le,ft=(Ue.start+Ue.count)*Le;ee!==null&&($e=Math.max($e,ee.start*Le),ft=Math.min(ft,(ee.start+ee.count)*Le)),pe!==null?($e=Math.max($e,0),ft=Math.min(ft,pe.count)):Re!=null&&($e=Math.max($e,0),ft=Math.min(ft,Re.count));let Ct=ft-$e;if(Ct<0||Ct===1/0)return;he.setup(O,H,xe,z,pe);let vt,gt=de;if(pe!==null&&(vt=C.get(pe),gt=De,gt.setIndex(vt)),O.isMesh)H.wireframe===!0?(ve.setLineWidth(H.wireframeLinewidth*$t()),gt.setMode(D.LINES)):gt.setMode(D.TRIANGLES);else if(O.isLine){let Pe=H.linewidth;Pe===void 0&&(Pe=1),ve.setLineWidth(Pe*$t()),O.isLineSegments?gt.setMode(D.LINES):O.isLineLoop?gt.setMode(D.LINE_LOOP):gt.setMode(D.LINE_STRIP)}else O.isPoints?gt.setMode(D.POINTS):O.isSprite&&gt.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)rr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),gt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))gt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Pe=O._multiDrawStarts,At=O._multiDrawCounts,nt=O._multiDrawCount,Mn=pe?C.get(pe).bytesPerElement:1,zs=be.get(H).currentProgram.getUniforms();for(let Sn=0;Sn<nt;Sn++)zs.setValue(D,"_gl_DrawID",Sn),gt.render(Pe[Sn]/Mn,At[Sn])}else if(O.isInstancedMesh)gt.renderInstances($e,Ct,O.count);else if(z.isInstancedBufferGeometry){let Pe=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,At=Math.min(z.instanceCount,Pe);gt.renderInstances($e,Ct,At)}else gt.render($e,Ct)};function yt(T,B,z){T.transparent===!0&&T.side===jt&&T.forceSinglePass===!1?(T.side=fn,T.needsUpdate=!0,Ha(T,B,z),T.side=Tn,T.needsUpdate=!0,Ha(T,B,z),T.side=jt):Ha(T,B,z)}this.compile=function(T,B,z=null){z===null&&(z=T),p=Ee.get(z),p.init(B),E.push(p),z.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),T!==z&&T.traverseVisible(function(O){O.isLight&&O.layers.test(B.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();let H=new Set;return T.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ee=O.material;if(ee)if(Array.isArray(ee))for(let ue=0;ue<ee.length;ue++){let xe=ee[ue];yt(xe,z,O),H.add(xe)}else yt(ee,z,O),H.add(ee)}),p=E.pop(),H},this.compileAsync=function(T,B,z=null){let H=this.compile(T,B,z);return new Promise(O=>{function ee(){if(H.forEach(function(ue){be.get(ue).currentProgram.isReady()&&H.delete(ue)}),H.size===0){O(T);return}setTimeout(ee,10)}He.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let lt=null;function xi(T){lt&&lt(T)}function Qn(){hs.stop()}function Uu(){hs.start()}let hs=new Gf;hs.setAnimationLoop(xi),typeof self<"u"&&hs.setContext(self),this.setAnimationLoop=function(T){lt=T,ie.setAnimationLoop(T),T===null?hs.stop():hs.start()},ie.addEventListener("sessionstart",Qn),ie.addEventListener("sessionend",Uu),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(B),B=ie.getCamera()),T.isScene===!0&&T.onBeforeRender(M,T,B,A),p=Ee.get(T,E.length),p.init(B),E.push(p),$.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Mt.setFromProjectionMatrix($,jn,B.reversedDepth),K=this.localClippingEnabled,ot=se.init(this.clippingPlanes,K),m=W.get(T,R.length),m.init(),R.push(m),ie.enabled===!0&&ie.isPresenting===!0){let ee=M.xr.getDepthSensingMesh();ee!==null&&cc(ee,B,-1/0,M.sortObjects)}cc(T,B,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(le,fe),tt=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,tt&&Se.addToRenderList(m,T),this.info.render.frame++,ot===!0&&se.beginShadows();let z=p.state.shadowsArray;Me.render(z,T,B),ot===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,O=m.transmissive;if(p.setupLights(),B.isArrayCamera){let ee=B.cameras;if(O.length>0)for(let ue=0,xe=ee.length;ue<xe;ue++){let pe=ee[ue];Ou(H,O,T,pe)}tt&&Se.render(T);for(let ue=0,xe=ee.length;ue<xe;ue++){let pe=ee[ue];Bu(m,T,pe,pe.viewport)}}else O.length>0&&Ou(H,O,T,B),tt&&Se.render(T),Bu(m,T,B);A!==null&&w===0&&(We.updateMultisampleRenderTarget(A),We.updateRenderTargetMipmap(A)),T.isScene===!0&&T.onAfterRender(M,T,B),he.resetDefaultState(),y=-1,v=null,E.pop(),E.length>0?(p=E[E.length-1],ot===!0&&se.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function cc(T,B,z,H){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)z=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Mt.intersectsSprite(T)){H&&Oe.setFromMatrixPosition(T.matrixWorld).applyMatrix4($);let ue=F.update(T),xe=T.material;xe.visible&&m.push(T,ue,xe,z,Oe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Mt.intersectsObject(T))){let ue=F.update(T),xe=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Oe.copy(T.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Oe.copy(ue.boundingSphere.center)),Oe.applyMatrix4(T.matrixWorld).applyMatrix4($)),Array.isArray(xe)){let pe=ue.groups;for(let Le=0,Ue=pe.length;Le<Ue;Le++){let Re=pe[Le],$e=xe[Re.materialIndex];$e&&$e.visible&&m.push(T,ue,$e,z,Oe.z,Re)}}else xe.visible&&m.push(T,ue,xe,z,Oe.z,null)}}let ee=T.children;for(let ue=0,xe=ee.length;ue<xe;ue++)cc(ee[ue],B,z,H)}function Bu(T,B,z,H){let O=T.opaque,ee=T.transmissive,ue=T.transparent;p.setupLightsView(z),ot===!0&&se.setGlobalState(M.clippingPlanes,z),H&&ve.viewport(L.copy(H)),O.length>0&&za(O,B,z),ee.length>0&&za(ee,B,z),ue.length>0&&za(ue,B,z),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Ou(T,B,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new ii(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?vr:Zn,minFilter:Kn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace}));let ee=p.state.transmissionRenderTarget[H.id],ue=H.viewport||L;ee.setSize(ue.z*M.transmissionResolutionScale,ue.w*M.transmissionResolutionScale);let xe=M.getRenderTarget(),pe=M.getActiveCubeFace(),Le=M.getActiveMipmapLevel();M.setRenderTarget(ee),M.getClearColor(G),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),tt&&Se.render(z);let Ue=M.toneMapping;M.toneMapping=Li;let Re=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),ot===!0&&se.setGlobalState(M.clippingPlanes,H),za(T,z,H),We.updateMultisampleRenderTarget(ee),We.updateRenderTargetMipmap(ee),He.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let ft=0,Ct=B.length;ft<Ct;ft++){let vt=B[ft],gt=vt.object,Pe=vt.geometry,At=vt.material,nt=vt.group;if(At.side===jt&&gt.layers.test(H.layers)){let Mn=At.side;At.side=fn,At.needsUpdate=!0,Fu(gt,z,H,Pe,At,nt),At.side=Mn,At.needsUpdate=!0,$e=!0}}$e===!0&&(We.updateMultisampleRenderTarget(ee),We.updateRenderTargetMipmap(ee))}M.setRenderTarget(xe,pe,Le),M.setClearColor(G,Y),Re!==void 0&&(H.viewport=Re),M.toneMapping=Ue}function za(T,B,z){let H=B.isScene===!0?B.overrideMaterial:null;for(let O=0,ee=T.length;O<ee;O++){let ue=T[O],xe=ue.object,pe=ue.geometry,Le=ue.group,Ue=ue.material;Ue.allowOverride===!0&&H!==null&&(Ue=H),xe.layers.test(z.layers)&&Fu(xe,B,z,pe,Ue,Le)}}function Fu(T,B,z,H,O,ee){T.onBeforeRender(M,B,z,H,O,ee),T.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),O.onBeforeRender(M,B,z,H,T,ee),O.transparent===!0&&O.side===jt&&O.forceSinglePass===!1?(O.side=fn,O.needsUpdate=!0,M.renderBufferDirect(z,B,H,O,T,ee),O.side=Tn,O.needsUpdate=!0,M.renderBufferDirect(z,B,H,O,T,ee),O.side=jt):M.renderBufferDirect(z,B,H,O,T,ee),T.onAfterRender(M,B,z,H,O,ee)}function Ha(T,B,z){B.isScene!==!0&&(B=Te);let H=be.get(T),O=p.state.lights,ee=p.state.shadowsArray,ue=O.state.version,xe=q.getParameters(T,O.state,ee,B,z),pe=q.getProgramCacheKey(xe),Le=H.programs;H.environment=T.isMeshStandardMaterial?B.environment:null,H.fog=B.fog,H.envMap=(T.isMeshStandardMaterial?It:Gt).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?B.environmentRotation:T.envMapRotation,Le===void 0&&(T.addEventListener("dispose",Z),Le=new Map,H.programs=Le);let Ue=Le.get(pe);if(Ue!==void 0){if(H.currentProgram===Ue&&H.lightsStateVersion===ue)return zu(T,xe),Ue}else xe.uniforms=q.getUniforms(T),T.onBeforeCompile(xe,M),Ue=q.acquireProgram(xe,pe),Le.set(pe,Ue),H.uniforms=xe.uniforms;let Re=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Re.clippingPlanes=se.uniform),zu(T,xe),H.needsLights=Zp(T),H.lightsStateVersion=ue,H.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.directionalShadowMap.value=O.state.directionalShadowMap,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotShadowMap.value=O.state.spotShadowMap,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMap.value=O.state.pointShadowMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Ue,H.uniformsList=null,Ue}function ku(T){if(T.uniformsList===null){let B=T.currentProgram.getUniforms();T.uniformsList=Tr.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function zu(T,B){let z=be.get(T);z.outputColorSpace=B.outputColorSpace,z.batching=B.batching,z.batchingColor=B.batchingColor,z.instancing=B.instancing,z.instancingColor=B.instancingColor,z.instancingMorph=B.instancingMorph,z.skinning=B.skinning,z.morphTargets=B.morphTargets,z.morphNormals=B.morphNormals,z.morphColors=B.morphColors,z.morphTargetsCount=B.morphTargetsCount,z.numClippingPlanes=B.numClippingPlanes,z.numIntersection=B.numClipIntersection,z.vertexAlphas=B.vertexAlphas,z.vertexTangents=B.vertexTangents,z.toneMapping=B.toneMapping}function Yp(T,B,z,H,O){B.isScene!==!0&&(B=Te),We.resetTextureUnits();let ee=B.fog,ue=H.isMeshStandardMaterial?B.environment:null,xe=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Kt,pe=(H.isMeshStandardMaterial?It:Gt).get(H.envMap||ue),Le=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ue=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Re=!!z.morphAttributes.position,$e=!!z.morphAttributes.normal,ft=!!z.morphAttributes.color,Ct=Li;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ct=M.toneMapping);let vt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,gt=vt!==void 0?vt.length:0,Pe=be.get(H),At=p.state.lights;if(ot===!0&&(K===!0||T!==v)){let on=T===v&&H.id===y;se.setState(H,T,on)}let nt=!1;H.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==At.state.version||Pe.outputColorSpace!==xe||O.isBatchedMesh&&Pe.batching===!1||!O.isBatchedMesh&&Pe.batching===!0||O.isBatchedMesh&&Pe.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Pe.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Pe.instancing===!1||!O.isInstancedMesh&&Pe.instancing===!0||O.isSkinnedMesh&&Pe.skinning===!1||!O.isSkinnedMesh&&Pe.skinning===!0||O.isInstancedMesh&&Pe.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Pe.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Pe.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Pe.instancingMorph===!1&&O.morphTexture!==null||Pe.envMap!==pe||H.fog===!0&&Pe.fog!==ee||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==se.numPlanes||Pe.numIntersection!==se.numIntersection)||Pe.vertexAlphas!==Le||Pe.vertexTangents!==Ue||Pe.morphTargets!==Re||Pe.morphNormals!==$e||Pe.morphColors!==ft||Pe.toneMapping!==Ct||Pe.morphTargetsCount!==gt)&&(nt=!0):(nt=!0,Pe.__version=H.version);let Mn=Pe.currentProgram;nt===!0&&(Mn=Ha(H,B,O));let zs=!1,Sn=!1,Ur=!1,Rt=Mn.getUniforms(),Pn=Pe.uniforms;if(ve.useProgram(Mn.program)&&(zs=!0,Sn=!0,Ur=!0),H.id!==y&&(y=H.id,Sn=!0),zs||v!==T){ve.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Rt.setValue(D,"projectionMatrix",T.projectionMatrix),Rt.setValue(D,"viewMatrix",T.matrixWorldInverse);let pn=Rt.map.cameraPosition;pn!==void 0&&pn.setValue(D,_e.setFromMatrixPosition(T.matrixWorld)),Ne.logarithmicDepthBuffer&&Rt.setValue(D,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Rt.setValue(D,"isOrthographic",T.isOrthographicCamera===!0),v!==T&&(v=T,Sn=!0,Ur=!0)}if(O.isSkinnedMesh){Rt.setOptional(D,O,"bindMatrix"),Rt.setOptional(D,O,"bindMatrixInverse");let on=O.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Rt.setValue(D,"boneTexture",on.boneTexture,We))}O.isBatchedMesh&&(Rt.setOptional(D,O,"batchingTexture"),Rt.setValue(D,"batchingTexture",O._matricesTexture,We),Rt.setOptional(D,O,"batchingIdTexture"),Rt.setValue(D,"batchingIdTexture",O._indirectTexture,We),Rt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Rt.setValue(D,"batchingColorTexture",O._colorsTexture,We));let Ln=z.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&ne.update(O,z,Mn),(Sn||Pe.receiveShadow!==O.receiveShadow)&&(Pe.receiveShadow=O.receiveShadow,Rt.setValue(D,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Pn.envMap.value=pe,Pn.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&B.environment!==null&&(Pn.envMapIntensity.value=B.environmentIntensity),Sn&&(Rt.setValue(D,"toneMappingExposure",M.toneMappingExposure),Pe.needsLights&&Kp(Pn,Ur),ee&&H.fog===!0&&J.refreshFogUniforms(Pn,ee),J.refreshMaterialUniforms(Pn,H,V,te,p.state.transmissionRenderTarget[T.id]),Tr.upload(D,ku(Pe),Pn,We)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Tr.upload(D,ku(Pe),Pn,We),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Rt.setValue(D,"center",O.center),Rt.setValue(D,"modelViewMatrix",O.modelViewMatrix),Rt.setValue(D,"normalMatrix",O.normalMatrix),Rt.setValue(D,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let on=H.uniformsGroups;for(let pn=0,hc=on.length;pn<hc;pn++){let us=on[pn];Ve.update(us,Mn),Ve.bind(us,Mn)}}return Mn}function Kp(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Zp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(T,B,z){let H=be.get(T);H.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),be.get(T.texture).__webglTexture=B,be.get(T.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,B){let z=be.get(T);z.__webglFramebuffer=B,z.__useDefaultFramebuffer=B===void 0};let Jp=D.createFramebuffer();this.setRenderTarget=function(T,B=0,z=0){A=T,b=B,w=z;let H=!0,O=null,ee=!1,ue=!1;if(T){let pe=be.get(T);if(pe.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(D.FRAMEBUFFER,null),H=!1;else if(pe.__webglFramebuffer===void 0)We.setupRenderTarget(T);else if(pe.__hasExternalTextures)We.rebindTextures(T,be.get(T.texture).__webglTexture,be.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Re=T.depthTexture;if(pe.__boundDepthTexture!==Re){if(Re!==null&&be.has(Re)&&(T.width!==Re.image.width||T.height!==Re.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");We.setupDepthRenderbuffer(T)}}let Le=T.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(ue=!0);let Ue=be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ue[B])?O=Ue[B][z]:O=Ue[B],ee=!0):T.samples>0&&We.useMultisampledRTT(T)===!1?O=be.get(T).__webglMultisampledFramebuffer:Array.isArray(Ue)?O=Ue[z]:O=Ue,L.copy(T.viewport),U.copy(T.scissor),k=T.scissorTest}else L.copy(Ae).multiplyScalar(V).floor(),U.copy(Ke).multiplyScalar(V).floor(),k=xt;if(z!==0&&(O=Jp),ve.bindFramebuffer(D.FRAMEBUFFER,O)&&H&&ve.drawBuffers(T,O),ve.viewport(L),ve.scissor(U),ve.setScissorTest(k),ee){let pe=be.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+B,pe.__webglTexture,z)}else if(ue){let pe=B;for(let Le=0;Le<T.textures.length;Le++){let Ue=be.get(T.textures[Le]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Le,Ue.__webglTexture,z,pe)}}else if(T!==null&&z!==0){let pe=be.get(T.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pe.__webglTexture,z)}y=-1},this.readRenderTargetPixels=function(T,B,z,H,O,ee,ue,xe=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe){ve.bindFramebuffer(D.FRAMEBUFFER,pe);try{let Le=T.textures[xe],Ue=Le.format,Re=Le.type;if(!Ne.textureFormatReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-H&&z>=0&&z<=T.height-O&&(T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+xe),D.readPixels(B,z,H,O,we.convert(Ue),we.convert(Re),ee))}finally{let Le=A!==null?be.get(A).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,B,z,H,O,ee,ue,xe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ue!==void 0&&(pe=pe[ue]),pe)if(B>=0&&B<=T.width-H&&z>=0&&z<=T.height-O){ve.bindFramebuffer(D.FRAMEBUFFER,pe);let Le=T.textures[xe],Ue=Le.format,Re=Le.type;if(!Ne.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let $e=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,$e),D.bufferData(D.PIXEL_PACK_BUFFER,ee.byteLength,D.STREAM_READ),T.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+xe),D.readPixels(B,z,H,O,we.convert(Ue),we.convert(Re),0);let ft=A!==null?be.get(A).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,ft);let Ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await pf(D,Ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,$e),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ee),D.deleteBuffer($e),D.deleteSync(Ct),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,B=null,z=0){let H=Math.pow(2,-z),O=Math.floor(T.image.width*H),ee=Math.floor(T.image.height*H),ue=B!==null?B.x:0,xe=B!==null?B.y:0;We.setTexture2D(T,0),D.copyTexSubImage2D(D.TEXTURE_2D,z,0,0,ue,xe,O,ee),ve.unbindTexture()};let $p=D.createFramebuffer(),Qp=D.createFramebuffer();this.copyTextureToTexture=function(T,B,z=null,H=null,O=0,ee=null){ee===null&&(O!==0?(rr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ee=O,O=0):ee=0);let ue,xe,pe,Le,Ue,Re,$e,ft,Ct,vt=T.isCompressedTexture?T.mipmaps[ee]:T.image;if(z!==null)ue=z.max.x-z.min.x,xe=z.max.y-z.min.y,pe=z.isBox3?z.max.z-z.min.z:1,Le=z.min.x,Ue=z.min.y,Re=z.isBox3?z.min.z:0;else{let Ln=Math.pow(2,-O);ue=Math.floor(vt.width*Ln),xe=Math.floor(vt.height*Ln),T.isDataArrayTexture?pe=vt.depth:T.isData3DTexture?pe=Math.floor(vt.depth*Ln):pe=1,Le=0,Ue=0,Re=0}H!==null?($e=H.x,ft=H.y,Ct=H.z):($e=0,ft=0,Ct=0);let gt=we.convert(B.format),Pe=we.convert(B.type),At;B.isData3DTexture?(We.setTexture3D(B,0),At=D.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(We.setTexture2DArray(B,0),At=D.TEXTURE_2D_ARRAY):(We.setTexture2D(B,0),At=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,B.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,B.unpackAlignment);let nt=D.getParameter(D.UNPACK_ROW_LENGTH),Mn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),zs=D.getParameter(D.UNPACK_SKIP_PIXELS),Sn=D.getParameter(D.UNPACK_SKIP_ROWS),Ur=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,vt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,vt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ue),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re);let Rt=T.isDataArrayTexture||T.isData3DTexture,Pn=B.isDataArrayTexture||B.isData3DTexture;if(T.isDepthTexture){let Ln=be.get(T),on=be.get(B),pn=be.get(Ln.__renderTarget),hc=be.get(on.__renderTarget);ve.bindFramebuffer(D.READ_FRAMEBUFFER,pn.__webglFramebuffer),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,hc.__webglFramebuffer);for(let us=0;us<pe;us++)Rt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(T).__webglTexture,O,Re+us),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.get(B).__webglTexture,ee,Ct+us)),D.blitFramebuffer(Le,Ue,ue,xe,$e,ft,ue,xe,D.DEPTH_BUFFER_BIT,D.NEAREST);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(O!==0||T.isRenderTargetTexture||be.has(T)){let Ln=be.get(T),on=be.get(B);ve.bindFramebuffer(D.READ_FRAMEBUFFER,$p),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,Qp);for(let pn=0;pn<pe;pn++)Rt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ln.__webglTexture,O,Re+pn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ln.__webglTexture,O),Pn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,on.__webglTexture,ee,Ct+pn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,on.__webglTexture,ee),O!==0?D.blitFramebuffer(Le,Ue,ue,xe,$e,ft,ue,xe,D.COLOR_BUFFER_BIT,D.NEAREST):Pn?D.copyTexSubImage3D(At,ee,$e,ft,Ct+pn,Le,Ue,ue,xe):D.copyTexSubImage2D(At,ee,$e,ft,Le,Ue,ue,xe);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Pn?T.isDataTexture||T.isData3DTexture?D.texSubImage3D(At,ee,$e,ft,Ct,ue,xe,pe,gt,Pe,vt.data):B.isCompressedArrayTexture?D.compressedTexSubImage3D(At,ee,$e,ft,Ct,ue,xe,pe,gt,vt.data):D.texSubImage3D(At,ee,$e,ft,Ct,ue,xe,pe,gt,Pe,vt):T.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ee,$e,ft,ue,xe,gt,Pe,vt.data):T.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ee,$e,ft,vt.width,vt.height,gt,vt.data):D.texSubImage2D(D.TEXTURE_2D,ee,$e,ft,ue,xe,gt,Pe,vt);D.pixelStorei(D.UNPACK_ROW_LENGTH,nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,zs),D.pixelStorei(D.UNPACK_SKIP_ROWS,Sn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ur),ee===0&&B.generateMipmaps&&D.generateMipmap(At),ve.unbindTexture()},this.initRenderTarget=function(T){be.get(T).__webglFramebuffer===void 0&&We.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?We.setTextureCube(T,0):T.isData3DTexture?We.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?We.setTexture2DArray(T,0):We.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){b=0,w=0,A=null,ve.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Qe._getUnpackColorSpace()}};var qf={type:"change"},Hh={type:"start"},Kf={type:"end"},zl=new si,Yf=new mn,Fx=Math.cos(70*Ps.DEG2RAD),zt=new I,vn=2*Math.PI,pt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zh=1e-6,Hl=class extends Ea{constructor(e,t=null){super(e,t),this.state=pt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Bn.ROTATE,MIDDLE:Bn.DOLLY,RIGHT:Bn.PAN},this.touches={ONE:Yn.ROTATE,TWO:Yn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new hn,this._lastTargetPosition=new I,this._quat=new hn().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new _r,this._sphericalDelta=new _r,this._scale=1,this._panOffset=new I,this._rotateStart=new ce,this._rotateEnd=new ce,this._rotateDelta=new ce,this._panStart=new ce,this._panEnd=new ce,this._panDelta=new ce,this._dollyStart=new ce,this._dollyEnd=new ce,this._dollyDelta=new ce,this._dollyDirection=new I,this._mouse=new ce,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zx.bind(this),this._onPointerDown=kx.bind(this),this._onPointerUp=Hx.bind(this),this._onContextMenu=Yx.bind(this),this._onMouseWheel=jx.bind(this),this._onKeyDown=Wx.bind(this),this._onTouchStart=Xx.bind(this),this._onTouchMove=qx.bind(this),this._onMouseDown=Gx.bind(this),this._onMouseMove=Vx.bind(this),this._interceptControlDown=Kx.bind(this),this._interceptControlUp=Zx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(qf),this.update(),this.state=pt.NONE}update(e=null){let t=this.object.position;zt.copy(t).sub(this.target),zt.applyQuaternion(this._quat),this._spherical.setFromVector3(zt),this.autoRotate&&this.state===pt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=vn:n>Math.PI&&(n-=vn),s<-Math.PI?s+=vn:s>Math.PI&&(s-=vn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(zt.setFromSpherical(this._spherical),zt.applyQuaternion(this._quatInverse),t.copy(this.target).add(zt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=zt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=zt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(zl.origin.copy(this.object.position),zl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zl.direction))<Fx?this.object.lookAt(this.target):(Yf.setFromNormalAndCoplanarPoint(this.object.up,this.target),zl.intersectPlane(Yf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>zh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zh||this._lastTargetPosition.distanceToSquared(this.target)>zh?(this.dispatchEvent(qf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?vn/60*this.autoRotateSpeed*e:vn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){zt.setFromMatrixColumn(t,0),zt.multiplyScalar(-e),this._panOffset.add(zt)}_panUp(e,t){this.screenSpacePanning===!0?zt.setFromMatrixColumn(t,1):(zt.setFromMatrixColumn(t,0),zt.crossVectors(this.object.up,zt)),zt.multiplyScalar(e),this._panOffset.add(zt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;zt.copy(s).sub(this.target);let r=zt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ce,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function kx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function zx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Hx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Kf),this.state=pt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Gx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Bn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=pt.DOLLY;break;case Bn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pt.ROTATE}break;case Bn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=pt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=pt.PAN}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Hh)}function Vx(i){switch(this.state){case pt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case pt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case pt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function jx(i){this.enabled===!1||this.enableZoom===!1||this.state!==pt.NONE||(i.preventDefault(),this.dispatchEvent(Hh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Kf))}function Wx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Xx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Yn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=pt.TOUCH_ROTATE;break;case Yn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=pt.TOUCH_PAN;break;default:this.state=pt.NONE}break;case 2:switch(this.touches.TWO){case Yn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=pt.TOUCH_DOLLY_PAN;break;case Yn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=pt.TOUCH_DOLLY_ROTATE;break;default:this.state=pt.NONE}break;default:this.state=pt.NONE}this.state!==pt.NONE&&this.dispatchEvent(Hh)}function qx(i){switch(this._trackPointer(i),this.state){case pt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case pt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case pt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case pt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=pt.NONE}}function Yx(i){this.enabled!==!1&&i.preventDefault()}function Kx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Zx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Gl=class extends Hl{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Bn.PAN,MIDDLE:Bn.DOLLY,RIGHT:Bn.ROTATE},this.touches={ONE:Yn.PAN,TWO:Yn.DOLLY_ROTATE}}};function Gh(i,e){if(e===fh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Sr||e===Pa){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Sr)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var Vl=class extends ci{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Kh(t)}),this.register(function(t){return new Zh(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new Yh(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new Xh(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new cu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Ii.extractUrlBase(e);a=Ii.resolveURL(c,this.path)}else a=Ii.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new gr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ep){try{a[Ze.KHR_BINARY_GLTF]=new hu(e)}catch(u){s&&s(u);return}r=JSON.parse(a[Ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new _u(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Ze.KHR_MATERIALS_UNLIT:a[u]=new qh;break;case Ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new uu(r,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:a[u]=new du;break;case Ze.KHR_MESH_QUANTIZATION:a[u]=new fu;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function Jx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Xh=class{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new Ce(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Kt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new As(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ma(h),c.distance=u;break;case"spot":c=new ba(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),di(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},qh=class{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return tn}extendParams(e,t,n){let s=[];e.color=new Ce(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Kt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Pt))}return Promise.all(s)}},Yh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Kh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ce(o,o)}return Promise.all(r)}},Zh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Jh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},$h=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ce(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Kt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Pt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},eu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ce().setRGB(o[0],o[1],o[2],Kt),Promise.all(r)}},tu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},nu=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ce().setRGB(o[0],o[1],o[2],Kt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Pt)),Promise.all(r)}},iu=class{constructor(e){this.parser=e,this.name=Ze.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},su=class{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:xn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},ru=class{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},au=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},ou=class{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},lu=class{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},cu=class{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Fn.TRIANGLES&&c.mode!==Fn.TRIANGLE_STRIP&&c.mode!==Fn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let _ of u){let x=new ze,m=new I,p=new hn,R=new I(1,1,1),E=new ri(_.geometry,_.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,M),l.SCALE&&R.fromBufferAttribute(l.SCALE,M),E.setMatrixAt(M,x.compose(m,p,R));for(let M in l)if(M==="_COLOR_0"){let P=l[M];E.instanceColor=new Qi(P.array,P.itemSize,P.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&_.geometry.setAttribute(M,l[M]);ct.prototype.copy.call(E,_),this.parser.assignFinalMaterial(E),f.push(E)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},ep="glTF",Da=12,Zf={JSON:1313821514,BIN:5130562},hu=class{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Da),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ep)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Da,r=new DataView(e,Da),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Zf.JSON){let c=new Uint8Array(e,Da+a,o);this.content=n.decode(c)}else if(l===Zf.BIN){let c=Da+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},uu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let h in a){let u=mu[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=mu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Rr[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let _ in f.attributes){let x=f.attributes[_],m=l[_];m!==void 0&&(x.normalized=m)}u(f)},o,c,Kt,d)})})}},du=class{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},fu=class{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}},jl=class extends Ai{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,_=e*c,x=_-c,m=-2*f+3*d,p=f-d,R=1-m,E=p-d+u;for(let M=0;M!==o;M++){let P=a[x+M+o],b=a[x+M+l]*h,w=a[_+M+o],A=a[_+M]*h;r[M]=R*P+E*b+m*w+p*A}return r}},$x=new hn,pu=class extends jl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return $x.fromArray(r).normalize().toArray(r),r}},Fn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Rr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jf={9728:Yt,9729:cn,9984:$o,9985:xr,9986:Is,9987:Kn},$f={33071:ei,33648:nr,10497:$i},Vh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},mu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},is={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Qx={CUBICSPLINE:void 0,LINEAR:vs,STEP:ys},jh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function ey(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new dn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Tn})),i.DefaultMaterial}function Os(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function di(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ty(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function ny(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function iy(i){let e,t=i.extensions&&i.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wh(t.attributes):e=i.indices+":"+Wh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Wh(i.targets[n]);return e}function Wh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function gu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function sy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ry=new ze,_u=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Jx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new xa(this.options.manager):this.textureLoader=new Sa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new gr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Os(r,o,s),di(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,h]of a.children.entries())r(h,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Ii.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Vh[s.type],o=Rr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Ut(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=Vh[s.type],c=Rr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),R="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,E=t.cache.get(R);E||(x=new c(o,p*f,s.count*f/h),E=new cr(x,f/h),t.cache.add(R,E)),m=new hr(E,l,d%f/h,_)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),m=new Ut(x,l,_);if(s.sparse!==void 0){let p=Vh.SCALAR,R=Rr[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,P=new R(a[1],E,s.sparse.count*p),b=new c(a[2],M,s.sparse.count*l);o!==null&&(m=new Ut(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,A=P.length;w<A;w++){let y=P[w];if(m.setX(y,b[w*l]),l>=2&&m.setY(y,b[w*l+1]),l>=3&&m.setZ(y,b[w*l+2]),l>=4&&m.setW(y,b[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Jf[d.magFilter]||cn,h.minFilter=Jf[d.minFilter]||Kn,h.wrapS=$f[d.wrapS]||$i,h.wrapT=$f[d.wrapT]||$i,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Yt&&h.minFilter!==cn,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(x){let m=new Bt(x);m.needsUpdate=!0,d(m)}),t.load(Ii.resolveURL(u,r.path),_,void 0,f)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),di(u,a),u.userData.mimeType=a.mimeType||sy(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Ze.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new fr,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new es,_n.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return dn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Ze.KHR_MATERIALS_UNLIT]){let u=s[Ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new Ce(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Kt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Pt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=jt);let h=r.alphaMode||jh.OPAQUE;if(h===jh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===jh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==tn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ce(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==tn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==tn){let u=r.emissiveFactor;o.emissive=new Ce().setRGB(u[0],u[1],u[2],Kt)}return r.emissiveTexture!==void 0&&a!==tn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Pt)),Promise.all(c).then(function(){let u=new a(o);return r.name&&(u.name=r.name),di(u,r),t.associations.set(u,{materials:e}),r.extensions&&Os(s,u,r),u})}createUniqueName(e){let t=_t.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Qf(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],h=iy(c),u=s[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Qf(new Lt,c,t),s[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let h=a[l].material===void 0?ey(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,_=h.length;f<_;f++){let x=h[f],m=a[f],p,R=c[f];if(m.mode===Fn.TRIANGLES||m.mode===Fn.TRIANGLE_STRIP||m.mode===Fn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new na(x,R):new ht(x,R),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Fn.TRIANGLE_STRIP?p.geometry=Gh(p.geometry,Pa):m.mode===Fn.TRIANGLE_FAN&&(p.geometry=Gh(p.geometry,Sr));else if(m.mode===Fn.LINES)p=new ra(x,R);else if(m.mode===Fn.LINE_STRIP)p=new Ti(x,R);else if(m.mode===Fn.LINE_LOOP)p=new aa(x,R);else if(m.mode===Fn.POINTS)p=new oa(x,R);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ny(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),di(p,r),m.extensions&&Os(s,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,_=u.length;f<_;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Os(s,u[0],r),u[0];let d=new rt;r.extensions&&Os(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,_=u.length;f<_;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Nt(Ps.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ts(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),di(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,h=a.length;c<h;c++){let u=a[c];if(u){o.push(u);let d=new ze;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new sa(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],_=s.samplers[f.sampler],x=f.target,m=x.node,p=s.parameters!==void 0?s.parameters[_.input]:_.input,R=s.parameters!==void 0?s.parameters[_.output]:_.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",R)),c.push(_),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],_=u[2],x=u[3],m=u[4],p=[];for(let E=0,M=d.length;E<M;E++){let P=d[E],b=f[E],w=_[E],A=x[E],y=m[E];if(P===void 0)continue;P.updateMatrix&&P.updateMatrix();let v=n._createAnimationTracks(P,b,w,A,y);if(v)for(let L=0;L<v.length;L++)p.push(v[L])}let R=new _a(r,void 0,p);return di(R,s),R})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ry)});for(let f=0,_=u.length;f<_;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new ur:c.length>1?h=new rt:c.length===1?h=c[0]:h=new ct,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),di(h,r),r.extensions&&Os(n,h,r),r.matrix!==void 0){let u=new ze;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new rt;n.name&&(r.name=s.createUniqueName(n.name)),di(r,n),n.extensions&&Os(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof _n||d instanceof Bt)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];is[r.path]===is.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(is[r.path]){case is.weights:c=ai;break;case is.rotation:c=oi;break;case is.translation:case is.scale:c=li;break;default:switch(n.itemSize){case 1:c=ai;break;case 2:case 3:default:c=li;break}break}let h=s.interpolation!==void 0?Qx[s.interpolation]:vs,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let _=new c(l[d]+"."+is[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=gu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof oi?pu:jl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function ay(i,e,t){let n=e.attributes,s=new un;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){let h=gu(Rr[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,l=new I;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){let x=gu(Rr[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new gn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Qf(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=mu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return Qe.workingColorSpace!==Kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Qe.workingColorSpace}" not supported.`),di(i,e),ay(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ty(i,e.targets,t):i})}var Wl,np={white:["satin","#f7f5ef"],cream:["matte","#efe5cf"],stone:["matte","#ddd6c8"],plaza:["matte","#e7e1d3"],plazaLight:["matte","#f1ede4"],concrete:["matte","#cdcac2"],gravel:["matte","#dccfb3"],sand:["matte","#e9d9a6"],sandDark:["matte","#d4b77c"],asphalt:["matte","#5b6169"],darkPaving:["matte","#3a3346"],silver:["metal","#cfd6de"],steel:["metal","#8d96a0"],gold:["metal","#e8b931"],green:["satin","#0f8a4f"],domeGreen:["satin","#1f9d5c"],roofGreen:["matte","#2f6f4f"],glass:["glass","#7dd3fc"],deepGlass:["glass","#4f7fae"],darkGlass:["glass","#2c4a66"],window:["glass","#36597d"],windowLight:["glass","#8fb8d8"],water:["wet","#4fb3e6"],pool:["wet","#38c3e8"],lawn:["matte","#7fc15a"],lawnLight:["matte","#9ad06f"],lawnDry:["matte","#b9c983"],fairway:["matte","#6cc24a"],green2:["matte","#9be374"],hedge:["flat","#3f7f35"],leaf:["flat","#4f9a3c"],leafDark:["flat","#3c8434"],bush:["flat","#4d8f3a"],trunk:["matte","#7a5a3a"],palmTrunk:["matte","#8a6a45"],palmLeaf:["flat","#3f9b4a"],wood:["matte","#9a6b43"],mud:["matte","#b5784a"],thatch:["flat","#c99a52"],red:["satin","#d93a3a"],roofRed:["matte","#b45a3c"],roofTile:["matte","#9a4b33"],roofTin:["metal","#a3abb4"],track:["matte","#c2562a"],pitch:["matte","#4fae45"],seats:["ds","#1f9d5c"],wall:["ds","#e5e7eb"],canopy:["ds","#f8fafc"],granite:["flat","#8d8172"],graniteLight:["flat","#a39684"],graniteDark:["flat","#6c6156"],streak:["matte","#4a4038"],lamp:["glow","#fff3c4"],neonPink:["glow","#ff2d95"],neonGreen:["glow","#22e584"],neonBlue:["glow","#38bdf8"],dark:["matte","#2e1f45"],black:["satin","#1f2328"],beam:["beam","#fff7d6"],showGlass:["clear","#bfe6f5"],balGlass:["clear","#dff4ff"],carGlass:["glass","#1e293b"],carRed:["satin","#c81e1e"],carWhite:["satin","#f4f4f2"],carBlack:["satin","#1b1d22"],carSilver:["metal","#c0c6cc"],carBlue:["satin","#1f5fbf"],carGreen:["satin","#17803d"],elephant:["matte","#8e8e93"],giraffe:["matte","#e0b049"],lion:["matte","#c9954c"],mane:["flat","#7a4a1e"],uniBlue:["satin","#1e40af"],teal:["satin","#2a9d8f"],hubGreen:["satin","#22c55e"],solar:["glass","#1e3a8a"],tank:["satin","#1f2937"],stall0:["matte","#e5484d"],stall1:["matte","#2f7de1"],stall2:["matte","#22b573"],stall3:["matte","#f59e0b"],stall4:["matte","#8b5cf6"],stall5:["matte","#14b8a6"],flowerRed:["matte","#e63946"],flowerYellow:["matte","#ffd166"],flowerPink:["matte","#f472b6"]},g=(i,e,t,n)=>({g:"box",m:i,p:e,s:t,r:n}),X=(i,e,t,n,s="cyl",r)=>({g:s,m:i,p:e,s:[t,n,t],r}),sn=(i,e,t,n,s="cone8",r)=>({g:s,m:i,p:e,s:[t,n,t],r}),Ni=(i,e,t)=>({g:"dome",m:i,p:e,s:t}),Fe=(i,e,t,n,s)=>({g:i,m:e,p:t,s:n,r:s}),mt=(i,e,t,n,s,r,a)=>({g:"pyr",m:i,p:[e,t+a/2,n],s:[.7071*s,a,.7071*r]}),qe=(i,e,t=0,n=0,s="lawn")=>g(s,[t,.01,n],[i,.02,e]),Ie=(i,e,t=0,n=0,s="plaza")=>g(s,[t,.02,n],[i,.04,e]),Ui=(i,e,t,n,s=.06,r="water")=>g(r,[t,s-.015,n],[i,.03,e]),Jn=(i,e,t,n,s=.26)=>g("hedge",[i,s/2,e],[t,s,n]),ae=(i,e,t=1,n="leaf")=>[X("trunk",[i,.22*t,e],.06*t,.44*t,"cyl8"),Fe("ico",n,[i,.74*t,e],[.44*t,.5*t,.44*t])],Be=(i,e,t=1.3)=>[X("palmTrunk",[i,t/2,e],.05,t,"cyl8"),sn("palmLeaf",[i,t+.04,e],.55,.26,"cone8",[Math.PI,0,0]),sn("palmLeaf",[i,t+.16,e],.34,.2,"cone8",[Math.PI,.4,0])],Xt=(i,e,t=1.6)=>[X("silver",[i,t/2,e],.022,t,"cyl8"),g("green",[i+.1,t-.15,e],[.2,.26,.015]),g("white",[i+.3,t-.15,e],[.2,.26,.015]),g("green",[i+.5,t-.15,e],[.2,.26,.015])],qt=(i,e,t,n,s,r,a,o="window")=>{let l=[];for(let c=s;c<=r+1e-6;c+=a)l.push(g(o,[i,c,e],[t+.04,.13,n+.04]));return l},Ht=(i,e,t,n,s,r=0,a=.06,o="white")=>Array.from({length:t},(l,c)=>X(o,[i+(e-i)*c/(t-1),r+s/2,n],a,s,"cyl8")),st=(i,e,t,n)=>[g(n,[i,.1,e],[.3,.14,.6],[0,t,0]),g("carGlass",[i,.21,e],[.26,.11,.32],[0,t,0])],bt=(i,e,t,n=.6,s=0)=>[X("silver",[i,s+n/2,e],.02,n,"cyl8"),sn(t,[i,s+n+.08,e],.42,.18)],Fs=(i,e,t)=>[g("wood",[i,.16,e],[.9,.32,.5]),g(t,[i,.62,e],[1.05,.05,.8]),X("wood",[i-.48,.31,e+.36],.025,.62,"cyl8"),X("wood",[i+.48,.31,e+.36],.025,.62,"cyl8")],Cr=(i,e,t,n,s=.2,r="wood")=>[g(r,[(i+e)/2,s/2,t],[e-i,s,.04]),g(r,[(i+e)/2,s/2,n],[e-i,s,.04]),g(r,[i,s/2,(t+n)/2],[.04,s,n-t]),g(r,[e,s/2,(t+n)/2],[.04,s,n-t])],tp=i=>{let e=43758.5453*Math.sin(127.1*i+311.7);return e-Math.floor(e)},oy=["flowerRed","flowerYellow","flowerPink"],Wt=(i,e,t,n,s,r,a=.02)=>Array.from({length:s},(o,l)=>Ni(oy[(l+r)%3],[i+(tp(31*r+l)-.5)*t,a,e+(tp(17*r+l+.5)-.5)*n],[.12,.1,.12])),Bi=["stall0","stall1","stall2","stall3","stall4","stall5"],ip={abjAirport:(function(){let i=[qe(39.8,18.8,0,0,"lawnDry")];i.push(g("asphalt",[0,.025,-6.8],[39,.03,2.4]));for(let e=-17;e<=17;e+=2)i.push(g("white",[e,.045,-6.8],[1,.01,.1]));for(let e of[-1,1])for(let t=0;t<6;t++)i.push(g("white",[18.6*e,.045,-7.65+.34*t],[1.1,.01,.16]));for(let e=-19;e<=19.01;e+=2)i.push(g("lamp",[e,.07,-8.1],[.08,.06,.08]),g("lamp",[e,.07,-5.5],[.08,.06,.08]));for(let e of(i.push(g("asphalt",[0,.025,-4.3],[38,.03,.9])),[-12,0,12]))i.push(g("asphalt",[e,.025,-5.2],[1,.03,1.1]));for(let e of(i.push(g("concrete",[0,.025,-.05],[38.6,.03,7.1])),i.push(g("concrete",[0,.06,5.2],[38.6,.12,3.4]),g("glass",[0,.82,5.1],[38,1.4,3.2]),g("white",[0,1.56,5.1],[38.2,.08,3.4]),g("green",[0,1.35,6.72],[38.1,.12,.04])),[-14.25,-4.75,4.75,14.25]))i.push(Fe("halfCyl","white",[e,1.6,5.1],[.95,9.5,1.72],[0,0,Math.PI/2]));i.push(g("steel",[-3.6,.95,7],[.08,1.9,.08]),g("steel",[3.6,.95,7],[.08,1.9,.08])),i.push(g("asphalt",[0,.025,8.2],[24,.03,1.9]));for(let e=-11.6;e<=11.61;e+=.8)i.push(g("white",[e,.045,8.6],[.04,.01,.9]));for(let e=-12;e<=12;e+=3)i.push(...Be(e,9.3,1.5));for(let e of(i.push(g("concrete",[-16.9,.06,8.2],[4,.12,2.4]),Fe("halfCyl","silver",[-16.9,.12,8.2],[1.2,3.8,1.15],[0,0,Math.PI/2])),i.push(Fe("cylT","white",[16.8,2.5,8.2],[.45,5,.45]),X("deepGlass",[16.8,5.3,8.2],.95,.6,"cyl8"),X("white",[16.8,5.66,8.2],1.05,.12,"cyl8"),X("silver",[16.8,6.1,8.2],.03,.8,"cyl8")),[13.3,14.4]))i.push(X("white",[e,.4,8.5],.45,.8));return i.push(...Xt(-13.9,7.3,2.2)),i})(),abjAsoRock:[qe(4.3,4.3,0,0,"lawnDry"),Ie(1.1,3.8,.9,.2,"gravel"),Fe("rock","granite",[-1,.42,-1],[.95,.8,.8],[.3,.6,0]),Fe("rock","graniteLight",[.4,.3,-1.5],[.6,.5,.5],[.5,.2,.3]),Fe("rock","graniteDark",[-1.5,.25,.4],[.5,.4,.45],[.2,1,.1]),g("wood",[1,.3,1.1],[1.6,.06,1.1]),...[[.25,.6],[1.75,.6],[.25,1.6],[1.75,1.6]].map(([i,e])=>X("wood",[i,.15,e],.04,.3,"cyl8")),g("wood",[1,.5,1.63],[1.6,.04,.04]),g("wood",[-.7,.45,1.8],[.06,.9,.06]),...ae(1.7,-1.4),...ae(-1.6,1.5,.9)],abjAssembly:[qe(6.8,6.8),Ie(4.6,2.6,0,2.1),Ui(2.8,.9,0,2.3),g("stone",[0,.15,-.7],[5.8,.3,3.8]),g("stone",[0,.08,1.45],[3.2,.16,.5]),g("white",[0,.85,-.9],[4.6,1.1,2.8]),g("cream",[-2.75,.62,-.9],[.9,.64,2.4]),g("cream",[2.75,.62,-.9],[.9,.64,2.4]),...Ht(-2.1,2.1,13,.85,1.1,.3,.07),g("white",[0,1.46,.3],[4.9,.12,1.5]),X("white",[0,1.75,-1],1.2,.5),Ni("domeGreen",[0,2,-1],[1.32,1.25,1.32]),X("white",[0,3.36,-1],.13,.24,"cyl8"),sn("gold",[0,3.62,-1],.09,.3),g("stone",[0,.2,3.15],[2.9,.4,.16]),...Xt(-2.9,2.6,1.8),...Xt(2.3,2.6,1.8),Jn(-3.2,-.6,.3,5.2),Jn(3.2,-.6,.3,5.2),...ae(-2.9,-3,1.1),...ae(2.9,-3,1.1),...Wt(-2.9,1.4,.5,1.2,6,1),...Wt(2.9,1.4,.5,1.2,6,2)],abjSupremeCourt:[qe(4.8,4.3),Ie(3.4,1.3,0,1.4),g("stone",[0,.1,-.35],[3.9,.2,2.6]),g("cream",[0,.72,-.5],[3.1,1.04,1.8]),...Ht(-1.35,1.35,8,.65,1.04,.2),g("cream",[0,1.3,.15],[3.3,.1,1.3]),mt("domeGreen",0,1.35,-.25,3.4,2.2,.55),sn("gold",[0,2,-.25],.06,.2),g("stone",[0,.17,1.95],[2.2,.34,.14]),...Xt(-2.2,1.5,1.5),...ae(2,-1.75),...ae(-2,-1.75)],abjEagleSquare:(function(){let i=[Ie(7.8,5.8)];for(let e of[-.6,.4,1.4,2.4])i.push(g("white",[0,.045,e],[6.8,.01,.06]));for(let e=0;e<4;e++)i.push(g(e%2?"white":"green",[0,(e+1)*.16,-1.55-.36*e],[6.6,(e+1)*.32,.36]));for(let e of(i.push(g("green",[0,1.98,-2.15],[7,.1,1.7])),[-3.2,-1.6,0,1.6,3.2]))i.push(X("white",[e,.98,-1.35],.05,1.95,"cyl8"));return i.push(g("white",[0,.72,-1.15],[1.4,.7,.5])),i.push(X("white",[0,.6,1.9],.14,1.2),Fe("sphere","gold",[0,1.3,1.9],[.14,.12,.2]),g("gold",[-.3,1.36,1.9],[.6,.05,.2],[0,0,.3]),g("gold",[.3,1.36,1.9],[.6,.05,.2],[0,0,-.3]),Fe("sphere","gold",[0,1.44,2.02],[.06,.06,.08])),i.push(...Xt(-3.6,2.5,2.2),...Xt(2.9,2.5,2.2)),i})(),abjMosque:(function(){let i=[qe(5.8,5.8),Ie(5,5,0,.1),g("cream",[0,.75,-.3],[3.2,1.5,3.2]),g("green",[0,.72,1.33],[2.5,.95,.06]),g("gold",[0,1.27,1.34],[2.6,.08,.06]),X("cream",[0,1.75,-.3],1.2,.5),Ni("gold",[0,2,-.3],[1.36,1.45,1.36]),X("gold",[0,3.55,-.3],.05,.25,"cyl8"),sn("gold",[0,3.78,-.3],.08,.22),Ui(1.8,.55,0,2.2)];for(let e of[-1,1])for(let t of[-1,1])i.push(Ni("gold",[1.3*e,1.5,-.3+1.3*t],[.3,.3,.3]));for(let e of[-2.35,2.35])for(let t of[-2.65,2.05])i.push(X("white",[e,.25,t],.3,.5),Fe("cylT","white",[e,2.45,t],[.19,4,.19]),X("white",[e,3.3,t],.3,.09),X("white",[e,4.2,t],.26,.07),sn("gold",[e,4.8,t],.21,.72));return i})(),abjChristianCentre:[qe(5.8,5.8),Ie(4.2,1.5,0,2.15),g("white",[0,.9,.1],[3,1.8,3.2]),mt("white",0,1.8,.1,3,3.2,5.4),g("deepGlass",[0,1,1.73],[.7,1.6,.06]),g("deepGlass",[-1,.9,1.73],[.3,1.1,.06]),g("deepGlass",[1,.9,1.73],[.3,1.1,.06]),g("gold",[0,7.5,.1],[.09,.66,.09]),g("gold",[0,7.6,.1],[.4,.09,.09]),g("cream",[-2.15,.45,.4],[1.1,.9,2.2]),g("cream",[2.15,.45,.4],[1.1,.9,2.2]),mt("roofTile",-2.15,.9,.4,1.2,2.3,.35),mt("roofTile",2.15,.9,.4,1.2,2.3,.35),g("stone",[0,.06,1.95],[1.6,.12,.5]),g("stone",[0,.17,2.75],[2.4,.34,.14]),...ae(-2.4,2.4),...ae(2.4,2.4),...ae(-2.4,-2.4,1.2),...ae(2.4,-2.4,1.2)],abjSecretariat:(Wl=[qe(7.8,4.8),Ie(7.2,.9,0,1.9)],[-2.85,-.95,.95,2.85].forEach((i,e)=>[-1.3,.55].forEach((t,n)=>{let s=(e+n)%2?2.7:2.2;Wl.push(g("cream",[i,s/2,t],[1.5,s,1.3]),...qt(i,t,1.5,1.3,.55,s-.3,.5),g("white",[i,s+.04,t],[1.56,.08,1.36]))})),Wl.push(g("stone",[-1.9,.17,2.3],[2.4,.34,.14]),...Xt(3.3,2.1,1.6)),Wl),abjHospital:[qe(6.8,4.8),Ie(4,1.6,0,1.6),g("white",[0,1.25,-.9],[6,2.5,2.4]),...qt(0,-.9,6,2.4,.6,2.1,.5,"windowLight"),g("teal",[0,2.56,-.9],[6.1,.12,2.5]),g("white",[0,.8,.75],[2.2,.08,.9]),X("white",[-1,.4,1.15],.04,.8,"cyl8"),X("white",[1,.4,1.15],.04,.8,"cyl8"),g("red",[0,1.95,.34],[.55,.16,.04]),g("red",[0,1.95,.34],[.16,.55,.04]),X("concrete",[1.8,2.64,-.9],.7,.04),g("white",[1.62,2.67,-.9],[.06,.01,.5]),g("white",[1.98,2.67,-.9],[.06,.01,.5]),g("white",[1.8,2.67,-.9],[.36,.01,.06]),g("white",[-1.8,.22,1.75],[.7,.32,.36]),g("red",[-1.8,.26,1.75],[.72,.06,.37]),...ae(-3,1.9),...ae(3,1.9)],abjSilverbird:[Ie(5.8,4.8),g("deepGlass",[-.6,1.15,-.5],[3.8,2.3,2.8]),g("silver",[-.6,2.35,-.5],[3.9,.1,2.9]),g("silver",[-.6,1.25,.93],[3.9,.06,.06]),X("glass",[1.7,1.45,.4],1,2.9),X("silver",[1.7,2.95,.4],1.05,.1),g("red",[-.6,.045,1.7],[1,.01,1.5]),g("silver",[-.6,.95,1.25],[1.8,.07,.75]),X("silver",[-1.4,.47,1.55],.03,.94,"cyl8"),X("silver",[.2,.47,1.55],.03,.94,"cyl8"),...[1.2,1.8,2.3].flatMap(i=>[X("gold",[-1.2,.15,i],.03,.3,"cyl8"),X("gold",[0,.15,i],.03,.3,"cyl8")]),...Be(-2.6,1.9)],abjCeddi:(function(){let i=[Ie(6.8,4.8),g("cream",[0,.95,-.9],[6.2,1.9,2.6]),g("glass",[0,.85,.42],[5.8,1.3,.04]),g("deepGlass",[0,1.4,.55],[1.6,2.8,.7]),g("white",[0,2.86,.55],[1.8,.12,.9]),g("white",[0,1.95,-.9],[6.4,.12,2.8]),X("stone",[-2.2,.08,1.7],.5,.08),X("water",[-2.2,.125,1.7],.42,.03),...Be(2.9,1.9),...Be(1.5,1.95),...st(-.6,1.8,0,"carWhite"),...st(.2,1.8,0,"carGreen")];for(let e=0;e<9;e++)Math.abs(-2.8+.7*e)>.9&&i.push(g("white",[-2.8+.7*e,.95,.47],[.08,1.9,.1]));return i})(),abjArtsVillage:(function(){let i=[qe(5.8,4.8,0,0,"sand")];for(let[e,t]of[[-2.2,-1.4],[-.6,-1.6],[1,-1.5],[2.4,-.6],[-2.4,.4],[-.9,.1],[.8,.4]])i.push(X("mud",[e,.28,t],.42,.56),sn("thatch",[e,.8,t],.58,.5),g("dark",[e,.2,t+.42],[.18,.32,.02]));for(let[e,t]of(i.push(g("stall3",[-1.6,.025,1.7],[.9,.01,.6]),g("stall4",[.2,.025,1.8],[.9,.01,.6]),g("stall1",[1.9,.025,1.7],[.9,.01,.6])),[[-1.8,1.6],[-1.4,1.8],[0,1.7],[.4,1.9],[1.7,1.6],[2.1,1.8]]))i.push(g("wood",[e,.11,t],[.1,.18,.1]));return i.push(X("wood",[2.6,.12,1.2],.12,.24,"cyl8"),X("mud",[2.3,.1,.9],.1,.2,"cyl8"),g("wood",[-.7,.45,2.2],[.06,.9,.06]),g("wood",[.7,.45,2.2],[.06,.9,.06]),...ae(2.5,-2),...ae(-2.6,2,.9)),i})(),abjBanex:(function(){let i=[Ie(5.8,4.8,0,0,"concrete"),g("cream",[0,.85,-.9],[5.4,1.7,2.4]),g("glass",[0,1.25,.32],[5.2,.55,.04]),g("red",[0,.78,.62],[5.4,.05,.6]),g("white",[0,1.75,-.9],[5.5,.1,2.5]),g("wood",[-2.2,.25,1.6],[.8,.5,.45]),g("black",[-2.2,.53,1.6],[.6,.06,.3]),...bt(-1.4,1.7,"stall3"),...st(.2,1.8,Math.PI/2,"carSilver"),...st(1.2,1.8,Math.PI/2,"carGreen"),...st(2.2,1.8,Math.PI/2,"carBlack")];for(let e=0;e<6;e++)i.push(g(Bi[e],[-2.2+.88*e,.38,.32],[.78,.62,.04]));for(let e of[-1.6,0,1.6])i.push(g("silver",[e,1.9,-1.3],[.4,.2,.3]));return i})(),abjWuseMarket:(function(){let i=[Ie(6.8,4.8,0,0,"concrete"),g("cream",[0,.55,-1.4],[6,1.1,1.8]),mt("roofTin",0,1.1,-1.4,6.3,2.1,.7)];for(let e of[.35,1.55])for(let t=0;t<5;t++)i.push(...Fs(-2.6+1.3*t,e,Bi[(t+3*(e>1))%6]));return i.push(...bt(-3,2.15,"stall2"),...bt(3,2.15,"stall0")),i})(),abjTranscorp:[qe(5.8,4.8),Ie(5.6,1.6,0,1.5),g("cream",[0,.35,-.5],[5,.7,2.8]),g("white",[-.5,3.6,-.9],[3.4,5.8,1.4]),...qt(-.5,-.9,3.4,1.4,1.1,6.1,.45),g("white",[-.5,6.62,-.9],[2.8,.24,1]),g("pool",[1.6,.72,0],[1.4,.04,1.2]),g("white",[-.5,.9,1.3],[2.2,.08,.9]),X("white",[-1.4,.45,1.65],.04,.9,"cyl8"),X("white",[.4,.45,1.65],.04,.9,"cyl8"),...Be(-2.6,1.9),...Be(2.6,1.9),...Be(2.5,-1.9)],abjTechHub:[Ie(5.8,4.8,0,0,"plazaLight"),g("darkGlass",[-.7,1.6,-.6],[3.4,3.2,2.4]),g("white",[.9,2.5,-.3],[2.6,1,2.6]),X("white",[1.9,1,.7],.08,2,"cyl8"),g("hubGreen",[-.7,3.25,-.6],[3.5,.1,2.5]),...[[-1.8,-1.2],[-1,-.2],[-.2,-1.3],[-1.6,.2]].map(([i,e])=>Fe("ico","bush",[i,3.42,e],[.25,.2,.25])),...[-.2,.6,1.4].map(i=>g("solar",[i+.5,3.08,-.3],[.6,.04,.9],[.3,0,0])),g("glass",[-.7,.5,.62],[2,.9,.04]),g("wood",[1.8,.15,1.8],[1,.06,.3]),...ae(-2.5,1.9),...ae(2.5,-1.9)],abjNovare:(function(){let i=[Ie(7.8,6.8),g("asphalt",[0,.045,2.45],[7,.01,1.6]),g("white",[0,1,-1.4],[7,2,3.4]),Fe("halfCyl","glass",[0,1,.3],[1.3,2,3.3],[0,-Math.PI/2,0]),Fe("halfCyl","white",[0,2.08,.3],[1.45,.12,3.45],[0,-Math.PI/2,0]),g("white",[0,2.06,-1.4],[7.1,.12,3.5]),g("silver",[2.3,1.5,-2.2],[2.2,3,1.6]),g("dark",[0,.45,1.62],[1.2,.9,.04]),...Be(-3.6,1.4),...Be(3.6,1.4),...Xt(-3.7,3.1,1.8)];for(let e=0;e<9;e++)i.push(g("white",[-3.2+.8*e,.055,2.45],[.04,.01,1.2]));return[-2.8,-1.2,.4,2,2.8].forEach((e,t)=>i.push(...st(e,2.45,0,["carWhite","carBlack","carGreen","carSilver","carRed"][t]))),i})(),abjLounge:[Ie(4.8,4.3,0,0,"darkPaving"),g("dark",[0,.85,-.6],[3.8,1.7,2.4]),g("neonPink",[0,1.5,.62],[3.6,.06,.04]),g("neonGreen",[0,.2,.62],[3.6,.04,.04]),g("neonPink",[-1.85,.85,.62],[.05,1.3,.04]),g("neonPink",[1.85,.85,.62],[.05,1.3,.04]),g("gold",[0,.95,.95],[1.4,.06,.7]),g("red",[0,.045,1.4],[.8,.01,1.2]),...[[-.55,1.1],[.55,1.1],[-.55,1.7],[.55,1.7]].map(([i,e])=>X("gold",[i,.18,e],.03,.36,"cyl8")),...Be(-2,1.6),...Be(2,1.6),...bt(-1.3,1.6,"stall4"),...bt(1.3,1.6,"stall0")],abjUnityFountain:(function(){let i=[qe(5.8,5.8),X("plaza",[0,.02,0],2.85,.04),X("stone",[0,.13,0],1.9,.22),X("water",[0,.25,0],1.75,.02),X("white",[0,.7,0],.2,.9),X("white",[0,1.18,0],.45,.06),g("stone",[0,.17,2.68],[2.2,.34,.12]),...Wt(-2.3,-2.3,.9,.9,6,3),...Wt(2.3,-2.3,.9,.9,6,4),...Wt(-2.3,2.3,.9,.9,6,5),...Wt(2.3,2.3,.9,.9,6,6)];for(let e=0;e<18;e++){let t=e/18*Math.PI*2,n=2.5*Math.cos(t),s=2.5*Math.sin(t);i.push(X("silver",[n,.75,s],.025,1.5,"cyl8"),g(e%3==0?"green":Bi[e%6],[n+.13,1.36,s],[.26,.18,.015]))}return i})(),abjMillenniumPark:(function(){let i=[qe(9.8,7.8,0,0,"lawnLight")],e=[[-4.6,-.6],[-.8,-1.6],[2.2,-.4],[4.4,1.8]];for(let t=0;t<3;t++){let[n,s]=e[t],[r,a]=e[t+1];i.push(g("water",[(n+r)/2,.035,(s+a)/2],[Math.hypot(r-n,a-s),.03,.6],[0,Math.atan2(-(a-s),r-n),0]))}i.push(X("water",[-.8,.035,-1.6],.3,.03),X("water",[2.2,.035,-.4],.3,.03),X("water",[4.4,.035,1.8],.7,.03)),i.push(g("gravel",[0,.025,2.9],[9.2,.03,.4]),g("gravel",[-2.2,.025,.4],[.4,.03,6.6]),g("white",[-2.2,.085,-1.23],[.55,.05,1])),i.push(X("stone",[-4,.04,-2.3],.85,.06));for(let t=0;t<6;t++){let n=t/6*Math.PI*2;i.push(X("white",[-4+.65*Math.cos(n),.48,-2.3+.65*Math.sin(n)],.05,.9,"cyl8"))}for(let[t,n,s]of(i.push(Ni("white",[-4,.92,-2.3],[.78,.55,.78])),[[-2.9,-3.4,1.1],[-.6,-3.2,1.2],[1.4,-3.3,1],[3.4,-3.1,1.2],[4.4,-1.6,1],[-4.4,1.2,1.1],[-3.6,3.5,1],[.8,1.6,1.1],[2.6,1.6,.9],[-.8,1.2,1],[4.2,3.4,1],[1.8,3.5,1.1]]))i.push(...ae(t,n,s,s>1.05?"leafDark":"leaf"));return i.push(...Wt(-.5,2.45,3,.4,10,7),...Wt(3,2.45,2,.4,7,8),g("stone",[-3.2,.17,3.7],[2.6,.34,.14])),i})(),abjGolf:(function(){let i=[qe(10.8,8.8,0,0,"fairway")];for(let[e,t,n]of[[-3.5,-2.6,1],[1,-3,.9],[3.6,.4,1]])i.push(X("green2",[e,.025,t],n,.01),X("white",[e,.4,t],.015,.8,"cyl8"),g("red",[e+.12,.72,t],[.24,.15,.01]));for(let[e,t,n,s]of[[-2,-1.4,.55,.32],[2.4,-2.2,.45,.3],[1.6,1.6,.5,.35],[-4.4,-.8,.4,.3]])i.push(Fe("cyl","sand",[e,.025,t],[n,.01,s]));for(let[e,t]of(i.push(Fe("cyl","water",[-1.6,.035,2],[1.6,.03,.9])),i.push(g("green2",[-4.6,.025,3.4],[.7,.01,.45]),g("green2",[-.2,.025,3.6],[.7,.01,.45])),i.push(g("cream",[3.4,.5,3],[3.2,1,1.6]),mt("roofGreen",3.4,1,3,3.4,1.8,.45),g("wood",[3.4,.04,4.05],[3,.08,.5]),...Ht(2.1,4.7,5,4.2,.9,.08,.04)),i.push(g("white",[1.3,.12,4],[.3,.16,.45]),g("white",[.8,.12,4],[.3,.16,.45]),g("stone",[-4.2,.25,4.05],[2.2,.5,.2])),[[-5.1,-4.1],[-3,-4.15],[-.8,-4.1],[1.6,-4.15],[3.6,-4.1],[5.1,-3],[5.1,-1.2],[5.1,1.2],[-5.1,-2],[-5.1,.4],[-5.1,2.2],[.6,0],[-2.8,.8]]))i.push(...ae(e,t,1.1,"leafDark"));return i})(),abjClub:[Ie(5.8,4.8,0,0,"darkPaving"),g("black",[0,1.1,-.7],[5,2.2,2.6]),g("neonPink",[0,2.12,.62],[5,.06,.04]),g("neonBlue",[-2.48,1.1,.62],[.06,2,.04]),g("neonBlue",[2.48,1.1,.62],[.06,2,.04]),g("gold",[0,.9,1],[1.8,.07,.8]),X("gold",[-.8,.45,1.35],.03,.9,"cyl8"),X("gold",[.8,.45,1.35],.03,.9,"cyl8"),g("red",[0,.045,1.6],[1,.01,1.6]),...[1.2,1.7,2.2].flatMap(i=>[X("gold",[-.65,.18,i],.03,.36,"cyl8"),X("gold",[.65,.18,i],.03,.36,"cyl8")]),X("silver",[-2,2.35,-1.6],.18,.3),X("silver",[2,2.35,-1.6],.18,.3),sn("beam",[-2.28,3.77,-1.6],.45,2.6,"cone8",[Math.PI,0,-.22]),sn("beam",[2.28,3.77,-1.6],.45,2.6,"cone8",[Math.PI,0,.22]),...st(-2.1,1.7,.3,"carBlack"),...st(2.1,1.7,-.3,"carWhite")],abjRooftop:(function(){let i=[Ie(4.3,4.3,0,0,"plazaLight"),g("white",[0,3.1,-.3],[3,6.2,3]),g("deepGlass",[0,3.1,1.22],[2.4,5.6,.04]),g("deepGlass",[1.52,3.1,-.3],[.04,5.6,2.4]),g("wood",[0,6.26,-.3],[3.1,.12,3.1]),g("balGlass",[0,6.52,1.22],[3.1,.4,.03]),g("balGlass",[-1.53,6.52,-.3],[.03,.4,3.1]),g("balGlass",[1.53,6.52,-.3],[.03,.4,3.1]),g("balGlass",[0,6.52,-1.82],[3.1,.4,.03]),g("pool",[-.6,6.335,-.9],[1.4,.03,1]),g("dark",[.8,6.55,-1.3],[1,.45,.35]),g("lamp",[0,6.95,.6],[2.8,.03,.03]),g("gold",[0,.7,1.65],[1.6,.06,.8]),X("gold",[-.7,.35,1.95],.03,.7,"cyl8"),X("gold",[.7,.35,1.95],.03,.7,"cyl8"),...Be(-1.8,1.85,1.1),...Be(1.8,1.85,1.1)];for(let[e,t,n]of[[-.9,.5,"stall0"],[.5,.5,"stall3"],[1,-.4,"stall5"]])i.push(...bt(e,t,n,.5,6.32));return i})(),abjJabiLake:(function(){let i=[Ie(6.8,4.8),g("asphalt",[1.1,.045,1.65],[4.2,.01,1.3]),g("cream",[.6,.65,-1],[5.4,1.3,2.4]),g("glass",[.6,.6,.22],[4.8,.9,.04]),g("white",[.6,1.36,-1],[5.6,.12,2.6]),X("glass",[-.6,1,-.2],.75,2),X("white",[-.6,2.05,-.2],.8,.1),g("wood",[-3.4,.06,-.6],[1.6,.04,.8]),...Be(-2.7,1.6),...Be(-2.7,-1.9),...Be(3.1,1.95)];for(let e=0;e<6;e++)i.push(g("white",[-.7+.75*e,.055,1.65],[.04,.01,1]));return[-.3,.45,1.95,2.7].forEach((e,t)=>i.push(...st(e,1.65,0,["carSilver","carWhite","carBlue","carGreen"][t]))),i})(),abjZoo:[qe(6.8,4.8),g("gravel",[0,.025,.4],[6.4,.03,.5]),g("gravel",[0,.025,1.4],[.5,.03,2]),g("sandDark",[-2.1,.025,-1.3],[2.2,.01,1.9]),g("sandDark",[.3,.025,-1.3],[2.2,.01,1.9]),g("sandDark",[2.5,.025,-1.3],[1.7,.01,1.9]),...Cr(-3.2,-1,-2.25,-.35),...Cr(-.8,1.4,-2.25,-.35),...Cr(1.65,3.35,-2.25,-.35),Fe("sphere","elephant",[-2.2,.42,-1.3],[.42,.3,.28]),Fe("sphere","elephant",[-1.75,.52,-1.3],[.18,.18,.18]),X("elephant",[-1.6,.32,-1.3],.05,.3,"cyl8",[0,0,.3]),g("elephant",[-1.82,.54,-1.3],[.04,.22,.34]),...[[-2.45,-1.45],[-2.45,-1.15],[-1.95,-1.45],[-1.95,-1.15]].map(([i,e])=>X("elephant",[i,.12,e],.07,.24,"cyl8")),g("giraffe",[.3,.62,-1.3],[.5,.28,.22]),...[[.1,-1.38],[.1,-1.22],[.5,-1.38],[.5,-1.22]].map(([i,e])=>g("giraffe",[i,.25,e],[.05,.5,.05])),g("giraffe",[.58,1,-1.3],[.09,.62,.09],[0,0,-.35]),g("giraffe",[.74,1.32,-1.3],[.2,.09,.09]),g("lion",[2.4,.24,-1.2],[.5,.22,.22]),Fe("sphere","mane",[2.72,.3,-1.2],[.17,.17,.17]),Fe("sphere","lion",[2.84,.3,-1.2],[.1,.1,.1]),...[[2.2,-1.3],[2.2,-1.1],[2.6,-1.3],[2.6,-1.1]].map(([i,e])=>g("lion",[i,.08,e],[.06,.16,.06])),X("water",[-2.4,.035,1.6],.7,.03),Fe("sphere","white",[-2.5,.08,1.5],[.08,.06,.12]),Fe("sphere","white",[-2.2,.08,1.75],[.08,.06,.12]),g("red",[2.2,.35,1.6],[.25,.04,.9],[.5,0,0]),g("stall1",[2.2,.4,1.12],[.3,.8,.1]),X("stall3",[1.1,.06,1.8],.35,.06),g("stall2",[1.1,.25,1.8],[.04,.3,.6]),g("stall2",[-.6,.55,2.3],[.16,1.1,.16]),g("stall2",[.6,.55,2.3],[.16,1.1,.16]),g("stall3",[0,1.15,2.3],[1.5,.14,.18]),...ae(-3.1,.9),...ae(3.1,.6),...ae(-1,2,.9)],abjZumaRock:[qe(4.8,4.8,0,0,"lawnDry"),Ie(1.2,4.2,1.2,.2,"gravel"),X("mud",[-1.2,.3,-1.1],.5,.6),sn("thatch",[-1.2,.85,-1.1],.68,.55),g("wood",[-1,.25,1.1],[1,.5,.5]),g("black",[-1,.53,1.1],[.7,.06,.32]),...bt(-1.7,1.5,"stall3"),Fe("rock","granite",[1.6,.35,-1.5],[.7,.6,.6],[.3,.5,.1]),Fe("rock","graniteLight",[-2,.25,.4],[.5,.4,.45],[.1,.8,.2]),g("wood",[2,.2,1.5],[.9,.06,.3]),g("wood",[.4,.45,2.2],[.06,.9,.06]),...ae(1.9,.2),...ae(-2,-2)],abjMotors:(function(){let i=[Ie(8.8,5.3,0,0,"plazaLight"),g("white",[0,.06,-.8],[7.4,.12,3]),g("showGlass",[0,.95,-.8],[7.2,1.66,2.8]),g("white",[0,1.86,-.8],[7.8,.16,3.4]),g("silver",[0,1.98,-.8],[7,.06,.25]),...[-3.55,3.55].flatMap(e=>[X("white",[e,.95,.55],.06,1.66,"cyl8"),X("white",[e,.95,-2.15],.06,1.66,"cyl8")]),g("silver",[2.6,.7,-2.45],[2.6,1.4,.5]),X("silver",[-3.4,.06,1.65],.55,.08)];for(let[e,t]of[[-4,0],[-1.3,2],[1.4,3],[4.1,5]])i.push(X("silver",[e,.8,2.5],.02,1.6,"cyl8"),g(Bi[t],[e+.12,1.15,2.5],[.22,.9,.01]));return i})(),abjStadium:(function(){let i=[X("plaza",[0,.02,0],4.1,.04),Fe("bowlWall","wall",[0,.65,0],[3.8,1.3,3.8]),Fe("bowlSeats","seats",[0,.62,0],[3.7,1.16,3.7]),X("track",[0,.05,0],2.45,.04),g("pitch",[0,.075,0],[2.7,.02,1.75]),g("white",[0,.09,0],[.04,.01,1.75]),g("white",[-1.2,.09,0],[.04,.01,.8]),g("white",[1.2,.09,0],[.04,.01,.8]),Fe("ring","canopy",[0,1.42,0],[3.95,3.95,1],[-Math.PI/2,0,-.35])];for(let e=0;e<=6;e++){let t=-.35+e/6*Math.PI*1.15;i.push(X("white",[3.85*Math.cos(t),.71,-(3.85*Math.sin(t))],.05,1.42,"cyl8"))}for(let[e,t]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let n=2.85*e,s=2.85*t;i.push(X("steel",[n,1.6,s],.06,3.2,"cyl8"),g("lamp",[n,3.25,s],[.6,.3,.12],[0,Math.atan2(-n,-s),0]))}return i})(),abjMagicLand:[qe(5.3,5.3,0,0,"lawnLight"),g("gravel",[0,.025,.4],[5,.03,.6]),g("gravel",[.2,.025,1.6],[.6,.03,2]),Fe("torus","track",[1.5,1,-1.5],[.75,.75,.75]),g("track",[1.5,.08,-1.5],[2.2,.06,.12]),g("track",[.2,.55,-2.1],[1.5,.06,.12],[0,0,.55]),X("silver",[.9,.5,-1.5],.04,1,"cyl8"),X("silver",[2.1,.5,-1.5],.04,1,"cyl8"),X("silver",[-.3,.3,-2.1],.04,.6,"cyl8"),g("concrete",[-1.6,.05,1.6],[1.6,.06,1.4]),g("stall4",[-1.6,.9,1.6],[1.7,.06,1.5]),...[[-2.35,.95],[-.85,.95],[-2.35,2.25],[-.85,2.25]].map(([i,e])=>X("silver",[i,.45,e],.03,.9,"cyl8")),g("stall0",[-2,.14,1.4],[.3,.12,.42],[0,.6,0]),g("stall1",[-1.3,.14,1.9],[.3,.12,.42],[0,-.4,0]),g("stall2",[-1.7,.14,2],[.3,.12,.42],[0,1.4,0]),g("neonPink",[-.5,.55,2.55],[.12,1.1,.12]),g("neonPink",[.9,.55,2.55],[.12,1.1,.12]),...ae(-2.3,-.4)],abjCityGate:(function(){let i=[Ie(4.2,4.2),g("lawn",[-1.3,.045,1.3],[1.2,.01,1.2]),g("lawn",[1.3,.045,1.3],[1.2,.01,1.2]),...Wt(-1.3,1.3,1,1,6,9,.05),...Wt(1.3,1.3,1,1,6,10,.05)];for(let e of[-.6,.6]){for(let t of[-6.7,-1.2999999999999998])i.push(g("white",[e,1.5,t],[.46,3,.46]));i.push(g("white",[e,3.15,-4],[.46,.34,5.86]),g("green",[e,2.88,-4],[.5,.12,5.5]))}for(let e of[-6.7,-1.2999999999999998])i.push(g("stone",[0,.14,e],[1.9,.44,.9]),g("white",[0,3.15,e],[1.66,.3,.46]));return i.push(mt("white",0,3.32,-4,1.7,2.4,1),sn("gold",[0,4.5,-4],.12,.4),g("stone",[0,.22,1.95],[2.6,.44,.14]),...Xt(-1.9,1.5,2.2),...Xt(1.1,1.5,2.2)),i})(),abjUniAbuja:[qe(9.8,8.8),...ae(-4.5,-3.8),...ae(0,-3.9,.9),...ae(4.5,-3.8),...ae(-4.5,1.5,.9),...ae(4.5,1.5,.9),...ae(-4.4,4,.9),...ae(4.4,4,.9),g("gravel",[0,.025,.6],[7,.03,.5]),g("gravel",[0,.025,2.1],[.5,.03,2.6]),g("white",[0,1.4,-2],[3.2,2.8,1.6]),...qt(0,-2,3.2,1.6,.6,2.4,.6,"window"),g("uniBlue",[0,2.9,-2],[3.3,.18,1.7]),...Ht(-.9,.9,4,-1.05,1),g("white",[0,1.05,-.95],[2.1,.1,.4]),g("cream",[-2.9,.6,-1.6],[1.6,1.2,2.4]),mt("roofRed",-2.9,1.2,-1.6,1.8,2.6,.5),g("cream",[2.9,.6,-1.6],[1.6,1.2,2.4]),mt("roofRed",2.9,1.2,-1.6,1.8,2.6,.5),g("windowLight",[2.6,.7,1.6],[2,1.4,1.4]),g("white",[2.6,1.44,1.6],[2.1,.08,1.5]),g("pitch",[-2.4,.035,1.8],[2.6,.03,1.8]),g("white",[-2.4,.055,1.8],[.04,.01,1.8]),g("white",[-3.62,.25,1.8],[.04,.5,.6]),g("white",[-1.18,.25,1.8],[.04,.5,.6]),g("uniBlue",[-1,.5,3.2],[.3,1,.3]),g("uniBlue",[1,.5,3.2],[.3,1,.3]),g("white",[0,1.05,3.2],[2.3,.18,.3]),...ae(-3.5,-.2),...ae(3.6,.2),...ae(-3.6,3),...ae(3.5,3),...ae(.9,-.2,.9)],abjGwagwalada:[Ie(6.8,4.8,0,0,"concrete"),g("cream",[-1.6,.6,-1.2],[3,1.2,1.8]),mt("roofTile",-1.6,1.2,-1.2,3.2,2,.6),...Ht(-2.7,-.5,5,-.2,.9),g("white",[1.6,1.3,-1.4],[.8,2.6,.8]),X("cream",[1.6,2.2,-.99],.25,.04,"cyl",[Math.PI/2,0,0]),g("black",[1.6,2.24,-.96],[.03,.18,.01]),mt("roofTile",1.6,2.6,-1.4,1,1,.5),...Fs(-2.6,1.1,"stall0"),...Fs(-1.3,1.1,"stall3"),...Fs(0,1.1,"stall5"),...st(1.4,1.9,Math.PI/2,"carGreen"),...st(2.4,1.9,Math.PI/2,"carGreen"),...st(1.4,1.1,Math.PI/2,"carWhite"),...ae(-3,1.9,1.1),...ae(3,-1.6,1.1)],home_abjKubwa:[qe(4.3,4.3),Ie(1,1.9,1.2,1.15,"concrete"),g("cream",[-.4,.45,-.5],[2.4,.9,1.8]),mt("roofRed",-.4,.9,-.5,2.7,2.1,.65),g("dark",[-.4,.3,.42],[.36,.6,.04]),g("window",[-1.1,.5,.42],[.4,.3,.04]),g("window",[.3,.5,.42],[.4,.3,.04]),g("concrete",[1.4,.42,-1.3],[.45,.84,.45]),X("tank",[1.4,1.1,-1.3],.28,.5),g("cream",[-2.08,.22,0],[.12,.44,4.2]),g("cream",[2.08,.22,0],[.12,.44,4.2]),g("cream",[0,.22,-2.08],[4.2,.44,.12]),g("cream",[-1.1,.22,2.08],[2,.44,.12]),g("black",[1.2,.2,2.08],[1,.4,.06]),...st(1.2,1.2,0,"carGreen"),...ae(-1.5,1.3,.9)],home_abjGwarinpa:[qe(4.3,4.3),Ie(1,1.9,1.2,1.15,"concrete"),g("cream",[-.4,.8,-.5],[2.4,1.6,1.8]),...qt(-.4,-.5,2.4,1.8,.5,1.2,.7,"window"),g("white",[-.4,.95,.52],[1.4,.06,.4]),g("balGlass",[-.4,1.08,.72],[1.4,.22,.02]),mt("roofTile",-.4,1.6,-.5,2.7,2.1,.6),g("stone",[-2.08,.25,0],[.12,.5,4.2]),g("stone",[2.08,.25,0],[.12,.5,4.2]),g("stone",[0,.25,-2.08],[4.2,.5,.12]),g("stone",[-1.1,.25,2.08],[2,.5,.12]),...st(1.2,1.2,0,"carSilver"),...ae(-1.6,1.4,.9)],home_abjWuse2:(function(){let i=[qe(3.8,3.8),Ie(3.6,.9,0,1.4,"concrete"),g("white",[0,1.15,-.5],[3,2.3,1.8]),g("silver",[0,2.34,-.5],[3.1,.08,1.9])];for(let e of[.55,1.15,1.75])i.push(g("windowLight",[0,e+.18,.42],[2.6,.3,.04]),g("white",[0,e,.55],[2.6,.06,.3]),g("balGlass",[0,e+.13,.69],[2.6,.22,.02]));return i.push(...st(-.9,1.4,Math.PI/2,"carBlue"),...st(.6,1.4,Math.PI/2,"carWhite"),...ae(-1.55,-1.55,.8),...ae(1.55,-1.55,.8)),i})(),home_abjMaitama:[qe(4.3,4.3,0,0,"lawnLight"),g("white",[-.5,.75,-.7],[2.6,1.5,1.8]),g("white",[.95,.45,-.4],[1.2,.9,1.4]),g("white",[-.5,1.54,-.7],[2.7,.08,1.9]),g("white",[.95,.94,-.4],[1.3,.08,1.5]),g("glass",[-.5,.75,.22],[2.2,1.1,.04]),g("plazaLight",[.9,.025,1.15],[1.9,.03,1.3]),Ui(1.4,.8,.9,1.15,.055,"pool"),Jn(-2,0,.2,4),Jn(2,0,.2,4),Jn(0,-2,4,.2),...Be(-1.4,1.4,1.3),...Be(1.8,-1.6,1.2),...Wt(-.8,1.6,1,.4,6,11)],home_abjAsokoro:[qe(4.3,4.3,0,0,"lawnLight"),Ie(3.2,1,0,1.6,"plazaLight"),g("cream",[0,.9,-.8],[3.2,1.8,1.8]),...Ht(-.8,.8,4,.3,1.5),g("white",[0,1.58,.35],[2,.12,.7]),mt("white",0,1.64,.35,2,.7,.35),mt("roofTile",0,1.8,-.8,3.5,2.1,.7),X("stone",[0,.1,1.6],.4,.12),X("water",[0,.17,1.6],.34,.02),Ui(1,.6,1.5,-1.6,.05,"pool"),...Be(-1.8,1.6,1.4),...Be(1.8,1.6,1.4),g("stone",[-1.6,.35,2.05],[.3,.7,.3]),g("stone",[1.6,.35,2.05],[.3,.7,.3]),...st(-1,1.6,Math.PI/2,"carBlack")]},sp=[Fe("rock","granite",[0,1.8,0],[9,6.8,6.8],[.2,.5,.1]),Fe("rock","graniteLight",[-2.9,2.3,2.7],[6.1,8.3,5.2],[.4,1.2,0]),Fe("rock","graniteDark",[4.3,1.3,-3.6],[5.6,5,4.9],[.1,2.2,.3]),Fe("rock","granite",[-5.6,.2,-1.1],[4,3.1,3.8],[.6,.3,.2]),Fe("rock","graniteDark",[2.9,.4,4.7],[4,2.9,3.2],[.3,.9,.5]),Fe("rock","graniteLight",[6.8,.5,1.8],[3.6,4,3.6],[.7,.4,.1]),...[[-8.2,4,1],[-5,6.9,.9],[-.6,7.6,1],[4.8,7,.8],[8.4,4.6,.9],[-9,.6,1.1],[-8.2,-3.8,1],[9.2,-2,.9]].map(([i,e,t])=>Ni("bush",[i,0,e],[t,.8*t,t]))],rp=[Fe("mono","granite",[0,5,0],[5.8,10,6.6]),Ni("graniteLight",[0,9.95,0],[4.55,3,5.2]),...[[-1.9,6.2,.22],[.1,6.8,.04],[2,5.9,-.2]].map(([i,e,t])=>g("streak",[i,e,Math.sqrt(33.0625-i*i)-.05],[.44,5.2,.16],[-.12,0,t])),g("streak",[5.2,6.4,1.2],[.16,4.4,.6],[0,0,.12]),...[[6,4,1.8],[-6.2,2.8,1.6],[3.6,6.8,1.2],[-4,6.4,1.4],[6.8,-3,1.6]].map(([i,e,t],n)=>Fe("rock",n%2?"graniteDark":"granite",[i,.3*t,e],[t,.7*t,t],[n,.7*n,0])),...[[-7.2,.4,1.2],[7.8,.8,1.1],[1.2,7.8,1],[-2,8,.9],[5.4,6,1]].map(([i,e,t])=>Ni("bush",[i,0,e],[t,.8*t,t]))],ap=[qe(6.2,4.6),g("stone",[0,.08,.2],[4.4,.16,2.6]),g("white",[0,.7,-.2],[3.6,1.1,1.6]),g("green",[0,1.3,-.2],[3.7,.1,1.7]),Ni("domeGreen",[0,1.35,-.2],[.55,.5,.55]),...Ht(-1.5,1.5,7,.7,1,.16,.05),...Xt(2.2,1.6,2),Jn(0,-2.15,6,.25),Jn(-3,0,.25,4.3),Jn(3,0,.25,4.3),X("stone",[0,.1,1.7],.45,.12),X("water",[0,.17,1.7],.38,.02)];var lp,Cn=Math.PI;function xu(i,e,t,n,s){let r=[Ie(i-.2,e-.2,0,0,"plazaLight"),g("white",[0,.06,-.7],[i-1.4,.12,.5*e]),g(t,[0,.9,-.7],[i-1.6,1.56,.5*e-.2]),g("white",[0,1.76,-.7],[i-1,.16,.5*e+.4]),g(n,[0,1.88,-.7+.25*e+.15],[i-1.2,.06,.06])];for(let a of[-(i-1.6)/2,(i-1.6)/2])r.push(X("white",[a,.9,-.7+.25*e],.05,1.56,"cyl8"));for(let[a,o]of(s.slice(0,3).forEach((l,c)=>r.push(...st(-1.6+1.6*c,-.8,.5,l))),s.slice(3).forEach((l,c)=>r.push(...st(-(i/2)+1+1.1*c,e/2-.9,.35,l))),[[-(i/2)+.4,1],[i/2-.4,3]]))r.push(X("silver",[a,.7,e/2-.4],.02,1.4,"cyl8"),g(Bi[o],[a+.11,1,e/2-.4],[.2,.8,.01]));return r}function cp(i,e,t){return[qe(i-.2,e-.2,0,0,"lawnLight"),g("white",[-.4,.55,-.6],[i-1.8,1.1,.5*e]),g(t,[-.4,1.12,-.6],[i-1.7,.08,.5*e+.1]),g("wood",[-.4,.5,-.6+.25*e+.01],[.4*i,.8,.02]),Ui(1.2,.7,i/2-1.1,.6,.055,"pool"),g("wood",[i/2-1.1,.025,1.15],[1.4,.03,.3]),Jn(0,e/2-.2,i-.6,.2),...Be(-(i/2)+.5,1,1.2),...Be(i/2-.4,-(e/2)+.5,1.3),...Wt(-.6,1,1.4,.4,6,27)]}function hp(i,e,t){return[Ie(i-.2,e-.2,0,0,"concrete"),g("concrete",[0,.8,-.5],[i-1,1.6,.55*e]),g("glass",[0,.75,-.5+.275*e+.01],[i-1.4,1.1,.02]),g(t,[0,1.62,-.5],[i-.9,.1,.55*e+.1]),g("black",[-(i/2)+1.2,.35,-.5+.275*e+.03],[.5,.3,.02]),...[-.6,-.3,0,.3].map(n=>X("steel",[n+i/2-1.4,.12,e/2-.5],.1,.02,"cyl8",[Cn/2,0,0])),...st(-(i/2)+1,e/2-.6,Cn/2,"carSilver"),...ae(i/2-.4,-(e/2)+.5,.9)]}var up={abjIdu:(function(){let i=[Ie(9.8,4.8,0,0,"concrete"),g("gravel",[0,.05,-1.6],[9.6,.02,1])];for(let e of[-1.8,-1.4])i.push(g("steel",[0,.075,e],[9.6,.03,.05]));for(let e of[-3.1,-.4,2.3])i.push(g("white",[e,.42,-1.6],[2.5,.6,.6]),g("green",[e,.28,-1.295],[2.5,.1,.02]),g("window",[e,.53,-1.295],[2.3,.13,.02]),g("concrete",[e,.74,-1.6],[2.44,.04,.54]));for(let e of(i.push(g("green",[4.15,.44,-1.6],[1.1,.64,.6]),g("darkGlass",[4.71,.56,-1.6],[.02,.22,.46]),g("red",[4.15,.24,-1.295],[1.1,.06,.02])),i.push(g("plazaLight",[0,.08,-.65],[9,.08,.8]),g("white",[0,1.02,-.65],[8.6,.06,.9]),...Ht(-4,4,6,-.3,.96,.08,.04,"steel")),i.push(g("cream",[-2.6,.62,1.2],[3.6,1.24,1.5]),...qt(-2.6,1.2,3.6,1.5,.45,.95,.5,"windowLight"),g("green",[-2.6,1.28,1.2],[3.7,.1,1.6]),g("dark",[-2.6,.32,1.96],[.6,.6,.02])),[1.25,1.55]))i.push(g("steel",[2.6,.06,e],[4,.02,.04]));return i.push(g("white",[2.4,.36,1.4],[1.7,.44,.42]),g("green",[2.4,.24,1.615],[1.7,.08,.01]),g("window",[2.4,.44,1.615],[1.5,.12,.01])),i.push(...Xt(4.5,2,1.6),...Be(-4.6,1.9),...Be(.2,2.1,1.1)),i})(),abjJabiPark:(function(){let i=[Ie(7.6,4.4,0,0,"concrete"),g("asphalt",[.6,.045,-.6],[6.2,.01,2.6])];for(let e=0;e<5;e++)i.push(g("white",[-2+1.3*e,.055,-.6],[.04,.01,2.2]));return[[-1.35,"red"],[-.05,"carBlue"],[1.25,"red"],[2.55,"carGreen"]].forEach(([e,t])=>i.push(g("white",[e,.33,-.75],[.56,.5,1.7]),g(t,[e,.2,-.75],[.57,.08,1.71]),g("window",[e,.45,-.75],[.57,.12,1.5]),g("window",[e,.42,.105],[.46,.2,.01]))),i.push(g("roofTin",[-3.1,.92,-.5],[1.2,.06,3]),...Ht(-1.8,.8,3,0,.9,0,.03,"steel").map(e=>({...e,p:[-3.55,e.p[1],e.p[0]]})),...Ht(-1.8,.8,3,0,.9,0,.03,"steel").map(e=>({...e,p:[-2.65,e.p[1],e.p[0]]})),g("wood",[-3.1,.15,-.5],[.3,.06,2.4])),i.push(...Fs(2.6,1.55,"stall0"),...bt(-.9,1.55,"stall2"),...st(.7,1.6,Cn/2,"carGreen"),...ae(-3.2,1.7),...ae(3.4,-1.8,.9)),i})(),abj345:[Ie(6.4,3.7,0,0,"darkPaving"),g("black",[0,.9,-.5],[5.4,1.8,2]),g("lamp",[0,1.78,.51],[5.4,.05,.03]),g("stall3",[0,1.2,.505],[5.2,.06,.02]),g("stall0",[0,1,.505],[5.2,.06,.02]),X("stall3",[1.6,2.06,-.6],.5,.5,"cyl",[Cn/2,0,0]),g("gold",[0,.82,.9],[1.6,.06,.7]),X("gold",[-.7,.4,1.2],.03,.8,"cyl8"),X("gold",[.7,.4,1.2],.03,.8,"cyl8"),g("red",[0,.045,1.4],[.9,.01,1]),...st(-2.4,1.3,.3,"carBlack"),...st(2.4,1.3,-.3,"carWhite"),...Be(-3,-1.5,1.2)],abjPlay:[Ie(6.4,3.7,0,0,"darkPaving"),g("dark",[0,.7,-.7],[5.2,1.4,1.8]),Fe("halfCyl","glass",[0,.7,.2],[.7,1.4,2.4],[0,-Cn/2,0]),g("neonPink",[0,1.42,.2],[5.2,.05,.05]),g("stall4",[0,1.45,-.7],[5.3,.08,1.9]),g("neonPink",[-2.58,.7,.2],[.04,1.2,.04]),g("neonPink",[2.58,.7,.2],[.04,1.2,.04]),g("stall4",[0,.9,1.15],[2,.06,.6]),...[[-.6,1.5],[.6,1.5]].map(([i,e])=>X("silver",[i,.18,e],.03,.36,"cyl8")),...bt(-2.4,1.4,"stall4"),...bt(2.4,1.4,"stall0"),...st(-1.4,1.35,0,"carSilver")],abjMoscow:[Ie(6.4,3.7,0,0,"darkPaving"),g("showGlass",[0,.9,-.5],[4.6,1.8,2]),g("white",[0,.9,-.6],[4.2,1.7,1.6]),g("neonBlue",[0,1.8,.51],[4.6,.05,.03]),g("neonBlue",[0,.06,.51],[4.6,.04,.03]),g("silver",[0,1.84,-.5],[4.7,.08,2.1]),g("asphalt",[0,.045,1.1],[1.4,.01,.9]),g("dark",[0,.12,.9],[1.2,.16,.5]),g("silver",[0,.86,1.05],[1.8,.06,.8]),X("silver",[-2.6,.2,-1.4],.15,.3),X("silver",[2.6,.2,-1.4],.15,.3),sn("beam",[-2.85,1.65,-1.4],.4,2.6,"cone8",[Cn,0,-.2]),sn("beam",[2.85,1.65,-1.4],.4,2.6,"cone8",[Cn,0,.2]),...st(2.4,1.2,-.3,"carBlack"),...st(-2.4,1.2,.3,"carBlack")],abjTokyo:(function(){let i=[Ie(6.4,3.7,0,0,"darkPaving"),g("black",[0,.75,-.5],[4.8,1.5,2]),mt("red",0,1.5,-.5,5.4,2.6,.45),g("black",[0,2.15,-.5],[3,.5,1.2]),mt("red",0,2.4,-.5,3.6,1.8,.4),g("neonPink",[0,1.38,.51],[4.8,.05,.03]),g("red",[0,.045,1.3],[.9,.01,1]),...st(2.5,1.3,-.3,"carWhite")];for(let e of[-2.1,-1.2,1.2,2.1])i.push(X("silver",[e,.6,.85],.015,1.2,"cyl8"),Fe("sphere","red",[e,1.12,.85],[.12,.16,.12]));return i})(),abjMagicCity:[Ie(3.9,4.2,0,0,"darkPaving"),g("dark",[0,1,-.6],[3.4,2,2.4]),...qt(0,-.6,3.4,2.4,1.3,1.7,.4,"darkGlass"),g("neonPink",[0,.95,.61],[1.6,.05,.03]),g("stall4",[0,.5,.605],[1.4,.9,.02]),g("neonPink",[-.82,.5,.61],[.04,.9,.03]),g("neonPink",[.82,.5,.61],[.04,.9,.03]),g("red",[0,.045,1.2],[.8,.01,1]),...[[-.5,1.1],[.5,1.1],[-.5,1.6],[.5,1.6]].map(([i,e])=>X("gold",[i,.17,e],.03,.34,"cyl8")),g("black",[1.4,.3,1.3],[.4,.6,.4]),...st(-1.4,1.4,.2,"carBlack")],abjAbujaCar:[...xu(7,5,"darkGlass","gold",["carBlack","carRed","carWhite","carBlack","carSilver","carWhite","carRed"]),g("gold",[0,1.7,1.38],[3.2,.05,.04])],abjKefiano:xu(7,5,"deepGlass","carBlue",["carSilver","carBlack","carWhite","carWhite","carBlack","carSilver","carBlue"]),abjSarkinmota:xu(6.4,4.8,"showGlass","red",["carWhite","carBlack","carRed","carWhite","carWhite","carBlack"]),abjCentralPark:(function(){let i=[qe(8.8,6.8,0,0,"lawnLight"),g("gravel",[0,.025,2],[8.4,.03,.5]),g("gravel",[.6,.025,.1],[.5,.03,3.4])];i.push(Fe("cyl","asphalt",[-2.4,.035,-1.2],[2,.03,1.3]),Fe("cyl","lawn",[-2.4,.05,-1.2],[1.1,.02,.5]));for(let e=0;e<16;e++){let t=e/16*Cn*2;i.push(X(e%2?"white":"red",[-2.4+2.1*Math.cos(t),.08,-1.2+1.4*Math.sin(t)],.1,.12,"cyl8"))}return[[-3.4,-.9,.4,"carRed"],[-1.6,-2.1,Cn/2,"carBlue"],[-1.4,-.4,-.6,"carGreen"]].forEach(([e,t,n,s])=>i.push(g(s,[e,.1,t],[.18,.08,.3],[0,n,0]))),i.push(g("sandDark",[2.6,.035,-1.6],[3,.03,2.2]),...Cr(1.1,4.1,-2.7,-.5,.5,"steel")),[[1.8,-2,"stall2"],[2.8,-1.2,"stall3"],[3.4,-2.2,"stall1"],[2.2,-.9,"stall5"]].forEach(([e,t,n])=>i.push(X(n,[e,.22,t],.18,.4))),i.push(g("cream",[-3.2,.4,1.6],[1.6,.8,1]),mt("roofRed",-3.2,.8,1.6,1.8,1.2,.4),g("stall3",[-3.2,.62,2.12],[1.4,.06,.06])),i.push(g("red",[2.4,.35,1],[.25,.04,.9],[.5,0,0]),g("stall1",[2.4,.4,.52],[.3,.8,.1]),X("stall3",[3.4,.06,1.1],.35,.06)),i.push(...bt(-1.2,1.2,"stall0"),...bt(0,2.9,"stall3"),...ae(4,2.9,1.2),...ae(-4,2.9,1.1),...ae(4,.3,1.1,"leafDark"),...ae(-.6,-3,1.2,"leafDark")),i})(),abjCityPark:(function(){let i=[qe(4.2,5.3,0,0,"lawnLight"),g("gravel",[0,.025,.4],[.5,.03,4.8])];for(let[e,t]of(i.push(g("wood",[-.9,.1,-1.7],[1.6,.2,1]),mt("white",-.9,.9,-1.7,1.8,1.2,.35),...Ht(-1.6,-.2,2,-1.25,.7,.2,.03,"white")),[[1.2,-1.4],[1.2,.4],[-1.2,.8]]))i.push(g("wood",[e,.18,t],[.7,.05,.4]),g("wood",[e,.1,t-.32],[.7,.04,.12]),g("wood",[e,.1,t+.32],[.7,.04,.12]));for(let[e,t]of[[-1.8,-.4],[1.8,1.6],[-1.8,2.3],[1.8,-2.3]])i.push(X("steel",[e,.55,t],.02,1.1,"cyl8"),g("lamp",[e,1.12,t],[.1,.06,.1]));return i.push(g("red",[.9,.35,2],[.2,.04,.7],[.5,0,0]),g("stall2",[.9,.38,1.62],[.24,.76,.08])),i.push(...Be(-1.6,-2.4),...Be(1.7,2.5),...Be(-1.7,1.5,1.2),...Be(1.8,-.5,1.4),...Wt(0,2.4,1.2,.4,6,21)),i})(),abjMonoliza:(function(){let i=[qe(9.2,6.8,0,0,"lawnLight"),g("gravel",[0,.025,1.9],[8.8,.03,.5])];for(let e of(i.push(g("pitch",[-2.2,.035,-1.1],[4,.03,2.6]),g("white",[-2.2,.055,-1.1],[.04,.01,2.6])),[-4.1,-.3]))i.push(g("white",[e,.2,-1.1],[.05,.4,.8]));for(let[e,t]of[[-4.3,-2.6],[-.1,-2.6],[-4.3,.4],[-.1,.4]])i.push(X("steel",[e,1,t],.04,2,"cyl8"),g("lamp",[e,2.05,t],[.4,.2,.1]));i.push(X("white",[1.6,.06,-1.7],.8,.08),X("gold",[1.6,.5,-1.7],.05,.9,"cyl8"),sn("stall4",[1.6,1.1,-1.7],.95,.5,"cone"));for(let e=0;e<6;e++){let t=e/6*Cn*2;i.push(g(Bi[e],[1.6+.55*Math.cos(t),.25,-1.7+.55*Math.sin(t)],[.12,.16,.24],[0,-t,0]))}return i.push(g("concrete",[3.6,.05,-.6],[1.6,.06,1.4]),g("stall0",[3.6,.85,-.6],[1.7,.06,1.5]),g("stall1",[3.3,.14,-.4],[.3,.12,.4],[0,.6,0]),g("stall2",[3.9,.14,-.8],[.3,.12,.4],[0,-.4,0])),i.push(g("sandDark",[1.6,.035,.9],[2,.03,1.2]),...Cr(.6,2.6,.3,1.5,.4,"steel"),X("stall3",[1.3,.16,.9],.14,.3),X("stall5",[1.9,.16,.7],.14,.3)),i.push(g("stall4",[-.6,.55,3],[.14,1.1,.14]),g("stall4",[.6,.55,3],[.14,1.1,.14]),g("stall3",[0,1.15,3],[1.4,.14,.16])),i.push(...ae(4.2,2.9,1.1),...ae(-4.2,2.9,1.2),...ae(4.2,-2.9,1,"leafDark"),...bt(-2.4,2.8,"stall3")),i})(),abjWTC:(function(){let i=[Ie(6.8,6.4,0,0,"plazaLight"),g("stone",[0,.4,.4],[6.2,.8,2.8])];for(let[e,t]of[[-1.5,5.4],[1.5,4.8]])i.push(g("deepGlass",[e,.8+t/2,.5],[1.9,t,1.9]),...qt(e,.5,1.9,1.9,1.3,.8+t-.3,.6,"white"),g("silver",[e,.8+t+.06,.5],[1.7,.12,1.7]));return i.push(X("silver",[-1.5,6.6,.5],.03,.8,"cyl8"),g("glass",[0,.5,1.81],[3,.6,.02])),i.push(X("stone",[0,.08,2.6],.6,.08),Ui(1,.5,0,2.6,.13),...Be(-2.9,2.7),...Be(2.9,2.7),...Be(-2.9,-2.6),...Be(2.9,-2.6),...ae(0,-2.4,1.1)),i})(),abjICC:(function(){let i=[qe(8,6.4),Ie(7,2.2,0,1.8)];i.push(g("cream",[0,.8,-.9],[6.4,1.6,3]),Fe("halfCyl","white",[0,1.6,-.9],[1.3,6.2,1.5],[0,0,Cn/2]),g("green",[0,1.62,.62],[6.5,.1,.06])),i.push(...Ht(-2.8,2.8,9,.8,1.4,0,.07),g("white",[0,1.45,.75],[6.2,.1,.4]),g("stone",[0,.06,.95],[4,.12,.5]));for(let e=0;e<9;e++){let t=-3.2+.8*e;i.push(X("silver",[t,.65,2.75],.02,1.3,"cyl8"),g(e%3==1?"green":Bi[e%6],[t+.13,1.18,2.75],[.26,.18,.015]))}return i.push(...ae(-3.6,-2.7),...ae(3.6,-2.7),...Wt(-2.6,1.6,1.4,.4,6,23),...Wt(2.6,1.6,1.4,.4,6,24)),i})(),abjBarYucca:(function(){let i=[Ie(4.4,5.8,0,0,"plaza"),g("cream",[0,.9,-.6],[3.6,1.8,3.6]),...qt(0,-.6,3.6,3.6,.5,1.4,.45,"windowLight"),g("wood",[0,1.86,-.6],[3.7,.12,3.7])];for(let[e,t,n,s]of[[0,1.24,3.7,.03],[0,-2.44,3.7,.03],[-1.84,-.6,.03,3.7],[1.84,-.6,.03,3.7]])i.push(g("balGlass",[e,2.1,t],[n,.36,s]));for(let[e,t,n]of(i.push(g("dark",[-1,2.1,-1.8],[1.2,.36,.4]),g("lamp",[0,2.42,.4],[3.2,.03,.03])),[[-.8,.4,"stall3"],[.8,.2,"stall0"],[.9,-1.4,"stall5"]]))i.push(...bt(e,t,n,.5,1.92));return i.push(...Be(-1.6,2.2,1.2),...Be(1.6,2.2,1.2),...st(0,2,Cn/2,"carWhite")),i})(),abjBoto:(function(){let i=[qe(3.9,4.2),Ie(1.2,1.4,.8,1.4,"gravel"),g("wood",[0,.6,-.5],[3.2,1.2,2.2]),mt("roofTile",0,1.2,-.5,3.4,2.4,.5),g("gold",[0,1.18,.62],[3.3,.05,.04])];for(let e of[-1.1,-.4,.4,1.1])i.push(g("lamp",[e,.6,.61],[.36,.7,.02]));return i.push(...ae(-1.4,1.4,.9),...Wt(-.4,1.5,1,.4,5,25),Jn(0,2,3.6,.2)),i})(),abjHavana:(function(){let i=[Ie(3.9,4.2,0,0,"plaza"),g("cream",[0,.85,-.5],[3.4,1.7,2.2]),g("white",[0,1.74,-.5],[3.5,.1,2.3]),g("red",[0,.045,1.3],[.7,.01,1.4])];for(let e of[-1.2,0,1.2])i.push(g("lamp",[e,.9,.61],[.5,.8,.02]),g("red",[e,1.38,.82],[.7,.04,.42],[.35,0,0]));return i.push(...Be(-1.6,1.4,1.3),...Be(1.6,1.4,1.3)),i})(),abjBarracuda:(function(){let i=[Ie(4.2,4.2,0,0,"plazaLight"),g("white",[0,1.6,.3],[2.6,3.2,2.4]),g("deepGlass",[0,1.6,1.51],[2.2,2.8,.02]),g("wood",[0,3.26,.3],[2.7,.12,2.5])];for(let[e,t,n,s]of[[0,1.55,2.7,.03],[0,-.95,2.7,.03],[-1.35,.3,.03,2.5],[1.35,.3,.03,2.5]])i.push(g("balGlass",[e,3.5,t],[n,.36,s]));for(let[e,t,n]of(i.push(g("neonBlue",[0,3.72,1.55],[2.6,.03,.03]),g("pool",[-.5,3.335,-.2],[.9,.03,.7])),[[.6,.8,"stall1"],[-.6,.9,"stall5"]]))i.push(...bt(e,t,n,.45,3.32));return i.push(...Be(-1.7,-1.6,1.2),...Be(1.7,-1.6,1.2)),i})(),abjPappies:(function(){let i=[qe(4.8,4.4),g("wood",[-.8,.55,-1.1],[2.8,1.1,1.6]),mt("thatch",-.8,1.1,-1.1,3,1.8,.6),X("concrete",[.4,1.3,-1.5],.12,.8,"cyl8")];for(let e of[.6,1.5])i.push(g("wood",[.6,.22,e],[2.4,.05,.5]),g("wood",[.6,.12,e-.4],[2.4,.04,.14]),g("wood",[.6,.12,e+.4],[2.4,.04,.14]));for(let e of[-1.9,2])i.push(X("steel",[e,.6,1],.02,1.2,"cyl8"));return i.push(g("lamp",[0,1.18,1],[3.9,.03,.03]),...ae(-1.8,1.5,.9),...ae(1.9,-1.4,1)),i})(),abjTulip:[Ie(4.2,4.2,0,0,"plazaLight"),g("white",[0,.7,-.6],[3.2,1.4,2]),g("glass",[0,.55,.41],[2.6,.8,.02]),g("flowerPink",[0,1.05,.7],[3.2,.05,.6],[.3,0,0]),g("white",[0,1.44,-.6],[3.3,.08,2.1]),...Wt(0,.55,2.8,.15,8,26,.06),...bt(-1,1.4,"flowerPink",.55),...bt(1,1.4,"flowerPink",.55),...ae(-1.7,-1.6,.8)],abjMarks:[qe(4.2,4.2),Ie(1,1.4,.9,1.3,"gravel"),g("black",[0,.5,-.6],[2.8,1,2]),mt("darkPaving",0,1,-.6,3.6,2.8,.55),g("lamp",[0,.5,.41],[2.2,.5,.02]),g("red",[0,.86,.43],[2.6,.06,.02]),Ui(1.2,.8,-1,1.3),Fe("rock","graniteLight",[-1.7,.12,1],[.2,.16,.18]),X("trunk",[1.6,.3,1.6],.05,.6,"cyl8"),Fe("ico","red",[1.6,.8,1.6],[.45,.4,.45]),...ae(-1.7,-1.7,.8,"leafDark")],abjMars:[Ie(3.4,4.2,0,0,"plazaLight"),g("cream",[0,1.1,-.8],[3,2.2,1.8]),...qt(0,-.8,3,1.8,1.5,1.9,.4,"window"),g("flowerPink",[0,.6,.11],[2.4,1,.02]),g("glass",[0,.6,.12],[1.8,.8,.02]),g("white",[0,1.15,.35],[2.6,.05,.5],[.3,0,0]),...bt(-.8,1.2,"flowerPink",.5),...bt(.8,1.4,"white",.5)],abjPalmAve:(function(){let i=[qe(4.2,4.2),Ie(2.6,1.6,0,-.8,"plazaLight"),...Ht(-1.1,1.1,4,-1.5,.9,.04,.04),...Ht(-1.1,1.1,4,-.1,.9,.04,.04),mt("white",0,.95,-.8,2.6,1.8,.4)];for(let[e,t]of[[-1,1],[.6,1.3]])i.push(X("wood",[e,.22,t],.22,.04),X("wood",[e,.11,t],.03,.22,"cyl8"));return i.push(...Be(-1.7,-1.7,1.6),...Be(1.7,-1.7,1.5),...Be(-1.7,1.7,1.4),...Be(1.7,.6,1.5),g("lamp",[0,1.4,.4],[3,.03,.03])),i})(),abjEscape:cp(6,4.4,"teal"),abjLuxeSpa:cp(5,4.6,"stall4"),abjEfcc:((lp=[qe(6.8,4.8),Ie(6,1.4,0,1.6),g("white",[0,1.5,-.7],[5.2,3,2]),...qt(0,-.7,5.2,2,.6,2.7,.5,"deepGlass"),g("green",[0,3.06,-.7],[5.3,.12,2.1]),g("glass",[0,.6,.31],[1.4,1,.02]),g("green",[0,1.15,.6],[1.8,.06,.6])]).push(...Xt(-2.6,1.6,1.8),...Xt(-1.9,1.6,1.8),...Xt(2.2,1.6,1.8),...ae(-3,-1.9),...ae(3,-1.9),...st(1,1.7,Cn/2,"carBlack")),lp),abjGarkiPolice:(function(){let i=[Ie(5.8,4.6,0,0,"concrete"),g("white",[-.6,.65,-.8],[4,1.3,2]),g("uniBlue",[-.6,1,.21],[4,.2,.02]),g("uniBlue",[-.6,1.34,-.8],[4.1,.1,2.1]),...qt(-.6,-.8,4,2,.55,.55,.5,"window"),g("dark",[-.6,.35,.22],[.6,.7,.02])];for(let[e,t,n]of[[1.6,1.4,0],[2.4,1.4,0]])i.push(...st(e,t,n,"carWhite"),g("uniBlue",[e,.1,t],[.31,.04,.61],[0,n,0]));return i.push(...Xt(2.4,-.4,1.8),g("red",[-1.6,.4,2],[1.4,.05,.05]),X("black",[-2.3,.2,2],.04,.4,"cyl8"),...ae(-2.5,1.4,.9)),i})(),abjGarkiMarket:(function(){let i=[Ie(6.2,4.6,0,0,"concrete"),g("cream",[0,.55,-1.3],[5.6,1.1,1.6]),mt("roofTin",0,1.1,-1.3,5.9,1.9,.6)];for(let e of[.3,1.45])for(let t=0;t<4;t++)i.push(...Fs(-2.1+1.4*t,e,Bi[(t+2*(e>1))%6]));return i.push(...bt(-2.8,2,"stall3"),...bt(2.8,2,"stall1")),i})(),abjFraser:[qe(6.2,3.6),Ie(6,1,0,1.3),g("white",[-.6,1.8,.1],[2.8,3.6,1.4]),...qt(-.6,.1,2.8,1.4,.6,3.3,.45,"window"),g("teal",[-.6,3.66,.1],[2.9,.12,1.5]),g("white",[-.6,.6,1.05],[1.6,.06,.6]),Ui(1.6,.8,2,-.9,.06,"pool"),g("wood",[2,.025,-.1],[1.8,.03,.4]),...bt(1.3,-.1,"stall5",.5),...Be(-2.7,1.3),...Be(1.6,1.3,1.1),...Be(2.8,.6)],abjEcoFitness:hp(5,4.6,"hubGreen"),abjIFitness:hp(6,5,"red"),abjTrukadero:[Ie(3.9,4.2,0,0,"darkPaving"),g("dark",[0,.7,-.7],[3.4,1.4,2]),g("neonPink",[0,1.38,.31],[3.4,.05,.03]),g("neonBlue",[0,.1,.31],[3.4,.04,.03]),Fe("cylT","white",[.9,1.9,-.7],[.22,1,.22]),Fe("sphere","white",[.9,2.5,-.7],[.18,.22,.18]),g("red",[.9,2.1,-.7],[.36,.06,.36]),g("wood",[0,.06,1],[3.4,.08,1.2]),...bt(-1,1,"stall4",.5,.1),...bt(.8,1.1,"stall1",.5,.1)],abjPolo:(function(){let i=[qe(10.8,6.3,0,0,"fairway"),g("lawn",[0,.035,-1],[9.6,.03,3.4])];for(let e of[-2.7,.7])i.push(g("white",[0,.08,e],[9.6,.12,.06]));for(let e of[-4.6,4.6])i.push(X("white",[e,.35,-1.4],.03,.7,"cyl8"),X("white",[e,.35,-.6],.03,.7,"cyl8"));for(let[e,t,n]of[[-1.2,-1.3,"stall1"],[1,-.8,"stall0"]])i.push(g("mud",[e,.32,t],[.55,.22,.2]),g("mud",[e+.32,.48,t],[.12,.26,.1],[0,0,-.4]),...[[-.2,-.07],[-.2,.07],[.2,-.07],[.2,.07]].map(([s,r])=>g("mud",[e+s,.11,t+r],[.05,.22,.05])),g(n,[e-.05,.56,t],[.16,.24,.14]));i.push(g("cream",[-3.6,.5,2],[2.6,1,1.4]),mt("roofGreen",-3.6,1,2,2.8,1.6,.45),g("wood",[-3.6,.04,2.9],[2.4,.08,.4]),...Ht(-4.7,-2.5,4,2.95,.8,.08,.035)),i.push(...Ht(1.6,3,2,1.6,.8,0,.025,"white"),...Ht(1.6,3,2,2.6,.8,0,.025,"white"),mt("white",2.3,.8,2.1,1.8,1.4,.45));for(let e=0;e<6;e++)i.push(g(e%2?"white":"green",[-1.6+.5*e,.12,1.3],[.3,.24,.3]));return i.push(...Xt(4.9,2.6,1.8),...ae(4.9,1.2,1.1),...ae(-5,-2.8,1.2,"leafDark"),...ae(5,-2.8,1.2,"leafDark")),i})(),abjNile:[qe(5.4,7.8),g("gravel",[0,.025,.8],[.5,.03,6]),g("white",[-1.1,1,-2.6],[2.6,2,1.8]),...qt(-1.1,-2.6,2.6,1.8,.5,1.7,.6,"deepGlass"),g("white",[1.4,.7,-1.2],[1.8,1.4,2]),...qt(1.4,-1.2,1.8,2,.5,1.1,.6,"deepGlass"),X("glass",[-1.4,.6,.6],.8,1.2),X("white",[-1.4,1.25,.6],.85,.1),...ae(1.3,1.2,1.2),...ae(-1.8,2.4,1),...ae(1.8,2.6,1),g("stall1",[-.8,.5,3.6],[.25,1,.25]),g("stall1",[.8,.5,3.6],[.25,1,.25]),g("white",[0,1.05,3.6],[1.9,.16,.25])],abjBaze:[qe(9.8,6.8),g("gravel",[0,.025,1.4],[9.2,.03,.5]),g("cream",[-2.6,.9,-2],[3.4,1.8,1.8]),...qt(-2.6,-2,3.4,1.8,.5,1.5,.5,"window"),g("stall4",[-2.6,1.86,-2],[3.5,.12,1.9]),g("white",[1,.75,-2.1],[2.6,1.5,1.6]),...Ht(0,2,5,-1.2,1.2,.1,.06),mt("white",1,1.5,-2.1,2.8,1.8,.45),g("pitch",[3.3,.035,-.6],[2.6,.03,3.4]),g("white",[3.3,.055,-.6],[2.6,.01,.04]),g("white",[3.3,.25,-2.25],[.6,.5,.04]),g("white",[3.3,.25,1.05],[.6,.5,.04]),g("stall4",[-.9,.5,3],[.3,1,.3]),g("stall4",[.9,.5,3],[.3,1,.3]),g("white",[0,1.05,3],[2.1,.18,.3]),...ae(-4.4,.4,1.1),...ae(-1,-.2,1),...ae(-4.4,2.8,1),...ae(4.4,2.8,1)],abjFmc:[qe(6.8,4.8),Ie(3.6,1.6,.6,1.6),g("white",[0,1,-.9],[6,2,2.4]),...qt(0,-.9,6,2.4,.55,1.65,.55,"windowLight"),g("red",[0,2.06,-.9],[6.1,.12,2.5]),g("white",[.6,.75,.6],[2,.08,.8]),g("red",[-1.8,1.4,.32],[.5,.15,.02]),g("red",[-1.8,1.4,.32],[.15,.5,.02]),g("white",[1.6,.22,1.7],[.7,.32,.36]),g("red",[1.6,.26,1.7],[.72,.06,.37]),...ae(-3,1.9),...ae(3,1.9)]},dp={abjIdu:["IDU STATION","Abuja\u2013Kaduna Railway",2.6,.5,-2.6,.95,1.96,"#008751","#ffffff"],abjJabiPark:["JABI MOTOR PARK","Interstate",2,.42,-3.1,1.15,1,"#b91c1c","#ffffff"],abj345:["345 NIGHTLIFE",void 0,2.4,.36,0,1.45,.52,"#111111","#ff9e6d"],abjPlay:["PLAY","Imperial Lounge",1.8,.46,0,1.15,.92,"#240046","#e0aaff"],abjMoscow:["MOSCOW UNDERGROUND",void 0,2.6,.34,0,1.45,.53,"#03045e","#90e0ef"],abjTokyo:["TOKYO NIGHTLIFE",void 0,2.4,.34,0,1.1,.52,"#370617","#ff4d6d"],abjMagicCity:["MAGIC CITY","18+ only",1.7,.42,0,1.25,.62,"#2b0a3d","#ff4d6d"],abjAbujaCar:["ABUJACAR","Smart Auto Gallery",3,.56,0,1.94,.82,"#0b0b0b","#c9a227"],abjKefiano:["KEFIANO AUTOS",void 0,3,.4,0,1.94,.82,"#1d4ed8","#ffffff"],abjSarkinmota:["SARKINMOTA AUTOS","King of Cars",2.8,.52,0,1.94,.78,"#7f1d1d","#f5d27a"],abjCentralPark:["CENTRAL PARK","Go-karts \xB7 Paintball",2.4,.5,.6,.6,2.3,"#f97316","#ffffff"],abjCityPark:["CITY PARK",void 0,1.6,.28,0,.3,2.66,"#15803d","#ffffff"],abjMonoliza:["MONOLIZA PARK",void 0,1.4,.24,0,1,3.09,"#8b5cf6","#ffffff"],abjWTC:["WORLD TRADE CENTER","Abuja",2.8,.5,0,1.05,1.83,"#0f172a","#7dd3fc"],abjICC:["INTERNATIONAL CONFERENCE CENTRE",void 0,3.6,.34,0,1.72,.66,"#008751","#ffffff"],abjBarYucca:["BAR YUCCA","Rooftop",1.8,.44,0,1.6,1.23,"#111111","#f5d27a"],abjBoto:["BOTO",void 0,1.2,.3,0,1.35,.66,"#1b1b1b","#c9a227"],abjHavana:["HAVANA",void 0,1.6,.34,0,1.55,.62,"#7f1d1d","#f5d27a"],abjBarracuda:["BARRACUDA ROOFTOP",void 0,2.2,.32,0,2.95,1.53,"#0b1220","#38bdf8"],abjPappies:["PAPIEE'S MEATRO",void 0,2,.3,-.8,.85,-.29,"#7c2d12","#fde68a"],abjTulip:["TULIP BISTRO",void 0,1.8,.28,0,1.25,.42,"#ec4899","#ffffff"],abjMarks:["MARKS AT THE PARK",void 0,2,.26,0,.18,.42,"#111827","#f87171"],abjMars:["MAR'S CAF\xC9",void 0,1.6,.3,0,1.4,.11,"#f472b6","#ffffff"],abjPalmAve:["PALM AVE","River Plate Park",1.6,.4,0,.32,.12,"#16a34a","#ffffff"],abjEscape:["ESCAPE HOUSE",void 0,1.8,.28,-.4,.85,.52,"#2d6a4f","#fefae0"],abjLuxeSpa:["ABUJA LUXE SPA",void 0,1.8,.28,-.4,.85,.57,"#7e22ce","#ffffff"],abjEfcc:["EFCC","Economic & Financial Crimes Commission",2.4,.5,0,2.2,.32,"#008751","#ffffff"],abjGarkiPolice:["GARKI POLICE DIVISION",void 0,2.6,.3,-.6,1.1,.23,"#1d3f8f","#ffffff"],abjGarkiMarket:["GARKI MARKET",void 0,2.4,.38,0,.8,-.48,"#b45309","#ffffff"],abjFraser:["FRASER SUITES",void 0,2.2,.34,-.6,.85,.81,"#0f766e","#ffffff"],abjEcoFitness:["ECOFITNESS HUB",void 0,2.4,.32,0,1.45,.78,"#16a34a","#ffffff"],abjIFitness:["i-FITNESS","Guzape",2.2,.44,0,1.45,.88,"#e63946","#ffffff"],abjTrukadero:["TRUKADERO","by CityBowl",2,.42,0,1,.33,"#f72585","#ffffff"],abjPolo:["GUARDS POLO CLUB",void 0,2.2,.3,-3.6,.7,2.72,"#7c2d12","#f5d27a"],abjNile:["NILE UNIVERSITY",void 0,1.8,.16,0,1.05,3.76,"#0369a1","#ffffff"],abjBaze:["BAZE UNIVERSITY",void 0,2,.17,0,1.05,3.16,"#7c3aed","#ffffff"],abjFmc:["FEDERAL MEDICAL CENTRE","Jabi",2.6,.44,.6,1.25,.32,"#e5484d","#ffffff"]};var Au={};t0(Au,{carWindows:()=>Pp,cars:()=>Ip,flowers:()=>wu,groundNames:()=>Jl,hedges:()=>Ap,hills:()=>Na,houses:()=>$l,lake:()=>yp,lampHeads:()=>Cp,lampPosts:()=>Rp,lots:()=>Zl,medians:()=>Mp,palmCrowns:()=>Yl,palmTrunks:()=>Tu,patches:()=>Su,pavements:()=>bp,roads:()=>vu,roofs:()=>Ql,roundaboutGreens:()=>Ep,roundabouts:()=>wp,stripes:()=>Sp,treeCrowns:()=>Eu,treeTrunks:()=>Tp});var bu=[[-16,0,31.3,0,3.6,"blvd"],[-16,-18,40,-18,1.6,"main"],[-16,21,40,21,1.6,"main"],[-16,-46,-16,21,1.6,"main"],[-4,-46,-4,47.5,1.2,"sec"],[19,-46,19,21,1.2,"sec"],[40,-18,40,47,1.4,"sec"],[-48,0,-16,0,1.2,"sec"],[-16,-30,35,-30,1.2,"sec"],[-42,23.5,-4,23.5,1,"sec"],[-16,0,-42,23.5,1.8,"exp"],[-16,-18,-49.5,-40.3,1.8,"exp"],[-42,23.5,-51,23.5,1.8,"exp"],[-51,23.5,-51,47.5,1.6,"exp"],[-51,47.5,-4,47.5,1,"sec"]],_p=[[39.3,-9.5,37.4,-9.5],[40.7,-14,42.85,-14],[-16.8,-8,-20.7,-8],[40.7,16.6,54.4,16.6],[-30,-27.6,-30,-33.85],[-46,.6,-46,2.6],[-31.9,10.7,-30.06,12.71],[-16.8,14.5,-18.4,14.5],[-4.6,14.5,-6.35,14.5],[-4.6,-42,-8.2,-42],[40.7,28,43.85,28],[-11,35.4+8.55,-4.6,35.4+8.55]],Mu=[[-51,23.5,1.4],[-16,0,2.8],[-4,0,2.4],[19,0,2.4],[-16,-18,2],[-4,-18,1.7],[19,-18,1.7],[40,-18,1.7],[-16,21,2],[-4,21,1.7],[19,21,1.7],[40,21,1.7],[-42,23.5,2],[-16,-30,1.4],[-4,-30,1.4],[19,-30,1.4]],fi=bu[10],fp=Math.hypot(fi[2]-fi[0],fi[3]-fi[1]),Xl=[(fi[2]-fi[0])/fp,(fi[3]-fi[1])/fp],Pr=[Xl[1],-Xl[0]],ql=[fi[0]+22*Xl[0]+Pr[0]*4,fi[1]+22*Xl[1]+Pr[1]*4],Zl={abjAssembly:{x:35,z:0,w:7,d:7,label:"National Assembly",top:3.8},abjSupremeCourt:{x:35,z:-9.5,w:5,d:4.5,label:"Supreme Court",top:2.1},abjAsoRock:{x:45,z:-14,w:4.5,d:4.5,label:"Aso Rock",top:1.4},abjZoo:{x:54,z:13.7,w:7,d:5,label:"Children's Park & Zoo",top:1.4},abjSecretariat:{x:25,z:-6.5,w:8,d:5,label:"Fed. Secretariat",top:2.8},abjMosque:{x:12.5,z:-6.5,w:6,d:6,label:"National Mosque",top:5.2},abjHospital:{x:1.5,z:-6.5,w:7,d:5,label:"National Hospital",top:2.7},abjSilverbird:{x:-10,z:-6.5,w:6,d:5,label:"Silverbird",top:3},abjEagleSquare:{x:25,z:6.5,w:8,d:6,label:"Eagle Square",top:2.1},abjChristianCentre:{x:12.5,z:6.5,w:6,d:6,label:"Christian Centre",top:7.8},abjCeddi:{x:1.5,z:6.5,w:7,d:5,label:"Ceddi Plaza",top:2.9},abjArtsVillage:{x:-10,z:6.5,w:6,d:5,label:"Arts Village",top:1.1},abjBanex:{x:-10,z:-13.5,w:6,d:5,label:"Banex Plaza",top:2},abjWuseMarket:{x:1.5,z:-13.5,w:7,d:5,label:"Wuse Market",top:1.8},abjTranscorp:{x:12.5,z:-13.5,w:6,d:5,label:"Transcorp Hilton",top:6.8},abjTechHub:{x:26,z:-13.5,w:6,d:5,label:"Ventures Park",top:3.5},abjNovare:{x:-10,z:-25,w:8,d:7,label:"Novare Central",top:3},abjLounge:{x:1.5,z:-23.25,w:5,d:4.5,label:"Kryxtal Lounge",top:1.8},abjUnityFountain:{x:12.5,z:-24,w:6,d:6,label:"Unity Fountain",top:1.6},abjMillenniumPark:{x:28,z:-25,w:10,d:8,label:"Millennium Park",top:1.5},abjGolf:{x:42,z:-32,w:11,d:9,label:"IBB Golf Club",top:1.5},abjClub:{x:-10,z:-36,w:6,d:5,label:"Hustle & Bustle",top:2.4},abjRooftop:{x:1.5,z:-35,w:4.5,d:4.5,label:"Lupita Rooftop",top:7},abjJabiLake:{x:-24,z:-8,w:7,d:5,label:"Jabi Lake Mall",top:2.2},abjZumaRock:{x:-46,z:5,w:5,d:5,label:"Zuma Rock",top:1.4,tag:[-10,5,-9.6]},abjMotors:{x:-36,z:8.5,w:9,d:5.5,label:"Capital Motors",top:2.4},abjStadium:{x:-22.5,z:14.5,w:8.4,d:8.4,label:"National Stadium",top:3.4,round:!0},abjMagicLand:{x:-9,z:14.5,w:5.5,d:5.5,label:"Magic Land",top:3},abjCityGate:{x:ql[0],z:ql[1],w:4.4,d:4.4,label:"City Gate",top:4.7,ry:Math.atan2(Pr[0],Pr[1])},abjAirport:{x:-28,z:35.4,w:34,d:22,label:"Abuja Airport",top:6.2,pad:"#d6dbc4",tag:[-3.6,2.05,2.4]},abjUniAbuja:{x:-57.5,z:31,w:10,d:9,label:"University of Abuja",top:3},abjGwagwalada:{x:-56.5,z:41,w:7,d:5,label:"Gwagwalada Market",top:3.1},abjTokyo:{x:-12.1,z:-44.75,w:4.4,d:2.9,label:"Tokyo Nightlife",top:2.8,art:.72},abjPlay:{x:-7,z:-44.75,w:4.4,d:2.9,label:"Play Lounge",top:1.6,art:.72},abj345:{x:-12.1,z:-41.25,w:4.4,d:2.9,label:"345 Nightlife",top:2.6,art:.72},abjMoscow:{x:-7,z:-41.25,w:4.4,d:2.9,label:"Moscow Underground",top:2,art:.72},abjMagicCity:{x:-.8,z:-42.6,w:4.1,d:4.4,label:"Magic City 18+",top:2},abjTrukadero:{x:4.73,z:-42.6,w:4.1,d:4.4,label:"Trukadero",top:2.7},abjHavana:{x:10.27,z:-42.6,w:4.1,d:4.4,label:"Havana",top:1.8},abjBoto:{x:15.8,z:-42.6,w:4.1,d:4.4,label:"BOTO",top:1.7},abjMars:{x:7,z:-34.6,w:3.6,d:4.4,label:"Mar's Caf\xE9",top:2.2},abjBarracuda:{x:22.4,z:-37.2,w:4.4,d:4.4,label:"Barracuda Rooftop",top:3.8},abjPalmAve:{x:22.4,z:-44,w:4.4,d:4.4,label:"Palm Ave",top:1.6},abjMarks:{x:32.6,z:-35.2,w:4.4,d:4.4,label:"Marks at the Park",top:1.6},abjTulip:{x:32.6,z:-44.1,w:4.4,d:4.4,label:"Tulip Bistro",top:1.5},abjCityPark:{x:36.6,z:-22.75,w:4.4,d:5.5,label:"City Park",top:1.8},abjPappies:{x:38.7,z:-42.5,w:5,d:4.6,label:"Papiee's Meatro",top:1.7},abjLuxeSpa:{x:45.6,z:-42.5,w:5,d:4.6,label:"Abuja Luxe Spa",top:1.2},abjEscape:{x:53.5,z:-38.2,w:6,d:4.4,label:"Escape House",top:1.2},abjPolo:{x:47.5,z:-22.5,w:11,d:6.5,label:"Guards Polo Club",top:1.3},abjAbujaCar:{x:-38,z:-40,w:7,d:5,label:"AbujaCar",top:2},abjEcoFitness:{x:-46,z:-43.8,w:5,d:4.6,label:"Ecofitness Hub",top:1.7},abjFmc:{x:-44.5,z:-27.2,w:7,d:5,label:"FMC Jabi",top:2.2},abjEfcc:{x:-44.5,z:-18.5,w:7,d:5,label:"EFCC",top:3.2},abjJabiPark:{x:-22.5,z:-14.5,w:7.8,d:4.6,label:"Jabi Motor Park",top:1},abjIdu:{x:-56,z:-24,w:10,d:5,label:"Idu Station",top:1.3},abjNile:{x:-45.2,z:15.5,w:5.6,d:8,label:"Nile University",top:2.1},abjBaze:{x:2.2,z:42,w:10,d:7,label:"Baze University",top:1.9},abjBarYucca:{x:-.6,z:15.6,w:4.6,d:6,label:"Bar Yucca",top:2.4},abjFraser:{x:6.3,z:15.6,w:6.4,d:3.8,label:"Fraser Suites",top:3.8},abjKefiano:{x:14.4,z:16.4,w:7,d:5,label:"Kefiano Autos",top:2},abjWTC:{x:24.2,z:14.6,w:7,d:6.6,label:"World Trade Center",top:6.4},abjICC:{x:34.6,z:14.6,w:8.2,d:6.6,label:"Int'l Conference Centre",top:2.9},abjSarkinmota:{x:.4,z:25.6,w:6.4,d:4.8,label:"Sarkinmota Autos",top:2},abjGarkiPolice:{x:15,z:25.6,w:6,d:4.8,label:"Garki Police",top:1.9},abjGarkiMarket:{x:23.8,z:25.6,w:6.4,d:4.8,label:"Garki Market",top:1.7},abjCentralPark:{x:1.6,z:32.8,w:9,d:7,label:"Central Park",top:1.4},abjMonoliza:{x:33.8,z:32.6,w:9.4,d:7,label:"Monoliza Park",top:2.2},abjIFitness:{x:52,z:40,w:6,d:5,label:"i-Fitness Guzape",top:1.8},home_abjMaitama:{x:12.5,z:-35,w:4.5,d:4.5,label:"Home",top:1.6},home_abjWuse2:{x:6.75,z:-24,w:4,d:4,label:"Home",top:2.4},home_abjGwarinpa:{x:-30,z:-36,w:4.5,d:4.5,label:"Home",top:2.2},home_abjKubwa:{x:-52.5,z:-39,w:4.5,d:4.5,label:"Home",top:1.6},home_abjAsokoro:{x:46,z:28,w:4.5,d:4.5,label:"Home",top:2.5}};var xp=[];var yp={x:-36,z:-9,rx:8,rz:5},Jl=[["ABUJA",14,35,14,"#6f9a52",.85],["CENTRAL BUSINESS DISTRICT",13.7,11,9,"#6f9a52",.85],["THREE ARMS ZONE",35,6.6,7.5,"#6f9a52",.85],["MAITAMA",30,-40.5,9,"#5f8c45",.85],["GARKI",8,27.5,7,"#6f9a52",.85],["ASOKORO",50,19,6.5,"#5f8c45",.85],["JABI LAKE",-36,-8.6,7,"#ffffff",.7],["GWARINPA",-30,-44,7,"#6f9a52",.85],["KUBWA",-56,-44,5,"#6f9a52",.85],["UTAKO",-38,-20.5,5,"#6f9a52",.85]],Su=[[-16,40,-10,10,"#c6e2a0"],[-4,58,-47,-10,"#a9d07f"],[-16,-4,-47,-10,"#bcd796"],[-8,30,10,48,"#c2d89a"],[30,60,10,48,"#acd083"],[-48,-16,-28,0,"#b4d48c"]],In=[],Ir=bu.map(([i,e,t,n,s,r])=>In.push({k:"s",ax:i,az:e,bx:t,bz:n,hw:s/2+.6*(r==="blvd"||r==="main")})-1);for(let[i,e,t,n]of _p)In.push({k:"s",ax:i,az:e,bx:t,bz:n,hw:.4});for(let[i,e,t]of Mu)In.push({k:"c",x:i,z:e,r:t});var vp=(i,e,t,n,s=0)=>{let r=[Math.cos(s),-Math.sin(s)],a=[Math.sin(s),Math.cos(s)];return[[1,1],[1,-1],[-1,-1],[-1,1]].map(([o,l])=>[i+r[0]*t*o/2+a[0]*n*l/2,e+r[1]*t*o/2+a[1]*n*l/2])};for(let i of Object.values(Zl))i.round?In.push({k:"c",x:i.x,z:i.z,r:i.w/2}):i.ry?In.push({k:"p",pts:vp(i.x,i.z,i.w,i.d,i.ry)}):In.push({k:"r",x0:i.x-i.w/2,x1:i.x+i.w/2,z0:i.z-i.d/2,z1:i.z+i.d/2});for(let i of(In.push({k:"c",x:ql[0]-Pr[0]*4,z:ql[1]-Pr[1]*4,r:3.2}),In.push({k:"e",...yp},{k:"c",x:52,z:-1,r:9.6},{k:"c",x:-56,z:-8,r:7.4},{k:"r",x0:42.8,x1:49.2,z0:9.6,z1:14.4}),xp)){let e=i.r??0;In.push({k:"p",pts:vp(i.x,i.z,4.4,.6,e)});let t=2.2*Math.cos(e),n=-(2.2*Math.sin(e));In.push({k:"p",pts:[[i.x+t,i.z+n],[i.x+t,i.z+n+3.2],[i.x-t,i.z-n+3.2],[i.x-t,i.z-n]]})}for(let[,i,e,t]of Jl)In.push({k:"r",x0:i-t/2,x1:i+t/2,z0:e-.08*t,z1:e+.08*t});var pp=(i,e,t,n,s,r)=>{let a=s-t,o=r-n,l=Math.max(0,Math.min(1,((i-t)*a+(e-n)*o)/(a*a+o*o||1)));return Math.hypot(t+a*l-i,n+o*l-e)},ly=(i,e,t,n)=>{switch(i.k){case"r":return e>i.x0-n&&e<i.x1+n&&t>i.z0-n&&t<i.z1+n;case"c":return Math.hypot(e-i.x,t-i.z)<i.r+n;case"s":return pp(e,t,i.ax,i.az,i.bx,i.bz)<i.hw+n;case"e":return((e-i.x)/(i.rx+n))**2+((t-i.z)/(i.rz+n))**2<1;case"p":return((s,r,a,o)=>{let l=0,c=!0;for(let h=0;h<a.length;h++){let[u,d]=a[h],[f,_]=a[(h+1)%a.length],x=(f-u)*(r-d)-(_-d)*(s-u);if(x!==0&&(l===0?l=Math.sign(x):Math.sign(x)!==l&&(c=!1)),pp(s,r,u,d,f,_)<o)return!0}return c})(e,t,i.pts,n)}},ss=(i,e,t,n=-1)=>{if(i<-63.4||i>59.4||e<-46.4||e>47.4)return!0;for(let s=0;s<In.length;s++)if(s!==n&&ly(In[s],i,e,t))return!0;return!1},Je=i=>{let e=43758.5453*Math.sin(127.1*i+311.7);return e-Math.floor(e)},vu=[],bp=[],Mp=[],Sp=[],wp=[],Ep=[],wu=[],Eu=[],Tp=[],Tu=[],Yl=[],Ap=[],Rp=[],Cp=[],$l=[],Ql=[],Na=[],Ip=[],Pp=[],mp=["#4f9a3c","#5aa845","#3f8a35","#6bb04f","#478f3a"],Kl=["#e63946","#ffd166","#f472b6","#ffffff","#fb923c"],ec=(i,e,t,n=1)=>{let s=(.36+.16*Je(t))*n;Tp.push({p:[i,.2+.24*n,e],s:[.05*n,.48*n,.05*n]}),Eu.push({p:[i,.2+.45*n+.75*s,e],s:[s,1.15*s,s],r:3*Je(t+3),c:mp[t%mp.length]})},cy=(i,e,t,n=1.3+.35*Je(t))=>{Tu.push({p:[i,.2+n/2,e],s:[.05,n,.05]}),Yl.push({p:[i,.2+n+.04,e],s:[.55,.26,.55],e:[Math.PI,3*Je(t+1),0]}),Yl.push({p:[i,.2+n+.16,e],s:[.34,.2,.34],e:[Math.PI,3*Je(t+2),0]})},hy=(i,e,t,n,s,r=.2)=>{for(let a=0;a<t;a++)wu.push({p:[i+(Je(s+a)-.5)*n,r,e+(Je(s+a+.5)-.5)*n],s:[.12,.1,.12],c:Kl[(s+a)%Kl.length]})};for(let[i,e,t,n]of(bu.forEach(([s,r,a,o,l,c],h)=>{let u=Math.hypot(a-s,o-r),d=(a-s)/u,f=(o-r)/u,_=-f,x=Math.atan2(-f,d),m=(s+a)/2,p=(r+o)/2;if(vu.push({p:[m,.234,p],s:[u,.012,l],r:x}),c==="blvd"||c==="main")for(let b of[-1,1])bp.push({p:[m+_*(l/2+.3)*b,.215,p+d*(l/2+.3)*b],s:[u,.01,.6],r:x});if(c!=="sec"&&Mp.push({p:[m,.245,p],s:[u,.01,c==="blvd"?1:.3],r:x}),c==="sec")for(let b=1;b<u-.5;b+=2.2){let w=s+d*b,A=r+f*b;ss(w,A,.3,Ir[h])||Sp.push({p:[w,.2475,A],s:[.9,.005,.08],r:x})}let R=c==="blvd"?2.1:c==="main"?l/2+.3:l/2+.75,E=c==="blvd"?2.6:c==="exp"?2.8:3;for(let b=E/2,w=0;b<u;b+=E,w++)for(let A of[-1,1]){let y=s+d*b+_*R*A,v=r+f*b+d*R*A;ss(y,v,.45,Ir[h])||(c==="exp"?cy(y,v,500*h+2*w+A):ec(y,v,500*h+2*w+A))}if(c==="blvd"||c==="main"){let b=c==="blvd"?2.75:l/2+.95;for(let w=1.2;w<u-1;w+=2.1)for(let A of[-1,1]){let y=s+d*w+_*b*A,v=r+f*w+d*b*A;ss(y,v,.35,Ir[h])||Ap.push({p:[y,.35,v],s:[1.8,.3,.32],r:x})}}if(c==="blvd"||c==="main")for(let b=c==="blvd"?4.7:3,w=0;b<u;b+=c==="blvd"?5.2:6,w++){let A=c==="blvd"?0:(l/2+.3)*(w%2?1:-1),y=s+d*b+_*A,v=r+f*b+d*A;ss(y,v,.3,Ir[h])||(Rp.push({p:[y,1.05,v],s:[.03,1.6,.03]}),Cp.push({p:[y,1.88,v],s:[.12,.08,.12]}))}let M=c==="blvd"?1:c==="main"?.42:c==="exp"?.5:.28,P=Math.floor(u/9);for(let b=0;b<P;b++){let w=(b+.3+.4*Je(50*h+b))/P*u,A=b%2?1:-1,y=s+d*w+_*M*A,v=r+f*w+d*M*A;if(Mu.some(([k,G,Y])=>Math.hypot(y-k,v-G)<Y+.4)||xp.some(k=>2.6>Math.hypot(y-k.x,v-k.z)))continue;let L=Math.atan2(d,f)+(A>0?0:Math.PI),U=["#17803d","#f4f4f2","#1b1d22","#c0c6cc","#c81e1e","#1f5fbf","#f4f4f2","#17803d"][(h+b)%8];Ip.push({p:[y,.335,v],s:[.32,.15,.64],r:L,c:U}),Pp.push({p:[y,.47,v],s:[.28,.12,.34],r:L})}}),_p)){let s=Math.hypot(t-i,n-e);vu.push({p:[(i+t)/2,.234,(e+n)/2],s:[s,.012,.8],r:Math.atan2(-(n-e),t-i)})}for(let i=-12.6,e=0;i<30;i+=2.6,e++)ss(i,0,.5,Ir[0])||(ec(i,0,9e3+e,1.05),e%2&&!ss(i+1.3,0,.4,Ir[0])&&hy(i+1.3,0,4,.5,9100+7*e,.25));Mu.forEach(([i,e,t],n)=>{let s=Math.max(.5,t-.9);wp.push({p:[i,.255,e],s:[t,.01,t]}),Ep.push({p:[i,.265,e],s:[s,.02,s]});let r=Math.max(6,Math.round(2*Math.PI*s*.78/.32));for(let a=0;a<r;a++){let o=a/r*Math.PI*2;wu.push({p:[i+Math.cos(o)*s*.78,.275,e+Math.sin(o)*s*.78],s:[.12,.1,.12],c:Kl[(n+a)%Kl.length]})}t>=2.4?(Tu.push({p:[i,1.125,e],s:[.06,1.7,.06]}),Yl.push({p:[i,2.015,e],s:[.7,.3,.7],e:[Math.PI,n,0]},{p:[i,2.155,e],s:[.42,.24,.42],e:[Math.PI,n+.5,0]})):t>=2?ec(i,e,9500+n,.9):Eu.push({p:[i,.275+.15,e],s:[.3,.22,.3],c:"#3f7f35"})});var $n=["#b45a3c","#8a4b33","#a3552f","#7a2e2e"],yu=["#2f6f4f","#5b6b7a","#8a4b33","#3f4b57"],gp=["#f2e8d5","#e9d3b0","#f6efe3","#dbe7f2","#f6d6c8","#e4ecd6","#fff7e8"];[[-3,30,22.5,46.5,2.9,.9,1.3,1,$n],[-3,18,10.5,19.5,2.6,.8,1.1,1,$n],[22,39,10.5,19.5,2.8,.9,1.2,1,$n],[41,59,14,47,3.2,1.3,1.8,2,yu],[-2,59,-46.5,-30.6,3.3,1.2,1.7,2,yu],[30,59,-28,-19,3,1.1,1.5,2,yu],[-15.5,-4.5,-46.5,-38.5,2.2,.8,1,3,$n],[-48,-17,-46.5,-28,2.3,.8,1,1,$n],[-63.4,-49,-46.5,-19,2.5,.75,1,1,$n],[-48,-18,-28,-12.5,2.4,.8,1,1,$n],[-63.4,-49,-18,0,2.6,.8,1,1,$n],[-63.4,-49,1,20,2.6,.8,1,1,$n],[-48,-17,9,22,2.6,.8,1.1,1,$n],[-63.4,-52.5,21,47.4,2.3,.7,.95,1,$n]].forEach(([i,e,t,n,s,r,a,o,l],c)=>{for(let h=t+s/2,u=0;h<n;h+=s,u++)for(let d=i+s/2,f=0;d<e;d+=s,f++){let _=1e4*c+100*u+f,x=d+(Je(_)-.5)*s*.25,m=h+(Je(_+.3)-.5)*s*.25,p=r+Je(_+.6)*(a-r),R=p*(.8+.25*Je(_+.9));if(ss(x,m,Math.max(p,R)/2+.35))continue;let E=o===3?1.2+.5*Je(_+1.2):o===2?.7+.25*Je(_+1.2):.38+.2*Je(_+1.2),M=Je(_+1.5)>.5?0:Math.PI/2;$l.push({p:[x,.2+E/2,m],s:[p,E,R],r:M,c:gp[_%gp.length]}),o!==3&&Ql.push({p:[x,.2+E+.15,m],s:[.75*p,.3,.75*R],r:M,c:l[(u+f)%l.length]});let P=x+.42*s,b=m+.38*s;.55>Je(_+2.1)&&!ss(P,b,.5)&&ec(P,b,_,o===2?1.15:1)}});for(let i=-72;i<=70;i+=8.5)Na.push({p:[i,.1,-53-3*Je(i)],s:[6+3*Je(i+1),3+2.2*Je(i+2),5+3*Je(i+3)],r:3*Je(i+4),c:["#7fa25a","#8aac64","#96a873","#749852"][Math.abs(Math.round(i))%4]}),Na.push({p:[i+4,.1,54+3*Je(i+5)],s:[6+3*Je(i+6),2.4+2*Je(i+7),5+3*Je(i+8)],r:3*Je(i+9),c:["#8aac64","#7fa25a","#749852","#96a873"][Math.abs(Math.round(i))%4]});for(let i=-44;i<=44;i+=9)Na.push({p:[-71-3*Je(i),.1,i],s:[6+3*Je(i+1),3+2.4*Je(i+2),6+2*Je(i+3)],r:3*Je(i+4),c:["#7fa25a","#96a873","#8aac64"][Math.abs(i)%3]}),Na.push({p:[67+3*Je(i+5),.1,i+4],s:[6+3*Je(i+6),3.2+2.4*Je(i+7),6+2*Je(i+8)],r:3*Je(i+9),c:["#8aac64","#749852","#7fa25a"][Math.abs(i)%3]});var Ru={abjIdu:{name:"Idu Railway Station",area:"Idu",emoji:"\u{1F686}"},abjJabiPark:{name:"Jabi Motor Park",area:"Jabi",emoji:"\u{1F68C}"},abj345:{name:"345 Nightlife",area:"Wuse 2",emoji:"\u{1F305}"},abjPlay:{name:"Play Imperial Lounge",area:"Wuse 2",emoji:"\u{1F3B6}"},abjMoscow:{name:"Moscow Underground",area:"Wuse 2",emoji:"\u{1F9CA}"},abjTokyo:{name:"Tokyo Nightlife",area:"Wuse 2",emoji:"\u{1F3EE}"},abjMagicCity:{name:"Magic City",area:"Wuse 2",emoji:"\u{1F51E}"},abjAbujaCar:{name:"AbujaCar",area:"Kado",emoji:"\u{1F3CE}\uFE0F"},abjKefiano:{name:"Kefiano Autos",area:"Central Business District",emoji:"\u{1F699}"},abjSarkinmota:{name:"Sarkinmota Autos",area:"Olusegun Obasanjo Way",emoji:"\u{1F698}"},abjCentralPark:{name:"Central Park Abuja",area:"Garki",emoji:"\u{1F3AF}"},abjCityPark:{name:"City Park",area:"Wuse 2",emoji:"\u{1F334}"},abjMonoliza:{name:"Monoliza Park",area:"Area 11, Garki",emoji:"\u{1F3A1}"},abjWTC:{name:"World Trade Center Abuja",area:"Central Business District",emoji:"\u{1F3D9}\uFE0F"},abjICC:{name:"International Conference Centre",area:"Central Business District",emoji:"\u{1F399}\uFE0F"},abjBarYucca:{name:"Bar Yucca",area:"Central Area",emoji:"\u{1F379}"},abjBoto:{name:"BOTO",area:"Wuse 2",emoji:"\u{1F37D}\uFE0F"},abjHavana:{name:"Havana",area:"Wuse 2",emoji:"\u{1F483}\u{1F3FE}"},abjBarracuda:{name:"Barracuda Rooftop Lounge",area:"Wuse 2",emoji:"\u{1F363}"},abjPappies:{name:"Papiee's Meatro",area:"Wuse 2",emoji:"\u{1F969}"},abjTulip:{name:"Tulip Bistro",area:"Wuse 2",emoji:"\u{1F337}"},abjMarks:{name:"Marks at the Park",area:"Wuse 2",emoji:"\u{1F962}"},abjMars:{name:"Mar's Caf\xE9",area:"Wuse 2",emoji:"\u2615"},abjPalmAve:{name:"Palm Ave",area:"Wuse 2",emoji:"\u{1F35D}"},abjEscape:{name:"Escape House",area:"Maitama",emoji:"\u{1F9D6}\u{1F3FE}"},abjLuxeSpa:{name:"Abuja Luxe Spa",area:"Wuse 2",emoji:"\u{1F486}\u{1F3FE}"},abjEfcc:{name:"EFCC Headquarters",area:"Jabi",emoji:"\u{1F575}\u{1F3FE}"},abjGarkiPolice:{name:"Garki Police Division",area:"Garki II",emoji:"\u{1F693}"},abjGarkiMarket:{name:"Garki Market",area:"Garki",emoji:"\u{1F9FA}"},abjFraser:{name:"Fraser Suites Abuja",area:"Central Business District",emoji:"\u{1F3E8}"},abjEcoFitness:{name:"Ecofitness Hub",area:"Gwarinpa",emoji:"\u{1F3CB}\u{1F3FE}"},abjIFitness:{name:"i-Fitness Guzape",area:"Guzape",emoji:"\u{1F4AA}\u{1F3FE}"},abjTrukadero:{name:"Trukadero by CityBowl",area:"Wuse 2",emoji:"\u{1F3B3}"},abjPolo:{name:"Guards Polo Club",area:"Maitama\u2013Asokoro",emoji:"\u{1F40E}"},abjNile:{name:"Nile University of Nigeria",area:"Jabi Airport Bypass",emoji:"\u{1F393}"},abjBaze:{name:"Baze University",area:"Kuchigoro, Airport Road",emoji:"\u{1F3EB}"},abjFmc:{name:"Federal Medical Centre Jabi",area:"Jabi",emoji:"\u{1F3E5}"},abjAirport:{name:"Nnamdi Azikiwe International Airport",area:"Airport Road",emoji:"\u{1F6EB}"},abjAsoRock:{name:"Aso Rock",area:"Three Arms Zone",emoji:"\u{1FAA8}"},abjAssembly:{name:"National Assembly",area:"Three Arms Zone",emoji:"\u{1F3DB}\uFE0F"},abjEagleSquare:{name:"Eagle Square",area:"Central Business District",emoji:"\u{1F985}"},abjMosque:{name:"Abuja National Mosque",area:"Central Business District",emoji:"\u{1F54C}"},abjChristianCentre:{name:"National Christian Centre",area:"Central Business District",emoji:"\u26EA"},abjMillenniumPark:{name:"Millennium Park",area:"Maitama",emoji:"\u{1F333}"},abjJabiLake:{name:"Jabi Lake Mall",area:"Jabi",emoji:"\u{1F6CD}\uFE0F"},abjWuseMarket:{name:"Wuse Market",area:"Wuse Zone 5",emoji:"\u{1F9FA}"},abjTranscorp:{name:"Transcorp Hilton Abuja",area:"Maitama",emoji:"\u{1F3E8}"},abjSilverbird:{name:"Silverbird Entertainment Centre",area:"Central Business District",emoji:"\u{1F3AC}"},abjMagicLand:{name:"Magic Land",area:"Kukwaba",emoji:"\u{1F3A2}"},abjZumaRock:{name:"Zuma Rock",area:"Madalla",emoji:"\u26F0\uFE0F"},abjUnityFountain:{name:"Unity Fountain",area:"Maitama",emoji:"\u26F2"},abjBanex:{name:"Banex Plaza",area:"Wuse 2",emoji:"\u{1F4F1}"},abjLounge:{name:"Kryxtal Lounge",area:"Wuse 2",emoji:"\u{1FAA9}"},abjSecretariat:{name:"Federal Secretariat",area:"Shehu Shagari Way",emoji:"\u{1F5C2}\uFE0F"},abjArtsVillage:{name:"Arts & Crafts Village",area:"Central Business District",emoji:"\u{1F3AD}"},abjStadium:{name:"Moshood Abiola National Stadium",area:"Kukwaba",emoji:"\u{1F3DF}\uFE0F"},abjGwagwalada:{name:"Gwagwalada Market & Motor Park",area:"Gwagwalada",emoji:"\u{1F68C}"},abjUniAbuja:{name:"University of Abuja",area:"Gwagwalada",emoji:"\u{1F393}"},abjMotors:{name:"Capital Motors",area:"Airport Road",emoji:"\u{1F698}"},abjCeddi:{name:"Ceddi Plaza",area:"Central Business District",emoji:"\u{1F3EC}"},abjNovare:{name:"Novare Central",area:"Wuse Zone 5",emoji:"\u{1F6CD}\uFE0F"},abjHospital:{name:"National Hospital Abuja",area:"Central Area",emoji:"\u{1F3E5}"},abjGolf:{name:"IBB International Golf & Country Club",area:"Maitama",emoji:"\u26F3"},abjCityGate:{name:"Abuja City Gate",area:"Airport Road",emoji:"\u{1F6E3}\uFE0F"},abjZoo:{name:"National Children's Park & Zoo",area:"Asokoro",emoji:"\u{1F992}"},abjSupremeCourt:{name:"Supreme Court of Nigeria",area:"Three Arms Zone",emoji:"\u2696\uFE0F"},abjTechHub:{name:"Ventures Park",area:"Maitama",emoji:"\u{1F4A1}"},abjClub:{name:"Hustle & Bustle",area:"Wuse 2",emoji:"\u{1FAA9}"},abjRooftop:{name:"Lupita Rooftop",area:"Maitama",emoji:"\u{1F307}"}};var tc={box:new Nn(1,1,1),cyl:new Ot(1,1,1,20),cyl8:new Ot(1,1,1,8),cyl6:new Ot(1,1,1,6),cylT:new Ot(.75,1,1,12),halfCyl:new Ot(1,1,1,18,1,!1,0,Math.PI),cone:new An(1,1,16),cone8:new An(1,1,8),cone7:new An(1,1,7),pyr:new An(1,1,4,1,!1,Math.PI/4),dome:new ts(1,22,11,0,Math.PI*2,0,Math.PI/2),sphere:new ts(1,14,10),ico:new Ms(1,0),rock:new pr(1,1),hill:new pr(1,0),mono:new Ot(.78,1,1,16,3),torus:new pa(1,.07,6,30),bowlWall:new Ot(1,.95,1,40,1,!0),bowlSeats:new Ot(1,.66,1,40,1,!0),ring:new ws(.72,1,40,1,0,Math.PI*1.15),disc:new Ot(1,1,1,32)},nc=(i,e="matte")=>e==="glow"?new tn({color:i,toneMapped:!1}):new dn({color:i,roughness:e==="metal"?.4:e==="glass"?.18:e==="wet"?.25:.95,metalness:e==="metal"?.55:e==="glass"?.15:0,flatShading:e==="flat",side:e==="ds"?jt:Tn,transparent:e==="clear"||e==="beam",opacity:e==="clear"?.4:e==="beam"?.12:1,depthWrite:e!=="beam"&&e!=="clear"});function Cu(i,e,t,n,s="matte",r=!0){if(!e.length)return;let a=new ri(tc[t],nc(n,s),e.length),o=new ct;e.forEach((l,c)=>{o.position.set(...l.p),o.scale.set(...l.s),o.rotation.set(...l.e||[0,l.r||0,0],"YXZ"),o.updateMatrix(),a.setMatrixAt(c,o.matrix),l.c&&a.setColorAt(c,new Ce(l.c))}),a.castShadow=r,a.receiveShadow=!0,a.computeBoundingSphere(),i.add(a)}function dy(i,e){let t=new Map,n=new ct,s=new ct;for(let r of e){n.position.set(r.x,r.y??.28,r.z),n.rotation.set(0,r.ry||0,0),n.scale.set(...r.scale||[r.art||1,r.art||1,r.art||1]),n.updateMatrix();for(let a of r.artwork){let[o,l]=np[a.m],c=`${a.g}:${o}`;t.has(c)||t.set(c,{shape:a.g,kind:o,instances:[]}),s.position.set(...a.p),s.scale.set(...a.s),s.rotation.set(...a.r||[0,0,0],"YXZ"),s.updateMatrix(),t.get(c).instances.push({matrix:n.matrix.clone().multiply(s.matrix),color:l})}}for(let{shape:r,kind:a,instances:o}of t.values()){let l=new ri(tc[r],nc("#fff",a),o.length);o.forEach((c,h)=>{l.setMatrixAt(h,c.matrix),l.setColorAt(h,new Ce(c.color))}),l.castShadow=!["glow","clear","beam"].includes(a),l.receiveShadow=l.castShadow,l.computeBoundingSphere(),i.add(l)}}function Lp({box:i,textSurface:e}){let t=new rt,n=new rt,s=new rt;t.add(n,s),i(t,0,-.07,0,600,.1,500,"#93b56c"),i(t,-2,.08,.5,124,.2,95,"#b7d18b"),Su.forEach(([l,c,h,u,d])=>i(t,(l+c)/2,.185,(h+u)/2,c-l,.012,u-h,d));for(let[l,c,h,u]of[["pavements","box","#ddd8cb",!1],["roads","box","#7d848c",!1],["medians","box","#72b24e",!1],["stripes","box","#f3f4f1",!1],["roundabouts","disc","#7d848c",!1],["roundaboutGreens","disc","#6fae4c",!1],["treeTrunks","cyl6","#7a5a3a",!1],["treeCrowns","ico","#fff",!0],["palmTrunks","cyl6","#8a6a45",!1],["palmCrowns","cone7","#3f9b4a",!0],["hedges","box","#3f7f35",!1],["flowers","dome","#fff",!1],["lampPosts","cyl6","#8d96a0",!1],["lampHeads","box","#fff3c4",!1],["hills","hill","#fff",!1],["cars","box","#fff",!0],["carWindows","box","#1e293b",!1]])Cu(t,Au[l],c,h,l==="hills"||l==="treeCrowns"?"flat":l==="lampHeads"?"glow":"matte",u);Cu(n,$l,"box","#fff"),Cu(n,Ql,"pyr","#fff");let r=new ht(tc.disc,nc("#4fb3e6","wet"));r.scale.set(8,.02,5),r.position.set(-36,.22,-9),t.add(r),Jl.forEach(([l,c,h,u,d])=>e(l,d,u,t,c,.258,h));let a=[],o=[];for(let[l,c]of Object.entries(Zl)){let h=new rt;if(h.position.set(c.x,.28,c.z),h.rotation.y=c.ry||0,t.add(h),c.round){let d=new ht(tc.disc,nc(c.pad||"#ece7dc"));d.scale.set(c.w/2,.08,c.w/2),d.position.y=-.04,h.add(d)}else i(h,0,-.04,0,c.w,.08,c.d,c.pad||"#ece7dc");o.push({...c,artwork:up[l]||ip[l],scale:l==="abjAirport"?[.84,1,1.15]:void 0});let u=dp[l];if(u){let[d,,f,,_,x,m,p,R]=u;e(d,R,f,h,_,x,m,!1,p)}else l.startsWith("home_")||e(c.label.toUpperCase(),"#fff",Math.min(c.w*.55,3),h,0,Math.min(c.top*.65,1.4),c.d/2+.03,!1,"#0f3d2e");l.startsWith("home_")||a.push({id:l,city:"abuja",name:c.label,area:Ru[l]?.area||"Abuja",emoji:Ru[l]?.emoji||"\u{1F4CD}",...c,h:c.top,group:h})}dy(t,[...o,{x:52,z:-1,y:.2,artwork:sp},{x:-56,z:-8,y:.2,artwork:rp},{x:46,z:12,y:.2,artwork:ap}]);for(let l=0;l<4;l++){let c=new rt;c.position.set(-39+l*7,.65,35.8),t.add(c),i(c,0,0,0,.28,.25,2.3,"#f7f5ef"),i(c,0,0,-.1,2.2,.05,.42,"#f7f5ef"),i(c,0,.19,.8,.07,.5,.5,"#0f8a4f"),i(c,0,0,.9,.9,.04,.25,"#f7f5ef")}for(let[l,c,h]of[[0,-17,-30],[1,6,-28],[2,20,-3],[3,40,22],[4,-32,19],[5,-45,-17]]){i(s,c,1.8,h,4.4,2,.12,"#202431");for(let u of[-1.8,1.8])i(s,c+u,.9,h,.09,1.8,.09,"#202431");e(l%2?"ABUJA LIFE":"YOUR AD HERE","#fff",4.2,s,c,1.8,h+.07,!1,l%2?"#206b57":"#276998")}return t.visible=!1,{world:t,homes:n,boards:s,places:a}}var fy=[["dubAirport","Dublin Airport","Northside","\u2708\uFE0F",-11,-39,24,10,2.8,"airport","An international airport north of the city, with a terminal, tower and runway."],["dubPhoenix","Phoenix Park","Northside","\u{1F98C}",-32,-19,15,15,1.3,"park","A wide green park on the western side of the city."],["dubCroke","Croke Park","Northside","\u{1F3DF}\uFE0F",15,-25,12,9,2.5,"stadium","The home of Gaelic games, with a pitch and tiered stands."],["dubSpire","The Spire","City centre","\u{1F4CD}",0,-15,3,3,8,"spire","A slender silver landmark on O\u2019Connell Street."],["dubGPO","General Post Office","City centre","\u{1F3DB}\uFE0F",-3,-10,7,4,2.2,"classical","A columned landmark facing O\u2019Connell Street."],["dubPenneys","Penneys","City centre","\u{1F6CD}\uFE0F",-12,-10,5,4,1.8,"shop","A city-centre clothes shop, with brick frontage and broad display windows."],["dubConnolly","Connolly Station","Northside","\u{1F689}",15,-15,8,5,2.2,"station","Rail platforms and a station entrance on the north side."],["dubCustom","The Custom House","Docklands","\u{1F3DB}\uFE0F",17,-5.5,10,4,3.6,"custom","A long neoclassical riverside building with a central dome."],["dubEPIC","EPIC & CHQ","Docklands","\u{1F9F3}",26,-11,8,5,1.8,"warehouse","A restored warehouse and museum precinct in the Docklands."],["dubConvention","Convention Centre","Docklands","\u{1F3E2}",31,-5.5,6,4,3.8,"convention","A modern riverside building with a tilted glass atrium."],["dubHapenny","Ha\u2019penny Bridge","City centre","\u{1F309}",-5,0,1.2,4.7,1.1,"archBridge","The white pedestrian bridge connecting the two banks of the Liffey."],["dubBeckett","Samuel Beckett Bridge","Docklands","\u{1F309}",30,0,2,4.7,4,"harpBridge","A harp-shaped bridge across the river in the Docklands."],["dubTemple","Temple Bar","City centre","\u{1F3BB}",-5,7,7,5,1.9,"pub","Colourful pub fronts, cobbled lanes and a small music courtyard."],["dubCastle","Dublin Castle","City centre","\u{1F3F0}",-13,10,7,6,3,"castle","A stone tower and courtyard among the city-centre streets."],["dubChrist","Christ Church Cathedral","City centre","\u26EA",-21,7,7,5,3.5,"cathedral","A stone cathedral with a central tower and pitched roofs."],["dubGuinness","Guinness Storehouse","City centre","\u{1F37A}",-32,8,9,7,3.7,"guinness","A brick brewery complex topped by a circular glass lookout."],["dubTrinity","Trinity College","City centre","\u{1F393}",7,9,11,9,3.5,"college","A historic campus with a central green, library and campanile."],["dubGrafton","Grafton Street","City centre","\u{1F3B6}",3,17,4,6,2.1,"shoppingStreet","A pedestrian shopping street with colourful fa\xE7ades and busking space."],["dubBrown","Brown Thomas","City centre","\u{1F6CD}\uFE0F",9,18,5,4,2.4,"shop","A department store beside the Grafton Street shopping area."],["dubGreen","St Stephen\u2019s Green","City centre","\u{1F333}",6,26,12,9,1.3,"green","A landscaped city park with paths, trees and a pond."],["dubPatrick","St Patrick\u2019s Cathedral","City centre","\u26EA",-16,21,7,7,4.5,"cathedral","A tall stone cathedral beside a garden on the south side."],["dubWhelans","Whelan\u2019s","City centre","\u{1F3B8}",-5,25,5,4,1.6,"pub","A live-music venue with a warm street frontage."],["dubMerrion","Merrion Square","City centre","\u{1F337}",18,21,8,8,1.2,"park","A garden square framed by Georgian terraces."],["dubCanal","Grand Canal Dock","Docklands","\u2693",28,12,12,9,3,"dock","A waterfront basin, modern offices and a theatre beside the water."],["dubAviva","Aviva Stadium","Docklands","\u{1F3C9}",34,25,10,8,3.2,"stadium","An oval stadium on the southeastern side of this compact map."],["dubGarda","Garda Station","Northside","\u{1F693}",-21,-10,5,4,1.6,"civic","A local station in the northside neighbourhood."],["dubIntreo","Intreo Office","Northside","\u{1F4C4}",-12,-20,5,4,1.8,"civic","A fictional service-office location for the future game."],["dubCitizens","Citizens Information","Northside","\u2139\uFE0F",-4,-23,5,4,1.6,"civic","A fictional information-office location for the future game."],["dubNaija","Nigerian Shop","Northside","\u{1F1F3}\u{1F1EC}",5,-25,5,4,1.5,"shop","An illustrative community shop with Nigerian groceries."],["dubTesco","Tesco","Northside","\u{1F6D2}",24,-22,6,4,1.4,"shop","An illustrative neighbourhood supermarket."],["dubLidl","Lidl","Northside","\u{1F6D2}",33,-21,6,4,1.4,"shop","An illustrative neighbourhood supermarket."],["dubDunnes","Dunnes Stores","City centre","\u{1F6D2}",-24,19,5,4,1.8,"shop","An illustrative city-centre grocery and clothing shop."],["dubChipper","The Chipper","City centre","\u{1F35F}",-33,20,5,4,1.4,"shop","A small local takeaway with a striped shopfront."]].map(([i,e,t,n,s,r,a,o,l,c,h])=>({id:i,name:e,area:t,emoji:n,x:s,z:r,w:a,d:o,h:l,kind:c,description:h,city:"dublin"})),Dp=[-28,-18,-5,2,18,30];function py(i,e){return i<-42||i>40||e<-47||e>33?!1:Math.abs(e)<2.25?Dp.some(t=>Math.abs(i-t)<(t===30?1:.6)):!(i>23.7&&i<30.3&&e>9.2&&e<14.8)}function Np({textSurface:i}){let e=new rt,t=new rt,n=new rt;e.name="Dublin",t.name="Dublin neighbourhoods",e.add(t,n);let s={box:new Nn(1,1,1),cyl:new Ot(1,1,1,16),cone:new An(1,1,12),sphere:new Ms(1,1),roof:new An(1,1,4,1,!1,Math.PI/4)},r=new Map,a=[0,0,0];function o(b,w,A,y,v,L,U,k,G=e,Y=[0,0,0]){let j=L>.15,te=`${G.uuid}:${b}:${j}`;r.has(te)||r.set(te,{parent:G,type:b,cast:j,items:[]}),r.get(te).items.push({p:[w+a[0],A+a[1],y+a[2]],s:[v,L,U],color:k,rotation:Y})}let l=(b,w,A,y,v,L,U,k=e,G)=>o("box",b,w,A,y,v,L,U,k,G),c=(b,w,A,y,v,L,U=e)=>o("cyl",b,w,A,y,v,y,L,U);function h(b,w,A=1,y=e){c(b,.45*A,w,.07*A,.9*A,"#70523c",y),o("sphere",b,1.1*A,w,.55*A,.7*A,.55*A,"#43815b",y)}function u(b,w,A,y,v,L="#4f575d"){o("roof",b,w+.35,A,y*.74,.7,v*.74,L)}function d(b,w,A,y,v,L="#a96d55",U=e){l(b,v/2,w,A,v,y,L,U),l(b,v+.07,w,A+.15,.14,y+.15,"#4f575d",U);for(let k=.45;k<v-.15;k+=.6)for(let G=-A/2+.35;G<A/2;G+=.65)l(b+G,k,w+y/2+.018,.3,.35,.035,"#b8d2d5",U)}function f(b,w,A,y,v=1.5){for(let L=0;L<A;L++)c(b-y/2+L*y/(A-1),v/2,w,.11,v,"#e8e1cd");l(b,v+.08,w,y+.45,.16,.65,"#e8e1cd")}function _(b,w,A=.035){let y=new mr(b.map(L=>new I(L[0]+a[0],L[1]+a[1],L[2]+a[2]))),v=new ht(new ma(y,32,A,5,!1),new dn({color:w,roughness:.65}));e.add(v)}function x(b,w,A,y){l(b,.205,w,A,.035,y,"#6aa9bf");for(let v=0;v<4;v++)l(b-A*.3+v*A*.2,.228,w+Math.sin(v*3)*y*.25,A*.1,.005,.025,"#a3cad5")}function m(b,w,A=!1){l(0,.23,0,b,.06,w,"#78a963"),l(0,.27,0,b-.6,.025,.45,"#ded4b9"),l(0,.27,0,.45,.025,w-.6,"#ded4b9");for(let y of[-b*.36,b*.36])for(let v of[-w*.32,0,w*.32])h(y,v,1.15);A&&x(b*.2,-w*.22,b*.36,w*.3);for(let y of[-b*.22,b*.22])l(y,.5,w*.2,1.1,.13,.35,"#735744"),l(y,.7,w*.34,1.1,.4,.08,"#735744")}function p(b,w){if(a=[b,.24,0],l(0,.2,0,w==="harpBridge"?1.8:1.05,.16,4.8,"#e8e6d9"),w==="archBridge")for(let A of[-.53,.53]){_([[A,.3,-2.4],[A,.9,-1.2],[A,1.05,0],[A,.9,1.2],[A,.3,2.4]],"#f5f3e8",.055);for(let y=-2.2;y<=2.2;y+=.35)l(A,.5+.3*(1-Math.abs(y)/2.4),y,.035,.55,.035,"#ecebe1")}else if(w==="harpBridge"){_([[.8,.3,1.5],[.8,2.1,.6],[.8,4,-.7],[.8,4.6,-2.1]],"#e8e9e2",.14);for(let A=0;A<9;A++){let y=-2.1+A*.5;_([[.8,4.2,-1.8],[.8,.34,y]],"#f4f4ef",.018)}}else for(let A of[-.5,.5])l(A,.55,0,.07,.55,4.7,"#adaca0");a=[0,0,0]}l(0,-.15,0,450,.12,450,"#9bb38b"),l(-1,.06,-7,84,.25,80,"#b8c7a2"),l(-1,.2,-22,83,.018,47,"#c4c7ad"),l(-1,.2,18,83,.018,30,"#cccfb8"),x(-1,0,84,4.5),x(64,4,48,68);for(let b of[-2.9,2.9])l(-1,.26,b,83,.06,.55,"#d9d4c3"),l(-1,.235,b+(b<0?-.75:.75),83,.03,.95,"#737d82");for(let b of[-31,-18,-6,5,15,32])l(-1,.24,b,82,.035,.75,"#89918b");for(let b of[-40,-25,-9,2,14,22,39])for(let[w,A]of[[-19,29],[19,28]])l(b,.24,w,.65,.035,A,"#89918b");l(2,.245,-11,1.7,.035,18,"#80888a"),l(2,.266,-11,.16,.025,18,"#adbca0");for(let b of[-3.65,3.65])for(let w=-38;w<40;w+=2)l(w,.26,b,.8,.015,.035,"#e0dfcf");for(let b of Dp)p(b,b===-5?"archBridge":b===30?"harpBridge":"plain");for(let b of[-5,-4.75])l(-3,.278,b,69,.025,.03,"#5a6266");l(-7,.58,-4.86,3.5,.6,.5,"#73549b"),l(-7,.84,-4.86,3.6,.06,.55,"#d8dedb"),l(-7,.64,-4.59,3.1,.28,.025,"#bdcfd3");let R=[];for(let b of fy){if(R.push({...b}),b.kind.endsWith("Bridge"))continue;let{w,d:A,kind:y}=b;if(a=[b.x,.26,b.z],l(0,0,0,w,.035,A,["park","green"].includes(y)?"#85ad6b":"#dedbcb"),y==="airport"){l(0,.05,-2.7,23,.04,1.4,"#535c60");for(let v=-10;v<11;v+=1.5)l(v,.078,-2.7,.7,.012,.055,"#f1efe6");d(0,1.3,10,2.5,1.3,"#dadfd9"),l(0,.7,2.57,8,.5,.025,"#8bb5c8"),c(-7,1.1,1.3,.28,2.2,"#dbdcd1"),l(-7,2.4,1.3,1,.6,.9,"#9fc6d0");for(let v of[-7,-2,3,8])l(v,.48,-.3,.22,.22,1.8,"#f2f2e7"),l(v,.48,-.6,1.8,.04,.42,"#f2f2e7"),l(v,.65,.4,.06,.4,.4,"#299479")}else if(y==="park"||y==="green")m(w-.2,A-.2,y==="green");else if(y==="spire")c(0,2.1,0,.11,4.2,"#b1bcc1"),o("cone",0,6.15,0,.11,4.1,.11,"#cbd1d3"),c(0,.035,0,1.2,.08,"#e0dcca");else if(y==="stadium"){o("cyl",0,1.1,0,w*.47,2.2,A*.46,"#ccd5cf"),o("cyl",0,1.2,0,w*.4,2.25,A*.37,"#486657"),l(0,2.35,0,w*.58,.035,A*.47,"#6caa68"),l(0,2.38,0,.045,.02,A*.47,"#f4f3e5");for(let v of[-w*.26,w*.26])l(v,2.6,0,.06,.48,1.2,"#eae9da"),l(v,2.85,0,.12,.05,1.2,"#eae9da");for(let v of[-w*.38,w*.38])for(let L of[-A*.38,A*.38])c(v,1.6,L,.045,3.2,"#8e9b9e"),l(v,3.25,L,.65,.15,.25,"#fff4c9")}else if(y==="classical"||y==="custom")d(0,-.5,w*.85,A*.62,1.7,"#d8d1bb"),f(0,A*.3,y==="custom"?10:6,w*.78,1.6),u(0,1.8,-.5,w*.9,A*.65),y==="custom"&&(l(0,2.1,-.5,1.35,1.3,1.35,"#dfd7bc"),o("sphere",0,2.95,-.5,.8,.8,.8,"#748e86"),c(0,3.65,-.5,.08,.7,"#d4d9ce"));else if(y==="convention"){d(-.5,-.3,4,2.9,3,"#d9d6c9"),o("cyl",.7,1.9,.7,1.1,3.5,1.1,"#83b0c1",e,[0,0,-.2]);for(let v of[.5,1,1.5,2,2.5,3])l(.5,v,1.73,1.8,.04,.035,"#dfebe6")}else if(y==="castle"){d(0,-1,5,2,2,"#b59788"),c(-2,1.4,1,1,2.8,"#929b95");for(let v=0;v<8;v++){let L=v/8*Math.PI*2;l(-2+Math.cos(L)*.8,2.9,1+Math.sin(L)*.8,.27,.38,.27,"#a7afa5")}l(.7,.04,1,3,.035,2,"#a6bb8c")}else if(y==="cathedral")d(0,-.3,w*.3,A*.85,1.5,"#b0b0a0"),u(0,1.6,-.3,w*.4,A*.9,"#697171"),d(0,0,w*.75,A*.3,1.3,"#b0b0a0"),u(0,1.5,0,w*.8,A*.4,"#697171"),d(-w*.25,-A*.25,1.3,1.4,b.h-.5,"#b5b4a3"),o("cone",-w*.25,b.h-.15,-A*.25,.9,.7,.9,"#6c7477");else if(y==="guinness"){d(0,0,6,4,2.8,"#9a6451"),d(-3,-1,1.7,3.6,2.1,"#b58166"),c(0,3.05,0,1.45,.7,"#8daeb4"),c(0,3.45,0,1.6,.12,"#394849");for(let v of[-2,2])c(v,2.6,-2.2,.15,2.6,"#a67359")}else if(y==="college"){l(0,.02,0,8,.04,5.4,"#8dab75"),d(0,-3,8.8,1.3,1.6,"#c4baa2"),d(-4.2,.2,1.3,5,1.6,"#c4baa2"),d(4.2,.2,1.3,5,1.6,"#c4baa2"),f(0,3,8,7,1.5),l(0,.03,0,.5,.035,6,"#ded7c4"),c(0,1.2,-.4,.32,2.4,"#d3ccbb"),l(0,2.4,-.4,.8,.2,.8,"#d3ccbb"),o("cone",0,2.85,-.4,.6,.7,.6,"#647d70");for(let v of[-2.5,2.5])h(v,1,1)}else if(y==="dock")x(-1,0,6.6,5.6),l(-1,.29,-3,7.1,.06,.4,"#bdb29a"),d(4,-.3,2,6,2.7,"#8ea6ad"),l(4,1.5,2.73,1.7,1.8,.025,"#bbd5d5"),d(-4.3,0,1.9,6,2,"#b5a793"),l(-1.5,.5,0,2,.3,.7,"#f1eada"),l(-1.3,.72,0,.8,.3,.58,"#8fa8b0");else if(y==="station"){d(0,.8,6,2,1.9,"#c9bda7"),u(0,2,.8,6.3,2.3);for(let v of[-2,-1,0,1,2])l(v,.06,-1,.15,.025,3,"#67746f"),l(v+.25,.06,-1,.15,.025,3,"#67746f");l(-.2,.55,-1.2,2.5,.7,.6,"#4d8e75")}else if(y==="warehouse")d(0,0,7,3,1.25,"#9c775c"),u(0,1.3,0,7.3,3.4);else if(y==="pub"||y==="shoppingStreet"){let v=y==="pub"?["#963e3a","#3b7057","#b78244"]:["#ae7053","#d5b495","#788478"];for(let L=0;L<3;L++){let U=(L-1)*w*.28;d(U,-.5,w*.27,A*.55,1.5+L%2*.4,v[L]),l(U,.3,A*.21,w*.23,.55,.06,L===0&&y==="pub"?"#c85446":"#304943"),l(U,.65,A*.27,w*.27,.15,.3,"#e9d6ae"),u(U,1.7,-.5,w*.28,A*.6)}if(y==="pub"){l(0,.2,A*.38,1.2,.08,.7,"#735240");for(let L of[-1,1])c(L,.3,A*.37,.25,.55,"#765b43")}}else{let v=b.id==="dubNaija"?"#519075":y==="civic"?"#bfbcab":"#a3765b";d(0,-.2,w*.8,A*.65,b.h-.2,v),l(0,.45,A*.28,w*.68,.55,.04,"#44676f"),l(0,.84,A*.31,w*.78,.16,.25,b.id==="dubLidl"?"#eed455":b.id==="dubTesco"?"#d4524a":"#eee5ca")}["park","green","spire","stadium"].includes(y)||i(b.name.toUpperCase(),"#fff",Math.min(w*.65,4.8),e,b.x,1+a[1],b.z+A*.45,!1,y==="pub"?"#87382e":"#28564b"),a=[0,0,0]}let E=0;function M(b,w,A){l(b,.27,w,1.7,.06,2.7,"#ded9c7",t),d(b,w,1.5,1.8,1.65,A,t),o("roof",b,2,w,1.15,.7,1.4,"#626a6c",t),l(b+.45,2.25,w-.35,.2,.6,.2,"#a9765d",t),l(b,.54,w+.92,.3,.68,.04,["#295f74","#a44132","#436748","#ceab58"][E%4],t),l(b,.33,w+1.2,1.4,.08,.48,"#8dae76",t),E++}for(let b=0;b<3;b++)for(let w=0;w<10;w++)M(18+w*2,-33+b*2.9,["#b08a69","#b07761","#c0a186"][w%3]);for(let b=0;b<2;b++)for(let w=0;w<10;w++)M(-38+w*1.95,26+b*3,["#b28462","#bc9678","#a8755b"][w%3]);for(let b=0;b<3;b++)for(let w=0;w<8;w++)M(-39+w*2,-31+b*3,["#a97d65","#c2a487","#af8a70"][w%3]);for(let b=0;b<24;b++)h(-38+b*3.2,b%2?-3:3,.65);for(let[b,w]of[[-39,-14],[-24,-26],[-9,-30],[10,-18],[20,-29],[38,19],[-9,21],[15,29],[24,29]])h(b,w,1.2);for(let[b,w]of[[-19,3.6],[9,-3.6],[24,3.6]])l(b,.57,w,1.7,.65,.6,"#e5c751"),l(b,.87,w,1.7,.08,.65,"#d6d9c3"),l(b,.62,w+.32,1.4,.32,.025,"#516f7b");for(let b=0;b<16;b++){let w=-36+b*4.6,A=b%2?-6:5;l(w,.45,A,.8,.4,.44,["#afbeac","#e6e3d6","#58716f"][b%3]),l(w,.6,A,.4,.16,.4,"#78949a")}for(let[b,w,A,y]of[["RIVER LIFFEY",-15,0,9],["DUBLIN BAY",53,15,11],["NORTHSIDE",-14,-33,8],["CITY CENTRE",-3,31,8],["DOCKLANDS",28,19,8]])i(b,b==="RIVER LIFFEY"||b==="DUBLIN BAY"?"#d8edf0":"#7f8e70",y,e,w,.3,A);for(let[b,w]of[[-22,-4],[22,5],[-22,31]]){l(b,1.5,w,3.4,1.4,.1,"#253930",n);for(let A of[-1.2,1.2])l(b+A,.75,w,.07,1.5,.07,"#253930",n);i("DUBLIN LIFE","#fff",3.2,n,b,1.5,w+.06,!1,"#28644e")}let P=new dn({color:"#ffffff",roughness:.88});for(let{parent:b,type:w,cast:A,items:y}of r.values()){let v=new ri(s[w],P,y.length),L=new ct;y.forEach((U,k)=>{L.position.set(...U.p),L.scale.set(...U.s),L.rotation.set(...U.rotation),L.updateMatrix(),v.setMatrixAt(k,L.matrix),v.setColorAt(k,new Ce(U.color))}),v.castShadow=A,v.receiveShadow=!0,v.computeBoundingSphere(),b.add(v)}return e.visible=!1,e.userData.houses=E,{world:e,homes:t,boards:n,places:R,isLand:py}}var Ye=i=>document.getElementById(i),Oa=Ye("map"),an=new Fl({antialias:!0,alpha:!1});an.setPixelRatio(Math.min(devicePixelRatio,2));an.setSize(innerWidth,innerHeight);an.shadowMap.enabled=!0;an.shadowMap.type=Ho;an.toneMapping=Ko;an.toneMappingExposure=1;an.setClearColor("#67afd5");Oa.appendChild(an.domElement);an.domElement.setAttribute("aria-label","3D city map. Drag to pan, scroll to zoom.");an.domElement.tabIndex=0;var cs=new ta,Et=new Nt(38,innerWidth/innerHeight,.1,900),et=new Gl(Et,an.domElement);et.enableDamping=!0;et.dampingFactor=.09;et.minDistance=7;et.maxDistance=110;et.maxPolarAngle=Math.PI*.44;et.minPolarAngle=.18;et.screenSpacePanning=!1;Et.position.set(3.75,37.5,26.25);et.target.set(2.25,0,1.5);cs.add(new ya("#eaf4ff","#c9b99a",.9));var gi=new As("#ffffff",1.6);gi.position.set(32,56,24);gi.castShadow=!0;gi.shadow.mapSize.set(2048,2048);Object.assign(gi.shadow.camera,{left:-50,right:50,top:50,bottom:-50,near:1,far:120});gi.shadow.normalBias=.035;gi.shadow.bias=-2e-4;cs.add(gi);var Iu=new Map,Pu=new Map,my=new Vl,bn=new rt,Gi=new rt,Lr=new rt;cs.add(bn,Gi,Lr);var ac=i=>(Iu.has(i)||Iu.set(i,new dn({color:i,roughness:.95})),Iu.get(i));function ge(i,e,t,n,s,r,a,o){let l=new ht(new Nn(s,r,a),ac(o));return l.position.set(e,t,n),l.castShadow=r>.15,l.receiveShadow=!0,i.add(l),l}function Zt(i,e,t,n,s,r,a,o=s,l=12){let c=new ht(new Ot(s,o,r,l),ac(a));return c.position.set(e,t,n),c.castShadow=!0,c.receiveShadow=!0,i.add(c),c}function Ba(i,e,t,n,s,r){let a=new ht(new ts(s,20,10,0,Math.PI*2,0,Math.PI/2),ac(r));return a.position.set(e,t,n),a.castShadow=!0,i.add(a),a}function Vi(i,e,t,n,s,r,a,o=!0,l=null){let c=document.createElement("canvas");c.width=1024,c.height=o?128:384;let h=c.getContext("2d");l&&(h.fillStyle=l,h.fillRect(0,0,c.width,c.height)),h.fillStyle=e,h.textAlign="center",h.textBaseline="middle";let u=o?90:94;do h.font=`800 ${u}px Arial`,u-=2;while(h.measureText(i).width>950&&u>16);h.fillText(i,512,c.height/2);let d=new la(c);d.colorSpace=Pt;let f=new ht(new Ss(t,t*c.height/1024),new tn({map:d,transparent:!l,depthWrite:!!l,side:jt}));return o&&(f.rotation.x=-Math.PI/2),f.position.set(s,r,a),n.add(f),f}function gy(i,e,t,n){ge(bn,i,.211,e,t,.023,n,"#969c9f")}ge(bn,25,-.16,-20,250,.1,230,"#67afd5");[[0,-11.4,42,18,"#a7cc86"],[-4.275,7.65,25.05,13.5,"#c7e0a5"],[15,7.5,12.9,13.8,"#c7e0a5"],[5.1,-.75,2.7,2.5,"#c7e0a5"],[6,15.3,34.5,2.7,"#ecd9a6"],[8.25,18.525,33.9,3.6,"#d9dccf"],[-23.85,-11.4,6,18,"#a7cc86"]].forEach(([i,e,t,n,s])=>ge(bn,i,.05,e,t,.3,n,s));Vi("MAINLAND","#759a58",8,bn,-12,.217,-17.4);Vi("ISLAND","#93ad73",6,bn,-9,.217,1.5);Vi("LAGOS LAGOON","#d0e8f2",8,bn,11.4,.01,-.9);Vi("ATLANTIC OCEAN","#c3e2ef",12,bn,23,.01,23);Vi("EKO ATLANTIC","#82917e",7,bn,11,.217,18.7);[[0,-4.5,33,.5],[-1.2,2.175,.5,2.55],[-4.575,2.4,22.65,.5],[12.75,6,8.7,.5],[8.25,19.575,33,.42],[-23.1,-11.4,.45,17.4]].forEach(i=>gy(...i));function jp(i,e,t,n=!1,s=!1){let r=new rt;r.position.set(i,0,e),n&&(r.rotation.y=Math.PI/2),bn.add(r),ge(r,0,.29,0,.52,.13,t,"#a1a7ab");for(let a of[-1,1]){ge(r,a*.3,.43,0,.045,.13,t,"#c5c8ca");for(let o=-t/2+.25;o<t/2;o+=.6)Zt(r,a*.22,-.15,o,.04,.8,"#999e9c")}if(s)for(let a of[-t*.3,t*.3]){ge(r,0,1.5,a,.08,2.5,.08,"#eee6d6");for(let o of[-1,1]){let l=[new I(0,2.6,a),new I(0,.4,a+o*t*.35)];r.add(new Ti(new Lt().setFromPoints(l),new es({color:"#e2dfd2"})))}}return r}jp(-1.2,-.75,3.3);jp(7.95,6,1.2,!0,!0);var _y=async i=>(Pu.has(i)||Pu.set(i,my.loadAsync(`assets/${i}.glb`).then(e=>e.scene)),Pu.get(i));async function pi(i,e,t,n=[0,0,0],s=null,r=0){let a=await _y(e),o=a.clone(!0);o.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0,s&&(d.material=d.material.clone(),d.material.color.set(s)))});let l=new un().setFromObject(o),c=l.getCenter(new I),h=t/(l.getSize(new I).y||1);o.position.set(-c.x,-l.min.y,-c.z);let u=new rt;return u.add(o),u.scale.setScalar(h),u.position.set(...n),u.rotation.y=r,i.add(u),u}var ls=await fetch("places.json").then(i=>{if(!i.ok)throw Error("Map data could not load");return i.json()});ls.push({id:"airport",name:"Airport",x:-35,z:-12,w:21,d:19,h:2,models:[]},{id:"refinery",name:"Refinery",x:-25,z:8,w:13,d:13,h:2.6,models:[]});var Wp={shrine:"\u{1F3B7}",viewingCentre:"\u26BD",mamaPut:"\u{1F372}",yabaHub:"\u{1F4A1}",balogun:"\u{1F9FA}",freedomPark:"\u{1F3AD}",ikoyiGym:"\u{1F3CB}\uFE0F",office:"\u{1F3E2}",clubEko:"\u{1FAA9}",lcc:"\u{1F309}",mall:"\u{1F6CD}\uFE0F",library:"\u{1F4DA}",elegushi:"\u{1F3D6}\uFE0F",hospital:"\u{1F3E5}",salon:"\u{1F487}\u{1F3FE}\u200D\u2640\uFE0F",rooftop:"\u{1F56F}\uFE0F",policeStation:"\u{1F693}",church:"\u26EA",mosque:"\u{1F54C}",naijaRadio:"\u{1F4FB}",pollingUnit:"\u{1F5F3}\uFE0F",ekoHotel:"\u{1F3E8}",polanco:"\u{1F698}",boatCruise:"\u26F5",golfClub:"\u26F3",courthouse:"\u2696\uFE0F",unilag:"\u{1F393}",casino:"\u{1F3B0}",mindSpace:"\u{1FAF6}\u{1F3FE}",stadium:"\u{1F3DF}\uFE0F",ojuelegba:"\u{1F3B1}"},xy={shrine:"Music and nightlife on the Mainland.",yabaHub:"The technology hub in Yaba.",balogun:"Colourful market stalls on Lagos Island.",lcc:"Forest trails and an elevated canopy walkway.",elegushi:"The sandy shoreline on the Atlantic.",unilag:"University buildings, gardens, and sports courts.",freedomPark:"Gardens and paths in the heart of the Island.",golfClub:"A green course beside the Lekki\u2013Ikoyi Link.",boatCruise:"The dock on Lagos Lagoon.",ekoHotel:"The hotel grounds on Lagos Island.",stadium:"A football stadium on the Mainland."},as=null,ic=!0,Fi=!0,ki=!0,_i=!1,kn=null,Jt="lagos";ls.forEach(i=>i.city="lagos");Oa.dataset.city=Jt;var Dr=[],sc=[],Lu=0;function mi(i){sc.push(i.catch(e=>(console.warn(e),null)).finally(()=>{Lu++,Ye("progress").textContent=`Building the city \xB7 ${Math.round(Lu/sc.length*100)}%`,Ye("loadbar").style.width=`${Lu/sc.length*100}%`}))}function Oi(i,e,t,n,s,r=1.2){Vi(e,"#ffffff",r,i,t,n,s,!1,"#008751")}function Up(i,e,t){ge(i,0,.008,0,e,.025,t,"#8aba65"),ge(i,0,.025,0,.12,.02,t,"#d5ccaa"),ge(i,0,.025,0,e,.02,.12,"#d5ccaa")}function yy(i,e){let t=i.id;if(t==="airport"){ge(e,0,-.015,0,21,.05,19,"#afb59d"),ge(e,0,.03,-6,20,.04,2.3,"#50595c");for(let n=-9;n<10;n+=1.2)ge(e,n,.055,-6,.6,.015,.07,"#ecebd8");ge(e,0,.03,-2,20,.04,1.2,"#95998e"),ge(e,0,.6,3,9,1.2,3,"#dce2dc"),ge(e,0,1.23,3,9.3,.08,3.2,"#838f94"),ge(e,0,.6,4.51,8,.6,.025,"#73a1b4"),Zt(e,-6,1.3,3,.22,2.6,"#dce0dd"),ge(e,-6,2.7,3,.8,.5,.7,"#6e9eae");for(let n=0;n<4;n++){let s=new rt;s.position.set(-6+n*4,.5,.1),e.add(s);let r=Zt(s,0,0,0,.13,2,"#f0f0e7",.08);r.rotation.x=Math.PI/2,ge(s,0,0,0,1.9,.045,.4,"#e9ebe3"),ge(s,0,.09,.7,.05,.35,.4,"#97afb8"),ge(s,0,0,.7,.7,.04,.2,"#e5e9e0")}Oi(e,"LAGOS AIRPORT",0,1,4.54,3)}if(t==="refinery"){ge(e,0,-.015,0,13,.05,13,"#c9c6b7");for(let n=0;n<5;n++){let s=-4.6+n*2.25;Zt(e,s,.8,-3,.9,1.6,"#d7d7ce"),Ba(e,s,1.6,-3,.9,"#c6c9c3"),Zt(e,s,.5,0,.85,1,"#bfc4bf")}for(let n=0;n<3;n++){Zt(e,-4+n*2.2,1.8,3,.35,3.6,"#c7c9c1");for(let s=.5;s<3.6;s+=.55)Zt(e,-4+n*2.2,s,3,.41,.05,"#dfc05c")}ge(e,3,.7,3,3,1.4,2.3,"#969b93");for(let n=0;n<2;n++)Zt(e,2.5+n,2.3,3,.17,3.5,"#c1c4ba");for(let n=0;n<5;n++)ge(e,-4+n*2.1,.4,4.9,1.8,.09,.09,"#9d8d57");Oi(e,"REFINERY",0,.8,5.9,2.6)}if(t==="mosque"&&(ge(e,0,.35,0,1.1,.7,1,"#f4efe6"),Ba(e,0,.7,0,.38,"#059669"),Zt(e,.62,.65,.4,.09,1.3,"#f4efe6",.11),Ba(e,.62,1.3,.4,.11,"#059669")),t==="courthouse"){ge(e,0,.04,0,1.5,.08,1.15,"#d6d3cc"),ge(e,0,.43,-.12,1.3,.7,.8,"#f4efe6");for(let s=-.5;s<=.5;s+=.25)Zt(e,s,.39,.4,.045,.62,"#f8fafc");ge(e,0,.74,.02,1.42,.08,.98,"#e7e0d2");let n=new ht(new An(.86,.32,4),ac("#7c2d12"));n.position.set(0,.94,.02),n.rotation.y=Math.PI/4,e.add(n),Oi(e,"HIGH COURT",0,.74,.52)}if(t==="church"&&(ge(e,0,1.35,0,.06,.42,.06,"#e3be60"),ge(e,0,1.42,0,.24,.06,.06,"#e3be60")),t==="hospital"&&(ge(e,0,1.62,0,.5,.12,.14,"#e5484d"),ge(e,0,1.62,0,.14,.12,.5,"#e5484d")),t==="library"||t==="mindSpace"||t==="naijaRadio"||t==="casino"){let n=t==="library",s=t==="casino";if(ge(e,0,n?.55:.4,-.1,1.2,n?1.1:.8,1,n?"#6d5a9c":s?"#2a1838":"#e8f3ec"),ge(e,0,n?1.13:.83,-.1,1.28,.06,1.08,n?"#b9a8e6":"#52b788"),ge(e,0,.3,.41,.95,.26,.02,"#bde0fe"),Oi(e,i.name.toUpperCase(),0,.65,.43),s&&Ba(e,0,.85,-.1,.36,"#c9a227"),t==="naijaRadio"){Zt(e,.85,1.3,0,.025,2.6,"#a4a9ae");for(let r=0;r<3;r++)ge(e,.85,1.5+r*.4,0,.45,.025,.03,"#b9c0c5")}}if(t==="pollingUnit"){for(let n of[-.55,.55])for(let s of[-.4,.4])Zt(e,n,.32,s,.02,.64,"#cbd5e1");[-.45,-.15,.15,.45].forEach((n,s)=>ge(e,n,.68,0,.3,.06,.95,s%2?"#ffffff":"#008751")),ge(e,0,.22,0,.8,.04,.4,"#8b6a4a"),Oi(e,"POLLING UNIT",0,.5,.52)}if(t==="mall"){ge(e,0,.53,0,2.5,1.05,1.5,"#f4efe6"),ge(e,0,1.08,0,2.7,.12,1.7,"#e0e3df");for(let n of[-.75,0,.75])ge(e,n,.35,.76,.45,.7,.03,"#273c4c");Oi(e,"THE PALMS",0,.88,.8,1.7)}if(t==="balogun"){let n=["#efb23b","#279ea1","#535ac0","#d83f58","#54a861"];for(let s=0;s<5;s++)for(let r=0;r<3;r++)ge(e,(s-2)*.76,.4,r*.76-.4,.7,.07,.72,n[(s+r)%5]),ge(e,(s-2)*.76,.17,r*.76-.4,.65,.32,.64,"#b59768")}if(t==="freedomPark"||t==="golfClub"||t==="ekoHotel"){if(Up(e,i.w,i.d),t==="ekoHotel"){ge(e,-.8,.032,.7,1.3,.025,.75,"#52bcd5");for(let n=0;n<4;n++)mi(pi(e,"commercial/detail-parasol-a",.35,[-1.4+n*.7,0,1.35]))}if(t==="golfClub"){ge(e,.55,.03,0,.75,.02,.45,"#69bdd7");for(let n of[-1,1])Zt(e,n,.42,-1.2,.01,.8,"#f3f1e1"),ge(e,n+.09,.76,-1.2,.18,.13,.02,"#e24646")}}if(t==="unilag"){Up(e,i.w,i.d),ge(e,1.8,.03,1.2,2.5,.02,1.5,"#bc5e3c"),ge(e,1.8,.047,1.2,2,.015,1,"#7ead62"),ge(e,-.8,.03,1.25,2,.02,1.4,"#688f55");for(let n=0;n<6;n++)mi(pi(e,"suburban/tree-small",.65,[-3+n*1.15,0,2.1]))}if(t==="lcc"){ge(e,0,.012,0,6.7,.035,3.8,"#81ab60");for(let n=0;n<27;n++){let s=(Math.sin(n*127.1)*.5+.5)*5.8-2.9,r=(Math.cos(n*61.3)*.5+.5)*3.3-1.65;mi(pi(e,n%3?"suburban/tree-small":"suburban/tree-large",1+n*7%9*.08,[s,0,r]))}for(let n=0;n<3;n++){let s=ge(e,-1.9+n*1.5,.95,-.5+n*.55,1.7,.045,.25,"#aa8b5a");s.rotation.y=-.35;for(let r of[-2.6+n*1.5,-1.2+n*1.5])Zt(e,r,.58,-.5+n*.55,.025,1.12,"#9a7c49")}Oi(e,"CANOPY WALK",-2.5,.27,1.7,1.5)}if(t==="elegushi"){for(let n=0;n<9;n++)mi(pi(e,`commercial/detail-parasol-${n%2?"a":"b"}`,.55,[-2.6+n*.65,0,.45]));Oi(e,"ELEGUSHI",-1.5,.28,-.35)}if(t==="stadium"){ge(e,0,.02,0,2.4,.04,1.4,"#3f8f3a"),ge(e,0,.05,0,.025,.008,1.4,"#fff");let n=new ht(new Ot(1.55,1.2,.45,40,1,!0),new dn({color:"#c6d9ca",side:jt}));n.scale.z=.7,n.position.y=.27,e.add(n);for(let s of[-1.65,1.65])for(let r of[-.95,.95])Zt(e,s,.7,r,.022,1.4,"#a4a9ae"),ge(e,s,1.4,r,.32,.13,.08,"#fffae5");Oi(e,"STADIUM",0,.33,1.14)}t==="boatCruise"&&mi(pi(e,"pirate/boat-row-small",.35,[.4,.03,.4]))}for(let i of ls){if(i.id.startsWith("home_")&&i.id!=="home_yaba")continue;let e=new rt;e.position.set(i.x,.205,i.z),bn.add(e),i.group=e,ge(e,0,-.012,0,i.w,.03,i.d,"#e4e5d6"),yy(i,e);for(let n of i.models)mi(pi(e,n.model,n.height,n.position,n.tint));let t=document.createElement("button");t.className="label",t.innerHTML=`<span>${Wp[i.id]||(i.id==="airport"?"\u2708\uFE0F":i.id==="refinery"?"\u{1F6E2}\uFE0F":"\u{1F3E0}")}</span>${i.name}`,t.setAttribute("aria-label",`Select ${i.name}`),t.onclick=()=>lc(i),Ye("labels").appendChild(t),Dr.push({place:i,button:t,point:new I(i.x,.205+i.h,i.z)})}var os=Lp({box:ge,textSurface:Vi});cs.add(os.world);ls.push(...os.places);var Hi=Np({textSurface:Vi});cs.add(Hi.world);ls.push(...Hi.places);for(let i of[...os.places,...Hi.places]){let e=document.createElement("button");e.className="label",e.hidden=!0,e.innerHTML=`<span>${i.emoji}</span>${i.name}`,e.setAttribute("aria-label",`Select ${i.name}`),e.onclick=()=>lc(i),Ye("labels").appendChild(e);let t=i.tag||[0,i.h,0];Dr.push({place:i,button:e,point:new I(i.x+t[0],.28+t[1],i.z+t[2])})}var Bp={dubHapenny:110,dubTrinity:109,dubSpire:108,dubAirport:107,dubGreen:106,dubGuinness:105,dubBeckett:104,dubTemple:103,abjAssembly:100,abjAsoRock:99,abjAirport:98,abjJabiLake:97,abjZumaRock:96,abjMosque:95,abjMillenniumPark:90};Dr.sort((i,e)=>(Bp[e.place.id]||0)-(Bp[i.place.id]||0));ge(Gi,0,.055,-25,42,.3,7.5,"#add08f");ge(Gi,19,.055,9.4,8,.3,12,"#c7e0a5");for(let i=0;i<4;i++)for(let e=0;e<22;e++){let t=-20+e*1.85,n=-27.8+i*1.75;ge(Gi,t,.219,n,1.4,.03,1.4,"#e4e6d8"),mi(pi(Gi,"suburban/building-type-c",.62,[t,.24,n]))}for(let i=0;i<7;i++)for(let e=0;e<4;e++){let t=16.25+e*1.65,n=4.4+i*1.65;ge(Gi,t,.219,n,1.4,.03,1.4,"#e6e7dc"),mi(pi(Gi,"suburban/building-type-t",.64,[t,.24,n]))}for(let[i,e,t]of[[0,-15,-15],[1,-16,-7],[2,-8,-3.5],[3,1,-3.8],[4,14,-4],[5,-3,.1],[6,16,1],[7,12,7.5],[8,-8,10.5],[9,2,14.4],[10,18,13.8]]){ge(Lr,e,1.55,t,3.3,1.7,.11,"#202431");for(let n of[-1.3,1.3])ge(Lr,e+n,.75,t,.09,1.5,.09,"#202431");Vi(i%2?"LAGOS LIFE":"YOUR AD HERE","#fff",3.13,Lr,e,1.55,t+.067,!1,i%2?"#206b57":"#276998")}for(let i=0;i<28;i++){let e=-17+i*13%38,t=i%2?-4.9:14.3;mi(pi(bn,"pirate/palm-straight",1.1,[e,.205,t]))}var Du=[];for(let i=0;i<5;i++){let e=new rt;bn.add(e),e.position.set(-15+i*7,.24,-4.5),mi(pi(e,i%2?"car/sedan":"car/van",.26,[0,0,0],i%2?null:"#f3c43d",Math.PI/2)),Du.push(e)}var Tt=new rt;Tt.visible=!1;cs.add(Tt);Zt(Tt,0,.04,0,.2,.06,"#54af7d");Zt(Tt,0,.6,0,.13,.55,"#252e43");Ba(Tt,0,.92,0,.14,"#a77750");ge(Tt,-.1,.23,0,.065,.4,.09,"#252e43");ge(Tt,.1,.23,0,.065,.4,.09,"#252e43");Tt.position.set(.75,.22,-6);var zi=null,rn=new Set,Op=0,ks=new ht(new ws(.95,1.03,48),new tn({color:"#408b61",side:jt,transparent:!0,opacity:.75}));ks.rotation.x=-Math.PI/2;ks.visible=!1;cs.add(ks);var rs={lagos:{position:new I(3.75,37.5,26.25),target:new I(2.25,0,1.5)},abuja:{position:new I(-2,88,68).sub(new I(-2,0,2)).multiplyScalar(Math.max(1.7,1.8/Et.aspect)).add(new I(-2,0,2)),target:new I(-2,0,2)}};rs.dublin={position:new I(5,73,61).multiplyScalar(Math.max(1.45,1.55/Et.aspect)),target:new I(0,0,-5)};var Fp={},vy={lagos:"\u{1F1F3}\u{1F1EC} Lagos",abuja:"\u{1F1F3}\u{1F1EC} Abuja",dublin:"\u{1F1EE}\u{1F1EA} Dublin"};function oc(i){if(!["lagos","abuja","dublin"].includes(i))throw new Error("Unknown map city");if(i===Jt)return{city:i,changed:!1};Fp[Jt]={position:Et.position.clone(),target:et.target.clone()},_i=!1,Tt.visible=!1,zi=null,rn.clear(),et.enableRotate=!0,kn=null,Nr(),Ye("walk").setAttribute("aria-pressed","false"),Ye("walk-controls").hidden=!0,Ye("hint").hidden=!1,Jt=i,bn.visible=i==="lagos",Gi.visible=i==="lagos"&&Fi,Lr.visible=i==="lagos"&&ki,os.world.visible=i==="abuja",os.homes.visible=Fi,os.boards.visible=ki,Hi.world.visible=i==="dublin",Hi.homes.visible=Fi,Hi.boards.visible=ki,an.setClearColor(i==="abuja"?"#93b56c":i==="dublin"?"#9bb38b":"#67afd5"),Oa.dataset.city=i,Ye("city-name").textContent=vy[i],Oa.setAttribute("aria-label",`Interactive 3D ${i[0].toUpperCase()+i.slice(1)} city map`),document.querySelectorAll("button[data-city]").forEach(s=>s.setAttribute("aria-pressed",String(s.dataset.city===i)));let e=i==="dublin"?[["all","\u{1F5FA}\uFE0F","All Dublin"],["centre","\u{1F3DB}\uFE0F","City centre"],["northside","\u{1F3D8}\uFE0F","Northside"],["docklands","\u2693","Docklands"]]:i==="abuja"?[["all","\u{1F5FA}\uFE0F","All Abuja"],["central","\u{1F3DB}\uFE0F","Central"],["maitama","\u{1F333}","Maitama"],["jabi","\u{1F30A}","Jabi"]]:[["all","\u{1F5FA}\uFE0F","All Lagos"],["mainland","\u{1F3D8}\uFE0F","Mainland"],["island","\u{1F3D9}\uFE0F","Island"],["lekki","\u{1F334}","Lekki"]];document.querySelectorAll("[data-district]").forEach((s,r)=>{s.dataset.district=e[r][0],s.innerHTML=`${e[r][1]}<span>${e[r][2]}</span>`,s.classList.toggle("active",r===0)}),et.maxDistance=i==="lagos"?110:500,et.minDistance=i==="lagos"?7:12;let t=Fp[i]||rs[i];Et.position.copy(t.position),et.target.copy(t.target),et.update(),gi.position.set(i==="lagos"?32:40,i==="lagos"?56:90,i==="lagos"?24:28);let n=i==="lagos"?50:95;return Object.assign(gi.shadow.camera,{left:-n,right:n,top:n,bottom:-n,far:i==="lagos"?120:230}),gi.shadow.camera.updateProjectionMatrix(),Tt.position.set(i==="lagos"?.75:0,.28,i==="lagos"?-6:i==="dublin"?5:0),{city:i,changed:!0}}document.querySelectorAll("button[data-city]").forEach(i=>i.onclick=()=>oc(i.dataset.city));function kp(i){return i.city!=="lagos"?i.area:i.z<-2?"Mainland":i.x>8?"Lekki":"Island"}function lc(i){i.city!==Jt&&oc(i.city),as=i,Dr.forEach(e=>e.button.classList.toggle("selected",e.place===i)),Ye("detail").hidden=!1,Ye("place-name").textContent=`${i.emoji||Wp[i.id]||"\u{1F3E0}"} ${i.name}`,Ye("district").textContent=kp(i),Ye("place-desc").textContent=i.description||xy[i.id]||(i.city==="abuja"?`${i.name} in ${i.area}. Explore the landmark and its surroundings on the Abuja map.`:`${i.name} on the ${kp(i)} side of the city.`),ks.position.set(i.x,i.city==="lagos"?.23:.33,i.z),ks.scale.setScalar(i.city!=="lagos"?Math.max(1,Math.min(i.w,i.d)*.55):1),ks.visible=!0}function Nr(){as=null,Ye("detail").hidden=!0,ks.visible=!1,Dr.forEach(i=>i.button.classList.remove("selected"))}function Fa(i,e,t=20){let n=Et.position.clone().sub(et.target).normalize();kn={from:Et.position.clone(),fromTarget:et.target.clone(),to:new I(i,0,e).addScaledVector(n,t),toTarget:new I(i,0,e),start:performance.now()}}function ka(i=!_i){_i=i,Tt.visible=i,et.enableRotate=!i,Ye("walk").setAttribute("aria-pressed",String(i)),Ye("walk-controls").hidden=!i,Ye("hint").hidden=i,zi=null,rn.clear(),i?Fa(Tt.position.x,Tt.position.z,12):Nu()}function Nu(){_i&&(_i=!1,Tt.visible=!1,et.enableRotate=!0,Ye("walk").setAttribute("aria-pressed","false"),Ye("walk-controls").hidden=!0,Ye("hint").hidden=!1,rn.clear()),kn={from:Et.position.clone(),fromTarget:et.target.clone(),to:rs[Jt].position.clone(),toTarget:rs[Jt].target.clone(),start:performance.now()},document.querySelectorAll("[data-district]").forEach(i=>i.classList.toggle("active",i.dataset.district==="all"))}function Xp(i){kn=null,Et.position.sub(et.target).multiplyScalar(i).add(et.target);let e=Et.position.distanceTo(et.target);(e<et.minDistance||e>et.maxDistance)&&Et.position.sub(et.target).normalize().multiplyScalar(Ps.clamp(e,et.minDistance,et.maxDistance)).add(et.target),et.update()}Ye("names").onclick=()=>{ic=!ic,Ye("names").setAttribute("aria-pressed",String(ic))};Ye("homes").onclick=()=>{Fi=!Fi,Gi.visible=Jt==="lagos"&&Fi,os.homes.visible=Fi,Hi.homes.visible=Fi,Ye("homes").setAttribute("aria-pressed",String(Fi))};Ye("boards").onclick=()=>{ki=!ki,Lr.visible=Jt==="lagos"&&ki,os.boards.visible=ki,Hi.boards.visible=ki,Ye("boards").setAttribute("aria-pressed",String(ki))};Ye("walk").onclick=()=>ka();Ye("leave-walk").onclick=()=>ka(!1);Ye("plus").onclick=()=>Xp(.8);Ye("minus").onclick=()=>Xp(1.25);Ye("reset").onclick=Nu;Ye("close-detail").onclick=Nr;Ye("focus").onclick=()=>as&&Fa(as.x,as.z,10);Ye("walk-here").onclick=()=>{if(!as)return;let i=as;ka(!0),Tt.position.set(i.x,.22,i.z+i.d/2+.65),Fa(Tt.position.x,Tt.position.z,12),Nr()};document.querySelectorAll("[data-district]").forEach(i=>i.onclick=()=>{Nr(),_i&&ka(!1),document.querySelectorAll("[data-district]").forEach(t=>t.classList.toggle("active",t===i));let e=Jt==="dublin"?{centre:[-5,12,39],northside:[-7,-20,55],docklands:[28,5,42]}:Jt==="abuja"?{central:[16,0,45],maitama:[22,-32,43],jabi:[-35,-10,45]}:{mainland:[0,-12,28],island:[-4,7.5,25],lekki:[15,8,24]};i.dataset.district==="all"?Nu():Fa(...e[i.dataset.district])});Ye("help").onclick=()=>Ye("help-dialog").showModal();Ye("close-help").onclick=()=>Ye("help-dialog").close();et.addEventListener("start",()=>kn=null);window.addEventListener("keydown",i=>{i.key==="Escape"&&(Nr(),_i&&ka(!1)),_i&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d"].includes(i.key)&&(i.preventDefault(),rn.add(i.key))});window.addEventListener("keyup",i=>rn.delete(i.key));window.addEventListener("blur",()=>rn.clear());var zp={up:"w",down:"s",left:"a",right:"d"};document.querySelectorAll("[data-move]").forEach(i=>{i.addEventListener("pointerdown",e=>{i.setPointerCapture(e.pointerId),rn.add(zp[i.dataset.move])});for(let e of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(e,()=>rn.delete(zp[i.dataset.move]))});var Hp=new wa,Gp=new ce,by=new mn(new I(0,1,0),-.22),rc=null;an.domElement.addEventListener("pointerdown",i=>rc=[i.clientX,i.clientY]);an.domElement.addEventListener("pointerup",i=>{if(!rc||Math.hypot(i.clientX-rc[0],i.clientY-rc[1])>7)return;Gp.set(i.clientX/innerWidth*2-1,-i.clientY/innerHeight*2+1),Hp.setFromCamera(Gp,Et);let e=new I;if(!Hp.ray.intersectPlane(by,e))return;if(_i){zi=e;return}let t=ls.filter(n=>n.city===Jt&&Math.abs(n.x-e.x)<n.w/2+.3&&Math.abs(n.z-e.z)<n.d/2+.3).sort((n,s)=>Math.hypot(n.x-e.x,n.z-e.z)-Math.hypot(s.x-e.x,s.z-e.z))[0];t?lc(t):Nr()});window.addEventListener("resize",()=>{Et.aspect=innerWidth/innerHeight,Et.updateProjectionMatrix(),an.setSize(innerWidth,innerHeight),rs.abuja.position.set(-2,88,68).sub(rs.abuja.target).multiplyScalar(Math.max(1.7,1.8/Et.aspect)).add(rs.abuja.target),rs.dublin.position.set(5,73,61).multiplyScalar(Math.max(1.45,1.55/Et.aspect))});function My(i,e){return Jt==="dublin"?Hi.isLand(i,e):Jt==="abuja"?i>-64&&i<60&&e>-47&&e<48&&((i+36)/8)**2+((e+9)/5)**2>1&&Math.hypot(i-52,e+1)>8&&Math.hypot(i+56,e+8)>6:i>-21&&i<21&&e>-20.4&&e<-2.4||i>-26.9&&i<-20.8&&e>-20.4&&e<-2.4||i>-16.8&&i<8.25&&e>.9&&e<14.4||i>8.55&&i<23.1&&e>.6&&e<14.4||i>-11.25&&i<25.7&&e>13.8&&e<20.3||Math.abs(i+1.2)<.33&&e>-2.4&&e<.9||i>7.9&&i<8.6&&Math.abs(e-6)<.35}var Ua=new I,Sy=()=>innerWidth<700;function qp(i){let e=Math.min((i-Op)/1e3,.05)||0;if(Op=i,kn){let n=Math.min((i-kn.start)/650,1),s=n*n*(3-2*n);Et.position.lerpVectors(kn.from,kn.to,s),et.target.lerpVectors(kn.fromTarget,kn.toTarget,s),n===1&&(kn=null)}if(_i){let n=0,s=0,r=new I().subVectors(et.target,Et.position);r.y=0,r.normalize();let a=new I(-r.z,0,r.x);if((rn.has("w")||rn.has("ArrowUp"))&&(n+=r.x,s+=r.z),(rn.has("s")||rn.has("ArrowDown"))&&(n-=r.x,s-=r.z),(rn.has("d")||rn.has("ArrowRight"))&&(n+=a.x,s+=a.z),(rn.has("a")||rn.has("ArrowLeft"))&&(n-=a.x,s-=a.z),n||s?zi=null:zi&&(n=zi.x-Tt.position.x,s=zi.z-Tt.position.z,Math.hypot(n,s)<.1&&(zi=null)),n||s){let o=Math.hypot(n,s),l=n/o*e*(Jt==="lagos"?2.2:5.8),c=s/o*e*(Jt==="lagos"?2.2:5.8);My(Tt.position.x+l,Tt.position.z+c)?(Tt.position.x+=l,Tt.position.z+=c,Tt.rotation.y=Math.atan2(l,c),Et.position.x+=l,Et.position.z+=c,et.target.x+=l,et.target.z+=c):zi=null}}et.update(),Et.updateMatrixWorld();let t=[];for(let n of Dr){Ua.copy(n.point).project(Et);let s=(Ua.x+1)*innerWidth/2,r=(-Ua.y+1)*innerHeight/2,a=n.button.offsetWidth||n.place.name.length*7+36,o=n.place.city===Jt&&ic&&Ua.z<1&&Ua.z>-1&&s>a/2+8&&s<innerWidth-a/2-8&&r>(Sy()?210:225)&&r<innerHeight-100;o&&s>innerWidth-78&&Math.abs(r-innerHeight/2)<100&&(o=!1),o&&n.place!==as&&(t.some(l=>Math.abs(l.x-s)<(l.w+a)/2+3&&Math.abs(l.y-r)<29)?o=!1:t.push({x:s,y:r,w:a})),n.button.hidden=!o,o&&(n.button.style.transform=`translate(${s}px,${r}px) translate(-50%,-100%)`)}for(let n=0;n<Du.length;n++)Du[n].position.x=((i*.001*(n%2?-1:1)+n*6)%30+30)%30-15;an.render(cs,Et),requestAnimationFrame(qp)}requestAnimationFrame(qp);await Promise.all(sc);Ye("loader").hidden=!0;Oa.dataset.ready="true";var Vp=new URLSearchParams(location.search).get("city");["abuja","dublin"].includes(Vp)&&oc(Vp);if(document.modelContext?.registerTool){let i=document.modelContext;for(let e of[{name:"switch_map_city",description:"Switch between the Lagos, Abuja and Dublin map views.",inputSchema:{type:"object",properties:{city:{type:"string",enum:["lagos","abuja","dublin"]}},required:["city"],additionalProperties:!1},execute:t=>oc(t?.city)},{name:"list_map_places",description:"List the landmarks in the Lagos, Abuja and Dublin maps.",inputSchema:{type:"object",properties:{},additionalProperties:!1},annotations:{readOnlyHint:!0},execute:()=>ls.map(({id:t,name:n,city:s,x:r,z:a})=>({id:t,name:n,city:s,x:r,z:a}))},{name:"focus_map_place",description:"Select and focus a landmark in the map.",inputSchema:{type:"object",properties:{id:{type:"string"}},required:["id"],additionalProperties:!1},execute:t=>{let n=ls.find(s=>s.id===t?.id);if(!n)throw new Error("Unknown map place");return lc(n),Fa(n.x,n.z,10),{id:n.id,name:n.name,selected:!0}}}])try{await i.registerTool(e)}catch(t){console.warn("Map tool unavailable",t)}}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
