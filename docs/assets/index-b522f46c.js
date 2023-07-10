(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function H(){}function U(t,e){for(const n in e)t[n]=e[n];return t}function Ie(t){return t()}function ve(){return Object.create(null)}function N(t){t.forEach(Ie)}function ze(t){return typeof t=="function"}function Q(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Pe(t,e){return t!=t?e==e:t!==e}function Fe(t){return Object.keys(t).length===0}function _e(t,e,n,l){if(t){const o=Be(t,e,n,l);return t[0](o)}}function Be(t,e,n,l){return t[1]&&l?U(n.ctx.slice(),t[1](l(e))):n.ctx}function me(t,e,n,l){if(t[2]&&l){const o=t[2](l(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const i=[],r=Math.max(e.dirty.length,o.length);for(let s=0;s<r;s+=1)i[s]=e.dirty[s]|o[s];return i}return e.dirty|o}return e.dirty}function he(t,e,n,l,o,i){if(o){const r=Be(e,n,l,i);t.p(r,o)}}function ge(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let l=0;l<n;l++)e[l]=-1;return e}return-1}function ee(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function be(t,e){const n={};e=new Set(e);for(const l in t)!e.has(l)&&l[0]!=="$"&&(n[l]=t[l]);return n}function Ne(t){const e={};for(const n in t)e[n]=!0;return e}function v(t,e){t.appendChild(e)}function T(t,e,n){t.insertBefore(e,n||null)}function S(t){t.parentNode&&t.parentNode.removeChild(t)}function C(t){return document.createElement(t)}function I(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Y(t){return document.createTextNode(t)}function K(){return Y(" ")}function Me(){return Y("")}function G(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function Xe(t){return function(e){return e.preventDefault(),t.call(this,e)}}function c(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const Ve=["width","height"];function ye(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const l in e)e[l]==null?t.removeAttribute(l):l==="style"?t.style.cssText=e[l]:l==="__value"?t.value=t[l]=e[l]:n[l]&&n[l].set&&Ve.indexOf(l)===-1?t[l]=e[l]:c(t,l,e[l])}function Re(t){return Array.from(t.childNodes)}function je(t,e){e=""+e,t.data!==e&&(t.data=e)}function ke(t,e){t.value=e??""}function W(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function b(t,e,n){t.classList[n?"add":"remove"](e)}function qe(t,e,{bubbles:n=!1,cancelable:l=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,l,e),o}let te;function x(t){te=t}function Ue(){if(!te)throw new Error("Function called outside component initialization");return te}function We(t){Ue().$$.after_update.push(t)}function Ke(){const t=Ue();return(e,n,{cancelable:l=!1}={})=>{const o=t.$$.callbacks[e];if(o){const i=qe(e,n,{cancelable:l});return o.slice().forEach(r=>{r.call(t,i)}),!i.defaultPrevented}return!0}}function Ge(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(l=>l.call(this,e))}const q=[],ne=[];let J=[];const ue=[],Je=Promise.resolve();let ce=!1;function Qe(){ce||(ce=!0,Je.then(De))}function fe(t){J.push(t)}function Ye(t){ue.push(t)}const se=new Set;let R=0;function De(){if(R!==0)return;const t=te;do{try{for(;R<q.length;){const e=q[R];R++,x(e),Ze(e.$$)}}catch(e){throw q.length=0,R=0,e}for(x(null),q.length=0,R=0;ne.length;)ne.pop()();for(let e=0;e<J.length;e+=1){const n=J[e];se.has(n)||(se.add(n),n())}J.length=0}while(q.length);for(;ue.length;)ue.pop()();ce=!1,se.clear(),x(t)}function Ze(t){if(t.fragment!==null){t.update(),N(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(fe)}}function xe(t){const e=[],n=[];J.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),J=e}const re=new Set;let F;function ae(){F={r:0,c:[],p:F}}function de(){F.r||N(F.c),F=F.p}function k(t,e){t&&t.i&&(re.delete(t),t.i(e))}function $(t,e,n,l){if(t&&t.o){if(re.has(t))return;re.add(t),F.c.push(()=>{re.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function et(t,e){$(t,1,1,()=>{e.delete(t.key)})}function tt(t,e,n,l,o,i,r,s,u,a,d,f){let m=t.length,p=i.length,_=m;const w={};for(;_--;)w[t[_].key]=_;const z=[],B=new Map,h=new Map,g=[];for(_=p;_--;){const y=f(o,i,_),M=n(y);let j=r.get(M);j?l&&g.push(()=>j.p(y,e)):(j=a(M,y),j.c()),B.set(M,z[_]=j),M in w&&h.set(M,Math.abs(_-w[M]))}const E=new Set,Z=new Set;function P(y){k(y,1),y.m(s,d),r.set(y.key,y),d=y.first,p--}for(;m&&p;){const y=z[p-1],M=t[m-1],j=y.key,le=M.key;y===M?(d=y.first,m--,p--):B.has(le)?!r.has(j)||E.has(j)?P(y):Z.has(le)?m--:h.get(j)>h.get(le)?(Z.add(j),P(y)):(E.add(le),m--):(u(M,r),m--)}for(;m--;){const y=t[m];B.has(y.key)||u(y,r)}for(;p;)P(z[p-1]);return N(g),z}function pe(t,e){const n={},l={},o={$$scope:1};let i=t.length;for(;i--;){const r=t[i],s=e[i];if(s){for(const u in r)u in s||(l[u]=1);for(const u in s)o[u]||(n[u]=s[u],o[u]=1);t[i]=s}else for(const u in r)o[u]=1}for(const r in l)r in n||(n[r]=void 0);return n}function Oe(t){return typeof t=="object"&&t!==null?t:{}}function nt(t,e,n){const l=t.$$.props[e];l!==void 0&&(t.$$.bound[l]=n,n(t.$$.ctx[l]))}function A(t){t&&t.c()}function D(t,e,n,l){const{fragment:o,after_update:i}=t.$$;o&&o.m(e,n),l||fe(()=>{const r=t.$$.on_mount.map(Ie).filter(ze);t.$$.on_destroy?t.$$.on_destroy.push(...r):N(r),t.$$.on_mount=[]}),i.forEach(fe)}function O(t,e){const n=t.$$;n.fragment!==null&&(xe(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){t.$$.dirty[0]===-1&&(q.push(t),Qe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function X(t,e,n,l,o,i,r,s=[-1]){const u=te;x(t);const a=t.$$={fragment:null,ctx:[],props:i,update:H,not_equal:o,bound:ve(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:ve(),dirty:s,skip_bound:!1,root:e.target||u.$$.root};r&&r(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(f,m,...p)=>{const _=p.length?p[0]:m;return a.ctx&&o(a.ctx[f],a.ctx[f]=_)&&(!a.skip_bound&&a.bound[f]&&a.bound[f](_),d&&lt(t,f)),m}):[],a.update(),d=!0,N(a.before_update),a.fragment=l?l(a.ctx):!1,e.target){if(e.hydrate){const f=Re(e.target);a.fragment&&a.fragment.l(f),f.forEach(S)}else a.fragment&&a.fragment.c();e.intro&&k(t.$$.fragment),D(t,e.target,e.anchor,e.customElement),De()}x(u)}class V{$destroy(){O(this,1),this.$destroy=H}$on(e,n){if(!ze(n))return H;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(e){this.$$set&&!Fe(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}let oe;const ot=new Uint8Array(16);function it(){if(!oe&&(oe=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!oe))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return oe(ot)}const L=[];for(let t=0;t<256;++t)L.push((t+256).toString(16).slice(1));function rt(t,e=0){return(L[t[e+0]]+L[t[e+1]]+L[t[e+2]]+L[t[e+3]]+"-"+L[t[e+4]]+L[t[e+5]]+"-"+L[t[e+6]]+L[t[e+7]]+"-"+L[t[e+8]]+L[t[e+9]]+"-"+L[t[e+10]]+L[t[e+11]]+L[t[e+12]]+L[t[e+13]]+L[t[e+14]]+L[t[e+15]]).toLowerCase()}const st=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),we={randomUUID:st};function ie(t,e,n){if(we.randomUUID&&!e&&!t)return we.randomUUID();t=t||{};const l=t.random||(t.rng||it)();if(l[6]=l[6]&15|64,l[8]=l[8]&63|128,e){n=n||0;for(let o=0;o<16;++o)e[n+o]=l[o];return e}return rt(l)}const ut=t=>({}),Le=t=>({});function $e(t){let e,n;const l=t[10].icoLeft,o=_e(l,t,t[9],Le);return{c(){e=C("div"),o&&o.c(),c(e,"class","ico-left svelte-1moa7je"),b(e,"ico-left_big",t[0]=="L"||t[0]=="M"||t[0]=="Fill"),b(e,"ico-left_small",t[0]=="S"||t[0]=="XS")},m(i,r){T(i,e,r),o&&o.m(e,null),n=!0},p(i,r){o&&o.p&&(!n||r&512)&&he(o,l,i,i[9],n?me(l,i[9],r,ut):ge(i[9]),Le),(!n||r&1)&&b(e,"ico-left_big",i[0]=="L"||i[0]=="M"||i[0]=="Fill"),(!n||r&1)&&b(e,"ico-left_small",i[0]=="S"||i[0]=="XS")},i(i){n||(k(o,i),n=!0)},o(i){$(o,i),n=!1},d(i){i&&S(e),o&&o.d(i)}}}function Ce(t){let e,n;const l=t[10].default,o=_e(l,t,t[9],null),i=o||ct();return{c(){e=C("span"),i&&i.c(),c(e,"class","svelte-1moa7je"),b(e,"main-text_big",t[0]=="L"||t[0]=="M"||t[0]=="Fill"),b(e,"main-text_small",t[0]=="S"||t[0]=="XS")},m(r,s){T(r,e,s),i&&i.m(e,null),n=!0},p(r,s){o&&o.p&&(!n||s&512)&&he(o,l,r,r[9],n?me(l,r[9],s,null):ge(r[9]),null),(!n||s&1)&&b(e,"main-text_big",r[0]=="L"||r[0]=="M"||r[0]=="Fill"),(!n||s&1)&&b(e,"main-text_small",r[0]=="S"||r[0]=="XS")},i(r){n||(k(i,r),n=!0)},o(r){$(i,r),n=!1},d(r){r&&S(e),i&&i.d(r)}}}function ct(t){let e;return{c(){e=Y("Button")},m(n,l){T(n,e,l)},d(n){n&&S(e)}}}function ft(t){let e,n,l,o,i,r=t[6].icoLeft&&$e(t),s=t[2]&&Ce(t),u=[t[5]],a={};for(let d=0;d<u.length;d+=1)a=U(a,u[d]);return{c(){e=C("button"),r&&r.c(),n=K(),s&&s.c(),ye(e,a),b(e,"size-L",t[0]=="L"),b(e,"size-M",t[0]=="M"),b(e,"size-S",t[0]=="S"),b(e,"size-XS",t[0]=="XS"),b(e,"size-fill",t[0]=="Fill"),W(e,"background",t[4]),W(e,"color",t[1]),b(e,"svelte-1moa7je",!0)},m(d,f){T(d,e,f),r&&r.m(e,null),v(e,n),s&&s.m(e,null),e.autofocus&&e.focus(),l=!0,o||(i=[G(e,"mouseenter",t[12]),G(e,"mouseleave",t[13]),G(e,"click",t[11])],o=!0)},p(d,[f]){d[6].icoLeft?r?(r.p(d,f),f&64&&k(r,1)):(r=$e(d),r.c(),k(r,1),r.m(e,n)):r&&(ae(),$(r,1,1,()=>{r=null}),de()),d[2]?s?(s.p(d,f),f&4&&k(s,1)):(s=Ce(d),s.c(),k(s,1),s.m(e,null)):s&&(ae(),$(s,1,1,()=>{s=null}),de()),ye(e,a=pe(u,[f&32&&d[5]])),b(e,"size-L",d[0]=="L"),b(e,"size-M",d[0]=="M"),b(e,"size-S",d[0]=="S"),b(e,"size-XS",d[0]=="XS"),b(e,"size-fill",d[0]=="Fill"),W(e,"background",d[4]),W(e,"color",d[1]),b(e,"svelte-1moa7je",!0)},i(d){l||(k(r),k(s),l=!0)},o(d){$(r),$(s),l=!1},d(d){d&&S(e),r&&r.d(),s&&s.d(),o=!1,N(i)}}}function at(t,e,n){let l;const o=["size","backgroundColor","backgroundColorHover","textColor","label"];let i=be(e,o),{$$slots:r={},$$scope:s}=e;const u=Ne(r);let{size:a="L"}=e,{backgroundColor:d="#526ED3"}=e,{backgroundColorHover:f="#6C86E2"}=e,{textColor:m="#fff"}=e,{label:p=!0}=e,_=!1;function w(h){Ge.call(this,t,h)}const z=()=>n(3,_=!0),B=()=>n(3,_=!1);return t.$$set=h=>{e=U(U({},e),ee(h)),n(5,i=be(e,o)),"size"in h&&n(0,a=h.size),"backgroundColor"in h&&n(7,d=h.backgroundColor),"backgroundColorHover"in h&&n(8,f=h.backgroundColorHover),"textColor"in h&&n(1,m=h.textColor),"label"in h&&n(2,p=h.label),"$$scope"in h&&n(9,s=h.$$scope)},t.$$.update=()=>{t.$$.dirty&392&&n(4,l=_?f:d)},[a,m,p,_,l,i,u,d,f,s,r,w,z,B]}class He extends V{constructor(e){super(),X(this,e,at,ft,Q,{size:0,backgroundColor:7,backgroundColorHover:8,textColor:1,label:2})}}function Se(t){let e,n;return{c(){e=I("title"),n=Y(t[0])},m(l,o){T(l,e,o),v(e,n)},p(l,o){o&1&&je(n,l[0])},d(l){l&&S(e)}}}function dt(t){let e,n,l,o=t[0]&&Se(t);const i=t[4].default,r=_e(i,t,t[3],null);return{c(){e=I("svg"),o&&o.c(),n=Me(),r&&r.c(),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"viewBox",t[1]),c(e,"class","svelte-1f5ynff"),W(e,"color",t[2])},m(s,u){T(s,e,u),o&&o.m(e,null),v(e,n),r&&r.m(e,null),l=!0},p(s,[u]){s[0]?o?o.p(s,u):(o=Se(s),o.c(),o.m(e,n)):o&&(o.d(1),o=null),r&&r.p&&(!l||u&8)&&he(r,i,s,s[3],l?me(i,s[3],u,null):ge(s[3]),null),(!l||u&2)&&c(e,"viewBox",s[1]),u&4&&W(e,"color",s[2])},i(s){l||(k(r,s),l=!0)},o(s){$(r,s),l=!1},d(s){s&&S(e),o&&o.d(),r&&r.d(s)}}}function _t(t,e,n){let{$$slots:l={},$$scope:o}=e,{title:i=null}=e,{viewBox:r}=e,{color:s="currentColor"}=e;return t.$$set=u=>{"title"in u&&n(0,i=u.title),"viewBox"in u&&n(1,r=u.viewBox),"color"in u&&n(2,s=u.color),"$$scope"in u&&n(3,o=u.$$scope)},[i,r,s,o,l]}class Ae extends V{constructor(e){super(),X(this,e,_t,dt,Q,{title:0,viewBox:1,color:2})}}function mt(t){let e,n,l,o;return{c(){e=I("g"),n=I("circle"),l=I("line"),o=I("line"),c(n,"cx","12"),c(n,"cy","12"),c(n,"r","10"),c(l,"x1","12"),c(l,"y1","8"),c(l,"x2","12"),c(l,"y2","16"),c(o,"x1","8"),c(o,"y1","12"),c(o,"x2","16"),c(o,"y2","12"),c(e,"fill","none"),c(e,"stroke-width","2"),c(e,"stroke-linecap","round"),c(e,"stroke-linejoin","round")},m(i,r){T(i,e,r),v(e,n),v(e,l),v(e,o)},p:H,d(i){i&&S(e)}}}function ht(t){let e,n;const l=[{viewBox:"0 0 24 24"},t[0]];let o={$$slots:{default:[mt]},$$scope:{ctx:t}};for(let i=0;i<l.length;i+=1)o=U(o,l[i]);return e=new Ae({props:o}),{c(){A(e.$$.fragment)},m(i,r){D(e,i,r),n=!0},p(i,[r]){const s=r&1?pe(l,[l[0],Oe(i[0])]):{};r&2&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){n||(k(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){O(e,i)}}}function gt(t,e,n){return t.$$set=l=>{n(0,e=U(U({},e),ee(l)))},e=ee(e),[e]}class pt extends V{constructor(e){super(),X(this,e,gt,ht,Q,{})}}function vt(t){let e,n,l,o,i;return{c(){e=I("svg"),n=I("polyline"),l=I("path"),o=I("line"),i=I("line"),c(n,"points","3 6 5 6 21 6"),c(l,"d","M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"),c(o,"x1","10"),c(o,"y1","11"),c(o,"x2","10"),c(o,"y2","17"),c(i,"x1","14"),c(i,"y1","11"),c(i,"x2","14"),c(i,"y2","17"),c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"width","24"),c(e,"height","24"),c(e,"viewBox","0 0 24 24"),c(e,"fill","none"),c(e,"stroke","currentColor"),c(e,"stroke-width","2"),c(e,"stroke-linecap","round"),c(e,"stroke-linejoin","round"),c(e,"class","feather feather-trash-2")},m(r,s){T(r,e,s),v(e,n),v(e,l),v(e,o),v(e,i)},p:H,d(r){r&&S(e)}}}function bt(t){let e,n;const l=[{viewBox:"0 0 24 24"},t[0]];let o={$$slots:{default:[vt]},$$scope:{ctx:t}};for(let i=0;i<l.length;i+=1)o=U(o,l[i]);return e=new Ae({props:o}),{c(){A(e.$$.fragment)},m(i,r){D(e,i,r),n=!0},p(i,[r]){const s=r&1?pe(l,[l[0],Oe(i[0])]):{};r&2&&(s.$$scope={dirty:r,ctx:i}),e.$set(s)},i(i){n||(k(e.$$.fragment,i),n=!0)},o(i){$(e.$$.fragment,i),n=!1},d(i){O(e,i)}}}function yt(t,e,n){return t.$$set=l=>{n(0,e=U(U({},e),ee(l)))},e=ee(e),[e]}class kt extends V{constructor(e){super(),X(this,e,yt,bt,Q,{})}}function Te(t,e,n){const l=t.slice();return l[8]=e[n],l}function wt(t){let e,n,l;return n=new kt({}),{c(){e=C("div"),A(n.$$.fragment),c(e,"slot","icoLeft")},m(o,i){T(o,e,i),D(n,e,null),l=!0},p:H,i(o){l||(k(n.$$.fragment,o),l=!0)},o(o){$(n.$$.fragment,o),l=!1},d(o){o&&S(e),O(n)}}}function Ee(t,e){let n,l,o,i,r,s,u=e[8].title+"",a,d,f,m,p,_,w;function z(){return e[4](e[8])}function B(){return e[5](e[8])}return f=new He({props:{label:!1,size:"S",backgroundColor:"var(--tui-negative)",backgroundColorHover:"var(--tui-negative-hover)",$$slots:{icoLeft:[wt]},$$scope:{ctx:e}}}),f.$on("click",B),{key:t,first:null,c(){n=C("ul"),l=C("label"),o=C("input"),r=K(),s=C("li"),a=Y(u),d=K(),A(f.$$.fragment),m=K(),c(o,"type","checkbox"),o.checked=i=e[8].completed,c(o,"class","svelte-85l0hi"),c(s,"class","svelte-85l0hi"),b(s,"through",e[8].completed),c(l,"class","svelte-85l0hi"),c(n,"class","todo-element svelte-85l0hi"),this.first=n},m(h,g){T(h,n,g),v(n,l),v(l,o),v(l,r),v(l,s),v(s,a),v(n,d),D(f,n,null),v(n,m),p=!0,_||(w=G(o,"input",z),_=!0)},p(h,g){e=h,(!p||g&1&&i!==(i=e[8].completed))&&(o.checked=i),(!p||g&1)&&u!==(u=e[8].title+"")&&je(a,u),(!p||g&1)&&b(s,"through",e[8].completed);const E={};g&2048&&(E.$$scope={dirty:g,ctx:e}),f.$set(E)},i(h){p||(k(f.$$.fragment,h),p=!0)},o(h){$(f.$$.fragment,h),p=!1},d(h){h&&S(n),O(f),_=!1,w()}}}function Lt(t){let e=[],n=new Map,l,o,i=t[0];const r=s=>s[8].id;for(let s=0;s<i.length;s+=1){let u=Te(t,i,s),a=r(u);n.set(a,e[s]=Ee(a,u))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();l=Me()},m(s,u){for(let a=0;a<e.length;a+=1)e[a]&&e[a].m(s,u);T(s,l,u),o=!0},p(s,[u]){u&7&&(i=s[0],ae(),e=tt(e,u,r,1,s,i,n,l.parentNode,et,Ee,l,Te),de())},i(s){if(!o){for(let u=0;u<i.length;u+=1)k(e[u]);o=!0}},o(s){for(let u=0;u<e.length;u+=1)$(e[u]);o=!1},d(s){for(let u=0;u<e.length;u+=1)e[u].d(s);s&&S(l)}}}function $t(t,e,n){let{todoItems:l=[]}=e,o=l,i=!1;const r=Ke();function s(f,m){r("toggletodo",{id:f,value:m})}function u(f){r("deleTodo",{id:f})}We(()=>{r("afterUpdate",{autoScroll:i})});const a=f=>{s(f.id,!f.completed)},d=f=>{u(f.id)};return t.$$set=f=>{"todoItems"in f&&n(0,l=f.todoItems)},t.$$.update=()=>{t.$$.dirty&9&&(i=l.length>o.length,n(3,o=l))},[l,s,u,o,a,d]}class Ct extends V{constructor(e){super(),X(this,e,$t,Lt,Q,{todoItems:0})}}function St(t){let e,n,l;return{c(){e=C("input"),c(e,"type","text"),c(e,"placeholder",t[1]),c(e,"class","svelte-1lh8dq2")},m(o,i){T(o,e,i),ke(e,t[0]),n||(l=G(e,"input",t[2]),n=!0)},p(o,[i]){i&2&&c(e,"placeholder",o[1]),i&1&&e.value!==o[0]&&ke(e,o[0])},i:H,o:H,d(o){o&&S(e),n=!1,l()}}}function Tt(t,e,n){let{value:l}=e,{placeholder:o="Hello"}=e;function i(){l=this.value,n(0,l)}return t.$$set=r=>{"value"in r&&n(0,l=r.value),"placeholder"in r&&n(1,o=r.placeholder)},[l,o,i]}class Et extends V{constructor(e){super(),X(this,e,Tt,St,Pe,{value:0,placeholder:1})}}function It(t){let e;return{c(){e=Y("Add todo")},m(n,l){T(n,e,l)},d(n){n&&S(e)}}}function zt(t){let e,n,l;return n=new pt({}),{c(){e=C("div"),A(n.$$.fragment),c(e,"slot","icoLeft")},m(o,i){T(o,e,i),D(n,e,null),l=!0},p:H,i(o){l||(k(n.$$.fragment,o),l=!0)},o(o){$(n.$$.fragment,o),l=!1},d(o){o&&S(e),O(n)}}}function Bt(t){let e,n,l,o,i,r,s,u,a,d,f,m,p,_,w;function z(g){t[8](g)}let B={placeholder:"Write title of your todo"};t[0]!==void 0&&(B.value=t[0]),i=new Et({props:B}),ne.push(()=>nt(i,"value",z)),a=new He({props:{size:"Fill",backgroundColor:"var(--tui-primary)",backgroundColorHover:"var(--tui-primary-hover)",textColor:"var(--tui-text-01-night)",type:"submit",disabled:!t[0],$$slots:{icoLeft:[zt],default:[It]},$$scope:{ctx:t}}});let h={todoItems:t[3]};return m=new Ct({props:h}),t[9](m),m.$on("toggletodo",t[5]),m.$on("deleTodo",t[6]),m.$on("afterUpdate",t[7]),{c(){e=C("main"),n=C("section"),l=C("form"),o=C("div"),A(i.$$.fragment),s=K(),u=C("div"),A(a.$$.fragment),d=K(),f=C("article"),A(m.$$.fragment),c(o,"class","todo__input svelte-v1c0ng"),c(u,"class","todo__button svelte-v1c0ng"),c(l,"class","todo__form"),c(l,"action",""),c(f,"class","todo__items svelte-v1c0ng"),c(n,"class","todo svelte-v1c0ng")},m(g,E){T(g,e,E),v(e,n),v(n,l),v(l,o),D(i,o,null),v(l,s),v(l,u),D(a,u,null),v(n,d),v(n,f),D(m,f,null),t[10](f),p=!0,_||(w=G(l,"submit",Xe(t[4])),_=!0)},p(g,[E]){const Z={};!r&&E&1&&(r=!0,Z.value=g[0],Ye(()=>r=!1)),i.$set(Z);const P={};E&1&&(P.disabled=!g[0]),E&2048&&(P.$$scope={dirty:E,ctx:g}),a.$set(P);const y={};E&8&&(y.todoItems=g[3]),m.$set(y)},i(g){p||(k(i.$$.fragment,g),k(a.$$.fragment,g),k(m.$$.fragment,g),p=!0)},o(g){$(i.$$.fragment,g),$(a.$$.fragment,g),$(m.$$.fragment,g),p=!1},d(g){g&&S(e),O(i),O(a),t[9](null),O(m),t[10](null),_=!1,w()}}}function Mt(t,e,n){let l,o,i,r=[{id:ie(),title:"Title 1",completed:!0},{id:ie(),title:"Title 2",completed:!1},{id:ie(),title:"Title 3",completed:!0}];function s(){l&&(n(3,r=[...r,{id:ie(),title:l,completed:!1}]),n(0,l=""))}function u(_){n(3,r=r.map(w=>w.id==_.detail.id?{...w,completed:_.detail.value}:{...w})),console.log(r)}function a(_){n(3,r=r.filter(w=>_.detail.id!=w.id))}function d(_){_.detail.autoScroll&&o.scrollTo(0,o.scrollHeight)}function f(_){l=_,n(0,l)}function m(_){ne[_?"unshift":"push"](()=>{i=_,n(2,i)})}function p(_){ne[_?"unshift":"push"](()=>{o=_,n(1,o)})}return[l,o,i,r,s,u,a,d,f,m,p]}class jt extends V{constructor(e){super(),X(this,e,Mt,Bt,Q,{})}}new jt({target:document.getElementById("app")});
