(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{122:function(e,n,r){"use strict";r.d(n,{Z:function(){return w}});var t=r(3366),o=r(7462),i=r(7294),a=(r(5697),r(6010)),s=r(7192),l=r(4844),u=r(1796),c=r(8216),d=r(1496),m=r(7623),p=r(8791),h=r(1705),x=r(5861),f=r(8979);function g(e){return(0,f.Z)("MuiLink",e)}var v=(0,r(6087).Z)("MuiLink",["root","underlineNone","underlineHover","underlineAlways","button","focusVisible"]),y=r(5893);const Z=["className","color","component","onBlur","onFocus","TypographyClasses","underline","variant"],b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},j=(0,d.ZP)(x.Z,{name:"MuiLink",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:r}=e;return[n.root,n[`underline${(0,c.Z)(r.underline)}`],"button"===r.component&&n.button]}})((({theme:e,ownerState:n})=>{const r=(0,l.D)(e,`palette.${(e=>b[e]||e)(n.color)}`)||n.color;return(0,o.Z)({},"none"===n.underline&&{textDecoration:"none"},"hover"===n.underline&&{textDecoration:"none","&:hover":{textDecoration:"underline"}},"always"===n.underline&&{textDecoration:"underline",textDecorationColor:"inherit"!==r?(0,u.Fq)(r,.4):void 0,"&:hover":{textDecorationColor:"inherit"}},"button"===n.component&&{position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none","&::-moz-focus-inner":{borderStyle:"none"},[`&.${v.focusVisible}`]:{outline:"auto"}})}));var w=i.forwardRef((function(e,n){const r=(0,m.Z)({props:e,name:"MuiLink"}),{className:l,color:u="primary",component:d="a",onBlur:x,onFocus:f,TypographyClasses:v,underline:b="always",variant:w="inherit"}=r,S=(0,t.Z)(r,Z),{isFocusVisibleRef:F,onBlur:_,onFocus:k,ref:C}=(0,p.Z)(),[N,D]=i.useState(!1),E=(0,h.Z)(n,C),I=(0,o.Z)({},r,{color:u,component:d,focusVisible:N,underline:b,variant:w}),W=(e=>{const{classes:n,component:r,focusVisible:t,underline:o}=e,i={root:["root",`underline${(0,c.Z)(o)}`,"button"===r&&"button",t&&"focusVisible"]};return(0,s.Z)(i,g,n)})(I);return(0,y.jsx)(j,(0,o.Z)({className:(0,a.Z)(W.root,l),classes:v,color:u,component:d,onBlur:e=>{_(e),!1===F.current&&D(!1),x&&x(e)},onFocus:e=>{k(e),!0===F.current&&D(!0),f&&f(e)},ref:E,ownerState:I,variant:w},S))}))},7156:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(3850)}])},3850:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return f}});var t=r(5893),o=r(9008),i=r(7294),a=r(7948),s=r(7357),l=r(5861),u=r(6614),c=r(4257),d=r(122),m=r(1664),p=r(1163),h=r(2088),x=function(){var e=(0,i.useState)(""),n=e[0],r=e[1],o=(0,i.useState)(""),x=o[0],f=o[1],g=(0,p.useRouter)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.Z,{maxWidth:"sm",children:(0,t.jsxs)("form",{children:[(0,t.jsxs)(s.Z,{sx:{my:3},children:[(0,t.jsx)("center",{children:(0,t.jsx)("img",{style:{width:"50%",marginBottom:"20px"},src:"https://res.cloudinary.com/dx9dnqzaj/image/upload/v1638719652/fileuploadproject3d/logo_wwfypc-removebg-preview_a39t4q.png",alt:"Logo"})}),(0,t.jsx)(l.Z,{color:"textPrimary",variant:"h4",children:"Sign in"}),(0,t.jsx)(l.Z,{color:"textSecondary",gutterBottom:!0,variant:"body2",children:"Sign in on the internal platform"})]}),(0,t.jsx)(s.Z,{sx:{pb:1}}),(0,t.jsx)("h4",{style:{marginTop:"1rem"},children:"Email address"}),(0,t.jsx)(u.Z,{fullWidth:!0,margin:"normal",name:"email",onChange:function(e){return r(e.target.value)},type:"email",variant:"outlined"}),(0,t.jsx)("h4",{style:{marginTop:"1rem"},children:"Password"}),(0,t.jsx)(u.Z,{fullWidth:!0,margin:"normal",name:"password",type:"password",onChange:function(e){return f(e.target.value)},variant:"outlined"}),(0,t.jsx)(s.Z,{sx:{py:2},children:(0,t.jsx)(c.Z,{color:"primary",fullWidth:!0,size:"large",onClick:function(e){e.preventDefault(),h.I8.signInWithEmailAndPassword(n,x).then((function(){h.I8.onAuthStateChanged((function(e){e?(sessionStorage.setItem("userId",e.uid),sessionStorage.setItem("userEmail",e.email),g.push({pathname:"/"})):setMessage("We have send a Verification Link on your Email Address")}))})).catch((function(e){var n=e.message;setMessage(n)}))},type:"button",variant:"contained",children:"Sign In Now"})}),(0,t.jsxs)(l.Z,{color:"textSecondary",variant:"body2",children:["Don't have an account?"," ",(0,t.jsx)(m.default,{href:"/register",children:(0,t.jsx)(d.Z,{to:"/register",variant:"subtitle2",underline:"hover",sx:{cursor:"pointer",color:"#FFFFFF"},children:"Sign Up"})})]})]})})})},f=function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.default,{children:(0,t.jsx)("title",{children:"Steamlab | Login"})}),(0,t.jsx)(s.Z,{component:"main",sx:{alignItems:"center",display:"flex",flexGrow:1,minHeight:"100%",mt:8},children:(0,t.jsx)(x,{})})]})}},9008:function(e,n,r){e.exports=r(5443)}},function(e){e.O(0,[614,774,888,179],(function(){return n=7156,e(e.s=n);var n}));var n=e.O();_N_E=n}]);