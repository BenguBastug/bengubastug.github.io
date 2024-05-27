import{s as $e,a as B,e as p,t as K,g as E,c as b,b as w,q as pe,d as O,f as h,p as F,m as f,i as D,h as c,j as Q,k as ke,o as be}from"../chunks/scheduler.Bvx9qzmO.js";import{S as we,i as Be,c as te,a as le,m as ae,t as se,b as ie,d as ne}from"../chunks/index.Bym9PO-2.js";import{H as Ee,e as J}from"../chunks/head.BEkdZND5.js";import{p as Ie}from"../chunks/stores.B28-vG6l.js";import{c as x,p as re,f as oe}from"../chunks/functions.Ba1grDd4.js";import{S as De,E as Se}from"../chunks/ExternalLink.BTud0O_Y.js";function fe(n,e,i){const t=n.slice();return t[2]=e[i],t}function ue(n,e,i){const t=n.slice();return t[5]=e[i],t}function ce(n){let e,i=re(n[0].url)+"",t,l;return{c(){e=p("a"),t=K(i),this.h()},l(a){e=b(a,"A",{href:!0,target:!0,rel:!0,class:!0});var s=w(e);t=O(s,i),s.forEach(h),this.h()},h(){f(e,"href",l=n[0].url),f(e,"target","_blank"),f(e,"rel","noreferrer nofollow"),f(e,"class","text-blue-600")},m(a,s){D(a,e,s),c(e,t)},p(a,s){s&1&&i!==(i=re(a[0].url)+"")&&Q(t,i),s&1&&l!==(l=a[0].url)&&f(e,"href",l)},d(a){a&&h(e)}}}function he(n){let e,i="–";return{c(){e=p("span"),e.textContent=i,this.h()},l(t){e=b(t,"SPAN",{class:!0,"data-svelte-h":!0}),pe(e)!=="svelte-lvwafz"&&(e.textContent=i),this.h()},h(){f(e,"class","hidden text-sm text-black/50 lg:inline")},m(t,l){D(t,e,l)},d(t){t&&h(e)}}}function _e(n){let e,i=oe(n[0].date)+"",t;return{c(){e=p("span"),t=K(i),this.h()},l(l){e=b(l,"SPAN",{class:!0});var a=w(e);t=O(a,i),a.forEach(h),this.h()},h(){f(e,"class","text-sm text-black/50")},m(l,a){D(l,e,a),c(e,t)},p(l,a){a&1&&i!==(i=oe(l[0].date)+"")&&Q(t,i)},d(l){l&&h(e)}}}function me(n){let e,i,t=J(n[0].photos),l=[];for(let a=0;a<t.length;a+=1)l[a]=de(ue(n,t,a));return{c(){e=p("div");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=b(a,"DIV",{class:!0,style:!0});var s=w(e);for(let r=0;r<l.length;r+=1)l[r].l(s);s.forEach(h),this.h()},h(){f(e,"class","[column-gap:3rem]"),f(e,"style",i=n[0].columns?`columns:${n[0].columns}`:"")},m(a,s){D(a,e,s);for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(e,null)},p(a,s){if(s&1){t=J(a[0].photos);let r;for(r=0;r<t.length;r+=1){const _=ue(a,t,r);l[r]?l[r].p(_,s):(l[r]=de(_),l[r].c(),l[r].m(e,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=t.length}s&1&&i!==(i=a[0].columns?`columns:${a[0].columns}`:"")&&f(e,"style",i)},d(a){a&&h(e),be(l,a)}}}function de(n){let e,i,t,l,a;return{c(){e=p("div"),i=p("img"),a=B(),this.h()},l(s){e=b(s,"DIV",{class:!0});var r=w(e);i=b(r,"IMG",{src:!0,alt:!0,class:!0}),a=E(r),r.forEach(h),this.h()},h(){F(i.src,t=n[5])||f(i,"src",t),f(i,"alt",l=`${n[0].title} by Bengü Baştuğ - ${n[5]}`),f(i,"class","max-h-screen rounded-xl"),f(e,"class","flex items-center justify-center rounded mb-12")},m(s,r){D(s,e,r),c(e,i),c(e,a)},p(s,r){r&1&&!F(i.src,t=s[5])&&f(i,"src",t),r&1&&l!==(l=`${s[0].title} by Bengü Baştuğ - ${s[5]}`)&&f(i,"alt",l)},d(s){s&&h(e)}}}function ge(n){let e,i=J(n[0].tags),t=[];for(let l=0;l<i.length;l+=1)t[l]=ve(fe(n,i,l));return{c(){e=p("div");for(let l=0;l<t.length;l+=1)t[l].c();this.h()},l(l){e=b(l,"DIV",{class:!0});var a=w(e);for(let s=0;s<t.length;s+=1)t[s].l(a);a.forEach(h),this.h()},h(){f(e,"class","flex flex-wrap gap-2")},m(l,a){D(l,e,a);for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(e,null)},p(l,a){if(a&1){i=J(l[0].tags);let s;for(s=0;s<i.length;s+=1){const r=fe(l,i,s);t[s]?t[s].p(r,a):(t[s]=ve(r),t[s].c(),t[s].m(e,null))}for(;s<t.length;s+=1)t[s].d(1);t.length=i.length}},d(l){l&&h(e),be(t,l)}}}function ve(n){let e,i=n[2]+"",t,l;return{c(){e=p("span"),t=K(i),l=B(),this.h()},l(a){e=b(a,"SPAN",{class:!0});var s=w(e);t=O(s,i),l=E(s),s.forEach(h),this.h()},h(){f(e,"class","rounded-3xl border border-black/10 px-3 py-1 text-sm text-black/40")},m(a,s){D(a,e,s),c(e,t),c(e,l)},p(a,s){s&1&&i!==(i=a[2]+"")&&Q(t,i)},d(a){a&&h(e)}}}function Ve(n){let e,i,t,l,a='<a href="/">← Back</a>',s,r,_,j,q,L,R,S,V,P=n[0].title+"",N,T,W,k,G,z,X,M,y,Y,U,I;e=new Ee({props:{title:`${n[0].title} – Bengü Baştuğ`,description:"Bengü Baştuğ",url:n[1].url.toString()}});let m=n[0].url&&ce(n),$=n[0].url&&n[0].date&&he(),d=n[0].date&&_e(n);y=new De({props:{isInline:!0,source:n[0].content,renderers:{link:Se}}});let g=n[0].photos&&n[0].photos.length&&me(n),v=n[0].tags&&n[0].tags.length&&ge(n);return{c(){te(e.$$.fragment),i=B(),t=p("div"),l=p("div"),l.innerHTML=a,s=B(),r=p("div"),_=p("img"),R=B(),S=p("div"),V=p("h1"),N=K(P),W=B(),k=p("div"),m&&m.c(),G=B(),$&&$.c(),z=B(),d&&d.c(),X=B(),M=p("div"),te(y.$$.fragment),Y=B(),g&&g.c(),U=B(),v&&v.c(),this.h()},l(o){le(e.$$.fragment,o),i=E(o),t=b(o,"DIV",{class:!0});var u=w(t);l=b(u,"DIV",{"data-svelte-h":!0}),pe(l)!=="svelte-n0ja19"&&(l.innerHTML=a),s=E(u),r=b(u,"DIV",{class:!0});var C=w(r);_=b(C,"IMG",{src:!0,alt:!0,width:!0,height:!0,class:!0,style:!0}),R=E(C),S=b(C,"DIV",{class:!0});var H=w(S);V=b(H,"H1",{class:!0,style:!0});var Z=w(V);N=O(Z,P),Z.forEach(h),W=E(H),k=b(H,"DIV",{class:!0});var A=w(k);m&&m.l(A),G=E(A),$&&$.l(A),z=E(A),d&&d.l(A),A.forEach(h),H.forEach(h),C.forEach(h),X=E(u),M=b(u,"DIV",{class:!0});var ee=w(M);le(y.$$.fragment,ee),ee.forEach(h),Y=E(u),g&&g.l(u),U=E(u),v&&v.l(u),u.forEach(h),this.h()},h(){F(_.src,j=n[0].thumb)||f(_,"src",j),f(_,"alt",q=`${n[0].title} by Bengü Baştuğ`),f(_,"width","150"),f(_,"height","150"),f(_,"class","rounded-xl"),f(_,"style",L=`view-transition-name: img-${x(n[0].title)}`),f(V,"class","text-2xl font-bold md:text-4xl lg:text-6xl"),f(V,"style",T=`view-transition-name: title-${x(n[0].title)}`),f(k,"class","flex flex-col items-center gap-4 lg:flex-row"),f(S,"class","flex flex-col gap-4 text-center lg:text-left"),f(r,"class","flex flex-col items-center gap-10 lg:flex-row"),f(M,"class","text-xl leading-snug md:text-2xl lg:text-3xl lg:font-extralight lg:leading-tight [&_a]:border-b [&_a]:border-b-black"),f(t,"class","flex flex-col gap-12 lg:gap-20")},m(o,u){ae(e,o,u),D(o,i,u),D(o,t,u),c(t,l),c(t,s),c(t,r),c(r,_),c(r,R),c(r,S),c(S,V),c(V,N),c(S,W),c(S,k),m&&m.m(k,null),c(k,G),$&&$.m(k,null),c(k,z),d&&d.m(k,null),c(t,X),c(t,M),ae(y,M,null),c(t,Y),g&&g.m(t,null),c(t,U),v&&v.m(t,null),I=!0},p(o,[u]){const C={};u&1&&(C.title=`${o[0].title} – Bengü Baştuğ`),u&2&&(C.url=o[1].url.toString()),e.$set(C),(!I||u&1&&!F(_.src,j=o[0].thumb))&&f(_,"src",j),(!I||u&1&&q!==(q=`${o[0].title} by Bengü Baştuğ`))&&f(_,"alt",q),(!I||u&1&&L!==(L=`view-transition-name: img-${x(o[0].title)}`))&&f(_,"style",L),(!I||u&1)&&P!==(P=o[0].title+"")&&Q(N,P),(!I||u&1&&T!==(T=`view-transition-name: title-${x(o[0].title)}`))&&f(V,"style",T),o[0].url?m?m.p(o,u):(m=ce(o),m.c(),m.m(k,G)):m&&(m.d(1),m=null),o[0].url&&o[0].date?$||($=he(),$.c(),$.m(k,z)):$&&($.d(1),$=null),o[0].date?d?d.p(o,u):(d=_e(o),d.c(),d.m(k,null)):d&&(d.d(1),d=null);const H={};u&1&&(H.source=o[0].content),y.$set(H),o[0].photos&&o[0].photos.length?g?g.p(o,u):(g=me(o),g.c(),g.m(t,U)):g&&(g.d(1),g=null),o[0].tags&&o[0].tags.length?v?v.p(o,u):(v=ge(o),v.c(),v.m(t,null)):v&&(v.d(1),v=null)},i(o){I||(se(e.$$.fragment,o),se(y.$$.fragment,o),I=!0)},o(o){ie(e.$$.fragment,o),ie(y.$$.fragment,o),I=!1},d(o){o&&(h(i),h(t)),ne(e,o),m&&m.d(),$&&$.d(),d&&d.d(),ne(y),g&&g.d(),v&&v.d()}}}function ye(n,e,i){let t;ke(n,Ie,a=>i(1,t=a));let{data:l}=e;return n.$$set=a=>{"data"in a&&i(0,l=a.data)},[l,t]}class qe extends we{constructor(e){super(),Be(this,e,ye,Ve,$e,{data:0})}}export{qe as component};