import{r as fe,i as st,s as se,n as $,e as xe,b as N,f as O,h as ke,j as de}from"../chunks/scheduler.c9210aeb.js";import{t as L,d as F,S as oe,i as re,g as y,m as W,s as V,h as C,j as T,n as J,f as b,c as M,k as h,a as A,y as g,A as q,o as ge,p as Se,b as Ee,z as Y,B as Je,l as Me,C as Ae,D as U,r as K,u as Q,v as X,w as Z,E as Pe,F as ye,G as ot,H as be,I as _e}from"../chunks/index.620973ff.js";import{w as Ye}from"../chunks/index.f6dfa876.js";import{m as Ke,l as Qe,r as Xe,d as Ze,s as Fe,a as He}from"../chunks/config.c601d03a.js";function Le(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function rt(s,e){L(s,1,1,()=>{e.delete(s.key)})}function at(s,e,t,o,r,l,a,i,n,p,f,k){let _=s.length,S=l.length,u=_;const v={};for(;u--;)v[s[u].key]=u;const c=[],m=new Map,D=new Map,j=[];for(u=S;u--;){const d=k(r,l,u),E=t(d);let z=a.get(E);z?o&&j.push(()=>z.p(d,e)):(z=p(E,d),z.c()),m.set(E,c[u]=z),E in v&&D.set(E,Math.abs(u-v[E]))}const I=new Set,w=new Set;function x(d){F(d,1),d.m(i,f),a.set(d.key,d),f=d.first,S--}for(;_&&S;){const d=c[S-1],E=s[_-1],z=d.key,P=E.key;d===E?(f=d.first,_--,S--):m.has(P)?!a.has(z)||I.has(z)?x(d):w.has(P)?_--:D.get(z)>D.get(P)?(w.add(z),x(d)):(I.add(P),_--):(n(E,a),_--)}for(;_--;){const d=s[_];m.has(d.key)||n(d,a)}for(;S;)x(c[S-1]);return fe(j),c}function $e(s,{delay:e=0,duration:t=400,easing:o=st}={}){const r=+getComputedStyle(s).opacity;return{delay:e,duration:t,easing:o,css:l=>`opacity: ${l*r}`}}async function lt(s){if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(s);else{const e=document.createElement("textarea");e.value=s,e.style.position="absolute",e.style.left="-999999px",document.body.prepend(e),e.select();try{document.execCommand("copy")}catch(t){console.error(t)}finally{e.remove()}}}const it={copyToClipboard:lt};function Re(s){let e,t,o,r;return{c(){e=y("div"),t=y("p"),o=W(s[4]),this.h()},l(l){e=C(l,"DIV",{class:!0,style:!0,title:!0});var a=T(e);t=C(a,"P",{style:!0,class:!0});var i=T(t);o=J(i,s[4]),i.forEach(b),a.forEach(b),this.h()},h(){h(t,"style",s[8]),h(t,"class","svelte-1aka4sj"),h(e,"class","shadow-block svelte-1aka4sj"),h(e,"style",r=`background-image: linear-gradient(to right, ${s[5]}, ${s[6]});`),h(e,"title",s[3])},m(l,a){A(l,e,a),g(e,t),g(t,o)},p(l,a){a&16&&ge(o,l[4]),a&256&&h(t,"style",l[8]),a&96&&r!==(r=`background-image: linear-gradient(to right, ${l[5]}, ${l[6]});`)&&h(e,"style",r),a&8&&h(e,"title",l[3])},d(l){l&&b(e)}}}function qe(s){let e,t="Copied!",o,r;return{c(){e=y("span"),e.textContent=t,this.h()},l(l){e=C(l,"SPAN",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-3bytop"&&(e.textContent=t),this.h()},h(){h(e,"class","svelte-1aka4sj")},m(l,a){A(l,e,a),r=!0},i(l){r||(o&&o.end(1),r=!0)},o(l){l&&(o=Je(e,$e,{duration:1e3})),r=!1},d(l){l&&b(e),l&&o&&o.end()}}}function nt(s){let e,t,o,r,l,a,i,n,p,f,k,_,S,u=!s[1]&&Re(s),v=s[7]&&qe();return{c(){e=y("div"),t=y("p"),o=W(s[0]),r=V(),u&&u.c(),l=V(),a=y("div"),i=y("a"),n=W("Source"),p=V(),v&&v.c(),this.h()},l(c){e=C(c,"DIV",{class:!0,style:!0});var m=T(e);t=C(m,"P",{class:!0});var D=T(t);o=J(D,s[0]),D.forEach(b),r=M(m),u&&u.l(m),l=M(m),a=C(m,"DIV",{class:!0});var j=T(a);i=C(j,"A",{href:!0,class:!0});var I=T(i);n=J(I,"Source"),I.forEach(b),p=M(j),v&&v.l(j),j.forEach(b),m.forEach(b),this.h()},h(){h(t,"class","svelte-1aka4sj"),h(i,"href",s[3]),h(i,"class","svelte-1aka4sj"),h(a,"class","form-block svelte-1aka4sj"),h(e,"class",f="shadow-line "+(s[1]&&"image-mode")+" svelte-1aka4sj"),h(e,"style",k=s[1]?`${s[8]}`:"")},m(c,m){A(c,e,m),g(e,t),g(t,o),g(e,r),u&&u.m(e,null),g(e,l),g(e,a),g(a,i),g(i,n),g(a,p),v&&v.m(a,null),_||(S=q(e,"click",s[11]),_=!0)},p(c,[m]){m&1&&ge(o,c[0]),c[1]?u&&(u.d(1),u=null):u?u.p(c,m):(u=Re(c),u.c(),u.m(e,l)),m&8&&h(i,"href",c[3]),c[7]?v?m&128&&F(v,1):(v=qe(),v.c(),F(v,1),v.m(a,null)):v&&(Se(),L(v,1,1,()=>{v=null}),Ee()),m&2&&f!==(f="shadow-line "+(c[1]&&"image-mode")+" svelte-1aka4sj")&&h(e,"class",f),m&258&&k!==(k=c[1]?`${c[8]}`:"")&&h(e,"style",k)},i(c){F(v)},o(c){L(v)},d(c){c&&b(e),u&&u.d(),v&&v.d(),_=!1,S()}}}function ct(s,e,t){let o;const{copyToClipboard:r}=it;let{id:l}=e,{imageMode:a=!1}=e,{shadow:i}=e,{source:n}=e,{text:p}=e,{mainTextColor:f}=e,{leftGradColor:k}=e,{rightGradColor:_}=e,S=!1;function u(c){r(`text-shadow: ${c}`),t(7,S=!0),setTimeout(()=>{t(7,S=!1)},1e3)}const v=()=>u(i);return s.$$set=c=>{"id"in c&&t(0,l=c.id),"imageMode"in c&&t(1,a=c.imageMode),"shadow"in c&&t(2,i=c.shadow),"source"in c&&t(3,n=c.source),"text"in c&&t(4,p=c.text),"mainTextColor"in c&&t(10,f=c.mainTextColor),"leftGradColor"in c&&t(5,k=c.leftGradColor),"rightGradColor"in c&&t(6,_=c.rightGradColor)},s.$$.update=()=>{s.$$.dirty&1028&&t(8,o=`text-shadow: ${i}color: ${f}`)},[l,a,i,n,p,k,_,S,o,u,f,v]}class ht extends oe{constructor(e){super(),re(this,e,ct,nt,se,{id:0,imageMode:1,shadow:2,source:3,text:4,mainTextColor:10,leftGradColor:5,rightGradColor:6})}}const dt=[{source:"https://www.nytimes.com/interactive/2020/04/11/business/economy/coronavirus-us-economy-spending.html ",shadow:"#000000 2px 0px 0px, #000000 1.75517px 0.958851px 0px, #000000 1.0806px 1.68294px 0px, #000000 0.141474px 1.99499px 0px, #000000 -0.832294px 1.81859px 0px, #000000 -1.60229px 1.19694px 0px, #000000 -1.97998px 0.28224px 0px, #000000 -1.87291px -0.701566px 0px, #000000 -1.30729px -1.5136px 0px, #000000 -0.421592px -1.95506px 0px, #000000 0.567324px -1.91785px 0px, #000000 1.41734px -1.41108px 0px, #000000 1.92034px -0.558831px 0px;",id:"Vegan cheese"},{source:"https://www.nytimes.com/interactive/2021/09/15/nyregion/empire-state-building-reopening-new-york.html ",shadow:"1px 1px 1px rgb(0 0 0 / 90%), 1px -1px 1px rgb(0 0 0 / 90%), -1px 1px 1px rgb(0 0 0 / 90%), -1px -1px 1px rgb(0 0 0 / 90%);",id:"Gouda"},{source:"https://www.nytimes.com/interactive/2021/12/11/us/tornado-maps-damage.html ",shadow:"0px 0px 3px #000000, 0px 0px 3px #000000, 0px 0px 3px #000000;",id:"Cheddar"},{source:"https://meet.google.com/ ",shadow:"0 1px 2px rgb(0 0 0 / 60%), 0 0 2px rgb(0 0 0 / 30%);",id:"Parmesan"},{shadow:"0px 0px 1px #000000, 0px 0px 2px #000000, 0px 0px 3px #000000, 0px 0px 4px #000000;",source:"https://www.nytimes.com/interactive/2022/world/europe/ukraine-maps.html",id:"Brie"},{source:"https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ",shadow:"0 0 2px #000000, 0 0 2px rgb(0 0 0 / 80%), 0 0 2px rgb(0 0 0 / 50%);",id:"Roquefort"},{source:"https://www.bloomberg.com/graphics/2021-palm-oil-deforestation-climate-change/ ",shadow:"#000000 1px 0px 0px, #000000 0.540302px 0.841471px 0px, #000000 -0.416147px 0.909297px 0px, #000000 -0.989992px 0.14112px 0px, #000000 -0.653644px -0.756802px 0px, #000000 0.283662px -0.958924px 0px, #000000 0.96017px -0.279415px 0px;",id:"Manchego"},{source:"https://projects.propublica.org/toxmap/ ",shadow:"0 0 10px #000000, 0 0 10px #000000;",id:"Mozzarella"},{source:"https://elpais.com/clima-y-medio-ambiente/2021-01-26/asi-es-belchatow-la-enorme-central-polaca-de-carbon-que-mas-co-emite-en-la-ue.html?target=_blank",shadow:"-1px 0 #000000, 0 1px #000000, 1px 0 #000000, 0 -1px #000000;",id:"Emmental"},{source:"https://www.nytimes.com/interactive/2020/09/24/climate/fires-worst-year-california-oregon-washington.html ",shadow:"#000000 0px 0px 3px, #000000 0px 0px 3px;",id:"Gorgonzola"},{source:"https://www.nytimes.com/interactive/2020/07/18/world/asia/china-india-border-conflict.html ",shadow:"0 0 10px rgb(0 0 0 / 50%), 0 0 3px #000000;",id:"Feta"},{source:"https://www.nytimes.com/interactive/2019/07/19/us/california-earthquakes.html ",shadow:"1px 1px 0px rgb(0 0 0 / 70%), 0px 1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), -1px 0px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), 0px -1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);",id:"Provolone"},{source:"https://www.nytimes.com/interactive/2019/09/11/us/midwest-flooding.html ",shadow:"0 0 4px rgb(0 0 0 / 70%);",id:"Havarti"},{source:"https://www.nytimes.com/interactive/2019/02/09/world/americas/brazil-dam-collapse.html ",shadow:"1px 1px 3px #000000;",id:"Camembert"},{source:"https://www.nytimes.com/interactive/2020/08/04/world/middleeast/beirut-explosion-damage.html ",shadow:"rgb(0 0 0 / 30%) 0.5px 0px 0px, rgb(0 0 0 / 30%) 0.540302px 0.841471px 0px, rgb(0 0 0 / 30%) -0.416147px 0.909297px 0px, rgb(0 0 0 / 30%) -0.989992px 0.14112px 0px, rgb(0 0 0 / 30%) -0.653644px -0.756802px 0px, rgb(0 0 0 / 30%) 0.283662px -0.958924px 0px, rgb(0 0 0 / 30%) 0.96017px -0.279415px 0px;",id:"Asiago"},{source:"https://www.nytimes.com/interactive/2020/10/03/us/rose-garden-event-covid.html ",shadow:"1px 1px 3px rgb(0 0 0 / 30%), -1px 1px 3px rgb(0 0 0 / 30%), 1px -1px 3px rgb(0 0 0 / 30%), -1px -1px 3px rgb(0 0 0 / 30%);",id:"Edam"},{source:"https://graphics.reuters.com/AFGHANISTAN-CONFLICT/KABUL-AIRPORT/movannkgkpa/ ",shadow:"1px 1px 1px rgb(0 0 0 / 70%), -1px -1px 1px rgb(0 0 0 / 70%), 1px -1px 1px rgb(0 0 0 / 70%), -1px 1px 1px rgb(0 0 0 / 70%);",id:"Colby"},{source:"https://www.washingtonpost.com/nation/interactive/2021/weather-disasters-2021 ",shadow:"-2px 2px 6px #000000, 0 0 2px #000000, 2px 2px 6px #000000;",id:"Fontina"},{source:"https://www.nytimes.com/interactive/2020/06/03/us/minneapolis-police-use-of-force.html ",shadow:"1px 1px 1px rgb(0 0 0 / 30%), -1px 1px 1px rgb(0 0 0 / 30%), 1px -1px 1px rgb(0 0 0 / 30%), -1px -1px 1px rgb(0 0 0 / 30%), 2px 2px 2px rgb(0 0 0 / 30%), -2px 2px 2px rgb(0 0 0 / 30%), 2px -2px 2px rgb(0 0 0 / 30%), -2px -2px 2px rgb(0 0 0 / 30%);",id:"Monterey Jack"},{source:"https://www.nytimes.com/interactive/2020/02/01/us/politics/democratic-presidential-campaign-donors.html ",shadow:"0px 0px 3px #000000, 0px 0px 5px #000000, 0px 0px 10px #000000;",id:"Ricotta"},{source:"https://www.nytimes.com/interactive/2019/06/18/upshot/cities-across-america-question-single-family-zoning.html ",shadow:"0 1px 0 #000000, 1px 0 0 #000000, 0 -1px 0 #000000, -1px 0 0 #000000 !important;",id:"Stilton"},{source:"https://www.nytimes.com/interactive/2019/03/11/world/boeing-737-max-which-airlines.html ",shadow:"0px 0px 5px #000000, 0px 0px 5px #000000;",id:"Taleggio"},{source:"https://www.nytimes.com/interactive/2020/09/21/us/covid-schools.html ",shadow:"1px -1px 0 #000000, 1px -1px 0 #000000, -1px 1px 0 #000000, 1px 1px 0 #000000;",id:"Cotija"},{source:"https://www.nytimes.com/2022/02/07/us/tsunami-northwest-evacuation-towers.html",shadow:"0px 0px 2px #000000;",id:"Halloumi"},{source:"https://www.washingtonpost.com/graphics/2017/national/harvey/ ",shadow:"1px 1px 0px rgb(0 0 0 / 70%), -1px -1px 0px rgb(0 0 0 / 70%), -1px 1px 0px rgb(0 0 0 / 70%), 1px -1px 0px rgb(0 0 0 / 70%);",id:"Pecorino"},{shadow:"1px 1px 2px rgb(0 0 0 / 50%);",source:"https://graphics.reuters.com/CHINA-CRASH/akpezjzxlvr/index.html",id:"Burrata"}],Be=[...new Map(dt.map(s=>[s.shadow,s])).values()],pe=["Queso cheeseburger boursin gouda cheesy grin bocconcini bavarian bergkase bavarian bergkase","Goat paneer cheese triangles cheese on toast rubber cheese halloumi caerphilly cheeseburger","Emmental taleggio blue castello port-salut cheese strings cheesy feet dolcelatte say cheese","Swiss lancashire cut the cheese stinking bishop melted cheese lancashire swiss cheeseburger","Bocconcini cheesecake red leicester bocconcini gouda croque monsieur dolcelatte pepper jack","Airedale swiss lancashire fondue macaroni cheese bavarian bergkase lancashire cheese slices","Agur blue cheese rubber cheese the big cheese edam mozzarella airedale cheese strings queso","Fondue taleggio the big cheese paneer cheese strings port-salut danish fontina cream cheese","Cheese triangles emmental gouda monterey jack the big cheese smelly cheese stilton emmental","Cottage cheese danish fontina cheesecake cow cow chalk and cheese cheesy feet red leicester","Camembert de normandie halloumi the big cheese boursin edam say cheese cheeseburger ricotta","Dolcelatte boursin cheesy feet manchego stinking bishop brie chalk and cheese red leicester","Feta pepper jack everyone loves cheeseburger ricotta cream cheese cheesy grin monterey jack","Gouda halloumi fromage stilton when the cheese comes out everybody's happy rubber cheese st","Airedale rubber cheese squirty cheese cheese and biscuits edam cottage cheese goat parmesan","Camembert de normandie croque monsieur taleggio mascarpone taleggio swiss cheddar roquefort","Gouda croque monsieur caerphilly cheese on toast goat manchego cheese triangles pepper jack","Taleggio cut the cheese cheese slices the big cheese rubber cheese mascarpone fromage frais","Chalk and cheese brie blue castello cream cheese cream cheese pecorino croque monsieur feta","Ricotta cauliflower cheese paneer feta babybel monterey jack danish fontina macaroni cheese","Pecorino manchego cheeseburger edam bavarian bergkase cheesecake stinking bishop mozzarella","Cut the cheese who moved my cheese cow jarlsberg dolcelatte ricotta cheesy grin cheesy grin","Port-salut cheeseburger ricotta say cheese blue castello pepper jack parmesan smelly cheese","Parmesan cheesecake swiss smelly cheese hard cheese smelly cheese squirty cheese mascarpone","Cheesy feet danish fontina chalk and cheese pecorino swiss fromage cheese slices say cheese","Agur blue cheese bavarian bergkase everyone loves croque monsieur cheese slices cheesy grin","Cheese and wine halloumi cheesy grin ricotta cheesecake cheesecake mozzarella fromage frais","Cheese on toast who moved my cheese airedale dolcelatte parmesan say cheese mozzarella goat","Cheddar taleggio chalk and cheese fromage feta chalk and cheese cheese and biscuits stilton"],Ne=s=>JSON.parse(JSON.stringify(s));function pt(){const{subscribe:s,set:e,update:t}=Ye(Ne(Be));return{subscribe:s,set:e,update:t,reset:()=>e(Ne(Be))}}const ne=pt(),Ce=Ye("");function ut(s){let e,t,o,r,l,a;return{c(){e=y("label"),t=W(s[1]),o=W(`:
	`),r=y("input"),this.h()},l(i){e=C(i,"LABEL",{disabled:!0});var n=T(e);t=J(n,s[1]),o=J(n,`:
	`),r=C(n,"INPUT",{style:!0,type:!0,class:!0}),n.forEach(b),this.h()},h(){Me(r,"height","20px"),Me(r,"width","30px"),h(r,"type","color"),r.disabled=s[2],h(r,"class","svelte-1wlq98v"),h(e,"disabled",s[2])},m(i,n){A(i,e,n),g(e,t),g(e,o),g(e,r),Ae(r,s[0]),l||(a=[q(r,"input",s[3]),q(r,"change",s[4]),q(r,"input",s[5])],l=!0)},p(i,[n]){n&2&&ge(t,i[1]),n&4&&(r.disabled=i[2]),n&1&&Ae(r,i[0]),n&4&&h(e,"disabled",i[2])},i:$,o:$,d(i){i&&b(e),l=!1,fe(a)}}}function ft(s,e,t){let{color:o="#000000"}=e,{label:r=""}=e,{disabled:l=!1}=e;function a(p){xe.call(this,s,p)}function i(p){xe.call(this,s,p)}function n(){o=this.value,t(0,o)}return s.$$set=p=>{"color"in p&&t(0,o=p.color),"label"in p&&t(1,r=p.label),"disabled"in p&&t(2,l=p.disabled)},[o,r,l,a,i,n]}class ue extends oe{constructor(e){super(),re(this,e,ft,ut,se,{color:0,label:1,disabled:2})}}function gt(s){let e,t,o,r,l,a,i,n,p,f,k,_,S,u,v,c,m,D,j,I,w,x,d,E,z,P,ee="Reset",B,te,ce;function me(G){s[9](G)}let he={label:"Text color"};s[0]!==void 0&&(he.color=s[0]),r=new ue({props:he}),N.push(()=>U(r,"color",me));function ve(G){s[10](G)}let Te={label:"Shadow color"};s[1]!==void 0&&(Te.color=s[1]),n=new ue({props:Te}),N.push(()=>U(n,"color",ve)),n.$on("input",s[7]),n.$on("change",s[7]);function et(G){s[11](G)}let je={label:"Left gradient"};s[2]!==void 0&&(je.color=s[2]),_=new ue({props:je}),N.push(()=>U(_,"color",et));function tt(G){s[12](G)}let Ie={label:"Right gradient"};return s[3]!==void 0&&(Ie.color=s[3]),c=new ue({props:Ie}),N.push(()=>U(c,"color",tt)),{c(){e=y("div"),t=y("div"),o=y("div"),K(r.$$.fragment),a=V(),i=y("div"),K(n.$$.fragment),f=V(),k=y("div"),K(_.$$.fragment),u=V(),v=y("div"),K(c.$$.fragment),D=V(),j=y("div"),I=y("label"),w=W("Invert shadow"),x=y("input"),d=V(),E=y("div"),z=y("div"),P=y("button"),P.textContent=ee,this.h()},l(G){e=C(G,"DIV",{class:!0});var R=T(e);t=C(R,"DIV",{class:!0});var H=T(t);o=C(H,"DIV",{class:!0});var ae=T(o);Q(r.$$.fragment,ae),ae.forEach(b),a=M(H),i=C(H,"DIV",{class:!0});var le=T(i);Q(n.$$.fragment,le),le.forEach(b),f=M(H),k=C(H,"DIV",{class:!0});var ie=T(k);Q(_.$$.fragment,ie),ie.forEach(b),u=M(H),v=C(H,"DIV",{class:!0});var Ge=T(v);Q(c.$$.fragment,Ge),Ge.forEach(b),D=M(H),j=C(H,"DIV",{class:!0});var De=T(j);I=C(De,"LABEL",{class:!0});var we=T(I);w=J(we,"Invert shadow"),x=C(we,"INPUT",{type:!0,name:!0,class:!0}),we.forEach(b),De.forEach(b),H.forEach(b),d=M(R),E=C(R,"DIV",{class:!0});var ze=T(E);z=C(ze,"DIV",{class:!0});var Ve=T(z);P=C(Ve,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(P)!=="svelte-rhidub"&&(P.textContent=ee),Ve.forEach(b),ze.forEach(b),R.forEach(b),this.h()},h(){h(o,"class","filter svelte-pwdjvk"),h(i,"class","filter svelte-pwdjvk"),h(k,"class","filter svelte-pwdjvk"),h(v,"class","filter svelte-pwdjvk"),h(x,"type","checkbox"),h(x,"name",""),x.checked=s[4],h(x,"class","svelte-pwdjvk"),h(I,"class","svelte-pwdjvk"),h(j,"class","filter svelte-pwdjvk"),h(t,"class","row svelte-pwdjvk"),h(P,"class","svelte-pwdjvk"),h(z,"class","filter button svelte-pwdjvk"),h(E,"class","row reset svelte-pwdjvk"),h(e,"class","form svelte-pwdjvk")},m(G,R){A(G,e,R),g(e,t),g(t,o),X(r,o,null),g(t,a),g(t,i),X(n,i,null),g(t,f),g(t,k),X(_,k,null),g(t,u),g(t,v),X(c,v,null),g(t,D),g(t,j),g(j,I),g(I,w),g(I,x),g(e,d),g(e,E),g(E,z),g(z,P),B=!0,te||(ce=[q(x,"click",s[13]),q(P,"click",s[14])],te=!0)},p(G,[R]){const H={};!l&&R&1&&(l=!0,H.color=G[0],O(()=>l=!1)),r.$set(H);const ae={};!p&&R&2&&(p=!0,ae.color=G[1],O(()=>p=!1)),n.$set(ae);const le={};!S&&R&4&&(S=!0,le.color=G[2],O(()=>S=!1)),_.$set(le);const ie={};!m&&R&8&&(m=!0,ie.color=G[3],O(()=>m=!1)),c.$set(ie),(!B||R&16)&&(x.checked=G[4])},i(G){B||(F(r.$$.fragment,G),F(n.$$.fragment,G),F(_.$$.fragment,G),F(c.$$.fragment,G),B=!0)},o(G){L(r.$$.fragment,G),L(n.$$.fragment,G),L(_.$$.fragment,G),L(c.$$.fragment,G),B=!1},d(G){G&&b(e),Z(r),Z(n),Z(_),Z(c),te=!1,fe(ce)}}}function mt(s){s=s.replace("#",""),s.length===3&&(s=s.split("").map(function(l){return l+l}).join(""));var e=parseInt(s,16),t=e>>16&255,o=e>>8&255,r=e&255;return[t,o,r]}function vt(s){const e=s.match(/#[0-9a-fA-F]{3,6}|rgb\(\d+\s+\d+\s+\d+\s*\/\s*\d+(\.\d+)?%?\)/g);if(!e)return null;const t=e.map(r=>{if(r.startsWith("#"))return"#"+(16777215-parseInt(r.slice(1),16)).toString(16).padStart(6,"0");if(r.startsWith("rgb")){const l=r.match(/\d+(\.\d+)?%?/g),a=l.pop();return`rgb(${l.map(n=>255-parseFloat(n)).join(" ")} / ${a})`}});let o=s;return e.forEach((r,l)=>{o=o.replace(r,t[l])}),o}function Oe(s){if(s.indexOf("#")===0&&(s=s.slice(1)),s.length===3&&(s=s.split("").map(function(r){return r+r}).join("")),s.length!==6)throw new Error("Invalid HEX color.");var e=(255-parseInt(s.slice(0,2),16)).toString(16),t=(255-parseInt(s.slice(2,4),16)).toString(16),o=(255-parseInt(s.slice(4,6),16)).toString(16);return"#"+String(e).padStart(2,"0")+String(t).padStart(2,"0")+String(o).padStart(2,"0")}function wt(s,e,t){let o,r;ke(s,ne,d=>t(15,r=d));let{mainTextColor:l}=e,{mainShadowColor:a}=e,{leftGradColor:i}=e,{rightGradColor:n}=e,{invert:p=!1}=e;function f(){t(0,l=Ke),t(2,i=Qe),t(3,n=Xe),t(1,a=Ze),t(8,p=!1),ne.reset()}function k(){v(),S(),_()}function _(){t(1,a=Oe(a))}function S(){t(0,l=Oe(l))}function u(){const d=[...r].map((E,z)=>(E.shadow=c(E.shadow),E));ne.update(()=>d)}function v(){const d=[...r].map((E,z)=>(E.shadowSource===void 0&&(E.shadowSource=E.shadow),p===!1?E.shadow=vt(E.shadow):E.shadow=E.shadowSource,E));ne.update(()=>d),t(8,p=!p)}function c(d){const E=a,z=d.match(/#[0-9a-fA-F]{3,6}|rgb\(\d+\s+\d+\s+\d+\s*\/\s*\d+(\.\d+)?%?\)/g);if(!z)return null;const P=z.map(B=>{if(B.startsWith("#"))return E;if(B.startsWith("rgb")){const ce=B.match(/\d+(\.\d+)?%?/g).pop(),[me,he,ve]=mt(E);return`rgb(${me} ${he} ${ve} / ${ce})`}});let ee=d;return z.forEach((B,te)=>{ee=ee.replace(B,P[te])}),ee}function m(d){l=d,t(0,l)}function D(d){a=d,t(1,a)}function j(d){i=d,t(2,i)}function I(d){n=d,t(3,n)}const w=d=>k(),x=()=>f();return s.$$set=d=>{"mainTextColor"in d&&t(0,l=d.mainTextColor),"mainShadowColor"in d&&t(1,a=d.mainShadowColor),"leftGradColor"in d&&t(2,i=d.leftGradColor),"rightGradColor"in d&&t(3,n=d.rightGradColor),"invert"in d&&t(8,p=d.invert)},s.$$.update=()=>{s.$$.dirty&256&&t(4,o=p)},[l,a,i,n,o,f,k,u,p,m,D,j,I,w,x]}class bt extends oe{constructor(e){super(),re(this,e,wt,gt,se,{mainTextColor:0,mainShadowColor:1,leftGradColor:2,rightGradColor:3,invert:8})}}function Ue(s,e,t){const o=s.slice();return o[14]=e[t].shadow,o[15]=e[t].source,o[16]=e[t].id,o[18]=t,o}function We(s,e){let t,o,r,l;return o=new ht({props:{imageMode:e[5],id:e[16],mainTextColor:e[0],leftGradColor:e[1],rightGradColor:e[2],shadow:e[14],source:e[15],text:pe[e[18]]||pe[0]}}),{key:s,first:null,c(){t=y("div"),K(o.$$.fragment),r=V(),this.h()},l(a){t=C(a,"DIV",{class:!0});var i=T(t);Q(o.$$.fragment,i),r=M(i),i.forEach(b),this.h()},h(){h(t,"class","shadow-item svelte-190mnan"),Pe(t,"list",e[5]),this.first=t},m(a,i){A(a,t,i),X(o,t,null),g(t,r),l=!0},p(a,i){e=a;const n={};i&32&&(n.imageMode=e[5]),i&128&&(n.id=e[16]),i&1&&(n.mainTextColor=e[0]),i&2&&(n.leftGradColor=e[1]),i&4&&(n.rightGradColor=e[2]),i&128&&(n.shadow=e[14]),i&128&&(n.source=e[15]),i&128&&(n.text=pe[e[18]]||pe[0]),o.$set(n),(!l||i&32)&&Pe(t,"list",e[5])},i(a){l||(F(o.$$.fragment,a),l=!0)},o(a){L(o.$$.fragment,a),l=!1},d(a){a&&b(t),Z(o)}}}function _t(s){let e,t,o,r,l,a,i,n,p,f=[],k=new Map,_;function S(w){s[9](w)}function u(w){s[10](w)}function v(w){s[11](w)}function c(w){s[12](w)}function m(w){s[13](w)}let D={};s[4]!==void 0&&(D.invert=s[4]),s[3]!==void 0&&(D.mainShadowColor=s[3]),s[0]!==void 0&&(D.mainTextColor=s[0]),s[1]!==void 0&&(D.leftGradColor=s[1]),s[2]!==void 0&&(D.rightGradColor=s[2]),t=new bt({props:D}),N.push(()=>U(t,"invert",S)),N.push(()=>U(t,"mainShadowColor",u)),N.push(()=>U(t,"mainTextColor",v)),N.push(()=>U(t,"leftGradColor",c)),N.push(()=>U(t,"rightGradColor",m));let j=Le(s[7]);const I=w=>w[16];for(let w=0;w<j.length;w+=1){let x=Ue(s,j,w),d=I(x);k.set(d,f[w]=We(d,x))}return{c(){e=y("div"),K(t.$$.fragment),n=V(),p=y("div");for(let w=0;w<f.length;w+=1)f[w].c();this.h()},l(w){e=C(w,"DIV",{class:!0});var x=T(e);Q(t.$$.fragment,x),n=M(x),p=C(x,"DIV",{class:!0,style:!0});var d=T(p);for(let E=0;E<f.length;E+=1)f[E].l(d);d.forEach(b),x.forEach(b),this.h()},h(){h(p,"class","shadows-list svelte-190mnan"),h(p,"style",s[6]),h(e,"class","shadows")},m(w,x){A(w,e,x),X(t,e,null),g(e,n),g(e,p);for(let d=0;d<f.length;d+=1)f[d]&&f[d].m(p,null);_=!0},p(w,[x]){const d={};!o&&x&16&&(o=!0,d.invert=w[4],O(()=>o=!1)),!r&&x&8&&(r=!0,d.mainShadowColor=w[3],O(()=>r=!1)),!l&&x&1&&(l=!0,d.mainTextColor=w[0],O(()=>l=!1)),!a&&x&2&&(a=!0,d.leftGradColor=w[1],O(()=>a=!1)),!i&&x&4&&(i=!0,d.rightGradColor=w[2],O(()=>i=!1)),t.$set(d),x&167&&(j=Le(w[7]),Se(),f=at(f,x,I,1,w,j,k,p,rt,We,null,Ue),Ee()),(!_||x&64)&&h(p,"style",w[6])},i(w){if(!_){F(t.$$.fragment,w);for(let x=0;x<j.length;x+=1)F(f[x]);_=!0}},o(w){L(t.$$.fragment,w);for(let x=0;x<f.length;x+=1)L(f[x]);_=!1},d(w){w&&b(e),Z(t);for(let x=0;x<f.length;x+=1)f[x].d()}}}function xt(s,e,t){let o,r,l,a;ke(s,Ce,m=>t(8,l=m)),ke(s,ne,m=>t(7,a=m));let i=Ke,n=Qe,p=Xe,f=Ze,k=!1;function _(m){k=m,t(4,k)}function S(m){f=m,t(3,f)}function u(m){i=m,t(0,i)}function v(m){n=m,t(1,n)}function c(m){p=m,t(2,p)}return s.$$.update=()=>{s.$$.dirty&256&&t(6,o=`background-image: url("${l}");`),s.$$.dirty&256&&t(5,r=l!=="")},[i,n,p,f,k,r,o,a,l,_,S,u,v,c]}class kt extends oe{constructor(e){super(),re(this,e,xt,_t,se,{})}}function yt(s){let e,t="Error while reading the file",o,r,l="please upload a valid image";return{c(){e=y("div"),e.textContent=t,o=V(),r=y("div"),r.textContent=l,this.h()},l(a){e=C(a,"DIV",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-ppfiln"&&(e.textContent=t),o=M(a),r=C(a,"DIV",{class:!0,"data-svelte-h":!0}),Y(r)!=="svelte-12lghyb"&&(r.textContent=l),this.h()},h(){h(e,"class","drag-error-title svelte-11o34tz"),h(r,"class","drag-error-hint svelte-11o34tz")},m(a,i){A(a,e,i),A(a,o,i),A(a,r,i)},p:$,d(a){a&&(b(e),b(o),b(r))}}}function Ct(s){let e,t,o=s[2].name+"",r,l,a,i="Remove",n,p;return{c(){e=y("div"),t=y("div"),r=W(o),l=V(),a=y("button"),a.textContent=i,this.h()},l(f){e=C(f,"DIV",{class:!0});var k=T(e);t=C(k,"DIV",{class:!0});var _=T(t);r=J(_,o),_.forEach(b),l=M(k),a=C(k,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(a)!=="svelte-1ij95nz"&&(a.textContent=i),k.forEach(b),this.h()},h(){h(t,"class","drag-filename svelte-11o34tz"),h(a,"class","svelte-11o34tz"),h(e,"class","svelte-11o34tz")},m(f,k){A(f,e,k),g(e,t),g(t,r),g(e,l),g(e,a),n||(p=q(a,"click",ye(s[6])),n=!0)},p(f,k){k&4&&o!==(o=f[2].name+"")&&ge(r,o)},d(f){f&&b(e),n=!1,p()}}}function St(s){let e,t,o,r;const l=[Tt,Et],a=[];function i(n,p){return n[3]?0:1}return o=i(s),r=a[o]=l[o](s),{c(){e=y("div"),t=y("div"),r.c(),this.h()},l(n){e=C(n,"DIV",{class:!0});var p=T(e);t=C(p,"DIV",{class:!0});var f=T(t);r.l(f),f.forEach(b),p.forEach(b),this.h()},h(){h(t,"class","drag-callout-title svelte-11o34tz"),h(e,"class","drag-callout svelte-11o34tz")},m(n,p){A(n,e,p),g(e,t),a[o].m(t,null)},p(n,p){let f=o;o=i(n),o!==f&&(Se(),L(a[f],1,1,()=>{a[f]=null}),Ee(),r=a[o],r||(r=a[o]=l[o](n),r.c()),F(r,1),r.m(t,null))},d(n){n&&b(e),a[o].d()}}}function Et(s){let e,t,o,r,l,a='Drop your image or <span class="underline svelte-11o34tz">select it</span>';return{c(){e=be("svg"),t=be("path"),o=be("path"),r=V(),l=y("div"),l.innerHTML=a,this.h()},l(i){e=_e(i,"svg",{class:!0,xmlns:!0,height:!0,viewBox:!0,width:!0});var n=T(e);t=_e(n,"path",{d:!0,fill:!0}),T(t).forEach(b),o=_e(n,"path",{d:!0}),T(o).forEach(b),n.forEach(b),r=M(i),l=C(i,"DIV",{class:!0,"data-svelte-h":!0}),Y(l)!=="svelte-1s166ab"&&(l.innerHTML=a),this.h()},h(){h(t,"d","M0 0h24v24H0z"),h(t,"fill","none"),h(o,"d","M5 4v2h14V4H5zm0 10h4v6h6v-6h4l-7-7-7 7z"),h(e,"class","drag-icon"),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"height","24"),h(e,"viewBox","0 0 24 24"),h(e,"width","24"),h(l,"class","svelte-11o34tz")},m(i,n){A(i,e,n),g(e,t),g(e,o),A(i,r,n),A(i,l,n)},i:$,o:$,d(i){i&&(b(e),b(r),b(l))}}}function Tt(s){let e,t='Loading<span class="svelte-11o34tz">.</span><span class="svelte-11o34tz">.</span><span class="svelte-11o34tz">.</span>',o,r;return{c(){e=y("div"),e.innerHTML=t,this.h()},l(l){e=C(l,"DIV",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-lbx8aj"&&(e.innerHTML=t),this.h()},h(){h(e,"class","loading-msg svelte-11o34tz")},m(l,a){A(l,e,a),r=!0},i(l){r||(o&&o.end(1),r=!0)},o(l){l&&(o=Je(e,$e,{duration:1e3})),r=!1},d(l){l&&b(e),l&&o&&o.end()}}}function jt(s){let e,t,o,r,l,a,i,n,p,f;function k(u,v){return u[4]&&!u[5]?St:u[5]?Ct:yt}let _=k(s),S=_(s);return{c(){e=y("div"),t=y("form"),o=y("div"),r=y("input"),l=V(),a=y("label"),S.c(),this.h()},l(u){e=C(u,"DIV",{class:!0});var v=T(e);t=C(v,"FORM",{class:!0,method:!0,enctype:!0});var c=T(t);o=C(c,"DIV",{class:!0});var m=T(o);r=C(m,"INPUT",{id:!0,class:!0,accept:!0,type:!0}),l=M(m),a=C(m,"LABEL",{for:!0,class:!0});var D=T(a);S.l(D),D.forEach(b),m.forEach(b),c.forEach(b),v.forEach(b),this.h()},h(){h(r,"id","file"),h(r,"class","drag-file svelte-11o34tz"),h(r,"accept","text"),h(r,"type","file"),h(a,"for","file"),h(a,"class","svelte-11o34tz"),h(o,"class",i=de(["drag-input",s[5]?"is-uploaded":""].join(" "))+" svelte-11o34tz"),h(t,"class",n=de(["drag",s[1]?"is-dragging":""].join(" "))+" svelte-11o34tz"),h(t,"method","post"),h(t,"enctype","multipart/form-data"),h(e,"class","data-input svelte-11o34tz")},m(u,v){A(u,e,v),g(e,t),g(t,o),g(o,r),g(o,l),g(o,a),S.m(a,null),p||(f=[q(r,"change",s[9]),q(t,"dragover",ye(s[8])),q(t,"dragenter",s[10]),q(t,"dragleave",s[11]),q(t,"drop",ot(ye(s[7])))],p=!0)},p(u,[v]){_===(_=k(u))&&S?S.p(u,v):(S.d(1),S=_(u),S&&(S.c(),S.m(a,null))),v&32&&i!==(i=de(["drag-input",u[5]?"is-uploaded":""].join(" "))+" svelte-11o34tz")&&h(o,"class",i),v&2&&n!==(n=de(["drag",u[1]?"is-dragging":""].join(" "))+" svelte-11o34tz")&&h(t,"class",n)},i:$,o:$,d(u){u&&b(e),S.d(),p=!1,fe(f)}}}function It(s,e,t){let o,r,l=!1,a,i,n=!1;function p(){Ce.set(""),t(5,r=!1)}function f(c){const[m]=c.dataTransfer.files;k(m)}function k(c){const m=new FileReader;if(c.type.match("image")){t(3,n=!0),m.onload=()=>{t(5,r=!0),t(2,i=c),Ce.set(m.result),t(3,n=!1)},m.readAsDataURL(c);return}else t(5,r=!1),t(4,o=!1)}function _(c){xe.call(this,s,c)}function S(){a=this.files,t(0,a)}const u=()=>t(1,l=!0),v=()=>t(1,l=!1);return s.$$.update=()=>{if(s.$$.dirty&1&&a){const[c]=a;k(c)}},t(4,o=!0),t(5,r=!1),[a,l,i,n,o,r,p,f,_,S,u,v]}class Gt extends oe{constructor(e){super(),re(this,e,It,jt,se,{})}}function Dt(s){let e,t,o,r,l,a,i,n,p,f,k,_=`Optionally, you can upload an image, for example a satellite image or a map, to find the shadow
		that best suits your needs.`,S,u,v,c,m=`<p>This shadows have been collected from media like The New York Times, Washington Post, Reuters
			Graphics, Propublica, Bloomberg or El País. Some of them have been slightly modified to fit
			the default black/white scheme. This feature is especially useful in combination with <a href="http://ai2html.org/">ai2html</a> or for highlighting text on any kind of graphic, map or photo.</p> <p>You can change text color or shadow color, the background or even invert that configuration.
			Click on a shadow block to copy that shadow to your clipboard.</p> <p>Feel free to suggest your own shadows to make this collection bigger or make a <a href="https://github.com/luissevillano/cheesy-shadow-picker">fork</a> to improve it.</p>`,D;return p=new kt({}),u=new Gt({}),{c(){e=y("main"),t=y("header"),o=y("h1"),r=W(Fe),l=V(),a=y("h3"),i=W(He),n=V(),K(p.$$.fragment),f=V(),k=y("p"),k.textContent=_,S=V(),K(u.$$.fragment),v=V(),c=y("div"),c.innerHTML=m,this.h()},l(j){e=C(j,"MAIN",{class:!0});var I=T(e);t=C(I,"HEADER",{class:!0});var w=T(t);o=C(w,"H1",{class:!0});var x=T(o);r=J(x,Fe),x.forEach(b),l=M(w),a=C(w,"H3",{class:!0});var d=T(a);i=J(d,He),d.forEach(b),w.forEach(b),n=M(I),Q(p.$$.fragment,I),f=M(I),k=C(I,"P",{"data-svelte-h":!0}),Y(k)!=="svelte-afljdg"&&(k.textContent=_),S=M(I),Q(u.$$.fragment,I),v=M(I),c=C(I,"DIV",{class:!0,"data-svelte-h":!0}),Y(c)!=="svelte-15a9bmf"&&(c.innerHTML=m),I.forEach(b),this.h()},h(){h(o,"class","svelte-r9swyj"),h(a,"class","svelte-r9swyj"),h(t,"class","svelte-r9swyj"),h(c,"class","svelte-r9swyj"),h(e,"class","svelte-r9swyj")},m(j,I){A(j,e,I),g(e,t),g(t,o),g(o,r),g(t,l),g(t,a),g(a,i),g(e,n),X(p,e,null),g(e,f),g(e,k),g(e,S),X(u,e,null),g(e,v),g(e,c),D=!0},p:$,i(j){D||(F(p.$$.fragment,j),F(u.$$.fragment,j),D=!0)},o(j){L(p.$$.fragment,j),L(u.$$.fragment,j),D=!1},d(j){j&&b(e),Z(p),Z(u)}}}class Pt extends oe{constructor(e){super(),re(this,e,null,Dt,se,{})}}export{Pt as component};
