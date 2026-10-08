var K0=Object.defineProperty;var Z0=(i,e)=>{for(var t in e)K0(i,t,{get:e[t],enumerable:!0})};var Vn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},df=0,Ph=1,ff=2;var Lh=1,fl=2,_i=3,Dn=0,xn=1,Zt=2,ki=0,Es=1,Dh=2,Nh=3,Uh=4,pf=5,as=100,mf=101,gf=102,_f=103,xf=104,yf=200,vf=201,bf=202,Mf=203,Vo=204,jo=205,Sf=206,wf=207,Ef=208,Tf=209,Af=210,Rf=211,Cf=212,If=213,Pf=214,pl=0,ml=1,gl=2,Ts=3,_l=4,xl=5,yl=6,vl=7,Bh=0,Lf=1,Df=2,zi=0,Nf=1,Uf=2,Bf=3,bl=4,Of=5,Ff=6,kf=7,gh="attached",zf="detached",Oh=300,Os=301,Fs=302,Ml=303,Sl=304,Ka=306,os=1e3,oi=1001,dr=1002,tn=1003,wl=1004;var ks=1005;var pn=1006,Pr=1007;var ti=1008;var ni=1009,Fh=1010,kh=1011,Lr=1012,El=1013,hs=1014,jn=1015,Dr=1016,Tl=1017,Al=1018,Nr=1020,zh=35902,Hh=35899,Gh=1021,Vh=1022,Un=1023,fr=1026,Ur=1027,Rl=1028,Cl=1029,jh=1030,Il=1031;var Pl=1033,Za=33776,Ja=33777,$a=33778,Qa=33779,Ll=35840,Dl=35841,Nl=35842,Ul=35843,Bl=36196,Ol=37492,Fl=37496,kl=37808,zl=37809,Hl=37810,Gl=37811,Vl=37812,jl=37813,Wl=37814,Xl=37815,ql=37816,Yl=37817,Kl=37818,Zl=37819,Jl=37820,$l=37821,Ql=36492,ec=36494,tc=36495,nc=36283,ic=36284,sc=36285,rc=36286;var As=2300,Rs=2301,Go=2302,_h=2400,xh=2401,yh=2402,Hf=2500;var Wh=0,eo=1,Br=2,Gf=3200,Vf=3201;var Xh=0,jf=1,Hi="",Ft="srgb",nn="srgb-linear",ca="linear",yt="srgb";var Ss=7680;var vh=519,Wf=512,Xf=513,qf=514,qh=515,Yf=516,Kf=517,Zf=518,Jf=519,Wo=35044;var Yh="300 es",Jn=2e3,ha=2001;var ci=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sd=1234567,ra=Math.PI/180,Cs=180/Math.PI;function Hn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[e&255]+rn[e>>8&255]+"-"+rn[e>>16&15|64]+rn[e>>24&255]+"-"+rn[t&63|128]+rn[t>>8&255]+"-"+rn[t>>16&255]+rn[t>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function Qe(i,e,t){return Math.max(e,Math.min(t,i))}function Kh(i,e){return(i%e+e)%e}function J0(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function $0(i,e,t){return i!==e?(t-i)/(e-i):0}function aa(i,e,t){return(1-t)*i+t*e}function Q0(i,e,t,n){return aa(i,e,1-Math.exp(-t*n))}function em(i,e=1){return e-Math.abs(Kh(i,e*2)-e)}function tm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function nm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function im(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sm(i,e){return i+Math.random()*(e-i)}function rm(i){return i*(.5-Math.random())}function am(i){i!==void 0&&(Sd=i);let e=Sd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function om(i){return i*ra}function lm(i){return i*Cs}function cm(i){return(i&i-1)===0&&i!==0}function hm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function um(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dm(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*m,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*m,o*c);break;case"ZYZ":i.set(l*m,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var zs={DEG2RAD:ra,RAD2DEG:Cs,generateUUID:Hn,clamp:Qe,euclideanModulo:Kh,mapLinear:J0,inverseLerp:$0,lerp:aa,damp:Q0,pingpong:em,smoothstep:tm,smootherstep:nm,randInt:im,randFloat:sm,randFloatSpread:rm,seededRandom:am,degToRad:om,radToDeg:lm,isPowerOfTwo:cm,ceilPowerOfTwo:hm,floorPowerOfTwo:um,setQuaternionFromProperEuler:dm,normalize:xt,denormalize:Zn},re=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},mn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=x;return}if(h!==x||l!==d||c!==f||u!==m){let g=1-o,p=l*d+c*f+u*m+h*x,C=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let T=Math.sqrt(v),A=Math.atan2(T,p*C);g=Math.sin(g*A)/T,o=Math.sin(o*A)/T}let _=o*C;if(l=l*g+d*_,c=c*g+f*_,u=u*g+m*_,h=h*g+x*_,g===1-o){let T=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=T,c*=T,u*=T,h*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-o*f,e[t+2]=c*m+u*f+o*d-l*h,e[t+3]=u*m-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),h=o(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wd.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wd.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-r*h,this.z=s+l*h+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zc.copy(this).projectOnVector(e),this.sub(zc)}reflect(e){return this.sub(zc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zc=new D,wd=new mn,Je=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],x=s[0],g=s[3],p=s[6],C=s[1],v=s[4],_=s[7],T=s[2],A=s[5],L=s[8];return r[0]=a*x+o*C+l*T,r[3]=a*g+o*v+l*A,r[6]=a*p+o*_+l*L,r[1]=c*x+u*C+h*T,r[4]=c*g+u*v+h*A,r[7]=c*p+u*_+h*L,r[2]=d*x+f*C+m*T,r[5]=d*g+f*v+m*A,r[8]=d*p+f*_+m*L,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*r,f=c*r-a*l,m=t*h+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/m;return e[0]=h*x,e[1]=(s*c-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=d*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hc.makeScale(e,t)),this}rotate(e){return this.premultiply(Hc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Hc=new Je;function Zh(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function pr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $f(){let i=pr("canvas");return i.style.display="block",i}var Ed={};function mr(i){i in Ed||(Ed[i]=!0,console.warn(i))}function Qf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Td=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ad=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fm(){let i={enabled:!0,workingColorSpace:nn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===yt&&(s.r=Di(s.r),s.g=Di(s.g),s.b=Di(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===yt&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hi?ca:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return mr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return mr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[nn]:{primaries:e,whitePoint:n,transfer:ca,toXYZ:Td,fromXYZ:Ad,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ft},outputColorSpaceConfig:{drawingBufferColorSpace:Ft}},[Ft]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:Td,fromXYZ:Ad,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ft}}}),i}var ct=fm();function Di(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Js,Xo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Js===void 0&&(Js=pr("canvas")),Js.width=e.width,Js.height=e.height;let s=Js.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Js}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=pr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Di(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Di(t[n]/255)*255):t[n]=Di(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},pm=0,gr=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Hn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Gc(s[a].image)):r.push(Gc(s[a]))}else r=Gc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Gc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mm=0,Vc=new D,Gt=class i extends ci{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=oi,s=oi,r=pn,a=ti,o=Un,l=ni,c=i.DEFAULT_ANISOTROPY,u=Hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Hn(),this.name="",this.source=new gr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Vc).x}get height(){return this.source.getSize(Vc).y}get depth(){return this.source.getSize(Vc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Oh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case oi:e.x=e.x<0?0:1;break;case dr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case oi:e.y=e.y<0?0:1;break;case dr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Gt.DEFAULT_IMAGE=null;Gt.DEFAULT_MAPPING=Oh;Gt.DEFAULT_ANISOTROPY=1;var ft=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],x=l[2],g=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(f+1)/2,T=(p+1)/2,A=(u+d)/4,L=(h+x)/4,U=(m+g)/4;return v>_&&v>T?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=L/n):_>T?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=U/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=L/r,s=U/r),this.set(n,s,r,t),this}let C=Math.sqrt((g-m)*(g-m)+(h-x)*(h-x)+(d-u)*(d-u));return Math.abs(C)<.001&&(C=1),this.x=(g-m)/C,this.y=(h-x)/C,this.z=(d-u)/C,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Qe(this.x,e.x,t.x),this.y=Qe(this.y,e.y,t.y),this.z=Qe(this.z,e.z,t.z),this.w=Qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Qe(this.x,e,t),this.y=Qe(this.y,e,t),this.z=Qe(this.z,e,t),this.w=Qe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qo=class extends ci{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new Gt(s);this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new gr(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends qo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ua=class extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Yo=class extends Gt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=oi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(r,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),mo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),mo.copy(n.boundingBox)),mo.applyMatrix4(e.matrixWorld),this.union(mo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zr),go.subVectors(this.max,Zr),$s.subVectors(e.a,Zr),Qs.subVectors(e.b,Zr),er.subVectors(e.c,Zr),Qi.subVectors(Qs,$s),es.subVectors(er,Qs),ys.subVectors($s,er);let t=[0,-Qi.z,Qi.y,0,-es.z,es.y,0,-ys.z,ys.y,Qi.z,0,-Qi.x,es.z,0,-es.x,ys.z,0,-ys.x,-Qi.y,Qi.x,0,-es.y,es.x,0,-ys.y,ys.x,0];return!jc(t,$s,Qs,er,go)||(t=[1,0,0,0,1,0,0,0,1],!jc(t,$s,Qs,er,go))?!1:(_o.crossVectors(Qi,es),t=[_o.x,_o.y,_o.z],jc(t,$s,Qs,er,go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new D,new D,new D,new D,new D,new D,new D,new D],qn=new D,mo=new gn,$s=new D,Qs=new D,er=new D,Qi=new D,es=new D,ys=new D,Zr=new D,go=new D,_o=new D,vs=new D;function jc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vs.fromArray(i,r);let o=s.x*Math.abs(vs.x)+s.y*Math.abs(vs.y)+s.z*Math.abs(vs.z),l=e.dot(vs),c=t.dot(vs),u=n.dot(vs);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var gm=new gn,Jr=new D,Wc=new D,bn=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):gm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jr.subVectors(e,this.center);let t=Jr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Jr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jr.copy(e.center).add(Wc)),this.expandByPoint(Jr.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ri=new D,Xc=new D,xo=new D,ts=new D,qc=new D,yo=new D,Yc=new D,ui=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Xc.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),ts.copy(this.origin).sub(Xc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(xo),o=ts.dot(this.direction),l=-ts.dot(xo),c=ts.lengthSq(),u=Math.abs(1-a*a),h,d,f,m;if(u>0)if(h=a*l-o,d=a*o-l,m=r*u,h>=0)if(d>=-m)if(d<=m){let x=1/u;h*=x,d*=x,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-l),r),f=-h*h+d*(d+2*l)+c);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Xc).addScaledVector(xo,d),f}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);let n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,s,r){qc.subVectors(t,e),yo.subVectors(n,e),Yc.crossVectors(qc,yo);let a=this.direction.dot(Yc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ts.subVectors(this.origin,e);let l=o*this.direction.dot(yo.crossVectors(ts,yo));if(l<0)return null;let c=o*this.direction.dot(qc.cross(ts));if(c<0||l+c>a)return null;let u=-o*ts.dot(Yc);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class i{constructor(e,t,n,s,r,a,o,l,c,u,h,d,f,m,x,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,h,d,f,m,x,g)}set(e,t,n,s,r,a,o,l,c,u,h,d,f,m,x,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),a=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let d=a*u,f=a*h,m=o*u,x=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*u,f=l*h,m=c*u,x=c*h;t[0]=d+x*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*u,f=l*h,m=c*u,x=c*h;t[0]=d-x*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*u,f=a*h,m=o*u,x=o*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+x,t[1]=l*h,t[5]=x*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=x-d*h,t[8]=m*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-x*h}else if(e.order==="XZY"){let d=a*l,f=a*c,m=o*l,x=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+x,t[5]=a*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*u,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_m,e,xm)}lookAt(e,t,n){let s=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),ns.crossVectors(n,Pn),ns.lengthSq()===0&&(Math.abs(n.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),ns.crossVectors(n,Pn)),ns.normalize(),vo.crossVectors(Pn,ns),s[0]=ns.x,s[4]=vo.x,s[8]=Pn.x,s[1]=ns.y,s[5]=vo.y,s[9]=Pn.y,s[2]=ns.z,s[6]=vo.z,s[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],x=n[6],g=n[10],p=n[14],C=n[3],v=n[7],_=n[11],T=n[15],A=s[0],L=s[4],U=s[8],S=s[12],M=s[1],w=s[5],E=s[9],I=s[13],B=s[2],N=s[6],F=s[10],q=s[14],j=s[3],ue=s[7],he=s[11],fe=s[15];return r[0]=a*A+o*M+l*B+c*j,r[4]=a*L+o*w+l*N+c*ue,r[8]=a*U+o*E+l*F+c*he,r[12]=a*S+o*I+l*q+c*fe,r[1]=u*A+h*M+d*B+f*j,r[5]=u*L+h*w+d*N+f*ue,r[9]=u*U+h*E+d*F+f*he,r[13]=u*S+h*I+d*q+f*fe,r[2]=m*A+x*M+g*B+p*j,r[6]=m*L+x*w+g*N+p*ue,r[10]=m*U+x*E+g*F+p*he,r[14]=m*S+x*I+g*q+p*fe,r[3]=C*A+v*M+_*B+T*j,r[7]=C*L+v*w+_*N+T*ue,r[11]=C*U+v*E+_*F+T*he,r[15]=C*S+v*I+_*q+T*fe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],x=e[7],g=e[11],p=e[15];return m*(+r*l*h-s*c*h-r*o*d+n*c*d+s*o*f-n*l*f)+x*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*u-r*l*u)+g*(+t*c*h-t*o*f-r*a*h+n*a*f+r*o*u-n*c*u)+p*(-s*o*u-t*l*h+t*o*d+s*a*h-n*a*d+n*l*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],x=e[13],g=e[14],p=e[15],C=h*g*c-x*d*c+x*l*f-o*g*f-h*l*p+o*d*p,v=m*d*c-u*g*c-m*l*f+a*g*f+u*l*p-a*d*p,_=u*x*c-m*h*c+m*o*f-a*x*f-u*o*p+a*h*p,T=m*h*l-u*x*l-m*o*d+a*x*d+u*o*g-a*h*g,A=t*C+n*v+s*_+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/A;return e[0]=C*L,e[1]=(x*d*r-h*g*r-x*s*f+n*g*f+h*s*p-n*d*p)*L,e[2]=(o*g*r-x*l*r+x*s*c-n*g*c-o*s*p+n*l*p)*L,e[3]=(h*l*r-o*d*r-h*s*c+n*d*c+o*s*f-n*l*f)*L,e[4]=v*L,e[5]=(u*g*r-m*d*r+m*s*f-t*g*f-u*s*p+t*d*p)*L,e[6]=(m*l*r-a*g*r-m*s*c+t*g*c+a*s*p-t*l*p)*L,e[7]=(a*d*r-u*l*r+u*s*c-t*d*c-a*s*f+t*l*f)*L,e[8]=_*L,e[9]=(m*h*r-u*x*r-m*n*f+t*x*f+u*n*p-t*h*p)*L,e[10]=(a*x*r-m*o*r+m*n*c-t*x*c-a*n*p+t*o*p)*L,e[11]=(u*o*r-a*h*r-u*n*c+t*h*c+a*n*f-t*o*f)*L,e[12]=T*L,e[13]=(u*x*s-m*h*s+m*n*d-t*x*d-u*n*g+t*h*g)*L,e[14]=(m*o*s-a*x*s-m*n*l+t*x*l+a*n*g-t*o*g)*L,e[15]=(a*h*s-u*o*s+u*n*l-t*h*l-a*n*d+t*o*d)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,h=o+o,d=r*c,f=r*u,m=r*h,x=a*u,g=a*h,p=o*h,C=l*c,v=l*u,_=l*h,T=n.x,A=n.y,L=n.z;return s[0]=(1-(x+p))*T,s[1]=(f+_)*T,s[2]=(m-v)*T,s[3]=0,s[4]=(f-_)*A,s[5]=(1-(d+p))*A,s[6]=(g+C)*A,s[7]=0,s[8]=(m+v)*L,s[9]=(g-C)*L,s[10]=(1-(d+x))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=tr.set(s[0],s[1],s[2]).length(),a=tr.set(s[4],s[5],s[6]).length(),o=tr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Yn.copy(this);let c=1/r,u=1/a,h=1/o;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=h,Yn.elements[9]*=h,Yn.elements[10]*=h,t.setFromRotationMatrix(Yn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=Jn,l=!1){let c=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===Jn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ha)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Jn,l=!1){let c=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===Jn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===ha)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},tr=new D,Yn=new Ke,_m=new D(0,0,0),xm=new D(1,1,1),ns=new D,vo=new D,Pn=new D,Rd=new Ke,Cd=new mn,$n=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rd,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Cd.setFromEuler(this),this.setFromQuaternion(Cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var _r=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ym=0,Id=new D,nr=new mn,Ci=new Ke,bo=new D,$r=new D,vm=new D,bm=new mn,Pd=new D(1,0,0),Ld=new D(0,1,0),Dd=new D(0,0,1),Nd={type:"added"},Mm={type:"removed"},ir={type:"childadded",child:null},Kc={type:"childremoved",child:null},pt=class i extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new $n,n=new mn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Je}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new _r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(Pd,e)}rotateY(e){return this.rotateOnAxis(Ld,e)}rotateZ(e){return this.rotateOnAxis(Dd,e)}translateOnAxis(e,t){return Id.copy(e).applyQuaternion(this.quaternion),this.position.add(Id.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Pd,e)}translateY(e){return this.translateOnAxis(Ld,e)}translateZ(e){return this.translateOnAxis(Dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bo.copy(e):bo.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt($r,bo,this.up):Ci.lookAt(bo,$r,this.up),this.quaternion.setFromRotationMatrix(Ci),s&&(Ci.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(Ci),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nd),ir.child=e,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mm),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nd),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,e,vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,bm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};pt.DEFAULT_UP=new D(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Kn=new D,Ii=new D,Zc=new D,Pi=new D,sr=new D,rr=new D,Ud=new D,Jc=new D,$c=new D,Qc=new D,eh=new ft,th=new ft,nh=new ft,rs=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Kn.subVectors(e,t),s.cross(Kn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Kn.subVectors(s,t),Ii.subVectors(n,t),Zc.subVectors(e,t);let a=Kn.dot(Kn),o=Kn.dot(Ii),l=Kn.dot(Zc),c=Ii.dot(Ii),u=Ii.dot(Zc),h=a*c-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(c*l-o*u)*d,m=(a*u-o*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return eh.setScalar(0),th.setScalar(0),nh.setScalar(0),eh.fromBufferAttribute(e,t),th.fromBufferAttribute(e,n),nh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(eh,r.x),a.addScaledVector(th,r.y),a.addScaledVector(nh,r.z),a}static isFrontFacing(e,t,n,s){return Kn.subVectors(n,t),Ii.subVectors(e,t),Kn.cross(Ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Kn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),Kn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;sr.subVectors(s,n),rr.subVectors(r,n),Jc.subVectors(e,n);let l=sr.dot(Jc),c=rr.dot(Jc);if(l<=0&&c<=0)return t.copy(n);$c.subVectors(e,s);let u=sr.dot($c),h=rr.dot($c);if(u>=0&&h<=u)return t.copy(s);let d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(sr,a);Qc.subVectors(e,r);let f=sr.dot(Qc),m=rr.dot(Qc);if(m>=0&&f<=m)return t.copy(r);let x=f*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(rr,o);let g=u*m-f*h;if(g<=0&&h-u>=0&&f-m>=0)return Ud.subVectors(r,s),o=(h-u)/(h-u+(f-m)),t.copy(s).addScaledVector(Ud,o);let p=1/(g+x+d);return a=x*p,o=d*p,t.copy(n).addScaledVector(sr,a).addScaledVector(rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ep={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},is={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function ih(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Oe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ct.workingColorSpace){if(e=Kh(e,1),t=Qe(t,0,1),n=Qe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ih(a,r,e+1/3),this.g=ih(a,r,e),this.b=ih(a,r,e-1/3)}return ct.colorSpaceToWorking(this,s),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){let n=ep[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Di(e.r),this.g=Di(e.g),this.b=Di(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return ct.workingToColorSpace(an.copy(this),e),Math.round(Qe(an.r*255,0,255))*65536+Math.round(Qe(an.g*255,0,255))*256+Math.round(Qe(an.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(an.copy(this),t);let n=an.r,s=an.g,r=an.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-n)/h+2;break;case r:l=(n-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(an.copy(this),t),e.r=an.r,e.g=an.g,e.b=an.b,e}getStyle(e=Ft){ct.workingToColorSpace(an.copy(this),e);let t=an.r,n=an.g,s=an.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(is),this.setHSL(is.h+e,is.s+t,is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(is),e.getHSL(Mo);let n=aa(is.h,Mo.h,t),s=aa(is.s,Mo.s,t),r=aa(is.l,Mo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new Oe;Oe.NAMES=ep;var Sm=0,Mn=class extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=Es,this.side=Dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vo,this.blendDst=jo,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==Dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vo&&(n.blendSrc=this.blendSrc),this.blendDst!==jo&&(n.blendDst=this.blendDst),this.blendEquation!==as&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},on=class extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zt=new D,So=new re,wm=0,kt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wo,this.updateRanges=[],this.gpuType=jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)So.fromBufferAttribute(this,t),So.applyMatrix3(e),this.setXY(t,So.x,So.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix3(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wo&&(e.usage=this.usage),e}};var da=class extends kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var fa=class extends kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ut=class extends kt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Em=0,zn=new Ke,sh=new pt,ar=new D,Ln=new gn,Qr=new gn,Kt=new D,Nt=class i extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zh(e)?fa:da)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Je().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,t,n){return zn.makeTranslation(e,t,n),this.applyMatrix4(zn),this}scale(e,t,n){return zn.makeScale(e,t,n),this.applyMatrix4(zn),this}lookAt(e){return sh.lookAt(e),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ut(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Qr.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(Ln.min,Qr.min),Ln.expandByPoint(Kt),Kt.addVectors(Ln.max,Qr.max),Ln.expandByPoint(Kt)):(Ln.expandByPoint(Qr.min),Ln.expandByPoint(Qr.max))}Ln.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Kt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Kt.fromBufferAttribute(o,c),l&&(ar.fromBufferAttribute(e,c),Kt.add(ar)),s=Math.max(s,n.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new kt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<n.count;U++)o[U]=new D,l[U]=new D;let c=new D,u=new D,h=new D,d=new re,f=new re,m=new re,x=new D,g=new D;function p(U,S,M){c.fromBufferAttribute(n,U),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),d.fromBufferAttribute(r,U),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,M),u.sub(c),h.sub(c),f.sub(d),m.sub(d);let w=1/(f.x*m.y-m.x*f.y);isFinite(w)&&(x.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(w),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(w),o[U].add(x),o[S].add(x),o[M].add(x),l[U].add(g),l[S].add(g),l[M].add(g))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let U=0,S=C.length;U<S;++U){let M=C[U],w=M.start,E=M.count;for(let I=w,B=w+E;I<B;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}let v=new D,_=new D,T=new D,A=new D;function L(U){T.fromBufferAttribute(s,U),A.copy(T);let S=o[U];v.copy(S),v.sub(T.multiplyScalar(T.dot(S))).normalize(),_.crossVectors(A,S);let w=_.dot(l[U])<0?-1:1;a.setXYZW(U,v.x,v.y,v.z,w)}for(let U=0,S=C.length;U<S;++U){let M=C[U],w=M.start,E=M.count;for(let I=w,B=w+E;I<B;I+=3)L(e.getX(I+0)),L(e.getX(I+1)),L(e.getX(I+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Kt.fromBufferAttribute(e,t),Kt.normalize(),e.setXYZ(t,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u),f=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*u;for(let p=0;p<u;p++)d[m++]=c[f++]}return new kt(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,h=c.length;u<h;u++){let d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){let f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],h=r[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bd=new Ke,bs=new ui,wo=new bn,Od=new D,Eo=new D,To=new D,Ao=new D,rh=new D,Ro=new D,Fd=new D,Co=new D,tt=class extends pt{constructor(e=new Nt,t=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],h=r[l];u!==0&&(rh.fromBufferAttribute(h,e),a?Ro.addScaledVector(rh,u):Ro.addScaledVector(rh.sub(t),u))}t.add(Ro)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),bs.copy(e.ray).recast(e.near),!(wo.containsPoint(bs.origin)===!1&&(bs.intersectSphere(wo,Od)===null||bs.origin.distanceToSquared(Od)>(e.far-e.near)**2))&&(Bd.copy(r).invert(),bs.copy(e.ray).applyMatrix4(Bd),!(n.boundingBox!==null&&bs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,bs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],C=Math.max(g.start,f.start),v=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=C,T=v;_<T;_+=3){let A=o.getX(_),L=o.getX(_+1),U=o.getX(_+2);s=Io(this,p,e,n,c,u,h,A,L,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let C=o.getX(g),v=o.getX(g+1),_=o.getX(g+2);s=Io(this,a,e,n,c,u,h,C,v,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=d.length;m<x;m++){let g=d[m],p=a[g.materialIndex],C=Math.max(g.start,f.start),v=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=C,T=v;_<T;_+=3){let A=_,L=_+1,U=_+2;s=Io(this,p,e,n,c,u,h,A,L,U),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=m,p=x;g<p;g+=3){let C=g,v=g+1,_=g+2;s=Io(this,a,e,n,c,u,h,C,v,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Tm(i,e,t,n,s,r,a,o){let l;if(e.side===xn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Dn,o),l===null)return null;Co.copy(o),Co.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Co);return c<t.near||c>t.far?null:{distance:c,point:Co.clone(),object:i}}function Io(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Eo),i.getVertexPosition(l,To),i.getVertexPosition(c,Ao);let u=Tm(i,e,t,n,Eo,To,Ao,Fd);if(u){let h=new D;rs.getBarycoord(Fd,Eo,To,Ao,h),s&&(u.uv=rs.getInterpolatedAttribute(s,o,l,c,h,new re)),r&&(u.uv1=rs.getInterpolatedAttribute(r,o,l,c,h,new re)),a&&(u.normal=rs.getInterpolatedAttribute(a,o,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};rs.getNormal(Eo,To,Ao,d.normal),u.face=d,u.barycoord=h}return u}var Vt=class i extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ut(c,3)),this.setAttribute("normal",new ut(u,3)),this.setAttribute("uv",new ut(h,2));function m(x,g,p,C,v,_,T,A,L,U,S){let M=_/L,w=T/U,E=_/2,I=T/2,B=A/2,N=L+1,F=U+1,q=0,j=0,ue=new D;for(let he=0;he<F;he++){let fe=he*w-I;for(let De=0;De<N;De++){let Xe=De*M-E;ue[x]=Xe*C,ue[g]=fe*v,ue[p]=B,c.push(ue.x,ue.y,ue.z),ue[x]=0,ue[g]=0,ue[p]=A>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(De/L),h.push(1-he/U),q+=1}}for(let he=0;he<U;he++)for(let fe=0;fe<L;fe++){let De=d+fe+N*he,Xe=d+fe+N*(he+1),gt=d+(fe+1)+N*(he+1),st=d+(fe+1)+N*he;l.push(De,Xe,st),l.push(Xe,gt,st),j+=6}o.addGroup(f,j,S),f+=j,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Hs(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function ln(i){let e={};for(let t=0;t<i.length;t++){let n=Hs(i[t]);for(let s in n)e[s]=n[s]}return e}function Am(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Jh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}var tp={clone:Hs,merge:ln},Rm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qn=class extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rm,this.fragmentShader=Cm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hs(e.uniforms),this.uniformsGroups=Am(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},pa=class extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=Jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ss=new D,kd=new re,zd=new re,Ht=class extends pa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ss.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ss.x,ss.y).multiplyScalar(-e/ss.z),ss.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ss.x,ss.y).multiplyScalar(-e/ss.z)}getViewSize(e,t){return this.getViewBounds(e,kd,zd),t.subVectors(zd,kd)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ra*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},or=-90,lr=1,Ko=class extends pt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ht(or,lr,e,t);s.layers=this.layers,this.add(s);let r=new Ht(or,lr,e,t);r.layers=this.layers,this.add(r);let a=new Ht(or,lr,e,t);a.layers=this.layers,this.add(a);let o=new Ht(or,lr,e,t);o.layers=this.layers,this.add(o);let l=new Ht(or,lr,e,t);l.layers=this.layers,this.add(l);let c=new Ht(or,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ma=class extends Gt{constructor(e=[],t=Os,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zo=class extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ma(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),r=new Qn({name:"CubemapFromEquirect",uniforms:Hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xn,blending:ki});r.uniforms.tEquirect.value=t;let a=new tt(s,r),o=t.minFilter;return t.minFilter===ti&&(t.minFilter=pn),new Ko(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ze=class extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Im={type:"move"},xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let g=t.getJointPose(x,n),p=this._getHandJoint(c,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Im)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var ga=class extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},yr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wo,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},fn=new D,vr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Zn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=xt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=xt(t,this.array),n=xt(n,this.array),s=xt(s,this.array),r=xt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new kt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}};var Hd=new D,Gd=new ft,Vd=new ft,Pm=new D,jd=new Ke,Po=new D,ah=new bn,Wd=new Ke,oh=new ui,_a=class extends tt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gh,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new gn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Po),this.boundingBox.expandByPoint(Po)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Po),this.boundingSphere.expandByPoint(Po)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ah.copy(this.boundingSphere),ah.applyMatrix4(s),e.ray.intersectsSphere(ah)!==!1&&(Wd.copy(s).invert(),oh.copy(e.ray).applyMatrix4(Wd),!(this.boundingBox!==null&&oh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,oh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ft,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===zf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Gd.fromBufferAttribute(s.attributes.skinIndex,e),Vd.fromBufferAttribute(s.attributes.skinWeight,e),Hd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let a=Vd.getComponent(r);if(a!==0){let o=Gd.getComponent(r);jd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Pm.copy(Hd).applyMatrix4(jd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}},br=class extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}},xa=class extends Gt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=tn,u=tn,h,d){super(null,a,o,l,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Xd=new Ke,Lm=new Ke,ya=class i{constructor(e=[],t=[]){this.uuid=Hn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:Lm;Xd.multiplyMatrices(o,t[r]),Xd.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new xa(t,e,e,Un,jn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new br),this.bones.push(a),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},ls=class extends kt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},cr=new Ke,qd=new Ke,Lo=[],Yd=new gn,Dm=new Ke,ea=new tt,ta=new bn,Gn=class extends tt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ls(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Dm)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),Yd.copy(e.boundingBox).applyMatrix4(cr),this.boundingBox.union(Yd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,cr),ta.copy(e.boundingSphere).applyMatrix4(cr),this.boundingSphere.union(ta)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(n),e.ray.intersectsSphere(ta)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,cr),qd.multiplyMatrices(n,cr),ea.matrixWorld=qd,ea.raycast(e,Lo);for(let a=0,o=Lo.length;a<o;a++){let l=Lo[a];l.instanceId=r,l.object=this,t.push(l)}Lo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ls(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new xa(new Float32Array(s*this.count),s,this.count,Rl,jn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},lh=new D,Nm=new D,Um=new Je,vn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=lh.subVectors(n,t).cross(Nm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(lh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Um.getNormalMatrix(e),s=this.coplanarPoint(lh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ms=new bn,Bm=new re(.5,.5),Do=new D,Mr=class{constructor(e=new vn,t=new vn,n=new vn,s=new vn,r=new vn,a=new vn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Jn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],x=r[9],g=r[10],p=r[11],C=r[12],v=r[13],_=r[14],T=r[15];if(s[0].setComponents(c-a,f-u,p-m,T-C).normalize(),s[1].setComponents(c+a,f+u,p+m,T+C).normalize(),s[2].setComponents(c+o,f+h,p+x,T+v).normalize(),s[3].setComponents(c-o,f-h,p-x,T-v).normalize(),n)s[4].setComponents(l,d,g,_).normalize(),s[5].setComponents(c-l,f-d,p-g,T-_).normalize();else if(s[4].setComponents(c-l,f-d,p-g,T-_).normalize(),t===Jn)s[5].setComponents(c+l,f+d,p+g,T+_).normalize();else if(t===ha)s[5].setComponents(l,d,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);let t=Bm.distanceTo(e.center);return Ms.radius=.7071067811865476+t,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Do.x=s.normal.x>0?e.max.x:e.min.x,Do.y=s.normal.y>0?e.max.y:e.min.y,Do.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Do)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var cs=class extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Jo=new D,$o=new D,Kd=new Ke,na=new ui,No=new bn,ch=new D,Zd=new D,Ni=class extends pt{constructor(e=new Nt,t=new cs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Jo.fromBufferAttribute(t,s-1),$o.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Jo.distanceTo($o);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),No.radius+=r,e.ray.intersectsSphere(No)===!1)return;Kd.copy(s).invert(),na.copy(e.ray).applyMatrix4(Kd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){let p=u.getX(x),C=u.getX(x+1),v=Uo(this,e,na,l,p,C,x);v&&t.push(v)}if(this.isLineLoop){let x=u.getX(m-1),g=u.getX(f),p=Uo(this,e,na,l,x,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let x=f,g=m-1;x<g;x+=c){let p=Uo(this,e,na,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=Uo(this,e,na,l,m-1,f,m-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Uo(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Jo.fromBufferAttribute(o,s),$o.fromBufferAttribute(o,r),t.distanceSqToSegment(Jo,$o,ch,Zd)>n)return;ch.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ch);if(!(c<e.near||c>e.far))return{distance:c,point:Zd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Jd=new D,$d=new D,va=class extends Ni{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Jd.fromBufferAttribute(t,s),$d.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Jd.distanceTo($d);e.setAttribute("lineDistance",new ut(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ba=class extends Ni{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Sr=class extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Qd=new Ke,bh=new ui,Bo=new bn,Oo=new D,Ma=class extends pt{constructor(e=new Nt,t=new Sr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,e.ray.intersectsSphere(Bo)===!1)return;Qd.copy(s).invert(),bh.copy(e.ray).applyMatrix4(Qd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){let d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,x=f;m<x;m++){let g=c.getX(m);Oo.fromBufferAttribute(h,g),ef(Oo,g,l,s,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=d,x=f;m<x;m++)Oo.fromBufferAttribute(h,m),ef(Oo,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ef(i,e,t,n,s,r,a){let o=bh.distanceSqToPoint(i);if(o<t){let l=new D;bh.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Sa=class extends Gt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},wa=class extends Gt{constructor(e,t,n=hs,s,r,a,o=tn,l=tn,c,u=fr,h=1){if(u!==fr&&u!==Ur)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:h};super(d,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ea=class extends Gt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var Ut=class i extends Nt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],h=[],d=[],f=[],m=0,x=[],g=n/2,p=0;C(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new ut(h,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function C(){let _=new D,T=new D,A=0,L=(t-e)/n;for(let U=0;U<=r;U++){let S=[],M=U/r,w=M*(t-e)+e;for(let E=0;E<=s;E++){let I=E/s,B=I*l+o,N=Math.sin(B),F=Math.cos(B);T.x=w*N,T.y=-M*n+g,T.z=w*F,h.push(T.x,T.y,T.z),_.set(N,L,F).normalize(),d.push(_.x,_.y,_.z),f.push(I,1-M),S.push(m++)}x.push(S)}for(let U=0;U<s;U++)for(let S=0;S<r;S++){let M=x[S][U],w=x[S+1][U],E=x[S+1][U+1],I=x[S][U+1];(e>0||S!==0)&&(u.push(M,w,I),A+=3),(t>0||S!==r-1)&&(u.push(w,E,I),A+=3)}c.addGroup(p,A,0),p+=A}function v(_){let T=m,A=new re,L=new D,U=0,S=_===!0?e:t,M=_===!0?1:-1;for(let E=1;E<=s;E++)h.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;let w=m;for(let E=0;E<=s;E++){let B=E/s*l+o,N=Math.cos(B),F=Math.sin(B);L.x=S*F,L.y=g*M,L.z=S*N,h.push(L.x,L.y,L.z),d.push(0,M,0),A.x=N*.5+.5,A.y=F*.5*M+.5,f.push(A.x,A.y),m++}for(let E=0;E<s;E++){let I=T+E,B=w+E;_===!0?u.push(B,B+1,I):u.push(B+1,B,I),U+=3}c.addGroup(p,U,_===!0?1:2),p+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_n=class i extends Ut{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ta=class i extends Nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ut(r,3)),this.setAttribute("normal",new ut(r.slice(),3)),this.setAttribute("uv",new ut(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(C){let v=new D,_=new D,T=new D;for(let A=0;A<t.length;A+=3)f(t[A+0],v),f(t[A+1],_),f(t[A+2],T),l(v,_,T,C)}function l(C,v,_,T){let A=T+1,L=[];for(let U=0;U<=A;U++){L[U]=[];let S=C.clone().lerp(_,U/A),M=v.clone().lerp(_,U/A),w=A-U;for(let E=0;E<=w;E++)E===0&&U===A?L[U][E]=S:L[U][E]=S.clone().lerp(M,E/w)}for(let U=0;U<A;U++)for(let S=0;S<2*(A-U)-1;S++){let M=Math.floor(S/2);S%2===0?(d(L[U][M+1]),d(L[U+1][M]),d(L[U][M])):(d(L[U][M+1]),d(L[U+1][M+1]),d(L[U+1][M]))}}function c(C){let v=new D;for(let _=0;_<r.length;_+=3)v.x=r[_+0],v.y=r[_+1],v.z=r[_+2],v.normalize().multiplyScalar(C),r[_+0]=v.x,r[_+1]=v.y,r[_+2]=v.z}function u(){let C=new D;for(let v=0;v<r.length;v+=3){C.x=r[v+0],C.y=r[v+1],C.z=r[v+2];let _=g(C)/2/Math.PI+.5,T=p(C)/Math.PI+.5;a.push(_,1-T)}m(),h()}function h(){for(let C=0;C<a.length;C+=6){let v=a[C+0],_=a[C+2],T=a[C+4],A=Math.max(v,_,T),L=Math.min(v,_,T);A>.9&&L<.1&&(v<.2&&(a[C+0]+=1),_<.2&&(a[C+2]+=1),T<.2&&(a[C+4]+=1))}}function d(C){r.push(C.x,C.y,C.z)}function f(C,v){let _=C*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function m(){let C=new D,v=new D,_=new D,T=new D,A=new re,L=new re,U=new re;for(let S=0,M=0;S<r.length;S+=9,M+=6){C.set(r[S+0],r[S+1],r[S+2]),v.set(r[S+3],r[S+4],r[S+5]),_.set(r[S+6],r[S+7],r[S+8]),A.set(a[M+0],a[M+1]),L.set(a[M+2],a[M+3]),U.set(a[M+4],a[M+5]),T.copy(C).add(v).add(_).divideScalar(3);let w=g(T);x(A,M+0,C,w),x(L,M+2,v,w),x(U,M+4,_,w)}}function x(C,v,_,T){T<0&&C.x===1&&(a[v]=C.x-1),_.x===0&&_.z===0&&(a[v]=T/2/Math.PI+.5)}function g(C){return Math.atan2(C.z,-C.x)}function p(C){return Math.atan2(-C.y,Math.sqrt(C.x*C.x+C.z*C.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}},wr=class i extends Ta{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new re:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new Ke;for(let f=0;f<=e;f++){let m=f/e;s[f]=this.getTangentAt(m,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Qe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Qe(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Er=class extends Nn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Qo=class extends Er{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function $h(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,h){let d=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Fo=new D,hh=new $h,uh=new $h,dh=new $h,Tr=class extends Nn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(Fo.subVectors(s[0],s[1]).add(s[0]),c=Fo);let h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Fo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Fo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),f),x=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);x<1e-4&&(x=1),m<1e-4&&(m=x),g<1e-4&&(g=x),hh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,m,x,g),uh.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,m,x,g),dh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,m,x,g)}else this.curveType==="catmullrom"&&(hh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),uh.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),dh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(hh.calc(l),uh.calc(l),dh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function tf(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Om(i,e){let t=1-i;return t*t*e}function Fm(i,e){return 2*(1-i)*i*e}function km(i,e){return i*i*e}function oa(i,e,t,n){return Om(i,e)+Fm(i,t)+km(i,n)}function zm(i,e){let t=1-i;return t*t*t*e}function Hm(i,e){let t=1-i;return 3*t*t*i*e}function Gm(i,e){return 3*(1-i)*i*i*e}function Vm(i,e){return i*i*i*e}function la(i,e,t,n,s){return zm(i,e)+Hm(i,t)+Gm(i,n)+Vm(i,s)}var Aa=class extends Nn{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(la(e,s.x,r.x,a.x,o.x),la(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},el=class extends Nn{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(la(e,s.x,r.x,a.x,o.x),la(e,s.y,r.y,a.y,o.y),la(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ra=class extends Nn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tl=class extends Nn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends Nn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(oa(e,s.x,r.x,a.x),oa(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends Nn{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(oa(e,s.x,r.x,a.x),oa(e,s.y,r.y,a.y),oa(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Pa=class extends Nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(tf(o,l.x,c.x,u.x,h.x),tf(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},nl=Object.freeze({__proto__:null,ArcCurve:Qo,CatmullRomCurve3:Tr,CubicBezierCurve:Aa,CubicBezierCurve3:el,EllipseCurve:Er,LineCurve:Ra,LineCurve3:tl,QuadraticBezierCurve:Ca,QuadraticBezierCurve3:Ia,SplineCurve:Pa}),il=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new nl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new nl[s.type]().fromJSON(s))}return this}},La=class extends il{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ra(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ca(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Aa(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Pa(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Er(e,t,n,s,r,a,o,l);if(this.curves.length>0){let h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ar=class extends La{constructor(e){super(e),this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new La().fromJSON(s))}return this}};function jm(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=np(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Km(i,e,r,t)),i.length>80*t){o=1/0,l=1/0;let u=-1/0,h=-1/0;for(let d=t;d<s;d+=t){let f=i[d],m=i[d+1];f<o&&(o=f),m<l&&(l=m),f>u&&(u=f),m>h&&(h=m)}c=Math.max(u-o,h-l),c=c!==0?32767/c:0}return Da(r,a,t,o,l,c,0),a}function np(i,e,t,n,s){let r;if(s===ag(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=nf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=nf(a/n|0,i[a],i[a+1],r);return r&&Rr(r,r.next)&&(Ua(r),r=r.next),r}function Is(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Rr(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Ua(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Da(i,e,t,n,s,r,a){if(!i)return;!a&&r&&eg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Xm(i,n,s,r):Wm(i)){e.push(l.i,i.i,c.i),Ua(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=qm(Is(i),e),Da(i,e,t,n,s,r,2)):a===2&&Ym(i,e,t,n,s,r):Da(Is(i),e,t,n,s,r,1);break}}}function Wm(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),h=Math.min(o,l,c),d=Math.max(s,r,a),f=Math.max(o,l,c),m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&sa(s,o,r,l,a,c,m.x,m.y)&&Dt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Xm(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Dt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,h=r.y,d=a.y,f=Math.min(o,l,c),m=Math.min(u,h,d),x=Math.max(o,l,c),g=Math.max(u,h,d),p=Mh(f,m,e,t,n),C=Mh(x,g,e,t,n),v=i.prevZ,_=i.nextZ;for(;v&&v.z>=p&&_&&_.z<=C;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&sa(o,u,l,h,c,d,v.x,v.y)&&Dt(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&sa(o,u,l,h,c,d,_.x,_.y)&&Dt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=x&&v.y>=m&&v.y<=g&&v!==s&&v!==a&&sa(o,u,l,h,c,d,v.x,v.y)&&Dt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=C;){if(_.x>=f&&_.x<=x&&_.y>=m&&_.y<=g&&_!==s&&_!==a&&sa(o,u,l,h,c,d,_.x,_.y)&&Dt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function qm(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Rr(n,s)&&sp(n,t,t.next,s)&&Na(n,s)&&Na(s,n)&&(e.push(n.i,t.i,s.i),Ua(t),Ua(t.next),t=i=s),t=t.next}while(t!==i);return Is(t)}function Ym(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ig(a,o)){let l=rp(a,o);a=Is(a,a.next),l=Is(l,l.next),Da(a,e,t,n,s,r,0),Da(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Km(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=np(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(ng(c))}s.sort(Zm);for(let r=0;r<s.length;r++)t=Jm(s[r],t);return t}function Zm(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Jm(i,e){let t=$m(i,e);if(!t)return e;let n=rp(t,i);return Is(n,n.next),Is(t,t.next)}function $m(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Rr(i,t))return t;do{if(Rr(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&ip(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let h=Math.abs(s-t.y)/(n-t.x);Na(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&Qm(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function Qm(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function eg(i,e,t,n){let s=i;do s.z===0&&(s.z=Mh(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,tg(s)}function tg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function Mh(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function ng(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function ip(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function sa(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&ip(i,e,t,n,s,r,a,o)}function ig(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!sg(i,e)&&(Na(i,e)&&Na(e,i)&&rg(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||Rr(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Rr(i,e){return i.x===e.x&&i.y===e.y}function sp(i,e,t,n){let s=zo(Dt(i,e,t)),r=zo(Dt(i,e,n)),a=zo(Dt(t,n,i)),o=zo(Dt(t,n,e));return!!(s!==r&&a!==o||s===0&&ko(i,t,e)||r===0&&ko(i,n,e)||a===0&&ko(t,i,n)||o===0&&ko(t,e,n))}function ko(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function zo(i){return i>0?1:i<0?-1:0}function sg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&sp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Na(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function rg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function rp(i,e){let t=Sh(i.i,i.x,i.y),n=Sh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function nf(i,e,t,n){let s=Sh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ua(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Sh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function ag(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var wh=class{static triangulate(e,t,n=2){return jm(e,t,n)}},ws=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];sf(e),rf(n,e);let a=e.length;t.forEach(sf);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,rf(n,t[l]);let o=wh.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function sf(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function rf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ba=class i extends Nt{constructor(e=new Ar([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ut(s,3)),this.setAttribute("uv",new ut(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,C=t.UVGenerator!==void 0?t.UVGenerator:og,v,_=!1,T,A,L,U;p&&(v=p.getSpacedPoints(u),_=!0,d=!1,T=p.computeFrenetFrames(u,!1),A=new D,L=new D,U=new D),d||(g=0,f=0,m=0,x=0);let S=o.extractPoints(c),M=S.shape,w=S.holes;if(!ws.isClockWise(M)){M=M.reverse();for(let ie=0,ee=w.length;ie<ee;ie++){let Q=w[ie];ws.isClockWise(Q)&&(w[ie]=Q.reverse())}}function I(ie){let Q=10000000000000001e-36,$=ie[0];for(let me=1;me<=ie.length;me++){let ae=me%ie.length,ge=ie[ae],qe=ge.x-$.x,je=ge.y-$.y,P=qe*qe+je*je,b=Math.max(Math.abs(ge.x),Math.abs(ge.y),Math.abs($.x),Math.abs($.y)),V=Q*b*b;if(P<=V){ie.splice(ae,1),me--;continue}$=ge}}I(M),w.forEach(I);let B=w.length,N=M;for(let ie=0;ie<B;ie++){let ee=w[ie];M=M.concat(ee)}function F(ie,ee,Q){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(ee,Q)}let q=M.length;function j(ie,ee,Q){let $,me,ae,ge=ie.x-ee.x,qe=ie.y-ee.y,je=Q.x-ie.x,P=Q.y-ie.y,b=ge*ge+qe*qe,V=ge*P-qe*je;if(Math.abs(V)>Number.EPSILON){let Y=Math.sqrt(b),ne=Math.sqrt(je*je+P*P),K=ee.x-qe/Y,Le=ee.y+ge/Y,pe=Q.x-P/ne,Ce=Q.y+je/ne,Ie=((pe-K)*P-(Ce-Le)*je)/(ge*P-qe*je);$=K+ge*Ie-ie.x,me=Le+qe*Ie-ie.y;let oe=$*$+me*me;if(oe<=2)return new re($,me);ae=Math.sqrt(oe/2)}else{let Y=!1;ge>Number.EPSILON?je>Number.EPSILON&&(Y=!0):ge<-Number.EPSILON?je<-Number.EPSILON&&(Y=!0):Math.sign(qe)===Math.sign(P)&&(Y=!0),Y?($=-qe,me=ge,ae=Math.sqrt(b)):($=ge,me=qe,ae=Math.sqrt(b/2))}return new re($/ae,me/ae)}let ue=[];for(let ie=0,ee=N.length,Q=ee-1,$=ie+1;ie<ee;ie++,Q++,$++)Q===ee&&(Q=0),$===ee&&($=0),ue[ie]=j(N[ie],N[Q],N[$]);let he=[],fe,De=ue.concat();for(let ie=0,ee=B;ie<ee;ie++){let Q=w[ie];fe=[];for(let $=0,me=Q.length,ae=me-1,ge=$+1;$<me;$++,ae++,ge++)ae===me&&(ae=0),ge===me&&(ge=0),fe[$]=j(Q[$],Q[ae],Q[ge]);he.push(fe),De=De.concat(fe)}let Xe;if(g===0)Xe=ws.triangulateShape(N,w);else{let ie=[],ee=[];for(let Q=0;Q<g;Q++){let $=Q/g,me=f*Math.cos($*Math.PI/2),ae=m*Math.sin($*Math.PI/2)+x;for(let ge=0,qe=N.length;ge<qe;ge++){let je=F(N[ge],ue[ge],ae);Ue(je.x,je.y,-me),$===0&&ie.push(je)}for(let ge=0,qe=B;ge<qe;ge++){let je=w[ge];fe=he[ge];let P=[];for(let b=0,V=je.length;b<V;b++){let Y=F(je[b],fe[b],ae);Ue(Y.x,Y.y,-me),$===0&&P.push(Y)}$===0&&ee.push(P)}}Xe=ws.triangulateShape(ie,ee)}let gt=Xe.length,st=m+x;for(let ie=0;ie<q;ie++){let ee=d?F(M[ie],De[ie],st):M[ie];_?(L.copy(T.normals[0]).multiplyScalar(ee.x),A.copy(T.binormals[0]).multiplyScalar(ee.y),U.copy(v[0]).add(L).add(A),Ue(U.x,U.y,U.z)):Ue(ee.x,ee.y,0)}for(let ie=1;ie<=u;ie++)for(let ee=0;ee<q;ee++){let Q=d?F(M[ee],De[ee],st):M[ee];_?(L.copy(T.normals[ie]).multiplyScalar(Q.x),A.copy(T.binormals[ie]).multiplyScalar(Q.y),U.copy(v[ie]).add(L).add(A),Ue(U.x,U.y,U.z)):Ue(Q.x,Q.y,h/u*ie)}for(let ie=g-1;ie>=0;ie--){let ee=ie/g,Q=f*Math.cos(ee*Math.PI/2),$=m*Math.sin(ee*Math.PI/2)+x;for(let me=0,ae=N.length;me<ae;me++){let ge=F(N[me],ue[me],$);Ue(ge.x,ge.y,h+Q)}for(let me=0,ae=w.length;me<ae;me++){let ge=w[me];fe=he[me];for(let qe=0,je=ge.length;qe<je;qe++){let P=F(ge[qe],fe[qe],$);_?Ue(P.x,P.y+v[u-1].y,v[u-1].x+Q):Ue(P.x,P.y,h+Q)}}}J(),se();function J(){let ie=s.length/3;if(d){let ee=0,Q=q*ee;for(let $=0;$<gt;$++){let me=Xe[$];Re(me[2]+Q,me[1]+Q,me[0]+Q)}ee=u+g*2,Q=q*ee;for(let $=0;$<gt;$++){let me=Xe[$];Re(me[0]+Q,me[1]+Q,me[2]+Q)}}else{for(let ee=0;ee<gt;ee++){let Q=Xe[ee];Re(Q[2],Q[1],Q[0])}for(let ee=0;ee<gt;ee++){let Q=Xe[ee];Re(Q[0]+q*u,Q[1]+q*u,Q[2]+q*u)}}n.addGroup(ie,s.length/3-ie,0)}function se(){let ie=s.length/3,ee=0;we(N,ee),ee+=N.length;for(let Q=0,$=w.length;Q<$;Q++){let me=w[Q];we(me,ee),ee+=me.length}n.addGroup(ie,s.length/3-ie,1)}function we(ie,ee){let Q=ie.length;for(;--Q>=0;){let $=Q,me=Q-1;me<0&&(me=ie.length-1);for(let ae=0,ge=u+g*2;ae<ge;ae++){let qe=q*ae,je=q*(ae+1),P=ee+$+qe,b=ee+me+qe,V=ee+me+je,Y=ee+$+je;ot(P,b,V,Y)}}}function Ue(ie,ee,Q){l.push(ie),l.push(ee),l.push(Q)}function Re(ie,ee,Q){Et(ie),Et(ee),Et(Q);let $=s.length/3,me=C.generateTopUV(n,s,$-3,$-2,$-1);O(me[0]),O(me[1]),O(me[2])}function ot(ie,ee,Q,$){Et(ie),Et(ee),Et($),Et(ee),Et(Q),Et($);let me=s.length/3,ae=C.generateSideWallUV(n,s,me-6,me-3,me-2,me-1);O(ae[0]),O(ae[1]),O(ae[3]),O(ae[1]),O(ae[2]),O(ae[3])}function Et(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function O(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return lg(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new nl[s.type]().fromJSON(s)),new i(n,e.options)}},og={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new re(r,a),new re(o,l),new re(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[s*3],f=e[s*3+1],m=e[s*3+2],x=e[r*3],g=e[r*3+1],p=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-h),new re(d,1-m),new re(x,1-p)]:[new re(o,1-l),new re(u,1-h),new re(f,1-m),new re(g,1-p)]}};function lg(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ps=class i extends Ta{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ls=class i extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,h=e/o,d=t/l,f=[],m=[],x=[],g=[];for(let p=0;p<u;p++){let C=p*d-a;for(let v=0;v<c;v++){let _=v*h-r;m.push(_,-C,0),x.push(0,0,1),g.push(v/o),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let C=0;C<o;C++){let v=C+c*p,_=C+c*(p+1),T=C+1+c*(p+1),A=C+1+c*p;f.push(v,_,A),f.push(_,T,A)}this.setIndex(f),this.setAttribute("position",new ut(m,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ds=class i extends Nt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],u=[],h=e,d=(t-e)/s,f=new D,m=new re;for(let x=0;x<=s;x++){for(let g=0;g<=n;g++){let p=r+g/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let x=0;x<s;x++){let g=x*(n+1);for(let p=0;p<n;p++){let C=p+g,v=C,_=C+n+1,T=C+n+2,A=C+1;o.push(v,_,A),o.push(_,T,A)}}this.setIndex(o),this.setAttribute("position",new ut(l,3)),this.setAttribute("normal",new ut(c,3)),this.setAttribute("uv",new ut(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var di=class i extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],h=new D,d=new D,f=[],m=[],x=[],g=[];for(let p=0;p<=n;p++){let C=[],v=p/n,_=0;p===0&&a===0?_=.5/t:p===n&&l===Math.PI&&(_=-.5/t);for(let T=0;T<=t;T++){let A=T/t;h.x=-e*Math.cos(s+A*r)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(s+A*r)*Math.sin(a+v*o),m.push(h.x,h.y,h.z),d.copy(h).normalize(),x.push(d.x,d.y,d.z),g.push(A+_,1-v),C.push(c++)}u.push(C)}for(let p=0;p<n;p++)for(let C=0;C<t;C++){let v=u[p][C+1],_=u[p][C],T=u[p+1][C],A=u[p+1][C+1];(p!==0||a>0)&&f.push(v,_,A),(p!==n-1||l<Math.PI)&&f.push(_,T,A)}this.setIndex(f),this.setAttribute("position",new ut(m,3)),this.setAttribute("normal",new ut(x,3)),this.setAttribute("uv",new ut(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Oa=class i extends Nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],u=new D,h=new D,d=new D;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){let x=m/s*r,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(x),h.y=(e+t*Math.cos(g))*Math.sin(x),h.z=t*Math.sin(g),o.push(h.x,h.y,h.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(m/s),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){let x=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,C=(s+1)*f+m;a.push(x,g,C),a.push(g,p,C)}this.setIndex(a),this.setAttribute("position",new ut(o,3)),this.setAttribute("normal",new ut(l,3)),this.setAttribute("uv",new ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Fa=class i extends Nt{constructor(e=new Ia(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new re,u=new D,h=[],d=[],f=[],m=[];x(),this.setIndex(m),this.setAttribute("position",new ut(h,3)),this.setAttribute("normal",new ut(d,3)),this.setAttribute("uv",new ut(f,2));function x(){for(let v=0;v<t;v++)g(v);g(r===!1?t:0),C(),p()}function g(v){u=e.getPointAt(v/t,u);let _=a.normals[v],T=a.binormals[v];for(let A=0;A<=s;A++){let L=A/s*Math.PI*2,U=Math.sin(L),S=-Math.cos(L);l.x=S*_.x+U*T.x,l.y=S*_.y+U*T.y,l.z=S*_.z+U*T.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=t;v++)for(let _=1;_<=s;_++){let T=(s+1)*(v-1)+(_-1),A=(s+1)*v+(_-1),L=(s+1)*v+_,U=(s+1)*(v-1)+_;m.push(T,A,U),m.push(A,L,U)}}function C(){for(let v=0;v<=t;v++)for(let _=0;_<=s;_++)c.x=v/t,c.y=_/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new nl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ot=class extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xh,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sn=class extends Ot{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var sl=class extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rl=class extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ho(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function cg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function hg(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function af(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let l=0;l!==e;++l)s[a++]=i[o+l]}return s}function ap(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Ui=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},al=class extends Ui{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_h,endingEnd:_h}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case xh:r=e,o=2*t-n;break;case yh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case xh:a=e,l=2*n-t;break;case yh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),x=m*m,g=x*m,p=-d*g+2*d*x-d*m,C=(1+d)*g+(-1.5-2*d)*x+(-.5+d)*m+1,v=(-1-f)*g+(1.5+f)*x+.5*m,_=f*g-f*x;for(let T=0;T!==o;++T)r[T]=p*a[u+T]+C*a[c+T]+v*a[l+T]+_*a[h+T];return r}},ol=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[c+d]*h+a[l+d]*u;return r}},ll=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ho(t,this.TimeBufferType),this.values=Ho(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ho(e.times,Array),values:Ho(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ll(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new al(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case As:t=this.InterpolantFactoryMethodDiscrete;break;case Rs:t=this.InterpolantFactoryMethodLinear;break;case Go:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return As;case this.InterpolantFactoryMethodLinear:return Rs;case this.InterpolantFactoryMethodSmooth:return Go}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&cg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Go,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let h=o*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let x=t[h+m];if(x!==t[d+m]||x!==t[f+m]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Rs;var Bi=class extends wn{constructor(e,t,n){super(e,t,n)}};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=As;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ka=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};ka.prototype.ValueTypeName="color";var fi=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};fi.prototype.ValueTypeName="number";var cl=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)mn.slerpFlat(r,0,a,c-o,a,c,l);return r}},pi=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new cl(this.times,this.values,this.getValueSize(),e)}};pi.prototype.ValueTypeName="quaternion";pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends wn{constructor(e,t,n){super(e,t,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=As;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var mi=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};mi.prototype.ValueTypeName="vector";var za=class{constructor(e="",t=-1,n=[],s=Hf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Hn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(dg(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(wn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);let u=hg(l);l=af(l,1,u),c=af(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new fi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){let c=e[o],u=c.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(c)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(console.warn("THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,d,f,m,x){if(f.length!==0){let g=[],p=[];ap(f,g,p,m),g.length!==0&&x.push(new h(d,g,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let h=0;h<c.length;h++){let d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let x=0;x<d[m].morphTargets.length;x++)f[d[m].morphTargets[x]]=-1;for(let x in f){let g=[],p=[];for(let C=0;C!==d[m].morphTargets.length;++C){let v=d[m];g.push(v.time),p.push(v.morphTarget===x?1:0)}s.push(new fi(".morphTargetInfluence["+x+"]",g,p))}l=f.length*a}else{let f=".bones["+t[h].name+"]";n(mi,f+".position",d,"pos",s),n(pi,f+".quaternion",d,"rot",s),n(mi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function ug(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fi;case"vector":case"vector2":case"vector3":case"vector4":return mi;case"color":return ka;case"quaternion":return pi;case"bool":case"boolean":return Bi;case"string":return Oi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function dg(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ug(i.type);if(i.times===void 0){let t=[],n=[];ap(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}var li={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},hl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){let f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},op=new hl,gi=class{constructor(e){this.manager=e!==void 0?e:op,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};gi.DEFAULT_MATERIAL_NAME="__DEFAULT";var Li={},Eh=class extends Error{constructor(e,t){super(e),this.response=t}},Cr=class extends gi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=li.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Li[e]!==void 0){Li[e].push({onLoad:t,onProgress:n,onError:s});return}Li[e]=[],Li[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=Li[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,x=0,g=new ReadableStream({start(p){C();function C(){h.read().then(({done:v,value:_})=>{if(v)p.close();else{x+=_.byteLength;let T=new ProgressEvent("progress",{lengthComputable:m,loaded:x,total:f});for(let A=0,L=u.length;A<L;A++){let U=u[A];U.onProgress&&U.onProgress(T)}p.enqueue(_),C()}},v=>{p.error(v)})}}});return new Response(g)}else throw new Eh(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{li.add(`file:${e}`,c);let u=Li[e];delete Li[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{let u=Li[e];if(u===void 0)throw this.manager.itemError(e),c;delete Li[e];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var hr=new WeakMap,ul=class extends gi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=li.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=hr.get(a);h===void 0&&(h=[],hr.set(a,h)),h.push({onLoad:t,onError:s})}return a}let o=pr("img");function l(){u(),t&&t(this);let h=hr.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}hr.delete(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),li.remove(`image:${e}`);let d=hr.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(h)}hr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),li.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Ha=class extends gi{constructor(e){super(e)}load(e,t,n,s){let r=new Gt,a=new ul(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Ns=class extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Ga=class extends Ns{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Oe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},fh=new Ke,of=new D,lf=new D,Va=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Mr,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;of.setFromMatrixPosition(e.matrixWorld),t.position.copy(of),lf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(lf),t.updateMatrixWorld(),fh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Th=class extends Va{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Cs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ja=class extends Ns{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Th}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},cf=new Ke,ia=new D,ph=new D,Ah=class extends Va{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new re(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ia.setFromMatrixPosition(e.matrixWorld),n.position.copy(ia),ph.copy(n.position),ph.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ph),n.updateMatrixWorld(),s.makeTranslation(-ia.x,-ia.y,-ia.z),cf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cf,n.coordinateSystem,n.reversedDepth)}},Wa=class extends Ns{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ah}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Us=class extends pa{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rh=class extends Va{constructor(){super(new Us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Bs=class extends Ns{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new Rh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Fi=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var mh=new WeakMap,Xa=class extends gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=li.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{if(mh.has(a)===!0)s&&s(mh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return li.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),mh.set(l,c),li.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});li.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var dl=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Qh="\\[\\]\\.:\\/",fg=new RegExp("["+Qh+"]","g"),eu="[^"+Qh+"]",pg="[^"+Qh.replace("\\.","")+"]",mg=/((?:WC+[\/:])*)/.source.replace("WC",eu),gg=/(WCOD+)?/.source.replace("WCOD",pg),_g=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",eu),xg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",eu),yg=new RegExp("^"+mg+gg+_g+xg+"$"),vg=["material","materials","bones","map"],Ch=class{constructor(e,t,n){let s=n||wt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},wt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(fg,"")}static parseTrackName(e){let t=yg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);vg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};wt.Composite=Ch;wt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};wt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};wt.prototype.GetterByBindingType=[wt.prototype._getValue_direct,wt.prototype._getValue_array,wt.prototype._getValue_arrayElement,wt.prototype._getValue_toArray];wt.prototype.SetterByBindingTypeAndVersioning=[[wt.prototype._setValue_direct,wt.prototype._setValue_direct_setNeedsUpdate,wt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_array,wt.prototype._setValue_array_setNeedsUpdate,wt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_arrayElement,wt.prototype._setValue_arrayElement_setNeedsUpdate,wt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[wt.prototype._setValue_fromArray,wt.prototype._setValue_fromArray_setNeedsUpdate,wt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var kv=new Float32Array(1);var hf=new Ke,qa=class{constructor(e,t,n=0,s=1/0){this.ray=new ui(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new _r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return hf.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(hf),this}intersectObject(e,t=!0,n=[]){return Ih(e,this,n,t),n.sort(uf),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ih(e[s],this,n,t);return n.sort(uf),n}};function uf(i,e){return i.distance-e.distance}function Ih(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ih(r[a],e,t,!0)}}var Ir=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Qe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Qe(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ya=class extends ci{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function tu(i,e,t,n){let s=bg(n);switch(t){case Gh:return i*e;case Rl:return i*e/s.components*s.byteLength;case Cl:return i*e/s.components*s.byteLength;case jh:return i*e*2/s.components*s.byteLength;case Il:return i*e*2/s.components*s.byteLength;case Vh:return i*e*3/s.components*s.byteLength;case Un:return i*e*4/s.components*s.byteLength;case Pl:return i*e*4/s.components*s.byteLength;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case $a:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Dl:case Ul:return Math.max(i,16)*Math.max(e,8)/4;case Ll:case Nl:return Math.max(i,8)*Math.max(e,8)/2;case Bl:case Ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Fl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kl:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Hl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gl:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Vl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Wl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Xl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kl:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ql:case ec:case tc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nc:case ic:return Math.ceil(i/4)*Math.ceil(e/4)*8;case sc:case rc:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bg(i){switch(i){case ni:case Fh:return{byteLength:1,components:1};case Lr:case kh:case Dr:return{byteLength:2,components:1};case Tl:case Al:return{byteLength:2,components:4};case hs:case El:case jn:return{byteLength:4,components:1};case zh:case Hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");function Pp(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Sg(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){let u=l.array,h=l.updateRanges;if(i.bindBuffer(c,o),h.length===0)i.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],x=h[f];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++d,h[d]=x)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let x=h[f];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var wg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Eg=`#ifdef USE_ALPHAHASH
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
#endif`,Tg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ag=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ig=`#ifdef USE_AOMAP
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
#endif`,Pg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Lg=`#ifdef USE_BATCHING
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
#endif`,Dg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ng=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ug=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Bg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Og=`#ifdef USE_IRIDESCENCE
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
#endif`,Fg=`#ifdef USE_BUMPMAP
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
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xg=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qg=`#define PI 3.141592653589793
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
} // validated`,Yg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kg=`vec3 transformedNormal = objectNormal;
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
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$g=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e1="gl_FragColor = linearToOutputTexel( gl_FragColor );",t1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n1=`#ifdef USE_ENVMAP
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
#endif`,i1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,s1=`#ifdef USE_ENVMAP
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
#endif`,r1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
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
#endif`,o1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,h1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u1=`#ifdef USE_GRADIENTMAP
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
}`,d1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,p1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,m1=`uniform bool receiveShadow;
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
#endif`,g1=`#ifdef USE_ENVMAP
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
#endif`,_1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,x1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b1=`PhysicalMaterial material;
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
#endif`,M1=`struct PhysicalMaterial {
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
}`,S1=`
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
#endif`,w1=`#if defined( RE_IndirectDiffuse )
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
#endif`,E1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,C1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,I1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,P1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,L1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D1=`#if defined( USE_POINTS_UV )
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
#endif`,N1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,B1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,O1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,F1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,k1=`#ifdef USE_MORPHTARGETS
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
#endif`,z1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,G1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,X1=`#ifdef USE_NORMALMAP
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
#endif`,q1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,K1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Z1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Q1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,a_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,o_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l_=`float getShadowMask() {
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
}`,c_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,u_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d_=`#ifdef USE_SKINNING
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
#endif`,f_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,__=`#ifdef USE_TRANSMISSION
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
#endif`,x_=`#ifdef USE_TRANSMISSION
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
#endif`,y_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,M_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,S_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,w_=`uniform sampler2D t2D;
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`#include <common>
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
}`,I_=`#if DEPTH_PACKING == 3200
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
}`,P_=`#define DISTANCE
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
}`,L_=`#define DISTANCE
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`uniform float scale;
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
}`,B_=`uniform vec3 diffuse;
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
}`,O_=`#include <common>
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
}`,F_=`uniform vec3 diffuse;
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
}`,k_=`#define LAMBERT
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
}`,z_=`#define LAMBERT
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
}`,H_=`#define MATCAP
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
}`,G_=`#define MATCAP
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
}`,V_=`#define NORMAL
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
}`,j_=`#define NORMAL
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
}`,W_=`#define PHONG
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
}`,X_=`#define PHONG
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
}`,q_=`#define STANDARD
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
}`,Y_=`#define STANDARD
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
}`,K_=`#define TOON
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
}`,Z_=`#define TOON
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
}`,J_=`uniform float size;
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
}`,$_=`uniform vec3 diffuse;
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
}`,Q_=`#include <common>
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
}`,ex=`uniform vec3 color;
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
}`,tx=`uniform float rotation;
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
}`,nx=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:wg,alphahash_pars_fragment:Eg,alphamap_fragment:Tg,alphamap_pars_fragment:Ag,alphatest_fragment:Rg,alphatest_pars_fragment:Cg,aomap_fragment:Ig,aomap_pars_fragment:Pg,batching_pars_vertex:Lg,batching_vertex:Dg,begin_vertex:Ng,beginnormal_vertex:Ug,bsdfs:Bg,iridescence_fragment:Og,bumpmap_pars_fragment:Fg,clipping_planes_fragment:kg,clipping_planes_pars_fragment:zg,clipping_planes_pars_vertex:Hg,clipping_planes_vertex:Gg,color_fragment:Vg,color_pars_fragment:jg,color_pars_vertex:Wg,color_vertex:Xg,common:qg,cube_uv_reflection_fragment:Yg,defaultnormal_vertex:Kg,displacementmap_pars_vertex:Zg,displacementmap_vertex:Jg,emissivemap_fragment:$g,emissivemap_pars_fragment:Qg,colorspace_fragment:e1,colorspace_pars_fragment:t1,envmap_fragment:n1,envmap_common_pars_fragment:i1,envmap_pars_fragment:s1,envmap_pars_vertex:r1,envmap_physical_pars_fragment:g1,envmap_vertex:a1,fog_vertex:o1,fog_pars_vertex:l1,fog_fragment:c1,fog_pars_fragment:h1,gradientmap_pars_fragment:u1,lightmap_pars_fragment:d1,lights_lambert_fragment:f1,lights_lambert_pars_fragment:p1,lights_pars_begin:m1,lights_toon_fragment:_1,lights_toon_pars_fragment:x1,lights_phong_fragment:y1,lights_phong_pars_fragment:v1,lights_physical_fragment:b1,lights_physical_pars_fragment:M1,lights_fragment_begin:S1,lights_fragment_maps:w1,lights_fragment_end:E1,logdepthbuf_fragment:T1,logdepthbuf_pars_fragment:A1,logdepthbuf_pars_vertex:R1,logdepthbuf_vertex:C1,map_fragment:I1,map_pars_fragment:P1,map_particle_fragment:L1,map_particle_pars_fragment:D1,metalnessmap_fragment:N1,metalnessmap_pars_fragment:U1,morphinstance_vertex:B1,morphcolor_vertex:O1,morphnormal_vertex:F1,morphtarget_pars_vertex:k1,morphtarget_vertex:z1,normal_fragment_begin:H1,normal_fragment_maps:G1,normal_pars_fragment:V1,normal_pars_vertex:j1,normal_vertex:W1,normalmap_pars_fragment:X1,clearcoat_normal_fragment_begin:q1,clearcoat_normal_fragment_maps:Y1,clearcoat_pars_fragment:K1,iridescence_pars_fragment:Z1,opaque_fragment:J1,packing:$1,premultiplied_alpha_fragment:Q1,project_vertex:e_,dithering_fragment:t_,dithering_pars_fragment:n_,roughnessmap_fragment:i_,roughnessmap_pars_fragment:s_,shadowmap_pars_fragment:r_,shadowmap_pars_vertex:a_,shadowmap_vertex:o_,shadowmask_pars_fragment:l_,skinbase_vertex:c_,skinning_pars_vertex:h_,skinning_vertex:u_,skinnormal_vertex:d_,specularmap_fragment:f_,specularmap_pars_fragment:p_,tonemapping_fragment:m_,tonemapping_pars_fragment:g_,transmission_fragment:__,transmission_pars_fragment:x_,uv_pars_fragment:y_,uv_pars_vertex:v_,uv_vertex:b_,worldpos_vertex:M_,background_vert:S_,background_frag:w_,backgroundCube_vert:E_,backgroundCube_frag:T_,cube_vert:A_,cube_frag:R_,depth_vert:C_,depth_frag:I_,distanceRGBA_vert:P_,distanceRGBA_frag:L_,equirect_vert:D_,equirect_frag:N_,linedashed_vert:U_,linedashed_frag:B_,meshbasic_vert:O_,meshbasic_frag:F_,meshlambert_vert:k_,meshlambert_frag:z_,meshmatcap_vert:H_,meshmatcap_frag:G_,meshnormal_vert:V_,meshnormal_frag:j_,meshphong_vert:W_,meshphong_frag:X_,meshphysical_vert:q_,meshphysical_frag:Y_,meshtoon_vert:K_,meshtoon_frag:Z_,points_vert:J_,points_frag:$_,shadow_vert:Q_,shadow_frag:ex,sprite_vert:tx,sprite_frag:nx},ye={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},xi={basic:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Oe(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:ln([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:ln([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:ln([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Oe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:ln([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:ln([ye.points,ye.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:ln([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:ln([ye.common,ye.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:ln([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:ln([ye.sprite,ye.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:ln([ye.common,ye.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:ln([ye.lights,ye.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};xi.physical={uniforms:ln([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var ac={r:0,b:0,g:0},Gs=new $n,ix=new Ke;function sx(i,e,t,n,s,r,a){let o=new Oe(0),l=r===!0?0:1,c,u,h=null,d=0,f=null;function m(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_)),_}function x(v){let _=!1,T=m(v);T===null?p(o,l):T&&T.isColor&&(p(T,1),_=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(v,_){let T=m(_);T&&(T.isCubeTexture||T.mapping===Ka)?(u===void 0&&(u=new tt(new Vt(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Hs(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,L,U){this.matrixWorld.copyPosition(U.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Gs.copy(_.backgroundRotation),Gs.x*=-1,Gs.y*=-1,Gs.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Gs.y*=-1,Gs.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ix.makeRotationFromEuler(Gs)),u.material.toneMapped=ct.getTransfer(T.colorSpace)!==yt,(h!==T||d!==T.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new tt(new Ls(2,2),new Qn({name:"BackgroundMaterial",uniforms:Hs(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ct.getTransfer(T.colorSpace)!==yt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||d!==T.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=T,d=T.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,_){v.getRGB(ac,Jh(i)),n.buffers.color.setClear(ac.r,ac.g,ac.b,_,a)}function C(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:x,addToRenderList:g,dispose:C}}function rx(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(M,w,E,I,B){let N=!1,F=h(I,E,w);r!==F&&(r=F,c(r.object)),N=f(M,I,E,B),N&&m(M,I,E,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,_(M,w,E,I),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,w,E){let I=E.wireframe===!0,B=n[M.id];B===void 0&&(B={},n[M.id]=B);let N=B[w.id];N===void 0&&(N={},B[w.id]=N);let F=N[I];return F===void 0&&(F=d(l()),N[I]=F),F}function d(M){let w=[],E=[],I=[];for(let B=0;B<t;B++)w[B]=0,E[B]=0,I[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:E,attributeDivisors:I,object:M,attributes:{},index:null}}function f(M,w,E,I){let B=r.attributes,N=w.attributes,F=0,q=E.getAttributes();for(let j in q)if(q[j].location>=0){let he=B[j],fe=N[j];if(fe===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor)),he===void 0||he.attribute!==fe||fe&&he.data!==fe.data)return!0;F++}return r.attributesNum!==F||r.index!==I}function m(M,w,E,I){let B={},N=w.attributes,F=0,q=E.getAttributes();for(let j in q)if(q[j].location>=0){let he=N[j];he===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));let fe={};fe.attribute=he,he&&he.data&&(fe.data=he.data),B[j]=fe,F++}r.attributes=B,r.attributesNum=F,r.index=I}function x(){let M=r.newAttributes;for(let w=0,E=M.length;w<E;w++)M[w]=0}function g(M){p(M,0)}function p(M,w){let E=r.newAttributes,I=r.enabledAttributes,B=r.attributeDivisors;E[M]=1,I[M]===0&&(i.enableVertexAttribArray(M),I[M]=1),B[M]!==w&&(i.vertexAttribDivisor(M,w),B[M]=w)}function C(){let M=r.newAttributes,w=r.enabledAttributes;for(let E=0,I=w.length;E<I;E++)w[E]!==M[E]&&(i.disableVertexAttribArray(E),w[E]=0)}function v(M,w,E,I,B,N,F){F===!0?i.vertexAttribIPointer(M,w,E,B,N):i.vertexAttribPointer(M,w,E,I,B,N)}function _(M,w,E,I){x();let B=I.attributes,N=E.getAttributes(),F=w.defaultAttributeValues;for(let q in N){let j=N[q];if(j.location>=0){let ue=B[q];if(ue===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),ue!==void 0){let he=ue.normalized,fe=ue.itemSize,De=e.get(ue);if(De===void 0)continue;let Xe=De.buffer,gt=De.type,st=De.bytesPerElement,J=gt===i.INT||gt===i.UNSIGNED_INT||ue.gpuType===El;if(ue.isInterleavedBufferAttribute){let se=ue.data,we=se.stride,Ue=ue.offset;if(se.isInstancedInterleavedBuffer){for(let Re=0;Re<j.locationSize;Re++)p(j.location+Re,se.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Re=0;Re<j.locationSize;Re++)g(j.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let Re=0;Re<j.locationSize;Re++)v(j.location+Re,fe/j.locationSize,gt,he,we*st,(Ue+fe/j.locationSize*Re)*st,J)}else{if(ue.isInstancedBufferAttribute){for(let se=0;se<j.locationSize;se++)p(j.location+se,ue.meshPerAttribute);M.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let se=0;se<j.locationSize;se++)g(j.location+se);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let se=0;se<j.locationSize;se++)v(j.location+se,fe/j.locationSize,gt,he,fe*st,fe/j.locationSize*se*st,J)}}else if(F!==void 0){let he=F[q];if(he!==void 0)switch(he.length){case 2:i.vertexAttrib2fv(j.location,he);break;case 3:i.vertexAttrib3fv(j.location,he);break;case 4:i.vertexAttrib4fv(j.location,he);break;default:i.vertexAttrib1fv(j.location,he)}}}}C()}function T(){U();for(let M in n){let w=n[M];for(let E in w){let I=w[E];for(let B in I)u(I[B].object),delete I[B];delete w[E]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let w=n[M.id];for(let E in w){let I=w[E];for(let B in I)u(I[B].object),delete I[B];delete w[E]}delete n[M.id]}function L(M){for(let w in n){let E=n[w];if(E[M.id]===void 0)continue;let I=E[M.id];for(let B in I)u(I[B].object),delete I[B];delete E[M.id]}}function U(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:S,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:g,disableUnusedAttributes:C}}function ax(i,e,t){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let x=0;x<h;x++)m+=u[x]*d[x];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function ox(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let L=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(L){return!(L!==Un&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){let U=L===Dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==ni&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==jn&&!U)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),C=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=m>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:C,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:T,maxSamples:A}}function lx(i){let e=this,t=null,n=0,s=!1,r=!1,a=new vn,o=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!g)r?u(null):c();else{let C=r?0:n,v=C*4,_=p.clippingState||null;l.value=_,_=u(m,d,v,f);for(let T=0;T!==v;++T)_[T]=t[T];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,m!==!0||g===null){let p=f+x*4,C=d.matrixWorldInverse;o.getNormalMatrix(C),(g===null||g.length<p)&&(g=new Float32Array(p));for(let v=0,_=f;v!==x;++v,_+=4)a.copy(h[v]).applyMatrix4(C,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function cx(i){let e=new WeakMap;function t(a,o){return o===Ml?a.mapping=Os:o===Sl&&(a.mapping=Fs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Ml||o===Sl)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Zo(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Fr=4,lp=[.125,.215,.35,.446,.526,.582],Ws=20,nu=new Us,cp=new Oe,iu=null,su=0,ru=0,au=!1,js=(1+Math.sqrt(5))/2,Or=1/js,hp=[new D(-js,Or,0),new D(js,Or,0),new D(-Or,0,js),new D(Or,0,js),new D(0,js,-Or),new D(0,js,Or),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)],hx=new D,cc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=hx}=r;iu=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),ru=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(iu,su,ru),this._renderer.xr.enabled=au,e.scissorTest=!1,oc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Os||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),iu=this._renderer.getRenderTarget(),su=this._renderer.getActiveCubeFace(),ru=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Dr,format:Un,colorSpace:nn,depthBuffer:!1},s=up(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=up(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ux(r)),this._blurMaterial=dx(r,e,t)}return s}_compileMaterial(e){let t=new tt(this._lodPlanes[0],e);this._renderer.compile(t,nu)}_sceneToCubeUV(e,t,n,s,r){let l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(cp),h.toneMapping=zi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null));let x=new on({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1}),g=new tt(new Vt,x),p=!1,C=e.background;C?C.isColor&&(x.color.copy(C),e.background=null,p=!0):(x.color.copy(cp),p=!0);for(let v=0;v<6;v++){let _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[v],r.y,r.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[v],r.z)):(l.up.set(0,c[v],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[v]));let T=this._cubeSize;oc(s,_*T,v>2?T:0,T,T),h.setRenderTarget(s),p&&h.render(g,l),h.render(e,l)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=C}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Os||e.mapping===Fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=fp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new tt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;oc(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,nu)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=hp[(s-r-1)%hp.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new tt(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ws-1),x=r/m,g=isFinite(r)?1+Math.floor(u*x):Ws;g>Ws&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ws}`);let p=[],C=0;for(let L=0;L<Ws;++L){let U=L/x,S=Math.exp(-U*U/2);p.push(S),L===0?C+=S:L<g&&(C+=2*S)}for(let L=0;L<p.length;L++)p[L]=p[L]/C;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let _=this._sizeLods[s],T=3*_*(s>v-Fr?s-v+Fr:0),A=4*(this._cubeSize-_);oc(t,T,A,3*_,2*_),l.setRenderTarget(t),l.render(h,nu)}};function ux(i){let e=[],t=[],n=[],s=i,r=i-Fr+1+lp.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Fr?l=lp[a-i+Fr-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,x=3,g=2,p=1,C=new Float32Array(x*m*f),v=new Float32Array(g*m*f),_=new Float32Array(p*m*f);for(let A=0;A<f;A++){let L=A%3*2/3-1,U=A>2?0:-1,S=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];C.set(S,x*m*A),v.set(d,g*m*A);let M=[A,A,A,A,A,A];_.set(M,p*m*A)}let T=new Nt;T.setAttribute("position",new kt(C,x)),T.setAttribute("uv",new kt(v,g)),T.setAttribute("faceIndex",new kt(_,p)),e.push(T),s>Fr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function up(i,e,t){let n=new hi(i,e,t);return n.texture.mapping=Ka,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function dx(i,e,t){let n=new Float32Array(Ws),s=new D(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Ws,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:gu(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function dp(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gu(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function fp(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function gu(){return`

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
	`}function fx(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Ml||l===Sl,u=l===Os||l===Fs;if(c||u){let h=e.get(o),d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new cc(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{let f=o.image;return c&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new cc(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let l=0,c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function px(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&mr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function mx(i,e,t,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(h){let d=h.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(h){let d=[],f=h.index,m=h.attributes.position,x=0;if(f!==null){let C=f.array;x=f.version;for(let v=0,_=C.length;v<_;v+=3){let T=C[v+0],A=C[v+1],L=C[v+2];d.push(T,A,A,L,L,T)}}else if(m!==void 0){let C=m.array;x=m.version;for(let v=0,_=C.length/3-1;v<_;v+=3){let T=v+0,A=v+1,L=v+2;d.push(T,A,A,L,L,T)}}else return;let g=new(Zh(d)?fa:da)(d,1);g.version=x;let p=r.get(h);p&&e.remove(p),r.set(h,g)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return r.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function gx(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function h(d,f,m,x){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,x,0,m);let p=0;for(let C=0;C<m;C++)p+=f[C]*x[C];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function _x(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function xx(i,e,t){let n=new WeakMap,s=new ft;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let S=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],C=o.morphAttributes.color||[],v=0;f===!0&&(v=1),m===!0&&(v=2),x===!0&&(v=3);let _=o.attributes.position.count*v,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let A=new Float32Array(_*T*4*h),L=new ua(A,_,T,h);L.type=jn,L.needsUpdate=!0;let U=v*4;for(let M=0;M<h;M++){let w=g[M],E=p[M],I=C[M],B=_*T*4*M;for(let N=0;N<w.count;N++){let F=N*U;f===!0&&(s.fromBufferAttribute(w,N),A[B+F+0]=s.x,A[B+F+1]=s.y,A[B+F+2]=s.z,A[B+F+3]=0),m===!0&&(s.fromBufferAttribute(E,N),A[B+F+4]=s.x,A[B+F+5]=s.y,A[B+F+6]=s.z,A[B+F+7]=0),x===!0&&(s.fromBufferAttribute(I,N),A[B+F+8]=s.x,A[B+F+9]=s.y,A[B+F+10]=s.z,A[B+F+11]=I.itemSize===4?s.w:1)}}d={count:h,texture:L,size:new re(_,T)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let m=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function yx(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Lp=new Gt,pp=new wa(1,1),Dp=new ua,Np=new Yo,Up=new ma,mp=[],gp=[],_p=new Float32Array(16),xp=new Float32Array(9),yp=new Float32Array(4);function zr(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=mp[s];if(r===void 0&&(r=new Float32Array(s),mp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function uc(i,e){let t=gp[e];t===void 0&&(t=new Int32Array(e),gp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vx(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function bx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function Mx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function Sx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function wx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(jt(t,n))return;yp.set(n),i.uniformMatrix2fv(this.addr,!1,yp),Wt(t,n)}}function Ex(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(jt(t,n))return;xp.set(n),i.uniformMatrix3fv(this.addr,!1,xp),Wt(t,n)}}function Tx(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(jt(t,n))return;_p.set(n),i.uniformMatrix4fv(this.addr,!1,_p),Wt(t,n)}}function Ax(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Rx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function Cx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function Ix(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function Px(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Lx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function Dx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function Nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function Ux(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(pp.compareFunction=qh,r=pp):r=Lp,t.setTexture2D(e||r,s)}function Bx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Np,s)}function Ox(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Up,s)}function Fx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Dp,s)}function kx(i){switch(i){case 5126:return vx;case 35664:return bx;case 35665:return Mx;case 35666:return Sx;case 35674:return wx;case 35675:return Ex;case 35676:return Tx;case 5124:case 35670:return Ax;case 35667:case 35671:return Rx;case 35668:case 35672:return Cx;case 35669:case 35673:return Ix;case 5125:return Px;case 36294:return Lx;case 36295:return Dx;case 36296:return Nx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ux;case 35679:case 36299:case 36307:return Bx;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Fx}}function zx(i,e){i.uniform1fv(this.addr,e)}function Hx(i,e){let t=zr(e,this.size,2);i.uniform2fv(this.addr,t)}function Gx(i,e){let t=zr(e,this.size,3);i.uniform3fv(this.addr,t)}function Vx(i,e){let t=zr(e,this.size,4);i.uniform4fv(this.addr,t)}function jx(i,e){let t=zr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Wx(i,e){let t=zr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Xx(i,e){let t=zr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function qx(i,e){i.uniform1iv(this.addr,e)}function Yx(i,e){i.uniform2iv(this.addr,e)}function Kx(i,e){i.uniform3iv(this.addr,e)}function Zx(i,e){i.uniform4iv(this.addr,e)}function Jx(i,e){i.uniform1uiv(this.addr,e)}function $x(i,e){i.uniform2uiv(this.addr,e)}function Qx(i,e){i.uniform3uiv(this.addr,e)}function ey(i,e){i.uniform4uiv(this.addr,e)}function ty(i,e,t){let n=this.cache,s=e.length,r=uc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Lp,r[a])}function ny(i,e,t){let n=this.cache,s=e.length,r=uc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Np,r[a])}function iy(i,e,t){let n=this.cache,s=e.length,r=uc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Up,r[a])}function sy(i,e,t){let n=this.cache,s=e.length,r=uc(t,s);jt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Dp,r[a])}function ry(i){switch(i){case 5126:return zx;case 35664:return Hx;case 35665:return Gx;case 35666:return Vx;case 35674:return jx;case 35675:return Wx;case 35676:return Xx;case 5124:case 35670:return qx;case 35667:case 35671:return Yx;case 35668:case 35672:return Kx;case 35669:case 35673:return Zx;case 5125:return Jx;case 36294:return $x;case 36295:return Qx;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return sy}}var lu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kx(t.type)}},cu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ry(t.type)}},hu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},ou=/(\w+)(\])?(\[|\.)?/g;function vp(i,e){i.seq.push(e),i.map[e.id]=e}function ay(i,e,t){let n=i.name,s=n.length;for(ou.lastIndex=0;;){let r=ou.exec(n),a=ou.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){vp(t,c===void 0?new lu(o,i,e):new cu(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new hu(o),vp(t,h)),t=h}}}var kr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);ay(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function bp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var oy=37297,ly=0;function cy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Mp=new Je;function hy(i){ct._getMatrix(Mp,ct.workingColorSpace,i);let e=`mat3( ${Mp.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(i)){case ca:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Sp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+cy(i.getShaderSource(e),o)}else return r}function uy(i,e){let t=hy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function dy(i,e){let t;switch(e){case Nf:t="Linear";break;case Uf:t="Reinhard";break;case Bf:t="Cineon";break;case bl:t="ACESFilmic";break;case Ff:t="AgX";break;case kf:t="Neutral";break;case Of:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var lc=new D;function fy(){ct.getLuminanceCoefficients(lc);let i=lc.x.toFixed(4),e=lc.y.toFixed(4),t=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function py(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function my(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function to(i){return i!==""}function wp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ep(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _y=/^[ \t]*#include +<([\w\d./]+)>/gm;function uu(i){return i.replace(_y,yy)}var xy=new Map;function yy(i,e){let t=et[e];if(t===void 0){let n=xy.get(e);if(n!==void 0)t=et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return uu(t)}var vy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tp(i){return i.replace(vy,by)}function by(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ap(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function My(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===fl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_i&&(e="SHADOWMAP_TYPE_VSM"),e}function Sy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Os:case Fs:e="ENVMAP_TYPE_CUBE";break;case Ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function Ey(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Bh:e="ENVMAP_BLENDING_MULTIPLY";break;case Lf:e="ENVMAP_BLENDING_MIX";break;case Df:e="ENVMAP_BLENDING_ADD";break}return e}function Ty(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ay(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=My(t),c=Sy(t),u=wy(t),h=Ey(t),d=Ty(t),f=py(t),m=my(r),x=s.createProgram(),g,p,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(to).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(to).join(`
`),p.length>0&&(p+=`
`)):(g=[Ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),p=[Ap(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zi?"#define TONE_MAPPING":"",t.toneMapping!==zi?et.tonemapping_pars_fragment:"",t.toneMapping!==zi?dy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,uy("linearToOutputTexel",t.outputColorSpace),fy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(to).join(`
`)),a=uu(a),a=wp(a,t),a=Ep(a,t),o=uu(o),o=wp(o,t),o=Ep(o,t),a=Tp(a),o=Tp(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Yh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=C+g+a,_=C+p+o,T=bp(s,s.VERTEX_SHADER,v),A=bp(s,s.FRAGMENT_SHADER,_);s.attachShader(x,T),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(w){if(i.debug.checkShaderErrors){let E=s.getProgramInfoLog(x)||"",I=s.getShaderInfoLog(T)||"",B=s.getShaderInfoLog(A)||"",N=E.trim(),F=I.trim(),q=B.trim(),j=!0,ue=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,T,A);else{let he=Sp(s,T,"vertex"),fe=Sp(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+N+`
`+he+`
`+fe)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(F===""||q==="")&&(ue=!1);ue&&(w.diagnostics={runnable:j,programLog:N,vertexShader:{log:F,prefix:g},fragmentShader:{log:q,prefix:p}})}s.deleteShader(T),s.deleteShader(A),U=new kr(s,x),S=gy(s,x)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,oy)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ly++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=T,this.fragmentShader=A,this}var Ry=0,du=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fu(e),t.set(e,n)),n}},fu=class{constructor(e){this.id=Ry++,this.code=e,this.usedTimes=0}};function Cy(i,e,t,n,s,r,a){let o=new _r,l=new du,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,w,E,I){let B=E.fog,N=I.geometry,F=S.isMeshStandardMaterial?E.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||F),j=q&&q.mapping===Ka?q.image.height:null,ue=m[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));let he=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,fe=he!==void 0?he.length:0,De=0;N.morphAttributes.position!==void 0&&(De=1),N.morphAttributes.normal!==void 0&&(De=2),N.morphAttributes.color!==void 0&&(De=3);let Xe,gt,st,J;if(ue){let _t=xi[ue];Xe=_t.vertexShader,gt=_t.fragmentShader}else Xe=S.vertexShader,gt=S.fragmentShader,l.update(S),st=l.getVertexShaderID(S),J=l.getFragmentShaderID(S);let se=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Ue=I.isInstancedMesh===!0,Re=I.isBatchedMesh===!0,ot=!!S.map,Et=!!S.matcap,O=!!q,ie=!!S.aoMap,ee=!!S.lightMap,Q=!!S.bumpMap,$=!!S.normalMap,me=!!S.displacementMap,ae=!!S.emissiveMap,ge=!!S.metalnessMap,qe=!!S.roughnessMap,je=S.anisotropy>0,P=S.clearcoat>0,b=S.dispersion>0,V=S.iridescence>0,Y=S.sheen>0,ne=S.transmission>0,K=je&&!!S.anisotropyMap,Le=P&&!!S.clearcoatMap,pe=P&&!!S.clearcoatNormalMap,Ce=P&&!!S.clearcoatRoughnessMap,Ie=V&&!!S.iridescenceMap,oe=V&&!!S.iridescenceThicknessMap,Me=Y&&!!S.sheenColorMap,He=Y&&!!S.sheenRoughnessMap,Ne=!!S.specularMap,ve=!!S.specularColorMap,$e=!!S.specularIntensityMap,k=ne&&!!S.transmissionMap,de=ne&&!!S.thicknessMap,_e=!!S.gradientMap,Ee=!!S.alphaMap,le=S.alphaTest>0,te=!!S.alphaHash,Pe=!!S.extensions,Ye=zi;S.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Ye=i.toneMapping);let Tt={shaderID:ue,shaderType:S.type,shaderName:S.name,vertexShader:Xe,fragmentShader:gt,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:J,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Re,batchingColor:Re&&I._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&I.instanceColor!==null,instancingMorph:Ue&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?i.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:nn,alphaToCoverage:!!S.alphaToCoverage,map:ot,matcap:Et,envMap:O,envMapMode:O&&q.mapping,envMapCubeUVHeight:j,aoMap:ie,lightMap:ee,bumpMap:Q,normalMap:$,displacementMap:d&&me,emissiveMap:ae,normalMapObjectSpace:$&&S.normalMapType===jf,normalMapTangentSpace:$&&S.normalMapType===Xh,metalnessMap:ge,roughnessMap:qe,anisotropy:je,anisotropyMap:K,clearcoat:P,clearcoatMap:Le,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ce,dispersion:b,iridescence:V,iridescenceMap:Ie,iridescenceThicknessMap:oe,sheen:Y,sheenColorMap:Me,sheenRoughnessMap:He,specularMap:Ne,specularColorMap:ve,specularIntensityMap:$e,transmission:ne,transmissionMap:k,thicknessMap:de,gradientMap:_e,opaque:S.transparent===!1&&S.blending===Es&&S.alphaToCoverage===!1,alphaMap:Ee,alphaTest:le,alphaHash:te,combine:S.combine,mapUv:ot&&x(S.map.channel),aoMapUv:ie&&x(S.aoMap.channel),lightMapUv:ee&&x(S.lightMap.channel),bumpMapUv:Q&&x(S.bumpMap.channel),normalMapUv:$&&x(S.normalMap.channel),displacementMapUv:me&&x(S.displacementMap.channel),emissiveMapUv:ae&&x(S.emissiveMap.channel),metalnessMapUv:ge&&x(S.metalnessMap.channel),roughnessMapUv:qe&&x(S.roughnessMap.channel),anisotropyMapUv:K&&x(S.anisotropyMap.channel),clearcoatMapUv:Le&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:He&&x(S.sheenRoughnessMap.channel),specularMapUv:Ne&&x(S.specularMap.channel),specularColorMapUv:ve&&x(S.specularColorMap.channel),specularIntensityMapUv:$e&&x(S.specularIntensityMap.channel),transmissionMapUv:k&&x(S.transmissionMap.channel),thicknessMapUv:de&&x(S.thicknessMap.channel),alphaMapUv:Ee&&x(S.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&($||je),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!N.attributes.uv&&(ot||Ee),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:we,skinning:I.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:De,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&w.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:ot&&S.map.isVideoTexture===!0&&ct.getTransfer(S.map.colorSpace)===yt,decodeVideoTextureEmissive:ae&&S.emissiveMap.isVideoTexture===!0&&ct.getTransfer(S.emissiveMap.colorSpace)===yt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Zt,flipSided:S.side===xn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Pe&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&S.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Tt.vertexUv1s=c.has(1),Tt.vertexUv2s=c.has(2),Tt.vertexUv3s=c.has(3),c.clear(),Tt}function p(S){let M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(let w in S.defines)M.push(w),M.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(C(M,S),v(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function C(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function v(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function _(S){let M=m[S.type],w;if(M){let E=xi[M];w=tp.clone(E.uniforms)}else w=S.uniforms;return w}function T(S,M){let w;for(let E=0,I=u.length;E<I;E++){let B=u[E];if(B.cacheKey===M){w=B,++w.usedTimes;break}}return w===void 0&&(w=new Ay(i,M,S,r),u.push(w)),w}function A(S){if(--S.usedTimes===0){let M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function L(S){l.remove(S)}function U(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:T,releaseProgram:A,releaseShaderCache:L,programs:u,dispose:U}}function Iy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Py(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Cp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,m,x,g){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:x,group:g},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=x,p.group=g),e++,p}function o(h,d,f,m,x,g){let p=a(h,d,f,m,x,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(h,d,f,m,x,g){let p=a(h,d,f,m,x,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||Py),n.length>1&&n.sort(d||Rp),s.length>1&&s.sort(d||Rp)}function u(){for(let h=e,d=i.length;h<d;h++){let f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function Ly(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Cp,i.set(n,[a])):s>=r.length?(a=new Cp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Dy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Oe};break;case"SpotLight":t={position:new D,direction:new D,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function Ny(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Uy=0;function By(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Oy(i){let e=new Dy,t=Ny(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new Ke,a=new Ke;function o(c){let u=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,m=0,x=0,g=0,p=0,C=0,v=0,_=0,T=0,A=0,L=0;c.sort(By);for(let S=0,M=c.length;S<M;S++){let w=c[S],E=w.color,I=w.intensity,B=w.distance,N=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)u+=E.r*I,h+=E.g*I,d+=E.b*I;else if(w.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(w.sh.coefficients[F],I);L++}else if(w.isDirectionalLight){let F=e.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let q=w.shadow,j=t.get(w);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,n.directionalShadow[f]=j,n.directionalShadowMap[f]=N,n.directionalShadowMatrix[f]=w.shadow.matrix,C++}n.directional[f]=F,f++}else if(w.isSpotLight){let F=e.get(w);F.position.setFromMatrixPosition(w.matrixWorld),F.color.copy(E).multiplyScalar(I),F.distance=B,F.coneCos=Math.cos(w.angle),F.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),F.decay=w.decay,n.spot[x]=F;let q=w.shadow;if(w.map&&(n.spotLightMap[T]=w.map,T++,q.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[x]=q.matrix,w.castShadow){let j=t.get(w);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,n.spotShadow[x]=j,n.spotShadowMap[x]=N,_++}x++}else if(w.isRectAreaLight){let F=e.get(w);F.color.copy(E).multiplyScalar(I),F.halfWidth.set(w.width*.5,0,0),F.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=F,g++}else if(w.isPointLight){let F=e.get(w);if(F.color.copy(w.color).multiplyScalar(w.intensity),F.distance=w.distance,F.decay=w.decay,w.castShadow){let q=w.shadow,j=t.get(w);j.shadowIntensity=q.intensity,j.shadowBias=q.bias,j.shadowNormalBias=q.normalBias,j.shadowRadius=q.radius,j.shadowMapSize=q.mapSize,j.shadowCameraNear=q.camera.near,j.shadowCameraFar=q.camera.far,n.pointShadow[m]=j,n.pointShadowMap[m]=N,n.pointShadowMatrix[m]=w.shadow.matrix,v++}n.point[m]=F,m++}else if(w.isHemisphereLight){let F=e.get(w);F.skyColor.copy(w.color).multiplyScalar(I),F.groundColor.copy(w.groundColor).multiplyScalar(I),n.hemi[p]=F,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let U=n.hash;(U.directionalLength!==f||U.pointLength!==m||U.spotLength!==x||U.rectAreaLength!==g||U.hemiLength!==p||U.numDirectionalShadows!==C||U.numPointShadows!==v||U.numSpotShadows!==_||U.numSpotMaps!==T||U.numLightProbes!==L)&&(n.directional.length=f,n.spot.length=x,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=C,n.directionalShadowMap.length=C,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=C,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=_+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=L,U.directionalLength=f,U.pointLength=m,U.spotLength=x,U.rectAreaLength=g,U.hemiLength=p,U.numDirectionalShadows=C,U.numPointShadows=v,U.numSpotShadows=_,U.numSpotMaps=T,U.numLightProbes=L,n.version=Uy++)}function l(c,u){let h=0,d=0,f=0,m=0,x=0,g=u.matrixWorldInverse;for(let p=0,C=c.length;p<C;p++){let v=c[p];if(v.isDirectionalLight){let _=n.directional[h];_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),h++}else if(v.isSpotLight){let _=n.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),f++}else if(v.isRectAreaLight){let _=n.rectArea[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(v.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){let _=n.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:o,setupView:l,state:n}}function Ip(i){let e=new Oy(i),t=[],n=[];function s(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Fy(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ip(i),e.set(s,[o])):r>=a.length?(o=new Ip(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ky=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zy=`uniform sampler2D shadow_pass;
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
}`;function Hy(i,e,t){let n=new Mr,s=new re,r=new re,a=new ft,o=new sl({depthPacking:Vf}),l=new rl,c={},u=t.maxTextureSize,h={[Dn]:xn,[xn]:Dn,[Zt]:Zt},d=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:ky,fragmentShader:zy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Nt;m.setAttribute("position",new kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new tt(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lh;let p=this.type;this.render=function(A,L,U){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;let S=i.getRenderTarget(),M=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),E=i.state;E.setBlending(ki),E.buffers.depth.getReversed()===!0?E.buffers.color.setClear(0,0,0,0):E.buffers.color.setClear(1,1,1,1),E.buffers.depth.setTest(!0),E.setScissorTest(!1);let I=p!==_i&&this.type===_i,B=p===_i&&this.type!==_i;for(let N=0,F=A.length;N<F;N++){let q=A[N],j=q.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;s.copy(j.mapSize);let ue=j.getFrameExtents();if(s.multiply(ue),r.copy(j.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ue.x),s.x=r.x*ue.x,j.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ue.y),s.y=r.y*ue.y,j.mapSize.y=r.y)),j.map===null||I===!0||B===!0){let fe=this.type!==_i?{minFilter:tn,magFilter:tn}:{};j.map!==null&&j.map.dispose(),j.map=new hi(s.x,s.y,fe),j.map.texture.name=q.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();let he=j.getViewportCount();for(let fe=0;fe<he;fe++){let De=j.getViewport(fe);a.set(r.x*De.x,r.y*De.y,r.x*De.z,r.y*De.w),E.viewport(a),j.updateMatrices(q,fe),n=j.getFrustum(),_(L,U,j.camera,q,this.type)}j.isPointLightShadow!==!0&&this.type===_i&&C(j,U),j.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,M,w)};function C(A,L){let U=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new hi(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(L,null,U,d,x,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(L,null,U,f,x,null)}function v(A,L,U,S){let M=null,w=U.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)M=w;else if(M=U.isPointLight===!0?l:o,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){let E=M.uuid,I=L.uuid,B=c[E];B===void 0&&(B={},c[E]=B);let N=B[I];N===void 0&&(N=M.clone(),B[I]=N,L.addEventListener("dispose",T)),M=N}if(M.visible=L.visible,M.wireframe=L.wireframe,S===_i?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:h[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,U.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let E=i.properties.get(M);E.light=U}return M}function _(A,L,U,S,M){if(A.visible===!1)return;if(A.layers.test(L.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===_i)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,A.matrixWorld);let I=e.update(A),B=A.material;if(Array.isArray(B)){let N=I.groups;for(let F=0,q=N.length;F<q;F++){let j=N[F],ue=B[j.materialIndex];if(ue&&ue.visible){let he=v(A,ue,S,M);A.onBeforeShadow(i,A,L,U,I,he,j),i.renderBufferDirect(U,null,I,he,A,j),A.onAfterShadow(i,A,L,U,I,he,j)}}}else if(B.visible){let N=v(A,B,S,M);A.onBeforeShadow(i,A,L,U,I,N,null),i.renderBufferDirect(U,null,I,N,A,null),A.onAfterShadow(i,A,L,U,I,N,null)}}let E=A.children;for(let I=0,B=E.length;I<B;I++)_(E[I],L,U,S,M)}function T(A){A.target.removeEventListener("dispose",T);for(let U in c){let S=c[U],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}var Gy={[pl]:ml,[gl]:yl,[_l]:vl,[Ts]:xl,[ml]:pl,[yl]:gl,[vl]:_l,[xl]:Ts};function Vy(i,e){function t(){let k=!1,de=new ft,_e=null,Ee=new ft(0,0,0,0);return{setMask:function(le){_e!==le&&!k&&(i.colorMask(le,le,le,le),_e=le)},setLocked:function(le){k=le},setClear:function(le,te,Pe,Ye,Tt){Tt===!0&&(le*=Ye,te*=Ye,Pe*=Ye),de.set(le,te,Pe,Ye),Ee.equals(de)===!1&&(i.clearColor(le,te,Pe,Ye),Ee.copy(de))},reset:function(){k=!1,_e=null,Ee.set(-1,0,0,0)}}}function n(){let k=!1,de=!1,_e=null,Ee=null,le=null;return{setReversed:function(te){if(de!==te){let Pe=e.get("EXT_clip_control");te?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),de=te;let Ye=le;le=null,this.setClear(Ye)}},getReversed:function(){return de},setTest:function(te){te?se(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(te){_e!==te&&!k&&(i.depthMask(te),_e=te)},setFunc:function(te){if(de&&(te=Gy[te]),Ee!==te){switch(te){case pl:i.depthFunc(i.NEVER);break;case ml:i.depthFunc(i.ALWAYS);break;case gl:i.depthFunc(i.LESS);break;case Ts:i.depthFunc(i.LEQUAL);break;case _l:i.depthFunc(i.EQUAL);break;case xl:i.depthFunc(i.GEQUAL);break;case yl:i.depthFunc(i.GREATER);break;case vl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=te}},setLocked:function(te){k=te},setClear:function(te){le!==te&&(de&&(te=1-te),i.clearDepth(te),le=te)},reset:function(){k=!1,_e=null,Ee=null,le=null,de=!1}}}function s(){let k=!1,de=null,_e=null,Ee=null,le=null,te=null,Pe=null,Ye=null,Tt=null;return{setTest:function(_t){k||(_t?se(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(_t){de!==_t&&!k&&(i.stencilMask(_t),de=_t)},setFunc:function(_t,Ti,ai){(_e!==_t||Ee!==Ti||le!==ai)&&(i.stencilFunc(_t,Ti,ai),_e=_t,Ee=Ti,le=ai)},setOp:function(_t,Ti,ai){(te!==_t||Pe!==Ti||Ye!==ai)&&(i.stencilOp(_t,Ti,ai),te=_t,Pe=Ti,Ye=ai)},setLocked:function(_t){k=_t},setClear:function(_t){Tt!==_t&&(i.clearStencil(_t),Tt=_t)},reset:function(){k=!1,de=null,_e=null,Ee=null,le=null,te=null,Pe=null,Ye=null,Tt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},h={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,C=null,v=null,_=null,T=null,A=null,L=new Oe(0,0,0),U=0,S=!1,M=null,w=null,E=null,I=null,B=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,q=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),F=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),F=q>=2);let ue=null,he={},fe=i.getParameter(i.SCISSOR_BOX),De=i.getParameter(i.VIEWPORT),Xe=new ft().fromArray(fe),gt=new ft().fromArray(De);function st(k,de,_e,Ee){let le=new Uint8Array(4),te=i.createTexture();i.bindTexture(k,te),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pe=0;Pe<_e;Pe++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(de+Pe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return te}let J={};J[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),se(i.DEPTH_TEST),a.setFunc(Ts),Q(!1),$(Ph),se(i.CULL_FACE),ie(ki);function se(k){u[k]!==!0&&(i.enable(k),u[k]=!0)}function we(k){u[k]!==!1&&(i.disable(k),u[k]=!1)}function Ue(k,de){return h[k]!==de?(i.bindFramebuffer(k,de),h[k]=de,k===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=de),k===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=de),!0):!1}function Re(k,de){let _e=f,Ee=!1;if(k){_e=d.get(de),_e===void 0&&(_e=[],d.set(de,_e));let le=k.textures;if(_e.length!==le.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Pe=le.length;te<Pe;te++)_e[te]=i.COLOR_ATTACHMENT0+te;_e.length=le.length,Ee=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(_e)}function ot(k){return m!==k?(i.useProgram(k),m=k,!0):!1}let Et={[as]:i.FUNC_ADD,[mf]:i.FUNC_SUBTRACT,[gf]:i.FUNC_REVERSE_SUBTRACT};Et[_f]=i.MIN,Et[xf]=i.MAX;let O={[yf]:i.ZERO,[vf]:i.ONE,[bf]:i.SRC_COLOR,[Vo]:i.SRC_ALPHA,[Af]:i.SRC_ALPHA_SATURATE,[Ef]:i.DST_COLOR,[Sf]:i.DST_ALPHA,[Mf]:i.ONE_MINUS_SRC_COLOR,[jo]:i.ONE_MINUS_SRC_ALPHA,[Tf]:i.ONE_MINUS_DST_COLOR,[wf]:i.ONE_MINUS_DST_ALPHA,[Rf]:i.CONSTANT_COLOR,[Cf]:i.ONE_MINUS_CONSTANT_COLOR,[If]:i.CONSTANT_ALPHA,[Pf]:i.ONE_MINUS_CONSTANT_ALPHA};function ie(k,de,_e,Ee,le,te,Pe,Ye,Tt,_t){if(k===ki){x===!0&&(we(i.BLEND),x=!1);return}if(x===!1&&(se(i.BLEND),x=!0),k!==pf){if(k!==g||_t!==S){if((p!==as||_!==as)&&(i.blendEquation(i.FUNC_ADD),p=as,_=as),_t)switch(k){case Es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dh:i.blendFunc(i.ONE,i.ONE);break;case Nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Uh:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dh:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Nh:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Uh:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}C=null,v=null,T=null,A=null,L.set(0,0,0),U=0,g=k,S=_t}return}le=le||de,te=te||_e,Pe=Pe||Ee,(de!==p||le!==_)&&(i.blendEquationSeparate(Et[de],Et[le]),p=de,_=le),(_e!==C||Ee!==v||te!==T||Pe!==A)&&(i.blendFuncSeparate(O[_e],O[Ee],O[te],O[Pe]),C=_e,v=Ee,T=te,A=Pe),(Ye.equals(L)===!1||Tt!==U)&&(i.blendColor(Ye.r,Ye.g,Ye.b,Tt),L.copy(Ye),U=Tt),g=k,S=!1}function ee(k,de){k.side===Zt?we(i.CULL_FACE):se(i.CULL_FACE);let _e=k.side===xn;de&&(_e=!_e),Q(_e),k.blending===Es&&k.transparent===!1?ie(ki):ie(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let Ee=k.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),ae(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?se(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function Q(k){M!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),M=k)}function $(k){k!==df?(se(i.CULL_FACE),k!==w&&(k===Ph?i.cullFace(i.BACK):k===ff?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),w=k}function me(k){k!==E&&(F&&i.lineWidth(k),E=k)}function ae(k,de,_e){k?(se(i.POLYGON_OFFSET_FILL),(I!==de||B!==_e)&&(i.polygonOffset(de,_e),I=de,B=_e)):we(i.POLYGON_OFFSET_FILL)}function ge(k){k?se(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function qe(k){k===void 0&&(k=i.TEXTURE0+N-1),ue!==k&&(i.activeTexture(k),ue=k)}function je(k,de,_e){_e===void 0&&(ue===null?_e=i.TEXTURE0+N-1:_e=ue);let Ee=he[_e];Ee===void 0&&(Ee={type:void 0,texture:void 0},he[_e]=Ee),(Ee.type!==k||Ee.texture!==de)&&(ue!==_e&&(i.activeTexture(_e),ue=_e),i.bindTexture(k,de||J[k]),Ee.type=k,Ee.texture=de)}function P(){let k=he[ue];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{i.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ne(){try{i.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pe(){try{i.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{i.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(){try{i.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function oe(){try{i.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Me(k){Xe.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Xe.copy(k))}function He(k){gt.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),gt.copy(k))}function Ne(k,de){let _e=c.get(de);_e===void 0&&(_e=new WeakMap,c.set(de,_e));let Ee=_e.get(k);Ee===void 0&&(Ee=i.getUniformBlockIndex(de,k.name),_e.set(k,Ee))}function ve(k,de){let Ee=c.get(de).get(k);l.get(de)!==Ee&&(i.uniformBlockBinding(de,Ee,k.__bindingPointIndex),l.set(de,Ee))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ue=null,he={},h={},d=new WeakMap,f=[],m=null,x=!1,g=null,p=null,C=null,v=null,_=null,T=null,A=null,L=new Oe(0,0,0),U=0,S=!1,M=null,w=null,E=null,I=null,B=null,Xe.set(0,0,i.canvas.width,i.canvas.height),gt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:se,disable:we,bindFramebuffer:Ue,drawBuffers:Re,useProgram:ot,setBlending:ie,setMaterial:ee,setFlipSided:Q,setCullFace:$,setLineWidth:me,setPolygonOffset:ae,setScissorTest:ge,activeTexture:qe,bindTexture:je,unbindTexture:P,compressedTexImage2D:b,compressedTexImage3D:V,texImage2D:Ie,texImage3D:oe,updateUBOMapping:Ne,uniformBlockBinding:ve,texStorage2D:pe,texStorage3D:Ce,texSubImage2D:Y,texSubImage3D:ne,compressedTexSubImage2D:K,compressedTexSubImage3D:Le,scissor:Me,viewport:He,reset:$e}}function jy(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,u=new WeakMap,h,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,b){return f?new OffscreenCanvas(P,b):pr("canvas")}function x(P,b,V){let Y=1,ne=je(P);if((ne.width>V||ne.height>V)&&(Y=V/Math.max(ne.width,ne.height)),Y<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let K=Math.floor(Y*ne.width),Le=Math.floor(Y*ne.height);h===void 0&&(h=m(K,Le));let pe=b?m(K,Le):h;return pe.width=K,pe.height=Le,pe.getContext("2d").drawImage(P,0,0,K,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+K+"x"+Le+")."),pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function g(P){return P.generateMipmaps}function p(P){i.generateMipmap(P)}function C(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(P,b,V,Y,ne=!1){if(P!==null){if(i[P]!==void 0)return i[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let K=b;if(b===i.RED&&(V===i.FLOAT&&(K=i.R32F),V===i.HALF_FLOAT&&(K=i.R16F),V===i.UNSIGNED_BYTE&&(K=i.R8)),b===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.R8UI),V===i.UNSIGNED_SHORT&&(K=i.R16UI),V===i.UNSIGNED_INT&&(K=i.R32UI),V===i.BYTE&&(K=i.R8I),V===i.SHORT&&(K=i.R16I),V===i.INT&&(K=i.R32I)),b===i.RG&&(V===i.FLOAT&&(K=i.RG32F),V===i.HALF_FLOAT&&(K=i.RG16F),V===i.UNSIGNED_BYTE&&(K=i.RG8)),b===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RG8UI),V===i.UNSIGNED_SHORT&&(K=i.RG16UI),V===i.UNSIGNED_INT&&(K=i.RG32UI),V===i.BYTE&&(K=i.RG8I),V===i.SHORT&&(K=i.RG16I),V===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGB8UI),V===i.UNSIGNED_SHORT&&(K=i.RGB16UI),V===i.UNSIGNED_INT&&(K=i.RGB32UI),V===i.BYTE&&(K=i.RGB8I),V===i.SHORT&&(K=i.RGB16I),V===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),V===i.UNSIGNED_INT&&(K=i.RGBA32UI),V===i.BYTE&&(K=i.RGBA8I),V===i.SHORT&&(K=i.RGBA16I),V===i.INT&&(K=i.RGBA32I)),b===i.RGB&&(V===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),b===i.RGBA){let Le=ne?ca:ct.getTransfer(Y);V===i.FLOAT&&(K=i.RGBA32F),V===i.HALF_FLOAT&&(K=i.RGBA16F),V===i.UNSIGNED_BYTE&&(K=Le===yt?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(P,b){let V;return P?b===null||b===hs||b===Nr?V=i.DEPTH24_STENCIL8:b===jn?V=i.DEPTH32F_STENCIL8:b===Lr&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===hs||b===Nr?V=i.DEPTH_COMPONENT24:b===jn?V=i.DEPTH_COMPONENT32F:b===Lr&&(V=i.DEPTH_COMPONENT16),V}function T(P,b){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==tn&&P.minFilter!==pn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function A(P){let b=P.target;b.removeEventListener("dispose",A),U(b),b.isVideoTexture&&u.delete(b)}function L(P){let b=P.target;b.removeEventListener("dispose",L),M(b)}function U(P){let b=n.get(P);if(b.__webglInit===void 0)return;let V=P.source,Y=d.get(V);if(Y){let ne=Y[b.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&S(P),Object.keys(Y).length===0&&d.delete(V)}n.remove(P)}function S(P){let b=n.get(P);i.deleteTexture(b.__webglTexture);let V=P.source,Y=d.get(V);delete Y[b.__cacheKey],a.memory.textures--}function M(P){let b=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let ne=0;ne<b.__webglFramebuffer[Y].length;ne++)i.deleteFramebuffer(b.__webglFramebuffer[Y][ne]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let V=P.textures;for(let Y=0,ne=V.length;Y<ne;Y++){let K=n.get(V[Y]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(P)}let w=0;function E(){w=0}function I(){let P=w;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),w+=1,P}function B(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function N(P,b){let V=n.get(P);if(P.isVideoTexture&&ge(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&V.__version!==P.version){let Y=P.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(V,P,b);return}}else P.isExternalTexture&&(V.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+b)}function F(P,b){let V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){J(V,P,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+b)}function q(P,b){let V=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&V.__version!==P.version){J(V,P,b);return}t.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+b)}function j(P,b){let V=n.get(P);if(P.version>0&&V.__version!==P.version){se(V,P,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+b)}let ue={[os]:i.REPEAT,[oi]:i.CLAMP_TO_EDGE,[dr]:i.MIRRORED_REPEAT},he={[tn]:i.NEAREST,[wl]:i.NEAREST_MIPMAP_NEAREST,[ks]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[Pr]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},fe={[Wf]:i.NEVER,[Jf]:i.ALWAYS,[Xf]:i.LESS,[qh]:i.LEQUAL,[qf]:i.EQUAL,[Zf]:i.GEQUAL,[Yf]:i.GREATER,[Kf]:i.NOTEQUAL};function De(P,b){if(b.type===jn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===pn||b.magFilter===Pr||b.magFilter===ks||b.magFilter===ti||b.minFilter===pn||b.minFilter===Pr||b.minFilter===ks||b.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ue[b.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ue[b.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ue[b.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,he[b.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,he[b.minFilter]),b.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,fe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===tn||b.minFilter!==ks&&b.minFilter!==ti||b.type===jn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let V=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Xe(P,b){let V=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",A));let Y=b.source,ne=d.get(Y);ne===void 0&&(ne={},d.set(Y,ne));let K=B(b);if(K!==P.__cacheKey){ne[K]===void 0&&(ne[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ne[K].usedTimes++;let Le=ne[P.__cacheKey];Le!==void 0&&(ne[P.__cacheKey].usedTimes--,Le.usedTimes===0&&S(b)),P.__cacheKey=K,P.__webglTexture=ne[K].texture}return V}function gt(P,b,V){return Math.floor(Math.floor(P/V)/b)}function st(P,b,V,Y){let K=P.updateRanges;if(K.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,V,Y,b.data);else{K.sort((oe,Me)=>oe.start-Me.start);let Le=0;for(let oe=1;oe<K.length;oe++){let Me=K[Le],He=K[oe],Ne=Me.start+Me.count,ve=gt(He.start,b.width,4),$e=gt(Me.start,b.width,4);He.start<=Ne+1&&ve===$e&&gt(He.start+He.count-1,b.width,4)===ve?Me.count=Math.max(Me.count,He.start+He.count-Me.start):(++Le,K[Le]=He)}K.length=Le+1;let pe=i.getParameter(i.UNPACK_ROW_LENGTH),Ce=i.getParameter(i.UNPACK_SKIP_PIXELS),Ie=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let oe=0,Me=K.length;oe<Me;oe++){let He=K[oe],Ne=Math.floor(He.start/4),ve=Math.ceil(He.count/4),$e=Ne%b.width,k=Math.floor(Ne/b.width),de=ve,_e=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$e),i.pixelStorei(i.UNPACK_SKIP_ROWS,k),t.texSubImage2D(i.TEXTURE_2D,0,$e,k,de,_e,V,Y,b.data)}P.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function J(P,b,V){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);let ne=Xe(P,b),K=b.source;t.bindTexture(Y,P.__webglTexture,i.TEXTURE0+V);let Le=n.get(K);if(K.version!==Le.__version||ne===!0){t.activeTexture(i.TEXTURE0+V);let pe=ct.getPrimaries(ct.workingColorSpace),Ce=b.colorSpace===Hi?null:ct.getPrimaries(b.colorSpace),Ie=b.colorSpace===Hi||pe===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let oe=x(b.image,!1,s.maxTextureSize);oe=qe(b,oe);let Me=r.convert(b.format,b.colorSpace),He=r.convert(b.type),Ne=v(b.internalFormat,Me,He,b.colorSpace,b.isVideoTexture);De(Y,b);let ve,$e=b.mipmaps,k=b.isVideoTexture!==!0,de=Le.__version===void 0||ne===!0,_e=K.dataReady,Ee=T(b,oe);if(b.isDepthTexture)Ne=_(b.format===Ur,b.type),de&&(k?t.texStorage2D(i.TEXTURE_2D,1,Ne,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ne,oe.width,oe.height,0,Me,He,null));else if(b.isDataTexture)if($e.length>0){k&&de&&t.texStorage2D(i.TEXTURE_2D,Ee,Ne,$e[0].width,$e[0].height);for(let le=0,te=$e.length;le<te;le++)ve=$e[le],k?_e&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,ve.width,ve.height,Me,He,ve.data):t.texImage2D(i.TEXTURE_2D,le,Ne,ve.width,ve.height,0,Me,He,ve.data);b.generateMipmaps=!1}else k?(de&&t.texStorage2D(i.TEXTURE_2D,Ee,Ne,oe.width,oe.height),_e&&st(b,oe,Me,He)):t.texImage2D(i.TEXTURE_2D,0,Ne,oe.width,oe.height,0,Me,He,oe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){k&&de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ne,$e[0].width,$e[0].height,oe.depth);for(let le=0,te=$e.length;le<te;le++)if(ve=$e[le],b.format!==Un)if(Me!==null)if(k){if(_e)if(b.layerUpdates.size>0){let Pe=tu(ve.width,ve.height,b.format,b.type);for(let Ye of b.layerUpdates){let Tt=ve.data.subarray(Ye*Pe/ve.data.BYTES_PER_ELEMENT,(Ye+1)*Pe/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,Ye,ve.width,ve.height,1,Me,Tt)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,ve.width,ve.height,oe.depth,Me,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,Ne,ve.width,ve.height,oe.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?_e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,ve.width,ve.height,oe.depth,Me,He,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,Ne,ve.width,ve.height,oe.depth,0,Me,He,ve.data)}else{k&&de&&t.texStorage2D(i.TEXTURE_2D,Ee,Ne,$e[0].width,$e[0].height);for(let le=0,te=$e.length;le<te;le++)ve=$e[le],b.format!==Un?Me!==null?k?_e&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,ve.width,ve.height,Me,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,le,Ne,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?_e&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,ve.width,ve.height,Me,He,ve.data):t.texImage2D(i.TEXTURE_2D,le,Ne,ve.width,ve.height,0,Me,He,ve.data)}else if(b.isDataArrayTexture)if(k){if(de&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ne,oe.width,oe.height,oe.depth),_e)if(b.layerUpdates.size>0){let le=tu(oe.width,oe.height,b.format,b.type);for(let te of b.layerUpdates){let Pe=oe.data.subarray(te*le/oe.data.BYTES_PER_ELEMENT,(te+1)*le/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,oe.width,oe.height,1,Me,He,Pe)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Me,He,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,oe.width,oe.height,oe.depth,0,Me,He,oe.data);else if(b.isData3DTexture)k?(de&&t.texStorage3D(i.TEXTURE_3D,Ee,Ne,oe.width,oe.height,oe.depth),_e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Me,He,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,oe.width,oe.height,oe.depth,0,Me,He,oe.data);else if(b.isFramebufferTexture){if(de)if(k)t.texStorage2D(i.TEXTURE_2D,Ee,Ne,oe.width,oe.height);else{let le=oe.width,te=oe.height;for(let Pe=0;Pe<Ee;Pe++)t.texImage2D(i.TEXTURE_2D,Pe,Ne,le,te,0,Me,He,null),le>>=1,te>>=1}}else if($e.length>0){if(k&&de){let le=je($e[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Ne,le.width,le.height)}for(let le=0,te=$e.length;le<te;le++)ve=$e[le],k?_e&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,Me,He,ve):t.texImage2D(i.TEXTURE_2D,le,Ne,Me,He,ve);b.generateMipmaps=!1}else if(k){if(de){let le=je(oe);t.texStorage2D(i.TEXTURE_2D,Ee,Ne,le.width,le.height)}_e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me,He,oe)}else t.texImage2D(i.TEXTURE_2D,0,Ne,Me,He,oe);g(b)&&p(Y),Le.__version=K.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function se(P,b,V){if(b.image.length!==6)return;let Y=Xe(P,b),ne=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+V);let K=n.get(ne);if(ne.version!==K.__version||Y===!0){t.activeTexture(i.TEXTURE0+V);let Le=ct.getPrimaries(ct.workingColorSpace),pe=b.colorSpace===Hi?null:ct.getPrimaries(b.colorSpace),Ce=b.colorSpace===Hi||Le===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let Ie=b.isCompressedTexture||b.image[0].isCompressedTexture,oe=b.image[0]&&b.image[0].isDataTexture,Me=[];for(let te=0;te<6;te++)!Ie&&!oe?Me[te]=x(b.image[te],!0,s.maxCubemapSize):Me[te]=oe?b.image[te].image:b.image[te],Me[te]=qe(b,Me[te]);let He=Me[0],Ne=r.convert(b.format,b.colorSpace),ve=r.convert(b.type),$e=v(b.internalFormat,Ne,ve,b.colorSpace),k=b.isVideoTexture!==!0,de=K.__version===void 0||Y===!0,_e=ne.dataReady,Ee=T(b,He);De(i.TEXTURE_CUBE_MAP,b);let le;if(Ie){k&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,$e,He.width,He.height);for(let te=0;te<6;te++){le=Me[te].mipmaps;for(let Pe=0;Pe<le.length;Pe++){let Ye=le[Pe];b.format!==Un?Ne!==null?k?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,Ye.width,Ye.height,Ne,Ye.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,$e,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,0,0,Ye.width,Ye.height,Ne,ve,Ye.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe,$e,Ye.width,Ye.height,0,Ne,ve,Ye.data)}}}else{if(le=b.mipmaps,k&&de){le.length>0&&Ee++;let te=je(Me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,$e,te.width,te.height)}for(let te=0;te<6;te++)if(oe){k?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Me[te].width,Me[te].height,Ne,ve,Me[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,$e,Me[te].width,Me[te].height,0,Ne,ve,Me[te].data);for(let Pe=0;Pe<le.length;Pe++){let Tt=le[Pe].image[te].image;k?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,Tt.width,Tt.height,Ne,ve,Tt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,$e,Tt.width,Tt.height,0,Ne,ve,Tt.data)}}else{k?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ne,ve,Me[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,$e,Ne,ve,Me[te]);for(let Pe=0;Pe<le.length;Pe++){let Ye=le[Pe];k?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,0,0,Ne,ve,Ye.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Pe+1,$e,Ne,ve,Ye.image[te])}}}g(b)&&p(i.TEXTURE_CUBE_MAP),K.__version=ne.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function we(P,b,V,Y,ne,K){let Le=r.convert(V.format,V.colorSpace),pe=r.convert(V.type),Ce=v(V.internalFormat,Le,pe,V.colorSpace),Ie=n.get(b),oe=n.get(V);if(oe.__renderTarget=b,!Ie.__hasExternalTextures){let Me=Math.max(1,b.width>>K),He=Math.max(1,b.height>>K);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,K,Ce,Me,He,b.depth,0,Le,pe,null):t.texImage2D(ne,K,Ce,Me,He,0,Le,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),ae(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,ne,oe.__webglTexture,0,me(b)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,ne,oe.__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(P,b,V){if(i.bindRenderbuffer(i.RENDERBUFFER,P),b.depthBuffer){let Y=b.depthTexture,ne=Y&&Y.isDepthTexture?Y.type:null,K=_(b.stencilBuffer,ne),Le=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=me(b);ae(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,K,b.width,b.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,P)}else{let Y=b.textures;for(let ne=0;ne<Y.length;ne++){let K=Y[ne],Le=r.convert(K.format,K.colorSpace),pe=r.convert(K.type),Ce=v(K.internalFormat,Le,pe,K.colorSpace),Ie=me(b);V&&ae(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Ce,b.width,b.height):ae(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,Ce,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Re(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Y=n.get(b.depthTexture);Y.__renderTarget=b,(!Y.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),N(b.depthTexture,0);let ne=Y.__webglTexture,K=me(b);if(b.depthTexture.format===fr)ae(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(b.depthTexture.format===Ur)ae(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function ot(P){let b=n.get(P),V=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let Y=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){let ne=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",ne)};Y.addEventListener("dispose",ne),b.__depthDisposeCallback=ne}b.__boundDepthTexture=Y}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");let Y=P.texture.mipmaps;Y&&Y.length>0?Re(b.__webglFramebuffer[0],P):Re(b.__webglFramebuffer,P)}else if(V){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),Ue(b.__webglDepthbuffer[Y],P,!1);else{let ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,K)}}else{let Y=P.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),Ue(b.__webglDepthbuffer,P,!1);else{let ne=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,K)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(P,b,V){let Y=n.get(P);b!==void 0&&we(Y.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&ot(P)}function O(P){let b=P.texture,V=n.get(P),Y=n.get(b);P.addEventListener("dispose",L);let ne=P.textures,K=P.isWebGLCubeRenderTarget===!0,Le=ne.length>1;if(Le||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,a.memory.textures++),K){V.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer[pe]=[];for(let Ce=0;Ce<b.mipmaps.length;Ce++)V.__webglFramebuffer[pe][Ce]=i.createFramebuffer()}else V.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){V.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)V.__webglFramebuffer[pe]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Le)for(let pe=0,Ce=ne.length;pe<Ce;pe++){let Ie=n.get(ne[pe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&ae(P)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pe=0;pe<ne.length;pe++){let Ce=ne[pe];V.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[pe]);let Ie=r.convert(Ce.format,Ce.colorSpace),oe=r.convert(Ce.type),Me=v(Ce.internalFormat,Ie,oe,Ce.colorSpace,P.isXRRenderTarget===!0),He=me(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,He,Me,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,V.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(V.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),De(i.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ce=0;Ce<b.mipmaps.length;Ce++)we(V.__webglFramebuffer[pe][Ce],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ce);else we(V.__webglFramebuffer[pe],P,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(b)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let pe=0,Ce=ne.length;pe<Ce;pe++){let Ie=ne[pe],oe=n.get(Ie),Me=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Me=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Me,oe.__webglTexture),De(Me,Ie),we(V.__webglFramebuffer,P,Ie,i.COLOR_ATTACHMENT0+pe,Me,0),g(Ie)&&p(Me)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,Y.__webglTexture),De(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let Ce=0;Ce<b.mipmaps.length;Ce++)we(V.__webglFramebuffer[Ce],P,b,i.COLOR_ATTACHMENT0,pe,Ce);else we(V.__webglFramebuffer,P,b,i.COLOR_ATTACHMENT0,pe,0);g(b)&&p(pe),t.unbindTexture()}P.depthBuffer&&ot(P)}function ie(P){let b=P.textures;for(let V=0,Y=b.length;V<Y;V++){let ne=b[V];if(g(ne)){let K=C(P),Le=n.get(ne).__webglTexture;t.bindTexture(K,Le),p(K),t.unbindTexture()}}}let ee=[],Q=[];function $(P){if(P.samples>0){if(ae(P)===!1){let b=P.textures,V=P.width,Y=P.height,ne=i.COLOR_BUFFER_BIT,K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(P),pe=b.length>1;if(pe)for(let Ie=0;Ie<b.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);let Ce=P.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Ie=0;Ie<b.length;Ie++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);let oe=n.get(b[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,V,Y,0,0,V,Y,ne,i.NEAREST),l===!0&&(ee.length=0,Q.length=0,ee.push(i.COLOR_ATTACHMENT0+Ie),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ee.push(K),Q.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Q)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Ie=0;Ie<b.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Ie]);let oe=n.get(b[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let b=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function me(P){return Math.min(s.maxSamples,P.samples)}function ae(P){let b=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ge(P){let b=a.render.frame;u.get(P)!==b&&(u.set(P,b),P.update())}function qe(P,b){let V=P.colorSpace,Y=P.format,ne=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||V!==nn&&V!==Hi&&(ct.getTransfer(V)===yt?(Y!==Un||ne!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),b}function je(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=E,this.setTexture2D=N,this.setTexture2DArray=F,this.setTexture3D=q,this.setTextureCube=j,this.rebindTextures=Et,this.setupRenderTarget=O,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ae}function Wy(i,e){function t(n,s=Hi){let r,a=ct.getTransfer(s);if(n===ni)return i.UNSIGNED_BYTE;if(n===Tl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hh)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fh)return i.BYTE;if(n===kh)return i.SHORT;if(n===Lr)return i.UNSIGNED_SHORT;if(n===El)return i.INT;if(n===hs)return i.UNSIGNED_INT;if(n===jn)return i.FLOAT;if(n===Dr)return i.HALF_FLOAT;if(n===Gh)return i.ALPHA;if(n===Vh)return i.RGB;if(n===Un)return i.RGBA;if(n===fr)return i.DEPTH_COMPONENT;if(n===Ur)return i.DEPTH_STENCIL;if(n===Rl)return i.RED;if(n===Cl)return i.RED_INTEGER;if(n===jh)return i.RG;if(n===Il)return i.RG_INTEGER;if(n===Pl)return i.RGBA_INTEGER;if(n===Za||n===Ja||n===$a||n===Qa)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Za)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Za)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ja)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ll||n===Dl||n===Nl||n===Ul)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ll)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bl||n===Ol||n===Fl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Bl||n===Ol)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Fl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===kl||n===zl||n===Hl||n===Gl||n===Vl||n===jl||n===Wl||n===Xl||n===ql||n===Yl||n===Kl||n===Zl||n===Jl||n===$l)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===kl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===zl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Vl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ql)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Yl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jl)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$l)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ql||n===ec||n===tc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ql)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ec)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===nc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ic)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qy=`
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

}`,pu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ea(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qn({vertexShader:Xy,fragmentShader:qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new tt(new Ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mu=class extends ci{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null,x=typeof XRWebGLBinding<"u",g=new pu,p={},C=t.getContextAttributes(),v=null,_=null,T=[],A=[],L=new re,U=null,S=new Ht;S.viewport=new ft;let M=new Ht;M.viewport=new ft;let w=[S,M],E=new dl,I=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let se=T[J];return se===void 0&&(se=new xr,T[J]=se),se.getTargetRaySpace()},this.getControllerGrip=function(J){let se=T[J];return se===void 0&&(se=new xr,T[J]=se),se.getGripSpace()},this.getHand=function(J){let se=T[J];return se===void 0&&(se=new xr,T[J]=se),se.getHandSpace()};function N(J){let se=A.indexOf(J.inputSource);if(se===-1)return;let we=T[se];we!==void 0&&(we.update(J.inputSource,J.frame,c||a),we.dispatchEvent({type:J.type,data:J.inputSource}))}function F(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",q);for(let J=0;J<T.length;J++){let se=A[J];se!==null&&(A[J]=null,T[J].disconnect(se))}I=null,B=null,g.reset();for(let J in p)delete p[J];e.setRenderTarget(v),f=null,d=null,h=null,s=null,_=null,st.stop(),n.isPresenting=!1,e.setPixelRatio(U),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",F),s.addEventListener("inputsourceschange",q),C.xrCompatible!==!0&&await t.makeXRCompatible(),U=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ue=null,Re=null;C.depth&&(Re=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=C.stencil?Ur:fr,Ue=C.stencil?Nr:hs);let ot={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(ot),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new hi(d.textureWidth,d.textureHeight,{format:Un,type:ni,depthTexture:new wa(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let we={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new hi(f.framebufferWidth,f.framebufferHeight,{format:Un,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),st.setContext(s),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function q(J){for(let se=0;se<J.removed.length;se++){let we=J.removed[se],Ue=A.indexOf(we);Ue>=0&&(A[Ue]=null,T[Ue].disconnect(we))}for(let se=0;se<J.added.length;se++){let we=J.added[se],Ue=A.indexOf(we);if(Ue===-1){for(let ot=0;ot<T.length;ot++)if(ot>=A.length){A.push(we),Ue=ot;break}else if(A[ot]===null){A[ot]=we,Ue=ot;break}if(Ue===-1)break}let Re=T[Ue];Re&&Re.connect(we)}}let j=new D,ue=new D;function he(J,se,we){j.setFromMatrixPosition(se.matrixWorld),ue.setFromMatrixPosition(we.matrixWorld);let Ue=j.distanceTo(ue),Re=se.projectionMatrix.elements,ot=we.projectionMatrix.elements,Et=Re[14]/(Re[10]-1),O=Re[14]/(Re[10]+1),ie=(Re[9]+1)/Re[5],ee=(Re[9]-1)/Re[5],Q=(Re[8]-1)/Re[0],$=(ot[8]+1)/ot[0],me=Et*Q,ae=Et*$,ge=Ue/(-Q+$),qe=ge*-Q;if(se.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(qe),J.translateZ(ge),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Re[10]===-1)J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let je=Et+ge,P=O+ge,b=me-qe,V=ae+(Ue-qe),Y=ie*O/P*je,ne=ee*O/P*je;J.projectionMatrix.makePerspective(b,V,Y,ne,je,P),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function fe(J,se){se===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(se.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let se=J.near,we=J.far;g.texture!==null&&(g.depthNear>0&&(se=g.depthNear),g.depthFar>0&&(we=g.depthFar)),E.near=M.near=S.near=se,E.far=M.far=S.far=we,(I!==E.near||B!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),I=E.near,B=E.far),E.layers.mask=J.layers.mask|6,S.layers.mask=E.layers.mask&3,M.layers.mask=E.layers.mask&5;let Ue=J.parent,Re=E.cameras;fe(E,Ue);for(let ot=0;ot<Re.length;ot++)fe(Re[ot],Ue);Re.length===2?he(E,S,M):E.projectionMatrix.copy(S.projectionMatrix),De(J,E,Ue)};function De(J,se,we){we===null?J.matrix.copy(se.matrixWorld):(J.matrix.copy(we.matrixWorld),J.matrix.invert(),J.matrix.multiply(se.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(se.projectionMatrix),J.projectionMatrixInverse.copy(se.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Cs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(E)},this.getCameraTexture=function(J){return p[J]};let Xe=null;function gt(J,se){if(u=se.getViewerPose(c||a),m=se,u!==null){let we=u.views;f!==null&&(e.setRenderTargetFramebuffer(_,f.framebuffer),e.setRenderTarget(_));let Ue=!1;we.length!==E.cameras.length&&(E.cameras.length=0,Ue=!0);for(let O=0;O<we.length;O++){let ie=we[O],ee=null;if(f!==null)ee=f.getViewport(ie);else{let $=h.getViewSubImage(d,ie);ee=$.viewport,O===0&&(e.setRenderTargetTextures(_,$.colorTexture,$.depthStencilTexture),e.setRenderTarget(_))}let Q=w[O];Q===void 0&&(Q=new Ht,Q.layers.enable(O),Q.viewport=new ft,w[O]=Q),Q.matrix.fromArray(ie.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(ie.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(ee.x,ee.y,ee.width,ee.height),O===0&&(E.matrix.copy(Q.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Ue===!0&&E.cameras.push(Q)}let Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let O=h.getDepthInformation(we[0]);O&&O.isValid&&O.texture&&g.init(O,s.renderState)}if(Re&&Re.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let O=0;O<we.length;O++){let ie=we[O].camera;if(ie){let ee=p[ie];ee||(ee=new Ea,p[ie]=ee);let Q=h.getCameraImage(ie);ee.sourceTexture=Q}}}}for(let we=0;we<T.length;we++){let Ue=A[we],Re=T[we];Ue!==null&&Re!==void 0&&Re.update(Ue,se,c||a)}Xe&&Xe(J,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),m=null}let st=new Pp;st.setAnimationLoop(gt),this.setAnimationLoop=function(J){Xe=J},this.dispose=function(){}}},Vs=new $n,Yy=new Ke;function Ky(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Jh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,C,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),h(g,p)):p.isMeshPhongMaterial?(r(g,p),u(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?l(g,p,C,v):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===xn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===xn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let C=e.get(p),v=C.envMap,_=C.envMapRotation;v&&(g.envMap.value=v,Vs.copy(_),Vs.x*=-1,Vs.y*=-1,Vs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Vs.y*=-1,Vs.z*=-1),g.envMapRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(Vs)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,C,v){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*C,g.scale.value=v*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function u(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,C){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=C.texture,g.transmissionSamplerSize.value.set(C.width,C.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){let C=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(C.matrixWorld),g.nearDistance.value=C.shadow.camera.near,g.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zy(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,v){let _=v.program;n.uniformBlockBinding(C,_)}function c(C,v){let _=s[C.id];_===void 0&&(m(C),_=u(C),s[C.id]=_,C.addEventListener("dispose",g));let T=v.program;n.updateUBOMapping(C,T);let A=e.render.frame;r[C.id]!==A&&(d(C),r[C.id]=A)}function u(C){let v=h();C.__bindingPointIndex=v;let _=i.createBuffer(),T=C.__size,A=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,_),_}function h(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){let v=s[C.id],_=C.uniforms,T=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,L=_.length;A<L;A++){let U=Array.isArray(_[A])?_[A]:[_[A]];for(let S=0,M=U.length;S<M;S++){let w=U[S];if(f(w,A,S,T)===!0){let E=w.__offset,I=Array.isArray(w.value)?w.value:[w.value],B=0;for(let N=0;N<I.length;N++){let F=I[N],q=x(F);typeof F=="number"||typeof F=="boolean"?(w.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,E+B,w.__data)):F.isMatrix3?(w.__data[0]=F.elements[0],w.__data[1]=F.elements[1],w.__data[2]=F.elements[2],w.__data[3]=0,w.__data[4]=F.elements[3],w.__data[5]=F.elements[4],w.__data[6]=F.elements[5],w.__data[7]=0,w.__data[8]=F.elements[6],w.__data[9]=F.elements[7],w.__data[10]=F.elements[8],w.__data[11]=0):(F.toArray(w.__data,B),B+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,E,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(C,v,_,T){let A=C.value,L=v+"_"+_;if(T[L]===void 0)return typeof A=="number"||typeof A=="boolean"?T[L]=A:T[L]=A.clone(),!0;{let U=T[L];if(typeof A=="number"||typeof A=="boolean"){if(U!==A)return T[L]=A,!0}else if(U.equals(A)===!1)return U.copy(A),!0}return!1}function m(C){let v=C.uniforms,_=0,T=16;for(let L=0,U=v.length;L<U;L++){let S=Array.isArray(v[L])?v[L]:[v[L]];for(let M=0,w=S.length;M<w;M++){let E=S[M],I=Array.isArray(E.value)?E.value:[E.value];for(let B=0,N=I.length;B<N;B++){let F=I[B],q=x(F),j=_%T,ue=j%q.boundary,he=j+ue;_+=ue,he!==0&&T-he<q.storage&&(_+=T-he),E.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=_,_+=q.storage}}}let A=_%T;return A>0&&(_+=T-A),C.__size=_,C.__cache={},this}function x(C){let v={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(v.boundary=4,v.storage=4):C.isVector2?(v.boundary=8,v.storage=8):C.isVector3||C.isColor?(v.boundary=16,v.storage=12):C.isVector4?(v.boundary=16,v.storage=16):C.isMatrix3?(v.boundary=48,v.storage=48):C.isMatrix4?(v.boundary=64,v.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),v}function g(C){let v=C.target;v.removeEventListener("dispose",g);let _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let C in s)i.deleteBuffer(s[C]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var hc=class{constructor(e={}){let{canvas:t=$f(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let m=new Uint32Array(4),x=new Int32Array(4),g=null,p=null,C=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let _=this,T=!1;this._outputColorSpace=Ft;let A=0,L=0,U=null,S=-1,M=null,w=new ft,E=new ft,I=null,B=new Oe(0),N=0,F=t.width,q=t.height,j=1,ue=null,he=null,fe=new ft(0,0,F,q),De=new ft(0,0,F,q),Xe=!1,gt=new Mr,st=!1,J=!1,se=new Ke,we=new D,Ue=new ft,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function Et(){return U===null?j:1}let O=n;function ie(R,H){return t.getContext(R,H)}try{let R={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"180"}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",le,!1),O===null){let H="webgl2";if(O=ie(H,R),O===null)throw ie(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ee,Q,$,me,ae,ge,qe,je,P,b,V,Y,ne,K,Le,pe,Ce,Ie,oe,Me,He,Ne,ve,$e;function k(){ee=new px(O),ee.init(),Ne=new Wy(O,ee),Q=new ox(O,ee,e,Ne),$=new Vy(O,ee),Q.reversedDepthBuffer&&d&&$.buffers.depth.setReversed(!0),me=new _x(O),ae=new Iy,ge=new jy(O,ee,$,ae,Q,Ne,me),qe=new cx(_),je=new fx(_),P=new Sg(O),ve=new rx(O,P),b=new mx(O,P,me,ve),V=new yx(O,b,P,me),oe=new xx(O,Q,ge),pe=new lx(ae),Y=new Cy(_,qe,je,ee,Q,ve,pe),ne=new Ky(_,ae),K=new Ly,Le=new Fy(ee),Ie=new sx(_,qe,je,$,V,f,l),Ce=new Hy(_,V,Q),$e=new Zy(O,me,Q,$),Me=new ax(O,ee,me),He=new gx(O,ee,me),me.programs=Y.programs,_.capabilities=Q,_.extensions=ee,_.properties=ae,_.renderLists=K,_.shadowMap=Ce,_.state=$,_.info=me}k();let de=new mu(_,O);this.xr=de,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let R=ee.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ee.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(R){R!==void 0&&(j=R,this.setSize(F,q,!1))},this.getSize=function(R){return R.set(F,q)},this.setSize=function(R,H,W=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=R,q=H,t.width=Math.floor(R*j),t.height=Math.floor(H*j),W===!0&&(t.style.width=R+"px",t.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(F*j,q*j).floor()},this.setDrawingBufferSize=function(R,H,W){F=R,q=H,j=W,t.width=Math.floor(R*W),t.height=Math.floor(H*W),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(fe)},this.setViewport=function(R,H,W,X){R.isVector4?fe.set(R.x,R.y,R.z,R.w):fe.set(R,H,W,X),$.viewport(w.copy(fe).multiplyScalar(j).round())},this.getScissor=function(R){return R.copy(De)},this.setScissor=function(R,H,W,X){R.isVector4?De.set(R.x,R.y,R.z,R.w):De.set(R,H,W,X),$.scissor(E.copy(De).multiplyScalar(j).round())},this.getScissorTest=function(){return Xe},this.setScissorTest=function(R){$.setScissorTest(Xe=R)},this.setOpaqueSort=function(R){ue=R},this.setTransparentSort=function(R){he=R},this.getClearColor=function(R){return R.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(R=!0,H=!0,W=!0){let X=0;if(R){let G=!1;if(U!==null){let ce=U.texture.format;G=ce===Pl||ce===Il||ce===Cl}if(G){let ce=U.texture.type,be=ce===ni||ce===hs||ce===Lr||ce===Nr||ce===Tl||ce===Al,Ae=Ie.getClearColor(),Se=Ie.getClearAlpha(),ze=Ae.r,Ge=Ae.g,Be=Ae.b;be?(m[0]=ze,m[1]=Ge,m[2]=Be,m[3]=Se,O.clearBufferuiv(O.COLOR,0,m)):(x[0]=ze,x[1]=Ge,x[2]=Be,x[3]=Se,O.clearBufferiv(O.COLOR,0,x))}else X|=O.COLOR_BUFFER_BIT}H&&(X|=O.DEPTH_BUFFER_BIT),W&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Ie.dispose(),K.dispose(),Le.dispose(),ae.dispose(),qe.dispose(),je.dispose(),V.dispose(),ve.dispose(),$e.dispose(),Y.dispose(),de.dispose(),de.removeEventListener("sessionstart",ai),de.removeEventListener("sessionend",_d),_s.stop()};function _e(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let R=me.autoReset,H=Ce.enabled,W=Ce.autoUpdate,X=Ce.needsUpdate,G=Ce.type;k(),me.autoReset=R,Ce.enabled=H,Ce.autoUpdate=W,Ce.needsUpdate=X,Ce.type=G}function le(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function te(R){let H=R.target;H.removeEventListener("dispose",te),Pe(H)}function Pe(R){Ye(R),ae.remove(R)}function Ye(R){let H=ae.get(R).programs;H!==void 0&&(H.forEach(function(W){Y.releaseProgram(W)}),R.isShaderMaterial&&Y.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,W,X,G,ce){H===null&&(H=Re);let be=G.isMesh&&G.matrixWorld.determinant()<0,Ae=V0(R,H,W,X,G);$.setMaterial(X,be);let Se=W.index,ze=1;if(X.wireframe===!0){if(Se=b.getWireframeAttribute(W),Se===void 0)return;ze=2}let Ge=W.drawRange,Be=W.attributes.position,lt=Ge.start*ze,vt=(Ge.start+Ge.count)*ze;ce!==null&&(lt=Math.max(lt,ce.start*ze),vt=Math.min(vt,(ce.start+ce.count)*ze)),Se!==null?(lt=Math.max(lt,0),vt=Math.min(vt,Se.count)):Be!=null&&(lt=Math.max(lt,0),vt=Math.min(vt,Be.count));let Bt=vt-lt;if(Bt<0||Bt===1/0)return;ve.setup(G,X,Ae,W,Se);let At,St=Me;if(Se!==null&&(At=P.get(Se),St=He,St.setIndex(At)),G.isMesh)X.wireframe===!0?($.setLineWidth(X.wireframeLinewidth*Et()),St.setMode(O.LINES)):St.setMode(O.TRIANGLES);else if(G.isLine){let ke=X.linewidth;ke===void 0&&(ke=1),$.setLineWidth(ke*Et()),G.isLineSegments?St.setMode(O.LINES):G.isLineLoop?St.setMode(O.LINE_LOOP):St.setMode(O.LINE_STRIP)}else G.isPoints?St.setMode(O.POINTS):G.isSprite&&St.setMode(O.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)mr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))St.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let ke=G._multiDrawStarts,Pt=G._multiDrawCounts,dt=G._multiDrawCount,Cn=Se?P.get(Se).bytesPerElement:1,Zs=ae.get(X).currentProgram.getUniforms();for(let In=0;In<dt;In++)Zs.setValue(O,"_gl_DrawID",In),St.render(ke[In]/Cn,Pt[In])}else if(G.isInstancedMesh)St.renderInstances(lt,Bt,G.count);else if(W.isInstancedBufferGeometry){let ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Pt=Math.min(W.instanceCount,ke);St.renderInstances(lt,Bt,Pt)}else St.render(lt,Bt)};function Tt(R,H,W){R.transparent===!0&&R.side===Zt&&R.forceSinglePass===!1?(R.side=xn,R.needsUpdate=!0,po(R,H,W),R.side=Dn,R.needsUpdate=!0,po(R,H,W),R.side=Zt):po(R,H,W)}this.compile=function(R,H,W=null){W===null&&(W=R),p=Le.get(W),p.init(H),v.push(p),W.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),R!==W&&R.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();let X=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let ce=G.material;if(ce)if(Array.isArray(ce))for(let be=0;be<ce.length;be++){let Ae=ce[be];Tt(Ae,W,G),X.add(Ae)}else Tt(ce,W,G),X.add(ce)}),p=v.pop(),X},this.compileAsync=function(R,H,W=null){let X=this.compile(R,H,W);return new Promise(G=>{function ce(){if(X.forEach(function(be){ae.get(be).currentProgram.isReady()&&X.delete(be)}),X.size===0){G(R);return}setTimeout(ce,10)}ee.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let _t=null;function Ti(R){_t&&_t(R)}function ai(){_s.stop()}function _d(){_s.start()}let _s=new Pp;_s.setAnimationLoop(Ti),typeof self<"u"&&_s.setContext(self),this.setAnimationLoop=function(R){_t=R,de.setAnimationLoop(R),R===null?_s.stop():_s.start()},de.addEventListener("sessionstart",ai),de.addEventListener("sessionend",_d),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(H),H=de.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,H,U),p=Le.get(R,v.length),p.init(H),v.push(p),se.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),gt.setFromProjectionMatrix(se,Jn,H.reversedDepth),J=this.localClippingEnabled,st=pe.init(this.clippingPlanes,J),g=K.get(R,C.length),g.init(),C.push(g),de.enabled===!0&&de.isPresenting===!0){let ce=_.xr.getDepthSensingMesh();ce!==null&&Fc(ce,H,-1/0,_.sortObjects)}Fc(R,H,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(ue,he),ot=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ot&&Ie.addToRenderList(g,R),this.info.render.frame++,st===!0&&pe.beginShadows();let W=p.state.shadowsArray;Ce.render(W,R,H),st===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();let X=g.opaque,G=g.transmissive;if(p.setupLights(),H.isArrayCamera){let ce=H.cameras;if(G.length>0)for(let be=0,Ae=ce.length;be<Ae;be++){let Se=ce[be];yd(X,G,R,Se)}ot&&Ie.render(R);for(let be=0,Ae=ce.length;be<Ae;be++){let Se=ce[be];xd(g,R,Se,Se.viewport)}}else G.length>0&&yd(X,G,R,H),ot&&Ie.render(R),xd(g,R,H);U!==null&&L===0&&(ge.updateMultisampleRenderTarget(U),ge.updateRenderTargetMipmap(U)),R.isScene===!0&&R.onAfterRender(_,R,H),ve.resetDefaultState(),S=-1,M=null,v.pop(),v.length>0?(p=v[v.length-1],st===!0&&pe.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,C.pop(),C.length>0?g=C[C.length-1]:g=null};function Fc(R,H,W,X){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)W=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||gt.intersectsSprite(R)){X&&Ue.setFromMatrixPosition(R.matrixWorld).applyMatrix4(se);let be=V.update(R),Ae=R.material;Ae.visible&&g.push(R,be,Ae,W,Ue.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||gt.intersectsObject(R))){let be=V.update(R),Ae=R.material;if(X&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ue.copy(R.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Ue.copy(be.boundingSphere.center)),Ue.applyMatrix4(R.matrixWorld).applyMatrix4(se)),Array.isArray(Ae)){let Se=be.groups;for(let ze=0,Ge=Se.length;ze<Ge;ze++){let Be=Se[ze],lt=Ae[Be.materialIndex];lt&&lt.visible&&g.push(R,be,lt,W,Ue.z,Be)}}else Ae.visible&&g.push(R,be,Ae,W,Ue.z,null)}}let ce=R.children;for(let be=0,Ae=ce.length;be<Ae;be++)Fc(ce[be],H,W,X)}function xd(R,H,W,X){let G=R.opaque,ce=R.transmissive,be=R.transparent;p.setupLightsView(W),st===!0&&pe.setGlobalState(_.clippingPlanes,W),X&&$.viewport(w.copy(X)),G.length>0&&fo(G,H,W),ce.length>0&&fo(ce,H,W),be.length>0&&fo(be,H,W),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function yd(R,H,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new hi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?Dr:ni,minFilter:ti,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));let ce=p.state.transmissionRenderTarget[X.id],be=X.viewport||w;ce.setSize(be.z*_.transmissionResolutionScale,be.w*_.transmissionResolutionScale);let Ae=_.getRenderTarget(),Se=_.getActiveCubeFace(),ze=_.getActiveMipmapLevel();_.setRenderTarget(ce),_.getClearColor(B),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear(),ot&&Ie.render(W);let Ge=_.toneMapping;_.toneMapping=zi;let Be=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),st===!0&&pe.setGlobalState(_.clippingPlanes,X),fo(R,W,X),ge.updateMultisampleRenderTarget(ce),ge.updateRenderTargetMipmap(ce),ee.has("WEBGL_multisampled_render_to_texture")===!1){let lt=!1;for(let vt=0,Bt=H.length;vt<Bt;vt++){let At=H[vt],St=At.object,ke=At.geometry,Pt=At.material,dt=At.group;if(Pt.side===Zt&&St.layers.test(X.layers)){let Cn=Pt.side;Pt.side=xn,Pt.needsUpdate=!0,vd(St,W,X,ke,Pt,dt),Pt.side=Cn,Pt.needsUpdate=!0,lt=!0}}lt===!0&&(ge.updateMultisampleRenderTarget(ce),ge.updateRenderTargetMipmap(ce))}_.setRenderTarget(Ae,Se,ze),_.setClearColor(B,N),Be!==void 0&&(X.viewport=Be),_.toneMapping=Ge}function fo(R,H,W){let X=H.isScene===!0?H.overrideMaterial:null;for(let G=0,ce=R.length;G<ce;G++){let be=R[G],Ae=be.object,Se=be.geometry,ze=be.group,Ge=be.material;Ge.allowOverride===!0&&X!==null&&(Ge=X),Ae.layers.test(W.layers)&&vd(Ae,H,W,Se,Ge,ze)}}function vd(R,H,W,X,G,ce){R.onBeforeRender(_,H,W,X,G,ce),R.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(_,H,W,X,R,ce),G.transparent===!0&&G.side===Zt&&G.forceSinglePass===!1?(G.side=xn,G.needsUpdate=!0,_.renderBufferDirect(W,H,X,G,R,ce),G.side=Dn,G.needsUpdate=!0,_.renderBufferDirect(W,H,X,G,R,ce),G.side=Zt):_.renderBufferDirect(W,H,X,G,R,ce),R.onAfterRender(_,H,W,X,G,ce)}function po(R,H,W){H.isScene!==!0&&(H=Re);let X=ae.get(R),G=p.state.lights,ce=p.state.shadowsArray,be=G.state.version,Ae=Y.getParameters(R,G.state,ce,H,W),Se=Y.getProgramCacheKey(Ae),ze=X.programs;X.environment=R.isMeshStandardMaterial?H.environment:null,X.fog=H.fog,X.envMap=(R.isMeshStandardMaterial?je:qe).get(R.envMap||X.environment),X.envMapRotation=X.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,ze===void 0&&(R.addEventListener("dispose",te),ze=new Map,X.programs=ze);let Ge=ze.get(Se);if(Ge!==void 0){if(X.currentProgram===Ge&&X.lightsStateVersion===be)return Md(R,Ae),Ge}else Ae.uniforms=Y.getUniforms(R),R.onBeforeCompile(Ae,_),Ge=Y.acquireProgram(Ae,Se),ze.set(Se,Ge),X.uniforms=Ae.uniforms;let Be=X.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Be.clippingPlanes=pe.uniform),Md(R,Ae),X.needsLights=W0(R),X.lightsStateVersion=be,X.needsLights&&(Be.ambientLightColor.value=G.state.ambient,Be.lightProbe.value=G.state.probe,Be.directionalLights.value=G.state.directional,Be.directionalLightShadows.value=G.state.directionalShadow,Be.spotLights.value=G.state.spot,Be.spotLightShadows.value=G.state.spotShadow,Be.rectAreaLights.value=G.state.rectArea,Be.ltc_1.value=G.state.rectAreaLTC1,Be.ltc_2.value=G.state.rectAreaLTC2,Be.pointLights.value=G.state.point,Be.pointLightShadows.value=G.state.pointShadow,Be.hemisphereLights.value=G.state.hemi,Be.directionalShadowMap.value=G.state.directionalShadowMap,Be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Be.spotShadowMap.value=G.state.spotShadowMap,Be.spotLightMatrix.value=G.state.spotLightMatrix,Be.spotLightMap.value=G.state.spotLightMap,Be.pointShadowMap.value=G.state.pointShadowMap,Be.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Ge,X.uniformsList=null,Ge}function bd(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=kr.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Md(R,H){let W=ae.get(R);W.outputColorSpace=H.outputColorSpace,W.batching=H.batching,W.batchingColor=H.batchingColor,W.instancing=H.instancing,W.instancingColor=H.instancingColor,W.instancingMorph=H.instancingMorph,W.skinning=H.skinning,W.morphTargets=H.morphTargets,W.morphNormals=H.morphNormals,W.morphColors=H.morphColors,W.morphTargetsCount=H.morphTargetsCount,W.numClippingPlanes=H.numClippingPlanes,W.numIntersection=H.numClipIntersection,W.vertexAlphas=H.vertexAlphas,W.vertexTangents=H.vertexTangents,W.toneMapping=H.toneMapping}function V0(R,H,W,X,G){H.isScene!==!0&&(H=Re),ge.resetTextureUnits();let ce=H.fog,be=X.isMeshStandardMaterial?H.environment:null,Ae=U===null?_.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:nn,Se=(X.isMeshStandardMaterial?je:qe).get(X.envMap||be),ze=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Ge=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Be=!!W.morphAttributes.position,lt=!!W.morphAttributes.normal,vt=!!W.morphAttributes.color,Bt=zi;X.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Bt=_.toneMapping);let At=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,St=At!==void 0?At.length:0,ke=ae.get(X),Pt=p.state.lights;if(st===!0&&(J===!0||R!==M)){let dn=R===M&&X.id===S;pe.setState(X,R,dn)}let dt=!1;X.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Pt.state.version||ke.outputColorSpace!==Ae||G.isBatchedMesh&&ke.batching===!1||!G.isBatchedMesh&&ke.batching===!0||G.isBatchedMesh&&ke.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ke.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ke.instancing===!1||!G.isInstancedMesh&&ke.instancing===!0||G.isSkinnedMesh&&ke.skinning===!1||!G.isSkinnedMesh&&ke.skinning===!0||G.isInstancedMesh&&ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ke.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ke.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ke.instancingMorph===!1&&G.morphTexture!==null||ke.envMap!==Se||X.fog===!0&&ke.fog!==ce||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==pe.numPlanes||ke.numIntersection!==pe.numIntersection)||ke.vertexAlphas!==ze||ke.vertexTangents!==Ge||ke.morphTargets!==Be||ke.morphNormals!==lt||ke.morphColors!==vt||ke.toneMapping!==Bt||ke.morphTargetsCount!==St)&&(dt=!0):(dt=!0,ke.__version=X.version);let Cn=ke.currentProgram;dt===!0&&(Cn=po(X,H,G));let Zs=!1,In=!1,Kr=!1,Lt=Cn.getUniforms(),Fn=ke.uniforms;if($.useProgram(Cn.program)&&(Zs=!0,In=!0,Kr=!0),X.id!==S&&(S=X.id,In=!0),Zs||M!==R){$.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Lt.setValue(O,"projectionMatrix",R.projectionMatrix),Lt.setValue(O,"viewMatrix",R.matrixWorldInverse);let yn=Lt.map.cameraPosition;yn!==void 0&&yn.setValue(O,we.setFromMatrixPosition(R.matrixWorld)),Q.logarithmicDepthBuffer&&Lt.setValue(O,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Lt.setValue(O,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,In=!0,Kr=!0)}if(G.isSkinnedMesh){Lt.setOptional(O,G,"bindMatrix"),Lt.setOptional(O,G,"bindMatrixInverse");let dn=G.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),Lt.setValue(O,"boneTexture",dn.boneTexture,ge))}G.isBatchedMesh&&(Lt.setOptional(O,G,"batchingTexture"),Lt.setValue(O,"batchingTexture",G._matricesTexture,ge),Lt.setOptional(O,G,"batchingIdTexture"),Lt.setValue(O,"batchingIdTexture",G._indirectTexture,ge),Lt.setOptional(O,G,"batchingColorTexture"),G._colorsTexture!==null&&Lt.setValue(O,"batchingColorTexture",G._colorsTexture,ge));let kn=W.morphAttributes;if((kn.position!==void 0||kn.normal!==void 0||kn.color!==void 0)&&oe.update(G,W,Cn),(In||ke.receiveShadow!==G.receiveShadow)&&(ke.receiveShadow=G.receiveShadow,Lt.setValue(O,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Fn.envMap.value=Se,Fn.flipEnvMap.value=Se.isCubeTexture&&Se.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&H.environment!==null&&(Fn.envMapIntensity.value=H.environmentIntensity),In&&(Lt.setValue(O,"toneMappingExposure",_.toneMappingExposure),ke.needsLights&&j0(Fn,Kr),ce&&X.fog===!0&&ne.refreshFogUniforms(Fn,ce),ne.refreshMaterialUniforms(Fn,X,j,q,p.state.transmissionRenderTarget[R.id]),kr.upload(O,bd(ke),Fn,ge)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(kr.upload(O,bd(ke),Fn,ge),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Lt.setValue(O,"center",G.center),Lt.setValue(O,"modelViewMatrix",G.modelViewMatrix),Lt.setValue(O,"normalMatrix",G.normalMatrix),Lt.setValue(O,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let dn=X.uniformsGroups;for(let yn=0,kc=dn.length;yn<kc;yn++){let xs=dn[yn];$e.update(xs,Cn),$e.bind(xs,Cn)}}return Cn}function j0(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function W0(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(R,H,W){let X=ae.get(R);X.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ae.get(R.texture).__webglTexture=H,ae.get(R.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:W,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,H){let W=ae.get(R);W.__webglFramebuffer=H,W.__useDefaultFramebuffer=H===void 0};let X0=O.createFramebuffer();this.setRenderTarget=function(R,H=0,W=0){U=R,A=H,L=W;let X=!0,G=null,ce=!1,be=!1;if(R){let Se=ae.get(R);if(Se.__useDefaultFramebuffer!==void 0)$.bindFramebuffer(O.FRAMEBUFFER,null),X=!1;else if(Se.__webglFramebuffer===void 0)ge.setupRenderTarget(R);else if(Se.__hasExternalTextures)ge.rebindTextures(R,ae.get(R.texture).__webglTexture,ae.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Be=R.depthTexture;if(Se.__boundDepthTexture!==Be){if(Be!==null&&ae.has(Be)&&(R.width!==Be.image.width||R.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(R)}}let ze=R.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(be=!0);let Ge=ae.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ge[H])?G=Ge[H][W]:G=Ge[H],ce=!0):R.samples>0&&ge.useMultisampledRTT(R)===!1?G=ae.get(R).__webglMultisampledFramebuffer:Array.isArray(Ge)?G=Ge[W]:G=Ge,w.copy(R.viewport),E.copy(R.scissor),I=R.scissorTest}else w.copy(fe).multiplyScalar(j).floor(),E.copy(De).multiplyScalar(j).floor(),I=Xe;if(W!==0&&(G=X0),$.bindFramebuffer(O.FRAMEBUFFER,G)&&X&&$.drawBuffers(R,G),$.viewport(w),$.scissor(E),$.setScissorTest(I),ce){let Se=ae.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+H,Se.__webglTexture,W)}else if(be){let Se=H;for(let ze=0;ze<R.textures.length;ze++){let Ge=ae.get(R.textures[ze]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+ze,Ge.__webglTexture,W,Se)}}else if(R!==null&&W!==0){let Se=ae.get(R.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Se.__webglTexture,W)}S=-1},this.readRenderTargetPixels=function(R,H,W,X,G,ce,be,Ae=0){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&be!==void 0&&(Se=Se[be]),Se){$.bindFramebuffer(O.FRAMEBUFFER,Se);try{let ze=R.textures[Ae],Ge=ze.format,Be=ze.type;if(!Q.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-X&&W>=0&&W<=R.height-G&&(R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ae),O.readPixels(H,W,X,G,Ne.convert(Ge),Ne.convert(Be),ce))}finally{let ze=U!==null?ae.get(U).__webglFramebuffer:null;$.bindFramebuffer(O.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(R,H,W,X,G,ce,be,Ae=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=ae.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&be!==void 0&&(Se=Se[be]),Se)if(H>=0&&H<=R.width-X&&W>=0&&W<=R.height-G){$.bindFramebuffer(O.FRAMEBUFFER,Se);let ze=R.textures[Ae],Ge=ze.format,Be=ze.type;if(!Q.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,lt),O.bufferData(O.PIXEL_PACK_BUFFER,ce.byteLength,O.STREAM_READ),R.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Ae),O.readPixels(H,W,X,G,Ne.convert(Ge),Ne.convert(Be),0);let vt=U!==null?ae.get(U).__webglFramebuffer:null;$.bindFramebuffer(O.FRAMEBUFFER,vt);let Bt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Qf(O,Bt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,lt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,ce),O.deleteBuffer(lt),O.deleteSync(Bt),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,H=null,W=0){let X=Math.pow(2,-W),G=Math.floor(R.image.width*X),ce=Math.floor(R.image.height*X),be=H!==null?H.x:0,Ae=H!==null?H.y:0;ge.setTexture2D(R,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,be,Ae,G,ce),$.unbindTexture()};let q0=O.createFramebuffer(),Y0=O.createFramebuffer();this.copyTextureToTexture=function(R,H,W=null,X=null,G=0,ce=null){ce===null&&(G!==0?(mr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=G,G=0):ce=0);let be,Ae,Se,ze,Ge,Be,lt,vt,Bt,At=R.isCompressedTexture?R.mipmaps[ce]:R.image;if(W!==null)be=W.max.x-W.min.x,Ae=W.max.y-W.min.y,Se=W.isBox3?W.max.z-W.min.z:1,ze=W.min.x,Ge=W.min.y,Be=W.isBox3?W.min.z:0;else{let kn=Math.pow(2,-G);be=Math.floor(At.width*kn),Ae=Math.floor(At.height*kn),R.isDataArrayTexture?Se=At.depth:R.isData3DTexture?Se=Math.floor(At.depth*kn):Se=1,ze=0,Ge=0,Be=0}X!==null?(lt=X.x,vt=X.y,Bt=X.z):(lt=0,vt=0,Bt=0);let St=Ne.convert(H.format),ke=Ne.convert(H.type),Pt;H.isData3DTexture?(ge.setTexture3D(H,0),Pt=O.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(ge.setTexture2DArray(H,0),Pt=O.TEXTURE_2D_ARRAY):(ge.setTexture2D(H,0),Pt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,H.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,H.unpackAlignment);let dt=O.getParameter(O.UNPACK_ROW_LENGTH),Cn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Zs=O.getParameter(O.UNPACK_SKIP_PIXELS),In=O.getParameter(O.UNPACK_SKIP_ROWS),Kr=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,At.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,At.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ze),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ge),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Be);let Lt=R.isDataArrayTexture||R.isData3DTexture,Fn=H.isDataArrayTexture||H.isData3DTexture;if(R.isDepthTexture){let kn=ae.get(R),dn=ae.get(H),yn=ae.get(kn.__renderTarget),kc=ae.get(dn.__renderTarget);$.bindFramebuffer(O.READ_FRAMEBUFFER,yn.__webglFramebuffer),$.bindFramebuffer(O.DRAW_FRAMEBUFFER,kc.__webglFramebuffer);for(let xs=0;xs<Se;xs++)Lt&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ae.get(R).__webglTexture,G,Be+xs),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ae.get(H).__webglTexture,ce,Bt+xs)),O.blitFramebuffer(ze,Ge,be,Ae,lt,vt,be,Ae,O.DEPTH_BUFFER_BIT,O.NEAREST);$.bindFramebuffer(O.READ_FRAMEBUFFER,null),$.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(G!==0||R.isRenderTargetTexture||ae.has(R)){let kn=ae.get(R),dn=ae.get(H);$.bindFramebuffer(O.READ_FRAMEBUFFER,q0),$.bindFramebuffer(O.DRAW_FRAMEBUFFER,Y0);for(let yn=0;yn<Se;yn++)Lt?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,kn.__webglTexture,G,Be+yn):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,kn.__webglTexture,G),Fn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,dn.__webglTexture,ce,Bt+yn):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,dn.__webglTexture,ce),G!==0?O.blitFramebuffer(ze,Ge,be,Ae,lt,vt,be,Ae,O.COLOR_BUFFER_BIT,O.NEAREST):Fn?O.copyTexSubImage3D(Pt,ce,lt,vt,Bt+yn,ze,Ge,be,Ae):O.copyTexSubImage2D(Pt,ce,lt,vt,ze,Ge,be,Ae);$.bindFramebuffer(O.READ_FRAMEBUFFER,null),$.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Fn?R.isDataTexture||R.isData3DTexture?O.texSubImage3D(Pt,ce,lt,vt,Bt,be,Ae,Se,St,ke,At.data):H.isCompressedArrayTexture?O.compressedTexSubImage3D(Pt,ce,lt,vt,Bt,be,Ae,Se,St,At.data):O.texSubImage3D(Pt,ce,lt,vt,Bt,be,Ae,Se,St,ke,At):R.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,ce,lt,vt,be,Ae,St,ke,At.data):R.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,ce,lt,vt,At.width,At.height,St,At.data):O.texSubImage2D(O.TEXTURE_2D,ce,lt,vt,be,Ae,St,ke,At);O.pixelStorei(O.UNPACK_ROW_LENGTH,dt),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Cn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Zs),O.pixelStorei(O.UNPACK_SKIP_ROWS,In),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Kr),ce===0&&H.generateMipmaps&&O.generateMipmap(Pt),$.unbindTexture()},this.initRenderTarget=function(R){ae.get(R).__webglFramebuffer===void 0&&ge.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ge.setTextureCube(R,0):R.isData3DTexture?ge.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ge.setTexture2DArray(R,0):ge.setTexture2D(R,0),$.unbindTexture()},this.resetState=function(){A=0,L=0,U=null,$.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}};var Bp={type:"change"},xu={type:"start"},Fp={type:"end"},dc=new ui,Op=new vn,Jy=Math.cos(70*zs.DEG2RAD),Xt=new D,En=2*Math.PI,bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},_u=1e-6,fc=class extends Ya{constructor(e,t=null){super(e,t),this.state=bt.NONE,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Vn.ROTATE,MIDDLE:Vn.DOLLY,RIGHT:Vn.PAN},this.touches={ONE:ei.ROTATE,TWO:ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new mn,this._lastTargetPosition=new D,this._quat=new mn().setFromUnitVectors(e.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ir,this._sphericalDelta=new Ir,this._scale=1,this._panOffset=new D,this._rotateStart=new re,this._rotateEnd=new re,this._rotateDelta=new re,this._panStart=new re,this._panEnd=new re,this._panDelta=new re,this._dollyStart=new re,this._dollyEnd=new re,this._dollyDelta=new re,this._dollyDirection=new D,this._mouse=new re,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Qy.bind(this),this._onPointerDown=$y.bind(this),this._onPointerUp=ev.bind(this),this._onContextMenu=ov.bind(this),this._onMouseWheel=iv.bind(this),this._onKeyDown=sv.bind(this),this._onTouchStart=rv.bind(this),this._onTouchMove=av.bind(this),this._onMouseDown=tv.bind(this),this._onMouseMove=nv.bind(this),this._interceptControlDown=lv.bind(this),this._interceptControlUp=cv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Bp),this.update(),this.state=bt.NONE}update(e=null){let t=this.object.position;Xt.copy(t).sub(this.target),Xt.applyQuaternion(this._quat),this._spherical.setFromVector3(Xt),this.autoRotate&&this.state===bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=En:n>Math.PI&&(n-=En),s<-Math.PI?s+=En:s>Math.PI&&(s-=En),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Xt.setFromSpherical(this._spherical),Xt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Xt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Xt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new D(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Xt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(dc.origin.copy(this.object.position),dc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(dc.direction))<Jy?this.object.lookAt(this.target):(Op.setFromNormalAndCoplanarPoint(this.object.up,this.target),dc.intersectPlane(Op,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>_u||8*(1-this._lastQuaternion.dot(this.object.quaternion))>_u||this._lastTargetPosition.distanceToSquared(this.target)>_u?(this.dispatchEvent(Bp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?En/60*this.autoRotateSpeed*e:En/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Xt.setFromMatrixColumn(t,0),Xt.multiplyScalar(-e),this._panOffset.add(Xt)}_panUp(e,t){this.screenSpacePanning===!0?Xt.setFromMatrixColumn(t,1):(Xt.setFromMatrixColumn(t,0),Xt.crossVectors(this.object.up,Xt)),Xt.multiplyScalar(e),this._panOffset.add(Xt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Xt.copy(s).sub(this.target);let r=Xt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(En*this._rotateDelta.x/t.clientHeight),this._rotateUp(En*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-En*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(En*this._rotateDelta.x/t.clientHeight),this._rotateUp(En*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new re,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function $y(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Qy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ev(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Fp),this.state=bt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function tv(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Vn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=bt.DOLLY;break;case Vn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}break;case Vn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=bt.PAN}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(xu)}function nv(i){switch(this.state){case bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function iv(i){this.enabled===!1||this.enableZoom===!1||this.state!==bt.NONE||(i.preventDefault(),this.dispatchEvent(xu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Fp))}function sv(i){this.enabled!==!1&&this._handleKeyDown(i)}function rv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ei.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=bt.TOUCH_ROTATE;break;case ei.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=bt.TOUCH_PAN;break;default:this.state=bt.NONE}break;case 2:switch(this.touches.TWO){case ei.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=bt.TOUCH_DOLLY_PAN;break;case ei.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=bt.TOUCH_DOLLY_ROTATE;break;default:this.state=bt.NONE}break;default:this.state=bt.NONE}this.state!==bt.NONE&&this.dispatchEvent(xu)}function av(i){switch(this._trackPointer(i),this.state){case bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=bt.NONE}}function ov(i){this.enabled!==!1&&i.preventDefault()}function lv(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function cv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var pc=class extends fc{constructor(e,t){super(e,t),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Vn.PAN,MIDDLE:Vn.DOLLY,RIGHT:Vn.ROTATE},this.touches={ONE:ei.PAN,TWO:ei.DOLLY_ROTATE}}};function zp(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Nt,c=0;for(let u=0;u<i.length;++u){let h=i[u],d=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in h.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(h.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in h.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(h.morphAttributes[f])}if(e){let f;if(t)f=h.index.count;else if(h.attributes.position!==void 0)f=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(t){let u=0,h=[];for(let d=0;d<i.length;++d){let f=i[d].index;for(let m=0;m<f.count;++m)h.push(f.getX(m)+u);u+=i[d].attributes.position.count}l.setIndex(h)}for(let u in r){let h=kp(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,h)}for(let u in a){let h=a[u][0].length;if(h===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let d=0;d<h;++d){let f=[];for(let x=0;x<a[u].length;++x)f.push(a[u][x][d]);let m=kp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(m)}}return l}function kp(i){let e,t,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*t}let a=new e(r),o=new kt(a,t,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let h=l/t;for(let d=0,f=u.count;d<f;d++)for(let m=0;m<t;m++){let x=u.getComponent(d,m);o.setComponent(d+h,m,x)}}else a.set(u.array,l);l+=u.count*t}return s!==void 0&&(o.gpuType=s),o}function yu(i,e){if(e===Wh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Br||e===eo){let t=i.getIndex();if(t===null){let a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Br)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var mc=class extends gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Tu(t)}),this.register(function(t){return new Au(t)}),this.register(function(t){return new Bu(t)}),this.register(function(t){return new Ou(t)}),this.register(function(t){return new Fu(t)}),this.register(function(t){return new Cu(t)}),this.register(function(t){return new Iu(t)}),this.register(function(t){return new Pu(t)}),this.register(function(t){return new Lu(t)}),this.register(function(t){return new Eu(t)}),this.register(function(t){return new Du(t)}),this.register(function(t){return new Ru(t)}),this.register(function(t){return new Uu(t)}),this.register(function(t){return new Nu(t)}),this.register(function(t){return new Su(t)}),this.register(function(t){return new ku(t)}),this.register(function(t){return new zu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let c=Fi.extractUrlBase(e);a=Fi.resolveURL(c,this.path)}else a=Fi.extractUrlBase(e);this.manager.itemStart(e);let o=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Cr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Wp){try{a[rt.KHR_BINARY_GLTF]=new Hu(e)}catch(h){s&&s(h);return}r=JSON.parse(a[rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Yu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case rt.KHR_MATERIALS_UNLIT:a[h]=new wu;break;case rt.KHR_DRACO_MESH_COMPRESSION:a[h]=new Gu(r,this.dracoLoader);break;case rt.KHR_TEXTURE_TRANSFORM:a[h]=new Vu;break;case rt.KHR_MESH_QUANTIZATION:a[h]=new ju;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function hv(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}var rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Su=class{constructor(e){this.parser=e,this.name=rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,u=new Oe(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],nn);let h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Bs(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Wa(u),c.distance=h;break;case"spot":c=new ja(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),yi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}},wu=class{constructor(){this.name=rt.KHR_MATERIALS_UNLIT}getMaterialType(){return on}extendParams(e,t,n){let s=[];e.color=new Oe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],nn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(s)}},Eu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Tu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){let o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new re(o,o)}return Promise.all(r)}},Au=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Ru=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}},Cu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;let a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){let o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],nn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ft)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}},Iu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}},Pu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;let o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(o[0],o[1],o[2],nn),Promise.all(r)}},Lu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Du=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));let o=a.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(o[0],o[1],o[2],nn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ft)),Promise.all(r)}},Nu=class{constructor(e){this.parser=e,this.name=rt.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}},Uu=class{constructor(e){this.parser=e,this.name=rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}},Bu=class{constructor(e){this.parser=e,this.name=rt.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Ou=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},Fu=class{constructor(e){this.parser=e,this.name=rt.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],l=n.textureLoader;if(o.uri){let c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}},ku=class{constructor(e){this.name=rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},zu=class{constructor(e){this.name=rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==Wn.TRIANGLES&&c.mode!==Wn.TRIANGLE_STRIP&&c.mode!==Wn.TRIANGLE_FAN&&c.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],l={};for(let c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{let u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,f=[];for(let m of h){let x=new Ke,g=new D,p=new mn,C=new D(1,1,1),v=new Gn(m.geometry,m.material,d);for(let _=0;_<d;_++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,_),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,_),l.SCALE&&C.fromBufferAttribute(l.SCALE,_),v.setMatrixAt(_,x.compose(g,p,C));for(let _ in l)if(_==="_COLOR_0"){let T=l[_];v.instanceColor=new ls(T.array,T.itemSize,T.normalized)}else _!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&m.geometry.setAttribute(_,l[_]);pt.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},Wp="glTF",no=12,Hp={JSON:1313821514,BIN:5130562},Hu=class{constructor(e){this.name=rt.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,no),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Wp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-no,r=new DataView(e,no),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let l=r.getUint32(a,!0);if(a+=4,l===Hp.JSON){let c=new Uint8Array(e,no+a,o);this.content=n.decode(c)}else if(l===Hp.BIN){let c=no+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Gu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(let u in a){let h=Xu[u]||u.toLowerCase();o[h]=a[u]}for(let u in e.attributes){let h=Xu[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[e.attributes[u]],f=Gr[d.componentType];c[h]=f.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let m in f.attributes){let x=f.attributes[m],g=l[m];g!==void 0&&(x.normalized=g)}h(f)},o,c,nn,d)})})}},Vu=class{constructor(){this.name=rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},ju=class{constructor(){this.name=rt.KHR_MESH_QUANTIZATION}},gc=class extends Ui{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,m=e*c,x=m-c,g=-2*f+3*d,p=f-d,C=1-g,v=p-d+h;for(let _=0;_!==o;_++){let T=a[x+_+o],A=a[x+_+l]*u,L=a[m+_+o],U=a[m+_]*u;r[_]=C*T+v*A+g*L+p*U}return r}},uv=new mn,Wu=class extends gc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return uv.fromArray(r).normalize().toArray(r),r}},Wn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Gr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gp={9728:tn,9729:pn,9984:wl,9985:Pr,9986:ks,9987:ti},Vp={33071:oi,33648:dr,10497:os},vu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},us={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},dv={CUBICSPLINE:void 0,LINEAR:Rs,STEP:As},bu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function fv(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ot({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Dn})),i.DefaultMaterial}function Xs(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function yi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function pv(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){let h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){let h=e[c];if(n){let d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){let d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){let u=c[0],h=c[1],d=c[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function mv(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function gv(i){let e,t=i.extensions&&i.extensions[rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Mu(t.attributes):e=i.indices+":"+Mu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Mu(i.targets[n]);return e}function Mu(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function qu(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function _v(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var xv=new Ke,Yu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let l=o.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Ha(this.options.manager):this.textureLoader=new Xa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Cr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return Xs(r,o,s),yi(o,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(let l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(let[c,u]of a.children.entries())r(u,o.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[rt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Fi.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=vu[s.type],o=Gr[s.componentType],l=s.normalized===!0,c=new o(s.count*a);return Promise.resolve(new kt(c,a,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],l=vu[s.type],c=Gr[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,x,g;if(f&&f!==h){let p=Math.floor(d/f),C="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,v=t.cache.get(C);v||(x=new c(o,p*f,s.count*f/u),v=new yr(x,f/u),t.cache.add(C,v)),g=new vr(v,l,d%f/u,m)}else o===null?x=new c(s.count*l):x=new c(o,d,s.count*l),g=new kt(x,l,m);if(s.sparse!==void 0){let p=vu.SCALAR,C=Gr[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,_=s.sparse.values.byteOffset||0,T=new C(a[1],v,s.sparse.count*p),A=new c(a[2],_,s.sparse.count*l);o!==null&&(g=new kt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let L=0,U=T.length;L<U;L++){let S=T[L];if(g.setX(S,A[L*l]),l>=2&&g.setY(S,A[L*l+1]),l>=3&&g.setZ(S,A[L*l+2]),l>=4&&g.setW(S,A[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Gp[d.magFilter]||pn,u.minFilter=Gp[d.minFilter]||ti,u.wrapS=Vp[d.wrapS]||os,u.wrapT=Vp[d.wrapT]||os,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==tn&&u.minFilter!==pn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let a=s.images[e],o=self.URL||self.webkitURL,l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;let d=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(l).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(x){let g=new Gt(x);g.needsUpdate=!0,d(g)}),t.load(Fi.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),yi(h,a),h.userData.mimeType=a.mimeType||_v(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[rt.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[rt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let l=r.associations.get(a);a=r.extensions[rt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new Sr,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,l=this.cache.get(o);l||(l=new cs,Mn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Ot}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},l=r.extensions||{},c=[];if(l[rt.KHR_MATERIALS_UNLIT]){let h=s[rt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,r,t))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Oe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],nn),o.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Ft)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Zt);let u=r.alphaMode||bu.OPAQUE;if(u===bu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===bu.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==on&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new re(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==on&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==on){let h=r.emissiveFactor;o.emissive=new Oe().setRGB(h[0],h[1],h[2],nn)}return r.emissiveTexture!==void 0&&a!==on&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(c).then(function(){let h=new a(o);return r.name&&(h.name=r.name),yi(h,r),t.associations.set(h,{materials:e}),r.extensions&&Xs(s,h,r),h})}createUniqueName(e){let t=wt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return jp(l,o,t)})}let a=[];for(let o=0,l=e.length;o<l;o++){let c=e[o],u=gv(c),h=s[u];if(h)a.push(h.promise);else{let d;c.extensions&&c.extensions[rt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=jp(new Nt,c,t),s[u]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){let u=a[l].material===void 0?fv(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){let c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let f=0,m=u.length;f<m;f++){let x=u[f],g=a[f],p,C=c[f];if(g.mode===Wn.TRIANGLES||g.mode===Wn.TRIANGLE_STRIP||g.mode===Wn.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new _a(x,C):new tt(x,C),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===Wn.TRIANGLE_STRIP?p.geometry=yu(p.geometry,eo):g.mode===Wn.TRIANGLE_FAN&&(p.geometry=yu(p.geometry,Br));else if(g.mode===Wn.LINES)p=new va(x,C);else if(g.mode===Wn.LINE_STRIP)p=new Ni(x,C);else if(g.mode===Wn.LINE_LOOP)p=new ba(x,C);else if(g.mode===Wn.POINTS)p=new Ma(x,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&mv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),yi(p,r),g.extensions&&Xs(s,p,g),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&Xs(s,h[0],r),h[0];let d=new Ze;r.extensions&&Xs(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(zs.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Us(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),yi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],l=[];for(let c=0,u=a.length;c<u;c++){let h=a[c];if(h){o.push(h);let d=new Ke;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ya(o,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],m=s.samplers[f.sampler],x=f.target,g=x.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,C=s.parameters!==void 0?s.parameters[m.output]:m.output;x.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",C)),c.push(m),u.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],m=h[2],x=h[3],g=h[4],p=[];for(let v=0,_=d.length;v<_;v++){let T=d[v],A=f[v],L=m[v],U=x[v],S=g[v];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();let M=n._createAnimationTracks(T,A,L,U,S);if(M)for(let w=0;w<M.length;w++)p.push(M[w])}let C=new za(r,void 0,p);return yi(C,s),C})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=s.weights.length;l<c;l++)o.morphTargetInfluences[l]=s.weights[l]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){let u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,xv)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(r.isBone===!0?u=new br:c.length>1?u=new Ze:c.length===1?u=c[0]:u=new pt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=a),yi(u,r),r.extensions&&Xs(n,u,r),r.matrix!==void 0){let h=new Ke;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ze;n.name&&(r.name=s.createUniqueName(n.name)),yi(r,n),n.extensions&&Xs(t,r,n);let a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(s.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);let c=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof Mn||d instanceof Gt)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,l=[];us[r.path]===us.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(us[r.path]){case us.weights:c=fi;break;case us.rotation:c=pi;break;case us.translation:case us.scale:c=mi;break;default:switch(n.itemSize){case 1:c=fi;break;case 2:case 3:default:c=mi;break}break}let u=s.interpolation!==void 0?dv[s.interpolation]:Rs,h=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let m=new c(l[d]+"."+us[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=qu(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof pi?Wu:gc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function yv(i,e,t){let n=e.attributes,s=new gn;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),o.normalized){let u=qu(Gr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new D,l=new D;for(let c=0,u=r.length;c<u;c++){let h=r[c];if(h.POSITION!==void 0){let d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let x=qu(Gr[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new bn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function jp(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(let a in n){let o=Xu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return ct.workingColorSpace!==nn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ct.workingColorSpace}" not supported.`),yi(i,e),yv(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?pv(i,e.targets,t):i})}var _c,qp={white:["satin","#f7f5ef"],cream:["matte","#efe5cf"],stone:["matte","#ddd6c8"],plaza:["matte","#e7e1d3"],plazaLight:["matte","#f1ede4"],concrete:["matte","#cdcac2"],gravel:["matte","#dccfb3"],sand:["matte","#e9d9a6"],sandDark:["matte","#d4b77c"],asphalt:["matte","#5b6169"],darkPaving:["matte","#3a3346"],silver:["metal","#cfd6de"],steel:["metal","#8d96a0"],gold:["metal","#e8b931"],green:["satin","#0f8a4f"],domeGreen:["satin","#1f9d5c"],roofGreen:["matte","#2f6f4f"],glass:["glass","#7dd3fc"],deepGlass:["glass","#4f7fae"],darkGlass:["glass","#2c4a66"],window:["glass","#36597d"],windowLight:["glass","#8fb8d8"],water:["wet","#4fb3e6"],pool:["wet","#38c3e8"],lawn:["matte","#7fc15a"],lawnLight:["matte","#9ad06f"],lawnDry:["matte","#b9c983"],fairway:["matte","#6cc24a"],green2:["matte","#9be374"],hedge:["flat","#3f7f35"],leaf:["flat","#4f9a3c"],leafDark:["flat","#3c8434"],bush:["flat","#4d8f3a"],trunk:["matte","#7a5a3a"],palmTrunk:["matte","#8a6a45"],palmLeaf:["flat","#3f9b4a"],wood:["matte","#9a6b43"],mud:["matte","#b5784a"],thatch:["flat","#c99a52"],red:["satin","#d93a3a"],roofRed:["matte","#b45a3c"],roofTile:["matte","#9a4b33"],roofTin:["metal","#a3abb4"],track:["matte","#c2562a"],pitch:["matte","#4fae45"],seats:["ds","#1f9d5c"],wall:["ds","#e5e7eb"],canopy:["ds","#f8fafc"],granite:["flat","#8d8172"],graniteLight:["flat","#a39684"],graniteDark:["flat","#6c6156"],streak:["matte","#4a4038"],lamp:["glow","#fff3c4"],neonPink:["glow","#ff2d95"],neonGreen:["glow","#22e584"],neonBlue:["glow","#38bdf8"],dark:["matte","#2e1f45"],black:["satin","#1f2328"],beam:["beam","#fff7d6"],showGlass:["clear","#bfe6f5"],balGlass:["clear","#dff4ff"],carGlass:["glass","#1e293b"],carRed:["satin","#c81e1e"],carWhite:["satin","#f4f4f2"],carBlack:["satin","#1b1d22"],carSilver:["metal","#c0c6cc"],carBlue:["satin","#1f5fbf"],carGreen:["satin","#17803d"],elephant:["matte","#8e8e93"],giraffe:["matte","#e0b049"],lion:["matte","#c9954c"],mane:["flat","#7a4a1e"],uniBlue:["satin","#1e40af"],teal:["satin","#2a9d8f"],hubGreen:["satin","#22c55e"],solar:["glass","#1e3a8a"],tank:["satin","#1f2937"],stall0:["matte","#e5484d"],stall1:["matte","#2f7de1"],stall2:["matte","#22b573"],stall3:["matte","#f59e0b"],stall4:["matte","#8b5cf6"],stall5:["matte","#14b8a6"],flowerRed:["matte","#e63946"],flowerYellow:["matte","#ffd166"],flowerPink:["matte","#f472b6"]},y=(i,e,t,n)=>({g:"box",m:i,p:e,s:t,r:n}),Z=(i,e,t,n,s="cyl",r)=>({g:s,m:i,p:e,s:[t,n,t],r}),cn=(i,e,t,n,s="cone8",r)=>({g:s,m:i,p:e,s:[t,n,t],r}),Gi=(i,e,t)=>({g:"dome",m:i,p:e,s:t}),We=(i,e,t,n,s)=>({g:i,m:e,p:t,s:n,r:s}),Mt=(i,e,t,n,s,r,a)=>({g:"pyr",m:i,p:[e,t+a/2,n],s:[.7071*s,a,.7071*r]}),nt=(i,e,t=0,n=0,s="lawn")=>y(s,[t,.01,n],[i,.02,e]),Fe=(i,e,t=0,n=0,s="plaza")=>y(s,[t,.02,n],[i,.04,e]),Vi=(i,e,t,n,s=.06,r="water")=>y(r,[t,s-.015,n],[i,.03,e]),ii=(i,e,t,n,s=.26)=>y("hedge",[i,s/2,e],[t,s,n]),xe=(i,e,t=1,n="leaf")=>[Z("trunk",[i,.22*t,e],.06*t,.44*t,"cyl8"),We("ico",n,[i,.74*t,e],[.44*t,.5*t,.44*t])],Ve=(i,e,t=1.3)=>[Z("palmTrunk",[i,t/2,e],.05,t,"cyl8"),cn("palmLeaf",[i,t+.04,e],.55,.26,"cone8",[Math.PI,0,0]),cn("palmLeaf",[i,t+.16,e],.34,.2,"cone8",[Math.PI,.4,0])],$t=(i,e,t=1.6)=>[Z("silver",[i,t/2,e],.022,t,"cyl8"),y("green",[i+.1,t-.15,e],[.2,.26,.015]),y("white",[i+.3,t-.15,e],[.2,.26,.015]),y("green",[i+.5,t-.15,e],[.2,.26,.015])],Qt=(i,e,t,n,s,r,a,o="window")=>{let l=[];for(let c=s;c<=r+1e-6;c+=a)l.push(y(o,[i,c,e],[t+.04,.13,n+.04]));return l},qt=(i,e,t,n,s,r=0,a=.06,o="white")=>Array.from({length:t},(l,c)=>Z(o,[i+(e-i)*c/(t-1),r+s/2,n],a,s,"cyl8")),mt=(i,e,t,n)=>[y(n,[i,.1,e],[.3,.14,.6],[0,t,0]),y("carGlass",[i,.21,e],[.26,.11,.32],[0,t,0])],Rt=(i,e,t,n=.6,s=0)=>[Z("silver",[i,s+n/2,e],.02,n,"cyl8"),cn(t,[i,s+n+.08,e],.42,.18)],qs=(i,e,t)=>[y("wood",[i,.16,e],[.9,.32,.5]),y(t,[i,.62,e],[1.05,.05,.8]),Z("wood",[i-.48,.31,e+.36],.025,.62,"cyl8"),Z("wood",[i+.48,.31,e+.36],.025,.62,"cyl8")],Vr=(i,e,t,n,s=.2,r="wood")=>[y(r,[(i+e)/2,s/2,t],[e-i,s,.04]),y(r,[(i+e)/2,s/2,n],[e-i,s,.04]),y(r,[i,s/2,(t+n)/2],[.04,s,n-t]),y(r,[e,s/2,(t+n)/2],[.04,s,n-t])],Xp=i=>{let e=43758.5453*Math.sin(127.1*i+311.7);return e-Math.floor(e)},vv=["flowerRed","flowerYellow","flowerPink"],Jt=(i,e,t,n,s,r,a=.02)=>Array.from({length:s},(o,l)=>Gi(vv[(l+r)%3],[i+(Xp(31*r+l)-.5)*t,a,e+(Xp(17*r+l+.5)-.5)*n],[.12,.1,.12])),ji=["stall0","stall1","stall2","stall3","stall4","stall5"],Yp={abjAirport:(function(){let i=[nt(39.8,18.8,0,0,"lawnDry")];i.push(y("asphalt",[0,.025,-6.8],[39,.03,2.4]));for(let e=-17;e<=17;e+=2)i.push(y("white",[e,.045,-6.8],[1,.01,.1]));for(let e of[-1,1])for(let t=0;t<6;t++)i.push(y("white",[18.6*e,.045,-7.65+.34*t],[1.1,.01,.16]));for(let e=-19;e<=19.01;e+=2)i.push(y("lamp",[e,.07,-8.1],[.08,.06,.08]),y("lamp",[e,.07,-5.5],[.08,.06,.08]));for(let e of(i.push(y("asphalt",[0,.025,-4.3],[38,.03,.9])),[-12,0,12]))i.push(y("asphalt",[e,.025,-5.2],[1,.03,1.1]));for(let e of(i.push(y("concrete",[0,.025,-.05],[38.6,.03,7.1])),i.push(y("concrete",[0,.06,5.2],[38.6,.12,3.4]),y("glass",[0,.82,5.1],[38,1.4,3.2]),y("white",[0,1.56,5.1],[38.2,.08,3.4]),y("green",[0,1.35,6.72],[38.1,.12,.04])),[-14.25,-4.75,4.75,14.25]))i.push(We("halfCyl","white",[e,1.6,5.1],[.95,9.5,1.72],[0,0,Math.PI/2]));i.push(y("steel",[-3.6,.95,7],[.08,1.9,.08]),y("steel",[3.6,.95,7],[.08,1.9,.08])),i.push(y("asphalt",[0,.025,8.2],[24,.03,1.9]));for(let e=-11.6;e<=11.61;e+=.8)i.push(y("white",[e,.045,8.6],[.04,.01,.9]));for(let e=-12;e<=12;e+=3)i.push(...Ve(e,9.3,1.5));for(let e of(i.push(y("concrete",[-16.9,.06,8.2],[4,.12,2.4]),We("halfCyl","silver",[-16.9,.12,8.2],[1.2,3.8,1.15],[0,0,Math.PI/2])),i.push(We("cylT","white",[16.8,2.5,8.2],[.45,5,.45]),Z("deepGlass",[16.8,5.3,8.2],.95,.6,"cyl8"),Z("white",[16.8,5.66,8.2],1.05,.12,"cyl8"),Z("silver",[16.8,6.1,8.2],.03,.8,"cyl8")),[13.3,14.4]))i.push(Z("white",[e,.4,8.5],.45,.8));return i.push(...$t(-13.9,7.3,2.2)),i})(),abjAsoRock:[nt(4.3,4.3,0,0,"lawnDry"),Fe(1.1,3.8,.9,.2,"gravel"),We("rock","granite",[-1,.42,-1],[.95,.8,.8],[.3,.6,0]),We("rock","graniteLight",[.4,.3,-1.5],[.6,.5,.5],[.5,.2,.3]),We("rock","graniteDark",[-1.5,.25,.4],[.5,.4,.45],[.2,1,.1]),y("wood",[1,.3,1.1],[1.6,.06,1.1]),...[[.25,.6],[1.75,.6],[.25,1.6],[1.75,1.6]].map(([i,e])=>Z("wood",[i,.15,e],.04,.3,"cyl8")),y("wood",[1,.5,1.63],[1.6,.04,.04]),y("wood",[-.7,.45,1.8],[.06,.9,.06]),...xe(1.7,-1.4),...xe(-1.6,1.5,.9)],abjAssembly:[nt(6.8,6.8),Fe(4.6,2.6,0,2.1),Vi(2.8,.9,0,2.3),y("stone",[0,.15,-.7],[5.8,.3,3.8]),y("stone",[0,.08,1.45],[3.2,.16,.5]),y("white",[0,.85,-.9],[4.6,1.1,2.8]),y("cream",[-2.75,.62,-.9],[.9,.64,2.4]),y("cream",[2.75,.62,-.9],[.9,.64,2.4]),...qt(-2.1,2.1,13,.85,1.1,.3,.07),y("white",[0,1.46,.3],[4.9,.12,1.5]),Z("white",[0,1.75,-1],1.2,.5),Gi("domeGreen",[0,2,-1],[1.32,1.25,1.32]),Z("white",[0,3.36,-1],.13,.24,"cyl8"),cn("gold",[0,3.62,-1],.09,.3),y("stone",[0,.2,3.15],[2.9,.4,.16]),...$t(-2.9,2.6,1.8),...$t(2.3,2.6,1.8),ii(-3.2,-.6,.3,5.2),ii(3.2,-.6,.3,5.2),...xe(-2.9,-3,1.1),...xe(2.9,-3,1.1),...Jt(-2.9,1.4,.5,1.2,6,1),...Jt(2.9,1.4,.5,1.2,6,2)],abjSupremeCourt:[nt(4.8,4.3),Fe(3.4,1.3,0,1.4),y("stone",[0,.1,-.35],[3.9,.2,2.6]),y("cream",[0,.72,-.5],[3.1,1.04,1.8]),...qt(-1.35,1.35,8,.65,1.04,.2),y("cream",[0,1.3,.15],[3.3,.1,1.3]),Mt("domeGreen",0,1.35,-.25,3.4,2.2,.55),cn("gold",[0,2,-.25],.06,.2),y("stone",[0,.17,1.95],[2.2,.34,.14]),...$t(-2.2,1.5,1.5),...xe(2,-1.75),...xe(-2,-1.75)],abjEagleSquare:(function(){let i=[Fe(7.8,5.8)];for(let e of[-.6,.4,1.4,2.4])i.push(y("white",[0,.045,e],[6.8,.01,.06]));for(let e=0;e<4;e++)i.push(y(e%2?"white":"green",[0,(e+1)*.16,-1.55-.36*e],[6.6,(e+1)*.32,.36]));for(let e of(i.push(y("green",[0,1.98,-2.15],[7,.1,1.7])),[-3.2,-1.6,0,1.6,3.2]))i.push(Z("white",[e,.98,-1.35],.05,1.95,"cyl8"));return i.push(y("white",[0,.72,-1.15],[1.4,.7,.5])),i.push(Z("white",[0,.6,1.9],.14,1.2),We("sphere","gold",[0,1.3,1.9],[.14,.12,.2]),y("gold",[-.3,1.36,1.9],[.6,.05,.2],[0,0,.3]),y("gold",[.3,1.36,1.9],[.6,.05,.2],[0,0,-.3]),We("sphere","gold",[0,1.44,2.02],[.06,.06,.08])),i.push(...$t(-3.6,2.5,2.2),...$t(2.9,2.5,2.2)),i})(),abjMosque:(function(){let i=[nt(5.8,5.8),Fe(5,5,0,.1),y("cream",[0,.75,-.3],[3.2,1.5,3.2]),y("green",[0,.72,1.33],[2.5,.95,.06]),y("gold",[0,1.27,1.34],[2.6,.08,.06]),Z("cream",[0,1.75,-.3],1.2,.5),Gi("gold",[0,2,-.3],[1.36,1.45,1.36]),Z("gold",[0,3.55,-.3],.05,.25,"cyl8"),cn("gold",[0,3.78,-.3],.08,.22),Vi(1.8,.55,0,2.2)];for(let e of[-1,1])for(let t of[-1,1])i.push(Gi("gold",[1.3*e,1.5,-.3+1.3*t],[.3,.3,.3]));for(let e of[-2.35,2.35])for(let t of[-2.65,2.05])i.push(Z("white",[e,.25,t],.3,.5),We("cylT","white",[e,2.45,t],[.19,4,.19]),Z("white",[e,3.3,t],.3,.09),Z("white",[e,4.2,t],.26,.07),cn("gold",[e,4.8,t],.21,.72));return i})(),abjChristianCentre:[nt(5.8,5.8),Fe(4.2,1.5,0,2.15),y("white",[0,.9,.1],[3,1.8,3.2]),Mt("white",0,1.8,.1,3,3.2,5.4),y("deepGlass",[0,1,1.73],[.7,1.6,.06]),y("deepGlass",[-1,.9,1.73],[.3,1.1,.06]),y("deepGlass",[1,.9,1.73],[.3,1.1,.06]),y("gold",[0,7.5,.1],[.09,.66,.09]),y("gold",[0,7.6,.1],[.4,.09,.09]),y("cream",[-2.15,.45,.4],[1.1,.9,2.2]),y("cream",[2.15,.45,.4],[1.1,.9,2.2]),Mt("roofTile",-2.15,.9,.4,1.2,2.3,.35),Mt("roofTile",2.15,.9,.4,1.2,2.3,.35),y("stone",[0,.06,1.95],[1.6,.12,.5]),y("stone",[0,.17,2.75],[2.4,.34,.14]),...xe(-2.4,2.4),...xe(2.4,2.4),...xe(-2.4,-2.4,1.2),...xe(2.4,-2.4,1.2)],abjSecretariat:(_c=[nt(7.8,4.8),Fe(7.2,.9,0,1.9)],[-2.85,-.95,.95,2.85].forEach((i,e)=>[-1.3,.55].forEach((t,n)=>{let s=(e+n)%2?2.7:2.2;_c.push(y("cream",[i,s/2,t],[1.5,s,1.3]),...Qt(i,t,1.5,1.3,.55,s-.3,.5),y("white",[i,s+.04,t],[1.56,.08,1.36]))})),_c.push(y("stone",[-1.9,.17,2.3],[2.4,.34,.14]),...$t(3.3,2.1,1.6)),_c),abjHospital:[nt(6.8,4.8),Fe(4,1.6,0,1.6),y("white",[0,1.25,-.9],[6,2.5,2.4]),...Qt(0,-.9,6,2.4,.6,2.1,.5,"windowLight"),y("teal",[0,2.56,-.9],[6.1,.12,2.5]),y("white",[0,.8,.75],[2.2,.08,.9]),Z("white",[-1,.4,1.15],.04,.8,"cyl8"),Z("white",[1,.4,1.15],.04,.8,"cyl8"),y("red",[0,1.95,.34],[.55,.16,.04]),y("red",[0,1.95,.34],[.16,.55,.04]),Z("concrete",[1.8,2.64,-.9],.7,.04),y("white",[1.62,2.67,-.9],[.06,.01,.5]),y("white",[1.98,2.67,-.9],[.06,.01,.5]),y("white",[1.8,2.67,-.9],[.36,.01,.06]),y("white",[-1.8,.22,1.75],[.7,.32,.36]),y("red",[-1.8,.26,1.75],[.72,.06,.37]),...xe(-3,1.9),...xe(3,1.9)],abjSilverbird:[Fe(5.8,4.8),y("deepGlass",[-.6,1.15,-.5],[3.8,2.3,2.8]),y("silver",[-.6,2.35,-.5],[3.9,.1,2.9]),y("silver",[-.6,1.25,.93],[3.9,.06,.06]),Z("glass",[1.7,1.45,.4],1,2.9),Z("silver",[1.7,2.95,.4],1.05,.1),y("red",[-.6,.045,1.7],[1,.01,1.5]),y("silver",[-.6,.95,1.25],[1.8,.07,.75]),Z("silver",[-1.4,.47,1.55],.03,.94,"cyl8"),Z("silver",[.2,.47,1.55],.03,.94,"cyl8"),...[1.2,1.8,2.3].flatMap(i=>[Z("gold",[-1.2,.15,i],.03,.3,"cyl8"),Z("gold",[0,.15,i],.03,.3,"cyl8")]),...Ve(-2.6,1.9)],abjCeddi:(function(){let i=[Fe(6.8,4.8),y("cream",[0,.95,-.9],[6.2,1.9,2.6]),y("glass",[0,.85,.42],[5.8,1.3,.04]),y("deepGlass",[0,1.4,.55],[1.6,2.8,.7]),y("white",[0,2.86,.55],[1.8,.12,.9]),y("white",[0,1.95,-.9],[6.4,.12,2.8]),Z("stone",[-2.2,.08,1.7],.5,.08),Z("water",[-2.2,.125,1.7],.42,.03),...Ve(2.9,1.9),...Ve(1.5,1.95),...mt(-.6,1.8,0,"carWhite"),...mt(.2,1.8,0,"carGreen")];for(let e=0;e<9;e++)Math.abs(-2.8+.7*e)>.9&&i.push(y("white",[-2.8+.7*e,.95,.47],[.08,1.9,.1]));return i})(),abjArtsVillage:(function(){let i=[nt(5.8,4.8,0,0,"sand")];for(let[e,t]of[[-2.2,-1.4],[-.6,-1.6],[1,-1.5],[2.4,-.6],[-2.4,.4],[-.9,.1],[.8,.4]])i.push(Z("mud",[e,.28,t],.42,.56),cn("thatch",[e,.8,t],.58,.5),y("dark",[e,.2,t+.42],[.18,.32,.02]));for(let[e,t]of(i.push(y("stall3",[-1.6,.025,1.7],[.9,.01,.6]),y("stall4",[.2,.025,1.8],[.9,.01,.6]),y("stall1",[1.9,.025,1.7],[.9,.01,.6])),[[-1.8,1.6],[-1.4,1.8],[0,1.7],[.4,1.9],[1.7,1.6],[2.1,1.8]]))i.push(y("wood",[e,.11,t],[.1,.18,.1]));return i.push(Z("wood",[2.6,.12,1.2],.12,.24,"cyl8"),Z("mud",[2.3,.1,.9],.1,.2,"cyl8"),y("wood",[-.7,.45,2.2],[.06,.9,.06]),y("wood",[.7,.45,2.2],[.06,.9,.06]),...xe(2.5,-2),...xe(-2.6,2,.9)),i})(),abjBanex:(function(){let i=[Fe(5.8,4.8,0,0,"concrete"),y("cream",[0,.85,-.9],[5.4,1.7,2.4]),y("glass",[0,1.25,.32],[5.2,.55,.04]),y("red",[0,.78,.62],[5.4,.05,.6]),y("white",[0,1.75,-.9],[5.5,.1,2.5]),y("wood",[-2.2,.25,1.6],[.8,.5,.45]),y("black",[-2.2,.53,1.6],[.6,.06,.3]),...Rt(-1.4,1.7,"stall3"),...mt(.2,1.8,Math.PI/2,"carSilver"),...mt(1.2,1.8,Math.PI/2,"carGreen"),...mt(2.2,1.8,Math.PI/2,"carBlack")];for(let e=0;e<6;e++)i.push(y(ji[e],[-2.2+.88*e,.38,.32],[.78,.62,.04]));for(let e of[-1.6,0,1.6])i.push(y("silver",[e,1.9,-1.3],[.4,.2,.3]));return i})(),abjWuseMarket:(function(){let i=[Fe(6.8,4.8,0,0,"concrete"),y("cream",[0,.55,-1.4],[6,1.1,1.8]),Mt("roofTin",0,1.1,-1.4,6.3,2.1,.7)];for(let e of[.35,1.55])for(let t=0;t<5;t++)i.push(...qs(-2.6+1.3*t,e,ji[(t+3*(e>1))%6]));return i.push(...Rt(-3,2.15,"stall2"),...Rt(3,2.15,"stall0")),i})(),abjTranscorp:[nt(5.8,4.8),Fe(5.6,1.6,0,1.5),y("cream",[0,.35,-.5],[5,.7,2.8]),y("white",[-.5,3.6,-.9],[3.4,5.8,1.4]),...Qt(-.5,-.9,3.4,1.4,1.1,6.1,.45),y("white",[-.5,6.62,-.9],[2.8,.24,1]),y("pool",[1.6,.72,0],[1.4,.04,1.2]),y("white",[-.5,.9,1.3],[2.2,.08,.9]),Z("white",[-1.4,.45,1.65],.04,.9,"cyl8"),Z("white",[.4,.45,1.65],.04,.9,"cyl8"),...Ve(-2.6,1.9),...Ve(2.6,1.9),...Ve(2.5,-1.9)],abjTechHub:[Fe(5.8,4.8,0,0,"plazaLight"),y("darkGlass",[-.7,1.6,-.6],[3.4,3.2,2.4]),y("white",[.9,2.5,-.3],[2.6,1,2.6]),Z("white",[1.9,1,.7],.08,2,"cyl8"),y("hubGreen",[-.7,3.25,-.6],[3.5,.1,2.5]),...[[-1.8,-1.2],[-1,-.2],[-.2,-1.3],[-1.6,.2]].map(([i,e])=>We("ico","bush",[i,3.42,e],[.25,.2,.25])),...[-.2,.6,1.4].map(i=>y("solar",[i+.5,3.08,-.3],[.6,.04,.9],[.3,0,0])),y("glass",[-.7,.5,.62],[2,.9,.04]),y("wood",[1.8,.15,1.8],[1,.06,.3]),...xe(-2.5,1.9),...xe(2.5,-1.9)],abjNovare:(function(){let i=[Fe(7.8,6.8),y("asphalt",[0,.045,2.45],[7,.01,1.6]),y("white",[0,1,-1.4],[7,2,3.4]),We("halfCyl","glass",[0,1,.3],[1.3,2,3.3],[0,-Math.PI/2,0]),We("halfCyl","white",[0,2.08,.3],[1.45,.12,3.45],[0,-Math.PI/2,0]),y("white",[0,2.06,-1.4],[7.1,.12,3.5]),y("silver",[2.3,1.5,-2.2],[2.2,3,1.6]),y("dark",[0,.45,1.62],[1.2,.9,.04]),...Ve(-3.6,1.4),...Ve(3.6,1.4),...$t(-3.7,3.1,1.8)];for(let e=0;e<9;e++)i.push(y("white",[-3.2+.8*e,.055,2.45],[.04,.01,1.2]));return[-2.8,-1.2,.4,2,2.8].forEach((e,t)=>i.push(...mt(e,2.45,0,["carWhite","carBlack","carGreen","carSilver","carRed"][t]))),i})(),abjLounge:[Fe(4.8,4.3,0,0,"darkPaving"),y("dark",[0,.85,-.6],[3.8,1.7,2.4]),y("neonPink",[0,1.5,.62],[3.6,.06,.04]),y("neonGreen",[0,.2,.62],[3.6,.04,.04]),y("neonPink",[-1.85,.85,.62],[.05,1.3,.04]),y("neonPink",[1.85,.85,.62],[.05,1.3,.04]),y("gold",[0,.95,.95],[1.4,.06,.7]),y("red",[0,.045,1.4],[.8,.01,1.2]),...[[-.55,1.1],[.55,1.1],[-.55,1.7],[.55,1.7]].map(([i,e])=>Z("gold",[i,.18,e],.03,.36,"cyl8")),...Ve(-2,1.6),...Ve(2,1.6),...Rt(-1.3,1.6,"stall4"),...Rt(1.3,1.6,"stall0")],abjUnityFountain:(function(){let i=[nt(5.8,5.8),Z("plaza",[0,.02,0],2.85,.04),Z("stone",[0,.13,0],1.9,.22),Z("water",[0,.25,0],1.75,.02),Z("white",[0,.7,0],.2,.9),Z("white",[0,1.18,0],.45,.06),y("stone",[0,.17,2.68],[2.2,.34,.12]),...Jt(-2.3,-2.3,.9,.9,6,3),...Jt(2.3,-2.3,.9,.9,6,4),...Jt(-2.3,2.3,.9,.9,6,5),...Jt(2.3,2.3,.9,.9,6,6)];for(let e=0;e<18;e++){let t=e/18*Math.PI*2,n=2.5*Math.cos(t),s=2.5*Math.sin(t);i.push(Z("silver",[n,.75,s],.025,1.5,"cyl8"),y(e%3==0?"green":ji[e%6],[n+.13,1.36,s],[.26,.18,.015]))}return i})(),abjMillenniumPark:(function(){let i=[nt(9.8,7.8,0,0,"lawnLight")],e=[[-4.6,-.6],[-.8,-1.6],[2.2,-.4],[4.4,1.8]];for(let t=0;t<3;t++){let[n,s]=e[t],[r,a]=e[t+1];i.push(y("water",[(n+r)/2,.035,(s+a)/2],[Math.hypot(r-n,a-s),.03,.6],[0,Math.atan2(-(a-s),r-n),0]))}i.push(Z("water",[-.8,.035,-1.6],.3,.03),Z("water",[2.2,.035,-.4],.3,.03),Z("water",[4.4,.035,1.8],.7,.03)),i.push(y("gravel",[0,.025,2.9],[9.2,.03,.4]),y("gravel",[-2.2,.025,.4],[.4,.03,6.6]),y("white",[-2.2,.085,-1.23],[.55,.05,1])),i.push(Z("stone",[-4,.04,-2.3],.85,.06));for(let t=0;t<6;t++){let n=t/6*Math.PI*2;i.push(Z("white",[-4+.65*Math.cos(n),.48,-2.3+.65*Math.sin(n)],.05,.9,"cyl8"))}for(let[t,n,s]of(i.push(Gi("white",[-4,.92,-2.3],[.78,.55,.78])),[[-2.9,-3.4,1.1],[-.6,-3.2,1.2],[1.4,-3.3,1],[3.4,-3.1,1.2],[4.4,-1.6,1],[-4.4,1.2,1.1],[-3.6,3.5,1],[.8,1.6,1.1],[2.6,1.6,.9],[-.8,1.2,1],[4.2,3.4,1],[1.8,3.5,1.1]]))i.push(...xe(t,n,s,s>1.05?"leafDark":"leaf"));return i.push(...Jt(-.5,2.45,3,.4,10,7),...Jt(3,2.45,2,.4,7,8),y("stone",[-3.2,.17,3.7],[2.6,.34,.14])),i})(),abjGolf:(function(){let i=[nt(10.8,8.8,0,0,"fairway")];for(let[e,t,n]of[[-3.5,-2.6,1],[1,-3,.9],[3.6,.4,1]])i.push(Z("green2",[e,.025,t],n,.01),Z("white",[e,.4,t],.015,.8,"cyl8"),y("red",[e+.12,.72,t],[.24,.15,.01]));for(let[e,t,n,s]of[[-2,-1.4,.55,.32],[2.4,-2.2,.45,.3],[1.6,1.6,.5,.35],[-4.4,-.8,.4,.3]])i.push(We("cyl","sand",[e,.025,t],[n,.01,s]));for(let[e,t]of(i.push(We("cyl","water",[-1.6,.035,2],[1.6,.03,.9])),i.push(y("green2",[-4.6,.025,3.4],[.7,.01,.45]),y("green2",[-.2,.025,3.6],[.7,.01,.45])),i.push(y("cream",[3.4,.5,3],[3.2,1,1.6]),Mt("roofGreen",3.4,1,3,3.4,1.8,.45),y("wood",[3.4,.04,4.05],[3,.08,.5]),...qt(2.1,4.7,5,4.2,.9,.08,.04)),i.push(y("white",[1.3,.12,4],[.3,.16,.45]),y("white",[.8,.12,4],[.3,.16,.45]),y("stone",[-4.2,.25,4.05],[2.2,.5,.2])),[[-5.1,-4.1],[-3,-4.15],[-.8,-4.1],[1.6,-4.15],[3.6,-4.1],[5.1,-3],[5.1,-1.2],[5.1,1.2],[-5.1,-2],[-5.1,.4],[-5.1,2.2],[.6,0],[-2.8,.8]]))i.push(...xe(e,t,1.1,"leafDark"));return i})(),abjClub:[Fe(5.8,4.8,0,0,"darkPaving"),y("black",[0,1.1,-.7],[5,2.2,2.6]),y("neonPink",[0,2.12,.62],[5,.06,.04]),y("neonBlue",[-2.48,1.1,.62],[.06,2,.04]),y("neonBlue",[2.48,1.1,.62],[.06,2,.04]),y("gold",[0,.9,1],[1.8,.07,.8]),Z("gold",[-.8,.45,1.35],.03,.9,"cyl8"),Z("gold",[.8,.45,1.35],.03,.9,"cyl8"),y("red",[0,.045,1.6],[1,.01,1.6]),...[1.2,1.7,2.2].flatMap(i=>[Z("gold",[-.65,.18,i],.03,.36,"cyl8"),Z("gold",[.65,.18,i],.03,.36,"cyl8")]),Z("silver",[-2,2.35,-1.6],.18,.3),Z("silver",[2,2.35,-1.6],.18,.3),cn("beam",[-2.28,3.77,-1.6],.45,2.6,"cone8",[Math.PI,0,-.22]),cn("beam",[2.28,3.77,-1.6],.45,2.6,"cone8",[Math.PI,0,.22]),...mt(-2.1,1.7,.3,"carBlack"),...mt(2.1,1.7,-.3,"carWhite")],abjRooftop:(function(){let i=[Fe(4.3,4.3,0,0,"plazaLight"),y("white",[0,3.1,-.3],[3,6.2,3]),y("deepGlass",[0,3.1,1.22],[2.4,5.6,.04]),y("deepGlass",[1.52,3.1,-.3],[.04,5.6,2.4]),y("wood",[0,6.26,-.3],[3.1,.12,3.1]),y("balGlass",[0,6.52,1.22],[3.1,.4,.03]),y("balGlass",[-1.53,6.52,-.3],[.03,.4,3.1]),y("balGlass",[1.53,6.52,-.3],[.03,.4,3.1]),y("balGlass",[0,6.52,-1.82],[3.1,.4,.03]),y("pool",[-.6,6.335,-.9],[1.4,.03,1]),y("dark",[.8,6.55,-1.3],[1,.45,.35]),y("lamp",[0,6.95,.6],[2.8,.03,.03]),y("gold",[0,.7,1.65],[1.6,.06,.8]),Z("gold",[-.7,.35,1.95],.03,.7,"cyl8"),Z("gold",[.7,.35,1.95],.03,.7,"cyl8"),...Ve(-1.8,1.85,1.1),...Ve(1.8,1.85,1.1)];for(let[e,t,n]of[[-.9,.5,"stall0"],[.5,.5,"stall3"],[1,-.4,"stall5"]])i.push(...Rt(e,t,n,.5,6.32));return i})(),abjJabiLake:(function(){let i=[Fe(6.8,4.8),y("asphalt",[1.1,.045,1.65],[4.2,.01,1.3]),y("cream",[.6,.65,-1],[5.4,1.3,2.4]),y("glass",[.6,.6,.22],[4.8,.9,.04]),y("white",[.6,1.36,-1],[5.6,.12,2.6]),Z("glass",[-.6,1,-.2],.75,2),Z("white",[-.6,2.05,-.2],.8,.1),y("wood",[-3.4,.06,-.6],[1.6,.04,.8]),...Ve(-2.7,1.6),...Ve(-2.7,-1.9),...Ve(3.1,1.95)];for(let e=0;e<6;e++)i.push(y("white",[-.7+.75*e,.055,1.65],[.04,.01,1]));return[-.3,.45,1.95,2.7].forEach((e,t)=>i.push(...mt(e,1.65,0,["carSilver","carWhite","carBlue","carGreen"][t]))),i})(),abjZoo:[nt(6.8,4.8),y("gravel",[0,.025,.4],[6.4,.03,.5]),y("gravel",[0,.025,1.4],[.5,.03,2]),y("sandDark",[-2.1,.025,-1.3],[2.2,.01,1.9]),y("sandDark",[.3,.025,-1.3],[2.2,.01,1.9]),y("sandDark",[2.5,.025,-1.3],[1.7,.01,1.9]),...Vr(-3.2,-1,-2.25,-.35),...Vr(-.8,1.4,-2.25,-.35),...Vr(1.65,3.35,-2.25,-.35),We("sphere","elephant",[-2.2,.42,-1.3],[.42,.3,.28]),We("sphere","elephant",[-1.75,.52,-1.3],[.18,.18,.18]),Z("elephant",[-1.6,.32,-1.3],.05,.3,"cyl8",[0,0,.3]),y("elephant",[-1.82,.54,-1.3],[.04,.22,.34]),...[[-2.45,-1.45],[-2.45,-1.15],[-1.95,-1.45],[-1.95,-1.15]].map(([i,e])=>Z("elephant",[i,.12,e],.07,.24,"cyl8")),y("giraffe",[.3,.62,-1.3],[.5,.28,.22]),...[[.1,-1.38],[.1,-1.22],[.5,-1.38],[.5,-1.22]].map(([i,e])=>y("giraffe",[i,.25,e],[.05,.5,.05])),y("giraffe",[.58,1,-1.3],[.09,.62,.09],[0,0,-.35]),y("giraffe",[.74,1.32,-1.3],[.2,.09,.09]),y("lion",[2.4,.24,-1.2],[.5,.22,.22]),We("sphere","mane",[2.72,.3,-1.2],[.17,.17,.17]),We("sphere","lion",[2.84,.3,-1.2],[.1,.1,.1]),...[[2.2,-1.3],[2.2,-1.1],[2.6,-1.3],[2.6,-1.1]].map(([i,e])=>y("lion",[i,.08,e],[.06,.16,.06])),Z("water",[-2.4,.035,1.6],.7,.03),We("sphere","white",[-2.5,.08,1.5],[.08,.06,.12]),We("sphere","white",[-2.2,.08,1.75],[.08,.06,.12]),y("red",[2.2,.35,1.6],[.25,.04,.9],[.5,0,0]),y("stall1",[2.2,.4,1.12],[.3,.8,.1]),Z("stall3",[1.1,.06,1.8],.35,.06),y("stall2",[1.1,.25,1.8],[.04,.3,.6]),y("stall2",[-.6,.55,2.3],[.16,1.1,.16]),y("stall2",[.6,.55,2.3],[.16,1.1,.16]),y("stall3",[0,1.15,2.3],[1.5,.14,.18]),...xe(-3.1,.9),...xe(3.1,.6),...xe(-1,2,.9)],abjZumaRock:[nt(4.8,4.8,0,0,"lawnDry"),Fe(1.2,4.2,1.2,.2,"gravel"),Z("mud",[-1.2,.3,-1.1],.5,.6),cn("thatch",[-1.2,.85,-1.1],.68,.55),y("wood",[-1,.25,1.1],[1,.5,.5]),y("black",[-1,.53,1.1],[.7,.06,.32]),...Rt(-1.7,1.5,"stall3"),We("rock","granite",[1.6,.35,-1.5],[.7,.6,.6],[.3,.5,.1]),We("rock","graniteLight",[-2,.25,.4],[.5,.4,.45],[.1,.8,.2]),y("wood",[2,.2,1.5],[.9,.06,.3]),y("wood",[.4,.45,2.2],[.06,.9,.06]),...xe(1.9,.2),...xe(-2,-2)],abjMotors:(function(){let i=[Fe(8.8,5.3,0,0,"plazaLight"),y("white",[0,.06,-.8],[7.4,.12,3]),y("showGlass",[0,.95,-.8],[7.2,1.66,2.8]),y("white",[0,1.86,-.8],[7.8,.16,3.4]),y("silver",[0,1.98,-.8],[7,.06,.25]),...[-3.55,3.55].flatMap(e=>[Z("white",[e,.95,.55],.06,1.66,"cyl8"),Z("white",[e,.95,-2.15],.06,1.66,"cyl8")]),y("silver",[2.6,.7,-2.45],[2.6,1.4,.5]),Z("silver",[-3.4,.06,1.65],.55,.08)];for(let[e,t]of[[-4,0],[-1.3,2],[1.4,3],[4.1,5]])i.push(Z("silver",[e,.8,2.5],.02,1.6,"cyl8"),y(ji[t],[e+.12,1.15,2.5],[.22,.9,.01]));return i})(),abjStadium:(function(){let i=[Z("plaza",[0,.02,0],4.1,.04),We("bowlWall","wall",[0,.65,0],[3.8,1.3,3.8]),We("bowlSeats","seats",[0,.62,0],[3.7,1.16,3.7]),Z("track",[0,.05,0],2.45,.04),y("pitch",[0,.075,0],[2.7,.02,1.75]),y("white",[0,.09,0],[.04,.01,1.75]),y("white",[-1.2,.09,0],[.04,.01,.8]),y("white",[1.2,.09,0],[.04,.01,.8]),We("ring","canopy",[0,1.42,0],[3.95,3.95,1],[-Math.PI/2,0,-.35])];for(let e=0;e<=6;e++){let t=-.35+e/6*Math.PI*1.15;i.push(Z("white",[3.85*Math.cos(t),.71,-(3.85*Math.sin(t))],.05,1.42,"cyl8"))}for(let[e,t]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let n=2.85*e,s=2.85*t;i.push(Z("steel",[n,1.6,s],.06,3.2,"cyl8"),y("lamp",[n,3.25,s],[.6,.3,.12],[0,Math.atan2(-n,-s),0]))}return i})(),abjMagicLand:[nt(5.3,5.3,0,0,"lawnLight"),y("gravel",[0,.025,.4],[5,.03,.6]),y("gravel",[.2,.025,1.6],[.6,.03,2]),We("torus","track",[1.5,1,-1.5],[.75,.75,.75]),y("track",[1.5,.08,-1.5],[2.2,.06,.12]),y("track",[.2,.55,-2.1],[1.5,.06,.12],[0,0,.55]),Z("silver",[.9,.5,-1.5],.04,1,"cyl8"),Z("silver",[2.1,.5,-1.5],.04,1,"cyl8"),Z("silver",[-.3,.3,-2.1],.04,.6,"cyl8"),y("concrete",[-1.6,.05,1.6],[1.6,.06,1.4]),y("stall4",[-1.6,.9,1.6],[1.7,.06,1.5]),...[[-2.35,.95],[-.85,.95],[-2.35,2.25],[-.85,2.25]].map(([i,e])=>Z("silver",[i,.45,e],.03,.9,"cyl8")),y("stall0",[-2,.14,1.4],[.3,.12,.42],[0,.6,0]),y("stall1",[-1.3,.14,1.9],[.3,.12,.42],[0,-.4,0]),y("stall2",[-1.7,.14,2],[.3,.12,.42],[0,1.4,0]),y("neonPink",[-.5,.55,2.55],[.12,1.1,.12]),y("neonPink",[.9,.55,2.55],[.12,1.1,.12]),...xe(-2.3,-.4)],abjCityGate:(function(){let i=[Fe(4.2,4.2),y("lawn",[-1.3,.045,1.3],[1.2,.01,1.2]),y("lawn",[1.3,.045,1.3],[1.2,.01,1.2]),...Jt(-1.3,1.3,1,1,6,9,.05),...Jt(1.3,1.3,1,1,6,10,.05)];for(let e of[-.6,.6]){for(let t of[-6.7,-1.2999999999999998])i.push(y("white",[e,1.5,t],[.46,3,.46]));i.push(y("white",[e,3.15,-4],[.46,.34,5.86]),y("green",[e,2.88,-4],[.5,.12,5.5]))}for(let e of[-6.7,-1.2999999999999998])i.push(y("stone",[0,.14,e],[1.9,.44,.9]),y("white",[0,3.15,e],[1.66,.3,.46]));return i.push(Mt("white",0,3.32,-4,1.7,2.4,1),cn("gold",[0,4.5,-4],.12,.4),y("stone",[0,.22,1.95],[2.6,.44,.14]),...$t(-1.9,1.5,2.2),...$t(1.1,1.5,2.2)),i})(),abjUniAbuja:[nt(9.8,8.8),...xe(-4.5,-3.8),...xe(0,-3.9,.9),...xe(4.5,-3.8),...xe(-4.5,1.5,.9),...xe(4.5,1.5,.9),...xe(-4.4,4,.9),...xe(4.4,4,.9),y("gravel",[0,.025,.6],[7,.03,.5]),y("gravel",[0,.025,2.1],[.5,.03,2.6]),y("white",[0,1.4,-2],[3.2,2.8,1.6]),...Qt(0,-2,3.2,1.6,.6,2.4,.6,"window"),y("uniBlue",[0,2.9,-2],[3.3,.18,1.7]),...qt(-.9,.9,4,-1.05,1),y("white",[0,1.05,-.95],[2.1,.1,.4]),y("cream",[-2.9,.6,-1.6],[1.6,1.2,2.4]),Mt("roofRed",-2.9,1.2,-1.6,1.8,2.6,.5),y("cream",[2.9,.6,-1.6],[1.6,1.2,2.4]),Mt("roofRed",2.9,1.2,-1.6,1.8,2.6,.5),y("windowLight",[2.6,.7,1.6],[2,1.4,1.4]),y("white",[2.6,1.44,1.6],[2.1,.08,1.5]),y("pitch",[-2.4,.035,1.8],[2.6,.03,1.8]),y("white",[-2.4,.055,1.8],[.04,.01,1.8]),y("white",[-3.62,.25,1.8],[.04,.5,.6]),y("white",[-1.18,.25,1.8],[.04,.5,.6]),y("uniBlue",[-1,.5,3.2],[.3,1,.3]),y("uniBlue",[1,.5,3.2],[.3,1,.3]),y("white",[0,1.05,3.2],[2.3,.18,.3]),...xe(-3.5,-.2),...xe(3.6,.2),...xe(-3.6,3),...xe(3.5,3),...xe(.9,-.2,.9)],abjGwagwalada:[Fe(6.8,4.8,0,0,"concrete"),y("cream",[-1.6,.6,-1.2],[3,1.2,1.8]),Mt("roofTile",-1.6,1.2,-1.2,3.2,2,.6),...qt(-2.7,-.5,5,-.2,.9),y("white",[1.6,1.3,-1.4],[.8,2.6,.8]),Z("cream",[1.6,2.2,-.99],.25,.04,"cyl",[Math.PI/2,0,0]),y("black",[1.6,2.24,-.96],[.03,.18,.01]),Mt("roofTile",1.6,2.6,-1.4,1,1,.5),...qs(-2.6,1.1,"stall0"),...qs(-1.3,1.1,"stall3"),...qs(0,1.1,"stall5"),...mt(1.4,1.9,Math.PI/2,"carGreen"),...mt(2.4,1.9,Math.PI/2,"carGreen"),...mt(1.4,1.1,Math.PI/2,"carWhite"),...xe(-3,1.9,1.1),...xe(3,-1.6,1.1)],home_abjKubwa:[nt(4.3,4.3),Fe(1,1.9,1.2,1.15,"concrete"),y("cream",[-.4,.45,-.5],[2.4,.9,1.8]),Mt("roofRed",-.4,.9,-.5,2.7,2.1,.65),y("dark",[-.4,.3,.42],[.36,.6,.04]),y("window",[-1.1,.5,.42],[.4,.3,.04]),y("window",[.3,.5,.42],[.4,.3,.04]),y("concrete",[1.4,.42,-1.3],[.45,.84,.45]),Z("tank",[1.4,1.1,-1.3],.28,.5),y("cream",[-2.08,.22,0],[.12,.44,4.2]),y("cream",[2.08,.22,0],[.12,.44,4.2]),y("cream",[0,.22,-2.08],[4.2,.44,.12]),y("cream",[-1.1,.22,2.08],[2,.44,.12]),y("black",[1.2,.2,2.08],[1,.4,.06]),...mt(1.2,1.2,0,"carGreen"),...xe(-1.5,1.3,.9)],home_abjGwarinpa:[nt(4.3,4.3),Fe(1,1.9,1.2,1.15,"concrete"),y("cream",[-.4,.8,-.5],[2.4,1.6,1.8]),...Qt(-.4,-.5,2.4,1.8,.5,1.2,.7,"window"),y("white",[-.4,.95,.52],[1.4,.06,.4]),y("balGlass",[-.4,1.08,.72],[1.4,.22,.02]),Mt("roofTile",-.4,1.6,-.5,2.7,2.1,.6),y("stone",[-2.08,.25,0],[.12,.5,4.2]),y("stone",[2.08,.25,0],[.12,.5,4.2]),y("stone",[0,.25,-2.08],[4.2,.5,.12]),y("stone",[-1.1,.25,2.08],[2,.5,.12]),...mt(1.2,1.2,0,"carSilver"),...xe(-1.6,1.4,.9)],home_abjWuse2:(function(){let i=[nt(3.8,3.8),Fe(3.6,.9,0,1.4,"concrete"),y("white",[0,1.15,-.5],[3,2.3,1.8]),y("silver",[0,2.34,-.5],[3.1,.08,1.9])];for(let e of[.55,1.15,1.75])i.push(y("windowLight",[0,e+.18,.42],[2.6,.3,.04]),y("white",[0,e,.55],[2.6,.06,.3]),y("balGlass",[0,e+.13,.69],[2.6,.22,.02]));return i.push(...mt(-.9,1.4,Math.PI/2,"carBlue"),...mt(.6,1.4,Math.PI/2,"carWhite"),...xe(-1.55,-1.55,.8),...xe(1.55,-1.55,.8)),i})(),home_abjMaitama:[nt(4.3,4.3,0,0,"lawnLight"),y("white",[-.5,.75,-.7],[2.6,1.5,1.8]),y("white",[.95,.45,-.4],[1.2,.9,1.4]),y("white",[-.5,1.54,-.7],[2.7,.08,1.9]),y("white",[.95,.94,-.4],[1.3,.08,1.5]),y("glass",[-.5,.75,.22],[2.2,1.1,.04]),y("plazaLight",[.9,.025,1.15],[1.9,.03,1.3]),Vi(1.4,.8,.9,1.15,.055,"pool"),ii(-2,0,.2,4),ii(2,0,.2,4),ii(0,-2,4,.2),...Ve(-1.4,1.4,1.3),...Ve(1.8,-1.6,1.2),...Jt(-.8,1.6,1,.4,6,11)],home_abjAsokoro:[nt(4.3,4.3,0,0,"lawnLight"),Fe(3.2,1,0,1.6,"plazaLight"),y("cream",[0,.9,-.8],[3.2,1.8,1.8]),...qt(-.8,.8,4,.3,1.5),y("white",[0,1.58,.35],[2,.12,.7]),Mt("white",0,1.64,.35,2,.7,.35),Mt("roofTile",0,1.8,-.8,3.5,2.1,.7),Z("stone",[0,.1,1.6],.4,.12),Z("water",[0,.17,1.6],.34,.02),Vi(1,.6,1.5,-1.6,.05,"pool"),...Ve(-1.8,1.6,1.4),...Ve(1.8,1.6,1.4),y("stone",[-1.6,.35,2.05],[.3,.7,.3]),y("stone",[1.6,.35,2.05],[.3,.7,.3]),...mt(-1,1.6,Math.PI/2,"carBlack")]},Kp=[We("rock","granite",[0,1.8,0],[9,6.8,6.8],[.2,.5,.1]),We("rock","graniteLight",[-2.9,2.3,2.7],[6.1,8.3,5.2],[.4,1.2,0]),We("rock","graniteDark",[4.3,1.3,-3.6],[5.6,5,4.9],[.1,2.2,.3]),We("rock","granite",[-5.6,.2,-1.1],[4,3.1,3.8],[.6,.3,.2]),We("rock","graniteDark",[2.9,.4,4.7],[4,2.9,3.2],[.3,.9,.5]),We("rock","graniteLight",[6.8,.5,1.8],[3.6,4,3.6],[.7,.4,.1]),...[[-8.2,4,1],[-5,6.9,.9],[-.6,7.6,1],[4.8,7,.8],[8.4,4.6,.9],[-9,.6,1.1],[-8.2,-3.8,1],[9.2,-2,.9]].map(([i,e,t])=>Gi("bush",[i,0,e],[t,.8*t,t]))],Zp=[We("mono","granite",[0,5,0],[5.8,10,6.6]),Gi("graniteLight",[0,9.95,0],[4.55,3,5.2]),...[[-1.9,6.2,.22],[.1,6.8,.04],[2,5.9,-.2]].map(([i,e,t])=>y("streak",[i,e,Math.sqrt(33.0625-i*i)-.05],[.44,5.2,.16],[-.12,0,t])),y("streak",[5.2,6.4,1.2],[.16,4.4,.6],[0,0,.12]),...[[6,4,1.8],[-6.2,2.8,1.6],[3.6,6.8,1.2],[-4,6.4,1.4],[6.8,-3,1.6]].map(([i,e,t],n)=>We("rock",n%2?"graniteDark":"granite",[i,.3*t,e],[t,.7*t,t],[n,.7*n,0])),...[[-7.2,.4,1.2],[7.8,.8,1.1],[1.2,7.8,1],[-2,8,.9],[5.4,6,1]].map(([i,e,t])=>Gi("bush",[i,0,e],[t,.8*t,t]))],Jp=[nt(6.2,4.6),y("stone",[0,.08,.2],[4.4,.16,2.6]),y("white",[0,.7,-.2],[3.6,1.1,1.6]),y("green",[0,1.3,-.2],[3.7,.1,1.7]),Gi("domeGreen",[0,1.35,-.2],[.55,.5,.55]),...qt(-1.5,1.5,7,.7,1,.16,.05),...$t(2.2,1.6,2),ii(0,-2.15,6,.25),ii(-3,0,.25,4.3),ii(3,0,.25,4.3),Z("stone",[0,.1,1.7],.45,.12),Z("water",[0,.17,1.7],.38,.02)];var Qp,Bn=Math.PI;function Ku(i,e,t,n,s){let r=[Fe(i-.2,e-.2,0,0,"plazaLight"),y("white",[0,.06,-.7],[i-1.4,.12,.5*e]),y(t,[0,.9,-.7],[i-1.6,1.56,.5*e-.2]),y("white",[0,1.76,-.7],[i-1,.16,.5*e+.4]),y(n,[0,1.88,-.7+.25*e+.15],[i-1.2,.06,.06])];for(let a of[-(i-1.6)/2,(i-1.6)/2])r.push(Z("white",[a,.9,-.7+.25*e],.05,1.56,"cyl8"));for(let[a,o]of(s.slice(0,3).forEach((l,c)=>r.push(...mt(-1.6+1.6*c,-.8,.5,l))),s.slice(3).forEach((l,c)=>r.push(...mt(-(i/2)+1+1.1*c,e/2-.9,.35,l))),[[-(i/2)+.4,1],[i/2-.4,3]]))r.push(Z("silver",[a,.7,e/2-.4],.02,1.4,"cyl8"),y(ji[o],[a+.11,1,e/2-.4],[.2,.8,.01]));return r}function e0(i,e,t){return[nt(i-.2,e-.2,0,0,"lawnLight"),y("white",[-.4,.55,-.6],[i-1.8,1.1,.5*e]),y(t,[-.4,1.12,-.6],[i-1.7,.08,.5*e+.1]),y("wood",[-.4,.5,-.6+.25*e+.01],[.4*i,.8,.02]),Vi(1.2,.7,i/2-1.1,.6,.055,"pool"),y("wood",[i/2-1.1,.025,1.15],[1.4,.03,.3]),ii(0,e/2-.2,i-.6,.2),...Ve(-(i/2)+.5,1,1.2),...Ve(i/2-.4,-(e/2)+.5,1.3),...Jt(-.6,1,1.4,.4,6,27)]}function t0(i,e,t){return[Fe(i-.2,e-.2,0,0,"concrete"),y("concrete",[0,.8,-.5],[i-1,1.6,.55*e]),y("glass",[0,.75,-.5+.275*e+.01],[i-1.4,1.1,.02]),y(t,[0,1.62,-.5],[i-.9,.1,.55*e+.1]),y("black",[-(i/2)+1.2,.35,-.5+.275*e+.03],[.5,.3,.02]),...[-.6,-.3,0,.3].map(n=>Z("steel",[n+i/2-1.4,.12,e/2-.5],.1,.02,"cyl8",[Bn/2,0,0])),...mt(-(i/2)+1,e/2-.6,Bn/2,"carSilver"),...xe(i/2-.4,-(e/2)+.5,.9)]}var n0={abjIdu:(function(){let i=[Fe(9.8,4.8,0,0,"concrete"),y("gravel",[0,.05,-1.6],[9.6,.02,1])];for(let e of[-1.8,-1.4])i.push(y("steel",[0,.075,e],[9.6,.03,.05]));for(let e of[-3.1,-.4,2.3])i.push(y("white",[e,.42,-1.6],[2.5,.6,.6]),y("green",[e,.28,-1.295],[2.5,.1,.02]),y("window",[e,.53,-1.295],[2.3,.13,.02]),y("concrete",[e,.74,-1.6],[2.44,.04,.54]));for(let e of(i.push(y("green",[4.15,.44,-1.6],[1.1,.64,.6]),y("darkGlass",[4.71,.56,-1.6],[.02,.22,.46]),y("red",[4.15,.24,-1.295],[1.1,.06,.02])),i.push(y("plazaLight",[0,.08,-.65],[9,.08,.8]),y("white",[0,1.02,-.65],[8.6,.06,.9]),...qt(-4,4,6,-.3,.96,.08,.04,"steel")),i.push(y("cream",[-2.6,.62,1.2],[3.6,1.24,1.5]),...Qt(-2.6,1.2,3.6,1.5,.45,.95,.5,"windowLight"),y("green",[-2.6,1.28,1.2],[3.7,.1,1.6]),y("dark",[-2.6,.32,1.96],[.6,.6,.02])),[1.25,1.55]))i.push(y("steel",[2.6,.06,e],[4,.02,.04]));return i.push(y("white",[2.4,.36,1.4],[1.7,.44,.42]),y("green",[2.4,.24,1.615],[1.7,.08,.01]),y("window",[2.4,.44,1.615],[1.5,.12,.01])),i.push(...$t(4.5,2,1.6),...Ve(-4.6,1.9),...Ve(.2,2.1,1.1)),i})(),abjJabiPark:(function(){let i=[Fe(7.6,4.4,0,0,"concrete"),y("asphalt",[.6,.045,-.6],[6.2,.01,2.6])];for(let e=0;e<5;e++)i.push(y("white",[-2+1.3*e,.055,-.6],[.04,.01,2.2]));return[[-1.35,"red"],[-.05,"carBlue"],[1.25,"red"],[2.55,"carGreen"]].forEach(([e,t])=>i.push(y("white",[e,.33,-.75],[.56,.5,1.7]),y(t,[e,.2,-.75],[.57,.08,1.71]),y("window",[e,.45,-.75],[.57,.12,1.5]),y("window",[e,.42,.105],[.46,.2,.01]))),i.push(y("roofTin",[-3.1,.92,-.5],[1.2,.06,3]),...qt(-1.8,.8,3,0,.9,0,.03,"steel").map(e=>({...e,p:[-3.55,e.p[1],e.p[0]]})),...qt(-1.8,.8,3,0,.9,0,.03,"steel").map(e=>({...e,p:[-2.65,e.p[1],e.p[0]]})),y("wood",[-3.1,.15,-.5],[.3,.06,2.4])),i.push(...qs(2.6,1.55,"stall0"),...Rt(-.9,1.55,"stall2"),...mt(.7,1.6,Bn/2,"carGreen"),...xe(-3.2,1.7),...xe(3.4,-1.8,.9)),i})(),abj345:[Fe(6.4,3.7,0,0,"darkPaving"),y("black",[0,.9,-.5],[5.4,1.8,2]),y("lamp",[0,1.78,.51],[5.4,.05,.03]),y("stall3",[0,1.2,.505],[5.2,.06,.02]),y("stall0",[0,1,.505],[5.2,.06,.02]),Z("stall3",[1.6,2.06,-.6],.5,.5,"cyl",[Bn/2,0,0]),y("gold",[0,.82,.9],[1.6,.06,.7]),Z("gold",[-.7,.4,1.2],.03,.8,"cyl8"),Z("gold",[.7,.4,1.2],.03,.8,"cyl8"),y("red",[0,.045,1.4],[.9,.01,1]),...mt(-2.4,1.3,.3,"carBlack"),...mt(2.4,1.3,-.3,"carWhite"),...Ve(-3,-1.5,1.2)],abjPlay:[Fe(6.4,3.7,0,0,"darkPaving"),y("dark",[0,.7,-.7],[5.2,1.4,1.8]),We("halfCyl","glass",[0,.7,.2],[.7,1.4,2.4],[0,-Bn/2,0]),y("neonPink",[0,1.42,.2],[5.2,.05,.05]),y("stall4",[0,1.45,-.7],[5.3,.08,1.9]),y("neonPink",[-2.58,.7,.2],[.04,1.2,.04]),y("neonPink",[2.58,.7,.2],[.04,1.2,.04]),y("stall4",[0,.9,1.15],[2,.06,.6]),...[[-.6,1.5],[.6,1.5]].map(([i,e])=>Z("silver",[i,.18,e],.03,.36,"cyl8")),...Rt(-2.4,1.4,"stall4"),...Rt(2.4,1.4,"stall0"),...mt(-1.4,1.35,0,"carSilver")],abjMoscow:[Fe(6.4,3.7,0,0,"darkPaving"),y("showGlass",[0,.9,-.5],[4.6,1.8,2]),y("white",[0,.9,-.6],[4.2,1.7,1.6]),y("neonBlue",[0,1.8,.51],[4.6,.05,.03]),y("neonBlue",[0,.06,.51],[4.6,.04,.03]),y("silver",[0,1.84,-.5],[4.7,.08,2.1]),y("asphalt",[0,.045,1.1],[1.4,.01,.9]),y("dark",[0,.12,.9],[1.2,.16,.5]),y("silver",[0,.86,1.05],[1.8,.06,.8]),Z("silver",[-2.6,.2,-1.4],.15,.3),Z("silver",[2.6,.2,-1.4],.15,.3),cn("beam",[-2.85,1.65,-1.4],.4,2.6,"cone8",[Bn,0,-.2]),cn("beam",[2.85,1.65,-1.4],.4,2.6,"cone8",[Bn,0,.2]),...mt(2.4,1.2,-.3,"carBlack"),...mt(-2.4,1.2,.3,"carBlack")],abjTokyo:(function(){let i=[Fe(6.4,3.7,0,0,"darkPaving"),y("black",[0,.75,-.5],[4.8,1.5,2]),Mt("red",0,1.5,-.5,5.4,2.6,.45),y("black",[0,2.15,-.5],[3,.5,1.2]),Mt("red",0,2.4,-.5,3.6,1.8,.4),y("neonPink",[0,1.38,.51],[4.8,.05,.03]),y("red",[0,.045,1.3],[.9,.01,1]),...mt(2.5,1.3,-.3,"carWhite")];for(let e of[-2.1,-1.2,1.2,2.1])i.push(Z("silver",[e,.6,.85],.015,1.2,"cyl8"),We("sphere","red",[e,1.12,.85],[.12,.16,.12]));return i})(),abjMagicCity:[Fe(3.9,4.2,0,0,"darkPaving"),y("dark",[0,1,-.6],[3.4,2,2.4]),...Qt(0,-.6,3.4,2.4,1.3,1.7,.4,"darkGlass"),y("neonPink",[0,.95,.61],[1.6,.05,.03]),y("stall4",[0,.5,.605],[1.4,.9,.02]),y("neonPink",[-.82,.5,.61],[.04,.9,.03]),y("neonPink",[.82,.5,.61],[.04,.9,.03]),y("red",[0,.045,1.2],[.8,.01,1]),...[[-.5,1.1],[.5,1.1],[-.5,1.6],[.5,1.6]].map(([i,e])=>Z("gold",[i,.17,e],.03,.34,"cyl8")),y("black",[1.4,.3,1.3],[.4,.6,.4]),...mt(-1.4,1.4,.2,"carBlack")],abjAbujaCar:[...Ku(7,5,"darkGlass","gold",["carBlack","carRed","carWhite","carBlack","carSilver","carWhite","carRed"]),y("gold",[0,1.7,1.38],[3.2,.05,.04])],abjKefiano:Ku(7,5,"deepGlass","carBlue",["carSilver","carBlack","carWhite","carWhite","carBlack","carSilver","carBlue"]),abjSarkinmota:Ku(6.4,4.8,"showGlass","red",["carWhite","carBlack","carRed","carWhite","carWhite","carBlack"]),abjCentralPark:(function(){let i=[nt(8.8,6.8,0,0,"lawnLight"),y("gravel",[0,.025,2],[8.4,.03,.5]),y("gravel",[.6,.025,.1],[.5,.03,3.4])];i.push(We("cyl","asphalt",[-2.4,.035,-1.2],[2,.03,1.3]),We("cyl","lawn",[-2.4,.05,-1.2],[1.1,.02,.5]));for(let e=0;e<16;e++){let t=e/16*Bn*2;i.push(Z(e%2?"white":"red",[-2.4+2.1*Math.cos(t),.08,-1.2+1.4*Math.sin(t)],.1,.12,"cyl8"))}return[[-3.4,-.9,.4,"carRed"],[-1.6,-2.1,Bn/2,"carBlue"],[-1.4,-.4,-.6,"carGreen"]].forEach(([e,t,n,s])=>i.push(y(s,[e,.1,t],[.18,.08,.3],[0,n,0]))),i.push(y("sandDark",[2.6,.035,-1.6],[3,.03,2.2]),...Vr(1.1,4.1,-2.7,-.5,.5,"steel")),[[1.8,-2,"stall2"],[2.8,-1.2,"stall3"],[3.4,-2.2,"stall1"],[2.2,-.9,"stall5"]].forEach(([e,t,n])=>i.push(Z(n,[e,.22,t],.18,.4))),i.push(y("cream",[-3.2,.4,1.6],[1.6,.8,1]),Mt("roofRed",-3.2,.8,1.6,1.8,1.2,.4),y("stall3",[-3.2,.62,2.12],[1.4,.06,.06])),i.push(y("red",[2.4,.35,1],[.25,.04,.9],[.5,0,0]),y("stall1",[2.4,.4,.52],[.3,.8,.1]),Z("stall3",[3.4,.06,1.1],.35,.06)),i.push(...Rt(-1.2,1.2,"stall0"),...Rt(0,2.9,"stall3"),...xe(4,2.9,1.2),...xe(-4,2.9,1.1),...xe(4,.3,1.1,"leafDark"),...xe(-.6,-3,1.2,"leafDark")),i})(),abjCityPark:(function(){let i=[nt(4.2,5.3,0,0,"lawnLight"),y("gravel",[0,.025,.4],[.5,.03,4.8])];for(let[e,t]of(i.push(y("wood",[-.9,.1,-1.7],[1.6,.2,1]),Mt("white",-.9,.9,-1.7,1.8,1.2,.35),...qt(-1.6,-.2,2,-1.25,.7,.2,.03,"white")),[[1.2,-1.4],[1.2,.4],[-1.2,.8]]))i.push(y("wood",[e,.18,t],[.7,.05,.4]),y("wood",[e,.1,t-.32],[.7,.04,.12]),y("wood",[e,.1,t+.32],[.7,.04,.12]));for(let[e,t]of[[-1.8,-.4],[1.8,1.6],[-1.8,2.3],[1.8,-2.3]])i.push(Z("steel",[e,.55,t],.02,1.1,"cyl8"),y("lamp",[e,1.12,t],[.1,.06,.1]));return i.push(y("red",[.9,.35,2],[.2,.04,.7],[.5,0,0]),y("stall2",[.9,.38,1.62],[.24,.76,.08])),i.push(...Ve(-1.6,-2.4),...Ve(1.7,2.5),...Ve(-1.7,1.5,1.2),...Ve(1.8,-.5,1.4),...Jt(0,2.4,1.2,.4,6,21)),i})(),abjMonoliza:(function(){let i=[nt(9.2,6.8,0,0,"lawnLight"),y("gravel",[0,.025,1.9],[8.8,.03,.5])];for(let e of(i.push(y("pitch",[-2.2,.035,-1.1],[4,.03,2.6]),y("white",[-2.2,.055,-1.1],[.04,.01,2.6])),[-4.1,-.3]))i.push(y("white",[e,.2,-1.1],[.05,.4,.8]));for(let[e,t]of[[-4.3,-2.6],[-.1,-2.6],[-4.3,.4],[-.1,.4]])i.push(Z("steel",[e,1,t],.04,2,"cyl8"),y("lamp",[e,2.05,t],[.4,.2,.1]));i.push(Z("white",[1.6,.06,-1.7],.8,.08),Z("gold",[1.6,.5,-1.7],.05,.9,"cyl8"),cn("stall4",[1.6,1.1,-1.7],.95,.5,"cone"));for(let e=0;e<6;e++){let t=e/6*Bn*2;i.push(y(ji[e],[1.6+.55*Math.cos(t),.25,-1.7+.55*Math.sin(t)],[.12,.16,.24],[0,-t,0]))}return i.push(y("concrete",[3.6,.05,-.6],[1.6,.06,1.4]),y("stall0",[3.6,.85,-.6],[1.7,.06,1.5]),y("stall1",[3.3,.14,-.4],[.3,.12,.4],[0,.6,0]),y("stall2",[3.9,.14,-.8],[.3,.12,.4],[0,-.4,0])),i.push(y("sandDark",[1.6,.035,.9],[2,.03,1.2]),...Vr(.6,2.6,.3,1.5,.4,"steel"),Z("stall3",[1.3,.16,.9],.14,.3),Z("stall5",[1.9,.16,.7],.14,.3)),i.push(y("stall4",[-.6,.55,3],[.14,1.1,.14]),y("stall4",[.6,.55,3],[.14,1.1,.14]),y("stall3",[0,1.15,3],[1.4,.14,.16])),i.push(...xe(4.2,2.9,1.1),...xe(-4.2,2.9,1.2),...xe(4.2,-2.9,1,"leafDark"),...Rt(-2.4,2.8,"stall3")),i})(),abjWTC:(function(){let i=[Fe(6.8,6.4,0,0,"plazaLight"),y("stone",[0,.4,.4],[6.2,.8,2.8])];for(let[e,t]of[[-1.5,5.4],[1.5,4.8]])i.push(y("deepGlass",[e,.8+t/2,.5],[1.9,t,1.9]),...Qt(e,.5,1.9,1.9,1.3,.8+t-.3,.6,"white"),y("silver",[e,.8+t+.06,.5],[1.7,.12,1.7]));return i.push(Z("silver",[-1.5,6.6,.5],.03,.8,"cyl8"),y("glass",[0,.5,1.81],[3,.6,.02])),i.push(Z("stone",[0,.08,2.6],.6,.08),Vi(1,.5,0,2.6,.13),...Ve(-2.9,2.7),...Ve(2.9,2.7),...Ve(-2.9,-2.6),...Ve(2.9,-2.6),...xe(0,-2.4,1.1)),i})(),abjICC:(function(){let i=[nt(8,6.4),Fe(7,2.2,0,1.8)];i.push(y("cream",[0,.8,-.9],[6.4,1.6,3]),We("halfCyl","white",[0,1.6,-.9],[1.3,6.2,1.5],[0,0,Bn/2]),y("green",[0,1.62,.62],[6.5,.1,.06])),i.push(...qt(-2.8,2.8,9,.8,1.4,0,.07),y("white",[0,1.45,.75],[6.2,.1,.4]),y("stone",[0,.06,.95],[4,.12,.5]));for(let e=0;e<9;e++){let t=-3.2+.8*e;i.push(Z("silver",[t,.65,2.75],.02,1.3,"cyl8"),y(e%3==1?"green":ji[e%6],[t+.13,1.18,2.75],[.26,.18,.015]))}return i.push(...xe(-3.6,-2.7),...xe(3.6,-2.7),...Jt(-2.6,1.6,1.4,.4,6,23),...Jt(2.6,1.6,1.4,.4,6,24)),i})(),abjBarYucca:(function(){let i=[Fe(4.4,5.8,0,0,"plaza"),y("cream",[0,.9,-.6],[3.6,1.8,3.6]),...Qt(0,-.6,3.6,3.6,.5,1.4,.45,"windowLight"),y("wood",[0,1.86,-.6],[3.7,.12,3.7])];for(let[e,t,n,s]of[[0,1.24,3.7,.03],[0,-2.44,3.7,.03],[-1.84,-.6,.03,3.7],[1.84,-.6,.03,3.7]])i.push(y("balGlass",[e,2.1,t],[n,.36,s]));for(let[e,t,n]of(i.push(y("dark",[-1,2.1,-1.8],[1.2,.36,.4]),y("lamp",[0,2.42,.4],[3.2,.03,.03])),[[-.8,.4,"stall3"],[.8,.2,"stall0"],[.9,-1.4,"stall5"]]))i.push(...Rt(e,t,n,.5,1.92));return i.push(...Ve(-1.6,2.2,1.2),...Ve(1.6,2.2,1.2),...mt(0,2,Bn/2,"carWhite")),i})(),abjBoto:(function(){let i=[nt(3.9,4.2),Fe(1.2,1.4,.8,1.4,"gravel"),y("wood",[0,.6,-.5],[3.2,1.2,2.2]),Mt("roofTile",0,1.2,-.5,3.4,2.4,.5),y("gold",[0,1.18,.62],[3.3,.05,.04])];for(let e of[-1.1,-.4,.4,1.1])i.push(y("lamp",[e,.6,.61],[.36,.7,.02]));return i.push(...xe(-1.4,1.4,.9),...Jt(-.4,1.5,1,.4,5,25),ii(0,2,3.6,.2)),i})(),abjHavana:(function(){let i=[Fe(3.9,4.2,0,0,"plaza"),y("cream",[0,.85,-.5],[3.4,1.7,2.2]),y("white",[0,1.74,-.5],[3.5,.1,2.3]),y("red",[0,.045,1.3],[.7,.01,1.4])];for(let e of[-1.2,0,1.2])i.push(y("lamp",[e,.9,.61],[.5,.8,.02]),y("red",[e,1.38,.82],[.7,.04,.42],[.35,0,0]));return i.push(...Ve(-1.6,1.4,1.3),...Ve(1.6,1.4,1.3)),i})(),abjBarracuda:(function(){let i=[Fe(4.2,4.2,0,0,"plazaLight"),y("white",[0,1.6,.3],[2.6,3.2,2.4]),y("deepGlass",[0,1.6,1.51],[2.2,2.8,.02]),y("wood",[0,3.26,.3],[2.7,.12,2.5])];for(let[e,t,n,s]of[[0,1.55,2.7,.03],[0,-.95,2.7,.03],[-1.35,.3,.03,2.5],[1.35,.3,.03,2.5]])i.push(y("balGlass",[e,3.5,t],[n,.36,s]));for(let[e,t,n]of(i.push(y("neonBlue",[0,3.72,1.55],[2.6,.03,.03]),y("pool",[-.5,3.335,-.2],[.9,.03,.7])),[[.6,.8,"stall1"],[-.6,.9,"stall5"]]))i.push(...Rt(e,t,n,.45,3.32));return i.push(...Ve(-1.7,-1.6,1.2),...Ve(1.7,-1.6,1.2)),i})(),abjPappies:(function(){let i=[nt(4.8,4.4),y("wood",[-.8,.55,-1.1],[2.8,1.1,1.6]),Mt("thatch",-.8,1.1,-1.1,3,1.8,.6),Z("concrete",[.4,1.3,-1.5],.12,.8,"cyl8")];for(let e of[.6,1.5])i.push(y("wood",[.6,.22,e],[2.4,.05,.5]),y("wood",[.6,.12,e-.4],[2.4,.04,.14]),y("wood",[.6,.12,e+.4],[2.4,.04,.14]));for(let e of[-1.9,2])i.push(Z("steel",[e,.6,1],.02,1.2,"cyl8"));return i.push(y("lamp",[0,1.18,1],[3.9,.03,.03]),...xe(-1.8,1.5,.9),...xe(1.9,-1.4,1)),i})(),abjTulip:[Fe(4.2,4.2,0,0,"plazaLight"),y("white",[0,.7,-.6],[3.2,1.4,2]),y("glass",[0,.55,.41],[2.6,.8,.02]),y("flowerPink",[0,1.05,.7],[3.2,.05,.6],[.3,0,0]),y("white",[0,1.44,-.6],[3.3,.08,2.1]),...Jt(0,.55,2.8,.15,8,26,.06),...Rt(-1,1.4,"flowerPink",.55),...Rt(1,1.4,"flowerPink",.55),...xe(-1.7,-1.6,.8)],abjMarks:[nt(4.2,4.2),Fe(1,1.4,.9,1.3,"gravel"),y("black",[0,.5,-.6],[2.8,1,2]),Mt("darkPaving",0,1,-.6,3.6,2.8,.55),y("lamp",[0,.5,.41],[2.2,.5,.02]),y("red",[0,.86,.43],[2.6,.06,.02]),Vi(1.2,.8,-1,1.3),We("rock","graniteLight",[-1.7,.12,1],[.2,.16,.18]),Z("trunk",[1.6,.3,1.6],.05,.6,"cyl8"),We("ico","red",[1.6,.8,1.6],[.45,.4,.45]),...xe(-1.7,-1.7,.8,"leafDark")],abjMars:[Fe(3.4,4.2,0,0,"plazaLight"),y("cream",[0,1.1,-.8],[3,2.2,1.8]),...Qt(0,-.8,3,1.8,1.5,1.9,.4,"window"),y("flowerPink",[0,.6,.11],[2.4,1,.02]),y("glass",[0,.6,.12],[1.8,.8,.02]),y("white",[0,1.15,.35],[2.6,.05,.5],[.3,0,0]),...Rt(-.8,1.2,"flowerPink",.5),...Rt(.8,1.4,"white",.5)],abjPalmAve:(function(){let i=[nt(4.2,4.2),Fe(2.6,1.6,0,-.8,"plazaLight"),...qt(-1.1,1.1,4,-1.5,.9,.04,.04),...qt(-1.1,1.1,4,-.1,.9,.04,.04),Mt("white",0,.95,-.8,2.6,1.8,.4)];for(let[e,t]of[[-1,1],[.6,1.3]])i.push(Z("wood",[e,.22,t],.22,.04),Z("wood",[e,.11,t],.03,.22,"cyl8"));return i.push(...Ve(-1.7,-1.7,1.6),...Ve(1.7,-1.7,1.5),...Ve(-1.7,1.7,1.4),...Ve(1.7,.6,1.5),y("lamp",[0,1.4,.4],[3,.03,.03])),i})(),abjEscape:e0(6,4.4,"teal"),abjLuxeSpa:e0(5,4.6,"stall4"),abjEfcc:((Qp=[nt(6.8,4.8),Fe(6,1.4,0,1.6),y("white",[0,1.5,-.7],[5.2,3,2]),...Qt(0,-.7,5.2,2,.6,2.7,.5,"deepGlass"),y("green",[0,3.06,-.7],[5.3,.12,2.1]),y("glass",[0,.6,.31],[1.4,1,.02]),y("green",[0,1.15,.6],[1.8,.06,.6])]).push(...$t(-2.6,1.6,1.8),...$t(-1.9,1.6,1.8),...$t(2.2,1.6,1.8),...xe(-3,-1.9),...xe(3,-1.9),...mt(1,1.7,Bn/2,"carBlack")),Qp),abjGarkiPolice:(function(){let i=[Fe(5.8,4.6,0,0,"concrete"),y("white",[-.6,.65,-.8],[4,1.3,2]),y("uniBlue",[-.6,1,.21],[4,.2,.02]),y("uniBlue",[-.6,1.34,-.8],[4.1,.1,2.1]),...Qt(-.6,-.8,4,2,.55,.55,.5,"window"),y("dark",[-.6,.35,.22],[.6,.7,.02])];for(let[e,t,n]of[[1.6,1.4,0],[2.4,1.4,0]])i.push(...mt(e,t,n,"carWhite"),y("uniBlue",[e,.1,t],[.31,.04,.61],[0,n,0]));return i.push(...$t(2.4,-.4,1.8),y("red",[-1.6,.4,2],[1.4,.05,.05]),Z("black",[-2.3,.2,2],.04,.4,"cyl8"),...xe(-2.5,1.4,.9)),i})(),abjGarkiMarket:(function(){let i=[Fe(6.2,4.6,0,0,"concrete"),y("cream",[0,.55,-1.3],[5.6,1.1,1.6]),Mt("roofTin",0,1.1,-1.3,5.9,1.9,.6)];for(let e of[.3,1.45])for(let t=0;t<4;t++)i.push(...qs(-2.1+1.4*t,e,ji[(t+2*(e>1))%6]));return i.push(...Rt(-2.8,2,"stall3"),...Rt(2.8,2,"stall1")),i})(),abjFraser:[nt(6.2,3.6),Fe(6,1,0,1.3),y("white",[-.6,1.8,.1],[2.8,3.6,1.4]),...Qt(-.6,.1,2.8,1.4,.6,3.3,.45,"window"),y("teal",[-.6,3.66,.1],[2.9,.12,1.5]),y("white",[-.6,.6,1.05],[1.6,.06,.6]),Vi(1.6,.8,2,-.9,.06,"pool"),y("wood",[2,.025,-.1],[1.8,.03,.4]),...Rt(1.3,-.1,"stall5",.5),...Ve(-2.7,1.3),...Ve(1.6,1.3,1.1),...Ve(2.8,.6)],abjEcoFitness:t0(5,4.6,"hubGreen"),abjIFitness:t0(6,5,"red"),abjTrukadero:[Fe(3.9,4.2,0,0,"darkPaving"),y("dark",[0,.7,-.7],[3.4,1.4,2]),y("neonPink",[0,1.38,.31],[3.4,.05,.03]),y("neonBlue",[0,.1,.31],[3.4,.04,.03]),We("cylT","white",[.9,1.9,-.7],[.22,1,.22]),We("sphere","white",[.9,2.5,-.7],[.18,.22,.18]),y("red",[.9,2.1,-.7],[.36,.06,.36]),y("wood",[0,.06,1],[3.4,.08,1.2]),...Rt(-1,1,"stall4",.5,.1),...Rt(.8,1.1,"stall1",.5,.1)],abjPolo:(function(){let i=[nt(10.8,6.3,0,0,"fairway"),y("lawn",[0,.035,-1],[9.6,.03,3.4])];for(let e of[-2.7,.7])i.push(y("white",[0,.08,e],[9.6,.12,.06]));for(let e of[-4.6,4.6])i.push(Z("white",[e,.35,-1.4],.03,.7,"cyl8"),Z("white",[e,.35,-.6],.03,.7,"cyl8"));for(let[e,t,n]of[[-1.2,-1.3,"stall1"],[1,-.8,"stall0"]])i.push(y("mud",[e,.32,t],[.55,.22,.2]),y("mud",[e+.32,.48,t],[.12,.26,.1],[0,0,-.4]),...[[-.2,-.07],[-.2,.07],[.2,-.07],[.2,.07]].map(([s,r])=>y("mud",[e+s,.11,t+r],[.05,.22,.05])),y(n,[e-.05,.56,t],[.16,.24,.14]));i.push(y("cream",[-3.6,.5,2],[2.6,1,1.4]),Mt("roofGreen",-3.6,1,2,2.8,1.6,.45),y("wood",[-3.6,.04,2.9],[2.4,.08,.4]),...qt(-4.7,-2.5,4,2.95,.8,.08,.035)),i.push(...qt(1.6,3,2,1.6,.8,0,.025,"white"),...qt(1.6,3,2,2.6,.8,0,.025,"white"),Mt("white",2.3,.8,2.1,1.8,1.4,.45));for(let e=0;e<6;e++)i.push(y(e%2?"white":"green",[-1.6+.5*e,.12,1.3],[.3,.24,.3]));return i.push(...$t(4.9,2.6,1.8),...xe(4.9,1.2,1.1),...xe(-5,-2.8,1.2,"leafDark"),...xe(5,-2.8,1.2,"leafDark")),i})(),abjNile:[nt(5.4,7.8),y("gravel",[0,.025,.8],[.5,.03,6]),y("white",[-1.1,1,-2.6],[2.6,2,1.8]),...Qt(-1.1,-2.6,2.6,1.8,.5,1.7,.6,"deepGlass"),y("white",[1.4,.7,-1.2],[1.8,1.4,2]),...Qt(1.4,-1.2,1.8,2,.5,1.1,.6,"deepGlass"),Z("glass",[-1.4,.6,.6],.8,1.2),Z("white",[-1.4,1.25,.6],.85,.1),...xe(1.3,1.2,1.2),...xe(-1.8,2.4,1),...xe(1.8,2.6,1),y("stall1",[-.8,.5,3.6],[.25,1,.25]),y("stall1",[.8,.5,3.6],[.25,1,.25]),y("white",[0,1.05,3.6],[1.9,.16,.25])],abjBaze:[nt(9.8,6.8),y("gravel",[0,.025,1.4],[9.2,.03,.5]),y("cream",[-2.6,.9,-2],[3.4,1.8,1.8]),...Qt(-2.6,-2,3.4,1.8,.5,1.5,.5,"window"),y("stall4",[-2.6,1.86,-2],[3.5,.12,1.9]),y("white",[1,.75,-2.1],[2.6,1.5,1.6]),...qt(0,2,5,-1.2,1.2,.1,.06),Mt("white",1,1.5,-2.1,2.8,1.8,.45),y("pitch",[3.3,.035,-.6],[2.6,.03,3.4]),y("white",[3.3,.055,-.6],[2.6,.01,.04]),y("white",[3.3,.25,-2.25],[.6,.5,.04]),y("white",[3.3,.25,1.05],[.6,.5,.04]),y("stall4",[-.9,.5,3],[.3,1,.3]),y("stall4",[.9,.5,3],[.3,1,.3]),y("white",[0,1.05,3],[2.1,.18,.3]),...xe(-4.4,.4,1.1),...xe(-1,-.2,1),...xe(-4.4,2.8,1),...xe(4.4,2.8,1)],abjFmc:[nt(6.8,4.8),Fe(3.6,1.6,.6,1.6),y("white",[0,1,-.9],[6,2,2.4]),...Qt(0,-.9,6,2.4,.55,1.65,.55,"windowLight"),y("red",[0,2.06,-.9],[6.1,.12,2.5]),y("white",[.6,.75,.6],[2,.08,.8]),y("red",[-1.8,1.4,.32],[.5,.15,.02]),y("red",[-1.8,1.4,.32],[.15,.5,.02]),y("white",[1.6,.22,1.7],[.7,.32,.36]),y("red",[1.6,.26,1.7],[.72,.06,.37]),...xe(-3,1.9),...xe(3,1.9)]},i0={abjIdu:["IDU STATION","Abuja\u2013Kaduna Railway",2.6,.5,-2.6,.95,1.96,"#008751","#ffffff"],abjJabiPark:["JABI MOTOR PARK","Interstate",2,.42,-3.1,1.15,1,"#b91c1c","#ffffff"],abj345:["345 NIGHTLIFE",void 0,2.4,.36,0,1.45,.52,"#111111","#ff9e6d"],abjPlay:["PLAY","Imperial Lounge",1.8,.46,0,1.15,.92,"#240046","#e0aaff"],abjMoscow:["MOSCOW UNDERGROUND",void 0,2.6,.34,0,1.45,.53,"#03045e","#90e0ef"],abjTokyo:["TOKYO NIGHTLIFE",void 0,2.4,.34,0,1.1,.52,"#370617","#ff4d6d"],abjMagicCity:["MAGIC CITY","18+ only",1.7,.42,0,1.25,.62,"#2b0a3d","#ff4d6d"],abjAbujaCar:["ABUJACAR","Smart Auto Gallery",3,.56,0,1.94,.82,"#0b0b0b","#c9a227"],abjKefiano:["KEFIANO AUTOS",void 0,3,.4,0,1.94,.82,"#1d4ed8","#ffffff"],abjSarkinmota:["SARKINMOTA AUTOS","King of Cars",2.8,.52,0,1.94,.78,"#7f1d1d","#f5d27a"],abjCentralPark:["CENTRAL PARK","Go-karts \xB7 Paintball",2.4,.5,.6,.6,2.3,"#f97316","#ffffff"],abjCityPark:["CITY PARK",void 0,1.6,.28,0,.3,2.66,"#15803d","#ffffff"],abjMonoliza:["MONOLIZA PARK",void 0,1.4,.24,0,1,3.09,"#8b5cf6","#ffffff"],abjWTC:["WORLD TRADE CENTER","Abuja",2.8,.5,0,1.05,1.83,"#0f172a","#7dd3fc"],abjICC:["INTERNATIONAL CONFERENCE CENTRE",void 0,3.6,.34,0,1.72,.66,"#008751","#ffffff"],abjBarYucca:["BAR YUCCA","Rooftop",1.8,.44,0,1.6,1.23,"#111111","#f5d27a"],abjBoto:["BOTO",void 0,1.2,.3,0,1.35,.66,"#1b1b1b","#c9a227"],abjHavana:["HAVANA",void 0,1.6,.34,0,1.55,.62,"#7f1d1d","#f5d27a"],abjBarracuda:["BARRACUDA ROOFTOP",void 0,2.2,.32,0,2.95,1.53,"#0b1220","#38bdf8"],abjPappies:["PAPIEE'S MEATRO",void 0,2,.3,-.8,.85,-.29,"#7c2d12","#fde68a"],abjTulip:["TULIP BISTRO",void 0,1.8,.28,0,1.25,.42,"#ec4899","#ffffff"],abjMarks:["MARKS AT THE PARK",void 0,2,.26,0,.18,.42,"#111827","#f87171"],abjMars:["MAR'S CAF\xC9",void 0,1.6,.3,0,1.4,.11,"#f472b6","#ffffff"],abjPalmAve:["PALM AVE","River Plate Park",1.6,.4,0,.32,.12,"#16a34a","#ffffff"],abjEscape:["ESCAPE HOUSE",void 0,1.8,.28,-.4,.85,.52,"#2d6a4f","#fefae0"],abjLuxeSpa:["ABUJA LUXE SPA",void 0,1.8,.28,-.4,.85,.57,"#7e22ce","#ffffff"],abjEfcc:["EFCC","Economic & Financial Crimes Commission",2.4,.5,0,2.2,.32,"#008751","#ffffff"],abjGarkiPolice:["GARKI POLICE DIVISION",void 0,2.6,.3,-.6,1.1,.23,"#1d3f8f","#ffffff"],abjGarkiMarket:["GARKI MARKET",void 0,2.4,.38,0,.8,-.48,"#b45309","#ffffff"],abjFraser:["FRASER SUITES",void 0,2.2,.34,-.6,.85,.81,"#0f766e","#ffffff"],abjEcoFitness:["ECOFITNESS HUB",void 0,2.4,.32,0,1.45,.78,"#16a34a","#ffffff"],abjIFitness:["i-FITNESS","Guzape",2.2,.44,0,1.45,.88,"#e63946","#ffffff"],abjTrukadero:["TRUKADERO","by CityBowl",2,.42,0,1,.33,"#f72585","#ffffff"],abjPolo:["GUARDS POLO CLUB",void 0,2.2,.3,-3.6,.7,2.72,"#7c2d12","#f5d27a"],abjNile:["NILE UNIVERSITY",void 0,1.8,.16,0,1.05,3.76,"#0369a1","#ffffff"],abjBaze:["BAZE UNIVERSITY",void 0,2,.17,0,1.05,3.16,"#7c3aed","#ffffff"],abjFmc:["FEDERAL MEDICAL CENTRE","Jabi",2.6,.44,.6,1.25,.32,"#e5484d","#ffffff"]};var sd={};Z0(sd,{carWindows:()=>M0,cars:()=>b0,flowers:()=>td,groundNames:()=>Sc,hedges:()=>x0,hills:()=>io,houses:()=>wc,lake:()=>h0,lampHeads:()=>v0,lampPosts:()=>y0,lots:()=>Mc,medians:()=>f0,palmCrowns:()=>vc,palmTrunks:()=>id,patches:()=>ed,pavements:()=>d0,roads:()=>Ju,roofs:()=>Ec,roundaboutGreens:()=>g0,roundabouts:()=>m0,stripes:()=>p0,treeCrowns:()=>nd,treeTrunks:()=>_0});var $u=[[-16,0,31.3,0,3.6,"blvd"],[-16,-18,40,-18,1.6,"main"],[-16,21,40,21,1.6,"main"],[-16,-46,-16,21,1.6,"main"],[-4,-46,-4,47.5,1.2,"sec"],[19,-46,19,21,1.2,"sec"],[40,-18,40,47,1.4,"sec"],[-48,0,-16,0,1.2,"sec"],[-16,-30,35,-30,1.2,"sec"],[-42,23.5,-4,23.5,1,"sec"],[-16,0,-42,23.5,1.8,"exp"],[-16,-18,-49.5,-40.3,1.8,"exp"],[-42,23.5,-51,23.5,1.8,"exp"],[-51,23.5,-51,47.5,1.6,"exp"],[-51,47.5,-4,47.5,1,"sec"]],l0=[[39.3,-9.5,37.4,-9.5],[40.7,-14,42.85,-14],[-16.8,-8,-20.7,-8],[40.7,16.6,54.4,16.6],[-30,-27.6,-30,-33.85],[-46,.6,-46,2.6],[-31.9,10.7,-30.06,12.71],[-16.8,14.5,-18.4,14.5],[-4.6,14.5,-6.35,14.5],[-4.6,-42,-8.2,-42],[40.7,28,43.85,28],[-11,35.4+8.55,-4.6,35.4+8.55]],Qu=[[-51,23.5,1.4],[-16,0,2.8],[-4,0,2.4],[19,0,2.4],[-16,-18,2],[-4,-18,1.7],[19,-18,1.7],[40,-18,1.7],[-16,21,2],[-4,21,1.7],[19,21,1.7],[40,21,1.7],[-42,23.5,2],[-16,-30,1.4],[-4,-30,1.4],[19,-30,1.4]],vi=$u[10],s0=Math.hypot(vi[2]-vi[0],vi[3]-vi[1]),xc=[(vi[2]-vi[0])/s0,(vi[3]-vi[1])/s0],Wr=[xc[1],-xc[0]],yc=[vi[0]+22*xc[0]+Wr[0]*4,vi[1]+22*xc[1]+Wr[1]*4],Mc={abjAssembly:{x:35,z:0,w:7,d:7,label:"National Assembly",top:3.8},abjSupremeCourt:{x:35,z:-9.5,w:5,d:4.5,label:"Supreme Court",top:2.1},abjAsoRock:{x:45,z:-14,w:4.5,d:4.5,label:"Aso Rock",top:1.4},abjZoo:{x:54,z:13.7,w:7,d:5,label:"Children's Park & Zoo",top:1.4},abjSecretariat:{x:25,z:-6.5,w:8,d:5,label:"Fed. Secretariat",top:2.8},abjMosque:{x:12.5,z:-6.5,w:6,d:6,label:"National Mosque",top:5.2},abjHospital:{x:1.5,z:-6.5,w:7,d:5,label:"National Hospital",top:2.7},abjSilverbird:{x:-10,z:-6.5,w:6,d:5,label:"Silverbird",top:3},abjEagleSquare:{x:25,z:6.5,w:8,d:6,label:"Eagle Square",top:2.1},abjChristianCentre:{x:12.5,z:6.5,w:6,d:6,label:"Christian Centre",top:7.8},abjCeddi:{x:1.5,z:6.5,w:7,d:5,label:"Ceddi Plaza",top:2.9},abjArtsVillage:{x:-10,z:6.5,w:6,d:5,label:"Arts Village",top:1.1},abjBanex:{x:-10,z:-13.5,w:6,d:5,label:"Banex Plaza",top:2},abjWuseMarket:{x:1.5,z:-13.5,w:7,d:5,label:"Wuse Market",top:1.8},abjTranscorp:{x:12.5,z:-13.5,w:6,d:5,label:"Transcorp Hilton",top:6.8},abjTechHub:{x:26,z:-13.5,w:6,d:5,label:"Ventures Park",top:3.5},abjNovare:{x:-10,z:-25,w:8,d:7,label:"Novare Central",top:3},abjLounge:{x:1.5,z:-23.25,w:5,d:4.5,label:"Kryxtal Lounge",top:1.8},abjUnityFountain:{x:12.5,z:-24,w:6,d:6,label:"Unity Fountain",top:1.6},abjMillenniumPark:{x:28,z:-25,w:10,d:8,label:"Millennium Park",top:1.5},abjGolf:{x:42,z:-32,w:11,d:9,label:"IBB Golf Club",top:1.5},abjClub:{x:-10,z:-36,w:6,d:5,label:"Hustle & Bustle",top:2.4},abjRooftop:{x:1.5,z:-35,w:4.5,d:4.5,label:"Lupita Rooftop",top:7},abjJabiLake:{x:-24,z:-8,w:7,d:5,label:"Jabi Lake Mall",top:2.2},abjZumaRock:{x:-46,z:5,w:5,d:5,label:"Zuma Rock",top:1.4,tag:[-10,5,-9.6]},abjMotors:{x:-36,z:8.5,w:9,d:5.5,label:"Capital Motors",top:2.4},abjStadium:{x:-22.5,z:14.5,w:8.4,d:8.4,label:"National Stadium",top:3.4,round:!0},abjMagicLand:{x:-9,z:14.5,w:5.5,d:5.5,label:"Magic Land",top:3},abjCityGate:{x:yc[0],z:yc[1],w:4.4,d:4.4,label:"City Gate",top:4.7,ry:Math.atan2(Wr[0],Wr[1])},abjAirport:{x:-28,z:35.4,w:34,d:22,label:"Abuja Airport",top:6.2,pad:"#d6dbc4",tag:[-3.6,2.05,2.4]},abjUniAbuja:{x:-57.5,z:31,w:10,d:9,label:"University of Abuja",top:3},abjGwagwalada:{x:-56.5,z:41,w:7,d:5,label:"Gwagwalada Market",top:3.1},abjTokyo:{x:-12.1,z:-44.75,w:4.4,d:2.9,label:"Tokyo Nightlife",top:2.8,art:.72},abjPlay:{x:-7,z:-44.75,w:4.4,d:2.9,label:"Play Lounge",top:1.6,art:.72},abj345:{x:-12.1,z:-41.25,w:4.4,d:2.9,label:"345 Nightlife",top:2.6,art:.72},abjMoscow:{x:-7,z:-41.25,w:4.4,d:2.9,label:"Moscow Underground",top:2,art:.72},abjMagicCity:{x:-.8,z:-42.6,w:4.1,d:4.4,label:"Magic City 18+",top:2},abjTrukadero:{x:4.73,z:-42.6,w:4.1,d:4.4,label:"Trukadero",top:2.7},abjHavana:{x:10.27,z:-42.6,w:4.1,d:4.4,label:"Havana",top:1.8},abjBoto:{x:15.8,z:-42.6,w:4.1,d:4.4,label:"BOTO",top:1.7},abjMars:{x:7,z:-34.6,w:3.6,d:4.4,label:"Mar's Caf\xE9",top:2.2},abjBarracuda:{x:22.4,z:-37.2,w:4.4,d:4.4,label:"Barracuda Rooftop",top:3.8},abjPalmAve:{x:22.4,z:-44,w:4.4,d:4.4,label:"Palm Ave",top:1.6},abjMarks:{x:32.6,z:-35.2,w:4.4,d:4.4,label:"Marks at the Park",top:1.6},abjTulip:{x:32.6,z:-44.1,w:4.4,d:4.4,label:"Tulip Bistro",top:1.5},abjCityPark:{x:36.6,z:-22.75,w:4.4,d:5.5,label:"City Park",top:1.8},abjPappies:{x:38.7,z:-42.5,w:5,d:4.6,label:"Papiee's Meatro",top:1.7},abjLuxeSpa:{x:45.6,z:-42.5,w:5,d:4.6,label:"Abuja Luxe Spa",top:1.2},abjEscape:{x:53.5,z:-38.2,w:6,d:4.4,label:"Escape House",top:1.2},abjPolo:{x:47.5,z:-22.5,w:11,d:6.5,label:"Guards Polo Club",top:1.3},abjAbujaCar:{x:-38,z:-40,w:7,d:5,label:"AbujaCar",top:2},abjEcoFitness:{x:-46,z:-43.8,w:5,d:4.6,label:"Ecofitness Hub",top:1.7},abjFmc:{x:-44.5,z:-27.2,w:7,d:5,label:"FMC Jabi",top:2.2},abjEfcc:{x:-44.5,z:-18.5,w:7,d:5,label:"EFCC",top:3.2},abjJabiPark:{x:-22.5,z:-14.5,w:7.8,d:4.6,label:"Jabi Motor Park",top:1},abjIdu:{x:-56,z:-24,w:10,d:5,label:"Idu Station",top:1.3},abjNile:{x:-45.2,z:15.5,w:5.6,d:8,label:"Nile University",top:2.1},abjBaze:{x:2.2,z:42,w:10,d:7,label:"Baze University",top:1.9},abjBarYucca:{x:-.6,z:15.6,w:4.6,d:6,label:"Bar Yucca",top:2.4},abjFraser:{x:6.3,z:15.6,w:6.4,d:3.8,label:"Fraser Suites",top:3.8},abjKefiano:{x:14.4,z:16.4,w:7,d:5,label:"Kefiano Autos",top:2},abjWTC:{x:24.2,z:14.6,w:7,d:6.6,label:"World Trade Center",top:6.4},abjICC:{x:34.6,z:14.6,w:8.2,d:6.6,label:"Int'l Conference Centre",top:2.9},abjSarkinmota:{x:.4,z:25.6,w:6.4,d:4.8,label:"Sarkinmota Autos",top:2},abjGarkiPolice:{x:15,z:25.6,w:6,d:4.8,label:"Garki Police",top:1.9},abjGarkiMarket:{x:23.8,z:25.6,w:6.4,d:4.8,label:"Garki Market",top:1.7},abjCentralPark:{x:1.6,z:32.8,w:9,d:7,label:"Central Park",top:1.4},abjMonoliza:{x:33.8,z:32.6,w:9.4,d:7,label:"Monoliza Park",top:2.2},abjIFitness:{x:52,z:40,w:6,d:5,label:"i-Fitness Guzape",top:1.8},home_abjMaitama:{x:12.5,z:-35,w:4.5,d:4.5,label:"Home",top:1.6},home_abjWuse2:{x:6.75,z:-24,w:4,d:4,label:"Home",top:2.4},home_abjGwarinpa:{x:-30,z:-36,w:4.5,d:4.5,label:"Home",top:2.2},home_abjKubwa:{x:-52.5,z:-39,w:4.5,d:4.5,label:"Home",top:1.6},home_abjAsokoro:{x:46,z:28,w:4.5,d:4.5,label:"Home",top:2.5}};var c0=[];var h0={x:-36,z:-9,rx:8,rz:5},Sc=[["ABUJA",14,35,14,"#6f9a52",.85],["CENTRAL BUSINESS DISTRICT",13.7,11,9,"#6f9a52",.85],["THREE ARMS ZONE",35,6.6,7.5,"#6f9a52",.85],["MAITAMA",30,-40.5,9,"#5f8c45",.85],["GARKI",8,27.5,7,"#6f9a52",.85],["ASOKORO",50,19,6.5,"#5f8c45",.85],["JABI LAKE",-36,-8.6,7,"#ffffff",.7],["GWARINPA",-30,-44,7,"#6f9a52",.85],["KUBWA",-56,-44,5,"#6f9a52",.85],["UTAKO",-38,-20.5,5,"#6f9a52",.85]],ed=[[-16,40,-10,10,"#c6e2a0"],[-4,58,-47,-10,"#a9d07f"],[-16,-4,-47,-10,"#bcd796"],[-8,30,10,48,"#c2d89a"],[30,60,10,48,"#acd083"],[-48,-16,-28,0,"#b4d48c"]],On=[],jr=$u.map(([i,e,t,n,s,r])=>On.push({k:"s",ax:i,az:e,bx:t,bz:n,hw:s/2+.6*(r==="blvd"||r==="main")})-1);for(let[i,e,t,n]of l0)On.push({k:"s",ax:i,az:e,bx:t,bz:n,hw:.4});for(let[i,e,t]of Qu)On.push({k:"c",x:i,z:e,r:t});var u0=(i,e,t,n,s=0)=>{let r=[Math.cos(s),-Math.sin(s)],a=[Math.sin(s),Math.cos(s)];return[[1,1],[1,-1],[-1,-1],[-1,1]].map(([o,l])=>[i+r[0]*t*o/2+a[0]*n*l/2,e+r[1]*t*o/2+a[1]*n*l/2])};for(let i of Object.values(Mc))i.round?On.push({k:"c",x:i.x,z:i.z,r:i.w/2}):i.ry?On.push({k:"p",pts:u0(i.x,i.z,i.w,i.d,i.ry)}):On.push({k:"r",x0:i.x-i.w/2,x1:i.x+i.w/2,z0:i.z-i.d/2,z1:i.z+i.d/2});for(let i of(On.push({k:"c",x:yc[0]-Wr[0]*4,z:yc[1]-Wr[1]*4,r:3.2}),On.push({k:"e",...h0},{k:"c",x:52,z:-1,r:9.6},{k:"c",x:-56,z:-8,r:7.4},{k:"r",x0:42.8,x1:49.2,z0:9.6,z1:14.4}),c0)){let e=i.r??0;On.push({k:"p",pts:u0(i.x,i.z,4.4,.6,e)});let t=2.2*Math.cos(e),n=-(2.2*Math.sin(e));On.push({k:"p",pts:[[i.x+t,i.z+n],[i.x+t,i.z+n+3.2],[i.x-t,i.z-n+3.2],[i.x-t,i.z-n]]})}for(let[,i,e,t]of Sc)On.push({k:"r",x0:i-t/2,x1:i+t/2,z0:e-.08*t,z1:e+.08*t});var r0=(i,e,t,n,s,r)=>{let a=s-t,o=r-n,l=Math.max(0,Math.min(1,((i-t)*a+(e-n)*o)/(a*a+o*o||1)));return Math.hypot(t+a*l-i,n+o*l-e)},bv=(i,e,t,n)=>{switch(i.k){case"r":return e>i.x0-n&&e<i.x1+n&&t>i.z0-n&&t<i.z1+n;case"c":return Math.hypot(e-i.x,t-i.z)<i.r+n;case"s":return r0(e,t,i.ax,i.az,i.bx,i.bz)<i.hw+n;case"e":return((e-i.x)/(i.rx+n))**2+((t-i.z)/(i.rz+n))**2<1;case"p":return((s,r,a,o)=>{let l=0,c=!0;for(let u=0;u<a.length;u++){let[h,d]=a[u],[f,m]=a[(u+1)%a.length],x=(f-h)*(r-d)-(m-d)*(s-h);if(x!==0&&(l===0?l=Math.sign(x):Math.sign(x)!==l&&(c=!1)),r0(s,r,h,d,f,m)<o)return!0}return c})(e,t,i.pts,n)}},ds=(i,e,t,n=-1)=>{if(i<-63.4||i>59.4||e<-46.4||e>47.4)return!0;for(let s=0;s<On.length;s++)if(s!==n&&bv(On[s],i,e,t))return!0;return!1},at=i=>{let e=43758.5453*Math.sin(127.1*i+311.7);return e-Math.floor(e)},Ju=[],d0=[],f0=[],p0=[],m0=[],g0=[],td=[],nd=[],_0=[],id=[],vc=[],x0=[],y0=[],v0=[],wc=[],Ec=[],io=[],b0=[],M0=[],a0=["#4f9a3c","#5aa845","#3f8a35","#6bb04f","#478f3a"],bc=["#e63946","#ffd166","#f472b6","#ffffff","#fb923c"],Tc=(i,e,t,n=1)=>{let s=(.36+.16*at(t))*n;_0.push({p:[i,.2+.24*n,e],s:[.05*n,.48*n,.05*n]}),nd.push({p:[i,.2+.45*n+.75*s,e],s:[s,1.15*s,s],r:3*at(t+3),c:a0[t%a0.length]})},Mv=(i,e,t,n=1.3+.35*at(t))=>{id.push({p:[i,.2+n/2,e],s:[.05,n,.05]}),vc.push({p:[i,.2+n+.04,e],s:[.55,.26,.55],e:[Math.PI,3*at(t+1),0]}),vc.push({p:[i,.2+n+.16,e],s:[.34,.2,.34],e:[Math.PI,3*at(t+2),0]})},Sv=(i,e,t,n,s,r=.2)=>{for(let a=0;a<t;a++)td.push({p:[i+(at(s+a)-.5)*n,r,e+(at(s+a+.5)-.5)*n],s:[.12,.1,.12],c:bc[(s+a)%bc.length]})};for(let[i,e,t,n]of($u.forEach(([s,r,a,o,l,c],u)=>{let h=Math.hypot(a-s,o-r),d=(a-s)/h,f=(o-r)/h,m=-f,x=Math.atan2(-f,d),g=(s+a)/2,p=(r+o)/2;if(Ju.push({p:[g,.234,p],s:[h,.012,l],r:x}),c==="blvd"||c==="main")for(let A of[-1,1])d0.push({p:[g+m*(l/2+.3)*A,.215,p+d*(l/2+.3)*A],s:[h,.01,.6],r:x});if(c!=="sec"&&f0.push({p:[g,.245,p],s:[h,.01,c==="blvd"?1:.3],r:x}),c==="sec")for(let A=1;A<h-.5;A+=2.2){let L=s+d*A,U=r+f*A;ds(L,U,.3,jr[u])||p0.push({p:[L,.2475,U],s:[.9,.005,.08],r:x})}let C=c==="blvd"?2.1:c==="main"?l/2+.3:l/2+.75,v=c==="blvd"?2.6:c==="exp"?2.8:3;for(let A=v/2,L=0;A<h;A+=v,L++)for(let U of[-1,1]){let S=s+d*A+m*C*U,M=r+f*A+d*C*U;ds(S,M,.45,jr[u])||(c==="exp"?Mv(S,M,500*u+2*L+U):Tc(S,M,500*u+2*L+U))}if(c==="blvd"||c==="main"){let A=c==="blvd"?2.75:l/2+.95;for(let L=1.2;L<h-1;L+=2.1)for(let U of[-1,1]){let S=s+d*L+m*A*U,M=r+f*L+d*A*U;ds(S,M,.35,jr[u])||x0.push({p:[S,.35,M],s:[1.8,.3,.32],r:x})}}if(c==="blvd"||c==="main")for(let A=c==="blvd"?4.7:3,L=0;A<h;A+=c==="blvd"?5.2:6,L++){let U=c==="blvd"?0:(l/2+.3)*(L%2?1:-1),S=s+d*A+m*U,M=r+f*A+d*U;ds(S,M,.3,jr[u])||(y0.push({p:[S,1.05,M],s:[.03,1.6,.03]}),v0.push({p:[S,1.88,M],s:[.12,.08,.12]}))}let _=c==="blvd"?1:c==="main"?.42:c==="exp"?.5:.28,T=Math.floor(h/9);for(let A=0;A<T;A++){let L=(A+.3+.4*at(50*u+A))/T*h,U=A%2?1:-1,S=s+d*L+m*_*U,M=r+f*L+d*_*U;if(Qu.some(([I,B,N])=>Math.hypot(S-I,M-B)<N+.4)||c0.some(I=>2.6>Math.hypot(S-I.x,M-I.z)))continue;let w=Math.atan2(d,f)+(U>0?0:Math.PI),E=["#17803d","#f4f4f2","#1b1d22","#c0c6cc","#c81e1e","#1f5fbf","#f4f4f2","#17803d"][(u+A)%8];b0.push({p:[S,.335,M],s:[.32,.15,.64],r:w,c:E}),M0.push({p:[S,.47,M],s:[.28,.12,.34],r:w})}}),l0)){let s=Math.hypot(t-i,n-e);Ju.push({p:[(i+t)/2,.234,(e+n)/2],s:[s,.012,.8],r:Math.atan2(-(n-e),t-i)})}for(let i=-12.6,e=0;i<30;i+=2.6,e++)ds(i,0,.5,jr[0])||(Tc(i,0,9e3+e,1.05),e%2&&!ds(i+1.3,0,.4,jr[0])&&Sv(i+1.3,0,4,.5,9100+7*e,.25));Qu.forEach(([i,e,t],n)=>{let s=Math.max(.5,t-.9);m0.push({p:[i,.255,e],s:[t,.01,t]}),g0.push({p:[i,.265,e],s:[s,.02,s]});let r=Math.max(6,Math.round(2*Math.PI*s*.78/.32));for(let a=0;a<r;a++){let o=a/r*Math.PI*2;td.push({p:[i+Math.cos(o)*s*.78,.275,e+Math.sin(o)*s*.78],s:[.12,.1,.12],c:bc[(n+a)%bc.length]})}t>=2.4?(id.push({p:[i,1.125,e],s:[.06,1.7,.06]}),vc.push({p:[i,2.015,e],s:[.7,.3,.7],e:[Math.PI,n,0]},{p:[i,2.155,e],s:[.42,.24,.42],e:[Math.PI,n+.5,0]})):t>=2?Tc(i,e,9500+n,.9):nd.push({p:[i,.275+.15,e],s:[.3,.22,.3],c:"#3f7f35"})});var si=["#b45a3c","#8a4b33","#a3552f","#7a2e2e"],Zu=["#2f6f4f","#5b6b7a","#8a4b33","#3f4b57"],o0=["#f2e8d5","#e9d3b0","#f6efe3","#dbe7f2","#f6d6c8","#e4ecd6","#fff7e8"];[[-3,30,22.5,46.5,2.9,.9,1.3,1,si],[-3,18,10.5,19.5,2.6,.8,1.1,1,si],[22,39,10.5,19.5,2.8,.9,1.2,1,si],[41,59,14,47,3.2,1.3,1.8,2,Zu],[-2,59,-46.5,-30.6,3.3,1.2,1.7,2,Zu],[30,59,-28,-19,3,1.1,1.5,2,Zu],[-15.5,-4.5,-46.5,-38.5,2.2,.8,1,3,si],[-48,-17,-46.5,-28,2.3,.8,1,1,si],[-63.4,-49,-46.5,-19,2.5,.75,1,1,si],[-48,-18,-28,-12.5,2.4,.8,1,1,si],[-63.4,-49,-18,0,2.6,.8,1,1,si],[-63.4,-49,1,20,2.6,.8,1,1,si],[-48,-17,9,22,2.6,.8,1.1,1,si],[-63.4,-52.5,21,47.4,2.3,.7,.95,1,si]].forEach(([i,e,t,n,s,r,a,o,l],c)=>{for(let u=t+s/2,h=0;u<n;u+=s,h++)for(let d=i+s/2,f=0;d<e;d+=s,f++){let m=1e4*c+100*h+f,x=d+(at(m)-.5)*s*.25,g=u+(at(m+.3)-.5)*s*.25,p=r+at(m+.6)*(a-r),C=p*(.8+.25*at(m+.9));if(ds(x,g,Math.max(p,C)/2+.35))continue;let v=o===3?1.2+.5*at(m+1.2):o===2?.7+.25*at(m+1.2):.38+.2*at(m+1.2),_=at(m+1.5)>.5?0:Math.PI/2;wc.push({p:[x,.2+v/2,g],s:[p,v,C],r:_,c:o0[m%o0.length]}),o!==3&&Ec.push({p:[x,.2+v+.15,g],s:[.75*p,.3,.75*C],r:_,c:l[(h+f)%l.length]});let T=x+.42*s,A=g+.38*s;.55>at(m+2.1)&&!ds(T,A,.5)&&Tc(T,A,m,o===2?1.15:1)}});for(let i=-72;i<=70;i+=8.5)io.push({p:[i,.1,-53-3*at(i)],s:[6+3*at(i+1),3+2.2*at(i+2),5+3*at(i+3)],r:3*at(i+4),c:["#7fa25a","#8aac64","#96a873","#749852"][Math.abs(Math.round(i))%4]}),io.push({p:[i+4,.1,54+3*at(i+5)],s:[6+3*at(i+6),2.4+2*at(i+7),5+3*at(i+8)],r:3*at(i+9),c:["#8aac64","#7fa25a","#749852","#96a873"][Math.abs(Math.round(i))%4]});for(let i=-44;i<=44;i+=9)io.push({p:[-71-3*at(i),.1,i],s:[6+3*at(i+1),3+2.4*at(i+2),6+2*at(i+3)],r:3*at(i+4),c:["#7fa25a","#96a873","#8aac64"][Math.abs(i)%3]}),io.push({p:[67+3*at(i+5),.1,i+4],s:[6+3*at(i+6),3.2+2.4*at(i+7),6+2*at(i+8)],r:3*at(i+9),c:["#8aac64","#749852","#7fa25a"][Math.abs(i)%3]});var rd={abjIdu:{name:"Idu Railway Station",area:"Idu",emoji:"\u{1F686}"},abjJabiPark:{name:"Jabi Motor Park",area:"Jabi",emoji:"\u{1F68C}"},abj345:{name:"345 Nightlife",area:"Wuse 2",emoji:"\u{1F305}"},abjPlay:{name:"Play Imperial Lounge",area:"Wuse 2",emoji:"\u{1F3B6}"},abjMoscow:{name:"Moscow Underground",area:"Wuse 2",emoji:"\u{1F9CA}"},abjTokyo:{name:"Tokyo Nightlife",area:"Wuse 2",emoji:"\u{1F3EE}"},abjMagicCity:{name:"Magic City",area:"Wuse 2",emoji:"\u{1F51E}"},abjAbujaCar:{name:"AbujaCar",area:"Kado",emoji:"\u{1F3CE}\uFE0F"},abjKefiano:{name:"Kefiano Autos",area:"Central Business District",emoji:"\u{1F699}"},abjSarkinmota:{name:"Sarkinmota Autos",area:"Olusegun Obasanjo Way",emoji:"\u{1F698}"},abjCentralPark:{name:"Central Park Abuja",area:"Garki",emoji:"\u{1F3AF}"},abjCityPark:{name:"City Park",area:"Wuse 2",emoji:"\u{1F334}"},abjMonoliza:{name:"Monoliza Park",area:"Area 11, Garki",emoji:"\u{1F3A1}"},abjWTC:{name:"World Trade Center Abuja",area:"Central Business District",emoji:"\u{1F3D9}\uFE0F"},abjICC:{name:"International Conference Centre",area:"Central Business District",emoji:"\u{1F399}\uFE0F"},abjBarYucca:{name:"Bar Yucca",area:"Central Area",emoji:"\u{1F379}"},abjBoto:{name:"BOTO",area:"Wuse 2",emoji:"\u{1F37D}\uFE0F"},abjHavana:{name:"Havana",area:"Wuse 2",emoji:"\u{1F483}\u{1F3FE}"},abjBarracuda:{name:"Barracuda Rooftop Lounge",area:"Wuse 2",emoji:"\u{1F363}"},abjPappies:{name:"Papiee's Meatro",area:"Wuse 2",emoji:"\u{1F969}"},abjTulip:{name:"Tulip Bistro",area:"Wuse 2",emoji:"\u{1F337}"},abjMarks:{name:"Marks at the Park",area:"Wuse 2",emoji:"\u{1F962}"},abjMars:{name:"Mar's Caf\xE9",area:"Wuse 2",emoji:"\u2615"},abjPalmAve:{name:"Palm Ave",area:"Wuse 2",emoji:"\u{1F35D}"},abjEscape:{name:"Escape House",area:"Maitama",emoji:"\u{1F9D6}\u{1F3FE}"},abjLuxeSpa:{name:"Abuja Luxe Spa",area:"Wuse 2",emoji:"\u{1F486}\u{1F3FE}"},abjEfcc:{name:"EFCC Headquarters",area:"Jabi",emoji:"\u{1F575}\u{1F3FE}"},abjGarkiPolice:{name:"Garki Police Division",area:"Garki II",emoji:"\u{1F693}"},abjGarkiMarket:{name:"Garki Market",area:"Garki",emoji:"\u{1F9FA}"},abjFraser:{name:"Fraser Suites Abuja",area:"Central Business District",emoji:"\u{1F3E8}"},abjEcoFitness:{name:"Ecofitness Hub",area:"Gwarinpa",emoji:"\u{1F3CB}\u{1F3FE}"},abjIFitness:{name:"i-Fitness Guzape",area:"Guzape",emoji:"\u{1F4AA}\u{1F3FE}"},abjTrukadero:{name:"Trukadero by CityBowl",area:"Wuse 2",emoji:"\u{1F3B3}"},abjPolo:{name:"Guards Polo Club",area:"Maitama\u2013Asokoro",emoji:"\u{1F40E}"},abjNile:{name:"Nile University of Nigeria",area:"Jabi Airport Bypass",emoji:"\u{1F393}"},abjBaze:{name:"Baze University",area:"Kuchigoro, Airport Road",emoji:"\u{1F3EB}"},abjFmc:{name:"Federal Medical Centre Jabi",area:"Jabi",emoji:"\u{1F3E5}"},abjAirport:{name:"Nnamdi Azikiwe International Airport",area:"Airport Road",emoji:"\u{1F6EB}"},abjAsoRock:{name:"Aso Rock",area:"Three Arms Zone",emoji:"\u{1FAA8}"},abjAssembly:{name:"National Assembly",area:"Three Arms Zone",emoji:"\u{1F3DB}\uFE0F"},abjEagleSquare:{name:"Eagle Square",area:"Central Business District",emoji:"\u{1F985}"},abjMosque:{name:"Abuja National Mosque",area:"Central Business District",emoji:"\u{1F54C}"},abjChristianCentre:{name:"National Christian Centre",area:"Central Business District",emoji:"\u26EA"},abjMillenniumPark:{name:"Millennium Park",area:"Maitama",emoji:"\u{1F333}"},abjJabiLake:{name:"Jabi Lake Mall",area:"Jabi",emoji:"\u{1F6CD}\uFE0F"},abjWuseMarket:{name:"Wuse Market",area:"Wuse Zone 5",emoji:"\u{1F9FA}"},abjTranscorp:{name:"Transcorp Hilton Abuja",area:"Maitama",emoji:"\u{1F3E8}"},abjSilverbird:{name:"Silverbird Entertainment Centre",area:"Central Business District",emoji:"\u{1F3AC}"},abjMagicLand:{name:"Magic Land",area:"Kukwaba",emoji:"\u{1F3A2}"},abjZumaRock:{name:"Zuma Rock",area:"Madalla",emoji:"\u26F0\uFE0F"},abjUnityFountain:{name:"Unity Fountain",area:"Maitama",emoji:"\u26F2"},abjBanex:{name:"Banex Plaza",area:"Wuse 2",emoji:"\u{1F4F1}"},abjLounge:{name:"Kryxtal Lounge",area:"Wuse 2",emoji:"\u{1FAA9}"},abjSecretariat:{name:"Federal Secretariat",area:"Shehu Shagari Way",emoji:"\u{1F5C2}\uFE0F"},abjArtsVillage:{name:"Arts & Crafts Village",area:"Central Business District",emoji:"\u{1F3AD}"},abjStadium:{name:"Moshood Abiola National Stadium",area:"Kukwaba",emoji:"\u{1F3DF}\uFE0F"},abjGwagwalada:{name:"Gwagwalada Market & Motor Park",area:"Gwagwalada",emoji:"\u{1F68C}"},abjUniAbuja:{name:"University of Abuja",area:"Gwagwalada",emoji:"\u{1F393}"},abjMotors:{name:"Capital Motors",area:"Airport Road",emoji:"\u{1F698}"},abjCeddi:{name:"Ceddi Plaza",area:"Central Business District",emoji:"\u{1F3EC}"},abjNovare:{name:"Novare Central",area:"Wuse Zone 5",emoji:"\u{1F6CD}\uFE0F"},abjHospital:{name:"National Hospital Abuja",area:"Central Area",emoji:"\u{1F3E5}"},abjGolf:{name:"IBB International Golf & Country Club",area:"Maitama",emoji:"\u26F3"},abjCityGate:{name:"Abuja City Gate",area:"Airport Road",emoji:"\u{1F6E3}\uFE0F"},abjZoo:{name:"National Children's Park & Zoo",area:"Asokoro",emoji:"\u{1F992}"},abjSupremeCourt:{name:"Supreme Court of Nigeria",area:"Three Arms Zone",emoji:"\u2696\uFE0F"},abjTechHub:{name:"Ventures Park",area:"Maitama",emoji:"\u{1F4A1}"},abjClub:{name:"Hustle & Bustle",area:"Wuse 2",emoji:"\u{1FAA9}"},abjRooftop:{name:"Lupita Rooftop",area:"Maitama",emoji:"\u{1F307}"}};var Ac={box:new Vt(1,1,1),cyl:new Ut(1,1,1,20),cyl8:new Ut(1,1,1,8),cyl6:new Ut(1,1,1,6),cylT:new Ut(.75,1,1,12),halfCyl:new Ut(1,1,1,18,1,!1,0,Math.PI),cone:new _n(1,1,16),cone8:new _n(1,1,8),cone7:new _n(1,1,7),pyr:new _n(1,1,4,1,!1,Math.PI/4),dome:new di(1,22,11,0,Math.PI*2,0,Math.PI/2),sphere:new di(1,14,10),ico:new Ps(1,0),rock:new wr(1,1),hill:new wr(1,0),mono:new Ut(.78,1,1,16,3),torus:new Oa(1,.07,6,30),bowlWall:new Ut(1,.95,1,40,1,!0),bowlSeats:new Ut(1,.66,1,40,1,!0),ring:new Ds(.72,1,40,1,0,Math.PI*1.15),disc:new Ut(1,1,1,32)},Rc=(i,e="matte")=>e==="glow"?new on({color:i,toneMapped:!1}):new Ot({color:i,roughness:e==="metal"?.4:e==="glass"?.18:e==="wet"?.25:.95,metalness:e==="metal"?.55:e==="glass"?.15:0,flatShading:e==="flat",side:e==="ds"?Zt:Dn,transparent:e==="clear"||e==="beam",opacity:e==="clear"?.4:e==="beam"?.12:1,depthWrite:e!=="beam"&&e!=="clear"});function ad(i,e,t,n,s="matte",r=!0){if(!e.length)return;let a=new Gn(Ac[t],Rc(n,s),e.length),o=new pt;e.forEach((l,c)=>{o.position.set(...l.p),o.scale.set(...l.s),o.rotation.set(...l.e||[0,l.r||0,0],"YXZ"),o.updateMatrix(),a.setMatrixAt(c,o.matrix),l.c&&a.setColorAt(c,new Oe(l.c))}),a.castShadow=r,a.receiveShadow=!0,a.computeBoundingSphere(),i.add(a)}function Ev(i,e){let t=new Map,n=new pt,s=new pt;for(let r of e){n.position.set(r.x,r.y??.28,r.z),n.rotation.set(0,r.ry||0,0),n.scale.set(...r.scale||[r.art||1,r.art||1,r.art||1]),n.updateMatrix();for(let a of r.artwork){let[o,l]=qp[a.m],c=`${a.g}:${o}`;t.has(c)||t.set(c,{shape:a.g,kind:o,instances:[]}),s.position.set(...a.p),s.scale.set(...a.s),s.rotation.set(...a.r||[0,0,0],"YXZ"),s.updateMatrix(),t.get(c).instances.push({matrix:n.matrix.clone().multiply(s.matrix),color:l})}}for(let{shape:r,kind:a,instances:o}of t.values()){let l=new Gn(Ac[r],Rc("#fff",a),o.length);o.forEach((c,u)=>{l.setMatrixAt(u,c.matrix),l.setColorAt(u,new Oe(c.color))}),l.castShadow=!["glow","clear","beam"].includes(a),l.receiveShadow=l.castShadow,l.computeBoundingSphere(),i.add(l)}}function S0({box:i,textSurface:e}){let t=new Ze,n=new Ze,s=new Ze;t.add(n,s),i(t,0,-.07,0,600,.1,500,"#93b56c"),i(t,-2,.08,.5,124,.2,95,"#b7d18b"),ed.forEach(([l,c,u,h,d])=>i(t,(l+c)/2,.185,(u+h)/2,c-l,.012,h-u,d));for(let[l,c,u,h]of[["pavements","box","#ddd8cb",!1],["roads","box","#7d848c",!1],["medians","box","#72b24e",!1],["stripes","box","#f3f4f1",!1],["roundabouts","disc","#7d848c",!1],["roundaboutGreens","disc","#6fae4c",!1],["treeTrunks","cyl6","#7a5a3a",!1],["treeCrowns","ico","#fff",!0],["palmTrunks","cyl6","#8a6a45",!1],["palmCrowns","cone7","#3f9b4a",!0],["hedges","box","#3f7f35",!1],["flowers","dome","#fff",!1],["lampPosts","cyl6","#8d96a0",!1],["lampHeads","box","#fff3c4",!1],["hills","hill","#fff",!1],["cars","box","#fff",!0],["carWindows","box","#1e293b",!1]])ad(t,sd[l],c,u,l==="hills"||l==="treeCrowns"?"flat":l==="lampHeads"?"glow":"matte",h);ad(n,wc,"box","#fff"),ad(n,Ec,"pyr","#fff");let r=new tt(Ac.disc,Rc("#4fb3e6","wet"));r.scale.set(8,.02,5),r.position.set(-36,.22,-9),t.add(r),Sc.forEach(([l,c,u,h,d])=>e(l,d,h,t,c,.258,u));let a=[],o=[];for(let[l,c]of Object.entries(Mc)){let u=new Ze;if(u.position.set(c.x,.28,c.z),u.rotation.y=c.ry||0,t.add(u),c.round){let d=new tt(Ac.disc,Rc(c.pad||"#ece7dc"));d.scale.set(c.w/2,.08,c.w/2),d.position.y=-.04,u.add(d)}else i(u,0,-.04,0,c.w,.08,c.d,c.pad||"#ece7dc");o.push({...c,artwork:n0[l]||Yp[l],scale:l==="abjAirport"?[.84,1,1.15]:void 0});let h=i0[l];if(h){let[d,,f,,m,x,g,p,C]=h;e(d,C,f,u,m,x,g,!1,p)}else l.startsWith("home_")||e(c.label.toUpperCase(),"#fff",Math.min(c.w*.55,3),u,0,Math.min(c.top*.65,1.4),c.d/2+.03,!1,"#0f3d2e");l.startsWith("home_")||a.push({id:l,city:"abuja",name:c.label,area:rd[l]?.area||"Abuja",emoji:rd[l]?.emoji||"\u{1F4CD}",...c,h:c.top,group:u})}Ev(t,[...o,{x:52,z:-1,y:.2,artwork:Kp},{x:-56,z:-8,y:.2,artwork:Zp},{x:46,z:12,y:.2,artwork:Jp}]);for(let l=0;l<4;l++){let c=new Ze;c.position.set(-39+l*7,.65,35.8),t.add(c),i(c,0,0,0,.28,.25,2.3,"#f7f5ef"),i(c,0,0,-.1,2.2,.05,.42,"#f7f5ef"),i(c,0,.19,.8,.07,.5,.5,"#0f8a4f"),i(c,0,0,.9,.9,.04,.25,"#f7f5ef")}for(let[l,c,u]of[[0,-17,-30],[1,6,-28],[2,20,-3],[3,40,22],[4,-32,19],[5,-45,-17]]){i(s,c,1.8,u,4.4,2,.12,"#202431");for(let h of[-1.8,1.8])i(s,c+h,.9,u,.09,1.8,.09,"#202431");e(l%2?"ABUJA LIFE":"YOUR AD HERE","#fff",4.2,s,c,1.8,u+.07,!1,l%2?"#206b57":"#276998")}return t.visible=!1,{world:t,homes:n,boards:s,places:a}}var z=Object.freeze({backdrop:"#93b56c",ground:"#b7d18b",groundLight:"#c7e0a5",lawn:"#7fc15a",lawnLight:"#9ad06f",leaf:"#4f9a3c",leafDark:"#3c8434",hedge:"#3f7f35",trunk:"#7a5a3a",water:"#4fb3e6",waterDark:"#67afd5",glass:"#7dd3fc",glassMid:"#4f7fae",glassDark:"#36597d",dark:"#1f2328",darkBlue:"#1e293b",road:"#7d848c",roadDark:"#5b6169",pavement:"#ddd8cb",white:"#f7f5ef",cream:"#efe5cf",brick:"#a9573f",brickLight:"#c87958",pubRed:"#a83232",pubGreen:"#236b48",gold:"#e8b931"}),od=z.backdrop;var so=[["dubAirport","Dublin Airport","Northside","\u2708\uFE0F",-11,-40,36,12,3.4,"airport","A miniature international airport with a marked runway, taxiway, glazed terminal, boarding gates, aircraft stands and helipads."],["dubPhoenix","Phoenix Park","Northside","\u{1F98C}",-32,-19,15,15,1.3,"park","A wide green park on the western side of the city."],["dubCroke","Croke Park","Northside","\u{1F3DF}\uFE0F",15,-25,12,9,2.5,"stadium","The home of Gaelic games, with a pitch and tiered stands."],["dubSpire","The Spire","City centre","\u{1F4CD}",0,-15,3,3,8,"spire","A slender silver landmark on O\u2019Connell Street."],["dubGPO","General Post Office","City centre","\u{1F3DB}\uFE0F",-3,-10,7,4,2.2,"classical","A columned landmark facing O\u2019Connell Street."],["dubPenneys","Penneys","City centre","\u{1F6CD}\uFE0F",-12,-10,5,4,1.8,"shop","A city-centre clothes shop, with brick frontage and broad display windows."],["dubConnolly","Connolly Station","Northside","\u{1F689}",15,-15,8,5,2.2,"station","Rail platforms and a station entrance on the north side."],["dubCustom","The Custom House","Docklands","\u{1F3DB}\uFE0F",17,-5.5,10,4,3.6,"custom","A long neoclassical riverside building with a central dome."],["dubEPIC","EPIC & CHQ","Docklands","\u{1F9F3}",26,-11,8,5,1.8,"warehouse","A restored warehouse and museum precinct in the Docklands."],["dubConvention","Convention Centre","Docklands","\u{1F3E2}",31,-5.5,6,4,3.8,"convention","A modern riverside building with a tilted glass atrium."],["dubHapenny","Ha\u2019penny Bridge","City centre","\u{1F309}",-5,0,1.2,4.7,1.1,"archBridge","The white pedestrian bridge connecting the two banks of the Liffey."],["dubBeckett","Samuel Beckett Bridge","Docklands","\u{1F309}",30,0,2,4.7,4,"harpBridge","A harp-shaped bridge across the river in the Docklands."],["dubTemple","Temple Bar","City centre","\u{1F3BB}",-5,7,7,5,1.9,"pub","Colourful pub fronts, cobbled lanes and a small music courtyard."],["dubCastle","Dublin Castle","City centre","\u{1F3F0}",-13,10,7,6,3,"castle","A stone tower and courtyard among the city-centre streets."],["dubChrist","Christ Church Cathedral","City centre","\u26EA",-21,7,7,5,3.5,"cathedral","A stone cathedral with a central tower and pitched roofs."],["dubGuinness","Guinness Storehouse","City centre","\u{1F37A}",-32,8,9,7,3.7,"guinness","A brick brewery complex topped by a circular glass lookout."],["dubTrinity","Trinity College","City centre","\u{1F393}",7,9,11,9,3.5,"college","A historic campus with a central green, library and campanile."],["dubGrafton","Grafton Street","City centre","\u{1F3B6}",3,17,4,6,2.1,"shoppingStreet","A pedestrian shopping street with colourful fa\xE7ades and busking space."],["dubBrown","Brown Thomas","City centre","\u{1F6CD}\uFE0F",9,18,5,4,2.4,"shop","A department store beside the Grafton Street shopping area."],["dubGreen","St Stephen\u2019s Green","City centre","\u{1F333}",6,26,12,9,1.3,"green","A landscaped city park with paths, trees and a pond."],["dubPatrick","St Patrick\u2019s Cathedral","City centre","\u26EA",-16,21,7,7,4.5,"cathedral","A tall stone cathedral beside a garden on the south side."],["dubWhelans","Whelan\u2019s","City centre","\u{1F3B8}",-5,25,5,4,1.6,"pub","A live-music venue with a warm street frontage."],["dubMerrion","Merrion Square","City centre","\u{1F337}",18,21,8,8,1.2,"park","A garden square framed by Georgian terraces."],["dubCanal","Grand Canal Dock","Docklands","\u2693",28,12,12,9,3,"dock","A waterfront basin, modern offices and a theatre beside the water."],["dubAviva","Aviva Stadium","Docklands","\u{1F3C9}",34,25,10,8,3.2,"stadium","An oval stadium on the southeastern side of this compact map."],["dubGarda","Garda Station","Northside","\u{1F693}",-21,-10,5,4,1.6,"civic","A local station in the northside neighbourhood."],["dubIntreo","Intreo Office","Northside","\u{1F4C4}",-12,-20,5,4,1.8,"civic","A fictional service-office location for the future game."],["dubCitizens","Citizens Information","Northside","\u2139\uFE0F",-4,-23,5,4,1.6,"civic","A fictional information-office location for the future game."],["dubNaija","Nigerian Shop","Northside","\u{1F1F3}\u{1F1EC}",5,-25,5,4,1.5,"shop","An illustrative community shop with Nigerian groceries."],["dubTesco","Tesco","Northside","\u{1F6D2}",24,-22,6,4,1.4,"shop","An illustrative neighbourhood supermarket."],["dubLidl","Lidl","Northside","\u{1F6D2}",33,-21,6,4,1.4,"shop","An illustrative neighbourhood supermarket."],["dubDunnes","Dunnes Stores","City centre","\u{1F6D2}",-24,19,5,4,1.8,"shop","An illustrative city-centre grocery and clothing shop."],["dubChipper","The Chipper","City centre","\u{1F35F}",-33,20,5,4,1.4,"shop","A small local takeaway with a striped shopfront."],["dubKilmainham","Kilmainham Gaol","City centre","\u{1F512}",-39,-8,4,3,2.8,"museum","A former prison and museum telling stories from Irish history."],["dubIMMA","Irish Museum of Modern Art","City centre","\u{1F5BC}\uFE0F",-31,-8,4,3,2.4,"museum","Contemporary art galleries at the historic Royal Hospital Kilmainham."],["dubAudoen","St Audoen\u2019s Church","City centre","\u26EA",-39,-4,4,3,2.5,"classical","A medieval church on the Dubline heritage trail."],["dubMoore","Moore Street Market","Northside","\u{1F955}",-27,-4,4,3,1.8,"market","Open-air produce stalls on one of Dublin\u2019s historic trading streets."],["dubMater","Mater Hospital","Northside","\u{1F3E5}",-19,-4,4,3,2.7,"hospital","A Dublin hospital campus represented as a city service destination."],["dubAbbey","Abbey Theatre","Northside","\u{1F3AD}",-11,-4,4,3,2.5,"theatre","Ireland\u2019s national theatre, with a compact stage-front fa\xE7ade."],["dubKilmainhamCafe","The Barracks Caf\xE9","City centre","\u2615",-39,4,4,3,1.5,"cafe","An illustrative caf\xE9 stop near the western heritage quarter."],["dubGallery","National Gallery of Ireland","City centre","\u{1F3A8}",-15,4,4,3,2.6,"museum","A gallery destination for Irish and European art."],["dubIFSC","Liffey Quay Offices","Docklands","\u{1F3E2}",17,4,4,3,3,"office","An illustrative office block serving the Docklands business district."],["dubArena","3Arena","Docklands","\u{1F3A4}",37,4,4,3,3.2,"theatre","A large indoor venue for concerts and live events."],["dubGardenRemembrance","Garden of Remembrance","Northside","\u{1F33F}",-39,8,4,3,1.3,"park","A quiet memorial garden at the north end of the city centre."],["dubCHQOffice","CHQ Offices","Docklands","\u{1F4BC}",17,8,4,3,2.5,"office","An illustrative office address beside the restored warehouse quarter."],["dubDockCafe","Quayside Coffee","Docklands","\u2615",37,8,4,3,1.6,"cafe","An illustrative coffee stop on the eastern waterfront."],["dubRathminesClinic","Southside Clinic","City centre","\u{1FA7A}",-39,12,4,3,2.1,"hospital","An illustrative walk-in health service for the game map."],["dubPearseLibrary","Pearse Street Library","City centre","\u{1F4DA}",-23,12,4,3,2,"library","A Dublin City Libraries branch with books, study space and events."],["dubIveagh","Iveagh Gardens","City centre","\u{1F337}",-7,12,4,3,1.3,"park","A hidden city garden with formal lawns, fountains and a yew maze."],["dubBordGais","Bord G\xE1is Energy Theatre","Docklands","\u{1F3AD}",17,12,4,3,3.4,"theatre","A modern theatre venue in the Grand Canal Dock quarter."],["dubHotelDock","Canal View Hotel","Docklands","\u{1F6CE}\uFE0F",37,12,4,3,2.8,"hotel","An illustrative hotel for visitors exploring the waterfront."],["dubDublinia","Dublinia","City centre","\u{1F6E1}\uFE0F",-39,16,4,3,2.7,"museum","An interactive Viking and medieval Dublin visitor attraction."],["dubStJames","St James\u2019s Hospital","City centre","\u{1F3E5}",-31,16,4,3,3,"hospital","A major Dublin hospital represented as a public service destination."],["dubNCAD","National College of Art and Design","City centre","\u270F\uFE0F",-7,16,4,3,2.5,"college","An art and design campus in the historic Liberties quarter."],["dubDockGym","Docklands Fitness Club","Docklands","\u{1F3CB}\uFE0F",37,16,4,3,2.2,"gym","An illustrative neighbourhood gym and recreation stop."],["dubHotelWest","Liberties House Hotel","City centre","\u{1F6CF}\uFE0F",-39,20,4,3,2.5,"hotel","An illustrative small hotel in the western city quarter."],["dubCityCinema","City Centre Cinema","City centre","\u{1F3AC}",-7,20,4,3,2.4,"cinema","An illustrative independent cinema with a compact entrance."],["dubRingsendMarket","Ringsend Market Hall","Docklands","\u{1F34E}",25,20,4,3,2,"market","An illustrative neighbourhood market near the south-east docks."],["dubWarMemorial","Irish National War Memorial Gardens","City centre","\u{1F333}",-39,24,4,3,1.2,"park","Formal riverside gardens with memorial features and lawns."],["dubRathminesGym","South City Gym","City centre","\u{1F3CB}\uFE0F",-31,24,4,3,2,"gym","An illustrative local fitness club with a simple street entrance."],["dubSouthCafe","Green Lane Caf\xE9","City centre","\u2615",-23,24,4,3,1.5,"cafe","An illustrative neighbourhood caf\xE9 for a quick break."],["dubDockHotel","Grand Canal Hotel","Docklands","\u{1F6CE}\uFE0F",25,24,4,3,2.7,"hotel","An illustrative hotel beside the Docklands offices and venues."],["dubPhibsboroMarket","Northside Market Hall","Northside","\u{1F9FA}",-19,-28,4,3,1.9,"market","An illustrative local market serving the northside neighbourhood."],["dubNorthCafe","North Circular Caf\xE9","Northside","\u2615",-11,-28,4,3,1.5,"cafe","An illustrative corner caf\xE9 with a small outdoor table area."],["dubNorthHotel","Garden Gate Hotel","Northside","\u{1F6CE}\uFE0F",-19,-32,4,3,2.5,"hotel","An illustrative guesthouse for visitors arriving from the north."],["dubNorthGym","Northside Fitness","Northside","\u{1F3CB}\uFE0F",-11,-32,4,3,2,"gym","An illustrative local gym with a simple street frontage."],["dubPhibsboroLibrary","Phibsboro Library","Northside","\u{1F4DA}",-3,-32,4,3,2,"library","A Dublin City Libraries branch with books and community events."],["dubNorthCinema","Northside Picture House","Northside","\u{1F3AC}",5,-32,4,3,2.4,"cinema","An illustrative small cinema for the game\u2019s northside district."],["dubDockMarket","East Quay Market","Docklands","\u{1F9FA}",13,-32,4,3,1.8,"market","An illustrative market hall for the eastern neighbourhood."]].map(([i,e,t,n,s,r,a,o,l,c,u])=>({id:i,name:e,area:t,emoji:n,x:s,z:r,w:a,d:o,h:l,kind:c,description:u,city:"dublin",arrivalX:s,arrivalZ:r<0?r-o/2-.65:r+o/2+.65}));var Tn={box:new Vt(1,1,1),nose:new _n(.5,1,12),wheel:new Ut(.11,.11,.07,10),blade:new Vt(1,.035,.12)},bi=new Ar;bi.moveTo(.38,-.29);bi.lineTo(-.18,-1.5);bi.lineTo(.2,-1.5);bi.lineTo(.52,-.29);bi.lineTo(.52,.29);bi.lineTo(.2,1.5);bi.lineTo(-.18,1.5);bi.lineTo(.38,.29);bi.closePath();Tn.sweptWing=new Ba(bi,{depth:.09,bevelEnabled:!1});Tn.sweptWing.translate(0,0,-.045);Tn.sweptWing.rotateX(Math.PI/2);var ld=new Map;function cd(i,e=.72){let t=`${i}/${e}`;return ld.has(t)||ld.set(t,new Ot({color:i,roughness:e})),ld.get(t)}function Wi(i,e,t,n,s,r){let a=new tt(e,cd(t));return a.position.set(...n),a.scale.set(...s),r&&a.rotation.set(...r),a.castShadow=!0,a.receiveShadow=!0,i.add(a),a}function Yt(i,e,t,n){return Wi(i,Tn.box,e,t,n)}function ro(i,e=new Set){i.updateMatrixWorld(!0);let t=i.matrixWorld.clone().invert(),n=new Map,s=[],r=a=>{if(!(a!==i&&e.has(a)))if(a.isMesh){a.updateMatrixWorld(!0);let o=a.material;n.has(o)||n.set(o,[]);let l=a.geometry.clone();l.applyMatrix4(t.clone().multiply(a.matrixWorld)),l.index&&(l=l.toNonIndexed());for(let c of Object.keys(l.attributes))c!=="position"&&c!=="normal"&&l.deleteAttribute(c);l.attributes.normal||l.computeVertexNormals(),l.clearGroups(),n.get(o).push(l),s.push(a)}else for(let o of[...a.children])r(o)};r(i);for(let a of s)a.parent.remove(a);for(let[a,o]of n){let l=zp(o,!1);for(let u of o)u.dispose();if(!l)continue;let c=new tt(l,a);c.castShadow=!0,c.receiveShadow=!0,i.add(c)}}function ao({scale:i=1,color:e="#f4f1e8"}={}){let t=new Ze;t.name="Dublin airliner",t.scale.setScalar(i);let n="#33434a",s="#9ed4e4",r="#d9dfdc";Yt(t,"#f7f5ef",[-.08,.58,0],[2.62,.47,.52]);let a=Wi(t,Tn.nose,"#f7f5ef",[1.5,.58,0],[.24,.54,.47],[0,0,-Math.PI/2]),o=Wi(t,Tn.nose,"#f7f5ef",[-1.48,.58,0],[.2,.46,.42],[0,0,Math.PI/2]);a.name="rounded nose",o.name="tail cone",Wi(t,Tn.sweptWing,r,[-.12,.43,0],[1,1,1]),Yt(t,r,[-1.12,.66,0],[.57,.09,1.06]).rotation.y=-.16,Yt(t,e,[-1.26,1.02,0],[.43,.65,.08]);for(let l of[-.78,.78]){Yt(t,"#c4cdd0",[.08,.17,l],[.66,.24,.27]),Yt(t,n,[.43,.17,l],[.035,.17,.22]);for(let c=-.8;c<=.82;c+=.27)Yt(t,s,[c,.78,l<0?-.267:.267],[.12,.075,.025])}Yt(t,s,[1.03,.79,0],[.36,.09,.35]);for(let l of[-.86,.63])for(let c of[-.77,.77])Yt(t,"#414b4c",[l,.105,c],[.075,.21,.075]),Wi(t,Tn.wheel,"#222a2d",[l,.11,c],[1,1,1],[Math.PI/2,0,0]);return Yt(t,"#414b4c",[.91,.12,0],[.07,.24,.07]),Wi(t,Tn.wheel,"#222a2d",[.91,.11,0],[1,1,1],[Math.PI/2,0,0]),ro(t),t.userData.forward="+X",t}function Cc({scale:i=1,color:e="#477b57"}={}){let t=new Ze;t.name="Dublin helicopter",t.scale.setScalar(i);let n="#9ed4e4",s="#263236";Yt(t,e,[0,.83,0],[.94,.55,.62]),Wi(t,Tn.nose,e,[.5,.83,0],[.25,.57,.56],[0,0,-Math.PI/2]),Yt(t,n,[.54,1.02,0],[.08,.26,.43]),Yt(t,s,[-.62,.87,0],[.08,.1,.12]),Yt(t,e,[-.86,.92,0],[.98,.13,.16]),Wi(t,Tn.nose,e,[-1.36,.93,0],[.13,.24,.13],[0,0,Math.PI/2]);let r=new Ze;r.name="main rotor",r.position.set(-.08,1.22,0);for(let o=0;o<4;o++){let l=new tt(Tn.blade,cd("#27383a")),c=o*Math.PI/2;l.scale.set(1.05,1,1),l.position.set(Math.cos(c)*.53,0,-Math.sin(c)*.53),l.rotation.y=c,l.castShadow=!0,r.add(l)}t.add(r);let a=new Ze;a.name="tail rotor",a.position.set(-1.34,.94,0);for(let o=0;o<3;o++){let l=new tt(Tn.blade,cd("#27383a"));l.scale.set(.34,1,.8),l.rotation.z=o*Math.PI*2/3,l.castShadow=!0,a.add(l)}ro(r),ro(a),t.add(a);for(let o of[-.42,.42])Yt(t,s,[-.03,.32,o],[.065,.53,.065]),Yt(t,s,[-.05,.055,o],[1.25,.07,.08]);return ro(t,new Set([r,a])),t.userData.rotors=[r,a],t.userData.forward="+X",t}function Ic({color:i="#f2eee2",scale:e=1,bus:t=!1}={}){let n=new Ze;n.name=t?"Dublin bus":"Dublin car",n.scale.setScalar(e);let s=t?[1.9,.72,.72]:[1.05,.4,.55];Yt(n,i,[0,s[1]/2+.08,0],s),t?(Yt(n,"#f5d44f",[0,.53,.372],[1.65,.27,.025]),Yt(n,"#a9d7df",[0,.61,-.02],[1.65,.27,.57])):Yt(n,"#a9d7df",[-.04,.42,0],[.59,.26,.44]);for(let r of[-s[0]*.32,s[0]*.32])for(let a of[-s[2]*.47,s[2]*.47])Wi(n,Tn.wheel,"#202729",[r,.11,a],[1,.9,1],[Math.PI/2,0,0]);return ro(n),n}var hd=Object.freeze({runway:{x:-11,z:-43.5,y:.33,length:32,width:1.5},helipad:{x:-26,z:-36.25,y:.4}}),An=(i,e=.8,t=0)=>new Ot({color:i,roughness:e,metalness:t});function w0({lot:i={x:-11,z:-40},textSurface:e}={}){let t=new Ze;t.name="Dublin Airport",t.position.set(i.x,.26,i.z);let n={grass:An(z.lawn),concrete:An("#b7b9b5"),apron:An("#aeb2b1"),asphalt:An("#30363b"),stripe:An("#f7f5ef"),yellow:An("#e9bc32"),light:new Ot({color:"#ffe8a3",emissive:"#b5892d",emissiveIntensity:.55}),glass:new Ot({color:z.glass,roughness:.23,metalness:.14}),steel:An("#72808a",.4,.4),roof:An("#d8dfe0",.38,.22),brick:An(z.brick),dark:An(z.dark),green:An(z.pubGreen),red:An("#ce3b36")},s=[],r=[],a=(_,T,A,L,U,S,M,w,E=0,I=0)=>{s.push({name:_,x:T,y:A,z:L,sx:U,sy:S,sz:M,rotY:E,rotX:I,color:w.color})},o=(_,T,A,L,U,S,M,w=12)=>{r.push({name:_,x:T,y:A,z:L,sx:U,sy:S,sz:U,color:M.color})},l=()=>{let _=(T,A,L)=>{if(!A.length)return;let U=new Gn(L,new Ot({color:"#ffffff",roughness:.72}),A.length),S=new pt;if(U.name=A[0].name,A.forEach((M,w)=>{if(S.position.set(M.x,M.y,M.z),S.scale.set(M.sx||1,M.sy||1,M.sz||1),S.rotation.set(M.rotX||0,M.rotY||0,0),S.updateMatrix(),!S.matrix.elements.every(Number.isFinite))throw new Error(`Nonfinite airport instance transform: ${M.name}`);U.setMatrixAt(w,S.matrix),U.setColorAt(w,M.color)}),U.instanceMatrix.needsUpdate=!0,U.castShadow=!0,U.receiveShadow=!0,U.computeBoundingSphere(),!Number.isFinite(U.boundingSphere?.radius))throw new Error(`Invalid airport instance bounds: ${U.name}`);T.add(U)};_(t,s,new Vt(1,1,1)),_(t,r,new Ut(1,1,1,12))},c=(_,T,A,L,U,S,M,w)=>{let E=new tt(new di(1,12,8),w);return E.name=_,E.position.set(T,A,L),E.scale.set(U,S,M),t.add(E),E},u=(_,T,A,L,U=n.yellow,S=.09)=>a("taxiway marking",_,S,T,A,.018,L,U),h=hd.runway.x-i.x,d=hd.runway.z-i.z;a("airfield grass",0,-.015,0,36,.04,12,n.grass),a("taxi apron",0,.035,.45,34,.07,4.2,n.apron),a("runway 09/27",h,.055,d,32,.075,1.55,n.asphalt);for(let _=-14.5;_<=14.5;_+=1.65)u(_,d,.72,.055,n.stripe,.101);for(let _ of[-15.05,15.05]){for(let T=-3;T<=3;T++)a("runway threshold bar",_,.103,d+T*.17,.82,.018,.075,n.stripe);for(let T of[-1,1]){let A=new tt(new Vt(.12,.075,.12),n.light);A.position.set(_,.14,d+T*.94),t.add(A)}}for(let _=-15;_<=15;_+=2)for(let T of[-1,1]){let A=new tt(new Vt(.075,.065,.075),n.light);A.position.set(_,.115,d+T*.86),t.add(A)}u(0,-2.2,30,.07),u(-15.2,-2.85,.07,1.3),u(15.2,-2.85,.07,1.3);for(let _ of[-15.2,15.2])u(_,-3.5,.07,1.3);for(let _ of[-4,4])u(_,-2.2,.08,.48,n.stripe,.105),u(_,-2.2,.08,.48,n.stripe,.105);for(let _ of[-13,-8,-3,2,7,12])u(_,-2.2,.8,.055),u(_,-2.2,.055,.52);e&&(e("09","#ffffff",2.5,t,h-13.3,.11,d,!0),e("27","#ffffff",2.5,t,h+13.3,.11,d,!0)),a("terminal base",0,.42,2.12,16.8,.75,2.15,n.brick),a("terminal concourse",0,.91,2.04,17,.72,2.05,n.glass),a("terminal lower mullion",0,.55,.94,16.8,.08,.08,n.steel),a("arrivals glazing",0,.77,3.21,16.7,.62,.035,n.glass);for(let _=-8;_<=8;_+=.8)a("arrivals mullion",_,.78,3.24,.045,.64,.04,n.steel);for(let _=-8;_<=8;_+=.55)a("terminal mullion",_,.9,1,.045,.62,.045,n.steel);let f=_=>1.39+Math.sin(_*Math.PI/4)*.22;for(let _=0;_<5;_++){let T=(f(_+1)-f(_))/.47;a("curved canopy roof panel",0,f(_)-.03,1.05+_*.47+.235,17.8,.1,.49,n.roof,0,-Math.atan(T))}for(let _=-8.3;_<=8.31;_+=1.15)for(let T=0;T<=4;T++){let A=1.05+T*.47,L=1.36+Math.sin(T*Math.PI/4)*.22;a("canopy arch rib",_,L,A,.055,.075,.07,n.steel)}a("departure hall sign",0,1.55,.93,3.2,.25,.08,n.green),e&&e("DUBLIN AIRPORT","#ffffff",3,t,0,1.55,.985,!1,"#236b48");for(let _ of[-6,-2,2,6])a("jet bridge",_,.76,.18,1.3,.34,1.05,n.glassMid||n.glass),a("jet bridge support",_,.36,.23,.13,.62,.13,n.steel),a("boarding stand number",_,.16,-.55,.82,.06,.36,n.dark),e&&e(String([-6,-2,2,6].indexOf(_)+1),z.white,.42,t,_,.205,-.55,!1,"#1f2328");for(let _ of[-6,-2,2,6]){u(_,-.85,.065,1.2),u(_,-1.5,.8,.05),u(_,-1.5,.05,.5);for(let T of[-.8,.8])o("apron bollard",_+T,.18,-.92,.045,.36,n.yellow,8)}a("tower service block",-16,.42,1.3,2,.8,1.7,n.concrete),a("tower shaft",-16,1.4,1.3,.52,1.25,.52,n.concrete),a("control room",-16,2.15,1.3,1.05,.52,1.05,n.glass),a("tower roof",-16,2.44,1.3,1.25,.1,1.25,n.dark),o("tower antenna",-16,2.8,1.3,.025,.65,n.steel,8),a("charter apron",12,.03,-1.05,5,.07,2.1,n.concrete);for(let _=10;_<=14;_+=2)u(_,-1.05,.05,1.5);let m=ao({scale:.64,color:"#c8d9e8"});m.name="parked charter jet",m.position.set(12,.12,-1.05),m.rotation.y=-Math.PI/2,t.add(m);let x=[];for(let _ of[-15,-11.5]){o("helipad asphalt",_,.075,3.75,1.05,.08,n.asphalt,32);for(let T=0;T<16;T++){let A=T*Math.PI/8;a("helipad perimeter light",_+Math.cos(A)*.96,.14,3.75+Math.sin(A)*.96,.11,.035,.11,n.light)}a("helipad H crossbar",_,.13,3.75,1.15,.025,.12,n.stripe);for(let T of[-.42,.42])a("helipad H leg",_+T,.13,3.75,.12,.025,.92,n.stripe)}let g=Cc({scale:.72});g.name="parked helicopter",g.position.set(-15,.14,3.75),t.add(g),x.push(g);let p=[],C=[[-6,-.9,"#f7f5ef"],[-2,-.9,"#2a8c68"],[2,-.9,"#e8b931"],[6,-.9,"#d8e2ea"]];for(let[_,T,A]of C){let L=ao({color:A});L.name="Dublin Airport gate aircraft",L.position.set(_,.14,T),L.rotation.y=-Math.PI/2,t.add(L),p.push(L)}p.push(m);let v=(_,T,A,L)=>{a(_+" body",T,.19,A,.72,.25,.38,An(L)),a(_+" cab",T+.12,.36,A,.32,.18,.34,n.glass);for(let U of[-.23,.23])for(let S of[-.22,.22])o(_+" wheel",T+U,.09,A+S,.09,.07,n.dark,10)};v("baggage tug",-8,.6,"#e8b931"),v("fuel truck",8,.55,"#d4d9de"),a("baggage cart",-9,.16,.9,.8,.2,.42,n.concrete),a("belt loader",-8.8,.32,1.3,.14,.55,.9,n.dark,Math.PI/8),a("terminal car park",12,.025,2.45,5,.05,3.4,n.concrete);for(let[_,T]of["#f7f5ef","#36597d","#a83232","#1f2328"].entries()){let A=Ic({color:T,scale:.8});A.position.set(10.5+_,.09,2.45),A.rotation.y=Math.PI/2,t.add(A)}for(let _=1;_<=3.5;_+=.6)u(12,_,4.7,.035,n.stripe,.075);a("airport arrivals road",0,.025,5.15,35,.055,1,An(z.roadDark));for(let _=-16;_<=16;_+=1.8)u(_,5.15,.72,.045,n.stripe,.07);for(let _ of[-10,10])a("roadside lamp post",_,.62,4.45,.055,1.2,.055,n.steel),c("roadside lamp",_,1.25,4.45,.13,.1,.13,n.light);return l(),t.userData={runway:{...hd.runway},gateCount:4,parkedAircraft:p,helicopters:x,counts:{airliners:4,privateJets:1,helicopters:1,helipads:2}},t}var E0=[-28,-18,-5,2,18,30];function Tv(i,e){return i<-42||i>40||e<-47||e>33?!1:Math.abs(e)<2.25?E0.some(t=>Math.abs(i-t)<(t===30?1:.6)):!(i>23.7&&i<30.3&&e>9.2&&e<14.8)}function T0({textSurface:i}){let e=new Ze,t=new Ze,n=new Ze,s=new Ze;e.name="Dublin",t.name="Dublin neighbourhoods",n.name="Dublin landmarks",e.add(t,n,s);let r={box:new Vt(1,1,1),cyl:new Ut(1,1,1,16),cone:new _n(1,1,12),sphere:new Ps(1,1),roof:new _n(1,1,4,1,!1,Math.PI/4)},a=new Map,o=[0,0,0],l=e,c=null;function u(w,E,I,B,N,F,q,j,ue=l,he=[0,0,0]){let fe=F>.15,De=`${ue.uuid}:${w}:${fe}`;a.has(De)||a.set(De,{parent:ue,type:w,cast:fe,items:[]}),a.get(De).items.push({p:[E+o[0],I+o[1],B+o[2]],s:[N,F,q],color:j,rotation:he,lotId:c})}let h=(w,E,I,B,N,F,q,j=l,ue)=>u("box",w,E,I,B,N,F,q,j,ue),d=(w,E,I,B,N,F,q=l)=>u("cyl",w,E,I,B,N,B,F,q);function f(w,E,I=1,B=l){d(w,.45*I,E,.07*I,.9*I,z.trunk,B),u("sphere",w,1.1*I,E,.55*I,.7*I,.55*I,z.leaf,B)}function m(w,E,I,B,N,F=z.dark){u("roof",w,E+.35,I,B*.74,.7,N*.74,F)}function x(w,E,I,B,N,F=z.brick,q=l){h(w,N/2,E,I,N,B,F,q),h(w,N+.07,E,I+.15,.14,B+.15,z.dark,q);let j=F===z.white||F===z.cream?z.cream:z.dark,ue=(he,fe,De,Xe,gt=!1)=>{if(gt){h(he,fe,De,.035,.35,Xe,z.glass,q);for(let st of[-1,1])h(he,fe,De+st*(Xe/2+.018),.045,.4,.035,j,q);h(he,fe-.2,De,.06,.045,Xe+.08,j,q),h(he,fe+.2,De,.055,.035,Xe+.04,j,q),h(he+.025,fe,De,.018,.34,.025,j,q)}else{h(he,fe,De,Xe,.35,.035,z.glass,q);for(let st of[-1,1])h(he+st*(Xe/2+.018),fe,De,.035,.4,.045,j,q);h(he,fe-.2,De,Xe+.08,.045,.06,j,q),h(he,fe+.2,De,Xe+.04,.035,.055,j,q),h(he,fe,De+.025,.025,.34,.018,j,q)}};for(let he=.45;he<N-.15;he+=.6){for(let fe=-I/2+.35;fe<I/2;fe+=.65)ue(w+fe,he,E+B/2+.018,.3,.035,!0);if(I>1.35&&B>1.25){for(let fe of[-1,1])ue(w+fe*(I/2+.018),he,E,.3,!0);for(let fe=-I/2+.4;fe<I/2-.1;fe+=.85)ue(w+fe,he,E-B/2-.018,.3,.035,!0)}}}function g(w,E,I,B,N=1.5){for(let F=0;F<I;F++)d(w-B/2+F*B/(I-1),N/2,E,.11,N,z.cream);h(w,N+.08,E,B+.45,.16,.65,z.cream)}function p(w,E,I=.035){let B=new Tr(w.map(F=>new D(F[0]+o[0],F[1]+o[1],F[2]+o[2]))),N=new tt(new Fa(B,32,I,5,!1),new Ot({color:E,roughness:.65}));e.add(N)}function C(w,E,I,B){h(w,.205,E,I,.035,B,z.waterDark);for(let N=0;N<4;N++)h(w-I*.3+N*I*.2,.228,E+Math.sin(N*3)*B*.25,I*.1,.005,.025,z.glass)}function v(w,E,I=!1){h(0,.23,0,w,.06,E,z.lawn),h(0,.27,0,w-.6,.025,.45,z.pavement),h(0,.27,0,.45,.025,E-.6,z.pavement);for(let B of[-w*.36,w*.36])for(let N of[-E*.32,0,E*.32])f(B,N,1.15);I&&C(w*.2,-E*.22,w*.36,E*.3);for(let B of[-w*.22,w*.22])h(B,.5,E*.2,1.1,.13,.35,z.trunk),h(B,.7,E*.34,1.1,.4,.08,z.trunk)}function _(w,E){if(o=[w,.24,0],h(0,.2,0,E==="harpBridge"?1.8:1.05,.16,4.8,z.white),E==="archBridge")for(let I of[-.53,.53]){p([[I,.3,-2.4],[I,.9,-1.2],[I,1.05,0],[I,.9,1.2],[I,.3,2.4]],z.white,.055);for(let B=-2.2;B<=2.2;B+=.35)h(I,.5+.3*(1-Math.abs(B)/2.4),B,.035,.55,.035,z.white)}else if(E==="harpBridge"){p([[.8,.3,1.5],[.8,2.1,.6],[.8,4,-.7],[.8,4.6,-2.1]],z.white,.14);for(let I=0;I<9;I++){let B=-2.1+I*.5;p([[.8,4.2,-1.8],[.8,.34,B]],z.white,.018)}}else for(let I of[-.5,.5])h(I,.55,0,.07,.55,4.7,z.road);o=[0,0,0]}h(0,-.15,0,450,.12,450,z.backdrop),h(-1,.06,-7,84,.25,80,z.ground),h(-1,.2,-22,83,.018,47,z.groundLight),h(-1,.2,18,83,.018,30,z.groundLight),C(-1,0,84,4.5),C(64,4,48,68);for(let w of[-2.9,2.9])h(-1,.26,w,83,.06,.55,z.pavement),h(-1,.235,w+(w<0?-.75:.75),83,.03,.95,z.roadDark);for(let w of[-31,-18,-6,5,15,32])h(-1,.24,w,82,.035,.75,z.road);for(let w of[-40,-25,-9,2,14,22,39])for(let[E,I]of[[-19,29],[19,28]])h(w,.24,E,.65,.035,I,z.road);h(2,.245,-11,1.7,.035,18,z.roadDark),h(2,.266,-11,.16,.025,18,z.lawnLight);for(let w of[-3.65,3.65])for(let E=-38;E<40;E+=2)h(E,.26,w,.8,.015,.035,z.white);for(let w of E0)_(w,w===-5?"archBridge":w===30?"harpBridge":"plain");for(let w of[-5,-4.75])h(-3,.278,w,69,.025,.03,z.roadDark);h(-7,.58,-4.86,3.5,.6,.5,"#73549b"),h(-7,.84,-4.86,3.6,.06,.55,z.white),h(-7,.64,-4.59,3.1,.28,.025,z.glassMid);let T=[],A=null;for(let w of so){if(T.push({...w}),w.kind.endsWith("Bridge"))continue;let{w:E,d:I,kind:B}=w;if(o=[w.x,.26,w.z],l=n,c=w.id,B!=="airport"&&h(0,0,0,E,.035,I,["park","green"].includes(B)?z.lawn:z.pavement),B==="airport")A=w0({lot:w,textSurface:i}),e.add(A);else if(B==="park"||B==="green")v(E-.2,I-.2,B==="green");else if(B==="spire")d(0,2.1,0,.11,4.2,"#b1bcc1"),u("cone",0,6.15,0,.11,4.1,.11,"#cbd1d3"),d(0,.035,0,1.2,.08,"#e0dcca");else if(B==="stadium"){u("cyl",0,1.1,0,E*.47,2.2,I*.46,z.cream),u("cyl",0,1.2,0,E*.4,2.25,I*.37,z.leafDark),h(0,2.35,0,E*.58,.035,I*.47,z.lawn),h(0,2.38,0,.045,.02,I*.47,z.white);for(let N of[-E*.26,E*.26])h(N,2.6,0,.06,.48,1.2,"#eae9da"),h(N,2.85,0,.12,.05,1.2,"#eae9da");for(let N of[-E*.38,E*.38])for(let F of[-I*.38,I*.38])d(N,1.6,F,.045,3.2,"#8e9b9e"),h(N,3.25,F,.65,.15,.25,"#fff4c9")}else if(B==="classical"||B==="custom")x(0,-.5,E*.85,I*.62,1.7,"#d8d1bb"),g(0,I*.3,B==="custom"?10:6,E*.78,1.6),m(0,1.8,-.5,E*.9,I*.65),B==="custom"&&(h(0,2.1,-.5,1.35,1.3,1.35,"#dfd7bc"),u("sphere",0,2.95,-.5,.8,.8,.8,"#748e86"),d(0,3.65,-.5,.08,.7,"#d4d9ce"));else if(B==="convention"){x(-.5,-.3,4,2.9,3,z.cream),u("cyl",.7,1.9,.7,1.1,3.5,1.1,z.glassMid,e,[0,0,-.2]);for(let N of[.5,1,1.5,2,2.5,3])h(.5,N,1.73,1.8,.04,.035,z.white)}else if(B==="castle"){x(0,-1,5,2,2,z.brickLight),d(-2,1.4,1,1,2.8,z.leafDark);for(let N=0;N<8;N++){let F=N/8*Math.PI*2;h(-2+Math.cos(F)*.8,2.9,1+Math.sin(F)*.8,.27,.38,.27,z.leaf)}h(.7,.04,1,3,.035,2,z.lawn)}else if(B==="cathedral")x(0,-.3,E*.3,I*.85,1.5,z.cream),m(0,1.6,-.3,E*.4,I*.9,z.dark),x(0,0,E*.75,I*.3,1.3,z.cream),m(0,1.5,0,E*.8,I*.4,z.dark),x(-E*.25,-I*.25,1.3,1.4,w.h-.5,z.cream),u("cone",-E*.25,w.h-.15,-I*.25,.9,.7,.9,z.darkBlue);else if(B==="guinness"){x(0,0,6,4,2.8,"#9a6451"),x(-3,-1,1.7,3.6,2.1,"#b58166"),d(0,3.05,0,1.45,.7,"#8daeb4"),d(0,3.45,0,1.6,.12,"#394849");for(let N of[-2,2])d(N,2.6,-2.2,.15,2.6,"#a67359")}else if(B==="college"){let N=Math.min(E/11,I/9);h(0,.02*N,0,8*N,.04*N,5.4*N,z.lawn),x(0,-3*N,8.8*N,1.3*N,1.6*N,z.cream),x(-4.2*N,.2*N,1.3*N,5*N,1.6*N,z.cream),x(4.2*N,.2*N,1.3*N,5*N,1.6*N,z.cream),g(0,3*N,8,7*N,1.5*N),h(0,.03*N,0,.5*N,.035*N,6*N,z.pavement),d(0,1.2*N,-.4*N,.32*N,2.4*N,z.cream),h(0,2.4*N,-.4*N,.8*N,.2*N,.8*N,z.cream),u("cone",0,2.85*N,-.4*N,.6*N,.7*N,.6*N,z.leafDark);for(let F of[-2.5,2.5])f(F*N,N,N)}else if(B==="dock")C(-1,0,6.6,5.6),h(-1,.29,-3,7.1,.06,.4,z.cream),x(4,-.3,2,6,2.7,z.glassMid),h(4,1.5,2.73,1.7,1.8,.025,z.glass),x(-4.3,0,1.9,6,2,z.cream),h(-1.5,.5,0,2,.3,.7,z.white),h(-1.3,.72,0,.8,.3,.58,z.glassMid);else if(B==="station"){x(0,.8,6,2,1.9,z.cream),m(0,2,.8,6.3,2.3);for(let N of[-2,-1,0,1,2])h(N,.06,-1,.15,.025,3,z.roadDark),h(N+.25,.06,-1,.15,.025,3,z.roadDark);h(-.2,.55,-1.2,2.5,.7,.6,z.pubGreen)}else if(B==="warehouse")x(0,0,7,3,1.25,"#9c775c"),m(0,1.3,0,7.3,3.4);else if(B==="pub"||B==="shoppingStreet"){let N=B==="pub"?["#963e3a","#3b7057","#b78244"]:["#ae7053","#d5b495","#788478"];for(let F=0;F<3;F++){let q=(F-1)*E*.28;x(q,-.5,E*.27,I*.55,1.5+F%2*.4,N[F]),h(q,.3,I*.21,E*.23,.55,.06,F===0&&B==="pub"?z.pubRed:z.darkBlue),h(q,.65,I*.27,E*.27,.15,.3,z.cream),m(q,1.7,-.5,E*.28,I*.6)}if(B==="pub"){h(0,.2,I*.38,1.2,.08,.7,"#735240");for(let F of[-1,1])d(F,.3,I*.37,.25,.55,"#765b43")}}else if(B==="hospital")x(-E*.2,-.35,E*.42,I*.56,2.25,z.white),x(E*.22,-.25,E*.42,I*.66,1.75,z.cream),h(-E*.2,2.28,-.35,E*.44,.12,I*.59,z.glassMid),h(0,1.25,I*.34,1.05,.16,.05,z.pubRed),h(0,1.25,I*.34,.18,.72,.05,z.pubRed);else if(B==="library"){x(0,-.25,E*.82,I*.72,1.75,z.cream),h(0,1.1,I*.37,E*.74,.46,.11,z.brickLight);for(let N=-E*.3;N<=E*.3;N+=.65)h(N,.86,I*.39,.1,.9,.08,z.darkBlue);m(0,1.85,-.25,E*.86,I*.75,z.brick)}else if(B==="office"||B==="hotel"){let N=Math.min(w.h||3.2,B==="hotel"?4.4:5.2),F=E*.58;x(0,-.2,F,I*.65,N,B==="hotel"?z.cream:z.glassMid);for(let q=.5;q<N-.2;q+=.48)h(0,q,I*.33,F*.84,.07,.05,z.glass);h(0,N+.15,-.2,F*.82,.18,I*.8,B==="hotel"?z.brick:z.dark),B==="hotel"&&h(0,.06,I*.46,E*.5,.05,.48,z.water)}else if(B==="cafe"){x(0,-.25,E*.76,I*.64,1.55,z.brickLight),m(0,1.6,-.25,E*.8,I*.68,z.dark),h(0,.95,I*.33,E*.62,.55,.06,z.glassMid),h(0,.53,I*.39,E*.68,.17,.38,z.pubRed);for(let N of[-E*.25,0,E*.25])h(N,.12,I*.4,.55,.05,.42,z.trunk),d(N,.31,I*.4,.035,.38,z.trunk)}else if(B==="market"){x(0,-.35,E*.8,I*.43,.8,z.cream),m(0,.85,-.35,E*.84,I*.47,z.brick);for(let N=-E*.32;N<=E*.32;N+=E*.32)h(N,.52,I*.05,E*.23,.7,.08,[z.pubRed,z.pubGreen,z.gold][Math.round((N/E+.32)*3)%3]),h(N,.18,I*.4,.8,.3,.48,z.trunk)}else if(B==="theatre"||B==="cinema"){x(0,-.3,E*.84,I*.7,2.1,B==="theatre"?z.brick:z.darkBlue),h(0,1.65,I*.37,E*.72,.35,.08,z.pubRed),h(0,1.66,I*.42,E*.56,.12,.025,z.gold);for(let N of[-E*.28,E*.28])h(N,.85,I*.37,.3,.8,.05,z.glassMid);if(B==="theatre")for(let N of[-E*.3,-E*.15,0,E*.15,E*.3])d(N,2.35,-.3,.12,.3,z.gold)}else if(B==="gym")x(0,-.2,E*.84,I*.7,1.4,z.glassMid),h(0,.95,I*.36,E*.78,.23,.06,z.white),h(0,.06,-I*.12,E*.72,.035,I*.3,z.lawn),h(0,.085,-I*.12,.035,.015,I*.28,z.white);else if(B==="museum")x(0,-.35,E*.86,I*.58,1.65,z.white),g(0,I*.23,5,E*.72,1.45),m(0,1.78,-.35,E*.9,I*.62,z.darkBlue),h(0,.55,I*.31,E*.38,.72,.045,z.glassMid);else{let N=w.id==="dubNaija"?z.pubGreen:B==="civic"?z.cream:z.brick;x(0,-.2,E*.8,I*.65,w.h-.2,N),h(0,.45,I*.28,E*.68,.55,.04,z.glassDark),h(0,.84,I*.31,E*.78,.16,.25,w.id==="dubLidl"?z.gold:w.id==="dubTesco"?z.pubRed:z.cream)}if(B!=="airport"){let N=I*.32;if(["shop","pub","shoppingStreet","cafe","market"].includes(B)){let F=B==="pub"?z.pubRed:B==="market"?z.gold:z.pubGreen;h(0,1.03,N+.12,Math.min(E*.72,3.5),.12,.42,F);for(let q=-Math.min(E*.34,1.5);q<=Math.min(E*.34,1.5);q+=.35)h(q,.96,N+.34,.12,.12,.045,q%.7===0?z.cream:F)}if(["hospital","office","hotel","convention","station","library","museum","theatre","cinema","civic"].includes(B)){let F=Math.min(.42,E*.16);h(0,.42,N+.09,F,.78,.07,z.darkBlue),h(0,.84,N+.1,F+.12,.07,.12,z.cream),h(0,1.12,N+.28,Math.min(.85,E*.22),.09,.4,z.cream),h(0,.08,N+.28,Math.min(1.25,E*.34),.12,.46,z.pavement)}if(["office","hotel","hospital","convention","station"].includes(B)){let F=(w.h||3)+.08;for(let q of[-Math.min(E*.22,1.5),Math.min(E*.22,1.5)])h(q,F,-.2,.48,.26,.42,z.roadDark),h(q,F+.17,-.2,.56,.06,.5,z.glassMid);h(0,F+.1,-.2,E*.55,.12,.09,z.white)}if(B==="pub"&&(h(0,1.35,N+.16,Math.min(1.7,E*.42),.28,.09,z.dark),h(0,1.36,N+.22,Math.min(1.45,E*.35),.11,.025,z.gold)),B==="hospital"){h(E*.27,.08,0,E*.38,.035,I*.42,z.roadDark);for(let F=E*.15;F<E*.4;F+=.42)h(F,.1,0,.18,.025,.08,z.white);h(0,2.48,N+.05,.5,.3,.08,z.pubRed)}if(["park","green"].includes(B))for(let F of[-E*.25,E*.25])h(F,.42,I*.18,1.05,.1,.32,z.trunk),h(F,.67,I*.3,1.05,.38,.08,z.trunk),d(F-E*.09,.8,I*.3,.035,1.5,z.dark),h(F-E*.09,1.58,I*.3,.2,.08,.2,z.gold);["park","green","spire","stadium"].includes(B)||i(w.name.toUpperCase(),z.white,Math.min(E*.65,4.8),n,w.x,1+o[1],w.z+I*.45,!1,B==="pub"?z.pubRed:z.hedge)}o=[0,0,0],l=e,c=null}let L=0;function U(w,E,I,B,N=0){return!so.some(F=>Math.abs(w-F.x)<(I+F.w)/2+N&&Math.abs(E-F.z)<(B+F.d)/2+N)}for(let w of[-36,-30,-24,-18,-12,-6,0,6,12,18,24,30,36])for(let E of[-3.65,3.65])U(w,E,.35,.35,.25)&&(d(w,.95,E,.035,1.8,z.dark),h(w,1.9,E,.22,.08,.22,z.gold));function S(w,E,I){U(w,E,1.7,2.7,.12)&&(h(w,.27,E,1.7,.06,2.7,z.pavement,t),x(w,E,1.5,1.8,1.65,I,t),u("roof",w,2,E,1.15,.7,1.4,z.dark,t),h(w+.45,2.25,E-.35,.2,.6,.2,z.brick,t),h(w,.54,E+.92,.3,.68,.04,[z.glassDark,z.pubRed,z.pubGreen,z.gold][L%4],t),h(w,.33,E+1.2,1.4,.08,.48,z.lawn,t),L++)}for(let w=0;w<3;w++)for(let E=0;E<10;E++)S(18+E*2,-33+w*2.9,["#b08a69","#b07761","#c0a186"][E%3]);for(let w=0;w<2;w++)for(let E=0;E<10;E++)S(-38+E*1.95,26+w*3,["#b28462","#bc9678","#a8755b"][E%3]);for(let w=0;w<3;w++)for(let E=0;E<8;E++)S(-39+E*2,-31+w*3,["#a97d65","#c2a487","#af8a70"][E%3]);for(let w=0;w<8;w++)S(5+w*2,-38.5,["#b77a59","#c58a63","#a96d55"][w%3]);for(let w=0;w<24;w++){let E=-38+w*3.2,I=w%2?-3:3;U(E,I,.8,.8,.35)&&f(E,I,.65)}for(let[w,E]of[[-39,-14],[-24,-26],[-9,-30],[10,-18],[20,-29],[38,19],[-9,21],[15,29],[24,29]])U(w,E,1.5,1.5,.35)&&f(w,E,1.2);for(let[w,E,I,B]of[["RIVER LIFFEY",-15,0,9],["DUBLIN BAY",53,15,11],["NORTHSIDE",-14,-33,8],["CITY CENTRE",-3,31,8],["DOCKLANDS",28,19,8]])i(w,w==="RIVER LIFFEY"||w==="DUBLIN BAY"?"#d8edf0":"#7f8e70",B,e,E,.3,I);for(let[w,E]of[[-22,-4],[22,5],[-22,31]]){h(w,1.5,E,3.4,1.4,.1,"#253930",s);for(let I of[-1.2,1.2])h(w+I,.75,E,.07,1.5,.07,"#253930",s);i("DUBLIN LIFE","#fff",3.2,s,w,1.5,E+.06,!1,"#28644e")}let M=new Ot({color:"#ffffff",roughness:.88});for(let{parent:w,type:E,cast:I,items:B}of a.values()){let N=new Gn(r[E],M,B.length),F=new pt;B.forEach((q,j)=>{F.position.set(...q.p),F.scale.set(...q.s),F.rotation.set(...q.rotation),F.updateMatrix(),N.setMatrixAt(j,F.matrix),N.setColorAt(j,new Oe(q.color))}),N.userData.category=w===t?"homes":w===n?"landmarks":"environment",N.userData.lotIds=[...new Set(B.map(q=>q.lotId).filter(Boolean))],N.castShadow=I,N.receiveShadow=!0,N.computeBoundingSphere(),w.add(N)}return e.visible=!1,e.userData.houses=L,e.userData.palette=z,e.userData.lotCount=T.length,e.userData.batchCount=a.size,e.userData.landmarks=n,{world:e,homes:t,landmarks:n,boards:s,places:T,isLand:Tv,airport:A}}var A0=Math.PI*2,Av=i=>Math.max(0,Math.min(1,i)),Ys=i=>(i=Av(i),i*i*(3-2*i));function R0(){let i=new Ze;i.name="Dublin traffic and aircraft";let e=[],t=[],n=[z.white,z.cream,"#536b67","#b5754d","#7891a0","#ddd5bd"],s=[...[-31,-13,6,24].map((d,f)=>({kind:"car",route:"south-quay",axis:"x",fixed:32,min:-35,max:36,start:d,speed:3+f*.22,dir:f%2?-1:1})),{kind:"bus",route:"south-quay",axis:"x",fixed:32,min:-35,max:36,start:-23,speed:2.35,dir:1},{kind:"bus",route:"south-quay",axis:"x",fixed:32,min:-35,max:36,start:17,speed:2.2,dir:-1},...[-31,-18,-3].map((d,f)=>({kind:"car",route:"west-central",axis:"x",fixed:-6,min:-38,max:8,start:d,speed:2.5+f*.25,dir:f%2?-1:1})),...[-22,-2,20].map((d,f)=>({kind:"car",route:"east-road",axis:"z",fixed:39.35,min:-29,max:30,start:d,speed:2.2+f*.18,dir:f===1?-1:1}))],r=new Map;for(let d=0;d<s.length;d++){let f=s[d],m=Ic({color:f.kind==="bus"?"#f2bd25":n[d%n.length],bus:f.kind==="bus"});m.name=`${f.kind==="bus"?"Dublin bus":"Dublin car"} ${d+1}`,i.add(m);let x={kind:f.kind,object:m,route:f.route,speed:f.speed,phase:(f.start-f.min)/(f.max-f.min),direction:f.dir,axis:f.axis,fixed:f.fixed,min:f.min,max:f.max};e.push(x),r.has(f.route)||r.set(f.route,{id:f.route,axis:f.axis,fixed:f.fixed,min:f.min,max:f.max})}t.push(...r.values());let a=ao({scale:.82,color:"#e7e8df"});a.name="Dublin Airport scheduled jet",i.add(a);let o={kind:"airliner",object:a,route:"airport-runway-flight"};e.push(o),t.push({id:"airport-runway-flight",type:"taxi-takeoff-flight-landing",runway:{x:-11,z:-43.5,length:32,width:1.5}});let l=Cc({scale:.82,color:"#456f54"});l.name="Dublin airborne patrol",i.add(l);let c={kind:"helicopter",object:l,route:"city-patrol"};e.push(c),t.push({id:"city-patrol",type:"elevated-loop",minY:8.5});let u=so;function h(d){let f=Number.isFinite(d)?Math.max(0,d):0;for(let m of e){if(m.kind==="car"||m.kind==="bus"){let x=m.max-m.min,g=((m.phase+f*m.speed*m.direction/x)%1+1)%1,p=A0*g,C=(m.min+m.max)/2+Math.cos(p)*x/2;m.object.position.set(m.axis==="x"?C:m.fixed,.27,m.axis==="z"?C:m.fixed);let v=-Math.sin(p)*m.direction>=0?1:-1;m.object.rotation.y=m.axis==="x"?v>0?0:Math.PI:v>0?-Math.PI/2:Math.PI/2}else if(m.kind==="airliner"){let x=f/78%1,g,p=.4,C=-43.5,v=0,_=0;if(x<.1)g=-27+9*(x/.1);else if(x<.22){let T=(x-.1)/.12;g=-18+23*T,_=.16*Math.sin(T*Math.PI)}else if(x<.37){let T=(x-.22)/.15;g=5+28*T,p=.4+13*Ys(T),_=.19*(1-T)}else if(x<.43){let T=(x-.37)/.06;g=33+1.5*Math.sin(Math.PI*T),p=13.4+.12*Math.sin(Math.PI*T),v=Math.PI*Ys(T)}else if(x<.62){let T=(x-.43)/.19;g=33-61*T,p=13.4+.12*Math.sin(T*A0),v=Math.PI}else if(x<.69){let T=(x-.62)/.07;g=-28+2*Math.sin(Math.PI*T),C=-43.5+4*Math.sin(Math.PI*T),p=13.4+.12*Math.sin(Math.PI*T),v=Math.PI+Math.PI*Ys(T)}else if(x<.84){let T=(x-.69)/.15;g=-28+10*T,p=13.4-13*Ys(T),v=Math.PI*2,_=-.12*Math.sin(T*Math.PI)}else if(x<.91)g=-18+8*((x-.84)/.07),v=Math.PI*2;else if(x<.925){let T=(x-.91)/.015;g=-10,v=Math.PI*2+Math.PI*Ys(T)}else if(x<.985){let T=(x-.925)/.06;g=-10-17*Ys(T),v=Math.PI*3}else{let T=(x-.985)/.015;g=-27,v=Math.PI*3+Math.PI*Ys(T)}m.object.position.set(g,p,C),m.object.rotation.set(0,v,_)}else if(m.kind==="helicopter"){let x=f*.115;m.object.position.set(-5+24*Math.cos(x),9.2+.45*Math.sin(x*2),1+20*Math.sin(x));let g=-24*Math.sin(x),p=20*Math.cos(x);m.object.rotation.y=Math.atan2(-p,g)}m.object.userData.rotors&&(m.object.userData.rotors[0].rotation.y=f*15,m.object.userData.rotors[1].rotation.x=f*19)}}return h(0),i.userData.actorCount=e.length,i.userData.landBounds=u,{group:i,update:h,actors:e,routes:t}}var it=i=>document.getElementById(i),co=it("map"),un=new hc({antialias:!0,alpha:!1});un.setPixelRatio(Math.min(devicePixelRatio,2));un.setSize(innerWidth,innerHeight);un.shadowMap.enabled=!0;un.shadowMap.type=fl;un.toneMapping=bl;un.toneMappingExposure=1;un.setClearColor("#67afd5");co.appendChild(un.domElement);un.domElement.setAttribute("aria-label","3D city map. Drag to pan, scroll to zoom.");un.domElement.tabIndex=0;var gs=new ga,Ct=new Ht(38,innerWidth/innerHeight,.1,900),ht=new pc(Ct,un.domElement);ht.enableDamping=!0;ht.dampingFactor=.09;ht.minDistance=7;ht.maxDistance=110;ht.maxPolarAngle=Math.PI*.44;ht.minPolarAngle=.18;ht.screenSpacePanning=!1;Ct.position.set(3.75,37.5,26.25);ht.target.set(2.25,0,1.5);gs.add(new Ga("#eaf4ff","#c9b99a",.9));var wi=new Bs("#ffffff",1.6);wi.position.set(32,56,24);wi.castShadow=!0;wi.shadow.mapSize.set(2048,2048);Object.assign(wi.shadow.camera,{left:-50,right:50,top:50,bottom:-50,near:1,far:120});wi.shadow.normalBias=.035;wi.shadow.bias=-2e-4;gs.add(wi);var ud=new Map,dd=new Map,Rv=new mc,Rn=new Ze,Ji=new Ze,Xr=new Ze;gs.add(Rn,Ji,Xr);var Uc=i=>(ud.has(i)||ud.set(i,new Ot({color:i,roughness:.95})),ud.get(i));function Te(i,e,t,n,s,r,a,o){let l=new tt(new Vt(s,r,a),Uc(o));return l.position.set(e,t,n),l.castShadow=r>.15,l.receiveShadow=!0,i.add(l),l}function sn(i,e,t,n,s,r,a,o=s,l=12){let c=new tt(new Ut(s,o,r,l),Uc(a));return c.position.set(e,t,n),c.castShadow=!0,c.receiveShadow=!0,i.add(c),c}function lo(i,e,t,n,s,r){let a=new tt(new di(s,20,10,0,Math.PI*2,0,Math.PI/2),Uc(r));return a.position.set(e,t,n),a.castShadow=!0,i.add(a),a}function $i(i,e,t,n,s,r,a,o=!0,l=null){let c=document.createElement("canvas");c.width=1024,c.height=o?128:384;let u=c.getContext("2d");l&&(u.fillStyle=l,u.fillRect(0,0,c.width,c.height)),u.fillStyle=e,u.textAlign="center",u.textBaseline="middle";let h=o?90:94;do u.font=`800 ${h}px Arial`,h-=2;while(u.measureText(i).width>950&&h>16);u.fillText(i,512,c.height/2);let d=new Sa(c);d.colorSpace=Ft;let f=new tt(new Ls(t,t*c.height/1024),new on({map:d,transparent:!l,depthWrite:!!l,side:Zt}));return o&&(f.rotation.x=-Math.PI/2),f.position.set(s,r,a),n.add(f),f}function Cv(i,e,t,n){Te(Rn,i,.211,e,t,.023,n,"#969c9f")}Te(Rn,25,-.16,-20,250,.1,230,"#67afd5");[[0,-11.4,42,18,"#a7cc86"],[-4.275,7.65,25.05,13.5,"#c7e0a5"],[15,7.5,12.9,13.8,"#c7e0a5"],[5.1,-.75,2.7,2.5,"#c7e0a5"],[6,15.3,34.5,2.7,"#ecd9a6"],[8.25,18.525,33.9,3.6,"#d9dccf"],[-23.85,-11.4,6,18,"#a7cc86"]].forEach(([i,e,t,n,s])=>Te(Rn,i,.05,e,t,.3,n,s));$i("MAINLAND","#759a58",8,Rn,-12,.217,-17.4);$i("ISLAND","#93ad73",6,Rn,-9,.217,1.5);$i("LAGOS LAGOON","#d0e8f2",8,Rn,11.4,.01,-.9);$i("ATLANTIC OCEAN","#c3e2ef",12,Rn,23,.01,23);$i("EKO ATLANTIC","#82917e",7,Rn,11,.217,18.7);[[0,-4.5,33,.5],[-1.2,2.175,.5,2.55],[-4.575,2.4,22.65,.5],[12.75,6,8.7,.5],[8.25,19.575,33,.42],[-23.1,-11.4,.45,17.4]].forEach(i=>Cv(...i));function F0(i,e,t,n=!1,s=!1){let r=new Ze;r.position.set(i,0,e),n&&(r.rotation.y=Math.PI/2),Rn.add(r),Te(r,0,.29,0,.52,.13,t,"#a1a7ab");for(let a of[-1,1]){Te(r,a*.3,.43,0,.045,.13,t,"#c5c8ca");for(let o=-t/2+.25;o<t/2;o+=.6)sn(r,a*.22,-.15,o,.04,.8,"#999e9c")}if(s)for(let a of[-t*.3,t*.3]){Te(r,0,1.5,a,.08,2.5,.08,"#eee6d6");for(let o of[-1,1]){let l=[new D(0,2.6,a),new D(0,.4,a+o*t*.35)];r.add(new Ni(new Nt().setFromPoints(l),new cs({color:"#e2dfd2"})))}}return r}F0(-1.2,-.75,3.3);F0(7.95,6,1.2,!0,!0);var Iv=async i=>(dd.has(i)||dd.set(i,Rv.loadAsync(`assets/${i}.glb`).then(e=>e.scene)),dd.get(i));async function Mi(i,e,t,n=[0,0,0],s=null,r=0){let a=await Iv(e),o=a.clone(!0);o.traverse(d=>{d.isMesh&&(d.castShadow=!0,d.receiveShadow=!0,s&&(d.material=d.material.clone(),d.material.color.set(s)))});let l=new gn().setFromObject(o),c=l.getCenter(new D),u=t/(l.getSize(new D).y||1);o.position.set(-c.x,-l.min.y,-c.z);let h=new Ze;return h.add(o),h.scale.setScalar(u),h.position.set(...n),h.rotation.y=r,i.add(h),h}var ms=await fetch("places.json").then(i=>{if(!i.ok)throw Error("Map data could not load");return i.json()});ms.push({id:"airport",name:"Airport",x:-35,z:-12,w:21,d:19,h:2,models:[]},{id:"refinery",name:"Refinery",x:-25,z:8,w:13,d:13,h:2.6,models:[]});var k0={shrine:"\u{1F3B7}",viewingCentre:"\u26BD",mamaPut:"\u{1F372}",yabaHub:"\u{1F4A1}",balogun:"\u{1F9FA}",freedomPark:"\u{1F3AD}",ikoyiGym:"\u{1F3CB}\uFE0F",office:"\u{1F3E2}",clubEko:"\u{1FAA9}",lcc:"\u{1F309}",mall:"\u{1F6CD}\uFE0F",library:"\u{1F4DA}",elegushi:"\u{1F3D6}\uFE0F",hospital:"\u{1F3E5}",salon:"\u{1F487}\u{1F3FE}\u200D\u2640\uFE0F",rooftop:"\u{1F56F}\uFE0F",policeStation:"\u{1F693}",church:"\u26EA",mosque:"\u{1F54C}",naijaRadio:"\u{1F4FB}",pollingUnit:"\u{1F5F3}\uFE0F",ekoHotel:"\u{1F3E8}",polanco:"\u{1F698}",boatCruise:"\u26F5",golfClub:"\u26F3",courthouse:"\u2696\uFE0F",unilag:"\u{1F393}",casino:"\u{1F3B0}",mindSpace:"\u{1FAF6}\u{1F3FE}",stadium:"\u{1F3DF}\uFE0F",ojuelegba:"\u{1F3B1}"},Pv={shrine:"Music and nightlife on the Mainland.",yabaHub:"The technology hub in Yaba.",balogun:"Colourful market stalls on Lagos Island.",lcc:"Forest trails and an elevated canopy walkway.",elegushi:"The sandy shoreline on the Atlantic.",unilag:"University buildings, gardens, and sports courts.",freedomPark:"Gardens and paths in the heart of the Island.",golfClub:"A green course beside the Lekki\u2013Ikoyi Link.",boatCruise:"The dock on Lagos Lagoon.",ekoHotel:"The hotel grounds on Lagos Island.",stadium:"A football stadium on the Mainland."},Zi=null,Lc=!0,qi=!0,Yi=!0,Ei=!1,Xn=null,en="lagos";ms.forEach(i=>i.city="lagos");co.dataset.city=en;var qr=[],Dc=[],fd=0;function Si(i){Dc.push(i.catch(e=>(console.warn(e),null)).finally(()=>{fd++,it("progress").textContent=`Building the city \xB7 ${Math.round(fd/Dc.length*100)}%`,it("loadbar").style.width=`${fd/Dc.length*100}%`}))}function Xi(i,e,t,n,s,r=1.2){$i(e,"#ffffff",r,i,t,n,s,!1,"#008751")}function C0(i,e,t){Te(i,0,.008,0,e,.025,t,"#8aba65"),Te(i,0,.025,0,.12,.02,t,"#d5ccaa"),Te(i,0,.025,0,e,.02,.12,"#d5ccaa")}function Lv(i,e){let t=i.id;if(t==="airport"){Te(e,0,-.015,0,21,.05,19,"#afb59d"),Te(e,0,.03,-6,20,.04,2.3,"#50595c");for(let n=-9;n<10;n+=1.2)Te(e,n,.055,-6,.6,.015,.07,"#ecebd8");Te(e,0,.03,-2,20,.04,1.2,"#95998e"),Te(e,0,.6,3,9,1.2,3,"#dce2dc"),Te(e,0,1.23,3,9.3,.08,3.2,"#838f94"),Te(e,0,.6,4.51,8,.6,.025,"#73a1b4"),sn(e,-6,1.3,3,.22,2.6,"#dce0dd"),Te(e,-6,2.7,3,.8,.5,.7,"#6e9eae");for(let n=0;n<4;n++){let s=new Ze;s.position.set(-6+n*4,.5,.1),e.add(s);let r=sn(s,0,0,0,.13,2,"#f0f0e7",.08);r.rotation.x=Math.PI/2,Te(s,0,0,0,1.9,.045,.4,"#e9ebe3"),Te(s,0,.09,.7,.05,.35,.4,"#97afb8"),Te(s,0,0,.7,.7,.04,.2,"#e5e9e0")}Xi(e,"LAGOS AIRPORT",0,1,4.54,3)}if(t==="refinery"){Te(e,0,-.015,0,13,.05,13,"#c9c6b7");for(let n=0;n<5;n++){let s=-4.6+n*2.25;sn(e,s,.8,-3,.9,1.6,"#d7d7ce"),lo(e,s,1.6,-3,.9,"#c6c9c3"),sn(e,s,.5,0,.85,1,"#bfc4bf")}for(let n=0;n<3;n++){sn(e,-4+n*2.2,1.8,3,.35,3.6,"#c7c9c1");for(let s=.5;s<3.6;s+=.55)sn(e,-4+n*2.2,s,3,.41,.05,"#dfc05c")}Te(e,3,.7,3,3,1.4,2.3,"#969b93");for(let n=0;n<2;n++)sn(e,2.5+n,2.3,3,.17,3.5,"#c1c4ba");for(let n=0;n<5;n++)Te(e,-4+n*2.1,.4,4.9,1.8,.09,.09,"#9d8d57");Xi(e,"REFINERY",0,.8,5.9,2.6)}if(t==="mosque"&&(Te(e,0,.35,0,1.1,.7,1,"#f4efe6"),lo(e,0,.7,0,.38,"#059669"),sn(e,.62,.65,.4,.09,1.3,"#f4efe6",.11),lo(e,.62,1.3,.4,.11,"#059669")),t==="courthouse"){Te(e,0,.04,0,1.5,.08,1.15,"#d6d3cc"),Te(e,0,.43,-.12,1.3,.7,.8,"#f4efe6");for(let s=-.5;s<=.5;s+=.25)sn(e,s,.39,.4,.045,.62,"#f8fafc");Te(e,0,.74,.02,1.42,.08,.98,"#e7e0d2");let n=new tt(new _n(.86,.32,4),Uc("#7c2d12"));n.position.set(0,.94,.02),n.rotation.y=Math.PI/4,e.add(n),Xi(e,"HIGH COURT",0,.74,.52)}if(t==="church"&&(Te(e,0,1.35,0,.06,.42,.06,"#e3be60"),Te(e,0,1.42,0,.24,.06,.06,"#e3be60")),t==="hospital"&&(Te(e,0,1.62,0,.5,.12,.14,"#e5484d"),Te(e,0,1.62,0,.14,.12,.5,"#e5484d")),t==="library"||t==="mindSpace"||t==="naijaRadio"||t==="casino"){let n=t==="library",s=t==="casino";if(Te(e,0,n?.55:.4,-.1,1.2,n?1.1:.8,1,n?"#6d5a9c":s?"#2a1838":"#e8f3ec"),Te(e,0,n?1.13:.83,-.1,1.28,.06,1.08,n?"#b9a8e6":"#52b788"),Te(e,0,.3,.41,.95,.26,.02,"#bde0fe"),Xi(e,i.name.toUpperCase(),0,.65,.43),s&&lo(e,0,.85,-.1,.36,"#c9a227"),t==="naijaRadio"){sn(e,.85,1.3,0,.025,2.6,"#a4a9ae");for(let r=0;r<3;r++)Te(e,.85,1.5+r*.4,0,.45,.025,.03,"#b9c0c5")}}if(t==="pollingUnit"){for(let n of[-.55,.55])for(let s of[-.4,.4])sn(e,n,.32,s,.02,.64,"#cbd5e1");[-.45,-.15,.15,.45].forEach((n,s)=>Te(e,n,.68,0,.3,.06,.95,s%2?"#ffffff":"#008751")),Te(e,0,.22,0,.8,.04,.4,"#8b6a4a"),Xi(e,"POLLING UNIT",0,.5,.52)}if(t==="mall"){Te(e,0,.53,0,2.5,1.05,1.5,"#f4efe6"),Te(e,0,1.08,0,2.7,.12,1.7,"#e0e3df");for(let n of[-.75,0,.75])Te(e,n,.35,.76,.45,.7,.03,"#273c4c");Xi(e,"THE PALMS",0,.88,.8,1.7)}if(t==="balogun"){let n=["#efb23b","#279ea1","#535ac0","#d83f58","#54a861"];for(let s=0;s<5;s++)for(let r=0;r<3;r++)Te(e,(s-2)*.76,.4,r*.76-.4,.7,.07,.72,n[(s+r)%5]),Te(e,(s-2)*.76,.17,r*.76-.4,.65,.32,.64,"#b59768")}if(t==="freedomPark"||t==="golfClub"||t==="ekoHotel"){if(C0(e,i.w,i.d),t==="ekoHotel"){Te(e,-.8,.032,.7,1.3,.025,.75,"#52bcd5");for(let n=0;n<4;n++)Si(Mi(e,"commercial/detail-parasol-a",.35,[-1.4+n*.7,0,1.35]))}if(t==="golfClub"){Te(e,.55,.03,0,.75,.02,.45,"#69bdd7");for(let n of[-1,1])sn(e,n,.42,-1.2,.01,.8,"#f3f1e1"),Te(e,n+.09,.76,-1.2,.18,.13,.02,"#e24646")}}if(t==="unilag"){C0(e,i.w,i.d),Te(e,1.8,.03,1.2,2.5,.02,1.5,"#bc5e3c"),Te(e,1.8,.047,1.2,2,.015,1,"#7ead62"),Te(e,-.8,.03,1.25,2,.02,1.4,"#688f55");for(let n=0;n<6;n++)Si(Mi(e,"suburban/tree-small",.65,[-3+n*1.15,0,2.1]))}if(t==="lcc"){Te(e,0,.012,0,6.7,.035,3.8,"#81ab60");for(let n=0;n<27;n++){let s=(Math.sin(n*127.1)*.5+.5)*5.8-2.9,r=(Math.cos(n*61.3)*.5+.5)*3.3-1.65;Si(Mi(e,n%3?"suburban/tree-small":"suburban/tree-large",1+n*7%9*.08,[s,0,r]))}for(let n=0;n<3;n++){let s=Te(e,-1.9+n*1.5,.95,-.5+n*.55,1.7,.045,.25,"#aa8b5a");s.rotation.y=-.35;for(let r of[-2.6+n*1.5,-1.2+n*1.5])sn(e,r,.58,-.5+n*.55,.025,1.12,"#9a7c49")}Xi(e,"CANOPY WALK",-2.5,.27,1.7,1.5)}if(t==="elegushi"){for(let n=0;n<9;n++)Si(Mi(e,`commercial/detail-parasol-${n%2?"a":"b"}`,.55,[-2.6+n*.65,0,.45]));Xi(e,"ELEGUSHI",-1.5,.28,-.35)}if(t==="stadium"){Te(e,0,.02,0,2.4,.04,1.4,"#3f8f3a"),Te(e,0,.05,0,.025,.008,1.4,"#fff");let n=new tt(new Ut(1.55,1.2,.45,40,1,!0),new Ot({color:"#c6d9ca",side:Zt}));n.scale.z=.7,n.position.y=.27,e.add(n);for(let s of[-1.65,1.65])for(let r of[-.95,.95])sn(e,s,.7,r,.022,1.4,"#a4a9ae"),Te(e,s,1.4,r,.32,.13,.08,"#fffae5");Xi(e,"STADIUM",0,.33,1.14)}t==="boatCruise"&&Si(Mi(e,"pirate/boat-row-small",.35,[.4,.03,.4]))}for(let i of ms){if(i.id.startsWith("home_")&&i.id!=="home_yaba")continue;let e=new Ze;e.position.set(i.x,.205,i.z),Rn.add(e),i.group=e,Te(e,0,-.012,0,i.w,.03,i.d,"#e4e5d6"),Lv(i,e);for(let n of i.models)Si(Mi(e,n.model,n.height,n.position,n.tint));let t=document.createElement("button");t.className="label",t.innerHTML=`<span>${k0[i.id]||(i.id==="airport"?"\u2708\uFE0F":i.id==="refinery"?"\u{1F6E2}\uFE0F":"\u{1F3E0}")}</span>${i.name}`,t.setAttribute("aria-label",`Select ${i.name}`),t.onclick=()=>Oc(i),it("labels").appendChild(t),qr.push({place:i,button:t,point:new D(i.x,.205+i.h,i.z)})}var ps=S0({box:Te,textSurface:$i});gs.add(ps.world);ms.push(...ps.places);var ri=T0({textSurface:$i});gs.add(ri.world);ms.push(...ri.places);var z0=R0();ri.world.add(z0.group);var Dv=matchMedia("(prefers-reduced-motion: reduce)"),Pc=0,pd=(ri.airport?.userData.helicopters||[]).flatMap(i=>i.userData.rotors||[]);for(let i of[...ps.places,...ri.places]){let e=document.createElement("button");e.className="label",e.hidden=!0,e.innerHTML=`<span>${i.emoji}</span>${i.name}`,e.setAttribute("aria-label",`Select ${i.name}`),e.onclick=()=>Oc(i),it("labels").appendChild(e);let t=i.tag||[0,i.h,0];qr.push({place:i,button:e,point:new D(i.x+t[0],.28+t[1],i.z+t[2])})}var I0={dubHapenny:110,dubTrinity:109,dubSpire:108,dubAirport:107,dubGreen:106,dubGuinness:105,dubBeckett:104,dubTemple:103,abjAssembly:100,abjAsoRock:99,abjAirport:98,abjJabiLake:97,abjZumaRock:96,abjMosque:95,abjMillenniumPark:90};qr.sort((i,e)=>(I0[e.place.id]||0)-(I0[i.place.id]||0));Te(Ji,0,.055,-25,42,.3,7.5,"#add08f");Te(Ji,19,.055,9.4,8,.3,12,"#c7e0a5");for(let i=0;i<4;i++)for(let e=0;e<22;e++){let t=-20+e*1.85,n=-27.8+i*1.75;Te(Ji,t,.219,n,1.4,.03,1.4,"#e4e6d8"),Si(Mi(Ji,"suburban/building-type-c",.62,[t,.24,n]))}for(let i=0;i<7;i++)for(let e=0;e<4;e++){let t=16.25+e*1.65,n=4.4+i*1.65;Te(Ji,t,.219,n,1.4,.03,1.4,"#e6e7dc"),Si(Mi(Ji,"suburban/building-type-t",.64,[t,.24,n]))}for(let[i,e,t]of[[0,-15,-15],[1,-16,-7],[2,-8,-3.5],[3,1,-3.8],[4,14,-4],[5,-3,.1],[6,16,1],[7,12,7.5],[8,-8,10.5],[9,2,14.4],[10,18,13.8]]){Te(Xr,e,1.55,t,3.3,1.7,.11,"#202431");for(let n of[-1.3,1.3])Te(Xr,e+n,.75,t,.09,1.5,.09,"#202431");$i(i%2?"LAGOS LIFE":"YOUR AD HERE","#fff",3.13,Xr,e,1.55,t+.067,!1,i%2?"#206b57":"#276998")}for(let i=0;i<28;i++){let e=-17+i*13%38,t=i%2?-4.9:14.3;Si(Mi(Rn,"pirate/palm-straight",1.1,[e,.205,t]))}var md=[];for(let i=0;i<5;i++){let e=new Ze;Rn.add(e),e.position.set(-15+i*7,.24,-4.5),Si(Mi(e,i%2?"car/sedan":"car/van",.26,[0,0,0],i%2?null:"#f3c43d",Math.PI/2)),md.push(e)}var It=new Ze;It.visible=!1;gs.add(It);sn(It,0,.04,0,.2,.06,"#54af7d");sn(It,0,.6,0,.13,.55,"#252e43");lo(It,0,.92,0,.14,"#a77750");Te(It,-.1,.23,0,.065,.4,.09,"#252e43");Te(It,.1,.23,0,.065,.4,.09,"#252e43");It.position.set(.75,.22,-6);var Ki=null,hn=new Set,P0=0,Ks=new tt(new Ds(.95,1.03,48),new on({color:"#408b61",side:Zt,transparent:!0,opacity:.75}));Ks.rotation.x=-Math.PI/2;Ks.visible=!1;gs.add(Ks);var fs={lagos:{position:new D(3.75,37.5,26.25),target:new D(2.25,0,1.5)},abuja:{position:new D(-2,88,68).sub(new D(-2,0,2)).multiplyScalar(Math.max(1.7,1.8/Ct.aspect)).add(new D(-2,0,2)),target:new D(-2,0,2)}};fs.dublin={position:new D(5,73,61).multiplyScalar(Math.max(1.45,1.55/Ct.aspect)),target:new D(0,0,-5)};var L0={},Nv={lagos:"\u{1F1F3}\u{1F1EC} Lagos",abuja:"\u{1F1F3}\u{1F1EC} Abuja",dublin:"\u{1F1EE}\u{1F1EA} Dublin"};function Bc(i){if(!["lagos","abuja","dublin"].includes(i))throw new Error("Unknown map city");if(i===en)return{city:i,changed:!1};L0[en]={position:Ct.position.clone(),target:ht.target.clone()},Ei=!1,It.visible=!1,Ki=null,hn.clear(),ht.enableRotate=!0,Xn=null,Yr(),it("walk").setAttribute("aria-pressed","false"),it("walk-controls").hidden=!0,it("hint").hidden=!1,en=i,Rn.visible=i==="lagos",Ji.visible=i==="lagos"&&qi,Xr.visible=i==="lagos"&&Yi,ps.world.visible=i==="abuja",ps.homes.visible=qi,ps.boards.visible=Yi,ri.world.visible=i==="dublin",ri.homes.visible=qi,ri.boards.visible=Yi,un.setClearColor(i==="abuja"?"#93b56c":i==="dublin"?od:"#67afd5"),co.dataset.city=i,it("city-name").textContent=Nv[i],co.setAttribute("aria-label",`Interactive 3D ${i[0].toUpperCase()+i.slice(1)} city map`),document.querySelectorAll("button[data-city]").forEach(s=>s.setAttribute("aria-pressed",String(s.dataset.city===i)));let e=i==="dublin"?[["all","\u{1F5FA}\uFE0F","All Dublin"],["centre","\u{1F3DB}\uFE0F","City centre"],["northside","\u{1F3D8}\uFE0F","Northside"],["docklands","\u2693","Docklands"]]:i==="abuja"?[["all","\u{1F5FA}\uFE0F","All Abuja"],["central","\u{1F3DB}\uFE0F","Central"],["maitama","\u{1F333}","Maitama"],["jabi","\u{1F30A}","Jabi"]]:[["all","\u{1F5FA}\uFE0F","All Lagos"],["mainland","\u{1F3D8}\uFE0F","Mainland"],["island","\u{1F3D9}\uFE0F","Island"],["lekki","\u{1F334}","Lekki"]];document.querySelectorAll("[data-district]").forEach((s,r)=>{s.dataset.district=e[r][0],s.innerHTML=`${e[r][1]}<span>${e[r][2]}</span>`,s.classList.toggle("active",r===0)}),ht.maxDistance=i==="lagos"?110:500,ht.minDistance=i==="lagos"?7:12;let t=L0[i]||fs[i];Ct.position.copy(t.position),ht.target.copy(t.target),ht.update(),wi.position.set(i==="lagos"?32:40,i==="lagos"?56:90,i==="lagos"?24:28);let n=i==="lagos"?50:95;return Object.assign(wi.shadow.camera,{left:-n,right:n,top:n,bottom:-n,far:i==="lagos"?120:230}),wi.shadow.camera.updateProjectionMatrix(),It.position.set(i==="lagos"?.75:0,.28,i==="lagos"?-6:i==="dublin"?5:0),{city:i,changed:!0}}document.querySelectorAll("button[data-city]").forEach(i=>i.onclick=()=>Bc(i.dataset.city));function D0(i){return i.city!=="lagos"?i.area:i.z<-2?"Mainland":i.x>8?"Lekki":"Island"}function Oc(i){i.city!==en&&Bc(i.city),Zi=i,qr.forEach(e=>e.button.classList.toggle("selected",e.place===i)),it("detail").hidden=!1,it("place-name").textContent=`${i.emoji||k0[i.id]||"\u{1F3E0}"} ${i.name}`,it("district").textContent=D0(i),it("place-desc").textContent=i.description||Pv[i.id]||(i.city==="abuja"?`${i.name} in ${i.area}. Explore the landmark and its surroundings on the Abuja map.`:`${i.name} on the ${D0(i)} side of the city.`),Ks.position.set(i.x,i.city==="lagos"?.23:.33,i.z),Ks.scale.setScalar(i.city!=="lagos"?Math.max(1,Math.min(i.w,i.d)*.55):1),Ks.visible=!0}function Yr(){Zi=null,it("detail").hidden=!0,Ks.visible=!1,qr.forEach(i=>i.button.classList.remove("selected"))}function ho(i,e,t=20){let n=Ct.position.clone().sub(ht.target).normalize();Xn={from:Ct.position.clone(),fromTarget:ht.target.clone(),to:new D(i,0,e).addScaledVector(n,t),toTarget:new D(i,0,e),start:performance.now()}}function uo(i=!Ei){Ei=i,It.visible=i,ht.enableRotate=!i,it("walk").setAttribute("aria-pressed",String(i)),it("walk-controls").hidden=!i,it("hint").hidden=i,Ki=null,hn.clear(),i?ho(It.position.x,It.position.z,12):gd()}function gd(){Ei&&(Ei=!1,It.visible=!1,ht.enableRotate=!0,it("walk").setAttribute("aria-pressed","false"),it("walk-controls").hidden=!0,it("hint").hidden=!1,hn.clear()),Xn={from:Ct.position.clone(),fromTarget:ht.target.clone(),to:fs[en].position.clone(),toTarget:fs[en].target.clone(),start:performance.now()},document.querySelectorAll("[data-district]").forEach(i=>i.classList.toggle("active",i.dataset.district==="all"))}function H0(i){Xn=null,Ct.position.sub(ht.target).multiplyScalar(i).add(ht.target);let e=Ct.position.distanceTo(ht.target);(e<ht.minDistance||e>ht.maxDistance)&&Ct.position.sub(ht.target).normalize().multiplyScalar(zs.clamp(e,ht.minDistance,ht.maxDistance)).add(ht.target),ht.update()}it("names").onclick=()=>{Lc=!Lc,it("names").setAttribute("aria-pressed",String(Lc))};it("homes").onclick=()=>{qi=!qi,Ji.visible=en==="lagos"&&qi,ps.homes.visible=qi,ri.homes.visible=qi,it("homes").setAttribute("aria-pressed",String(qi))};it("boards").onclick=()=>{Yi=!Yi,Xr.visible=en==="lagos"&&Yi,ps.boards.visible=Yi,ri.boards.visible=Yi,it("boards").setAttribute("aria-pressed",String(Yi))};it("walk").onclick=()=>uo();it("leave-walk").onclick=()=>uo(!1);it("plus").onclick=()=>H0(.8);it("minus").onclick=()=>H0(1.25);it("reset").onclick=gd;it("close-detail").onclick=Yr;it("focus").onclick=()=>Zi&&ho(Zi.x,Zi.z,Zi.id==="dubAirport"?45:10);it("walk-here").onclick=()=>{if(!Zi)return;let i=Zi;uo(!0),It.position.set(i.arrivalX??i.x,.22,i.arrivalZ??i.z+i.d/2+.65),ho(It.position.x,It.position.z,12),Yr()};document.querySelectorAll("[data-district]").forEach(i=>i.onclick=()=>{Yr(),Ei&&uo(!1),document.querySelectorAll("[data-district]").forEach(t=>t.classList.toggle("active",t===i));let e=en==="dublin"?{centre:[-5,12,39],northside:[-7,-20,55],docklands:[28,5,42]}:en==="abuja"?{central:[16,0,45],maitama:[22,-32,43],jabi:[-35,-10,45]}:{mainland:[0,-12,28],island:[-4,7.5,25],lekki:[15,8,24]};i.dataset.district==="all"?gd():ho(...e[i.dataset.district])});it("help").onclick=()=>it("help-dialog").showModal();it("close-help").onclick=()=>it("help-dialog").close();ht.addEventListener("start",()=>Xn=null);window.addEventListener("keydown",i=>{i.key==="Escape"&&(Yr(),Ei&&uo(!1)),Ei&&["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d"].includes(i.key)&&(i.preventDefault(),hn.add(i.key))});window.addEventListener("keyup",i=>hn.delete(i.key));window.addEventListener("blur",()=>hn.clear());var N0={up:"w",down:"s",left:"a",right:"d"};document.querySelectorAll("[data-move]").forEach(i=>{i.addEventListener("pointerdown",e=>{i.setPointerCapture(e.pointerId),hn.add(N0[i.dataset.move])});for(let e of["pointerup","pointercancel","lostpointercapture"])i.addEventListener(e,()=>hn.delete(N0[i.dataset.move]))});var U0=new qa,B0=new re,Uv=new vn(new D(0,1,0),-.22),Nc=null;un.domElement.addEventListener("pointerdown",i=>Nc=[i.clientX,i.clientY]);un.domElement.addEventListener("pointerup",i=>{if(!Nc||Math.hypot(i.clientX-Nc[0],i.clientY-Nc[1])>7)return;B0.set(i.clientX/innerWidth*2-1,-i.clientY/innerHeight*2+1),U0.setFromCamera(B0,Ct);let e=new D;if(!U0.ray.intersectPlane(Uv,e))return;if(Ei){Ki=e;return}let t=ms.filter(n=>n.city===en&&Math.abs(n.x-e.x)<n.w/2+.3&&Math.abs(n.z-e.z)<n.d/2+.3).sort((n,s)=>Math.hypot(n.x-e.x,n.z-e.z)-Math.hypot(s.x-e.x,s.z-e.z))[0];t?Oc(t):Yr()});window.addEventListener("resize",()=>{Ct.aspect=innerWidth/innerHeight,Ct.updateProjectionMatrix(),un.setSize(innerWidth,innerHeight),fs.abuja.position.set(-2,88,68).sub(fs.abuja.target).multiplyScalar(Math.max(1.7,1.8/Ct.aspect)).add(fs.abuja.target),fs.dublin.position.set(5,73,61).multiplyScalar(Math.max(1.45,1.55/Ct.aspect))});function Bv(i,e){return en==="dublin"?ri.isLand(i,e):en==="abuja"?i>-64&&i<60&&e>-47&&e<48&&((i+36)/8)**2+((e+9)/5)**2>1&&Math.hypot(i-52,e+1)>8&&Math.hypot(i+56,e+8)>6:i>-21&&i<21&&e>-20.4&&e<-2.4||i>-26.9&&i<-20.8&&e>-20.4&&e<-2.4||i>-16.8&&i<8.25&&e>.9&&e<14.4||i>8.55&&i<23.1&&e>.6&&e<14.4||i>-11.25&&i<25.7&&e>13.8&&e<20.3||Math.abs(i+1.2)<.33&&e>-2.4&&e<.9||i>7.9&&i<8.6&&Math.abs(e-6)<.35}var oo=new D,Ov=()=>innerWidth<700;function G0(i){let e=Math.min((i-P0)/1e3,.05)||0;if(P0=i,Xn){let n=Math.min((i-Xn.start)/650,1),s=n*n*(3-2*n);Ct.position.lerpVectors(Xn.from,Xn.to,s),ht.target.lerpVectors(Xn.fromTarget,Xn.toTarget,s),n===1&&(Xn=null)}if(Ei){let n=0,s=0,r=new D().subVectors(ht.target,Ct.position);r.y=0,r.normalize();let a=new D(-r.z,0,r.x);if((hn.has("w")||hn.has("ArrowUp"))&&(n+=r.x,s+=r.z),(hn.has("s")||hn.has("ArrowDown"))&&(n-=r.x,s-=r.z),(hn.has("d")||hn.has("ArrowRight"))&&(n+=a.x,s+=a.z),(hn.has("a")||hn.has("ArrowLeft"))&&(n-=a.x,s-=a.z),n||s?Ki=null:Ki&&(n=Ki.x-It.position.x,s=Ki.z-It.position.z,Math.hypot(n,s)<.1&&(Ki=null)),n||s){let o=Math.hypot(n,s),l=n/o*e*(en==="lagos"?2.2:5.8),c=s/o*e*(en==="lagos"?2.2:5.8);Bv(It.position.x+l,It.position.z+c)?(It.position.x+=l,It.position.z+=c,It.rotation.y=Math.atan2(l,c),Ct.position.x+=l,Ct.position.z+=c,ht.target.x+=l,ht.target.z+=c):Ki=null}}ht.update(),Ct.updateMatrixWorld();let t=[];for(let n of qr){oo.copy(n.point).project(Ct);let s=(oo.x+1)*innerWidth/2,r=(-oo.y+1)*innerHeight/2,a=n.button.offsetWidth||n.place.name.length*7+36,o=n.place.city===en&&Lc&&oo.z<1&&oo.z>-1&&s>a/2+8&&s<innerWidth-a/2-8&&r>(Ov()?210:225)&&r<innerHeight-100;o&&s>innerWidth-78&&Math.abs(r-innerHeight/2)<100&&(o=!1),o&&n.place!==Zi&&(t.some(l=>Math.abs(l.x-s)<(l.w+a)/2+3&&Math.abs(l.y-r)<29)?o=!1:t.push({x:s,y:r,w:a})),n.button.hidden=!o,o&&(n.button.style.transform=`translate(${s}px,${r}px) translate(-50%,-100%)`)}if(en==="dublin"&&!document.hidden&&!Dv.matches){Pc+=e,z0.update(Pc);for(let n=0;n<pd.length;n++)n%2===0?pd[n].rotation.y=Pc*15:pd[n].rotation.x=Pc*19}for(let n=0;n<md.length;n++)md[n].position.x=((i*.001*(n%2?-1:1)+n*6)%30+30)%30-15;un.render(gs,Ct),requestAnimationFrame(G0)}requestAnimationFrame(G0);await Promise.all(Dc);it("loader").hidden=!0;co.dataset.ready="true";var O0=new URLSearchParams(location.search).get("city");["abuja","dublin"].includes(O0)&&Bc(O0);if(document.modelContext?.registerTool){let i=document.modelContext;for(let e of[{name:"switch_map_city",description:"Switch between the Lagos, Abuja and Dublin map views.",inputSchema:{type:"object",properties:{city:{type:"string",enum:["lagos","abuja","dublin"]}},required:["city"],additionalProperties:!1},execute:t=>Bc(t?.city)},{name:"list_map_places",description:"List the landmarks in the Lagos, Abuja and Dublin maps.",inputSchema:{type:"object",properties:{},additionalProperties:!1},annotations:{readOnlyHint:!0},execute:()=>ms.map(({id:t,name:n,city:s,x:r,z:a})=>({id:t,name:n,city:s,x:r,z:a}))},{name:"focus_map_place",description:"Select and focus a landmark in the map.",inputSchema:{type:"object",properties:{id:{type:"string"}},required:["id"],additionalProperties:!1},execute:t=>{let n=ms.find(s=>s.id===t?.id);if(!n)throw new Error("Unknown map place");return Oc(n),ho(n.x,n.z,n.id==="dubAirport"?45:10),{id:n.id,name:n.name,selected:!0}}}])try{await i.registerTool(e)}catch(t){console.warn("Map tool unavailable",t)}}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
