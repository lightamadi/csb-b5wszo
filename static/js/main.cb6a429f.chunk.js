(this["webpackJsonpfm-react-crypto-starter"]=this["webpackJsonpfm-react-crypto-starter"]||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(9),s=n(6),a=n(7),i=n(11),l=n(10),u=n(2),o=(n(20),n(0)),j=[{level:"easy",title:"Easy"},{level:"medium",title:"Medium"},{level:"hard",title:"Hard"}];function b(){var e=Object(c.useState)("easy"),t=Object(u.a)(e,2),n=t[0],r=t[1],b=Object(c.useState)([]),O=Object(u.a)(b,2),d=O[0],h=O[1],f=Object(c.useState)(0),x=Object(u.a)(f,2),p=x[0],v=x[1],w=Object(c.useState)(0),m=Object(u.a)(w,2),k=m[0],S=m[1],g=Object(c.useState)(!1),y=Object(u.a)(g,2),_=y[0],C=y[1],E=Object(c.useState)(!1),q=Object(u.a)(E,2),M=q[0],I=q[1],T=Object(c.useState)(null),H=Object(u.a)(T,2),J=H[0],L=H[1],Q=Object(c.useState)(null),R=Object(u.a)(Q,2),A=R[0],B=R[1];Object(c.useEffect)((function(){n&&(I(!0),L(null),D(n))}),[n]);var D=function(){var e=Object(l.a)(Object(s.a)().mark((function e(t){var n,c,r;return Object(s.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://opentdb.com/api.php?amount=50&difficulty=".concat(t));case 3:if((n=e.sent).ok){e.next=6;break}throw new Error(n.statusText);case 6:return e.next=8,n.json();case 8:if((c=e.sent).results.length){e.next=11;break}throw new Error("No questions found");case 11:r=c.results.map((function(e){var t=[].concat(Object(i.a)(e.incorrect_answers),[e.correct_answer]);return Object(a.a)(Object(a.a)({},e),{},{correct_answer:e.correct_answer,answers:t.sort((function(){return Math.random()-.5}))})})),h(r),I(!1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),L(e.t0),I(!1);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"IQ Test"}),Object(o.jsx)("div",{children:j.map((function(e,t){return Object(o.jsx)("button",{onClick:function(){return function(e){r(e),h([]),v(0),C(!1),S(0)}(e.level)},style:{backgroundColor:n===e.level?"#244624":"#367537"},children:e.title},t)}))}),M&&Object(o.jsx)("p",{children:"Loading..."}),J&&Object(o.jsxs)("p",{children:["An error occurred while fetching questions: ",J.message]}),d.length>0?_?Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:"Results"}),Object(o.jsxs)("p",{children:["Score: ",k,"/",d.length]})]}):Object(o.jsxs)("div",{class:"questionDiv",children:[Object(o.jsxs)("h2",{children:["Question ",p+1]}),d[p]&&Object(o.jsx)("div",{dangerouslySetInnerHTML:{__html:d[p].question}}),d[p]&&d[p].answers?Object(o.jsx)("div",{children:Object(o.jsx)("ul",{children:d[p].answers.map((function(e,t){return Object(o.jsx)("li",{children:Object(o.jsx)("button",{onClick:function(){return function(e){B(e)}(e)},style:{backgroundColor:A===e?"#00004c":""},children:e})},t)}))})}):null]}):null,Object(o.jsx)("button",{onClick:function(){if(null!==A){var e=d[p];A===e.correct_answer&&S(k+1),p===d.length-1?C(!0):v(p+1),B(null)}else L("Please select an answer")},children:"Submit"})]})}var O=document.getElementById("root");Object(r.createRoot)(O).render(Object(o.jsx)(c.StrictMode,{children:Object(o.jsx)(b,{})}))}},[[22,1,2]]]);
//# sourceMappingURL=main.cb6a429f.chunk.js.map