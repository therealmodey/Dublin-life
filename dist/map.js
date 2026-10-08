var i0=Object.defineProperty;var s0=(i,e)=>{for(var t in e)i0(i,t,{get:e[t],enumerable:!0})};var On={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Kn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Cd=0,eh=1,Id=2;var th=1,Go=2,ui=3,An=0,pn=1,Wt=2,Li=0,xs=1,nh=2,ih=3,sh=4,Pd=5,$i=100,Ld=101,Dd=102,Nd=103,Ud=104,Bd=200,Od=201,Fd=202,kd=203,go=204,_o=205,zd=206,Hd=207,Gd=208,Vd=209,jd=210,Wd=211,Xd=212,qd=213,Yd=214,Vo=0,jo=1,Wo=2,ys=3,Xo=4,qo=5,Yo=6,Ko=7,rh=0,Kd=1,Zd=2,Di=0,Jd=1,$d=2,Qd=3,Zo=4,ef=5,tf=6,nf=7,Gc="attached",sf="detached",ah=300,Cs=301,Is=302,Jo=303,$o=304,Aa=306,Qi=1e3,ti=1001,ir=1002,Kt=1003,Qo=1004;var Ps=1005;var hn=1006,yr=1007;var Zn=1008;var Jn=1009,oh=1010,lh=1011,vr=1012,el=1013,is=1014,Fn=1015,br=1016,tl=1017,nl=1018,Mr=1020,ch=35902,hh=35899,uh=1021,dh=1022,Cn=1023,sr=1026,Sr=1027,il=1028,sl=1029,fh=1030,rl=1031;var al=1033,Ra=33776,Ca=33777,Ia=33778,Pa=33779,ol=35840,ll=35841,cl=35842,hl=35843,ul=36196,dl=37492,fl=37496,pl=37808,ml=37809,gl=37810,_l=37811,xl=37812,yl=37813,vl=37814,bl=37815,Ml=37816,Sl=37817,wl=37818,El=37819,Tl=37820,Al=37821,Rl=36492,Cl=36494,Il=36495,Pl=36283,Ll=36284,Dl=36285,Nl=36286;var vs=2300,bs=2301,mo=2302,Vc=2400,jc=2401,Wc=2402,rf=2500;var ph=0,La=1,wr=2,af=3200,of=3201;var mh=0,lf=1,Ni="",Lt="srgb",Zt="srgb-linear",Kr="linear",ft="srgb";var _s=7680;var Xc=519,cf=512,hf=513,uf=514,gh=515,df=516,ff=517,pf=518,mf=519,xo=35044;var _h="300 es",Wn=2e3,Zr=2001;var ii=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ju=1234567,Wr=Math.PI/180,Ms=180/Math.PI;function Xn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function We(i,e,t){return Math.max(e,Math.min(t,i))}function xh(i,e){return(i%e+e)%e}function r0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function a0(i,e,t){return i!==e?(t-i)/(e-i):0}function Xr(i,e,t){return(1-t)*i+t*e}function o0(i,e,t,n){return Xr(i,e,1-Math.exp(-t*n))}function l0(i,e=1){return e-Math.abs(xh(i,e*2)-e)}function c0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function h0(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function u0(i,e){return i+Math.floor(Math.random()*(e-i+1))}function d0(i,e){return i+Math.random()*(e-i)}function f0(i){return i*(.5-Math.random())}function p0(i){i!==void 0&&(ju=i);let e=ju+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function m0(i){return i*Wr}function g0(i){return i*Ms}function _0(i){return(i&i-1)===0&&i!==0}function x0(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function y0(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function v0(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ls={DEG2RAD:Wr,RAD2DEG:Ms,generateUUID:Xn,clamp:We,euclideanModulo:xh,mapLinear:r0,inverseLerp:a0,lerp:Xr,damp:o0,pingpong:l0,smoothstep:c0,smootherstep:h0,randInt:u0,randFloat:d0,randFloatSpread:f0,seededRandom:p0,degToRad:m0,radToDeg:g0,isPowerOfTwo:_0,ceilPowerOfTwo:x0,floorPowerOfTwo:y0,setQuaternionFromProperEuler:v0,normalize:dt,denormalize:jn},he=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},un=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(h!==y||l!==d||c!==f||u!==g){let m=1-o,p=l*d+c*f+u*g+h*y,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){let L=Math.sqrt(E),R=Math.atan2(L,p*T);m=Math.sin(m*R)/L,o=Math.sin(o*R)/L}let b=o*T;if(l=l*m+d*b,c=c*m+f*b,u=u*m+g*b,h=h*m+y*b,m===1-o){let L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+u*h+l*f-c*d,e[t+1]=l*g+u*d+c*h-o*f,e[t+2]=c*g+u*f+o*d-l*h,e[t+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(We(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(We(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},dc=new I,Wu=new un,Ve=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],T=s[1],E=s[4],b=s[7],L=s[2],R=s[5],D=s[8];return r[0]=a*y+o*T+l*L,r[3]=a*m+o*E+l*R,r[6]=a*p+o*b+l*D,r[1]=c*y+u*T+h*L,r[4]=c*m+u*E+h*R,r[7]=c*p+u*b+h*D,r[2]=d*y+f*T+g*L,r[5]=d*m+f*E+g*R,r[8]=d*p+f*b+g*D,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,g=t*h+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=h*y,e[1]=(s*c-u*n)*y,e[2]=(o*n-s*a)*y,e[3]=d*y,e[4]=(u*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fc.makeScale(e,t)),this}rotate(e){return this.premultiply(fc.makeRotation(-e)),this}translate(e,t){return this.premultiply(fc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},fc=new Ve;function yh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function gf(){let i=rr("canvas");return i.style.display="block",i}var Xu={};function ar(i){i in Xu||(Xu[i]=!0,console.warn(i))}function _f(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var qu=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yu=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function b0(){let i={enabled:!0,workingColorSpace:Zt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ft&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(s.r=nr(s.r),s.g=nr(s.g),s.b=nr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ni?Kr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ar("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ar("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zt]:{primaries:e,whitePoint:n,transfer:Kr,toXYZ:qu,fromXYZ:Yu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:qu,fromXYZ:Yu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),i}var et=b0();function Ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Gs,yo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gs===void 0&&(Gs=rr("canvas")),Gs.width=e.width,Gs.height=e.height;let s=Gs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Gs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=rr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},M0=0,or=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Xn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(pc(s[a].image)):r.push(pc(s[a]))}else r=pc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function pc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var S0=0,mc=new I,Ot=class i extends ii{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ti,s=ti,r=hn,a=Zn,o=Cn,l=Jn,c=i.DEFAULT_ANISOTROPY,u=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Xn(),this.name="",this.source=new or(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mc).x}get height(){return this.source.getSize(mc).y}get depth(){return this.source.getSize(mc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ah)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Qi:e.x=e.x-Math.floor(e.x);break;case ti:e.x=e.x<0?0:1;break;case ir:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Qi:e.y=e.y-Math.floor(e.y);break;case ti:e.y=e.y<0?0:1;break;case ir:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=ah;Ot.DEFAULT_ANISOTROPY=1;var st=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,b=(f+1)/2,L=(p+1)/2,R=(u+d)/4,D=(h+y)/4,N=(g+m)/4;return E>b&&E>L?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=R/n,r=D/n):b>L?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=R/s,r=N/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=D/r,s=N/r),this.set(n,s,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-y)/T,this.z=(d-u)/T,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=We(this.x,e.x,t.x),this.y=We(this.y,e.y,t.y),this.z=We(this.z,e.z,t.z),this.w=We(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=We(this.x,e,t),this.y=We(this.y,e,t),this.z=We(this.z,e,t),this.w=We(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(We(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vo=class extends ii{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Ot(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:hn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new or(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},si=class extends vo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Jr=class extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var bo=class extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var dn=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(r,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Va.copy(n.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),ja.subVectors(this.max,Or),Vs.subVectors(e.a,Or),js.subVectors(e.b,Or),Ws.subVectors(e.c,Or),Wi.subVectors(js,Vs),Xi.subVectors(Ws,js),fs.subVectors(Vs,Ws);let t=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-fs.z,fs.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,fs.z,0,-fs.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-fs.y,fs.x,0];return!gc(t,Vs,js,Ws,ja)||(t=[1,0,0,0,1,0,0,0,1],!gc(t,Vs,js,Ws,ja))?!1:(Wa.crossVectors(Wi,Xi),t=[Wa.x,Wa.y,Wa.z],gc(t,Vs,js,Ws,ja))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},vi=[new I,new I,new I,new I,new I,new I,new I,new I],Hn=new I,Va=new dn,Vs=new I,js=new I,Ws=new I,Wi=new I,Xi=new I,fs=new I,Or=new I,ja=new I,Wa=new I,ps=new I;function gc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ps.fromArray(i,r);let o=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=e.dot(ps),c=t.dot(ps),u=n.dot(ps);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var w0=new dn,Fr=new I,_c=new I,_n=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):w0.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);let t=Fr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_c.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(_c)),this.expandByPoint(Fr.copy(e.center).sub(_c))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bi=new I,xc=new I,Xa=new I,qi=new I,yc=new I,qa=new I,vc=new I,ri=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){xc.copy(e).add(t).multiplyScalar(.5),Xa.copy(t).sub(e).normalize(),qi.copy(this.origin).sub(xc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Xa),o=qi.dot(this.direction),l=-qi.dot(Xa),c=qi.lengthSq(),u=Math.abs(1-a*a),h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=r*u,h>=0)if(d>=-g)if(d<=g){let y=1/u;h*=y,d*=y,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(xc).addScaledVector(Xa,d),f}intersectSphere(e,t){bi.subVectors(e.center,this.origin);let n=bi.dot(this.direction),s=bi.dot(bi)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,n,s,r){yc.subVectors(t,e),qa.subVectors(n,e),vc.crossVectors(yc,qa);let a=this.direction.dot(vc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qi.subVectors(this.origin,e);let l=o*this.direction.dot(qa.crossVectors(qi,qa));if(l<0)return null;let c=o*this.direction.dot(yc.cross(qi));if(c<0||l+c>a)return null;let u=-o*qi.dot(vc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},He=class i{constructor(e,t,n,s,r,a,o,l,c,u,h,d,f,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,f,g,y,m)}set(e,t,n,s,r,a,o,l,c,u,h,d,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Xs.setFromMatrixColumn(e,0).length(),r=1/Xs.setFromMatrixColumn(e,1).length(),a=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,g=o*u,y=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,g=c*u,y=c*h;t[0]=d+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,g=c*u,y=c*h;t[0]=d-y*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,g=o*u,y=o*h;t[0]=l*u,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*h,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=y-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+g,t[10]=d-y*h}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+y,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=y*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(E0,e,T0)}lookAt(e,t,n){let s=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Yi.crossVectors(n,En),Yi.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Yi.crossVectors(n,En)),Yi.normalize(),Ya.crossVectors(En,Yi),s[0]=Yi.x,s[4]=Ya.x,s[8]=En.x,s[1]=Yi.y,s[5]=Ya.y,s[9]=En.y,s[2]=Yi.z,s[6]=Ya.z,s[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],T=n[3],E=n[7],b=n[11],L=n[15],R=s[0],D=s[4],N=s[8],S=s[12],x=s[1],v=s[5],A=s[9],U=s[13],P=s[2],z=s[6],V=s[10],ee=s[14],X=s[3],oe=s[7],pe=s[11],Se=s[15];return r[0]=a*R+o*x+l*P+c*X,r[4]=a*D+o*v+l*z+c*oe,r[8]=a*N+o*A+l*V+c*pe,r[12]=a*S+o*U+l*ee+c*Se,r[1]=u*R+h*x+d*P+f*X,r[5]=u*D+h*v+d*z+f*oe,r[9]=u*N+h*A+d*V+f*pe,r[13]=u*S+h*U+d*ee+f*Se,r[2]=g*R+y*x+m*P+p*X,r[6]=g*D+y*v+m*z+p*oe,r[10]=g*N+y*A+m*V+p*pe,r[14]=g*S+y*U+m*ee+p*Se,r[3]=T*R+E*x+b*P+L*X,r[7]=T*D+E*v+b*z+L*oe,r[11]=T*N+E*A+b*V+L*pe,r[15]=T*S+E*U+b*ee+L*Se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*f-n*l*f)+y*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+m*(+t*c*h-t*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+p*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],T=h*m*c-y*d*c+y*l*f-o*m*f-h*l*p+o*d*p,E=g*d*c-u*m*c-g*l*f+a*m*f+u*l*p-a*d*p,b=u*y*c-g*h*c+g*o*f-a*y*f-u*o*p+a*h*p,L=g*h*l-u*y*l-g*o*d+a*y*d+u*o*m-a*h*m,R=t*T+n*E+s*b+r*L;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/R;return e[0]=T*D,e[1]=(y*d*r-h*m*r-y*s*f+n*m*f+h*s*p-n*d*p)*D,e[2]=(o*m*r-y*l*r+y*s*c-n*m*c-o*s*p+n*l*p)*D,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*f-n*l*f)*D,e[4]=E*D,e[5]=(u*m*r-g*d*r+g*s*f-t*m*f-u*s*p+t*d*p)*D,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*D,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*f+t*l*f)*D,e[8]=b*D,e[9]=(g*h*r-u*y*r-g*n*f+t*y*f+u*n*p-t*h*p)*D,e[10]=(a*y*r-g*o*r+g*n*c-t*y*c-a*n*p+t*o*p)*D,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*f-t*o*f)*D,e[12]=L*D,e[13]=(u*y*s-g*h*s+g*n*d-t*y*d-u*n*m+t*h*m)*D,e[14]=(g*o*s-a*y*s-g*n*l+t*y*l+a*n*m-t*o*m)*D,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,g=r*h,y=a*u,m=a*h,p=o*h,T=l*c,E=l*u,b=l*h,L=n.x,R=n.y,D=n.z;return s[0]=(1-(y+p))*L,s[1]=(f+b)*L,s[2]=(g-E)*L,s[3]=0,s[4]=(f-b)*R,s[5]=(1-(d+p))*R,s[6]=(m+T)*R,s[7]=0,s[8]=(g+E)*D,s[9]=(m-T)*D,s[10]=(1-(d+y))*D,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Xs.set(s[0],s[1],s[2]).length(),a=Xs.set(s[4],s[5],s[6]).length(),o=Xs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Gn.copy(this);let c=1/r,u=1/a,h=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=h,Gn.elements[9]*=h,Gn.elements[10]*=h,t.setFromRotationMatrix(Gn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Wn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Wn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Zr)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Wn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Wn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Zr)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Xs=new I,Gn=new He,E0=new I(0,0,0),T0=new I(1,1,1),Yi=new I,Ya=new I,En=new I,Ku=new He,Zu=new un,qn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ku.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ku,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zu.setFromEuler(this),this.setFromQuaternion(Zu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qn.DEFAULT_ORDER="XYZ";var lr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},A0=0,Ju=new I,qs=new un,Mi=new He,Ka=new I,kr=new I,R0=new I,C0=new un,$u=new I(1,0,0),Qu=new I(0,1,0),ed=new I(0,0,1),td={type:"added"},I0={type:"removed"},Ys={type:"childadded",child:null},bc={type:"childremoved",child:null},ht=class i extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:A0++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new I,t=new qn,n=new un,s=new I(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new He},normalMatrix:{value:new Ve}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.multiply(qs),this}rotateOnWorldAxis(e,t){return qs.setFromAxisAngle(e,t),this.quaternion.premultiply(qs),this}rotateX(e){return this.rotateOnAxis($u,e)}rotateY(e){return this.rotateOnAxis(Qu,e)}rotateZ(e){return this.rotateOnAxis(ed,e)}translateOnAxis(e,t){return Ju.copy(e).applyQuaternion(this.quaternion),this.position.add(Ju.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($u,e)}translateY(e){return this.translateOnAxis(Qu,e)}translateZ(e){return this.translateOnAxis(ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ka.copy(e):Ka.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(kr,Ka,this.up):Mi.lookAt(Ka,kr,this.up),this.quaternion.setFromRotationMatrix(Mi),s&&(Mi.extractRotation(s.matrixWorld),qs.setFromRotationMatrix(Mi),this.quaternion.premultiply(qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(td),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I0),bc.child=e,this.dispatchEvent(bc),bc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(td),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,R0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,C0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};ht.DEFAULT_UP=new I(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vn=new I,Si=new I,Mc=new I,wi=new I,Ks=new I,Zs=new I,nd=new I,Sc=new I,wc=new I,Ec=new I,Tc=new st,Ac=new st,Rc=new st,Ji=class i{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Vn.subVectors(e,t),s.cross(Vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Vn.subVectors(s,t),Si.subVectors(n,t),Mc.subVectors(e,t);let a=Vn.dot(Vn),o=Vn.dot(Si),l=Vn.dot(Mc),c=Si.dot(Si),u=Si.dot(Mc),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Tc.setScalar(0),Ac.setScalar(0),Rc.setScalar(0),Tc.fromBufferAttribute(e,t),Ac.fromBufferAttribute(e,n),Rc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Tc,r.x),a.addScaledVector(Ac,r.y),a.addScaledVector(Rc,r.z),a}static isFrontFacing(e,t,n,s){return Vn.subVectors(n,t),Si.subVectors(e,t),Vn.cross(Si).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Vn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ks.subVectors(s,n),Zs.subVectors(r,n),Sc.subVectors(e,n);let l=Ks.dot(Sc),c=Zs.dot(Sc);if(l<=0&&c<=0)return t.copy(n);wc.subVectors(e,s);let u=Ks.dot(wc),h=Zs.dot(wc);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ks,a);Ec.subVectors(e,r);let f=Ks.dot(Ec),g=Zs.dot(Ec);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Zs,o);let m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return nd.subVectors(r,s),o=(h-u)/(h-u+(f-g)),t.copy(s).addScaledVector(nd,o);let p=1/(m+y+d);return a=y*p,o=d*p,t.copy(n).addScaledVector(Ks,a).addScaledVector(Zs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},xf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},Za={h:0,s:0,l:0};function Cc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ie=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=et.workingColorSpace){if(e=xh(e,1),t=We(t,0,1),n=We(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Cc(a,r,e+1/3),this.g=Cc(a,r,e),this.b=Cc(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=Lt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){let n=xf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=nr(e.r),this.g=nr(e.g),this.b=nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return et.workingToColorSpace(tn.copy(this),e),Math.round(We(tn.r*255,0,255))*65536+Math.round(We(tn.g*255,0,255))*256+Math.round(We(tn.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(tn.copy(this),t);let n=tn.r,s=tn.g,r=tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Lt){et.workingToColorSpace(tn.copy(this),e);let t=tn.r,n=tn.g,s=tn.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+t,Ki.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ki),e.getHSL(Za);let n=Xr(Ki.h,Za.h,t),s=Xr(Ki.s,Za.s,t),r=Xr(Ki.l,Za.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},tn=new Ie;Ie.NAMES=xf;var P0=0,xn=class extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Xn(),this.name="",this.type="Material",this.blending=xs,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=go,this.blendDst=_o,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ie(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_s,this.stencilZFail=_s,this.stencilZPass=_s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==go&&(n.blendSrc=this.blendSrc),this.blendDst!==_o&&(n.blendDst=this.blendDst),this.blendEquation!==$i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},nn=class extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=rh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Nt=new I,Ja=new he,L0=0,Bt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:L0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=xo,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ja.fromBufferAttribute(this,t),Ja.applyMatrix3(e),this.setXY(t,Ja.x,Ja.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix3(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jn(t,this.array)),t}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jn(t,this.array)),t}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jn(t,this.array)),t}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==xo&&(e.usage=this.usage),e}};var $r=class extends Bt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Qr=class extends Bt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ot=class extends Bt{constructor(e,t,n){super(new Float32Array(e),t,n)}},D0=0,Nn=new He,Ic=new ht,Js=new I,Tn=new dn,zr=new dn,jt=new I,Dt=class i extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yh(e)?Qr:$r)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ve().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return Ic.lookAt(e),Ic.updateMatrix(),this.applyMatrix4(Ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ot(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];zr.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Tn.min,zr.min),Tn.expandByPoint(jt),jt.addVectors(Tn.max,zr.max),Tn.expandByPoint(jt)):(Tn.expandByPoint(zr.min),Tn.expandByPoint(zr.max))}Tn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(jt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)jt.fromBufferAttribute(o,c),l&&(Js.fromBufferAttribute(e,c),jt.add(Js)),s=Math.max(s,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Bt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<n.count;N++)o[N]=new I,l[N]=new I;let c=new I,u=new I,h=new I,d=new he,f=new he,g=new he,y=new I,m=new I;function p(N,S,x){c.fromBufferAttribute(n,N),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,x),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),u.sub(c),h.sub(c),f.sub(d),g.sub(d);let v=1/(f.x*g.y-g.x*f.y);isFinite(v)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(v),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(v),o[N].add(y),o[S].add(y),o[x].add(y),l[N].add(m),l[S].add(m),l[x].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,S=T.length;N<S;++N){let x=T[N],v=x.start,A=x.count;for(let U=v,P=v+A;U<P;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let E=new I,b=new I,L=new I,R=new I;function D(N){L.fromBufferAttribute(s,N),R.copy(L);let S=o[N];E.copy(S),E.sub(L.multiplyScalar(L.dot(S))).normalize(),b.crossVectors(R,S);let v=b.dot(l[N])<0?-1:1;a.setXYZW(N,E.x,E.y,E.z,v)}for(let N=0,S=T.length;N<S;++N){let x=T[N],v=x.start,A=x.count;for(let U=v,P=v+A;U<P;U+=3)D(e.getX(U+0)),D(e.getX(U+1)),D(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Bt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,h=new I;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Bt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},id=new He,ms=new ri,$a=new _n,sd=new I,Qa=new I,eo=new I,to=new I,Pc=new I,no=new I,rd=new I,io=new I,ut=class extends ht{constructor(e=new Dt,t=new nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){no.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(Pc.fromBufferAttribute(h,e),a?no.addScaledVector(Pc,u):no.addScaledVector(Pc.sub(t),u))}t.add(no)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$a.copy(n.boundingSphere),$a.applyMatrix4(r),ms.copy(e.ray).recast(e.near),!($a.containsPoint(ms.origin)===!1&&(ms.intersectSphere($a,sd)===null||ms.origin.distanceToSquared(sd)>(e.far-e.near)**2))&&(id.copy(r).invert(),ms.copy(e.ray).applyMatrix4(id),!(n.boundingBox!==null&&ms.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=T,L=E;b<L;b+=3){let R=o.getX(b),D=o.getX(b+1),N=o.getX(b+2);s=so(this,p,e,n,c,u,h,R,D,N),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let T=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);s=so(this,a,e,n,c,u,h,T,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],T=Math.max(m.start,f.start),E=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=T,L=E;b<L;b+=3){let R=b,D=b+1,N=b+2;s=so(this,p,e,n,c,u,h,R,D,N),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let T=m,E=m+1,b=m+2;s=so(this,a,e,n,c,u,h,T,E,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function N0(i,e,t,n,s,r,a,o){let l;if(e.side===pn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===An,o),l===null)return null;io.copy(o),io.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(io);return c<t.near||c>t.far?null:{distance:c,point:io.clone(),object:i}}function so(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Qa),i.getVertexPosition(l,eo),i.getVertexPosition(c,to);let u=N0(i,e,t,n,Qa,eo,to,rd);if(u){let h=new I;Ji.getBarycoord(rd,Qa,eo,to,h),s&&(u.uv=Ji.getInterpolatedAttribute(s,o,l,c,h,new he)),r&&(u.uv1=Ji.getInterpolatedAttribute(r,o,l,c,h,new he)),a&&(u.normal=Ji.getInterpolatedAttribute(a,o,l,c,h,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new I,materialIndex:0};Ji.getNormal(Qa,eo,to,d.normal),u.face=d,u.barycoord=h}return u}var Un=class i extends Dt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(h,2));function g(y,m,p,T,E,b,L,R,D,N,S){let x=b/D,v=L/N,A=b/2,U=L/2,P=R/2,z=D+1,V=N+1,ee=0,X=0,oe=new I;for(let pe=0;pe<V;pe++){let Se=pe*v-U;for(let Ze=0;Ze<z;Ze++){let yt=Ze*x-A;oe[y]=yt*T,oe[m]=Se*E,oe[p]=P,c.push(oe.x,oe.y,oe.z),oe[y]=0,oe[m]=0,oe[p]=R>0?1:-1,u.push(oe.x,oe.y,oe.z),h.push(Ze/D),h.push(1-pe/N),ee+=1}}for(let pe=0;pe<N;pe++)for(let Se=0;Se<D;Se++){let Ze=d+Se+z*pe,yt=d+Se+z*(pe+1),St=d+(Se+1)+z*(pe+1),lt=d+(Se+1)+z*pe;l.push(Ze,yt,lt),l.push(yt,St,lt),X+=6}o.addGroup(f,X,S),f+=X,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ds(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function sn(i){let e={};for(let t=0;t<i.length;t++){let n=Ds(i[t]);for(let s in n)e[s]=n[s]}return e}function U0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var yf={clone:Ds,merge:sn},B0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,O0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yn=class extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B0,this.fragmentShader=O0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=U0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},ea=class extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=Wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zi=new I,ad=new he,od=new he,Ut=class extends ea{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Wr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ms*2*Math.atan(Math.tan(Wr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,ad,od),t.subVectors(od,ad)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Wr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},$s=-90,Qs=1,Mo=class extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ut($s,Qs,e,t);s.layers=this.layers,this.add(s);let r=new Ut($s,Qs,e,t);r.layers=this.layers,this.add(r);let a=new Ut($s,Qs,e,t);a.layers=this.layers,this.add(a);let o=new Ut($s,Qs,e,t);o.layers=this.layers,this.add(o);let l=new Ut($s,Qs,e,t);l.layers=this.layers,this.add(l);let c=new Ut($s,Qs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ta=class extends Ot{constructor(e=[],t=Cs,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},So=class extends si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ta(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Un(5,5,5),r=new Yn({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Li});r.uniforms.tEquirect.value=t;let a=new ut(s,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=hn),new Mo(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},rt=class extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},F0={type:"move"},cr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(F0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var na=class extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},hr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=xo,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},cn=new I,ur=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=jn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=jn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=jn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=jn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=jn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=dt(t,this.array),n=dt(n,this.array),s=dt(s,this.array),r=dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Bt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var ld=new I,cd=new st,hd=new st,k0=new I,ud=new He,ro=new I,Lc=new _n,dd=new He,Dc=new ri,ia=class extends ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Gc,this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new dn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ro),this.boundingBox.expandByPoint(ro)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _n),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,ro),this.boundingSphere.expandByPoint(ro)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lc.copy(this.boundingSphere),Lc.applyMatrix4(s),e.ray.intersectsSphere(Lc)!==!1&&(dd.copy(s).invert(),Dc.copy(e.ray).applyMatrix4(dd),!(this.boundingBox!==null&&Dc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Dc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Gc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===sf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;cd.fromBufferAttribute(s.attributes.skinIndex,e),hd.fromBufferAttribute(s.attributes.skinWeight,e),ld.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=hd.getComponent(r);if(a!==0){let o=cd.getComponent(r);ud.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(k0.copy(ld).applyMatrix4(ud),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},dr=class extends ht{constructor(){super(),this.isBone=!0,this.type="Bone"}},sa=class extends Ot{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Kt,u=Kt,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},fd=new He,z0=new He,ra=class i{constructor(e=[],t=[]){this.uuid=Xn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:z0;fd.multiplyMatrices(o,t[r]),fd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new sa(t,e,e,Cn,Fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new dr),this.bones.push(a),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},es=class extends Bt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},er=new He,pd=new He,ao=[],md=new dn,H0=new He,Hr=new ut,Gr=new _n,ai=class extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new es(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,H0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),md.copy(e.boundingBox).applyMatrix4(er),this.boundingBox.union(md)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,er),Gr.copy(e.boundingSphere).applyMatrix4(er),this.boundingSphere.union(Gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Hr.geometry=this.geometry,Hr.material=this.material,Hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(n),e.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,er),pd.multiplyMatrices(n,er),Hr.matrixWorld=pd,Hr.raycast(e,ao);for(let a=0,o=ao.length;a<o;a++){let l=ao[a];l.instanceId=r,l.object=this,t.push(l)}ao.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new es(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new sa(new Float32Array(s*this.count),s,this.count,il,Fn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Nc=new I,G0=new I,V0=new Ve,gn=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Nc.subVectors(n,t).cross(G0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Nc),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||V0.getNormalMatrix(e),s=this.coplanarPoint(Nc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},gs=new _n,j0=new he(.5,.5),oo=new I,fr=class{constructor(e=new gn,t=new gn,n=new gn,s=new gn,r=new gn,a=new gn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Wn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],T=r[12],E=r[13],b=r[14],L=r[15];if(s[0].setComponents(c-a,f-u,p-g,L-T).normalize(),s[1].setComponents(c+a,f+u,p+g,L+T).normalize(),s[2].setComponents(c+o,f+h,p+y,L+E).normalize(),s[3].setComponents(c-o,f-h,p-y,L-E).normalize(),n)s[4].setComponents(l,d,m,b).normalize(),s[5].setComponents(c-l,f-d,p-m,L-b).normalize();else if(s[4].setComponents(c-l,f-d,p-m,L-b).normalize(),t===Wn)s[5].setComponents(c+l,f+d,p+m,L+b).normalize();else if(t===Zr)s[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);let t=j0.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(oo.x=s.normal.x>0?e.max.x:e.min.x,oo.y=s.normal.y>0?e.max.y:e.min.y,oo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ts=class extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},wo=new I,Eo=new I,gd=new He,Vr=new ri,lo=new _n,Uc=new I,_d=new I,Ai=class extends ht{constructor(e=new Dt,t=new ts){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)wo.fromBufferAttribute(t,s-1),Eo.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=wo.distanceTo(Eo);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(s),lo.radius+=r,e.ray.intersectsSphere(lo)===!1)return;gd.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(gd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=u.getX(y),T=u.getX(y+1),E=co(this,e,Vr,l,p,T,y);E&&t.push(E)}if(this.isLineLoop){let y=u.getX(g-1),m=u.getX(f),p=co(this,e,Vr,l,y,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=f,m=g-1;y<m;y+=c){let p=co(this,e,Vr,l,y,y+1,y);p&&t.push(p)}if(this.isLineLoop){let y=co(this,e,Vr,l,g-1,f,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function co(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(wo.fromBufferAttribute(o,s),Eo.fromBufferAttribute(o,r),t.distanceSqToSegment(wo,Eo,Uc,_d)>n)return;Uc.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Uc);if(!(c<e.near||c>e.far))return{distance:c,point:_d.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var xd=new I,yd=new I,aa=class extends Ai{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)xd.fromBufferAttribute(t,s),yd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+xd.distanceTo(yd);e.setAttribute("lineDistance",new ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},oa=class extends Ai{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},pr=class extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vd=new He,qc=new ri,ho=new _n,uo=new I,la=class extends ht{constructor(e=new Dt,t=new pr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(s),ho.radius+=r,e.ray.intersectsSphere(ho)===!1)return;vd.copy(s).invert(),qc.copy(e.ray).applyMatrix4(vd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=d,y=f;g<y;g++){let m=c.getX(g);uo.fromBufferAttribute(h,m),bd(uo,m,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,y=f;g<y;g++)uo.fromBufferAttribute(h,g),bd(uo,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bd(i,e,t,n,s,r,a){let o=qc.distanceSqToPoint(i);if(o<t){let l=new I;qc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var ca=class extends Ot{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},ha=class extends Ot{constructor(e,t,n=is,s,r,a,o=Kt,l=Kt,c,u=sr,h=1){if(u!==sr&&u!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new or(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},ua=class extends Ot{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Ft=class i extends Dt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],g=0,y=[],m=n/2,p=0;T(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function T(){let b=new I,L=new I,R=0,D=(t-e)/n;for(let N=0;N<=r;N++){let S=[],x=N/r,v=x*(t-e)+e;for(let A=0;A<=s;A++){let U=A/s,P=U*l+o,z=Math.sin(P),V=Math.cos(P);L.x=v*z,L.y=-x*n+m,L.z=v*V,h.push(L.x,L.y,L.z),b.set(z,D,V).normalize(),d.push(b.x,b.y,b.z),f.push(U,1-x),S.push(g++)}y.push(S)}for(let N=0;N<s;N++)for(let S=0;S<r;S++){let x=y[S][N],v=y[S+1][N],A=y[S+1][N+1],U=y[S][N+1];(e>0||S!==0)&&(u.push(x,v,U),R+=3),(t>0||S!==r-1)&&(u.push(v,A,U),R+=3)}c.addGroup(p,R,0),p+=R}function E(b){let L=g,R=new he,D=new I,N=0,S=b===!0?e:t,x=b===!0?1:-1;for(let A=1;A<=s;A++)h.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;let v=g;for(let A=0;A<=s;A++){let P=A/s*l+o,z=Math.cos(P),V=Math.sin(P);D.x=S*V,D.y=m*x,D.z=S*z,h.push(D.x,D.y,D.z),d.push(0,x,0),R.x=z*.5+.5,R.y=V*.5*x+.5,f.push(R.x,R.y),g++}for(let A=0;A<s;A++){let U=L+A,P=v+A;b===!0?u.push(P,P+1,U):u.push(P+1,P,U),N+=3}c.addGroup(p,N,b===!0?1:2),p+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Rn=class i extends Ft{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},da=class i extends Dt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(T){let E=new I,b=new I,L=new I;for(let R=0;R<t.length;R+=3)f(t[R+0],E),f(t[R+1],b),f(t[R+2],L),l(E,b,L,T)}function l(T,E,b,L){let R=L+1,D=[];for(let N=0;N<=R;N++){D[N]=[];let S=T.clone().lerp(b,N/R),x=E.clone().lerp(b,N/R),v=R-N;for(let A=0;A<=v;A++)A===0&&N===R?D[N][A]=S:D[N][A]=S.clone().lerp(x,A/v)}for(let N=0;N<R;N++)for(let S=0;S<2*(R-N)-1;S++){let x=Math.floor(S/2);S%2===0?(d(D[N][x+1]),d(D[N+1][x]),d(D[N][x])):(d(D[N][x+1]),d(D[N+1][x+1]),d(D[N+1][x]))}}function c(T){let E=new I;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(T),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function u(){let T=new I;for(let E=0;E<r.length;E+=3){T.x=r[E+0],T.y=r[E+1],T.z=r[E+2];let b=m(T)/2/Math.PI+.5,L=p(T)/Math.PI+.5;a.push(b,1-L)}g(),h()}function h(){for(let T=0;T<a.length;T+=6){let E=a[T+0],b=a[T+2],L=a[T+4],R=Math.max(E,b,L),D=Math.min(E,b,L);R>.9&&D<.1&&(E<.2&&(a[T+0]+=1),b<.2&&(a[T+2]+=1),L<.2&&(a[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function f(T,E){let b=T*3;E.x=e[b+0],E.y=e[b+1],E.z=e[b+2]}function g(){let T=new I,E=new I,b=new I,L=new I,R=new he,D=new he,N=new he;for(let S=0,x=0;S<r.length;S+=9,x+=6){T.set(r[S+0],r[S+1],r[S+2]),E.set(r[S+3],r[S+4],r[S+5]),b.set(r[S+6],r[S+7],r[S+8]),R.set(a[x+0],a[x+1]),D.set(a[x+2],a[x+3]),N.set(a[x+4],a[x+5]),L.copy(T).add(E).add(b).divideScalar(3);let v=m(L);y(R,x+0,T,v),y(D,x+2,E,v),y(N,x+4,b,v)}}function y(T,E,b,L){L<0&&T.x===1&&(a[E]=T.x-1),b.x===0&&b.z===0&&(a[E]=L/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function p(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},mr=class i extends da{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new he:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new He;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(We(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(We(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},fa=class extends Bn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new he){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},To=class extends fa{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function bh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var fo=new I,Bc=new bh,Oc=new bh,Fc=new bh,gr=class extends Bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new I){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(fo.subVectors(s[0],s[1]).add(s[0]),c=fo);let h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(fo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=fo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(h),f),y=Math.pow(h.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(u),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Bc.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,g,y,m),Oc.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,g,y,m),Fc.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,g,y,m)}else this.curveType==="catmullrom"&&(Bc.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Oc.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),Fc.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(Bc.calc(l),Oc.calc(l),Fc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new I().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Md(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function W0(i,e){let t=1-i;return t*t*e}function X0(i,e){return 2*(1-i)*i*e}function q0(i,e){return i*i*e}function qr(i,e,t,n){return W0(i,e)+X0(i,t)+q0(i,n)}function Y0(i,e){let t=1-i;return t*t*t*e}function K0(i,e){let t=1-i;return 3*t*t*i*e}function Z0(i,e){return 3*(1-i)*i*i*e}function J0(i,e){return i*i*i*e}function Yr(i,e,t,n,s){return Y0(i,e)+K0(i,t)+Z0(i,n)+J0(i,s)}var Ao=class extends Bn{constructor(e=new he,t=new he,n=new he,s=new he){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Yr(e,s.x,r.x,a.x,o.x),Yr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ro=class extends Bn{constructor(e=new I,t=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Yr(e,s.x,r.x,a.x,o.x),Yr(e,s.y,r.y,a.y,o.y),Yr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Co=class extends Bn{constructor(e=new he,t=new he){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new he){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new he){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Io=class extends Bn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends Bn{constructor(e=new he,t=new he,n=new he){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new he){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(qr(e,s.x,r.x,a.x),qr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},pa=class extends Bn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(qr(e,s.x,r.x,a.x),qr(e,s.y,r.y,a.y),qr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lo=class extends Bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new he){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Md(o,l.x,c.x,u.x,h.x),Md(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new he().fromArray(s))}return this}},$0=Object.freeze({__proto__:null,ArcCurve:To,CatmullRomCurve3:gr,CubicBezierCurve:Ao,CubicBezierCurve3:Ro,EllipseCurve:fa,LineCurve:Co,LineCurve3:Io,QuadraticBezierCurve:Po,QuadraticBezierCurve3:pa,SplineCurve:Lo});var Ss=class i extends da{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var ws=class i extends Dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<u;p++){let T=p*d-a;for(let E=0;E<c;E++){let b=E*h-r;g.push(b,-T,0),y.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<o;T++){let E=T+c*p,b=T+c*(p+1),L=T+1+c*(p+1),R=T+1+c*p;f.push(E,b,R),f.push(b,L,R)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(y,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Es=class i extends Dt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new I,g=new he;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let T=p+m,E=T,b=T+n+1,L=T+n+2,R=T+1;o.push(E,b,R),o.push(b,L,R)}}this.setIndex(o),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ns=class i extends Dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new I,d=new I,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let T=[],E=p/n,b=0;p===0&&a===0?b=.5/t:p===n&&l===Math.PI&&(b=-.5/t);for(let L=0;L<=t;L++){let R=L/t;h.x=-e*Math.cos(s+R*r)*Math.sin(a+E*o),h.y=e*Math.cos(a+E*o),h.z=e*Math.sin(s+R*r)*Math.sin(a+E*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(R+b,1-E),T.push(c++)}u.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){let E=u[p][T+1],b=u[p][T],L=u[p+1][T],R=u[p+1][T+1];(p!==0||a>0)&&f.push(E,b,R),(p!==n-1||l<Math.PI)&&f.push(b,L,R)}this.setIndex(f),this.setAttribute("position",new ot(g,3)),this.setAttribute("normal",new ot(y,3)),this.setAttribute("uv",new ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ma=class i extends Dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new I,h=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){let y=g/s*r,m=f/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(y),h.y=(e+t*Math.cos(m))*Math.sin(y),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,T=(s+1)*f+g;a.push(y,m,T),a.push(m,p,T)}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var ga=class i extends Dt{constructor(e=new pa(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new he,u=new I,h=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ot(h,3)),this.setAttribute("normal",new ot(d,3)),this.setAttribute("uv",new ot(f,2));function y(){for(let E=0;E<t;E++)m(E);m(r===!1?t:0),T(),p()}function m(E){u=e.getPointAt(E/t,u);let b=a.normals[E],L=a.binormals[E];for(let R=0;R<=s;R++){let D=R/s*Math.PI*2,N=Math.sin(D),S=-Math.cos(D);l.x=S*b.x+N*L.x,l.y=S*b.y+N*L.y,l.z=S*b.z+N*L.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let E=1;E<=t;E++)for(let b=1;b<=s;b++){let L=(s+1)*(E-1)+(b-1),R=(s+1)*E+(b-1),D=(s+1)*E+b,N=(s+1)*(E-1)+b;g.push(L,R,N),g.push(R,D,N)}}function T(){for(let E=0;E<=t;E++)for(let b=0;b<=s;b++)c.x=E/t,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new $0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var fn=class extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mh,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},yn=class extends fn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new he(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return We(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Do=class extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},No=class extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function po(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Q0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function em(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Sd(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function vf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Ri=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Uo=class extends Ri{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Vc,endingEnd:Vc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case jc:r=e,o=2*t-n;break;case Wc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case jc:a=e,l=2*n-t;break;case Wc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,T=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,E=(-1-f)*m+(1.5+f)*y+.5*g,b=f*m-f*y;for(let L=0;L!==o;++L)r[L]=p*a[u+L]+T*a[c+L]+E*a[l+L]+b*a[h+L];return r}},Bo=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},Oo=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=po(t,this.TimeBufferType),this.values=po(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:po(e.times,Array),values:po(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Oo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Uo(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vs:t=this.InterpolantFactoryMethodDiscrete;break;case bs:t=this.InterpolantFactoryMethodLinear;break;case mo:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vs;case this.InterpolantFactoryMethodLinear:return bs;case this.InterpolantFactoryMethodSmooth:return mo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Q0(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===mo,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let g=0;g!==n;++g){let y=t[h+g];if(y!==t[d+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=bs;var Ci=class extends vn{constructor(e,t,n){super(e,t,n)}};Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=vs;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};_a.prototype.ValueTypeName="color";var oi=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};oi.prototype.ValueTypeName="number";var Fo=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)un.slerpFlat(r,0,a,c-o,a,c,l);return r}},li=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Fo(this.times,this.values,this.getValueSize(),e)}};li.prototype.ValueTypeName="quaternion";li.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends vn{constructor(e,t,n){super(e,t,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=vs;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var ci=class extends vn{constructor(e,t,n,s){super(e,t,n,s)}};ci.prototype.ValueTypeName="vector";var xa=class{constructor(e="",t=-1,n=[],s=rf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Xn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(nm(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=em(l);l=Sd(l,1,u),c=Sd(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new oi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,g,y){if(f.length!==0){let m=[],p=[];vf(f,m,p,g),m.length!==0&&y.push(new h(d,m,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let y=0;y<d[g].morphTargets.length;y++)f[d[g].morphTargets[y]]=-1;for(let y in f){let m=[],p=[];for(let T=0;T!==d[g].morphTargets.length;++T){let E=d[g];m.push(E.time),p.push(E.morphTarget===y?1:0)}s.push(new oi(".morphTargetInfluence["+y+"]",m,p))}l=f.length*a}else{let f=".bones["+t[h].name+"]";n(ci,f+".position",d,"pos",s),n(li,f+".quaternion",d,"rot",s),n(ci,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function tm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oi;case"vector":case"vector2":case"vector3":case"vector4":return ci;case"color":return _a;case"quaternion":return li;case"bool":case"boolean":return Ci;case"string":return Ii}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function nm(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=tm(i.type);if(i.times===void 0){let t=[],n=[];vf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var ni={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},ko=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],g=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},bf=new ko,hi=class{constructor(e){this.manager=e!==void 0?e:bf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};hi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ei={},Yc=class extends Error{constructor(e,t){super(e),this.response=t}},_r=class extends hi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ni.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:n,onError:s});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Ei[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,y=0,m=new ReadableStream({start(p){T();function T(){h.read().then(({done:E,value:b})=>{if(E)p.close();else{y+=b.byteLength;let L=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:f});for(let R=0,D=u.length;R<D;R++){let N=u[R];N.onProgress&&N.onProgress(L)}p.enqueue(b),T()}},E=>{p.error(E)})}}});return new Response(m)}else throw new Yc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{ni.add(`file:${e}`,c);let u=Ei[e];delete Ei[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Ei[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ei[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var tr=new WeakMap,zo=class extends hi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ni.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=tr.get(a);h===void 0&&(h=[],tr.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=rr("img");function l(){u(),t&&t(this);let h=tr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}tr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),ni.remove(`image:${e}`);let d=tr.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(h)}tr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ni.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var ya=class extends hi{constructor(e){super(e)}load(e,t,n,s){let r=new Ot,a=new zo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ts=class extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},va=class extends Ts{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ie(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},kc=new He,wd=new I,Ed=new I,ba=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fr,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;wd.setFromMatrixPosition(e.matrixWorld),t.position.copy(wd),Ed.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ed),t.updateMatrixWorld(),kc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kc,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(kc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Kc=class extends ba{constructor(){super(new Ut(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Ms*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Ma=class extends Ts{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Kc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Td=new He,jr=new I,zc=new I,Zc=class extends ba{constructor(){super(new Ut(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new he(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(jr),zc.copy(n.position),zc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(zc),n.updateMatrixWorld(),s.makeTranslation(-jr.x,-jr.y,-jr.z),Td.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Td,n.coordinateSystem,n.reversedDepth)}},Sa=class extends Ts{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Zc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},As=class extends ea{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Jc=class extends ba{constructor(){super(new As(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Rs=class extends Ts{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Jc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Pi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Hc=new WeakMap,wa=class extends hi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=ni.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(Hc.has(a)===!0)s&&s(Hc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ni.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Hc.set(l,c),ni.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});ni.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Ho=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Mh="\\[\\]\\.:\\/",im=new RegExp("["+Mh+"]","g"),Sh="[^"+Mh+"]",sm="[^"+Mh.replace("\\.","")+"]",rm=/((?:WC+[\/:])*)/.source.replace("WC",Sh),am=/(WCOD+)?/.source.replace("WCOD",sm),om=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Sh),lm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Sh),cm=new RegExp("^"+rm+am+om+lm+"$"),hm=["material","materials","bones","map"],$c=class{constructor(e,t,n){let s=n||xt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},xt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(im,"")}static parseTrackName(e){let t=cm.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};xt.Composite=$c;xt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xt.prototype.GetterByBindingType=[xt.prototype._getValue_direct,xt.prototype._getValue_array,xt.prototype._getValue_arrayElement,xt.prototype._getValue_toArray];xt.prototype.SetterByBindingTypeAndVersioning=[[xt.prototype._setValue_direct,xt.prototype._setValue_direct_setNeedsUpdate,xt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_array,xt.prototype._setValue_array_setNeedsUpdate,xt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_arrayElement,xt.prototype._setValue_arrayElement_setNeedsUpdate,xt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xt.prototype._setValue_fromArray,xt.prototype._setValue_fromArray_setNeedsUpdate,xt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ay=new Float32Array(1);var Ad=new He,Ea=class{constructor(e,t,n=0,s=1/0){this.ray=new ri(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new lr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ad.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ad),this}intersectObject(e,t=!0,n=[]){return Qc(e,this,n,t),n.sort(Rd),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Qc(e[s],this,n,t);return n.sort(Rd),n}};function Rd(i,e){return i.distance-e.distance}function Qc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Qc(r[a],e,t,!0)}}var xr=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=We(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(We(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ta=class extends ii{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function wh(i,e,t,n){let s=um(n);switch(t){case uh:return i*e;case il:return i*e/s.components*s.byteLength;case sl:return i*e/s.components*s.byteLength;case fh:return i*e*2/s.components*s.byteLength;case rl:return i*e*2/s.components*s.byteLength;case dh:return i*e*3/s.components*s.byteLength;case Cn:return i*e*4/s.components*s.byteLength;case al:return i*e*4/s.components*s.byteLength;case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ia:case Pa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ll:case hl:return Math.max(i,16)*Math.max(e,8)/4;case ol:case cl:return Math.max(i,8)*Math.max(e,8)/2;case ul:case dl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case _l:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case bl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case wl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case El:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Tl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Rl:case Cl:case Il:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Pl:case Ll:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Dl:case Nl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function um(i){switch(i){case Jn:case oh:return{byteLength:1,components:1};case vr:case lh:case br:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case is:case el:case Fn:return{byteLength:4,components:1};case ch:case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Wf(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function fm(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){let g=h[d],y=h[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,h[d]=y)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){let y=h[f];i.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
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
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ym=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vm=`#ifdef USE_AOMAP
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
#endif`,bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mm=`#ifdef USE_BATCHING
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
#endif`,Sm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Em=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Tm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Am=`#ifdef USE_IRIDESCENCE
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
#endif`,Rm=`#ifdef USE_BUMPMAP
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
#endif`,Cm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Om=`#define PI 3.141592653589793
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
} // validated`,Fm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,km=`vec3 transformedNormal = objectNormal;
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
#endif`,zm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xm=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,Km=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zm=`#ifdef USE_ENVMAP
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
#endif`,Jm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tg=`#ifdef USE_GRADIENTMAP
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
}`,ng=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ig=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rg=`uniform bool receiveShadow;
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
#endif`,ag=`#ifdef USE_ENVMAP
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
#endif`,og=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ug=`PhysicalMaterial material;
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
#endif`,dg=`struct PhysicalMaterial {
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
}`,fg=`
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
#endif`,pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,mg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_g=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Sg=`#if defined( USE_POINTS_UV )
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
#endif`,wg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Eg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ag=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cg=`#ifdef USE_MORPHTARGETS
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
#endif`,Ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Lg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Dg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ng=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ug=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bg=`#ifdef USE_NORMALMAP
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
#endif`,Og=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$g=`float getShadowMask() {
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
}`,Qg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,e_=`#ifdef USE_SKINNING
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
#endif`,t_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,n_=`#ifdef USE_SKINNING
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
#endif`,i_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,s_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,r_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,a_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,o_=`#ifdef USE_TRANSMISSION
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
#endif`,l_=`#ifdef USE_TRANSMISSION
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,f_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,p_=`uniform sampler2D t2D;
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
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y_=`#include <common>
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
}`,v_=`#if DEPTH_PACKING == 3200
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
}`,b_=`#define DISTANCE
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
}`,M_=`#define DISTANCE
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
}`,S_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,w_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`uniform float scale;
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
}`,T_=`uniform vec3 diffuse;
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
}`,A_=`#include <common>
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
}`,R_=`uniform vec3 diffuse;
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
}`,C_=`#define LAMBERT
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
}`,I_=`#define LAMBERT
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
}`,P_=`#define MATCAP
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
}`,L_=`#define MATCAP
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
}`,D_=`#define NORMAL
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
}`,N_=`#define NORMAL
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
}`,U_=`#define PHONG
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
}`,B_=`#define PHONG
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
}`,O_=`#define STANDARD
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
}`,F_=`#define STANDARD
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
}`,k_=`#define TOON
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
}`,z_=`#define TOON
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
}`,H_=`uniform float size;
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
}`,G_=`uniform vec3 diffuse;
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
}`,V_=`#include <common>
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
}`,j_=`uniform vec3 color;
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
}`,W_=`uniform float rotation;
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
}`,X_=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:_m,alphatest_fragment:xm,alphatest_pars_fragment:ym,aomap_fragment:vm,aomap_pars_fragment:bm,batching_pars_vertex:Mm,batching_vertex:Sm,begin_vertex:wm,beginnormal_vertex:Em,bsdfs:Tm,iridescence_fragment:Am,bumpmap_pars_fragment:Rm,clipping_planes_fragment:Cm,clipping_planes_pars_fragment:Im,clipping_planes_pars_vertex:Pm,clipping_planes_vertex:Lm,color_fragment:Dm,color_pars_fragment:Nm,color_pars_vertex:Um,color_vertex:Bm,common:Om,cube_uv_reflection_fragment:Fm,defaultnormal_vertex:km,displacementmap_pars_vertex:zm,displacementmap_vertex:Hm,emissivemap_fragment:Gm,emissivemap_pars_fragment:Vm,colorspace_fragment:jm,colorspace_pars_fragment:Wm,envmap_fragment:Xm,envmap_common_pars_fragment:qm,envmap_pars_fragment:Ym,envmap_pars_vertex:Km,envmap_physical_pars_fragment:ag,envmap_vertex:Zm,fog_vertex:Jm,fog_pars_vertex:$m,fog_fragment:Qm,fog_pars_fragment:eg,gradientmap_pars_fragment:tg,lightmap_pars_fragment:ng,lights_lambert_fragment:ig,lights_lambert_pars_fragment:sg,lights_pars_begin:rg,lights_toon_fragment:og,lights_toon_pars_fragment:lg,lights_phong_fragment:cg,lights_phong_pars_fragment:hg,lights_physical_fragment:ug,lights_physical_pars_fragment:dg,lights_fragment_begin:fg,lights_fragment_maps:pg,lights_fragment_end:mg,logdepthbuf_fragment:gg,logdepthbuf_pars_fragment:_g,logdepthbuf_pars_vertex:xg,logdepthbuf_vertex:yg,map_fragment:vg,map_pars_fragment:bg,map_particle_fragment:Mg,map_particle_pars_fragment:Sg,metalnessmap_fragment:wg,metalnessmap_pars_fragment:Eg,morphinstance_vertex:Tg,morphcolor_vertex:Ag,morphnormal_vertex:Rg,morphtarget_pars_vertex:Cg,morphtarget_vertex:Ig,normal_fragment_begin:Pg,normal_fragment_maps:Lg,normal_pars_fragment:Dg,normal_pars_vertex:Ng,normal_vertex:Ug,normalmap_pars_fragment:Bg,clearcoat_normal_fragment_begin:Og,clearcoat_normal_fragment_maps:Fg,clearcoat_pars_fragment:kg,iridescence_pars_fragment:zg,opaque_fragment:Hg,packing:Gg,premultiplied_alpha_fragment:Vg,project_vertex:jg,dithering_fragment:Wg,dithering_pars_fragment:Xg,roughnessmap_fragment:qg,roughnessmap_pars_fragment:Yg,shadowmap_pars_fragment:Kg,shadowmap_pars_vertex:Zg,shadowmap_vertex:Jg,shadowmask_pars_fragment:$g,skinbase_vertex:Qg,skinning_pars_vertex:e_,skinning_vertex:t_,skinnormal_vertex:n_,specularmap_fragment:i_,specularmap_pars_fragment:s_,tonemapping_fragment:r_,tonemapping_pars_fragment:a_,transmission_fragment:o_,transmission_pars_fragment:l_,uv_pars_fragment:c_,uv_pars_vertex:h_,uv_vertex:u_,worldpos_vertex:d_,background_vert:f_,background_frag:p_,backgroundCube_vert:m_,backgroundCube_frag:g_,cube_vert:__,cube_frag:x_,depth_vert:y_,depth_frag:v_,distanceRGBA_vert:b_,distanceRGBA_frag:M_,equirect_vert:S_,equirect_frag:w_,linedashed_vert:E_,linedashed_frag:T_,meshbasic_vert:A_,meshbasic_frag:R_,meshlambert_vert:C_,meshlambert_frag:I_,meshmatcap_vert:P_,meshmatcap_frag:L_,meshnormal_vert:D_,meshnormal_frag:N_,meshphong_vert:U_,meshphong_frag:B_,meshphysical_vert:O_,meshphysical_frag:F_,meshtoon_vert:k_,meshtoon_frag:z_,points_vert:H_,points_frag:G_,shadow_vert:V_,shadow_frag:j_,sprite_vert:W_,sprite_frag:X_},ce={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},di={basic:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:sn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:sn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new Ie(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:sn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:sn([ce.points,ce.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:sn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:sn([ce.common,ce.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:sn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:sn([ce.sprite,ce.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:sn([ce.common,ce.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:sn([ce.lights,ce.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};di.physical={uniforms:sn([di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};var Ul={r:0,b:0,g:0},Ns=new qn,q_=new He;function Y_(i,e,t,n,s,r,a){let o=new Ie(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function y(E){let b=!1,L=g(E);L===null?p(o,l):L&&L.isColor&&(p(L,1),b=!0);let R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,b){let L=g(b);L&&(L.isCubeTexture||L.mapping===Aa)?(u===void 0&&(u=new ut(new Un(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Ds(di.backgroundCube.uniforms),vertexShader:di.backgroundCube.vertexShader,fragmentShader:di.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ns.copy(b.backgroundRotation),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(q_.makeRotationFromEuler(Ns)),u.material.toneMapped=et.getTransfer(L.colorSpace)!==ft,(h!==L||d!==L.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=L,d=L.version,f=i.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new ut(new ws(2,2),new Yn({name:"BackgroundMaterial",uniforms:Ds(di.background.uniforms),vertexShader:di.background.vertexShader,fragmentShader:di.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=et.getTransfer(L.colorSpace)!==ft,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(h!==L||d!==L.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=L,d=L.version,f=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,b){E.getRGB(Ul,vh(i)),n.buffers.color.setClear(Ul.r,Ul.g,Ul.b,b,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(o,l)},render:y,addToRenderList:m,dispose:T}}function K_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(x,v,A,U,P){let z=!1,V=h(U,A,v);r!==V&&(r=V,c(r.object)),z=f(x,U,A,P),z&&g(x,U,A,P),P!==null&&e.update(P,i.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,b(x,v,A,U),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,v,A){let U=A.wireframe===!0,P=n[x.id];P===void 0&&(P={},n[x.id]=P);let z=P[v.id];z===void 0&&(z={},P[v.id]=z);let V=z[U];return V===void 0&&(V=d(l()),z[U]=V),V}function d(x){let v=[],A=[],U=[];for(let P=0;P<t;P++)v[P]=0,A[P]=0,U[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:v,enabledAttributes:A,attributeDivisors:U,object:x,attributes:{},index:null}}function f(x,v,A,U){let P=r.attributes,z=v.attributes,V=0,ee=A.getAttributes();for(let X in ee)if(ee[X].location>=0){let pe=P[X],Se=z[X];if(Se===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(Se=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(Se=x.instanceColor)),pe===void 0||pe.attribute!==Se||Se&&pe.data!==Se.data)return!0;V++}return r.attributesNum!==V||r.index!==U}function g(x,v,A,U){let P={},z=v.attributes,V=0,ee=A.getAttributes();for(let X in ee)if(ee[X].location>=0){let pe=z[X];pe===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor));let Se={};Se.attribute=pe,pe&&pe.data&&(Se.data=pe.data),P[X]=Se,V++}r.attributes=P,r.attributesNum=V,r.index=U}function y(){let x=r.newAttributes;for(let v=0,A=x.length;v<A;v++)x[v]=0}function m(x){p(x,0)}function p(x,v){let A=r.newAttributes,U=r.enabledAttributes,P=r.attributeDivisors;A[x]=1,U[x]===0&&(i.enableVertexAttribArray(x),U[x]=1),P[x]!==v&&(i.vertexAttribDivisor(x,v),P[x]=v)}function T(){let x=r.newAttributes,v=r.enabledAttributes;for(let A=0,U=v.length;A<U;A++)v[A]!==x[A]&&(i.disableVertexAttribArray(A),v[A]=0)}function E(x,v,A,U,P,z,V){V===!0?i.vertexAttribIPointer(x,v,A,P,z):i.vertexAttribPointer(x,v,A,U,P,z)}function b(x,v,A,U){y();let P=U.attributes,z=A.getAttributes(),V=v.defaultAttributeValues;for(let ee in z){let X=z[ee];if(X.location>=0){let oe=P[ee];if(oe===void 0&&(ee==="instanceMatrix"&&x.instanceMatrix&&(oe=x.instanceMatrix),ee==="instanceColor"&&x.instanceColor&&(oe=x.instanceColor)),oe!==void 0){let pe=oe.normalized,Se=oe.itemSize,Ze=e.get(oe);if(Ze===void 0)continue;let yt=Ze.buffer,St=Ze.type,lt=Ze.bytesPerElement,Z=St===i.INT||St===i.UNSIGNED_INT||oe.gpuType===el;if(oe.isInterleavedBufferAttribute){let Q=oe.data,xe=Q.stride,Fe=oe.offset;if(Q.isInstancedInterleavedBuffer){for(let Re=0;Re<X.locationSize;Re++)p(X.location+Re,Q.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Re=0;Re<X.locationSize;Re++)m(X.location+Re);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let Re=0;Re<X.locationSize;Re++)E(X.location+Re,Se/X.locationSize,St,pe,xe*lt,(Fe+Se/X.locationSize*Re)*lt,Z)}else{if(oe.isInstancedBufferAttribute){for(let Q=0;Q<X.locationSize;Q++)p(X.location+Q,oe.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Q=0;Q<X.locationSize;Q++)m(X.location+Q);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let Q=0;Q<X.locationSize;Q++)E(X.location+Q,Se/X.locationSize,St,pe,Se*lt,Se/X.locationSize*Q*lt,Z)}}else if(V!==void 0){let pe=V[ee];if(pe!==void 0)switch(pe.length){case 2:i.vertexAttrib2fv(X.location,pe);break;case 3:i.vertexAttrib3fv(X.location,pe);break;case 4:i.vertexAttrib4fv(X.location,pe);break;default:i.vertexAttrib1fv(X.location,pe)}}}}T()}function L(){N();for(let x in n){let v=n[x];for(let A in v){let U=v[A];for(let P in U)u(U[P].object),delete U[P];delete v[A]}delete n[x]}}function R(x){if(n[x.id]===void 0)return;let v=n[x.id];for(let A in v){let U=v[A];for(let P in U)u(U[P].object),delete U[P];delete v[A]}delete n[x.id]}function D(x){for(let v in n){let A=n[v];if(A[x.id]===void 0)continue;let U=A[x.id];for(let P in U)u(U[P].object),delete U[P];delete A[x.id]}}function N(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:R,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:m,disableUnusedAttributes:T}}function Z_(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=u[y]*d[y];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function J_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let D=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(D){return!(D!==Cn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){let N=D===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Jn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Fn&&!N)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:L,maxSamples:R}}function $_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new gn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let g=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let T=r?0:n,E=T*4,b=p.clippingState||null;l.value=b,b=u(g,d,E,f);for(let L=0;L!==E;++L)b[L]=t[L];p.clippingState=b,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,g){let y=h!==null?h.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,b=f;E!==y;++E,b+=4)a.copy(h[E]).applyMatrix4(T,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Q_(i){let e=new WeakMap;function t(a,o){return o===Jo?a.mapping=Cs:o===$o&&(a.mapping=Is),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Jo||o===$o)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new So(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Tr=4,Mf=[.125,.215,.35,.446,.526,.582],Os=20,Eh=new As,Sf=new Ie,Th=null,Ah=0,Rh=0,Ch=!1,Bs=(1+Math.sqrt(5))/2,Er=1/Bs,wf=[new I(-Bs,Er,0),new I(Bs,Er,0),new I(-Er,0,Bs),new I(Er,0,Bs),new I(0,Bs,-Er),new I(0,Bs,Er),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],e1=new I,Fl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=e1}=r;Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Th,Ah,Rh),this._renderer.xr.enabled=Ch,e.scissorTest=!1,Bl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Cs||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Th=this._renderer.getRenderTarget(),Ah=this._renderer.getActiveCubeFace(),Rh=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:hn,minFilter:hn,generateMipmaps:!1,type:br,format:Cn,colorSpace:Zt,depthBuffer:!1},s=Ef(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ef(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t1(r)),this._blurMaterial=n1(r,e,t)}return s}_compileMaterial(e){let t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,Eh)}_sceneToCubeUV(e,t,n,s,r){let l=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Sf),h.toneMapping=Di,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let y=new nn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),m=new ut(new Un,y),p=!1,T=e.background;T?T.isColor&&(y.color.copy(T),e.background=null,p=!0):(y.color.copy(Sf),p=!0);for(let E=0;E<6;E++){let b=E%3;b===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):b===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));let L=this._cubeSize;Bl(s,b*L,E>2?L:0,L,L),h.setRenderTarget(s),p&&h.render(m,l),h.render(e,l)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Cs||e.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Af()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Bl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Eh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=wf[(s-r-1)%wf.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ut(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Os-1),y=r/g,m=isFinite(r)?1+Math.floor(u*y):Os;m>Os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Os}`);let p=[],T=0;for(let D=0;D<Os;++D){let N=D/y,S=Math.exp(-N*N/2);p.push(S),D===0?T+=S:D<m&&(T+=2*S)}for(let D=0;D<p.length;D++)p[D]=p[D]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;let b=this._sizeLods[s],L=3*b*(s>E-Tr?s-E+Tr:0),R=4*(this._cubeSize-b);Bl(t,L,R,3*b,2*b),l.setRenderTarget(t),l.render(h,Eh)}};function t1(i){let e=[],t=[],n=[],s=i,r=i-Tr+1+Mf.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Tr?l=Mf[a-i+Tr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,y=3,m=2,p=1,T=new Float32Array(y*g*f),E=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let R=0;R<f;R++){let D=R%3*2/3-1,N=R>2?0:-1,S=[D,N,0,D+2/3,N,0,D+2/3,N+1,0,D,N,0,D+2/3,N+1,0,D,N+1,0];T.set(S,y*g*R),E.set(d,m*g*R);let x=[R,R,R,R,R,R];b.set(x,p*g*R)}let L=new Dt;L.setAttribute("position",new Bt(T,y)),L.setAttribute("uv",new Bt(E,m)),L.setAttribute("faceIndex",new Bt(b,p)),e.push(L),s>Tr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ef(i,e,t){let n=new si(i,e,t);return n.texture.mapping=Aa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function n1(i,e,t){let n=new Float32Array(Os),s=new I(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:kh(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Tf(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kh(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function Af(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function kh(){return`

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
	`}function i1(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Jo||l===$o,u=l===Cs||l===Is;if(c||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Fl(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new Fl(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function s1(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&ar("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function r1(i,e,t,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,g=h.attributes.position,y=0;if(f!==null){let T=f.array;y=f.version;for(let E=0,b=T.length;E<b;E+=3){let L=T[E+0],R=T[E+1],D=T[E+2];d.push(L,R,R,D,D,L)}}else if(g!==void 0){let T=g.array;y=g.version;for(let E=0,b=T.length/3-1;E<b;E+=3){let L=E+0,R=E+1,D=E+2;d.push(L,R,R,D,D,L)}}else return;let m=new(yh(d)?Qr:$r)(d,1);m.version=y;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function a1(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*a,g),t.update(f,n,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,n,1)}function h(d,f,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,y,0,g);let p=0;for(let T=0;T<g;T++)p+=f[T]*y[T];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function o1(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function l1(i,e,t){let n=new WeakMap,s=new st;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let S=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),y===!0&&(E=3);let b=o.attributes.position.count*E,L=1;b>e.maxTextureSize&&(L=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let R=new Float32Array(b*L*4*h),D=new Jr(R,b,L,h);D.type=Fn,D.needsUpdate=!0;let N=E*4;for(let x=0;x<h;x++){let v=m[x],A=p[x],U=T[x],P=b*L*4*x;for(let z=0;z<v.count;z++){let V=z*N;f===!0&&(s.fromBufferAttribute(v,z),R[P+V+0]=s.x,R[P+V+1]=s.y,R[P+V+2]=s.z,R[P+V+3]=0),g===!0&&(s.fromBufferAttribute(A,z),R[P+V+4]=s.x,R[P+V+5]=s.y,R[P+V+6]=s.z,R[P+V+7]=0),y===!0&&(s.fromBufferAttribute(U,z),R[P+V+8]=s.x,R[P+V+9]=s.y,R[P+V+10]=s.z,R[P+V+11]=U.itemSize===4?s.w:1)}}d={count:h,texture:D,size:new he(b,L)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function c1(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Xf=new Ot,Rf=new ha(1,1),qf=new Jr,Yf=new bo,Kf=new ta,Cf=[],If=[],Pf=new Float32Array(16),Lf=new Float32Array(9),Df=new Float32Array(4);function Rr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Cf[s];if(r===void 0&&(r=new Float32Array(s),Cf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function zl(i,e){let t=If[e];t===void 0&&(t=new Int32Array(e),If[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function h1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function u1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function d1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function f1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function p1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Df.set(n),i.uniformMatrix2fv(this.addr,!1,Df),zt(t,n)}}function m1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Lf.set(n),i.uniformMatrix3fv(this.addr,!1,Lf),zt(t,n)}}function g1(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;Pf.set(n),i.uniformMatrix4fv(this.addr,!1,Pf),zt(t,n)}}function _1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function x1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function y1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function v1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function b1(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function M1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function S1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function w1(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function E1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Rf.compareFunction=gh,r=Rf):r=Xf,t.setTexture2D(e||r,s)}function T1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Yf,s)}function A1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Kf,s)}function R1(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||qf,s)}function C1(i){switch(i){case 5126:return h1;case 35664:return u1;case 35665:return d1;case 35666:return f1;case 35674:return p1;case 35675:return m1;case 35676:return g1;case 5124:case 35670:return _1;case 35667:case 35671:return x1;case 35668:case 35672:return y1;case 35669:case 35673:return v1;case 5125:return b1;case 36294:return M1;case 36295:return S1;case 36296:return w1;case 35678:case 36198:case 36298:case 36306:case 35682:return E1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return R1}}function I1(i,e){i.uniform1fv(this.addr,e)}function P1(i,e){let t=Rr(e,this.size,2);i.uniform2fv(this.addr,t)}function L1(i,e){let t=Rr(e,this.size,3);i.uniform3fv(this.addr,t)}function D1(i,e){let t=Rr(e,this.size,4);i.uniform4fv(this.addr,t)}function N1(i,e){let t=Rr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function U1(i,e){let t=Rr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function B1(i,e){let t=Rr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function O1(i,e){i.uniform1iv(this.addr,e)}function F1(i,e){i.uniform2iv(this.addr,e)}function k1(i,e){i.uniform3iv(this.addr,e)}function z1(i,e){i.uniform4iv(this.addr,e)}function H1(i,e){i.uniform1uiv(this.addr,e)}function G1(i,e){i.uniform2uiv(this.addr,e)}function V1(i,e){i.uniform3uiv(this.addr,e)}function j1(i,e){i.uniform4uiv(this.addr,e)}function W1(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Xf,r[a])}function X1(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Yf,r[a])}function q1(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Kf,r[a])}function Y1(i,e,t){let n=this.cache,s=e.length,r=zl(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||qf,r[a])}function K1(i){switch(i){case 5126:return I1;case 35664:return P1;case 35665:return L1;case 35666:return D1;case 35674:return N1;case 35675:return U1;case 35676:return B1;case 5124:case 35670:return O1;case 35667:case 35671:return F1;case 35668:case 35672:return k1;case 35669:case 35673:return z1;case 5125:return H1;case 36294:return G1;case 36295:return V1;case 36296:return j1;case 35678:case 36198:case 36298:case 36306:case 35682:return W1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return q1;case 36289:case 36303:case 36311:case 36292:return Y1}}var Ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=C1(t.type)}},Lh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=K1(t.type)}},Dh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ih=/(\w+)(\])?(\[|\.)?/g;function Nf(i,e){i.seq.push(e),i.map[e.id]=e}function Z1(i,e,t){let n=i.name,s=n.length;for(Ih.lastIndex=0;;){let r=Ih.exec(n),a=Ih.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Nf(t,c===void 0?new Ph(o,i,e):new Lh(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Dh(o),Nf(t,h)),t=h}}}var Ar=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Z1(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Uf(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var J1=37297,$1=0;function Q1(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Bf=new Ve;function ex(i){et._getMatrix(Bf,et.workingColorSpace,i);let e=`mat3( ${Bf.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(i)){case Kr:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Of(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Q1(i.getShaderSource(e),o)}else return r}function tx(i,e){let t=ex(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function nx(i,e){let t;switch(e){case Jd:t="Linear";break;case $d:t="Reinhard";break;case Qd:t="Cineon";break;case Zo:t="ACESFilmic";break;case tf:t="AgX";break;case nf:t="Neutral";break;case ef:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ol=new I;function ix(){et.getLuminanceCoefficients(Ol);let i=Ol.x.toFixed(4),e=Ol.y.toFixed(4),t=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function rx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ax(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Da(i){return i!==""}function Ff(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kf(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var ox=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nh(i){return i.replace(ox,cx)}var lx=new Map;function cx(i,e){let t=qe[e];if(t===void 0){let n=lx.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Nh(t)}var hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zf(i){return i.replace(hx,ux)}function ux(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hf(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function dx(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===th?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Go?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function fx(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Cs:case Is:e="ENVMAP_TYPE_CUBE";break;case Aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function px(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function mx(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case rh:e="ENVMAP_BLENDING_MULTIPLY";break;case Kd:e="ENVMAP_BLENDING_MIX";break;case Zd:e="ENVMAP_BLENDING_ADD";break}return e}function gx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _x(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=dx(t),c=fx(t),u=px(t),h=mx(t),d=gx(t),f=sx(t),g=rx(r),y=s.createProgram(),m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Da).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Da).join(`
`),p.length>0&&(p+=`
`)):(m=[Hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),p=[Hf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Di?"#define TONE_MAPPING":"",t.toneMapping!==Di?qe.tonemapping_pars_fragment:"",t.toneMapping!==Di?nx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,tx("linearToOutputTexel",t.outputColorSpace),ix(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),a=Nh(a),a=Ff(a,t),a=kf(a,t),o=Nh(o),o=Ff(o,t),o=kf(o,t),a=zf(a),o=zf(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===_h?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_h?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=T+m+a,b=T+p+o,L=Uf(s,s.VERTEX_SHADER,E),R=Uf(s,s.FRAGMENT_SHADER,b);s.attachShader(y,L),s.attachShader(y,R),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function D(v){if(i.debug.checkShaderErrors){let A=s.getProgramInfoLog(y)||"",U=s.getShaderInfoLog(L)||"",P=s.getShaderInfoLog(R)||"",z=A.trim(),V=U.trim(),ee=P.trim(),X=!0,oe=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,L,R);else{let pe=Of(s,L,"vertex"),Se=Of(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+v.name+`
Material Type: `+v.type+`

Program Info Log: `+z+`
`+pe+`
`+Se)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(V===""||ee==="")&&(oe=!1);oe&&(v.diagnostics={runnable:X,programLog:z,vertexShader:{log:V,prefix:m},fragmentShader:{log:ee,prefix:p}})}s.deleteShader(L),s.deleteShader(R),N=new Ar(s,y),S=ax(s,y)}let N;this.getUniforms=function(){return N===void 0&&D(this),N};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,J1)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$1++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=L,this.fragmentShader=R,this}var xx=0,Uh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bh(e),t.set(e,n)),n}},Bh=class{constructor(e){this.id=xx++,this.code=e,this.usedTimes=0}};function yx(i,e,t,n,s,r,a){let o=new lr,l=new Uh,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,x,v,A,U){let P=A.fog,z=U.geometry,V=S.isMeshStandardMaterial?A.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||V),X=ee&&ee.mapping===Aa?ee.image.height:null,oe=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let pe=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Se=pe!==void 0?pe.length:0,Ze=0;z.morphAttributes.position!==void 0&&(Ze=1),z.morphAttributes.normal!==void 0&&(Ze=2),z.morphAttributes.color!==void 0&&(Ze=3);let yt,St,lt,Z;if(oe){let ct=di[oe];yt=ct.vertexShader,St=ct.fragmentShader}else yt=S.vertexShader,St=S.fragmentShader,l.update(S),lt=l.getVertexShaderID(S),Z=l.getFragmentShaderID(S);let Q=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Fe=U.isInstancedMesh===!0,Re=U.isBatchedMesh===!0,nt=!!S.map,Qt=!!S.matcap,B=!!ee,wt=!!S.aoMap,Ge=!!S.lightMap,Ue=!!S.bumpMap,be=!!S.normalMap,Et=!!S.displacementMap,Me=!!S.emissiveMap,Xe=!!S.metalnessMap,Vt=!!S.roughnessMap,Pt=S.anisotropy>0,C=S.clearcoat>0,M=S.dispersion>0,H=S.iridescence>0,K=S.sheen>0,$=S.transmission>0,q=Pt&&!!S.anisotropyMap,Ae=C&&!!S.clearcoatMap,re=C&&!!S.clearcoatNormalMap,we=C&&!!S.clearcoatRoughnessMap,Ee=H&&!!S.iridescenceMap,ie=H&&!!S.iridescenceThicknessMap,fe=K&&!!S.sheenColorMap,Ne=K&&!!S.sheenRoughnessMap,Te=!!S.specularMap,ue=!!S.specularColorMap,je=!!S.specularIntensityMap,O=$&&!!S.transmissionMap,se=$&&!!S.thicknessMap,ae=!!S.gradientMap,ge=!!S.alphaMap,te=S.alphaTest>0,J=!!S.alphaHash,ve=!!S.extensions,ze=Di;S.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ze=i.toneMapping);let vt={shaderID:oe,shaderType:S.type,shaderName:S.name,vertexShader:yt,fragmentShader:St,defines:S.defines,customVertexShaderID:lt,customFragmentShaderID:Z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Re,batchingColor:Re&&U._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&U.instanceColor!==null,instancingMorph:Fe&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Zt,alphaToCoverage:!!S.alphaToCoverage,map:nt,matcap:Qt,envMap:B,envMapMode:B&&ee.mapping,envMapCubeUVHeight:X,aoMap:wt,lightMap:Ge,bumpMap:Ue,normalMap:be,displacementMap:d&&Et,emissiveMap:Me,normalMapObjectSpace:be&&S.normalMapType===lf,normalMapTangentSpace:be&&S.normalMapType===mh,metalnessMap:Xe,roughnessMap:Vt,anisotropy:Pt,anisotropyMap:q,clearcoat:C,clearcoatMap:Ae,clearcoatNormalMap:re,clearcoatRoughnessMap:we,dispersion:M,iridescence:H,iridescenceMap:Ee,iridescenceThicknessMap:ie,sheen:K,sheenColorMap:fe,sheenRoughnessMap:Ne,specularMap:Te,specularColorMap:ue,specularIntensityMap:je,transmission:$,transmissionMap:O,thicknessMap:se,gradientMap:ae,opaque:S.transparent===!1&&S.blending===xs&&S.alphaToCoverage===!1,alphaMap:ge,alphaTest:te,alphaHash:J,combine:S.combine,mapUv:nt&&y(S.map.channel),aoMapUv:wt&&y(S.aoMap.channel),lightMapUv:Ge&&y(S.lightMap.channel),bumpMapUv:Ue&&y(S.bumpMap.channel),normalMapUv:be&&y(S.normalMap.channel),displacementMapUv:Et&&y(S.displacementMap.channel),emissiveMapUv:Me&&y(S.emissiveMap.channel),metalnessMapUv:Xe&&y(S.metalnessMap.channel),roughnessMapUv:Vt&&y(S.roughnessMap.channel),anisotropyMapUv:q&&y(S.anisotropyMap.channel),clearcoatMapUv:Ae&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:re&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&y(S.sheenRoughnessMap.channel),specularMapUv:Te&&y(S.specularMap.channel),specularColorMapUv:ue&&y(S.specularColorMap.channel),specularIntensityMapUv:je&&y(S.specularIntensityMap.channel),transmissionMapUv:O&&y(S.transmissionMap.channel),thicknessMapUv:se&&y(S.thicknessMap.channel),alphaMapUv:ge&&y(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(be||Pt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(nt||ge),fog:!!P,useFog:S.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:U.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ze,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&v.length>0,shadowMapType:i.shadowMap.type,toneMapping:ze,decodeVideoTexture:nt&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===ft,decodeVideoTextureEmissive:Me&&S.emissiveMap.isVideoTexture===!0&&et.getTransfer(S.emissiveMap.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wt,flipSided:S.side===pn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ve&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ve&&S.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function p(S){let x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(let v in S.defines)x.push(v),x.push(S.defines[v]);return S.isRawShaderMaterial===!1&&(T(x,S),E(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function T(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function E(S,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),x.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reversedDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){let x=g[S.type],v;if(x){let A=di[x];v=yf.clone(A.uniforms)}else v=S.uniforms;return v}function L(S,x){let v;for(let A=0,U=u.length;A<U;A++){let P=u[A];if(P.cacheKey===x){v=P,++v.usedTimes;break}}return v===void 0&&(v=new _x(i,x,S,r),u.push(v)),v}function R(S){if(--S.usedTimes===0){let x=u.indexOf(S);u[x]=u[u.length-1],u.pop(),S.destroy()}}function D(S){l.remove(S)}function N(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:L,releaseProgram:R,releaseShaderCache:D,programs:u,dispose:N}}function vx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function bx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Gf(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vf(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,g,y,m){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:y,group:m},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=y,p.group=m),e++,p}function o(h,d,f,g,y,m){let p=a(h,d,f,g,y,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,g,y,m){let p=a(h,d,f,g,y,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||bx),n.length>1&&n.sort(d||Gf),s.length>1&&s.sort(d||Gf)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Mx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Vf,i.set(n,[a])):s>=r.length?(a=new Vf,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ie};break;case"SpotLight":t={position:new I,direction:new I,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function wx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Ex=0;function Tx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Ax(i){let e=new Sx,t=wx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new He,a=new He;function o(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,T=0,E=0,b=0,L=0,R=0,D=0;c.sort(Tx);for(let S=0,x=c.length;S<x;S++){let v=c[S],A=v.color,U=v.intensity,P=v.distance,z=v.shadow&&v.shadow.map?v.shadow.map.texture:null;if(v.isAmbientLight)u+=A.r*U,h+=A.g*U,d+=A.b*U;else if(v.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(v.sh.coefficients[V],U);D++}else if(v.isDirectionalLight){let V=e.get(v);if(V.color.copy(v.color).multiplyScalar(v.intensity),v.castShadow){let ee=v.shadow,X=t.get(v);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=v.shadow.matrix,T++}n.directional[f]=V,f++}else if(v.isSpotLight){let V=e.get(v);V.position.setFromMatrixPosition(v.matrixWorld),V.color.copy(A).multiplyScalar(U),V.distance=P,V.coneCos=Math.cos(v.angle),V.penumbraCos=Math.cos(v.angle*(1-v.penumbra)),V.decay=v.decay,n.spot[y]=V;let ee=v.shadow;if(v.map&&(n.spotLightMap[L]=v.map,L++,ee.updateMatrices(v),v.castShadow&&R++),n.spotLightMatrix[y]=ee.matrix,v.castShadow){let X=t.get(v);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,n.spotShadow[y]=X,n.spotShadowMap[y]=z,b++}y++}else if(v.isRectAreaLight){let V=e.get(v);V.color.copy(A).multiplyScalar(U),V.halfWidth.set(v.width*.5,0,0),V.halfHeight.set(0,v.height*.5,0),n.rectArea[m]=V,m++}else if(v.isPointLight){let V=e.get(v);if(V.color.copy(v.color).multiplyScalar(v.intensity),V.distance=v.distance,V.decay=v.decay,v.castShadow){let ee=v.shadow,X=t.get(v);X.shadowIntensity=ee.intensity,X.shadowBias=ee.bias,X.shadowNormalBias=ee.normalBias,X.shadowRadius=ee.radius,X.shadowMapSize=ee.mapSize,X.shadowCameraNear=ee.camera.near,X.shadowCameraFar=ee.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=v.shadow.matrix,E++}n.point[g]=V,g++}else if(v.isHemisphereLight){let V=e.get(v);V.skyColor.copy(v.color).multiplyScalar(U),V.groundColor.copy(v.groundColor).multiplyScalar(U),n.hemi[p]=V,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let N=n.hash;(N.directionalLength!==f||N.pointLength!==g||N.spotLength!==y||N.rectAreaLength!==m||N.hemiLength!==p||N.numDirectionalShadows!==T||N.numPointShadows!==E||N.numSpotShadows!==b||N.numSpotMaps!==L||N.numLightProbes!==D)&&(n.directional.length=f,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+L-R,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=D,N.directionalLength=f,N.pointLength=g,N.spotLength=y,N.rectAreaLength=m,N.hemiLength=p,N.numDirectionalShadows=T,N.numPointShadows=E,N.numSpotShadows=b,N.numSpotMaps=L,N.numLightProbes=D,n.version=Ex++)}function l(c,u){let h=0,d=0,f=0,g=0,y=0,m=u.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){let E=c[p];if(E.isDirectionalLight){let b=n.directional[h];b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),h++}else if(E.isSpotLight){let b=n.spot[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),f++}else if(E.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(E.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){let b=n.hemi[y];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function jf(i){let e=new Ax(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Rx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new jf(i),e.set(s,[o])):r>=a.length?(o=new jf(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ix=`uniform sampler2D shadow_pass;
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
}`;function Px(i,e,t){let n=new fr,s=new he,r=new he,a=new st,o=new Do({depthPacking:of}),l=new No,c={},u=t.maxTextureSize,h={[An]:pn,[pn]:An,[Wt]:Wt},d=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:Cx,fragmentShader:Ix}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Dt;g.setAttribute("position",new Bt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new ut(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=th;let p=this.type;this.render=function(R,D,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;let S=i.getRenderTarget(),x=i.getActiveCubeFace(),v=i.getActiveMipmapLevel(),A=i.state;A.setBlending(Li),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let U=p!==ui&&this.type===ui,P=p===ui&&this.type!==ui;for(let z=0,V=R.length;z<V;z++){let ee=R[z],X=ee.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let oe=X.getFrameExtents();if(s.multiply(oe),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/oe.x),s.x=r.x*oe.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/oe.y),s.y=r.y*oe.y,X.mapSize.y=r.y)),X.map===null||U===!0||P===!0){let Se=this.type!==ui?{minFilter:Kt,magFilter:Kt}:{};X.map!==null&&X.map.dispose(),X.map=new si(s.x,s.y,Se),X.map.texture.name=ee.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();let pe=X.getViewportCount();for(let Se=0;Se<pe;Se++){let Ze=X.getViewport(Se);a.set(r.x*Ze.x,r.y*Ze.y,r.x*Ze.z,r.y*Ze.w),A.viewport(a),X.updateMatrices(ee,Se),n=X.getFrustum(),b(D,N,X.camera,ee,this.type)}X.isPointLightShadow!==!0&&this.type===ui&&T(X,N),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,x,v)};function T(R,D){let N=e.update(y);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new si(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(D,null,N,d,y,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(D,null,N,f,y,null)}function E(R,D,N,S){let x=null,v=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(v!==void 0)x=v;else if(x=N.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let A=x.uuid,U=D.uuid,P=c[A];P===void 0&&(P={},c[A]=P);let z=P[U];z===void 0&&(z=x.clone(),P[U]=z,D.addEventListener("dispose",L)),x=z}if(x.visible=D.visible,x.wireframe=D.wireframe,S===ui?x.side=D.shadowSide!==null?D.shadowSide:D.side:x.side=D.shadowSide!==null?D.shadowSide:h[D.side],x.alphaMap=D.alphaMap,x.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,x.map=D.map,x.clipShadows=D.clipShadows,x.clippingPlanes=D.clippingPlanes,x.clipIntersection=D.clipIntersection,x.displacementMap=D.displacementMap,x.displacementScale=D.displacementScale,x.displacementBias=D.displacementBias,x.wireframeLinewidth=D.wireframeLinewidth,x.linewidth=D.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let A=i.properties.get(x);A.light=N}return x}function b(R,D,N,S,x){if(R.visible===!1)return;if(R.layers.test(D.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===ui)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);let U=e.update(R),P=R.material;if(Array.isArray(P)){let z=U.groups;for(let V=0,ee=z.length;V<ee;V++){let X=z[V],oe=P[X.materialIndex];if(oe&&oe.visible){let pe=E(R,oe,S,x);R.onBeforeShadow(i,R,D,N,U,pe,X),i.renderBufferDirect(N,null,U,pe,R,X),R.onAfterShadow(i,R,D,N,U,pe,X)}}}else if(P.visible){let z=E(R,P,S,x);R.onBeforeShadow(i,R,D,N,U,z,null),i.renderBufferDirect(N,null,U,z,R,null),R.onAfterShadow(i,R,D,N,U,z,null)}}let A=R.children;for(let U=0,P=A.length;U<P;U++)b(A[U],D,N,S,x)}function L(R){R.target.removeEventListener("dispose",L);for(let N in c){let S=c[N],x=R.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}var Lx={[Vo]:jo,[Wo]:Yo,[Xo]:Ko,[ys]:qo,[jo]:Vo,[Yo]:Wo,[Ko]:Xo,[qo]:ys};function Dx(i,e){function t(){let O=!1,se=new st,ae=null,ge=new st(0,0,0,0);return{setMask:function(te){ae!==te&&!O&&(i.colorMask(te,te,te,te),ae=te)},setLocked:function(te){O=te},setClear:function(te,J,ve,ze,vt){vt===!0&&(te*=ze,J*=ze,ve*=ze),se.set(te,J,ve,ze),ge.equals(se)===!1&&(i.clearColor(te,J,ve,ze),ge.copy(se))},reset:function(){O=!1,ae=null,ge.set(-1,0,0,0)}}}function n(){let O=!1,se=!1,ae=null,ge=null,te=null;return{setReversed:function(J){if(se!==J){let ve=e.get("EXT_clip_control");J?ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.ZERO_TO_ONE_EXT):ve.clipControlEXT(ve.LOWER_LEFT_EXT,ve.NEGATIVE_ONE_TO_ONE_EXT),se=J;let ze=te;te=null,this.setClear(ze)}},getReversed:function(){return se},setTest:function(J){J?Q(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(J){ae!==J&&!O&&(i.depthMask(J),ae=J)},setFunc:function(J){if(se&&(J=Lx[J]),ge!==J){switch(J){case Vo:i.depthFunc(i.NEVER);break;case jo:i.depthFunc(i.ALWAYS);break;case Wo:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case Xo:i.depthFunc(i.EQUAL);break;case qo:i.depthFunc(i.GEQUAL);break;case Yo:i.depthFunc(i.GREATER);break;case Ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ge=J}},setLocked:function(J){O=J},setClear:function(J){te!==J&&(se&&(J=1-J),i.clearDepth(J),te=J)},reset:function(){O=!1,ae=null,ge=null,te=null,se=!1}}}function s(){let O=!1,se=null,ae=null,ge=null,te=null,J=null,ve=null,ze=null,vt=null;return{setTest:function(ct){O||(ct?Q(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(ct){se!==ct&&!O&&(i.stencilMask(ct),se=ct)},setFunc:function(ct,yi,ei){(ae!==ct||ge!==yi||te!==ei)&&(i.stencilFunc(ct,yi,ei),ae=ct,ge=yi,te=ei)},setOp:function(ct,yi,ei){(J!==ct||ve!==yi||ze!==ei)&&(i.stencilOp(ct,yi,ei),J=ct,ve=yi,ze=ei)},setLocked:function(ct){O=ct},setClear:function(ct){vt!==ct&&(i.clearStencil(ct),vt=ct)},reset:function(){O=!1,se=null,ae=null,ge=null,te=null,J=null,ve=null,ze=null,vt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,T=null,E=null,b=null,L=null,R=null,D=new Ie(0,0,0),N=0,S=!1,x=null,v=null,A=null,U=null,P=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ee=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=ee>=2);let oe=null,pe={},Se=i.getParameter(i.SCISSOR_BOX),Ze=i.getParameter(i.VIEWPORT),yt=new st().fromArray(Se),St=new st().fromArray(Ze);function lt(O,se,ae,ge){let te=new Uint8Array(4),J=i.createTexture();i.bindTexture(O,J),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ve=0;ve<ae;ve++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,ge,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(se+ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return J}let Z={};Z[i.TEXTURE_2D]=lt(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=lt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=lt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=lt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(ys),Ue(!1),be(eh),Q(i.CULL_FACE),wt(Li);function Q(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function xe(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Fe(O,se){return h[O]!==se?(i.bindFramebuffer(O,se),h[O]=se,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=se),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Re(O,se){let ae=f,ge=!1;if(O){ae=d.get(se),ae===void 0&&(ae=[],d.set(se,ae));let te=O.textures;if(ae.length!==te.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let J=0,ve=te.length;J<ve;J++)ae[J]=i.COLOR_ATTACHMENT0+J;ae.length=te.length,ge=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,ge=!0);ge&&i.drawBuffers(ae)}function nt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}let Qt={[$i]:i.FUNC_ADD,[Ld]:i.FUNC_SUBTRACT,[Dd]:i.FUNC_REVERSE_SUBTRACT};Qt[Nd]=i.MIN,Qt[Ud]=i.MAX;let B={[Bd]:i.ZERO,[Od]:i.ONE,[Fd]:i.SRC_COLOR,[go]:i.SRC_ALPHA,[jd]:i.SRC_ALPHA_SATURATE,[Gd]:i.DST_COLOR,[zd]:i.DST_ALPHA,[kd]:i.ONE_MINUS_SRC_COLOR,[_o]:i.ONE_MINUS_SRC_ALPHA,[Vd]:i.ONE_MINUS_DST_COLOR,[Hd]:i.ONE_MINUS_DST_ALPHA,[Wd]:i.CONSTANT_COLOR,[Xd]:i.ONE_MINUS_CONSTANT_COLOR,[qd]:i.CONSTANT_ALPHA,[Yd]:i.ONE_MINUS_CONSTANT_ALPHA};function wt(O,se,ae,ge,te,J,ve,ze,vt,ct){if(O===Li){y===!0&&(xe(i.BLEND),y=!1);return}if(y===!1&&(Q(i.BLEND),y=!0),O!==Pd){if(O!==m||ct!==S){if((p!==$i||b!==$i)&&(i.blendEquation(i.FUNC_ADD),p=$i,b=$i),ct)switch(O){case xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nh:i.blendFunc(i.ONE,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case sh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case nh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ih:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}T=null,E=null,L=null,R=null,D.set(0,0,0),N=0,m=O,S=ct}return}te=te||se,J=J||ae,ve=ve||ge,(se!==p||te!==b)&&(i.blendEquationSeparate(Qt[se],Qt[te]),p=se,b=te),(ae!==T||ge!==E||J!==L||ve!==R)&&(i.blendFuncSeparate(B[ae],B[ge],B[J],B[ve]),T=ae,E=ge,L=J,R=ve),(ze.equals(D)===!1||vt!==N)&&(i.blendColor(ze.r,ze.g,ze.b,vt),D.copy(ze),N=vt),m=O,S=!1}function Ge(O,se){O.side===Wt?xe(i.CULL_FACE):Q(i.CULL_FACE);let ae=O.side===pn;se&&(ae=!ae),Ue(ae),O.blending===xs&&O.transparent===!1?wt(Li):wt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let ge=O.stencilWrite;o.setTest(ge),ge&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Me(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(O){x!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),x=O)}function be(O){O!==Cd?(Q(i.CULL_FACE),O!==v&&(O===eh?i.cullFace(i.BACK):O===Id?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),v=O}function Et(O){O!==A&&(V&&i.lineWidth(O),A=O)}function Me(O,se,ae){O?(Q(i.POLYGON_OFFSET_FILL),(U!==se||P!==ae)&&(i.polygonOffset(se,ae),U=se,P=ae)):xe(i.POLYGON_OFFSET_FILL)}function Xe(O){O?Q(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function Vt(O){O===void 0&&(O=i.TEXTURE0+z-1),oe!==O&&(i.activeTexture(O),oe=O)}function Pt(O,se,ae){ae===void 0&&(oe===null?ae=i.TEXTURE0+z-1:ae=oe);let ge=pe[ae];ge===void 0&&(ge={type:void 0,texture:void 0},pe[ae]=ge),(ge.type!==O||ge.texture!==se)&&(oe!==ae&&(i.activeTexture(ae),oe=ae),i.bindTexture(O,se||Z[O]),ge.type=O,ge.texture=se)}function C(){let O=pe[oe];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function M(){try{i.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{i.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $(){try{i.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ae(){try{i.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function re(){try{i.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{i.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(){try{i.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ie(){try{i.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(O){yt.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),yt.copy(O))}function Ne(O){St.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),St.copy(O))}function Te(O,se){let ae=c.get(se);ae===void 0&&(ae=new WeakMap,c.set(se,ae));let ge=ae.get(O);ge===void 0&&(ge=i.getUniformBlockIndex(se,O.name),ae.set(O,ge))}function ue(O,se){let ge=c.get(se).get(O);l.get(se)!==ge&&(i.uniformBlockBinding(se,ge,O.__bindingPointIndex),l.set(se,ge))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},oe=null,pe={},h={},d=new WeakMap,f=[],g=null,y=!1,m=null,p=null,T=null,E=null,b=null,L=null,R=null,D=new Ie(0,0,0),N=0,S=!1,x=null,v=null,A=null,U=null,P=null,yt.set(0,0,i.canvas.width,i.canvas.height),St.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:xe,bindFramebuffer:Fe,drawBuffers:Re,useProgram:nt,setBlending:wt,setMaterial:Ge,setFlipSided:Ue,setCullFace:be,setLineWidth:Et,setPolygonOffset:Me,setScissorTest:Xe,activeTexture:Vt,bindTexture:Pt,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:H,texImage2D:Ee,texImage3D:ie,updateUBOMapping:Te,uniformBlockBinding:ue,texStorage2D:re,texStorage3D:we,texSubImage2D:K,texSubImage3D:$,compressedTexSubImage2D:q,compressedTexSubImage3D:Ae,scissor:fe,viewport:Ne,reset:je}}function Nx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new he,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return f?new OffscreenCanvas(C,M):rr("canvas")}function y(C,M,H){let K=1,$=Pt(C);if(($.width>H||$.height>H)&&(K=H/Math.max($.width,$.height)),K<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let q=Math.floor(K*$.width),Ae=Math.floor(K*$.height);h===void 0&&(h=g(q,Ae));let re=M?g(q,Ae):h;return re.width=q,re.height=Ae,re.getContext("2d").drawImage(C,0,0,q,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+q+"x"+Ae+")."),re}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(C,M,H,K,$=!1){if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let q=M;if(M===i.RED&&(H===i.FLOAT&&(q=i.R32F),H===i.HALF_FLOAT&&(q=i.R16F),H===i.UNSIGNED_BYTE&&(q=i.R8)),M===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.R8UI),H===i.UNSIGNED_SHORT&&(q=i.R16UI),H===i.UNSIGNED_INT&&(q=i.R32UI),H===i.BYTE&&(q=i.R8I),H===i.SHORT&&(q=i.R16I),H===i.INT&&(q=i.R32I)),M===i.RG&&(H===i.FLOAT&&(q=i.RG32F),H===i.HALF_FLOAT&&(q=i.RG16F),H===i.UNSIGNED_BYTE&&(q=i.RG8)),M===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.RG8UI),H===i.UNSIGNED_SHORT&&(q=i.RG16UI),H===i.UNSIGNED_INT&&(q=i.RG32UI),H===i.BYTE&&(q=i.RG8I),H===i.SHORT&&(q=i.RG16I),H===i.INT&&(q=i.RG32I)),M===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.RGB8UI),H===i.UNSIGNED_SHORT&&(q=i.RGB16UI),H===i.UNSIGNED_INT&&(q=i.RGB32UI),H===i.BYTE&&(q=i.RGB8I),H===i.SHORT&&(q=i.RGB16I),H===i.INT&&(q=i.RGB32I)),M===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),H===i.UNSIGNED_INT&&(q=i.RGBA32UI),H===i.BYTE&&(q=i.RGBA8I),H===i.SHORT&&(q=i.RGBA16I),H===i.INT&&(q=i.RGBA32I)),M===i.RGB&&(H===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),M===i.RGBA){let Ae=$?Kr:et.getTransfer(K);H===i.FLOAT&&(q=i.RGBA32F),H===i.HALF_FLOAT&&(q=i.RGBA16F),H===i.UNSIGNED_BYTE&&(q=Ae===ft?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function b(C,M){let H;return C?M===null||M===is||M===Mr?H=i.DEPTH24_STENCIL8:M===Fn?H=i.DEPTH32F_STENCIL8:M===vr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===is||M===Mr?H=i.DEPTH_COMPONENT24:M===Fn?H=i.DEPTH_COMPONENT32F:M===vr&&(H=i.DEPTH_COMPONENT16),H}function L(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Kt&&C.minFilter!==hn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function R(C){let M=C.target;M.removeEventListener("dispose",R),N(M),M.isVideoTexture&&u.delete(M)}function D(C){let M=C.target;M.removeEventListener("dispose",D),x(M)}function N(C){let M=n.get(C);if(M.__webglInit===void 0)return;let H=C.source,K=d.get(H);if(K){let $=K[M.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(C),Object.keys(K).length===0&&d.delete(H)}n.remove(C)}function S(C){let M=n.get(C);i.deleteTexture(M.__webglTexture);let H=C.source,K=d.get(H);delete K[M.__cacheKey],a.memory.textures--}function x(C){let M=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let $=0;$<M.__webglFramebuffer[K].length;$++)i.deleteFramebuffer(M.__webglFramebuffer[K][$]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let H=C.textures;for(let K=0,$=H.length;K<$;K++){let q=n.get(H[K]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),a.memory.textures--),n.remove(H[K])}n.remove(C)}let v=0;function A(){v=0}function U(){let C=v;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),v+=1,C}function P(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function z(C,M){let H=n.get(C);if(C.isVideoTexture&&Xe(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&H.__version!==C.version){let K=C.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(H,C,M);return}}else C.isExternalTexture&&(H.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+M)}function V(C,M){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Z(H,C,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+M)}function ee(C,M){let H=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&H.__version!==C.version){Z(H,C,M);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+M)}function X(C,M){let H=n.get(C);if(C.version>0&&H.__version!==C.version){Q(H,C,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+M)}let oe={[Qi]:i.REPEAT,[ti]:i.CLAMP_TO_EDGE,[ir]:i.MIRRORED_REPEAT},pe={[Kt]:i.NEAREST,[Qo]:i.NEAREST_MIPMAP_NEAREST,[Ps]:i.NEAREST_MIPMAP_LINEAR,[hn]:i.LINEAR,[yr]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},Se={[cf]:i.NEVER,[mf]:i.ALWAYS,[hf]:i.LESS,[gh]:i.LEQUAL,[uf]:i.EQUAL,[pf]:i.GEQUAL,[df]:i.GREATER,[ff]:i.NOTEQUAL};function Ze(C,M){if(M.type===Fn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===hn||M.magFilter===yr||M.magFilter===Ps||M.magFilter===Zn||M.minFilter===hn||M.minFilter===yr||M.minFilter===Ps||M.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,oe[M.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,oe[M.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,oe[M.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,pe[M.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,pe[M.minFilter]),M.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,Se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Kt||M.minFilter!==Ps&&M.minFilter!==Zn||M.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function yt(C,M){let H=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",R));let K=M.source,$=d.get(K);$===void 0&&($={},d.set(K,$));let q=P(M);if(q!==C.__cacheKey){$[q]===void 0&&($[q]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),$[q].usedTimes++;let Ae=$[C.__cacheKey];Ae!==void 0&&($[C.__cacheKey].usedTimes--,Ae.usedTimes===0&&S(M)),C.__cacheKey=q,C.__webglTexture=$[q].texture}return H}function St(C,M,H){return Math.floor(Math.floor(C/H)/M)}function lt(C,M,H,K){let q=C.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,H,K,M.data);else{q.sort((ie,fe)=>ie.start-fe.start);let Ae=0;for(let ie=1;ie<q.length;ie++){let fe=q[Ae],Ne=q[ie],Te=fe.start+fe.count,ue=St(Ne.start,M.width,4),je=St(fe.start,M.width,4);Ne.start<=Te+1&&ue===je&&St(Ne.start+Ne.count-1,M.width,4)===ue?fe.count=Math.max(fe.count,Ne.start+Ne.count-fe.start):(++Ae,q[Ae]=Ne)}q.length=Ae+1;let re=i.getParameter(i.UNPACK_ROW_LENGTH),we=i.getParameter(i.UNPACK_SKIP_PIXELS),Ee=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let ie=0,fe=q.length;ie<fe;ie++){let Ne=q[ie],Te=Math.floor(Ne.start/4),ue=Math.ceil(Ne.count/4),je=Te%M.width,O=Math.floor(Te/M.width),se=ue,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,je),i.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,je,O,se,ae,H,K,M.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,re),i.pixelStorei(i.UNPACK_SKIP_PIXELS,we),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function Z(C,M,H){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);let $=yt(C,M),q=M.source;t.bindTexture(K,C.__webglTexture,i.TEXTURE0+H);let Ae=n.get(q);if(q.version!==Ae.__version||$===!0){t.activeTexture(i.TEXTURE0+H);let re=et.getPrimaries(et.workingColorSpace),we=M.colorSpace===Ni?null:et.getPrimaries(M.colorSpace),Ee=M.colorSpace===Ni||re===we?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let ie=y(M.image,!1,s.maxTextureSize);ie=Vt(M,ie);let fe=r.convert(M.format,M.colorSpace),Ne=r.convert(M.type),Te=E(M.internalFormat,fe,Ne,M.colorSpace,M.isVideoTexture);Ze(K,M);let ue,je=M.mipmaps,O=M.isVideoTexture!==!0,se=Ae.__version===void 0||$===!0,ae=q.dataReady,ge=L(M,ie);if(M.isDepthTexture)Te=b(M.format===Sr,M.type),se&&(O?t.texStorage2D(i.TEXTURE_2D,1,Te,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,Te,ie.width,ie.height,0,fe,Ne,null));else if(M.isDataTexture)if(je.length>0){O&&se&&t.texStorage2D(i.TEXTURE_2D,ge,Te,je[0].width,je[0].height);for(let te=0,J=je.length;te<J;te++)ue=je[te],O?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,Ne,ue.data):t.texImage2D(i.TEXTURE_2D,te,Te,ue.width,ue.height,0,fe,Ne,ue.data);M.generateMipmaps=!1}else O?(se&&t.texStorage2D(i.TEXTURE_2D,ge,Te,ie.width,ie.height),ae&&lt(M,ie,fe,Ne)):t.texImage2D(i.TEXTURE_2D,0,Te,ie.width,ie.height,0,fe,Ne,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){O&&se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Te,je[0].width,je[0].height,ie.depth);for(let te=0,J=je.length;te<J;te++)if(ue=je[te],M.format!==Cn)if(fe!==null)if(O){if(ae)if(M.layerUpdates.size>0){let ve=wh(ue.width,ue.height,M.format,M.type);for(let ze of M.layerUpdates){let vt=ue.data.subarray(ze*ve/ue.data.BYTES_PER_ELEMENT,(ze+1)*ve/ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,ze,ue.width,ue.height,1,fe,vt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ie.depth,fe,ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Te,ue.width,ue.height,ie.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,ue.width,ue.height,ie.depth,fe,Ne,ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Te,ue.width,ue.height,ie.depth,0,fe,Ne,ue.data)}else{O&&se&&t.texStorage2D(i.TEXTURE_2D,ge,Te,je[0].width,je[0].height);for(let te=0,J=je.length;te<J;te++)ue=je[te],M.format!==Cn?fe!==null?O?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,ue.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Te,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ue.width,ue.height,fe,Ne,ue.data):t.texImage2D(i.TEXTURE_2D,te,Te,ue.width,ue.height,0,fe,Ne,ue.data)}else if(M.isDataArrayTexture)if(O){if(se&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Te,ie.width,ie.height,ie.depth),ae)if(M.layerUpdates.size>0){let te=wh(ie.width,ie.height,M.format,M.type);for(let J of M.layerUpdates){let ve=ie.data.subarray(J*te/ie.data.BYTES_PER_ELEMENT,(J+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,ie.width,ie.height,1,fe,Ne,ve)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,Ne,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Te,ie.width,ie.height,ie.depth,0,fe,Ne,ie.data);else if(M.isData3DTexture)O?(se&&t.texStorage3D(i.TEXTURE_3D,ge,Te,ie.width,ie.height,ie.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,Ne,ie.data)):t.texImage3D(i.TEXTURE_3D,0,Te,ie.width,ie.height,ie.depth,0,fe,Ne,ie.data);else if(M.isFramebufferTexture){if(se)if(O)t.texStorage2D(i.TEXTURE_2D,ge,Te,ie.width,ie.height);else{let te=ie.width,J=ie.height;for(let ve=0;ve<ge;ve++)t.texImage2D(i.TEXTURE_2D,ve,Te,te,J,0,fe,Ne,null),te>>=1,J>>=1}}else if(je.length>0){if(O&&se){let te=Pt(je[0]);t.texStorage2D(i.TEXTURE_2D,ge,Te,te.width,te.height)}for(let te=0,J=je.length;te<J;te++)ue=je[te],O?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,fe,Ne,ue):t.texImage2D(i.TEXTURE_2D,te,Te,fe,Ne,ue);M.generateMipmaps=!1}else if(O){if(se){let te=Pt(ie);t.texStorage2D(i.TEXTURE_2D,ge,Te,te.width,te.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,fe,Ne,ie)}else t.texImage2D(i.TEXTURE_2D,0,Te,fe,Ne,ie);m(M)&&p(K),Ae.__version=q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Q(C,M,H){if(M.image.length!==6)return;let K=yt(C,M),$=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+H);let q=n.get($);if($.version!==q.__version||K===!0){t.activeTexture(i.TEXTURE0+H);let Ae=et.getPrimaries(et.workingColorSpace),re=M.colorSpace===Ni?null:et.getPrimaries(M.colorSpace),we=M.colorSpace===Ni||Ae===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Ee=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,fe=[];for(let J=0;J<6;J++)!Ee&&!ie?fe[J]=y(M.image[J],!0,s.maxCubemapSize):fe[J]=ie?M.image[J].image:M.image[J],fe[J]=Vt(M,fe[J]);let Ne=fe[0],Te=r.convert(M.format,M.colorSpace),ue=r.convert(M.type),je=E(M.internalFormat,Te,ue,M.colorSpace),O=M.isVideoTexture!==!0,se=q.__version===void 0||K===!0,ae=$.dataReady,ge=L(M,Ne);Ze(i.TEXTURE_CUBE_MAP,M);let te;if(Ee){O&&se&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,je,Ne.width,Ne.height);for(let J=0;J<6;J++){te=fe[J].mipmaps;for(let ve=0;ve<te.length;ve++){let ze=te[ve];M.format!==Cn?Te!==null?O?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,ze.width,ze.height,Te,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,je,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,ze.width,ze.height,Te,ue,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,je,ze.width,ze.height,0,Te,ue,ze.data)}}}else{if(te=M.mipmaps,O&&se){te.length>0&&ge++;let J=Pt(fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,je,J.width,J.height)}for(let J=0;J<6;J++)if(ie){O?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,fe[J].width,fe[J].height,Te,ue,fe[J].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,fe[J].width,fe[J].height,0,Te,ue,fe[J].data);for(let ve=0;ve<te.length;ve++){let vt=te[ve].image[J].image;O?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,vt.width,vt.height,Te,ue,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,je,vt.width,vt.height,0,Te,ue,vt.data)}}else{O?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Te,ue,fe[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,je,Te,ue,fe[J]);for(let ve=0;ve<te.length;ve++){let ze=te[ve];O?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,Te,ue,ze.image[J]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,je,Te,ue,ze.image[J])}}}m(M)&&p(i.TEXTURE_CUBE_MAP),q.__version=$.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function xe(C,M,H,K,$,q){let Ae=r.convert(H.format,H.colorSpace),re=r.convert(H.type),we=E(H.internalFormat,Ae,re,H.colorSpace),Ee=n.get(M),ie=n.get(H);if(ie.__renderTarget=M,!Ee.__hasExternalTextures){let fe=Math.max(1,M.width>>q),Ne=Math.max(1,M.height>>q);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,q,we,fe,Ne,M.depth,0,Ae,re,null):t.texImage2D($,q,we,fe,Ne,0,Ae,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),Me(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,$,ie.__webglTexture,0,Et(M)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,$,ie.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(C,M,H){if(i.bindRenderbuffer(i.RENDERBUFFER,C),M.depthBuffer){let K=M.depthTexture,$=K&&K.isDepthTexture?K.type:null,q=b(M.stencilBuffer,$),Ae=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=Et(M);Me(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,q,M.width,M.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,q,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,q,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ae,i.RENDERBUFFER,C)}else{let K=M.textures;for(let $=0;$<K.length;$++){let q=K[$],Ae=r.convert(q.format,q.colorSpace),re=r.convert(q.type),we=E(q.internalFormat,Ae,re,q.colorSpace),Ee=Et(M);H&&Me(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,we,M.width,M.height):Me(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,we,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,we,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),z(M.depthTexture,0);let $=K.__webglTexture,q=Et(M);if(M.depthTexture.format===sr)Me(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(M.depthTexture.format===Sr)Me(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function nt(C){let M=n.get(C),H=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let K=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){let $=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",$)};K.addEventListener("dispose",$),M.__depthDisposeCallback=$}M.__boundDepthTexture=K}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");let K=C.texture.mipmaps;K&&K.length>0?Re(M.__webglFramebuffer[0],C):Re(M.__webglFramebuffer,C)}else if(H){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=i.createRenderbuffer(),Fe(M.__webglDepthbuffer[K],C,!1);else{let $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,q)}}else{let K=C.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),Fe(M.__webglDepthbuffer,C,!1);else{let $=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qt(C,M,H){let K=n.get(C);M!==void 0&&xe(K.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&nt(C)}function B(C){let M=C.texture,H=n.get(C),K=n.get(M);C.addEventListener("dispose",D);let $=C.textures,q=C.isWebGLCubeRenderTarget===!0,Ae=$.length>1;if(Ae||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,a.memory.textures++),q){H.__webglFramebuffer=[];for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer[re]=[];for(let we=0;we<M.mipmaps.length;we++)H.__webglFramebuffer[re][we]=i.createFramebuffer()}else H.__webglFramebuffer[re]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){H.__webglFramebuffer=[];for(let re=0;re<M.mipmaps.length;re++)H.__webglFramebuffer[re]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ae)for(let re=0,we=$.length;re<we;re++){let Ee=n.get($[re]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&Me(C)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let re=0;re<$.length;re++){let we=$[re];H.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[re]);let Ee=r.convert(we.format,we.colorSpace),ie=r.convert(we.type),fe=E(we.internalFormat,Ee,ie,we.colorSpace,C.isXRRenderTarget===!0),Ne=Et(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,fe,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,H.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(H.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ze(i.TEXTURE_CUBE_MAP,M);for(let re=0;re<6;re++)if(M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)xe(H.__webglFramebuffer[re][we],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,we);else xe(H.__webglFramebuffer[re],C,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(M)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let re=0,we=$.length;re<we;re++){let Ee=$[re],ie=n.get(Ee),fe=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(fe=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(fe,ie.__webglTexture),Ze(fe,Ee),xe(H.__webglFramebuffer,C,Ee,i.COLOR_ATTACHMENT0+re,fe,0),m(Ee)&&p(fe)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(re=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,K.__webglTexture),Ze(re,M),M.mipmaps&&M.mipmaps.length>0)for(let we=0;we<M.mipmaps.length;we++)xe(H.__webglFramebuffer[we],C,M,i.COLOR_ATTACHMENT0,re,we);else xe(H.__webglFramebuffer,C,M,i.COLOR_ATTACHMENT0,re,0);m(M)&&p(re),t.unbindTexture()}C.depthBuffer&&nt(C)}function wt(C){let M=C.textures;for(let H=0,K=M.length;H<K;H++){let $=M[H];if(m($)){let q=T(C),Ae=n.get($).__webglTexture;t.bindTexture(q,Ae),p(q),t.unbindTexture()}}}let Ge=[],Ue=[];function be(C){if(C.samples>0){if(Me(C)===!1){let M=C.textures,H=C.width,K=C.height,$=i.COLOR_BUFFER_BIT,q=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ae=n.get(C),re=M.length>1;if(re)for(let Ee=0;Ee<M.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer);let we=C.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Ee=0;Ee<M.length;Ee++){if(C.resolveDepthBuffer&&(C.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);let ie=n.get(M[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,H,K,0,0,H,K,$,i.NEAREST),l===!0&&(Ge.length=0,Ue.length=0,Ge.push(i.COLOR_ATTACHMENT0+Ee),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ge.push(q),Ue.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Ee=0;Ee<M.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Ae.__webglColorRenderbuffer[Ee]);let ie=n.get(M[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Et(C){return Math.min(s.maxSamples,C.samples)}function Me(C){let M=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Xe(C){let M=a.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function Vt(C,M){let H=C.colorSpace,K=C.format,$=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||H!==Zt&&H!==Ni&&(et.getTransfer(H)===ft?(K!==Cn||$!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),M}function Pt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=A,this.setTexture2D=z,this.setTexture2DArray=V,this.setTexture3D=ee,this.setTextureCube=X,this.rebindTextures=Qt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Me}function Ux(i,e){function t(n,s=Ni){let r,a=et.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===oh)return i.BYTE;if(n===lh)return i.SHORT;if(n===vr)return i.UNSIGNED_SHORT;if(n===el)return i.INT;if(n===is)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===br)return i.HALF_FLOAT;if(n===uh)return i.ALPHA;if(n===dh)return i.RGB;if(n===Cn)return i.RGBA;if(n===sr)return i.DEPTH_COMPONENT;if(n===Sr)return i.DEPTH_STENCIL;if(n===il)return i.RED;if(n===sl)return i.RED_INTEGER;if(n===fh)return i.RG;if(n===rl)return i.RG_INTEGER;if(n===al)return i.RGBA_INTEGER;if(n===Ra||n===Ca||n===Ia||n===Pa)if(a===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ra)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ra)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ia)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ol||n===ll||n===cl||n===hl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ol)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ll)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===hl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ul||n===dl||n===fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ul||n===dl)return a===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===pl||n===ml||n===gl||n===_l||n===xl||n===yl||n===vl||n===bl||n===Ml||n===Sl||n===wl||n===El||n===Tl||n===Al)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===pl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ml)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_l)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===El)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tl)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Al)return a===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rl||n===Cl||n===Il)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Rl)return a===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Pl||n===Ll||n===Dl||n===Nl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Nl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Mr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ox=`
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

}`,Oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ua(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Yn({vertexShader:Bx,fragmentShader:Ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new ws(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Fh=class extends ii{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null,y=typeof XRWebGLBinding<"u",m=new Oh,p={},T=t.getContextAttributes(),E=null,b=null,L=[],R=[],D=new he,N=null,S=new Ut;S.viewport=new st;let x=new Ut;x.viewport=new st;let v=[S,x],A=new Ho,U=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let Q=L[Z];return Q===void 0&&(Q=new cr,L[Z]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Z){let Q=L[Z];return Q===void 0&&(Q=new cr,L[Z]=Q),Q.getGripSpace()},this.getHand=function(Z){let Q=L[Z];return Q===void 0&&(Q=new cr,L[Z]=Q),Q.getHandSpace()};function z(Z){let Q=R.indexOf(Z.inputSource);if(Q===-1)return;let xe=L[Q];xe!==void 0&&(xe.update(Z.inputSource,Z.frame,c||a),xe.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ee);for(let Z=0;Z<L.length;Z++){let Q=R[Z];Q!==null&&(R[Z]=null,L[Z].disconnect(Q))}U=null,P=null,m.reset();for(let Z in p)delete p[Z];e.setRenderTarget(E),f=null,d=null,h=null,s=null,b=null,lt.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ee),T.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(D),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Fe=null,Re=null;T.depth&&(Re=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=T.stencil?Sr:sr,Fe=T.stencil?Mr:is);let nt={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(nt),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new si(d.textureWidth,d.textureHeight,{format:Cn,type:Jn,depthTexture:new ha(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new si(f.framebufferWidth,f.framebufferHeight,{format:Cn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(Z){for(let Q=0;Q<Z.removed.length;Q++){let xe=Z.removed[Q],Fe=R.indexOf(xe);Fe>=0&&(R[Fe]=null,L[Fe].disconnect(xe))}for(let Q=0;Q<Z.added.length;Q++){let xe=Z.added[Q],Fe=R.indexOf(xe);if(Fe===-1){for(let nt=0;nt<L.length;nt++)if(nt>=R.length){R.push(xe),Fe=nt;break}else if(R[nt]===null){R[nt]=xe,Fe=nt;break}if(Fe===-1)break}let Re=L[Fe];Re&&Re.connect(xe)}}let X=new I,oe=new I;function pe(Z,Q,xe){X.setFromMatrixPosition(Q.matrixWorld),oe.setFromMatrixPosition(xe.matrixWorld);let Fe=X.distanceTo(oe),Re=Q.projectionMatrix.elements,nt=xe.projectionMatrix.elements,Qt=Re[14]/(Re[10]-1),B=Re[14]/(Re[10]+1),wt=(Re[9]+1)/Re[5],Ge=(Re[9]-1)/Re[5],Ue=(Re[8]-1)/Re[0],be=(nt[8]+1)/nt[0],Et=Qt*Ue,Me=Qt*be,Xe=Fe/(-Ue+be),Vt=Xe*-Ue;if(Q.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Vt),Z.translateZ(Xe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Re[10]===-1)Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Pt=Qt+Xe,C=B+Xe,M=Et-Vt,H=Me+(Fe-Vt),K=wt*B/C*Pt,$=Ge*B/C*Pt;Z.projectionMatrix.makePerspective(M,H,K,$,Pt,C),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function Se(Z,Q){Q===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(Q.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let Q=Z.near,xe=Z.far;m.texture!==null&&(m.depthNear>0&&(Q=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),A.near=x.near=S.near=Q,A.far=x.far=S.far=xe,(U!==A.near||P!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),U=A.near,P=A.far),A.layers.mask=Z.layers.mask|6,S.layers.mask=A.layers.mask&3,x.layers.mask=A.layers.mask&5;let Fe=Z.parent,Re=A.cameras;Se(A,Fe);for(let nt=0;nt<Re.length;nt++)Se(Re[nt],Fe);Re.length===2?pe(A,S,x):A.projectionMatrix.copy(S.projectionMatrix),Ze(Z,A,Fe)};function Ze(Z,Q,xe){xe===null?Z.matrix.copy(Q.matrixWorld):(Z.matrix.copy(xe.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(Q.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(Q.projectionMatrix),Z.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ms*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(A)},this.getCameraTexture=function(Z){return p[Z]};let yt=null;function St(Z,Q){if(u=Q.getViewerPose(c||a),g=Q,u!==null){let xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Fe=!1;xe.length!==A.cameras.length&&(A.cameras.length=0,Fe=!0);for(let B=0;B<xe.length;B++){let wt=xe[B],Ge=null;if(f!==null)Ge=f.getViewport(wt);else{let be=h.getViewSubImage(d,wt);Ge=be.viewport,B===0&&(e.setRenderTargetTextures(b,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(b))}let Ue=v[B];Ue===void 0&&(Ue=new Ut,Ue.layers.enable(B),Ue.viewport=new st,v[B]=Ue),Ue.matrix.fromArray(wt.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(wt.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),B===0&&(A.matrix.copy(Ue.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Fe===!0&&A.cameras.push(Ue)}let Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){h=n.getBinding();let B=h.getDepthInformation(xe[0]);B&&B.isValid&&B.texture&&m.init(B,s.renderState)}if(Re&&Re.includes("camera-access")&&y){e.state.unbindTexture(),h=n.getBinding();for(let B=0;B<xe.length;B++){let wt=xe[B].camera;if(wt){let Ge=p[wt];Ge||(Ge=new ua,p[wt]=Ge);let Ue=h.getCameraImage(wt);Ge.sourceTexture=Ue}}}}for(let xe=0;xe<L.length;xe++){let Fe=R[xe],Re=L[xe];Fe!==null&&Re!==void 0&&Re.update(Fe,Q,c||a)}yt&&yt(Z,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let lt=new Wf;lt.setAnimationLoop(St),this.setAnimationLoop=function(Z){yt=Z},this.dispose=function(){}}},Us=new qn,Fx=new He;function kx(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,E,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,T,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=e.get(p),E=T.envMap,b=T.envMapRotation;E&&(m.envMap.value=E,Us.copy(b),Us.x*=-1,Us.y*=-1,Us.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),m.envMapRotation.value.setFromMatrix4(Fx.makeRotationFromEuler(Us)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zx(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){let b=E.program;n.uniformBlockBinding(T,b)}function c(T,E){let b=s[T.id];b===void 0&&(g(T),b=u(T),s[T.id]=b,T.addEventListener("dispose",m));let L=E.program;n.updateUBOMapping(T,L);let R=e.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function u(T){let E=h();T.__bindingPointIndex=E;let b=i.createBuffer(),L=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,L,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){let E=s[T.id],b=T.uniforms,L=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,D=b.length;R<D;R++){let N=Array.isArray(b[R])?b[R]:[b[R]];for(let S=0,x=N.length;S<x;S++){let v=N[S];if(f(v,R,S,L)===!0){let A=v.__offset,U=Array.isArray(v.value)?v.value:[v.value],P=0;for(let z=0;z<U.length;z++){let V=U[z],ee=y(V);typeof V=="number"||typeof V=="boolean"?(v.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,A+P,v.__data)):V.isMatrix3?(v.__data[0]=V.elements[0],v.__data[1]=V.elements[1],v.__data[2]=V.elements[2],v.__data[3]=0,v.__data[4]=V.elements[3],v.__data[5]=V.elements[4],v.__data[6]=V.elements[5],v.__data[7]=0,v.__data[8]=V.elements[6],v.__data[9]=V.elements[7],v.__data[10]=V.elements[8],v.__data[11]=0):(V.toArray(v.__data,P),P+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,A,v.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(T,E,b,L){let R=T.value,D=E+"_"+b;if(L[D]===void 0)return typeof R=="number"||typeof R=="boolean"?L[D]=R:L[D]=R.clone(),!0;{let N=L[D];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return L[D]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function g(T){let E=T.uniforms,b=0,L=16;for(let D=0,N=E.length;D<N;D++){let S=Array.isArray(E[D])?E[D]:[E[D]];for(let x=0,v=S.length;x<v;x++){let A=S[x],U=Array.isArray(A.value)?A.value:[A.value];for(let P=0,z=U.length;P<z;P++){let V=U[P],ee=y(V),X=b%L,oe=X%ee.boundary,pe=X+oe;b+=oe,pe!==0&&L-pe<ee.storage&&(b+=L-pe),A.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=b,b+=ee.storage}}}let R=b%L;return R>0&&(b+=L-R),T.__size=b,T.__cache={},this}function y(T){let E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){let E=T.target;E.removeEventListener("dispose",m);let b=a.indexOf(E.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function p(){for(let T in s)i.deleteBuffer(s[T]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var kl=class{constructor(e={}){let{canvas:t=gf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let g=new Uint32Array(4),y=new Int32Array(4),m=null,p=null,T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,L=!1;this._outputColorSpace=Lt;let R=0,D=0,N=null,S=-1,x=null,v=new st,A=new st,U=null,P=new Ie(0),z=0,V=t.width,ee=t.height,X=1,oe=null,pe=null,Se=new st(0,0,V,ee),Ze=new st(0,0,V,ee),yt=!1,St=new fr,lt=!1,Z=!1,Q=new He,xe=new I,Fe=new st,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function Qt(){return N===null?X:1}let B=n;function wt(w,F){return t.getContext(w,F)}try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",ae,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",te,!1),B===null){let F="webgl2";if(B=wt(F,w),B===null)throw wt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ge,Ue,be,Et,Me,Xe,Vt,Pt,C,M,H,K,$,q,Ae,re,we,Ee,ie,fe,Ne,Te,ue,je;function O(){Ge=new s1(B),Ge.init(),Te=new Ux(B,Ge),Ue=new J_(B,Ge,e,Te),be=new Dx(B,Ge),Ue.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),Et=new o1(B),Me=new vx,Xe=new Nx(B,Ge,be,Me,Ue,Te,Et),Vt=new Q_(b),Pt=new i1(b),C=new fm(B),ue=new K_(B,C),M=new r1(B,C,Et,ue),H=new c1(B,M,C,Et),ie=new l1(B,Ue,Xe),re=new $_(Me),K=new yx(b,Vt,Pt,Ge,Ue,ue,re),$=new kx(b,Me),q=new Mx,Ae=new Rx(Ge),Ee=new Y_(b,Vt,Pt,be,H,f,l),we=new Px(b,H,Ue),je=new zx(B,Et,Ue,be),fe=new Z_(B,Ge,Et),Ne=new a1(B,Ge,Et),Et.programs=K.programs,b.capabilities=Ue,b.extensions=Ge,b.properties=Me,b.renderLists=q,b.shadowMap=we,b.state=be,b.info=Et}O();let se=new Fh(b,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let w=Ge.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Ge.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(w){w!==void 0&&(X=w,this.setSize(V,ee,!1))},this.getSize=function(w){return w.set(V,ee)},this.setSize=function(w,F,j=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=w,ee=F,t.width=Math.floor(w*X),t.height=Math.floor(F*X),j===!0&&(t.style.width=w+"px",t.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(V*X,ee*X).floor()},this.setDrawingBufferSize=function(w,F,j){V=w,ee=F,X=j,t.width=Math.floor(w*j),t.height=Math.floor(F*j),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(v)},this.getViewport=function(w){return w.copy(Se)},this.setViewport=function(w,F,j,W){w.isVector4?Se.set(w.x,w.y,w.z,w.w):Se.set(w,F,j,W),be.viewport(v.copy(Se).multiplyScalar(X).round())},this.getScissor=function(w){return w.copy(Ze)},this.setScissor=function(w,F,j,W){w.isVector4?Ze.set(w.x,w.y,w.z,w.w):Ze.set(w,F,j,W),be.scissor(A.copy(Ze).multiplyScalar(X).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(w){be.setScissorTest(yt=w)},this.setOpaqueSort=function(w){oe=w},this.setTransparentSort=function(w){pe=w},this.getClearColor=function(w){return w.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,j=!0){let W=0;if(w){let k=!1;if(N!==null){let ne=N.texture.format;k=ne===al||ne===rl||ne===sl}if(k){let ne=N.texture.type,de=ne===Jn||ne===is||ne===vr||ne===Mr||ne===tl||ne===nl,ye=Ee.getClearColor(),me=Ee.getClearAlpha(),De=ye.r,Be=ye.g,Ce=ye.b;de?(g[0]=De,g[1]=Be,g[2]=Ce,g[3]=me,B.clearBufferuiv(B.COLOR,0,g)):(y[0]=De,y[1]=Be,y[2]=Ce,y[3]=me,B.clearBufferiv(B.COLOR,0,y))}else W|=B.COLOR_BUFFER_BIT}F&&(W|=B.DEPTH_BUFFER_BIT),j&&(W|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ae,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",te,!1),Ee.dispose(),q.dispose(),Ae.dispose(),Me.dispose(),Vt.dispose(),Pt.dispose(),H.dispose(),ue.dispose(),je.dispose(),K.dispose(),se.dispose(),se.removeEventListener("sessionstart",ei),se.removeEventListener("sessionend",Fu),us.stop()};function ae(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;let w=Et.autoReset,F=we.enabled,j=we.autoUpdate,W=we.needsUpdate,k=we.type;O(),Et.autoReset=w,we.enabled=F,we.autoUpdate=j,we.needsUpdate=W,we.type=k}function te(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function J(w){let F=w.target;F.removeEventListener("dispose",J),ve(F)}function ve(w){ze(w),Me.remove(w)}function ze(w){let F=Me.get(w).programs;F!==void 0&&(F.forEach(function(j){K.releaseProgram(j)}),w.isShaderMaterial&&K.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,j,W,k,ne){F===null&&(F=Re);let de=k.isMesh&&k.matrixWorld.determinant()<0,ye=Jp(w,F,j,W,k);be.setMaterial(W,de);let me=j.index,De=1;if(W.wireframe===!0){if(me=M.getWireframeAttribute(j),me===void 0)return;De=2}let Be=j.drawRange,Ce=j.attributes.position,Qe=Be.start*De,pt=(Be.start+Be.count)*De;ne!==null&&(Qe=Math.max(Qe,ne.start*De),pt=Math.min(pt,(ne.start+ne.count)*De)),me!==null?(Qe=Math.max(Qe,0),pt=Math.min(pt,me.count)):Ce!=null&&(Qe=Math.max(Qe,0),pt=Math.min(pt,Ce.count));let It=pt-Qe;if(It<0||It===1/0)return;ue.setup(k,W,ye,j,me);let bt,_t=fe;if(me!==null&&(bt=C.get(me),_t=Ne,_t.setIndex(bt)),k.isMesh)W.wireframe===!0?(be.setLineWidth(W.wireframeLinewidth*Qt()),_t.setMode(B.LINES)):_t.setMode(B.TRIANGLES);else if(k.isLine){let Le=W.linewidth;Le===void 0&&(Le=1),be.setLineWidth(Le*Qt()),k.isLineSegments?_t.setMode(B.LINES):k.isLineLoop?_t.setMode(B.LINE_LOOP):_t.setMode(B.LINE_STRIP)}else k.isPoints?_t.setMode(B.POINTS):k.isSprite&&_t.setMode(B.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ar("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))_t.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let Le=k._multiDrawStarts,Rt=k._multiDrawCounts,it=k._multiDrawCount,Sn=me?C.get(me).bytesPerElement:1,Hs=Me.get(W).currentProgram.getUniforms();for(let wn=0;wn<it;wn++)Hs.setValue(B,"_gl_DrawID",wn),_t.render(Le[wn]/Sn,Rt[wn])}else if(k.isInstancedMesh)_t.renderInstances(Qe,It,k.count);else if(j.isInstancedBufferGeometry){let Le=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Rt=Math.min(j.instanceCount,Le);_t.renderInstances(Qe,It,Rt)}else _t.render(Qe,It)};function vt(w,F,j){w.transparent===!0&&w.side===Wt&&w.forceSinglePass===!1?(w.side=pn,w.needsUpdate=!0,Ga(w,F,j),w.side=An,w.needsUpdate=!0,Ga(w,F,j),w.side=Wt):Ga(w,F,j)}this.compile=function(w,F,j=null){j===null&&(j=w),p=Ae.get(j),p.init(F),E.push(p),j.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),w!==j&&w.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();let W=new Set;return w.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let ne=k.material;if(ne)if(Array.isArray(ne))for(let de=0;de<ne.length;de++){let ye=ne[de];vt(ye,j,k),W.add(ye)}else vt(ne,j,k),W.add(ne)}),p=E.pop(),W},this.compileAsync=function(w,F,j=null){let W=this.compile(w,F,j);return new Promise(k=>{function ne(){if(W.forEach(function(de){Me.get(de).currentProgram.isReady()&&W.delete(de)}),W.size===0){k(w);return}setTimeout(ne,10)}Ge.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let ct=null;function yi(w){ct&&ct(w)}function ei(){us.stop()}function Fu(){us.start()}let us=new Wf;us.setAnimationLoop(yi),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(w){ct=w,se.setAnimationLoop(w),w===null?us.stop():us.start()},se.addEventListener("sessionstart",ei),se.addEventListener("sessionend",Fu),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(F),F=se.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,F,N),p=Ae.get(w,E.length),p.init(F),E.push(p),Q.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),St.setFromProjectionMatrix(Q,Wn,F.reversedDepth),Z=this.localClippingEnabled,lt=re.init(this.clippingPlanes,Z),m=q.get(w,T.length),m.init(),T.push(m),se.enabled===!0&&se.isPresenting===!0){let ne=b.xr.getDepthSensingMesh();ne!==null&&hc(ne,F,-1/0,b.sortObjects)}hc(w,F,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(oe,pe),nt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,nt&&Ee.addToRenderList(m,w),this.info.render.frame++,lt===!0&&re.beginShadows();let j=p.state.shadowsArray;we.render(j,w,F),lt===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();let W=m.opaque,k=m.transmissive;if(p.setupLights(),F.isArrayCamera){let ne=F.cameras;if(k.length>0)for(let de=0,ye=ne.length;de<ye;de++){let me=ne[de];zu(W,k,w,me)}nt&&Ee.render(w);for(let de=0,ye=ne.length;de<ye;de++){let me=ne[de];ku(m,w,me,me.viewport)}}else k.length>0&&zu(W,k,w,F),nt&&Ee.render(w),ku(m,w,F);N!==null&&D===0&&(Xe.updateMultisampleRenderTarget(N),Xe.updateRenderTargetMipmap(N)),w.isScene===!0&&w.onAfterRender(b,w,F),ue.resetDefaultState(),S=-1,x=null,E.pop(),E.length>0?(p=E[E.length-1],lt===!0&&re.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function hc(w,F,j,W){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||St.intersectsSprite(w)){W&&Fe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Q);let de=H.update(w),ye=w.material;ye.visible&&m.push(w,de,ye,j,Fe.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||St.intersectsObject(w))){let de=H.update(w),ye=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Fe.copy(w.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Fe.copy(de.boundingSphere.center)),Fe.applyMatrix4(w.matrixWorld).applyMatrix4(Q)),Array.isArray(ye)){let me=de.groups;for(let De=0,Be=me.length;De<Be;De++){let Ce=me[De],Qe=ye[Ce.materialIndex];Qe&&Qe.visible&&m.push(w,de,Qe,j,Fe.z,Ce)}}else ye.visible&&m.push(w,de,ye,j,Fe.z,null)}}let ne=w.children;for(let de=0,ye=ne.length;de<ye;de++)hc(ne[de],F,j,W)}function ku(w,F,j,W){let k=w.opaque,ne=w.transmissive,de=w.transparent;p.setupLightsView(j),lt===!0&&re.setGlobalState(b.clippingPlanes,j),W&&be.viewport(v.copy(W)),k.length>0&&Ha(k,F,j),ne.length>0&&Ha(ne,F,j),de.length>0&&Ha(de,F,j),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function zu(w,F,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[W.id]===void 0&&(p.state.transmissionRenderTarget[W.id]=new si(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?br:Jn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));let ne=p.state.transmissionRenderTarget[W.id],de=W.viewport||v;ne.setSize(de.z*b.transmissionResolutionScale,de.w*b.transmissionResolutionScale);let ye=b.getRenderTarget(),me=b.getActiveCubeFace(),De=b.getActiveMipmapLevel();b.setRenderTarget(ne),b.getClearColor(P),z=b.getClearAlpha(),z<1&&b.setClearColor(16777215,.5),b.clear(),nt&&Ee.render(j);let Be=b.toneMapping;b.toneMapping=Di;let Ce=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),p.setupLightsView(W),lt===!0&&re.setGlobalState(b.clippingPlanes,W),Ha(w,j,W),Xe.updateMultisampleRenderTarget(ne),Xe.updateRenderTargetMipmap(ne),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let pt=0,It=F.length;pt<It;pt++){let bt=F[pt],_t=bt.object,Le=bt.geometry,Rt=bt.material,it=bt.group;if(Rt.side===Wt&&_t.layers.test(W.layers)){let Sn=Rt.side;Rt.side=pn,Rt.needsUpdate=!0,Hu(_t,j,W,Le,Rt,it),Rt.side=Sn,Rt.needsUpdate=!0,Qe=!0}}Qe===!0&&(Xe.updateMultisampleRenderTarget(ne),Xe.updateRenderTargetMipmap(ne))}b.setRenderTarget(ye,me,De),b.setClearColor(P,z),Ce!==void 0&&(W.viewport=Ce),b.toneMapping=Be}function Ha(w,F,j){let W=F.isScene===!0?F.overrideMaterial:null;for(let k=0,ne=w.length;k<ne;k++){let de=w[k],ye=de.object,me=de.geometry,De=de.group,Be=de.material;Be.allowOverride===!0&&W!==null&&(Be=W),ye.layers.test(j.layers)&&Hu(ye,F,j,me,Be,De)}}function Hu(w,F,j,W,k,ne){w.onBeforeRender(b,F,j,W,k,ne),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),k.onBeforeRender(b,F,j,W,w,ne),k.transparent===!0&&k.side===Wt&&k.forceSinglePass===!1?(k.side=pn,k.needsUpdate=!0,b.renderBufferDirect(j,F,W,k,w,ne),k.side=An,k.needsUpdate=!0,b.renderBufferDirect(j,F,W,k,w,ne),k.side=Wt):b.renderBufferDirect(j,F,W,k,w,ne),w.onAfterRender(b,F,j,W,k,ne)}function Ga(w,F,j){F.isScene!==!0&&(F=Re);let W=Me.get(w),k=p.state.lights,ne=p.state.shadowsArray,de=k.state.version,ye=K.getParameters(w,k.state,ne,F,j),me=K.getProgramCacheKey(ye),De=W.programs;W.environment=w.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(w.isMeshStandardMaterial?Pt:Vt).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,De===void 0&&(w.addEventListener("dispose",J),De=new Map,W.programs=De);let Be=De.get(me);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===de)return Vu(w,ye),Be}else ye.uniforms=K.getUniforms(w),w.onBeforeCompile(ye,b),Be=K.acquireProgram(ye,me),De.set(me,Be),W.uniforms=ye.uniforms;let Ce=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ce.clippingPlanes=re.uniform),Vu(w,ye),W.needsLights=Qp(w),W.lightsStateVersion=de,W.needsLights&&(Ce.ambientLightColor.value=k.state.ambient,Ce.lightProbe.value=k.state.probe,Ce.directionalLights.value=k.state.directional,Ce.directionalLightShadows.value=k.state.directionalShadow,Ce.spotLights.value=k.state.spot,Ce.spotLightShadows.value=k.state.spotShadow,Ce.rectAreaLights.value=k.state.rectArea,Ce.ltc_1.value=k.state.rectAreaLTC1,Ce.ltc_2.value=k.state.rectAreaLTC2,Ce.pointLights.value=k.state.point,Ce.pointLightShadows.value=k.state.pointShadow,Ce.hemisphereLights.value=k.state.hemi,Ce.directionalShadowMap.value=k.state.directionalShadowMap,Ce.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Ce.spotShadowMap.value=k.state.spotShadowMap,Ce.spotLightMatrix.value=k.state.spotLightMatrix,Ce.spotLightMap.value=k.state.spotLightMap,Ce.pointShadowMap.value=k.state.pointShadowMap,Ce.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Be,W.uniformsList=null,Be}function Gu(w){if(w.uniformsList===null){let F=w.currentProgram.getUniforms();w.uniformsList=Ar.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function Vu(w,F){let j=Me.get(w);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.batchingColor=F.batchingColor,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.instancingMorph=F.instancingMorph,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function Jp(w,F,j,W,k){F.isScene!==!0&&(F=Re),Xe.resetTextureUnits();let ne=F.fog,de=W.isMeshStandardMaterial?F.environment:null,ye=N===null?b.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Zt,me=(W.isMeshStandardMaterial?Pt:Vt).get(W.envMap||de),De=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Be=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!j.morphAttributes.position,Qe=!!j.morphAttributes.normal,pt=!!j.morphAttributes.color,It=Di;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(It=b.toneMapping);let bt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,_t=bt!==void 0?bt.length:0,Le=Me.get(W),Rt=p.state.lights;if(lt===!0&&(Z===!0||w!==x)){let ln=w===x&&W.id===S;re.setState(W,w,ln)}let it=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Rt.state.version||Le.outputColorSpace!==ye||k.isBatchedMesh&&Le.batching===!1||!k.isBatchedMesh&&Le.batching===!0||k.isBatchedMesh&&Le.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Le.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Le.instancing===!1||!k.isInstancedMesh&&Le.instancing===!0||k.isSkinnedMesh&&Le.skinning===!1||!k.isSkinnedMesh&&Le.skinning===!0||k.isInstancedMesh&&Le.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Le.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Le.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Le.instancingMorph===!1&&k.morphTexture!==null||Le.envMap!==me||W.fog===!0&&Le.fog!==ne||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==re.numPlanes||Le.numIntersection!==re.numIntersection)||Le.vertexAlphas!==De||Le.vertexTangents!==Be||Le.morphTargets!==Ce||Le.morphNormals!==Qe||Le.morphColors!==pt||Le.toneMapping!==It||Le.morphTargetsCount!==_t)&&(it=!0):(it=!0,Le.__version=W.version);let Sn=Le.currentProgram;it===!0&&(Sn=Ga(W,F,k));let Hs=!1,wn=!1,Br=!1,Ct=Sn.getUniforms(),Ln=Le.uniforms;if(be.useProgram(Sn.program)&&(Hs=!0,wn=!0,Br=!0),W.id!==S&&(S=W.id,wn=!0),Hs||x!==w){be.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Ct.setValue(B,"projectionMatrix",w.projectionMatrix),Ct.setValue(B,"viewMatrix",w.matrixWorldInverse);let mn=Ct.map.cameraPosition;mn!==void 0&&mn.setValue(B,xe.setFromMatrixPosition(w.matrixWorld)),Ue.logarithmicDepthBuffer&&Ct.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ct.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,wn=!0,Br=!0)}if(k.isSkinnedMesh){Ct.setOptional(B,k,"bindMatrix"),Ct.setOptional(B,k,"bindMatrixInverse");let ln=k.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Ct.setValue(B,"boneTexture",ln.boneTexture,Xe))}k.isBatchedMesh&&(Ct.setOptional(B,k,"batchingTexture"),Ct.setValue(B,"batchingTexture",k._matricesTexture,Xe),Ct.setOptional(B,k,"batchingIdTexture"),Ct.setValue(B,"batchingIdTexture",k._indirectTexture,Xe),Ct.setOptional(B,k,"batchingColorTexture"),k._colorsTexture!==null&&Ct.setValue(B,"batchingColorTexture",k._colorsTexture,Xe));let Dn=j.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&ie.update(k,j,Sn),(wn||Le.receiveShadow!==k.receiveShadow)&&(Le.receiveShadow=k.receiveShadow,Ct.setValue(B,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Ln.envMap.value=me,Ln.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(Ln.envMapIntensity.value=F.environmentIntensity),wn&&(Ct.setValue(B,"toneMappingExposure",b.toneMappingExposure),Le.needsLights&&$p(Ln,Br),ne&&W.fog===!0&&$.refreshFogUniforms(Ln,ne),$.refreshMaterialUniforms(Ln,W,X,ee,p.state.transmissionRenderTarget[w.id]),Ar.upload(B,Gu(Le),Ln,Xe)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ar.upload(B,Gu(Le),Ln,Xe),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ct.setValue(B,"center",k.center),Ct.setValue(B,"modelViewMatrix",k.modelViewMatrix),Ct.setValue(B,"normalMatrix",k.normalMatrix),Ct.setValue(B,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let ln=W.uniformsGroups;for(let mn=0,uc=ln.length;mn<uc;mn++){let ds=ln[mn];je.update(ds,Sn),je.bind(ds,Sn)}}return Sn}function $p(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function Qp(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,F,j){let W=Me.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Me.get(w.texture).__webglTexture=F,Me.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:j,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){let j=Me.get(w);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0};let e0=B.createFramebuffer();this.setRenderTarget=function(w,F=0,j=0){N=w,R=F,D=j;let W=!0,k=null,ne=!1,de=!1;if(w){let me=Me.get(w);if(me.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(B.FRAMEBUFFER,null),W=!1;else if(me.__webglFramebuffer===void 0)Xe.setupRenderTarget(w);else if(me.__hasExternalTextures)Xe.rebindTextures(w,Me.get(w.texture).__webglTexture,Me.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let Ce=w.depthTexture;if(me.__boundDepthTexture!==Ce){if(Ce!==null&&Me.has(Ce)&&(w.width!==Ce.image.width||w.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(w)}}let De=w.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(de=!0);let Be=Me.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?k=Be[F][j]:k=Be[F],ne=!0):w.samples>0&&Xe.useMultisampledRTT(w)===!1?k=Me.get(w).__webglMultisampledFramebuffer:Array.isArray(Be)?k=Be[j]:k=Be,v.copy(w.viewport),A.copy(w.scissor),U=w.scissorTest}else v.copy(Se).multiplyScalar(X).floor(),A.copy(Ze).multiplyScalar(X).floor(),U=yt;if(j!==0&&(k=e0),be.bindFramebuffer(B.FRAMEBUFFER,k)&&W&&be.drawBuffers(w,k),be.viewport(v),be.scissor(A),be.setScissorTest(U),ne){let me=Me.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,me.__webglTexture,j)}else if(de){let me=F;for(let De=0;De<w.textures.length;De++){let Be=Me.get(w.textures[De]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+De,Be.__webglTexture,j,me)}}else if(w!==null&&j!==0){let me=Me.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,me.__webglTexture,j)}S=-1},this.readRenderTargetPixels=function(w,F,j,W,k,ne,de,ye=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me){be.bindFramebuffer(B.FRAMEBUFFER,me);try{let De=w.textures[ye],Be=De.format,Ce=De.type;if(!Ue.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ue.textureTypeReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-W&&j>=0&&j<=w.height-k&&(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ye),B.readPixels(F,j,W,k,Te.convert(Be),Te.convert(Ce),ne))}finally{let De=N!==null?Me.get(N).__webglFramebuffer:null;be.bindFramebuffer(B.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(w,F,j,W,k,ne,de,ye=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Me.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&de!==void 0&&(me=me[de]),me)if(F>=0&&F<=w.width-W&&j>=0&&j<=w.height-k){be.bindFramebuffer(B.FRAMEBUFFER,me);let De=w.textures[ye],Be=De.format,Ce=De.type;if(!Ue.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ue.textureTypeReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Qe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,Qe),B.bufferData(B.PIXEL_PACK_BUFFER,ne.byteLength,B.STREAM_READ),w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+ye),B.readPixels(F,j,W,k,Te.convert(Be),Te.convert(Ce),0);let pt=N!==null?Me.get(N).__webglFramebuffer:null;be.bindFramebuffer(B.FRAMEBUFFER,pt);let It=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await _f(B,It,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,Qe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,ne),B.deleteBuffer(Qe),B.deleteSync(It),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,j=0){let W=Math.pow(2,-j),k=Math.floor(w.image.width*W),ne=Math.floor(w.image.height*W),de=F!==null?F.x:0,ye=F!==null?F.y:0;Xe.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,j,0,0,de,ye,k,ne),be.unbindTexture()};let t0=B.createFramebuffer(),n0=B.createFramebuffer();this.copyTextureToTexture=function(w,F,j=null,W=null,k=0,ne=null){ne===null&&(k!==0?(ar("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=k,k=0):ne=0);let de,ye,me,De,Be,Ce,Qe,pt,It,bt=w.isCompressedTexture?w.mipmaps[ne]:w.image;if(j!==null)de=j.max.x-j.min.x,ye=j.max.y-j.min.y,me=j.isBox3?j.max.z-j.min.z:1,De=j.min.x,Be=j.min.y,Ce=j.isBox3?j.min.z:0;else{let Dn=Math.pow(2,-k);de=Math.floor(bt.width*Dn),ye=Math.floor(bt.height*Dn),w.isDataArrayTexture?me=bt.depth:w.isData3DTexture?me=Math.floor(bt.depth*Dn):me=1,De=0,Be=0,Ce=0}W!==null?(Qe=W.x,pt=W.y,It=W.z):(Qe=0,pt=0,It=0);let _t=Te.convert(F.format),Le=Te.convert(F.type),Rt;F.isData3DTexture?(Xe.setTexture3D(F,0),Rt=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Xe.setTexture2DArray(F,0),Rt=B.TEXTURE_2D_ARRAY):(Xe.setTexture2D(F,0),Rt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let it=B.getParameter(B.UNPACK_ROW_LENGTH),Sn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Hs=B.getParameter(B.UNPACK_SKIP_PIXELS),wn=B.getParameter(B.UNPACK_SKIP_ROWS),Br=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,bt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,bt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,De),B.pixelStorei(B.UNPACK_SKIP_ROWS,Be),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Ce);let Ct=w.isDataArrayTexture||w.isData3DTexture,Ln=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){let Dn=Me.get(w),ln=Me.get(F),mn=Me.get(Dn.__renderTarget),uc=Me.get(ln.__renderTarget);be.bindFramebuffer(B.READ_FRAMEBUFFER,mn.__webglFramebuffer),be.bindFramebuffer(B.DRAW_FRAMEBUFFER,uc.__webglFramebuffer);for(let ds=0;ds<me;ds++)Ct&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Me.get(w).__webglTexture,k,Ce+ds),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Me.get(F).__webglTexture,ne,It+ds)),B.blitFramebuffer(De,Be,de,ye,Qe,pt,de,ye,B.DEPTH_BUFFER_BIT,B.NEAREST);be.bindFramebuffer(B.READ_FRAMEBUFFER,null),be.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(k!==0||w.isRenderTargetTexture||Me.has(w)){let Dn=Me.get(w),ln=Me.get(F);be.bindFramebuffer(B.READ_FRAMEBUFFER,t0),be.bindFramebuffer(B.DRAW_FRAMEBUFFER,n0);for(let mn=0;mn<me;mn++)Ct?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Dn.__webglTexture,k,Ce+mn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Dn.__webglTexture,k),Ln?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ln.__webglTexture,ne,It+mn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ln.__webglTexture,ne),k!==0?B.blitFramebuffer(De,Be,de,ye,Qe,pt,de,ye,B.COLOR_BUFFER_BIT,B.NEAREST):Ln?B.copyTexSubImage3D(Rt,ne,Qe,pt,It+mn,De,Be,de,ye):B.copyTexSubImage2D(Rt,ne,Qe,pt,De,Be,de,ye);be.bindFramebuffer(B.READ_FRAMEBUFFER,null),be.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ln?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Rt,ne,Qe,pt,It,de,ye,me,_t,Le,bt.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Rt,ne,Qe,pt,It,de,ye,me,_t,bt.data):B.texSubImage3D(Rt,ne,Qe,pt,It,de,ye,me,_t,Le,bt):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,ne,Qe,pt,de,ye,_t,Le,bt.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,ne,Qe,pt,bt.width,bt.height,_t,bt.data):B.texSubImage2D(B.TEXTURE_2D,ne,Qe,pt,de,ye,_t,Le,bt);B.pixelStorei(B.UNPACK_ROW_LENGTH,it),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Sn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Hs),B.pixelStorei(B.UNPACK_SKIP_ROWS,wn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Br),ne===0&&F.generateMipmaps&&B.generateMipmap(Rt),be.unbindTexture()},this.initRenderTarget=function(w){Me.get(w).__webglFramebuffer===void 0&&Xe.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Xe.setTextureCube(w,0):w.isData3DTexture?Xe.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Xe.setTexture2DArray(w,0):Xe.setTexture2D(w,0),be.unbindTexture()},this.resetState=function(){R=0,D=0,N=null,be.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var Zf={type:"change"},Gh={type:"start"},$f={type:"end"},Hl=new ri,Jf=new gn,Hx=Math.cos(70*Ls.DEG2RAD),Ht=new I,bn=2*Math.PI,mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hh=1e-6,Gl=class extends Ta{constructor(e,t=null){super(e,t),this.state=mt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:On.ROTATE,MIDDLE:On.DOLLY,RIGHT:On.PAN},this.touches={ONE:Kn.ROTATE,TWO:Kn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new un,this._lastTargetPosition=new I,this._quat=new un().setFromUnitVectors(e.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new xr,this._sphericalDelta=new xr,this._scale=1,this._panOffset=new I,this._rotateStart=new he,this._rotateEnd=new he,this._rotateDelta=new he,this._panStart=new he,this._panEnd=new he,this._panDelta=new he,this._dollyStart=new he,this._dollyEnd=new he,this._dollyDelta=new he,this._dollyDirection=new I,this._mouse=new he,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Vx.bind(this),this._onPointerDown=Gx.bind(this),this._onPointerUp=jx.bind(this),this._onContextMenu=Jx.bind(this),this._onMouseWheel=qx.bind(this),this._onKeyDown=Yx.bind(this),this._onTouchStart=Kx.bind(this),this._onTouchMove=Zx.bind(this),this._onMouseDown=Wx.bind(this),this._onMouseMove=Xx.bind(this),this._interceptControlDown=$x.bind(this),this._interceptControlUp=Qx.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Zf),this.update(),this.state=mt.NONE}update(e=null){let t=this.object.position;Ht.copy(t).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=bn:n>Math.PI&&(n-=bn),s<-Math.PI?s+=bn:s>Math.PI&&(s-=bn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ht.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Hl.origin.copy(this.object.position),Hl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Hl.direction))<Hx?this.object.lookAt(this.target):(Jf.setFromNormalAndCoplanarPoint(this.object.up,this.target),Hl.intersectPlane(Jf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Hh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hh||this._lastTargetPosition.distanceToSquared(this.target)>Hh?(this.dispatchEvent(Zf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?bn/60*this.autoRotateSpeed*e:bn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ht.setFromMatrixColumn(t,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,t){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(t,1):(Ht.setFromMatrixColumn(t,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ht.copy(s).sub(this.target);let r=Ht.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/t.clientHeight),this._rotateUp(bn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new he,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function Gx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Vx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function jx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($f),this.state=mt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Wx(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case On.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=mt.DOLLY;break;case On.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=mt.ROTATE}break;case On.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=mt.PAN}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Gh)}function Xx(i){switch(this.state){case mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function qx(i){this.enabled===!1||this.enableZoom===!1||this.state!==mt.NONE||(i.preventDefault(),this.dispatchEvent(Gh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($f))}function Yx(i){this.enabled!==!1&&this._handleKeyDown(i)}function Kx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Kn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=mt.TOUCH_ROTATE;break;case Kn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=mt.TOUCH_PAN;break;default:this.state=mt.NONE}break;case 2:switch(this.touches.TWO){case Kn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=mt.TOUCH_DOLLY_PAN;break;case Kn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=mt.TOUCH_DOLLY_ROTATE;break;default:this.state=mt.NONE}break;default:this.state=mt.NONE}this.state!==mt.NONE&&this.dispatchEvent(Gh)}function Zx(i){switch(this._trackPointer(i),this.state){case mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=mt.NONE}}function Jx(i){this.enabled!==!1&&i.preventDefault()}function $x(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qx(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Vl=class extends Gl{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:On.PAN,MIDDLE:On.DOLLY,RIGHT:On.ROTATE},this.touches={ONE:Kn.PAN,TWO:Kn.DOLLY_ROTATE}}};function Vh(i,e){if(e===ph)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===wr||e===La){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===wr)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var jl=class extends hi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Zh(t)}),this.register(function(t){return new Jh(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new Qh(t)}),this.register(function(t){return new eu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new nu(t)}),this.register(function(t){return new Kh(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new $h(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new qh(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new hu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Pi.extractUrlBase(e);a=Pi.resolveURL(c,this.path)}else a=Pi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new _r(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ip){try{a[Je.KHR_BINARY_GLTF]=new uu(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new xu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Je.KHR_MATERIALS_UNLIT:a[h]=new Yh;break;case Je.KHR_DRACO_MESH_COMPRESSION:a[h]=new du(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:a[h]=new fu;break;case Je.KHR_MESH_QUANTIZATION:a[h]=new pu;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function ey(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},qh=class{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Ie(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Zt);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Rs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Sa(u),c.distance=h;break;case"spot":c=new Ma(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),fi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},Yh=class{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return nn}extendParams(e,t,n){let s=[];e.color=new Ie(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Zt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Lt))}return Promise.all(s)}},Kh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Zh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new he(o,o)}return Promise.all(r)}},Jh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},$h=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Qh=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],Zt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Lt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},eu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},tu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Ie().setRGB(o[0],o[1],o[2],Zt),Promise.all(r)}},nu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},iu=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Ie().setRGB(o[0],o[1],o[2],Zt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Lt)),Promise.all(r)}},su=class{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},ru=class{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:yn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},au=class{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},ou=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},lu=class{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},cu=class{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},hu=class{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==kn.TRIANGLES&&c.mode!==kn.TRIANGLE_STRIP&&c.mode!==kn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let g of h){let y=new He,m=new I,p=new un,T=new I(1,1,1),E=new ai(g.geometry,g.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&T.fromBufferAttribute(l.SCALE,b),E.setMatrixAt(b,y.compose(m,p,T));for(let b in l)if(b==="_COLOR_0"){let L=l[b];E.instanceColor=new es(L.array,L.itemSize,L.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);ht.prototype.copy.call(E,g),this.parser.assignFinalMaterial(E),f.push(E)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},ip="glTF",Na=12,Qf={JSON:1313821514,BIN:5130562},uu=class{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Na),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ip)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Na,r=new DataView(e,Na),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Qf.JSON){let c=new Uint8Array(e,Na+a,o);this.content=n.decode(c)}else if(l===Qf.BIN){let c=Na+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},du=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=gu[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=gu[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Cr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let g in f.attributes){let y=f.attributes[g],m=l[g];m!==void 0&&(y.normalized=m)}h(f)},o,c,Zt,d)})})}},fu=class{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},pu=class{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}},Wl=class extends Ri{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,g=e*c,y=g-c,m=-2*f+3*d,p=f-d,T=1-m,E=p-d+h;for(let b=0;b!==o;b++){let L=a[y+b+o],R=a[y+b+l]*u,D=a[g+b+o],N=a[g+b]*u;r[b]=T*L+E*R+m*D+p*N}return r}},ty=new un,mu=class extends Wl{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return ty.fromArray(r).normalize().toArray(r),r}},kn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Cr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ep={9728:Kt,9729:hn,9984:Qo,9985:yr,9986:Ps,9987:Zn},tp={33071:ti,33648:ir,10497:Qi},jh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ss={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},ny={CUBICSPLINE:void 0,LINEAR:bs,STEP:vs},Wh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function iy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new fn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:An})),i.DefaultMaterial}function Fs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sy(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function ry(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ay(i){let e,t=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Xh(t.attributes):e=i.indices+":"+Xh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Xh(i.targets[n]);return e}function Xh(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function _u(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function oy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var ly=new He,xu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ey,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new ya(this.options.manager):this.textureLoader=new wa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new _r(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Fs(r,o,s),fi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Pi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=jh[s.type],o=Cr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new Bt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=jh[s.type],c=Cr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,y,m;if(f&&f!==h){let p=Math.floor(d/f),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,E=t.cache.get(T);E||(y=new c(o,p*f,s.count*f/u),E=new hr(y,f/u),t.cache.add(T,E)),m=new ur(E,l,d%f/u,g)}else o===null?y=new c(s.count*l):y=new c(o,d,s.count*l),m=new Bt(y,l,g);if(s.sparse!==void 0){let p=jh.SCALAR,T=Cr[s.sparse.indices.componentType],E=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,L=new T(a[1],E,s.sparse.count*p),R=new c(a[2],b,s.sparse.count*l);o!==null&&(m=new Bt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let D=0,N=L.length;D<N;D++){let S=L[D];if(m.setX(S,R[D*l]),l>=2&&m.setY(S,R[D*l+1]),l>=3&&m.setZ(S,R[D*l+2]),l>=4&&m.setW(S,R[D*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=ep[d.magFilter]||hn,u.minFilter=ep[d.minFilter]||Zn,u.wrapS=tp[d.wrapS]||Qi,u.wrapT=tp[d.wrapT]||Qi,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Kt&&u.minFilter!==hn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(y){let m=new Ot(y);m.needsUpdate=!0,d(m)}),t.load(Pi.resolveURL(h,r.path),g,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),fi(h,a),h.userData.mimeType=a.mimeType||oy(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new pr,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new ts,xn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return fn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[Je.KHR_MATERIALS_UNLIT]){let h=s[Je.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Ie(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Zt),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Lt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Wt);let u=r.alphaMode||Wh.OPAQUE;if(u===Wh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Wh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==nn&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new he(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==nn&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==nn){let h=r.emissiveFactor;o.emissive=new Ie().setRGB(h[0],h[1],h[2],Zt)}return r.emissiveTexture!==void 0&&a!==nn&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Lt)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),fi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Fs(s,h,r),h})}createUniqueName(e){let t=xt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return np(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=ay(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=np(new Dt,c,t),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?iy(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,g=u.length;f<g;f++){let y=u[f],m=a[f],p,T=c[f];if(m.mode===kn.TRIANGLES||m.mode===kn.TRIANGLE_STRIP||m.mode===kn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new ia(y,T):new ut(y,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===kn.TRIANGLE_STRIP?p.geometry=Vh(p.geometry,La):m.mode===kn.TRIANGLE_FAN&&(p.geometry=Vh(p.geometry,wr));else if(m.mode===kn.LINES)p=new aa(y,T);else if(m.mode===kn.LINE_STRIP)p=new Ai(y,T);else if(m.mode===kn.LINE_LOOP)p=new oa(y,T);else if(m.mode===kn.POINTS)p=new la(y,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&ry(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),fi(p,r),m.extensions&&Fs(s,p,m),t.assignFinalMaterial(p),h.push(p)}for(let f=0,g=h.length;f<g;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Fs(s,h[0],r),h[0];let d=new rt;r.extensions&&Fs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=h.length;f<g;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ut(Ls.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new As(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let d=new He;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ra(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],g=s.samplers[f.sampler],y=f.target,m=y.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,T=s.parameters!==void 0?s.parameters[g.output]:g.output;y.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",T)),c.push(g),u.push(y))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],g=h[2],y=h[3],m=h[4],p=[];for(let E=0,b=d.length;E<b;E++){let L=d[E],R=f[E],D=g[E],N=y[E],S=m[E];if(L===void 0)continue;L.updateMatrix&&L.updateMatrix();let x=n._createAnimationTracks(L,R,D,N,S);if(x)for(let v=0;v<x.length;v++)p.push(x[v])}let T=new xa(r,void 0,p);return fi(T,s),T})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,ly)});for(let f=0,g=h.length;f<g;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new dr:c.length>1?u=new rt:c.length===1?u=c[0]:u=new ht,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),fi(u,r),r.extensions&&Fs(n,u,r),r.matrix!==void 0){let h=new He;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new rt;n.name&&(r.name=s.createUniqueName(n.name)),fi(r,n),n.extensions&&Fs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof xn||d instanceof Ot)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];ss[r.path]===ss.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(ss[r.path]){case ss.weights:c=oi;break;case ss.rotation:c=li;break;case ss.translation:case ss.scale:c=ci;break;default:switch(n.itemSize){case 1:c=oi;break;case 2:case 3:default:c=ci;break}break}let u=s.interpolation!==void 0?ny[s.interpolation]:bs,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let g=new c(l[d]+"."+ss[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=_u(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof li?mu:Wl;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function cy(i,e,t){let n=e.attributes,s=new dn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new I(l[0],l[1],l[2]),new I(c[0],c[1],c[2])),o.normalized){let u=_u(Cr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new I,l=new I;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let y=_u(Cr[d.componentType]);l.multiplyScalar(y)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new _n;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function np(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=gu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return et.workingColorSpace!==Zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),fi(i,e),cy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?sy(i,e.targets,t):i})}var Xl,rp={white:["satin","#f7f5ef"],cream:["matte","#efe5cf"],stone:["matte","#ddd6c8"],plaza:["matte","#e7e1d3"],plazaLight:["matte","#f1ede4"],concrete:["matte","#cdcac2"],gravel:["matte","#dccfb3"],sand:["matte","#e9d9a6"],sandDark:["matte","#d4b77c"],asphalt:["matte","#5b6169"],darkPaving:["matte","#3a3346"],silver:["metal","#cfd6de"],steel:["metal","#8d96a0"],gold:["metal","#e8b931"],green:["satin","#0f8a4f"],domeGreen:["satin","#1f9d5c"],roofGreen:["matte","#2f6f4f"],glass:["glass","#7dd3fc"],deepGlass:["glass","#4f7fae"],darkGlass:["glass","#2c4a66"],window:["glass","#36597d"],windowLight:["glass","#8fb8d8"],water:["wet","#4fb3e6"],pool:["wet","#38c3e8"],lawn:["matte","#7fc15a"],lawnLight:["matte","#9ad06f"],lawnDry:["matte","#b9c983"],fairway:["matte","#6cc24a"],green2:["matte","#9be374"],hedge:["flat","#3f7f35"],leaf:["flat","#4f9a3c"],leafDark:["flat","#3c8434"],bush:["flat","#4d8f3a"],trunk:["matte","#7a5a3a"],palmTrunk:["matte","#8a6a45"],palmLeaf:["flat","#3f9b4a"],wood:["matte","#9a6b43"],mud:["matte","#b5784a"],thatch:["flat","#c99a52"],red:["satin","#d93a3a"],roofRed:["matte","#b45a3c"],roofTile:["matte","#9a4b33"],roofTin:["metal","#a3abb4"],track:["matte","#c2562a"],pitch:["matte","#4fae45"],seats:["ds","#1f9d5c"],wall:["ds","#e5e7eb"],canopy:["ds","#f8fafc"],granite:["flat","#8d8172"],graniteLight:["flat","#a39684"],graniteDark:["flat","#6c6156"],streak:["matte","#4a4038"],lamp:["glow","#fff3c4"],neonPink:["glow","#ff2d95"],neonGreen:["glow","#22e584"],neonBlue:["glow","#38bdf8"],dark:["matte","#2e1f45"],black:["satin","#1f2328"],beam:["beam","#fff7d6"],showGlass:["clear","#bfe6f5"],balGlass:["clear","#dff4ff"],carGlass:["glass","#1e293b"],carRed:["satin","#c81e1e"],carWhite:["satin","#f4f4f2"],carBlack:["satin","#1b1d22"],carSilver:["metal","#c0c6cc"],carBlue:["satin","#1f5fbf"],carGreen:["satin","#17803d"],elephant:["matte","#8e8e93"],giraffe:["matte","#e0b049"],lion:["matte","#c9954c"],mane:["flat","#7a4a1e"],uniBlue:["satin","#1e40af"],teal:["satin","#2a9d8f"],hubGreen:["satin","#22c55e"],solar:["glass","#1e3a8a"],tank:["satin","#1f2937"],stall0:["matte","#e5484d"],stall1:["matte","#2f7de1"],stall2:["matte","#22b573"],stall3:["matte","#f59e0b"],stall4:["matte","#8b5cf6"],stall5:["matte","#14b8a6"],flowerRed:["matte","#e63946"],flowerYellow:["matte","#ffd166"],flowerPink:["matte","#f472b6"]},_=(i,e,t,n)=>({g:"box",m:i,p:e,s:t,r:n}),Y=(i,e,t,n,s="cyl",r)=>({g:s,m:i,p:e,s:[t,n,t],r}),rn=(i,e,t,n,s="cone8",r)=>({g:s,m:i,p:e,s:[t,n,t],r}),Ui=(i,e,t)=>({g:"dome",m:i,p:e,s:t}),ke=(i,e,t,n,s)=>({g:i,m:e,p:t,s:n,r:s}),gt=(i,e,t,n,s,r,a)=>({g:"pyr",m:i,p:[e,t+a/2,n],s:[.7071*s,a,.7071*r]}),Ye=(i,e,t=0,n=0,s="lawn")=>_(s,[t,.01,n],[i,.02,e]),Pe=(i,e,t=0,n=0,s="plaza")=>_(s,[t,.02,n],[i,.04,e]),Bi=(i,e,t,n,s=.06,r="water")=>_(r,[t,s-.015,n],[i,.03,e]),$n=(i,e,t,n,s=.26)=>_("hedge",[i,s/2,e],[t,s,n]),le=(i,e,t=1,n="leaf")=>[Y("trunk",[i,.22*t,e],.06*t,.44*t,"cyl8"),ke("ico",n,[i,.74*t,e],[.44*t,.5*t,.44*t])],Oe=(i,e,t=1.3)=>[Y("palmTrunk",[i,t/2,e],.05,t,"cyl8"),rn("palmLeaf",[i,t+.04,e],.55,.26,"cone8",[Math.PI,0,0]),rn("palmLeaf",[i,t+.16,e],.34,.2,"cone8",[Math.PI,.4,0])],qt=(i,e,t=1.6)=>[Y("silver",[i,t/2,e],.022,t,"cyl8"),_("green",[i+.1,t-.15,e],[.2,.26,.015]),_("white",[i+.3,t-.15,e],[.2,.26,.015]),_("green",[i+.5,t-.15,e],[.2,.26,.015])],Yt=(i,e,t,n,s,r,a,o="window")=>{let l=[];for(let c=s;c<=r+1e-6;c+=a)l.push(_(o,[i,c,e],[t+.04,.13,n+.04]));return l},Gt=(i,e,t,n,s,r=0,a=.06,o="white")=>Array.from({length:t},(l,c)=>Y(o,[i+(e-i)*c/(t-1),r+s/2,n],a,s,"cyl8")),at=(i,e,t,n)=>[_(n,[i,.1,e],[.3,.14,.6],[0,t,0]),_("carGlass",[i,.21,e],[.26,.11,.32],[0,t,0])],Mt=(i,e,t,n=.6,s=0)=>[Y("silver",[i,s+n/2,e],.02,n,"cyl8"),rn(t,[i,s+n+.08,e],.42,.18)],ks=(i,e,t)=>[_("wood",[i,.16,e],[.9,.32,.5]),_(t,[i,.62,e],[1.05,.05,.8]),Y("wood",[i-.48,.31,e+.36],.025,.62,"cyl8"),Y("wood",[i+.48,.31,e+.36],.025,.62,"cyl8")],Ir=(i,e,t,n,s=.2,r="wood")=>[_(r,[(i+e)/2,s/2,t],[e-i,s,.04]),_(r,[(i+e)/2,s/2,n],[e-i,s,.04]),_(r,[i,s/2,(t+n)/2],[.04,s,n-t]),_(r,[e,s/2,(t+n)/2],[.04,s,n-t])],sp=i=>{let e=43758.5453*Math.sin(127.1*i+311.7);return e-Math.floor(e)},hy=["flowerRed","flowerYellow","flowerPink"],Xt=(i,e,t,n,s,r,a=.02)=>Array.from({length:s},(o,l)=>Ui(hy[(l+r)%3],[i+(sp(31*r+l)-.5)*t,a,e+(sp(17*r+l+.5)-.5)*n],[.12,.1,.12])),Oi=["stall0","stall1","stall2","stall3","stall4","stall5"],ap={abjAirport:(function(){let i=[Ye(39.8,18.8,0,0,"lawnDry")];i.push(_("asphalt",[0,.025,-6.8],[39,.03,2.4]));for(let e=-17;e<=17;e+=2)i.push(_("white",[e,.045,-6.8],[1,.01,.1]));for(let e of[-1,1])for(let t=0;t<6;t++)i.push(_("white",[18.6*e,.045,-7.65+.34*t],[1.1,.01,.16]));for(let e=-19;e<=19.01;e+=2)i.push(_("lamp",[e,.07,-8.1],[.08,.06,.08]),_("lamp",[e,.07,-5.5],[.08,.06,.08]));for(let e of(i.push(_("asphalt",[0,.025,-4.3],[38,.03,.9])),[-12,0,12]))i.push(_("asphalt",[e,.025,-5.2],[1,.03,1.1]));for(let e of(i.push(_("concrete",[0,.025,-.05],[38.6,.03,7.1])),i.push(_("concrete",[0,.06,5.2],[38.6,.12,3.4]),_("glass",[0,.82,5.1],[38,1.4,3.2]),_("white",[0,1.56,5.1],[38.2,.08,3.4]),_("green",[0,1.35,6.72],[38.1,.12,.04])),[-14.25,-4.75,4.75,14.25]))i.push(ke("halfCyl","white",[e,1.6,5.1],[.95,9.5,1.72],[0,0,Math.PI/2]));i.push(_("steel",[-3.6,.95,7],[.08,1.9,.08]),_("steel",[3.6,.95,7],[.08,1.9,.08])),i.push(_("asphalt",[0,.025,8.2],[24,.03,1.9]));for(let e=-11.6;e<=11.61;e+=.8)i.push(_("white",[e,.045,8.6],[.04,.01,.9]));for(let e=-12;e<=12;e+=3)i.push(...Oe(e,9.3,1.5));for(let e of(i.push(_("concrete",[-16.9,.06,8.2],[4,.12,2.4]),ke("halfCyl","silver",[-16.9,.12,8.2],[1.2,3.8,1.15],[0,0,Math.PI/2])),i.push(ke("cylT","white",[16.8,2.5,8.2],[.45,5,.45]),Y("deepGlass",[16.8,5.3,8.2],.95,.6,"cyl8"),Y("white",[16.8,5.66,8.2],1.05,.12,"cyl8"),Y("silver",[16.8,6.1,8.2],.03,.8,"cyl8")),[13.3,14.4]))i.push(Y("white",[e,.4,8.5],.45,.8));return i.push(...qt(-13.9,7.3,2.2)),i})(),abjAsoRock:[Ye(4.3,4.3,0,0,"lawnDry"),Pe(1.1,3.8,.9,.2,"gravel"),ke("rock","granite",[-1,.42,-1],[.95,.8,.8],[.3,.6,0]),ke("rock","graniteLight",[.4,.3,-1.5],[.6,.5,.5],[.5,.2,.3]),ke("rock","graniteDark",[-1.5,.25,.4],[.5,.4,.45],[.2,1,.1]),_("wood",[1,.3,1.1],[1.6,.06,1.1]),...[[.25,.6],[1.75,.6],[.25,1.6],[1.75,1.6]].map(([i,e])=>Y("wood",[i,.15,e],.04,.3,"cyl8")),_("wood",[1,.5,1.63],[1.6,.04,.04]),_("wood",[-.7,.45,1.8],[.06,.9,.06]),...le(1.7,-1.4),...le(-1.6,1.5,.9)],abjAssembly:[Ye(6.8,6.8),Pe(4.6,2.6,0,2.1),Bi(2.8,.9,0,2.3),_("stone",[0,.15,-.7],[5.8,.3,3.8]),_("stone",[0,.08,1.45],[3.2,.16,.5]),_("white",[0,.85,-.9],[4.6,1.1,2.8]),_("cream",[-2.75,.62,-.9],[.9,.64,2.4]),_("cream",[2.75,.62,-.9],[.9,.64,2.4]),...Gt(-2.1,2.1,13,.85,1.1,.3,.07),_("white",[0,1.46,.3],[4.9,.12,1.5]),Y("white",[0,1.75,-1],1.2,.5),Ui("domeGreen",[0,2,-1],[1.32,1.25,1.32]),Y("white",[0,3.36,-1],.13,.24,"cyl8"),rn("gold",[0,3.62,-1],.09,.3),_("stone",[0,.2,3.15],[2.9,.4,.16]),...qt(-2.9,2.6,1.8),...qt(2.3,2.6,1.8),$n(-3.2,-.6,.3,5.2),$n(3.2,-.6,.3,5.2),...le(-2.9,-3,1.1),...le(2.9,-3,1.1),...Xt(-2.9,1.4,.5,1.2,6,1),...Xt(2.9,1.4,.5,1.2,6,2)],abjSupremeCourt:[Ye(4.8,4.3),Pe(3.4,1.3,0,1.4),_("stone",[0,.1,-.35],[3.9,.2,2.6]),_("cream",[0,.72,-.5],[3.1,1.04,1.8]),...Gt(-1.35,1.35,8,.65,1.04,.2),_("cream",[0,1.3,.15],[3.3,.1,1.3]),gt("domeGreen",0,1.35,-.25,3.4,2.2,.55),rn("gold",[0,2,-.25],.06,.2),_("stone",[0,.17,1.95],[2.2,.34,.14]),...qt(-2.2,1.5,1.5),...le(2,-1.75),...le(-2,-1.75)],abjEagleSquare:(function(){let i=[Pe(7.8,5.8)];for(let e of[-.6,.4,1.4,2.4])i.push(_("white",[0,.045,e],[6.8,.01,.06]));for(let e=0;e<4;e++)i.push(_(e%2?"white":"green",[0,(e+1)*.16,-1.55-.36*e],[6.6,(e+1)*.32,.36]));for(let e of(i.push(_("green",[0,1.98,-2.15],[7,.1,1.7])),[-3.2,-1.6,0,1.6,3.2]))i.push(Y("white",[e,.98,-1.35],.05,1.95,"cyl8"));return i.push(_("white",[0,.72,-1.15],[1.4,.7,.5])),i.push(Y("white",[0,.6,1.9],.14,1.2),ke("sphere","gold",[0,1.3,1.9],[.14,.12,.2]),_("gold",[-.3,1.36,1.9],[.6,.05,.2],[0,0,.3]),_("gold",[.3,1.36,1.9],[.6,.05,.2],[0,0,-.3]),ke("sphere","gold",[0,1.44,2.02],[.06,.06,.08])),i.push(...qt(-3.6,2.5,2.2),...qt(2.9,2.5,2.2)),i})(),abjMosque:(function(){let i=[Ye(5.8,5.8),Pe(5,5,0,.1),_("cream",[0,.75,-.3],[3.2,1.5,3.2]),_("green",[0,.72,1.33],[2.5,.95,.06]),_("gold",[0,1.27,1.34],[2.6,.08,.06]),Y("cream",[0,1.75,-.3],1.2,.5),Ui("gold",[0,2,-.3],[1.36,1.45,1.36]),Y("gold",[0,3.55,-.3],.05,.25,"cyl8"),rn("gold",[0,3.78,-.3],.08,.22),Bi(1.8,.55,0,2.2)];for(let e of[-1,1])for(let t of[-1,1])i.push(Ui("gold",[1.3*e,1.5,-.3+1.3*t],[.3,.3,.3]));for(let e of[-2.35,2.35])for(let t of[-2.65,2.05])i.push(Y("white",[e,.25,t],.3,.5),ke("cylT","white",[e,2.45,t],[.19,4,.19]),Y("white",[e,3.3,t],.3,.09),Y("white",[e,4.2,t],.26,.07),rn("gold",[e,4.8,t],.21,.72));return i})(),abjChristianCentre:[Ye(5.8,5.8),Pe(4.2,1.5,0,2.15),_("white",[0,.9,.1],[3,1.8,3.2]),gt("white",0,1.8,.1,3,3.2,5.4),_("deepGlass",[0,1,1.73],[.7,1.6,.06]),_("deepGlass",[-1,.9,1.73],[.3,1.1,.06]),_("deepGlass",[1,.9,1.73],[.3,1.1,.06]),_("gold",[0,7.5,.1],[.09,.66,.09]),_("gold",[0,7.6,.1],[.4,.09,.09]),_("cream",[-2.15,.45,.4],[1.1,.9,2.2]),_("cream",[2.15,.45,.4],[1.1,.9,2.2]),gt("roofTile",-2.15,.9,.4,1.2,2.3,.35),gt("roofTile",2.15,.9,.4,1.2,2.3,.35),_("stone",[0,.06,1.95],[1.6,.12,.5]),_("stone",[0,.17,2.75],[2.4,.34,.14]),...le(-2.4,2.4),...le(2.4,2.4),...le(-2.4,-2.4,1.2),...le(2.4,-2.4,1.2)],abjSecretariat:(Xl=[Ye(7.8,4.8),Pe(7.2,.9,0,1.9)],[-2.85,-.95,.95,2.85].forEach((i,e)=>[-1.3,.55].forEach((t,n)=>{let s=(e+n)%2?2.7:2.2;Xl.push(_("cream",[i,s/2,t],[1.5,s,1.3]),...Yt(i,t,1.5,1.3,.55,s-.3,.5),_("white",[i,s+.04,t],[1.56,.08,1.36]))})),Xl.push(_("stone",[-1.9,.17,2.3],[2.4,.34,.14]),...qt(3.3,2.1,1.6)),Xl),abjHospital:[Ye(6.8,4.8),Pe(4,1.6,0,1.6),_("white",[0,1.25,-.9],[6,2.5,2.4]),...Yt(0,-.9,6,2.4,.6,2.1,.5,"windowLight"),_("teal",[0,2.56,-.9],[6.1,.12,2.5]),_("white",[0,.8,.75],[2.2,.08,.9]),Y("white",[-1,.4,1.15],.04,.8,"cyl8"),Y("white",[1,.4,1.15],.04,.8,"cyl8"),_("red",[0,1.95,.34],[.55,.16,.04]),_("red",[0,1.95,.34],[.16,.55,.04]),Y("concrete",[1.8,2.64,-.9],.7,.04),_("white",[1.62,2.67,-.9],[.06,.01,.5]),_("white",[1.98,2.67,-.9],[.06,.01,.5]),_("white",[1.8,2.67,-.9],[.36,.01,.06]),_("white",[-1.8,.22,1.75],[.7,.32,.36]),_("red",[-1.8,.26,1.75],[.72,.06,.37]),...le(-3,1.9),...le(3,1.9)],abjSilverbird:[Pe(5.8,4.8),_("deepGlass",[-.6,1.15,-.5],[3.8,2.3,2.8]),_("silver",[-.6,2.35,-.5],[3.9,.1,2.9]),_("silver",[-.6,1.25,.93],[3.9,.06,.06]),Y("glass",[1.7,1.45,.4],1,2.9),Y("silver",[1.7,2.95,.4],1.05,.1),_("red",[-.6,.045,1.7],[1,.01,1.5]),_("silver",[-.6,.95,1.25],[1.8,.07,.75]),Y("silver",[-1.4,.47,1.55],.03,.94,"cyl8"),Y("silver",[.2,.47,1.55],.03,.94,"cyl8"),...[1.2,1.8,2.3].flatMap(i=>[Y("gold",[-1.2,.15,i],.03,.3,"cyl8"),Y("gold",[0,.15,i],.03,.3,"cyl8")]),...Oe(-2.6,1.9)],abjCeddi:(function(){let i=[Pe(6.8,4.8),_("cream",[0,.95,-.9],[6.2,1.9,2.6]),_("glass",[0,.85,.42],[5.8,1.3,.04]),_("deepGlass",[0,1.4,.55],[1.6,2.8,.7]),_("white",[0,2.86,.55],[1.8,.12,.9]),_("white",[0,1.95,-.9],[6.4,.12,2.8]),Y("stone",[-2.2,.08,1.7],.5,.08),Y("water",[-2.2,.125,1.7],.42,.03),...Oe(2.9,1.9),...Oe(1.5,1.95),...at(-.6,1.8,0,"carWhite"),...at(.2,1.8,0,"carGreen")];for(let e=0;e<9;e++)Math.abs(-2.8+.7*e)>.9&&i.push(_("white",[-2.8+.7*e,.95,.47],[.08,1.9,.1]));return i})(),abjArtsVillage:(function(){let i=[Ye(5.8,4.8,0,0,"sand")];for(let[e,t]of[[-2.2,-1.4],[-.6,-1.6],[1,-1.5],[2.4,-.6],[-2.4,.4],[-.9,.1],[.8,.4]])i.push(Y("mud",[e,.28,t],.42,.56),rn("thatch",[e,.8,t],.58,.5),_("dark",[e,.2,t+.42],[.18,.32,.02]));for(let[e,t]of(i.push(_("stall3",[-1.6,.025,1.7],[.9,.01,.6]),_("stall4",[.2,.025,1.8],[.9,.01,.6]),_("stall1",[1.9,.025,1.7],[.9,.01,.6])),[[-1.8,1.6],[-1.4,1.8],[0,1.7],[.4,1.9],[1.7,1.6],[2.1,1.8]]))i.push(_("wood",[e,.11,t],[.1,.18,.1]));return i.push(Y("wood",[2.6,.12,1.2],.12,.24,"cyl8"),Y("mud",[2.3,.1,.9],.1,.2,"cyl8"),_("wood",[-.7,.45,2.2],[.06,.9,.06]),_("wood",[.7,.45,2.2],[.06,.9,.06]),...le(2.5,-2),...le(-2.6,2,.9)),i})(),abjBanex:(function(){let i=[Pe(5.8,4.8,0,0,"concrete"),_("cream",[0,.85,-.9],[5.4,1.7,2.4]),_("glass",[0,1.25,.32],[5.2,.55,.04]),_("red",[0,.78,.62],[5.4,.05,.6]),_("white",[0,1.75,-.9],[5.5,.1,2.5]),_("wood",[-2.2,.25,1.6],[.8,.5,.45]),_("black",[-2.2,.53,1.6],[.6,.06,.3]),...Mt(-1.4,1.7,"stall3"),...at(.2,1.8,Math.PI/2,"carSilver"),...at(1.2,1.8,Math.PI/2,"carGreen"),...at(2.2,1.8,Math.PI/2,"carBlack")];for(let e=0;e<6;e++)i.push(_(Oi[e],[-2.2+.88*e,.38,.32],[.78,.62,.04]));for(let e of[-1.6,0,1.6])i.push(_("silver",[e,1.9,-1.3],[.4,.2,.3]));return i})(),abjWuseMarket:(function(){let i=[Pe(6.8,4.8,0,0,"concrete"),_("cream",[0,.55,-1.4],[6,1.1,1.8]),gt("roofTin",0,1.1,-1.4,6.3,2.1,.7)];for(let e of[.35,1.55])for(let t=0;t<5;t++)i.push(...ks(-2.6+1.3*t,e,Oi[(t+3*(e>1))%6]));return i.push(...Mt(-3,2.15,"stall2"),...Mt(3,2.15,"stall0")),i})(),abjTranscorp:[Ye(5.8,4.8),Pe(5.6,1.6,0,1.5),_("cream",[0,.35,-.5],[5,.7,2.8]),_("white",[-.5,3.6,-.9],[3.4,5.8,1.4]),...Yt(-.5,-.9,3.4,1.4,1.1,6.1,.45),_("white",[-.5,6.62,-.9],[2.8,.24,1]),_("pool",[1.6,.72,0],[1.4,.04,1.2]),_("white",[-.5,.9,1.3],[2.2,.08,.9]),Y("white",[-1.4,.45,1.65],.04,.9,"cyl8"),Y("white",[.4,.45,1.65],.04,.9,"cyl8"),...Oe(-2.6,1.9),...Oe(2.6,1.9),...Oe(2.5,-1.9)],abjTechHub:[Pe(5.8,4.8,0,0,"plazaLight"),_("darkGlass",[-.7,1.6,-.6],[3.4,3.2,2.4]),_("white",[.9,2.5,-.3],[2.6,1,2.6]),Y("white",[1.9,1,.7],.08,2,"cyl8"),_("hubGreen",[-.7,3.25,-.6],[3.5,.1,2.5]),...[[-1.8,-1.2],[-1,-.2],[-.2,-1.3],[-1.6,.2]].map(([i,e])=>ke("ico","bush",[i,3.42,e],[.25,.2,.25])),...[-.2,.6,1.4].map(i=>_("solar",[i+.5,3.08,-.3],[.6,.04,.9],[.3,0,0])),_("glass",[-.7,.5,.62],[2,.9,.04]),_("wood",[1.8,.15,1.8],[1,.06,.3]),...le(-2.5,1.9),...le(2.5,-1.9)],abjNovare:(function(){let i=[Pe(7.8,6.8),_("asphalt",[0,.045,2.45],[7,.01,1.6]),_("white",[0,1,-1.4],[7,2,3.4]),ke("halfCyl","glass",[0,1,.3],[1.3,2,3.3],[0,-Math.PI/2,0]),ke("halfCyl","white",[0,2.08,.3],[1.45,.12,3.45],[0,-Math.PI/2,0]),_("white",[0,2.06,-1.4],[7.1,.12,3.5]),_("silver",[2.3,1.5,-2.2],[2.2,3,1.6]),_("dark",[0,.45,1.62],[1.2,.9,.04]),...Oe(-3.6,1.4),...Oe(3.6,1.4),...qt(-3.7,3.1,1.8)];for(let e=0;e<9;e++)i.push(_("white",[-3.2+.8*e,.055,2.45],[.04,.01,1.2]));return[-2.8,-1.2,.4,2,2.8].forEach((e,t)=>i.push(...at(e,2.45,0,["carWhite","carBlack","carGreen","carSilver","carRed"][t]))),i})(),abjLounge:[Pe(4.8,4.3,0,0,"darkPaving"),_("dark",[0,.85,-.6],[3.8,1.7,2.4]),_("neonPink",[0,1.5,.62],[3.6,.06,.04]),_("neonGreen",[0,.2,.62],[3.6,.04,.04]),_("neonPink",[-1.85,.85,.62],[.05,1.3,.04]),_("neonPink",[1.85,.85,.62],[.05,1.3,.04]),_("gold",[0,.95,.95],[1.4,.06,.7]),_("red",[0,.045,1.4],[.8,.01,1.2]),...[[-.55,1.1],[.55,1.1],[-.55,1.7],[.55,1.7]].map(([i,e])=>Y("gold",[i,.18,e],.03,.36,"cyl8")),...Oe(-2,1.6),...Oe(2,1.6),...Mt(-1.3,1.6,"stall4"),...Mt(1.3,1.6,"stall0")],abjUnityFountain:(function(){let i=[Ye(5.8,5.8),Y("plaza",[0,.02,0],2.85,.04),Y("stone",[0,.13,0],1.9,.22),Y("water",[0,.25,0],1.75,.02),Y("white",[0,.7,0],.2,.9),Y("white",[0,1.18,0],.45,.06),_("stone",[0,.17,2.68],[2.2,.34,.12]),...Xt(-2.3,-2.3,.9,.9,6,3),...Xt(2.3,-2.3,.9,.9,6,4),...Xt(-2.3,2.3,.9,.9,6,5),...Xt(2.3,2.3,.9,.9,6,6)];for(let e=0;e<18;e++){let t=e/18*Math.PI*2,n=2.5*Math.cos(t),s=2.5*Math.sin(t);i.push(Y("silver",[n,.75,s],.025,1.5,"cyl8"),_(e%3==0?"green":Oi[e%6],[n+.13,1.36,s],[.26,.18,.015]))}return i})(),abjMillenniumPark:(function(){let i=[Ye(9.8,7.8,0,0,"lawnLight")],e=[[-4.6,-.6],[-.8,-1.6],[2.2,-.4],[4.4,1.8]];for(let t=0;t<3;t++){let[n,s]=e[t],[r,a]=e[t+1];i.push(_("water",[(n+r)/2,.035,(s+a)/2],[Math.hypot(r-n,a-s),.03,.6],[0,Math.atan2(-(a-s),r-n),0]))}i.push(Y("water",[-.8,.035,-1.6],.3,.03),Y("water",[2.2,.035,-.4],.3,.03),Y("water",[4.4,.035,1.8],.7,.03)),i.push(_("gravel",[0,.025,2.9],[9.2,.03,.4]),_("gravel",[-2.2,.025,.4],[.4,.03,6.6]),_("white",[-2.2,.085,-1.23],[.55,.05,1])),i.push(Y("stone",[-4,.04,-2.3],.85,.06));for(let t=0;t<6;t++){let n=t/6*Math.PI*2;i.push(Y("white",[-4+.65*Math.cos(n),.48,-2.3+.65*Math.sin(n)],.05,.9,"cyl8"))}for(let[t,n,s]of(i.push(Ui("white",[-4,.92,-2.3],[.78,.55,.78])),[[-2.9,-3.4,1.1],[-.6,-3.2,1.2],[1.4,-3.3,1],[3.4,-3.1,1.2],[4.4,-1.6,1],[-4.4,1.2,1.1],[-3.6,3.5,1],[.8,1.6,1.1],[2.6,1.6,.9],[-.8,1.2,1],[4.2,3.4,1],[1.8,3.5,1.1]]))i.push(...le(t,n,s,s>1.05?"leafDark":"leaf"));return i.push(...Xt(-.5,2.45,3,.4,10,7),...Xt(3,2.45,2,.4,7,8),_("stone",[-3.2,.17,3.7],[2.6,.34,.14])),i})(),abjGolf:(function(){let i=[Ye(10.8,8.8,0,0,"fairway")];for(let[e,t,n]of[[-3.5,-2.6,1],[1,-3,.9],[3.6,.4,1]])i.push(Y("green2",[e,.025,t],n,.01),Y("white",[e,.4,t],.015,.8,"cyl8"),_("red",[e+.12,.72,t],[.24,.15,.01]));for(let[e,t,n,s]of[[-2,-1.4,.55,.32],[2.4,-2.2,.45,.3],[1.6,1.6,.5,.35],[-4.4,-.8,.4,.3]])i.push(ke("cyl","sand",[e,.025,t],[n,.01,s]));for(let[e,t]of(i.push(ke("cyl","water",[-1.6,.035,2],[1.6,.03,.9])),i.push(_("green2",[-4.6,.025,3.4],[.7,.01,.45]),_("green2",[-.2,.025,3.6],[.7,.01,.45])),i.push(_("cream",[3.4,.5,3],[3.2,1,1.6]),gt("roofGreen",3.4,1,3,3.4,1.8,.45),_("wood",[3.4,.04,4.05],[3,.08,.5]),...Gt(2.1,4.7,5,4.2,.9,.08,.04)),i.push(_("white",[1.3,.12,4],[.3,.16,.45]),_("white",[.8,.12,4],[.3,.16,.45]),_("stone",[-4.2,.25,4.05],[2.2,.5,.2])),[[-5.1,-4.1],[-3,-4.15],[-.8,-4.1],[1.6,-4.15],[3.6,-4.1],[5.1,-3],[5.1,-1.2],[5.1,1.2],[-5.1,-2],[-5.1,.4],[-5.1,2.2],[.6,0],[-2.8,.8]]))i.push(...le(e,t,1.1,"leafDark"));return i})(),abjClub:[Pe(5.8,4.8,0,0,"darkPaving"),_("black",[0,1.1,-.7],[5,2.2,2.6]),_("neonPink",[0,2.12,.62],[5,.06,.04]),_("neonBlue",[-2.48,1.1,.62],[.06,2,.04]),_("neonBlue",[2.48,1.1,.62],[.06,2,.04]),_("gold",[0,.9,1],[1.8,.07,.8]),Y("gold",[-.8,.45,1.35],.03,.9,"cyl8"),Y("gold",[.8,.45,1.35],.03,.9,"cyl8"),_("red",[0,.045,1.6],[1,.01,1.6]),...[1.2,1.7,2.2].flatMap(i=>[Y("gold",[-.65,.18,i],.03,.36,"cyl8"),Y("gold",[.65,.18,i],.03,.36,"cyl8")]),Y("silver",[-2,2.35,-1.6],.18,.3),Y("silver",[2,2.35,-1.6],.18,.3),rn("beam",[-2.28,3.77,-1.6],.45,2.6,"cone8",[Math.PI,0,-.22]),rn("beam",[2.28,3.77,-1.6],.45,2.6,"cone8",[Math.PI,0,.22]),...at(-2.1,1.7,.3,"carBlack"),...at(2.1,1.7,-.3,"carWhite")],abjRooftop:(function(){let i=[Pe(4.3,4.3,0,0,"plazaLight"),_("white",[0,3.1,-.3],[3,6.2,3]),_("deepGlass",[0,3.1,1.22],[2.4,5.6,.04]),_("deepGlass",[1.52,3.1,-.3],[.04,5.6,2.4]),_("wood",[0,6.26,-.3],[3.1,.12,3.1]),_("balGlass",[0,6.52,1.22],[3.1,.4,.03]),_("balGlass",[-1.53,6.52,-.3],[.03,.4,3.1]),_("balGlass",[1.53,6.52,-.3],[.03,.4,3.1]),_("balGlass",[0,6.52,-1.82],[3.1,.4,.03]),_("pool",[-.6,6.335,-.9],[1.4,.03,1]),_("dark",[.8,6.55,-1.3],[1,.45,.35]),_("lamp",[0,6.95,.6],[2.8,.03,.03]),_("gold",[0,.7,1.65],[1.6,.06,.8]),Y("gold",[-.7,.35,1.95],.03,.7,"cyl8"),Y("gold",[.7,.35,1.95],.03,.7,"cyl8"),...Oe(-1.8,1.85,1.1),...Oe(1.8,1.85,1.1)];for(let[e,t,n]of[[-.9,.5,"stall0"],[.5,.5,"stall3"],[1,-.4,"stall5"]])i.push(...Mt(e,t,n,.5,6.32));return i})(),abjJabiLake:(function(){let i=[Pe(6.8,4.8),_("asphalt",[1.1,.045,1.65],[4.2,.01,1.3]),_("cream",[.6,.65,-1],[5.4,1.3,2.4]),_("glass",[.6,.6,.22],[4.8,.9,.04]),_("white",[.6,1.36,-1],[5.6,.12,2.6]),Y("glass",[-.6,1,-.2],.75,2),Y("white",[-.6,2.05,-.2],.8,.1),_("wood",[-3.4,.06,-.6],[1.6,.04,.8]),...Oe(-2.7,1.6),...Oe(-2.7,-1.9),...Oe(3.1,1.95)];for(let e=0;e<6;e++)i.push(_("white",[-.7+.75*e,.055,1.65],[.04,.01,1]));return[-.3,.45,1.95,2.7].forEach((e,t)=>i.push(...at(e,1.65,0,["carSilver","carWhite","carBlue","carGreen"][t]))),i})(),abjZoo:[Ye(6.8,4.8),_("gravel",[0,.025,.4],[6.4,.03,.5]),_("gravel",[0,.025,1.4],[.5,.03,2]),_("sandDark",[-2.1,.025,-1.3],[2.2,.01,1.9]),_("sandDark",[.3,.025,-1.3],[2.2,.01,1.9]),_("sandDark",[2.5,.025,-1.3],[1.7,.01,1.9]),...Ir(-3.2,-1,-2.25,-.35),...Ir(-.8,1.4,-2.25,-.35),...Ir(1.65,3.35,-2.25,-.35),ke("sphere","elephant",[-2.2,.42,-1.3],[.42,.3,.28]),ke("sphere","elephant",[-1.75,.52,-1.3],[.18,.18,.18]),Y("elephant",[-1.6,.32,-1.3],.05,.3,"cyl8",[0,0,.3]),_("elephant",[-1.82,.54,-1.3],[.04,.22,.34]),...[[-2.45,-1.45],[-2.45,-1.15],[-1.95,-1.45],[-1.95,-1.15]].map(([i,e])=>Y("elephant",[i,.12,e],.07,.24,"cyl8")),_("giraffe",[.3,.62,-1.3],[.5,.28,.22]),...[[.1,-1.38],[.1,-1.22],[.5,-1.38],[.5,-1.22]].map(([i,e])=>_("giraffe",[i,.25,e],[.05,.5,.05])),_("giraffe",[.58,1,-1.3],[.09,.62,.09],[0,0,-.35]),_("giraffe",[.74,1.32,-1.3],[.2,.09,.09]),_("lion",[2.4,.24,-1.2],[.5,.22,.22]),ke("sphere","mane",[2.72,.3,-1.2],[.17,.17,.17]),ke("sphere","lion",[2.84,.3,-1.2],[.1,.1,.1]),...[[2.2,-1.3],[2.2,-1.1],[2.6,-1.3],[2.6,-1.1]].map(([i,e])=>_("lion",[i,.08,e],[.06,.16,.06])),Y("water",[-2.4,.035,1.6],.7,.03),ke("sphere","white",[-2.5,.08,1.5],[.08,.06,.12]),ke("sphere","white",[-2.2,.08,1.75],[.08,.06,.12]),_("red",[2.2,.35,1.6],[.25,.04,.9],[.5,0,0]),_("stall1",[2.2,.4,1.12],[.3,.8,.1]),Y("stall3",[1.1,.06,1.8],.35,.06),_("stall2",[1.1,.25,1.8],[.04,.3,.6]),_("stall2",[-.6,.55,2.3],[.16,1.1,.16]),_("stall2",[.6,.55,2.3],[.16,1.1,.16]),_("stall3",[0,1.15,2.3],[1.5,.14,.18]),...le(-3.1,.9),...le(3.1,.6),...le(-1,2,.9)],abjZumaRock:[Ye(4.8,4.8,0,0,"lawnDry"),Pe(1.2,4.2,1.2,.2,"gravel"),Y("mud",[-1.2,.3,-1.1],.5,.6),rn("thatch",[-1.2,.85,-1.1],.68,.55),_("wood",[-1,.25,1.1],[1,.5,.5]),_("black",[-1,.53,1.1],[.7,.06,.32]),...Mt(-1.7,1.5,"stall3"),ke("rock","granite",[1.6,.35,-1.5],[.7,.6,.6],[.3,.5,.1]),ke("rock","graniteLight",[-2,.25,.4],[.5,.4,.45],[.1,.8,.2]),_("wood",[2,.2,1.5],[.9,.06,.3]),_("wood",[.4,.45,2.2],[.06,.9,.06]),...le(1.9,.2),...le(-2,-2)],abjMotors:(function(){let i=[Pe(8.8,5.3,0,0,"plazaLight"),_("white",[0,.06,-.8],[7.4,.12,3]),_("showGlass",[0,.95,-.8],[7.2,1.66,2.8]),_("white",[0,1.86,-.8],[7.8,.16,3.4]),_("silver",[0,1.98,-.8],[7,.06,.25]),...[-3.55,3.55].flatMap(e=>[Y("white",[e,.95,.55],.06,1.66,"cyl8"),Y("white",[e,.95,-2.15],.06,1.66,"cyl8")]),_("silver",[2.6,.7,-2.45],[2.6,1.4,.5]),Y("silver",[-3.4,.06,1.65],.55,.08)];for(let[e,t]of[[-4,0],[-1.3,2],[1.4,3],[4.1,5]])i.push(Y("silver",[e,.8,2.5],.02,1.6,"cyl8"),_(Oi[t],[e+.12,1.15,2.5],[.22,.9,.01]));return i})(),abjStadium:(function(){let i=[Y("plaza",[0,.02,0],4.1,.04),ke("bowlWall","wall",[0,.65,0],[3.8,1.3,3.8]),ke("bowlSeats","seats",[0,.62,0],[3.7,1.16,3.7]),Y("track",[0,.05,0],2.45,.04),_("pitch",[0,.075,0],[2.7,.02,1.75]),_("white",[0,.09,0],[.04,.01,1.75]),_("white",[-1.2,.09,0],[.04,.01,.8]),_("white",[1.2,.09,0],[.04,.01,.8]),ke("ring","canopy",[0,1.42,0],[3.95,3.95,1],[-Math.PI/2,0,-.35])];for(let e=0;e<=6;e++){let t=-.35+e/6*Math.PI*1.15;i.push(Y("white",[3.85*Math.cos(t),.71,-(3.85*Math.sin(t))],.05,1.42,"cyl8"))}for(let[e,t]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let n=2.85*e,s=2.85*t;i.push(Y("steel",[n,1.6,s],.06,3.2,"cyl8"),_("lamp",[n,3.25,s],[.6,.3,.12],[0,Math.atan2(-n,-s),0]))}return i})(),abjMagicLand:[Ye(5.3,5.3,0,0,"lawnLight"),_("gravel",[0,.025,.4],[5,.03,.6]),_("gravel",[.2,.025,1.6],[.6,.03,2]),ke("torus","track",[1.5,1,-1.5],[.75,.75,.75]),_("track",[1.5,.08,-1.5],[2.2,.06,.12]),_("track",[.2,.55,-2.1],[1.5,.06,.12],[0,0,.55]),Y("silver",[.9,.5,-1.5],.04,1,"cyl8"),Y("silver",[2.1,.5,-1.5],.04,1,"cyl8"),Y("silver",[-.3,.3,-2.1],.04,.6,"cyl8"),_("concrete",[-1.6,.05,1.6],[1.6,.06,1.4]),_("stall4",[-1.6,.9,1.6],[1.7,.06,1.5]),...[[-2.35,.95],[-.85,.95],[-2.35,2.25],[-.85,2.25]].map(([i,e])=>Y("silver",[i,.45,e],.03,.9,"cyl8")),_("stall0",[-2,.14,1.4],[.3,.12,.42],[0,.6,0]),_("stall1",[-1.3,.14,1.9],[.3,.12,.42],[0,-.4,0]),_("stall2",[-1.7,.14,2],[.3,.12,.42],[0,1.4,0]),_("neonPink",[-.5,.55,2.55],[.12,1.1,.12]),_("neonPink",[.9,.55,2.55],[.12,1.1,.12]),...le(-2.3,-.4)],abjCityGate:(function(){let i=[Pe(4.2,4.2),_("lawn",[-1.3,.045,1.3],[1.2,.01,1.2]),_("lawn",[1.3,.045,1.3],[1.2,.01,1.2]),...Xt(-1.3,1.3,1,1,6,9,.05),...Xt(1.3,1.3,1,1,6,10,.05)];for(let e of[-.6,.6]){for(let t of[-6.7,-1.2999999999999998])i.push(_("white",[e,1.5,t],[.46,3,.46]));i.push(_("white",[e,3.15,-4],[.46,.34,5.86]),_("green",[e,2.88,-4],[.5,.12,5.5]))}for(let e of[-6.7,-1.2999999999999998])i.push(_("stone",[0,.14,e],[1.9,.44,.9]),_("white",[0,3.15,e],[1.66,.3,.46]));return i.push(gt("white",0,3.32,-4,1.7,2.4,1),rn("gold",[0,4.5,-4],.12,.4),_("stone",[0,.22,1.95],[2.6,.44,.14]),...qt(-1.9,1.5,2.2),...qt(1.1,1.5,2.2)),i})(),abjUniAbuja:[Ye(9.8,8.8),...le(-4.5,-3.8),...le(0,-3.9,.9),...le(4.5,-3.8),...le(-4.5,1.5,.9),...le(4.5,1.5,.9),...le(-4.4,4,.9),...le(4.4,4,.9),_("gravel",[0,.025,.6],[7,.03,.5]),_("gravel",[0,.025,2.1],[.5,.03,2.6]),_("white",[0,1.4,-2],[3.2,2.8,1.6]),...Yt(0,-2,3.2,1.6,.6,2.4,.6,"window"),_("uniBlue",[0,2.9,-2],[3.3,.18,1.7]),...Gt(-.9,.9,4,-1.05,1),_("white",[0,1.05,-.95],[2.1,.1,.4]),_("cream",[-2.9,.6,-1.6],[1.6,1.2,2.4]),gt("roofRed",-2.9,1.2,-1.6,1.8,2.6,.5),_("cream",[2.9,.6,-1.6],[1.6,1.2,2.4]),gt("roofRed",2.9,1.2,-1.6,1.8,2.6,.5),_("windowLight",[2.6,.7,1.6],[2,1.4,1.4]),_("white",[2.6,1.44,1.6],[2.1,.08,1.5]),_("pitch",[-2.4,.035,1.8],[2.6,.03,1.8]),_("white",[-2.4,.055,1.8],[.04,.01,1.8]),_("white",[-3.62,.25,1.8],[.04,.5,.6]),_("white",[-1.18,.25,1.8],[.04,.5,.6]),_("uniBlue",[-1,.5,3.2],[.3,1,.3]),_("uniBlue",[1,.5,3.2],[.3,1,.3]),_("white",[0,1.05,3.2],[2.3,.18,.3]),...le(-3.5,-.2),...le(3.6,.2),...le(-3.6,3),...le(3.5,3),...le(.9,-.2,.9)],abjGwagwalada:[Pe(6.8,4.8,0,0,"concrete"),_("cream",[-1.6,.6,-1.2],[3,1.2,1.8]),gt("roofTile",-1.6,1.2,-1.2,3.2,2,.6),...Gt(-2.7,-.5,5,-.2,.9),_("white",[1.6,1.3,-1.4],[.8,2.6,.8]),Y("cream",[1.6,2.2,-.99],.25,.04,"cyl",[Math.PI/2,0,0]),_("black",[1.6,2.24,-.96],[.03,.18,.01]),gt("roofTile",1.6,2.6,-1.4,1,1,.5),...ks(-2.6,1.1,"stall0"),...ks(-1.3,1.1,"stall3"),...ks(0,1.1,"stall5"),...at(1.4,1.9,Math.PI/2,"carGreen"),...at(2.4,1.9,Math.PI/2,"carGreen"),...at(1.4,1.1,Math.PI/2,"carWhite"),...le(-3,1.9,1.1),...le(3,-1.6,1.1)],home_abjKubwa:[Ye(4.3,4.3),Pe(1,1.9,1.2,1.15,"concrete"),_("cream",[-.4,.45,-.5],[2.4,.9,1.8]),gt("roofRed",-.4,.9,-.5,2.7,2.1,.65),_("dark",[-.4,.3,.42],[.36,.6,.04]),_("window",[-1.1,.5,.42],[.4,.3,.04]),_("window",[.3,.5,.42],[.4,.3,.04]),_("concrete",[1.4,.42,-1.3],[.45,.84,.45]),Y("tank",[1.4,1.1,-1.3],.28,.5),_("cream",[-2.08,.22,0],[.12,.44,4.2]),_("cream",[2.08,.22,0],[.12,.44,4.2]),_("cream",[0,.22,-2.08],[4.2,.44,.12]),_("cream",[-1.1,.22,2.08],[2,.44,.12]),_("black",[1.2,.2,2.08],[1,.4,.06]),...at(1.2,1.2,0,"carGreen"),...le(-1.5,1.3,.9)],home_abjGwarinpa:[Ye(4.3,4.3),Pe(1,1.9,1.2,1.15,"concrete"),_("cream",[-.4,.8,-.5],[2.4,1.6,1.8]),...Yt(-.4,-.5,2.4,1.8,.5,1.2,.7,"window"),_("white",[-.4,.95,.52],[1.4,.06,.4]),_("balGlass",[-.4,1.08,.72],[1.4,.22,.02]),gt("roofTile",-.4,1.6,-.5,2.7,2.1,.6),_("stone",[-2.08,.25,0],[.12,.5,4.2]),_("stone",[2.08,.25,0],[.12,.5,4.2]),_("stone",[0,.25,-2.08],[4.2,.5,.12]),_("stone",[-1.1,.25,2.08],[2,.5,.12]),...at(1.2,1.2,0,"carSilver"),...le(-1.6,1.4,.9)],home_abjWuse2:(function(){let i=[Ye(3.8,3.8),Pe(3.6,.9,0,1.4,"concrete"),_("white",[0,1.15,-.5],[3,2.3,1.8]),_("silver",[0,2.34,-.5],[3.1,.08,1.9])];for(let e of[.55,1.15,1.75])i.push(_("windowLight",[0,e+.18,.42],[2.6,.3,.04]),_("white",[0,e,.55],[2.6,.06,.3]),_("balGlass",[0,e+.13,.69],[2.6,.22,.02]));return i.push(...at(-.9,1.4,Math.PI/2,"carBlue"),...at(.6,1.4,Math.PI/2,"carWhite"),...le(-1.55,-1.55,.8),...le(1.55,-1.55,.8)),i})(),home_abjMaitama:[Ye(4.3,4.3,0,0,"lawnLight"),_("white",[-.5,.75,-.7],[2.6,1.5,1.8]),_("white",[.95,.45,-.4],[1.2,.9,1.4]),_("white",[-.5,1.54,-.7],[2.7,.08,1.9]),_("white",[.95,.94,-.4],[1.3,.08,1.5]),_("glass",[-.5,.75,.22],[2.2,1.1,.04]),_("plazaLight",[.9,.025,1.15],[1.9,.03,1.3]),Bi(1.4,.8,.9,1.15,.055,"pool"),$n(-2,0,.2,4),$n(2,0,.2,4),$n(0,-2,4,.2),...Oe(-1.4,1.4,1.3),...Oe(1.8,-1.6,1.2),...Xt(-.8,1.6,1,.4,6,11)],home_abjAsokoro:[Ye(4.3,4.3,0,0,"lawnLight"),Pe(3.2,1,0,1.6,"plazaLight"),_("cream",[0,.9,-.8],[3.2,1.8,1.8]),...Gt(-.8,.8,4,.3,1.5),_("white",[0,1.58,.35],[2,.12,.7]),gt("white",0,1.64,.35,2,.7,.35),gt("roofTile",0,1.8,-.8,3.5,2.1,.7),Y("stone",[0,.1,1.6],.4,.12),Y("water",[0,.17,1.6],.34,.02),Bi(1,.6,1.5,-1.6,.05,"pool"),...Oe(-1.8,1.6,1.4),...Oe(1.8,1.6,1.4),_("stone",[-1.6,.35,2.05],[.3,.7,.3]),_("stone",[1.6,.35,2.05],[.3,.7,.3]),...at(-1,1.6,Math.PI/2,"carBlack")]},op=[ke("rock","granite",[0,1.8,0],[9,6.8,6.8],[.2,.5,.1]),ke("rock","graniteLight",[-2.9,2.3,2.7],[6.1,8.3,5.2],[.4,1.2,0]),ke("rock","graniteDark",[4.3,1.3,-3.6],[5.6,5,4.9],[.1,2.2,.3]),ke("rock","granite",[-5.6,.2,-1.1],[4,3.1,3.8],[.6,.3,.2]),ke("rock","graniteDark",[2.9,.4,4.7],[4,2.9,3.2],[.3,.9,.5]),ke("rock","graniteLight",[6.8,.5,1.8],[3.6,4,3.6],[.7,.4,.1]),...[[-8.2,4,1],[-5,6.9,.9],[-.6,7.6,1],[4.8,7,.8],[8.4,4.6,.9],[-9,.6,1.1],[-8.2,-3.8,1],[9.2,-2,.9]].map(([i,e,t])=>Ui("bush",[i,0,e],[t,.8*t,t]))],lp=[ke("mono","granite",[0,5,0],[5.8,10,6.6]),Ui("graniteLight",[0,9.95,0],[4.55,3,5.2]),...[[-1.9,6.2,.22],[.1,6.8,.04],[2,5.9,-.2]].map(([i,e,t])=>_("streak",[i,e,Math.sqrt(33.0625-i*i)-.05],[.44,5.2,.16],[-.12,0,t])),_("streak",[5.2,6.4,1.2],[.16,4.4,.6],[0,0,.12]),...[[6,4,1.8],[-6.2,2.8,1.6],[3.6,6.8,1.2],[-4,6.4,1.4],[6.8,-3,1.6]].map(([i,e,t],n)=>ke("rock",n%2?"graniteDark":"granite",[i,.3*t,e],[t,.7*t,t],[n,.7*n,0])),...[[-7.2,.4,1.2],[7.8,.8,1.1],[1.2,7.8,1],[-2,8,.9],[5.4,6,1]].map(([i,e,t])=>Ui("bush",[i,0,e],[t,.8*t,t]))],cp=[Ye(6.2,4.6),_("stone",[0,.08,.2],[4.4,.16,2.6]),_("white",[0,.7,-.2],[3.6,1.1,1.6]),_("green",[0,1.3,-.2],[3.7,.1,1.7]),Ui("domeGreen",[0,1.35,-.2],[.55,.5,.55]),...Gt(-1.5,1.5,7,.7,1,.16,.05),...qt(2.2,1.6,2),$n(0,-2.15,6,.25),$n(-3,0,.25,4.3),$n(3,0,.25,4.3),Y("stone",[0,.1,1.7],.45,.12),Y("water",[0,.17,1.7],.38,.02)];var up,In=Math.PI;function yu(i,e,t,n,s){let r=[Pe(i-.2,e-.2,0,0,"plazaLight"),_("white",[0,.06,-.7],[i-1.4,.12,.5*e]),_(t,[0,.9,-.7],[i-1.6,1.56,.5*e-.2]),_("white",[0,1.76,-.7],[i-1,.16,.5*e+.4]),_(n,[0,1.88,-.7+.25*e+.15],[i-1.2,.06,.06])];for(let a of[-(i-1.6)/2,(i-1.6)/2])r.push(Y("white",[a,.9,-.7+.25*e],.05,1.56,"cyl8"));for(let[a,o]of(s.slice(0,3).forEach((l,c)=>r.push(...at(-1.6+1.6*c,-.8,.5,l))),s.slice(3).forEach((l,c)=>r.push(...at(-(i/2)+1+1.1*c,e/2-.9,.35,l))),[[-(i/2)+.4,1],[i/2-.4,3]]))r.push(Y("silver",[a,.7,e/2-.4],.02,1.4,"cyl8"),_(Oi[o],[a+.11,1,e/2-.4],[.2,.8,.01]));return r}function dp(i,e,t){return[Ye(i-.2,e-.2,0,0,"lawnLight"),_("white",[-.4,.55,-.6],[i-1.8,1.1,.5*e]),_(t,[-.4,1.12,-.6],[i-1.7,.08,.5*e+.1]),_("wood",[-.4,.5,-.6+.25*e+.01],[.4*i,.8,.02]),Bi(1.2,.7,i/2-1.1,.6,.055,"pool"),_("wood",[i/2-1.1,.025,1.15],[1.4,.03,.3]),$n(0,e/2-.2,i-.6,.2),...Oe(-(i/2)+.5,1,1.2),...Oe(i/2-.4,-(e/2)+.5,1.3),...Xt(-.6,1,1.4,.4,6,27)]}function fp(i,e,t){return[Pe(i-.2,e-.2,0,0,"concrete"),_("concrete",[0,.8,-.5],[i-1,1.6,.55*e]),_("glass",[0,.75,-.5+.275*e+.01],[i-1.4,1.1,.02]),_(t,[0,1.62,-.5],[i-.9,.1,.55*e+.1]),_("black",[-(i/2)+1.2,.35,-.5+.275*e+.03],[.5,.3,.02]),...[-.6,-.3,0,.3].map(n=>Y("steel",[n+i/2-1.4,.12,e/2-.5],.1,.02,"cyl8",[In/2,0,0])),...at(-(i/2)+1,e/2-.6,In/2,"carSilver"),...le(i/2-.4,-(e/2)+.5,.9)]}var pp={abjIdu:(function(){let i=[Pe(9.8,4.8,0,0,"concrete"),_("gravel",[0,.05,-1.6],[9.6,.02,1])];for(let e of[-1.8,-1.4])i.push(_("steel",[0,.075,e],[9.6,.03,.05]));for(let e of[-3.1,-.4,2.3])i.push(_("white",[e,.42,-1.6],[2.5,.6,.6]),_("green",[e,.28,-1.295],[2.5,.1,.02]),_("window",[e,.53,-1.295],[2.3,.13,.02]),_("concrete",[e,.74,-1.6],[2.44,.04,.54]));for(let e of(i.push(_("green",[4.15,.44,-1.6],[1.1,.64,.6]),_("darkGlass",[4.71,.56,-1.6],[.02,.22,.46]),_("red",[4.15,.24,-1.295],[1.1,.06,.02])),i.push(_("plazaLight",[0,.08,-.65],[9,.08,.8]),_("white",[0,1.02,-.65],[8.6,.06,.9]),...Gt(-4,4,6,-.3,.96,.08,.04,"steel")),i.push(_("cream",[-2.6,.62,1.2],[3.6,1.24,1.5]),...Yt(-2.6,1.2,3.6,1.5,.45,.95,.5,"windowLight"),_("green",[-2.6,1.28,1.2],[3.7,.1,1.6]),_("dark",[-2.6,.32,1.96],[.6,.6,.02])),[1.25,1.55]))i.push(_("steel",[2.6,.06,e],[4,.02,.04]));return i.push(_("white",[2.4,.36,1.4],[1.7,.44,.42]),_("green",[2.4,.24,1.615],[1.7,.08,.01]),_("window",[2.4,.44,1.615],[1.5,.12,.01])),i.push(...qt(4.5,2,1.6),...Oe(-4.6,1.9),...Oe(.2,2.1,1.1)),i})(),abjJabiPark:(function(){let i=[Pe(7.6,4.4,0,0,"concrete"),_("asphalt",[.6,.045,-.6],[6.2,.01,2.6])];for(let e=0;e<5;e++)i.push(_("white",[-2+1.3*e,.055,-.6],[.04,.01,2.2]));return[[-1.35,"red"],[-.05,"carBlue"],[1.25,"red"],[2.55,"carGreen"]].forEach(([e,t])=>i.push(_("white",[e,.33,-.75],[.56,.5,1.7]),_(t,[e,.2,-.75],[.57,.08,1.71]),_("window",[e,.45,-.75],[.57,.12,1.5]),_("window",[e,.42,.105],[.46,.2,.01]))),i.push(_("roofTin",[-3.1,.92,-.5],[1.2,.06,3]),...Gt(-1.8,.8,3,0,.9,0,.03,"steel").map(e=>({...e,p:[-3.55,e.p[1],e.p[0]]})),...Gt(-1.8,.8,3,0,.9,0,.03,"steel").map(e=>({...e,p:[-2.65,e.p[1],e.p[0]]})),_("wood",[-3.1,.15,-.5],[.3,.06,2.4])),i.push(...ks(2.6,1.55,"stall0"),...Mt(-.9,1.55,"stall2"),...at(.7,1.6,In/2,"carGreen"),...le(-3.2,1.7),...le(3.4,-1.8,.9)),i})(),abj345:[Pe(6.4,3.7,0,0,"darkPaving"),_("black",[0,.9,-.5],[5.4,1.8,2]),_("lamp",[0,1.78,.51],[5.4,.05,.03]),_("stall3",[0,1.2,.505],[5.2,.06,.02]),_("stall0",[0,1,.505],[5.2,.06,.02]),Y("stall3",[1.6,2.06,-.6],.5,.5,"cyl",[In/2,0,0]),_("gold",[0,.82,.9],[1.6,.06,.7]),Y("gold",[-.7,.4,1.2],.03,.8,"cyl8"),Y("gold",[.7,.4,1.2],.03,.8,"cyl8"),_("red",[0,.045,1.4],[.9,.01,1]),...at(-2.4,1.3,.3,"carBlack"),...at(2.4,1.3,-.3,"carWhite"),...Oe(-3,-1.5,1.2)],abjPlay:[Pe(6.4,3.7,0,0,"darkPaving"),_("dark",[0,.7,-.7],[5.2,1.4,1.8]),ke("halfCyl","glass",[0,.7,.2],[.7,1.4,2.4],[0,-In/2,0]),_("neonPink",[0,1.42,.2],[5.2,.05,.05]),_("stall4",[0,1.45,-.7],[5.3,.08,1.9]),_("neonPink",[-2.58,.7,.2],[.04,1.2,.04]),_("neonPink",[2.58,.7,.2],[.04,1.2,.04]),_("stall4",[0,.9,1.15],[2,.06,.6]),...[[-.6,1.5],[.6,1.5]].map(([i,e])=>Y("silver",[i,.18,e],.03,.36,"cyl8")),...Mt(-2.4,1.4,"stall4"),...Mt(2.4,1.4,"stall0"),...at(-1.4,1.35,0,"carSilver")],abjMoscow:[Pe(6.4,3.7,0,0,"darkPaving"),_("showGlass",[0,.9,-.5],[4.6,1.8,2]),_("white",[0,.9,-.6],[4.2,1.7,1.6]),_("neonBlue",[0,1.8,.51],[4.6,.05,.03]),_("neonBlue",[0,.06,.51],[4.6,.04,.03]),_("silver",[0,1.84,-.5],[4.7,.08,2.1]),_("asphalt",[0,.045,1.1],[1.4,.01,.9]),_("dark",[0,.12,.9],[1.2,.16,.5]),_("silver",[0,.86,1.05],[1.8,.06,.8]),Y("silver",[-2.6,.2,-1.4],.15,.3),Y("silver",[2.6,.2,-1.4],.15,.3),rn("beam",[-2.85,1.65,-1.4],.4,2.6,"cone8",[In,0,-.2]),rn("beam",[2.85,1.65,-1.4],.4,2.6,"cone8",[In,0,.2]),...at(2.4,1.2,-.3,"carBlack"),...at(-2.4,1.2,.3,"carBlack")],abjTokyo:(function(){let i=[Pe(6.4,3.7,0,0,"darkPaving"),_("black",[0,.75,-.5],[4.8,1.5,2]),gt("red",0,1.5,-.5,5.4,2.6,.45),_("black",[0,2.15,-.5],[3,.5,1.2]),gt("red",0,2.4,-.5,3.6,1.8,.4),_("neonPink",[0,1.38,.51],[4.8,.05,.03]),_("red",[0,.045,1.3],[.9,.01,1]),...at(2.5,1.3,-.3,"carWhite")];for(let e of[-2.1,-1.2,1.2,2.1])i.push(Y("silver",[e,.6,.85],.015,1.2,"cyl8"),ke("sphere","red",[e,1.12,.85],[.12,.16,.12]));return i})(),abjMagicCity:[Pe(3.9,4.2,0,0,"darkPaving"),_("dark",[0,1,-.6],[3.4,2,2.4]),...Yt(0,-.6,3.4,2.4,1.3,1.7,.4,"darkGlass"),_("neonPink",[0,.95,.61],[1.6,.05,.03]),_("stall4",[0,.5,.605],[1.4,.9,.02]),_("neonPink",[-.82,.5,.61],[.04,.9,.03]),_("neonPink",[.82,.5,.61],[.04,.9,.03]),_("red",[0,.045,1.2],[.8,.01,1]),...[[-.5,1.1],[.5,1.1],[-.5,1.6],[.5,1.6]].map(([i,e])=>Y("gold",[i,.17,e],.03,.34,"cyl8")),_("black",[1.4,.3,1.3],[.4,.6,.4]),...at(-1.4,1.4,.2,"carBlack")],abjAbujaCar:[...yu(7,5,"darkGlass","gold",["carBlack","carRed","carWhite","carBlack","carSilver","carWhite","carRed"]),_("gold",[0,1.7,1.38],[3.2,.05,.04])],abjKefiano:yu(7,5,"deepGlass","carBlue",["carSilver","carBlack","carWhite","carWhite","carBlack","carSilver","carBlue"]),abjSarkinmota:yu(6.4,4.8,"showGlass","red",["carWhite","carBlack","carRed","carWhite","carWhite","carBlack"]),abjCentralPark:(function(){let i=[Ye(8.8,6.8,0,0,"lawnLight"),_("gravel",[0,.025,2],[8.4,.03,.5]),_("gravel",[.6,.025,.1],[.5,.03,3.4])];i.push(ke("cyl","asphalt",[-2.4,.035,-1.2],[2,.03,1.3]),ke("cyl","lawn",[-2.4,.05,-1.2],[1.1,.02,.5]));for(let e=0;e<16;e++){let t=e/16*In*2;i.push(Y(e%2?"white":"red",[-2.4+2.1*Math.cos(t),.08,-1.2+1.4*Math.sin(t)],.1,.12,"cyl8"))}return[[-3.4,-.9,.4,"carRed"],[-1.6,-2.1,In/2,"carBlue"],[-1.4,-.4,-.6,"carGreen"]].forEach(([e,t,n,s])=>i.push(_(s,[e,.1,t],[.18,.08,.3],[0,n,0]))),i.push(_("sandDark",[2.6,.035,-1.6],[3,.03,2.2]),...Ir(1.1,4.1,-2.7,-.5,.5,"steel")),[[1.8,-2,"stall2"],[2.8,-1.2,"stall3"],[3.4,-2.2,"stall1"],[2.2,-.9,"stall5"]].forEach(([e,t,n])=>i.push(Y(n,[e,.22,t],.18,.4))),i.push(_("cream",[-3.2,.4,1.6],[1.6,.8,1]),gt("roofRed",-3.2,.8,1.6,1.8,1.2,.4),_("stall3",[-3.2,.62,2.12],[1.4,.06,.06])),i.push(_("red",[2.4,.35,1],[.25,.04,.9],[.5,0,0]),_("stall1",[2.4,.4,.52],[.3,.8,.1]),Y("stall3",[3.4,.06,1.1],.35,.06)),i.push(...Mt(-1.2,1.2,"stall0"),...Mt(0,2.9,"stall3"),...le(4,2.9,1.2),...le(-4,2.9,1.1),...le(4,.3,1.1,"leafDark"),...le(-.6,-3,1.2,"leafDark")),i})(),abjCityPark:(function(){let i=[Ye(4.2,5.3,0,0,"lawnLight"),_("gravel",[0,.025,.4],[.5,.03,4.8])];for(let[e,t]of(i.push(_("wood",[-.9,.1,-1.7],[1.6,.2,1]),gt("white",-.9,.9,-1.7,1.8,1.2,.35),...Gt(-1.6,-.2,2,-1.25,.7,.2,.03,"white")),[[1.2,-1.4],[1.2,.4],[-1.2,.8]]))i.push(_("wood",[e,.18,t],[.7,.05,.4]),_("wood",[e,.1,t-.32],[.7,.04,.12]),_("wood",[e,.1,t+.32],[.7,.04,.12]));for(let[e,t]of[[-1.8,-.4],[1.8,1.6],[-1.8,2.3],[1.8,-2.3]])i.push(Y("steel",[e,.55,t],.02,1.1,"cyl8"),_("lamp",[e,1.12,t],[.1,.06,.1]));return i.push(_("red",[.9,.35,2],[.2,.04,.7],[.5,0,0]),_("stall2",[.9,.38,1.62],[.24,.76,.08])),i.push(...Oe(-1.6,-2.4),...Oe(1.7,2.5),...Oe(-1.7,1.5,1.2),...Oe(1.8,-.5,1.4),...Xt(0,2.4,1.2,.4,6,21)),i})(),abjMonoliza:(function(){let i=[Ye(9.2,6.8,0,0,"lawnLight"),_("gravel",[0,.025,1.9],[8.8,.03,.5])];for(let e of(i.push(_("pitch",[-2.2,.035,-1.1],[4,.03,2.6]),_("white",[-2.2,.055,-1.1],[.04,.01,2.6])),[-4.1,-.3]))i.push(_("white",[e,.2,-1.1],[.05,.4,.8]));for(let[e,t]of[[-4.3,-2.6],[-.1,-2.6],[-4.3,.4],[-.1,.4]])i.push(Y("steel",[e,1,t],.04,2,"cyl8"),_("lamp",[e,2.05,t],[.4,.2,.1]));i.push(Y("white",[1.6,.06,-1.7],.8,.08),Y("gold",[1.6,.5,-1.7],.05,.9,"cyl8"),rn("stall4",[1.6,1.1,-1.7],.95,.5,"cone"));for(let e=0;e<6;e++){let t=e/6*In*2;i.push(_(Oi[e],[1.6+.55*Math.cos(t),.25,-1.7+.55*Math.sin(t)],[.12,.16,.24],[0,-t,0]))}return i.push(_("concrete",[3.6,.05,-.6],[1.6,.06,1.4]),_("stall0",[3.6,.85,-.6],[1.7,.06,1.5]),_("stall1",[3.3,.14,-.4],[.3,.12,.4],[0,.6,0]),_("stall2",[3.9,.14,-.8],[.3,.12,.4],[0,-.4,0])),i.push(_("sandDark",[1.6,.035,.9],[2,.03,1.2]),...Ir(.6,2.6,.3,1.5,.4,"steel"),Y("stall3",[1.3,.16,.9],.14,.3),Y("stall5",[1.9,.16,.7],.14,.3)),i.push(_("stall4",[-.6,.55,3],[.14,1.1,.14]),_("stall4",[.6,.55,3],[.14,1.1,.14]),_("stall3",[0,1.15,3],[1.4,.14,.16])),i.push(...le(4.2,2.9,1.1),...le(-4.2,2.9,1.2),...le(4.2,-2.9,1,"leafDark"),...Mt(-2.4,2.8,"stall3")),i})(),abjWTC:(function(){let i=[Pe(6.8,6.4,0,0,"plazaLight"),_("stone",[0,.4,.4],[6.2,.8,2.8])];for(let[e,t]of[[-1.5,5.4],[1.5,4.8]])i.push(_("deepGlass",[e,.8+t/2,.5],[1.9,t,1.9]),...Yt(e,.5,1.9,1.9,1.3,.8+t-.3,.6,"white"),_("silver",[e,.8+t+.06,.5],[1.7,.12,1.7]));return i.push(Y("silver",[-1.5,6.6,.5],.03,.8,"cyl8"),_("glass",[0,.5,1.81],[3,.6,.02])),i.push(Y("stone",[0,.08,2.6],.6,.08),Bi(1,.5,0,2.6,.13),...Oe(-2.9,2.7),...Oe(2.9,2.7),...Oe(-2.9,-2.6),...Oe(2.9,-2.6),...le(0,-2.4,1.1)),i})(),abjICC:(function(){let i=[Ye(8,6.4),Pe(7,2.2,0,1.8)];i.push(_("cream",[0,.8,-.9],[6.4,1.6,3]),ke("halfCyl","white",[0,1.6,-.9],[1.3,6.2,1.5],[0,0,In/2]),_("green",[0,1.62,.62],[6.5,.1,.06])),i.push(...Gt(-2.8,2.8,9,.8,1.4,0,.07),_("white",[0,1.45,.75],[6.2,.1,.4]),_("stone",[0,.06,.95],[4,.12,.5]));for(let e=0;e<9;e++){let t=-3.2+.8*e;i.push(Y("silver",[t,.65,2.75],.02,1.3,"cyl8"),_(e%3==1?"green":Oi[e%6],[t+.13,1.18,2.75],[.26,.18,.015]))}return i.push(...le(-3.6,-2.7),...le(3.6,-2.7),...Xt(-2.6,1.6,1.4,.4,6,23),...Xt(2.6,1.6,1.4,.4,6,24)),i})(),abjBarYucca:(function(){let i=[Pe(4.4,5.8,0,0,"plaza"),_("cream",[0,.9,-.6],[3.6,1.8,3.6]),...Yt(0,-.6,3.6,3.6,.5,1.4,.45,"windowLight"),_("wood",[0,1.86,-.6],[3.7,.12,3.7])];for(let[e,t,n,s]of[[0,1.24,3.7,.03],[0,-2.44,3.7,.03],[-1.84,-.6,.03,3.7],[1.84,-.6,.03,3.7]])i.push(_("balGlass",[e,2.1,t],[n,.36,s]));for(let[e,t,n]of(i.push(_("dark",[-1,2.1,-1.8],[1.2,.36,.4]),_("lamp",[0,2.42,.4],[3.2,.03,.03])),[[-.8,.4,"stall3"],[.8,.2,"stall0"],[.9,-1.4,"stall5"]]))i.push(...Mt(e,t,n,.5,1.92));return i.push(...Oe(-1.6,2.2,1.2),...Oe(1.6,2.2,1.2),...at(0,2,In/2,"carWhite")),i})(),abjBoto:(function(){let i=[Ye(3.9,4.2),Pe(1.2,1.4,.8,1.4,"gravel"),_("wood",[0,.6,-.5],[3.2,1.2,2.2]),gt("roofTile",0,1.2,-.5,3.4,2.4,.5),_("gold",[0,1.18,.62],[3.3,.05,.04])];for(let e of[-1.1,-.4,.4,1.1])i.push(_("lamp",[e,.6,.61],[.36,.7,.02]));return i.push(...le(-1.4,1.4,.9),...Xt(-.4,1.5,1,.4,5,25),$n(0,2,3.6,.2)),i})(),abjHavana:(function(){let i=[Pe(3.9,4.2,0,0,"plaza"),_("cream",[0,.85,-.5],[3.4,1.7,2.2]),_("white",[0,1.74,-.5],[3.5,.1,2.3]),_("red",[0,.045,1.3],[.7,.01,1.4])];for(let e of[-1.2,0,1.2])i.push(_("lamp",[e,.9,.61],[.5,.8,.02]),_("red",[e,1.38,.82],[.7,.04,.42],[.35,0,0]));return i.push(...Oe(-1.6,1.4,1.3),...Oe(1.6,1.4,1.3)),i})(),abjBarracuda:(function(){let i=[Pe(4.2,4.2,0,0,"plazaLight"),_("white",[0,1.6,.3],[2.6,3.2,2.4]),_("deepGlass",[0,1.6,1.51],[2.2,2.8,.02]),_("wood",[0,3.26,.3],[2.7,.12,2.5])];for(let[e,t,n,s]of[[0,1.55,2.7,.03],[0,-.95,2.7,.03],[-1.35,.3,.03,2.5],[1.35,.3,.03,2.5]])i.push(_("balGlass",[e,3.5,t],[n,.36,s]));for(let[e,t,n]of(i.push(_("neonBlue",[0,3.72,1.55],[2.6,.03,.03]),_("pool",[-.5,3.335,-.2],[.9,.03,.7])),[[.6,.8,"stall1"],[-.6,.9,"stall5"]]))i.push(...Mt(e,t,n,.45,3.32));return i.push(...Oe(-1.7,-1.6,1.2),...Oe(1.7,-1.6,1.2)),i})(),abjPappies:(function(){let i=[Ye(4.8,4.4),_("wood",[-.8,.55,-1.1],[2.8,1.1,1.6]),gt("thatch",-.8,1.1,-1.1,3,1.8,.6),Y("concrete",[.4,1.3,-1.5],.12,.8,"cyl8")];for(let e of[.6,1.5])i.push(_("wood",[.6,.22,e],[2.4,.05,.5]),_("wood",[.6,.12,e-.4],[2.4,.04,.14]),_("wood",[.6,.12,e+.4],[2.4,.04,.14]));for(let e of[-1.9,2])i.push(Y("steel",[e,.6,1],.02,1.2,"cyl8"));return i.push(_("lamp",[0,1.18,1],[3.9,.03,.03]),...le(-1.8,1.5,.9),...le(1.9,-1.4,1)),i})(),abjTulip:[Pe(4.2,4.2,0,0,"plazaLight"),_("white",[0,.7,-.6],[3.2,1.4,2]),_("glass",[0,.55,.41],[2.6,.8,.02]),_("flowerPink",[0,1.05,.7],[3.2,.05,.6],[.3,0,0]),_("white",[0,1.44,-.6],[3.3,.08,2.1]),...Xt(0,.55,2.8,.15,8,26,.06),...Mt(-1,1.4,"flowerPink",.55),...Mt(1,1.4,"flowerPink",.55),...le(-1.7,-1.6,.8)],abjMarks:[Ye(4.2,4.2),Pe(1,1.4,.9,1.3,"gravel"),_("black",[0,.5,-.6],[2.8,1,2]),gt("darkPaving",0,1,-.6,3.6,2.8,.55),_("lamp",[0,.5,.41],[2.2,.5,.02]),_("red",[0,.86,.43],[2.6,.06,.02]),Bi(1.2,.8,-1,1.3),ke("rock","graniteLight",[-1.7,.12,1],[.2,.16,.18]),Y("trunk",[1.6,.3,1.6],.05,.6,"cyl8"),ke("ico","red",[1.6,.8,1.6],[.45,.4,.45]),...le(-1.7,-1.7,.8,"leafDark")],abjMars:[Pe(3.4,4.2,0,0,"plazaLight"),_("cream",[0,1.1,-.8],[3,2.2,1.8]),...Yt(0,-.8,3,1.8,1.5,1.9,.4,"window"),_("flowerPink",[0,.6,.11],[2.4,1,.02]),_("glass",[0,.6,.12],[1.8,.8,.02]),_("white",[0,1.15,.35],[2.6,.05,.5],[.3,0,0]),...Mt(-.8,1.2,"flowerPink",.5),...Mt(.8,1.4,"white",.5)],abjPalmAve:(function(){let i=[Ye(4.2,4.2),Pe(2.6,1.6,0,-.8,"plazaLight"),...Gt(-1.1,1.1,4,-1.5,.9,.04,.04),...Gt(-1.1,1.1,4,-.1,.9,.04,.04),gt("white",0,.95,-.8,2.6,1.8,.4)];for(let[e,t]of[[-1,1],[.6,1.3]])i.push(Y("wood",[e,.22,t],.22,.04),Y("wood",[e,.11,t],.03,.22,"cyl8"));return i.push(...Oe(-1.7,-1.7,1.6),...Oe(1.7,-1.7,1.5),...Oe(-1.7,1.7,1.4),...Oe(1.7,.6,1.5),_("lamp",[0,1.4,.4],[3,.03,.03])),i})(),abjEscape:dp(6,4.4,"teal"),abjLuxeSpa:dp(5,4.6,"stall4"),abjEfcc:((up=[Ye(6.8,4.8),Pe(6,1.4,0,1.6),_("white",[0,1.5,-.7],[5.2,3,2]),...Yt(0,-.7,5.2,2,.6,2.7,.5,"deepGlass"),_("green",[0,3.06,-.7],[5.3,.12,2.1]),_("glass",[0,.6,.31],[1.4,1,.02]),_("green",[0,1.15,.6],[1.8,.06,.6])]).push(...qt(-2.6,1.6,1.8),...qt(-1.9,1.6,1.8),...qt(2.2,1.6,1.8),...le(-3,-1.9),...le(3,-1.9),...at(1,1.7,In/2,"carBlack")),up),abjGarkiPolice:(function(){let i=[Pe(5.8,4.6,0,0,"concrete"),_("white",[-.6,.65,-.8],[4,1.3,2]),_("uniBlue",[-.6,1,.21],[4,.2,.02]),_("uniBlue",[-.6,1.34,-.8],[4.1,.1,2.1]),...Yt(-.6,-.8,4,2,.55,.55,.5,"window"),_("dark",[-.6,.35,.22],[.6,.7,.02])];for(let[e,t,n]of[[1.6,1.4,0],[2.4,1.4,0]])i.push(...at(e,t,n,"carWhite"),_("uniBlue",[e,.1,t],[.31,.04,.61],[0,n,0]));return i.push(...qt(2.4,-.4,1.8),_("red",[-1.6,.4,2],[1.4,.05,.05]),Y("black",[-2.3,.2,2],.04,.4,"cyl8"),...le(-2.5,1.4,.9)),i})(),abjGarkiMarket:(function(){let i=[Pe(6.2,4.6,0,0,"concrete"),_("cream",[0,.55,-1.3],[5.6,1.1,1.6]),gt("roofTin",0,1.1,-1.3,5.9,1.9,.6)];for(let e of[.3,1.45])for(let t=0;t<4;t++)i.push(...ks(-2.1+1.4*t,e,Oi[(t+2*(e>1))%6]));return i.push(...Mt(-2.8,2,"stall3"),...Mt(2.8,2,"stall1")),i})(),abjFraser:[Ye(6.2,3.6),Pe(6,1,0,1.3),_("white",[-.6,1.8,.1],[2.8,3.6,1.4]),...Yt(-.6,.1,2.8,1.4,.6,3.3,.45,"window"),_("teal",[-.6,3.66,.1],[2.9,.12,1.5]),_("white",[-.6,.6,1.05],[1.6,.06,.6]),Bi(1.6,.8,2,-.9,.06,"pool"),_("wood",[2,.025,-.1],[1.8,.03,.4]),...Mt(1.3,-.1,"stall5",.5),...Oe(-2.7,1.3),...Oe(1.6,1.3,1.1),...Oe(2.8,.6)],abjEcoFitness:fp(5,4.6,"hubGreen"),abjIFitness:fp(6,5,"red"),abjTrukadero:[Pe(3.9,4.2,0,0,"darkPaving"),_("dark",[0,.7,-.7],[3.4,1.4,2]),_("neonPink",[0,1.38,.31],[3.4,.05,.03]),_("neonBlue",[0,.1,.31],[3.4,.04,.03]),ke("cylT","white",[.9,1.9,-.7],[.22,1,.22]),ke("sphere","white",[.9,2.5,-.7],[.18,.22,.18]),_("red",[.9,2.1,-.7],[.36,.06,.36]),_("wood",[0,.06,1],[3.4,.08,1.2]),...Mt(-1,1,"stall4",.5,.1),...Mt(.8,1.1,"stall1",.5,.1)],abjPolo:(function(){let i=[Ye(10.8,6.3,0,0,"fairway"),_("lawn",[0,.035,-1],[9.6,.03,3.4])];for(let e of[-2.7,.7])i.push(_("white",[0,.08,e],[9.6,.12,.06]));for(let e of[-4.6,4.6])i.push(Y("white",[e,.35,-1.4],.03,.7,"cyl8"),Y("white",[e,.35,-.6],.03,.7,"cyl8"));for(let[e,t,n]of[[-1.2,-1.3,"stall1"],[1,-.8,"stall0"]])i.push(_("mud",[e,.32,t],[.55,.22,.2]),_("mud",[e+.32,.48,t],[.12,.26,.1],[0,0,-.4]),...[[-.2,-.07],[-.2,.07],[.2,-.07],[.2,.07]].map(([s,r])=>_("mud",[e+s,.11,t+r],[.05,.22,.05])),_(n,[e-.05,.56,t],[.16,.24,.14]));i.push(_("cream",[-3.6,.5,2],[2.6,1,1.4]),gt("roofGreen",-3.6,1,2,2.8,1.6,.45),_("wood",[-3.6,.04,2.9],[2.4,.08,.4]),...Gt(-4.7,-2.5,4,2.95,.8,.08,.035)),i.push(...Gt(1.6,3,2,1.6,.8,0,.025,"white"),...Gt(1.6,3,2,2.6,.8,0,.025,"white"),gt("white",2.3,.8,2.1,1.8,1.4,.45));for(let e=0;e<6;e++)i.push(_(e%2?"white":"green",[-1.6+.5*e,.12,1.3],[.3,.24,.3]));return i.push(...qt(4.9,2.6,1.8),...le(4.9,1.2,1.1),...le(-5,-2.8,1.2,"leafDark"),...le(5,-2.8,1.2,"leafDark")),i})(),abjNile:[Ye(5.4,7.8),_("gravel",[0,.025,.8],[.5,.03,6]),_("white",[-1.1,1,-2.6],[2.6,2,1.8]),...Yt(-1.1,-2.6,2.6,1.8,.5,1.7,.6,"deepGlass"),_("white",[1.4,.7,-1.2],[1.8,1.4,2]),...Yt(1.4,-1.2,1.8,2,.5,1.1,.6,"deepGlass"),Y("glass",[-1.4,.6,.6],.8,1.2),Y("white",[-1.4,1.25,.6],.85,.1),...le(1.3,1.2,1.2),...le(-1.8,2.4,1),...le(1.8,2.6,1),_("stall1",[-.8,.5,3.6],[.25,1,.25]),_("stall1",[.8,.5,3.6],[.25,1,.25]),_("white",[0,1.05,3.6],[1.9,.16,.25])],abjBaze:[Ye(9.8,6.8),_("gravel",[0,.025,1.4],[9.2,.03,.5]),_("cream",[-2.6,.9,-2],[3.4,1.8,1.8]),...Yt(-2.6,-2,3.4,1.8,.5,1.5,.5,"window"),_("stall4",[-2.6,1.86,-2],[3.5,.12,1.9]),_("white",[1,.75,-2.1],[2.6,1.5,1.6]),...Gt(0,2,5,-1.2,1.2,.1,.06),gt("white",1,1.5,-2.1,2.8,1.8,.45),_("pitch",[3.3,.035,-.6],[2.6,.03,3.4]),_("white",[3.3,.055,-.6],[2.6,.01,.04]),_("white",[3.3,.25,-2.25],[.6,.5,.04]),_("white",[3.3,.25,1.05],[.6,.5,.04]),_("stall4",[-.9,.5,3],[.3,1,.3]),_("stall4",[.9,.5,3],[.3,1,.3]),_("white",[0,1.05,3],[2.1,.18,.3]),...le(-4.4,.4,1.1),...le(-1,-.2,1),...le(-4.4,2.8,1),...le(4.4,2.8,1)],abjFmc:[Ye(6.8,4.8),Pe(3.6,1.6,.6,1.6),_("white",[0,1,-.9],[6,2,2.4]),...Yt(0,-.9,6,2.4,.55,1.65,.55,"windowLight"),_("red",[0,2.06,-.9],[6.1,.12,2.5]),_("white",[.6,.75,.6],[2,.08,.8]),_("red",[-1.8,1.4,.32],[.5,.15,.02]),_("red",[-1.8,1.4,.32],[.15,.5,.02]),_("white",[1.6,.22,1.7],[.7,.32,.36]),_("red",[1.6,.26,1.7],[.72,.06,.37]),...le(-3,1.9),...le(3,1.9)]},mp={abjIdu:["IDU STATION","Abuja\u2013Kaduna Railway",2.6,.5,-2.6,.95,1.96,"#008751","#ffffff"],abjJabiPark:["JABI MOTOR PARK","Interstate",2,.42,-3.1,1.15,1,"#b91c1c","#ffffff"],abj345:["345 NIGHTLIFE",void 0,2.4,.36,0,1.45,.52,"#111111","#ff9e6d"],abjPlay:["PLAY","Imperial Lounge",1.8,.46,0,1.15,.92,"#240046","#e0aaff"],abjMoscow:["MOSCOW UNDERGROUND",void 0,2.6,.34,0,1.45,.53,"#03045e","#90e0ef"],abjTokyo:["TOKYO NIGHTLIFE",void 0,2.4,.34,0,1.1,.52,"#370617","#ff4d6d"],abjMagicCity:["MAGIC CITY","18+ only",1.7,.42,0,1.25,.62,"#2b0a3d","#ff4d6d"],abjAbujaCar:["ABUJACAR","Smart Auto Gallery",3,.56,0,1.94,.82,"#0b0b0b","#c9a227"],abjKefiano:["KEFIANO AUTOS",void 0,3,.4,0,1.94,.82,"#1d4ed8","#ffffff"],abjSarkinmota:["SARKINMOTA AUTOS","King of Cars",2.8,.52,0,1.94,.78,"#7f1d1d","#f5d27a"],abjCentralPark:["CENTRAL PARK","Go-karts \xB7 Paintball",2.4,.5,.6,.6,2.3,"#f97316","#ffffff"],abjCityPark:["CITY PARK",void 0,1.6,.28,0,.3,2.66,"#15803d","#ffffff"],abjMonoliza:["MONOLIZA PARK",void 0,1.4,.24,0,1,3.09,"#8b5cf6","#ffffff"],abjWTC:["WORLD TRADE CENTER","Abuja",2.8,.5,0,1.05,1.83,"#0f172a","#7dd3fc"],abjICC:["INTERNATIONAL CONFERENCE CENTRE",void 0,3.6,.34,0,1.72,.66,"#008751","#ffffff"],abjBarYucca:["BAR YUCCA","Rooftop",1.8,.44,0,1.6,1.23,"#111111","#f5d27a"],abjBoto:["BOTO",void 0,1.2,.3,0,1.35,.66,"#1b1b1b","#c9a227"],abjHavana:["HAVANA",void 0,1.6,.34,0,1.55,.62,"#7f1d1d","#f5d27a"],abjBarracuda:["BARRACUDA ROOFTOP",void 0,2.2,.32,0,2.95,1.53,"#0b1220","#38bdf8"],abjPappies:["PAPIEE'S MEATRO",void 0,2,.3,-.8,.85,-.29,"#7c2d12","#fde68a"],abjTulip:["TULIP BISTRO",void 0,1.8,.28,0,1.25,.42,"#ec4899","#ffffff"],abjMarks:["MARKS AT THE PARK",void 0,2,.26,0,.18,.42,"#111827","#f87171"],abjMars:["MAR'S CAF\xC9",void 0,1.6,.3,0,1.4,.11,"#f472b6","#ffffff"],abjPalmAve:["PALM AVE","River Plate Park",1.6,.4,0,.32,.12,"#16a34a","#ffffff"],abjEscape:["ESCAPE HOUSE",void 0,1.8,.28,-.4,.85,.52,"#2d6a4f","#fefae0"],abjLuxeSpa:["ABUJA LUXE SPA",void 0,1.8,.28,-.4,.85,.57,"#7e22ce","#ffffff"],abjEfcc:["EFCC","Economic & Financial Crimes Commission",2.4,.5,0,2.2,.32,"#008751","#ffffff"],abjGarkiPolice:["GARKI POLICE DIVISION",void 0,2.6,.3,-.6,1.1,.23,"#1d3f8f","#ffffff"],abjGarkiMarket:["GARKI MARKET",void 0,2.4,.38,0,.8,-.48,"#b45309","#ffffff"],abjFraser:["FRASER SUITES",void 0,2.2,.34,-.6,.85,.81,"#0f766e","#ffffff"],abjEcoFitness:["ECOFITNESS HUB",void 0,2.4,.32,0,1.45,.78,"#16a34a","#ffffff"],abjIFitness:["i-FITNESS","Guzape",2.2,.44,0,1.45,.88,"#e63946","#ffffff"],abjTrukadero:["TRUKADERO","by CityBowl",2,.42,0,1,.33,"#f72585","#ffffff"],abjPolo:["GUARDS POLO CLUB",void 0,2.2,.3,-3.6,.7,2.72,"#7c2d12","#f5d27a"],abjNile:["NILE UNIVERSITY",void 0,1.8,.16,0,1.05,3.76,"#0369a1","#ffffff"],abjBaze:["BAZE UNIVERSITY",void 0,2,.17,0,1.05,3.16,"#7c3aed","#ffffff"],abjFmc:["FEDERAL MEDICAL CENTRE","Jabi",2.6,.44,.6,1.25,.32,"#e5484d","#ffffff"]};var Ru={};s0(Ru,{carWindows:()=>Np,cars:()=>Dp,flowers:()=>Eu,groundNames:()=>$l,hedges:()=>Ip,hills:()=>Ua,houses:()=>Ql,lake:()=>Mp,lampHeads:()=>Lp,lampPosts:()=>Pp,lots:()=>Jl,medians:()=>Ep,palmCrowns:()=>Kl,palmTrunks:()=>Au,patches:()=>wu,pavements:()=>wp,roads:()=>bu,roofs:()=>ec,roundaboutGreens:()=>Rp,roundabouts:()=>Ap,stripes:()=>Tp,treeCrowns:()=>Tu,treeTrunks:()=>Cp});var Mu=[[-16,0,31.3,0,3.6,"blvd"],[-16,-18,40,-18,1.6,"main"],[-16,21,40,21,1.6,"main"],[-16,-46,-16,21,1.6,"main"],[-4,-46,-4,47.5,1.2,"sec"],[19,-46,19,21,1.2,"sec"],[40,-18,40,47,1.4,"sec"],[-48,0,-16,0,1.2,"sec"],[-16,-30,35,-30,1.2,"sec"],[-42,23.5,-4,23.5,1,"sec"],[-16,0,-42,23.5,1.8,"exp"],[-16,-18,-49.5,-40.3,1.8,"exp"],[-42,23.5,-51,23.5,1.8,"exp"],[-51,23.5,-51,47.5,1.6,"exp"],[-51,47.5,-4,47.5,1,"sec"]],vp=[[39.3,-9.5,37.4,-9.5],[40.7,-14,42.85,-14],[-16.8,-8,-20.7,-8],[40.7,16.6,54.4,16.6],[-30,-27.6,-30,-33.85],[-46,.6,-46,2.6],[-31.9,10.7,-30.06,12.71],[-16.8,14.5,-18.4,14.5],[-4.6,14.5,-6.35,14.5],[-4.6,-42,-8.2,-42],[40.7,28,43.85,28],[-11,35.4+8.55,-4.6,35.4+8.55]],Su=[[-51,23.5,1.4],[-16,0,2.8],[-4,0,2.4],[19,0,2.4],[-16,-18,2],[-4,-18,1.7],[19,-18,1.7],[40,-18,1.7],[-16,21,2],[-4,21,1.7],[19,21,1.7],[40,21,1.7],[-42,23.5,2],[-16,-30,1.4],[-4,-30,1.4],[19,-30,1.4]],pi=Mu[10],gp=Math.hypot(pi[2]-pi[0],pi[3]-pi[1]),ql=[(pi[2]-pi[0])/gp,(pi[3]-pi[1])/gp],Lr=[ql[1],-ql[0]],Yl=[pi[0]+22*ql[0]+Lr[0]*4,pi[1]+22*ql[1]+Lr[1]*4],Jl={abjAssembly:{x:35,z:0,w:7,d:7,label:"National Assembly",top:3.8},abjSupremeCourt:{x:35,z:-9.5,w:5,d:4.5,label:"Supreme Court",top:2.1},abjAsoRock:{x:45,z:-14,w:4.5,d:4.5,label:"Aso Rock",top:1.4},abjZoo:{x:54,z:13.7,w:7,d:5,label:"Children's Park & Zoo",top:1.4},abjSecretariat:{x:25,z:-6.5,w:8,d:5,label:"Fed. Secretariat",top:2.8},abjMosque:{x:12.5,z:-6.5,w:6,d:6,label:"National Mosque",top:5.2},abjHospital:{x:1.5,z:-6.5,w:7,d:5,label:"National Hospital",top:2.7},abjSilverbird:{x:-10,z:-6.5,w:6,d:5,label:"Silverbird",top:3},abjEagleSquare:{x:25,z:6.5,w:8,d:6,label:"Eagle Square",top:2.1},abjChristianCentre:{x:12.5,z:6.5,w:6,d:6,label:"Christian Centre",top:7.8},abjCeddi:{x:1.5,z:6.5,w:7,d:5,label:"Ceddi Plaza",top:2.9},abjArtsVillage:{x:-10,z:6.5,w:6,d:5,label:"Arts Village",top:1.1},abjBanex:{x:-10,z:-13.5,w:6,d:5,label:"Banex Plaza",top:2},abjWuseMarket:{x:1.5,z:-13.5,w:7,d:5,label:"Wuse Market",top:1.8},abjTranscorp:{x:12.5,z:-13.5,w:6,d:5,label:"Transcorp Hilton",top:6.8},abjTechHub:{x:26,z:-13.5,w:6,d:5,label:"Ventures Park",top:3.5},abjNovare:{x:-10,z:-25,w:8,d:7,label:"Novare Central",top:3},abjLounge:{x:1.5,z:-23.25,w:5,d:4.5,label:"Kryxtal Lounge",top:1.8},abjUnityFountain:{x:12.5,z:-24,w:6,d:6,label:"Unity Fountain",top:1.6},abjMillenniumPark:{x:28,z:-25,w:10,d:8,label:"Millennium Park",top:1.5},abjGolf:{x:42,z:-32,w:11,d:9,label:"IBB Golf Club",top:1.5},abjClub:{x:-10,z:-36,w:6,d:5,label:"Hustle & Bustle",top:2.4},abjRooftop:{x:1.5,z:-35,w:4.5,d:4.5,label:"Lupita Rooftop",top:7},abjJabiLake:{x:-24,z:-8,w:7,d:5,label:"Jabi Lake Mall",top:2.2},abjZumaRock:{x:-46,z:5,w:5,d:5,label:"Zuma Rock",top:1.4,tag:[-10,5,-9.6]},abjMotors:{x:-36,z:8.5,w:9,d:5.5,label:"Capital Motors",top:2.4},abjStadium:{x:-22.5,z:14.5,w:8.4,d:8.4,label:"National Stadium",top:3.4,round:!0},abjMagicLand:{x:-9,z:14.5,w:5.5,d:5.5,label:"Magic Land",top:3},abjCityGate:{x:Yl[0],z:Yl[1],w:4.4,d:4.4,label:"City Gate",top:4.7,ry:Math.atan2(Lr[0],Lr[1])},abjAirport:{x:-28,z:35.4,w:34,d:22,label:"Abuja Airport",top:6.2,pad:"#d6dbc4",tag:[-3.6,2.05,2.4]},abjUniAbuja:{x:-57.5,z:31,w:10,d:9,label:"University of Abuja",top:3},abjGwagwalada:{x:-56.5,z:41,w:7,d:5,label:"Gwagwalada Market",top:3.1},abjTokyo:{x:-12.1,z:-44.75,w:4.4,d:2.9,label:"Tokyo Nightlife",top:2.8,art:.72},abjPlay:{x:-7,z:-44.75,w:4.4,d:2.9,label:"Play Lounge",top:1.6,art:.72},abj345:{x:-12.1,z:-41.25,w:4.4,d:2.9,label:"345 Nightlife",top:2.6,art:.72},abjMoscow:{x:-7,z:-41.25,w:4.4,d:2.9,label:"Moscow Underground",top:2,art:.72},abjMagicCity:{x:-.8,z:-42.6,w:4.1,d:4.4,label:"Magic City 18+",top:2},abjTrukadero:{x:4.73,z:-42.6,w:4.1,d:4.4,label:"Trukadero",top:2.7},abjHavana:{x:10.27,z:-42.6,w:4.1,d:4.4,label:"Havana",top:1.8},abjBoto:{x:15.8,z:-42.6,w:4.1,d:4.4,label:"BOTO",top:1.7},abjMars:{x:7,z:-34.6,w:3.6,d:4.4,label:"Mar's Caf\xE9",top:2.2},abjBarracuda:{x:22.4,z:-37.2,w:4.4,d:4.4,label:"Barracuda Rooftop",top:3.8},abjPalmAve:{x:22.4,z:-44,w:4.4,d:4.4,label:"Palm Ave",top:1.6},abjMarks:{x:32.6,z:-35.2,w:4.4,d:4.4,label:"Marks at the Park",top:1.6},abjTulip:{x:32.6,z:-44.1,w:4.4,d:4.4,label:"Tulip Bistro",top:1.5},abjCityPark:{x:36.6,z:-22.75,w:4.4,d:5.5,label:"City Park",top:1.8},abjPappies:{x:38.7,z:-42.5,w:5,d:4.6,label:"Papiee's Meatro",top:1.7},abjLuxeSpa:{x:45.6,z:-42.5,w:5,d:4.6,label:"Abuja Luxe Spa",top:1.2},abjEscape:{x:53.5,z:-38.2,w:6,d:4.4,label:"Escape House",top:1.2},abjPolo:{x:47.5,z:-22.5,w:11,d:6.5,label:"Guards Polo Club",top:1.3},abjAbujaCar:{x:-38,z:-40,w:7,d:5,label:"AbujaCar",top:2},abjEcoFitness:{x:-46,z:-43.8,w:5,d:4.6,label:"Ecofitness Hub",top:1.7},abjFmc:{x:-44.5,z:-27.2,w:7,d:5,label:"FMC Jabi",top:2.2},abjEfcc:{x:-44.5,z:-18.5,w:7,d:5,label:"EFCC",top:3.2},abjJabiPark:{x:-22.5,z:-14.5,w:7.8,d:4.6,label:"Jabi Motor Park",top:1},abjIdu:{x:-56,z:-24,w:10,d:5,label:"Idu Station",top:1.3},abjNile:{x:-45.2,z:15.5,w:5.6,d:8,label:"Nile University",top:2.1},abjBaze:{x:2.2,z:42,w:10,d:7,label:"Baze University",top:1.9},abjBarYucca:{x:-.6,z:15.6,w:4.6,d:6,label:"Bar Yucca",top:2.4},abjFraser:{x:6.3,z:15.6,w:6.4,d:3.8,label:"Fraser Suites",top:3.8},abjKefiano:{x:14.4,z:16.4,w:7,d:5,label:"Kefiano Autos",top:2},abjWTC:{x:24.2,z:14.6,w:7,d:6.6,label:"World Trade Center",top:6.4},abjICC:{x:34.6,z:14.6,w:8.2,d:6.6,label:"Int'l Conference Centre",top:2.9},abjSarkinmota:{x:.4,z:25.6,w:6.4,d:4.8,label:"Sarkinmota Autos",top:2},abjGarkiPolice:{x:15,z:25.6,w:6,d:4.8,label:"Garki Police",top:1.9},abjGarkiMarket:{x:23.8,z:25.6,w:6.4,d:4.8,label:"Garki Market",top:1.7},abjCentralPark:{x:1.6,z:32.8,w:9,d:7,label:"Central Park",top:1.4},abjMonoliza:{x:33.8,z:32.6,w:9.4,d:7,label:"Monoliza Park",top:2.2},abjIFitness:{x:52,z:40,w:6,d:5,label:"i-Fitness Guzape",top:1.8},home_abjMaitama:{x:12.5,z:-35,w:4.5,d:4.5,label:"Home",top:1.6},home_abjWuse2:{x:6.75,z:-24,w:4,d:4,label:"Home",top:2.4},home_abjGwarinpa:{x:-30,z:-36,w:4.5,d:4.5,label:"Home",top:2.2},home_abjKubwa:{x:-52.5,z:-39,w:4.5,d:4.5,label:"Home",top:1.6},home_abjAsokoro:{x:46,z:28,w:4.5,d:4.5,label:"Home",top:2.5}};var bp=[];var Mp={x:-36,z:-9,rx:8,rz:5},$l=[["ABUJA",14,35,14,"#6f9a52",.85],["CENTRAL BUSINESS DISTRICT",13.7,11,9,"#6f9a52",.85],["THREE ARMS ZONE",35,6.6,7.5,"#6f9a52",.85],["MAITAMA",30,-40.5,9,"#5f8c45",.85],["GARKI",8,27.5,7,"#6f9a52",.85],["ASOKORO",50,19,6.5,"#5f8c45",.85],["JABI LAKE",-36,-8.6,7,"#ffffff",.7],["GWARINPA",-30,-44,7,"#6f9a52",.85],["KUBWA",-56,-44,5,"#6f9a52",.85],["UTAKO",-38,-20.5,5,"#6f9a52",.85]],wu=[[-16,40,-10,10,"#c6e2a0"],[-4,58,-47,-10,"#a9d07f"],[-16,-4,-47,-10,"#bcd796"],[-8,30,10,48,"#c2d89a"],[30,60,10,48,"#acd083"],[-48,-16,-28,0,"#b4d48c"]],Pn=[],Pr=Mu.map(([i,e,t,n,s,r])=>Pn.push({k:"s",ax:i,az:e,bx:t,bz:n,hw:s/2+.6*(r==="blvd"||r==="main")})-1);for(let[i,e,t,n]of vp)Pn.push({k:"s",ax:i,az:e,bx:t,bz:n,hw:.4});for(let[i,e,t]of Su)Pn.push({k:"c",x:i,z:e,r:t});var Sp=(i,e,t,n,s=0)=>{let r=[Math.cos(s),-Math.sin(s)],a=[Math.sin(s),Math.cos(s)];return[[1,1],[1,-1],[-1,-1],[-1,1]].map(([o,l])=>[i+r[0]*t*o/2+a[0]*n*l/2,e+r[1]*t*o/2+a[1]*n*l/2])};for(let i of Object.values(Jl))i.round?Pn.push({k:"c",x:i.x,z:i.z,r:i.w/2}):i.ry?Pn.push({k:"p",pts:Sp(i.x,i.z,i.w,i.d,i.ry)}):Pn.push({k:"r",x0:i.x-i.w/2,x1:i.x+i.w/2,z0:i.z-i.d/2,z1:i.z+i.d/2});for(let i of(Pn.push({k:"c",x:Yl[0]-Lr[0]*4,z:Yl[1]-Lr[1]*4,r:3.2}),Pn.push({k:"e",...Mp},{k:"c",x:52,z:-1,r:9.6},{k:"c",x:-56,z:-8,r:7.4},{k:"r",x0:42.8,x1:49.2,z0:9.6,z1:14.4}),bp)){let e=i.r??0;Pn.push({k:"p",pts:Sp(i.x,i.z,4.4,.6,e)});let t=2.2*Math.cos(e),n=-(2.2*Math.sin(e));Pn.push({k:"p",pts:[[i.x+t,i.z+n],[i.x+t,i.z+n+3.2],[i.x-t,i.z-n+3.2],[i.x-t,i.z-n]]})}for(let[,i,e,t]of $l)Pn.push({k:"r",x0:i-t/2,x1:i+t/2,z0:e-.08*t,z1:e+.08*t});var _p=(i,e,t,n,s,r)=>{let a=s-t,o=r-n,l=Math.max(0,Math.min(1,((i-t)*a+(e-n)*o)/(a*a+o*o||1)));return Math.hypot(t+a*l-i,n+o*l-e)},uy=(i,e,t,n)=>{switch(i.k){case"r":return e>i.x0-n&&e<i.x1+n&&t>i.z0-n&&t<i.z1+n;case"c":return Math.hypot(e-i.x,t-i.z)<i.r+n;case"s":return _p(e,t,i.ax,i.az,i.bx,i.bz)<i.hw+n;case"e":return((e-i.x)/(i.rx+n))**2+((t-i.z)/(i.rz+n))**2<1;case"p":return((s,r,a,o)=>{let l=0,c=!0;for(let u=0;u<a.length;u++){let[h,d]=a[u],[f,g]=a[(u+1)%a.length],y=(f-h)*(r-d)-(g-d)*(s-h);if(y!==0&&(l===0?l=Math.sign(y):Math.sign(y)!==l&&(c=!1)),_p(s,r,h,d,f,g)<o)return!0}return c})(e,t,i.pts,n)}},rs=(i,e,t,n=-1)=>{if(i<-63.4||i>59.4||e<-46.4||e>47.4)return!0;for(let s=0;s<Pn.length;s++)if(s!==n&&uy(Pn[s],i,e,t))return!0;return!1},$e=i=>{let e=43758.5453*Math.sin(127.1*i+311.7);return e-Math.floor(e)},bu=[],wp=[],Ep=[],Tp=[],Ap=[],Rp=[],Eu=[],Tu=[],Cp=[],Au=[],Kl=[],Ip=[],Pp=[],Lp=[],Ql=[],ec=[],Ua=[],Dp=[],Np=[],xp=["#4f9a3c","#5aa845","#3f8a35","#6bb04f","#478f3a"],Zl=["#e63946","#ffd166","#f472b6","#ffffff","#fb923c"],tc=(i,e,t,n=1)=>{let s=(.36+.16*$e(t))*n;Cp.push({p:[i,.2+.24*n,e],s:[.05*n,.48*n,.05*n]}),Tu.push({p:[i,.2+.45*n+.75*s,e],s:[s,1.15*s,s],r:3*$e(t+3),c:xp[t%xp.length]})},dy=(i,e,t,n=1.3+.35*$e(t))=>{Au.push({p:[i,.2+n/2,e],s:[.05,n,.05]}),Kl.push({p:[i,.2+n+.04,e],s:[.55,.26,.55],e:[Math.PI,3*$e(t+1),0]}),Kl.push({p:[i,.2+n+.16,e],s:[.34,.2,.34],e:[Math.PI,3*$e(t+2),0]})},fy=(i,e,t,n,s,r=.2)=>{for(let a=0;a<t;a++)Eu.push({p:[i+($e(s+a)-.5)*n,r,e+($e(s+a+.5)-.5)*n],s:[.12,.1,.12],c:Zl[(s+a)%Zl.length]})};for(let[i,e,t,n]of(Mu.forEach(([s,r,a,o,l,c],u)=>{let h=Math.hypot(a-s,o-r),d=(a-s)/h,f=(o-r)/h,g=-f,y=Math.atan2(-f,d),m=(s+a)/2,p=(r+o)/2;if(bu.push({p:[m,.234,p],s:[h,.012,l],r:y}),c==="blvd"||c==="main")for(let R of[-1,1])wp.push({p:[m+g*(l/2+.3)*R,.215,p+d*(l/2+.3)*R],s:[h,.01,.6],r:y});if(c!=="sec"&&Ep.push({p:[m,.245,p],s:[h,.01,c==="blvd"?1:.3],r:y}),c==="sec")for(let R=1;R<h-.5;R+=2.2){let D=s+d*R,N=r+f*R;rs(D,N,.3,Pr[u])||Tp.push({p:[D,.2475,N],s:[.9,.005,.08],r:y})}let T=c==="blvd"?2.1:c==="main"?l/2+.3:l/2+.75,E=c==="blvd"?2.6:c==="exp"?2.8:3;for(let R=E/2,D=0;R<h;R+=E,D++)for(let N of[-1,1]){let S=s+d*R+g*T*N,x=r+f*R+d*T*N;rs(S,x,.45,Pr[u])||(c==="exp"?dy(S,x,500*u+2*D+N):tc(S,x,500*u+2*D+N))}if(c==="blvd"||c==="main"){let R=c==="blvd"?2.75:l/2+.95;for(let D=1.2;D<h-1;D+=2.1)for(let N of[-1,1]){let S=s+d*D+g*R*N,x=r+f*D+d*R*N;rs(S,x,.35,Pr[u])||Ip.push({p:[S,.35,x],s:[1.8,.3,.32],r:y})}}if(c==="blvd"||c==="main")for(let R=c==="blvd"?4.7:3,D=0;R<h;R+=c==="blvd"?5.2:6,D++){let N=c==="blvd"?0:(l/2+.3)*(D%2?1:-1),S=s+d*R+g*N,x=r+f*R+d*N;rs(S,x,.3,Pr[u])||(Pp.push({p:[S,1.05,x],s:[.03,1.6,.03]}),Lp.push({p:[S,1.88,x],s:[.12,.08,.12]}))}let b=c==="blvd"?1:c==="main"?.42:c==="exp"?.5:.28,L=Math.floor(h/9);for(let R=0;R<L;R++){let D=(R+.3+.4*$e(50*u+R))/L*h,N=R%2?1:-1,S=s+d*D+g*b*N,x=r+f*D+d*b*N;if(Su.some(([U,P,z])=>Math.hypot(S-U,x-P)<z+.4)||bp.some(U=>2.6>Math.hypot(S-U.x,x-U.z)))continue;let v=Math.atan2(d,f)+(N>0?0:Math.PI),A=["#17803d","#f4f4f2","#1b1d22","#c0c6cc","#c81e1e","#1f5fbf","#f4f4f2","#17803d"][(u+R)%8];Dp.push({p:[S,.335,x],s:[.32,.15,.64],r:v,c:A}),Np.push({p:[S,.47,x],s:[.28,.12,.34],r:v})}}),vp)){let s=Math.hypot(t-i,n-e);bu.push({p:[(i+t)/2,.234,(e+n)/2],s:[s,.012,.8],r:Math.atan2(-(n-e),t-i)})}for(let i=-12.6,e=0;i<30;i+=2.6,e++)rs(i,0,.5,Pr[0])||(tc(i,0,9e3+e,1.05),e%2&&!rs(i+1.3,0,.4,Pr[0])&&fy(i+1.3,0,4,.5,9100+7*e,.25));Su.forEach(([i,e,t],n)=>{let s=Math.max(.5,t-.9);Ap.push({p:[i,.255,e],s:[t,.01,t]}),Rp.push({p:[i,.265,e],s:[s,.02,s]});let r=Math.max(6,Math.round(2*Math.PI*s*.78/.32));for(let a=0;a<r;a++){let o=a/r*Math.PI*2;Eu.push({p:[i+Math.cos(o)*s*.78,.275,e+Math.sin(o)*s*.78],s:[.12,.1,.12],c:Zl[(n+a)%Zl.length]})}t>=2.4?(Au.push({p:[i,1.125,e],s:[.06,1.7,.06]}),Kl.push({p:[i,2.015,e],s:[.7,.3,.7],e:[Math.PI,n,0]},{p:[i,2.155,e],s:[.42,.24,.42],e:[Math.PI,n+.5,0]})):t>=2?tc(i,e,9500+n,.9):Tu.push({p:[i,.275+.15,e],s:[.3,.22,.3],c:"#3f7f35"})});var Qn=["#b45a3c","#8a4b33","#a3552f","#7a2e2e"],vu=["#2f6f4f","#5b6b7a","#8a4b33","#3f4b57"],yp=["#f2e8d5","#e9d3b0","#f6efe3","#dbe7f2","#f6d6c8","#e4ecd6","#fff7e8"];[[-3,30,22.5,46.5,2.9,.9,1.3,1,Qn],[-3,18,10.5,19.5,2.6,.8,1.1,1,Qn],[22,39,10.5,19.5,2.8,.9,1.2,1,Qn],[41,59,14,47,3.2,1.3,1.8,2,vu],[-2,59,-46.5,-30.6,3.3,1.2,1.7,2,vu],[30,59,-28,-19,3,1.1,1.5,2,vu],[-15.5,-4.5,-46.5,-38.5,2.2,.8,1,3,Qn],[-48,-17,-46.5,-28,2.3,.8,1,1,Qn],[-63.4,-49,-46.5,-19,2.5,.75,1,1,Qn],[-48,-18,-28,-12.5,2.4,.8,1,1,Qn],[-63.4,-49,-18,0,2.6,.8,1,1,Qn],[-63.4,-49,1,20,2.6,.8,1,1,Qn],[-48,-17,9,22,2.6,.8,1.1,1,Qn],[-63.4,-52.5,21,47.4,2.3,.7,.95,1,Qn]].forEach(([i,e,t,n,s,r,a,o,l],c)=>{for(let u=t+s/2,h=0;u<n;u+=s,h++)for(let d=i+s/2,f=0;d<e;d+=s,f++){let g=1e4*c+100*h+f,y=d+($e(g)-.5)*s*.25,m=u+($e(g+.3)-.5)*s*.25,p=r+$e(g+.6)*(a-r),T=p*(.8+.25*$e(g+.9));if(rs(y,m,Math.max(p,T)/2+.35))continue;let E=o===3?1.2+.5*$e(g+1.2):o===2?.7+.25*$e(g+1.2):.38+.2*$e(g+1.2),b=$e(g+1.5)>.5?0:Math.PI/2;Ql.push({p:[y,.2+E/2,m],s:[p,E,T],r:b,c:yp[g%yp.length]}),o!==3&&ec.push({p:[y,.2+E+.15,m],s:[.75*p,.3,.75*T],r:b,c:l[(h+f)%l.length]});let L=y+.42*s,R=m+.38*s;.55>$e(g+2.1)&&!rs(L,R,.5)&&tc(L,R,g,o===2?1.15:1)}});for(let i=-72;i<=70;i+=8.5)Ua.push({p:[i,.1,-53-3*$e(i)],s:[6+3*$e(i+1),3+2.2*$e(i+2),5+3*$e(i+3)],r:3*$e(i+4),c:["#7fa25a","#8aac64","#96a873","#749852"][Math.abs(Math.round(i))%4]}),Ua.push({p:[i+4,.1,54+3*$e(i+5)],s:[6+3*$e(i+6),2.4+2*$e(i+7),5+3*$e(i+8)],r:3*$e(i+9),c:["#8aac64","#7fa25a","#749852","#96a873"][Math.abs(Math.round(i))%4]});for(let i=-44;i<=44;i+=9)Ua.push({p:[-71-3*$e(i),.1,i],s:[6+3*$e(i+1),3+2.4*$e(i+2),6+2*$e(i+3)],r:3*$e(i+4),c:["#7fa25a","#96a873","#8aac64"][Math.abs(i)%3]}),Ua.push({p:[67+3*$e(i+5),.1,i+4],s:[6+3*$e(i+6),3.2+2.4*$e(i+7),6+2*$e(i+8)],r:3*$e(i+9),c:["#8aac64","#749852","#7fa25a"][Math.abs(i)%3]});var Cu={abjIdu:{name:"Idu Railway Station",area:"Idu",emoji:"\u{1F686}"},abjJabiPark:{name:"Jabi Motor Park",area:"Jabi",emoji:"\u{1F68C}"},abj345:{name:"345 Nightlife",area:"Wuse 2",emoji:"\u{1F305}"},abjPlay:{name:"Play Imperial Lounge",area:"Wuse 2",emoji:"\u{1F3B6}"},abjMoscow:{name:"Moscow Underground",area:"Wuse 2",emoji:"\u{1F9CA}"},abjTokyo:{name:"Tokyo Nightlife",area:"Wuse 2",emoji:"\u{1F3EE}"},abjMagicCity:{name:"Magic City",area:"Wuse 2",emoji:"\u{1F51E}"},abjAbujaCar:{name:"AbujaCar",area:"Kado",emoji:"\u{1F3CE}\uFE0F"},abjKefiano:{name:"Kefiano Autos",area:"Central Business District",emoji:"\u{1F699}"},abjSarkinmota:{name:"Sarkinmota Autos",area:"Olusegun Obasanjo Way",emoji:"\u{1F698}"},abjCentralPark:{name:"Central Park Abuja",area:"Garki",emoji:"\u{1F3AF}"},abjCityPark:{name:"City Park",area:"Wuse 2",emoji:"\u{1F334}"},abjMonoliza:{name:"Monoliza Park",area:"Area 11, Garki",emoji:"\u{1F3A1}"},abjWTC:{name:"World Trade Center Abuja",area:"Central Business District",emoji:"\u{1F3D9}\uFE0F"},abjICC:{name:"International Conference Centre",area:"Central Business District",emoji:"\u{1F399}\uFE0F"},abjBarYucca:{name:"Bar Yucca",area:"Central Area",emoji:"\u{1F379}"},abjBoto:{name:"BOTO",area:"Wuse 2",emoji:"\u{1F37D}\uFE0F"},abjHavana:{name:"Havana",area:"Wuse 2",emoji:"\u{1F483}\u{1F3FE}"},abjBarracuda:{name:"Barracuda Rooftop Lounge",area:"Wuse 2",emoji:"\u{1F363}"},abjPappies:{name:"Papiee's Meatro",area:"Wuse 2",emoji:"\u{1F969}"},abjTulip:{name:"Tulip Bistro",area:"Wuse 2",emoji:"\u{1F337}"},abjMarks:{name:"Marks at the Park",area:"Wuse 2",emoji:"\u{1F962}"},abjMars:{name:"Mar's Caf\xE9",area:"Wuse 2",emoji:"\u2615"},abjPalmAve:{name:"Palm Ave",area:"Wuse 2",emoji:"\u{1F35D}"},abjEscape:{name:"Escape House",area:"Maitama",emoji:"\u{1F9D6}\u{1F3FE}"},abjLuxeSpa:{name:"Abuja Luxe Spa",area:"Wuse 2",emoji:"\u{1F486}\u{1F3FE}"},abjEfcc:{name:"EFCC Headquarters",area:"Jabi",emoji:"\u{1F575}\u{1F3FE}"},abjGarkiPolice:{name:"Garki Police Division",area:"Garki II",emoji:"\u{1F693}"},abjGarkiMarket:{name:"Garki Market",area:"Garki",emoji:"\u{1F9FA}"},abjFraser:{name:"Fraser Suites Abuja",area:"Central Business District",emoji:"\u{1F3E8}"},abjEcoFitness:{name:"Ecofitness Hub",area:"Gwarinpa",emoji:"\u{1F3CB}\u{1F3FE}"},abjIFitness:{name:"i-Fitness Guzape",area:"Guzape",emoji:"\u{1F4AA}\u{1F3FE}"},abjTrukadero:{name:"Trukadero by CityBowl",area:"Wuse 2",emoji:"\u{1F3B3}"},abjPolo:{name:"Guards Polo Club",area:"Maitama\u2013Asokoro",emoji:"\u{1F40E}"},abjNile:{name:"Nile University of Nigeria",area:"Jabi Airport Bypass",emoji:"\u{1F393}"},abjBaze:{name:"Baze University",area:"Kuchigoro, Airport Road",emoji:"\u{1F3EB}"},abjFmc:{name:"Federal Medical Centre Jabi",area:"Jabi",emoji:"\u{1F3E5}"},abjAirport:{name:"Nnamdi Azikiwe International Airport",area:"Airport Road",emoji:"\u{1F6EB}"},abjAsoRock:{name:"Aso Rock",area:"Three Arms Zone",emoji:"\u{1FAA8}"},abjAssembly:{name:"National Assembly",area:"Three Arms Zone",emoji:"\u{1F3DB}\uFE0F"},abjEagleSquare:{name:"Eagle Square",area:"Central Business District",emoji:"\u{1F985}"},abjMosque:{name:"Abuja National Mosque",area:"Central Business District",emoji:"\u{1F54C}"},abjChristianCentre:{name:"National Christian Centre",area:"Central Business District",emoji:"\u26EA"},abjMillenniumPark:{name:"Millennium Park",area:"Maitama",emoji:"\u{1F333}"},abjJabiLake:{name:"Jabi Lake Mall",area:"Jabi",emoji:"\u{1F6CD}\uFE0F"},abjWuseMarket:{name:"Wuse Market",area:"Wuse Zone 5",emoji:"\u{1F9FA}"},abjTranscorp:{name:"Transcorp Hilton Abuja",area:"Maitama",emoji:"\u{1F3E8}"},abjSilverbird:{name:"Silverbird Entertainment Centre",area:"Central Business District",emoji:"\u{1F3AC}"},abjMagicLand:{name:"Magic Land",area:"Kukwaba",emoji:"\u{1F3A2}"},abjZumaRock:{name:"Zuma Rock",area:"Madalla",emoji:"\u26F0\uFE0F"},abjUnityFountain:{name:"Unity Fountain",area:"Maitama",emoji:"\u26F2"},abjBanex:{name:"Banex Plaza",area:"Wuse 2",emoji:"\u{1F4F1}"},abjLounge:{name:"Kryxtal Lounge",area:"Wuse 2",emoji:"\u{1FAA9}"},abjSecretariat:{name:"Federal Secretariat",area:"Shehu Shagari Way",emoji:"\u{1F5C2}\uFE0F"},abjArtsVillage:{name:"Arts & Crafts Village",area:"Central Business District",emoji:"\u{1F3AD}"},abjStadium:{name:"Moshood Abiola National Stadium",area:"Kukwaba",emoji:"\u{1F3DF}\uFE0F"},abjGwagwalada:{name:"Gwagwalada Market & Motor Park",area:"Gwagwalada",emoji:"\u{1F68C}"},abjUniAbuja:{name:"University of Abuja",area:"Gwagwalada",emoji:"\u{1F393}"},abjMotors:{name:"Capital Motors",area:"Airport Road",emoji:"\u{1F698}"},abjCeddi:{name:"Ceddi Plaza",area:"Central Business District",emoji:"\u{1F3EC}"},abjNovare:{name:"Novare Central",area:"Wuse Zone 5",emoji:"\u{1F6CD}\uFE0F"},abjHospital:{name:"National Hospital Abuja",area:"Central Area",emoji:"\u{1F3E5}"},abjGolf:{name:"IBB International Golf & Country Club",area:"Maitama",emoji:"\u26F3"},abjCityGate:{name:"Abuja City Gate",area:"Airport Road",emoji:"\u{1F6E3}\uFE0F"},abjZoo:{name:"National Children's Park & Zoo",area:"Asokoro",emoji:"\u{1F992}"},abjSupremeCourt:{name:"Supreme Court of Nigeria",area:"Three Arms Zone",emoji:"\u2696\uFE0F"},abjTechHub:{name:"Ventures Park",area:"Maitama",emoji:"\u{1F4A1}"},abjClub:{name:"Hustle & Bustle",area:"Wuse 2",emoji:"\u{1FAA9}"},abjRooftop:{name:"Lupita Rooftop",area:"Maitama",emoji:"\u{1F307}"}};var nc={box:new Un(1,1,1),cyl:new Ft(1,1,1,20),cyl8:new Ft(1,1,1,8),cyl6:new Ft(1,1,1,6),cylT:new Ft(.75,1,1,12),halfCyl:new Ft(1,1,1,18,1,!1,0,Math.PI),cone:new Rn(1,1,16),cone8:new Rn(1,1,8),cone7:new Rn(1,1,7),pyr:new Rn(1,1,4,1,!1,Math.PI/4),dome:new ns(1,22,11,0,Math.PI*2,0,Math.PI/2),sphere:new ns(1,14,10),ico:new Ss(1,0),rock:new mr(1,1),hill:new mr(1,0),mono:new Ft(.78,1,1,16,3),torus:new ma(1,.07,6,30),bowlWall:new Ft(1,.95,1,40,1,!0),bowlSeats:new Ft(1,.66,1,40,1,!0),ring:new Es(.72,1,40,1,0,Math.PI*1.15),disc:new Ft(1,1,1,32)},ic=(i,e="matte")=>e==="glow"?new nn({color:i,toneMapped:!1}):new fn({color:i,roughness:e==="metal"?.4:e==="glass"?.18:e==="wet"?.25:.95,metalness:e==="metal"?.55:e==="glass"?.15:0,flatShading:e==="flat",side:e==="ds"?Wt:An,transparent:e==="clear"||e==="beam",opacity:e==="clear"?.4:e==="beam"?.12:1,depthWrite:e!=="beam"&&e!=="clear"});function Iu(i,e,t,n,s="matte",r=!0){if(!e.length)return;let a=new ai(nc[t],ic(n,s),e.length),o=new ht;e.forEach((l,c)=>{o.position.set(...l.p),o.scale.set(...l.s),o.rotation.set(...l.e||[0,l.r||0,0],"YXZ"),o.updateMatrix(),a.setMatrixAt(c,o.matrix),l.c&&a.setColorAt(c,new Ie(l.c))}),a.castShadow=r,a.receiveShadow=!0,a.computeBoundingSphere(),i.add(a)}function my(i,e){let t=new Map,n=new ht,s=new ht;for(let r of e){n.position.set(r.x,r.y??.28,r.z),n.rotation.set(0,r.ry||0,0),n.scale.set(...r.scale||[r.art||1,r.art||1,r.art||1]),n.updateMatrix();for(let a of r.artwork){let[o,l]=rp[a.m],c=`${a.g}:${o}`;t.has(c)||t.set(c,{shape:a.g,kind:o,instances:[]}),s.position.set(...a.p),s.scale.set(...a.s),s.rotation.set(...a.r||[0,0,0],"YXZ"),s.updateMatrix(),t.get(c).instances.push({matrix:n.matrix.clone().multiply(s.matrix),color:l})}}for(let{shape:r,kind:a,instances:o}of t.values()){let l=new ai(nc[r],ic("#fff",a),o.length);o.forEach((c,u)=>{l.setMatrixAt(u,c.matrix),l.setColorAt(u,new Ie(c.color))}),l.castShadow=!["glow","clear","beam"].includes(a),l.receiveShadow=l.castShadow,l.computeBoundingSphere(),i.add(l)}}function Up({box:i,textSurface:e}){let t=new rt,n=new rt,s=new rt;t.add(n,s),i(t,0,-.07,0,600,.1,500,"#93b56c"),i(t,-2,.08,.5,124,.2,95,"#b7d18b"),wu.forEach(([l,c,u,h,d])=>i(t,(l+c)/2,.185,(u+h)/2,c-l,.012,h-u,d));for(let[l,c,u,h]of[["pavements","box","#ddd8cb",!1],["roads","box","#7d848c",!1],["medians","box","#72b24e",!1],["stripes","box","#f3f4f1",!1],["roundabouts","disc","#7d848c",!1],["roundaboutGreens","disc","#6fae4c",!1],["treeTrunks","cyl6","#7a5a3a",!1],["treeCrowns","ico","#fff",!0],["palmTrunks","cyl6","#8a6a45",!1],["palmCrowns","cone7","#3f9b4a",!0],["hedges","box","#3f7f35",!1],["flowers","dome","#fff",!1],["lampPosts","cyl6","#8d96a0",!1],["lampHeads","box","#fff3c4",!1],["hills","hill","#fff",!1],["cars","box","#fff",!0],["carWindows","box","#1e293b",!1]])Iu(t,Ru[l],c,u,l==="hills"||l==="treeCrowns"?"flat":l==="lampHeads"?"glow":"matte",h);Iu(n,Ql,"box","#fff"),Iu(n,ec,"pyr","#fff");let r=new ut(nc.disc,ic("#4fb3e6","wet"));r.scale.set(8,.02,5),r.position.set(-36,.22,-9),t.add(r),$l.forEach(([l,c,u,h,d])=>e(l,d,h,t,c,.258,u));let a=[],o=[];for(let[l,c]of Object.entries(Jl)){let u=new rt;if(u.position.set(c.x,.28,c.z),u.rotation.y=c.ry||0,t.add(u),c.round){let d=new ut(nc.disc,ic(c.pad||"#ece7dc"));d.scale.set(c.w/2,.08,c.w/2),d.position.y=-.04,u.add(d)}else i(u,0,-.04,0,c.w,.08,c.d,c.pad||"#ece7dc");o.push({...c,artwork:pp[l]||ap[l],scale:l==="abjAirport"?[.84,1,1.15]:void 0});let h=mp[l];if(h){let[d,,f,,g,y,m,p,T]=h;e(d,T,f,u,g,y,m,!1,p)}else l.startsWith("home_")||e(c.label.toUpperCase(),"#fff",Math.min(c.w*.55,3),u,0,Math.min(c.top*.65,1.4),c.d/2+.03,!1,"#0f3d2e");l.startsWith("home_")||a.push({id:l,city:"abuja",name:c.label,area:Cu[l]?.area||"Abuja",emoji:Cu[l]?.emoji||"\u{1F4CD}",...c,h:c.top,group:u})}my(t,[...o,{x:52,z:-1,y:.2,artwork:op},{x:-56,z:-8,y:.2,artwork:lp},{x:46,z:12,y:.2,artwork:cp}]);for(let l=0;l<4;l++){let c=new rt;c.position.set(-39+l*7,.65,35.8),t.add(c),i(c,0,0,0,.28,.25,2.3,"#f7f5ef"),i(c,0,0,-.1,2.2,.05,.42,"#f7f5ef"),i(c,0,.19,.8,.07,.5,.5,"#0f8a4f"),i(c,0,0,.9,.9,.04,.25,"#f7f5ef")}for(let[l,c,u]of[[0,-17,-30],[1,6,-28],[2,20,-3],[3,40,22],[4,-32,19],[5,-45,-17]]){i(s,c,1.8,u,4.4,2,.12,"#202431");for(let h of[-1.8,1.8])i(s,c+h,.9,u,.09,1.8,.09,"#202431");e(l%2?"ABUJA LIFE":"YOUR AD HERE","#fff",4.2,s,c,1.8,u+.07,!1,l%2?"#206b57":"#276998")}return t.visible=!1,{world:t,homes:n,boards:s,places:a}}var G=Object.freeze({backdrop:"#93b56c",ground:"#b7d18b",groundLight:"#c7e0a5",lawn:"#7fc15a",lawnLight:"#9ad06f",leaf:"#4f9a3c",leafDark:"#3c8434",hedge:"#3f7f35",trunk:"#7a5a3a",water:"#4fb3e6",waterDark:"#67afd5",glass:"#7dd3fc",glassMid:"#4f7fae",glassDark:"#36597d",dark:"#1f2328",darkBlue:"#1e293b",road:"#7d848c",roadDark:"#5b6169",pavement:"#ddd8cb",white:"#f7f5ef",cream:"#efe5cf",brick:"#a9573f",brickLight:"#c87958",pubRed:"#a83232",pubGreen:"#236b48",gold:"#e8b931"}),Pu=G.backdrop;var Lu=[["dubAirport","Dublin Airport","Northside","\u2708\uFE0F",-11,-39,24,10,2.8,"airport","An international airport north of the city, with a terminal, tower and runway."],["dubPhoenix","Phoenix Park","Northside","\u{1F98C}",-32,-19,15,15,1.3,"park","A wide green park on the western side of the city."],["dubCroke","Croke Park","Northside","\u{1F3DF}\uFE0F",15,-25,12,9,2.5,"stadium","The home of Gaelic games, with a pitch and tiered stands."],["dubSpire","The Spire","City centre","\u{1F4CD}",0,-15,3,3,8,"spire","A slender silver landmark on O\u2019Connell Street."],["dubGPO","General Post Office","City centre","\u{1F3DB}\uFE0F",-3,-10,7,4,2.2,"classical","A columned landmark facing O\u2019Connell Street."],["dubPenneys","Penneys","City centre","\u{1F6CD}\uFE0F",-12,-10,5,4,1.8,"shop","A city-centre clothes shop, with brick frontage and broad display windows."],["dubConnolly","Connolly Station","Northside","\u{1F689}",15,-15,8,5,2.2,"station","Rail platforms and a station entrance on the north side."],["dubCustom","The Custom House","Docklands","\u{1F3DB}\uFE0F",17,-5.5,10,4,3.6,"custom","A long neoclassical riverside building with a central dome."],["dubEPIC","EPIC & CHQ","Docklands","\u{1F9F3}",26,-11,8,5,1.8,"warehouse","A restored warehouse and museum precinct in the Docklands."],["dubConvention","Convention Centre","Docklands","\u{1F3E2}",31,-5.5,6,4,3.8,"convention","A modern riverside building with a tilted glass atrium."],["dubHapenny","Ha\u2019penny Bridge","City centre","\u{1F309}",-5,0,1.2,4.7,1.1,"archBridge","The white pedestrian bridge connecting the two banks of the Liffey."],["dubBeckett","Samuel Beckett Bridge","Docklands","\u{1F309}",30,0,2,4.7,4,"harpBridge","A harp-shaped bridge across the river in the Docklands."],["dubTemple","Temple Bar","City centre","\u{1F3BB}",-5,7,7,5,1.9,"pub","Colourful pub fronts, cobbled lanes and a small music courtyard."],["dubCastle","Dublin Castle","City centre","\u{1F3F0}",-13,10,7,6,3,"castle","A stone tower and courtyard among the city-centre streets."],["dubChrist","Christ Church Cathedral","City centre","\u26EA",-21,7,7,5,3.5,"cathedral","A stone cathedral with a central tower and pitched roofs."],["dubGuinness","Guinness Storehouse","City centre","\u{1F37A}",-32,8,9,7,3.7,"guinness","A brick brewery complex topped by a circular glass lookout."],["dubTrinity","Trinity College","City centre","\u{1F393}",7,9,11,9,3.5,"college","A historic campus with a central green, library and campanile."],["dubGrafton","Grafton Street","City centre","\u{1F3B6}",3,17,4,6,2.1,"shoppingStreet","A pedestrian shopping street with colourful fa\xE7ades and busking space."],["dubBrown","Brown Thomas","City centre","\u{1F6CD}\uFE0F",9,18,5,4,2.4,"shop","A department store beside the Grafton Street shopping area."],["dubGreen","St Stephen\u2019s Green","City centre","\u{1F333}",6,26,12,9,1.3,"green","A landscaped city park with paths, trees and a pond."],["dubPatrick","St Patrick\u2019s Cathedral","City centre","\u26EA",-16,21,7,7,4.5,"cathedral","A tall stone cathedral beside a garden on the south side."],["dubWhelans","Whelan\u2019s","City centre","\u{1F3B8}",-5,25,5,4,1.6,"pub","A live-music venue with a warm street frontage."],["dubMerrion","Merrion Square","City centre","\u{1F337}",18,21,8,8,1.2,"park","A garden square framed by Georgian terraces."],["dubCanal","Grand Canal Dock","Docklands","\u2693",28,12,12,9,3,"dock","A waterfront basin, modern offices and a theatre beside the water."],["dubAviva","Aviva Stadium","Docklands","\u{1F3C9}",34,25,10,8,3.2,"stadium","An oval stadium on the southeastern side of this compact map."],["dubGarda","Garda Station","Northside","\u{1F693}",-21,-10,5,4,1.6,"civic","A local station in the northside neighbourhood."],["dubIntreo","Intreo Office","Northside","\u{1F4C4}",-12,-20,5,4,1.8,"civic","A fictional service-office location for the future game."],["dubCitizens","Citizens Information","Northside","\u2139\uFE0F",-4,-23,5,4,1.6,"civic","A fictional information-office location for the future game."],["dubNaija","Nigerian Shop","Northside","\u{1F1F3}\u{1F1EC}",5,-25,5,4,1.5,"shop","An illustrative community shop with Nigerian groceries."],["dubTesco","Tesco","Northside","\u{1F6D2}",24,-22,6,4,1.4,"shop","An illustrative neighbourhood supermarket."],["dubLidl","Lidl","Northside","\u{1F6D2}",33,-21,6,4,1.4,"shop","An illustrative neighbourhood supermarket."],["dubDunnes","Dunnes Stores","City centre","\u{1F6D2}",-24,19,5,4,1.8,"shop","An illustrative city-centre grocery and clothing shop."],["dubChipper","The Chipper","City centre","\u{1F35F}",-33,20,5,4,1.4,"shop","A small local takeaway with a striped shopfront."],["dubKilmainham","Kilmainham Gaol","City centre","\u{1F512}",-39,-8,4,3,2.8,"museum","A former prison and museum telling stories from Irish history."],["dubIMMA","Irish Museum of Modern Art","City centre","\u{1F5BC}\uFE0F",-31,-8,4,3,2.4,"museum","Contemporary art galleries at the historic Royal Hospital Kilmainham."],["dubAudoen","St Audoen\u2019s Church","City centre","\u26EA",-39,-4,4,3,2.5,"classical","A medieval church on the Dubline heritage trail."],["dubMoore","Moore Street Market","Northside","\u{1F955}",-27,-4,4,3,1.8,"market","Open-air produce stalls on one of Dublin\u2019s historic trading streets."],["dubMater","Mater Hospital","Northside","\u{1F3E5}",-19,-4,4,3,2.7,"hospital","A Dublin hospital campus represented as a city service destination."],["dubAbbey","Abbey Theatre","Northside","\u{1F3AD}",-11,-4,4,3,2.5,"theatre","Ireland\u2019s national theatre, with a compact stage-front fa\xE7ade."],["dubKilmainhamCafe","The Barracks Caf\xE9","City centre","\u2615",-39,4,4,3,1.5,"cafe","An illustrative caf\xE9 stop near the western heritage quarter."],["dubGallery","National Gallery of Ireland","City centre","\u{1F3A8}",-15,4,4,3,2.6,"museum","A gallery destination for Irish and European art."],["dubIFSC","Liffey Quay Offices","Docklands","\u{1F3E2}",17,4,4,3,3,"office","An illustrative office block serving the Docklands business district."],["dubArena","3Arena","Docklands","\u{1F3A4}",37,4,4,3,3.2,"theatre","A large indoor venue for concerts and live events."],["dubGardenRemembrance","Garden of Remembrance","Northside","\u{1F33F}",-39,8,4,3,1.3,"park","A quiet memorial garden at the north end of the city centre."],["dubCHQOffice","CHQ Offices","Docklands","\u{1F4BC}",17,8,4,3,2.5,"office","An illustrative office address beside the restored warehouse quarter."],["dubDockCafe","Quayside Coffee","Docklands","\u2615",37,8,4,3,1.6,"cafe","An illustrative coffee stop on the eastern waterfront."],["dubRathminesClinic","Southside Clinic","City centre","\u{1FA7A}",-39,12,4,3,2.1,"hospital","An illustrative walk-in health service for the game map."],["dubPearseLibrary","Pearse Street Library","City centre","\u{1F4DA}",-23,12,4,3,2,"library","A Dublin City Libraries branch with books, study space and events."],["dubIveagh","Iveagh Gardens","City centre","\u{1F337}",-7,12,4,3,1.3,"park","A hidden city garden with formal lawns, fountains and a yew maze."],["dubBordGais","Bord G\xE1is Energy Theatre","Docklands","\u{1F3AD}",17,12,4,3,3.4,"theatre","A modern theatre venue in the Grand Canal Dock quarter."],["dubHotelDock","Canal View Hotel","Docklands","\u{1F6CE}\uFE0F",37,12,4,3,2.8,"hotel","An illustrative hotel for visitors exploring the waterfront."],["dubDublinia","Dublinia","City centre","\u{1F6E1}\uFE0F",-39,16,4,3,2.7,"museum","An interactive Viking and medieval Dublin visitor attraction."],["dubStJames","St James\u2019s Hospital","City centre","\u{1F3E5}",-31,16,4,3,3,"hospital","A major Dublin hospital represented as a public service destination."],["dubNCAD","National College of Art and Design","City centre","\u270F\uFE0F",-7,16,4,3,2.5,"college","An art and design campus in the historic Liberties quarter."],["dubDockGym","Docklands Fitness Club","Docklands","\u{1F3CB}\uFE0F",37,16,4,3,2.2,"gym","An illustrative neighbourhood gym and recreation stop."],["dubHotelWest","Liberties House Hotel","City centre","\u{1F6CF}\uFE0F",-39,20,4,3,2.5,"hotel","An illustrative small hotel in the western city quarter."],["dubCityCinema","City Centre Cinema","City centre","\u{1F3AC}",-7,20,4,3,2.4,"cinema","An illustrative independent cinema with a compact entrance."],["dubRingsendMarket","Ringsend Market Hall","Docklands","\u{1F34E}",25,20,4,3,2,"market","An illustrative neighbourhood market near the south-east docks."],["dubWarMemorial","Irish National War Memorial Gardens","City centre","\u{1F333}",-39,24,4,3,1.2,"park","Formal riverside gardens with memorial features and lawns."],["dubRathminesGym","South City Gym","City centre","\u{1F3CB}\uFE0F",-31,24,4,3,2,"gym","An illustrative local fitness club with a simple street entrance."],["dubSouthCafe","Green Lane Caf\xE9","City centre","\u2615",-23,24,4,3,1.5,"cafe","An illustrative neighbourhood caf\xE9 for a quick break."],["dubDockHotel","Grand Canal Hotel","Docklands","\u{1F6CE}\uFE0F",25,24,4,3,2.7,"hotel","An illustrative hotel beside the Docklands offices and venues."],["dubPhibsboroMarket","Northside Market Hall","Northside","\u{1F9FA}",-19,-28,4,3,1.9,"market","An illustrative local market serving the northside neighbourhood."],["dubNorthCafe","North Circular Caf\xE9","Northside","\u2615",-11,-28,4,3,1.5,"cafe","An illustrative corner caf\xE9 with a small outdoor table area."],["dubNorthHotel","Garden Gate Hotel","Northside","\u{1F6CE}\uFE0F",-19,-32,4,3,2.5,"hotel","An illustrative guesthouse for visitors arriving from the north."],["dubNorthGym","Northside Fitness","Northside","\u{1F3CB}\uFE0F",-11,-32,4,3,2,"gym","An illustrative local gym with a simple street frontage."],["dubPhibsboroLibrary","Phibsboro Library","Northside","\u{1F4DA}",-3,-32,4,3,2,"library","A Dublin City Libraries branch with books and community events."],["dubNorthCinema","Northside Picture House","Northside","\u{1F3AC}",5,-32,4,3,2.4,"cinema","An illustrative small cinema for the game\u2019s northside district."],["dubDockMarket","East Quay Market","Docklands","\u{1F9FA}",13,-32,4,3,1.8,"market","An illustrative market hall for the eastern neighbourhood."]].map(([i,e,t,n,s,r,a,o,l,c,u])=>({id:i,name:e,area:t,emoji:n,x:s,z:r,w:a,d:o,h:l,kind:c,description:u,city:"dublin",arrivalX:s,arrivalZ:r<0?r-o/2-.65:r+o/2+.65}));var Bp=[-28,-18,-5,2,18,30];function gy(i,e){return i<-42||i>40||e<-47||e>33?!1:Math.abs(e)<2.25?Bp.some(t=>Math.abs(i-t)<(t===30?1:.6)):!(i>23.7&&i<30.3&&e>9.2&&e<14.8)}function Op({textSurface:i}){let e=new rt,t=new rt,n=new rt,s=new rt;e.name="Dublin",t.name="Dublin neighbourhoods",n.name="Dublin landmarks",e.add(t,n,s);let r={box:new Un(1,1,1),cyl:new Ft(1,1,1,16),cone:new Rn(1,1,12),sphere:new Ss(1,1),roof:new Rn(1,1,4,1,!1,Math.PI/4)},a=new Map,o=[0,0,0],l=e,c=null;function u(x,v,A,U,P,z,V,ee,X=l,oe=[0,0,0]){let pe=z>.15,Se=`${X.uuid}:${x}:${pe}`;a.has(Se)||a.set(Se,{parent:X,type:x,cast:pe,items:[]}),a.get(Se).items.push({p:[v+o[0],A+o[1],U+o[2]],s:[P,z,V],color:ee,rotation:oe,lotId:c})}let h=(x,v,A,U,P,z,V,ee=l,X)=>u("box",x,v,A,U,P,z,V,ee,X),d=(x,v,A,U,P,z,V=l)=>u("cyl",x,v,A,U,P,U,z,V);function f(x,v,A=1,U=l){d(x,.45*A,v,.07*A,.9*A,G.trunk,U),u("sphere",x,1.1*A,v,.55*A,.7*A,.55*A,G.leaf,U)}function g(x,v,A,U,P,z=G.dark){u("roof",x,v+.35,A,U*.74,.7,P*.74,z)}function y(x,v,A,U,P,z=G.brick,V=l){h(x,P/2,v,A,P,U,z,V),h(x,P+.07,v,A+.15,.14,U+.15,G.dark,V);for(let ee=.45;ee<P-.15;ee+=.6)for(let X=-A/2+.35;X<A/2;X+=.65)h(x+X,ee,v+U/2+.018,.3,.35,.035,G.glass,V)}function m(x,v,A,U,P=1.5){for(let z=0;z<A;z++)d(x-U/2+z*U/(A-1),P/2,v,.11,P,G.cream);h(x,P+.08,v,U+.45,.16,.65,G.cream)}function p(x,v,A=.035){let U=new gr(x.map(z=>new I(z[0]+o[0],z[1]+o[1],z[2]+o[2]))),P=new ut(new ga(U,32,A,5,!1),new fn({color:v,roughness:.65}));e.add(P)}function T(x,v,A,U){h(x,.205,v,A,.035,U,G.waterDark);for(let P=0;P<4;P++)h(x-A*.3+P*A*.2,.228,v+Math.sin(P*3)*U*.25,A*.1,.005,.025,G.glass)}function E(x,v,A=!1){h(0,.23,0,x,.06,v,G.lawn),h(0,.27,0,x-.6,.025,.45,G.pavement),h(0,.27,0,.45,.025,v-.6,G.pavement);for(let U of[-x*.36,x*.36])for(let P of[-v*.32,0,v*.32])f(U,P,1.15);A&&T(x*.2,-v*.22,x*.36,v*.3);for(let U of[-x*.22,x*.22])h(U,.5,v*.2,1.1,.13,.35,G.trunk),h(U,.7,v*.34,1.1,.4,.08,G.trunk)}function b(x,v){if(o=[x,.24,0],h(0,.2,0,v==="harpBridge"?1.8:1.05,.16,4.8,G.white),v==="archBridge")for(let A of[-.53,.53]){p([[A,.3,-2.4],[A,.9,-1.2],[A,1.05,0],[A,.9,1.2],[A,.3,2.4]],G.white,.055);for(let U=-2.2;U<=2.2;U+=.35)h(A,.5+.3*(1-Math.abs(U)/2.4),U,.035,.55,.035,G.white)}else if(v==="harpBridge"){p([[.8,.3,1.5],[.8,2.1,.6],[.8,4,-.7],[.8,4.6,-2.1]],G.white,.14);for(let A=0;A<9;A++){let U=-2.1+A*.5;p([[.8,4.2,-1.8],[.8,.34,U]],G.white,.018)}}else for(let A of[-.5,.5])h(A,.55,0,.07,.55,4.7,G.road);o=[0,0,0]}h(0,-.15,0,450,.12,450,G.backdrop),h(-1,.06,-7,84,.25,80,G.ground),h(-1,.2,-22,83,.018,47,G.groundLight),h(-1,.2,18,83,.018,30,G.groundLight),T(-1,0,84,4.5),T(64,4,48,68);for(let x of[-2.9,2.9])h(-1,.26,x,83,.06,.55,G.pavement),h(-1,.235,x+(x<0?-.75:.75),83,.03,.95,G.roadDark);for(let x of[-31,-18,-6,5,15,32])h(-1,.24,x,82,.035,.75,G.road);for(let x of[-40,-25,-9,2,14,22,39])for(let[v,A]of[[-19,29],[19,28]])h(x,.24,v,.65,.035,A,G.road);h(2,.245,-11,1.7,.035,18,G.roadDark),h(2,.266,-11,.16,.025,18,G.lawnLight);for(let x of[-3.65,3.65])for(let v=-38;v<40;v+=2)h(v,.26,x,.8,.015,.035,G.white);for(let x of Bp)b(x,x===-5?"archBridge":x===30?"harpBridge":"plain");for(let x of[-5,-4.75])h(-3,.278,x,69,.025,.03,G.roadDark);h(-7,.58,-4.86,3.5,.6,.5,"#73549b"),h(-7,.84,-4.86,3.6,.06,.55,G.white),h(-7,.64,-4.59,3.1,.28,.025,G.glassMid);let L=[];for(let x of Lu){if(L.push({...x}),x.kind.endsWith("Bridge"))continue;let{w:v,d:A,kind:U}=x;if(o=[x.x,.26,x.z],l=n,c=x.id,h(0,0,0,v,.035,A,["park","green"].includes(U)?G.lawn:G.pavement),U==="airport"){h(0,.05,-2.7,23,.04,1.4,G.roadDark);for(let P=-10;P<11;P+=1.5)h(P,.078,-2.7,.7,.012,.055,G.white);y(0,1.3,10,2.5,1.3,G.cream),h(0,.7,2.57,8,.5,.025,G.glass),d(-7,1.1,1.3,.28,2.2,G.cream),h(-7,2.4,1.3,1,.6,.9,G.glass);for(let P of[-7,-2,3,8])h(P,.48,-.3,.22,.22,1.8,G.white),h(P,.48,-.6,1.8,.04,.42,G.white),h(P,.65,.4,.06,.4,.4,G.leaf)}else if(U==="park"||U==="green")E(v-.2,A-.2,U==="green");else if(U==="spire")d(0,2.1,0,.11,4.2,"#b1bcc1"),u("cone",0,6.15,0,.11,4.1,.11,"#cbd1d3"),d(0,.035,0,1.2,.08,"#e0dcca");else if(U==="stadium"){u("cyl",0,1.1,0,v*.47,2.2,A*.46,G.cream),u("cyl",0,1.2,0,v*.4,2.25,A*.37,G.leafDark),h(0,2.35,0,v*.58,.035,A*.47,G.lawn),h(0,2.38,0,.045,.02,A*.47,G.white);for(let P of[-v*.26,v*.26])h(P,2.6,0,.06,.48,1.2,"#eae9da"),h(P,2.85,0,.12,.05,1.2,"#eae9da");for(let P of[-v*.38,v*.38])for(let z of[-A*.38,A*.38])d(P,1.6,z,.045,3.2,"#8e9b9e"),h(P,3.25,z,.65,.15,.25,"#fff4c9")}else if(U==="classical"||U==="custom")y(0,-.5,v*.85,A*.62,1.7,"#d8d1bb"),m(0,A*.3,U==="custom"?10:6,v*.78,1.6),g(0,1.8,-.5,v*.9,A*.65),U==="custom"&&(h(0,2.1,-.5,1.35,1.3,1.35,"#dfd7bc"),u("sphere",0,2.95,-.5,.8,.8,.8,"#748e86"),d(0,3.65,-.5,.08,.7,"#d4d9ce"));else if(U==="convention"){y(-.5,-.3,4,2.9,3,G.cream),u("cyl",.7,1.9,.7,1.1,3.5,1.1,G.glassMid,e,[0,0,-.2]);for(let P of[.5,1,1.5,2,2.5,3])h(.5,P,1.73,1.8,.04,.035,G.white)}else if(U==="castle"){y(0,-1,5,2,2,G.brickLight),d(-2,1.4,1,1,2.8,G.leafDark);for(let P=0;P<8;P++){let z=P/8*Math.PI*2;h(-2+Math.cos(z)*.8,2.9,1+Math.sin(z)*.8,.27,.38,.27,G.leaf)}h(.7,.04,1,3,.035,2,G.lawn)}else if(U==="cathedral")y(0,-.3,v*.3,A*.85,1.5,G.cream),g(0,1.6,-.3,v*.4,A*.9,G.dark),y(0,0,v*.75,A*.3,1.3,G.cream),g(0,1.5,0,v*.8,A*.4,G.dark),y(-v*.25,-A*.25,1.3,1.4,x.h-.5,G.cream),u("cone",-v*.25,x.h-.15,-A*.25,.9,.7,.9,G.darkBlue);else if(U==="guinness"){y(0,0,6,4,2.8,"#9a6451"),y(-3,-1,1.7,3.6,2.1,"#b58166"),d(0,3.05,0,1.45,.7,"#8daeb4"),d(0,3.45,0,1.6,.12,"#394849");for(let P of[-2,2])d(P,2.6,-2.2,.15,2.6,"#a67359")}else if(U==="college"){let P=Math.min(v/11,A/9);h(0,.02*P,0,8*P,.04*P,5.4*P,G.lawn),y(0,-3*P,8.8*P,1.3*P,1.6*P,G.cream),y(-4.2*P,.2*P,1.3*P,5*P,1.6*P,G.cream),y(4.2*P,.2*P,1.3*P,5*P,1.6*P,G.cream),m(0,3*P,8,7*P,1.5*P),h(0,.03*P,0,.5*P,.035*P,6*P,G.pavement),d(0,1.2*P,-.4*P,.32*P,2.4*P,G.cream),h(0,2.4*P,-.4*P,.8*P,.2*P,.8*P,G.cream),u("cone",0,2.85*P,-.4*P,.6*P,.7*P,.6*P,G.leafDark);for(let z of[-2.5,2.5])f(z*P,P,P)}else if(U==="dock")T(-1,0,6.6,5.6),h(-1,.29,-3,7.1,.06,.4,G.cream),y(4,-.3,2,6,2.7,G.glassMid),h(4,1.5,2.73,1.7,1.8,.025,G.glass),y(-4.3,0,1.9,6,2,G.cream),h(-1.5,.5,0,2,.3,.7,G.white),h(-1.3,.72,0,.8,.3,.58,G.glassMid);else if(U==="station"){y(0,.8,6,2,1.9,G.cream),g(0,2,.8,6.3,2.3);for(let P of[-2,-1,0,1,2])h(P,.06,-1,.15,.025,3,G.roadDark),h(P+.25,.06,-1,.15,.025,3,G.roadDark);h(-.2,.55,-1.2,2.5,.7,.6,G.pubGreen)}else if(U==="warehouse")y(0,0,7,3,1.25,"#9c775c"),g(0,1.3,0,7.3,3.4);else if(U==="pub"||U==="shoppingStreet"){let P=U==="pub"?["#963e3a","#3b7057","#b78244"]:["#ae7053","#d5b495","#788478"];for(let z=0;z<3;z++){let V=(z-1)*v*.28;y(V,-.5,v*.27,A*.55,1.5+z%2*.4,P[z]),h(V,.3,A*.21,v*.23,.55,.06,z===0&&U==="pub"?G.pubRed:G.darkBlue),h(V,.65,A*.27,v*.27,.15,.3,G.cream),g(V,1.7,-.5,v*.28,A*.6)}if(U==="pub"){h(0,.2,A*.38,1.2,.08,.7,"#735240");for(let z of[-1,1])d(z,.3,A*.37,.25,.55,"#765b43")}}else if(U==="hospital")y(-v*.2,-.35,v*.42,A*.56,2.25,G.white),y(v*.22,-.25,v*.42,A*.66,1.75,G.cream),h(-v*.2,2.28,-.35,v*.44,.12,A*.59,G.glassMid),h(0,1.25,A*.34,1.05,.16,.05,G.pubRed),h(0,1.25,A*.34,.18,.72,.05,G.pubRed);else if(U==="library"){y(0,-.25,v*.82,A*.72,1.75,G.cream),h(0,1.1,A*.37,v*.74,.46,.11,G.brickLight);for(let P=-v*.3;P<=v*.3;P+=.65)h(P,.86,A*.39,.1,.9,.08,G.darkBlue);g(0,1.85,-.25,v*.86,A*.75,G.brick)}else if(U==="office"||U==="hotel"){let P=Math.min(x.h||3.2,U==="hotel"?4.4:5.2),z=v*.58;y(0,-.2,z,A*.65,P,U==="hotel"?G.cream:G.glassMid);for(let V=.5;V<P-.2;V+=.48)h(0,V,A*.33,z*.84,.07,.05,G.glass);h(0,P+.15,-.2,z*.82,.18,A*.8,U==="hotel"?G.brick:G.dark),U==="hotel"&&h(0,.06,A*.46,v*.5,.05,.48,G.water)}else if(U==="cafe"){y(0,-.25,v*.76,A*.64,1.55,G.brickLight),g(0,1.6,-.25,v*.8,A*.68,G.dark),h(0,.95,A*.33,v*.62,.55,.06,G.glassMid),h(0,.53,A*.39,v*.68,.17,.38,G.pubRed);for(let P of[-v*.25,0,v*.25])h(P,.12,A*.4,.55,.05,.42,G.trunk),d(P,.31,A*.4,.035,.38,G.trunk)}else if(U==="market"){y(0,-.35,v*.8,A*.43,.8,G.cream),g(0,.85,-.35,v*.84,A*.47,G.brick);for(let P=-v*.32;P<=v*.32;P+=v*.32)h(P,.52,A*.05,v*.23,.7,.08,[G.pubRed,G.pubGreen,G.gold][Math.round((P/v+.32)*3)%3]),h(P,.18,A*.4,.8,.3,.48,G.trunk)}else if(U==="theatre"||U==="cinema"){y(0,-.3,v*.84,A*.7,2.1,U==="theatre"?G.brick:G.darkBlue),h(0,1.65,A*.37,v*.72,.35,.08,G.pubRed),h(0,1.66,A*.42,v*.56,.12,.025,G.gold);for(let P of[-v*.28,v*.28])h(P,.85,A*.37,.3,.8,.05,G.glassMid);if(U==="theatre")for(let P of[-v*.3,-v*.15,0,v*.15,v*.3])d(P,2.35,-.3,.12,.3,G.gold)}else if(U==="gym")y(0,-.2,v*.84,A*.7,1.4,G.glassMid),h(0,.95,A*.36,v*.78,.23,.06,G.white),h(0,.06,-A*.12,v*.72,.035,A*.3,G.lawn),h(0,.085,-A*.12,.035,.015,A*.28,G.white);else if(U==="museum")y(0,-.35,v*.86,A*.58,1.65,G.white),m(0,A*.23,5,v*.72,1.45),g(0,1.78,-.35,v*.9,A*.62,G.darkBlue),h(0,.55,A*.31,v*.38,.72,.045,G.glassMid);else{let P=x.id==="dubNaija"?G.pubGreen:U==="civic"?G.cream:G.brick;y(0,-.2,v*.8,A*.65,x.h-.2,P),h(0,.45,A*.28,v*.68,.55,.04,G.glassDark),h(0,.84,A*.31,v*.78,.16,.25,x.id==="dubLidl"?G.gold:x.id==="dubTesco"?G.pubRed:G.cream)}["park","green","spire","stadium"].includes(U)||i(x.name.toUpperCase(),G.white,Math.min(v*.65,4.8),n,x.x,1+o[1],x.z+A*.45,!1,U==="pub"?G.pubRed:G.hedge),o=[0,0,0],l=e,c=null}let R=0;function D(x,v,A,U,P=0){return!Lu.some(z=>Math.abs(x-z.x)<(A+z.w)/2+P&&Math.abs(v-z.z)<(U+z.d)/2+P)}function N(x,v,A){D(x,v,1.7,2.7,.12)&&(h(x,.27,v,1.7,.06,2.7,G.pavement,t),y(x,v,1.5,1.8,1.65,A,t),u("roof",x,2,v,1.15,.7,1.4,G.dark,t),h(x+.45,2.25,v-.35,.2,.6,.2,G.brick,t),h(x,.54,v+.92,.3,.68,.04,[G.glassDark,G.pubRed,G.pubGreen,G.gold][R%4],t),h(x,.33,v+1.2,1.4,.08,.48,G.lawn,t),R++)}for(let x=0;x<3;x++)for(let v=0;v<10;v++)N(18+v*2,-33+x*2.9,["#b08a69","#b07761","#c0a186"][v%3]);for(let x=0;x<2;x++)for(let v=0;v<10;v++)N(-38+v*1.95,26+x*3,["#b28462","#bc9678","#a8755b"][v%3]);for(let x=0;x<3;x++)for(let v=0;v<8;v++)N(-39+v*2,-31+x*3,["#a97d65","#c2a487","#af8a70"][v%3]);for(let x=0;x<8;x++)N(5+x*2,-38.5,["#b77a59","#c58a63","#a96d55"][x%3]);for(let x=0;x<24;x++){let v=-38+x*3.2,A=x%2?-3:3;D(v,A,.8,.8,.35)&&f(v,A,.65)}for(let[x,v]of[[-39,-14],[-24,-26],[-9,-30],[10,-18],[20,-29],[38,19],[-9,21],[15,29],[24,29]])D(x,v,1.5,1.5,.35)&&f(x,v,1.2);for(let[x,v]of[[-19,3.6],[9,-3.6],[24,3.6]])h(x,.57,v,1.7,.65,.6,G.gold),h(x,.87,v,1.7,.08,.65,G.cream),h(x,.62,v+.32,1.4,.32,.025,G.glassDark);for(let x=0;x<16;x++){let v=-36+x*4.6,A=x%2?-6:5;h(v,.45,A,.8,.4,.44,[G.cream,G.white,G.leafDark][x%3]),h(v,.6,A,.4,.16,.4,G.glassMid)}for(let[x,v,A,U]of[["RIVER LIFFEY",-15,0,9],["DUBLIN BAY",53,15,11],["NORTHSIDE",-14,-33,8],["CITY CENTRE",-3,31,8],["DOCKLANDS",28,19,8]])i(x,x==="RIVER LIFFEY"||x==="DUBLIN BAY"?"#d8edf0":"#7f8e70",U,e,v,.3,A);for(let[x,v]of[[-22,-4],[22,5],[-22,31]]){h(x,1.5,v,3.4,1.4,.1,"#253930",s);for(let A of[-1.2,1.2])h(x+A,.75,v,.07,1.5,.07,"#253930",s);i("DUBLIN LIFE","#fff",3.2,s,x,1.5,v+.06,!1,"#28644e")}let S=new fn({color:"#ffffff",roughness:.88});for(let{parent:x,type:v,cast:A,items:U}of a.values()){let P=new ai(r[v],S,U.length),z=new ht;U.forEach((V,ee)=>{z.position.set(...V.p),z.scale.set(...V.s),z.rotation.set(...V.rotation),z.updateMatrix(),P.setMatrixAt(ee,z.matrix),P.setColorAt(ee,new Ie(V.color))}),P.userData.category=x===t?"homes":x===n?"landmarks":"environment",P.userData.lotIds=[...new Set(U.map(V=>V.lotId).filter(Boolean))],P.castShadow=A,P.receiveShadow=!0,P.computeBoundingSphere(),x.add(P)}return e.visible=!1,e.userData.houses=R,e.userData.palette=G,e.userData.lotCount=L.length,e.userData.batchCount=a.size,e.userData.landmarks=n,{world:e,homes:t,landmarks:n,boards:s,places:L,isLand:gy}}var Ke=i=>document.getElementById(i),Fa=Ke("map"),on=new kl({antialias:!0,alpha:!1});on.setPixelRatio(Math.min(devicePixelRatio,2));on.setSize(innerWidth,innerHeight);on.shadowMap.enabled=!0;on.shadowMap.type=Go;on.toneMapping=Zo;on.toneMappingExposure=1;on.setClearColor("#67afd5");Fa.appendChild(on.domElement);on.domElement.setAttribute("aria-label","3D city map. Drag to pan, scroll to zoom.");on.domElement.tabIndex=0;var hs=new na,Tt=new Ut(38,innerWidth/innerHeight,.1,900),tt=new Vl(Tt,on.domElement);tt.enableDamping=!0;tt.dampingFactor=.09;tt.minDistance=7;tt.maxDistance=110;tt.maxPolarAngle=Math.PI*.44;tt.minPolarAngle=.18;tt.screenSpacePanning=!1;Tt.position.set(3.75,37.5,26.25);tt.target.set(2.25,0,1.5);hs.add(new va("#eaf4ff","#c9b99a",.9));var _i=new Rs("#ffffff",1.6);_i.position.set(32,56,24);_i.castShadow=!0;_i.shadow.mapSize.set(2048,2048);Object.assign(_i.shadow.camera,{left:-50,right:50,top:50,bottom:-50,near:1,far:120});_i.shadow.normalBias=.035;_i.shadow.bias=-2e-4;hs.add(_i);var Du=new Map,Nu=new Map,_y=new jl,Mn=new rt,Vi=new rt,Dr=new rt;hs.add(Mn,Vi,Dr);var oc=i=>(Du.has(i)||Du.set(i,new fn({color:i,roughness:.95})),Du.get(i));function _e(i,e,t,n,s,r,a,o){let l=new ut(new Un(s,r,a),oc(o));return l.position.set(e,t,n),l.castShadow=r>.15,l.receiveShadow=!0,i.add(l),l}function Jt(i,e,t,n,s,r,a,o=s,l=12){let c=new ut(new Ft(s,o,r,l),oc(a));return c.position.set(e,t,n),c.castShadow=!0,c.receiveShadow=!0,i.add(c),c}function Oa(i,e,t,n,s,r){let a=new ut(new ns(s,20,10,0,Math.PI*2,0,Math.PI/2),oc(r));return a.position.set(e,t,n),a.castShadow=!0,i.add(a),a}function ji(i,e,t,n,s,r,a,o=!0,l=null){let c=document.createElement("canvas");c.width=1024,c.height=o?128:384;let u=c.getContext("2d");l&&(u.fillStyle=l,u.fillRect(0,0,c.width,c.height)),u.fillStyle=e,u.textAlign="center",u.textBaseline="middle";let h=o?90:94;do u.font=`800 ${h}px Arial`,h-=2;while(u.measureText(i).width>950&&h>16);u.fillText(i,512,c.height/2);let d=new ca(c);d.colorSpace=Lt;let f=new ut(new ws(t,t*c.height/1024),new nn({map:d,transparent:!l,depthWrite:!!l,side:Wt}));return o&&(f.rotation.x=-Math.PI/2),f.position.set(s,r,a),n.add(f),f}function xy(i,e,t,n){_e(Mn,i,.211,e,t,.023,n,"#969c9f")}_e(Mn,25,-.16,-20,250,.1,230,"#67afd5");[[0,-11.4,42,18,"#a7cc86"],[-4.275,7.65,25.05,13.5,"#c7e0a5"],[15,7.5,12.9,13.8,"#c7e0a5"],[5.1,-.75,2.7,2.5,"#c7e0a5"],[6,15.3,34.5,2.7,"#ecd9a6"],[8.25,18.525,33.9,3.6,"#d9dccf"],[-23.85,-11.4,6,18,"#a7cc86"]].forEach(([i,e,t,n,s])=>_e(Mn,i,.05,e,t,.3,n,s));ji("MAINLAND","#759a58",8,Mn,-12,.217,-17.4);ji("ISLAND","#93ad73",6,Mn,-9,.217,1.5);ji("LAGOS LAGOON","#d0e8f2",8,Mn,11.4,.01,-.9);ji("ATLANTIC OCEAN","#c3e2ef",12,Mn,23,.01,23);ji("EKO ATLANTIC","#82917e",7,Mn,11,.217,18.7);[[0,-4.5,33,.5],[-1.2,2.175,.5,2.55],[-4.575,2.4,22.65,.5],[12.75,6,8.7,.5],[8.25,19.575,33,.42],[-23.1,-11.4,.45,17.4]].forEach(i=>xy(...i));function qp(i,e,t,n=!1,s=!1){let r=new rt;r.position.set(i,0,e),n&&(r.rotation.y=Math.PI/2),Mn.add(r),_e(r,0,.29,0,.52,.13,t,"#a1a7ab");for(let a of[-1,1]){_e(r,a*.3,.43,0,.045,.13,t,"#c5c8ca");for(let o=-t/2+.25;o<t/2;o+=.6)Jt(r,a*.22,-.15,o,.04,.8,"#999e9c")}if(s)for(let a of[-t*.3,t*.3]){_e(r,0,1.5,a,.08,2.5,.08,"#eee6d6");for(let o of[-1,1]){let l=[new I(0,2.6,a),new I(0,.4,a+o*t*.35)];r.add(new Ai(new Dt().setFromPoints(l),new ts({color:"#e2dfd2"})))}}return r}qp(-1.2,-.75,3.3);qp(7.95,6,1.2,!0,!0);var yy=async i=>(Nu.has(i)||Nu.set(i,_y.loadAsync(`assets/${i}.glb`).then(e=>e.scene)),Nu.get(i));async function mi(i,e,t,n=[0,0,0],s=null,r=0){let a=await yy(e),o=a.clone(!0);o.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0,s&&(d.material=d.material.clone(),d.material.color.set(s)))});let l=new dn().setFromObject(o),c=l.getCenter(new I),u=t/(l.getSize(new I).y||1);o.position.set(-c.x,-l.min.y,-c.z);let h=new rt;return h.add(o),h.scale.setScalar(u),h.position.set(...n),h.rotation.y=r,i.add(h),h}var cs=await fetch("places.json").then(i=>{if(!i.ok)throw Error("Map data could not load");return i.json()});cs.push({id:"airport",name:"Airport",x:-35,z:-12,w:21,d:19,h:2,models:[]},{id:"refinery",name:"Refinery",x:-25,z:8,w:13,d:13,h:2.6,models:[]});var Yp={shrine:"\u{1F3B7}",viewingCentre:"\u26BD",mamaPut:"\u{1F372}",yabaHub:"\u{1F4A1}",balogun:"\u{1F9FA}",freedomPark:"\u{1F3AD}",ikoyiGym:"\u{1F3CB}\uFE0F",office:"\u{1F3E2}",clubEko:"\u{1FAA9}",lcc:"\u{1F309}",mall:"\u{1F6CD}\uFE0F",library:"\u{1F4DA}",elegushi:"\u{1F3D6}\uFE0F",hospital:"\u{1F3E5}",salon:"\u{1F487}\u{1F3FE}\u200D\u2640\uFE0F",rooftop:"\u{1F56F}\uFE0F",policeStation:"\u{1F693}",church:"\u26EA",mosque:"\u{1F54C}",naijaRadio:"\u{1F4FB}",pollingUnit:"\u{1F5F3}\uFE0F",ekoHotel:"\u{1F3E8}",polanco:"\u{1F698}",boatCruise:"\u26F5",golfClub:"\u26F3",courthouse:"\u2696\uFE0F",unilag:"\u{1F393}",casino:"\u{1F3B0}",mindSpace:"\u{1FAF6}\u{1F3FE}",stadium:"\u{1F3DF}\uFE0F",ojuelegba:"\u{1F3B1}"},vy={shrine:"Music and nightlife on the Mainland.",yabaHub:"The technology hub in Yaba.",balogun:"Colourful market stalls on Lagos Island.",lcc:"Forest trails and an elevated canopy walkway.",elegushi:"The sandy shoreline on the Atlantic.",unilag:"University buildings, gardens, and sports courts.",freedomPark:"Gardens and paths in the heart of the Island.",golfClub:"A green course beside the Lekki\u2013Ikoyi Link.",boatCruise:"The dock on Lagos Lagoon.",ekoHotel:"The hotel grounds on Lagos Island.",stadium:"A football stadium on the Mainland."},os=null,sc=!0,ki=!0,zi=!0,xi=!1,zn=null,$t="lagos";cs.forEach(i=>i.city="lagos");Fa.dataset.city=$t;var Nr=[],rc=[],Uu=0;function gi(i){rc.push(i.catch(e=>(console.warn(e),null)).finally(()=>{Uu++,Ke("progress").textContent=`Building the city \xB7 ${Math.round(Uu/rc.length*100)}%`,Ke("loadbar").style.width=`${Uu/rc.length*100}%`}))}function Fi(i,e,t,n,s,r=1.2){ji(e,"#ffffff",r,i,t,n,s,!1,"#008751")}function Fp(i,e,t){_e(i,0,.008,0,e,.025,t,"#8aba65"),_e(i,0,.025,0,.12,.02,t,"#d5ccaa"),_e(i,0,.025,0,e,.02,.12,"#d5ccaa")}function by(i,e){let t=i.id;if(t==="airport"){_e(e,0,-.015,0,21,.05,19,"#afb59d"),_e(e,0,.03,-6,20,.04,2.3,"#50595c");for(let n=-9;n<10;n+=1.2)_e(e,n,.055,-6,.6,.015,.07,"#ecebd8");_e(e,0,.03,-2,20,.04,1.2,"#95998e"),_e(e,0,.6,3,9,1.2,3,"#dce2dc"),_e(e,0,1.23,3,9.3,.08,3.2,"#838f94"),_e(e,0,.6,4.51,8,.6,.025,"#73a1b4"),Jt(e,-6,1.3,3,.22,2.6,"#dce0dd"),_e(e,-6,2.7,3,.8,.5,.7,"#6e9eae");for(let n=0;n<4;n++){let s=new rt;s.position.set(-6+n*4,.5,.1),e.add(s);let r=Jt(s,0,0,0,.13,2,"#f0f0e7",.08);r.rotation.x=Math.PI/2,_e(s,0,0,0,1.9,.045,.4,"#e9ebe3"),_e(s,0,.09,.7,.05,.35,.4,"#97afb8"),_e(s,0,0,.7,.7,.04,.2,"#e5e9e0")}Fi(e,"LAGOS AIRPORT",0,1,4.54,3)}if(t==="refinery"){_e(e,0,-.015,0,13,.05,13,"#c9c6b7");for(let n=0;n<5;n++){let s=-4.6+n*2.25;Jt(e,s,.8,-3,.9,1.6,"#d7d7ce"),Oa(e,s,1.6,-3,.9,"#c6c9c3"),Jt(e,s,.5,0,.85,1,"#bfc4bf")}for(let n=0;n<3;n++){Jt(e,-4+n*2.2,1.8,3,.35,3.6,"#c7c9c1");for(let s=.5;s<3.6;s+=.55)Jt(e,-4+n*2.2,s,3,.41,.05,"#dfc05c")}_e(e,3,.7,3,3,1.4,2.3,"#969b93");for(let n=0;n<2;n++)Jt(e,2.5+n,2.3,3,.17,3.5,"#c1c4ba");for(let n=0;n<5;n++)_e(e,-4+n*2.1,.4,4.9,1.8,.09,.09,"#9d8d57");Fi(e,"REFINERY",0,.8,5.9,2.6)}if(t==="mosque"&&(_e(e,0,.35,0,1.1,.7,1,"#f4efe6"),Oa(e,0,.7,0,.38,"#059669"),Jt(e,.62,.65,.4,.09,1.3,"#f4efe6",.11),Oa(e,.62,1.3,.4,.11,"#059669")),t==="courthouse"){_e(e,0,.04,0,1.5,.08,1.15,"#d6d3cc"),_e(e,0,.43,-.12,1.3,.7,.8,"#f4efe6");for(let s=-.5;s<=.5;s+=.25)Jt(e,s,.39,.4,.045,.62,"#f8fafc");_e(e,0,.74,.02,1.42,.08,.98,"#e7e0d2");let n=new ut(new Rn(.86,.32,4),oc("#7c2d12"));n.position.set(0,.94,.02),n.rotation.y=Math.PI/4,e.add(n),Fi(e,"HIGH COURT",0,.74,.52)}if(t==="church"&&(_e(e,0,1.35,0,.06,.42,.06,"#e3be60"),_e(e,0,1.42,0,.24,.06,.06,"#e3be60")),t==="hospital"&&(_e(e,0,1.62,0,.5,.12,.14,"#e5484d"),_e(e,0,1.62,0,.14,.12,.5,"#e5484d")),t==="library"||t==="mindSpace"||t==="naijaRadio"||t==="casino"){let n=t==="library",s=t==="casino";if(_e(e,0,n?.55:.4,-.1,1.2,n?1.1:.8,1,n?"#6d5a9c":s?"#2a1838":"#e8f3ec"),_e(e,0,n?1.13:.83,-.1,1.28,.06,1.08,n?"#b9a8e6":"#52b788"),_e(e,0,.3,.41,.95,.26,.02,"#bde0fe"),Fi(e,i.name.toUpperCase(),0,.65,.43),s&&Oa(e,0,.85,-.1,.36,"#c9a227"),t==="naijaRadio"){Jt(e,.85,1.3,0,.025,2.6,"#a4a9ae");for(let r=0;r<3;r++)_e(e,.85,1.5+r*.4,0,.45,.025,.03,"#b9c0c5")}}if(t==="pollingUnit"){for(let n of[-.55,.55])for(let s of[-.4,.4])Jt(e,n,.32,s,.02,.64,"#cbd5e1");[-.45,-.15,.15,.45].forEach((n,s)=>_e(e,n,.68,0,.3,.06,.95,s%2?"#ffffff":"#008751")),_e(e,0,.22,0,.8,.04,.4,"#8b6a4a"),Fi(e,"POLLING UNIT",0,.5,.52)}if(t==="mall"){_e(e,0,.53,0,2.5,1.05,1.5,"#f4efe6"),_e(e,0,1.08,0,2.7,.12,1.7,"#e0e3df");for(let n of[-.75,0,.75])_e(e,n,.35,.76,.45,.7,.03,"#273c4c");Fi(e,"THE PALMS",0,.88,.8,1.7)}if(t==="balogun"){let n=["#efb23b","#279ea1","#535ac0","#d83f58","#54a861"];for(let s=0;s<5;s++)for(let r=0;r<3;r++)_e(e,(s-2)*.76,.4,r*.76-.4,.7,.07,.72,n[(s+r)%5]),_e(e,(s-2)*.76,.17,r*.76-.4,.65,.32,.64,"#b59768")}if(t==="freedomPark"||t==="golfClub"||t==="ekoHotel"){if(Fp(e,i.w,i.d),t==="ekoHotel"){_e(e,-.8,.032,.7,1.3,.025,.75,"#52bcd5");for(let n=0;n<4;n++)gi(mi(e,"commercial/detail-parasol-a",.35,[-1.4+n*.7,0,1.35]))}if(t==="golfClub"){_e(e,.55,.03,0,.75,.02,.45,"#69bdd7");for(let n of[-1,1])Jt(e,n,.42,-1.2,.01,.8,"#f3f1e1"),_e(e,n+.09,.76,-1.2,.18,.13,.02,"#e24646")}}if(t==="unilag"){Fp(e,i.w,i.d),_e(e,1.8,.03,1.2,2.5,.02,1.5,"#bc5e3c"),_e(e,1.8,.047,1.2,2,.015,1,"#7ead62"),_e(e,-.8,.03,1.25,2,.02,1.4,"#688f55");for(let n=0;n<6;n++)gi(mi(e,"suburban/tree-small",.65,[-3+n*1.15,0,2.1]))}if(t==="lcc"){_e(e,0,.012,0,6.7,.035,3.8,"#81ab60");for(let n=0;n<27;n++){let s=(Math.sin(n*127.1)*.5+.5)*5.8-2.9,r=(Math.cos(n*61.3)*.5+.5)*3.3-1.65;gi(mi(e,n%3?"suburban/tree-small":"suburban/tree-large",1+n*7%9*.08,[s,0,r]))}for(let n=0;n<3;n++){let s=_e(e,-1.9+n*1.5,.95,-.5+n*.55,1.7,.045,.25,"#aa8b5a");s.rotation.y=-.35;for(let r of[-2.6+n*1.5,-1.2+n*1.5])Jt(e,r,.58,-.5+n*.55,.025,1.12,"#9a7c49")}Fi(e,"CANOPY WALK",-2.5,.27,1.7,1.5)}if(t==="elegushi"){for(let n=0;n<9;n++)gi(mi(e,`commercial/detail-parasol-${n%2?"a":"b"}`,.55,[-2.6+n*.65,0,.45]));Fi(e,"ELEGUSHI",-1.5,.28,-.35)}if(t==="stadium"){_e(e,0,.02,0,2.4,.04,1.4,"#3f8f3a"),_e(e,0,.05,0,.025,.008,1.4,"#fff");let n=new ut(new Ft(1.55,1.2,.45,40,1,!0),new fn({color:"#c6d9ca",side:Wt}));n.scale.z=.7,n.position.y=.27,e.add(n);for(let s of[-1.65,1.65])for(let r of[-.95,.95])Jt(e,s,.7,r,.022,1.4,"#a4a9ae"),_e(e,s,1.4,r,.32,.13,.08,"#fffae5");Fi(e,"STADIUM",0,.33,1.14)}t==="boatCruise"&&gi(mi(e,"pirate/boat-row-small",.35,[.4,.03,.4]))}for(let i of cs){if(i.id.startsWith("home_")&&i.id!=="home_yaba")continue;let e=new rt;e.position.set(i.x,.205,i.z),Mn.add(e),i.group=e,_e(e,0,-.012,0,i.w,.03,i.d,"#e4e5d6"),by(i,e);for(let n of i.models)gi(mi(e,n.model,n.height,n.position,n.tint));let t=document.createElement("button");t.className="label",t.innerHTML=`<span>${Yp[i.id]||(i.id==="airport"?"\u2708\uFE0F":i.id==="refinery"?"\u{1F6E2}\uFE0F":"\u{1F3E0}")}</span>${i.name}`,t.setAttribute("aria-label",`Select ${i.name}`),t.onclick=()=>cc(i),Ke("labels").appendChild(t),Nr.push({place:i,button:t,point:new I(i.x,.205+i.h,i.z)})}var ls=Up({box:_e,textSurface:ji});hs.add(ls.world);cs.push(...ls.places);var Gi=Op({textSurface:ji});hs.add(Gi.world);cs.push(...Gi.places);for(let i of[...ls.places,...Gi.places]){let e=document.createElement("button");e.className="label",e.hidden=!0,e.innerHTML=`<span>${i.emoji}</span>${i.name}`,e.setAttribute("aria-label",`Select ${i.name}`),e.onclick=()=>cc(i),Ke("labels").appendChild(e);let t=i.tag||[0,i.h,0];Nr.push({place:i,button:e,point:new I(i.x+t[0],.28+t[1],i.z+t[2])})}var kp={dubHapenny:110,dubTrinity:109,dubSpire:108,dubAirport:107,dubGreen:106,dubGuinness:105,dubBeckett:104,dubTemple:103,abjAssembly:100,abjAsoRock:99,abjAirport:98,abjJabiLake:97,abjZumaRock:96,abjMosque:95,abjMillenniumPark:90};Nr.sort((i,e)=>(kp[e.place.id]||0)-(kp[i.place.id]||0));_e(Vi,0,.055,-25,42,.3,7.5,"#add08f");_e(Vi,19,.055,9.4,8,.3,12,"#c7e0a5");for(let i=0;i<4;i++)for(let e=0;e<22;e++){let t=-20+e*1.85,n=-27.8+i*1.75;_e(Vi,t,.219,n,1.4,.03,1.4,"#e4e6d8"),gi(mi(Vi,"suburban/building-type-c",.62,[t,.24,n]))}for(let i=0;i<7;i++)for(let e=0;e<4;e++){let t=16.25+e*1.65,n=4.4+i*1.65;_e(Vi,t,.219,n,1.4,.03,1.4,"#e6e7dc"),gi(mi(Vi,"suburban/building-type-t",.64,[t,.24,n]))}for(let[i,e,t]of[[0,-15,-15],[1,-16,-7],[2,-8,-3.5],[3,1,-3.8],[4,14,-4],[5,-3,.1],[6,16,1],[7,12,7.5],[8,-8,10.5],[9,2,14.4],[10,18,13.8]]){_e(Dr,e,1.55,t,3.3,1.7,.11,"#202431");for(let n of[-1.3,1.3])_e(Dr,e+n,.75,t,.09,1.5,.09,"#202431");ji(i%2?"LAGOS LIFE":"YOUR AD HERE","#fff",3.13,Dr,e,1.55,t+.067,!1,i%2?"#206b57":"#276998")}for(let i=0;i<28;i++){let e=-17+i*13%38,t=i%2?-4.9:14.3;gi(mi(Mn,"pirate/palm-straight",1.1,[e,.205,t]))}var Bu=[];for(let i=0;i<5;i++){let e=new rt;Mn.add(e),e.position.set(-15+i*7,.24,-4.5),gi(mi(e,i%2?"car/sedan":"car/van",.26,[0,0,0],i%2?null:"#f3c43d",Math.PI/2)),Bu.push(e)}var At=new rt;At.visible=!1;hs.add(At);Jt(At,0,.04,0,.2,.06,"#54af7d");Jt(At,0,.6,0,.13,.55,"#252e43");Oa(At,0,.92,0,.14,"#a77750");_e(At,-.1,.23,0,.065,.4,.09,"#252e43");_e(At,.1,.23,0,.065,.4,.09,"#252e43");At.position.set(.75,.22,-6);var Hi=null,an=new Set,zp=0,zs=new ut(new Es(.95,1.03,48),new nn({color:"#408b61",side:Wt,transparent:!0,opacity:.75}));zs.rotation.x=-Math.PI/2;zs.visible=!1;hs.add(zs);var as={lagos:{position:new I(3.75,37.5,26.25),target:new I(2.25,0,1.5)},abuja:{position:new I(-2,88,68).sub(new I(-2,0,2)).multiplyScalar(Math.max(1.7,1.8/Tt.aspect)).add(new I(-2,0,2)),target:new I(-2,0,2)}};as.dublin={position:new I(5,73,61).multiplyScalar(Math.max(1.45,1.55/Tt.aspect)),target:new I(0,0,-5)};var Hp={},My={lagos:"\u{1F1F3}\u{1F1EC} Lagos",abuja:"\u{1F1F3}\u{1F1EC} Abuja",dublin:"\u{1F1EE}\u{1F1EA} Dublin"};function lc(i){if(!["lagos","abuja","dublin"].includes(i))throw new Error("Unknown map city");if(i===$t)return{city:i,changed:!1};Hp[$t]={position:Tt.position.clone(),target:tt.target.clone()},xi=!1,At.visible=!1,Hi=null,an.clear(),tt.enableRotate=!0,zn=null,Ur(),Ke("walk").setAttribute("aria-pressed","false"),Ke("walk-controls").hidden=!0,Ke("hint").hidden=!1,$t=i,Mn.visible=i==="lagos",Vi.visible=i==="lagos"&&ki,Dr.visible=i==="lagos"&&zi,ls.world.visible=i==="abuja",ls.homes.visible=ki,ls.boards.visible=zi,Gi.world.visible=i==="dublin",Gi.homes.visible=ki,Gi.boards.visible=zi,on.setClearColor(i==="abuja"?"#93b56c":i==="dublin"?Pu:"#67afd5"),Fa.dataset.city=i,Ke("city-name").textContent=My[i],Fa.setAttribute("aria-label",`Interactive 3D ${i[0].toUpperCase()+i.slice(1)} city map`),document.querySelectorAll("button[data-city]").forEach(s=>s.setAttribute("aria-pressed",String(s.dataset.city===i)));let e=i==="dublin"?[["all","\u{1F5FA}\uFE0F","All Dublin"],["centre","\u{1F3DB}\uFE0F","City centre"],["northside","\u{1F3D8}\uFE0F","Northside"],["docklands","\u2693","Docklands"]]:i==="abuja"?[["all","\u{1F5FA}\uFE0F","All Abuja"],["central","\u{1F3DB}\uFE0F","Central"],["maitama","\u{1F333}","Maitama"],["jabi","\u{1F30A}","Jabi"]]:[["all","\u{1F5FA}\uFE0F","All Lagos"],["mainland","\u{1F3D8}\uFE0F","Mainland"],["island","\u{1F3D9}\uFE0F","Island"],["lekki","\u{1F334}","Lekki"]];document.querySelectorAll("[data-district]").forEach((s,r)=>{s.dataset.district=e[r][0],s.innerHTML=`${e[r][1]}<span>${e[r][2]}</span>`,s.classList.toggle("active",r===0)}),tt.maxDistance=i==="lagos"?110:500,tt.minDistance=i==="lagos"?7:12;let t=Hp[i]||as[i];Tt.position.copy(t.position),tt.target.copy(t.target),tt.update(),_i.position.set(i==="lagos"?32:40,i==="lagos"?56:90,i==="lagos"?24:28);let n=i==="lagos"?50:95;return Object.assign(_i.shadow.camera,{left:-n,right:n,top:n,bottom:-n,far:i==="lagos"?120:230}),_i.shadow.camera.updateProjectionMatrix(),At.position.set(i==="lagos"?.75:0,.28,i==="lagos"?-6:i==="dublin"?5:0),{city:i,changed:!0}}document.querySelectorAll("button[data-city]").forEach(i=>i.onclick=()=>lc(i.dataset.city));function Gp(i){return i.city!=="lagos"?i.area:i.z<-2?"Mainland":i.x>8?"Lekki":"Island"}function cc(i){i.city!==$t&&lc(i.city),os=i,Nr.forEach(e=>e.button.classList.toggle("selected",e.place===i)),Ke("detail").hidden=!1,Ke("place-name").textContent=`${i.emoji||Yp[i.id]||"\u{1F3E0}"} ${i.name}`,Ke("district").textContent=Gp(i),Ke("place-desc").textContent=i.description||vy[i.id]||(i.city==="abuja"?`${i.name} in ${i.area}. Explore the landmark and its surroundings on the Abuja map.`:`${i.name} on the ${Gp(i)} side of the city.`),zs.position.set(i.x,i.city==="lagos"?.23:.33,i.z),zs.scale.setScalar(i.city!=="lagos"?Math.max(1,Math.min(i.w,i.d)*.55):1),zs.visible=!0}function Ur(){os=null,Ke("detail").hidden=!0,zs.visible=!1,Nr.forEach(i=>i.button.classList.remove("selected"))}function ka(i,e,t=20){let n=Tt.position.clone().sub(tt.target).normalize();zn={from:Tt.position.clone(),fromTarget:tt.target.clone(),to:new I(i,0,e).addScaledVector(n,t),toTarget:new I(i,0,e),start:performance.now()}}function za(i=!xi){xi=i,At.visible=i,tt.enableRotate=!i,Ke("walk").setAttribute("aria-pressed",String(i)),Ke("walk-controls").hidden=!i,Ke("hint").hidden=i,Hi=null,an.clear(),i?ka(At.position.x,At.position.z,12):Ou()}function Ou(){xi&&(xi=!1,At.visible=!1,tt.enableRotate=!0,Ke("walk").setAttribute("aria-pressed","false"),Ke("walk-controls").hidden=!0,Ke("hint").hidden=!1,an.clear()),zn={from:Tt.position.clone(),fromTarget:tt.target.clone(),to:as[$t].position.clone(),toTarget:as[$t].target.clone(),start:performance.now()},document.querySelectorAll("[data-district]").forEach(i=>i.classList.toggle("active",i.dataset.district==="all"))}function Kp(i){zn=null,Tt.position.sub(tt.target).multiplyScalar(i).add(tt.target);let e=Tt.position.distanceTo(tt.target);(e<tt.minDistance||e>tt.maxDistance)&&Tt.position.sub(tt.target).normalize().multiplyScalar(Ls.clamp(e,tt.minDistance,tt.maxDistance)).add(tt.target),tt.update()}Ke("names").onclick=()=>{sc=!sc,Ke("names").setAttribute("aria-pressed",String(sc))};Ke("homes").onclick=()=>{ki=!ki,Vi.visible=$t==="lagos"&&ki,ls.homes.visible=ki,Gi.homes.visible=ki,Ke("homes").setAttribute("aria-pressed",String(ki))};Ke("boards").onclick=()=>{zi=!zi,Dr.visible=$t==="lagos"&&zi,ls.boards.visible=zi,Gi.boards.visible=zi,Ke("boards").setAttribute("aria-pressed",String(zi))};Ke("walk").onclick=()=>za();Ke("leave-walk").onclick=()=>za(!1);Ke("plus").onclick=()=>Kp(.8);Ke("minus").onclick=()=>Kp(1.25);Ke("reset").onclick=Ou;Ke("close-detail").onclick=Ur;Ke("focus").onclick=()=>os&&ka(os.x,os.z,10);Ke("walk-here").onclick=()=>{if(!os)return;let i=os;za(!0),At.position.set(i.arrivalX??i.x,.22,i.arrivalZ??i.z+i.d/2+.65),ka(At.position.x,At.position.z,12),Ur()};document.querySelectorAll("[data-district]").forEach(i=>i.onclick=()=>{Ur(),xi&&za(!1),document.querySelectorAll("[data-district]").forEach(t=>t.classList.toggle("active",t===i));let e=$t==="dublin"?{centre:[-5,12,39],northside:[-7,-20,55],docklands:[28,5,42]}:$t==="abuja"?{central:[16,0,45],maitama:[22,-32,43],jabi:[-35,-10,45]}:{mainland:[0,-12,28],island:[-4,7.5,25],lekki:[15,8,24]};i.dataset.district==="all"?Ou():ka(...e[i.dataset.district])});Ke("help").onclick=()=>Ke("help-dialog").showModal();Ke("close-help").onclick=()=>Ke("help-dialog").close();tt.addEventListener("start",()=>zn=null);window.addEventListener("keydown",i=>{i.key==="Escape"&&(Ur(),xi&&za(!1)),xi&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d"].includes(i.key)&&(i.preventDefault(),an.add(i.key))});window.addEventListener("keyup",i=>an.delete(i.key));window.addEventListener("blur",()=>an.clear());var Vp={up:"w",down:"s",left:"a",right:"d"};document.querySelectorAll("[data-move]").forEach(i=>{i.addEventListener("pointerdown",e=>{i.setPointerCapture(e.pointerId),an.add(Vp[i.dataset.move])});for(let e of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(e,()=>an.delete(Vp[i.dataset.move]))});var jp=new Ea,Wp=new he,Sy=new gn(new I(0,1,0),-.22),ac=null;on.domElement.addEventListener("pointerdown",i=>ac=[i.clientX,i.clientY]);on.domElement.addEventListener("pointerup",i=>{if(!ac||Math.hypot(i.clientX-ac[0],i.clientY-ac[1])>7)return;Wp.set(i.clientX/innerWidth*2-1,-i.clientY/innerHeight*2+1),jp.setFromCamera(Wp,Tt);let e=new I;if(!jp.ray.intersectPlane(Sy,e))return;if(xi){Hi=e;return}let t=cs.filter(n=>n.city===$t&&Math.abs(n.x-e.x)<n.w/2+.3&&Math.abs(n.z-e.z)<n.d/2+.3).sort((n,s)=>Math.hypot(n.x-e.x,n.z-e.z)-Math.hypot(s.x-e.x,s.z-e.z))[0];t?cc(t):Ur()});window.addEventListener("resize",()=>{Tt.aspect=innerWidth/innerHeight,Tt.updateProjectionMatrix(),on.setSize(innerWidth,innerHeight),as.abuja.position.set(-2,88,68).sub(as.abuja.target).multiplyScalar(Math.max(1.7,1.8/Tt.aspect)).add(as.abuja.target),as.dublin.position.set(5,73,61).multiplyScalar(Math.max(1.45,1.55/Tt.aspect))});function wy(i,e){return $t==="dublin"?Gi.isLand(i,e):$t==="abuja"?i>-64&&i<60&&e>-47&&e<48&&((i+36)/8)**2+((e+9)/5)**2>1&&Math.hypot(i-52,e+1)>8&&Math.hypot(i+56,e+8)>6:i>-21&&i<21&&e>-20.4&&e<-2.4||i>-26.9&&i<-20.8&&e>-20.4&&e<-2.4||i>-16.8&&i<8.25&&e>.9&&e<14.4||i>8.55&&i<23.1&&e>.6&&e<14.4||i>-11.25&&i<25.7&&e>13.8&&e<20.3||Math.abs(i+1.2)<.33&&e>-2.4&&e<.9||i>7.9&&i<8.6&&Math.abs(e-6)<.35}var Ba=new I,Ey=()=>innerWidth<700;function Zp(i){let e=Math.min((i-zp)/1e3,.05)||0;if(zp=i,zn){let n=Math.min((i-zn.start)/650,1),s=n*n*(3-2*n);Tt.position.lerpVectors(zn.from,zn.to,s),tt.target.lerpVectors(zn.fromTarget,zn.toTarget,s),n===1&&(zn=null)}if(xi){let n=0,s=0,r=new I().subVectors(tt.target,Tt.position);r.y=0,r.normalize();let a=new I(-r.z,0,r.x);if((an.has("w")||an.has("ArrowUp"))&&(n+=r.x,s+=r.z),(an.has("s")||an.has("ArrowDown"))&&(n-=r.x,s-=r.z),(an.has("d")||an.has("ArrowRight"))&&(n+=a.x,s+=a.z),(an.has("a")||an.has("ArrowLeft"))&&(n-=a.x,s-=a.z),n||s?Hi=null:Hi&&(n=Hi.x-At.position.x,s=Hi.z-At.position.z,Math.hypot(n,s)<.1&&(Hi=null)),n||s){let o=Math.hypot(n,s),l=n/o*e*($t==="lagos"?2.2:5.8),c=s/o*e*($t==="lagos"?2.2:5.8);wy(At.position.x+l,At.position.z+c)?(At.position.x+=l,At.position.z+=c,At.rotation.y=Math.atan2(l,c),Tt.position.x+=l,Tt.position.z+=c,tt.target.x+=l,tt.target.z+=c):Hi=null}}tt.update(),Tt.updateMatrixWorld();let t=[];for(let n of Nr){Ba.copy(n.point).project(Tt);let s=(Ba.x+1)*innerWidth/2,r=(-Ba.y+1)*innerHeight/2,a=n.button.offsetWidth||n.place.name.length*7+36,o=n.place.city===$t&&sc&&Ba.z<1&&Ba.z>-1&&s>a/2+8&&s<innerWidth-a/2-8&&r>(Ey()?210:225)&&r<innerHeight-100;o&&s>innerWidth-78&&Math.abs(r-innerHeight/2)<100&&(o=!1),o&&n.place!==os&&(t.some(l=>Math.abs(l.x-s)<(l.w+a)/2+3&&Math.abs(l.y-r)<29)?o=!1:t.push({x:s,y:r,w:a})),n.button.hidden=!o,o&&(n.button.style.transform=`translate(${s}px,${r}px) translate(-50%,-100%)`)}for(let n=0;n<Bu.length;n++)Bu[n].position.x=((i*.001*(n%2?-1:1)+n*6)%30+30)%30-15;on.render(hs,Tt),requestAnimationFrame(Zp)}requestAnimationFrame(Zp);await Promise.all(rc);Ke("loader").hidden=!0;Fa.dataset.ready="true";var Xp=new URLSearchParams(location.search).get("city");["abuja","dublin"].includes(Xp)&&lc(Xp);if(document.modelContext?.registerTool){let i=document.modelContext;for(let e of[{name:"switch_map_city",description:"Switch between the Lagos, Abuja and Dublin map views.",inputSchema:{type:"object",properties:{city:{type:"string",enum:["lagos","abuja","dublin"]}},required:["city"],additionalProperties:!1},execute:t=>lc(t?.city)},{name:"list_map_places",description:"List the landmarks in the Lagos, Abuja and Dublin maps.",inputSchema:{type:"object",properties:{},additionalProperties:!1},annotations:{readOnlyHint:!0},execute:()=>cs.map(({id:t,name:n,city:s,x:r,z:a})=>({id:t,name:n,city:s,x:r,z:a}))},{name:"focus_map_place",description:"Select and focus a landmark in the map.",inputSchema:{type:"object",properties:{id:{type:"string"}},required:["id"],additionalProperties:!1},execute:t=>{let n=cs.find(s=>s.id===t?.id);if(!n)throw new Error("Unknown map place");return cc(n),ka(n.x,n.z,10),{id:n.id,name:n.name,selected:!0}}}])try{await i.registerTool(e)}catch(t){console.warn("Map tool unavailable",t)}}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
