(window.webpackJsonp=window.webpackJsonp||[]).push([[3,4,5],{"3ZzI":function(e,t,n){"use strict";n("HAE/");var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a.default}});var a=r(n("OA4S"))},LwuN:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("l7+K"),o=n("aoJa"),s=n("TmSq");t.default=function(e){for(var t=e.row,n=e.rowNum,r=e.dispatch,c=[],u=t?t.length:0,l=function(e){c.push(a.a.createElement(s.default,{key:[n,e],state:t[e],onClick:function(){return r({type:i.a.FLIP,row:n,col:e})}}))},f=0;f<u;f++)l(f);return a.a.createElement(o.a,{wrap:"nowrap",justify:"center",alignItems:"center"},c)}},OA4S:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("DNiP"),n("8+KV"),n("HAE/");var r=n("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.styles=void 0;var a=r(n("lSNA")),i=r(n("QILm")),o=r(n("pVnL")),s=r(n("q1tI")),c=(r(n("17x9")),r(n("TSYQ"))),u=(n("j4Xf"),r(n("Hk+Y"))),l=n("Th4q"),f=(r(n("gz/h")),[0,8,16,24,32,40]),d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var p=function(e){return(0,o.default)({container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return f.forEach((function(e,r){0!==r&&(n["spacing-".concat(t,"-").concat(e)]={margin:-e/2,width:"calc(100% + ".concat(e,"px)"),"& > $item":{padding:e/2}})})),n}(0,"xs"),l.keys.reduce((function(t,n){return function(e,t,n){var r={};d.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var a="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:a,flexGrow:0,maxWidth:a}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,o.default)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))};function g(e){var t,n=e.alignContent,r=e.alignItems,u=e.classes,l=e.className,f=e.component,d=e.container,p=e.direction,v=e.item,m=e.justify,x=e.lg,w=e.md,h=e.sm,b=e.spacing,y=e.wrap,S=e.xl,I=e.xs,j=e.zeroMinWidth,E=(0,i.default)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),C=(0,c.default)((t={},(0,a.default)(t,u.container,d),(0,a.default)(t,u.item,v),(0,a.default)(t,u.zeroMinWidth,j),(0,a.default)(t,u["spacing-xs-".concat(String(b))],d&&0!==b),(0,a.default)(t,u["direction-xs-".concat(String(p))],p!==g.defaultProps.direction),(0,a.default)(t,u["wrap-xs-".concat(String(y))],y!==g.defaultProps.wrap),(0,a.default)(t,u["align-items-xs-".concat(String(r))],r!==g.defaultProps.alignItems),(0,a.default)(t,u["align-content-xs-".concat(String(n))],n!==g.defaultProps.alignContent),(0,a.default)(t,u["justify-xs-".concat(String(m))],m!==g.defaultProps.justify),(0,a.default)(t,u["grid-xs-".concat(String(I))],!1!==I),(0,a.default)(t,u["grid-sm-".concat(String(h))],!1!==h),(0,a.default)(t,u["grid-md-".concat(String(w))],!1!==w),(0,a.default)(t,u["grid-lg-".concat(String(x))],!1!==x),(0,a.default)(t,u["grid-xl-".concat(String(S))],!1!==S),t),l);return s.default.createElement(f,(0,o.default)({className:C},E))}t.styles=p,g.defaultProps={alignContent:"stretch",alignItems:"stretch",component:"div",container:!1,direction:"row",item:!1,justify:"flex-start",lg:!1,md:!1,sm:!1,spacing:0,wrap:"wrap",xl:!1,xs:!1,zeroMinWidth:!1};var v=(0,u.default)(p,{name:"MuiGrid"})(g);t.default=v},PsZd:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("aoJa"),o=n("LwuN");t.default=function(e){var t=e.universe,n=e.dispatch,r=[],s=t?t.length:0,c=0;for(c=0;c<s;c+=1)r.push(a.a.createElement(o.default,{key:c,row:t[c],rowNum:c,dispatch:n}));return a.a.createElement(i.a,{direction:"column",justify:"center",alignItems:"center"},r)}},TSYQ:function(e,t,n){var r;n("LK8F"),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===i)for(var s in r)n.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},TmSq:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("cv56");t.default=function(e){var t=e.state,n=e.onClick,r={width:i.a,height:i.a,backgroundColor:t===i.b.ALIVE?"black":"white",borderStyle:"dotted",borderColor:"black"};return a.a.createElement("button",{style:r,onClick:n})}},aoJa:function(e,t,n){"use strict";n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("91GP");var r=n("q1tI"),a=n.n(r),i=n("Hk+Y"),o=n.n(i),s=n("3ZzI"),c=n.n(s);function u(e){var t=Object.assign({},e),n=t.classes,r=t.children,i=t.className,o=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["classes","children","className"]);return a.a.createElement(c.a,Object.assign({container:!0},o,{className:n.grid+" "+i}),r)}u.defaultProps={className:""},t.a=o()({grid:{marginRight:"-15px",marginLeft:"-15px",width:"auto"}})(u)},cv56:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r=50,a={DEAD:!1,ALIVE:!0}},"gz/h":function(e,t,n){"use strict";n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){return function(){return null}};t.default=r},"l7+K":function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return g}));n("rGqo"),n("yt8O"),n("Btvt"),n("XfO3"),n("T39b"),n("KKXr");var r=n("q1tI"),a=n("cv56"),i=",";function o(e,t){return e+i+t}function s(e,t){return t.has(e)}function c(e,t,n,r){return s(e,n)?t+1:(null!==r&&r.add(e),t)}function u(e,t,n,r,a){var s,u=(s=e.split(i),{row:parseInt(s[0]),col:parseInt(s[1])}),l=u.row,f=u.col,d=function(e,t,n,r){return{left:t-1>=0?t-1:r-1,right:t+1<r?t+1:0,top:e-1>=0?e-1:n-1,bottom:e+1<n?e+1:0}}(l,f,r,a),p=d.left,g=d.right,v=d.top,m=d.bottom,x=0;return x=c(o(v,p),x,t,n),x=c(o(v,f),x,t,n),x=c(o(v,g),x,t,n),x=c(o(l,g),x,t,n),x=c(o(m,g),x,t,n),x=c(o(m,f),x,t,n),x=c(o(m,p),x,t,n),x=c(o(l,p),x,t,n)}function l(e,t,n){for(var r=[],i=0;i<e;i++){for(var c=[],u=0;u<t;u++){s(o(i,u),n)?c.push(a.b.ALIVE):c.push(a.b.DEAD)}r.push(c)}return r}function f(e){for(var t=e.numRow,n=e.numCol,r=e.spawnRate,a=new Set,i=0;i<t;i++)for(var s=0;s<n;s++)if(Math.random()<r){var c=o(i,s);a.add(c)}return{liveSet:a,universe:l(t,n,a)}}var d={LIVE_SET:0,FLIP:1};function p(e,t){var n=e.liveSet,r=e.universe;switch(t.type){case d.LIVE_SET:n=t.liveSet;break;case d.FLIP:var a=o(t.row,t.col);s(a,e.liveSet)?n.delete():n.add(a);break;default:throw new Error("Invalid action provided")}return{liveSet:n,universe:l(r.length,r[0].length,n)}}function g(e,t,n){var a=Object(r.useReducer)(p,{numRow:e,numCol:t,spawnRate:n},f),i=a[0],o=a[1],s=Object(r.useState)(!0),c=s[0],l=s[1],g=Object(r.useState)(0),v=g[0],m=g[1];return Object(r.useEffect)((function(){var n=setInterval((function(){if(!c){var n=new Set,r=new Set;i.liveSet.forEach((function(a){var o=u(a,i.liveSet,r,e,t);2!==o&&3!==o||n.add(a)})),r.forEach((function(r){3===u(r,i.liveSet,null,e,t)&&n.add(r)})),o({type:d.LIVE_SET,liveSet:n}),m((function(e){return e+1}))}}),1e3);return function(){return clearInterval(n)}}),[c,i.liveSet,e,t]),{isPaused:c,setIsPaused:l,count:v,state:i,dispatch:o}}}}]);
//# sourceMappingURL=component---src-pages-game-of-life-page-board-jsx-fdb33d3b98c4c8b32792.js.map