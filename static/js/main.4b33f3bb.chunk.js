(this["webpackJsonpreact-quiz"]=this["webpackJsonpreact-quiz"]||[]).push([[0],{17:function(n,e,t){n.exports=t.p+"static/media/background.8ebbed44.jpg"},19:function(n,e,t){n.exports=t(27)},27:function(n,e,t){"use strict";t.r(e);var r,a=t(0),c=t.n(a),o=t(13),i=t.n(o),s=t(2),u=t(3),l=t.n(u),d=t(8),p=t(1),f=t(18);!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(r||(r={}));var b=function(){var n=Object(d.a)(l.a.mark((function n(e,t){var r,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(t,"&type=multiple"),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return a=n.sent,n.abrupt("return",a.results.map((function(n){return Object(f.a)({},n,{answers:(e=[].concat(Object(s.a)(n.incorrect_answers),[n.correct_answer]),Object(s.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),m=t(4),x=t(5);function g(){var n=Object(m.a)(["\n  transition: all 0.3s ease;\n\n  :hover {\n    opacity: 0.8;\n  }\n\n  button {\n    cursor: pointer;\n    user-select: none;\n    font-size: 0.8rem;\n    width: 100%;\n    height: 40px;\n    margin: 5px 0;\n    background: ",";\n\n    border: 3px solid #fff;\n    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);\n    border-radius: 10px;\n    color: #fff;\n    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);\n  }\n"]);return g=function(){return n},n}function h(){var n=Object(m.a)(["\n  min-width: 500px;\n  max-width: 500px;\n  background: #ebfeff;\n  border-radius: 10px;\n  border: 2px solid #0085a3;\n  padding: 20px;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0.25);\n  text-align: center;\n\n  p {\n    font-size: 1rem;\n  }\n"]);return h=function(){return n},n}var w=x.b.div(h()),v=x.b.div(g(),(function(n){var e=n.correct,t=n.userClicked;return e?"linear-gradient(90deg, #56ffa4, #59bc86)":!e&&t?"linear-gradient(90deg, #ff5656, #c16868)":"linear-gradient(90deg, #56ccff, #6eafb4)"})),j=function(n){var e=n.question,t=n.answers,r=n.callback,a=n.userAnswer,o=n.questionNr,i=n.totalQuestions;return c.a.createElement(w,null,c.a.createElement("p",{className:"number"},"Question: ",o," / ",i),c.a.createElement("p",{dangerouslySetInnerHTML:{__html:e}}),c.a.createElement("div",null,t.map((function(n){return c.a.createElement(v,{key:n,correct:(null===a||void 0===a?void 0:a.correctAnswer)===n,userClicked:(null===a||void 0===a?void 0:a.answer)===n},c.a.createElement("button",{disabled:!!a,onClick:r},c.a.createElement("span",{dangerouslySetInnerHTML:{__html:n}})))}))))},k=t(17),E=t.n(k);function O(){var n=Object(m.a)(['\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  > p {\n    color: #000;\n  }\n\n  .score {\n    color: #000;\n    font-size: 2rem;\n    margin: 0;\n  }\n\n  h1 {\n    font-family: "Catamaran", Fascinate Inline, Haettenschweiler,\n      "Arial Narrow Bold", sans-serif;\n    background-image: linear-gradient(180deg, #fff, #87f1ff);\n    background-size: 100%;\n    background-clip: text;\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    -moz-background-clip: text;\n    -moz-text-fill-color: transparent;\n    filter: drop-shadow(2px 2px #0085a3);\n    font-size: 70px;\n    font-weight: 400;\n    text-align: center;\n    margin: 20px;\n  }\n\n  .start,\n  .next {\n    cursor: pointer;\n    background: linear-gradient(180deg, #fff, #ffcc91);\n    border: 2px solid #d38558;\n    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n    border-radius: 10px;\n    height: 40px;\n    margin: 20px 0;\n    padding: 0 40px;\n  }\n\n  .start {\n    max-width: 200px;\n  }\n']);return O=function(){return n},n}function y(){var n=Object(m.a)(["\nhtml {\n    height: 100%;\n}\n\nbody {\n    background-image: url(",");\n    background-size: cover;\n    margin: 0;\n    padding: 0 20px;\n    display: flex;\n    justify-content: center;\n}\n\n* {\n    box-sizing: border-box;\n    font-family: 'Catamaran', sans-serif;\n\n}\n\n"]);return y=function(){return n},n}var S=Object(x.a)(y(),E.a),z=x.b.div(O()),q=function(){var n=Object(a.useState)(!1),e=Object(p.a)(n,2),t=e[0],o=e[1],i=Object(a.useState)([]),u=Object(p.a)(i,2),f=u[0],m=u[1],x=Object(a.useState)(0),g=Object(p.a)(x,2),h=g[0],w=g[1],v=Object(a.useState)([]),k=Object(p.a)(v,2),E=k[0],O=k[1],y=Object(a.useState)(0),q=Object(p.a)(y,2),A=q[0],C=q[1],N=Object(a.useState)(!0),_=Object(p.a)(N,2),I=_[0],M=_[1],Q=function(){var n=Object(d.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(!0),M(!1),n.next=4,b(10,r.EASY);case 4:e=n.sent,m(e),C(0),O([]),w(0),o(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,c.a.createElement(S,null),c.a.createElement(z,null,c.a.createElement("h1",null,"REACT QUIZ"),I||10===E.length?c.a.createElement("button",{className:"start",onClick:Q},"Start"):null,I?null:c.a.createElement("p",{className:"score"},"Score:",A),t&&c.a.createElement("p",null,"Loading Questions ..."),!t&&!I&&c.a.createElement(j,{questionNr:h+1,totalQuestions:10,question:f[h].question,answers:f[h].answers,userAnswer:E?E[h]:void 0,callback:function(n){if(!I){var e=n.currentTarget.innerText,t=f[h].correct_answer===e;t&&C((function(n){return n+1}));var r={question:f[h].question,answer:e,correct:t,correctAnswer:f[h].correct_answer};O((function(n){return[].concat(Object(s.a)(n),[r])})),console.log(e),console.log(t)}}}),I||t||E.length!==h+1||9===h?null:c.a.createElement("button",{className:"next",onClick:function(){var n=h+1;10===n?M(!0):w(n)}},"Next Question")))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(q,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.4b33f3bb.chunk.js.map