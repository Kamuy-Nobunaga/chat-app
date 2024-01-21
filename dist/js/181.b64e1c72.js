(self["webpackChunkchat_room_app"]=self["webpackChunkchat_room_app"]||[]).push([[181],{5743:function(e){!function(t,n){e.exports=n()}(0,(function(){"use strict";var e=1e3,t=6e4,n=36e5,i="millisecond",r="second",s="minute",o="hour",a="day",c="week",h="month",l="quarter",u="year",d="date",p="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,f=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var i=String(e);return!i||i.length>=t?e:""+Array(t+1-i.length).join(n)+e},y={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),i=Math.floor(n/60),r=n%60;return(t<=0?"+":"-")+m(i,2,"0")+":"+m(r,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var i=12*(n.year()-t.year())+(n.month()-t.month()),r=t.clone().add(i,h),s=n-r<0,o=t.clone().add(i+(s?-1:1),h);return+(-(i+(n-r)/(s?r-o:o-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:h,y:u,w:c,d:a,D:d,h:o,m:s,s:r,ms:i,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",C={};C[v]=g;var w="$isDayjsObject",b=function(e){return e instanceof S||!(!e||!e[w])},I=function e(t,n,i){var r;if(!t)return v;if("string"==typeof t){var s=t.toLowerCase();C[s]&&(r=s),n&&(C[s]=n,r=s);var o=t.split("-");if(!r&&o.length>1)return e(o[0])}else{var a=t.name;C[a]=t,r=a}return!i&&r&&(v=r),r||!i&&v},E=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new S(n)},T=y;T.l=I,T.i=b,T.w=function(e,t){return E(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var S=function(){function g(e){this.$L=I(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[w]=!0}var m=g.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(T.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var i=t.match(_);if(i){var r=i[2]-1||0,s=(i[7]||"0").substring(0,3);return n?new Date(Date.UTC(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)):new Date(i[1],r,i[3]||1,i[4]||0,i[5]||0,i[6]||0,s)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return T},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(e,t){var n=E(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return E(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<E(e)},m.$g=function(e,t,n){return T.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,i=!!T.u(t)||t,l=T.p(e),p=function(e,t){var r=T.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return i?r:r.endOf(a)},_=function(e,t){return T.w(n.toDate()[e].apply(n.toDate("s"),(i?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},f=this.$W,g=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(l){case u:return i?p(1,0):p(31,11);case h:return i?p(1,g):p(0,g+1);case c:var v=this.$locale().weekStart||0,C=(f<v?f+7:f)-v;return p(i?m-C:m+(6-C),g);case a:case d:return _(y+"Hours",0);case o:return _(y+"Minutes",1);case s:return _(y+"Seconds",2);case r:return _(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var n,c=T.p(e),l="set"+(this.$u?"UTC":""),p=(n={},n[a]=l+"Date",n[d]=l+"Date",n[h]=l+"Month",n[u]=l+"FullYear",n[o]=l+"Hours",n[s]=l+"Minutes",n[r]=l+"Seconds",n[i]=l+"Milliseconds",n)[c],_=c===a?this.$D+(t-this.$W):t;if(c===h||c===u){var f=this.clone().set(d,1);f.$d[p](_),f.init(),this.$d=f.set(d,Math.min(this.$D,f.daysInMonth())).$d}else p&&this.$d[p](_);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[T.p(e)]()},m.add=function(i,l){var d,p=this;i=Number(i);var _=T.p(l),f=function(e){var t=E(p);return T.w(t.date(t.date()+Math.round(e*i)),p)};if(_===h)return this.set(h,this.$M+i);if(_===u)return this.set(u,this.$y+i);if(_===a)return f(1);if(_===c)return f(7);var g=(d={},d[s]=t,d[o]=n,d[r]=e,d)[_]||1,m=this.$d.getTime()+i*g;return T.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var i=e||"YYYY-MM-DDTHH:mm:ssZ",r=T.z(this),s=this.$H,o=this.$m,a=this.$M,c=n.weekdays,h=n.months,l=n.meridiem,u=function(e,n,r,s){return e&&(e[n]||e(t,i))||r[n].slice(0,s)},d=function(e){return T.s(s%12||12,e,"0")},_=l||function(e,t,n){var i=e<12?"AM":"PM";return n?i.toLowerCase():i};return i.replace(f,(function(e,i){return i||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return T.s(t.$y,4,"0");case"M":return a+1;case"MM":return T.s(a+1,2,"0");case"MMM":return u(n.monthsShort,a,h,3);case"MMMM":return u(h,a);case"D":return t.$D;case"DD":return T.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return u(n.weekdaysMin,t.$W,c,2);case"ddd":return u(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(s);case"HH":return T.s(s,2,"0");case"h":return d(1);case"hh":return d(2);case"a":return _(s,o,!0);case"A":return _(s,o,!1);case"m":return String(o);case"mm":return T.s(o,2,"0");case"s":return String(t.$s);case"ss":return T.s(t.$s,2,"0");case"SSS":return T.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(i,d,p){var _,f=this,g=T.p(d),m=E(i),y=(m.utcOffset()-this.utcOffset())*t,v=this-m,C=function(){return T.m(f,m)};switch(g){case u:_=C()/12;break;case h:_=C();break;case l:_=C()/3;break;case c:_=(v-y)/6048e5;break;case a:_=(v-y)/864e5;break;case o:_=v/n;break;case s:_=v/t;break;case r:_=v/e;break;default:_=v}return p?_:T.a(_)},m.daysInMonth=function(){return this.endOf(h).$D},m.$locale=function(){return C[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),i=I(e,t,!0);return i&&(n.$L=i),n},m.clone=function(){return T.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},g}(),k=S.prototype;return E.prototype=k,[["$ms",i],["$s",r],["$m",s],["$H",o],["$W",a],["$M",h],["$y",u],["$D",d]].forEach((function(e){k[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),E.extend=function(e,t){return e.$i||(e(t,S,E),e.$i=!0),E},E.locale=I,E.isDayjs=b,E.unix=function(e){return E(1e3*e)},E.en=C[v],E.Ls=C,E.p={},E}))},5181:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return kl}});var i=n(3396);const r={class:"chat-view"};function s(e,t,n,s,o,a){const c=(0,i.up)("MessageInfo"),h=(0,i.up)("MessageContainer"),l=(0,i.up)("MessageInput");return(0,i.wg)(),(0,i.iD)("div",r,[(0,i.Wm)(c,{username:n.username},null,8,["username"]),(0,i.Wm)(h,{messages:s.messages,username:n.username},null,8,["messages","username"]),(0,i.Wm)(l,{username:n.username},null,8,["username"])])}n(560);var o=n(7139);const a={class:"info"};var c=(0,i.aZ)({__name:"MessageInfo",props:{username:{type:String,required:!0}},setup(e){return(t,n)=>((0,i.wg)(),(0,i.iD)("div",a,[(0,i._)("span",null,(0,o.zw)(e.username.toUpperCase()),1)]))}}),h=n(89);const l=(0,h.Z)(c,[["__scopeId","data-v-414f3480"]]);var u=l,d=n(4870);const p={class:"message-container"},_={key:0},f={key:1};var g=(0,i.aZ)({__name:"MessageContainer",props:{messages:{type:Array,required:!0},username:{type:String,required:!0}},setup(e){const t=(0,d.iH)(),n=e;(0,i.YP)(n.messages,(()=>{r()}));const r=()=>{(0,i.Y3)((()=>{t.value.scrollTo({top:t.value.offsetHeight})}))};return(n,r)=>((0,i.wg)(),(0,i.iD)("div",p,[(0,i._)("div",{class:"message-block",ref_key:"messageContainer",ref:t},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.messages,(t=>((0,i.wg)(),(0,i.iD)("div",{key:t.key,class:(0,o.C_)(t.username===e.username?"user":"other-user")},[t.username===e.username?((0,i.wg)(),(0,i.iD)("span",_,(0,o.zw)(t.message),1)):(0,i.kq)("",!0),t.username!==e.username?((0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("span",null,(0,o.zw)(t.username),1),(0,i._)("span",null,(0,o.zw)(t.message),1)])):(0,i.kq)("",!0)],2)))),128))],512)]))}});const m=(0,h.Z)(g,[["__scopeId","data-v-55150727"]]);var y=m,v=n(9242);n(3429);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const C={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},w=function(e,t){if(!e)throw b(t)},b=function(e){return new Error("Firebase Database ("+C.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},I=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},E=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},T={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,c=a?e[r+2]:0,h=t>>2,l=(3&t)<<4|o>>4;let u=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(u=64)),i.push(n[h],n[l],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(I(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):E(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,o=s?n[e.charAt(r)]:0;++r;const a=r<e.length,c=a?n[e.charAt(r)]:64;++r;const h=r<e.length,l=h?n[e.charAt(r)]:64;if(++r,null==t||null==o||null==c||null==l)throw new S;const u=t<<2|o>>4;if(i.push(u),64!==c){const e=o<<4&240|c>>2;if(i.push(e),64!==l){const e=c<<6&192|l;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const k=function(e){const t=I(e);return T.encodeByteArray(t,!0)},N=function(e){return k(e).replace(/\./g,"")},R=function(e){try{return T.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(e){return P(void 0,e)}function P(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&x(n)&&(e[n]=P(e[n],t[n]));return e}function x(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=()=>A().__FIREBASE_DEFAULTS__,M=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},L=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&R(e[1]);return t&&JSON.parse(t)},F=()=>{try{return O()||M()||L()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},q=e=>{var t,n;return null===(n=null===(t=F())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},U=e=>{const t=q(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},$=()=>{var e;return null===(e=F())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[N(JSON.stringify(n)),N(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function j(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(H())}function V(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function z(){return!0===C.NODE_CLIENT||!0===C.NODE_ADMIN}function Y(){try{return"object"===typeof indexedDB}catch(e){return!1}}function K(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(Sn){t(Sn)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const G="FirebaseError";class Q extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=G,Object.setPrototypeOf(this,Q.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,J.prototype.create)}}class J{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?X(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new Q(i,o,n);return a}}function X(e,t){return e.replace(Z,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const Z=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(e){return JSON.parse(e)}function te(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=function(e){let t={},n={},i={},r="";try{const s=e.split(".");t=ee(R(s[0])||""),n=ee(R(s[1])||""),r=s[2],i=n["d"]||{},delete n["d"]}catch(s){}return{header:t,claims:n,data:i,signature:r}},ie=function(e){const t=ne(e),n=t.claims;return!!n&&"object"===typeof n&&n.hasOwnProperty("iat")},re=function(e){const t=ne(e).claims;return"object"===typeof t&&!0===t["admin"]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function se(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function oe(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function ae(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ce(e,t,n){const i={};for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=t.call(n,e[r],r,e));return i}function he(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(le(n)&&le(s)){if(!he(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function le(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ue(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"===typeof e)for(let l=0;l<16;l++)n[l]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let l=0;l<16;l++)n[l]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let l=16;l<80;l++){const e=n[l-3]^n[l-8]^n[l-14]^n[l-16];n[l]=4294967295&(e<<1|e>>>31)}let i,r,s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],c=this.chain_[3],h=this.chain_[4];for(let l=0;l<80;l++){l<40?l<20?(i=c^o&(a^c),r=1518500249):(i=o^a^c,r=1859775393):l<60?(i=o&a|c&(o|a),r=2400959708):(i=o^a^c,r=3395469782);const e=(s<<5|s>>>27)+i+h+r+n[l]&4294967295;h=c,c=a,a=4294967295&(o<<30|o>>>2),o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const r=this.buf_;let s=this.inbuf_;while(i<t){if(0===s)while(i<=n)this.compress_(e,i),i+=this.blockSize;if("string"===typeof e){while(i<t)if(r[s]=e.charCodeAt(i),++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}else while(i<t)if(r[s]=e[i],++s,++i,s===this.blockSize){this.compress_(r),s=0;break}}this.inbuf_=s,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let i=0;i<5;i++)for(let t=24;t>=0;t-=8)e[n]=this.chain_[i]>>t&255,++n;return e}}function pe(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _e=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);if(r>=55296&&r<=56319){const t=r-55296;i++,w(i<e.length,"Surrogate pair missing trail surrogate.");const n=e.charCodeAt(i)-56320;r=65536+(t<<10)+n}r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):r<65536?(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},fe=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ge(e){return e&&e._delegate?e._delegate:e}class me{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new W;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(we(e))try{this.getOrInitializeService({instanceIdentifier:ye})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=ye){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=ye){return this.instances.has(e)}getOptions(e=ye){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:Ce(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=ye){return this.component?this.component.multipleInstances?e:ye:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function Ce(e){return e===ye?void 0:e}function we(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ve(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ie=[];var Ee;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(Ee||(Ee={}));const Te={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Se=Ee.INFO,ke={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},Ne=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=ke[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Re{constructor(e){this.name=e,this._logLevel=Se,this._logHandler=Ne,this._userLogHandler=null,Ie.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?Te[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const De=(e,t)=>t.some((t=>e instanceof t));let Pe,xe;function Ae(){return Pe||(Pe=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Oe(){return xe||(xe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Me=new WeakMap,Le=new WeakMap,Fe=new WeakMap,qe=new WeakMap,Ue=new WeakMap;function $e(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(ze(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Me.set(t,e)})).catch((()=>{})),Ue.set(t,e),t}function We(e){if(Le.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));Le.set(e,t)}let Be={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return Le.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Fe.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ze(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function He(e){Be=e(Be)}function je(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?Oe().includes(e)?function(...t){return e.apply(Ye(this),t),ze(Me.get(this))}:function(...t){return ze(e.apply(Ye(this),t))}:function(t,...n){const i=e.call(Ye(this),t,...n);return Fe.set(i,t.sort?t.sort():[t]),ze(i)}}function Ve(e){return"function"===typeof e?je(e):(e instanceof IDBTransaction&&We(e),De(e,Ae())?new Proxy(e,Be):e)}function ze(e){if(e instanceof IDBRequest)return $e(e);if(qe.has(e))return qe.get(e);const t=Ve(e);return t!==e&&(qe.set(e,t),Ue.set(t,e)),t}const Ye=e=>Ue.get(e);function Ke(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=ze(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(ze(o.result),e.oldVersion,e.newVersion,ze(o.transaction),e)})),n&&o.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(e=>r(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),a}const Ge=["get","getKey","getAll","getAllKeys","count"],Qe=["put","add","delete","clear"],Je=new Map;function Xe(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(Je.get(t))return Je.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=Qe.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!Ge.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return Je.set(t,s),s}He((e=>({...e,get:(t,n,i)=>Xe(t,n)||e.get(t,n,i),has:(t,n)=>!!Xe(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(et(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function et(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const tt="@firebase/app",nt="0.9.26",it=new Re("@firebase/app"),rt="@firebase/app-compat",st="@firebase/analytics-compat",ot="@firebase/analytics",at="@firebase/app-check-compat",ct="@firebase/app-check",ht="@firebase/auth",lt="@firebase/auth-compat",ut="@firebase/database",dt="@firebase/database-compat",pt="@firebase/functions",_t="@firebase/functions-compat",ft="@firebase/installations",gt="@firebase/installations-compat",mt="@firebase/messaging",yt="@firebase/messaging-compat",vt="@firebase/performance",Ct="@firebase/performance-compat",wt="@firebase/remote-config",bt="@firebase/remote-config-compat",It="@firebase/storage",Et="@firebase/storage-compat",Tt="@firebase/firestore",St="@firebase/firestore-compat",kt="firebase",Nt="10.7.2",Rt="[DEFAULT]",Dt={[tt]:"fire-core",[rt]:"fire-core-compat",[ot]:"fire-analytics",[st]:"fire-analytics-compat",[ct]:"fire-app-check",[at]:"fire-app-check-compat",[ht]:"fire-auth",[lt]:"fire-auth-compat",[ut]:"fire-rtdb",[dt]:"fire-rtdb-compat",[pt]:"fire-fn",[_t]:"fire-fn-compat",[ft]:"fire-iid",[gt]:"fire-iid-compat",[mt]:"fire-fcm",[yt]:"fire-fcm-compat",[vt]:"fire-perf",[Ct]:"fire-perf-compat",[wt]:"fire-rc",[bt]:"fire-rc-compat",[It]:"fire-gcs",[Et]:"fire-gcs-compat",[Tt]:"fire-fst",[St]:"fire-fst-compat","fire-js":"fire-js",[kt]:"fire-js-all"},Pt=new Map,xt=new Map;function At(e,t){try{e.container.addComponent(t)}catch(n){it.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ot(e){const t=e.name;if(xt.has(t))return it.debug(`There were multiple attempts to register component ${t}.`),!1;xt.set(t,e);for(const n of Pt.values())At(n,e);return!0}function Mt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lt={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ft=new J("app","Firebase",Lt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new me("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut=Nt;function $t(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const i=Object.assign({name:Rt,automaticDataCollectionEnabled:!1},t),r=i.name;if("string"!==typeof r||!r)throw Ft.create("bad-app-name",{appName:String(r)});if(n||(n=$()),!n)throw Ft.create("no-options");const s=Pt.get(r);if(s){if(he(n,s.options)&&he(i,s.config))return s;throw Ft.create("duplicate-app",{appName:r})}const o=new be(r);for(const c of xt.values())o.addComponent(c);const a=new qt(n,i,o);return Pt.set(r,a),a}function Wt(e=Rt){const t=Pt.get(e);if(!t&&e===Rt&&$())return $t();if(!t)throw Ft.create("no-app",{appName:e});return t}function Bt(e,t,n){var i;let r=null!==(i=Dt[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void it.warn(e.join(" "))}Ot(new me(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ht="firebase-heartbeat-database",jt=1,Vt="firebase-heartbeat-store";let zt=null;function Yt(){return zt||(zt=Ke(Ht,jt,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(Vt)}catch(n){console.warn(n)}}}}).catch((e=>{throw Ft.create("idb-open",{originalErrorMessage:e.message})}))),zt}async function Kt(e){try{const t=await Yt(),n=await t.transaction(Vt).objectStore(Vt).get(Qt(e));return n}catch(t){if(t instanceof Q)it.warn(t.message);else{const e=Ft.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});it.warn(e.message)}}}async function Gt(e,t){try{const n=await Yt(),i=n.transaction(Vt,"readwrite"),r=i.objectStore(Vt);await r.put(t,Qt(e)),await i.done}catch(n){if(n instanceof Q)it.warn(n.message);else{const e=Ft.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});it.warn(e.message)}}}function Qt(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=1024,Xt=2592e6;class Zt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nn(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;const n=this.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),r=en();if((null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==r&&!this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Xt})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=en(),{heartbeatsToSend:n,unsentEntries:i}=tn(this._heartbeatsCache.heartbeats),r=N(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function en(){const e=new Date;return e.toISOString().substring(0,10)}function tn(e,t=Jt){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),rn(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),rn(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class nn{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!Y()&&K().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Kt(this.app);return(null===e||void 0===e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Gt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return Gt(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function rn(e){return N(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(e){Ot(new me("platform-logger",(e=>new Ze(e)),"PRIVATE")),Ot(new me("heartbeat",(e=>new Zt(e)),"PRIVATE")),Bt(tt,nt,e),Bt(tt,nt,"esm2017"),Bt("fire-js","")}sn("");var on="firebase",an="10.7.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Bt(on,an,"app");const cn="@firebase/database",hn="1.0.2";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln="";function un(e){ln=e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),te(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:ee(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return se(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=function(e){try{if("undefined"!==typeof window&&"undefined"!==typeof window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new dn(t)}}catch(t){}return new pn},fn=_n("localStorage"),gn=_n("sessionStorage"),mn=new Re("@firebase/database"),yn=function(){let e=1;return function(){return e++}}(),vn=function(e){const t=_e(e),n=new de;n.update(t);const i=n.digest();return T.encodeByteArray(i)},Cn=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"===typeof i&&"number"===typeof i.length?t+=Cn.apply(null,i):t+="object"===typeof i?te(i):i,t+=" "}return t};let wn=null,bn=!0;const In=function(e,t){w(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(mn.logLevel=Ee.VERBOSE,wn=mn.log.bind(mn),t&&gn.set("logging_enabled",!0)):"function"===typeof e?wn=e:(wn=null,gn.remove("logging_enabled"))},En=function(...e){if(!0===bn&&(bn=!1,null===wn&&!0===gn.get("logging_enabled")&&In(!0)),wn){const t=Cn.apply(null,e);wn(t)}},Tn=function(e){return function(...t){En(e,...t)}},Sn=function(...e){const t="FIREBASE INTERNAL ERROR: "+Cn(...e);mn.error(t)},kn=function(...e){const t=`FIREBASE FATAL ERROR: ${Cn(...e)}`;throw mn.error(t),new Error(t)},Nn=function(...e){const t="FIREBASE WARNING: "+Cn(...e);mn.warn(t)},Rn=function(){"undefined"!==typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Nn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Dn=function(e){return"number"===typeof e&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Pn=function(e){if(z()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}},xn="[MIN_NAME]",An="[MAX_NAME]",On=function(e,t){if(e===t)return 0;if(e===xn||t===An)return-1;if(t===xn||e===An)return 1;{const n=Yn(e),i=Yn(t);return null!==n?null!==i?n-i===0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},Mn=function(e,t){return e===t?0:e<t?-1:1},Ln=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+te(t))},Fn=function(e){if("object"!==typeof e||null===e)return te(e);const t=[];for(const i in e)t.push(i);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=te(t[i]),n+=":",n+=Fn(e[t[i]]);return n+="}",n},qn=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let r=0;r<n;r+=t)r+t>n?i.push(e.substring(r,n)):i.push(e.substring(r,r+t));return i};function Un(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const $n=function(e){w(!Dn(e),"Invalid JSON number");const t=11,n=52,i=(1<<t-1)-1;let r,s,o,a,c;0===e?(s=0,o=0,r=1/e===-1/0?1:0):(r=e<0,e=Math.abs(e),e>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(e)/Math.LN2),i),s=a+i,o=Math.round(e*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-i-n))));const h=[];for(c=n;c;c-=1)h.push(o%2?1:0),o=Math.floor(o/2);for(c=t;c;c-=1)h.push(s%2?1:0),s=Math.floor(s/2);h.push(r?1:0),h.reverse();const l=h.join("");let u="";for(c=0;c<64;c+=8){let e=parseInt(l.substr(c,8),2).toString(16);1===e.length&&(e="0"+e),u+=e}return u.toLowerCase()},Wn=function(){return!("object"!==typeof window||!window["chrome"]||!window["chrome"]["extension"]||/^chrome/.test(window.location.href))},Bn=function(){return"object"===typeof Windows&&"object"===typeof Windows.UI};function Hn(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}const jn=new RegExp("^-?(0*)\\d{1,10}$"),Vn=-2147483648,zn=2147483647,Yn=function(e){if(jn.test(e)){const t=Number(e);if(t>=Vn&&t<=zn)return t}return null},Kn=function(e){try{e()}catch(t){setTimeout((()=>{const e=t.stack||"";throw Nn("Exception was thrown by user callback.",e),t}),Math.floor(0))}},Gn=function(){const e="object"===typeof window&&window["navigator"]&&window["navigator"]["userAgent"]||"";return e.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Qn=function(e,t){const n=setTimeout(e,t);return"number"===typeof n&&"undefined"!==typeof Deno&&Deno["unrefTimer"]?Deno.unrefTimer(n):"object"===typeof n&&n["unref"]&&n["unref"](),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jn{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null===t||void 0===t?void 0:t.getImmediate({optional:!0}),this.appCheck||null===t||void 0===t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Nn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(En("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Nn(e)}}class Zn{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zn.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ei="5",ti="v",ni="s",ii="r",ri="f",si=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,oi="ls",ai="p",ci="ac",hi="websocket",li="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ui{constructor(e,t,n,i,r=!1,s="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=s,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=fn.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&fn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function di(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function pi(e,t,n){let i;if(w("string"===typeof t,"typeof type must == string"),w("object"===typeof n,"typeof params must == object"),t===hi)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==li)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}di(e)&&(n["ns"]=e.namespace);const r=[];return Un(n,((e,t)=>{r.push(e+"="+t)})),i+r.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(){this.counters_={}}incrementCounter(e,t=1){se(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return D(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi={},gi={};function mi(e){const t=e.toString();return fi[t]||(fi[t]=new _i),fi[t]}function yi(e,t){const n=e.toString();return gi[n]||(gi[n]=t()),gi[n]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){this.pendingResponses[e]=t;while(this.pendingResponses[this.currentResponseNum]){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Kn((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ci="start",wi="close",bi="pLPCommand",Ii="pRTLPCB",Ei="id",Ti="pw",Si="ser",ki="cb",Ni="seg",Ri="ts",Di="d",Pi="dframe",xi=1870,Ai=30,Oi=xi-Ai,Mi=25e3,Li=3e4;class Fi{constructor(e,t,n,i,r,s,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.transportSessionId=s,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Tn(e),this.stats_=mi(t),this.urlFn=e=>(this.appCheckToken&&(e[ci]=this.appCheckToken),pi(t,li,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new vi(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(Li)),Pn((()=>{if(this.isClosed_)return;this.scriptTagHolder=new qi(((...e)=>{const[t,n,i,r,s]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===Ci)this.id=n,this.password=i;else{if(t!==wi)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[Ci]="t",e[Si]=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e[ki]=this.scriptTagHolder.uniqueCallbackIdentifier),e[ti]=ei,this.transportSessionId&&(e[ni]=this.transportSessionId),this.lastSessionId&&(e[oi]=this.lastSessionId),this.applicationId&&(e[ai]=this.applicationId),this.appCheckToken&&(e[ci]=this.appCheckToken),"undefined"!==typeof location&&location.hostname&&si.test(location.hostname)&&(e[ii]=ri);const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Fi.forceAllow_=!0}static forceDisallow(){Fi.forceDisallow_=!0}static isAvailable(){return!z()&&(!!Fi.forceAllow_||!Fi.forceDisallow_&&"undefined"!==typeof document&&null!=document.createElement&&!Wn()&&!Bn())}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=te(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=k(t),i=qn(n,Oi);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if(z())return;this.myDisconnFrame=document.createElement("iframe");const n={};n[Pi]="t",n[Ei]=e,n[Ti]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=te(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class qi{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,z())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=yn(),window[bi+this.uniqueCallbackIdentifier]=e,window[Ii+this.uniqueCallbackIdentifier]=t,this.myIFrame=qi.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){const e=document.domain;n='<script>document.domain="'+e+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(r){En("frame writing exception"),r.stack&&En(r.stack),En(r)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{const t=e.contentWindow.document;t||En("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){this.myID=e,this.myPW=t,this.alive=!0;while(this.newRequest_());}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Ei]=this.myID,e[Ti]=this.myPW,e[Si]=this.currentSerial;let t=this.urlFn(e),n="",i=0;while(this.pendingSegs.length>0){const e=this.pendingSegs[0];if(!(e.d.length+Ai+n.length<=xi))break;{const e=this.pendingSegs.shift();n=n+"&"+Ni+i+"="+e.seg+"&"+Ri+i+"="+e.ts+"&"+Di+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(Mi)),r=()=>{clearTimeout(i),n()};this.addTag(e,r)}addTag(e,t){z()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{En("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(n){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ui=16384,$i=45e3;let Wi=null;"undefined"!==typeof MozWebSocket?Wi=MozWebSocket:"undefined"!==typeof WebSocket&&(Wi=WebSocket);class Bi{constructor(e,t,n,i,r,s,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Tn(this.connId),this.stats_=mi(t),this.connURL=Bi.connectionURL_(t,s,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,r){const s={};return s[ti]=ei,!z()&&"undefined"!==typeof location&&location.hostname&&si.test(location.hostname)&&(s[ii]=ri),t&&(s[ni]=t),n&&(s[oi]=n),i&&(s[ci]=i),r&&(s[ai]=r),pi(e,hi,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,fn.set("previous_websocket_failure",!0);try{let e;if(z()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${ei}/${ln}/${process.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers["Authorization"]=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={NODE_ENV:"production",BASE_URL:"/"},i=0===this.connURL.indexOf("wss://")?n["HTTPS_PROXY"]||n["https_proxy"]:n["HTTP_PROXY"]||n["http_proxy"];i&&(e["proxy"]={origin:i})}this.mySock=new Wi(this.connURL,[],e)}catch(n){this.log_("Error instantiating WebSocket.");const e=n.message||n.data;return e&&this.log_(e),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){Bi.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!==typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==Wi&&!Bi.forceDisallow_}static previouslyFailed(){return fn.isInMemoryStorage||!0===fn.get("previous_websocket_failure")}markConnectionHealthy(){fn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=ee(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(w(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e["data"];if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=te(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=qn(t,Ui);n.length>1&&this.sendString_(String(n.length));for(let i=0;i<n.length;i++)this.sendString_(n[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor($i))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Bi.responsesRequiredToBeHealthy=2,Bi.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Fi,Bi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Bi&&Bi["isAvailable"]();let n=t&&!Bi.previouslyFailed();if(e.webSocketOnly&&(t||Nn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Bi];else{const e=this.transports_=[];for(const t of Hi.ALL_TRANSPORTS)t&&t["isAvailable"]()&&e.push(t);Hi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Hi.globalTransportInitialized_=!1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ji=6e4,Vi=5e3,zi=10240,Yi=102400,Ki="t",Gi="d",Qi="s",Ji="r",Xi="e",Zi="o",er="a",tr="n",nr="p",ir="h";class rr{constructor(e,t,n,i,r,s,o,a,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=s,this.onReady_=o,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Tn("c:"+this.id+":"),this.transportManager_=new Hi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e["healthyTimeout"]||0;i>0&&(this.healthyTimeout_=Qn((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Yi?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>zi?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ki in e){const t=e[Ki];t===er?this.upgradeIfSecondaryHealthy_():t===Ji?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):t===Zi&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ln("t",e),n=Ln("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nr,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:er,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tr,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ln("t",e),n=Ln("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ln(Ki,e);if(Gi in e){const n=e[Gi];if(t===ir){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if(t===tr){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===Qi?this.onConnectionShutdown_(n):t===Ji?this.onReset_(n):t===Xi?Sn("Server Error: "+n):t===Zi?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Sn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),ei!==n&&Nn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e["responsesRequiredToBeHealthy"]||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Qn((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(ji))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Qn((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(Vi))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nr,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(fn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.allowedEvents_=e,this.listeners_={},w(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!n||n===i[r].context))return void i.splice(r,1)}validateEventType_(e){w(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar extends or{constructor(){super(["online"]),this.online_=!0,"undefined"===typeof window||"undefined"===typeof window.addEventListener||j()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new ar}getInitialEvent(e){return w("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr=32,hr=768;class lr{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function ur(){return new lr("")}function dr(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function pr(e){return e.pieces_.length-e.pieceNum_}function _r(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new lr(e.pieces_,t)}function fr(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function gr(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function mr(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function yr(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new lr(t,0)}function vr(e,t){const n=[];for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);if(t instanceof lr)for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new lr(n,0)}function Cr(e){return e.pieceNum_>=e.pieces_.length}function wr(e,t){const n=dr(e),i=dr(t);if(null===n)return t;if(n===i)return wr(_r(e),_r(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function br(e,t){if(pr(e)!==pr(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ir(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(pr(e)>pr(t))return!1;while(n<e.pieces_.length){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Er{constructor(e,t){this.errorPrefix_=t,this.parts_=mr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=fe(this.parts_[n]);kr(this)}}function Tr(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=fe(t),kr(e)}function Sr(e){const t=e.parts_.pop();e.byteLength_-=fe(t),e.parts_.length>0&&(e.byteLength_-=1)}function kr(e){if(e.byteLength_>hr)throw new Error(e.errorPrefix_+"has a key path longer than "+hr+" bytes ("+e.byteLength_+").");if(e.parts_.length>cr)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+cr+") or object contains a cycle "+Nr(e))}function Nr(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr extends or{constructor(){let e,t;super(["visible"]),"undefined"!==typeof document&&"undefined"!==typeof document.addEventListener&&("undefined"!==typeof document["hidden"]?(t="visibilitychange",e="hidden"):"undefined"!==typeof document["mozHidden"]?(t="mozvisibilitychange",e="mozHidden"):"undefined"!==typeof document["msHidden"]?(t="msvisibilitychange",e="msHidden"):"undefined"!==typeof document["webkitHidden"]&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Rr}getInitialEvent(e){return w("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=1e3,Pr=3e5,xr=3e4,Ar=1.3,Or=3e4,Mr="server_kill",Lr=3;class Fr extends sr{constructor(e,t,n,i,r,s,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=s,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Fr.nextPersistentConnectionId_++,this.log_=Tn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Dr,this.maxReconnectDelay_=Pr,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!z())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Rr.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&ar.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(te(r)),w(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new W,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const n=e["d"];"ok"===e["s"]?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,n,i){this.initConnection_();const r=e._queryIdentifier,s=e._path.toString();this.log_("Listen called for "+s+" "+r),this.listens.has(s)||this.listens.set(s,new Map),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),w(!this.listens.get(s).has(r),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(s).set(r,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const r={p:n},s="q";e.tag&&(r["q"]=t._queryObject,r["t"]=e.tag),r["h"]=e.hashFn(),this.sendRequest(s,r,(r=>{const s=r["d"],o=r["s"];Fr.warnOnListenWarnings_(s,t);const a=this.listens.get(n)&&this.listens.get(n).get(i);a===e&&(this.log_("listen response",r),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,s))}))}static warnOnListenWarnings_(e,t){if(e&&"object"===typeof e&&se(e,"w")){const n=oe(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Nn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){const t=e&&40===e.length;(t||re(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=xr)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ie(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n["noauth"]=!0:"object"===typeof this.authOverride_&&(n["authvar"]=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t["s"],i=t["d"]||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e["s"],n=e["d"]||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),w(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");const r=this.removeListen_(n,i);r&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},s="n";i&&(r["q"]=n,r["t"]=i),this.sendRequest(s,r)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const r={p:t,d:n};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,(e=>{i&&setTimeout((()=>{i(e["s"],e["d"])}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,r){this.initConnection_();const s={p:t,d:n};void 0!==r&&(s["h"]=r),this.outstandingPuts_.push({action:e,request:s,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n["s"],n["d"])}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{const t=e["s"];if("ok"!==t){const t=e["d"];this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+te(e));const t=e["r"],n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e["b"]))}else{if("error"in e)throw"A server-side error has occurred: "+e["error"];"a"in e&&this.onDataPush_(e["a"],e["b"])}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t["p"],t["d"],!1,t["t"]):"m"===e?this.onDataUpdate_(t["p"],t["d"],!0,t["t"]):"c"===e?this.onListenRevoked_(t["p"],t["q"]):"ac"===e?this.onAuthRevoked_(t["s"],t["d"]):"apc"===e?this.onAppCheckRevoked_(t["s"],t["d"]):"sd"===e?this.onSecurityDebugPacket_(t):Sn("Unrecognized action received from server: "+te(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){w(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){const e=(new Date).getTime()-this.lastConnectionEstablishedTime_;e>Or&&(this.reconnectDelay_=Dr),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Ar)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Fr.nextConnectionId_++,r=this.lastSessionId;let s=!1,o=null;const a=function(){o?o.close():(s=!0,n())},c=function(e){w(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,c]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);s?En("getToken() completed but was canceled"):(En("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=c&&c.token,o=new rr(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Nn(e+" ("+this.repoInfo_.toString()+")"),this.interrupt(Mr)}),r))}catch(Sn){this.log_("Failed to get token: "+Sn),s||(this.repoInfo_.nodeAdmin&&Nn(Sn),a())}}}interrupt(e){En("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){En("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ae(this.interruptReasons_)&&(this.reconnectDelay_=Dr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>Fn(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new lr(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){En("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Lr&&(this.reconnectDelay_=xr,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){En("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Lr&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e["msg"].replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);while(this.onDisconnectRequestQueue_.length){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";z()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+ln.replace(/\./g,"-")]=1,j()?e["framework.cordova"]=1:V()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ar.getInstance().currentlyOnline();return ae(this.interruptReasons_)&&e}}Fr.nextPersistentConnectionId_=0,Fr.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qr{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new qr(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new qr(xn,e),i=new qr(xn,t);return 0!==this.compare(n,i)}minPost(){return qr.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $r;class Wr extends Ur{static get __EMPTY_NODE(){return $r}static set __EMPTY_NODE(e){$r=e}compare(e,t){return On(e.name,t.name)}isDefinedOn(e){throw b("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return qr.MIN}maxPost(){return new qr(An,$r)}makePost(e,t){return w("string"===typeof e,"KeyIndex indexValue must always be a string."),new qr(e,$r)}toString(){return".key"}}const Br=new Wr;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t,n,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let s=1;while(!e.isEmpty())if(s=t?n(e.key,t):1,i&&(s*=-1),s<0)e=this.isReverse_?e.left:e.right;else{if(0===s){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_){t=t.left;while(!t.isEmpty())this.nodeStack_.push(t),t=t.right}else{t=t.right;while(!t.isEmpty())this.nodeStack_.push(t),t=t.left}return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class jr{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:jr.RED,this.left=null!=i?i:zr.EMPTY_NODE,this.right=null!=r?r:zr.EMPTY_NODE}copy(e,t,n,i,r){return new jr(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return zr.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return zr.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,jr.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,jr.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}jr.RED=!0,jr.BLACK=!1;class Vr{copy(e,t,n,i,r){return this}insert(e,t,n){return new jr(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zr{constructor(e,t=zr.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new zr(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,jr.BLACK,null,null))}remove(e){return new zr(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,jr.BLACK,null,null))}get(e){let t,n=this.root_;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;while(!n.isEmpty()){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;n=n.left;while(!n.right.isEmpty())n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Hr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Hr(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Hr(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Hr(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yr(e,t){return On(e.name,t.name)}function Kr(e,t){return On(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr;function Qr(e){Gr=e}zr.EMPTY_NODE=new Vr;const Jr=function(e){return"number"===typeof e?"number:"+$n(e):"string:"+e},Xr=function(e){if(e.isLeafNode()){const t=e.val();w("string"===typeof t||"number"===typeof t||"object"===typeof t&&se(t,".sv"),"Priority must be a string or number.")}else w(e===Gr||e.isEmpty(),"priority of unexpected type.");w(e===Gr||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Zr,es,ts;class ns{constructor(e,t=ns.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,w(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Xr(this.priorityNode_)}static set __childrenNodeConstructor(e){Zr=e}static get __childrenNodeConstructor(){return Zr}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ns(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:ns.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Cr(e)?this:".priority"===dr(e)?this.priorityNode_:ns.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:ns.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=dr(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(w(".priority"!==n||1===pr(e),".priority must be the last token in a path"),this.updateImmediateChild(n,ns.__childrenNodeConstructor.EMPTY_NODE.updateChild(_r(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Jr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?$n(this.value_):this.value_,this.lazyHash_=vn(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ns.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ns.__childrenNodeConstructor?-1:(w(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=ns.VALUE_TYPE_ORDER.indexOf(t),r=ns.VALUE_TYPE_ORDER.indexOf(n);return w(i>=0,"Unknown leaf type: "+t),w(r>=0,"Unknown leaf type: "+n),i===r?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}function is(e){es=e}function rs(e){ts=e}ns.VALUE_TYPE_ORDER=["object","boolean","number","string"];class ss extends Ur{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),r=n.compareTo(i);return 0===r?On(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return qr.MIN}maxPost(){return new qr(An,new ns("[PRIORITY-POST]",ts))}makePost(e,t){const n=es(e);return new qr(t,new ns("[PRIORITY-POST]",n))}toString(){return".priority"}}const os=new ss,as=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){const t=e=>parseInt(Math.log(e)/as,10),n=e=>parseInt(Array(e+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=n(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const hs=function(e,t,n,i){e.sort(t);const r=function(t,i){const s=i-t;let o,a;if(0===s)return null;if(1===s)return o=e[t],a=n?n(o):o,new jr(a,o.node,jr.BLACK,null,null);{const c=parseInt(s/2,10)+t,h=r(t,c),l=r(c+1,i);return o=e[c],a=n?n(o):o,new jr(a,o.node,jr.BLACK,h,l)}},s=function(t){let i=null,s=null,o=e.length;const a=function(t,i){const s=o-t,a=o;o-=t;const h=r(s+1,a),l=e[s],u=n?n(l):l;c(new jr(u,l.node,i,null,h))},c=function(e){i?(i.left=e,i=e):(s=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,jr.BLACK):(a(i,jr.BLACK),a(i,jr.RED))}return s},o=new cs(e.length),a=s(o);return new zr(i||t,a)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ls;const us={};class ds{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return w(us&&os,"ChildrenNode.ts has not been loaded"),ls=ls||new ds({".priority":us},{".priority":os}),ls}get(e){const t=oe(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof zr?t:null}hasIndex(e){return se(this.indexSet_,e.toString())}addIndex(e,t){w(e!==Br,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const r=t.getIterator(qr.Wrap);let s,o=r.getNext();while(o)i=i||e.isDefinedOn(o.node),n.push(o),o=r.getNext();s=i?hs(n,e.getCompare()):us;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const h=Object.assign({},this.indexes_);return h[a]=s,new ds(h,c)}addToIndexes(e,t){const n=ce(this.indexes_,((n,i)=>{const r=oe(this.indexSet_,i);if(w(r,"Missing index implementation for "+i),n===us){if(r.isDefinedOn(e.node)){const n=[],i=t.getIterator(qr.Wrap);let s=i.getNext();while(s)s.name!==e.name&&n.push(s),s=i.getNext();return n.push(e),hs(n,r.getCompare())}return us}{const i=t.get(e.name);let r=n;return i&&(r=r.remove(new qr(e.name,i))),r.insert(e,e.node)}}));return new ds(n,this.indexSet_)}removeFromIndexes(e,t){const n=ce(this.indexes_,(n=>{if(n===us)return n;{const i=t.get(e.name);return i?n.remove(new qr(e.name,i)):n}}));return new ds(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps;class _s{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Xr(this.priorityNode_),this.children_.isEmpty()&&w(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ps||(ps=new _s(new zr(Kr),null,ds.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ps}updatePriority(e){return this.children_.isEmpty()?this:new _s(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?ps:t}}getChild(e){const t=dr(e);return null===t?this:this.getImmediateChild(t).getChild(_r(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(w(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new qr(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(n,this.children_));const s=i.isEmpty()?ps:this.priorityNode_;return new _s(i,s,r)}}updateChild(e,t){const n=dr(e);if(null===n)return t;{w(".priority"!==dr(e)||1===pr(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(_r(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,r=!0;if(this.forEachChild(os,((s,o)=>{t[s]=o.val(e),n++,r&&_s.INTEGER_REGEXP_.test(s)?i=Math.max(i,Number(s)):r=!1})),!e&&r&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Jr(this.getPriority().val())+":"),this.forEachChild(os,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":vn(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new qr(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new qr(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new qr(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,qr.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)<0)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,qr.Wrap);let i=n.peek();while(null!=i&&t.compare(i,e)>0)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===gs?-1:0}withIndex(e){if(e===Br||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new _s(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Br||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(os),n=t.getIterator(os);let i=e.getNext(),r=n.getNext();while(i&&r){if(i.name!==r.name||!i.node.equals(r.node))return!1;i=e.getNext(),r=n.getNext()}return null===i&&null===r}return!1}return!1}}resolveIndex_(e){return e===Br?null:this.indexMap_.get(e.toString())}}_s.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fs extends _s{constructor(){super(new zr(Kr),_s.EMPTY_NODE,ds.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return _s.EMPTY_NODE}isEmpty(){return!1}}const gs=new fs;Object.defineProperties(qr,{MIN:{value:new qr(xn,_s.EMPTY_NODE)},MAX:{value:new qr(An,gs)}}),Wr.__EMPTY_NODE=_s.EMPTY_NODE,ns.__childrenNodeConstructor=_s,Qr(gs),rs(gs);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ms=!0;function ys(e,t=null){if(null===e)return _s.EMPTY_NODE;if("object"===typeof e&&".priority"in e&&(t=e[".priority"]),w(null===t||"string"===typeof t||"number"===typeof t||"object"===typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"===typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!==typeof e||".sv"in e){const n=e;return new ns(n,ys(t))}if(e instanceof Array||!ms){let n=_s.EMPTY_NODE;return Un(e,((t,i)=>{if(se(e,t)&&"."!==t.substring(0,1)){const e=ys(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(ys(t))}{const n=[];let i=!1;const r=e;if(Un(r,((e,t)=>{if("."!==e.substring(0,1)){const r=ys(t);r.isEmpty()||(i=i||!r.getPriority().isEmpty(),n.push(new qr(e,r)))}})),0===n.length)return _s.EMPTY_NODE;const s=hs(n,Yr,(e=>e.name),Kr);if(i){const e=hs(n,os.getCompare());return new _s(s,ys(t),new ds({".priority":e},{".priority":os}))}return new _s(s,ys(t),ds.Default)}}is(ys);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vs extends Ur{constructor(e){super(),this.indexPath_=e,w(!Cr(e)&&".priority"!==dr(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),r=n.compareTo(i);return 0===r?On(e.name,t.name):r}makePost(e,t){const n=ys(e),i=_s.EMPTY_NODE.updateChild(this.indexPath_,n);return new qr(t,i)}maxPost(){const e=_s.EMPTY_NODE.updateChild(this.indexPath_,gs);return new qr(An,e)}toString(){return mr(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs extends Ur{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?On(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return qr.MIN}maxPost(){return qr.MAX}makePost(e,t){const n=ys(e);return new qr(t,n)}toString(){return".value"}}const ws=new Cs;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bs(e){return{type:"value",snapshotNode:e}}function Is(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Es(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ts(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function Ss(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.index_=e}updateChild(e,t,n,i,r,s){w(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=s&&(n.isEmpty()?e.hasChild(t)?s.trackChildChange(Es(t,o)):w(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?s.trackChildChange(Is(t,n)):s.trackChildChange(Ts(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(os,((e,i)=>{t.hasChild(e)||n.trackChildChange(Es(e,i))})),t.isLeafNode()||t.forEachChild(os,((t,i)=>{if(e.hasChild(t)){const r=e.getImmediateChild(t);r.equals(i)||n.trackChildChange(Ts(t,i,r))}else n.trackChildChange(Is(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?_s.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e){this.indexedFilter_=new ks(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ns.getStartPost_(e),this.endPost_=Ns.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,r,s){return this.matches(new qr(t,n))||(n=_s.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,r,s)}updateFullNode(e,t,n){t.isLeafNode()&&(t=_s.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(_s.EMPTY_NODE);const r=this;return t.forEachChild(os,((e,t)=>{r.matches(new qr(e,t))||(i=i.updateImmediateChild(e,_s.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new Ns(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,r,s){return this.rangedFilter_.matches(new qr(t,n))||(n=_s.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,r,s):this.fullLimitUpdateChild_(e,t,n,r,s)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=_s.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=_s.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;while(e.hasNext()&&n<this.limit_){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(_s.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;while(e.hasNext()){const t=e.getNext(),r=n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t);r?n++:i=i.updateImmediateChild(t.name,_s.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,r){let s;if(this.reverse_){const e=this.index_.getCompare();s=(t,n)=>e(n,t)}else s=this.index_.getCompare();const o=e;w(o.numChildren()===this.limit_,"");const a=new qr(t,n),c=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),h=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let l=i.getChildAfterChild(this.index_,c,this.reverse_);while(null!=l&&(l.name===t||o.hasChild(l.name)))l=i.getChildAfterChild(this.index_,l,this.reverse_);const u=null==l?1:s(l,a),d=h&&!n.isEmpty()&&u>=0;if(d)return null!=r&&r.trackChildChange(Ts(t,n,e)),o.updateImmediateChild(t,n);{null!=r&&r.trackChildChange(Es(t,e));const n=o.updateImmediateChild(t,_s.EMPTY_NODE),i=null!=l&&this.rangedFilter_.matches(l);return i?(null!=r&&r.trackChildChange(Is(l.name,l.node)),n.updateImmediateChild(l.name,l.node)):n}}return n.isEmpty()?e:h&&s(c,a)>=0?(null!=r&&(r.trackChildChange(Es(c.name,c.node)),r.trackChildChange(Is(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(c.name,_s.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=os}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return w(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return w(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xn}hasEnd(){return this.endSet_}getIndexEndValue(){return w(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return w(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:An}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return w(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===os}copy(){const e=new Ds;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ps(e){return e.loadsAllData()?new ks(e.getIndex()):e.hasLimit()?new Rs(e):new Ns(e)}function xs(e){const t={};if(e.isDefault())return t;let n;if(e.index_===os?n="$priority":e.index_===ws?n="$value":e.index_===Br?n="$key":(w(e.index_ instanceof vs,"Unrecognized index type!"),n=e.index_.toString()),t["orderBy"]=te(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=te(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+te(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=te(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+te(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t["limitToFirst"]=e.limit_:t["limitToLast"]=e.limit_),t}function As(e){const t={};if(e.startSet_&&(t["sp"]=e.indexStartValue_,e.startNameSet_&&(t["sn"]=e.indexStartName_),t["sin"]=!e.startAfterSet_),e.endSet_&&(t["ep"]=e.indexEndValue_,e.endNameSet_&&(t["en"]=e.indexEndName_),t["ein"]=!e.endBeforeSet_),e.limitSet_){t["l"]=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t["vf"]=n}return e.index_!==os&&(t["i"]=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os extends sr{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Tn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(w(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const s=Os.getListenId_(e,n),o={};this.listens_[s]=o;const a=xs(e._queryParams);this.restRequest_(r+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(r,a,!1,n),oe(this.listens_,s)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Os.getListenId_(e,t);delete this.listens_[n]}get(e){const t=xs(e._queryParams),n=e._path.toString(),i=new W;return this.restRequest_(n+".json",t,((e,t)=>{let r=t;404===e&&(r=null,e=null),null===e?(this.onDataUpdate_(n,r,!1,null),i.resolve(r)):i.reject(new Error(r))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t["format"]="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,r])=>{i&&i.accessToken&&(t["auth"]=i.accessToken),r&&r.token&&(t["ac"]=r.token);const s=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ue(t);this.log_("Sending REST request for "+s);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+s+" received. status:",o.status,"response:",o.responseText);let t=null;if(o.status>=200&&o.status<300){try{t=ee(o.responseText)}catch(e){Nn("Failed to parse JSON response for "+s+": "+o.responseText)}n(null,t)}else 401!==o.status&&404!==o.status&&Nn("Got unsuccessful REST response for "+s+" Status: "+o.status),n(o.status);n=null}},o.open("GET",s,!0),o.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.rootNode_=_s.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(){return{value:null,children:new Map}}function Fs(e,t,n){if(Cr(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=dr(t);e.children.has(i)||e.children.set(i,Ls());const r=e.children.get(i);t=_r(t),Fs(r,t,n)}}function qs(e,t,n){null!==e.value?n(t,e.value):Us(e,((e,i)=>{const r=new lr(t.toString()+"/"+e);qs(i,r,n)}))}function Us(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Un(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=1e4,Bs=3e4,Hs=3e5;class js{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new $s(e);const n=Ws+(Bs-Ws)*Math.random();Qn(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Un(e,((e,i)=>{i>0&&se(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Qn(this.reportStats_.bind(this),Math.floor(2*Math.random()*Hs))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vs;function zs(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Ys(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ks(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["OVERWRITE"]=0]="OVERWRITE",e[e["MERGE"]=1]="MERGE",e[e["ACK_USER_WRITE"]=2]="ACK_USER_WRITE",e[e["LISTEN_COMPLETE"]=3]="LISTEN_COMPLETE"})(Vs||(Vs={}));class Gs{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Vs.ACK_USER_WRITE,this.source=zs()}operationForChild(e){if(Cr(this.path)){if(null!=this.affectedTree.value)return w(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new lr(e));return new Gs(ur(),t,this.revert)}}return w(dr(this.path)===e,"operationForChild called for unrelated child."),new Gs(_r(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e,t){this.source=e,this.path=t,this.type=Vs.LISTEN_COMPLETE}operationForChild(e){return Cr(this.path)?new Qs(this.source,ur()):new Qs(this.source,_r(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Vs.OVERWRITE}operationForChild(e){return Cr(this.path)?new Js(this.source,ur(),this.snap.getImmediateChild(e)):new Js(this.source,_r(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Vs.MERGE}operationForChild(e){if(Cr(this.path)){const t=this.children.subtree(new lr(e));return t.isEmpty()?null:t.value?new Js(this.source,ur(),t.value):new Xs(this.source,ur(),t)}return w(dr(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Xs(this.source,_r(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Cr(e))return this.isFullyInitialized()&&!this.filtered_;const t=dr(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function to(e,t,n,i){const r=[],s=[];return t.forEach((t=>{"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&s.push(Ss(t.childName,t.snapshotNode))})),no(e,r,"child_removed",t,i,n),no(e,r,"child_added",t,i,n),no(e,r,"child_moved",s,i,n),no(e,r,"child_changed",t,i,n),no(e,r,"value",t,i,n),r}function no(e,t,n,i,r,s){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>ro(e,t,n))),o.forEach((n=>{const i=io(e,n,s);r.forEach((r=>{r.respondsTo(n.type)&&t.push(r.createEvent(i,e.query_))}))}))}function io(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function ro(e,t,n){if(null==t.childName||null==n.childName)throw b("Should only compare child_ events.");const i=new qr(t.childName,t.snapshotNode),r=new qr(n.childName,n.snapshotNode);return e.index_.compare(i,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(e,t){return{eventCache:e,serverCache:t}}function oo(e,t,n,i){return so(new Zs(t,n,i),e.serverCache)}function ao(e,t,n,i){return so(e.eventCache,new Zs(t,n,i))}function co(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function ho(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo;const uo=()=>(lo||(lo=new zr(Mn)),lo);class po{constructor(e,t=uo()){this.value=e,this.children=t}static fromObject(e){let t=new po(null);return Un(e,((e,n)=>{t=t.set(new lr(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:ur(),value:this.value};if(Cr(e))return null;{const n=dr(e),i=this.children.get(n);if(null!==i){const r=i.findRootMostMatchingPathAndValue(_r(e),t);if(null!=r){const e=vr(new lr(n),r.path);return{path:e,value:r.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Cr(e))return this;{const t=dr(e),n=this.children.get(t);return null!==n?n.subtree(_r(e)):new po(null)}}set(e,t){if(Cr(e))return new po(t,this.children);{const n=dr(e),i=this.children.get(n)||new po(null),r=i.set(_r(e),t),s=this.children.insert(n,r);return new po(this.value,s)}}remove(e){if(Cr(e))return this.children.isEmpty()?new po(null):new po(null,this.children);{const t=dr(e),n=this.children.get(t);if(n){const i=n.remove(_r(e));let r;return r=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&r.isEmpty()?new po(null):new po(this.value,r)}return this}}get(e){if(Cr(e))return this.value;{const t=dr(e),n=this.children.get(t);return n?n.get(_r(e)):null}}setTree(e,t){if(Cr(e))return t;{const n=dr(e),i=this.children.get(n)||new po(null),r=i.setTree(_r(e),t);let s;return s=r.isEmpty()?this.children.remove(n):this.children.insert(n,r),new po(this.value,s)}}fold(e){return this.fold_(ur(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,r)=>{n[i]=r.fold_(vr(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,ur(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Cr(e))return null;{const i=dr(e),r=this.children.get(i);return r?r.findOnPath_(_r(e),vr(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,ur(),t)}foreachOnPath_(e,t,n){if(Cr(e))return this;{this.value&&n(t,this.value);const i=dr(e),r=this.children.get(i);return r?r.foreachOnPath_(_r(e),vr(t,i),n):new po(null)}}foreach(e){this.foreach_(ur(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(vr(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.writeTree_=e}static empty(){return new _o(new po(null))}}function fo(e,t,n){if(Cr(t))return new _o(new po(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const r=i.path;let s=i.value;const o=wr(r,t);return s=s.updateChild(o,n),new _o(e.writeTree_.set(r,s))}{const i=new po(n),r=e.writeTree_.setTree(t,i);return new _o(r)}}}function go(e,t,n){let i=e;return Un(n,((e,n)=>{i=fo(i,vr(t,e),n)})),i}function mo(e,t){if(Cr(t))return _o.empty();{const n=e.writeTree_.setTree(t,new po(null));return new _o(n)}}function yo(e,t){return null!=vo(e,t)}function vo(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(wr(n.path,t)):null}function Co(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(os,((e,n)=>{t.push(new qr(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new qr(e,n.value))})),t}function wo(e,t){if(Cr(t))return e;{const n=vo(e,t);return new _o(null!=n?new po(n):e.writeTree_.subtree(t))}}function bo(e){return e.writeTree_.isEmpty()}function Io(e,t){return Eo(ur(),e.writeTree_,t)}function Eo(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,r)=>{".priority"===t?(w(null!==r.value,"Priority writes must always be leaf nodes"),i=r.value):n=Eo(vr(e,t),r,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(vr(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(e,t){return Yo(t,e)}function So(e,t,n,i,r){w(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===r&&(r=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:r}),r&&(e.visibleWrites=fo(e.visibleWrites,t,n)),e.lastWriteId=i}function ko(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}function No(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));w(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let r=i.visible,s=!1,o=e.allWrites.length-1;while(r&&o>=0){const t=e.allWrites[o];t.visible&&(o>=n&&Ro(t,i.path)?r=!1:Ir(i.path,t.path)&&(s=!0)),o--}if(r){if(s)return Do(e),!0;if(i.snap)e.visibleWrites=mo(e.visibleWrites,i.path);else{const t=i.children;Un(t,(t=>{e.visibleWrites=mo(e.visibleWrites,vr(i.path,t))}))}return!0}return!1}function Ro(e,t){if(e.snap)return Ir(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ir(vr(e.path,n),t))return!0;return!1}function Do(e){e.visibleWrites=xo(e.allWrites,Po,ur()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Po(e){return e.visible}function xo(e,t,n){let i=_o.empty();for(let r=0;r<e.length;++r){const s=e[r];if(t(s)){const e=s.path;let t;if(s.snap)Ir(n,e)?(t=wr(n,e),i=fo(i,t,s.snap)):Ir(e,n)&&(t=wr(e,n),i=fo(i,ur(),s.snap.getChild(t)));else{if(!s.children)throw b("WriteRecord should have .snap or .children");if(Ir(n,e))t=wr(n,e),i=go(i,t,s.children);else if(Ir(e,n))if(t=wr(e,n),Cr(t))i=go(i,ur(),s.children);else{const e=oe(s.children,dr(t));if(e){const n=e.getChild(_r(t));i=fo(i,ur(),n)}}}}}return i}function Ao(e,t,n,i,r){if(i||r){const s=wo(e.visibleWrites,t);if(!r&&bo(s))return n;if(r||null!=n||yo(s,ur())){const s=function(e){return(e.visible||r)&&(!i||!~i.indexOf(e.writeId))&&(Ir(e.path,t)||Ir(t,e.path))},o=xo(e.allWrites,s,t),a=n||_s.EMPTY_NODE;return Io(o,a)}return null}{const i=vo(e.visibleWrites,t);if(null!=i)return i;{const i=wo(e.visibleWrites,t);if(bo(i))return n;if(null!=n||yo(i,ur())){const e=n||_s.EMPTY_NODE;return Io(i,e)}return null}}}function Oo(e,t,n){let i=_s.EMPTY_NODE;const r=vo(e.visibleWrites,t);if(r)return r.isLeafNode()||r.forEachChild(os,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const r=wo(e.visibleWrites,t);return n.forEachChild(os,((e,t)=>{const n=Io(wo(r,new lr(e)),t);i=i.updateImmediateChild(e,n)})),Co(r).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}{const n=wo(e.visibleWrites,t);return Co(n).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}}function Mo(e,t,n,i,r){w(i||r,"Either existingEventSnap or existingServerSnap must exist");const s=vr(t,n);if(yo(e.visibleWrites,s))return null;{const t=wo(e.visibleWrites,s);return bo(t)?r.getChild(n):Io(t,r.getChild(n))}}function Lo(e,t,n,i){const r=vr(t,n),s=vo(e.visibleWrites,r);if(null!=s)return s;if(i.isCompleteForChild(n)){const t=wo(e.visibleWrites,r);return Io(t,i.getNode().getImmediateChild(n))}return null}function Fo(e,t){return vo(e.visibleWrites,t)}function qo(e,t,n,i,r,s,o){let a;const c=wo(e.visibleWrites,t),h=vo(c,ur());if(null!=h)a=h;else{if(null==n)return[];a=Io(c,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=s?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let c=n.getNext();while(c&&e.length<r)0!==t(c,i)&&e.push(c),c=n.getNext();return e}}function Uo(){return{visibleWrites:_o.empty(),allWrites:[],lastWriteId:-1}}function $o(e,t,n,i){return Ao(e.writeTree,e.treePath,t,n,i)}function Wo(e,t){return Oo(e.writeTree,e.treePath,t)}function Bo(e,t,n,i){return Mo(e.writeTree,e.treePath,t,n,i)}function Ho(e,t){return Fo(e.writeTree,vr(e.treePath,t))}function jo(e,t,n,i,r,s){return qo(e.writeTree,e.treePath,t,n,i,r,s)}function Vo(e,t,n){return Lo(e.writeTree,e.treePath,t,n)}function zo(e,t){return Yo(vr(e.treePath,t),e.writeTree)}function Yo(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;w("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),w(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const r=i.type;if("child_added"===t&&"child_removed"===r)this.changeMap.set(n,Ts(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===r)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===r)this.changeMap.set(n,Es(n,i.oldSnap));else if("child_changed"===t&&"child_added"===r)this.changeMap.set(n,Is(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==r)throw b("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,Ts(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Qo=new Go;class Jo{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Zs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Vo(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:ho(this.viewCache_),r=jo(this.writes_,i,t,1,n,e);return 0===r.length?null:r[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xo(e){return{filter:e}}function Zo(e,t){w(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),w(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function ea(e,t,n,i,r){const s=new Ko;let o,a;if(n.type===Vs.OVERWRITE){const c=n;c.source.fromUser?o=ra(e,t,c.path,c.snap,i,r,s):(w(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered()&&!Cr(c.path),o=ia(e,t,c.path,c.snap,i,r,a,s))}else if(n.type===Vs.MERGE){const c=n;c.source.fromUser?o=oa(e,t,c.path,c.children,i,r,s):(w(c.source.fromServer,"Unknown source."),a=c.source.tagged||t.serverCache.isFiltered(),o=ca(e,t,c.path,c.children,i,r,a,s))}else if(n.type===Vs.ACK_USER_WRITE){const a=n;o=a.revert?ua(e,t,a.path,i,r,s):ha(e,t,a.path,a.affectedTree,i,r,s)}else{if(n.type!==Vs.LISTEN_COMPLETE)throw b("Unknown operation type: "+n.type);o=la(e,t,n.path,i,s)}const c=s.getChanges();return ta(t,o,c),{viewCache:o,changes:c}}function ta(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const r=i.getNode().isLeafNode()||i.getNode().isEmpty(),s=co(e);(n.length>0||!e.eventCache.isFullyInitialized()||r&&!i.getNode().equals(s)||!i.getNode().getPriority().equals(s.getPriority()))&&n.push(bs(co(t)))}}function na(e,t,n,i,r,s){const o=t.eventCache;if(null!=Ho(i,n))return t;{let a,c;if(Cr(n))if(w(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=ho(t),r=n instanceof _s?n:_s.EMPTY_NODE,o=Wo(i,r);a=e.filter.updateFullNode(t.eventCache.getNode(),o,s)}else{const n=$o(i,ho(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,s)}else{const h=dr(n);if(".priority"===h){w(1===pr(n),"Can't have a priority with additional path components");const r=o.getNode();c=t.serverCache.getNode();const s=Bo(i,n,r,c);a=null!=s?e.filter.updatePriority(r,s):o.getNode()}else{const l=_r(n);let u;if(o.isCompleteForChild(h)){c=t.serverCache.getNode();const e=Bo(i,n,o.getNode(),c);u=null!=e?o.getNode().getImmediateChild(h).updateChild(l,e):o.getNode().getImmediateChild(h)}else u=Vo(i,h,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),h,u,l,r,s):o.getNode()}}return oo(t,a,o.isFullyInitialized()||Cr(n),e.filter.filtersNodes())}}function ia(e,t,n,i,r,s,o,a){const c=t.serverCache;let h;const l=o?e.filter:e.filter.getIndexedFilter();if(Cr(n))h=l.updateFullNode(c.getNode(),i,null);else if(l.filtersNodes()&&!c.isFiltered()){const e=c.getNode().updateChild(n,i);h=l.updateFullNode(c.getNode(),e,null)}else{const e=dr(n);if(!c.isCompleteForPath(n)&&pr(n)>1)return t;const r=_r(n),s=c.getNode().getImmediateChild(e),o=s.updateChild(r,i);h=".priority"===e?l.updatePriority(c.getNode(),o):l.updateChild(c.getNode(),e,o,r,Qo,null)}const u=ao(t,h,c.isFullyInitialized()||Cr(n),l.filtersNodes()),d=new Jo(r,u,s);return na(e,u,n,r,d,a)}function ra(e,t,n,i,r,s,o){const a=t.eventCache;let c,h;const l=new Jo(r,t,s);if(Cr(n))h=e.filter.updateFullNode(t.eventCache.getNode(),i,o),c=oo(t,h,!0,e.filter.filtersNodes());else{const r=dr(n);if(".priority"===r)h=e.filter.updatePriority(t.eventCache.getNode(),i),c=oo(t,h,a.isFullyInitialized(),a.isFiltered());else{const s=_r(n),h=a.getNode().getImmediateChild(r);let u;if(Cr(s))u=i;else{const e=l.getCompleteChild(r);u=null!=e?".priority"===fr(s)&&e.getChild(yr(s)).isEmpty()?e:e.updateChild(s,i):_s.EMPTY_NODE}if(h.equals(u))c=t;else{const n=e.filter.updateChild(a.getNode(),r,u,s,l,o);c=oo(t,n,a.isFullyInitialized(),e.filter.filtersNodes())}}}return c}function sa(e,t){return e.eventCache.isCompleteForChild(t)}function oa(e,t,n,i,r,s,o){let a=t;return i.foreach(((i,c)=>{const h=vr(n,i);sa(t,dr(h))&&(a=ra(e,a,h,c,r,s,o))})),i.foreach(((i,c)=>{const h=vr(n,i);sa(t,dr(h))||(a=ra(e,a,h,c,r,s,o))})),a}function aa(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function ca(e,t,n,i,r,s,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let c,h=t;c=Cr(n)?i:new po(null).setTree(n,i);const l=t.serverCache.getNode();return c.children.inorderTraversal(((n,i)=>{if(l.hasChild(n)){const c=t.serverCache.getNode().getImmediateChild(n),l=aa(e,c,i);h=ia(e,h,new lr(n),l,r,s,o,a)}})),c.children.inorderTraversal(((n,i)=>{const c=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!l.hasChild(n)&&!c){const c=t.serverCache.getNode().getImmediateChild(n),l=aa(e,c,i);h=ia(e,h,new lr(n),l,r,s,o,a)}})),h}function ha(e,t,n,i,r,s,o){if(null!=Ho(r,n))return t;const a=t.serverCache.isFiltered(),c=t.serverCache;if(null!=i.value){if(Cr(n)&&c.isFullyInitialized()||c.isCompleteForPath(n))return ia(e,t,n,c.getNode().getChild(n),r,s,a,o);if(Cr(n)){let i=new po(null);return c.getNode().forEachChild(Br,((e,t)=>{i=i.set(new lr(e),t)})),ca(e,t,n,i,r,s,a,o)}return t}{let h=new po(null);return i.foreach(((e,t)=>{const i=vr(n,e);c.isCompleteForPath(i)&&(h=h.set(e,c.getNode().getChild(i)))})),ca(e,t,n,h,r,s,a,o)}}function la(e,t,n,i,r){const s=t.serverCache,o=ao(t,s.getNode(),s.isFullyInitialized()||Cr(n),s.isFiltered());return na(e,o,n,i,Qo,r)}function ua(e,t,n,i,r,s){let o;if(null!=Ho(i,n))return t;{const a=new Jo(i,t,r),c=t.eventCache.getNode();let h;if(Cr(n)||".priority"===dr(n)){let n;if(t.serverCache.isFullyInitialized())n=$o(i,ho(t));else{const e=t.serverCache.getNode();w(e instanceof _s,"serverChildren would be complete if leaf node"),n=Wo(i,e)}h=e.filter.updateFullNode(c,n,s)}else{const r=dr(n);let l=Vo(i,r,t.serverCache);null==l&&t.serverCache.isCompleteForChild(r)&&(l=c.getImmediateChild(r)),h=null!=l?e.filter.updateChild(c,r,l,_r(n),a,s):t.eventCache.getNode().hasChild(r)?e.filter.updateChild(c,r,_s.EMPTY_NODE,_r(n),a,s):c,h.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=$o(i,ho(t)),o.isLeafNode()&&(h=e.filter.updateFullNode(h,o,s)))}return o=t.serverCache.isFullyInitialized()||null!=Ho(i,ur()),oo(t,h,o,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new ks(n.getIndex()),r=Ps(n);this.processor_=Xo(r);const s=t.serverCache,o=t.eventCache,a=i.updateFullNode(_s.EMPTY_NODE,s.getNode(),null),c=r.updateFullNode(_s.EMPTY_NODE,o.getNode(),null),h=new Zs(a,s.isFullyInitialized(),i.filtersNodes()),l=new Zs(c,o.isFullyInitialized(),r.filtersNodes());this.viewCache_=so(l,h),this.eventGenerator_=new eo(this.query_)}get query(){return this.query_}}function pa(e){return e.viewCache_.serverCache.getNode()}function _a(e,t){const n=ho(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Cr(t)&&!n.getImmediateChild(dr(t)).isEmpty())?n.getChild(t):null}function fa(e){return 0===e.eventRegistrations_.length}function ga(e,t){e.eventRegistrations_.push(t)}function ma(e,t,n){const i=[];if(n){w(null==t,"A cancel should cancel all event registrations.");const r=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,r);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const r=e.eventRegistrations_[i];if(r.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(r)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function ya(e,t,n,i){t.type===Vs.MERGE&&null!==t.source.queryId&&(w(ho(e.viewCache_),"We should always have a full cache before handling merges"),w(co(e.viewCache_),"Missing event cache, even though we have a server cache"));const r=e.viewCache_,s=ea(e.processor_,r,t,n,i);return Zo(e.processor_,s.viewCache),w(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,Ca(e,s.changes,s.viewCache.eventCache.getNode(),null)}function va(e,t){const n=e.viewCache_.eventCache,i=[];if(!n.getNode().isLeafNode()){const e=n.getNode();e.forEachChild(os,((e,t)=>{i.push(Is(e,t))}))}return n.isFullyInitialized()&&i.push(bs(n.getNode())),Ca(e,i,n.getNode(),t)}function Ca(e,t,n,i){const r=i?[i]:e.eventRegistrations_;return to(e.eventGenerator_,t,n,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wa,ba;class Ia{constructor(){this.views=new Map}}function Ea(e){w(!wa,"__referenceConstructor has already been defined"),wa=e}function Ta(){return w(wa,"Reference.ts has not been loaded"),wa}function Sa(e){return 0===e.views.size}function ka(e,t,n,i){const r=t.source.queryId;if(null!==r){const s=e.views.get(r);return w(null!=s,"SyncTree gave us an op for an invalid query."),ya(s,t,n,i)}{let r=[];for(const s of e.views.values())r=r.concat(ya(s,t,n,i));return r}}function Na(e,t,n,i,r){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let e=$o(n,r?i:null),s=!1;e?s=!0:i instanceof _s?(e=Wo(n,i),s=!1):(e=_s.EMPTY_NODE,s=!1);const o=so(new Zs(e,s,!1),new Zs(i,r,!1));return new da(t,o)}return o}function Ra(e,t,n,i,r,s){const o=Na(e,t,i,r,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),ga(o,n),va(o,n)}function Da(e,t,n,i){const r=t._queryIdentifier,s=[];let o=[];const a=Ma(e);if("default"===r)for(const[c,h]of e.views.entries())o=o.concat(ma(h,n,i)),fa(h)&&(e.views.delete(c),h.query._queryParams.loadsAllData()||s.push(h.query));else{const t=e.views.get(r);t&&(o=o.concat(ma(t,n,i)),fa(t)&&(e.views.delete(r),t.query._queryParams.loadsAllData()||s.push(t.query)))}return a&&!Ma(e)&&s.push(new(Ta())(t._repo,t._path)),{removed:s,events:o}}function Pa(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function xa(e,t){let n=null;for(const i of e.views.values())n=n||_a(i,t);return n}function Aa(e,t){const n=t._queryParams;if(n.loadsAllData())return La(e);{const n=t._queryIdentifier;return e.views.get(n)}}function Oa(e,t){return null!=Aa(e,t)}function Ma(e){return null!=La(e)}function La(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(e){w(!ba,"__referenceConstructor has already been defined"),ba=e}function qa(){return w(ba,"Reference.ts has not been loaded"),ba}let Ua=1;class $a{constructor(e){this.listenProvider_=e,this.syncPointTree_=new po(null),this.pendingWriteTree_=Uo(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Wa(e,t,n,i,r){return So(e.pendingWriteTree_,t,n,i,r),r?Xa(e,new Js(zs(),t,n)):[]}function Ba(e,t,n=!1){const i=ko(e.pendingWriteTree_,t),r=No(e.pendingWriteTree_,t);if(r){let t=new po(null);return null!=i.snap?t=t.set(ur(),!0):Un(i.children,(e=>{t=t.set(new lr(e),!0)})),Xa(e,new Gs(i.path,t,n))}return[]}function Ha(e,t,n){return Xa(e,new Js(Ys(),t,n))}function ja(e,t,n){const i=po.fromObject(n);return Xa(e,new Xs(Ys(),t,i))}function Va(e,t){return Xa(e,new Qs(Ys(),t))}function za(e,t,n){const i=rc(e,n);if(i){const n=sc(i),r=n.path,s=n.queryId,o=wr(r,t),a=new Qs(Ks(s),o);return oc(e,r,a)}return[]}function Ya(e,t,n,i,r=!1){const s=t._path,o=e.syncPointTree_.get(s);let a=[];if(o&&("default"===t._queryIdentifier||Oa(o,t))){const c=Da(o,t,n,i);Sa(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const h=c.removed;if(a=c.events,!r){const n=-1!==h.findIndex((e=>e._queryParams.loadsAllData())),r=e.syncPointTree_.findOnPath(s,((e,t)=>Ma(t)));if(n&&!r){const t=e.syncPointTree_.subtree(s);if(!t.isEmpty()){const n=ac(t);for(let t=0;t<n.length;++t){const i=n[t],r=i.query,s=tc(e,i);e.listenProvider_.startListening(cc(r),nc(e,r),s.hashFn,s.onComplete)}}}if(!r&&h.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(cc(t),n)}else h.forEach((t=>{const n=e.queryToTagMap.get(ic(t));e.listenProvider_.stopListening(cc(t),n)}))}hc(e,h)}return a}function Ka(e,t,n,i){const r=rc(e,i);if(null!=r){const i=sc(r),s=i.path,o=i.queryId,a=wr(s,t),c=new Js(Ks(o),a,n);return oc(e,s,c)}return[]}function Ga(e,t,n,i){const r=rc(e,i);if(r){const i=sc(r),s=i.path,o=i.queryId,a=wr(s,t),c=po.fromObject(n),h=new Xs(Ks(o),a,c);return oc(e,s,h)}return[]}function Qa(e,t,n,i=!1){const r=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(r,((e,t)=>{const n=wr(e,r);s=s||xa(t,n),o=o||Ma(t)}));let a,c=e.syncPointTree_.get(r);if(c?(o=o||Ma(c),s=s||xa(c,ur())):(c=new Ia,e.syncPointTree_=e.syncPointTree_.set(r,c)),null!=s)a=!0;else{a=!1,s=_s.EMPTY_NODE;const t=e.syncPointTree_.subtree(r);t.foreachChild(((e,t)=>{const n=xa(t,ur());n&&(s=s.updateImmediateChild(e,n))}))}const h=Oa(c,t);if(!h&&!t._queryParams.loadsAllData()){const n=ic(t);w(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=lc();e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}const l=To(e.pendingWriteTree_,r);let u=Ra(c,t,n,l,s,a);if(!h&&!o&&!i){const n=Aa(c,t);u=u.concat(uc(e,t,n))}return u}function Ja(e,t,n){const i=!0,r=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=wr(e,t),r=xa(n,i);if(r)return r}));return Ao(r,t,s,n,i)}function Xa(e,t){return Za(t,e.syncPointTree_,null,To(e.pendingWriteTree_,ur()))}function Za(e,t,n,i){if(Cr(e.path))return ec(e,t,n,i);{const r=t.get(ur());null==n&&null!=r&&(n=xa(r,ur()));let s=[];const o=dr(e.path),a=e.operationForChild(o),c=t.children.get(o);if(c&&a){const e=n?n.getImmediateChild(o):null,t=zo(i,o);s=s.concat(Za(a,c,e,t))}return r&&(s=s.concat(ka(r,e,i,n))),s}}function ec(e,t,n,i){const r=t.get(ur());null==n&&null!=r&&(n=xa(r,ur()));let s=[];return t.children.inorderTraversal(((t,r)=>{const o=n?n.getImmediateChild(t):null,a=zo(i,t),c=e.operationForChild(t);c&&(s=s.concat(ec(c,r,o,a)))})),r&&(s=s.concat(ka(r,e,i,n))),s}function tc(e,t){const n=t.query,i=nc(e,n);return{hashFn:()=>{const e=pa(t)||_s.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?za(e,n._path,i):Va(e,n._path);{const i=Hn(t,n);return Ya(e,n,null,i)}}}}function nc(e,t){const n=ic(t);return e.queryToTagMap.get(n)}function ic(e){return e._path.toString()+"$"+e._queryIdentifier}function rc(e,t){return e.tagToQueryMap.get(t)}function sc(e){const t=e.indexOf("$");return w(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new lr(e.substr(0,t))}}function oc(e,t,n){const i=e.syncPointTree_.get(t);w(i,"Missing sync point for query tag that we're tracking");const r=To(e.pendingWriteTree_,t);return ka(i,n,r,null)}function ac(e){return e.fold(((e,t,n)=>{if(t&&Ma(t)){const e=La(t);return[e]}{let e=[];return t&&(e=Pa(t)),Un(n,((t,n)=>{e=e.concat(n)})),e}}))}function cc(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(qa())(e._repo,e._path):e}function hc(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=ic(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}function lc(){return Ua++}function uc(e,t,n){const i=t._path,r=nc(e,t),s=tc(e,n),o=e.listenProvider_.startListening(cc(t),r,s.hashFn,s.onComplete),a=e.syncPointTree_.subtree(i);if(r)w(!Ma(a.value),"If we're adding a query, it shouldn't be shadowed");else{const t=a.fold(((e,t,n)=>{if(!Cr(e)&&t&&Ma(t))return[La(t).query];{let e=[];return t&&(e=e.concat(Pa(t).map((e=>e.query)))),Un(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(cc(i),nc(e,i))}}return o}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new dc(t)}node(){return this.node_}}class pc{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=vr(this.path_,e);return new pc(this.syncTree_,t)}node(){return Ja(this.syncTree_,this.path_)}}const _c=function(e){return e=e||{},e["timestamp"]=e["timestamp"]||(new Date).getTime(),e},fc=function(e,t,n){return e&&"object"===typeof e?(w(".sv"in e,"Unexpected leaf node or priority contents"),"string"===typeof e[".sv"]?gc(e[".sv"],t,n):"object"===typeof e[".sv"]?mc(e[".sv"],t):void w(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},gc=function(e,t,n){switch(e){case"timestamp":return n["timestamp"];default:w(!1,"Unexpected server value: "+e)}},mc=function(e,t,n){e.hasOwnProperty("increment")||w(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e["increment"];"number"!==typeof i&&w(!1,"Unexpected increment value: "+i);const r=t.node();if(w(null!==r&&"undefined"!==typeof r,"Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return i;const s=r,o=s.getValue();return"number"!==typeof o?i:o+i},yc=function(e,t,n,i){return Cc(t,new pc(n,e),i)},vc=function(e,t,n){return Cc(e,new dc(t),n)};function Cc(e,t,n){const i=e.getPriority().val(),r=fc(i,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const i=e,s=fc(i.getValue(),t,n);return s!==i.getValue()||r!==i.getPriority().val()?new ns(s,ys(r)):e}{const i=e;return s=i,r!==i.getPriority().val()&&(s=s.updatePriority(new ns(r))),i.forEachChild(os,((e,i)=>{const r=Cc(i,t.getImmediateChild(e),n);r!==i&&(s=s.updateImmediateChild(e,r))})),s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function bc(e,t){let n=t instanceof lr?t:new lr(t),i=e,r=dr(n);while(null!==r){const e=oe(i.node.children,r)||{children:{},childCount:0};i=new wc(r,i,e),n=_r(n),r=dr(n)}return i}function Ic(e){return e.node.value}function Ec(e,t){e.node.value=t,Pc(e)}function Tc(e){return e.node.childCount>0}function Sc(e){return void 0===Ic(e)&&!Tc(e)}function kc(e,t){Un(e.node.children,((n,i)=>{t(new wc(n,e,i))}))}function Nc(e,t,n,i){n&&!i&&t(e),kc(e,(e=>{Nc(e,t,!0,i)})),n&&i&&t(e)}function Rc(e,t,n){let i=n?e:e.parent;while(null!==i){if(t(i))return!0;i=i.parent}return!1}function Dc(e){return new lr(null===e.parent?e.name:Dc(e.parent)+"/"+e.name)}function Pc(e){null!==e.parent&&xc(e.parent,e.name,e)}function xc(e,t,n){const i=Sc(n),r=se(e.node.children,t);i&&r?(delete e.node.children[t],e.node.childCount--,Pc(e)):i||r||(e.node.children[t]=n.node,e.node.childCount++,Pc(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac=/[\[\].#$\/\u0000-\u001F\u007F]/,Oc=/[\[\].#$\u0000-\u001F\u007F]/,Mc=10485760,Lc=function(e){return"string"===typeof e&&0!==e.length&&!Ac.test(e)},Fc=function(e){return"string"===typeof e&&0!==e.length&&!Oc.test(e)},qc=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Fc(e)},Uc=function(e,t,n,i){i&&void 0===t||$c(pe(e,"value"),t,n)},$c=function(e,t,n){const i=n instanceof lr?new Er(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Nr(i));if("function"===typeof t)throw new Error(e+"contains a function "+Nr(i)+" with contents = "+t.toString());if(Dn(t))throw new Error(e+"contains "+t.toString()+" "+Nr(i));if("string"===typeof t&&t.length>Mc/3&&fe(t)>Mc)throw new Error(e+"contains a string greater than "+Mc+" utf8 bytes "+Nr(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"===typeof t){let n=!1,r=!1;if(Un(t,((t,s)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(r=!0,!Lc(t)))throw new Error(e+" contains an invalid key ("+t+") "+Nr(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');Tr(i,t),$c(e,s,i),Sr(i)})),n&&r)throw new Error(e+' contains ".value" child '+Nr(i)+" in addition to actual children.")}},Wc=function(e,t,n,i){if((!i||void 0!==n)&&!Fc(n))throw new Error(pe(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Bc=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Wc(e,t,n,i)},Hc=function(e,t){if(".info"===dr(t))throw new Error(e+" failed = Can't modify data under /.info/")},jc=function(e,t){const n=t.path.toString();if("string"!==typeof t.repoInfo.host||0===t.repoInfo.host.length||!Lc(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!qc(n))throw new Error(pe(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vc{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function zc(e,t){let n=null;for(let i=0;i<t.length;i++){const r=t[i],s=r.getPath();null===n||br(s,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:s}),n.events.push(r)}n&&e.eventLists_.push(n)}function Yc(e,t,n){zc(e,n),Gc(e,(e=>br(e,t)))}function Kc(e,t,n){zc(e,n),Gc(e,(e=>Ir(e,t)||Ir(t,e)))}function Gc(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const r=e.eventLists_[i];if(r){const s=r.path;t(s)?(Qc(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Qc(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();wn&&En("event: "+n.toString()),Kn(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="repo_interrupt",Xc=25;class Zc{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Vc,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ls(),this.transactionQueueTree_=new wc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function eh(e,t,n){if(e.stats_=mi(e.repoInfo_),e.forceRestClient_||Gn())e.server_=new Os(e.repoInfo_,((t,n,i,r)=>{ih(e,t,n,i,r)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>rh(e,!0)),0);else{if("undefined"!==typeof n&&null!==n){if("object"!==typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{te(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}e.persistentConnection_=new Fr(e.repoInfo_,t,((t,n,i,r)=>{ih(e,t,n,i,r)}),(t=>{rh(e,t)}),(t=>{sh(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=yi(e.repoInfo_,(()=>new js(e.stats_,e.server_))),e.infoData_=new Ms,e.infoSyncTree_=new $a({startListening:(t,n,i,r)=>{let s=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(s=Ha(e.infoSyncTree_,t._path,o),setTimeout((()=>{r("ok")}),0)),s},stopListening:()=>{}}),oh(e,"connected",!1),e.serverSyncTree_=new $a({startListening:(t,n,i,r)=>(e.server_.listen(t,i,n,((n,i)=>{const s=r(n,i);Kc(e.eventQueue_,t._path,s)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function th(e){const t=e.infoData_.getNode(new lr(".info/serverTimeOffset")),n=t.val()||0;return(new Date).getTime()+n}function nh(e){return _c({timestamp:th(e)})}function ih(e,t,n,i,r){e.dataUpdateCount++;const s=new lr(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(r)if(i){const t=ce(n,(e=>ys(e)));o=Ga(e.serverSyncTree_,s,t,r)}else{const t=ys(n);o=Ka(e.serverSyncTree_,s,t,r)}else if(i){const t=ce(n,(e=>ys(e)));o=ja(e.serverSyncTree_,s,t)}else{const t=ys(n);o=Ha(e.serverSyncTree_,s,t)}let a=s;o.length>0&&(a=yh(e,s)),Kc(e.eventQueue_,a,o)}function rh(e,t){oh(e,"connected",t),!1===t&&hh(e)}function sh(e,t){Un(t,((t,n)=>{oh(e,t,n)}))}function oh(e,t,n){const i=new lr("/.info/"+t),r=ys(n);e.infoData_.updateSnapshot(i,r);const s=Ha(e.infoSyncTree_,i,r);Kc(e.eventQueue_,i,s)}function ah(e){return e.nextWriteId_++}function ch(e,t,n,i,r){ph(e,"set",{path:t.toString(),value:n,priority:i});const s=nh(e),o=ys(n,i),a=Ja(e.serverSyncTree_,t),c=vc(o,a,s),h=ah(e),l=Wa(e.serverSyncTree_,t,c,h,!0);zc(e.eventQueue_,l),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const s="ok"===n;s||Nn("set at "+t+" failed: "+n);const o=Ba(e.serverSyncTree_,h,!s);Kc(e.eventQueue_,t,o),_h(e,r,n,i)}));const u=Eh(e,t);yh(e,u),Kc(e.eventQueue_,u,[])}function hh(e){ph(e,"onDisconnectEvents");const t=nh(e),n=Ls();qs(e.onDisconnect_,ur(),((i,r)=>{const s=yc(i,r,e.serverSyncTree_,t);Fs(n,i,s)}));let i=[];qs(n,ur(),((t,n)=>{i=i.concat(Ha(e.serverSyncTree_,t,n));const r=Eh(e,t);yh(e,r)})),e.onDisconnect_=Ls(),Kc(e.eventQueue_,ur(),i)}function lh(e,t,n){let i;i=".info"===dr(t._path)?Qa(e.infoSyncTree_,t,n):Qa(e.serverSyncTree_,t,n),Yc(e.eventQueue_,t._path,i)}function uh(e,t,n){let i;i=".info"===dr(t._path)?Ya(e.infoSyncTree_,t,n):Ya(e.serverSyncTree_,t,n),Yc(e.eventQueue_,t._path,i)}function dh(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Jc)}function ph(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),En(n,...t)}function _h(e,t,n,i){t&&Kn((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let r=e;i&&(r+=": "+i);const s=new Error(r);s.code=e,t(s)}}))}function fh(e,t,n){return Ja(e.serverSyncTree_,t,n)||_s.EMPTY_NODE}function gh(e,t=e.transactionQueueTree_){if(t||Ih(e,t),Ic(t)){const n=wh(e,t);w(n.length>0,"Sending zero length transaction queue");const i=n.every((e=>0===e.status));i&&mh(e,Dc(t),n)}else Tc(t)&&kc(t,(t=>{gh(e,t)}))}function mh(e,t,n){const i=n.map((e=>e.currentWriteId)),r=fh(e,t,i);let s=r;const o=r.hash();for(let h=0;h<n.length;h++){const e=n[h];w(0===e.status,"tryToSendTransactionQueue_: items in queue should all be run."),e.status=1,e.retryCount++;const i=wr(t,e.path);s=s.updateChild(i,e.currentOutputSnapshotRaw)}const a=s.val(!0),c=t;e.server_.put(c.toString(),a,(i=>{ph(e,"transaction put response",{path:c.toString(),status:i});let r=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,r=r.concat(Ba(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ih(e,bc(e.transactionQueueTree_,t)),gh(e,e.transactionQueueTree_),Kc(e.eventQueue_,t,r);for(let e=0;e<i.length;e++)Kn(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Nn("transaction at "+c.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}yh(e,t)}}),o)}function yh(e,t){const n=Ch(e,t),i=Dc(n),r=wh(e,n);return vh(e,r,i),i}function vh(e,t,n){if(0===t.length)return;const i=[];let r=[];const s=t.filter((e=>0===e.status)),o=s.map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const s=t[a],c=wr(n,s.path);let h,l=!1;if(w(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===s.status)l=!0,h=s.abortReason,r=r.concat(Ba(e.serverSyncTree_,s.currentWriteId,!0));else if(0===s.status)if(s.retryCount>=Xc)l=!0,h="maxretry",r=r.concat(Ba(e.serverSyncTree_,s.currentWriteId,!0));else{const n=fh(e,s.path,o);s.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){$c("transaction failed: Data returned ",i,s.path);let t=ys(i);const a="object"===typeof i&&null!=i&&se(i,".priority");a||(t=t.updatePriority(n.getPriority()));const c=s.currentWriteId,h=nh(e),l=vc(t,n,h);s.currentOutputSnapshotRaw=t,s.currentOutputSnapshotResolved=l,s.currentWriteId=ah(e),o.splice(o.indexOf(c),1),r=r.concat(Wa(e.serverSyncTree_,s.path,l,s.currentWriteId,s.applyLocally)),r=r.concat(Ba(e.serverSyncTree_,c,!0))}else l=!0,h="nodata",r=r.concat(Ba(e.serverSyncTree_,s.currentWriteId,!0))}Kc(e.eventQueue_,n,r),r=[],l&&(t[a].status=2,function(e){setTimeout(e,Math.floor(0))}(t[a].unwatcher),t[a].onComplete&&("nodata"===h?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(h),!1,null)))))}Ih(e,e.transactionQueueTree_);for(let a=0;a<i.length;a++)Kn(i[a]);gh(e,e.transactionQueueTree_)}function Ch(e,t){let n,i=e.transactionQueueTree_;n=dr(t);while(null!==n&&void 0===Ic(i))i=bc(i,n),t=_r(t),n=dr(t);return i}function wh(e,t){const n=[];return bh(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function bh(e,t,n){const i=Ic(t);if(i)for(let r=0;r<i.length;r++)n.push(i[r]);kc(t,(t=>{bh(e,t,n)}))}function Ih(e,t){const n=Ic(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,Ec(t,n.length>0?n:void 0)}kc(t,(t=>{Ih(e,t)}))}function Eh(e,t){const n=Dc(Ch(e,t)),i=bc(e.transactionQueueTree_,t);return Rc(i,(t=>{Th(e,t)})),Th(e,i),Nc(i,(t=>{Th(e,t)})),n}function Th(e,t){const n=Ic(t);if(n){const i=[];let r=[],s=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(w(s===t-1,"All SENT items should be at beginning of queue."),s=t,n[t].status=3,n[t].abortReason="set"):(w(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),r=r.concat(Ba(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===s?Ec(t,void 0):n.length=s+1,Kc(e.eventQueue_,Dc(t),r);for(let e=0;e<i.length;e++)Kn(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let e=n[r];try{e=decodeURIComponent(e.replace(/\+/g," "))}catch(i){}t+="/"+e}return t}function kh(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Nn(`Invalid query segment '${n}' in query '${e}'`)}return t}const Nh=function(e,t){const n=Rh(e),i=n.namespace;"firebase.com"===n.domain&&kn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||kn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Rn();const r="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new ui(n.host,n.secure,i,r,t,"",i!==n.subdomain),path:new lr(n.pathString)}},Rh=function(e){let t="",n="",i="",r="",s="",o=!0,a="https",c=443;if("string"===typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let l=e.indexOf("/");-1===l&&(l=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(l,u)),l<u&&(r=Sh(e.substring(l,u)));const d=kh(e.substring(Math.min(e.length,u)));h=t.indexOf(":"),h>=0?(o="https"===a||"wss"===a,c=parseInt(t.substring(h+1),10)):h=t.length;const p=t.slice(0,h);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),s=i}"ns"in d&&(s=d["ns"])}return{host:t,port:c,domain:n,subdomain:i,secure:o,scheme:a,pathString:r,namespace:s}},Dh="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";(function(){let e=0;const t=[]})();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ph{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+te(this.snapshot.exportVal())}}class xh{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return w(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Oh{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Cr(this._path)?null:fr(this._path)}get ref(){return new Mh(this._repo,this._path)}get _queryIdentifier(){const e=As(this._queryParams),t=Fn(e);return"{}"===t?"default":t}get _queryObject(){return As(this._queryParams)}isEqual(e){if(e=ge(e),!(e instanceof Oh))return!1;const t=this._repo===e._repo,n=br(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gr(this._path)}}class Mh extends Oh{constructor(e,t){super(e,t,new Ds,!1)}get parent(){const e=yr(this._path);return null===e?null:new Mh(this._repo,e)}get root(){let e=this;while(null!==e.parent)e=e.parent;return e}}class Lh{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new lr(e),n=qh(this.ref,e);return new Lh(this._node.getChild(t),n,os)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;const t=this._node;return!!t.forEachChild(this._index,((t,n)=>e(new Lh(n,qh(this.ref,t),os))))}hasChild(e){const t=new lr(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Fh(e,t){return e=ge(e),e._checkNotDeleted("ref"),void 0!==t?qh(e._root,t):e._root}function qh(e,t){return e=ge(e),null===dr(e._path)?Bc("child","path",t,!1):Wc("child","path",t,!1),new Mh(e._repo,vr(e._path,t))}function Uh(e,t){e=ge(e),Hc("set",e._path),Uc("set",t,e._path,!1);const n=new W;return ch(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}class $h{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Ph("value",this,new Lh(e.snapshotNode,new Mh(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new xh(this,e,t):null}matches(e){return e instanceof $h&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Wh{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new xh(this,e,t):null}createEvent(e,t){w(null!=e.childName,"Child events should have a childName.");const n=qh(new Mh(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Ph(e.type,this,new Lh(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Wh&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Bh(e,t,n,i,r){let s;if("object"===typeof i&&(s=void 0,r=i),"function"===typeof i&&(s=i),r&&r.onlyOnce){const t=n,i=(n,i)=>{uh(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new Ah(n,s||void 0),a="value"===t?new $h(o):new Wh(t,o);return lh(e._repo,e,a),()=>uh(e._repo,e,a)}function Hh(e,t,n,i){return Bh(e,"value",t,n,i)}Ea(Mh),Fa(Mh);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const jh="FIREBASE_DATABASE_EMULATOR_HOST",Vh={};let zh=!1;function Yh(e,t,n,i){e.repoInfo_=new ui(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}function Kh(e,t,n,i,r){let s=i||e.options.databaseURL;void 0===s&&(e.options.projectId||kn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),En("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,c=Nh(s,r),h=c.repoInfo;"undefined"!==typeof process&&(a={NODE_ENV:"production",BASE_URL:"/"}[jh]),a?(o=!0,s=`http://${a}?ns=${h.namespace}`,c=Nh(s,r),h=c.repoInfo):o=!c.repoInfo.secure;const l=r&&o?new Zn(Zn.OWNER):new Xn(e.name,e.options,t);jc("Invalid Firebase Database URL",c),Cr(c.path)||kn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Qh(h,e,l,new Jn(e.name,n));return new Jh(u,e)}function Gh(e,t){const n=Vh[t];n&&n[e.key]===e||kn(`Database ${t}(${e.repoInfo_}) has already been deleted.`),dh(e),delete n[e.key]}function Qh(e,t,n,i){let r=Vh[t.name];r||(r={},Vh[t.name]=r);let s=r[e.toURLString()];return s&&kn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Zc(e,zh,n,i),r[e.toURLString()]=s,s}class Jh{constructor(e,t){this._repoInternal=e,this.app=t,this["type"]="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(eh(this._repoInternal,this.app.options.appId,this.app.options["databaseAuthVariableOverride"]),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Mh(this._repo,ur())),this._rootInternal}_delete(){return null!==this._rootInternal&&(Gh(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&kn("Cannot call "+e+" on a deleted database.")}}function Xh(e=Wt(),t){const n=Mt(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=U("database");e&&Zh(n,...e)}return n}function Zh(e,t,n,i={}){e=ge(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&kn("Cannot call useEmulator() after instance has already been initialized.");const r=e._repoInternal;let s;if(r.repoInfo_.nodeAdmin)i.mockUserToken&&kn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Zn(Zn.OWNER);else if(i.mockUserToken){const t="string"===typeof i.mockUserToken?i.mockUserToken:B(i.mockUserToken,e.app.options.projectId);s=new Zn(t)}Yh(r,t,n,s)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function el(e){un(Ut),Ot(new me("database",((e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Kh(n,i,r,t)}),"PUBLIC").setMultipleInstances(!0)),Bt(cn,hn,e),Bt(cn,hn,"esm2017")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fr.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Fr.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};el();const tl="undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var nl={randomUUID:tl};n(4224),n(1121),n(7133);let il;const rl=new Uint8Array(16);function sl(){if(!il&&(il="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!il))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return il(rl)}const ol=[];for(let Nl=0;Nl<256;++Nl)ol.push((Nl+256).toString(16).slice(1));function al(e,t=0){return ol[e[t+0]]+ol[e[t+1]]+ol[e[t+2]]+ol[e[t+3]]+"-"+ol[e[t+4]]+ol[e[t+5]]+"-"+ol[e[t+6]]+ol[e[t+7]]+"-"+ol[e[t+8]]+ol[e[t+9]]+"-"+ol[e[t+10]]+ol[e[t+11]]+ol[e[t+12]]+ol[e[t+13]]+ol[e[t+14]]+ol[e[t+15]]}function cl(e,t,n){if(nl.randomUUID&&!t&&!e)return nl.randomUUID();e=e||{};const i=e.random||(e.rng||sl)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=i[e];return t}return al(i)}var hl=cl,ll=n(5743),ul=n.n(ll);const dl={apiKey:"AIzaSyDmMU1MKU9fJh_sONrL8qdrB6wI6YaOjKk",authDomain:"chatroom-50ce8.firebaseapp.com",databaseURL:"https://chatroom-50ce8-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"chatroom-50ce8",storageBucket:"chatroom-50ce8.appspot.com",messagingSenderId:"792265184022",appId:"1:792265184022:web:6d482ca47abc1f73bc7637",measurementId:"G-YP5X9XY2VY"},pl=$t(dl),_l=Xh(pl),fl=Fh(_l,"messages"),gl=(e,t)=>{Uh(Fh(_l,`messages/${ul()().unix()}`),{key:hl(),username:e,message:t,time:ul()().unix()})},ml=e=>((0,i.dD)("data-v-b37d2832"),e=e(),(0,i.Cn)(),e),yl={class:"send-message"},vl=["disabled"],Cl=ml((()=>(0,i._)("span",null,"Send",-1))),wl=[Cl];var bl=(0,i.aZ)({__name:"MessageInput",props:{username:{type:String,required:!0}},setup(e){const t=(0,d.iH)(),n=(0,d.iH)(""),r=((0,d.iH)(!1),(0,d.iH)(!0)),s=e,o=()=>{try{r.value=!1,gl(s.username,n.value),setTimeout((()=>{r.value=!0}),800),n.value=""}catch(e){console.log(`error: ${e}`)}a()},a=()=>{t.value?.focus()};return(e,s)=>((0,i.wg)(),(0,i.iD)("div",yl,[(0,i.wy)((0,i._)("textarea",{name:"messageInput",placeholder:"Send message...",ref_key:"messageInput",ref:t,"onUpdate:modelValue":s[0]||(s[0]=e=>n.value=e)},null,512),[[v.nr,n.value]]),(0,i._)("button",{disabled:""===n.value||!r.value,onClick:s[1]||(s[1]=e=>o())},wl,8,vl)]))}});const Il=(0,h.Z)(bl,[["__scopeId","data-v-b37d2832"]]);var El=Il,Tl={props:["username"],components:{MessageInfo:u,MessageContainer:y,MessageInput:El},setup(){let e=(0,d.iH)([]),t=0;return(0,i.bv)((()=>{t=ul()().unix(),Hh(fl,(n=>{if(n.exists()){let i=1;n.forEach((r=>{n.size===i&&null!==r.key&&Number(r.key)>=t&&e.value.push(r.val()),i++}))}}),(e=>{console.error(e)}))})),{messages:e}}};const Sl=(0,h.Z)(Tl,[["render",s],["__scopeId","data-v-7a70f648"]]);var kl=Sl},3550:function(e,t,n){"use strict";var i=n(598),r=String,s=TypeError;e.exports=function(e){if(i(e))return e;throw new s("Can't set "+r(e)+" as a prototype")}},767:function(e,t,n){"use strict";var i=n(3622),r=TypeError;e.exports=function(e,t){if(i(t,e))return e;throw new r("Incorrect invocation")}},7075:function(e){"use strict";e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},4872:function(e,t,n){"use strict";var i,r,s,o=n(7075),a=n(7697),c=n(9037),h=n(9985),l=n(8999),u=n(6812),d=n(926),p=n(3691),_=n(5773),f=n(1880),g=n(2148),m=n(3622),y=n(1868),v=n(9385),C=n(4201),w=n(4630),b=n(618),I=b.enforce,E=b.get,T=c.Int8Array,S=T&&T.prototype,k=c.Uint8ClampedArray,N=k&&k.prototype,R=T&&y(T),D=S&&y(S),P=Object.prototype,x=c.TypeError,A=C("toStringTag"),O=w("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",L=o&&!!v&&"Opera"!==d(c.opera),F=!1,q={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},$=function(e){if(!l(e))return!1;var t=d(e);return"DataView"===t||u(q,t)||u(U,t)},W=function(e){var t=y(e);if(l(t)){var n=E(t);return n&&u(n,M)?n[M]:W(t)}},B=function(e){if(!l(e))return!1;var t=d(e);return u(q,t)||u(U,t)},H=function(e){if(B(e))return e;throw new x("Target is not a typed array")},j=function(e){if(h(e)&&(!v||m(R,e)))return e;throw new x(p(e)+" is not a typed array constructor")},V=function(e,t,n,i){if(a){if(n)for(var r in q){var s=c[r];if(s&&u(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(h){}}}D[e]&&!n||f(D,e,n?t:L&&S[e]||t,i)}},z=function(e,t,n){var i,r;if(a){if(v){if(n)for(i in q)if(r=c[i],r&&u(r,e))try{delete r[e]}catch(s){}if(R[e]&&!n)return;try{return f(R,e,n?t:L&&R[e]||t)}catch(s){}}for(i in q)r=c[i],!r||r[e]&&!n||f(r,e,t)}};for(i in q)r=c[i],s=r&&r.prototype,s?I(s)[M]=r:L=!1;for(i in U)r=c[i],s=r&&r.prototype,s&&(I(s)[M]=r);if((!L||!h(R)||R===Function.prototype)&&(R=function(){throw new x("Incorrect invocation")},L))for(i in q)c[i]&&v(c[i],R);if((!L||!D||D===P)&&(D=R.prototype,L))for(i in q)c[i]&&v(c[i].prototype,D);if(L&&y(N)!==D&&v(N,D),a&&!u(D,A))for(i in F=!0,g(D,A,{configurable:!0,get:function(){return l(this)?this[O]:void 0}}),q)c[i]&&_(c[i],O,i);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_TAG:F&&O,aTypedArray:H,aTypedArrayConstructor:j,exportTypedArrayMethod:V,exportTypedArrayStaticMethod:z,getTypedArrayConstructor:W,isView:$,isTypedArray:B,TypedArray:R,TypedArrayPrototype:D}},9976:function(e,t,n){"use strict";var i=n(6310);e.exports=function(e,t,n){var r=0,s=arguments.length>2?n:i(t),o=new e(s);while(s>r)o[r]=t[r++];return o}},6166:function(e,t,n){"use strict";var i=n(6310);e.exports=function(e,t){for(var n=i(e),r=new t(n),s=0;s<n;s++)r[s]=e[n-s-1];return r}},6134:function(e,t,n){"use strict";var i=n(6310),r=n(8700),s=RangeError;e.exports=function(e,t,n,o){var a=i(e),c=r(n),h=c<0?a+c:c;if(h>=a||h<0)throw new s("Incorrect index");for(var l=new t(a),u=0;u<a;u++)l[u]=u===h?o:e[u];return l}},926:function(e,t,n){"use strict";var i=n(3043),r=n(9985),s=n(6648),o=n(4201),a=o("toStringTag"),c=Object,h="Arguments"===s(function(){return arguments}()),l=function(e,t){try{return e[t]}catch(n){}};e.exports=i?s:function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=l(t=c(e),a))?n:h?s(t):"Object"===(i=s(t))&&r(t.callee)?"Arguments":i}},1748:function(e,t,n){"use strict";var i=n(3689);e.exports=!i((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},2148:function(e,t,n){"use strict";var i=n(8702),r=n(2560);e.exports=function(e,t,n){return n.get&&i(n.get,t,{getter:!0}),n.set&&i(n.set,t,{setter:!0}),r.f(e,t,n)}},7136:function(e){"use strict";e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},6610:function(e,t,n){"use strict";var i=n(8844),r=Error,s=i("".replace),o=function(e){return String(new r(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);e.exports=function(e,t){if(c&&"string"==typeof e&&!r.prepareStackTrace)while(t--)e=s(e,a,"");return e}},2743:function(e,t,n){"use strict";var i=n(8844),r=n(509);e.exports=function(e,t,n){try{return i(r(Object.getOwnPropertyDescriptor(e,t)[n]))}catch(s){}}},3457:function(e,t,n){"use strict";var i=n(9985),r=n(8999),s=n(9385);e.exports=function(e,t,n){var o,a;return s&&i(o=t.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},9401:function(e,t,n){"use strict";var i=n(926);e.exports=function(e){var t=i(e);return"BigInt64Array"===t||"BigUint64Array"===t}},598:function(e,t,n){"use strict";var i=n(8999);e.exports=function(e){return i(e)||null===e}},3841:function(e,t,n){"use strict";var i=n(4327);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:i(e)}},1868:function(e,t,n){"use strict";var i=n(6812),r=n(9985),s=n(690),o=n(2713),a=n(1748),c=o("IE_PROTO"),h=Object,l=h.prototype;e.exports=a?h.getPrototypeOf:function(e){var t=s(e);if(i(t,c))return t[c];var n=t.constructor;return r(n)&&t instanceof n?n.prototype:t instanceof h?l:null}},9385:function(e,t,n){"use strict";var i=n(2743),r=n(5027),s=n(3550);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=i(Object.prototype,"__proto__","set"),e(n,[]),t=n instanceof Array}catch(o){}return function(n,i){return r(n),s(i),t?e(n,i):n.__proto__=i,n}}():void 0)},1530:function(e,t,n){"use strict";var i=n(8732),r=TypeError;e.exports=function(e){var t=i(e,"number");if("number"==typeof t)throw new r("Can't convert number to bigint");return BigInt(t)}},3043:function(e,t,n){"use strict";var i=n(4201),r=i("toStringTag"),s={};s[r]="z",e.exports="[object z]"===String(s)},4327:function(e,t,n){"use strict";var i=n(926),r=String;e.exports=function(e){if("Symbol"===i(e))throw new TypeError("Cannot convert a Symbol value to a string");return r(e)}},4224:function(e,t,n){"use strict";var i=n(6166),r=n(4872),s=r.aTypedArray,o=r.exportTypedArrayMethod,a=r.getTypedArrayConstructor;o("toReversed",(function(){return i(s(this),a(this))}))},1121:function(e,t,n){"use strict";var i=n(4872),r=n(8844),s=n(509),o=n(9976),a=i.aTypedArray,c=i.getTypedArrayConstructor,h=i.exportTypedArrayMethod,l=r(i.TypedArrayPrototype.sort);h("toSorted",(function(e){void 0!==e&&s(e);var t=a(this),n=o(c(t),t);return l(n,e)}))},7133:function(e,t,n){"use strict";var i=n(6134),r=n(4872),s=n(9401),o=n(8700),a=n(1530),c=r.aTypedArray,h=r.getTypedArrayConstructor,l=r.exportTypedArrayMethod,u=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(e){return 8===e}}();l("with",{with:function(e,t){var n=c(this),r=o(e),l=s(n)?a(t):+t;return i(n,h(n),r,l)}}["with"],!u)},3429:function(e,t,n){"use strict";var i=n(9989),r=n(9037),s=n(6058),o=n(5684),a=n(2560).f,c=n(6812),h=n(767),l=n(3457),u=n(3841),d=n(7136),p=n(6610),_=n(7697),f=n(3931),g="DOMException",m=s("Error"),y=s(g),v=function(){h(this,C);var e=arguments.length,t=u(e<1?void 0:arguments[0]),n=u(e<2?void 0:arguments[1],"Error"),i=new y(t,n),r=new m(t);return r.name=g,a(i,"stack",o(1,p(r.stack,1))),l(i,this,v),i},C=v.prototype=y.prototype,w="stack"in new m(g),b="stack"in new y(1,2),I=y&&_&&Object.getOwnPropertyDescriptor(r,g),E=!!I&&!(I.writable&&I.configurable),T=w&&!E&&!b;i({global:!0,constructor:!0,forced:f||T},{DOMException:T?v:y});var S=s(g),k=S.prototype;if(k.constructor!==S)for(var N in f||a(k,"constructor",o(1,S)),d)if(c(d,N)){var R=d[N],D=R.s;c(S,D)||a(S,D,o(6,R.c))}}}]);
//# sourceMappingURL=181.b64e1c72.js.map