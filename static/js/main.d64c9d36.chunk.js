(this.webpackJsonpmobile_ui=this.webpackJsonpmobile_ui||[]).push([[0],{59:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);n(52);var a=n(0),c=n.n(a),i=n(27),s=n.n(i),r=n(46),l=n(6),j=n(25),u=n(69),x=n(70),d=n(37),h=n(38),b=function(){function e(){Object(d.a)(this,e),this.queue=[]}return Object(h.a)(e,[{key:"enqueue",value:function(e){this.queue.push(e)}},{key:"dequeue",value:function(){var e=this.queue.find((function(e){return!0}));return this.queue.shift(),e}},{key:"solve",value:function(){var e=parseInt(this.dequeue()),t=this.dequeue(),n=parseInt(this.dequeue());switch(t){case"x":return e*n;case"-":return e-n;case"/":return e/n;case"+":return e+n;default:return Number.NaN}}},{key:"print",value:function(){var e="";return this.queue.forEach((function(t){e=e+t+" "})),e.trim()}},{key:"size",value:function(){return this.queue.length}}]),e}(),p=n(49),o=n(67),O=n(1),g=function(e){var t=e.size,n=void 0===t?"large":t,a=e.text,c=e.style,i=e.value,s=e.type,r=void 0===s?"primary":s,l=e.handleClick,j=void 0===l?function(){return console.log("you clicked me")}:l,u=!!a;return Object(O.jsx)(o.a,{onClick:j,size:n,style:Object(p.a)({},c),shape:"round",type:r,value:i,children:u&&a})},f=new b,v={main:{width:"500px",height:"566px",background:"rgba(0,0,0,.05)"},topPad:{width:"100%",height:"16px"},screen:{height:"200px",marginTop:"16px",marginLeft:"16px",marginRight:"16px",background:"rgba(0,0,0,.1)",borderRadius:"5px"},numbers:{height:"300px",marginTop:"32px",background:"rgba(0,0,0,.1)",borderRadius:"5px"},operators:{height:"300px",marginTop:"32px",background:"rgba(0,0,0,.1)",borderRadius:"5px"},numberRow:{padding:"24px"},operatorRow:{paddingTop:"24px"},insideScreen:{height:"166px",marginLeft:"16px",marginRight:"16px",marginTop:"10px",background:"rgba(0,0,0,.2)",borderRadius:"5px",display:"flex",justifyContent:"flex-end",alignItems:"flex-end",paddingRight:"16px",fontSize:"32px",flexDirection:"column"}},k=function(){var e=Object(a.useState)("0"),t=Object(j.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(" "),s=Object(j.a)(i,2),r=s[0],l=s[1],d=Object(a.useState)(" "),h=Object(j.a)(d,2),b=h[0],p=h[1],o=Object(a.useState)(!1),k=Object(j.a)(o,2),y=k[0],m=k[1],C=function(e){var t=e.target.value,a=n.replace(/\s/g,"");switch(t){case"x":case"-":case"/":case"+":f.enqueue(n),f.enqueue(t),l(f.print()),c("0");break;case"=":m(!0),f.enqueue(n);var i=f.print(),s=f.solve();l(i+" = "+s),c("0");break;default:if(a.length>=9)return;"0"===n?y?(p(r),c(t),l(t),m(!1)):r.length>1?(c(t),l(r+" "+t)):(c(t),l(t)):(c(n+t),l(r+t))}};return Object(O.jsxs)(u.a,{justify:"center",align:"middle",children:[Object(O.jsx)(x.a,{style:v.topPad}),Object(O.jsxs)(x.a,{style:v.main,children:[Object(O.jsxs)(u.a,{style:v.screen,children:[Object(O.jsx)(x.a,{offset:1,span:1,style:{alignSelf:"center"},children:Object(O.jsx)(g,{handleClick:function(){c("0"),l(" "),p(" "),m(!1)},text:"Clear"})}),Object(O.jsx)(x.a,{offset:4,span:18,style:{alignSelf:"flex-end",paddingBottom:"16px"},children:Object(O.jsxs)("div",{style:v.insideScreen,children:[Object(O.jsx)("div",{children:b}),Object(O.jsx)("div",{children:r}),Object(O.jsx)("div",{children:n})]})})]}),Object(O.jsxs)(u.a,{style:{marginRight:"16px",marginLeft:"16px"},children:[Object(O.jsx)(x.a,{offset:0,span:16,style:v.numbers,children:Object(O.jsxs)(u.a,{gutter:[16,32],style:v.numberRow,children:[Object(O.jsx)(x.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"7",value:"7"})}),Object(O.jsx)(x.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"8",value:"8"})}),Object(O.jsx)(x.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"9",value:"9"})}),Object(O.jsx)(x.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"4",value:"4"})}),Object(O.jsx)(x.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"5",value:"5"})}),Object(O.jsx)(x.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"6",value:"6"})}),Object(O.jsx)(x.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"1",value:"1"})}),Object(O.jsx)(x.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"2",value:"2"})}),Object(O.jsx)(x.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"3",value:"3"})}),Object(O.jsx)(x.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"0",value:"0"})}),Object(O.jsx)(x.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:".",value:"."})}),Object(O.jsx)(x.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"=",value:"="})})]})}),Object(O.jsx)(x.a,{push:2,span:6,style:v.operators,children:Object(O.jsxs)(u.a,{gutter:[64,32],style:v.operatorRow,justify:"center",align:"middle",children:[Object(O.jsx)(x.a,{span:24,style:{textAlign:"center"},children:Object(O.jsx)(g,{handleClick:C,text:"/",value:"/"})}),Object(O.jsx)(x.a,{span:24,style:{textAlign:"center"},children:Object(O.jsx)(g,{handleClick:C,text:"x",value:"x"})}),Object(O.jsx)(x.a,{span:24,style:{textAlign:"center"},children:Object(O.jsx)(g,{handleClick:C,text:"-",value:"-"})}),Object(O.jsx)(x.a,{span:24,style:{textAlign:"center"},children:Object(O.jsx)(g,{handleClick:C,text:"+",value:"+"})})]})})]})]})]})};n(59);var y=function(e){return Object(O.jsx)(r.a,{children:Object(O.jsx)("div",{children:Object(O.jsx)(l.c,{children:Object(O.jsx)(l.a,{path:"/",children:Object(O.jsx)(k,{})})})})})};n(64);s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.d64c9d36.chunk.js.map