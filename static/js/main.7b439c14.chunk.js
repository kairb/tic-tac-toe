(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),o=n(7),r=n.n(o),a=(n(12),n(2)),s=n(4),u=(n(13),function(t,e,n){return t[e]=n,Object(a.a)(t)}),l=function(t){return t[0]!==t[1]||t[1]!==t[2]||"X"!==t[0]&&"O"!==t[0]?t[3]!==t[4]||t[4]!==t[5]||"X"!==t[3]&&"O"!==t[3]?t[6]!==t[7]||t[7]!==t[8]||"X"!==t[6]&&"O"!==t[6]?t[0]!==t[3]||t[3]!==t[6]||"X"!==t[0]&&"O"!==t[0]?t[1]!==t[4]||t[4]!==t[7]||"X"!==t[1]&&"O"!==t[1]?t[2]!==t[5]||t[5]!==t[8]||"X"!==t[2]&&"O"!==t[2]?t[0]!==t[4]||t[4]!==t[8]||"X"!==t[0]&&"O"!==t[0]?t[2]!==t[4]||t[4]!==t[6]||"X"!==t[2]&&"O"!==t[2]?[]:[2,4,6]:[0,4,8]:[2,5,8]:[1,4,7]:[0,3,6]:[6,7,8]:[3,4,5]:[0,1,2]},j=function(t){var e=Array(9).fill("");return t?Object(a.a)(O(e,"O")):Object(a.a)(e)},O=function(t,e){if(l(t).length>0)return Object(a.a)(t);var n=Object(a.a)(t),c=function(t){return t.map((function(t,e){return"X"!==t&&"O"!==t?e:null})).filter((function(t){return null!==t}))}(n);return n[c[Math.floor(Math.random()*c.length)]]=e,Object(a.a)(n)},b=function(t,e){},f=(n(14),n(0)),d=function(t){var e=t.state,n=t.onClick,c=t.option1,i=t.option2,o=t.title;return Object(f.jsxs)("div",{className:"root",children:[Object(f.jsx)("p",{children:c}),Object(f.jsxs)("div",{className:"switchContainer",children:[Object(f.jsx)("p",{children:o}),Object(f.jsx)("div",{className:"pill ".concat(e?"active":""),onClick:function(){return n()},children:Object(f.jsx)("div",{className:"slider"})})]}),Object(f.jsx)("p",{children:i})]})},h=function(){var t=Object(c.useState)(!0),e=Object(s.a)(t,2),n=e[0],i=e[1],o=Object(c.useState)(j(n)),r=Object(s.a)(o,2),h=r[0],p=r[1],x=Object(c.useState)([]),m=Object(s.a)(x,2),v=m[0],g=m[1],C=Object(c.useState)(!1),X=Object(s.a)(C,2),N=X[0],k=X[1],S=function(){p(Object(a.a)(j(n))),g([]),console.log("reseting")};return Object(c.useEffect)((function(){g(l(h))}),[h]),Object(c.useEffect)((function(){S()}),[n,N]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("div",{className:"grid",children:h.map((function(t,e){return Object(f.jsx)("div",{className:"box ".concat(v&&v.includes(e)?"green":""),onClick:function(){v!==[]&&function(t,e){return""===t[e]}(h,e)&&p(function(t,e,n){var c=u(t,e,"X");if(n){var i=b(c,!1);return console.log(i),Object(a.a)(c)}return Object(a.a)(O(c,"O"))}(h,e,N))},children:Object(f.jsx)("p",{className:"".concat("X"===t?"greenText":"redText"),children:t})},e)}))}),Object(f.jsxs)("div",{className:"controls",children:[Object(f.jsx)(d,{state:N,onClick:function(){k(!N)},title:"Algorithm",option1:"Random",option2:"Minimax"}),Object(f.jsx)(d,{state:n,onClick:function(){i(!n)},title:"First move",option1:"Player",option2:"Computer"})]}),Object(f.jsx)("button",{onClick:S,children:"Reset"})]})},p=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),o(t),r(t)}))};r.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(h,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.7b439c14.chunk.js.map