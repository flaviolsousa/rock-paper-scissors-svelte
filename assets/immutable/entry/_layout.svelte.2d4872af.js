import{S as R,i as U,s as O,k as f,C as H,a as B,q as Z,l as v,m as d,D as w,h as o,c as I,r as k,n as a,b as P,E as u,F,G as Q,H as T,y as W,z as X,A as Y,I as ee,J as ae,K as te,g as G,d as J,B as se}from"../chunks/index.d7250d22.js";import{p as re}from"../chunks/stores.a67fa165.js";import{e as K}from"../chunks/singletons.64ca3675.js";function le(h){let t,s,n,l,c,_,r,e,i,y,C,p,$,D,A,M,m,b;return{c(){t=f("header"),s=f("nav"),n=H("svg"),l=H("path"),c=B(),_=f("ul"),r=f("li"),e=f("a"),i=Z("Home"),C=B(),p=f("li"),$=f("a"),D=Z("About"),M=B(),m=H("svg"),b=H("path"),this.h()},l(g){t=v(g,"HEADER",{class:!0});var E=d(t);s=v(E,"NAV",{class:!0});var z=d(s);n=w(z,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var j=d(n);l=w(j,"path",{d:!0,class:!0}),d(l).forEach(o),j.forEach(o),c=I(z),_=v(z,"UL",{class:!0});var L=d(_);r=v(L,"LI",{"aria-current":!0,class:!0});var q=d(r);e=v(q,"A",{href:!0,class:!0});var x=d(e);i=k(x,"Home"),x.forEach(o),q.forEach(o),C=I(L),p=v(L,"LI",{"aria-current":!0,class:!0});var N=d(p);$=v(N,"A",{href:!0,class:!0});var S=d($);D=k(S,"About"),S.forEach(o),N.forEach(o),L.forEach(o),M=I(z),m=w(z,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var V=d(m);b=w(V,"path",{d:!0,class:!0}),d(b).forEach(o),V.forEach(o),z.forEach(o),E.forEach(o),this.h()},h(){a(l,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),a(l,"class","svelte-h7uydz"),a(n,"viewBox","0 0 2 3"),a(n,"aria-hidden","true"),a(n,"class","svelte-h7uydz"),a(e,"href",K+"/"),a(e,"class","svelte-h7uydz"),a(r,"aria-current",y=h[0].url.pathname==="/"?"page":void 0),a(r,"class","svelte-h7uydz"),a($,"href",K+"/about"),a($,"class","svelte-h7uydz"),a(p,"aria-current",A=h[0].url.pathname==="/about"?"page":void 0),a(p,"class","svelte-h7uydz"),a(_,"class","svelte-h7uydz"),a(b,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),a(b,"class","svelte-h7uydz"),a(m,"viewBox","0 0 2 3"),a(m,"aria-hidden","true"),a(m,"class","svelte-h7uydz"),a(s,"class","svelte-h7uydz"),a(t,"class","svelte-h7uydz")},m(g,E){P(g,t,E),u(t,s),u(s,n),u(n,l),u(s,c),u(s,_),u(_,r),u(r,e),u(e,i),u(_,C),u(_,p),u(p,$),u($,D),u(s,M),u(s,m),u(m,b)},p(g,[E]){E&1&&y!==(y=g[0].url.pathname==="/"?"page":void 0)&&a(r,"aria-current",y),E&1&&A!==(A=g[0].url.pathname==="/about"?"page":void 0)&&a(p,"aria-current",A)},i:F,o:F,d(g){g&&o(t)}}}function ne(h,t,s){let n;return Q(h,re,l=>s(0,n=l)),[n]}class ue extends R{constructor(t){super(),U(this,t,ne,le,O,{})}}function oe(h){let t,s,n,l,c;s=new ue({});const _=h[1].default,r=T(_,h,h[0],null);return{c(){t=f("div"),W(s.$$.fragment),n=B(),l=f("main"),r&&r.c(),this.h()},l(e){t=v(e,"DIV",{class:!0});var i=d(t);X(s.$$.fragment,i),n=I(i),l=v(i,"MAIN",{class:!0});var y=d(l);r&&r.l(y),y.forEach(o),i.forEach(o),this.h()},h(){a(l,"class","svelte-195cvbj"),a(t,"class","app svelte-195cvbj")},m(e,i){P(e,t,i),Y(s,t,null),u(t,n),u(t,l),r&&r.m(l,null),c=!0},p(e,[i]){r&&r.p&&(!c||i&1)&&ee(r,_,e,e[0],c?te(_,e[0],i,null):ae(e[0]),null)},i(e){c||(G(s.$$.fragment,e),G(r,e),c=!0)},o(e){J(s.$$.fragment,e),J(r,e),c=!1},d(e){e&&o(t),se(s),r&&r.d(e)}}}function ce(h,t,s){let{$$slots:n={},$$scope:l}=t;return h.$$set=c=>{"$$scope"in c&&s(0,l=c.$$scope)},[l,n]}class _e extends R{constructor(t){super(),U(this,t,ce,oe,O,{})}}export{_e as default};