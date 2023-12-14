var F=Object.defineProperty;var G=(t,e,n)=>e in t?F(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var S=(t,e,n)=>(G(t,typeof e!="symbol"?e+"":e,n),n);import{n as w,r as v,k as D,l as C,i as U,m as j,p as V,q as W,v as J,w as K,x as B,y as Q,z as X,A as Y}from"./scheduler.c9210aeb.js";const z=typeof window<"u";let Z=z?()=>window.performance.now():()=>Date.now(),P=z?t=>requestAnimationFrame(t):w;const g=new Set;function I(t){g.forEach(e=>{e.c(t)||(g.delete(e),e.f())}),g.size!==0&&P(I)}function tt(t){let e;return g.size===0&&P(I),{promise:new Promise(n=>{g.add(e={c:t,f:n})}),abort(){g.delete(e)}}}let b=!1;function et(){b=!0}function nt(){b=!1}function it(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function rt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&s.push(f)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const l=e[s].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:it(1,r,_=>e[n[_]].claim_order,l))-1;i[s]=n[f]+1;const u=f+1;n[u]=s,r=Math.max(u,r)}const o=[],a=[];let c=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);c>=s;c--)a.push(e[c]);c--}for(;c>=0;c--)a.push(e[c]);o.reverse(),a.sort((s,l)=>s.claim_order-l.claim_order);for(let s=0,l=0;s<a.length;s++){for(;l<o.length&&a[s].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(a[s],f)}}function st(t,e){t.appendChild(e)}function L(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function lt(t){const e=k("style");return e.textContent="/* empty */",at(L(t),e),e.sheet}function at(t,e){return st(t.head||t,e),e.sheet}function ot(t,e){if(b){for(rt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ct(t,e,n){b&&!n?ot(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function O(t){t.parentNode&&t.parentNode.removeChild(t)}function k(t){return document.createElement(t)}function ct(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function R(t){return document.createTextNode(t)}function Dt(){return R(" ")}function Pt(){return R("")}function Rt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Tt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function jt(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Bt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ht(t){return t.dataset.svelteH}function ut(t){return Array.from(t.childNodes)}function ft(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function q(t,e,n,i,r=!1){ft(t);const o=(()=>{for(let a=t.claim_info.last_index;a<t.length;a++){const c=t[a];if(e(c)){const s=n(c);return s===void 0?t.splice(a,1):t[a]=s,r||(t.claim_info.last_index=a),c}}for(let a=t.claim_info.last_index-1;a>=0;a--){const c=t[a];if(e(c)){const s=n(c);return s===void 0?t.splice(a,1):t[a]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=a,c}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function M(t,e,n,i){return q(t,r=>r.nodeName===e,r=>{const o=[];for(let a=0;a<r.attributes.length;a++){const c=r.attributes[a];n[c.name]||o.push(c.name)}o.forEach(a=>r.removeAttribute(a))},()=>i(e))}function zt(t,e,n){return M(t,e,n,k)}function It(t,e,n){return M(t,e,n,ct)}function _t(t,e){return q(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>R(e),!0)}function Lt(t){return _t(t," ")}function Ot(t,e){e=""+e,t.data!==e&&(t.data=e)}function kt(t,e){t.value=e??""}function qt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Mt(t,e,n){t.classList.toggle(e,!!n)}function dt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Ft(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Gt(t,e){return new t(e)}const E=new Map;let A=0;function mt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function ht(t,e){const n={stylesheet:lt(e),rules:{}};return E.set(t,n),n}function pt(t,e,n,i,r,o,a,c=0){const s=16.666/i;let l=`{
`;for(let $=0;$<=1;$+=s){const y=e+(n-e)*o($);l+=$*100+`%{${a(y,1-y)}}
`}const f=l+`100% {${a(n,1-n)}}
}`,u=`__svelte_${mt(f)}_${c}`,_=L(t),{stylesheet:d,rules:m}=E.get(_)||ht(_,t);m[u]||(m[u]=!0,d.insertRule(`@keyframes ${u} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${u} ${i}ms linear ${r}ms 1 both`,A+=1,u}function $t(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?o=>o.indexOf(e)<0:o=>o.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),A-=r,A||yt())}function yt(){P(()=>{A||(E.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&O(e)}),E.clear())})}let x;function gt(){return x||(x=Promise.resolve(),x.then(()=>{x=null})),x}function H(t,e,n){t.dispatchEvent(dt(`${e?"intro":"outro"}${n}`))}const N=new Set;let h;function Ut(){h={r:0,c:[],p:h}}function Vt(){h.r||v(h.c),h=h.p}function xt(t,e){t&&t.i&&(N.delete(t),t.i(e))}function Wt(t,e,n,i){if(t&&t.o){if(N.has(t))return;N.add(t),h.c.push(()=>{N.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const wt={duration:0};function Jt(t,e,n){const i={direction:"out"};let r=e(t,n,i),o=!0,a;const c=h;c.r+=1;let s;function l(){const{delay:f=0,duration:u=300,easing:_=U,tick:d=w,css:m}=r||wt;m&&(a=pt(t,1,0,u,f,_,m));const p=Z()+f,$=p+u;C(()=>H(t,!1,"start")),"inert"in t&&(s=t.inert,t.inert=!0),tt(y=>{if(o){if(y>=$)return d(0,1),H(t,!1,"end"),--c.r||v(c.c),!1;if(y>=p){const T=_((y-p)/u);d(1-T,T)}}return o})}return D(r)?gt().then(()=>{r=r(i),l()}):l(),{end(f){f&&"inert"in t&&(t.inert=s),f&&r.tick&&r.tick(1,0),o&&(a&&$t(t,a),o=!1)}}}function Kt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Qt(t){t&&t.c()}function Xt(t,e){t&&t.l(e)}function vt(t,e,n){const{fragment:i,after_update:r}=t.$$;i&&i.m(e,n),C(()=>{const o=t.$$.on_mount.map(Q).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...o):v(o),t.$$.on_mount=[]}),r.forEach(C)}function Nt(t,e){const n=t.$$;n.fragment!==null&&(J(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){t.$$.dirty[0]===-1&&(X.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Yt(t,e,n,i,r,o,a=null,c=[-1]){const s=K;B(t);const l=t.$$={fragment:null,ctx:[],props:o,update:w,not_equal:r,bound:j(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(s?s.$$.context:[])),callbacks:j(),dirty:c,skip_bound:!1,root:e.target||s.$$.root};a&&a(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(u,_,...d)=>{const m=d.length?d[0]:_;return l.ctx&&r(l.ctx[u],l.ctx[u]=m)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](m),f&&Et(t,u)),_}):[],l.update(),f=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){et();const u=ut(e.target);l.fragment&&l.fragment.l(u),u.forEach(O)}else l.fragment&&l.fragment.c();e.intro&&xt(t.$$.fragment),vt(t,e.target,e.anchor),nt(),V()}B(s)}class Zt{constructor(){S(this,"$$");S(this,"$$set")}$destroy(){Nt(this,1),this.$destroy=w}$on(e,n){if(!D(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!W(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const At="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(At);export{Rt as A,Jt as B,kt as C,Kt as D,Mt as E,Tt as F,jt as G,ct as H,It as I,Zt as S,Ct as a,Vt as b,Lt as c,xt as d,Pt as e,O as f,k as g,zt as h,Yt as i,ut as j,Bt as k,qt as l,R as m,_t as n,Ot as o,Ut as p,Gt as q,Qt as r,Dt as s,Wt as t,Xt as u,vt as v,Nt as w,Ft as x,ot as y,Ht as z};
