(this.webpackJsonpmobile_ui=this.webpackJsonpmobile_ui||[]).push([[0],{59:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);n(52);var a=n(0),c=n.n(a),s=n(27),i=n.n(s),r=n(46),l=n(6),j=n(25),u=n(69),d=n(70),x=n(37),h=n(38),b=function(){function e(){Object(x.a)(this,e),this.queue=[]}return Object(h.a)(e,[{key:"enqueue",value:function(e){this.queue.push(e)}},{key:"dequeue",value:function(){var e=this.queue.find((function(e){return!0}));return this.queue.shift(),e}},{key:"solve",value:function(){var e=parseInt(this.dequeue()),t=this.dequeue(),n=parseInt(this.dequeue());switch(t){case"x":return e*n;case"-":return e-n;case"/":return e/n;case"+":return e+n;default:return Number.NaN}}},{key:"print",value:function(){var e="";return this.queue.forEach((function(t){e=e+t+" "})),e.trim()}},{key:"size",value:function(){return this.queue.length}}]),e}(),p=n(49),o=n(67),O=n(1),g=function(e){var t=e.size,n=void 0===t?"large":t,a=e.text,c=e.style,s=e.value,i=e.type,r=void 0===i?"primary":i,l=e.handleClick,j=void 0===l?function(){return console.log("you clicked me")}:l,u=!!a;return Object(O.jsx)(o.a,{onClick:j,size:n,style:Object(p.a)({},c),shape:"round",type:r,value:s,children:u&&a})},f=new b,v={main:{width:"500px",height:"666px",background:"rgba(0,0,0,.05)"},topPad:{width:"100%",height:"32px"},screen:{height:"200px",marginTop:"16px",marginLeft:"16px",marginRight:"16px",background:"rgba(0,0,0,.1)",borderRadius:"5px"},numbers:{height:"400px",marginTop:"32px",background:"rgba(0,0,0,.1)",borderRadius:"5px"},operators:{height:"400px",marginTop:"32px",background:"rgba(0,0,0,.1)",borderRadius:"5px"},numberRow:{padding:"24px"},operatorRow:{paddingTop:"24px",paddingLeft:"38px"},insideScreen:{height:"166px",marginLeft:"16px",marginRight:"16px",marginTop:"10px",background:"rgba(0,0,0,.2)",borderRadius:"5px",display:"flex",justifyContent:"flex-end",alignItems:"flex-end",paddingRight:"16px",fontSize:"32px",flexDirection:"column"}},k=function(){var e=Object(a.useState)("0"),t=Object(j.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(" "),i=Object(j.a)(s,2),r=i[0],l=i[1],x=Object(a.useState)(" "),h=Object(j.a)(x,2),b=h[0],p=h[1],o=Object(a.useState)(!1),k=Object(j.a)(o,2),m=k[0],y=k[1],C=function(e){var t=e.target.value,a=n.replace(/\s/g,"");switch(t){case"x":case"-":case"/":case"+":f.enqueue(n),f.enqueue(t),l(f.print()),c("0");break;case"=":y(!0),f.enqueue(n);var s=f.print(),i=f.solve();l(s+" = "+i),c("0");break;default:if(a.length>=9)return;"0"===n?m?(p(r),c(t),l(t),y(!1)):r.length>1?(c(t),l(r+" "+t)):(c(t),l(t)):(c(n+t),l(r+t))}};return Object(O.jsxs)(u.a,{justify:"center",align:"middle",children:[Object(O.jsx)(d.a,{style:v.topPad}),Object(O.jsxs)(d.a,{style:v.main,children:[Object(O.jsxs)(u.a,{style:v.screen,children:[Object(O.jsx)(d.a,{offset:1,span:1,style:{alignSelf:"center"},children:Object(O.jsx)(g,{handleClick:function(){c("0"),l(" "),p(" "),y(!1)},text:"Clear"})}),Object(O.jsx)(d.a,{offset:4,span:18,style:{alignSelf:"flex-end",paddingBottom:"16px"},children:Object(O.jsxs)("div",{style:v.insideScreen,children:[Object(O.jsx)("div",{children:b}),Object(O.jsx)("div",{children:r}),Object(O.jsx)("div",{children:n})]})})]}),Object(O.jsxs)(u.a,{children:[Object(O.jsx)(d.a,{offset:1,span:15,style:v.numbers,children:Object(O.jsxs)(u.a,{gutter:[40,64],style:v.numberRow,children:[Object(O.jsx)(d.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"7",value:"7"})}),Object(O.jsx)(d.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"8",value:"8"})}),Object(O.jsx)(d.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"9",value:"9"})}),Object(O.jsx)(d.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"4",value:"4"})}),Object(O.jsx)(d.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"5",value:"5"})}),Object(O.jsx)(d.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"6",value:"6"})}),Object(O.jsx)(d.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"1",value:"1"})}),Object(O.jsx)(d.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"2",value:"2"})}),Object(O.jsx)(d.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"3",value:"3"})}),Object(O.jsx)(d.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"0",value:"0"})}),Object(O.jsx)(d.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:".",value:"."})}),Object(O.jsx)(d.a,{span:8,children:Object(O.jsx)(g,{handleClick:C,text:"=",value:"="})})]})}),Object(O.jsx)(d.a,{offset:1,span:6,style:v.operators,children:Object(O.jsxs)(u.a,{gutter:[40,64],style:v.operatorRow,children:[Object(O.jsx)(d.a,{span:24,children:Object(O.jsx)(g,{handleClick:C,text:"/",value:"/"})}),Object(O.jsx)(d.a,{span:24,children:Object(O.jsx)(g,{handleClick:C,text:"x",value:"x"})}),Object(O.jsx)(d.a,{span:24,children:Object(O.jsx)(g,{handleClick:C,text:"-",value:"-"})}),Object(O.jsx)(d.a,{span:24,children:Object(O.jsx)(g,{handleClick:C,text:"+",value:"+"})})]})})]})]})]})};n(59);var m=function(e){return Object(O.jsx)(r.a,{children:Object(O.jsx)("div",{children:Object(O.jsx)(l.c,{children:Object(O.jsx)(l.a,{path:"/",children:Object(O.jsx)(k,{})})})})})};n(64);i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(m,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.e5c306ba.chunk.js.map