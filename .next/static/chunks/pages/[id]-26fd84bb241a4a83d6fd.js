_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{"4vhL":function(e,t,a){"use strict";a.r(t);var o=a("o0o1"),n=a.n(o),r=a("HaE+"),i=a("nKUr"),l=a("q1tI"),c=a("Z4Yb"),s=a.n(c),d=a("Z3vd"),u=a("nOHt"),p=a("FrwU"),b=a.n(p),h=a("YFqc"),m=a.n(h),_=function(e){var t=e.user,a=Object(u.useRouter)(),o=Object(l.useState)(!1),c=o[0],p=o[1],h=function(){p(!c)};Object(l.useEffect)((function(){c&&f()}),[c]);var _=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:s.a.userInfoId,children:[Object(i.jsx)("b",{children:Object(i.jsx)("label",{children:"Id"})}),t._id]}),Object(i.jsx)("br",{}),Object(i.jsxs)("div",{className:s.a.userInfo,children:[Object(i.jsx)("b",{children:Object(i.jsx)("label",{children:"Email"})}),Object(i.jsx)("label",{children:t.email}),Object(i.jsx)("br",{}),Object(i.jsx)("b",{children:Object(i.jsx)("label",{children:"Full Name"})}),Object(i.jsxs)("label",{children:[t.firstName,"\xa0",t.lastName]}),Object(i.jsx)("br",{}),Object(i.jsx)("b",{children:Object(i.jsx)("label",{children:"Birth Date"})})," ",Object(i.jsx)("label",{children:t.date}),Object(i.jsx)("br",{}),Object(i.jsx)("b",{children:Object(i.jsx)("label",{children:"City"})}),Object(i.jsx)("label",{children:t.city}),Object(i.jsx)("br",{}),Object(i.jsx)("b",{children:Object(i.jsx)("label",{children:"Address"})}),Object(i.jsx)("label",{children:t.address}),Object(i.jsx)("br",{}),Object(i.jsx)(d.a,{style:{fontSize:13},startIcon:Object(i.jsx)(b.a,{}),variant:"contained",color:"secondary",onClick:h,children:"Delete"})]}),Object(i.jsx)("div",{className:s.a.backToHome,style:{marginTop:15},children:Object(i.jsx)(m.a,{href:"/",children:Object(i.jsx)("a",{style:{marginLeft:25},children:"\u2190 Back to home"})})})]})},f=function(){var e=Object(r.a)(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.query.id,e.prev=1,e.next=4,fetch("http://localhost:3000/api/users/".concat(t),{method:"DELETE"});case 4:e.sent,a.push("/Users"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("Error:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return c?Object(i.jsx)(i.Fragment,{}):t?Object(i.jsx)(_,{}):Object(i.jsx)(i.Fragment,{children:"User is falsy"})};t.default=_,_.getInitialProps=function(){var e=Object(r.a)(n.a.mark((function e(t){var a,o,r,i;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.query.id,e.next=3,fetch("http://localhost:3000/api/users/".concat(a));case 3:return o=e.sent,e.next=6,o.json();case 6:return r=e.sent,i=r.data,e.abrupt("return",{user:i});case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},"8/g6":function(e,t,a){"use strict";var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=r.default.memo(r.default.forwardRef((function(t,a){return r.default.createElement(i.default,(0,n.default)({ref:a},t),e)})));0;return a.muiName=i.default.muiName,a};var n=o(a("pVnL")),r=o(a("q1tI")),i=o(a("UJJ5"))},FrwU:function(e,t,a){"use strict";var o=a("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a("q1tI")),r=(0,o(a("8/g6")).default)(n.default.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=r},"HaE+":function(e,t,a){"use strict";function o(e,t,a,o,n,r,i){try{var l=e[r](i),c=l.value}catch(s){return void a(s)}l.done?t(c):Promise.resolve(c).then(o,n)}function n(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var i=e.apply(t,a);function l(e){o(i,n,r,l,c,"next",e)}function c(e){o(i,n,r,l,c,"throw",e)}l(void 0)}))}}a.d(t,"a",(function(){return n}))},TqRt:function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},UJJ5:function(e,t,a){"use strict";a.r(t);var o=a("HR5l");a.d(t,"default",(function(){return o.a}))},Z3vd:function(e,t,a){"use strict";var o=a("Ff2n"),n=a("wx14"),r=a("q1tI"),i=(a("17x9"),a("iuhU")),l=a("H2TA"),c=a("ye/S"),s=a("VD++"),d=a("NqtD"),u=r.forwardRef((function(e,t){var a=e.children,l=e.classes,c=e.className,u=e.color,p=void 0===u?"default":u,b=e.component,h=void 0===b?"button":b,m=e.disabled,_=void 0!==m&&m,f=e.disableElevation,x=void 0!==f&&f,g=e.disableFocusRipple,j=void 0!==g&&g,v=e.endIcon,y=e.focusVisibleClassName,O=e.fullWidth,S=void 0!==O&&O,w=e.size,k=void 0===w?"medium":w,C=e.startIcon,z=e.type,I=void 0===z?"button":z,E=e.variant,N=void 0===E?"text":E,R=Object(o.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),L=C&&r.createElement("span",{className:Object(i.a)(l.startIcon,l["iconSize".concat(Object(d.a)(k))])},C),T=v&&r.createElement("span",{className:Object(i.a)(l.endIcon,l["iconSize".concat(Object(d.a)(k))])},v);return r.createElement(s.a,Object(n.a)({className:Object(i.a)(l.root,l[N],c,"inherit"===p?l.colorInherit:"default"!==p&&l["".concat(N).concat(Object(d.a)(p))],"medium"!==k&&[l["".concat(N,"Size").concat(Object(d.a)(k))],l["size".concat(Object(d.a)(k))]],x&&l.disableElevation,_&&l.disabled,S&&l.fullWidth),component:h,disabled:_,focusRipple:!j,focusVisibleClassName:Object(i.a)(l.focusVisible,y),ref:t,type:I},R),r.createElement("span",{className:l.label},L,a,T))}));t.a=Object(l.a)((function(e){return{root:Object(n.a)({},e.typography.button,{boxSizing:"border-box",minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,color:e.palette.text.primary,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(c.b)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"},"&$disabled":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(c.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(c.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(c.b)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(c.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(c.b)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(c.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]},"&$disabled":{backgroundColor:e.palette.action.disabledBackground}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(u)},Z4Yb:function(e,t,a){e.exports={heading2Xl:"utils_heading2Xl__1I65m",headingXl:"utils_headingXl__1XecN",headingLgB:"utils_headingLgB__2tB34",headingLg:"utils_headingLg__de7p0",headingMd:"utils_headingMd__3de6G",headingSm:"utils_headingSm__3LFjQ",headingXs:"utils_headingXs__zEz4R",borderCircle:"utils_borderCircle__13qdJ",colorName:"utils_colorName__3_TUk",colorInherit:"utils_colorInherit__3Gudf",padding1px:"utils_padding1px__oCny8",list:"utils_list__S7_pe",listItem:"utils_listItem__2eJpJ",linkEmail:"utils_linkEmail__1RFAP",link:"utils_link__Sf0UQ",lightText:"utils_lightText__12Ckm",AppBar:"utils_AppBar__1evVj",search:"utils_search__ORpAk",follow:"utils_follow__Ld8Pw",intro:"utils_intro__7q285",blogContainer:"utils_blogContainer__hILj_",poppins:"utils_poppins__G_hls",container:"utils_container__2HOfz",main:"utils_main__1GYxf",userInfo:"utils_userInfo__37frC",userInfoId:"utils_userInfoId__1gs44",footer:"utils_footer__3d3Eo",title:"utils_title__2w2XK",description:"utils_description__17znU",code:"utils_code__2OtYp",grid:"utils_grid__MFe-L",card:"utils_card__2Nj6o",logo:"utils_logo__ZOFj-"}},baBx:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return a("4vhL")}])},o0o1:function(e,t,a){e.exports=a("ls82")},pVnL:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},a.apply(this,arguments)}e.exports=a}},[["baBx",0,1,2,3]]]);