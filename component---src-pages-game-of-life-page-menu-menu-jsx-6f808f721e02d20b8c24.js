(window.webpackJsonp=window.webpackJsonp||[]).push([[7,6,8],{"9Qal":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s}));var n=a("q1tI"),l=a.n(n),i=a("f+xD"),r=a("DvoB"),c=a("aoJa"),o=a("HdOC"),u=a("JTSz");function s(e){var t=e.optionsState,a=e.optionsDispatch,n=t||{},s=n.aliveColor,d=n.deadColor;return l.a.createElement(r.c,null,l.a.createElement("h4",{align:"center"},"Board Customization"),l.a.createElement(c.a,{justify:"center"},l.a.createElement(o.a,{xs:6,zeroMinWidth:!0,container:!0,justify:"center"},l.a.createElement(u.default,{label:"Alive Color",option:"aliveColor",actionType:i.a.SET_ALIVE_COLOR,defaultValue:s,dispatch:a})),l.a.createElement(o.a,{xs:6,zeroMinWidth:!0,container:!0,justify:"center"},l.a.createElement(u.default,{label:"Dead Color",option:"deadColor",actionType:i.a.SET_DEAD_COLOR,defaultValue:d,dispatch:a}))))}},DKKV:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),i=a("aoJa"),r=a("HdOC"),c=a("iJ3l"),o=a("DvoB"),u=a("f+xD"),s=a("l7+K");t.default=function(e){var t=e.optionsState,a=e.optionsDispatch,n=e.universeDispatch,d=t||{},m=d.isPaused,f=d.cellSize,p=d.cellSpacing;return l.a.createElement(o.c,null,l.a.createElement(i.a,{direction:"column",justify:"center",alignItems:"center",alignContent:"center"},l.a.createElement("h4",{align:"center"},"Board Controls"),l.a.createElement(c.default,{isPaused:m,dispatch:a}),l.a.createElement(i.a,{justify:"center",alignItems:"center"},l.a.createElement(r.a,{xs:6,md:6},l.a.createElement(o.e,{fullWidth:!0,id:"outlined-set-cell-size",label:"Cell Size",type:"number",defaultValue:f,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined",onClick:function(e){return a({type:u.a.SET_CELL_SIZE,cellSize:e.target.value})}})),l.a.createElement(r.a,{xs:6,md:6},l.a.createElement(o.e,{fullWidth:!0,id:"outlined-set-cell-spacing",label:"Cell Spacing",type:"number",defaultValue:p,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined",onClick:function(e){return a({type:u.a.SET_CELL_SPACING,cellSpacing:e.target.value})}}))),l.a.createElement(i.a,{justify:"center"},l.a.createElement(r.a,{xs:6},l.a.createElement(o.a,{fullWidth:!0,variant:"filled",onClick:function(){n({type:s.a.RESET})}},"NEW BOARD")),l.a.createElement(r.a,{xs:6},l.a.createElement(o.a,{fullWidth:!0,variant:"filled",onClick:function(){n({type:s.a.CLEAR})}},"CLEAR")))))}},dlF2:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),i=a("DvoB"),r=a("uniG"),c=a.n(r),o=a("aoJa"),u=a("HdOC"),s=a("9Qal"),d=a("DKKV");t.default=function(e){var t=e.className,a=e.generation,r=e.optionsState,m=e.optionsDispatch,f=e.universeDispatch,p=Object(n.useState)(!1),E=p[0],v=p[1],h=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&v(e)}};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:t},l.a.createElement(i.b,{size:"small",onClick:h(!0)},l.a.createElement(c.a,null))),l.a.createElement(i.d,{anchor:"bottom",open:E,onClose:h(!1),onOpen:h(!0)},l.a.createElement("h3",{align:"center"},"Generation: ",a),l.a.createElement(o.a,{justify:"center"},l.a.createElement(u.a,{xs:12,sm:6},l.a.createElement(d.default,{optionsState:r,optionsDispatch:m,universeDispatch:f})),l.a.createElement(u.a,{xs:12,sm:6},l.a.createElement(s.default,{optionsState:r,optionsDispatch:m})))))}},uniG:function(e,t,a){"use strict";a("HAE/");var n=a("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a("q1tI")),i=(0,n(a("8/g6")).default)(l.default.createElement(l.default.Fragment,null,l.default.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),l.default.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"})),"Menu");t.default=i}}]);
//# sourceMappingURL=component---src-pages-game-of-life-page-menu-menu-jsx-6f808f721e02d20b8c24.js.map