(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,4,6,7,8],{"9Qal":function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return p}));var r=a("q1tI"),n=a.n(r),o=a("f+xD"),i=a("kKAo"),c=a("aoJa"),l=a("HdOC"),s=a("JTSz");function p(e){e.optionsState;var t=e.optionsDispatch;return n.a.createElement(i.a,null,n.a.createElement("h4",{align:"center"},"Board Customization"),n.a.createElement(c.a,{justify:"center"},n.a.createElement(l.a,{xs:6,zeroMinWidth:!0,container:!0,justify:"center"},n.a.createElement(s.default,{label:"Alive Color",option:"aliveColor",actionType:o.a.SET_ALIVE_COLOR,defaultValue:aliveColor,dispatch:t})),n.a.createElement(l.a,{xs:6,zeroMinWidth:!0,container:!0,justify:"center"},n.a.createElement(s.default,{label:"Dead Color",option:"deadColor",actionType:o.a.SET_DEAD_COLOR,defaultValue:deadColor,dispatch:t}))))}},DKKV:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),o=(a("rzGZ"),a("Dq+y"),a("8npG"),a("Ggvi"),a("y7hu"),a("E5k/"),a("TSYQ")),i=a.n(o),c=a("Hk+Y"),l=a.n(c),s=a("aXB2"),p=a("k1TG"),d=(a("17x9"),a("iuhU")),u=a("H2TA"),b=a("ye/S"),f=a("VD++"),x=a("NqtD"),g=n.a.forwardRef((function(e,t){var a=e.children,r=e.classes,o=e.className,i=e.color,c=void 0===i?"default":i,l=e.component,u=void 0===l?"button":l,b=e.disabled,g=void 0!==b&&b,h=e.disableFocusRipple,m=void 0!==h&&h,v=e.endIcon,y=e.focusVisibleClassName,w=e.fullWidth,S=void 0!==w&&w,k=e.size,O=void 0===k?"medium":k,j=e.startIcon,E=e.type,C=void 0===E?"button":E,T=e.variant,z=void 0===T?"text":T,R=Object(s.a)(e,["children","classes","className","color","component","disabled","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),P=j&&n.a.createElement("span",{className:Object(d.a)(r.startIcon,r["iconSize".concat(Object(x.a)(O))])},j),D=v&&n.a.createElement("span",{className:Object(d.a)(r.endIcon,r["iconSize".concat(Object(x.a)(O))])},v);return n.a.createElement(f.a,Object(p.a)({className:Object(d.a)(r.root,r[z],o,"inherit"===c?r.colorInherit:"default"!==c&&r["".concat(z).concat(Object(x.a)(c))],"medium"!==O&&[r["".concat(z,"Size").concat(Object(x.a)(O))],r["size".concat(Object(x.a)(O))]],g&&r.disabled,S&&r.fullWidth),component:u,disabled:g,focusRipple:!m,focusVisibleClassName:Object(d.a)(r.focusVisible,y),ref:t,type:C},R),n.a.createElement("span",{className:r.label},P,a,D))})),h=Object(u.a)((function(e){return{root:Object(p.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(b.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(b.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(b.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(b.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(b.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(b.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(b.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(g),m=(Object.assign({},{paddingRight:"15px",paddingLeft:"15px",marginRight:"auto",marginLeft:"auto",width:"100%"},{"@media (min-width: 576px)":{maxWidth:"540px"},"@media (min-width: 768px)":{maxWidth:"720px"},"@media (min-width: 992px)":{maxWidth:"960px"},"@media (min-width: 1200px)":{maxWidth:"1140px"}}),Object.assign({color:"#fff",background:"linear-gradient(60deg, #ffa726, #fb8c00)"},{boxShadow:"0 12px 20px -10px rgba(255, 152, 0, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(255, 152, 0, 0.2)"}),Object.assign({color:"#fff",background:"linear-gradient(60deg, #66bb6a, #43a047)"},{boxShadow:"0 12px 20px -10px rgba(76, 175, 80, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(76, 175, 80, 0.2)"}),Object.assign({color:"#fff",background:"linear-gradient(60deg, #ef5350, #e53935)"},{boxShadow:"0 12px 20px -10px rgba(244, 67, 54, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(244, 67, 54, 0.2)"}),Object.assign({color:"#fff",background:"linear-gradient(60deg, #26c6da, #00acc1)"},{boxShadow:"0 12px 20px -10px rgba(0, 188, 212, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 188, 212, 0.2)"}),Object.assign({color:"#fff",background:"linear-gradient(60deg, #ab47bc, #8e24aa)"},{boxShadow:"0 12px 20px -10px rgba(156, 39, 176, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(156, 39, 176, 0.2)"}),Object.assign({color:"#fff",background:"linear-gradient(60deg, #ec407a, #d81b60)"},{boxShadow:"0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(233, 30, 99, 0.4)"}),Object.assign({margin:"0 20px 10px",paddingTop:"10px",borderTop:"1px solid #eeeeee",height:"auto"},{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontWeight:"300",lineHeight:"1.5em"}),Object.assign({},{color:"#3C4858",margin:"1.75rem 0 0.875rem",textDecoration:"none",fontWeight:"700",fontFamily:'"Roboto Slab", "Times New Roman", serif'},{marginTop:".625rem"}),{button:{minHeight:"auto",minWidth:"auto",backgroundColor:"#999999",color:"#FFFFFF",boxShadow:"0 2px 2px 0 rgba(153, 153, 153, 0.14), 0 3px 1px -2px rgba(153, 153, 153, 0.2), 0 1px 5px 0 rgba(153, 153, 153, 0.12)",border:"none",borderRadius:"3px",position:"relative",padding:"12px 30px",margin:".3125rem 1px",fontSize:"12px",fontWeight:"400",textTransform:"uppercase",letterSpacing:"0",willChange:"box-shadow, transform",transition:"box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",lineHeight:"1.42857143",textAlign:"center",whiteSpace:"nowrap",verticalAlign:"middle",touchAction:"manipulation",cursor:"pointer","&:hover,&:focus":{color:"#FFFFFF",backgroundColor:"#999999",boxShadow:"0 14px 26px -12px rgba(153, 153, 153, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(153, 153, 153, 0.2)"},"& .fab,& .fas,& .far,& .fal,& .material-icons":{position:"relative",display:"inline-block",top:"0",fontSize:"1.1rem",marginRight:"4px",verticalAlign:"middle"},"& svg":{position:"relative",display:"inline-block",top:"0",width:"18px",height:"18px",marginRight:"4px",verticalAlign:"middle"},"&$justIcon":{"& .fab,& .fas,& .far,& .fal,& .material-icons":{marginRight:"0px",position:"absolute",width:"100%",transform:"none",left:"0px",top:"0px",height:"100%",lineHeight:"41px",fontSize:"20px"}}},fullWidth:{width:"100%"},primary:{backgroundColor:"#9c27b0",boxShadow:"0 2px 2px 0 rgba(156, 39, 176, 0.14), 0 3px 1px -2px rgba(156, 39, 176, 0.2), 0 1px 5px 0 rgba(156, 39, 176, 0.12)","&:hover,&:focus":{backgroundColor:"#9c27b0",boxShadow:"0 14px 26px -12px rgba(156, 39, 176, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(156, 39, 176, 0.2)"}},info:{backgroundColor:"#00acc1",boxShadow:"0 2px 2px 0 rgba(0, 188, 212, 0.14), 0 3px 1px -2px rgba(0, 188, 212, 0.2), 0 1px 5px 0 rgba(0, 188, 212, 0.12)","&:hover,&:focus":{backgroundColor:"#00acc1",boxShadow:"0 14px 26px -12px rgba(0, 188, 212, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 188, 212, 0.2)"}},success:{backgroundColor:"#4caf50",boxShadow:"0 2px 2px 0 rgba(76, 175, 80, 0.14), 0 3px 1px -2px rgba(76, 175, 80, 0.2), 0 1px 5px 0 rgba(76, 175, 80, 0.12)","&:hover,&:focus":{backgroundColor:"#4caf50",boxShadow:"0 14px 26px -12px rgba(76, 175, 80, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(76, 175, 80, 0.2)"}},warning:{backgroundColor:"#ff9800",boxShadow:"0 2px 2px 0 rgba(255, 152, 0, 0.14), 0 3px 1px -2px rgba(255, 152, 0, 0.2), 0 1px 5px 0 rgba(255, 152, 0, 0.12)","&:hover,&:focus":{backgroundColor:"#ff9800",boxShadow:"0 14px 26px -12px rgba(255, 152, 0, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(255, 152, 0, 0.2)"}},danger:{backgroundColor:"#f44336",boxShadow:"0 2px 2px 0 rgba(244, 67, 54, 0.14), 0 3px 1px -2px rgba(244, 67, 54, 0.2), 0 1px 5px 0 rgba(244, 67, 54, 0.12)","&:hover,&:focus":{backgroundColor:"#f44336",boxShadow:"0 14px 26px -12px rgba(244, 67, 54, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(244, 67, 54, 0.2)"}},rose:{backgroundColor:"#e91e63",boxShadow:"0 2px 2px 0 rgba(233, 30, 99, 0.14), 0 3px 1px -2px rgba(233, 30, 99, 0.2), 0 1px 5px 0 rgba(233, 30, 99, 0.12)","&:hover,&:focus":{backgroundColor:"#e91e63",boxShadow:"0 14px 26px -12px rgba(233, 30, 99, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(233, 30, 99, 0.2)"}},white:{"&,&:focus,&:hover,&:visited":{backgroundColor:"#FFFFFF",color:"#999999"}},twitter:{backgroundColor:"#55acee",color:"#fff",boxShadow:"0 2px 2px 0 rgba(85, 172, 238, 0.14), 0 3px 1px -2px rgba(85, 172, 238, 0.2), 0 1px 5px 0 rgba(85, 172, 238, 0.12)","&:hover,&:focus,&:visited":{backgroundColor:"#55acee",color:"#fff",boxShadow:"0 14px 26px -12px rgba(85, 172, 238, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(85, 172, 238, 0.2)"}},facebook:{backgroundColor:"#3b5998",color:"#fff",boxShadow:"0 2px 2px 0 rgba(59, 89, 152, 0.14), 0 3px 1px -2px rgba(59, 89, 152, 0.2), 0 1px 5px 0 rgba(59, 89, 152, 0.12)","&:hover,&:focus":{backgroundColor:"#3b5998",color:"#fff",boxShadow:"0 14px 26px -12px rgba(59, 89, 152, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(59, 89, 152, 0.2)"}},google:{backgroundColor:"#dd4b39",color:"#fff",boxShadow:"0 2px 2px 0 rgba(221, 75, 57, 0.14), 0 3px 1px -2px rgba(221, 75, 57, 0.2), 0 1px 5px 0 rgba(221, 75, 57, 0.12)","&:hover,&:focus":{backgroundColor:"#dd4b39",color:"#fff",boxShadow:"0 14px 26px -12px rgba(221, 75, 57, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(221, 75, 57, 0.2)"}},github:{backgroundColor:"#333333",color:"#fff",boxShadow:"0 2px 2px 0 rgba(51, 51, 51, 0.14), 0 3px 1px -2px rgba(51, 51, 51, 0.2), 0 1px 5px 0 rgba(51, 51, 51, 0.12)","&:hover,&:focus":{backgroundColor:"#333333",color:"#fff",boxShadow:"0 14px 26px -12px rgba(51, 51, 51, 0.42), 0 4px 23px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(51, 51, 51, 0.2)"}},simple:{"&,&:focus,&:hover,&:visited":{color:"#FFFFFF",background:"transparent",boxShadow:"none"},"&$primary":{"&,&:focus,&:hover,&:visited":{color:"#9c27b0"}},"&$info":{"&,&:focus,&:hover,&:visited":{color:"#00acc1"}},"&$success":{"&,&:focus,&:hover,&:visited":{color:"#4caf50"}},"&$warning":{"&,&:focus,&:hover,&:visited":{color:"#ff9800"}},"&$rose":{"&,&:focus,&:hover,&:visited":{color:"#e91e63"}},"&$danger":{"&,&:focus,&:hover,&:visited":{color:"#f44336"}},"&$twitter":{"&,&:focus,&:hover,&:visited":{color:"#55acee"}},"&$facebook":{"&,&:focus,&:hover,&:visited":{color:"#3b5998"}},"&$google":{"&,&:focus,&:hover,&:visited":{color:"#dd4b39"}},"&$github":{"&,&:focus,&:hover,&:visited":{color:"#333333"}}},transparent:{"&,&:focus,&:hover,&:visited":{color:"inherit",background:"transparent",boxShadow:"none"}},disabled:{opacity:"0.65",pointerEvents:"none"},lg:{padding:"1.125rem 2.25rem",fontSize:"0.875rem",lineHeight:"1.333333",borderRadius:"0.2rem"},sm:{padding:"0.40625rem 1.25rem",fontSize:"0.6875rem",lineHeight:"1.5",borderRadius:"0.2rem"},round:{borderRadius:"30px"},block:{width:"100% !important"},link:{"&,&:hover,&:focus":{backgroundColor:"transparent",color:"#999999",boxShadow:"none"}},justIcon:{paddingLeft:"12px",paddingRight:"12px",fontSize:"20px",height:"41px",minWidth:"41px",width:"41px","& .fab,& .fas,& .far,& .fal,& svg,& .material-icons":{marginRight:"0px"},"&$lg":{height:"57px",minWidth:"57px",width:"57px",lineHeight:"56px","& .fab,& .fas,& .far,& .fal,& .material-icons":{fontSize:"32px",lineHeight:"56px"},"& svg":{width:"32px",height:"32px"}},"&$sm":{height:"30px",minWidth:"30px",width:"30px","& .fab,& .fas,& .far,& .fal,& .material-icons":{fontSize:"17px",lineHeight:"29px"},"& svg":{width:"17px",height:"17px"}}}});var v=l()(m)((function(e){var t,a=Object.assign({},e),r=a.classes,o=a.color,c=a.round,l=a.children,s=a.fullWidth,p=a.disabled,d=a.simple,u=a.size,b=a.block,f=a.link,x=a.justIcon,g=a.className,m=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(a,["classes","color","round","children","fullWidth","disabled","simple","size","block","link","justIcon","className"]),v=i()(((t={})[r.button]=!0,t[r[u]]=u,t[r[o]]=o,t[r.round]=c,t[r.fullWidth]=s,t[r.disabled]=p,t[r.simple]=d,t[r.block]=b,t[r.link]=f,t[r.justIcon]=x,t[g]=g,t));return n.a.createElement(h,Object.assign({},m,{className:v}),l)})),y=a("aoJa"),w=a("HdOC"),S=a("iJ3l"),k=a("kKAo"),O=a("r9w1"),j=a("f+xD"),E=a("l7+K");t.default=function(e){e.optionsState;var t=e.optionsDispatch,a=e.universeDispatch;return n.a.createElement(k.a,null,n.a.createElement(y.a,{direction:"column",justify:"center",alignItems:"center",alignContent:"center"},n.a.createElement("h4",{align:"center"},"Board Controls"),n.a.createElement(S.default,{isPaused:isPaused,dispatch:t}),n.a.createElement(y.a,{justify:"center",alignItems:"center"},n.a.createElement(w.a,{xs:6,md:6},n.a.createElement(O.a,{fullWidth:!0,id:"outlined-set-cell-size",label:"Cell Size",type:"number",defaultValue:cellSize,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined",onClick:function(e){return t({type:j.a.SET_CELL_SIZE,cellSize:e.target.value})}})),n.a.createElement(w.a,{xs:6,md:6},n.a.createElement(O.a,{fullWidth:!0,id:"outlined-set-cell-spacing",label:"Cell Spacing",type:"number",defaultValue:cellSpacing,InputLabelProps:{shrink:!0},margin:"normal",variant:"outlined",onClick:function(e){return t({type:j.a.SET_CELL_SPACING,cellSpacing:e.target.value})}}))),n.a.createElement(y.a,{justify:"center"},n.a.createElement(w.a,{xs:6},n.a.createElement(v,{fullWidth:!0,variant:"filled",onClick:function(){a({type:E.a.RESET})}},"NEW BOARD")),n.a.createElement(w.a,{xs:6},n.a.createElement(v,{fullWidth:!0,variant:"filled",onClick:function(){a({type:E.a.CLEAR})}},"CLEAR")))))}},PsZd:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),o=a("H2TA"),i=a("aoJa"),c=a("TmSq");t.default=Object(o.a)({cell:{width:function(e){return e.cellSize},height:function(e){return e.cellSize},margin:function(e){return e.cellSpacing},borderRadius:"5px"},aliveCell:{backgroundColor:function(e){return e.aliveColor}},deadCell:{backgroundColor:function(e){return e.deadColor}}})((function(e){for(var t=e.classes,a=e.universe,r=e.universeDispatch,o=[],l=a?a.length:0,s=0;s<l;s++){for(var p=[],d=a[s],u=d?d.length:0,b=0;b<u;b++)p.push(n.a.createElement(c.default,{classes:t,key:[s,b],row:s,col:b,state:d[b],universeDispatch:r}));o.push(n.a.createElement(i.a,{key:s,wrap:"nowrap",justify:"center",alignItems:"center"},p))}return n.a.createElement(i.a,{direction:"column",justify:"center",alignItems:"center",alignContent:"center"},o)}))},TmSq:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),o=a("TSYQ"),i=a.n(o),c=a("l7+K"),l=a("cv56");t.default=function(e){var t=e.classes,a=e.row,r=e.col,o=e.state,s=e.universeDispatch,p="";return void 0!==t&&(p=o===l.a.ALIVE?t.aliveCell:t.deadCell,p=i()(p,t.cell)),n.a.createElement("button",{className:p,onClick:function(){return s({type:c.a.FLIP,row:a,col:r})}})}},UjLN:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),o=a("H2TA");function i(e,t){var a="undefined"!=typeof window?{width:window.innerWidth,height:window.innerHeight}:{width:0,height:0},r=a.width,n=a.height,o=e+2*t;return{numRow:Math.floor(n/o),numCol:Math.floor(r/o)}}var c=a("f+xD"),l=a("l7+K"),s=a("dlF2"),p=a("PsZd"),d=a("iJ3l");t.default=Object(o.a)({root:{overflow:"hidden"},playPauseButton:{position:"absolute",top:10,left:10,opacity:.9},menu:{position:"absolute",top:10,right:10,opacity:.9}})((function(e){var t=e.classes,a=Object(c.b)(),o=a.optionsState,u=a.optionsDispatch,b=function(e,t,a){var n=Object(r.useState)(i(e,t)),o=n[0],c=n[1];return Object(r.useEffect)((function(){c(i(e,t))}),[e,t]),Object(r.useEffect)((function(){if(a){var r=function(){c(i(e,t))};return r(),window.addEventListener("resize",r),function(){return window.removeEventListener("resize",r)}}}),[e,t,a]),o}(o.cellSize,o.cellSpacing,!1),f=b.numRow,x=b.numCol,g=Object(l.b)(f,x,o.initialSpawnRate,o.isPaused),h=g.universeState,m=g.universeDispatch,v=g.generation;return n.a.createElement("div",{className:t.root},n.a.createElement(d.default,{className:t.playPauseButton,isPaused:o.isPaused,dispatch:u}),n.a.createElement(s.default,{className:t.menu,generation:v,optionsState:o,optionsDispatch:u,universeDispatch:m}),n.a.createElement(p.default,{cellSize:o.cellSize,cellSpacing:o.cellSpacing,aliveColor:o.aliveColor,deadColor:o.deadColor,universe:h.universe,universeDispatch:m}))}))},dlF2:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),o=a("XX3T"),i=(a("sc67"),a("wZFJ"),a("q/PY"),a("k1TG")),c=a("aXB2"),l=(a("17x9"),a("i8i4")),s=a.n(l),p=a("iuhU"),d=a("Xt1q"),u=a("H2TA"),b=a("dRu9"),f=a("wpWl"),x=a("tr08"),g=a("4Hym"),h=a("bfFb"),m={entering:{opacity:1},entered:{opacity:1}},v={enter:f.b.enteringScreen,exit:f.b.leavingScreen},y=n.a.forwardRef((function(e,t){var a=e.children,r=e.in,o=e.onEnter,l=e.onExit,s=e.style,p=e.timeout,d=void 0===p?v:p,u=Object(c.a)(e,["children","in","onEnter","onExit","style","timeout"]),f=Object(x.a)(),y=Object(h.a)(a.ref,t);return n.a.createElement(b.a,Object(i.a)({appear:!0,in:r,onEnter:function(e,t){Object(g.b)(e);var a=Object(g.a)({style:s,timeout:d},{mode:"enter"});e.style.webkitTransition=f.transitions.create("opacity",a),e.style.transition=f.transitions.create("opacity",a),o&&o(e,t)},onExit:function(e){var t=Object(g.a)({style:s,timeout:d},{mode:"exit"});e.style.webkitTransition=f.transitions.create("opacity",t),e.style.transition=f.transitions.create("opacity",t),l&&l(e)},timeout:d},u),(function(e,t){return n.a.cloneElement(a,Object(i.a)({style:Object(i.a)({opacity:0,visibility:"exited"!==e||r?void 0:"hidden"},m[e],{},s,{},a.props.style),ref:y},t))}))})),w=n.a.forwardRef((function(e,t){var a=e.children,r=e.classes,o=e.className,l=e.invisible,s=void 0!==l&&l,d=e.open,u=e.transitionDuration,b=Object(c.a)(e,["children","classes","className","invisible","open","transitionDuration"]);return n.a.createElement(y,Object(i.a)({in:d,timeout:u},b),n.a.createElement("div",{className:Object(p.a)(r.root,o,s&&r.invisible),"aria-hidden":!0,ref:t},a))})),S=Object(u.a)({root:{zIndex:-1,position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent",touchAction:"none"},invisible:{backgroundColor:"transparent"}},{name:"MuiBackdrop"})(w),k=(a("HQhv"),a("l3Wi"));function O(e,t){var a=function(e,t){var a,r=t.getBoundingClientRect();if(t.fakeTransform)a=t.fakeTransform;else{var n=window.getComputedStyle(t);a=n.getPropertyValue("-webkit-transform")||n.getPropertyValue("transform")}var o=0,i=0;if(a&&"none"!==a&&"string"==typeof a){var c=a.split("(")[1].split(")")[0].split(",");o=parseInt(c[4],10),i=parseInt(c[5],10)}return"left"===e?"translateX(".concat(window.innerWidth,"px) translateX(-").concat(r.left-o,"px)"):"right"===e?"translateX(-".concat(r.left+r.width-o,"px)"):"up"===e?"translateY(".concat(window.innerHeight,"px) translateY(-").concat(r.top-i,"px)"):"translateY(-".concat(r.top+r.height-i,"px)")}(e,t);a&&(t.style.webkitTransform=a,t.style.transform=a)}var j={enter:f.b.enteringScreen,exit:f.b.leavingScreen},E=n.a.forwardRef((function(e,t){var a=e.children,r=e.direction,o=void 0===r?"down":r,l=e.in,p=e.onEnter,d=e.onEntering,u=e.onExit,f=e.onExited,m=e.style,v=e.timeout,y=void 0===v?j:v,w=Object(c.a)(e,["children","direction","in","onEnter","onEntering","onExit","onExited","style","timeout"]),S=Object(x.a)(),E=n.a.useRef(null),C=n.a.useCallback((function(e){E.current=s.a.findDOMNode(e)}),[]),T=Object(h.a)(a.ref,C),z=Object(h.a)(T,t),R=n.a.useCallback((function(){E.current&&O(o,E.current)}),[o]);return n.a.useEffect((function(){if(!l&&"down"!==o&&"right"!==o){var e=Object(k.a)((function(){E.current&&O(o,E.current)}));return window.addEventListener("resize",e),function(){e.clear(),window.removeEventListener("resize",e)}}}),[o,l]),n.a.useEffect((function(){l||R()}),[l,R]),n.a.createElement(b.a,Object(i.a)({onEnter:function(e,t){var a=E.current;O(o,a),Object(g.b)(a),p&&p(a,t)},onEntering:function(e,t){var a=E.current,r=Object(g.a)({timeout:y,style:m},{mode:"enter"});a.style.webkitTransition=S.transitions.create("-webkit-transform",Object(i.a)({},r,{easing:S.transitions.easing.easeOut})),a.style.transition=S.transitions.create("transform",Object(i.a)({},r,{easing:S.transitions.easing.easeOut})),a.style.webkitTransform="none",a.style.transform="none",d&&d(a,t)},onExit:function(){var e=E.current,t=Object(g.a)({timeout:y,style:m},{mode:"exit"});e.style.webkitTransition=S.transitions.create("-webkit-transform",Object(i.a)({},t,{easing:S.transitions.easing.sharp})),e.style.transition=S.transitions.create("transform",Object(i.a)({},t,{easing:S.transitions.easing.sharp})),O(o,e),u&&u(e)},onExited:function(){var e=E.current;e.style.webkitTransition="",e.style.transition="",f&&f(e)},appear:!0,in:l,timeout:y},w),(function(e,t){return n.a.cloneElement(a,Object(i.a)({ref:z,style:Object(i.a)({visibility:"exited"!==e||l?void 0:"hidden"},m,{},a.props.style)},t))}))})),C=a("kKAo"),T=a("NqtD"),z={left:"right",right:"left",top:"down",bottom:"up"};function R(e){return-1!==["left","right"].indexOf(e)}function P(e,t){return"rtl"===e.direction&&R(t)?z[t]:t}var D={enter:f.b.enteringScreen,exit:f.b.leavingScreen},I=n.a.forwardRef((function(e,t){var a=e.anchor,r=void 0===a?"left":a,o=e.BackdropProps,l=e.children,s=e.classes,u=e.className,b=e.elevation,f=void 0===b?16:b,g=e.ModalProps,h=(g=void 0===g?{}:g).BackdropProps,m=Object(c.a)(g,["BackdropProps"]),v=e.onClose,y=e.open,w=void 0!==y&&y,k=e.PaperProps,O=e.SlideProps,j=e.transitionDuration,R=void 0===j?D:j,I=e.variant,W=void 0===I?"temporary":I,H=Object(c.a)(e,["anchor","BackdropProps","children","classes","className","elevation","ModalProps","onClose","open","PaperProps","SlideProps","transitionDuration","variant"]),L=Object(x.a)(),N=n.a.useRef(!1);n.a.useEffect((function(){N.current=!0}),[]);var A=P(L,r),F=n.a.createElement(C.a,Object(i.a)({elevation:"temporary"===W?f:0,square:!0,className:Object(p.a)(s.paper,s["paperAnchor".concat(Object(T.a)(A))],"temporary"!==W&&s["paperAnchorDocked".concat(Object(T.a)(A))])},k),l);if("permanent"===W)return n.a.createElement("div",Object(i.a)({className:Object(p.a)(s.root,s.docked,u),ref:t},H),F);var B=n.a.createElement(E,Object(i.a)({in:w,direction:z[A],timeout:R,appear:N.current},O),F);return"persistent"===W?n.a.createElement("div",Object(i.a)({className:Object(p.a)(s.root,s.docked,u),ref:t},H),B):n.a.createElement(d.a,Object(i.a)({BackdropProps:Object(i.a)({},o,{},h,{transitionDuration:R}),BackdropComponent:S,className:Object(p.a)(s.root,s.modal,u),open:w,onClose:v,ref:t},H,m),B)})),W=Object(u.a)((function(e){return{root:{},docked:{flex:"0 0 auto"},paper:{overflowY:"auto",display:"flex",flexDirection:"column",height:"100%",flex:"1 0 auto",zIndex:e.zIndex.drawer,WebkitOverflowScrolling:"touch",position:"fixed",top:0,outline:0},paperAnchorLeft:{left:0,right:"auto"},paperAnchorRight:{left:"auto",right:0},paperAnchorTop:{top:0,left:0,bottom:"auto",right:0,height:"auto",maxHeight:"100%"},paperAnchorBottom:{top:"auto",left:0,bottom:0,right:0,height:"auto",maxHeight:"100%"},paperAnchorDockedLeft:{borderRight:"1px solid ".concat(e.palette.divider)},paperAnchorDockedTop:{borderBottom:"1px solid ".concat(e.palette.divider)},paperAnchorDockedRight:{borderLeft:"1px solid ".concat(e.palette.divider)},paperAnchorDockedBottom:{borderTop:"1px solid ".concat(e.palette.divider)},modal:{}}}),{name:"MuiDrawer",flip:!1})(I),H=a("Ovef"),L=a("Bf0q"),N=a("FqMR"),A=n.a.forwardRef((function(e,t){var a=e.anchor,r=e.classes,o=e.className,l=e.width,s=Object(c.a)(e,["anchor","classes","className","width"]);return n.a.createElement("div",Object(i.a)({className:Object(p.a)(r.root,r["anchor".concat(Object(T.a)(a))],o),ref:t,style:Object(N.a)({},R(a)?"width":"height",l)},s))})),F=Object(u.a)((function(e){return{root:{position:"fixed",top:0,left:0,bottom:0,zIndex:e.zIndex.drawer-1},anchorLeft:{right:"auto"},anchorRight:{left:"auto",right:0},anchorTop:{bottom:"auto",right:0},anchorBottom:{top:"auto",bottom:0,right:0}}}),{name:"PrivateSwipeArea"})(A),B=null;function M(e,t){return"right"===e?document.body.offsetWidth-t[0].pageX:t[0].pageX}function V(e,t){return"bottom"===e?window.innerHeight-t[0].clientY:t[0].clientY}function $(e,t){return e?t.clientWidth:t.clientHeight}function Y(e,t,a,r){return Math.min(Math.max(a?t-e:r+t-e,0),r)}var X="undefined"!=typeof navigator&&/iPad|iPhone|iPod/.test(navigator.userAgent),q={enter:f.b.enteringScreen,exit:f.b.leavingScreen},K="undefined"!=typeof window?n.a.useLayoutEffect:n.a.useEffect,G=n.a.forwardRef((function(e,t){var a=e.anchor,r=void 0===a?"left":a,o=e.disableBackdropTransition,l=void 0!==o&&o,p=e.disableDiscovery,d=void 0!==p&&p,u=e.disableSwipeToOpen,b=void 0===u?X:u,f=e.hideBackdrop,h=e.hysteresis,m=void 0===h?.52:h,v=e.minFlingVelocity,y=void 0===v?450:v,w=e.ModalProps,S=(w=void 0===w?{}:w).BackdropProps,k=Object(c.a)(w,["BackdropProps"]),O=e.onClose,j=e.onOpen,E=e.open,C=e.PaperProps,T=void 0===C?{}:C,z=e.SwipeAreaProps,D=e.swipeAreaWidth,I=void 0===D?20:D,N=e.transitionDuration,A=void 0===N?q:N,G=e.variant,J=void 0===G?"temporary":G,_=Object(c.a)(e,["anchor","disableBackdropTransition","disableDiscovery","disableSwipeToOpen","hideBackdrop","hysteresis","minFlingVelocity","ModalProps","onClose","onOpen","open","PaperProps","SwipeAreaProps","swipeAreaWidth","transitionDuration","variant"]),Q=Object(x.a)(),Z=n.a.useState(!1),U=Z[0],ee=Z[1],te=n.a.useRef({isSwiping:null}),ae=n.a.useRef(),re=n.a.useRef(),ne=n.a.useRef(),oe=n.a.useRef(!1),ie=n.a.useRef();K((function(){ie.current=null}),[E]);var ce=n.a.useCallback((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.mode,n=void 0===a?null:a,o=t.changeTransition,i=void 0===o||o,c=P(Q,r),s=-1!==["right","bottom"].indexOf(c)?1:-1,p=R(r),d=p?"translate(".concat(s*e,"px, 0)"):"translate(0, ".concat(s*e,"px)"),u=ne.current.style;u.webkitTransform=d,u.transform=d;var b="";if(n&&(b=Q.transitions.create("all",Object(g.a)({timeout:A},{mode:n}))),i&&(u.webkitTransition=b,u.transition=b),!l&&!f){var x=re.current.style;x.opacity=1-e/$(p,ne.current),i&&(x.webkitTransition=b,x.transition=b)}}),[r,l,f,Q,A]),le=Object(H.a)((function(e){if(oe.current)if(B=null,oe.current=!1,ee(!1),te.current.isSwiping){te.current.isSwiping=null;var t,a=P(Q,r),n=R(r);t=n?M(a,e.changedTouches):V(a,e.changedTouches);var o=n?te.current.startX:te.current.startY,i=$(n,ne.current),c=Y(t,o,E,i),l=c/i;Math.abs(te.current.velocity)>y&&(ie.current=1e3*Math.abs((i-c)/te.current.velocity)),E?te.current.velocity>y||l>m?O():ce(0,{mode:"exit"}):te.current.velocity<-y||1-l>m?j():ce($(n,ne.current),{mode:"enter"})}else te.current.isSwiping=null})),se=Object(H.a)((function(e){if(ne.current&&oe.current&&(null==B||B===te.current)){var t=P(Q,r),a=R(r),n=M(t,e.touches),o=V(t,e.touches);if(E&&ne.current.contains(e.target)&&null==B){var i=function(e){var t=e.domTreeShapes,a=e.start,r=e.current,n=e.anchor,o={x:"scrollLeft",y:"scrollTop"},i={x:"scrollWidth",y:"scrollHeight"},c={x:"clientWidth",y:"clientHeight"};return t.some((function(e){var t=r>=a;"top"!==n&&"left"!==n||(t=!t);var l="left"===n||"right"===n?"x":"y",s=e[o[l]],p=s>0,d=s+e[c[l]]<e[i[l]];return t&&d||!t&&p?e:null}))}({domTreeShapes:function(e,t){for(var a=[];e&&e!==t;){var r=window.getComputedStyle(e);"absolute"===r.getPropertyValue("position")||"hidden"===r.getPropertyValue("overflow-x")?a=[]:(e.clientWidth>0&&e.scrollWidth>e.clientWidth||e.clientHeight>0&&e.scrollHeight>e.clientHeight)&&a.push(e),e=e.parentElement}return a}(e.target,ne.current),start:a?te.current.startX:te.current.startY,current:a?n:o,anchor:r});if(i)return void(B=i);B=te.current}if(null==te.current.isSwiping){var c=Math.abs(n-te.current.startX),l=Math.abs(o-te.current.startY);c>l&&e.cancelable&&e.preventDefault();var s=a?c>l&&c>3:l>c&&l>3;if(!0===s||(a?l>3:c>3)){if(te.current.isSwiping=s,!s)return void le(e);te.current.startX=n,te.current.startY=o,d||E||(a?te.current.startX-=I:te.current.startY-=I)}}if(te.current.isSwiping){var p=$(a,ne.current),u=a?te.current.startX:te.current.startY;E&&!te.current.paperHit&&(u=Math.min(u,p));var b=Y(a?n:o,u,E,p);if(E)if(te.current.paperHit)0===b&&(te.current.startX=n,te.current.startY=o);else{if(!(a?n<p:o<p))return;te.current.paperHit=!0,te.current.startX=n,te.current.startY=o}null===te.current.lastTranslate&&(te.current.lastTranslate=b,te.current.lastTime=performance.now()+1);var f=(b-te.current.lastTranslate)/(performance.now()-te.current.lastTime)*1e3;te.current.velocity=.4*te.current.velocity+.6*f,te.current.lastTranslate=b,te.current.lastTime=performance.now(),e.cancelable&&e.preventDefault(),ce(b)}}})),pe=Object(H.a)((function(e){if(!e.defaultPrevented&&!e.muiHandled&&(!E||re.current.contains(e.target)||ne.current.contains(e.target))){var t=P(Q,r),a=R(r),n=M(t,e.touches),o=V(t,e.touches);if(!E){if(b||e.target!==ae.current)return;if(a){if(n>I)return}else if(o>I)return}e.muiHandled=!0,B=null,te.current.startX=n,te.current.startY=o,ee(!0),!E&&ne.current&&ce($(a,ne.current)+(d?20:-I),{changeTransition:!1}),te.current.velocity=0,te.current.lastTime=null,te.current.lastTranslate=null,te.current.paperHit=!1,oe.current=!0}}));n.a.useEffect((function(){if("temporary"===J)return document.body.addEventListener("touchstart",pe),document.body.addEventListener("touchmove",se,{passive:!1}),document.body.addEventListener("touchend",le),function(){document.body.removeEventListener("touchstart",pe),document.body.removeEventListener("touchmove",se,{passive:!1}),document.body.removeEventListener("touchend",le)}}),[J,pe,se,le]),n.a.useEffect((function(){return function(){B===te.current&&(B=null)}}),[]),n.a.useEffect((function(){E||ee(!1)}),[E]);var de=n.a.useCallback((function(e){re.current=s.a.findDOMNode(e)}),[]),ue=n.a.useCallback((function(e){ne.current=s.a.findDOMNode(e)}),[]);return n.a.createElement(n.a.Fragment,null,n.a.createElement(W,Object(i.a)({open:!("temporary"!==J||!U)||E,variant:J,ModalProps:Object(i.a)({BackdropProps:Object(i.a)({},S,{ref:de})},k),PaperProps:Object(i.a)({},T,{style:Object(i.a)({pointerEvents:"temporary"!==J||E?"":"none"},T.style),ref:ue}),anchor:r,transitionDuration:ie.current||A,onClose:O,ref:t},_)),!b&&"temporary"===J&&n.a.createElement(L.a,null,n.a.createElement(F,Object(i.a)({anchor:r,ref:ae,width:I},z))))})),J=a("uniG"),_=a.n(J),Q=a("aoJa"),Z=a("HdOC"),U=a("9Qal"),ee=a("DKKV");t.default=function(e){var t=e.className,a=e.generation,i=e.optionsState,c=e.optionsDispatch,l=e.universeDispatch,s=Object(r.useState)(!1),p=s[0],d=s[1],u=function(e){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&d(e)}};return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:t},n.a.createElement(o.a,{size:"small",onClick:u(!0)},n.a.createElement(_.a,null))),n.a.createElement(G,{anchor:"bottom",open:p,onClose:u(!1),onOpen:u(!0)},n.a.createElement("h3",{align:"center"},"Generation: ",a),n.a.createElement(Q.a,{justify:"center"},n.a.createElement(Z.a,{xs:12,sm:6,container:!0,justify:"center"},n.a.createElement(ee.default,{optionsState:i,optionsDispatch:c,universeDispatch:l})),n.a.createElement(Z.a,{xs:12,sm:6,container:!0,justify:"center"},n.a.createElement(U.default,{optionsState:i,optionsDispatch:c})))))}},"q/PY":function(e,t,a){"use strict";a("t+fG")("anchor",(function(e){return function(t){return e(this,"a","name",t)}}))},uniG:function(e,t,a){"use strict";a("R48M");var r=a("5NKs");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("q1tI")),o=(0,r(a("8/g6")).default)(n.default.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}),"Menu");t.default=o}}]);
//# sourceMappingURL=component---src-pages-game-of-life-page-game-of-life-jsx-f6036c1a854cbec79ed1.js.map