import{Q as oe,b as fe,g as Ye,a as Be}from"./dataBase.63a7565a.js";import{_ as H,r as y,G as D,o as g,f as L,w as T,j as B,i as x,R as me,J as A,k as F,n as O,S as ie,g as w,U as be,V as Le,X as Ae,Y as Me,b as q,p as W,q as Ze,Z as et,$ as tt,h as R,a0 as ze,a1 as nt,L as at,C as ot,a2 as Ne,s as he,c as Y,H as it,D as E,a3 as ve,a4 as Te,E as rt,F as st,d as Fe,a5 as lt,a6 as ct,m as ut,Q as J,e as dt,a7 as vt}from"./index.6a412139.js";import{u as K,b as ft}from"./store.8c0d68ba.js";const mt={props:["data","search"],setup(e){const a=K(),i=localStorage.getItem("token"),t=ft(),o=y(""),p=y(Object),l=async c=>{try{const r=await Ye.post("resquet_send",{friendID:c},{headers:{authorization:`bearer ${i}`}});t.notify({type:"positive",message:r.data.msg}),a.friendsData=await a.friendsGet()}catch(r){console.log(r),t.notify({type:"negative",message:"no se pudo enviar la solicitud"})}};return D(()=>{p.value=e.data}),{use:a,sendRequest:l,search:o,friend:p}}},bt={key:0,class:"condicionalDiv"},ht={class:"descriptContent"},gt={class:"nameContent"};function _t(e,a,i,t,o,p){return g(),L(fe,{class:"resultFriends"},{default:T(()=>{var l,c;return[t.friend.uid!==t.use.myID.uid?(g(),B("div",bt,[!((l=t.friend.friends)!=null&&l.includes(t.use.myID.uid))||!((c=t.friend.request_send)!=null&&c.includes(t.use.myID.uid))?(g(),L(oe,{key:0,class:"bodyResult"},{default:T(()=>{var r;return[x("div",ht,[x("div",gt,[x("h3",null,me(t.friend.name),1)]),x("div",null,[(r=t.friend.request_received)!=null&&r.includes(t.use.myID.uid)?(g(),L(A,{key:1,name:"how_to_reg",color:"positive",size:"3rem"})):(g(),L(A,{key:0,name:"person_add",size:"3rem",onClick:a[0]||(a[0]=b=>t.sendRequest(t.friend.uid))}))])])]}),_:1})):F("",!0)])):F("",!0)]}),_:1})}var yt=H(mt,[["render",_t]]);const wt={setup(){const e=K(),a=y(""),i=y(!1);return O(a,async()=>{await e.getUsersByID(a.value)}),{use:e,search:a,viewSearch:i}},components:{CardRequest:yt}},xt=e=>(Ae("data-v-069e8260"),e=e(),Me(),e),Ct={id:"bodyModal",class:"q-pa-md q-gutter-sm"},qt={class:"contentCard"},pt=xt(()=>x("div",{class:"headerRequest"},[x("div",{class:"textContent"},[x("h5",null,"A\xF1adir amigos")])],-1)),Rt={class:"inputContent"},Tt={key:0,class:"titleContent"};function kt(e,a,i,t,o,p){const l=ie("CardRequest");return g(),B("div",Ct,[x("div",qt,[pt,x("div",Rt,[w(Be,{outlined:"",label:"search friends",modelValue:t.search,"onUpdate:modelValue":a[0]||(a[0]=c=>t.search=c)},null,8,["modelValue"])]),w(fe,{class:"scroll",id:"contentSection"},{default:T(()=>[t.search?(g(),B("div",Tt,[(g(!0),B(be,null,Le(t.use.usersResquet.data,c=>(g(),L(l,{key:c.uid,data:c,search:t.search},null,8,["data","search"]))),128))])):F("",!0)]),_:1})])])}var mn=H(wt,[["render",kt],["__scopeId","data-v-069e8260"]]);let St=0;const It=["click","keydown"],$t={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${St++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Bt(e,a,i,t){const o=Ze(ze,()=>{console.error("QTab/QRouteTab component needs to be child of QTabs")}),{proxy:p}=he(),l=y(null),c=y(null),r=y(null),b=q(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),C=q(()=>o.currentModel.value===e.name),k=q(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(C.value===!0?" q-tab--active"+(o.tabProps.value.activeClass?" "+o.tabProps.value.activeClass:"")+(o.tabProps.value.activeColor?` text-${o.tabProps.value.activeColor}`:"")+(o.tabProps.value.activeBgColor?` bg-${o.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&o.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||o.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(t!==void 0&&t.linkClass.value!==""?` ${t.linkClass.value}`:"")),j=q(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(o.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),G=q(()=>e.disable===!0||o.hasFocus.value===!0?-1:e.tabindex||0);function Q(f,S){if(S!==!0&&l.value!==null&&l.value.focus(),e.disable!==!0){let $;if(t!==void 0)if(t.hasRouterLink.value===!0)$=()=>{f.__qNavigate=!0,o.avoidRouteWatcher=!0;const I=t.navigateToRouterLink(f);I===!1?o.avoidRouteWatcher=!1:I.then(z=>{o.avoidRouteWatcher=!1,z===void 0&&o.updateModel({name:e.name,fromRoute:!0})})};else{i("click",f);return}else $=()=>{o.updateModel({name:e.name,fromRoute:!1})};i("click",f,$),f.defaultPrevented!==!0&&$()}}function X(f){nt(f,[13,32])?Q(f,!0):at(f)!==!0&&f.keyCode>=35&&f.keyCode<=40&&o.onKbdNavigate(f.keyCode,p.$el)===!0&&ot(f),i("keydown",f)}function V(){const f=o.tabProps.value.narrowIndicator,S=[],$=R("div",{ref:r,class:["q-tab__indicator",o.tabProps.value.indicatorClass]});e.icon!==void 0&&S.push(R(A,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&S.push(R("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&S.push(e.alertIcon!==void 0?R(A,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):R("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),f===!0&&S.push($);const I=[R("div",{class:"q-focus-helper",tabindex:-1,ref:l}),R("div",{class:j.value},Ne(a.default,S))];return f===!1&&I.push($),I}const M={name:q(()=>e.name),rootRef:c,tabIndicatorRef:r,routerProps:t};W(()=>{o.unregisterTab(M),o.recalculateScroll()}),D(()=>{o.registerTab(M),o.recalculateScroll()});function U(f,S){const $={ref:c,class:k.value,tabindex:G.value,role:"tab","aria-selected":C.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:Q,onKeydown:X,...S};return et(R(f,$,V()),[[tt,b.value]])}return{renderTab:U,$tabs:o}}var ke=Y({name:"QTab",props:$t,emits:It,setup(e,{slots:a,emit:i}){const{renderTab:t}=Bt(e,a,i);return()=>t("div")}});function Lt(){const e=y(!it.value);return e.value===!1&&D(()=>{e.value=!0}),e}const Pe=typeof ResizeObserver!="undefined",Se=Pe===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var At=Y({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:a}){let i=null,t,o={width:-1,height:-1};function p(r){r===!0||e.debounce===0||e.debounce==="0"?l():i===null&&(i=setTimeout(l,e.debounce))}function l(){if(clearTimeout(i),i=null,t){const{offsetWidth:r,offsetHeight:b}=t;(r!==o.width||b!==o.height)&&(o={width:r,height:b},a("resize",o))}}const c=he();if(Object.assign(c.proxy,{trigger:p}),Pe===!0){let r;return D(()=>{E(()=>{t=c.proxy.$el.parentNode,t&&(r=new ResizeObserver(p),r.observe(t),l())})}),W(()=>{clearTimeout(i),r!==void 0&&(r.disconnect!==void 0?r.disconnect():t&&r.unobserve(t))}),ve}else{let C=function(){clearTimeout(i),b!==void 0&&(b.removeEventListener!==void 0&&b.removeEventListener("resize",p,Te.passive),b=void 0)},k=function(){C(),t&&t.contentDocument&&(b=t.contentDocument.defaultView,b.addEventListener("resize",p,Te.passive),l())};const r=Lt();let b;return D(()=>{E(()=>{t=c.proxy.$el,t&&k()})}),W(C),()=>{if(r.value===!0)return R("object",{style:Se.style,tabindex:-1,type:"text/html",data:Se.url,"aria-hidden":"true",onLoad:k})}}}});function Mt(){let e;return W(()=>{e=void 0}),{registerTick(a){e=a,E(()=>{e===a&&(e(),e=void 0)})},removeTick(){e=void 0}}}function Ie(){let e;return W(()=>{clearTimeout(e)}),{registerTimeout(a,i){clearTimeout(e),e=setTimeout(a,i)},removeTimeout(){clearTimeout(e)}}}let je=!1;{const e=document.createElement("div"),a=document.createElement("div");e.setAttribute("dir","rtl"),e.style.width="1px",e.style.height="1px",e.style.overflow="auto",a.style.width="1000px",a.style.height="1px",document.body.appendChild(e),e.appendChild(a),e.scrollLeft=-1e3,je=e.scrollLeft>=0,e.remove()}function zt(e,a,i){const t=i===!0?["left","right"]:["top","bottom"];return`absolute-${a===!0?t[0]:t[1]}${e?` text-${e}`:""}`}const Nt=["left","center","right","justify"],$e=()=>{};var Ft=Y({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Nt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:a,emit:i}){const t=he(),{proxy:{$q:o}}=t,{registerTick:p}=Mt(),{registerTimeout:l,removeTimeout:c}=Ie(),{registerTimeout:r}=Ie(),b=y(null),C=y(null),k=y(e.modelValue),j=y(!1),G=y(!0),Q=y(!1),X=y(!1),V=q(()=>o.platform.is.desktop===!0||e.mobileArrows===!0),M=[],U=y(!1);let f=!1,S,$,I,z=V.value===!0?_e:ve;const Ee=q(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:zt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),De=q(()=>`q-tabs__content--align-${j.value===!0?"left":X.value===!0?"justify":e.align}`),Qe=q(()=>`q-tabs row no-wrap items-center q-tabs--${j.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${V.value===!0&&e.outsideArrows===!0?"outside":"inside"}`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Ve=q(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+De.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")+(o.platform.is.mobile===!0?" scroll":"")),Z=q(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),ee=q(()=>e.vertical!==!0&&o.lang.rtl===!0),re=q(()=>je===!1&&ee.value===!0);O(ee,z),O(()=>e.modelValue,n=>{se({name:n,setCurrent:!0,skipEmit:!0})}),O(()=>e.outsideArrows,()=>{E(te())}),O(V,n=>{z=n===!0?_e:ve,E(te())});function se({name:n,setCurrent:s,skipEmit:u,fromRoute:m}){k.value!==n&&(u!==!0&&i("update:modelValue",n),(s===!0||e["onUpdate:modelValue"]===void 0)&&(Ue(k.value,n),k.value=n)),m!==void 0&&(f=m)}function te(){p(()=>{t.isDeactivated!==!0&&t.isUnmounted!==!0&&ge({width:b.value.offsetWidth,height:b.value.offsetHeight})})}function ge(n){if(Z.value===void 0||C.value===null)return;const s=n[Z.value.container],u=Math.min(C.value[Z.value.scroll],Array.prototype.reduce.call(C.value.children,(d,h)=>d+(h[Z.value.content]||0),0)),m=s>0&&u>s;j.value!==m&&(j.value=m),m===!0&&E(z);const _=s<parseInt(e.breakpoint,10);X.value!==_&&(X.value=_)}function Ue(n,s){const u=n!=null&&n!==""?M.find(_=>_.name.value===n):null,m=s!=null&&s!==""?M.find(_=>_.name.value===s):null;if(u&&m){const _=u.tabIndicatorRef.value,d=m.tabIndicatorRef.value;clearTimeout(S),_.style.transition="none",_.style.transform="none",d.style.transition="none",d.style.transform="none";const h=_.getBoundingClientRect(),v=d.getBoundingClientRect();d.style.transform=e.vertical===!0?`translate3d(0,${h.top-v.top}px,0) scale3d(1,${v.height?h.height/v.height:1},1)`:`translate3d(${h.left-v.left}px,0,0) scale3d(${v.width?h.width/v.width:1},1,1)`,E(()=>{S=setTimeout(()=>{d.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",d.style.transform="none"},70)})}m&&j.value===!0&&ne(m.rootRef.value)}function ne(n){const{left:s,width:u,top:m,height:_}=C.value.getBoundingClientRect(),d=n.getBoundingClientRect();let h=e.vertical===!0?d.top-m:d.left-s;if(h<0){C.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(h),z();return}h+=e.vertical===!0?d.height-_:d.width-u,h>0&&(C.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(h),z())}function _e(){const n=C.value;if(n!==null){const s=n.getBoundingClientRect(),u=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);ee.value===!0?(G.value=Math.ceil(u+s.width)<n.scrollWidth-1,Q.value=u>0):(G.value=u>0,Q.value=e.vertical===!0?Math.ceil(u+s.height)<n.scrollHeight:Math.ceil(u+s.width)<n.scrollWidth)}}function ye(n){P(),Ce(n),$=setInterval(()=>{Ce(n)===!0&&P()},5)}function we(){ye(re.value===!0?Number.MAX_SAFE_INTEGER:0)}function xe(){ye(re.value===!0?0:Number.MAX_SAFE_INTEGER)}function P(){clearInterval($)}function Oe(n,s){const u=Array.prototype.filter.call(C.value.children,v=>v===s||v.matches&&v.matches(".q-tab.q-focusable")===!0),m=u.length;if(m===0)return;if(n===36)return ne(u[0]),!0;if(n===35)return ne(u[m-1]),!0;const _=n===(e.vertical===!0?38:37),d=n===(e.vertical===!0?40:39),h=_===!0?-1:d===!0?1:void 0;if(h!==void 0){const v=ee.value===!0?-1:1,N=u.indexOf(s)+h*v;return N>=0&&N<m&&(ne(u[N]),u[N].focus({preventScroll:!0})),!0}}const We=q(()=>re.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,s)=>{n.scrollLeft=-s}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,s)=>{n.scrollTop=s}}:{get:n=>n.scrollLeft,set:(n,s)=>{n.scrollLeft=s}});function Ce(n){const s=C.value,{get:u,set:m}=We.value;let _=!1,d=u(s);const h=n<d?-1:1;return d+=h*5,d<0?(_=!0,d=0):(h===-1&&d<=n||h===1&&d>=n)&&(_=!0,d=n),m(s,d),z(),_}function le(){return M.filter(n=>n.routerProps!==void 0&&n.routerProps.hasRouterLink.value===!0)}function He(){let n=null,s=f;const u={matchedLen:0,hrefLen:0,exact:!1,found:!1},{hash:m}=t.proxy.$route,_=k.value;let d=s===!0?$e:v=>{_===v.name.value&&(s=!0,d=$e)};const h=le();for(const v of h){const N=v.routerProps.exact.value===!0;if(v.routerProps[N===!0?"linkIsExactActive":"linkIsActive"].value!==!0||u.exact===!0&&N!==!0){d(v);continue}const ce=v.routerProps.linkRoute.value,ue=ce.hash;if(N===!0){if(m===ue){n=v.name.value;break}else if(m!==""&&ue!==""){d(v);continue}}const de=ce.matched.length,Re=ce.href.length-ue.length;if(de===u.matchedLen?Re>u.hrefLen:de>u.matchedLen){n=v.name.value,Object.assign(u,{matchedLen:de,hrefLen:Re,exact:N});continue}d(v)}(s===!0||n!==null)&&se({name:n,setCurrent:!0,fromRoute:!0})}function Ke(n){if(c(),U.value!==!0&&b.value!==null&&n.target&&typeof n.target.closest=="function"){const s=n.target.closest(".q-tab");s&&b.value.contains(s)===!0&&(U.value=!0)}}function Ge(){l(()=>{U.value=!1},30)}function ae(){qe.avoidRouteWatcher!==!0&&r(He)}function Xe(n){M.push(n),le().length>0&&(I===void 0&&(I=O(()=>t.proxy.$route,ae)),ae())}function Je(n){M.splice(M.indexOf(n),1),I!==void 0&&(le().length===0&&(I(),I=void 0),ae())}const qe={currentModel:k,tabProps:Ee,hasFocus:U,registerTab:Xe,unregisterTab:Je,verifyRouteModel:ae,updateModel:se,recalculateScroll:te,onKbdNavigate:Oe,avoidRouteWatcher:!1};lt(ze,qe),W(()=>{clearTimeout(S),I!==void 0&&I()});let pe=!1;return rt(()=>{pe=!0}),st(()=>{pe===!0&&te()}),()=>{const n=[R(At,{onResize:ge}),R("div",{ref:C,class:Ve.value,onScroll:z},Fe(a.default))];return V.value===!0&&n.push(R(A,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(G.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||o.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedown:we,onTouchstartPassive:we,onMouseup:P,onMouseleave:P,onTouchend:P}),R(A,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(Q.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||o.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedown:xe,onTouchstartPassive:xe,onMouseup:P,onMouseleave:P,onTouchend:P})),R("div",{ref:b,class:Qe.value,role:"tablist",onFocusin:Ke,onFocusout:Ge},n)}}});const Pt=["top","middle","bottom"];var jt=Y({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>Pt.includes(e)}},setup(e,{slots:a}){const i=q(()=>e.align!==void 0?{verticalAlign:e.align}:null),t=q(()=>{const o=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(o!==void 0?` text-${o}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>R("div",{class:t.value,style:i.value,role:"alert","aria-label":e.label},Ne(a.default,e.label!==void 0?[e.label]:[]))}});const Et={setup(){const e=K();let a;return D(async()=>{await e.friendsNumber(),a=setInterval(async()=>{await e.friendsNumber()},12e3)}),ct(()=>{clearInterval(a)}),{use:e,modal:y(!1)}}},Dt={class:"q-pa-md q-gutter-sm"},Qt={key:0};function Vt(e,a,i,t,o,p){return g(),B("div",Dt,[w(J,{dense:"",color:"black",round:"",icon:"notifications",class:"q-ml-md",onClick:a[0]||(a[0]=l=>{var c,r;return t.use.getUsers((r=(c=t.use.receivedRequest)==null?void 0:c.data)==null?void 0:r.request_received),t.use.modal=!t.use.modal})},{default:T(()=>{var l,c,r;return[(l=t.use.receivedRequest)!=null&&l.data?(g(),B("span",Qt,[((r=(c=t.use.receivedRequest)==null?void 0:c.data)==null?void 0:r.request_received.length)>0?(g(),L(jt,{key:0,floating:""},{default:T(()=>{var b,C,k;return[ut(me((k=(C=(b=t.use.receivedRequest)==null?void 0:b.data)==null?void 0:C.request_received)==null?void 0:k.length),1)]}),_:1})):F("",!0)])):F("",!0)]}),_:1})])}var Ut=H(Et,[["render",Vt]]);const Ot={setup(){const e=K(),a=y(!1),i=y(!1),t=y(dt.currentRoute.value.name);return{use:e,viewSearch:a,viewMenu:i,tab:t}},components:{Notification:Ut}},Wt={class:"contentSearch"},Ht={key:0,class:"contentInput2"},Kt={class:"containerNavbar"},Gt={class:"contentRouter"},Xt={class:"q-pa-md"},Jt={class:"q-gutter-y-md",style:{"max-width":"600px"}};function Yt(e,a,i,t,o,p){const l=ie("router-link"),c=ie("Notification");return g(),L(oe,{class:"bodyNav"},{default:T(()=>[x("div",Wt,[t.viewSearch?(g(),B("div",Ht,[w(Be,{rounded:"",outlined:"",dense:""})])):F("",!0),x("div",{onClick:a[0]||(a[0]=r=>t.viewSearch=!t.viewSearch),class:"contentImgSearch"},[t.viewSearch?(g(),L(A,{key:0,name:"search_off",size:"2.5rem"})):F("",!0),t.viewSearch?F("",!0):(g(),L(A,{key:1,name:"travel_explore",size:"2.5rem"}))])]),x("div",Kt,[x("div",Gt,[x("div",Xt,[x("div",Jt,[w(Ft,{modelValue:t.tab,"onUpdate:modelValue":a[2]||(a[2]=r=>t.tab=r),"narrow-indicator":""},{default:T(()=>[w(l,{to:"/"},{default:T(()=>[w(ke,{name:"home",label:"Home"})]),_:1}),w(l,{to:"/perfil"},{default:T(()=>[w(ke,{name:"perfil",label:"perfil"})]),_:1}),w(c),w(J,{onClick:a[1]||(a[1]=r=>t.use.logOut()),round:"",color:"black",icon:"logout",size:"0.7rem"})]),_:1},8,["modelValue"])])])])])]),_:1})}var Zt=H(Ot,[["render",Yt],["__scopeId","data-v-9016ba76"]]);const en={components:{NavBar:Zt},setup(){const e=K();return D(async()=>{var a,i,t;e.friendsData=await e.friendsGet(),await e.myUser(),await e.getAllAvailableUsers(),(a=e.usersAvaible)!=null&&a.dataFriends.length?e.viewInfoFriend=(i=e.usersAvaible)==null?void 0:i.dataFriends[0]:e.viewInfoFriend=(t=e.usersAvaible)==null?void 0:t.dataPublic[0]}),{use:e}}};function tn(e,a,i,t,o,p){const l=ie("NavBar");return g(),B(be,null,[w(l),vt(e.$slots,"content")],64)}var bn=H(en,[["render",tn]]),nn=Y({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:a}){const i=q(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>R("div",{class:i.value},Fe(a.default))}});const an={setup(){return{use:K()}}},on=e=>(Ae("data-v-02c20f3e"),e=e(),Me(),e),rn={id:"bodyModal",class:"q-pa-md q-gutter-sm"},sn=on(()=>x("div",{class:"textContent"},[x("h5",null,"Solicitudes recibidas")],-1)),ln={class:"contentName"},cn={class:"iconContent"};function un(e,a,i,t,o,p){return g(),B("div",rn,[w(oe,{class:"contentCard"},{default:T(()=>[w(nn,{class:"btnContent"},{default:T(()=>[w(J,{flat:"",round:"",dense:"",icon:"close",onClick:a[0]||(a[0]=l=>t.use.modal=!t.use.modal)})]),_:1}),sn,w(fe,{class:"scroll",id:"contentSection"},{default:T(()=>[(g(!0),B(be,null,Le(t.use.friendsReceivedRequest.data,l=>{var c;return g(),B("div",{class:"contentUser",key:l.uid},[(c=l.friends)!=null&&c.includes(t.use.myID.uid)?F("",!0):(g(),L(oe,{key:0,class:"bodyUserResquet"},{default:T(()=>[x("div",ln,[x("h4",null,me(l.name),1)]),x("div",cn,[w(J,{onClick:r=>t.use.acceptFriends(l.uid)},{default:T(()=>[w(A,{name:"done_outline",color:"positive",size:"2rem"})]),_:2},1032,["onClick"]),w(J,{onClick:r=>t.use.declineRequest(l.uid)},{default:T(()=>[w(A,{name:"cancel",color:"red",size:"2rem"})]),_:2},1032,["onClick"])])]),_:2},1024))])}),128))]),_:1})]),_:1})])}var hn=H(an,[["render",un],["__scopeId","data-v-02c20f3e"]]);export{bn as L,hn as M,mn as R};