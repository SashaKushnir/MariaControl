(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,c,t){e.exports={selected:"CarSpaceItem_selected__2iCHs",spaceI:"CarSpaceItem_spaceI__eaTNh",disabled:"CarSpaceItem_disabled__nNyyv"}},17:function(e,c,t){e.exports={spaceArrWrapper:"CarSpaces_spaceArrWrapper__1N3-X"}},32:function(e,c,t){},33:function(e,c,t){},44:function(e,c,t){"use strict";t.r(c);var n=t(0),a=t.n(n),s=t(11),r=t.n(s),i=(t(32),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(c){var t=c.getCLS,n=c.getFID,a=c.getFCP,s=c.getLCP,r=c.getTTFB;t(e),n(e),a(e),s(e),r(e)}))}),d=(t(33),t(20)),o=t(21),p=t(27),u=t(25),j=t(13),l=t(5),b=t(14),O=t.n(b),f={bookSpaceItem:function(e){return{type:"SET_BOOKED_ITEM",id:e}},countSpaces:function(){return{type:"COUNT_SPACES"}}},S=t(1),h=function(e){var c=e.seconds,t=Math.trunc(c/3600),n=c-3600*t,a=Math.trunc(n/60),s=n-=60*a;return Object(S.jsxs)("div",{children:[t>=1&&Object(S.jsxs)("span",{children:[t," \u0433\u043e\u0434 "]}),(a>=1||t>=1)&&Object(S.jsxs)("span",{children:[a," \u0445\u0432 "]}),(s>=1||a>=1||t>=1)&&Object(S.jsxs)("span",{children:[s," \u0441\u0435\u043a"]})]})},v=function(e){var c,t=e.id,a=e.disabled,s=(e.callQueuedTime,Object(l.c)()),r=Object(n.useState)(0),i=Object(j.a)(r,2),d=i[0],o=i[1];Object(n.useEffect)((function(){return a&&(c=setInterval((function(){o(d+1)}),1e3)),function(){clearInterval(c)}}),[d]),Object(n.useEffect)((function(){a&&o(1)}),[a]);return Object(S.jsxs)("div",{className:"".concat(O.a.spaceI," ").concat(a?O.a.disabled:O.a.selected),onClick:function(){a||(s(f.bookSpaceItem(t)),s(f.countSpaces()))},children:[Object(S.jsxs)("div",{children:["\u041f\u0430\u0440\u043a\u043e\u0432\u043e\u0447\u043d\u0435 \u043c\u0456\u0441\u0446\u0435 \u2116",t]}),Object(S.jsx)("div",{children:Object(S.jsx)(h,{seconds:d})})]})},m=t(17),x=t.n(m),_=t(6),E=function(){var e=Object(n.useState)(!1),c=Object(j.a)(e,2),t=c[0],a=c[1],s=Object(l.d)((function(e){return e.parkingR.carSpaces})).map((function(e,c){return Object(S.jsx)(v,{id:e.id,disabled:e.disabled,callQueuedTime:(new Date).getTime()},e.id)})),r=Object(l.c)();Object(n.useEffect)((function(){r(f.countSpaces())}));var i=Object(l.d)((function(e){return e.parkingR.emptySpaces})),d=Object(l.d)((function(e){return e.parkingR.fooledSpaces}));return Object(n.useEffect)((function(){d===s.length?a(!0):a(!1)}),[d]),Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{children:"1 \u0433\u043e\u0434\u0438\u043d\u0430 \u043f\u0430\u0440\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u2013 \u0431\u0435\u0437\u043a\u043e\u0448\u0442\u043e\u0432\u043d\u043e! \u0422\u0430\u0440\u0438\u0444 \u2013 20 \u0433\u0440\u043d/\u0433\u043e\u0434\u0438\u043d\u0430\xbb"}),Object(S.jsx)("div",{className:x.a.spaceArrWrapper,children:s}),Object(S.jsxs)("div",{children:[i," \u0432\u0456\u043b\u044c\u043d\u0438\u0445 \u043c\u0456\u0441\u0446\u044c"]}),Object(S.jsxs)("div",{children:[d," \u0437\u0430\u0439\u043d\u044f\u0442\u0438\u0445 \u043c\u0456\u0441\u0446\u044c"]}),t&&Object(S.jsx)("div",{children:"\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0430\u043b\u0435 \u0432\u0456\u043b\u044c\u043d\u0438\u0445 \u043c\u0456\u0441\u0446\u044c \u043d\u0430 \u043f\u0430\u0440\u043a\u043e\u0432\u0446\u0456 \u043d\u0435\u043c\u0430\u0454"})]})},g=function(e){Object(p.a)(t,e);var c=Object(u.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=c.call(this,e)).state={allBooked:!1},n}return Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.count()}},{key:"componentDidUpdate",value:function(e,c,t){e.fooledSpaces!==this.props.fooledSpaces&&this.props.fooledSpaces===this.props.carsSpaces.length&&this.setState({allBooked:!0})}},{key:"render",value:function(){return Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{children:"1 \u0433\u043e\u0434\u0438\u043d\u0430 \u043f\u0430\u0440\u043a\u0443\u0432\u0430\u043d\u043d\u044f \u2013 \u0431\u0435\u0437\u043a\u043e\u0448\u0442\u043e\u0432\u043d\u043e! \u0422\u0430\u0440\u0438\u0444 \u2013 20 \u0433\u0440\u043d/\u0433\u043e\u0434\u0438\u043d\u0430\xbb"}),Object(S.jsx)("div",{className:x.a.spaceArrWrapper,children:this.props.carsSpaces.map((function(e,c){return Object(S.jsx)(v,{id:e.id,disabled:e.disabled,callQueuedTime:(new Date).getTime()},e.id)}))}),Object(S.jsxs)("div",{children:[this.props.emptySpaces," \u0432\u0456\u043b\u044c\u043d\u0438\u0445 \u043c\u0456\u0441\u0446\u044c"]}),Object(S.jsxs)("div",{children:[this.props.fooledSpaces," \u0437\u0430\u0439\u043d\u044f\u0442\u0438\u0445 \u043c\u0456\u0441\u0446\u044c"]}),this.state.allBooked&&Object(S.jsx)("div",{children:"\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0430\u043b\u0435 \u0432\u0456\u043b\u044c\u043d\u0438\u0445 \u043c\u0456\u0441\u0446\u044c \u043d\u0430 \u043f\u0430\u0440\u043a\u043e\u0432\u0446\u0456 \u043d\u0435\u043c\u0430\u0454"})]})}}]),t}(a.a.Component),k=Object(l.b)((function(e){return{carsSpaces:e.parkingR.carSpaces,fooledSpaces:e.parkingR.fooledSpaces,emptySpaces:e.parkingR.emptySpaces}}),{count:f.countSpaces}),y=Object(_.c)(k)(g),T=t(23),C=t(26),I=t(10),N={carSpaces:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,c=[],t=0;t<e;t++)c.push({id:t+1,disabled:!1});return c.map((function(e){return e.disabled=Math.random()<.5,e}))}(),emptySpaces:0,fooledSpaces:0},w=Object(_.b)({parkingR:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"SET_BOOKED_ITEM":return Object(I.a)(Object(I.a)({},e),{},{carSpaces:Object(C.a)(e.carSpaces).map((function(e){return e.id===c.id&&(e.disabled=!0),e}))});case"COUNT_SPACES":return Object(I.a)(Object(I.a)({},e),{},{emptySpaces:e.carSpaces.reduce((function(e,c){return c.disabled||e++,e}),0),fooledSpaces:e.carSpaces.reduce((function(e,c){return c.disabled&&e++,e}),0)});default:return e}}}),D=("object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):_.c)(Object(_.a)(T.a)),M=Object(_.d)(w,D),R=t(24),A=function(){return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(E,{}),Object(S.jsx)(y,{})]})},B=function(){return Object(S.jsx)(l.a,{store:M,children:Object(S.jsx)(R.a,{children:Object(S.jsx)(A,{})})})};r.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(B,{})}),document.getElementById("root")),i()}},[[44,1,2]]]);
//# sourceMappingURL=main.5aa595c3.chunk.js.map