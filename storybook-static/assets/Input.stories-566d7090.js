import{a as C,j as a}from"./jsx-runtime-bc5d6cf6.js";import{r as D}from"./index-c013ead5.js";import{u as o}from"./styled-components.browser.esm-cef5d831.js";import"./_commonjsHelpers-725317a4.js";const P=o.input`
  height: 40px;
  width: 300px;
  border-radius: 3px;
  border: solid 2px
    ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":e.success?"#067d68":"#353637"};
  background-color: #fff;
  &:focus {
    border: solid 2px #1b116e;
  }
`,T=o.div`
  font-size: 14px;
  color: ${e=>e.disabled?"#e4e3ea":"#080808"};
  padding-bottom: 6px;
`,$=o.div`
  font-size: 14px;
  color: #a9150b8;
  padding-top: 4px;
`,c=o.p`
  margin: 0px;
  color: ${e=>e.disabled?"#e4e3ea":e.error?"#a9150b":"#080808"};
`,r=({id:e,disabled:i,label:_,message:q,error:n,success:V,onChange:E,placeholder:j,...v})=>C(D.Fragment,{children:[a(T,{children:a(c,{disabled:i,error:n,children:_})}),a(P,{id:e,type:"text",onChange:E,disabled:i,error:n,success:V,placeholder:j,...v}),a($,{children:a(c,{error:n,children:q})})]});try{r.displayName="Input",r.__docgenInfo={description:"",displayName:"Input",props:{id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"boolean"}},message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}const N={component:r,title:"Sensoreal/InputField",argTypes:{}},s=e=>a(r,{"data-testId":"InputField-id",...e});s.args={error:!1,disabled:!1,label:"Primary"};const t=e=>a(r,{"data-testId":"InputField-id",...e});t.args={error:!1,success:!0,disabled:!1,label:"Success"};const d=e=>a(r,{"data-testId":"InputField-id",...e});d.args={error:!0,disabled:!1,message:"Error"};const l=e=>a(r,{"data-testId":"InputField-id",...e});l.args={disabled:!0,label:"Disabled"};var u,p,m;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:'args => <Input data-testId="InputField-id" {...args} />',...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,f,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:'args => <Input data-testId="InputField-id" {...args} />',...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var I,y,x;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:'args => <Input data-testId="InputField-id" {...args} />',...(x=(y=d.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,S,F;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:'args => <Input data-testId="InputField-id" {...args} />',...(F=(S=l.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const k=["Primary","Success","Error","Disabled"];export{l as Disabled,d as Error,s as Primary,t as Success,k as __namedExportsOrder,N as default};
