import{Q as V,g as y,b as x,a as m}from"./dataBase.a49f954b.js";import{_ as R,r as o,e as c,f as N,w as i,o as k,g as s,i as n,Q as w,l as Q,m as b}from"./index.2104f99c.js";const C={setup(v){const t=o(null),d=o(!1),e=o(null),u=o(null),l=o(!1),a=o(null),g=o(null),f=o(!1),_=o(null);return{result_email:t,isValidEmail:d,errorEmail:e,result_password:u,isValidPassword:l,errorPassword:a,result_name:g,isValidName:f,errorName:_,sendData:async()=>{var p,h;const r=await y.post("/register",{name:g.value,email:t.value,password:u.value});if((p=r==null?void 0:r.data)!=null&&p.msg1&&(d.value=!0,l.value=!0,f.value=!0,e.value=r.data.msg1,a.value=r.data.msg1,_.value=r.data.msg1),(h=r==null?void 0:r.data)!=null&&h.msg2&&(l.value=!0,a.value=r.data.msg2),r!=null&&r.data.user)return c.replace({path:"/login"})},redirectLogin:()=>c.replace({path:"/login"}),router:c}}},E=n("h1",null,"Register",-1),P={class:"inputContent"},B={class:"buttonContent"},L=b("Log in"),D=b("Register");function U(v,t,d,e,u,l){return k(),N(V,{class:"bodyRegister"},{default:i(()=>[s(x,{class:"descriptionRegister"},{default:i(()=>[E]),_:1}),n("form",{onSubmit:t[3]||(t[3]=Q(a=>e.sendData(),["prevent","stop"])),class:"bodyForm"},[n("div",P,[s(m,{"bg-color":"white",outlined:"",label:"Name",modelValue:e.result_name,"onUpdate:modelValue":t[0]||(t[0]=a=>e.result_name=a),"error-message":e.errorName,error:e.isValidName},null,8,["modelValue","error-message","error"]),s(m,{"bg-color":"white",outlined:"",label:"Email",modelValue:e.result_email,"onUpdate:modelValue":t[1]||(t[1]=a=>e.result_email=a),"error-message":e.errorEmail,error:e.isValidEmail},null,8,["modelValue","error-message","error"]),s(m,{"bg-color":"white",outlined:"",type:"password",label:"Password",modelValue:e.result_password,"onUpdate:modelValue":t[2]||(t[2]=a=>e.result_password=a),"error-message":e.errorPassword,error:e.isValidPassword},null,8,["modelValue","error-message","error"])]),n("div",B,[s(w,{onClick:e.redirectLogin},{default:i(()=>[L]),_:1},8,["onClick"]),s(w,{type:"submit",color:"primary"},{default:i(()=>[D]),_:1})])],32)]),_:1})}var I=R(C,[["render",U]]);export{I as default};
