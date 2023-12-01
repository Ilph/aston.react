"use strict";(self.webpackChunkaston_react=self.webpackChunkaston_react||[]).push([[193],{7952:(e,n,r)=>{r.d(n,{R:()=>i,b:()=>o});var t=r(2791),s=r(6812);const i=()=>(0,t.useContext)(s.ci),o=()=>(0,t.useContext)(s.ls)},5219:(e,n,r)=>{r.d(n,{t:()=>z});var t,s,i,o=r(2791),a=r(7689),c=r(1087),d=r(168),l=r(1134),h=r(5867),u=r(272),x=r(8345),p=r(7952),m=r(9869),b=r(8839),g=r(3527),j=r(184);const f=e=>{const{beers:n,searchValue:r,debounceValue:t,isLoading:s,focus:i}=e;return(0,j.jsx)(j.Fragment,{children:i&&r&&t&&(0,j.jsx)(Z,{children:s?(0,j.jsx)(P,{children:(0,j.jsx)(b.P3,{children:"Loading...."})}):0===n.length?(0,j.jsx)(P,{children:(0,j.jsx)(b.P3,{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})}):n.map((e=>(0,j.jsx)(m.r,{to:"".concat(g.Z.CARD,"/").concat(e.id),children:(0,j.jsx)(v,{children:(0,j.jsx)(b.P1,{children:e.name})})},e.id)))})})},Z=h.ZP.ul(t||(t=(0,d.Z)(["\n  position: absolute;\n  top: 110px;\n  width: 315px;\n  min-height: 20px;\n  max-height: 300px;\n  overflow: overlay;\n  background: ",";\n  border-radius: ",";\n  z-index: 10;\n"])),(e=>e.theme.colors.white),(e=>e.theme.borders.primary)),v=h.ZP.li(s||(s=(0,d.Z)(["\n  padding: 10px 0 5px 10px;\n"]))),P=h.ZP.div(i||(i=(0,d.Z)(["\n  text-align: center;\n"])));var w;const y={search:""},k=e=>{const[n]=(0,c.lr)(),[r,t]=(0,o.useState)(!1),s=(0,p.b)(),{onSubmitForm:i,beers:a,isLoading:d,debounceValue:h}=e,{register:m,reset:b,handleSubmit:g,watch:Z,setValue:v,formState:{errors:P,isSubmitting:w,isDirty:k}}=(0,l.cI)({defaultValues:y,mode:"onBlur",criteriaMode:"all"}),V=n.get("beer_name");(0,o.useEffect)((()=>{V&&v("search",h)}),[v,h,V]);let C=Z("search",y.search);(0,o.useEffect)((()=>{s({type:"addSearchValue",searchValue:C})}),[s,C]);return(0,j.jsxs)(S,{onSubmit:g((e=>{i(e),b()})),children:[(0,j.jsx)(u.I,{placeholder:"Search beers ...",type:"search",...m("search"),errorOn:!!P.search,onFocus:()=>{t(!0)},onBlur:()=>{setTimeout((()=>{t(!1)}),100)}}),(0,j.jsx)(f,{beers:a,searchValue:C,debounceValue:h,isLoading:d,focus:r}),(0,j.jsx)(x.z,{type:"submit",size:"middle",disabled:!k||w,children:"Search"})]})},S=h.ZP.form(w||(w=(0,d.Z)(["\n  display: flex;\n  gap: 10px;\n  width: 100%;\n  background-color: ",";\n  border-top: 2px solid ",";\n  padding: 10px 0 0 10px;\n"])),(e=>e.theme.colors.black),(e=>e.theme.colors.accent));var V=r(8862),C=r(6045),I=r(3822),O=r(9322);const z=()=>{const[e,n]=(0,c.lr)(),r=(0,V.T)(),t=(0,a.s0)(),s=(0,V.C)(C.u.getIsAuth),i=function(e,n){const[r,t]=(0,o.useState)(e);return(0,o.useEffect)((()=>{const r=setTimeout((()=>t(e)),n||500);return()=>{clearTimeout(r)}}),[e,n]),r}((0,p.R)().searchValue,2e3),{data:d=[],isLoading:l}=(0,O.Q9)({beerName:i},{skip:!Boolean(i)});return(0,j.jsx)(k,{beers:d,isLoading:l,debounceValue:i,onSubmitForm:e=>{t(g.Z.SEARCH),n({beer_name:e.search}),s&&r((0,I.Ve)(e.search))}})}},1193:(e,n,r)=>{r.r(n),r.d(n,{SearchPage:()=>g,default:()=>j});r(2791);var t,s,i=r(6365),o=r(5219),a=r(168),c=r(5867),d=r(1087),l=r(8839),h=r(9322),u=r(6287),x=r(184);const p=()=>{const[e]=(0,d.lr)(),n=e.get("beer_name"),{data:r=[]}=(0,h.Q9)({beerName:n},{skip:!Boolean(n)});return(0,x.jsx)(m,{children:(0,x.jsx)(b,{children:0!==r.length?r.map((e=>{var n;return(0,x.jsx)(u.D,{id:e.id,name:e.name,imageUrl:e.imageUrl,description:e.description,abv:e.abv,ibu:null!==(n=e.ibu)&&void 0!==n?n:"",isFavorite:!1},e.id)})):(0,x.jsx)(l.P3,{children:"\u041d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"})})})},m=c.ZP.div(t||(t=(0,a.Z)(["\n  width: 60%;\n"]))),b=c.ZP.ul(s||(s=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 20px 0 80px 0;\n"]))),g=()=>(0,x.jsxs)(i.N,{children:[(0,x.jsx)(o.t,{}),(0,x.jsx)(p,{})]}),j=g},3822:(e,n,r)=>{r.d(n,{Ve:()=>i,Wq:()=>a,xt:()=>o});var t=r(2637),s=r(521);const i=e=>n=>{t.X.addStory(e),n((0,s.gs)(e))},o=e=>n=>{t.X.deleteStory(e),n((0,s.OD)(e))},a=()=>e=>{const n=t.X.getCurrentUser();e(n?(0,s.zX)(n.data.history):(0,s.zX)([]))}},6287:(e,n,r)=>{r.d(n,{D:()=>P});var t,s,i,o,a,c=r(168),d=r(2791),l=r(5867),h=r(9869),u=r(8345),x=r(8839),p=r(7938),m=r(8218),b=r(3527),g=r(8862),j=r(6045),f=r(579),Z=r(1308),v=r(184);const P=(0,d.memo)((e=>{const n=(0,g.T)(),{id:r,name:t,imageUrl:s,description:i,abv:o,ibu:a,isFavorite:c}=e,d=(0,g.C)(j.u.getIsAuth),[l,P]=(0,m.O)(c);return(0,v.jsxs)(w,{children:[(0,v.jsx)(y,{children:(0,v.jsx)(k,{to:"".concat(b.Z.CARD,"/").concat(r),children:(0,v.jsx)("img",{src:null!==s&&void 0!==s?s:Z,alt:"beer"})})}),(0,v.jsxs)(S,{children:[(0,v.jsx)(h.r,{to:"".concat(b.Z.CARD,"/").concat(r),children:(0,v.jsx)(x.H3,{children:t})}),(0,v.jsx)(x.P2,{children:i}),(0,v.jsxs)(x.P4,{children:["ABV-",o,"% IBU-",a]})]}),(0,v.jsx)(V,{children:d?(0,v.jsx)(u.z,{size:"small",onClick:()=>{n(l?(0,f.fu)(r):(0,f.IO)(e)),P()},children:(0,v.jsx)(p.I,{color:l?"blue":"dark"})}):null})]})})),w=l.ZP.li(t||(t=(0,c.Z)(["\n  display: flex;\n  align-items: flex-start;\n  gap: 20px;\n  padding: 15px;\n  background: ",";\n  border-radius: ",";\n  border: 1px solid #7e6464;\n"])),(e=>e.theme.colors.white),(e=>e.theme.borders.primary)),y=l.ZP.div(s||(s=(0,c.Z)(["\n  align-self: center;\n"]))),k=(0,l.ZP)(h.r)(i||(i=(0,c.Z)(["\n  display: block;\n  width: 30px;\n  height: 120px;\n\n  & img {\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n  }\n"]))),S=l.ZP.div(o||(o=(0,c.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 30px;\n"]))),V=l.ZP.div(a||(a=(0,c.Z)(["\n  flex: 1 0 auto;\n  text-align: end;\n  min-width: 40px;\n"])))},272:(e,n,r)=>{r.d(n,{I:()=>d});var t,s,i=r(168),o=r(2791),a=r(5867),c=r(184);const d=(0,o.forwardRef)(((e,n)=>{const{errorOn:r,...t}=e;return(0,c.jsx)(l,{children:(0,c.jsx)(h,{$errorOn:r,ref:n,...t})})})),l=a.ZP.div(t||(t=(0,i.Z)(["\n  max-width: 315px;\n  width: 100%;\n"]))),h=a.ZP.input(s||(s=(0,i.Z)(["\n  width: 100%;\n  height: 34px;\n  background: ",";\n  border-radius: ",";\n  border: 1px solid ",";\n  color: ",";\n  padding-left: 10px;\n  margin-bottom: 18px;\n\n  &::placeholder {\n    color: ",";\n  }\n\n  &:hover,\n  :focus {\n    ::placeholder {\n      color: ",";\n    }\n  }\n"])),(e=>e.theme.colors.backgroundInput),(e=>e.theme.borders.primary),(e=>e.$errorOn?e.theme.colors.error:e.theme.colors.white),(e=>e.$errorOn?e.theme.text.error:e.theme.text.textInvert),(e=>e.theme.text.placeholder),(e=>e.theme.text.placeholder))}}]);
//# sourceMappingURL=193.b2395f66.chunk.js.map