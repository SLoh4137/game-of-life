(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4],{PsZd:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),a=t.n(r),c=t("H2TA"),l=t("aoJa"),o=t("TmSq");n.default=Object(c.a)({cell:{width:function(e){return e.cellSize},height:function(e){return e.cellSize},margin:function(e){return e.cellSpacing},borderRadius:"5px"},aliveCell:{backgroundColor:function(e){return e.aliveColor}},deadCell:{backgroundColor:function(e){return e.deadColor}}})((function(e){for(var n=e.classes,t=e.universe,r=e.universeDispatch,c=[],u=t?t.length:0,i=0;i<u;i++){for(var s=[],f=t[i],d=f?f.length:0,p=0;p<d;p++)s.push(a.a.createElement(o.default,{classes:n,key:[i,p],row:i,col:p,state:f[p],universeDispatch:r}));c.push(a.a.createElement(l.a,{key:i,wrap:"nowrap",justify:"center",alignItems:"center"},s))}return a.a.createElement(l.a,{direction:"column",justify:"center",alignItems:"center",alignContent:"center"},c)}))},TmSq:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),a=t.n(r),c=t("TSYQ"),l=t.n(c),o=t("l7+K"),u=t("cv56");n.default=function(e){var n=e.classes,t=e.row,c=e.col,i=e.state,s=e.universeDispatch,f=Object(r.useMemo)((function(){return function(e,n){return e===u.a.ALIVE?l()(n.aliveCell,n.cell):l()(n.deadCell,n.cell)}(i,n)}),[i,n]);return a.a.createElement("button",{className:f,onClick:function(){return s({type:o.a.FLIP,row:t,col:c})}})}}}]);
//# sourceMappingURL=component---src-pages-game-of-life-page-board-jsx-ee553b52a1997aa3a018.js.map