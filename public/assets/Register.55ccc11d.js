import{Q as f,g as p,a as h,b as n}from"./dataBase.35130c4d.js";import{_ as b,r as i,e as d,f as w,w as l,o as y,g as o,k as s,Q as u,l as c}from"./index.841e3069.js";const v={setup(m){const t=i(""),r=i(""),e=i("");return{result_email:t,result_password:r,result_name:e,sendData:async()=>{if(!e.value||!t.value||!r.value)alert("Por favor introduzca su credenciales bien");else if(r.value.length<6)alert("Tu contrase\xF1a es demasiada corta, debe de ser mayor a 6 caracteres");else return await p.post("/register",{name:e.value,email:t.value,password:r.value}),d.replace({path:"/login"})},redirectLogin:()=>d.replace({path:"/login"}),router:d}}},x=s("h1",null,"Register",-1),C={class:"bodyForm"},V={class:"inputContent"},k={class:"buttonContent"},R=c("Log in"),Q=c("Register");function B(m,t,r,e,g,_){return y(),w(f,{class:"bodyRegister"},{default:l(()=>[o(h,{class:"descriptionRegister"},{default:l(()=>[x]),_:1}),s("div",C,[s("div",V,[o(n,{"bg-color":"white",outlined:"",label:"Name",modelValue:e.result_name,"onUpdate:modelValue":t[0]||(t[0]=a=>e.result_name=a)},null,8,["modelValue"]),o(n,{"bg-color":"white",outlined:"",label:"Email",modelValue:e.result_email,"onUpdate:modelValue":t[1]||(t[1]=a=>e.result_email=a)},null,8,["modelValue"]),o(n,{"bg-color":"white",outlined:"",type:"password",label:"Password",modelValue:e.result_password,"onUpdate:modelValue":t[2]||(t[2]=a=>e.result_password=a)},null,8,["modelValue"])]),s("div",k,[o(u,{onClick:e.redirectLogin},{default:l(()=>[R]),_:1},8,["onClick"]),o(u,{onClick:e.sendData},{default:l(()=>[Q]),_:1},8,["onClick"])])])]),_:1})}var D=b(v,[["render",B]]);export{D as default};