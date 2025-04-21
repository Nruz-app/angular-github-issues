import{$ as uo,A as eo,C as _,D as Cn,E as to,F as A,G as I,H as no,I as ro,J as Kt,K as k,L as Ee,M as Wn,N as oo,O as io,P as so,Q as It,R as lo,S as ao,T as Dt,U as co,V as tn,W as Sn,X as kn,Y as Qn,_ as En,a as Hn,b as jn,c as z,d as jr,e as N,f as B,g as M,h as Wr,i as At,j as Je,k as bt,l as U,m as Qr,n as Yr,o as be,p as xe,q as v,r as j,s as Z,u as Le,v as Xr,w as Zr,x as R,y as Jr,z as $n}from"./chunk-Q2LCHAGS.js";import{a as Y,b as pe,c as en}from"./chunk-7CGTOI24.js";var Ks=!Ee,Bs=Ks&&!!eo,fo=()=>{},Ns=e=>e!=null,Us=e=>e.filter(Ns);function Gs(e){return(...t)=>{for(let n of e)n&&n(...t)}}var E=e=>typeof e=="function"&&!e.length?e():e,tr=e=>Array.isArray(e)?e:e?[e]:[];function Vs(e,...t){return typeof e=="function"?e(...t):e}var Hs=Bs?e=>Qr()?U(e):e:U;function js(e,t,n,r){let o=e.length,s=t.length,l=0;if(!s){for(;l<o;l++)n(e[l]);return}if(!o){for(;l<s;l++)r(t[l]);return}for(;l<s&&t[l]===e[l];l++);let a,i;t=t.slice(l),e=e.slice(l);for(a of t)e.includes(a)||r(a);for(i of e)t.includes(i)||n(i)}function Ws(e){let[t,n]=z(),r=e?.throw?(g,f)=>{throw n(g instanceof Error?g:new Error(f)),g}:(g,f)=>{n(g instanceof Error?g:new Error(f))},o=e?.api?Array.isArray(e.api)?e.api:[e.api]:[globalThis.localStorage].filter(Boolean),s=e?.prefix?`${e.prefix}.`:"",l=new Map,a=new Proxy({},{get(g,f){let h=l.get(f);h||(h=z(void 0,{equals:!1}),l.set(f,h)),h[0]();let p=o.reduce((m,y)=>{if(m!==null||!y)return m;try{return y.getItem(`${s}${f}`)}catch(b){return r(b,`Error reading ${s}${f} from ${y.name}`),null}},null);return p!==null&&e?.deserializer?e.deserializer(p,f,e.options):p}}),i=(g,f,h)=>{let p=e?.serializer?e.serializer(f,g,h??e.options):f,m=`${s}${g}`;o.forEach(b=>{try{b.getItem(m)!==p&&b.setItem(m,p)}catch(x){r(x,`Error setting ${s}${g} to ${p} in ${b.name}`)}});let y=l.get(g);y&&y[1]()},c=g=>o.forEach(f=>{try{f.removeItem(`${s}${g}`)}catch(h){r(h,`Error removing ${s}${g} from ${f.name}`)}}),u=()=>o.forEach(g=>{try{g.clear()}catch(f){r(f,`Error clearing ${g.name}`)}}),d=()=>{let g={},f=(h,p)=>{if(!g.hasOwnProperty(h)){let m=p&&e?.deserializer?e.deserializer(p,h,e.options):p;m&&(g[h]=m)}};return o.forEach(h=>{if(typeof h.getAll=="function"){let p;try{p=h.getAll()}catch(m){r(m,`Error getting all values from in ${h.name}`)}for(let m of p)f(m,p[m])}else{let p=0,m;try{for(;m=h.key(p++);)g.hasOwnProperty(m)||f(m,h.getItem(m))}catch(y){r(y,`Error getting all values from ${h.name}`)}}}),g};return e?.sync!==!1&&bt(()=>{let g=f=>{let h=!1;o.forEach(p=>{try{p!==f.storageArea&&f.key&&f.newValue!==p.getItem(f.key)&&(f.newValue?p.setItem(f.key,f.newValue):p.removeItem(f.key),h=!0)}catch(m){r(m,`Error synching api ${p.name} from storage event (${f.key}=${f.newValue})`)}}),h&&f.key&&l.get(f.key)?.[1]()};"addEventListener"in globalThis?(globalThis.addEventListener("storage",g),U(()=>globalThis.removeEventListener("storage",g))):(o.forEach(f=>f.addEventListener?.("storage",g)),U(()=>o.forEach(f=>f.removeEventListener?.("storage",g))))}),[a,i,{clear:u,error:t,remove:c,toJSON:d}]}var af=Ws,Qs=e=>(typeof e.clear=="function"||(e.clear=()=>{let t;for(;t=e.key(0);)e.removeItem(t)}),e),go=e=>{if(!e)return"";let t="";for(let n in e){if(!e.hasOwnProperty(n))continue;let r=e[n];t+=r instanceof Date?`; ${n}=${r.toUTCString()}`:typeof r=="boolean"?`; ${n}`:`; ${n}=${r}`}return t},Re=Qs({_cookies:[globalThis.document,"cookie"],getItem:e=>Re._cookies[0][Re._cookies[1]].match("(^|;)\\s*"+e+"\\s*=\\s*([^;]+)")?.pop()??null,setItem:(e,t,n)=>{let r=Re.getItem(e);Re._cookies[0][Re._cookies[1]]=`${e}=${t}${go(n)}`;let o=Object.assign(new Event("storage"),{key:e,oldValue:r,newValue:t,url:globalThis.document.URL,storageArea:Re});window.dispatchEvent(o)},removeItem:e=>{Re._cookies[0][Re._cookies[1]]=`${e}=deleted${go({expires:new Date(0)})}`},key:e=>{let t=null,n=0;return Re._cookies[0][Re._cookies[1]].replace(/(?:^|;)\s*(.+?)\s*=\s*[^;]+/g,(r,o)=>(!t&&o&&n++===e&&(t=o),"")),t},get length(){let e=0;return Re._cookies[0][Re._cookies[1]].replace(/(?:^|;)\s*.+?\s*=\s*[^;]+/g,t=>(e+=t?1:0,"")),e}}),Ys=1024,Lt=796,fr=700,Xs="bottom-right",nr="bottom",cf="system",Zs=!1,li=500,Js=500,ai=500,el=Object.keys(Sn)[0],ho=1,tl=Object.keys(kn)[0],nl=be({client:void 0,onlineManager:void 0,queryFlavor:"",version:"",shadowDOMTarget:void 0});function K(){return xe(nl)}var ci=be(void 0),uf=e=>{let[t,n]=z(null),r=()=>{let l=t();l!=null&&(l.close(),n(null))},o=(l,a)=>{if(t()!=null)return;let i=window.open("","TSQD-Devtools-Panel",`width=${l},height=${a},popup`);if(!i)throw new Error("Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.");i.document.head.innerHTML="",i.document.body.innerHTML="",to(i.document),i.document.title="TanStack Query Devtools",i.document.body.style.margin="0",i.addEventListener("pagehide",()=>{e.setLocalStore("pip_open","false"),n(null)}),[...(K().shadowDOMTarget||document).styleSheets].forEach(c=>{try{let u=[...c.cssRules].map(h=>h.cssText).join(""),d=document.createElement("style"),g=c.ownerNode,f="";g&&"id"in g&&(f=g.id),f&&d.setAttribute("id",f),d.textContent=u,i.document.head.appendChild(d)}catch{let d=document.createElement("link");if(c.href==null)return;d.rel="stylesheet",d.type=c.type,d.media=c.media.toString(),d.href=c.href,i.document.head.appendChild(d)}}),Cn(["focusin","focusout","pointermove","keydown","pointerdown","pointerup","click","mousedown","input"],i.document),e.setLocalStore("pip_open","true"),n(i)};B(()=>{(e.localStore.pip_open??"false")==="true"&&!e.disabled&&o(Number(window.innerWidth),Number(e.localStore.height||Js))}),B(()=>{let l=(K().shadowDOMTarget||document).querySelector("#_goober"),a=t();if(l&&a){let i=new MutationObserver(()=>{let c=(K().shadowDOMTarget||a.document).querySelector("#_goober");c&&(c.textContent=l.textContent)});i.observe(l,{childList:!0,subtree:!0,characterDataOldValue:!0}),U(()=>{i.disconnect()})}});let s=M(()=>({pipWindow:t(),requestPipWindow:o,closePipWindow:r,disabled:e.disabled??!1}));return v(ci.Provider,{value:s,get children(){return e.children}})},gr=()=>M(()=>{let t=xe(ci);if(!t)throw new Error("usePiPWindow must be used within a PiPProvider");return t()}),rl=be(()=>"dark");function $e(){return xe(rl)}var ui={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u1EA4:"A",\u1EAE:"A",\u1EB2:"A",\u1EB4:"A",\u1EB6:"A",\u00C6:"AE",\u1EA6:"A",\u1EB0:"A",\u0202:"A",\u00C7:"C",\u1E08:"C",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u1EBE:"E",\u1E16:"E",\u1EC0:"E",\u1E14:"E",\u1E1C:"E",\u0206:"E",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u1E2E:"I",\u020A:"I",\u00D0:"D",\u00D1:"N",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u1ED0:"O",\u1E4C:"O",\u1E52:"O",\u020E:"O",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00DD:"Y",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u1EA5:"a",\u1EAF:"a",\u1EB3:"a",\u1EB5:"a",\u1EB7:"a",\u00E6:"ae",\u1EA7:"a",\u1EB1:"a",\u0203:"a",\u00E7:"c",\u1E09:"c",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u1EBF:"e",\u1E17:"e",\u1EC1:"e",\u1E15:"e",\u1E1D:"e",\u0207:"e",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u1E2F:"i",\u020B:"i",\u00F0:"d",\u00F1:"n",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u1ED1:"o",\u1E4D:"o",\u1E53:"o",\u020F:"o",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00FD:"y",\u00FF:"y",\u0100:"A",\u0101:"a",\u0102:"A",\u0103:"a",\u0104:"A",\u0105:"a",\u0106:"C",\u0107:"c",\u0108:"C",\u0109:"c",\u010A:"C",\u010B:"c",\u010C:"C",\u010D:"c",C\u0306:"C",c\u0306:"c",\u010E:"D",\u010F:"d",\u0110:"D",\u0111:"d",\u0112:"E",\u0113:"e",\u0114:"E",\u0115:"e",\u0116:"E",\u0117:"e",\u0118:"E",\u0119:"e",\u011A:"E",\u011B:"e",\u011C:"G",\u01F4:"G",\u011D:"g",\u01F5:"g",\u011E:"G",\u011F:"g",\u0120:"G",\u0121:"g",\u0122:"G",\u0123:"g",\u0124:"H",\u0125:"h",\u0126:"H",\u0127:"h",\u1E2A:"H",\u1E2B:"h",\u0128:"I",\u0129:"i",\u012A:"I",\u012B:"i",\u012C:"I",\u012D:"i",\u012E:"I",\u012F:"i",\u0130:"I",\u0131:"i",\u0132:"IJ",\u0133:"ij",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u1E30:"K",\u1E31:"k",K\u0306:"K",k\u0306:"k",\u0139:"L",\u013A:"l",\u013B:"L",\u013C:"l",\u013D:"L",\u013E:"l",\u013F:"L",\u0140:"l",\u0141:"l",\u0142:"l",\u1E3E:"M",\u1E3F:"m",M\u0306:"M",m\u0306:"m",\u0143:"N",\u0144:"n",\u0145:"N",\u0146:"n",\u0147:"N",\u0148:"n",\u0149:"n",N\u0306:"N",n\u0306:"n",\u014C:"O",\u014D:"o",\u014E:"O",\u014F:"o",\u0150:"O",\u0151:"o",\u0152:"OE",\u0153:"oe",P\u0306:"P",p\u0306:"p",\u0154:"R",\u0155:"r",\u0156:"R",\u0157:"r",\u0158:"R",\u0159:"r",R\u0306:"R",r\u0306:"r",\u0212:"R",\u0213:"r",\u015A:"S",\u015B:"s",\u015C:"S",\u015D:"s",\u015E:"S",\u0218:"S",\u0219:"s",\u015F:"s",\u0160:"S",\u0161:"s",\u0162:"T",\u0163:"t",\u021B:"t",\u021A:"T",\u0164:"T",\u0165:"t",\u0166:"T",\u0167:"t",T\u0306:"T",t\u0306:"t",\u0168:"U",\u0169:"u",\u016A:"U",\u016B:"u",\u016C:"U",\u016D:"u",\u016E:"U",\u016F:"u",\u0170:"U",\u0171:"u",\u0172:"U",\u0173:"u",\u0216:"U",\u0217:"u",V\u0306:"V",v\u0306:"v",\u0174:"W",\u0175:"w",\u1E82:"W",\u1E83:"w",X\u0306:"X",x\u0306:"x",\u0176:"Y",\u0177:"y",\u0178:"Y",Y\u0306:"Y",y\u0306:"y",\u0179:"Z",\u017A:"z",\u017B:"Z",\u017C:"z",\u017D:"Z",\u017E:"z",\u017F:"s",\u0192:"f",\u01A0:"O",\u01A1:"o",\u01AF:"U",\u01B0:"u",\u01CD:"A",\u01CE:"a",\u01CF:"I",\u01D0:"i",\u01D1:"O",\u01D2:"o",\u01D3:"U",\u01D4:"u",\u01D5:"U",\u01D6:"u",\u01D7:"U",\u01D8:"u",\u01D9:"U",\u01DA:"u",\u01DB:"U",\u01DC:"u",\u1EE8:"U",\u1EE9:"u",\u1E78:"U",\u1E79:"u",\u01FA:"A",\u01FB:"a",\u01FC:"AE",\u01FD:"ae",\u01FE:"O",\u01FF:"o",\u00DE:"TH",\u00FE:"th",\u1E54:"P",\u1E55:"p",\u1E64:"S",\u1E65:"s",X\u0301:"X",x\u0301:"x",\u0403:"\u0413",\u0453:"\u0433",\u040C:"\u041A",\u045C:"\u043A",A\u030B:"A",a\u030B:"a",E\u030B:"E",e\u030B:"e",I\u030B:"I",i\u030B:"i",\u01F8:"N",\u01F9:"n",\u1ED2:"O",\u1ED3:"o",\u1E50:"O",\u1E51:"o",\u1EEA:"U",\u1EEB:"u",\u1E80:"W",\u1E81:"w",\u1EF2:"Y",\u1EF3:"y",\u0200:"A",\u0201:"a",\u0204:"E",\u0205:"e",\u0208:"I",\u0209:"i",\u020C:"O",\u020D:"o",\u0210:"R",\u0211:"r",\u0214:"U",\u0215:"u",B\u030C:"B",b\u030C:"b",\u010C\u0323:"C",\u010D\u0323:"c",\u00CA\u030C:"E",\u00EA\u030C:"e",F\u030C:"F",f\u030C:"f",\u01E6:"G",\u01E7:"g",\u021E:"H",\u021F:"h",J\u030C:"J",\u01F0:"j",\u01E8:"K",\u01E9:"k",M\u030C:"M",m\u030C:"m",P\u030C:"P",p\u030C:"p",Q\u030C:"Q",q\u030C:"q",\u0158\u0329:"R",\u0159\u0329:"r",\u1E66:"S",\u1E67:"s",V\u030C:"V",v\u030C:"v",W\u030C:"W",w\u030C:"w",X\u030C:"X",x\u030C:"x",Y\u030C:"Y",y\u030C:"y",A\u0327:"A",a\u0327:"a",B\u0327:"B",b\u0327:"b",\u1E10:"D",\u1E11:"d",\u0228:"E",\u0229:"e",\u0190\u0327:"E",\u025B\u0327:"e",\u1E28:"H",\u1E29:"h",I\u0327:"I",i\u0327:"i",\u0197\u0327:"I",\u0268\u0327:"i",M\u0327:"M",m\u0327:"m",O\u0327:"O",o\u0327:"o",Q\u0327:"Q",q\u0327:"q",U\u0327:"U",u\u0327:"u",X\u0327:"X",x\u0327:"x",Z\u0327:"Z",z\u0327:"z"},ol=Object.keys(ui).join("|"),il=new RegExp(ol,"g");function sl(e){return e.replace(il,t=>ui[t])}var Pe={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0};function vo(e,t,n){var r;if(n=n||{},n.threshold=(r=n.threshold)!=null?r:Pe.MATCHES,!n.accessors){let l=po(e,t,n);return{rankedValue:e,rank:l,accessorIndex:-1,accessorThreshold:n.threshold,passed:l>=n.threshold}}let o=ul(e,n.accessors),s={rankedValue:e,rank:Pe.NO_MATCH,accessorIndex:-1,accessorThreshold:n.threshold,passed:!1};for(let l=0;l<o.length;l++){let a=o[l],i=po(a.itemValue,t,n),{minRanking:c,maxRanking:u,threshold:d=n.threshold}=a.attributes;i<c&&i>=Pe.MATCHES?i=c:i>u&&(i=u),i=Math.min(i,u),i>=d&&i>s.rank&&(s.rank=i,s.passed=!0,s.accessorIndex=l,s.accessorThreshold=d,s.rankedValue=a.itemValue)}return s}function po(e,t,n){return e=mo(e,n),t=mo(t,n),t.length>e.length?Pe.NO_MATCH:e===t?Pe.CASE_SENSITIVE_EQUAL:(e=e.toLowerCase(),t=t.toLowerCase(),e===t?Pe.EQUAL:e.startsWith(t)?Pe.STARTS_WITH:e.includes(` ${t}`)?Pe.WORD_STARTS_WITH:e.includes(t)?Pe.CONTAINS:t.length===1?Pe.NO_MATCH:ll(e).includes(t)?Pe.ACRONYM:al(e,t))}function ll(e){let t="";return e.split(" ").forEach(r=>{r.split("-").forEach(s=>{t+=s.substr(0,1)})}),t}function al(e,t){let n=0,r=0;function o(i,c,u){for(let d=u,g=c.length;d<g;d++)if(c[d]===i)return n+=1,d+1;return-1}function s(i){let c=1/i,u=n/t.length;return Pe.MATCHES+u*c}let l=o(t[0],e,0);if(l<0)return Pe.NO_MATCH;r=l;for(let i=1,c=t.length;i<c;i++){let u=t[i];if(r=o(u,e,r),!(r>-1))return Pe.NO_MATCH}let a=r-l;return s(a)}function mo(e,t){let{keepDiacritics:n}=t;return e=`${e}`,n||(e=sl(e)),e}function cl(e,t){let n=t;typeof t=="object"&&(n=t.accessor);let r=n(e);return r==null?[]:Array.isArray(r)?r:[String(r)]}function ul(e,t){let n=[];for(let r=0,o=t.length;r<o;r++){let s=t[r],l=dl(s),a=cl(e,s);for(let i=0,c=a.length;i<c;i++)n.push({itemValue:a[i],attributes:l})}return n}var yo={maxRanking:1/0,minRanking:-1/0};function dl(e){return typeof e=="function"?yo:Y(Y({},yo),e)}var fl={data:""},gl=e=>typeof window=="object"?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||fl,hl=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,vl=/\/\*[^]*?\*\/|  +/g,bo=/\n+/g,Pt=(e,t)=>{let n="",r="",o="";for(let s in e){let l=e[s];s[0]=="@"?s[1]=="i"?n=s+" "+l+";":r+=s[1]=="f"?Pt(l,s):s+"{"+Pt(l,s[1]=="k"?"":t)+"}":typeof l=="object"?r+=Pt(l,t?t.replace(/([^,])+/g,a=>s.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,i=>/&/.test(i)?i.replace(/&/g,a):a?a+" "+i:i)):s):l!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=Pt.p?Pt.p(s,l):s+":"+l+";")}return n+(t&&o?t+"{"+o+"}":o)+r},ut={},di=e=>{if(typeof e=="object"){let t="";for(let n in e)t+=n+di(e[n]);return t}return e},pl=(e,t,n,r,o)=>{let s=di(e),l=ut[s]||(ut[s]=(i=>{let c=0,u=11;for(;c<i.length;)u=101*u+i.charCodeAt(c++)>>>0;return"go"+u})(s));if(!ut[l]){let i=s!==e?e:(c=>{let u,d,g=[{}];for(;u=hl.exec(c.replace(vl,""));)u[4]?g.shift():u[3]?(d=u[3].replace(bo," ").trim(),g.unshift(g[0][d]=g[0][d]||{})):g[0][u[1]]=u[2].replace(bo," ").trim();return g[0]})(e);ut[l]=Pt(o?{["@keyframes "+l]:i}:i,n?"":"."+l)}let a=n&&ut.g?ut.g:null;return n&&(ut.g=ut[l]),((i,c,u,d)=>{d?c.data=c.data.replace(d,i):c.data.indexOf(i)===-1&&(c.data=u?i+c.data:c.data+i)})(ut[l],t,r,a),l},ml=(e,t,n)=>e.reduce((r,o,s)=>{let l=t[s];if(l&&l.call){let a=l(n),i=a&&a.props&&a.props.className||/^go/.test(a)&&a;l=i?"."+i:a&&typeof a=="object"?a.props?"":Pt(a,""):a===!1?"":a}return r+o+(l??"")},"");function W(e){let t=this||{},n=e.call?e(t.p):e;return pl(n.unshift?n.raw?ml(n,[].slice.call(arguments,1),t.p):n.reduce((r,o)=>Object.assign(r,o&&o.call?o(t.p):o),{}):n,gl(t.target),t.g,t.o,t.k)}W.bind({g:1});W.bind({k:1});function fi(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(n=fi(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function q(){for(var e,t,n=0,r="",o=arguments.length;n<o;n++)(e=arguments[n])&&(t=fi(e))&&(r&&(r+=" "),r+=t);return r}function yl(e,t){let n=At(e);if(Ee){let d=n.slice();return()=>d}let{onChange:r}=t,o=new Set(t.appear?void 0:n),s=new WeakSet,[l,a]=z([],{equals:!1}),[i]=Yr(),c=d=>{a(g=>(g.push.apply(g,d),g));for(let g of d)s.delete(g)},u=(d,g,f)=>d.splice(f,0,g);return M(d=>{let g=l(),f=e();if(f[Hn],At(i))return i(),d;if(g.length){let h=d.filter(p=>!g.includes(p));return g.length=0,r({list:h,added:[],removed:[],unchanged:h,finishRemoved:c}),h}return At(()=>{let h=new Set(f),p=f.slice(),m=[],y=[],b=[];for(let w of f)(o.has(w)?b:m).push(w);let x=!m.length;for(let w=0;w<d.length;w++){let $=d[w];h.has($)||(s.has($)||(y.push($),s.add($)),u(p,$,w)),x&&$!==p[w]&&(x=!1)}return!y.length&&x?d:(r({list:p,added:m,removed:y,unchanged:b,finishRemoved:c}),o=h,p)})},t.appear?[]:n.slice())}function De(...e){return Gs(e)}var xo=Ee?e=>e!=null&&typeof e=="object"&&"t"in e:e=>e instanceof Element;function rr(e,t){if(t(e))return e;if(typeof e=="function"&&!e.length)return rr(e(),t);if(Array.isArray(e)){let n=[];for(let r of e){let o=rr(r,t);o&&(Array.isArray(o)?n.push.apply(n,o):n.push(o))}return n.length?n:null}return null}function bl(e,t=xo,n=xo){let r=M(e),o=M(()=>rr(r(),Ee?n:t));return o.toArray=()=>{let s=o();return Array.isArray(s)?s:s?[s]:[]},o}function xl(e){return M(()=>{let t=e.name||"s";return{enterActive:(e.enterActiveClass||t+"-enter-active").split(" "),enter:(e.enterClass||t+"-enter").split(" "),enterTo:(e.enterToClass||t+"-enter-to").split(" "),exitActive:(e.exitActiveClass||t+"-exit-active").split(" "),exit:(e.exitClass||t+"-exit").split(" "),exitTo:(e.exitToClass||t+"-exit-to").split(" "),move:(e.moveClass||t+"-move").split(" ")}})}function gi(e){requestAnimationFrame(()=>requestAnimationFrame(e))}function wl(e,t,n,r){let{onBeforeEnter:o,onEnter:s,onAfterEnter:l}=t;o?.(n),n.classList.add(...e.enter),n.classList.add(...e.enterActive),queueMicrotask(()=>{if(!n.parentNode)return r?.();s?.(n,()=>a())}),gi(()=>{n.classList.remove(...e.enter),n.classList.add(...e.enterTo),(!s||s.length<2)&&(n.addEventListener("transitionend",a),n.addEventListener("animationend",a))});function a(i){(!i||i.target===n)&&(n.removeEventListener("transitionend",a),n.removeEventListener("animationend",a),n.classList.remove(...e.enterActive),n.classList.remove(...e.enterTo),l?.(n))}}function $l(e,t,n,r){let{onBeforeExit:o,onExit:s,onAfterExit:l}=t;if(!n.parentNode)return r?.();o?.(n),n.classList.add(...e.exit),n.classList.add(...e.exitActive),s?.(n,()=>a()),gi(()=>{n.classList.remove(...e.exit),n.classList.add(...e.exitTo),(!s||s.length<2)&&(n.addEventListener("transitionend",a),n.addEventListener("animationend",a))});function a(i){(!i||i.target===n)&&(r?.(),n.removeEventListener("transitionend",a),n.removeEventListener("animationend",a),n.classList.remove(...e.exitActive),n.classList.remove(...e.exitTo),l?.(n))}}var wo=e=>{let t=xl(e);return yl(bl(()=>e.children).toArray,{appear:e.appear,onChange({added:n,removed:r,finishRemoved:o,list:s}){let l=t();for(let i of n)wl(l,e,i);let a=[];for(let i of s)i.isConnected&&(i instanceof HTMLElement||i instanceof SVGElement)&&a.push({el:i,rect:i.getBoundingClientRect()});queueMicrotask(()=>{let i=[];for(let{el:c,rect:u}of a)if(c.isConnected){let d=c.getBoundingClientRect(),g=u.left-d.left,f=u.top-d.top;(g||f)&&(c.style.transform=`translate(${g}px, ${f}px)`,c.style.transitionDuration="0s",i.push(c))}document.body.offsetHeight;for(let c of i){let u=function(d){(d.target===c||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",u),c.classList.remove(...l.move))};c.classList.add(...l.move),c.style.transform=c.style.transitionDuration="",c.addEventListener("transitionend",u)}});for(let i of r)$l(l,e,i,()=>o([i]))}})},Yn=Symbol("fallback");function $o(e){for(let t of e)t.dispose()}function Cl(e,t,n,r={}){if(Ee){let l=e(),a=[];if(l&&l.length)for(let i=0,c=l.length;i<c;i++)a.push(n(()=>l[i],()=>i));else r.fallback&&(a=[r.fallback()]);return()=>a}let o=new Map;return U(()=>$o(o.values())),()=>{let l=e()||[];return l[Hn],At(()=>{if(!l.length)return $o(o.values()),o.clear(),r.fallback?[jn(d=>(o.set(Yn,{dispose:d}),r.fallback()))]:[];let a=new Array(l.length),i=o.get(Yn);if(!o.size||i){i?.dispose(),o.delete(Yn);for(let u=0;u<l.length;u++){let d=l[u],g=t(d,u);s(a,d,u,g)}return a}let c=new Set(o.keys());for(let u=0;u<l.length;u++){let d=l[u],g=t(d,u);c.delete(g);let f=o.get(g);f?(a[u]=f.mapped,f.setIndex?.(u),f.setItem(()=>d)):s(a,d,u,g)}for(let u of c)o.get(u)?.dispose(),o.delete(u);return a})};function s(l,a,i,c){jn(u=>{let[d,g]=z(a),f={setItem:g,dispose:u};if(n.length>1){let[h,p]=z(i);f.setIndex=p,f.mapped=n(d,h)}else f.mapped=n(d);o.set(c,f),l[i]=f.mapped})}}function In(e){let{by:t}=e;return M(Cl(()=>e.each,typeof t=="function"?t:n=>n[t],e.children,"fallback"in e?{fallback:()=>e.fallback}:void 0))}function Sl(e,t,n,r){return e.addEventListener(t,n,r),Hs(e.removeEventListener.bind(e,t,n,r))}function kl(e,t,n,r){if(Ee)return;let o=()=>{tr(E(e)).forEach(s=>{s&&tr(E(t)).forEach(l=>Sl(s,l,n,r))})};typeof e=="function"?B(o):N(o)}function El(e,t){if(Ee)return{observe:fo,unobserve:fo};let n=new ResizeObserver(e);return U(n.disconnect.bind(n)),{observe:r=>n.observe(r,t),unobserve:n.unobserve.bind(n)}}function hi(e,t,n){if(Ee)return;let r=new WeakMap,{observe:o,unobserve:s}=El(l=>{for(let a of l){let{contentRect:i,target:c}=a,u=Math.round(i.width),d=Math.round(i.height),g=r.get(c);(!g||g.width!==u||g.height!==d)&&(t(i,c,a),r.set(c,{width:u,height:d}))}},n);B(l=>{let a=Us(tr(E(e)));return js(a,l,o,s),a},[])}var Ml=/((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;function Co(e){let t={},n;for(;n=Ml.exec(e);)t[n[1]]=n[2];return t}function _n(e,t){if(typeof e=="string"){if(typeof t=="string")return`${e};${t}`;e=Co(e)}else typeof t=="string"&&(t=Co(t));return Y(Y({},e),t)}function Tl(e,t,n=-1){return n in e?[...e.slice(0,n),t,...e.slice(n)]:[...e,t]}function or(e,t){let n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Al(e){return typeof e=="number"}function Nt(e){return Object.prototype.toString.call(e)==="[object String]"}function Il(e){return typeof e=="function"}function gn(e){return t=>`${e()}-${t}`}function Ne(e,t){return e?e===t||e.contains(t):!1}function sn(e,t=!1){let{activeElement:n}=tt(e);if(!n?.nodeName)return null;if(vi(n)&&n.contentDocument)return sn(n.contentDocument.body,t);if(t){let r=n.getAttribute("aria-activedescendant");if(r){let o=tt(n).getElementById(r);if(o)return o}}return n}function Dl(e){return tt(e).defaultView||window}function tt(e){return e?e.ownerDocument||e:document}function vi(e){return e.tagName==="IFRAME"}var hr=(e=>(e.Escape="Escape",e.Enter="Enter",e.Tab="Tab",e.Space=" ",e.ArrowDown="ArrowDown",e.ArrowLeft="ArrowLeft",e.ArrowRight="ArrowRight",e.ArrowUp="ArrowUp",e.End="End",e.Home="Home",e.PageDown="PageDown",e.PageUp="PageUp",e))(hr||{});function vr(e){return typeof window<"u"&&window.navigator!=null?e.test(window.navigator.userAgentData?.platform||window.navigator.platform):!1}function zn(){return vr(/^Mac/i)}function Pl(){return vr(/^iPhone/i)}function Ll(){return vr(/^iPad/i)||zn()&&navigator.maxTouchPoints>1}function Ol(){return Pl()||Ll()}function ql(){return zn()||Ol()}function ce(e,t){return t&&(Il(t)?t(e):t[0](t[1],e)),e?.defaultPrevented}function we(e){return t=>{for(let n of e)ce(t,n)}}function Fl(e){return zn()?e.metaKey&&!e.ctrlKey:e.ctrlKey&&!e.metaKey}function Te(e){if(e)if(_l())e.focus({preventScroll:!0});else{let t=zl(e);e.focus(),Rl(t)}}var Mn=null;function _l(){if(Mn==null){Mn=!1;try{document.createElement("div").focus({get preventScroll(){return Mn=!0,!0}})}catch{}}return Mn}function zl(e){let t=e.parentNode,n=[],r=document.scrollingElement||document.documentElement;for(;t instanceof HTMLElement&&t!==r;)(t.offsetHeight<t.scrollHeight||t.offsetWidth<t.scrollWidth)&&n.push({element:t,scrollTop:t.scrollTop,scrollLeft:t.scrollLeft}),t=t.parentNode;return r instanceof HTMLElement&&n.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),n}function Rl(e){for(let{element:t,scrollTop:n,scrollLeft:r}of e)t.scrollTop=n,t.scrollLeft=r}var pi=["input:not([type='hidden']):not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","a[href]","area[href]","[tabindex]","iframe","object","embed","audio[controls]","video[controls]","[contenteditable]:not([contenteditable='false'])"],Kl=[...pi,'[tabindex]:not([tabindex="-1"]):not([disabled])'],pr=pi.join(":not([hidden]),")+",[tabindex]:not([disabled]):not([hidden])",Bl=Kl.join(':not([hidden]):not([tabindex="-1"]),');function mi(e,t){let r=Array.from(e.querySelectorAll(pr)).filter(So);return t&&So(e)&&r.unshift(e),r.forEach((o,s)=>{if(vi(o)&&o.contentDocument){let l=o.contentDocument.body,a=mi(l,!1);r.splice(s,1,...a)}}),r}function So(e){return yi(e)&&!Nl(e)}function yi(e){return e.matches(pr)&&mr(e)}function Nl(e){return parseInt(e.getAttribute("tabindex")||"0",10)<0}function mr(e,t){return e.nodeName!=="#comment"&&Ul(e)&&Gl(e,t)&&(!e.parentElement||mr(e.parentElement,e))}function Ul(e){if(!(e instanceof HTMLElement)&&!(e instanceof SVGElement))return!1;let{display:t,visibility:n}=e.style,r=t!=="none"&&n!=="hidden"&&n!=="collapse";if(r){if(!e.ownerDocument.defaultView)return r;let{getComputedStyle:o}=e.ownerDocument.defaultView,{display:s,visibility:l}=o(e);r=s!=="none"&&l!=="hidden"&&l!=="collapse"}return r}function Gl(e,t){return!e.hasAttribute("hidden")&&(e.nodeName==="DETAILS"&&t&&t.nodeName!=="SUMMARY"?e.hasAttribute("open"):!0)}function Vl(e,t,n){let r=t?.tabbable?Bl:pr,o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode(s){return t?.from?.contains(s)?NodeFilter.FILTER_REJECT:s.matches(r)&&mr(s)&&(!t?.accept||t.accept(s))?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});return t?.from&&(o.currentNode=t.from),o}function ko(e){for(;e&&!Hl(e);)e=e.parentElement;return e||document.scrollingElement||document.documentElement}function Hl(e){let t=window.getComputedStyle(e);return/(auto|scroll)/.test(t.overflow+t.overflowX+t.overflowY)}function jl(){}function Wl(e,t){let[n,r]=e,o=!1,s=t.length;for(let l=s,a=0,i=l-1;a<l;i=a++){let[c,u]=t[a],[d,g]=t[i],[,f]=t[i===0?l-1:i-1]||[0,0],h=(u-g)*(n-c)-(c-d)*(r-u);if(g<u){if(r>=g&&r<u){if(h===0)return!0;h>0&&(r===g?r>f&&(o=!o):o=!o)}}else if(u<g){if(r>u&&r<=g){if(h===0)return!0;h<0&&(r===g?r<f&&(o=!o):o=!o)}}else if(r==u&&(n>=d&&n<=c||n>=c&&n<=d))return!0}return o}function Q(e,t){return j(e,t)}var nn=new Map,Eo=new Set;function Mo(){if(typeof window>"u")return;let e=n=>{if(!n.target)return;let r=nn.get(n.target);r||(r=new Set,nn.set(n.target,r),n.target.addEventListener("transitioncancel",t)),r.add(n.propertyName)},t=n=>{if(!n.target)return;let r=nn.get(n.target);if(r&&(r.delete(n.propertyName),r.size===0&&(n.target.removeEventListener("transitioncancel",t),nn.delete(n.target)),nn.size===0)){for(let o of Eo)o();Eo.clear()}};document.body.addEventListener("transitionrun",e),document.body.addEventListener("transitionend",t)}typeof document<"u"&&(document.readyState!=="loading"?Mo():document.addEventListener("DOMContentLoaded",Mo));function ir(e,t){let n=To(e,t,"left"),r=To(e,t,"top"),o=t.offsetWidth,s=t.offsetHeight,l=e.scrollLeft,a=e.scrollTop,i=l+e.offsetWidth,c=a+e.offsetHeight;n<=l?l=n:n+o>i&&(l+=n+o-i),r<=a?a=r:r+s>c&&(a+=r+s-c),e.scrollLeft=l,e.scrollTop=a}function To(e,t,n){let r=n==="left"?"offsetLeft":"offsetTop",o=0;for(;t.offsetParent&&(o+=t[r],t.offsetParent!==e);){if(t.offsetParent.contains(e)){o-=e[r];break}t=t.offsetParent}return o}function Ql(e,t){if(document.contains(e)){let n=document.scrollingElement||document.documentElement;if(window.getComputedStyle(n).overflow==="hidden"){let o=ko(e);for(;e&&o&&e!==n&&o!==n;)ir(o,e),e=o,o=ko(e)}else{let{left:o,top:s}=e.getBoundingClientRect();e?.scrollIntoView?.({block:"nearest"});let{left:l,top:a}=e.getBoundingClientRect();(Math.abs(o-l)>1||Math.abs(s-a)>1)&&e.scrollIntoView?.({block:"nearest"})}}}var bi={border:"0",clip:"rect(0 0 0 0)","clip-path":"inset(50%)",height:"1px",margin:"0 -1px -1px 0",overflow:"hidden",padding:"0",position:"absolute",width:"1px","white-space":"nowrap"};function Ue(e){return t=>(e(t),()=>e(void 0))}function Rn(e,t){let[n,r]=z(Ao(t?.()));return B(()=>{r(e()?.tagName.toLowerCase()||Ao(t?.()))}),n}function Ao(e){return Nt(e)?e:void 0}function ue(e){let[t,n]=Z(e,["as"]);if(!t.as)throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");return v(oo,j(n,{get component(){return t.as}}))}var Yl=["id","name","validationState","required","disabled","readOnly"];function Xl(e){let t=`form-control-${Le()}`,n=Q({id:t},e),[r,o]=z(),[s,l]=z(),[a,i]=z(),[c,u]=z(),d=(p,m,y)=>{let b=y!=null||r()!=null;return[y,r(),b&&m!=null?p:void 0].filter(Boolean).join(" ")||void 0},g=p=>[a(),c(),p].filter(Boolean).join(" ")||void 0,f=M(()=>({"data-valid":E(n.validationState)==="valid"?"":void 0,"data-invalid":E(n.validationState)==="invalid"?"":void 0,"data-required":E(n.required)?"":void 0,"data-disabled":E(n.disabled)?"":void 0,"data-readonly":E(n.readOnly)?"":void 0}));return{formControlContext:{name:()=>E(n.name)??E(n.id),dataset:f,validationState:()=>E(n.validationState),isRequired:()=>E(n.required),isDisabled:()=>E(n.disabled),isReadOnly:()=>E(n.readOnly),labelId:r,fieldId:s,descriptionId:a,errorMessageId:c,getAriaLabelledBy:d,getAriaDescribedBy:g,generateId:gn(()=>E(n.id)),registerLabel:Ue(o),registerField:Ue(l),registerDescription:Ue(i),registerErrorMessage:Ue(u)}}}var xi=be();function hn(){let e=xe(xi);if(e===void 0)throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");return e}function wi(e){let t=hn(),n=Q({id:t.generateId("description")},e);return B(()=>U(t.registerDescription(n.id))),v(ue,j({as:"div"},()=>t.dataset(),n))}function $i(e){let t=hn(),n=Q({id:t.generateId("error-message")},e),[r,o]=Z(n,["forceMount"]),s=()=>t.validationState()==="invalid";return B(()=>{s()&&U(t.registerErrorMessage(o.id))}),v(R,{get when(){return r.forceMount||s()},get children(){return v(ue,j({as:"div"},()=>t.dataset(),o))}})}function Zl(e){let t,n=hn(),r=Q({id:n.generateId("label")},e),[o,s]=Z(r,["ref"]),l=Rn(()=>t,()=>"label");return B(()=>U(n.registerLabel(s.id))),v(ue,j({as:"label",ref(a){let i=De(c=>t=c,o.ref);typeof i=="function"&&i(a)},get for(){return M(()=>l()==="label")()?n.fieldId():void 0}},()=>n.dataset(),s))}function Jl(e,t){B(Je(e,n=>{if(n==null)return;let r=ea(n);r!=null&&(r.addEventListener("reset",t,{passive:!0}),U(()=>{r.removeEventListener("reset",t)}))}))}function ea(e){return ta(e)?e.form:e.closest("form")}function ta(e){return e.matches("textarea, input, select, button")}function vn(e){let[t,n]=z(e.defaultValue?.()),r=M(()=>e.value?.()!==void 0),o=M(()=>r()?e.value?.():t());return[o,l=>{At(()=>{let a=Vs(l,o());return Object.is(a,o())||(r()||n(a),e.onChange?.(a)),a})}]}function Ci(e){let[t,n]=vn(e);return[()=>t()??!1,n]}function na(e){let[t,n]=vn(e);return[()=>t()??[],n]}function ra(e={}){let[t,n]=Ci({value:()=>E(e.isSelected),defaultValue:()=>!!E(e.defaultIsSelected),onChange:s=>e.onSelectedChange?.(s)});return{isSelected:t,setIsSelected:s=>{!E(e.isReadOnly)&&!E(e.isDisabled)&&n(s)},toggle:()=>{!E(e.isReadOnly)&&!E(e.isDisabled)&&n(!t())}}}var oa=Object.defineProperty,Kn=(e,t)=>{for(var n in t)oa(e,n,{get:t[n],enumerable:!0})},Si=be();function ki(){return xe(Si)}function ia(){let e=ki();if(e===void 0)throw new Error("[kobalte]: `useDomCollectionContext` must be used within a `DomCollectionProvider` component");return e}function Ei(e,t){return!!(t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_PRECEDING)}function sa(e,t){let n=t.ref();if(!n)return-1;let r=e.length;if(!r)return-1;for(;r--;){let o=e[r]?.ref();if(o&&Ei(o,n))return r+1}return 0}function la(e){let t=e.map((r,o)=>[o,r]),n=!1;return t.sort(([r,o],[s,l])=>{let a=o.ref(),i=l.ref();return a===i||!a||!i?0:Ei(a,i)?(r>s&&(n=!0),-1):(r<s&&(n=!0),1)}),n?t.map(([r,o])=>o):e}function Mi(e,t){let n=la(e);e!==n&&t(n)}function aa(e){let t=e[0],n=e[e.length-1]?.ref(),r=t?.ref()?.parentElement;for(;r;){if(n&&r.contains(n))return r;r=r.parentElement}return tt(r).body}function ca(e,t){B(()=>{let n=setTimeout(()=>{Mi(e(),t)});U(()=>clearTimeout(n))})}function ua(e,t){if(typeof IntersectionObserver!="function"){ca(e,t);return}let n=[];B(()=>{let r=()=>{let l=!!n.length;n=e(),l&&Mi(e(),t)},o=aa(e()),s=new IntersectionObserver(r,{root:o});for(let l of e()){let a=l.ref();a&&s.observe(a)}U(()=>s.disconnect())})}function da(e={}){let[t,n]=na({value:()=>E(e.items),onChange:s=>e.onItemsChange?.(s)});ua(t,n);let r=s=>(n(l=>{let a=sa(l,s);return Tl(l,s,a)}),()=>{n(l=>{let a=l.filter(i=>i.ref()!==s.ref());return l.length===a.length?l:a})});return{DomCollectionProvider:s=>v(Si.Provider,{value:{registerItem:r},get children(){return s.children}})}}function fa(e){let t=ia(),n=Q({shouldRegisterItem:!0},e);B(()=>{if(!n.shouldRegisterItem)return;let r=t.registerItem(n.getItem());U(r)})}function Ti(e){let t=e.startIndex??0,n=e.startLevel??0,r=[],o=i=>{if(i==null)return"";let c=e.getKey??"key",u=Nt(c)?i[c]:c(i);return u!=null?String(u):""},s=i=>{if(i==null)return"";let c=e.getTextValue??"textValue",u=Nt(c)?i[c]:c(i);return u!=null?String(u):""},l=i=>{if(i==null)return!1;let c=e.getDisabled??"disabled";return(Nt(c)?i[c]:c(i))??!1},a=i=>{if(i!=null)return Nt(e.getSectionChildren)?i[e.getSectionChildren]:e.getSectionChildren?.(i)};for(let i of e.dataSource){if(Nt(i)||Al(i)){r.push({type:"item",rawValue:i,key:String(i),textValue:String(i),disabled:l(i),level:n,index:t}),t++;continue}if(a(i)!=null){r.push({type:"section",rawValue:i,key:"",textValue:"",disabled:!1,level:n,index:t}),t++;let c=a(i)??[];if(c.length>0){let u=Ti({dataSource:c,getKey:e.getKey,getTextValue:e.getTextValue,getDisabled:e.getDisabled,getSectionChildren:e.getSectionChildren,startIndex:t,startLevel:n+1});r.push(...u),t+=u.length}}else r.push({type:"item",rawValue:i,key:o(i),textValue:s(i),disabled:l(i),level:n,index:t}),t++}return r}function ga(e,t=[]){return M(()=>{let n=Ti({dataSource:E(e.dataSource),getKey:E(e.getKey),getTextValue:E(e.getTextValue),getDisabled:E(e.getDisabled),getSectionChildren:E(e.getSectionChildren)});for(let r=0;r<t.length;r++)t[r]();return e.factory(n)})}var ha=new Set(["Avst","Arab","Armi","Syrc","Samr","Mand","Thaa","Mend","Nkoo","Adlm","Rohg","Hebr"]),va=new Set(["ae","ar","arc","bcc","bqi","ckb","dv","fa","glk","he","ku","mzn","nqo","pnb","ps","sd","ug","ur","yi"]);function pa(e){if(Intl.Locale){let n=new Intl.Locale(e).maximize().script??"";return ha.has(n)}let t=e.split("-")[0];return va.has(t)}function ma(e){return pa(e)?"rtl":"ltr"}function Ai(){let e=typeof navigator<"u"&&(navigator.language||navigator.userLanguage)||"en-US";return{locale:e,direction:ma(e)}}var sr=Ai(),ln=new Set;function Io(){sr=Ai();for(let e of ln)e(sr)}function ya(){let e={locale:"en-US",direction:"ltr"},[t,n]=z(sr),r=M(()=>Ee?e:t());return bt(()=>{ln.size===0&&window.addEventListener("languagechange",Io),ln.add(n),U(()=>{ln.delete(n),ln.size===0&&window.removeEventListener("languagechange",Io)})}),{locale:()=>r().locale,direction:()=>r().direction}}var ba=be();function kt(){let e=ya();return xe(ba)||e}var Xn=new Map;function xa(e){let{locale:t}=kt(),n=M(()=>t()+(e?Object.entries(e).sort((r,o)=>r[0]<o[0]?-1:1).join():""));return M(()=>{let r=n(),o;return Xn.has(r)&&(o=Xn.get(r)),o||(o=new Intl.Collator(t(),e),Xn.set(r,o)),o})}var dt=class Ii extends Set{anchorKey;currentKey;constructor(t,n,r){super(t),t instanceof Ii?(this.anchorKey=n||t.anchorKey,this.currentKey=r||t.currentKey):(this.anchorKey=n,this.currentKey=r)}};function wa(e){let[t,n]=vn(e);return[()=>t()??new dt,n]}function Di(e){return ql()?e.altKey:e.ctrlKey}function Ut(e){return zn()?e.metaKey:e.ctrlKey}function Do(e){return new dt(e)}function $a(e,t){if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;return!0}function Ca(e){let t=Q({selectionMode:"none",selectionBehavior:"toggle"},e),[n,r]=z(!1),[o,s]=z(),l=M(()=>{let p=E(t.selectedKeys);return p!=null?Do(p):p}),a=M(()=>{let p=E(t.defaultSelectedKeys);return p!=null?Do(p):new dt}),[i,c]=wa({value:l,defaultValue:a,onChange:p=>t.onSelectionChange?.(p)}),[u,d]=z(E(t.selectionBehavior)),g=()=>E(t.selectionMode),f=()=>E(t.disallowEmptySelection)??!1,h=p=>{(E(t.allowDuplicateSelectionEvents)||!$a(p,i()))&&c(p)};return B(()=>{let p=i();E(t.selectionBehavior)==="replace"&&u()==="toggle"&&typeof p=="object"&&p.size===0&&d("replace")}),B(()=>{d(E(t.selectionBehavior)??"toggle")}),{selectionMode:g,disallowEmptySelection:f,selectionBehavior:u,setSelectionBehavior:d,isFocused:n,setFocused:r,focusedKey:o,setFocusedKey:s,selectedKeys:i,setSelectedKeys:h}}function Sa(e){let[t,n]=z(""),[r,o]=z(-1);return{typeSelectHandlers:{onKeyDown:l=>{if(E(e.isDisabled))return;let a=E(e.keyboardDelegate),i=E(e.selectionManager);if(!a.getKeyForSearch)return;let c=ka(l.key);if(!c||l.ctrlKey||l.metaKey)return;c===" "&&t().trim().length>0&&(l.preventDefault(),l.stopPropagation());let u=n(g=>g+c),d=a.getKeyForSearch(u,i.focusedKey())??a.getKeyForSearch(u);d==null&&Ea(u)&&(u=u[0],d=a.getKeyForSearch(u,i.focusedKey())??a.getKeyForSearch(u)),d!=null&&(i.setFocusedKey(d),e.onTypeSelect?.(d)),clearTimeout(r()),o(window.setTimeout(()=>n(""),500))}}}}function ka(e){return e.length===1||!/^[A-Z]/i.test(e)?e:""}function Ea(e){return e.split("").every(t=>t===e[0])}function Ma(e,t,n){let o=j({selectOnFocus:()=>E(e.selectionManager).selectionBehavior()==="replace"},e),s=()=>t(),{direction:l}=kt(),a={top:0,left:0};kl(()=>E(o.isVirtualized)?void 0:s(),"scroll",()=>{let m=s();m&&(a={top:m.scrollTop,left:m.scrollLeft})});let{typeSelectHandlers:i}=Sa({isDisabled:()=>E(o.disallowTypeAhead),keyboardDelegate:()=>E(o.keyboardDelegate),selectionManager:()=>E(o.selectionManager)}),c=()=>E(o.orientation)??"vertical",u=m=>{ce(m,i.onKeyDown),m.altKey&&m.key==="Tab"&&m.preventDefault();let y=t();if(!y?.contains(m.target))return;let b=E(o.selectionManager),x=E(o.selectOnFocus),w=L=>{L!=null&&(b.setFocusedKey(L),m.shiftKey&&b.selectionMode()==="multiple"?b.extendSelection(L):x&&!Di(m)&&b.replaceSelection(L))},$=E(o.keyboardDelegate),O=E(o.shouldFocusWrap),D=b.focusedKey();switch(m.key){case(c()==="vertical"?"ArrowDown":"ArrowRight"):{if($.getKeyBelow){m.preventDefault();let L;D!=null?L=$.getKeyBelow(D):L=$.getFirstKey?.(),L==null&&O&&(L=$.getFirstKey?.(D)),w(L)}break}case(c()==="vertical"?"ArrowUp":"ArrowLeft"):{if($.getKeyAbove){m.preventDefault();let L;D!=null?L=$.getKeyAbove(D):L=$.getLastKey?.(),L==null&&O&&(L=$.getLastKey?.(D)),w(L)}break}case(c()==="vertical"?"ArrowLeft":"ArrowUp"):{if($.getKeyLeftOf){m.preventDefault();let L=l()==="rtl",S;D!=null?S=$.getKeyLeftOf(D):S=L?$.getFirstKey?.():$.getLastKey?.(),w(S)}break}case(c()==="vertical"?"ArrowRight":"ArrowDown"):{if($.getKeyRightOf){m.preventDefault();let L=l()==="rtl",S;D!=null?S=$.getKeyRightOf(D):S=L?$.getLastKey?.():$.getFirstKey?.(),w(S)}break}case"Home":if($.getFirstKey){m.preventDefault();let L=$.getFirstKey(D,Ut(m));L!=null&&(b.setFocusedKey(L),Ut(m)&&m.shiftKey&&b.selectionMode()==="multiple"?b.extendSelection(L):x&&b.replaceSelection(L))}break;case"End":if($.getLastKey){m.preventDefault();let L=$.getLastKey(D,Ut(m));L!=null&&(b.setFocusedKey(L),Ut(m)&&m.shiftKey&&b.selectionMode()==="multiple"?b.extendSelection(L):x&&b.replaceSelection(L))}break;case"PageDown":if($.getKeyPageBelow&&D!=null){m.preventDefault();let L=$.getKeyPageBelow(D);w(L)}break;case"PageUp":if($.getKeyPageAbove&&D!=null){m.preventDefault();let L=$.getKeyPageAbove(D);w(L)}break;case"a":Ut(m)&&b.selectionMode()==="multiple"&&E(o.disallowSelectAll)!==!0&&(m.preventDefault(),b.selectAll());break;case"Escape":m.defaultPrevented||(m.preventDefault(),E(o.disallowEmptySelection)||b.clearSelection());break;case"Tab":if(!E(o.allowsTabNavigation)){if(m.shiftKey)y.focus();else{let L=Vl(y,{tabbable:!0}),S,F;do F=L.lastChild(),F&&(S=F);while(F);S&&!S.contains(document.activeElement)&&Te(S)}break}}},d=m=>{let y=E(o.selectionManager),b=E(o.keyboardDelegate),x=E(o.selectOnFocus);if(y.isFocused()){m.currentTarget.contains(m.target)||y.setFocused(!1);return}if(m.currentTarget.contains(m.target)){if(y.setFocused(!0),y.focusedKey()==null){let w=O=>{O!=null&&(y.setFocusedKey(O),x&&y.replaceSelection(O))},$=m.relatedTarget;$&&m.currentTarget.compareDocumentPosition($)&Node.DOCUMENT_POSITION_FOLLOWING?w(y.lastSelectedKey()??b.getLastKey?.()):w(y.firstSelectedKey()??b.getFirstKey?.())}else if(!E(o.isVirtualized)){let w=s();if(w){w.scrollTop=a.top,w.scrollLeft=a.left;let $=w.querySelector(`[data-key="${y.focusedKey()}"]`);$&&(Te($),ir(w,$))}}}},g=m=>{let y=E(o.selectionManager);m.currentTarget.contains(m.relatedTarget)||y.setFocused(!1)},f=m=>{s()===m.target&&m.preventDefault()},h=()=>{let m=E(o.autoFocus);if(!m)return;let y=E(o.selectionManager),b=E(o.keyboardDelegate),x;m==="first"&&(x=b.getFirstKey?.()),m==="last"&&(x=b.getLastKey?.());let w=y.selectedKeys();w.size&&(x=w.values().next().value),y.setFocused(!0),y.setFocusedKey(x);let $=t();$&&x==null&&!E(o.shouldUseVirtualFocus)&&Te($)};return bt(()=>{o.deferAutoFocus?setTimeout(h,0):h()}),B(Je([s,()=>E(o.isVirtualized),()=>E(o.selectionManager).focusedKey()],m=>{let[y,b,x]=m;if(b)x&&o.scrollToKey?.(x);else if(x&&y){let w=y.querySelector(`[data-key="${x}"]`);w&&ir(y,w)}})),{tabIndex:M(()=>{if(!E(o.shouldUseVirtualFocus))return E(o.selectionManager).focusedKey()==null?0:-1}),onKeyDown:u,onMouseDown:f,onFocusIn:d,onFocusOut:g}}function Pi(e,t){let n=()=>E(e.selectionManager),r=()=>E(e.key),o=()=>E(e.shouldUseVirtualFocus),s=b=>{n().selectionMode()!=="none"&&(n().selectionMode()==="single"?n().isSelected(r())&&!n().disallowEmptySelection()?n().toggleSelection(r()):n().replaceSelection(r()):b?.shiftKey?n().extendSelection(r()):n().selectionBehavior()==="toggle"||Ut(b)||"pointerType"in b&&b.pointerType==="touch"?n().toggleSelection(r()):n().replaceSelection(r()))},l=()=>n().isSelected(r()),a=()=>E(e.disabled)||n().isDisabled(r()),i=()=>!a()&&n().canSelectItem(r()),c=null,u=b=>{i()&&(c=b.pointerType,b.pointerType==="mouse"&&b.button===0&&!E(e.shouldSelectOnPressUp)&&s(b))},d=b=>{i()&&b.pointerType==="mouse"&&b.button===0&&E(e.shouldSelectOnPressUp)&&E(e.allowsDifferentPressOrigin)&&s(b)},g=b=>{i()&&(E(e.shouldSelectOnPressUp)&&!E(e.allowsDifferentPressOrigin)||c!=="mouse")&&s(b)},f=b=>{!i()||!["Enter"," "].includes(b.key)||(Di(b)?n().toggleSelection(r()):s(b))},h=b=>{a()&&b.preventDefault()},p=b=>{let x=t();o()||a()||!x||b.target===x&&n().setFocusedKey(r())},m=M(()=>{if(!(o()||a()))return r()===n().focusedKey()?0:-1}),y=M(()=>E(e.virtualized)?void 0:r());return B(Je([t,r,o,()=>n().focusedKey(),()=>n().isFocused()],([b,x,w,$,O])=>{b&&x===$&&O&&!w&&document.activeElement!==b&&(e.focus?e.focus():Te(b))})),{isSelected:l,isDisabled:a,allowsSelection:i,tabIndex:m,dataKey:y,onPointerDown:u,onPointerUp:d,onClick:g,onKeyDown:f,onMouseDown:h,onFocus:p}}var Ta=class{collection;state;constructor(e,t){this.collection=e,this.state=t}selectionMode(){return this.state.selectionMode()}disallowEmptySelection(){return this.state.disallowEmptySelection()}selectionBehavior(){return this.state.selectionBehavior()}setSelectionBehavior(e){this.state.setSelectionBehavior(e)}isFocused(){return this.state.isFocused()}setFocused(e){this.state.setFocused(e)}focusedKey(){return this.state.focusedKey()}setFocusedKey(e){(e==null||this.collection().getItem(e))&&this.state.setFocusedKey(e)}selectedKeys(){return this.state.selectedKeys()}isSelected(e){if(this.state.selectionMode()==="none")return!1;let t=this.getKey(e);return t==null?!1:this.state.selectedKeys().has(t)}isEmpty(){return this.state.selectedKeys().size===0}isSelectAll(){if(this.isEmpty())return!1;let e=this.state.selectedKeys();return this.getAllSelectableKeys().every(t=>e.has(t))}firstSelectedKey(){let e;for(let t of this.state.selectedKeys()){let n=this.collection().getItem(t),r=n?.index!=null&&e?.index!=null&&n.index<e.index;(!e||r)&&(e=n)}return e?.key}lastSelectedKey(){let e;for(let t of this.state.selectedKeys()){let n=this.collection().getItem(t),r=n?.index!=null&&e?.index!=null&&n.index>e.index;(!e||r)&&(e=n)}return e?.key}extendSelection(e){if(this.selectionMode()==="none")return;if(this.selectionMode()==="single"){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n=this.state.selectedKeys(),r=n.anchorKey||t,o=new dt(n,r,t);for(let s of this.getKeyRange(r,n.currentKey||t))o.delete(s);for(let s of this.getKeyRange(t,r))this.canSelectItem(s)&&o.add(s);this.state.setSelectedKeys(o)}getKeyRange(e,t){let n=this.collection().getItem(e),r=this.collection().getItem(t);return n&&r?n.index!=null&&r.index!=null&&n.index<=r.index?this.getKeyRangeInternal(e,t):this.getKeyRangeInternal(t,e):[]}getKeyRangeInternal(e,t){let n=[],r=e;for(;r!=null;){let o=this.collection().getItem(r);if(o&&o.type==="item"&&n.push(r),r===t)return n;r=this.collection().getKeyAfter(r)}return[]}getKey(e){let t=this.collection().getItem(e);return t?!t||t.type!=="item"?null:t.key:e}toggleSelection(e){if(this.selectionMode()==="none")return;if(this.selectionMode()==="single"&&!this.isSelected(e)){this.replaceSelection(e);return}let t=this.getKey(e);if(t==null)return;let n=new dt(this.state.selectedKeys());n.has(t)?n.delete(t):this.canSelectItem(t)&&(n.add(t),n.anchorKey=t,n.currentKey=t),!(this.disallowEmptySelection()&&n.size===0)&&this.state.setSelectedKeys(n)}replaceSelection(e){if(this.selectionMode()==="none")return;let t=this.getKey(e);if(t==null)return;let n=this.canSelectItem(t)?new dt([t],t,t):new dt;this.state.setSelectedKeys(n)}setSelectedKeys(e){if(this.selectionMode()==="none")return;let t=new dt;for(let n of e){let r=this.getKey(n);if(r!=null&&(t.add(r),this.selectionMode()==="single"))break}this.state.setSelectedKeys(t)}selectAll(){this.selectionMode()==="multiple"&&this.state.setSelectedKeys(new Set(this.getAllSelectableKeys()))}clearSelection(){let e=this.state.selectedKeys();!this.disallowEmptySelection()&&e.size>0&&this.state.setSelectedKeys(new dt)}toggleSelectAll(){this.isSelectAll()?this.clearSelection():this.selectAll()}select(e,t){this.selectionMode()!=="none"&&(this.selectionMode()==="single"?this.isSelected(e)&&!this.disallowEmptySelection()?this.toggleSelection(e):this.replaceSelection(e):this.selectionBehavior()==="toggle"||t&&t.pointerType==="touch"?this.toggleSelection(e):this.replaceSelection(e))}isSelectionEqual(e){if(e===this.state.selectedKeys())return!0;let t=this.selectedKeys();if(e.size!==t.size)return!1;for(let n of e)if(!t.has(n))return!1;for(let n of t)if(!e.has(n))return!1;return!0}canSelectItem(e){if(this.state.selectionMode()==="none")return!1;let t=this.collection().getItem(e);return t!=null&&!t.disabled}isDisabled(e){let t=this.collection().getItem(e);return!t||t.disabled}getAllSelectableKeys(){let e=[];return(n=>{for(;n!=null;){if(this.canSelectItem(n)){let r=this.collection().getItem(n);if(!r)continue;r.type==="item"&&e.push(n)}n=this.collection().getKeyAfter(n)}})(this.collection().getFirstKey()),e}},Po=class{keyMap=new Map;iterable;firstKey;lastKey;constructor(e){this.iterable=e;for(let r of e)this.keyMap.set(r.key,r);if(this.keyMap.size===0)return;let t,n=0;for(let[r,o]of this.keyMap)t?(t.nextKey=r,o.prevKey=t.key):(this.firstKey=r,o.prevKey=void 0),o.type==="item"&&(o.index=n++),t=o,t.nextKey=void 0;this.lastKey=t.key}*[Symbol.iterator](){yield*this.iterable}getSize(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){return this.keyMap.get(e)?.prevKey}getKeyAfter(e){return this.keyMap.get(e)?.nextKey}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}};function Aa(e){let t=Ca(e),r=ga({dataSource:()=>E(e.dataSource),getKey:()=>E(e.getKey),getTextValue:()=>E(e.getTextValue),getDisabled:()=>E(e.getDisabled),getSectionChildren:()=>E(e.getSectionChildren),factory:s=>e.filter?new Po(e.filter(s)):new Po(s)},[()=>e.filter]),o=new Ta(r,t);return jr(()=>{let s=t.focusedKey();s!=null&&!r().getItem(s)&&t.setFocusedKey(void 0)}),{collection:r,selectionManager:()=>o}}var Me=e=>typeof e=="function"?e():e,Ia=e=>{let t=M(()=>{let l=Me(e.element);if(l)return getComputedStyle(l)}),n=()=>t()?.animationName??"none",[r,o]=z(Me(e.show)?"present":"hidden"),s="none";return B(l=>{let a=Me(e.show);return At(()=>{if(l===a)return a;let i=s,c=n();a?o("present"):c==="none"||t()?.display==="none"?o("hidden"):o(l===!0&&i!==c?"hiding":"hidden")}),a}),B(()=>{let l=Me(e.element);if(!l)return;let a=c=>{c.target===l&&(s=n())},i=c=>{let d=n().includes(c.animationName);c.target===l&&d&&r()==="hiding"&&o("hidden")};l.addEventListener("animationstart",a),l.addEventListener("animationcancel",i),l.addEventListener("animationend",i),U(()=>{l.removeEventListener("animationstart",a),l.removeEventListener("animationcancel",i),l.removeEventListener("animationend",i)})}),{present:()=>r()==="present"||r()==="hiding",state:r}},Da=Ia,Li=Da,Dn="data-kb-top-layer",Oi,lr=!1,gt=[];function cn(e){return gt.findIndex(t=>t.node===e)}function Pa(e){return gt[cn(e)]}function La(e){return gt[gt.length-1].node===e}function qi(){return gt.filter(e=>e.isPointerBlocking)}function Oa(){return[...qi()].slice(-1)[0]}function yr(){return qi().length>0}function Fi(e){let t=cn(Oa()?.node);return cn(e)<t}function qa(e){gt.push(e)}function Fa(e){let t=cn(e);t<0||gt.splice(t,1)}function _a(){for(let{node:e}of gt)e.style.pointerEvents=Fi(e)?"none":"auto"}function za(e){if(yr()&&!lr){let t=tt(e);Oi=document.body.style.pointerEvents,t.body.style.pointerEvents="none",lr=!0}}function Ra(e){if(yr())return;let t=tt(e);t.body.style.pointerEvents=Oi,t.body.style.length===0&&t.body.removeAttribute("style"),lr=!1}var Oe={layers:gt,isTopMostLayer:La,hasPointerBlockingLayer:yr,isBelowPointerBlockingLayer:Fi,addLayer:qa,removeLayer:Fa,indexOf:cn,find:Pa,assignPointerEventToLayers:_a,disableBodyPointerEvents:za,restoreBodyPointerEvents:Ra},Ka={};Kn(Ka,{Button:()=>Ua,Root:()=>br});var Ba=["button","color","file","image","reset","submit"];function Na(e){let t=e.tagName.toLowerCase();return t==="button"?!0:t==="input"&&e.type?Ba.indexOf(e.type)!==-1:!1}function br(e){let t,n=Q({type:"button"},e),[r,o]=Z(n,["ref","type","disabled"]),s=Rn(()=>t,()=>"button"),l=M(()=>{let c=s();return c==null?!1:Na({tagName:c,type:r.type})}),a=M(()=>s()==="input"),i=M(()=>s()==="a"&&t?.getAttribute("href")!=null);return v(ue,j({as:"button",ref(c){let u=De(d=>t=d,r.ref);typeof u=="function"&&u(c)},get type(){return l()||a()?r.type:void 0},get role(){return!l()&&!i()?"button":void 0},get tabIndex(){return!l()&&!i()&&!r.disabled?0:void 0},get disabled(){return l()||a()?r.disabled:void 0},get"aria-disabled"(){return!l()&&!a()&&r.disabled?!0:void 0},get"data-disabled"(){return r.disabled?"":void 0}},o))}var Ua=br,Ga=["top","right","bottom","left"],et=Math.min,Fe=Math.max,Pn=Math.round,Tn=Math.floor,$t=e=>({x:e,y:e}),Va={left:"right",right:"left",bottom:"top",top:"bottom"},Ha={start:"end",end:"start"};function ar(e,t,n){return Fe(e,et(t,n))}function Ft(e,t){return typeof e=="function"?e(t):e}function Ct(e){return e.split("-")[0]}function Ht(e){return e.split("-")[1]}function _i(e){return e==="x"?"y":"x"}function xr(e){return e==="y"?"height":"width"}function Ot(e){return["top","bottom"].includes(Ct(e))?"y":"x"}function wr(e){return _i(Ot(e))}function ja(e,t,n){n===void 0&&(n=!1);let r=Ht(e),o=wr(e),s=xr(o),l=o==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[s]>t.floating[s]&&(l=Ln(l)),[l,Ln(l)]}function Wa(e){let t=Ln(e);return[cr(e),t,cr(t)]}function cr(e){return e.replace(/start|end/g,t=>Ha[t])}function Qa(e,t,n){let r=["left","right"],o=["right","left"],s=["top","bottom"],l=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?s:l;default:return[]}}function Ya(e,t,n,r){let o=Ht(e),s=Qa(Ct(e),n==="start",r);return o&&(s=s.map(l=>l+"-"+o),t&&(s=s.concat(s.map(cr)))),s}function Ln(e){return e.replace(/left|right|bottom|top/g,t=>Va[t])}function Xa(e){return Y({top:0,right:0,bottom:0,left:0},e)}function zi(e){return typeof e!="number"?Xa(e):{top:e,right:e,bottom:e,left:e}}function On(e){let{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function Lo(e,t,n){let{reference:r,floating:o}=e,s=Ot(t),l=wr(t),a=xr(l),i=Ct(t),c=s==="y",u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,g=r[a]/2-o[a]/2,f;switch(i){case"top":f={x:u,y:r.y-o.height};break;case"bottom":f={x:u,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:d};break;case"left":f={x:r.x-o.width,y:d};break;default:f={x:r.x,y:r.y}}switch(Ht(t)){case"start":f[l]-=g*(n&&c?-1:1);break;case"end":f[l]+=g*(n&&c?-1:1);break}return f}var Za=async(e,t,n)=>{let{placement:r="bottom",strategy:o="absolute",middleware:s=[],platform:l}=n,a=s.filter(Boolean),i=await(l.isRTL==null?void 0:l.isRTL(t)),c=await l.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=Lo(c,r,i),g=r,f={},h=0;for(let p=0;p<a.length;p++){let{name:m,fn:y}=a[p],{x:b,y:x,data:w,reset:$}=await y({x:u,y:d,initialPlacement:r,placement:g,strategy:o,middlewareData:f,rects:c,platform:l,elements:{reference:e,floating:t}});u=b??u,d=x??d,f=pe(Y({},f),{[m]:Y(Y({},f[m]),w)}),$&&h<=50&&(h++,typeof $=="object"&&($.placement&&(g=$.placement),$.rects&&(c=$.rects===!0?await l.getElementRects({reference:e,floating:t,strategy:o}):$.rects),{x:u,y:d}=Lo(c,g,i)),p=-1)}return{x:u,y:d,placement:g,strategy:o,middlewareData:f}};async function un(e,t){var n;t===void 0&&(t={});let{x:r,y:o,platform:s,rects:l,elements:a,strategy:i}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:g=!1,padding:f=0}=Ft(t,e),h=zi(f),m=a[g?d==="floating"?"reference":"floating":d],y=On(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(m)))==null||n?m:m.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:i})),b=d==="floating"?{x:r,y:o,width:l.floating.width,height:l.floating.height}:l.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a.floating)),w=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},$=On(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:x,strategy:i}):b);return{top:(y.top-$.top+h.top)/w.y,bottom:($.bottom-y.bottom+h.bottom)/w.y,left:(y.left-$.left+h.left)/w.x,right:($.right-y.right+h.right)/w.x}}var Ja=e=>({name:"arrow",options:e,async fn(t){let{x:n,y:r,placement:o,rects:s,platform:l,elements:a,middlewareData:i}=t,{element:c,padding:u=0}=Ft(e,t)||{};if(c==null)return{};let d=zi(u),g={x:n,y:r},f=wr(o),h=xr(f),p=await l.getDimensions(c),m=f==="y",y=m?"top":"left",b=m?"bottom":"right",x=m?"clientHeight":"clientWidth",w=s.reference[h]+s.reference[f]-g[f]-s.floating[h],$=g[f]-s.reference[f],O=await(l.getOffsetParent==null?void 0:l.getOffsetParent(c)),D=O?O[x]:0;(!D||!await(l.isElement==null?void 0:l.isElement(O)))&&(D=a.floating[x]||s.floating[h]);let L=w/2-$/2,S=D/2-p[h]/2-1,F=et(d[y],S),H=et(d[b],S),G=F,ne=D-p[h]-H,fe=D/2-p[h]/2+L,J=ar(G,fe,ne),ge=!i.arrow&&Ht(o)!=null&&fe!==J&&s.reference[h]/2-(fe<G?F:H)-p[h]/2<0,ie=ge?fe<G?fe-G:fe-ne:0;return{[f]:g[f]+ie,data:Y({[f]:J,centerOffset:fe-J-ie},ge&&{alignmentOffset:ie}),reset:ge}}}),ec=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;let{placement:o,middlewareData:s,rects:l,initialPlacement:a,platform:i,elements:c}=t,fe=Ft(e,t),{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:g,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:p=!0}=fe,m=en(fe,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","fallbackAxisSideDirection","flipAlignment"]);if((n=s.arrow)!=null&&n.alignmentOffset)return{};let y=Ct(o),b=Ot(a),x=Ct(a)===a,w=await(i.isRTL==null?void 0:i.isRTL(c.floating)),$=g||(x||!p?[Ln(a)]:Wa(a)),O=h!=="none";!g&&O&&$.push(...Ya(a,p,h,w));let D=[a,...$],L=await un(t,m),S=[],F=((r=s.flip)==null?void 0:r.overflows)||[];if(u&&S.push(L[y]),d){let J=ja(o,l,w);S.push(L[J[0]],L[J[1]])}if(F=[...F,{placement:o,overflows:S}],!S.every(J=>J<=0)){var H,G;let J=(((H=s.flip)==null?void 0:H.index)||0)+1,ge=D[J];if(ge)return{data:{index:J,overflows:F},reset:{placement:ge}};let ie=(G=F.filter(de=>de.overflows[0]<=0).sort((de,le)=>de.overflows[1]-le.overflows[1])[0])==null?void 0:G.placement;if(!ie)switch(f){case"bestFit":{var ne;let de=(ne=F.filter(le=>{if(O){let re=Ot(le.placement);return re===b||re==="y"}return!0}).map(le=>[le.placement,le.overflows.filter(re=>re>0).reduce((re,Se)=>re+Se,0)]).sort((le,re)=>le[1]-re[1])[0])==null?void 0:ne[0];de&&(ie=de);break}case"initialPlacement":ie=a;break}if(o!==ie)return{reset:{placement:ie}}}return{}}}};function Oo(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function qo(e){return Ga.some(t=>e[t]>=0)}var tc=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){let{rects:n}=t,s=Ft(e,t),{strategy:r="referenceHidden"}=s,o=en(s,["strategy"]);switch(r){case"referenceHidden":{let l=await un(t,pe(Y({},o),{elementContext:"reference"})),a=Oo(l,n.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:qo(a)}}}case"escaped":{let l=await un(t,pe(Y({},o),{altBoundary:!0})),a=Oo(l,n.floating);return{data:{escapedOffsets:a,escaped:qo(a)}}}default:return{}}}}};async function nc(e,t){let{placement:n,platform:r,elements:o}=e,s=await(r.isRTL==null?void 0:r.isRTL(o.floating)),l=Ct(n),a=Ht(n),i=Ot(n)==="y",c=["left","top"].includes(l)?-1:1,u=s&&i?-1:1,d=Ft(t,e),{mainAxis:g,crossAxis:f,alignmentAxis:h}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:Y({mainAxis:0,crossAxis:0,alignmentAxis:null},d);return a&&typeof h=="number"&&(f=a==="end"?h*-1:h),i?{x:f*u,y:g*c}:{x:g*c,y:f*u}}var rc=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;let{x:o,y:s,placement:l,middlewareData:a}=t,i=await nc(t,e);return l===((n=a.offset)==null?void 0:n.placement)&&(r=a.arrow)!=null&&r.alignmentOffset?{}:{x:o+i.x,y:s+i.y,data:pe(Y({},i),{placement:l})}}}},oc=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){let{x:n,y:r,placement:o}=t,m=Ft(e,t),{mainAxis:s=!0,crossAxis:l=!1,limiter:a={fn:y=>{let{x:b,y:x}=y;return{x:b,y:x}}}}=m,i=en(m,["mainAxis","crossAxis","limiter"]),c={x:n,y:r},u=await un(t,i),d=Ot(Ct(o)),g=_i(d),f=c[g],h=c[d];if(s){let y=g==="y"?"top":"left",b=g==="y"?"bottom":"right",x=f+u[y],w=f-u[b];f=ar(x,f,w)}if(l){let y=d==="y"?"top":"left",b=d==="y"?"bottom":"right",x=h+u[y],w=h-u[b];h=ar(x,h,w)}let p=a.fn(pe(Y({},t),{[g]:f,[d]:h}));return pe(Y({},p),{data:{x:p.x-n,y:p.y-r}})}}},ic=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){let{placement:n,rects:r,platform:o,elements:s}=t,L=Ft(e,t),{apply:l=()=>{}}=L,a=en(L,["apply"]),i=await un(t,a),c=Ct(n),u=Ht(n),d=Ot(n)==="y",{width:g,height:f}=r.floating,h,p;c==="top"||c==="bottom"?(h=c,p=u===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?"start":"end")?"left":"right"):(p=c,h=u==="end"?"top":"bottom");let m=f-i.top-i.bottom,y=g-i.left-i.right,b=et(f-i[h],m),x=et(g-i[p],y),w=!t.middlewareData.shift,$=b,O=x;if(d?O=u||w?et(x,y):y:$=u||w?et(b,m):m,w&&!u){let S=Fe(i.left,0),F=Fe(i.right,0),H=Fe(i.top,0),G=Fe(i.bottom,0);d?O=g-2*(S!==0||F!==0?S+F:Fe(i.left,i.right)):$=f-2*(H!==0||G!==0?H+G:Fe(i.top,i.bottom))}await l(pe(Y({},t),{availableWidth:O,availableHeight:$}));let D=await o.getDimensions(s.floating);return g!==D.width||f!==D.height?{reset:{rects:!0}}:{}}}};function jt(e){return Ri(e)?(e.nodeName||"").toLowerCase():"#document"}function _e(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function ht(e){var t;return(t=(Ri(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ri(e){return e instanceof Node||e instanceof _e(e).Node}function Ye(e){return e instanceof Element||e instanceof _e(e).Element}function nt(e){return e instanceof HTMLElement||e instanceof _e(e).HTMLElement}function Fo(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof _e(e).ShadowRoot}function pn(e){let{overflow:t,overflowX:n,overflowY:r,display:o}=Xe(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function sc(e){return["table","td","th"].includes(jt(e))}function Bn(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function $r(e){let t=Cr(),n=Ye(e)?Xe(e):e;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function lc(e){let t=St(e);for(;nt(t)&&!Vt(t);){if($r(t))return t;if(Bn(t))return null;t=St(t)}return null}function Cr(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Vt(e){return["html","body","#document"].includes(jt(e))}function Xe(e){return _e(e).getComputedStyle(e)}function Nn(e){return Ye(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function St(e){if(jt(e)==="html")return e;let t=e.assignedSlot||e.parentNode||Fo(e)&&e.host||ht(e);return Fo(t)?t.host:t}function Ki(e){let t=St(e);return Vt(t)?e.ownerDocument?e.ownerDocument.body:e.body:nt(t)&&pn(t)?t:Ki(t)}function dn(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);let o=Ki(e),s=o===((r=e.ownerDocument)==null?void 0:r.body),l=_e(o);return s?t.concat(l,l.visualViewport||[],pn(o)?o:[],l.frameElement&&n?dn(l.frameElement):[]):t.concat(o,dn(o,[],n))}function Bi(e){let t=Xe(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,o=nt(e),s=o?e.offsetWidth:n,l=o?e.offsetHeight:r,a=Pn(n)!==s||Pn(r)!==l;return a&&(n=s,r=l),{width:n,height:r,$:a}}function Sr(e){return Ye(e)?e:e.contextElement}function Gt(e){let t=Sr(e);if(!nt(t))return $t(1);let n=t.getBoundingClientRect(),{width:r,height:o,$:s}=Bi(t),l=(s?Pn(n.width):n.width)/r,a=(s?Pn(n.height):n.height)/o;return(!l||!Number.isFinite(l))&&(l=1),(!a||!Number.isFinite(a))&&(a=1),{x:l,y:a}}var ac=$t(0);function Ni(e){let t=_e(e);return!Cr()||!t.visualViewport?ac:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function cc(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==_e(e)?!1:t}function qt(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let o=e.getBoundingClientRect(),s=Sr(e),l=$t(1);t&&(r?Ye(r)&&(l=Gt(r)):l=Gt(e));let a=cc(s,n,r)?Ni(s):$t(0),i=(o.left+a.x)/l.x,c=(o.top+a.y)/l.y,u=o.width/l.x,d=o.height/l.y;if(s){let g=_e(s),f=r&&Ye(r)?_e(r):r,h=g,p=h.frameElement;for(;p&&r&&f!==h;){let m=Gt(p),y=p.getBoundingClientRect(),b=Xe(p),x=y.left+(p.clientLeft+parseFloat(b.paddingLeft))*m.x,w=y.top+(p.clientTop+parseFloat(b.paddingTop))*m.y;i*=m.x,c*=m.y,u*=m.x,d*=m.y,i+=x,c+=w,h=_e(p),p=h.frameElement}}return On({width:u,height:d,x:i,y:c})}function uc(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e,s=o==="fixed",l=ht(r),a=t?Bn(t.floating):!1;if(r===l||a&&s)return n;let i={scrollLeft:0,scrollTop:0},c=$t(1),u=$t(0),d=nt(r);if((d||!d&&!s)&&((jt(r)!=="body"||pn(l))&&(i=Nn(r)),nt(r))){let g=qt(r);c=Gt(r),u.x=g.x+r.clientLeft,u.y=g.y+r.clientTop}return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-i.scrollLeft*c.x+u.x,y:n.y*c.y-i.scrollTop*c.y+u.y}}function dc(e){return Array.from(e.getClientRects())}function Ui(e){return qt(ht(e)).left+Nn(e).scrollLeft}function fc(e){let t=ht(e),n=Nn(e),r=e.ownerDocument.body,o=Fe(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),s=Fe(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),l=-n.scrollLeft+Ui(e),a=-n.scrollTop;return Xe(r).direction==="rtl"&&(l+=Fe(t.clientWidth,r.clientWidth)-o),{width:o,height:s,x:l,y:a}}function gc(e,t){let n=_e(e),r=ht(e),o=n.visualViewport,s=r.clientWidth,l=r.clientHeight,a=0,i=0;if(o){s=o.width,l=o.height;let c=Cr();(!c||c&&t==="fixed")&&(a=o.offsetLeft,i=o.offsetTop)}return{width:s,height:l,x:a,y:i}}function hc(e,t){let n=qt(e,!0,t==="fixed"),r=n.top+e.clientTop,o=n.left+e.clientLeft,s=nt(e)?Gt(e):$t(1),l=e.clientWidth*s.x,a=e.clientHeight*s.y,i=o*s.x,c=r*s.y;return{width:l,height:a,x:i,y:c}}function _o(e,t,n){let r;if(t==="viewport")r=gc(e,n);else if(t==="document")r=fc(ht(e));else if(Ye(t))r=hc(t,n);else{let o=Ni(e);r=pe(Y({},t),{x:t.x-o.x,y:t.y-o.y})}return On(r)}function Gi(e,t){let n=St(e);return n===t||!Ye(n)||Vt(n)?!1:Xe(n).position==="fixed"||Gi(n,t)}function vc(e,t){let n=t.get(e);if(n)return n;let r=dn(e,[],!1).filter(a=>Ye(a)&&jt(a)!=="body"),o=null,s=Xe(e).position==="fixed",l=s?St(e):e;for(;Ye(l)&&!Vt(l);){let a=Xe(l),i=$r(l);!i&&a.position==="fixed"&&(o=null),(s?!i&&!o:!i&&a.position==="static"&&!!o&&["absolute","fixed"].includes(o.position)||pn(l)&&!i&&Gi(e,l))?r=r.filter(u=>u!==l):o=a,l=St(l)}return t.set(e,r),r}function pc(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e,l=[...n==="clippingAncestors"?Bn(t)?[]:vc(t,this._c):[].concat(n),r],a=l[0],i=l.reduce((c,u)=>{let d=_o(t,u,o);return c.top=Fe(d.top,c.top),c.right=et(d.right,c.right),c.bottom=et(d.bottom,c.bottom),c.left=Fe(d.left,c.left),c},_o(t,a,o));return{width:i.right-i.left,height:i.bottom-i.top,x:i.left,y:i.top}}function mc(e){let{width:t,height:n}=Bi(e);return{width:t,height:n}}function yc(e,t,n){let r=nt(t),o=ht(t),s=n==="fixed",l=qt(e,!0,s,t),a={scrollLeft:0,scrollTop:0},i=$t(0);if(r||!r&&!s)if((jt(t)!=="body"||pn(o))&&(a=Nn(t)),r){let d=qt(t,!0,s,t);i.x=d.x+t.clientLeft,i.y=d.y+t.clientTop}else o&&(i.x=Ui(o));let c=l.left+a.scrollLeft-i.x,u=l.top+a.scrollTop-i.y;return{x:c,y:u,width:l.width,height:l.height}}function Zn(e){return Xe(e).position==="static"}function zo(e,t){return!nt(e)||Xe(e).position==="fixed"?null:t?t(e):e.offsetParent}function Vi(e,t){let n=_e(e);if(Bn(e))return n;if(!nt(e)){let o=St(e);for(;o&&!Vt(o);){if(Ye(o)&&!Zn(o))return o;o=St(o)}return n}let r=zo(e,t);for(;r&&sc(r)&&Zn(r);)r=zo(r,t);return r&&Vt(r)&&Zn(r)&&!$r(r)?n:r||lc(e)||n}var bc=async function(e){let t=this.getOffsetParent||Vi,n=this.getDimensions,r=await n(e.floating);return{reference:yc(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function xc(e){return Xe(e).direction==="rtl"}var Hi={convertOffsetParentRelativeRectToViewportRelativeRect:uc,getDocumentElement:ht,getClippingRect:pc,getOffsetParent:Vi,getElementRects:bc,getClientRects:dc,getDimensions:mc,getScale:Gt,isElement:Ye,isRTL:xc};function wc(e,t){let n=null,r,o=ht(e);function s(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function l(a,i){a===void 0&&(a=!1),i===void 0&&(i=1),s();let{left:c,top:u,width:d,height:g}=e.getBoundingClientRect();if(a||t(),!d||!g)return;let f=Tn(u),h=Tn(o.clientWidth-(c+d)),p=Tn(o.clientHeight-(u+g)),m=Tn(c),b={rootMargin:-f+"px "+-h+"px "+-p+"px "+-m+"px",threshold:Fe(0,et(1,i))||1},x=!0;function w($){let O=$[0].intersectionRatio;if(O!==i){if(!x)return l();O?l(!1,O):r=setTimeout(()=>{l(!1,1e-7)},1e3)}x=!1}try{n=new IntersectionObserver(w,pe(Y({},b),{root:o.ownerDocument}))}catch{n=new IntersectionObserver(w,b)}n.observe(e)}return l(!0),s}function $c(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:o=!0,ancestorResize:s=!0,elementResize:l=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:i=!1}=r,c=Sr(e),u=o||s?[...c?dn(c):[],...dn(t)]:[];u.forEach(y=>{o&&y.addEventListener("scroll",n,{passive:!0}),s&&y.addEventListener("resize",n)});let d=c&&a?wc(c,n):null,g=-1,f=null;l&&(f=new ResizeObserver(y=>{let[b]=y;b&&b.target===c&&f&&(f.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(t)})),n()}),c&&!i&&f.observe(c),f.observe(t));let h,p=i?qt(e):null;i&&m();function m(){let y=qt(e);p&&(y.x!==p.x||y.y!==p.y||y.width!==p.width||y.height!==p.height)&&n(),p=y,h=requestAnimationFrame(m)}return n(),()=>{var y;u.forEach(b=>{o&&b.removeEventListener("scroll",n),s&&b.removeEventListener("resize",n)}),d?.(),(y=f)==null||y.disconnect(),f=null,i&&cancelAnimationFrame(h)}}var Cc=rc,Sc=oc,kc=ec,Ec=ic,Mc=tc,Tc=Ja,Ac=(e,t,n)=>{let r=new Map,o=Y({platform:Hi},n),s=pe(Y({},o.platform),{_c:r});return Za(e,t,pe(Y({},o),{platform:s}))},kr=be();function Er(){let e=xe(kr);if(e===void 0)throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");return e}var Ic=_('<svg display="block" viewBox="0 0 30 30" style="transform:scale(1.02)"><g><path fill="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z"></path><path stroke="none" d="M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z">'),ur=30,Ro=ur/2,Dc={top:180,right:-90,bottom:0,left:90};function Mr(e){let t=Er(),n=Q({size:ur},e),[r,o]=Z(n,["ref","style","size"]),s=()=>t.currentPlacement().split("-")[0],l=Pc(t.contentRef),a=()=>l()?.getPropertyValue("background-color")||"none",i=()=>l()?.getPropertyValue(`border-${s()}-color`)||"none",c=()=>l()?.getPropertyValue(`border-${s()}-width`)||"0px",u=()=>Number.parseInt(c())*2*(ur/r.size),d=()=>`rotate(${Dc[s()]} ${Ro} ${Ro}) translate(0 2)`;return v(ue,j({as:"div",ref(g){let f=De(t.setArrowRef,r.ref);typeof f=="function"&&f(g)},"aria-hidden":"true",get style(){return _n({position:"absolute","font-size":`${r.size}px`,width:"1em",height:"1em","pointer-events":"none",fill:a(),stroke:i(),"stroke-width":u()},r.style)}},o,{get children(){let g=Ic(),f=g.firstChild;return N(()=>A(f,"transform",d())),g}}))}function Pc(e){let[t,n]=z();return B(()=>{let r=e();r&&n(Dl(r).getComputedStyle(r))}),t}function Lc(e){let t=Er(),[n,r]=Z(e,["ref","style"]);return v(ue,j({as:"div",ref(o){let s=De(t.setPositionerRef,n.ref);typeof s=="function"&&s(o)},"data-popper-positioner":"",get style(){return _n({position:"absolute",top:0,left:0,"min-width":"max-content"},n.style)}},r))}function Ko(e){let{x:t=0,y:n=0,width:r=0,height:o=0}=e??{};if(typeof DOMRect=="function")return new DOMRect(t,n,r,o);let s={x:t,y:n,width:r,height:o,top:n,right:t+r,bottom:n+o,left:t};return pe(Y({},s),{toJSON:()=>s})}function Oc(e,t){return{contextElement:e,getBoundingClientRect:()=>{let r=t(e);return r?Ko(r):e?e.getBoundingClientRect():Ko()}}}function qc(e){return/^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e)}var Fc={top:"bottom",right:"left",bottom:"top",left:"right"};function _c(e,t){let[n,r]=e.split("-"),o=Fc[n];return r?n==="left"||n==="right"?`${o} ${r==="start"?"top":"bottom"}`:r==="start"?`${o} ${t==="rtl"?"right":"left"}`:`${o} ${t==="rtl"?"left":"right"}`:`${o} center`}function zc(e){let t=Q({getAnchorRect:g=>g?.getBoundingClientRect(),placement:"bottom",gutter:0,shift:0,flip:!0,slide:!0,overlap:!1,sameWidth:!1,fitViewport:!1,hideWhenDetached:!1,detachedPadding:0,arrowPadding:4,overflowPadding:8},e),[n,r]=z(),[o,s]=z(),[l,a]=z(t.placement),i=()=>Oc(t.anchorRef?.(),t.getAnchorRect),{direction:c}=kt();async function u(){let g=i(),f=n(),h=o();if(!g||!f)return;let p=(h?.clientHeight||0)/2,m=typeof t.gutter=="number"?t.gutter+p:t.gutter??p;f.style.setProperty("--kb-popper-content-overflow-padding",`${t.overflowPadding}px`),g.getBoundingClientRect();let y=[Cc(({placement:O})=>{let D=!!O.split("-")[1];return{mainAxis:m,crossAxis:D?void 0:t.shift,alignmentAxis:t.shift}})];if(t.flip!==!1){let O=typeof t.flip=="string"?t.flip.split(" "):void 0;if(O!==void 0&&!O.every(qc))throw new Error("`flip` expects a spaced-delimited list of placements");y.push(kc({padding:t.overflowPadding,fallbackPlacements:O}))}(t.slide||t.overlap)&&y.push(Sc({mainAxis:t.slide,crossAxis:t.overlap,padding:t.overflowPadding})),y.push(Ec({padding:t.overflowPadding,apply({availableWidth:O,availableHeight:D,rects:L}){let S=Math.round(L.reference.width);O=Math.floor(O),D=Math.floor(D),f.style.setProperty("--kb-popper-anchor-width",`${S}px`),f.style.setProperty("--kb-popper-content-available-width",`${O}px`),f.style.setProperty("--kb-popper-content-available-height",`${D}px`),t.sameWidth&&(f.style.width=`${S}px`),t.fitViewport&&(f.style.maxWidth=`${O}px`,f.style.maxHeight=`${D}px`)}})),t.hideWhenDetached&&y.push(Mc({padding:t.detachedPadding})),h&&y.push(Tc({element:h,padding:t.arrowPadding}));let b=await Ac(g,f,{placement:t.placement,strategy:"absolute",middleware:y,platform:pe(Y({},Hi),{isRTL:()=>c()==="rtl"})});if(a(b.placement),t.onCurrentPlacementChange?.(b.placement),!f)return;f.style.setProperty("--kb-popper-content-transform-origin",_c(b.placement,c()));let x=Math.round(b.x),w=Math.round(b.y),$;if(t.hideWhenDetached&&($=b.middlewareData.hide?.referenceHidden?"hidden":"visible"),Object.assign(f.style,{top:"0",left:"0",transform:`translate3d(${x}px, ${w}px, 0)`,visibility:$}),h&&b.middlewareData.arrow){let{x:O,y:D}=b.middlewareData.arrow,L=b.placement.split("-")[0];Object.assign(h.style,{left:O!=null?`${O}px`:"",top:D!=null?`${D}px`:"",[L]:"100%"})}}B(()=>{let g=i(),f=n();if(!g||!f)return;let h=$c(g,f,u,{elementResize:typeof ResizeObserver=="function"});U(h)}),B(()=>{let g=n(),f=t.contentRef?.();!g||!f||queueMicrotask(()=>{g.style.zIndex=getComputedStyle(f).zIndex})});let d={currentPlacement:l,contentRef:()=>t.contentRef?.(),setPositionerRef:r,setArrowRef:s};return v(kr.Provider,{value:d,get children(){return t.children}})}var ji=Object.assign(zc,{Arrow:Mr,Context:kr,usePopperContext:Er,Positioner:Lc});function Rc(e){let t=n=>{n.key===hr.Escape&&e.onEscapeKeyDown?.(n)};B(()=>{if(Ee||E(e.isDisabled))return;let n=e.ownerDocument?.()??tt();n.addEventListener("keydown",t),U(()=>{n.removeEventListener("keydown",t)})})}var Bo="interactOutside.pointerDownOutside",No="interactOutside.focusOutside";function Kc(e,t){let n,r=jl,o=()=>tt(t()),s=d=>e.onPointerDownOutside?.(d),l=d=>e.onFocusOutside?.(d),a=d=>e.onInteractOutside?.(d),i=d=>{let g=d.target;return!(g instanceof HTMLElement)||g.closest(`[${Dn}]`)||!Ne(o(),g)||Ne(t(),g)?!1:!e.shouldExcludeElement?.(g)},c=d=>{function g(){let f=t(),h=d.target;if(!f||!h||!i(d))return;let p=we([s,a]);h.addEventListener(Bo,p,{once:!0});let m=new CustomEvent(Bo,{bubbles:!1,cancelable:!0,detail:{originalEvent:d,isContextMenu:d.button===2||Fl(d)&&d.button===0}});h.dispatchEvent(m)}d.pointerType==="touch"?(o().removeEventListener("click",g),r=g,o().addEventListener("click",g,{once:!0})):g()},u=d=>{let g=t(),f=d.target;if(!g||!f||!i(d))return;let h=we([l,a]);f.addEventListener(No,h,{once:!0});let p=new CustomEvent(No,{bubbles:!1,cancelable:!0,detail:{originalEvent:d,isContextMenu:!1}});f.dispatchEvent(p)};B(()=>{Ee||E(e.isDisabled)||(n=window.setTimeout(()=>{o().addEventListener("pointerdown",c,!0)},0),o().addEventListener("focusin",u,!0),U(()=>{window.clearTimeout(n),o().removeEventListener("click",r),o().removeEventListener("pointerdown",c,!0),o().removeEventListener("focusin",u,!0)}))})}var Wi=be();function Bc(){return xe(Wi)}function Nc(e){let t,n=Bc(),[r,o]=Z(e,["ref","disableOutsidePointerEvents","excludedElements","onEscapeKeyDown","onPointerDownOutside","onFocusOutside","onInteractOutside","onDismiss","bypassTopMostLayerCheck"]),s=new Set([]),l=d=>{s.add(d);let g=n?.registerNestedLayer(d);return()=>{s.delete(d),g?.()}};Kc({shouldExcludeElement:d=>t?r.excludedElements?.some(g=>Ne(g(),d))||[...s].some(g=>Ne(g,d)):!1,onPointerDownOutside:d=>{!t||Oe.isBelowPointerBlockingLayer(t)||!r.bypassTopMostLayerCheck&&!Oe.isTopMostLayer(t)||(r.onPointerDownOutside?.(d),r.onInteractOutside?.(d),d.defaultPrevented||r.onDismiss?.())},onFocusOutside:d=>{r.onFocusOutside?.(d),r.onInteractOutside?.(d),d.defaultPrevented||r.onDismiss?.()}},()=>t),Rc({ownerDocument:()=>tt(t),onEscapeKeyDown:d=>{!t||!Oe.isTopMostLayer(t)||(r.onEscapeKeyDown?.(d),!d.defaultPrevented&&r.onDismiss&&(d.preventDefault(),r.onDismiss()))}}),bt(()=>{if(!t)return;Oe.addLayer({node:t,isPointerBlocking:r.disableOutsidePointerEvents,dismiss:r.onDismiss});let d=n?.registerNestedLayer(t);Oe.assignPointerEventToLayers(),Oe.disableBodyPointerEvents(t),U(()=>{t&&(Oe.removeLayer(t),d?.(),Oe.assignPointerEventToLayers(),Oe.restoreBodyPointerEvents(t))})}),B(Je([()=>t,()=>r.disableOutsidePointerEvents],([d,g])=>{if(!d)return;let f=Oe.find(d);f&&f.isPointerBlocking!==g&&(f.isPointerBlocking=g,Oe.assignPointerEventToLayers()),g&&Oe.disableBodyPointerEvents(d),U(()=>{Oe.restoreBodyPointerEvents(d)})},{defer:!0}));let u={registerNestedLayer:l};return v(Wi.Provider,{value:u,get children(){return v(ue,j({as:"div",ref(d){let g=De(f=>t=f,r.ref);typeof g=="function"&&g(d)}},o))}})}function Qi(e={}){let[t,n]=Ci({value:()=>E(e.open),defaultValue:()=>!!E(e.defaultOpen),onChange:l=>e.onOpenChange?.(l)}),r=()=>{n(!0)},o=()=>{n(!1)};return{isOpen:t,setIsOpen:n,open:r,close:o,toggle:()=>{t()?o():r()}}}var Be={};Kn(Be,{Description:()=>wi,ErrorMessage:()=>$i,Item:()=>Ji,ItemControl:()=>es,ItemDescription:()=>ts,ItemIndicator:()=>ns,ItemInput:()=>rs,ItemLabel:()=>os,Label:()=>is,RadioGroup:()=>Uc,Root:()=>ss});var Yi=be();function Xi(){let e=xe(Yi);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupContext` must be used within a `RadioGroup` component");return e}var Zi=be();function mn(){let e=xe(Zi);if(e===void 0)throw new Error("[kobalte]: `useRadioGroupItemContext` must be used within a `RadioGroup.Item` component");return e}function Ji(e){let t=hn(),n=Xi(),r=`${t.generateId("item")}-${Le()}`,o=Q({id:r},e),[s,l]=Z(o,["value","disabled","onPointerDown"]),[a,i]=z(),[c,u]=z(),[d,g]=z(),[f,h]=z(),[p,m]=z(!1),y=M(()=>n.isSelectedValue(s.value)),b=M(()=>s.disabled||t.isDisabled()||!1),x=O=>{ce(O,s.onPointerDown),p()&&O.preventDefault()},w=M(()=>pe(Y({},t.dataset()),{"data-disabled":b()?"":void 0,"data-checked":y()?"":void 0})),$={value:()=>s.value,dataset:w,isSelected:y,isDisabled:b,inputId:a,labelId:c,descriptionId:d,inputRef:f,select:()=>n.setSelectedValue(s.value),generateId:gn(()=>l.id),registerInput:Ue(i),registerLabel:Ue(u),registerDescription:Ue(g),setIsFocused:m,setInputRef:h};return v(Zi.Provider,{value:$,get children(){return v(ue,j({as:"div",role:"group",onPointerDown:x},w,l))}})}function es(e){let t=mn(),n=Q({id:t.generateId("control")},e),[r,o]=Z(n,["onClick","onKeyDown"]);return v(ue,j({as:"div",onClick:a=>{ce(a,r.onClick),t.select(),t.inputRef()?.focus()},onKeyDown:a=>{ce(a,r.onKeyDown),a.key===hr.Space&&(t.select(),t.inputRef()?.focus())}},()=>t.dataset(),o))}function ts(e){let t=mn(),n=Q({id:t.generateId("description")},e);return B(()=>U(t.registerDescription(n.id))),v(ue,j({as:"div"},()=>t.dataset(),n))}function ns(e){let t=mn(),n=Q({id:t.generateId("indicator")},e),[r,o]=Z(n,["ref","forceMount"]),[s,l]=z(),{present:a}=Li({show:()=>r.forceMount||t.isSelected(),element:()=>s()??null});return v(R,{get when(){return a()},get children(){return v(ue,j({as:"div",ref(i){let c=De(l,r.ref);typeof c=="function"&&c(i)}},()=>t.dataset(),o))}})}function rs(e){let t=hn(),n=Xi(),r=mn(),o=Q({id:r.generateId("input")},e),[s,l]=Z(o,["ref","style","aria-labelledby","aria-describedby","onChange","onFocus","onBlur"]),a=()=>[s["aria-labelledby"],r.labelId(),s["aria-labelledby"]!=null&&l["aria-label"]!=null?l.id:void 0].filter(Boolean).join(" ")||void 0,i=()=>[s["aria-describedby"],r.descriptionId(),n.ariaDescribedBy()].filter(Boolean).join(" ")||void 0,[c,u]=z(!1),d=h=>{if(ce(h,s.onChange),h.stopPropagation(),!c()){n.setSelectedValue(r.value());let p=h.target;p.checked=r.isSelected()}u(!1)},g=h=>{ce(h,s.onFocus),r.setIsFocused(!0)},f=h=>{ce(h,s.onBlur),r.setIsFocused(!1)};return B(Je([()=>r.isSelected(),()=>r.value()],h=>{if(!h[0]&&h[1]===r.value())return;u(!0);let p=r.inputRef();p?.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!0})),p?.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))},{defer:!0})),B(()=>U(r.registerInput(l.id))),v(ue,j({as:"input",ref(h){let p=De(r.setInputRef,s.ref);typeof p=="function"&&p(h)},type:"radio",get name(){return t.name()},get value(){return r.value()},get checked(){return r.isSelected()},get required(){return t.isRequired()},get disabled(){return r.isDisabled()},get readonly(){return t.isReadOnly()},get style(){return _n(Y({},bi),s.style)},get"aria-labelledby"(){return a()},get"aria-describedby"(){return i()},onChange:d,onFocus:g,onBlur:f},()=>r.dataset(),l))}function os(e){let t=mn(),n=Q({id:t.generateId("label")},e);return B(()=>U(t.registerLabel(n.id))),v(ue,j({as:"label",get for(){return t.inputId()}},()=>t.dataset(),n))}function is(e){return v(Zl,j({as:"span"},e))}function ss(e){let t,n=`radiogroup-${Le()}`,r=Q({id:n,orientation:"vertical"},e),[o,s,l]=Z(r,["ref","value","defaultValue","onChange","orientation","aria-labelledby","aria-describedby"],Yl),[a,i]=vn({value:()=>o.value,defaultValue:()=>o.defaultValue,onChange:h=>o.onChange?.(h)}),{formControlContext:c}=Xl(s);Jl(()=>t,()=>i(o.defaultValue??""));let u=()=>c.getAriaLabelledBy(E(s.id),l["aria-label"],o["aria-labelledby"]),d=()=>c.getAriaDescribedBy(o["aria-describedby"]),g=h=>h===a(),f={ariaDescribedBy:d,isSelectedValue:g,setSelectedValue:h=>{if(!(c.isReadOnly()||c.isDisabled())&&(i(h),t))for(let p of t.querySelectorAll("[type='radio']")){let m=p;m.checked=g(m.value)}}};return v(xi.Provider,{value:c,get children(){return v(Yi.Provider,{value:f,get children(){return v(ue,j({as:"div",ref(h){let p=De(m=>t=m,o.ref);typeof p=="function"&&p(h)},role:"radiogroup",get id(){return E(s.id)},get"aria-invalid"(){return c.validationState()==="invalid"||void 0},get"aria-required"(){return c.isRequired()||void 0},get"aria-disabled"(){return c.isDisabled()||void 0},get"aria-readonly"(){return c.isReadOnly()||void 0},get"aria-orientation"(){return o.orientation},get"aria-labelledby"(){return u()},get"aria-describedby"(){return d()}},()=>c.dataset(),l))}})}})}var Uc=Object.assign(ss,{Description:wi,ErrorMessage:$i,Item:Ji,ItemControl:es,ItemDescription:ts,ItemIndicator:ns,ItemInput:rs,ItemLabel:os,Label:is}),Gc=class{collection;ref;collator;constructor(e,t,n){this.collection=e,this.ref=t,this.collator=n}getKeyBelow(e){let t=this.collection().getKeyAfter(e);for(;t!=null;){let n=this.collection().getItem(t);if(n&&n.type==="item"&&!n.disabled)return t;t=this.collection().getKeyAfter(t)}}getKeyAbove(e){let t=this.collection().getKeyBefore(e);for(;t!=null;){let n=this.collection().getItem(t);if(n&&n.type==="item"&&!n.disabled)return t;t=this.collection().getKeyBefore(t)}}getFirstKey(){let e=this.collection().getFirstKey();for(;e!=null;){let t=this.collection().getItem(e);if(t&&t.type==="item"&&!t.disabled)return e;e=this.collection().getKeyAfter(e)}}getLastKey(){let e=this.collection().getLastKey();for(;e!=null;){let t=this.collection().getItem(e);if(t&&t.type==="item"&&!t.disabled)return e;e=this.collection().getKeyBefore(e)}}getItem(e){return this.ref?.()?.querySelector(`[data-key="${e}"]`)??null}getKeyPageAbove(e){let t=this.ref?.(),n=this.getItem(e);if(!t||!n)return;let r=Math.max(0,n.offsetTop+n.offsetHeight-t.offsetHeight),o=e;for(;o&&n&&n.offsetTop>r;)o=this.getKeyAbove(o),n=o!=null?this.getItem(o):null;return o}getKeyPageBelow(e){let t=this.ref?.(),n=this.getItem(e);if(!t||!n)return;let r=Math.min(t.scrollHeight,n.offsetTop-n.offsetHeight+t.offsetHeight),o=e;for(;o&&n&&n.offsetTop<r;)o=this.getKeyBelow(o),n=o!=null?this.getItem(o):null;return o}getKeyForSearch(e,t){let n=this.collator?.();if(!n)return;let r=t!=null?this.getKeyBelow(t):this.getFirstKey();for(;r!=null;){let o=this.collection().getItem(r);if(o){let s=o.textValue.slice(0,e.length);if(o.textValue&&n.compare(s,e)===0)return r}r=this.getKeyBelow(r)}}};function Vc(e,t,n){let r=xa({usage:"search",sensitivity:"base"}),o=M(()=>{let s=E(e.keyboardDelegate);return s||new Gc(e.collection,t,r)});return Ma({selectionManager:()=>E(e.selectionManager),keyboardDelegate:o,autoFocus:()=>E(e.autoFocus),deferAutoFocus:()=>E(e.deferAutoFocus),shouldFocusWrap:()=>E(e.shouldFocusWrap),disallowEmptySelection:()=>E(e.disallowEmptySelection),selectOnFocus:()=>E(e.selectOnFocus),disallowTypeAhead:()=>E(e.disallowTypeAhead),shouldUseVirtualFocus:()=>E(e.shouldUseVirtualFocus),allowsTabNavigation:()=>E(e.allowsTabNavigation),isVirtualized:()=>E(e.isVirtualized),scrollToKey:s=>E(e.scrollToKey)?.(s),orientation:()=>E(e.orientation)},t)}var Jn="focusScope.autoFocusOnMount",er="focusScope.autoFocusOnUnmount",Uo={bubbles:!1,cancelable:!0},Go={stack:[],active(){return this.stack[0]},add(e){e!==this.active()&&this.active()?.pause(),this.stack=or(this.stack,e),this.stack.unshift(e)},remove(e){this.stack=or(this.stack,e),this.active()?.resume()}};function Hc(e,t){let[n,r]=z(!1),o={pause(){r(!0)},resume(){r(!1)}},s=null,l=h=>e.onMountAutoFocus?.(h),a=h=>e.onUnmountAutoFocus?.(h),i=()=>tt(t()),c=()=>{let h=i().createElement("span");return h.setAttribute("data-focus-trap",""),h.tabIndex=0,Object.assign(h.style,bi),h},u=()=>{let h=t();return h?mi(h,!0).filter(p=>!p.hasAttribute("data-focus-trap")):[]},d=()=>{let h=u();return h.length>0?h[0]:null},g=()=>{let h=u();return h.length>0?h[h.length-1]:null},f=()=>{let h=t();if(!h)return!1;let p=sn(h);return!p||Ne(h,p)?!1:yi(p)};B(()=>{if(Ee)return;let h=t();if(!h)return;Go.add(o);let p=sn(h);if(!Ne(h,p)){let y=new CustomEvent(Jn,Uo);h.addEventListener(Jn,l),h.dispatchEvent(y),y.defaultPrevented||setTimeout(()=>{Te(d()),sn(h)===p&&Te(h)},0)}U(()=>{h.removeEventListener(Jn,l),setTimeout(()=>{let y=new CustomEvent(er,Uo);f()&&y.preventDefault(),h.addEventListener(er,a),h.dispatchEvent(y),y.defaultPrevented||Te(p??i().body),h.removeEventListener(er,a),Go.remove(o)},0)})}),B(()=>{if(Ee)return;let h=t();if(!h||!E(e.trapFocus)||n())return;let p=y=>{let b=y.target;b?.closest(`[${Dn}]`)||(Ne(h,b)?s=b:Te(s))},m=y=>{let x=y.relatedTarget??sn(h);x?.closest(`[${Dn}]`)||Ne(h,x)||Te(s)};i().addEventListener("focusin",p),i().addEventListener("focusout",m),U(()=>{i().removeEventListener("focusin",p),i().removeEventListener("focusout",m)})}),B(()=>{if(Ee)return;let h=t();if(!h||!E(e.trapFocus)||n())return;let p=c();h.insertAdjacentElement("afterbegin",p);let m=c();h.insertAdjacentElement("beforeend",m);function y(x){let w=d(),$=g();x.relatedTarget===w?Te($):Te(w)}p.addEventListener("focusin",y),m.addEventListener("focusin",y);let b=new MutationObserver(x=>{for(let w of x)w.previousSibling===m&&(m.remove(),h.insertAdjacentElement("beforeend",m)),w.nextSibling===p&&(p.remove(),h.insertAdjacentElement("afterbegin",p))});b.observe(h,{childList:!0,subtree:!1}),U(()=>{p.removeEventListener("focusin",y),m.removeEventListener("focusin",y),p.remove(),m.remove(),b.disconnect()})})}var jc="data-live-announcer";function Wc(e){B(()=>{E(e.isDisabled)||U(Qc(E(e.targets),E(e.root)))})}var rn=new WeakMap,Ke=[];function Qc(e,t=document.body){let n=new Set(e),r=new Set,o=i=>{for(let g of i.querySelectorAll(`[${jc}], [${Dn}]`))n.add(g);let c=g=>{if(n.has(g)||g.parentElement&&r.has(g.parentElement)&&g.parentElement.getAttribute("role")!=="row")return NodeFilter.FILTER_REJECT;for(let f of n)if(g.contains(f))return NodeFilter.FILTER_SKIP;return NodeFilter.FILTER_ACCEPT},u=document.createTreeWalker(i,NodeFilter.SHOW_ELEMENT,{acceptNode:c}),d=c(i);if(d===NodeFilter.FILTER_ACCEPT&&s(i),d!==NodeFilter.FILTER_REJECT){let g=u.nextNode();for(;g!=null;)s(g),g=u.nextNode()}},s=i=>{let c=rn.get(i)??0;i.getAttribute("aria-hidden")==="true"&&c===0||(c===0&&i.setAttribute("aria-hidden","true"),r.add(i),rn.set(i,c+1))};Ke.length&&Ke[Ke.length-1].disconnect(),o(t);let l=new MutationObserver(i=>{for(let c of i)if(!(c.type!=="childList"||c.addedNodes.length===0)&&![...n,...r].some(u=>u.contains(c.target))){for(let u of c.removedNodes)u instanceof Element&&(n.delete(u),r.delete(u));for(let u of c.addedNodes)(u instanceof HTMLElement||u instanceof SVGElement)&&(u.dataset.liveAnnouncer==="true"||u.dataset.reactAriaTopLayer==="true")?n.add(u):u instanceof Element&&o(u)}});l.observe(t,{childList:!0,subtree:!0});let a={observe(){l.observe(t,{childList:!0,subtree:!0})},disconnect(){l.disconnect()}};return Ke.push(a),()=>{l.disconnect();for(let i of r){let c=rn.get(i);if(c==null)return;c===1?(i.removeAttribute("aria-hidden"),rn.delete(i)):rn.set(i,c-1)}a===Ke[Ke.length-1]?(Ke.pop(),Ke.length&&Ke[Ke.length-1].observe()):Ke.splice(Ke.indexOf(a),1)}}var An=new Map,Yc=e=>{B(()=>{let t=Me(e.style)??{},n=Me(e.properties)??[],r={};for(let s in t)r[s]=e.element.style[s];let o=An.get(e.key);o?o.activeCount++:An.set(e.key,{activeCount:1,originalStyles:r,properties:n.map(s=>s.key)}),Object.assign(e.element.style,e.style);for(let s of n)e.element.style.setProperty(s.key,s.value);U(()=>{let s=An.get(e.key);if(s){if(s.activeCount!==1){s.activeCount--;return}An.delete(e.key);for(let[l,a]of Object.entries(s.originalStyles))e.element.style[l]=a;for(let l of s.properties)e.element.style.removeProperty(l);e.element.style.length===0&&e.element.removeAttribute("style"),e.cleanup?.()}})})},Vo=Yc,Xc=(e,t)=>{switch(t){case"x":return[e.clientWidth,e.scrollLeft,e.scrollWidth];case"y":return[e.clientHeight,e.scrollTop,e.scrollHeight]}},Zc=(e,t)=>{let n=getComputedStyle(e),r=t==="x"?n.overflowX:n.overflowY;return r==="auto"||r==="scroll"||e.tagName==="HTML"&&r==="visible"},Jc=(e,t,n)=>{let r=t==="x"&&window.getComputedStyle(e).direction==="rtl"?-1:1,o=e,s=0,l=0,a=!1;do{let[i,c,u]=Xc(o,t),d=u-i-r*c;(c!==0||d!==0)&&Zc(o,t)&&(s+=d,l+=c),o===(n??document.documentElement)?a=!0:o=o._$host??o.parentElement}while(o&&!a);return[s,l]},[Ho,jo]=z([]),eu=e=>Ho().indexOf(e)===Ho().length-1,tu=e=>{let t=j({element:null,enabled:!0,hideScrollbar:!0,preventScrollbarShift:!0,preventScrollbarShiftMode:"padding",restoreScrollPosition:!0,allowPinchZoom:!1},e),n=Le(),r=[0,0],o=null,s=null;B(()=>{Me(t.enabled)&&(jo(c=>[...c,n]),U(()=>{jo(c=>c.filter(u=>u!==n))}))}),B(()=>{if(!Me(t.enabled)||!Me(t.hideScrollbar))return;let{body:c}=document,u=window.innerWidth-c.offsetWidth;if(Me(t.preventScrollbarShift)){let d={overflow:"hidden"},g=[];u>0&&(Me(t.preventScrollbarShiftMode)==="padding"?d.paddingRight=`calc(${window.getComputedStyle(c).paddingRight} + ${u}px)`:d.marginRight=`calc(${window.getComputedStyle(c).marginRight} + ${u}px)`,g.push({key:"--scrollbar-width",value:`${u}px`}));let f=window.scrollY,h=window.scrollX;Vo({key:"prevent-scroll",element:c,style:d,properties:g,cleanup:()=>{Me(t.restoreScrollPosition)&&u>0&&window.scrollTo(h,f)}})}else Vo({key:"prevent-scroll",element:c,style:{overflow:"hidden"}})}),B(()=>{!eu(n)||!Me(t.enabled)||(document.addEventListener("wheel",a,{passive:!1}),document.addEventListener("touchstart",l,{passive:!1}),document.addEventListener("touchmove",i,{passive:!1}),U(()=>{document.removeEventListener("wheel",a),document.removeEventListener("touchstart",l),document.removeEventListener("touchmove",i)}))});let l=c=>{r=Wo(c),o=null,s=null},a=c=>{let u=c.target,d=Me(t.element),g=nu(c),f=Math.abs(g[0])>Math.abs(g[1])?"x":"y",h=f==="x"?g[0]:g[1],p=Qo(u,f,h,d),m;d&&dr(d,u)?m=!p:m=!0,m&&c.cancelable&&c.preventDefault()},i=c=>{let u=Me(t.element),d=c.target,g;if(c.touches.length===2)g=!Me(t.allowPinchZoom);else{if(o==null||s===null){let f=Wo(c).map((p,m)=>r[m]-p),h=Math.abs(f[0])>Math.abs(f[1])?"x":"y";o=h,s=h==="x"?f[0]:f[1]}if(d.type==="range")g=!1;else{let f=Qo(d,o,s,u);u&&dr(u,d)?g=!f:g=!0}}g&&c.cancelable&&c.preventDefault()}},nu=e=>[e.deltaX,e.deltaY],Wo=e=>e.changedTouches[0]?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0],Qo=(e,t,n,r)=>{let o=r!==null&&dr(r,e),[s,l]=Jc(e,t,o?r:void 0);return!(n>0&&Math.abs(s)<=1||n<0&&Math.abs(l)<1)},dr=(e,t)=>{if(e.contains(t))return!0;let n=t;for(;n;){if(n===e)return!0;n=n._$host??n.parentElement}return!1},ru=tu,ou=ru,ls=be();function as(){return xe(ls)}function vt(){let e=as();if(e===void 0)throw new Error("[kobalte]: `useMenuContext` must be used within a `Menu` component");return e}var cs=be();function Tr(){let e=xe(cs);if(e===void 0)throw new Error("[kobalte]: `useMenuItemContext` must be used within a `Menu.Item` component");return e}var us=be();function rt(){let e=xe(us);if(e===void 0)throw new Error("[kobalte]: `useMenuRootContext` must be used within a `MenuRoot` component");return e}function Ar(e){let t,n=rt(),r=vt(),o=Q({id:n.generateId(`item-${Le()}`)},e),[s,l]=Z(o,["ref","textValue","disabled","closeOnSelect","checked","indeterminate","onSelect","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),[a,i]=z(),[c,u]=z(),[d,g]=z(),f=()=>r.listState().selectionManager(),h=()=>l.id,p=()=>f().focusedKey()===h(),m=()=>{s.onSelect?.(),s.closeOnSelect&&setTimeout(()=>{r.close(!0)})};fa({getItem:()=>({ref:()=>t,type:"item",key:h(),textValue:s.textValue??d()?.textContent??t?.textContent??"",disabled:s.disabled??!1})});let y=Pi({key:h,selectionManager:f,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>s.disabled},()=>t),b=S=>{ce(S,s.onPointerMove),S.pointerType==="mouse"&&(s.disabled?r.onItemLeave(S):(r.onItemEnter(S),S.defaultPrevented||(Te(S.currentTarget),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(h()))))},x=S=>{ce(S,s.onPointerLeave),S.pointerType==="mouse"&&r.onItemLeave(S)},w=S=>{ce(S,s.onPointerUp),!s.disabled&&S.button===0&&m()},$=S=>{if(ce(S,s.onKeyDown),!S.repeat&&!s.disabled)switch(S.key){case"Enter":case" ":m();break}},O=M(()=>{if(s.indeterminate)return"mixed";if(s.checked!=null)return s.checked}),D=M(()=>({"data-indeterminate":s.indeterminate?"":void 0,"data-checked":s.checked&&!s.indeterminate?"":void 0,"data-disabled":s.disabled?"":void 0,"data-highlighted":p()?"":void 0})),L={isChecked:()=>s.checked,dataset:D,setLabelRef:g,generateId:gn(()=>l.id),registerLabel:Ue(i),registerDescription:Ue(u)};return v(cs.Provider,{value:L,get children(){return v(ue,j({as:"div",ref(S){let F=De(H=>t=H,s.ref);typeof F=="function"&&F(S)},get tabIndex(){return y.tabIndex()},get"aria-checked"(){return O()},get"aria-disabled"(){return s.disabled},get"aria-labelledby"(){return a()},get"aria-describedby"(){return c()},get"data-key"(){return y.dataKey()},get onPointerDown(){return we([s.onPointerDown,y.onPointerDown])},get onPointerUp(){return we([w,y.onPointerUp])},get onClick(){return we([s.onClick,y.onClick])},get onKeyDown(){return we([$,y.onKeyDown])},get onMouseDown(){return we([s.onMouseDown,y.onMouseDown])},get onFocus(){return we([s.onFocus,y.onFocus])},onPointerMove:b,onPointerLeave:x},D,l))}})}function ds(e){let t=Q({closeOnSelect:!1},e),[n,r]=Z(t,["checked","defaultChecked","onChange","onSelect"]),o=ra({isSelected:()=>n.checked,defaultIsSelected:()=>n.defaultChecked,onSelectedChange:l=>n.onChange?.(l),isDisabled:()=>r.disabled});return v(Ar,j({role:"menuitemcheckbox",get checked(){return o.isSelected()},onSelect:()=>{n.onSelect?.(),o.toggle()}},r))}var iu=be();function Un(){return xe(iu)}var fn={next:(e,t)=>e==="ltr"?t==="horizontal"?"ArrowRight":"ArrowDown":t==="horizontal"?"ArrowLeft":"ArrowUp",previous:(e,t)=>fn.next(e==="ltr"?"rtl":"ltr",t)},Yo={first:e=>e==="horizontal"?"ArrowDown":"ArrowRight",last:e=>e==="horizontal"?"ArrowUp":"ArrowLeft"};function fs(e){let t=rt(),n=vt(),r=Un(),{direction:o}=kt(),s=Q({id:t.generateId("trigger")},e),[l,a]=Z(s,["ref","id","disabled","onPointerDown","onClick","onKeyDown","onMouseOver","onFocus"]),i=()=>t.value();r!==void 0&&(i=()=>t.value()??l.id,r.lastValue()===void 0&&r.setLastValue(i));let c=Rn(()=>n.triggerRef(),()=>"button"),u=M(()=>c()==="a"&&n.triggerRef()?.getAttribute("href")!=null);B(Je(()=>r?.value(),y=>{u()&&y===i()&&n.triggerRef()?.focus()}));let d=()=>{r!==void 0?n.isOpen()?r.value()===i()&&r.closeMenu():(r.autoFocusMenu()||r.setAutoFocusMenu(!0),n.open(!1)):n.toggle(!0)},g=y=>{ce(y,l.onPointerDown),y.currentTarget.dataset.pointerType=y.pointerType,!l.disabled&&y.pointerType!=="touch"&&y.button===0&&d()},f=y=>{ce(y,l.onClick),l.disabled||y.currentTarget.dataset.pointerType==="touch"&&d()},h=y=>{if(ce(y,l.onKeyDown),!l.disabled){if(u())switch(y.key){case"Enter":case" ":return}switch(y.key){case"Enter":case" ":case Yo.first(t.orientation()):y.stopPropagation(),y.preventDefault(),Ql(y.currentTarget),n.open("first"),r?.setAutoFocusMenu(!0),r?.setValue(i);break;case Yo.last(t.orientation()):y.stopPropagation(),y.preventDefault(),n.open("last");break;case fn.next(o(),t.orientation()):if(r===void 0)break;y.stopPropagation(),y.preventDefault(),r.nextMenu();break;case fn.previous(o(),t.orientation()):if(r===void 0)break;y.stopPropagation(),y.preventDefault(),r.previousMenu();break}}},p=y=>{ce(y,l.onMouseOver),n.triggerRef()?.dataset.pointerType!=="touch"&&!l.disabled&&r!==void 0&&r.value()!==void 0&&r.setValue(i)},m=y=>{ce(y,l.onFocus),r!==void 0&&y.currentTarget.dataset.pointerType!=="touch"&&r.setValue(i)};return B(()=>U(n.registerTriggerId(l.id))),v(br,j({ref(y){let b=De(n.setTriggerRef,l.ref);typeof b=="function"&&b(y)},get"data-kb-menu-value-trigger"(){return t.value()},get id(){return l.id},get disabled(){return l.disabled},"aria-haspopup":"true",get"aria-expanded"(){return n.isOpen()},get"aria-controls"(){return M(()=>!!n.isOpen())()?n.contentId():void 0},get"data-highlighted"(){return i()!==void 0&&r?.value()===i()?!0:void 0},get tabIndex(){return r!==void 0?r.value()===i()||r.lastValue()===i()?0:-1:void 0},onPointerDown:g,onMouseOver:p,onClick:f,onKeyDown:h,onFocus:m,role:r!==void 0?"menuitem":void 0},()=>n.dataset(),a))}var su=be();function gs(){return xe(su)}function hs(e){let t,n=rt(),r=vt(),o=Un(),s=gs(),{direction:l}=kt(),a=Q({id:n.generateId(`content-${Le()}`)},e),[i,c]=Z(a,["ref","id","style","onOpenAutoFocus","onCloseAutoFocus","onEscapeKeyDown","onFocusOutside","onPointerEnter","onPointerMove","onKeyDown","onMouseDown","onFocusIn","onFocusOut"]),u=0,d=()=>r.parentMenuContext()==null&&o===void 0&&n.isModal(),g=Vc({selectionManager:r.listState().selectionManager,collection:r.listState().collection,autoFocus:r.autoFocus,deferAutoFocus:!0,shouldFocusWrap:!0,disallowTypeAhead:()=>!r.listState().selectionManager().isFocused(),orientation:()=>n.orientation()==="horizontal"?"vertical":"horizontal"},()=>t);Hc({trapFocus:()=>d()&&r.isOpen(),onMountAutoFocus:x=>{o===void 0&&i.onOpenAutoFocus?.(x)},onUnmountAutoFocus:i.onCloseAutoFocus},()=>t);let f=x=>{if(Ne(x.currentTarget,x.target)&&(x.key==="Tab"&&r.isOpen()&&x.preventDefault(),o!==void 0&&x.currentTarget.getAttribute("aria-haspopup")!=="true"))switch(x.key){case fn.next(l(),n.orientation()):x.stopPropagation(),x.preventDefault(),r.close(!0),o.setAutoFocusMenu(!0),o.nextMenu();break;case fn.previous(l(),n.orientation()):if(x.currentTarget.hasAttribute("data-closed"))break;x.stopPropagation(),x.preventDefault(),r.close(!0),o.setAutoFocusMenu(!0),o.previousMenu();break}},h=x=>{i.onEscapeKeyDown?.(x),o?.setAutoFocusMenu(!1),r.close(!0)},p=x=>{i.onFocusOutside?.(x),n.isModal()&&x.preventDefault()},m=x=>{ce(x,i.onPointerEnter),r.isOpen()&&(r.parentMenuContext()?.listState().selectionManager().setFocused(!1),r.parentMenuContext()?.listState().selectionManager().setFocusedKey(void 0))},y=x=>{if(ce(x,i.onPointerMove),x.pointerType!=="mouse")return;let w=x.target,$=u!==x.clientX;Ne(x.currentTarget,w)&&$&&(r.setPointerDir(x.clientX>u?"right":"left"),u=x.clientX)};B(()=>U(r.registerContentId(i.id)));let b={ref:De(x=>{r.setContentRef(x),t=x},i.ref),role:"menu",get id(){return i.id},get tabIndex(){return g.tabIndex()},get"aria-labelledby"(){return r.triggerId()},onKeyDown:we([i.onKeyDown,g.onKeyDown,f]),onMouseDown:we([i.onMouseDown,g.onMouseDown]),onFocusIn:we([i.onFocusIn,g.onFocusIn]),onFocusOut:we([i.onFocusOut,g.onFocusOut]),onPointerEnter:m,onPointerMove:y,get"data-orientation"(){return n.orientation()}};return v(R,{get when(){return r.contentPresent()},get children(){return v(R,{get when(){return s===void 0||r.parentMenuContext()!=null},get fallback(){return v(ue,j({as:"div"},()=>r.dataset(),b,c))},get children(){return v(ji.Positioner,{get children(){return v(Nc,j({get disableOutsidePointerEvents(){return M(()=>!!d())()&&r.isOpen()},get excludedElements(){return[r.triggerRef]},bypassTopMostLayerCheck:!0,get style(){return _n({"--kb-menu-content-transform-origin":"var(--kb-popper-content-transform-origin)",position:"relative"},i.style)},onEscapeKeyDown:h,onFocusOutside:p,get onDismiss(){return r.close}},()=>r.dataset(),b,c))}})}})}})}function lu(e){let t,n=rt(),r=vt(),[o,s]=Z(e,["ref"]);return ou({element:()=>t??null,enabled:()=>r.contentPresent()&&n.preventScroll()}),v(hs,j({ref(l){let a=De(i=>{t=i},o.ref);typeof a=="function"&&a(l)}},s))}var vs=be();function au(){let e=xe(vs);if(e===void 0)throw new Error("[kobalte]: `useMenuGroupContext` must be used within a `Menu.Group` component");return e}function Ir(e){let t=rt(),n=Q({id:t.generateId(`group-${Le()}`)},e),[r,o]=z(),s={generateId:gn(()=>n.id),registerLabelId:Ue(o)};return v(vs.Provider,{value:s,get children(){return v(ue,j({as:"div",role:"group",get"aria-labelledby"(){return r()}},n))}})}function ps(e){let t=au(),n=Q({id:t.generateId("label")},e),[r,o]=Z(n,["id"]);return B(()=>U(t.registerLabelId(r.id))),v(ue,j({as:"span",get id(){return r.id},"aria-hidden":"true"},o))}function ms(e){let t=vt(),n=Q({children:"\u25BC"},e);return v(ue,j({as:"span","aria-hidden":"true"},()=>t.dataset(),n))}function ys(e){return v(Ar,j({role:"menuitem",closeOnSelect:!0},e))}function bs(e){let t=Tr(),n=Q({id:t.generateId("description")},e),[r,o]=Z(n,["id"]);return B(()=>U(t.registerDescription(r.id))),v(ue,j({as:"div",get id(){return r.id}},()=>t.dataset(),o))}function xs(e){let t=Tr(),n=Q({id:t.generateId("indicator")},e),[r,o]=Z(n,["forceMount"]);return v(R,{get when(){return r.forceMount||t.isChecked()},get children(){return v(ue,j({as:"div"},()=>t.dataset(),o))}})}function ws(e){let t=Tr(),n=Q({id:t.generateId("label")},e),[r,o]=Z(n,["ref","id"]);return B(()=>U(t.registerLabel(r.id))),v(ue,j({as:"div",ref(s){let l=De(t.setLabelRef,r.ref);typeof l=="function"&&l(s)},get id(){return r.id}},()=>t.dataset(),o))}function $s(e){let t=vt();return v(R,{get when(){return t.contentPresent()},get children(){return v(Wn,e)}})}var Cs=be();function cu(){let e=xe(Cs);if(e===void 0)throw new Error("[kobalte]: `useMenuRadioGroupContext` must be used within a `Menu.RadioGroup` component");return e}function Ss(e){let n=rt().generateId(`radiogroup-${Le()}`),r=Q({id:n},e),[o,s]=Z(r,["value","defaultValue","onChange","disabled"]),[l,a]=vn({value:()=>o.value,defaultValue:()=>o.defaultValue,onChange:c=>o.onChange?.(c)}),i={isDisabled:()=>o.disabled,isSelectedValue:c=>c===l(),setSelectedValue:a};return v(Cs.Provider,{value:i,get children(){return v(Ir,s)}})}function ks(e){let t=cu(),n=Q({closeOnSelect:!1},e),[r,o]=Z(n,["value","onSelect"]);return v(Ar,j({role:"menuitemradio",get checked(){return t.isSelectedValue(r.value)},onSelect:()=>{r.onSelect?.(),t.setSelectedValue(r.value)}},o))}function uu(e,t,n){let r=e.split("-")[0],o=n.getBoundingClientRect(),s=[],l=t.clientX,a=t.clientY;switch(r){case"top":s.push([l,a+5]),s.push([o.left,o.bottom]),s.push([o.left,o.top]),s.push([o.right,o.top]),s.push([o.right,o.bottom]);break;case"right":s.push([l-5,a]),s.push([o.left,o.top]),s.push([o.right,o.top]),s.push([o.right,o.bottom]),s.push([o.left,o.bottom]);break;case"bottom":s.push([l,a-5]),s.push([o.right,o.top]),s.push([o.right,o.bottom]),s.push([o.left,o.bottom]),s.push([o.left,o.top]);break;case"left":s.push([l+5,a]),s.push([o.right,o.bottom]),s.push([o.left,o.bottom]),s.push([o.left,o.top]),s.push([o.right,o.top]);break}return s}function du(e,t){return t?Wl([e.clientX,e.clientY],t):!1}function Es(e){let t=rt(),n=ki(),r=as(),o=Un(),s=gs(),l=Q({placement:t.orientation()==="horizontal"?"bottom-start":"right-start"},e),[a,i]=Z(l,["open","defaultOpen","onOpenChange"]),c=0,u=null,d="right",[g,f]=z(),[h,p]=z(),[m,y]=z(),[b,x]=z(),[w,$]=z(!0),[O,D]=z(i.placement),[L,S]=z([]),[F,H]=z([]),{DomCollectionProvider:G}=da({items:F,onItemsChange:H}),ne=Qi({open:()=>a.open,defaultOpen:()=>a.defaultOpen,onOpenChange:V=>a.onOpenChange?.(V)}),{present:fe}=Li({show:()=>t.forceMount()||ne.isOpen(),element:()=>b()??null}),J=Aa({selectionMode:"none",dataSource:F}),ge=V=>{$(V),ne.open()},ie=(V=!1)=>{ne.close(),V&&r&&r.close(!0)},de=V=>{$(V),ne.toggle()},le=()=>{let V=b();V&&(Te(V),J.selectionManager().setFocused(!0),J.selectionManager().setFocusedKey(void 0))},re=()=>{s!=null?setTimeout(()=>le()):le()},Se=V=>{S(ke=>[...ke,V]);let He=r?.registerNestedMenu(V);return()=>{S(ke=>or(ke,V)),He?.()}},ve=V=>d===u?.side&&du(V,u?.area),Ae=V=>{ve(V)&&V.preventDefault()},T=V=>{ve(V)||re()},he=V=>{ve(V)&&V.preventDefault()};Wc({isDisabled:()=>!(r==null&&ne.isOpen()&&t.isModal()),targets:()=>[b(),...L()].filter(Boolean)}),B(()=>{let V=b();if(!V||!r)return;let He=r.registerNestedMenu(V);U(()=>{He()})}),B(()=>{r===void 0&&o?.registerMenu(t.value(),[b(),...L()])}),B(()=>{r!==void 0||o===void 0||(o.value()===t.value()?(m()?.focus(),o.autoFocusMenu()&&ge(!0)):ie())}),B(()=>{r!==void 0||o===void 0||ne.isOpen()&&o.setValue(t.value())}),U(()=>{r===void 0&&o?.unregisterMenu(t.value())});let pt={dataset:M(()=>({"data-expanded":ne.isOpen()?"":void 0,"data-closed":ne.isOpen()?void 0:""})),isOpen:ne.isOpen,contentPresent:fe,nestedMenus:L,currentPlacement:O,pointerGraceTimeoutId:()=>c,autoFocus:w,listState:()=>J,parentMenuContext:()=>r,triggerRef:m,contentRef:b,triggerId:g,contentId:h,setTriggerRef:y,setContentRef:x,open:ge,close:ie,toggle:de,focusContent:re,onItemEnter:Ae,onItemLeave:T,onTriggerLeave:he,setPointerDir:V=>d=V,setPointerGraceTimeoutId:V=>c=V,setPointerGraceIntent:V=>u=V,registerNestedMenu:Se,registerItemToParentDomCollection:n?.registerItem,registerTriggerId:Ue(f),registerContentId:Ue(p)};return v(G,{get children(){return v(ls.Provider,{value:pt,get children(){return v(R,{when:s===void 0,get fallback(){return i.children},get children(){return v(ji,j({anchorRef:m,contentRef:b,onCurrentPlacementChange:D},i))}})}})}})}function Ms(e){let{direction:t}=kt();return v(Es,j({get placement(){return t()==="rtl"?"left-start":"right-start"},flip:!0},e))}var fu={close:(e,t)=>e==="ltr"?[t==="horizontal"?"ArrowLeft":"ArrowUp"]:[t==="horizontal"?"ArrowRight":"ArrowDown"]};function Ts(e){let t=vt(),n=rt(),[r,o]=Z(e,["onFocusOutside","onKeyDown"]),{direction:s}=kt();return v(hs,j({onOpenAutoFocus:u=>{u.preventDefault()},onCloseAutoFocus:u=>{u.preventDefault()},onFocusOutside:u=>{r.onFocusOutside?.(u);let d=u.target;Ne(t.triggerRef(),d)||t.close()},onKeyDown:u=>{ce(u,r.onKeyDown);let d=Ne(u.currentTarget,u.target),g=fu.close(s(),n.orientation()).includes(u.key),f=t.parentMenuContext()!=null;d&&g&&f&&(t.close(),Te(t.triggerRef()))}},o))}var Xo=["Enter"," "],gu={open:(e,t)=>e==="ltr"?[...Xo,t==="horizontal"?"ArrowRight":"ArrowDown"]:[...Xo,t==="horizontal"?"ArrowLeft":"ArrowUp"]};function As(e){let t,n=rt(),r=vt(),o=Q({id:n.generateId(`sub-trigger-${Le()}`)},e),[s,l]=Z(o,["ref","id","textValue","disabled","onPointerMove","onPointerLeave","onPointerDown","onPointerUp","onClick","onKeyDown","onMouseDown","onFocus"]),a=null,i=()=>{Ee||(a&&window.clearTimeout(a),a=null)},{direction:c}=kt(),u=()=>s.id,d=()=>{let x=r.parentMenuContext();if(x==null)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");return x.listState().selectionManager()},g=()=>r.listState().collection(),f=()=>d().focusedKey()===u(),h=Pi({key:u,selectionManager:d,shouldSelectOnPressUp:!0,allowsDifferentPressOrigin:!0,disabled:()=>s.disabled},()=>t),p=x=>{ce(x,s.onClick),!r.isOpen()&&!s.disabled&&r.open(!0)},m=x=>{if(ce(x,s.onPointerMove),x.pointerType!=="mouse")return;let w=r.parentMenuContext();if(w?.onItemEnter(x),!x.defaultPrevented){if(s.disabled){w?.onItemLeave(x);return}!r.isOpen()&&!a&&(r.parentMenuContext()?.setPointerGraceIntent(null),a=window.setTimeout(()=>{r.open(!1),i()},100)),w?.onItemEnter(x),x.defaultPrevented||(r.listState().selectionManager().isFocused()&&(r.listState().selectionManager().setFocused(!1),r.listState().selectionManager().setFocusedKey(void 0)),Te(x.currentTarget),w?.listState().selectionManager().setFocused(!0),w?.listState().selectionManager().setFocusedKey(u()))}},y=x=>{if(ce(x,s.onPointerLeave),x.pointerType!=="mouse")return;i();let w=r.parentMenuContext(),$=r.contentRef();if($){w?.setPointerGraceIntent({area:uu(r.currentPlacement(),x,$),side:r.currentPlacement().split("-")[0]}),window.clearTimeout(w?.pointerGraceTimeoutId());let O=window.setTimeout(()=>{w?.setPointerGraceIntent(null)},300);w?.setPointerGraceTimeoutId(O)}else{if(w?.onTriggerLeave(x),x.defaultPrevented)return;w?.setPointerGraceIntent(null)}w?.onItemLeave(x)},b=x=>{ce(x,s.onKeyDown),!x.repeat&&(s.disabled||gu.open(c(),n.orientation()).includes(x.key)&&(x.stopPropagation(),x.preventDefault(),d().setFocused(!1),d().setFocusedKey(void 0),r.isOpen()||r.open("first"),r.focusContent(),r.listState().selectionManager().setFocused(!0),r.listState().selectionManager().setFocusedKey(g().getFirstKey())))};return B(()=>{if(r.registerItemToParentDomCollection==null)throw new Error("[kobalte]: `Menu.SubTrigger` must be used within a `Menu.Sub` component");let x=r.registerItemToParentDomCollection({ref:()=>t,type:"item",key:u(),textValue:s.textValue??t?.textContent??"",disabled:s.disabled??!1});U(x)}),B(Je(()=>r.parentMenuContext()?.pointerGraceTimeoutId(),x=>{U(()=>{window.clearTimeout(x),r.parentMenuContext()?.setPointerGraceIntent(null)})})),B(()=>U(r.registerTriggerId(s.id))),U(()=>{i()}),v(ue,j({as:"div",ref(x){let w=De($=>{r.setTriggerRef($),t=$},s.ref);typeof w=="function"&&w(x)},get id(){return s.id},role:"menuitem",get tabIndex(){return h.tabIndex()},"aria-haspopup":"true",get"aria-expanded"(){return r.isOpen()},get"aria-controls"(){return M(()=>!!r.isOpen())()?r.contentId():void 0},get"aria-disabled"(){return s.disabled},get"data-key"(){return h.dataKey()},get"data-highlighted"(){return f()?"":void 0},get"data-disabled"(){return s.disabled?"":void 0},get onPointerDown(){return we([s.onPointerDown,h.onPointerDown])},get onPointerUp(){return we([s.onPointerUp,h.onPointerUp])},get onClick(){return we([p,h.onClick])},get onKeyDown(){return we([b,h.onKeyDown])},get onMouseDown(){return we([s.onMouseDown,h.onMouseDown])},get onFocus(){return we([s.onFocus,h.onFocus])},onPointerMove:m,onPointerLeave:y},()=>r.dataset(),l))}function hu(e){let t=Un(),n=`menu-${Le()}`,r=Q({id:n,modal:!0},e),[o,s]=Z(r,["id","modal","preventScroll","forceMount","open","defaultOpen","onOpenChange","value","orientation"]),l=Qi({open:()=>o.open,defaultOpen:()=>o.defaultOpen,onOpenChange:i=>o.onOpenChange?.(i)}),a={isModal:()=>o.modal??!0,preventScroll:()=>o.preventScroll??a.isModal(),forceMount:()=>o.forceMount??!1,generateId:gn(()=>o.id),value:()=>o.value,orientation:()=>o.orientation??t?.orientation()??"horizontal"};return v(us.Provider,{value:a,get children(){return v(Es,j({get open(){return l.isOpen()},get onOpenChange(){return l.setIsOpen}},s))}})}var vu={};Kn(vu,{Root:()=>Gn,Separator:()=>pu});function Gn(e){let t,n=Q({orientation:"horizontal"},e),[r,o]=Z(n,["ref","orientation"]),s=Rn(()=>t,()=>"hr");return v(ue,j({as:"hr",ref(l){let a=De(i=>t=i,r.ref);typeof a=="function"&&a(l)},get role(){return s()!=="hr"?"separator":void 0},get"aria-orientation"(){return r.orientation==="vertical"?"vertical":void 0},get"data-orientation"(){return r.orientation}},o))}var pu=Gn,me={};Kn(me,{Arrow:()=>Mr,CheckboxItem:()=>ds,Content:()=>Is,DropdownMenu:()=>mu,Group:()=>Ir,GroupLabel:()=>ps,Icon:()=>ms,Item:()=>ys,ItemDescription:()=>bs,ItemIndicator:()=>xs,ItemLabel:()=>ws,Portal:()=>$s,RadioGroup:()=>Ss,RadioItem:()=>ks,Root:()=>Ds,Separator:()=>Gn,Sub:()=>Ms,SubContent:()=>Ts,SubTrigger:()=>As,Trigger:()=>fs});function Is(e){let t=rt(),n=vt(),[r,o]=Z(e,["onCloseAutoFocus","onInteractOutside"]),s=!1;return v(lu,j({onCloseAutoFocus:i=>{r.onCloseAutoFocus?.(i),s||Te(n.triggerRef()),s=!1,i.preventDefault()},onInteractOutside:i=>{r.onInteractOutside?.(i),(!t.isModal()||i.detail.isContextMenu)&&(s=!0)}},o))}function Ds(e){let t=`dropdownmenu-${Le()}`,n=Q({id:t},e);return v(hu,n)}var mu=Object.assign(Ds,{Arrow:Mr,CheckboxItem:ds,Content:Is,Group:Ir,GroupLabel:ps,Icon:ms,Item:ys,ItemDescription:bs,ItemIndicator:xs,ItemLabel:ws,Portal:$s,RadioGroup:Ss,RadioItem:ks,Separator:Gn,Sub:Ms,SubContent:Ts,SubTrigger:As,Trigger:fs}),C={colors:{inherit:"inherit",current:"currentColor",transparent:"transparent",black:"#000000",white:"#ffffff",neutral:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},darkGray:{50:"#525c7a",100:"#49536e",200:"#414962",300:"#394056",400:"#313749",500:"#292e3d",600:"#212530",700:"#191c24",800:"#111318",900:"#0b0d10"},gray:{50:"#f9fafb",100:"#f2f4f7",200:"#eaecf0",300:"#d0d5dd",400:"#98a2b3",500:"#667085",600:"#475467",700:"#344054",800:"#1d2939",900:"#101828"},blue:{25:"#F5FAFF",50:"#EFF8FF",100:"#D1E9FF",200:"#B2DDFF",300:"#84CAFF",400:"#53B1FD",500:"#2E90FA",600:"#1570EF",700:"#175CD3",800:"#1849A9",900:"#194185"},green:{25:"#F6FEF9",50:"#ECFDF3",100:"#D1FADF",200:"#A6F4C5",300:"#6CE9A6",400:"#32D583",500:"#12B76A",600:"#039855",700:"#027A48",800:"#05603A",900:"#054F31"},red:{50:"#fef2f2",100:"#fee2e2",200:"#fecaca",300:"#fca5a5",400:"#f87171",500:"#ef4444",600:"#dc2626",700:"#b91c1c",800:"#991b1b",900:"#7f1d1d",950:"#450a0a"},yellow:{25:"#FFFCF5",50:"#FFFAEB",100:"#FEF0C7",200:"#FEDF89",300:"#FEC84B",400:"#FDB022",500:"#F79009",600:"#DC6803",700:"#B54708",800:"#93370D",900:"#7A2E0E"},purple:{25:"#FAFAFF",50:"#F4F3FF",100:"#EBE9FE",200:"#D9D6FE",300:"#BDB4FE",400:"#9B8AFB",500:"#7A5AF8",600:"#6938EF",700:"#5925DC",800:"#4A1FB8",900:"#3E1C96"},teal:{25:"#F6FEFC",50:"#F0FDF9",100:"#CCFBEF",200:"#99F6E0",300:"#5FE9D0",400:"#2ED3B7",500:"#15B79E",600:"#0E9384",700:"#107569",800:"#125D56",900:"#134E48"},pink:{25:"#fdf2f8",50:"#fce7f3",100:"#fbcfe8",200:"#f9a8d4",300:"#f472b6",400:"#ec4899",500:"#db2777",600:"#be185d",700:"#9d174d",800:"#831843",900:"#500724"},cyan:{25:"#ecfeff",50:"#cffafe",100:"#a5f3fc",200:"#67e8f9",300:"#22d3ee",400:"#06b6d4",500:"#0891b2",600:"#0e7490",700:"#155e75",800:"#164e63",900:"#083344"}},alpha:{100:"ff",90:"e5",80:"cc",70:"b3",60:"99",50:"80",40:"66",30:"4d",20:"33",10:"1a",0:"00"},font:{size:{"2xs":"calc(var(--tsqd-font-size) * 0.625)",xs:"calc(var(--tsqd-font-size) * 0.75)",sm:"calc(var(--tsqd-font-size) * 0.875)",md:"var(--tsqd-font-size)",lg:"calc(var(--tsqd-font-size) * 1.125)",xl:"calc(var(--tsqd-font-size) * 1.25)","2xl":"calc(var(--tsqd-font-size) * 1.5)","3xl":"calc(var(--tsqd-font-size) * 1.875)","4xl":"calc(var(--tsqd-font-size) * 2.25)","5xl":"calc(var(--tsqd-font-size) * 3)","6xl":"calc(var(--tsqd-font-size) * 3.75)","7xl":"calc(var(--tsqd-font-size) * 4.5)","8xl":"calc(var(--tsqd-font-size) * 6)","9xl":"calc(var(--tsqd-font-size) * 8)"},lineHeight:{xs:"calc(var(--tsqd-font-size) * 1)",sm:"calc(var(--tsqd-font-size) * 1.25)",md:"calc(var(--tsqd-font-size) * 1.5)",lg:"calc(var(--tsqd-font-size) * 1.75)",xl:"calc(var(--tsqd-font-size) * 2)","2xl":"calc(var(--tsqd-font-size) * 2.25)","3xl":"calc(var(--tsqd-font-size) * 2.5)","4xl":"calc(var(--tsqd-font-size) * 2.75)","5xl":"calc(var(--tsqd-font-size) * 3)","6xl":"calc(var(--tsqd-font-size) * 3.25)","7xl":"calc(var(--tsqd-font-size) * 3.5)","8xl":"calc(var(--tsqd-font-size) * 3.75)","9xl":"calc(var(--tsqd-font-size) * 4)"},weight:{thin:"100",extralight:"200",light:"300",normal:"400",medium:"500",semibold:"600",bold:"700",extrabold:"800",black:"900"}},breakpoints:{xs:"320px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px","2xl":"1536px"},border:{radius:{none:"0px",xs:"calc(var(--tsqd-font-size) * 0.125)",sm:"calc(var(--tsqd-font-size) * 0.25)",md:"calc(var(--tsqd-font-size) * 0.375)",lg:"calc(var(--tsqd-font-size) * 0.5)",xl:"calc(var(--tsqd-font-size) * 0.75)","2xl":"calc(var(--tsqd-font-size) * 1)","3xl":"calc(var(--tsqd-font-size) * 1.5)",full:"9999px"}},size:{0:"0px",.25:"calc(var(--tsqd-font-size) * 0.0625)",.5:"calc(var(--tsqd-font-size) * 0.125)",1:"calc(var(--tsqd-font-size) * 0.25)",1.5:"calc(var(--tsqd-font-size) * 0.375)",2:"calc(var(--tsqd-font-size) * 0.5)",2.5:"calc(var(--tsqd-font-size) * 0.625)",3:"calc(var(--tsqd-font-size) * 0.75)",3.5:"calc(var(--tsqd-font-size) * 0.875)",4:"calc(var(--tsqd-font-size) * 1)",4.5:"calc(var(--tsqd-font-size) * 1.125)",5:"calc(var(--tsqd-font-size) * 1.25)",5.5:"calc(var(--tsqd-font-size) * 1.375)",6:"calc(var(--tsqd-font-size) * 1.5)",6.5:"calc(var(--tsqd-font-size) * 1.625)",7:"calc(var(--tsqd-font-size) * 1.75)",8:"calc(var(--tsqd-font-size) * 2)",9:"calc(var(--tsqd-font-size) * 2.25)",10:"calc(var(--tsqd-font-size) * 2.5)",11:"calc(var(--tsqd-font-size) * 2.75)",12:"calc(var(--tsqd-font-size) * 3)",14:"calc(var(--tsqd-font-size) * 3.5)",16:"calc(var(--tsqd-font-size) * 4)",20:"calc(var(--tsqd-font-size) * 5)",24:"calc(var(--tsqd-font-size) * 6)",28:"calc(var(--tsqd-font-size) * 7)",32:"calc(var(--tsqd-font-size) * 8)",36:"calc(var(--tsqd-font-size) * 9)",40:"calc(var(--tsqd-font-size) * 10)",44:"calc(var(--tsqd-font-size) * 11)",48:"calc(var(--tsqd-font-size) * 12)",52:"calc(var(--tsqd-font-size) * 13)",56:"calc(var(--tsqd-font-size) * 14)",60:"calc(var(--tsqd-font-size) * 15)",64:"calc(var(--tsqd-font-size) * 16)",72:"calc(var(--tsqd-font-size) * 18)",80:"calc(var(--tsqd-font-size) * 20)",96:"calc(var(--tsqd-font-size) * 24)"},shadow:{xs:(e="rgb(0 0 0 / 0.1)")=>"0 1px 2px 0 rgb(0 0 0 / 0.05)",sm:(e="rgb(0 0 0 / 0.1)")=>`0 1px 3px 0 ${e}, 0 1px 2px -1px ${e}`,md:(e="rgb(0 0 0 / 0.1)")=>`0 4px 6px -1px ${e}, 0 2px 4px -2px ${e}`,lg:(e="rgb(0 0 0 / 0.1)")=>`0 10px 15px -3px ${e}, 0 4px 6px -4px ${e}`,xl:(e="rgb(0 0 0 / 0.1)")=>`0 20px 25px -5px ${e}, 0 8px 10px -6px ${e}`,"2xl":(e="rgb(0 0 0 / 0.25)")=>`0 25px 50px -12px ${e}`,inner:(e="rgb(0 0 0 / 0.05)")=>`inset 0 2px 4px 0 ${e}`,none:()=>"none"},zIndices:{hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800}},yu=_('<svg width=14 height=14 viewBox="0 0 14 14"fill=none xmlns=http://www.w3.org/2000/svg><path d="M13 13L9.00007 9M10.3333 5.66667C10.3333 8.244 8.244 10.3333 5.66667 10.3333C3.08934 10.3333 1 8.244 1 5.66667C1 3.08934 3.08934 1 5.66667 1C8.244 1 10.3333 3.08934 10.3333 5.66667Z"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),bu=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 3H15M3 6H21M19 6L18.2987 16.5193C18.1935 18.0975 18.1409 18.8867 17.8 19.485C17.4999 20.0118 17.0472 20.4353 16.5017 20.6997C15.882 21 15.0911 21 13.5093 21H10.4907C8.90891 21 8.11803 21 7.49834 20.6997C6.95276 20.4353 6.50009 20.0118 6.19998 19.485C5.85911 18.8867 5.8065 18.0975 5.70129 16.5193L5 6M10 10.5V15.5M14 10.5V15.5"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),xu=_('<svg width=10 height=6 viewBox="0 0 10 6"fill=none xmlns=http://www.w3.org/2000/svg><path d="M1 1L5 5L9 1"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),wu=_('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 13.3333V2.66667M8 2.66667L4 6.66667M8 2.66667L12 6.66667"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),Dr=_('<svg width=12 height=12 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 2.66667V13.3333M8 13.3333L4 9.33333M8 13.3333L12 9.33333"stroke=currentColor stroke-width=1.66667 stroke-linecap=round stroke-linejoin=round>'),$u=_('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2v2m0 16v2M4 12H2m4.314-5.686L4.9 4.9m12.786 1.414L19.1 4.9M6.314 17.69 4.9 19.104m12.786-1.414 1.414 1.414M22 12h-2m-3 0a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Cu=_('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 15.844a10.424 10.424 0 0 1-4.306.925c-5.779 0-10.463-4.684-10.463-10.462 0-1.536.33-2.994.925-4.307A10.464 10.464 0 0 0 2 11.538C2 17.316 6.684 22 12.462 22c4.243 0 7.896-2.526 9.538-6.156Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Su=_('<svg viewBox="0 0 24 24"height=12 width=12 fill=none xmlns=http://www.w3.org/2000/svg><path d="M8 21h8m-4-4v4m-5.2-4h10.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C22 14.72 22 13.88 22 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C19.72 3 18.88 3 17.2 3H6.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C2 5.28 2 6.12 2 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 17 5.12 17 6.8 17Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),ku=_('<svg stroke=currentColor fill=currentColor stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M0 0h24v24H0z"></path><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z">'),Eu=_('<svg stroke-width=0 viewBox="0 0 24 24"height=1em width=1em xmlns=http://www.w3.org/2000/svg><path fill=none d="M24 .01c0-.01 0-.01 0 0L0 0v24h24V.01zM0 0h24v24H0V0zm0 0h24v24H0V0z"></path><path d="M22.99 9C19.15 5.16 13.8 3.76 8.84 4.78l2.52 2.52c3.47-.17 6.99 1.05 9.63 3.7l2-2zm-4 4a9.793 9.793 0 00-4.49-2.56l3.53 3.53.96-.97zM2 3.05L5.07 6.1C3.6 6.82 2.22 7.78 1 9l1.99 2c1.24-1.24 2.67-2.16 4.2-2.77l2.24 2.24A9.684 9.684 0 005 13v.01L6.99 15a7.042 7.042 0 014.92-2.06L18.98 20l1.27-1.26L3.29 1.79 2 3.05zM9 17l3 3 3-3a4.237 4.237 0 00-6 0z">'),Mu=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.3951 19.3711L9.97955 20.6856C10.1533 21.0768 10.4368 21.4093 10.7958 21.6426C11.1547 21.8759 11.5737 22.0001 12.0018 22C12.4299 22.0001 12.8488 21.8759 13.2078 21.6426C13.5667 21.4093 13.8503 21.0768 14.024 20.6856L14.6084 19.3711C14.8165 18.9047 15.1664 18.5159 15.6084 18.26C16.0532 18.0034 16.5678 17.8941 17.0784 17.9478L18.5084 18.1C18.9341 18.145 19.3637 18.0656 19.7451 17.8713C20.1265 17.6771 20.4434 17.3763 20.6573 17.0056C20.8715 16.635 20.9735 16.2103 20.9511 15.7829C20.9286 15.3555 20.7825 14.9438 20.5307 14.5978L19.684 13.4344C19.3825 13.0171 19.2214 12.5148 19.224 12C19.2239 11.4866 19.3865 10.9864 19.6884 10.5711L20.5351 9.40778C20.787 9.06175 20.933 8.65007 20.9555 8.22267C20.978 7.79528 20.8759 7.37054 20.6618 7C20.4479 6.62923 20.131 6.32849 19.7496 6.13423C19.3681 5.93997 18.9386 5.86053 18.5129 5.90556L17.0829 6.05778C16.5722 6.11141 16.0577 6.00212 15.6129 5.74556C15.17 5.48825 14.82 5.09736 14.6129 4.62889L14.024 3.31444C13.8503 2.92317 13.5667 2.59072 13.2078 2.3574C12.8488 2.12408 12.4299 1.99993 12.0018 2C11.5737 1.99993 11.1547 2.12408 10.7958 2.3574C10.4368 2.59072 10.1533 2.92317 9.97955 3.31444L9.3951 4.62889C9.18803 5.09736 8.83798 5.48825 8.3951 5.74556C7.95032 6.00212 7.43577 6.11141 6.9251 6.05778L5.49066 5.90556C5.06499 5.86053 4.6354 5.93997 4.25397 6.13423C3.87255 6.32849 3.55567 6.62923 3.34177 7C3.12759 7.37054 3.02555 7.79528 3.04804 8.22267C3.07052 8.65007 3.21656 9.06175 3.46844 9.40778L4.3151 10.5711C4.61704 10.9864 4.77964 11.4866 4.77955 12C4.77964 12.5134 4.61704 13.0137 4.3151 13.4289L3.46844 14.5922C3.21656 14.9382 3.07052 15.3499 3.04804 15.7773C3.02555 16.2047 3.12759 16.6295 3.34177 17C3.55589 17.3706 3.8728 17.6712 4.25417 17.8654C4.63554 18.0596 5.06502 18.1392 5.49066 18.0944L6.92066 17.9422C7.43133 17.8886 7.94587 17.9979 8.39066 18.2544C8.83519 18.511 9.18687 18.902 9.3951 19.3711Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M12 15C13.6568 15 15 13.6569 15 12C15 10.3431 13.6568 9 12 9C10.3431 9 8.99998 10.3431 8.99998 12C8.99998 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Tu=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V8M11.5 12.5L17 7M17 7H12M17 7V12M6.2 21H8.8C9.9201 21 10.4802 21 10.908 20.782C11.2843 20.5903 11.5903 20.2843 11.782 19.908C12 19.4802 12 18.9201 12 17.8V15.2C12 14.0799 12 13.5198 11.782 13.092C11.5903 12.7157 11.2843 12.4097 10.908 12.218C10.4802 12 9.92011 12 8.8 12H6.2C5.0799 12 4.51984 12 4.09202 12.218C3.71569 12.4097 3.40973 12.7157 3.21799 13.092C3 13.5198 3 14.0799 3 15.2V17.8C3 18.9201 3 19.4802 3.21799 19.908C3.40973 20.2843 3.71569 20.5903 4.09202 20.782C4.51984 21 5.07989 21 6.2 21Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Au=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path class=copier d="M8 8V5.2C8 4.0799 8 3.51984 8.21799 3.09202C8.40973 2.71569 8.71569 2.40973 9.09202 2.21799C9.51984 2 10.0799 2 11.2 2H18.8C19.9201 2 20.4802 2 20.908 2.21799C21.2843 2.40973 21.5903 2.71569 21.782 3.09202C22 3.51984 22 4.0799 22 5.2V12.8C22 13.9201 22 14.4802 21.782 14.908C21.5903 15.2843 21.2843 15.5903 20.908 15.782C20.4802 16 19.9201 16 18.8 16H16M5.2 22H12.8C13.9201 22 14.4802 22 14.908 21.782C15.2843 21.5903 15.5903 21.2843 15.782 20.908C16 20.4802 16 19.9201 16 18.8V11.2C16 10.0799 16 9.51984 15.782 9.09202C15.5903 8.71569 15.2843 8.40973 14.908 8.21799C14.4802 8 13.9201 8 12.8 8H5.2C4.0799 8 3.51984 8 3.09202 8.21799C2.71569 8.40973 2.40973 8.71569 2.21799 9.09202C2 9.51984 2 10.0799 2 11.2V18.8C2 19.9201 2 20.4802 2.21799 20.908C2.40973 21.2843 2.71569 21.5903 3.09202 21.782C3.51984 22 4.07989 22 5.2 22Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round stroke=currentColor>'),Iu=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M2.5 21.4998L8.04927 19.3655C8.40421 19.229 8.58168 19.1607 8.74772 19.0716C8.8952 18.9924 9.0358 18.901 9.16804 18.7984C9.31692 18.6829 9.45137 18.5484 9.72028 18.2795L21 6.99982C22.1046 5.89525 22.1046 4.10438 21 2.99981C19.8955 1.89525 18.1046 1.89524 17 2.99981L5.72028 14.2795C5.45138 14.5484 5.31692 14.6829 5.20139 14.8318C5.09877 14.964 5.0074 15.1046 4.92823 15.2521C4.83911 15.4181 4.77085 15.5956 4.63433 15.9506L2.5 21.4998ZM2.5 21.4998L4.55812 16.1488C4.7054 15.7659 4.77903 15.5744 4.90534 15.4867C5.01572 15.4101 5.1523 15.3811 5.2843 15.4063C5.43533 15.4351 5.58038 15.5802 5.87048 15.8703L8.12957 18.1294C8.41967 18.4195 8.56472 18.5645 8.59356 18.7155C8.61877 18.8475 8.58979 18.9841 8.51314 19.0945C8.42545 19.2208 8.23399 19.2944 7.85107 19.4417L2.5 21.4998Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ps=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Du=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9 9L15 15M15 9L9 15M7.8 21H16.2C17.8802 21 18.7202 21 19.362 20.673C19.9265 20.3854 20.3854 19.9265 20.673 19.362C21 18.7202 21 17.8802 21 16.2V7.8C21 6.11984 21 5.27976 20.673 4.63803C20.3854 4.07354 19.9265 3.6146 19.362 3.32698C18.7202 3 17.8802 3 16.2 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21Z"stroke=#F04438 stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Pu=_('<svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 xmlns=http://www.w3.org/2000/svg><rect class=list width=20 height=20 y=2 x=2 rx=2></rect><line class=list-item y1=7 y2=7 x1=6 x2=18></line><line class=list-item y2=12 y1=12 x1=6 x2=18></line><line class=list-item y1=17 y2=17 x1=6 x2=18>'),Lu=_('<svg viewBox="0 0 24 24"height=20 width=20 fill=none xmlns=http://www.w3.org/2000/svg><path d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),Ou=_('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M7.5 12L10.5 15L16.5 9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),qu=_('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 2V6M12 18V22M6 12H2M22 12H18M19.0784 19.0784L16.25 16.25M19.0784 4.99994L16.25 7.82837M4.92157 19.0784L7.75 16.25M4.92157 4.99994L7.75 7.82837"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><animateTransform attributeName=transform attributeType=XML type=rotate from=0 to=360 dur=2s repeatCount=indefinite>'),Fu=_('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),_u=_('<svg width=14 height=14 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M9.5 15V9M14.5 15V9M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),zu=_('<svg version=1.0 viewBox="0 0 633 633"><linearGradient x1=-666.45 x2=-666.45 y1=163.28 y2=163.99 gradientTransform="matrix(633 0 0 633 422177 -103358)"gradientUnits=userSpaceOnUse><stop stop-color=#6BDAFF offset=0></stop><stop stop-color=#F9FFB5 offset=.32></stop><stop stop-color=#FFA770 offset=.71></stop><stop stop-color=#FF7373 offset=1></stop></linearGradient><circle cx=316.5 cy=316.5 r=316.5></circle><defs><filter x=-137.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=316.5 y=412 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=412 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=610.5 rx=214.5 ry=186 fill=#015064 stroke=#00CFE2 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=316.5 y=450 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=450 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=648.5 rx=214.5 ry=186 fill=#015064 stroke=#00A8B8 stroke-width=25></ellipse></g><defs><filter x=-137.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=-137.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=89.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=316.5 y=486 width=454 height=396.9 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=316.5 y=486 width=454 height=396.9 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><ellipse cx=543.5 cy=684.5 rx=214.5 ry=186 fill=#015064 stroke=#007782 stroke-width=25></ellipse></g><defs><filter x=272.2 y=308 width=176.9 height=129.3 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=272.2 y=308 width=176.9 height=129.3 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><line x1=436 x2=431 y1=403.2 y2=431.8 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=291 x2=280 y1=341.5 y2=403.5 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><line x1=332.9 x2=328.6 y1=384.1 y2=411.2 fill=none stroke=#000 stroke-linecap=round stroke-linejoin=bevel stroke-width=11></line><linearGradient x1=-670.75 x2=-671.59 y1=164.4 y2=164.49 gradientTransform="matrix(-184.16 -32.472 -11.461 64.997 -121359 -32126)"gradientUnits=userSpaceOnUse><stop stop-color=#EE2700 offset=0></stop><stop stop-color=#FF008E offset=1></stop></linearGradient><path d="m344.1 363 97.7 17.2c5.8 2.1 8.2 6.1 7.1 12.1s-4.7 9.2-11 9.9l-106-18.7-57.5-59.2c-3.2-4.8-2.9-9.1 0.8-12.8s8.3-4.4 13.7-2.1l55.2 53.6z"clip-rule=evenodd fill-rule=evenodd></path><line x1=428.2 x2=429.1 y1=384.5 y2=378 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=395.2 x2=396.1 y1=379.5 y2=373 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=362.2 x2=363.1 y1=373.5 y2=367.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=324.2 x2=328.4 y1=351.3 y2=347.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line><line x1=303.2 x2=307.4 y1=331.3 y2=327.4 fill=none stroke=#fff stroke-linecap=round stroke-linejoin=bevel stroke-width=7></line></g><defs><filter x=73.2 y=113.8 width=280.6 height=317.4 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=73.2 y=113.8 width=280.6 height=317.4 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-672.16 x2=-672.16 y1=165.03 y2=166.03 gradientTransform="matrix(-100.18 48.861 97.976 200.88 -83342 -93.059)"gradientUnits=userSpaceOnUse><stop stop-color=#A17500 offset=0></stop><stop stop-color=#5D2100 offset=1></stop></linearGradient><path d="m192.3 203c8.1 37.3 14 73.6 17.8 109.1 3.8 35.4 2.8 75.1-3 119.2l61.2-16.7c-15.6-59-25.2-97.9-28.6-116.6s-10.8-51.9-22.1-99.6l-25.3 4.6"clip-rule=evenodd fill-rule=evenodd></path><g stroke=#2F8A00><linearGradient x1=-660.23 x2=-660.23 y1=166.72 y2=167.72 gradientTransform="matrix(92.683 4.8573 -2.0259 38.657 61680 -3088.6)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9s-12.6-22.1-36.5-29.9c-15.9-5.2-34.4-1.5-55.5 11.1 15.9 14.3 29.5 22.6 40.7 24.9 16.8 3.6 51.3-6.1 51.3-6.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-661.36 x2=-661.36 y1=164.18 y2=165.18 gradientTransform="matrix(110 5.7648 -6.3599 121.35 73933 -15933)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5s-47.5-8.5-83.2 15.7c-23.8 16.2-34.3 49.3-31.6 99.4 30.3-27.8 52.1-48.5 65.2-61.9 19.8-20.2 49.6-53.2 49.6-53.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.79 x2=-656.79 y1=165.15 y2=166.15 gradientTransform="matrix(62.954 3.2993 -3.5023 66.828 42156 -8754.1)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m195 183.9c-0.8-21.9 6-38 20.6-48.2s29.8-15.4 45.5-15.3c-6.1 21.4-14.5 35.8-25.2 43.4s-24.4 14.2-40.9 20.1z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-663.07 x2=-663.07 y1=165.44 y2=166.44 gradientTransform="matrix(152.47 7.9907 -3.0936 59.029 101884 -4318.7)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c31.9-30 64.1-39.7 96.7-29s50.8 30.4 54.6 59.1c-35.2-5.5-60.4-9.6-75.8-12.1-15.3-2.6-40.5-8.6-75.5-18z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-662.57 x2=-662.57 y1=164.44 y2=165.44 gradientTransform="matrix(136.46 7.1517 -5.2163 99.533 91536 -11442)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c35.8-7.6 65.6-0.2 89.2 22s37.7 49 42.3 80.3c-39.8-9.7-68.3-23.8-85.5-42.4s-32.5-38.5-46-59.9z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><linearGradient x1=-656.43 x2=-656.43 y1=163.86 y2=164.86 gradientTransform="matrix(60.866 3.1899 -8.7773 167.48 41560 -25168)"gradientUnits=userSpaceOnUse><stop stop-color=#2F8A00 offset=0></stop><stop stop-color=#90FF57 offset=1></stop></linearGradient><path d="m194.9 184.5c-33.6 13.8-53.6 35.7-60.1 65.6s-3.6 63.1 8.7 99.6c27.4-40.3 43.2-69.6 47.4-88s5.6-44.1 4-77.2z"clip-rule=evenodd fill-rule=evenodd stroke-width=13></path><path d="m196.5 182.3c-14.8 21.6-25.1 41.4-30.8 59.4s-9.5 33-11.1 45.1"fill=none stroke-linecap=round stroke-width=8></path><path d="m194.9 185.7c-24.4 1.7-43.8 9-58.1 21.8s-24.7 25.4-31.3 37.8"fill=none stroke-linecap=round stroke-width=8></path><path d="m204.5 176.4c29.7-6.7 52-8.4 67-5.1s26.9 8.6 35.8 15.9"fill=none stroke-linecap=round stroke-width=8></path><path d="m196.5 181.4c20.3 9.9 38.2 20.5 53.9 31.9s27.4 22.1 35.1 32"fill=none stroke-linecap=round stroke-width=8></path></g></g><defs><filter x=50.5 y=399 width=532 height=633 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=50.5 y=399 width=532 height=633 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-666.06 x2=-666.23 y1=163.36 y2=163.75 gradientTransform="matrix(532 0 0 633 354760 -102959)"gradientUnits=userSpaceOnUse><stop stop-color=#FFF400 offset=0></stop><stop stop-color=#3C8700 offset=1></stop></linearGradient><ellipse cx=316.5 cy=715.5 rx=266 ry=316.5></ellipse></g><defs><filter x=391 y=-24 width=288 height=283 filterUnits=userSpaceOnUse><feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0"></feColorMatrix></filter></defs><mask x=391 y=-24 width=288 height=283 maskUnits=userSpaceOnUse><g><circle cx=316.5 cy=316.5 r=316.5 fill=#fff></circle></g></mask><g><linearGradient x1=-664.56 x2=-664.56 y1=163.79 y2=164.79 gradientTransform="matrix(227 0 0 227 151421 -37204)"gradientUnits=userSpaceOnUse><stop stop-color=#FFDF00 offset=0></stop><stop stop-color=#FF9D00 offset=1></stop></linearGradient><circle cx=565.5 cy=89.5 r=113.5></circle><linearGradient x1=-644.5 x2=-645.77 y1=342 y2=342 gradientTransform="matrix(30 0 0 1 19770 -253)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=427 x2=397 y1=89 y2=89 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-641.56 x2=-642.83 y1=196.02 y2=196.07 gradientTransform="matrix(26.5 0 0 5.5 17439 -1025.5)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=430.5 x2=404 y1=55.5 y2=50 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-643.73 x2=-645 y1=185.83 y2=185.9 gradientTransform="matrix(29 0 0 8 19107 -1361)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=431 x2=402 y1=122 y2=130 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-638.94 x2=-640.22 y1=177.09 y2=177.39 gradientTransform="matrix(24 0 0 13 15783 -2145)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=442 x2=418 y1=153 y2=166 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-633.42 x2=-634.7 y1=172.41 y2=173.31 gradientTransform="matrix(20 0 0 19 13137 -3096)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=464 x2=444 y1=180 y2=199 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-619.05 x2=-619.52 y1=170.82 y2=171.82 gradientTransform="matrix(13.83 0 0 22.85 9050 -3703.4)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=491.4 x2=477.5 y1=203 y2=225.9 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=-578.5 x2=-578.63 y1=170.31 y2=171.31 gradientTransform="matrix(7.5 0 0 24.5 4860 -3953)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=524.5 x2=517 y1=219.5 y2=244 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12></line><linearGradient x1=666.5 x2=666.5 y1=170.31 y2=171.31 gradientTransform="matrix(.5 0 0 24.5 231.5 -3944)"gradientUnits=userSpaceOnUse><stop stop-color=#FFA400 offset=0></stop><stop stop-color=#FF5E00 offset=1></stop></linearGradient><line x1=564.5 x2=565 y1=228.5 y2=253 fill=none stroke-linecap=round stroke-linejoin=bevel stroke-width=12>');function Ru(){return yu()}function Ls(){return bu()}function an(){return xu()}function Zo(){return wu()}function Jo(){return Dr()}function Ku(){return(()=>{var e=Dr();return e.style.setProperty("transform","rotate(90deg)"),e})()}function Bu(){return(()=>{var e=Dr();return e.style.setProperty("transform","rotate(-90deg)"),e})()}function Nu(){return $u()}function Uu(){return Cu()}function Gu(){return Su()}function Vu(){return ku()}function Hu(){return Eu()}function ju(){return Mu()}function Wu(){return Tu()}function Qu(){return Au()}function Yu(){return Iu()}function Xu(e){return(()=>{var t=Ps(),n=t.firstChild;return N(()=>A(n,"stroke",e.theme==="dark"?"#12B76A":"#027A48")),t})()}function Zu(){return Du()}function Ju(){return Pu()}function ed(e){return[v(R,{get when(){return e.checked},get children(){var t=Ps(),n=t.firstChild;return N(()=>A(n,"stroke",e.theme==="dark"?"#9B8AFB":"#6938EF")),t}}),v(R,{get when(){return!e.checked},get children(){var t=Lu(),n=t.firstChild;return N(()=>A(n,"stroke",e.theme==="dark"?"#9B8AFB":"#6938EF")),t}})]}function td(){return Ou()}function nd(){return qu()}function rd(){return Fu()}function od(){return _u()}function ei(){let e=Le();return(()=>{var t=zu(),n=t.firstChild,r=n.nextSibling,o=r.nextSibling,s=o.firstChild,l=o.nextSibling,a=l.firstChild,i=l.nextSibling,c=i.nextSibling,u=c.firstChild,d=c.nextSibling,g=d.firstChild,f=d.nextSibling,h=f.nextSibling,p=h.firstChild,m=h.nextSibling,y=m.firstChild,b=m.nextSibling,x=b.nextSibling,w=x.firstChild,$=x.nextSibling,O=$.firstChild,D=$.nextSibling,L=D.nextSibling,S=L.firstChild,F=L.nextSibling,H=F.firstChild,G=F.nextSibling,ne=G.nextSibling,fe=ne.firstChild,J=ne.nextSibling,ge=J.firstChild,ie=J.nextSibling,de=ie.nextSibling,le=de.firstChild,re=de.nextSibling,Se=re.firstChild,ve=re.nextSibling,Ae=ve.firstChild,T=Ae.nextSibling,he=T.nextSibling,X=he.nextSibling,pt=X.nextSibling,V=ve.nextSibling,He=V.firstChild,ke=V.nextSibling,_t=ke.firstChild,ze=ke.nextSibling,mt=ze.firstChild,Et=mt.nextSibling,ot=Et.nextSibling,Ze=ot.firstChild,it=Ze.nextSibling,P=it.nextSibling,oe=P.nextSibling,Ie=oe.nextSibling,se=Ie.nextSibling,te=se.nextSibling,ae=te.nextSibling,ye=ae.nextSibling,ee=ye.nextSibling,st=ee.nextSibling,lt=st.nextSibling,je=ze.nextSibling,Mt=je.firstChild,at=je.nextSibling,Tt=at.firstChild,ct=at.nextSibling,yt=ct.firstChild,bn=yt.nextSibling,Yt=ct.nextSibling,xn=Yt.firstChild,zt=Yt.nextSibling,wn=zt.firstChild,Xt=zt.nextSibling,Zt=Xt.firstChild,Jt=Zt.nextSibling,Rt=Jt.nextSibling,Lr=Rt.nextSibling,Or=Lr.nextSibling,qr=Or.nextSibling,Fr=qr.nextSibling,_r=Fr.nextSibling,zr=_r.nextSibling,Rr=zr.nextSibling,Kr=Rr.nextSibling,Br=Kr.nextSibling,Nr=Br.nextSibling,Ur=Nr.nextSibling,Gr=Ur.nextSibling,Vr=Gr.nextSibling,Hr=Vr.nextSibling,Rs=Hr.nextSibling;return A(n,"id",`a-${e}`),A(r,"fill",`url(#a-${e})`),A(s,"id",`am-${e}`),A(l,"id",`b-${e}`),A(a,"filter",`url(#am-${e})`),A(i,"mask",`url(#b-${e})`),A(u,"id",`ah-${e}`),A(d,"id",`k-${e}`),A(g,"filter",`url(#ah-${e})`),A(f,"mask",`url(#k-${e})`),A(p,"id",`ae-${e}`),A(m,"id",`j-${e}`),A(y,"filter",`url(#ae-${e})`),A(b,"mask",`url(#j-${e})`),A(w,"id",`ai-${e}`),A($,"id",`i-${e}`),A(O,"filter",`url(#ai-${e})`),A(D,"mask",`url(#i-${e})`),A(S,"id",`aj-${e}`),A(F,"id",`h-${e}`),A(H,"filter",`url(#aj-${e})`),A(G,"mask",`url(#h-${e})`),A(fe,"id",`ag-${e}`),A(J,"id",`g-${e}`),A(ge,"filter",`url(#ag-${e})`),A(ie,"mask",`url(#g-${e})`),A(le,"id",`af-${e}`),A(re,"id",`f-${e}`),A(Se,"filter",`url(#af-${e})`),A(ve,"mask",`url(#f-${e})`),A(X,"id",`m-${e}`),A(pt,"fill",`url(#m-${e})`),A(He,"id",`ak-${e}`),A(ke,"id",`e-${e}`),A(_t,"filter",`url(#ak-${e})`),A(ze,"mask",`url(#e-${e})`),A(mt,"id",`n-${e}`),A(Et,"fill",`url(#n-${e})`),A(Ze,"id",`r-${e}`),A(it,"fill",`url(#r-${e})`),A(P,"id",`s-${e}`),A(oe,"fill",`url(#s-${e})`),A(Ie,"id",`q-${e}`),A(se,"fill",`url(#q-${e})`),A(te,"id",`p-${e}`),A(ae,"fill",`url(#p-${e})`),A(ye,"id",`o-${e}`),A(ee,"fill",`url(#o-${e})`),A(st,"id",`l-${e}`),A(lt,"fill",`url(#l-${e})`),A(Mt,"id",`al-${e}`),A(at,"id",`d-${e}`),A(Tt,"filter",`url(#al-${e})`),A(ct,"mask",`url(#d-${e})`),A(yt,"id",`u-${e}`),A(bn,"fill",`url(#u-${e})`),A(xn,"id",`ad-${e}`),A(zt,"id",`c-${e}`),A(wn,"filter",`url(#ad-${e})`),A(Xt,"mask",`url(#c-${e})`),A(Zt,"id",`t-${e}`),A(Jt,"fill",`url(#t-${e})`),A(Rt,"id",`v-${e}`),A(Lr,"stroke",`url(#v-${e})`),A(Or,"id",`aa-${e}`),A(qr,"stroke",`url(#aa-${e})`),A(Fr,"id",`w-${e}`),A(_r,"stroke",`url(#w-${e})`),A(zr,"id",`ac-${e}`),A(Rr,"stroke",`url(#ac-${e})`),A(Kr,"id",`ab-${e}`),A(Br,"stroke",`url(#ab-${e})`),A(Nr,"id",`y-${e}`),A(Ur,"stroke",`url(#y-${e})`),A(Gr,"id",`x-${e}`),A(Vr,"stroke",`url(#x-${e})`),A(Hr,"id",`z-${e}`),A(Rs,"stroke",`url(#z-${e})`),t})()}var id=_('<span><svg width=16 height=16 viewBox="0 0 16 16"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 12L10 8L6 4"stroke-width=2 stroke-linecap=round stroke-linejoin=round>'),sd=_('<button title="Copy object to clipboard">'),ld=_('<button title="Remove all items"aria-label="Remove all items">'),ad=_('<button title="Delete item"aria-label="Delete item">'),cd=_('<button title="Toggle value"aria-label="Toggle value">'),ud=_('<button title="Bulk Edit Data"aria-label="Bulk Edit Data">'),on=_("<div>"),dd=_("<div><button> <span></span> <span> "),fd=_("<input>"),ti=_("<span>"),gd=_("<div><span>:"),hd=_("<div><div><button> [<!>...<!>]");function vd(e,t){let n=0,r=[];for(;n<e.length;)r.push(e.slice(n,n+t)),n=n+t;return r}var ni=e=>{let t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Qt(n):Wt(n));return(()=>{var o=id();return N(()=>I(o,q(r().expander,n`
          transform: rotate(${e.expanded?90:0}deg);
        `,e.expanded&&n`
            & svg {
              top: -1px;
            }
          `))),o})()},pd=e=>{let t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Qt(n):Wt(n)),[o,s]=z("NoCopy");return(()=>{var l=sd();return no(l,"click",o()==="NoCopy"?()=>{navigator.clipboard.writeText(so(e.value)).then(()=>{s("SuccessCopy"),setTimeout(()=>{s("NoCopy")},1500)},a=>{s("ErrorCopy"),setTimeout(()=>{s("NoCopy")},1500)})}:void 0,!0),k(l,v(Jr,{get children(){return[v($n,{get when(){return o()==="NoCopy"},get children(){return v(Qu,{})}}),v($n,{get when(){return o()==="SuccessCopy"},get children(){return v(Xu,{get theme(){return t()}})}}),v($n,{get when(){return o()==="ErrorCopy"},get children(){return v(Zu,{})}})]}})),N(a=>{var i=r().actionButton,c=`${o()==="NoCopy"?"Copy object to clipboard":o()==="SuccessCopy"?"Object copied to clipboard":"Error copying object to clipboard"}`;return i!==a.e&&I(l,a.e=i),c!==a.t&&A(l,"aria-label",a.t=c),a},{e:void 0,t:void 0}),l})()},md=e=>{let t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Qt(n):Wt(n)),o=K().client;return(()=>{var s=ld();return s.$$click=()=>{let l=e.activeQuery.state.data,a=En(l,e.dataPath,[]);o.setQueryData(e.activeQuery.queryKey,a)},k(s,v(Ju,{})),N(()=>I(s,r().actionButton)),s})()},ri=e=>{let t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Qt(n):Wt(n)),o=K().client;return(()=>{var s=ad();return s.$$click=()=>{let l=e.activeQuery.state.data,a=uo(l,e.dataPath);o.setQueryData(e.activeQuery.queryKey,a)},k(s,v(Ls,{})),N(()=>I(s,q(r().actionButton))),s})()},yd=e=>{let t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Qt(n):Wt(n)),o=K().client;return(()=>{var s=cd();return s.$$click=()=>{let l=e.activeQuery.state.data,a=En(l,e.dataPath,!e.value);o.setQueryData(e.activeQuery.queryKey,a)},k(s,v(ed,{get theme(){return t()},get checked(){return e.value}})),N(()=>I(s,q(r().actionButton,n`
          width: ${C.size[3.5]};
          height: ${C.size[3.5]};
        `))),s})()};function oi(e){return Symbol.iterator in e}function xt(e){let t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Qt(n):Wt(n)),o=K().client,[s,l]=z((e.defaultExpanded||[]).includes(e.label)),a=()=>l(h=>!h),[i,c]=z([]),u=M(()=>Array.isArray(e.value)?e.value.map((h,p)=>({label:p.toString(),value:h})):e.value!==null&&typeof e.value=="object"&&oi(e.value)&&typeof e.value[Symbol.iterator]=="function"?e.value instanceof Map?Array.from(e.value,([h,p])=>({label:h,value:p})):Array.from(e.value,(h,p)=>({label:p.toString(),value:h})):typeof e.value=="object"&&e.value!==null?Object.entries(e.value).map(([h,p])=>({label:h,value:p})):[]),d=M(()=>Array.isArray(e.value)?"array":e.value!==null&&typeof e.value=="object"&&oi(e.value)&&typeof e.value[Symbol.iterator]=="function"?"Iterable":typeof e.value=="object"&&e.value!==null?"object":typeof e.value),g=M(()=>vd(u(),100)),f=e.dataPath??[];return(()=>{var h=on();return k(h,v(R,{get when(){return g().length},get children(){return[(()=>{var p=dd(),m=p.firstChild,y=m.firstChild,b=y.nextSibling,x=b.nextSibling,w=x.nextSibling,$=w.firstChild;return m.$$click=()=>a(),k(m,v(ni,{get expanded(){return s()}}),y),k(b,()=>e.label),k(w,()=>String(d()).toLowerCase()==="iterable"?"(Iterable) ":"",$),k(w,()=>u().length,$),k(w,()=>u().length>1?"items":"item",null),k(p,v(R,{get when(){return e.editable},get children(){var O=on();return k(O,v(pd,{get value(){return e.value}}),null),k(O,v(R,{get when(){return e.itemsDeletable&&e.activeQuery!==void 0},get children(){return v(ri,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),k(O,v(R,{get when(){return d()==="array"&&e.activeQuery!==void 0},get children(){return v(md,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),k(O,v(R,{get when(){return M(()=>!!e.onEdit)()&&!io(e.value).meta},get children(){var D=ud();return D.$$click=()=>{e.onEdit?.()},k(D,v(Yu,{})),N(()=>I(D,r().actionButton)),D}}),null),N(()=>I(O,r().actions)),O}}),null),N(O=>{var D=r().expanderButtonContainer,L=r().expanderButton,S=r().info;return D!==O.e&&I(p,O.e=D),L!==O.t&&I(m,O.t=L),S!==O.a&&I(w,O.a=S),O},{e:void 0,t:void 0,a:void 0}),p})(),v(R,{get when(){return s()},get children(){return[v(R,{get when(){return g().length===1},get children(){var p=on();return k(p,v(In,{get each(){return u()},by:m=>m.label,children:m=>v(xt,{get defaultExpanded(){return e.defaultExpanded},get label(){return m().label},get value(){return m().value},get editable(){return e.editable},get dataPath(){return[...f,m().label]},get activeQuery(){return e.activeQuery},get itemsDeletable(){return d()==="array"||d()==="Iterable"||d()==="object"}})})),N(()=>I(p,r().subEntry)),p}}),v(R,{get when(){return g().length>1},get children(){var p=on();return k(p,v(Zr,{get each(){return g()},children:(m,y)=>(()=>{var b=hd(),x=b.firstChild,w=x.firstChild,$=w.firstChild,O=$.nextSibling,D=O.nextSibling,L=D.nextSibling;return L.nextSibling,w.$$click=()=>c(S=>S.includes(y)?S.filter(F=>F!==y):[...S,y]),k(w,v(ni,{get expanded(){return i().includes(y)}}),$),k(w,y*100,O),k(w,y*100+100-1,L),k(x,v(R,{get when(){return i().includes(y)},get children(){var S=on();return k(S,v(In,{get each(){return m()},by:F=>F.label,children:F=>v(xt,{get defaultExpanded(){return e.defaultExpanded},get label(){return F().label},get value(){return F().value},get editable(){return e.editable},get dataPath(){return[...f,F().label]},get activeQuery(){return e.activeQuery}})})),N(()=>I(S,r().subEntry)),S}}),null),N(S=>{var F=r().entry,H=r().expanderButton;return F!==S.e&&I(x,S.e=F),H!==S.t&&I(w,S.t=H),S},{e:void 0,t:void 0}),b})()})),N(()=>I(p,r().subEntry)),p}})]}})]}}),null),k(h,v(R,{get when(){return g().length===0},get children(){var p=gd(),m=p.firstChild,y=m.firstChild;return k(m,()=>e.label,y),k(p,v(R,{get when(){return M(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(d()==="string"||d()==="number"||d()==="boolean")},get fallback(){return(()=>{var b=ti();return k(b,()=>tn(e.value)),N(()=>I(b,r().value)),b})()},get children(){return[v(R,{get when(){return M(()=>!!(e.editable&&e.activeQuery!==void 0))()&&(d()==="string"||d()==="number")},get children(){var b=fd();return b.addEventListener("change",x=>{let w=e.activeQuery.state.data,$=En(w,f,d()==="number"?x.target.valueAsNumber:x.target.value);o.setQueryData(e.activeQuery.queryKey,$)}),N(x=>{var w=d()==="number"?"number":"text",$=q(r().value,r().editableInput);return w!==x.e&&A(b,"type",x.e=w),$!==x.t&&I(b,x.t=$),x},{e:void 0,t:void 0}),N(()=>b.value=e.value),b}}),v(R,{get when(){return d()==="boolean"},get children(){var b=ti();return k(b,v(yd,{get activeQuery(){return e.activeQuery},dataPath:f,get value(){return e.value}}),null),k(b,()=>tn(e.value),null),N(()=>I(b,q(r().value,r().actions,r().editableInput))),b}})]}}),null),k(p,v(R,{get when(){return e.editable&&e.itemsDeletable&&e.activeQuery!==void 0},get children(){return v(ri,{get activeQuery(){return e.activeQuery},dataPath:f})}}),null),N(b=>{var x=r().row,w=r().label;return x!==b.e&&I(p,b.e=x),w!==b.t&&I(m,b.t=w),b},{e:void 0,t:void 0}),p}}),null),N(()=>I(h,r().entry)),h})()}var Os=(e,t)=>{let{colors:n,font:r,size:o,border:s}=C,l=(a,i)=>e==="light"?a:i;return{entry:t`
      & * {
        font-size: ${r.size.xs};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
      }
      position: relative;
      outline: none;
      word-break: break-word;
    `,subEntry:t`
      margin: 0 0 0 0.5em;
      padding-left: 0.75em;
      border-left: 2px solid ${l(n.gray[300],n.darkGray[400])};
      /* outline: 1px solid ${n.teal[400]}; */
    `,expander:t`
      & path {
        stroke: ${n.gray[400]};
      }
      & svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      display: inline-flex;
      align-items: center;
      transition: all 0.1s ease;
      /* outline: 1px solid ${n.blue[400]}; */
    `,expanderButtonContainer:t`
      display: flex;
      align-items: center;
      line-height: ${o[4]};
      min-height: ${o[4]};
      gap: ${o[2]};
    `,expanderButton:t`
      cursor: pointer;
      color: inherit;
      font: inherit;
      outline: inherit;
      height: ${o[5]};
      background: transparent;
      border: none;
      padding: 0;
      display: inline-flex;
      align-items: center;
      gap: ${o[1]};
      position: relative;
      /* outline: 1px solid ${n.green[400]}; */

      &:focus-visible {
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }

      & svg {
        position: relative;
        left: 1px;
      }
    `,info:t`
      color: ${l(n.gray[500],n.gray[500])};
      font-size: ${r.size.xs};
      margin-left: ${o[1]};
      /* outline: 1px solid ${n.yellow[400]}; */
    `,label:t`
      color: ${l(n.gray[700],n.gray[300])};
      white-space: nowrap;
    `,value:t`
      color: ${l(n.purple[600],n.purple[400])};
      flex-grow: 1;
    `,actions:t`
      display: inline-flex;
      gap: ${o[2]};
      align-items: center;
    `,row:t`
      display: inline-flex;
      gap: ${o[2]};
      width: 100%;
      margin: ${o[.25]} 0px;
      line-height: ${o[4.5]};
      align-items: center;
    `,editableInput:t`
      border: none;
      padding: ${o[.5]} ${o[1]} ${o[.5]} ${o[1.5]};
      flex-grow: 1;
      border-radius: ${s.radius.xs};
      background-color: ${l(n.gray[200],n.darkGray[500])};

      &:hover {
        background-color: ${l(n.gray[300],n.darkGray[600])};
      }
    `,actionButton:t`
      background-color: transparent;
      color: ${l(n.gray[500],n.gray[500])};
      border: none;
      display: inline-flex;
      padding: 0px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: ${o[3]};
      height: ${o[3]};
      position: relative;
      z-index: 1;

      &:hover svg {
        color: ${l(n.gray[600],n.gray[400])};
      }

      &:focus-visible {
        border-radius: ${s.radius.xs};
        outline: 2px solid ${n.blue[800]};
        outline-offset: 2px;
      }
    `}},Wt=e=>Os("light",e),Qt=e=>Os("dark",e);Cn(["click"]);var bd=_('<div><div aria-hidden=true></div><button type=button aria-label="Open Tanstack query devtools"class=tsqd-open-btn>'),yn=_("<div>"),xd=_('<aside aria-label="Tanstack query devtools"><div></div><button aria-label="Close tanstack query devtools">'),wd=_("<select name=tsqd-queries-filter-sort>"),$d=_("<select name=tsqd-mutations-filter-sort>"),Cd=_("<span>Asc"),Sd=_("<span>Desc"),kd=_('<button aria-label="Open in picture-in-picture mode"title="Open in picture-in-picture mode">'),Ed=_("<div>Settings"),Md=_("<span>Position"),Td=_("<span>Top"),Ad=_("<span>Bottom"),Id=_("<span>Left"),Dd=_("<span>Right"),Pd=_("<span>Theme"),Ld=_("<span>Light"),Od=_("<span>Dark"),qd=_("<span>System"),Fd=_("<div><div class=tsqd-queries-container>"),_d=_("<div><div class=tsqd-mutations-container>"),zd=_('<div><div><div><button aria-label="Close Tanstack query devtools"><span>TANSTACK</span><span> v</span></button></div></div><div><div><div><input aria-label="Filter queries by query key"type=text placeholder=Filter name=tsqd-query-filter-input></div><div></div><button class=tsqd-query-filter-sort-order-btn></button></div><div><button aria-label="Clear query cache"></button><button>'),ii=_("<option>Sort by "),Rd=_("<div class=tsqd-query-disabled-indicator>disabled"),qs=_("<button><div></div><code class=tsqd-query-hash>"),Kd=_("<div role=tooltip id=tsqd-status-tooltip>"),Bd=_("<span>"),Nd=_("<button><span></span><span>"),Ud=_("<button><span></span> Error"),Gd=_('<div><span></span>Trigger Error<select><option value=""disabled selected>'),Vd=_('<div class="tsqd-query-details-explorer-container tsqd-query-details-data-explorer">'),Hd=_("<form><textarea name=data></textarea><div><span></span><div><button type=button>Cancel</button><button>Save"),jd=_('<div><div>Query Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-observers-count><span>Observers:</span><span></span></div><div class=tsqd-query-details-last-updated><span>Last Updated:</span><span></span></div></div><div>Actions</div><div><button><span></span>Refetch</button><button><span></span>Invalidate</button><button><span></span>Reset</button><button><span></span>Remove</button><button><span></span> Loading</button></div><div>Data </div><div>Query Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),Wd=_("<option>"),Qd=_('<div><div>Mutation Details</div><div><div class=tsqd-query-details-summary><pre><code></code></pre><span></span></div><div class=tsqd-query-details-last-updated><span>Submitted At:</span><span></span></div></div><div>Variables Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Context Details</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Data Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer"></div><div>Mutations Explorer</div><div class="tsqd-query-details-explorer-container tsqd-query-details-query-explorer">'),[qe,Vn]=z(null),[wt,Fs]=z(null),[Qe,Pr]=z(0),[Bt,si]=z(!1),df=e=>{let t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Ve(n):Ge(n)),o=gr(),s=M(()=>K().buttonPosition||Xs),l=M(()=>e.localStore.open==="true"?!0:e.localStore.open==="false"?!1:K().initialIsOpen||Zs),a=M(()=>e.localStore.position||K().position||nr),i;B(()=>{let u=i.parentElement,d=e.localStore.height||li,g=e.localStore.width||ai,f=a();u.style.setProperty("--tsqd-panel-height",`${f==="top"?"-":""}${d}px`),u.style.setProperty("--tsqd-panel-width",`${f==="left"?"-":""}${g}px`)}),bt(()=>{let u=()=>{let d=i.parentElement,g=getComputedStyle(d).fontSize;d.style.setProperty("--tsqd-font-size",g)};u(),window.addEventListener("focus",u),U(()=>{window.removeEventListener("focus",u)})});let c=M(()=>e.localStore.pip_open??"false");return[v(R,{get when(){return M(()=>!!o().pipWindow)()&&c()=="true"},get children(){return v(Wn,{get mount(){return o().pipWindow?.document.body},get children(){return v(Yd,{get children(){return v(_s,e)}})}})}}),(()=>{var u=yn(),d=i;return typeof d=="function"?Kt(d,u):i=u,k(u,v(wo,{name:"tsqd-panel-transition",get children(){return v(R,{get when(){return M(()=>!!(l()&&!o().pipWindow))()&&c()=="false"},get children(){return v(Xd,{get localStore(){return e.localStore},get setLocalStore(){return e.setLocalStore}})}})}}),null),k(u,v(wo,{name:"tsqd-button-transition",get children(){return v(R,{get when(){return!l()},get children(){var g=bd(),f=g.firstChild,h=f.nextSibling;return k(f,v(ei,{})),h.$$click=()=>e.setLocalStore("open","true"),k(h,v(ei,{})),N(()=>I(g,q(r().devtoolsBtn,r()[`devtoolsBtn-position-${s()}`],"tsqd-open-btn-container"))),g}})}}),null),N(()=>I(u,q(n`
            & .tsqd-panel-transition-exit-active,
            & .tsqd-panel-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
            }

            & .tsqd-panel-transition-exit-to,
            & .tsqd-panel-transition-enter {
              ${a()==="top"||a()==="bottom"?"transform: translateY(var(--tsqd-panel-height));":"transform: translateX(var(--tsqd-panel-width));"}
            }

            & .tsqd-button-transition-exit-active,
            & .tsqd-button-transition-enter-active {
              transition:
                opacity 0.3s,
                transform 0.3s;
              opacity: 1;
            }

            & .tsqd-button-transition-exit-to,
            & .tsqd-button-transition-enter {
              transform: ${s()==="relative"?"none;":s()==="top-left"?"translateX(-72px);":s()==="top-right"?"translateX(72px);":"translateY(72px);"};
              opacity: 0;
            }
          `,"tsqd-transitions-container"))),u})()]},Yd=e=>{let t=gr(),n=$e(),r=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,o=M(()=>n()==="dark"?Ve(r):Ge(r)),s=()=>{let{colors:l}=C,a=(i,c)=>n()==="dark"?c:i;return Qe()<Lt?r`
        flex-direction: column;
        background-color: ${a(l.gray[300],l.gray[600])};
      `:r`
      flex-direction: row;
      background-color: ${a(l.gray[200],l.darkGray[900])};
    `};return B(()=>{let l=t().pipWindow,a=()=>{l&&Pr(l.innerWidth)};l&&(l.addEventListener("resize",a),a()),U(()=>{l&&l.removeEventListener("resize",a)})}),(()=>{var l=yn();return l.style.setProperty("--tsqd-font-size","16px"),l.style.setProperty("max-height","100vh"),l.style.setProperty("height","100vh"),l.style.setProperty("width","100vw"),k(l,()=>e.children),N(()=>I(l,q(o().panel,s(),{[r`
            min-width: min-content;
          `]:Qe()<fr},"tsqd-main-panel"))),l})()},ff=e=>{let t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Ve(n):Ge(n)),o;bt(()=>{hi(o,({width:l},a)=>{a===o&&Pr(l)})});let s=()=>{let{colors:l}=C,a=(i,c)=>t()==="dark"?c:i;return Qe()<Lt?n`
        flex-direction: column;
        background-color: ${a(l.gray[300],l.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${a(l.gray[200],l.darkGray[900])};
    `};return(()=>{var l=yn(),a=o;return typeof a=="function"?Kt(a,l):o=l,l.style.setProperty("--tsqd-font-size","16px"),k(l,()=>e.children),N(()=>I(l,q(r().parentPanel,s(),{[n`
            min-width: min-content;
          `]:Qe()<fr},"tsqd-main-panel"))),l})()},Xd=e=>{let t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Ve(n):Ge(n)),[o,s]=z(!1),l=M(()=>e.localStore.position||K().position||nr),a=u=>{let d=u.currentTarget.parentElement;if(!d)return;s(!0);let{height:g,width:f}=d.getBoundingClientRect(),h=u.clientX,p=u.clientY,m=0,y=Qn(3.5),b=Qn(12),x=$=>{if($.preventDefault(),l()==="left"||l()==="right"){let O=l()==="right"?h-$.clientX:$.clientX-h;m=Math.round(f+O),m<b&&(m=b),e.setLocalStore("width",String(Math.round(m)));let D=d.getBoundingClientRect().width;Number(e.localStore.width)<D&&e.setLocalStore("width",String(D))}else{let O=l()==="bottom"?p-$.clientY:$.clientY-p;m=Math.round(g+O),m<y&&(m=y,Vn(null)),e.setLocalStore("height",String(Math.round(m)))}},w=()=>{o()&&s(!1),document.removeEventListener("mousemove",x,!1),document.removeEventListener("mouseUp",w,!1)};document.addEventListener("mousemove",x,!1),document.addEventListener("mouseup",w,!1)},i;bt(()=>{hi(i,({width:u},d)=>{d===i&&Pr(u)})}),B(()=>{let u=i.parentElement?.parentElement?.parentElement;if(!u)return;let d=e.localStore.position||nr,g=lo("padding",d),f=e.localStore.position==="left"||e.localStore.position==="right",h=(({padding:p,paddingTop:m,paddingBottom:y,paddingLeft:b,paddingRight:x})=>({padding:p,paddingTop:m,paddingBottom:y,paddingLeft:b,paddingRight:x}))(u.style);u.style[g]=`${f?e.localStore.width:e.localStore.height}px`,U(()=>{Object.entries(h).forEach(([p,m])=>{u.style[p]=m})})});let c=()=>{let{colors:u}=C,d=(g,f)=>t()==="dark"?f:g;return Qe()<Lt?n`
        flex-direction: column;
        background-color: ${d(u.gray[300],u.gray[600])};
      `:n`
      flex-direction: row;
      background-color: ${d(u.gray[200],u.darkGray[900])};
    `};return(()=>{var u=xd(),d=u.firstChild,g=d.nextSibling,f=i;return typeof f=="function"?Kt(f,u):i=u,d.$$mousedown=a,g.$$click=()=>e.setLocalStore("open","false"),k(g,v(an,{})),k(u,v(_s,e),null),N(h=>{var p=q(r().panel,r()[`panel-position-${l()}`],c(),{[n`
            min-width: min-content;
          `]:Qe()<fr&&(l()==="right"||l()==="left")},"tsqd-main-panel"),m=l()==="bottom"||l()==="top"?`${e.localStore.height||li}px`:"auto",y=l()==="right"||l()==="left"?`${e.localStore.width||ai}px`:"auto",b=q(r().dragHandle,r()[`dragHandle-position-${l()}`],"tsqd-drag-handle"),x=q(r().closeBtn,r()[`closeBtn-position-${l()}`],"tsqd-minimize-btn");return p!==h.e&&I(u,h.e=p),m!==h.t&&((h.t=m)!=null?u.style.setProperty("height",m):u.style.removeProperty("height")),y!==h.a&&((h.a=y)!=null?u.style.setProperty("width",y):u.style.removeProperty("width")),b!==h.o&&I(d,h.o=b),x!==h.i&&I(g,h.i=x),h},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0}),u})()},_s=e=>{of(),sf();let t,n=$e(),r=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,o=M(()=>n()==="dark"?Ve(r):Ge(r)),s=gr(),[l,a]=z("queries"),i=M(()=>e.localStore.sort||el),c=M(()=>Number(e.localStore.sortOrder)||ho),u=M(()=>e.localStore.mutationSort||tl),d=M(()=>Number(e.localStore.mutationSortOrder)||ho),g=M(()=>Sn[i()]),f=M(()=>kn[u()]),h=M(()=>K().onlineManager),p=M(()=>K().client.getQueryCache()),m=M(()=>K().client.getMutationCache()),y=Ce(D=>D().getAll().length,!1),b=M(Je(()=>[y(),e.localStore.filter,i(),c()],()=>{let D=p().getAll(),L=e.localStore.filter?D.filter(F=>vo(F.queryHash,e.localStore.filter||"").passed):[...D];return g()?L.sort((F,H)=>g()(F,H)*c()):L})),x=We(D=>D().getAll().length,!1),w=M(Je(()=>[x(),e.localStore.mutationFilter,u(),d()],()=>{let D=m().getAll(),L=e.localStore.mutationFilter?D.filter(F=>{let H=`${F.options.mutationKey?JSON.stringify(F.options.mutationKey)+" - ":""}${new Date(F.state.submittedAt).toLocaleString()}`;return vo(H,e.localStore.mutationFilter||"").passed}):[...D];return f()?L.sort((F,H)=>f()(F,H)*d()):L})),$=D=>{e.setLocalStore("position",D)},O=D=>{let S=getComputedStyle(t).getPropertyValue("--tsqd-font-size");D.style.setProperty("--tsqd-font-size",S)};return[(()=>{var D=zd(),L=D.firstChild,S=L.firstChild,F=S.firstChild,H=F.firstChild,G=H.nextSibling,ne=G.firstChild,fe=L.nextSibling,J=fe.firstChild,ge=J.firstChild,ie=ge.firstChild,de=ge.nextSibling,le=de.nextSibling,re=J.nextSibling,Se=re.firstChild,ve=Se.nextSibling,Ae=t;return typeof Ae=="function"?Kt(Ae,D):t=D,F.$$click=()=>{if(!s().pipWindow&&!e.showPanelViewOnly){e.setLocalStore("open","false");return}e.onClose&&e.onClose()},k(G,()=>K().queryFlavor,ne),k(G,()=>K().version,null),k(S,v(Be.Root,{get class(){return q(o().viewToggle)},get value(){return l()},onChange:T=>{a(T),Vn(null),Fs(null)},get children(){return[v(Be.Item,{value:"queries",class:"tsqd-radio-toggle",get children(){return[v(Be.ItemInput,{}),v(Be.ItemControl,{get children(){return v(Be.ItemIndicator,{})}}),v(Be.ItemLabel,{title:"Toggle Queries View",children:"Queries"})]}}),v(Be.Item,{value:"mutations",class:"tsqd-radio-toggle",get children(){return[v(Be.ItemInput,{}),v(Be.ItemControl,{get children(){return v(Be.ItemIndicator,{})}}),v(Be.ItemLabel,{title:"Toggle Mutations View",children:"Mutations"})]}})]}}),null),k(L,v(R,{get when(){return l()==="queries"},get children(){return v(ef,{})}}),null),k(L,v(R,{get when(){return l()==="mutations"},get children(){return v(tf,{})}}),null),k(ge,v(Ru,{}),ie),ie.$$input=T=>{l()==="queries"?e.setLocalStore("filter",T.currentTarget.value):e.setLocalStore("mutationFilter",T.currentTarget.value)},k(de,v(R,{get when(){return l()==="queries"},get children(){var T=wd();return T.addEventListener("change",he=>{e.setLocalStore("sort",he.currentTarget.value)}),k(T,()=>Object.keys(Sn).map(he=>(()=>{var X=ii();return X.firstChild,X.value=he,k(X,he,null),X})())),N(()=>T.value=i()),T}}),null),k(de,v(R,{get when(){return l()==="mutations"},get children(){var T=$d();return T.addEventListener("change",he=>{e.setLocalStore("mutationSort",he.currentTarget.value)}),k(T,()=>Object.keys(kn).map(he=>(()=>{var X=ii();return X.firstChild,X.value=he,k(X,he,null),X})())),N(()=>T.value=u()),T}}),null),k(de,v(an,{}),null),le.$$click=()=>{l()==="queries"?e.setLocalStore("sortOrder",String(c()*-1)):e.setLocalStore("mutationSortOrder",String(d()*-1))},k(le,v(R,{get when(){return(l()==="queries"?c():d())===1},get children(){return[Cd(),v(Zo,{})]}}),null),k(le,v(R,{get when(){return(l()==="queries"?c():d())===-1},get children(){return[Sd(),v(Jo,{})]}}),null),Se.$$click=()=>{l()==="queries"?p().clear():m().clear()},k(Se,v(Ls,{})),ve.$$click=()=>{Bt()?(h().setOnline(!0),si(!1)):(h().setOnline(!1),si(!0))},k(ve,(()=>{var T=M(()=>!!Bt());return()=>T()?v(Hu,{}):v(Vu,{})})()),k(re,v(R,{get when(){return M(()=>!s().pipWindow)()&&!s().disabled},get children(){var T=kd();return T.$$click=()=>{s().requestPipWindow(Number(window.innerWidth),Number(e.localStore.height??500))},k(T,v(Wu,{})),N(()=>I(T,q(o().actionsBtn,"tsqd-actions-btn","tsqd-action-open-pip"))),T}}),null),k(re,v(me.Root,{gutter:4,get children(){return[v(me.Trigger,{get class(){return q(o().actionsBtn,"tsqd-actions-btn","tsqd-action-settings")},get children(){return v(ju,{})}}),v(me.Portal,{ref:T=>O(T),get mount(){return M(()=>!!s().pipWindow)()?s().pipWindow.document.body:document.body},get children(){return v(me.Content,{get class(){return q(o().settingsMenu,"tsqd-settings-menu")},get children(){return[(()=>{var T=Ed();return N(()=>I(T,q(o().settingsMenuHeader,"tsqd-settings-menu-header"))),T})(),v(R,{get when(){return!e.showPanelViewOnly},get children(){return v(me.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[v(me.SubTrigger,{get class(){return q(o().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[Md(),v(an,{})]}}),v(me.Portal,{ref:T=>O(T),get mount(){return M(()=>!!s().pipWindow)()?s().pipWindow.document.body:document.body},get children(){return v(me.SubContent,{get class(){return q(o().settingsMenu,"tsqd-settings-submenu")},get children(){return[v(me.Item,{onSelect:()=>{$("top")},as:"button",get class(){return q(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[Td(),v(Zo,{})]}}),v(me.Item,{onSelect:()=>{$("bottom")},as:"button",get class(){return q(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[Ad(),v(Jo,{})]}}),v(me.Item,{onSelect:()=>{$("left")},as:"button",get class(){return q(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[Id(),v(Ku,{})]}}),v(me.Item,{onSelect:()=>{$("right")},as:"button",get class(){return q(o().settingsSubButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-right")},get children(){return[Dd(),v(Bu,{})]}})]}})}})]}})}}),v(me.Sub,{overlap:!0,gutter:8,shift:-4,get children(){return[v(me.SubTrigger,{get class(){return q(o().settingsSubTrigger,"tsqd-settings-menu-sub-trigger","tsqd-settings-menu-sub-trigger-position")},get children(){return[Pd(),v(an,{})]}}),v(me.Portal,{ref:T=>O(T),get mount(){return M(()=>!!s().pipWindow)()?s().pipWindow.document.body:document.body},get children(){return v(me.SubContent,{get class(){return q(o().settingsMenu,"tsqd-settings-submenu")},get children(){return[v(me.Item,{onSelect:()=>{e.setLocalStore("theme_preference","light")},as:"button",get class(){return q(o().settingsSubButton,e.localStore.theme_preference==="light"&&o().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-top")},get children(){return[Ld(),v(Nu,{})]}}),v(me.Item,{onSelect:()=>{e.setLocalStore("theme_preference","dark")},as:"button",get class(){return q(o().settingsSubButton,e.localStore.theme_preference==="dark"&&o().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-bottom")},get children(){return[Od(),v(Uu,{})]}}),v(me.Item,{onSelect:()=>{e.setLocalStore("theme_preference","system")},as:"button",get class(){return q(o().settingsSubButton,e.localStore.theme_preference==="system"&&o().themeSelectedButton,"tsqd-settings-menu-position-btn","tsqd-settings-menu-position-btn-left")},get children(){return[qd(),v(Gu,{})]}})]}})}})]}})]}})}})]}}),null),k(D,v(R,{get when(){return l()==="queries"},get children(){var T=Fd(),he=T.firstChild;return k(he,v(In,{by:X=>X.queryHash,get each(){return b()},children:X=>v(Zd,{get query(){return X()}})})),N(()=>I(T,q(o().overflowQueryContainer,"tsqd-queries-overflow-container"))),T}}),null),k(D,v(R,{get when(){return l()==="mutations"},get children(){var T=_d(),he=T.firstChild;return k(he,v(In,{by:X=>X.mutationId,get each(){return w()},children:X=>v(Jd,{get mutation(){return X()}})})),N(()=>I(T,q(o().overflowQueryContainer,"tsqd-mutations-overflow-container"))),T}}),null),N(T=>{var he=q(o().queriesContainer,Qe()<Lt&&(qe()||wt())&&r`
              height: 50%;
              max-height: 50%;
            `,Qe()<Lt&&!(qe()||wt())&&r`
              height: 100%;
              max-height: 100%;
            `,"tsqd-queries-container"),X=q(o().row,"tsqd-header"),pt=o().logoAndToggleContainer,V=q(o().logo,"tsqd-text-logo-container"),He=q(o().tanstackLogo,"tsqd-text-logo-tanstack"),ke=q(o().queryFlavorLogo,"tsqd-text-logo-query-flavor"),_t=q(o().row,"tsqd-filters-actions-container"),ze=q(o().filtersContainer,"tsqd-filters-container"),mt=q(o().filterInput,"tsqd-query-filter-textfield-container"),Et=q("tsqd-query-filter-textfield"),ot=q(o().filterSelect,"tsqd-query-filter-sort-container"),Ze=`Sort order ${(l()==="queries"?c():d())===-1?"descending":"ascending"}`,it=(l()==="queries"?c():d())===-1,P=q(o().actionsContainer,"tsqd-actions-container"),oe=q(o().actionsBtn,"tsqd-actions-btn","tsqd-action-clear-cache"),Ie=`Clear ${l()} cache`,se=q(o().actionsBtn,Bt()&&o().actionsBtnOffline,"tsqd-actions-btn","tsqd-action-mock-offline-behavior"),te=`${Bt()?"Unset offline mocking behavior":"Mock offline behavior"}`,ae=Bt(),ye=`${Bt()?"Unset offline mocking behavior":"Mock offline behavior"}`;return he!==T.e&&I(D,T.e=he),X!==T.t&&I(L,T.t=X),pt!==T.a&&I(S,T.a=pt),V!==T.o&&I(F,T.o=V),He!==T.i&&I(H,T.i=He),ke!==T.n&&I(G,T.n=ke),_t!==T.s&&I(fe,T.s=_t),ze!==T.h&&I(J,T.h=ze),mt!==T.r&&I(ge,T.r=mt),Et!==T.d&&I(ie,T.d=Et),ot!==T.l&&I(de,T.l=ot),Ze!==T.u&&A(le,"aria-label",T.u=Ze),it!==T.c&&A(le,"aria-pressed",T.c=it),P!==T.w&&I(re,T.w=P),oe!==T.m&&I(Se,T.m=oe),Ie!==T.f&&A(Se,"title",T.f=Ie),se!==T.y&&I(ve,T.y=se),te!==T.g&&A(ve,"aria-label",T.g=te),ae!==T.p&&A(ve,"aria-pressed",T.p=ae),ye!==T.b&&A(ve,"title",T.b=ye),T},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0}),N(()=>ie.value=l()==="queries"?e.localStore.filter||"":e.localStore.mutationFilter||""),D})(),v(R,{get when(){return M(()=>l()==="queries")()&&qe()},get children(){return v(nf,{})}}),v(R,{get when(){return M(()=>l()==="mutations")()&&wt()},get children(){return v(rf,{})}})]},Zd=e=>{let t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Ve(n):Ge(n)),{colors:o,alpha:s}=C,l=(f,h)=>t()==="dark"?h:f,a=Ce(f=>f().find({queryKey:e.query.queryKey})?.state,!0,f=>f.query.queryHash===e.query.queryHash),i=Ce(f=>f().find({queryKey:e.query.queryKey})?.isDisabled()??!1,!0,f=>f.query.queryHash===e.query.queryHash),c=Ce(f=>f().find({queryKey:e.query.queryKey})?.isStale()??!1,!0,f=>f.query.queryHash===e.query.queryHash),u=Ce(f=>f().find({queryKey:e.query.queryKey})?.getObserversCount()??0,!0,f=>f.query.queryHash===e.query.queryHash),d=M(()=>ao({queryState:a(),observerCount:u(),isStale:c()})),g=()=>d()==="gray"?n`
        background-color: ${l(o[d()][200],o[d()][700])};
        color: ${l(o[d()][700],o[d()][300])};
      `:n`
      background-color: ${l(o[d()][200]+s[80],o[d()][900])};
      color: ${l(o[d()][800],o[d()][300])};
    `;return v(R,{get when(){return a()},get children(){var f=qs(),h=f.firstChild,p=h.nextSibling;return f.$$click=()=>Vn(e.query.queryHash===qe()?null:e.query.queryHash),k(h,u),k(p,()=>e.query.queryHash),k(f,v(R,{get when(){return i()},get children(){return Rd()}}),null),N(m=>{var y=q(r().queryRow,qe()===e.query.queryHash&&r().selectedQueryRow,"tsqd-query-row"),b=`Query key ${e.query.queryHash}`,x=q(g(),"tsqd-query-observer-count");return y!==m.e&&I(f,m.e=y),b!==m.t&&A(f,"aria-label",m.t=b),x!==m.a&&I(h,m.a=x),m},{e:void 0,t:void 0,a:void 0}),f}})},Jd=e=>{let t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Ve(n):Ge(n)),{colors:o,alpha:s}=C,l=(g,f)=>t()==="dark"?f:g,a=We(g=>g().getAll().find(p=>p.mutationId===e.mutation.mutationId)?.state),i=We(g=>{let h=g().getAll().find(p=>p.mutationId===e.mutation.mutationId);return h?h.state.isPaused:!1}),c=We(g=>{let h=g().getAll().find(p=>p.mutationId===e.mutation.mutationId);return h?h.state.status:"idle"}),u=M(()=>Dt({isPaused:i(),status:c()})),d=()=>u()==="gray"?n`
        background-color: ${l(o[u()][200],o[u()][700])};
        color: ${l(o[u()][700],o[u()][300])};
      `:n`
      background-color: ${l(o[u()][200]+s[80],o[u()][900])};
      color: ${l(o[u()][800],o[u()][300])};
    `;return v(R,{get when(){return a()},get children(){var g=qs(),f=g.firstChild,h=f.nextSibling;return g.$$click=()=>{Fs(e.mutation.mutationId===wt()?null:e.mutation.mutationId)},k(f,v(R,{get when(){return u()==="purple"},get children(){return v(od,{})}}),null),k(f,v(R,{get when(){return u()==="green"},get children(){return v(td,{})}}),null),k(f,v(R,{get when(){return u()==="red"},get children(){return v(rd,{})}}),null),k(f,v(R,{get when(){return u()==="yellow"},get children(){return v(nd,{})}}),null),k(h,v(R,{get when(){return e.mutation.options.mutationKey},get children(){return[M(()=>JSON.stringify(e.mutation.options.mutationKey))," -"," "]}}),null),k(h,()=>new Date(e.mutation.state.submittedAt).toLocaleString(),null),N(p=>{var m=q(r().queryRow,wt()===e.mutation.mutationId&&r().selectedQueryRow,"tsqd-query-row"),y=`Mutation submitted at ${new Date(e.mutation.state.submittedAt).toLocaleString()}`,b=q(d(),"tsqd-query-observer-count");return m!==p.e&&I(g,p.e=m),y!==p.t&&A(g,"aria-label",p.t=y),b!==p.a&&I(f,p.a=b),p},{e:void 0,t:void 0,a:void 0}),g}})},ef=()=>{let e=Ce(i=>i().getAll().filter(c=>It(c)==="stale").length),t=Ce(i=>i().getAll().filter(c=>It(c)==="fresh").length),n=Ce(i=>i().getAll().filter(c=>It(c)==="fetching").length),r=Ce(i=>i().getAll().filter(c=>It(c)==="paused").length),o=Ce(i=>i().getAll().filter(c=>It(c)==="inactive").length),s=$e(),l=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,a=M(()=>s()==="dark"?Ve(l):Ge(l));return(()=>{var i=yn();return k(i,v(ft,{label:"Fresh",color:"green",get count(){return t()}}),null),k(i,v(ft,{label:"Fetching",color:"blue",get count(){return n()}}),null),k(i,v(ft,{label:"Paused",color:"purple",get count(){return r()}}),null),k(i,v(ft,{label:"Stale",color:"yellow",get count(){return e()}}),null),k(i,v(ft,{label:"Inactive",color:"gray",get count(){return o()}}),null),N(()=>I(i,q(a().queryStatusContainer,"tsqd-query-status-container"))),i})()},tf=()=>{let e=We(a=>a().getAll().filter(i=>Dt({isPaused:i.state.isPaused,status:i.state.status})==="green").length),t=We(a=>a().getAll().filter(i=>Dt({isPaused:i.state.isPaused,status:i.state.status})==="yellow").length),n=We(a=>a().getAll().filter(i=>Dt({isPaused:i.state.isPaused,status:i.state.status})==="purple").length),r=We(a=>a().getAll().filter(i=>Dt({isPaused:i.state.isPaused,status:i.state.status})==="red").length),o=$e(),s=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,l=M(()=>o()==="dark"?Ve(s):Ge(s));return(()=>{var a=yn();return k(a,v(ft,{label:"Paused",color:"purple",get count(){return n()}}),null),k(a,v(ft,{label:"Pending",color:"yellow",get count(){return t()}}),null),k(a,v(ft,{label:"Success",color:"green",get count(){return e()}}),null),k(a,v(ft,{label:"Error",color:"red",get count(){return r()}}),null),N(()=>I(a,q(l().queryStatusContainer,"tsqd-query-status-container"))),a})()},ft=e=>{let t=$e(),n=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,r=M(()=>t()==="dark"?Ve(n):Ge(n)),{colors:o,alpha:s}=C,l=(f,h)=>t()==="dark"?h:f,a,[i,c]=z(!1),[u,d]=z(!1),g=M(()=>!(qe()&&Qe()<Ys&&Qe()>Lt||Qe()<Lt));return(()=>{var f=Nd(),h=f.firstChild,p=h.nextSibling,m=a;return typeof m=="function"?Kt(m,f):a=f,f.addEventListener("mouseleave",()=>{c(!1),d(!1)}),f.addEventListener("mouseenter",()=>c(!0)),f.addEventListener("blur",()=>d(!1)),f.addEventListener("focus",()=>d(!0)),ro(f,j({get disabled(){return g()},get class(){return q(r().queryStatusTag,!g()&&n`
            cursor: pointer;
            &:hover {
              background: ${l(o.gray[200],o.darkGray[400])}${s[80]};
            }
          `,"tsqd-query-status-tag",`tsqd-query-status-tag-${e.label.toLowerCase()}`)}},()=>i()||u()?{"aria-describedby":"tsqd-status-tooltip"}:{}),!1,!0),k(f,v(R,{get when(){return M(()=>!g())()&&(i()||u())},get children(){var y=Kd();return k(y,()=>e.label),N(()=>I(y,q(r().statusTooltip,"tsqd-query-status-tooltip"))),y}}),h),k(f,v(R,{get when(){return g()},get children(){var y=Bd();return k(y,()=>e.label),N(()=>I(y,q(r().queryStatusTagLabel,"tsqd-query-status-tag-label"))),y}}),p),k(p,()=>e.count),N(y=>{var b=q(n`
            width: ${C.size[1.5]};
            height: ${C.size[1.5]};
            border-radius: ${C.border.radius.full};
            background-color: ${C.colors[e.color][500]};
          `,"tsqd-query-status-tag-dot"),x=q(r().queryStatusCount,e.count>0&&e.color!=="gray"&&n`
              background-color: ${l(o[e.color][100],o[e.color][900])};
              color: ${l(o[e.color][700],o[e.color][300])};
            `,"tsqd-query-status-tag-count");return b!==y.e&&I(h,y.e=b),x!==y.t&&I(p,y.t=x),y},{e:void 0,t:void 0}),f})()},nf=()=>{let e=$e(),t=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,n=M(()=>e()==="dark"?Ve(t):Ge(t)),{colors:r}=C,o=(S,F)=>e()==="dark"?F:S,s=K().client,[l,a]=z(!1),[i,c]=z("view"),[u,d]=z(!1),g=M(()=>K().errorTypes||[]),f=Ce(S=>S().getAll().find(F=>F.queryHash===qe()),!1),h=Ce(S=>S().getAll().find(F=>F.queryHash===qe()),!1),p=Ce(S=>S().getAll().find(F=>F.queryHash===qe())?.state,!1),m=Ce(S=>S().getAll().find(F=>F.queryHash===qe())?.state.data,!1),y=Ce(S=>{let F=S().getAll().find(H=>H.queryHash===qe());return F?It(F):"inactive"}),b=Ce(S=>{let F=S().getAll().find(H=>H.queryHash===qe());return F?F.state.status:"pending"}),x=Ce(S=>S().getAll().find(F=>F.queryHash===qe())?.getObserversCount()??0),w=M(()=>co(y())),$=()=>{f()?.fetch()?.catch(()=>{})},O=S=>{let F=S?.initializer(f())??new Error("Unknown error from devtools"),H=f().options;f().setState({status:"error",error:F,fetchMeta:pe(Y({},f().state.fetchMeta),{__previousQueryOptions:H})})},D=()=>{let S=f(),F=S.state,H=S.state.fetchMeta?S.state.fetchMeta.__previousQueryOptions:null;S.cancel({silent:!0}),S.setState(pe(Y({},F),{fetchStatus:"idle",fetchMeta:null})),H&&S.fetch(H)};B(()=>{y()!=="fetching"&&a(!1)});let L=()=>w()==="gray"?t`
        background-color: ${o(r[w()][200],r[w()][700])};
        color: ${o(r[w()][700],r[w()][300])};
        border-color: ${o(r[w()][400],r[w()][600])};
      `:t`
      background-color: ${o(r[w()][100],r[w()][900])};
      color: ${o(r[w()][700],r[w()][300])};
      border-color: ${o(r[w()][400],r[w()][600])};
    `;return v(R,{get when(){return M(()=>!!f())()&&p()},get children(){var S=jd(),F=S.firstChild,H=F.nextSibling,G=H.firstChild,ne=G.firstChild,fe=ne.firstChild,J=ne.nextSibling,ge=G.nextSibling,ie=ge.firstChild,de=ie.nextSibling,le=ge.nextSibling,re=le.firstChild,Se=re.nextSibling,ve=H.nextSibling,Ae=ve.nextSibling,T=Ae.firstChild,he=T.firstChild,X=T.nextSibling,pt=X.firstChild,V=X.nextSibling,He=V.firstChild,ke=V.nextSibling,_t=ke.firstChild,ze=ke.nextSibling,mt=ze.firstChild,Et=mt.nextSibling,ot=Ae.nextSibling;ot.firstChild;var Ze=ot.nextSibling,it=Ze.nextSibling;return k(fe,()=>tn(f().queryKey,!0)),k(J,y),k(de,x),k(Se,()=>new Date(p().dataUpdatedAt).toLocaleTimeString()),T.$$click=$,X.$$click=()=>s.invalidateQueries(f()),V.$$click=()=>s.resetQueries(f()),ke.$$click=()=>{s.removeQueries(f()),Vn(null)},ze.$$click=()=>{if(f()?.state.data===void 0)a(!0),D();else{let P=f();if(!P)return;let oe=P.options;P.fetch(pe(Y({},oe),{queryFn:()=>new Promise(()=>{}),gcTime:-1})),P.setState({data:void 0,status:"pending",fetchMeta:pe(Y({},P.state.fetchMeta),{__previousQueryOptions:oe})})}},k(ze,()=>b()==="pending"?"Restore":"Trigger",Et),k(Ae,v(R,{get when(){return g().length===0||b()==="error"},get children(){var P=Ud(),oe=P.firstChild,Ie=oe.nextSibling;return P.$$click=()=>{f().state.error?s.resetQueries(f()):O()},k(P,()=>b()==="error"?"Restore":"Trigger",Ie),N(se=>{var te=q(t`
                  color: ${o(r.red[500],r.red[400])};
                `,"tsqd-query-details-actions-btn","tsqd-query-details-action-error"),ae=b()==="pending",ye=t`
                  background-color: ${o(r.red[500],r.red[400])};
                `;return te!==se.e&&I(P,se.e=te),ae!==se.t&&(P.disabled=se.t=ae),ye!==se.a&&I(oe,se.a=ye),se},{e:void 0,t:void 0,a:void 0}),P}}),null),k(Ae,v(R,{get when(){return!(g().length===0||b()==="error")},get children(){var P=Gd(),oe=P.firstChild,Ie=oe.nextSibling,se=Ie.nextSibling;return se.firstChild,se.addEventListener("change",te=>{let ae=g().find(ye=>ye.name===te.currentTarget.value);O(ae)}),k(se,v(Xr,{get each(){return g()},children:te=>(()=>{var ae=Wd();return k(ae,()=>te.name),N(()=>ae.value=te.name),ae})()}),null),k(P,v(an,{}),null),N(te=>{var ae=q(n().actionsSelect,"tsqd-query-details-actions-btn","tsqd-query-details-action-error-multiple"),ye=t`
                  background-color: ${C.colors.red[400]};
                `,ee=b()==="pending";return ae!==te.e&&I(P,te.e=ae),ye!==te.t&&I(oe,te.t=ye),ee!==te.a&&(se.disabled=te.a=ee),te},{e:void 0,t:void 0,a:void 0}),P}}),null),k(ot,()=>i()==="view"?"Explorer":"Editor",null),k(S,v(R,{get when(){return i()==="view"},get children(){var P=Vd();return k(P,v(xt,{label:"Data",defaultExpanded:["Data"],get value(){return m()},editable:!0,onEdit:()=>c("edit"),get activeQuery(){return f()}})),N(oe=>(oe=C.size[2])!=null?P.style.setProperty("padding",oe):P.style.removeProperty("padding")),P}}),Ze),k(S,v(R,{get when(){return i()==="edit"},get children(){var P=Hd(),oe=P.firstChild,Ie=oe.nextSibling,se=Ie.firstChild,te=se.nextSibling,ae=te.firstChild,ye=ae.nextSibling;return P.addEventListener("submit",ee=>{ee.preventDefault();let lt=new FormData(ee.currentTarget).get("data");try{let je=JSON.parse(lt);f().setState(pe(Y({},f().state),{data:je})),c("view")}catch{d(!0)}}),oe.addEventListener("focus",()=>d(!1)),k(se,()=>u()?"Invalid Value":""),ae.$$click=()=>c("view"),N(ee=>{var st=q(n().devtoolsEditForm,"tsqd-query-details-data-editor"),lt=n().devtoolsEditTextarea,je=u(),Mt=n().devtoolsEditFormActions,at=n().devtoolsEditFormError,Tt=n().devtoolsEditFormActionContainer,ct=q(n().devtoolsEditFormAction,t`
                      color: ${o(r.gray[600],r.gray[300])};
                    `),yt=q(n().devtoolsEditFormAction,t`
                      color: ${o(r.blue[600],r.blue[400])};
                    `);return st!==ee.e&&I(P,ee.e=st),lt!==ee.t&&I(oe,ee.t=lt),je!==ee.a&&A(oe,"data-error",ee.a=je),Mt!==ee.o&&I(Ie,ee.o=Mt),at!==ee.i&&I(se,ee.i=at),Tt!==ee.n&&I(te,ee.n=Tt),ct!==ee.s&&I(ae,ee.s=ct),yt!==ee.h&&I(ye,ee.h=yt),ee},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0}),N(()=>oe.value=JSON.stringify(m(),null,2)),P}}),Ze),k(it,v(xt,{label:"Query",defaultExpanded:["Query","queryKey"],get value(){return h()}})),N(P=>{var oe=q(n().detailsContainer,"tsqd-query-details-container"),Ie=q(n().detailsHeader,"tsqd-query-details-header"),se=q(n().detailsBody,"tsqd-query-details-summary-container"),te=q(n().queryDetailsStatus,L()),ae=q(n().detailsHeader,"tsqd-query-details-header"),ye=q(n().actionsBody,"tsqd-query-details-actions-container"),ee=q(t`
                color: ${o(r.blue[600],r.blue[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-refetch"),st=y()==="fetching",lt=t`
                background-color: ${o(r.blue[600],r.blue[400])};
              `,je=q(t`
                color: ${o(r.yellow[600],r.yellow[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-invalidate"),Mt=b()==="pending",at=t`
                background-color: ${o(r.yellow[600],r.yellow[400])};
              `,Tt=q(t`
                color: ${o(r.gray[600],r.gray[300])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-reset"),ct=b()==="pending",yt=t`
                background-color: ${o(r.gray[600],r.gray[400])};
              `,bn=q(t`
                color: ${o(r.pink[500],r.pink[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-remove"),Yt=y()==="fetching",xn=t`
                background-color: ${o(r.pink[500],r.pink[400])};
              `,zt=q(t`
                color: ${o(r.cyan[500],r.cyan[400])};
              `,"tsqd-query-details-actions-btn","tsqd-query-details-action-loading"),wn=l(),Xt=t`
                background-color: ${o(r.cyan[500],r.cyan[400])};
              `,Zt=q(n().detailsHeader,"tsqd-query-details-header"),Jt=q(n().detailsHeader,"tsqd-query-details-header"),Rt=C.size[2];return oe!==P.e&&I(S,P.e=oe),Ie!==P.t&&I(F,P.t=Ie),se!==P.a&&I(H,P.a=se),te!==P.o&&I(J,P.o=te),ae!==P.i&&I(ve,P.i=ae),ye!==P.n&&I(Ae,P.n=ye),ee!==P.s&&I(T,P.s=ee),st!==P.h&&(T.disabled=P.h=st),lt!==P.r&&I(he,P.r=lt),je!==P.d&&I(X,P.d=je),Mt!==P.l&&(X.disabled=P.l=Mt),at!==P.u&&I(pt,P.u=at),Tt!==P.c&&I(V,P.c=Tt),ct!==P.w&&(V.disabled=P.w=ct),yt!==P.m&&I(He,P.m=yt),bn!==P.f&&I(ke,P.f=bn),Yt!==P.y&&(ke.disabled=P.y=Yt),xn!==P.g&&I(_t,P.g=xn),zt!==P.p&&I(ze,P.p=zt),wn!==P.b&&(ze.disabled=P.b=wn),Xt!==P.T&&I(mt,P.T=Xt),Zt!==P.A&&I(ot,P.A=Zt),Jt!==P.O&&I(Ze,P.O=Jt),Rt!==P.I&&((P.I=Rt)!=null?it.style.setProperty("padding",Rt):it.style.removeProperty("padding")),P},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0,c:void 0,w:void 0,m:void 0,f:void 0,y:void 0,g:void 0,p:void 0,b:void 0,T:void 0,A:void 0,O:void 0,I:void 0}),S}})},rf=()=>{let e=$e(),t=K().shadowDOMTarget?W.bind({target:K().shadowDOMTarget}):W,n=M(()=>e()==="dark"?Ve(t):Ge(t)),{colors:r}=C,o=(u,d)=>e()==="dark"?d:u,s=We(u=>{let g=u().getAll().find(f=>f.mutationId===wt());return g?g.state.isPaused:!1}),l=We(u=>{let g=u().getAll().find(f=>f.mutationId===wt());return g?g.state.status:"idle"}),a=M(()=>Dt({isPaused:s(),status:l()})),i=We(u=>u().getAll().find(d=>d.mutationId===wt()),!1),c=()=>a()==="gray"?t`
        background-color: ${o(r[a()][200],r[a()][700])};
        color: ${o(r[a()][700],r[a()][300])};
        border-color: ${o(r[a()][400],r[a()][600])};
      `:t`
      background-color: ${o(r[a()][100],r[a()][900])};
      color: ${o(r[a()][700],r[a()][300])};
      border-color: ${o(r[a()][400],r[a()][600])};
    `;return v(R,{get when(){return i()},get children(){var u=Qd(),d=u.firstChild,g=d.nextSibling,f=g.firstChild,h=f.firstChild,p=h.firstChild,m=h.nextSibling,y=f.nextSibling,b=y.firstChild,x=b.nextSibling,w=g.nextSibling,$=w.nextSibling,O=$.nextSibling,D=O.nextSibling,L=D.nextSibling,S=L.nextSibling,F=S.nextSibling,H=F.nextSibling;return k(p,v(R,{get when(){return i().options.mutationKey},fallback:"No mutationKey found",get children(){return tn(i().options.mutationKey,!0)}})),k(m,v(R,{get when(){return a()==="purple"},children:"pending"}),null),k(m,v(R,{get when(){return a()!=="purple"},get children(){return l()}}),null),k(x,()=>new Date(i().state.submittedAt).toLocaleTimeString()),k($,v(xt,{label:"Variables",defaultExpanded:["Variables"],get value(){return i().state.variables}})),k(D,v(xt,{label:"Context",defaultExpanded:["Context"],get value(){return i().state.context}})),k(S,v(xt,{label:"Data",defaultExpanded:["Data"],get value(){return i().state.data}})),k(H,v(xt,{label:"Mutation",defaultExpanded:["Mutation"],get value(){return i()}})),N(G=>{var ne=q(n().detailsContainer,"tsqd-query-details-container"),fe=q(n().detailsHeader,"tsqd-query-details-header"),J=q(n().detailsBody,"tsqd-query-details-summary-container"),ge=q(n().queryDetailsStatus,c()),ie=q(n().detailsHeader,"tsqd-query-details-header"),de=C.size[2],le=q(n().detailsHeader,"tsqd-query-details-header"),re=C.size[2],Se=q(n().detailsHeader,"tsqd-query-details-header"),ve=C.size[2],Ae=q(n().detailsHeader,"tsqd-query-details-header"),T=C.size[2];return ne!==G.e&&I(u,G.e=ne),fe!==G.t&&I(d,G.t=fe),J!==G.a&&I(g,G.a=J),ge!==G.o&&I(m,G.o=ge),ie!==G.i&&I(w,G.i=ie),de!==G.n&&((G.n=de)!=null?$.style.setProperty("padding",de):$.style.removeProperty("padding")),le!==G.s&&I(O,G.s=le),re!==G.h&&((G.h=re)!=null?D.style.setProperty("padding",re):D.style.removeProperty("padding")),Se!==G.r&&I(L,G.r=Se),ve!==G.d&&((G.d=ve)!=null?S.style.setProperty("padding",ve):S.style.removeProperty("padding")),Ae!==G.l&&I(F,G.l=Ae),T!==G.u&&((G.u=T)!=null?H.style.setProperty("padding",T):H.style.removeProperty("padding")),G},{e:void 0,t:void 0,a:void 0,o:void 0,i:void 0,n:void 0,s:void 0,h:void 0,r:void 0,d:void 0,l:void 0,u:void 0}),u}})},qn=new Map,of=()=>{let e=M(()=>K().client.getQueryCache()),t=e().subscribe(n=>{Wr(()=>{for(let[r,o]of qn.entries())o.shouldUpdate(n)&&o.setter(r(e))})});return U(()=>{qn.clear(),t()}),t},Ce=(e,t=!0,n=()=>!0)=>{let r=M(()=>K().client.getQueryCache()),[o,s]=z(e(r),t?void 0:{equals:!1});return B(()=>{s(e(r))}),qn.set(e,{setter:s,shouldUpdate:n}),U(()=>{qn.delete(e)}),o},Fn=new Map,sf=()=>{let e=M(()=>K().client.getMutationCache()),t=e().subscribe(()=>{for(let[n,r]of Fn.entries())queueMicrotask(()=>{r(n(e))})});return U(()=>{Fn.clear(),t()}),t},We=(e,t=!0)=>{let n=M(()=>K().client.getMutationCache()),[r,o]=z(e(n),t?void 0:{equals:!1});return B(()=>{o(e(n))}),Fn.set(e,o),U(()=>{Fn.delete(e)}),r},zs=(e,t)=>{let{colors:n,font:r,size:o,alpha:s,shadow:l,border:a}=C,i=(c,u)=>e==="light"?c:u;return{devtoolsBtn:t`
      z-index: 100000;
      position: fixed;
      padding: 4px;
      text-align: left;

      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 9999px;
      box-shadow: ${l.md()};
      overflow: hidden;

      & div {
        position: absolute;
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
        border-radius: 9999px;

        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
        filter: blur(6px) saturate(1.2) contrast(1.1);
      }

      &:focus-within {
        outline-offset: 2px;
        outline: 3px solid ${n.green[600]};
      }

      & button {
        position: relative;
        z-index: 1;
        padding: 0;
        border-radius: 9999px;
        background-color: transparent;
        border: none;
        height: 40px;
        display: flex;
        width: 40px;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        & svg {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    `,panel:t`
      position: fixed;
      z-index: 9999;
      display: flex;
      gap: ${C.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${i(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${i(n.gray[400],n.darkGray[300])};
      }
    `,parentPanel:t`
      z-index: 9999;
      display: flex;
      height: 100%;
      gap: ${C.size[.5]};
      & * {
        box-sizing: border-box;
        text-transform: none;
      }

      & *::-webkit-scrollbar {
        width: 7px;
      }

      & *::-webkit-scrollbar-track {
        background: transparent;
      }

      & *::-webkit-scrollbar-thumb {
        background: ${i(n.gray[300],n.darkGray[200])};
      }

      & *::-webkit-scrollbar-thumb:hover {
        background: ${i(n.gray[400],n.darkGray[300])};
      }
    `,"devtoolsBtn-position-bottom-right":t`
      bottom: 12px;
      right: 12px;
    `,"devtoolsBtn-position-bottom-left":t`
      bottom: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-left":t`
      top: 12px;
      left: 12px;
    `,"devtoolsBtn-position-top-right":t`
      top: 12px;
      right: 12px;
    `,"devtoolsBtn-position-relative":t`
      position: relative;
    `,"panel-position-top":t`
      top: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-bottom":t`
      bottom: 0;
      right: 0;
      left: 0;
      max-height: 90%;
      min-height: ${o[14]};
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
    `,"panel-position-right":t`
      bottom: 0;
      right: 0;
      top: 0;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,"panel-position-left":t`
      bottom: 0;
      left: 0;
      top: 0;
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      max-width: 90%;
    `,closeBtn:t`
      position: absolute;
      cursor: pointer;
      z-index: 5;
      display: flex;
      align-items: center;
      justify-content: center;
      outline: none;
      background-color: ${i(n.gray[50],n.darkGray[700])};
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline: 2px solid ${n.blue[600]};
      }
      & svg {
        color: ${i(n.gray[600],n.gray[400])};
        width: ${o[2]};
        height: ${o[2]};
      }
    `,"closeBtn-position-top":t`
      bottom: 0;
      right: ${o[2]};
      transform: translate(0, 100%);
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: none;
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px 0px ${a.radius.sm} ${a.radius.sm};
      padding: ${o[.5]} ${o[1.5]} ${o[1]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        bottom: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }

      & svg {
        transform: rotate(180deg);
      }
    `,"closeBtn-position-bottom":t`
      top: 0;
      right: ${o[2]};
      transform: translate(0, -100%);
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: none;
      border-radius: ${a.radius.sm} ${a.radius.sm} 0px 0px;
      padding: ${o[1]} ${o[1.5]} ${o[.5]} ${o[1.5]};

      &::after {
        content: ' ';
        position: absolute;
        top: 100%;
        left: -${o[2.5]};
        height: ${o[1.5]};
        width: calc(100% + ${o[5]});
      }
    `,"closeBtn-position-right":t`
      bottom: ${o[2]};
      left: 0;
      transform: translate(-100%, 0);
      border-right: none;
      border-left: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: ${a.radius.sm} 0px 0px ${a.radius.sm};
      padding: ${o[1.5]} ${o[.5]} ${o[1.5]} ${o[1]};

      &::after {
        content: ' ';
        position: absolute;
        left: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(-90deg);
      }
    `,"closeBtn-position-left":t`
      bottom: ${o[2]};
      right: 0;
      transform: translate(100%, 0);
      border-left: none;
      border-right: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-top: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-bottom: ${i(n.gray[400],n.darkGray[300])} 1px solid;
      border-radius: 0px ${a.radius.sm} ${a.radius.sm} 0px;
      padding: ${o[1.5]} ${o[1]} ${o[1.5]} ${o[.5]};

      &::after {
        content: ' ';
        position: absolute;
        right: 100%;
        height: calc(100% + ${o[5]});
        width: ${o[1.5]};
      }

      & svg {
        transform: rotate(90deg);
      }
    `,queriesContainer:t`
      flex: 1 1 700px;
      background-color: ${i(n.gray[50],n.darkGray[700])};
      display: flex;
      flex-direction: column;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
    `,dragHandle:t`
      position: absolute;
      transition: background-color 0.125s ease;
      &:hover {
        background-color: ${n.purple[400]}${i("",s[90])};
      }
      z-index: 4;
    `,"dragHandle-position-top":t`
      bottom: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-bottom":t`
      top: 0;
      width: 100%;
      height: 3px;
      cursor: ns-resize;
    `,"dragHandle-position-right":t`
      left: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,"dragHandle-position-left":t`
      right: 0;
      width: 3px;
      height: 100%;
      cursor: ew-resize;
    `,row:t`
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: ${C.size[2]} ${C.size[2.5]};
      gap: ${C.size[2.5]};
      border-bottom: ${i(n.gray[300],n.darkGray[500])} 1px solid;
      align-items: center;
      & > button {
        padding: 0;
        background: transparent;
        border: none;
        display: flex;
        gap: ${o[.5]};
        flex-direction: column;
      }
    `,logoAndToggleContainer:t`
      display: flex;
      gap: ${C.size[3]};
      align-items: center;
    `,logo:t`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      gap: ${C.size[.5]};
      padding: 0px;
      &:hover {
        opacity: 0.7;
      }
      &:focus-visible {
        outline-offset: 4px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,tanstackLogo:t`
      font-size: ${r.size.md};
      font-weight: ${r.weight.bold};
      line-height: ${r.lineHeight.xs};
      white-space: nowrap;
      color: ${i(n.gray[600],n.gray[300])};
    `,queryFlavorLogo:t`
      font-weight: ${r.weight.semibold};
      font-size: ${r.size.xs};
      background: linear-gradient(
        to right,
        ${i("#ea4037, #ff9b11","#dd524b, #e9a03b")}
      );
      background-clip: text;
      -webkit-background-clip: text;
      line-height: 1;
      -webkit-text-fill-color: transparent;
      white-space: nowrap;
    `,queryStatusContainer:t`
      display: flex;
      gap: ${C.size[2]};
      height: min-content;
    `,queryStatusTag:t`
      display: flex;
      gap: ${C.size[1.5]};
      box-sizing: border-box;
      height: ${C.size[6.5]};
      background: ${i(n.gray[50],n.darkGray[500])};
      color: ${i(n.gray[700],n.gray[300])};
      border-radius: ${C.border.radius.sm};
      font-size: ${r.size.sm};
      padding: ${C.size[1]};
      padding-left: ${C.size[1.5]};
      align-items: center;
      font-weight: ${r.weight.medium};
      border: ${i("1px solid "+n.gray[300],"1px solid transparent")};
      user-select: none;
      position: relative;
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,queryStatusTagLabel:t`
      font-size: ${r.size.xs};
    `,queryStatusCount:t`
      font-size: ${r.size.xs};
      padding: 0 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${i(n.gray[500],n.gray[400])};
      background-color: ${i(n.gray[200],n.darkGray[300])};
      border-radius: 2px;
      font-variant-numeric: tabular-nums;
      height: ${C.size[4.5]};
    `,statusTooltip:t`
      position: absolute;
      z-index: 1;
      background-color: ${i(n.gray[50],n.darkGray[500])};
      top: 100%;
      left: 50%;
      transform: translate(-50%, calc(${C.size[2]}));
      padding: ${C.size[.5]} ${C.size[2]};
      border-radius: ${C.border.radius.sm};
      font-size: ${r.size.xs};
      border: 1px solid ${i(n.gray[400],n.gray[600])};
      color: ${i(n.gray[600],n.gray[300])};

      &::before {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, -100%);
        position: absolute;
        border-color: transparent transparent
          ${i(n.gray[400],n.gray[600])} transparent;
        border-style: solid;
        border-width: 7px;
        /* transform: rotate(180deg); */
      }

      &::after {
        top: 0px;
        content: ' ';
        display: block;
        left: 50%;
        transform: translate(-50%, calc(-100% + 2px));
        position: absolute;
        border-color: transparent transparent
          ${i(n.gray[100],n.darkGray[500])} transparent;
        border-style: solid;
        border-width: 7px;
      }
    `,filtersContainer:t`
      display: flex;
      gap: ${C.size[2]};
      & > button {
        cursor: pointer;
        padding: ${C.size[.5]} ${C.size[1.5]} ${C.size[.5]}
          ${C.size[2]};
        border-radius: ${C.border.radius.sm};
        background-color: ${i(n.gray[100],n.darkGray[400])};
        border: 1px solid ${i(n.gray[300],n.darkGray[200])};
        color: ${i(n.gray[700],n.gray[300])};
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        line-height: ${r.lineHeight.sm};
        gap: ${C.size[1.5]};
        max-width: 160px;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${a.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        & svg {
          width: ${C.size[3]};
          height: ${C.size[3]};
          color: ${i(n.gray[500],n.gray[400])};
        }
      }
    `,filterInput:t`
      padding: ${o[.5]} ${o[2]};
      border-radius: ${C.border.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[400])};
      display: flex;
      box-sizing: content-box;
      align-items: center;
      gap: ${C.size[1.5]};
      max-width: 160px;
      min-width: 100px;
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      height: min-content;
      color: ${i(n.gray[600],n.gray[400])};
      & > svg {
        width: ${o[3]};
        height: ${o[3]};
      }
      & input {
        font-size: ${r.size.xs};
        width: 100%;
        background-color: ${i(n.gray[100],n.darkGray[400])};
        border: none;
        padding: 0;
        line-height: ${r.lineHeight.sm};
        color: ${i(n.gray[700],n.gray[300])};
        &::placeholder {
          color: ${i(n.gray[700],n.gray[300])};
        }
        &:focus {
          outline: none;
        }
      }

      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,filterSelect:t`
      padding: ${C.size[.5]} ${C.size[2]};
      border-radius: ${C.border.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[400])};
      display: flex;
      align-items: center;
      gap: ${C.size[1.5]};
      box-sizing: content-box;
      max-width: 160px;
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      height: min-content;
      & > svg {
        color: ${i(n.gray[600],n.gray[400])};
        width: ${C.size[2]};
        height: ${C.size[2]};
      }
      & > select {
        appearance: none;
        color: ${i(n.gray[700],n.gray[300])};
        min-width: 100px;
        line-height: ${r.lineHeight.sm};
        font-size: ${r.size.xs};
        background-color: ${i(n.gray[100],n.darkGray[400])};
        border: none;
        &:focus {
          outline: none;
        }
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsContainer:t`
      display: flex;
      gap: ${C.size[2]};
    `,actionsBtn:t`
      border-radius: ${C.border.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[400])};
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      width: ${C.size[6.5]};
      height: ${C.size[6.5]};
      justify-content: center;
      display: flex;
      align-items: center;
      gap: ${C.size[1.5]};
      max-width: 160px;
      cursor: pointer;
      padding: 0;
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      & svg {
        color: ${i(n.gray[700],n.gray[300])};
        width: ${C.size[3]};
        height: ${C.size[3]};
      }
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
    `,actionsBtnOffline:t`
      & svg {
        stroke: ${i(n.yellow[700],n.yellow[500])};
        fill: ${i(n.yellow[700],n.yellow[500])};
      }
    `,overflowQueryContainer:t`
      flex: 1;
      overflow-y: auto;
      & > div {
        display: flex;
        flex-direction: column;
      }
    `,queryRow:t`
      display: flex;
      align-items: center;
      padding: 0;
      border: none;
      cursor: pointer;
      color: ${i(n.gray[700],n.gray[300])};
      background-color: ${i(n.gray[50],n.darkGray[700])};
      line-height: 1;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        outline-offset: -2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover .tsqd-query-hash {
        background-color: ${i(n.gray[200],n.darkGray[600])};
      }

      & .tsqd-query-observer-count {
        padding: 0 ${C.size[1]};
        user-select: none;
        min-width: ${C.size[6.5]};
        align-self: stretch;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: ${r.size.xs};
        font-weight: ${r.weight.medium};
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom: 1px solid ${i(n.gray[300],n.darkGray[700])};
      }
      & .tsqd-query-hash {
        user-select: text;
        font-size: ${r.size.xs};
        display: flex;
        align-items: center;
        min-height: ${C.size[6]};
        flex: 1;
        padding: ${C.size[1]} ${C.size[2]};
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        border-bottom: 1px solid ${i(n.gray[300],n.darkGray[400])};
        text-align: left;
        text-overflow: clip;
        word-break: break-word;
      }

      & .tsqd-query-disabled-indicator {
        align-self: stretch;
        display: flex;
        align-items: center;
        padding: 0 ${C.size[2]};
        color: ${i(n.gray[800],n.gray[300])};
        background-color: ${i(n.gray[300],n.darkGray[600])};
        border-bottom: 1px solid ${i(n.gray[300],n.darkGray[400])};
        font-size: ${r.size.xs};
      }
    `,selectedQueryRow:t`
      background-color: ${i(n.gray[200],n.darkGray[500])};
    `,detailsContainer:t`
      flex: 1 1 700px;
      background-color: ${i(n.gray[50],n.darkGray[700])};
      color: ${i(n.gray[700],n.gray[300])};
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      display: flex;
      flex-direction: column;
      overflow-y: auto;
      display: flex;
      text-align: left;
    `,detailsHeader:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      position: sticky;
      top: 0;
      z-index: 2;
      background-color: ${i(n.gray[200],n.darkGray[600])};
      padding: ${C.size[1.5]} ${C.size[2]};
      font-weight: ${r.weight.medium};
      font-size: ${r.size.xs};
      line-height: ${r.lineHeight.xs};
      text-align: left;
    `,detailsBody:t`
      margin: ${C.size[1.5]} 0px ${C.size[2]} 0px;
      & > div {
        display: flex;
        align-items: stretch;
        padding: 0 ${C.size[2]};
        line-height: ${r.lineHeight.sm};
        justify-content: space-between;
        & > span {
          font-size: ${r.size.xs};
        }
        & > span:nth-child(2) {
          font-variant-numeric: tabular-nums;
        }
      }

      & > div:first-child {
        margin-bottom: ${C.size[1.5]};
      }

      & code {
        font-family:
          ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
          'Liberation Mono', 'Courier New', monospace;
        margin: 0;
        font-size: ${r.size.xs};
        line-height: ${r.lineHeight.xs};
      }

      & pre {
        margin: 0;
        display: flex;
        align-items: center;
      }
    `,queryDetailsStatus:t`
      border: 1px solid ${n.darkGray[200]};
      border-radius: ${C.border.radius.sm};
      font-weight: ${r.weight.medium};
      padding: ${C.size[1]} ${C.size[2.5]};
    `,actionsBody:t`
      flex-wrap: wrap;
      margin: ${C.size[2]} 0px ${C.size[2]} 0px;
      display: flex;
      gap: ${C.size[2]};
      padding: 0px ${C.size[2]};
      & > button {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
        font-size: ${r.size.xs};
        padding: ${C.size[1]} ${C.size[2]};
        display: flex;
        border-radius: ${C.border.radius.sm};
        background-color: ${i(n.gray[100],n.darkGray[600])};
        border: 1px solid ${i(n.gray[300],n.darkGray[400])};
        align-items: center;
        gap: ${C.size[2]};
        font-weight: ${r.weight.medium};
        line-height: ${r.lineHeight.xs};
        cursor: pointer;
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${a.radius.xs};
          outline: 2px solid ${n.blue[800]};
        }
        &:hover {
          background-color: ${i(n.gray[200],n.darkGray[500])};
        }

        &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        & > span {
          width: ${o[1.5]};
          height: ${o[1.5]};
          border-radius: ${C.border.radius.full};
        }
      }
    `,actionsSelect:t`
      font-size: ${r.size.xs};
      padding: ${C.size[.5]} ${C.size[2]};
      display: flex;
      border-radius: ${C.border.radius.sm};
      overflow: hidden;
      background-color: ${i(n.gray[100],n.darkGray[600])};
      border: 1px solid ${i(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${C.size[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.sm};
      color: ${i(n.red[500],n.red[400])};
      cursor: pointer;
      position: relative;
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      & > span {
        width: ${o[1.5]};
        height: ${o[1.5]};
        border-radius: ${C.border.radius.full};
      }
      &:focus-within {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      & select {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        appearance: none;
        background-color: transparent;
        border: none;
        color: transparent;
        outline: none;
      }

      & svg path {
        stroke: ${C.colors.red[400]};
      }
      & svg {
        width: ${C.size[2]};
        height: ${C.size[2]};
      }
    `,settingsMenu:t`
      display: flex;
      & * {
        font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      }
      flex-direction: column;
      gap: ${o[.5]};
      border-radius: ${C.border.radius.sm};
      border: 1px solid ${i(n.gray[300],n.gray[700])};
      background-color: ${i(n.gray[50],n.darkGray[600])};
      font-size: ${r.size.xs};
      color: ${i(n.gray[700],n.gray[300])};
      z-index: 99999;
      min-width: 120px;
      padding: ${o[.5]};
    `,settingsSubTrigger:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-radius: ${C.border.radius.xs};
      padding: ${C.size[1]} ${C.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      color: ${i(n.gray[700],n.gray[300])};
      & svg {
        color: ${i(n.gray[600],n.gray[400])};
        transform: rotate(-90deg);
        width: ${C.size[2]};
        height: ${C.size[2]};
      }
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
      &.data-disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `,settingsMenuHeader:t`
      padding: ${C.size[1]} ${C.size[1]};
      font-weight: ${r.weight.medium};
      border-bottom: 1px solid ${i(n.gray[300],n.darkGray[400])};
      color: ${i(n.gray[500],n.gray[400])};
      font-size: ${r.size.xs};
    `,settingsSubButton:t`
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: ${i(n.gray[700],n.gray[300])};
      font-size: ${r.size.xs};
      border-radius: ${C.border.radius.xs};
      padding: ${C.size[1]} ${C.size[1]};
      cursor: pointer;
      background-color: transparent;
      border: none;
      & svg {
        color: ${i(n.gray[600],n.gray[400])};
      }
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }
      &:focus-visible {
        outline-offset: 2px;
        outline: 2px solid ${n.blue[800]};
      }
    `,themeSelectedButton:t`
      background-color: ${i(n.purple[100],n.purple[900])};
      color: ${i(n.purple[700],n.purple[300])};
      & svg {
        color: ${i(n.purple[700],n.purple[300])};
      }
      &:hover {
        background-color: ${i(n.purple[100],n.purple[900])};
      }
    `,viewToggle:t`
      border-radius: ${C.border.radius.sm};
      background-color: ${i(n.gray[200],n.darkGray[600])};
      border: 1px solid ${i(n.gray[300],n.darkGray[200])};
      display: flex;
      padding: 0;
      font-size: ${r.size.xs};
      color: ${i(n.gray[700],n.gray[300])};
      overflow: hidden;

      &:has(:focus-visible) {
        outline: 2px solid ${n.blue[800]};
      }

      & .tsqd-radio-toggle {
        opacity: 0.5;
        display: flex;
        & label {
          display: flex;
          align-items: center;
          cursor: pointer;
          line-height: ${r.lineHeight.md};
        }

        & label:hover {
          background-color: ${i(n.gray[100],n.darkGray[500])};
        }
      }

      & > [data-checked] {
        opacity: 1;
        background-color: ${i(n.gray[100],n.darkGray[400])};
        & label:hover {
          background-color: ${i(n.gray[100],n.darkGray[400])};
        }
      }

      & .tsqd-radio-toggle:first-child {
        & label {
          padding: 0 ${C.size[1.5]} 0 ${C.size[2]};
        }
        border-right: 1px solid ${i(n.gray[300],n.darkGray[200])};
      }

      & .tsqd-radio-toggle:nth-child(2) {
        & label {
          padding: 0 ${C.size[2]} 0 ${C.size[1.5]};
        }
      }
    `,devtoolsEditForm:t`
      padding: ${o[2]};
      & > [data-error='true'] {
        outline: 2px solid ${i(n.red[200],n.red[800])};
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
      }
    `,devtoolsEditTextarea:t`
      width: 100%;
      max-height: 500px;
      font-family: 'Fira Code', monospace;
      font-size: ${r.size.xs};
      border-radius: ${a.radius.sm};
      field-sizing: content;
      padding: ${o[2]};
      background-color: ${i(n.gray[100],n.darkGray[800])};
      color: ${i(n.gray[900],n.gray[100])};
      border: 1px solid ${i(n.gray[200],n.gray[700])};
      resize: none;
      &:focus {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${i(n.blue[200],n.blue[800])};
      }
    `,devtoolsEditFormActions:t`
      display: flex;
      justify-content: space-between;
      gap: ${o[2]};
      align-items: center;
      padding-top: ${o[1]};
      font-size: ${r.size.xs};
    `,devtoolsEditFormError:t`
      color: ${i(n.red[700],n.red[500])};
    `,devtoolsEditFormActionContainer:t`
      display: flex;
      gap: ${o[2]};
    `,devtoolsEditFormAction:t`
      font-family: ui-sans-serif, Inter, system-ui, sans-serif, sans-serif;
      font-size: ${r.size.xs};
      padding: ${o[1]} ${C.size[2]};
      display: flex;
      border-radius: ${a.radius.sm};
      background-color: ${i(n.gray[100],n.darkGray[600])};
      border: 1px solid ${i(n.gray[300],n.darkGray[400])};
      align-items: center;
      gap: ${o[2]};
      font-weight: ${r.weight.medium};
      line-height: ${r.lineHeight.xs};
      cursor: pointer;
      &:focus-visible {
        outline-offset: 2px;
        border-radius: ${a.radius.xs};
        outline: 2px solid ${n.blue[800]};
      }
      &:hover {
        background-color: ${i(n.gray[200],n.darkGray[500])};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    `}},Ge=e=>zs("light",e),Ve=e=>zs("dark",e);Cn(["click","mousedown","input"]);export{af as a,cf as b,nl as c,uf as d,rl as e,df as f,ff as g,_s as h};
