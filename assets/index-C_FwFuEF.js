import{d as O,e as M,n as b,u as W,l as y,i as I,P as Z,o as p,c as k,q as F,b as c,w as g,D as X,a as h,s as _,t as a,Q as V,I as K,F as ee,T as te,v as P,J as ne,R as B,S as ge,m as ve,V as oe,W as ye,X as _e,h as x,Y as q,Z as he,k as be,$ as Ce,a0 as $e,O as w,E as G,a1 as ke,M as Se,B as Te,a2 as we,a3 as Be,a4 as Ee,f as J,a5 as se,a6 as A,a7 as Y,a8 as Me,a9 as Ne,H as d,aa as ae}from"./index-CpEHNvOP.js";import{E as xe}from"./el-link-C92YdR1P.js";const Q={},ze=O({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"},showZero:{type:Boolean,default:!0},color:String,dotStyle:{type:M([String,Object,Array])},offset:{type:M(Array),default:[0,0]},dotClass:{type:String}}),De=["textContent"],Ie=b({name:"ElBadge"}),Ae=b({...Ie,props:ze,setup(o,{expose:s}){const e=o,t=W("badge"),n=y(()=>e.isDot?"":I(e.value)&&I(e.max)?e.max<e.value?`${e.max}+`:e.value===0&&!e.showZero?"":`${e.value}`:`${e.value}`),i=y(()=>{var l,f,m,C,$;return[{backgroundColor:e.color,marginRight:Z(-((f=(l=e.offset)==null?void 0:l[0])!=null?f:0)),marginTop:Z((C=(m=e.offset)==null?void 0:m[1])!=null?C:0)},($=e.dotStyle)!=null?$:{}]});return s({content:n}),(l,f)=>(p(),k("div",{class:_(a(t).b())},[F(l.$slots,"default"),c(te,{name:`${a(t).namespace.value}-zoom-in-center`,persisted:""},{default:g(()=>[X(h("sup",{class:_([a(t).e("content"),a(t).em("content",l.type),a(t).is("fixed",!!l.$slots.default),a(t).is("dot",l.isDot),l.dotClass]),style:V(a(i)),textContent:K(a(n))},null,14,De),[[ee,!l.hidden&&(a(n)||l.isDot)]])]),_:1},8,["name"])],2))}});var Le=P(Ae,[["__file","badge.vue"]]);const Oe=ne(Le),Fe=O({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:M(String),default:"solid"}}),Ve=b({name:"ElDivider"}),Pe=b({...Ve,props:Fe,setup(o){const s=o,e=W("divider"),t=y(()=>e.cssVar({"border-style":s.borderStyle}));return(n,i)=>(p(),k("div",{class:_([a(e).b(),a(e).m(n.direction)]),style:V(a(t)),role:"separator"},[n.$slots.default&&n.direction!=="vertical"?(p(),k("div",{key:0,class:_([a(e).e("text"),a(e).is(n.contentPosition)])},[F(n.$slots,"default")],2)):B("v-if",!0)],6))}});var He=P(Pe,[["__file","divider.vue"]]);const le=ne(He),ie=["success","info","warning","error"],u=ve({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",plain:!1,offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:oe?document.body:void 0}),Re=O({customClass:{type:String,default:u.customClass},center:{type:Boolean,default:u.center},dangerouslyUseHTMLString:{type:Boolean,default:u.dangerouslyUseHTMLString},duration:{type:Number,default:u.duration},icon:{type:ge,default:u.icon},id:{type:String,default:u.id},message:{type:M([String,Object,Function]),default:u.message},onClose:{type:M(Function),default:u.onClose},showClose:{type:Boolean,default:u.showClose},type:{type:String,values:ie,default:u.type},plain:{type:Boolean,default:u.plain},offset:{type:Number,default:u.offset},zIndex:{type:Number,default:u.zIndex},grouping:{type:Boolean,default:u.grouping},repeatNum:{type:Number,default:u.repeatNum}}),Ue={destroy:()=>!0},v=ye([]),je=o=>{const s=v.findIndex(n=>n.id===o),e=v[s];let t;return s>0&&(t=v[s-1]),{current:e,prev:t}},Ze=o=>{const{prev:s}=je(o);return s?s.vm.exposed.bottom.value:0},qe=(o,s)=>v.findIndex(t=>t.id===o)>0?16:s,Ge=["id"],Je=["innerHTML"],Ye=b({name:"ElMessage"}),Qe=b({...Ye,props:Re,emits:Ue,setup(o,{expose:s}){const e=o,{Close:t}=we,{ns:n,zIndex:i}=_e("message"),{currentZIndex:l,nextZIndex:f}=i,m=x(),C=x(!1),$=x(0);let z;const ce=y(()=>e.type?e.type==="error"?"danger":e.type:"info"),ue=y(()=>{const r=e.type;return{[n.bm("icon",r)]:r&&q[r]}}),H=y(()=>e.icon||q[e.type]||""),de=y(()=>Ze(e.id)),R=y(()=>qe(e.id,e.offset)+de.value),fe=y(()=>$.value+R.value),me=y(()=>({top:`${R.value}px`,zIndex:l.value}));function D(){e.duration!==0&&({stop:z}=Be(()=>{N()},e.duration))}function U(){z==null||z()}function N(){C.value=!1}function pe({code:r}){r===Ee.esc&&N()}return he(()=>{D(),f(),C.value=!0}),be(()=>e.repeatNum,()=>{U(),D()}),Ce(document,"keydown",pe),$e(m,()=>{$.value=m.value.getBoundingClientRect().height}),s({visible:C,bottom:fe,close:N}),(r,j)=>(p(),w(te,{name:a(n).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:j[0]||(j[0]=ct=>r.$emit("destroy")),persisted:""},{default:g(()=>[X(h("div",{id:r.id,ref_key:"messageRef",ref:m,class:_([a(n).b(),{[a(n).m(r.type)]:r.type},a(n).is("center",r.center),a(n).is("closable",r.showClose),a(n).is("plain",r.plain),r.customClass]),style:V(a(me)),role:"alert",onMouseenter:U,onMouseleave:D},[r.repeatNum>1?(p(),w(a(Oe),{key:0,value:r.repeatNum,type:a(ce),class:_(a(n).e("badge"))},null,8,["value","type","class"])):B("v-if",!0),a(H)?(p(),w(a(G),{key:1,class:_([a(n).e("icon"),a(ue)])},{default:g(()=>[(p(),w(ke(a(H))))]),_:1},8,["class"])):B("v-if",!0),F(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(p(),k(Se,{key:1},[B(" Caution here, message could've been compromised, never use user's input as message "),h("p",{class:_(a(n).e("content")),innerHTML:r.message},null,10,Je)],2112)):(p(),k("p",{key:0,class:_(a(n).e("content"))},K(r.message),3))]),r.showClose?(p(),w(a(G),{key:2,class:_(a(n).e("closeBtn")),onClick:Te(N,["stop"])},{default:g(()=>[c(a(t))]),_:1},8,["class","onClick"])):B("v-if",!0)],46,Ge),[[ee,C.value]])]),_:3},8,["name","onBeforeLeave"]))}});var We=P(Qe,[["__file","message.vue"]]);let Xe=1;const re=o=>{const s=!o||J(o)||se(o)||A(o)?{message:o}:o,e={...u,...s};if(!e.appendTo)e.appendTo=document.body;else if(J(e.appendTo)){let t=document.querySelector(e.appendTo);Me(t)||(t=document.body),e.appendTo=t}return e},Ke=o=>{const s=v.indexOf(o);if(s===-1)return;v.splice(s,1);const{handler:e}=o;e.close()},et=({appendTo:o,...s},e)=>{const t=`message_${Xe++}`,n=s.onClose,i=document.createElement("div"),l={...s,id:t,onClose:()=>{n==null||n(),Ke($)},onDestroy:()=>{Y(null,i)}},f=c(We,l,A(l.message)||se(l.message)?{default:A(l.message)?l.message:()=>l.message}:null);f.appContext=e||T._context,Y(f,i),o.appendChild(i.firstElementChild);const m=f.component,$={id:t,vnode:f,vm:m,handler:{close:()=>{m.exposed.visible.value=!1}},props:f.component.props};return $},T=(o={},s)=>{if(!oe)return{close:()=>{}};if(I(Q.max)&&v.length>=Q.max)return{close:()=>{}};const e=re(o);if(e.grouping&&v.length){const n=v.find(({vnode:i})=>{var l;return((l=i.props)==null?void 0:l.message)===e.message});if(n)return n.props.repeatNum+=1,n.props.type=e.type,n.handler}const t=et(e,s);return v.push(t),t.handler};ie.forEach(o=>{T[o]=(s={},e)=>{const t=re(s);return T({...t,type:o},e)}});function tt(o){for(const s of v)(!o||o===s.props.type)&&s.handler.close()}T.closeAll=tt;T._context=null;const L=Ne(T,"$message");console.log("%c Line:14 🍌本地 mitt.js","color:#1890ff;");function nt(o){return o=o||new Map,{all:o,on:function(s,e){var t=o.get(s);t?t.push(e):o.set(s,[e])},off:function(s,e){var t=o.get(s);console.log("%c  all","color:#fca650",o),console.log("%c  type","color:#fca650",s),t&&(console.log("%c  handlers","color:#fca650",t),e?(console.log("%c  handler","color:#fca650",e,t.indexOf(e)),t.splice(t.indexOf(e)>>>0,1),console.log("%c Line:55 🍌 type, handlers","color:#fca650",t)):o.set(s,[]))},emit:function(s,e){var t=o.get(s);t&&t.slice().map(function(n){n(e)}),t=o.get("*"),t&&t.slice().map(function(n){n(s,e)})}}}const S=nt(),E=o=>{L(o)},ot=h("br",null,null,-1),st=b({__name:"emit",setup(o){function s(n,i){S.emit(n,i)}function e(n){try{S.off(n,E)}catch(i){console.log("🚀 ~ off ~ err:",i)}console.log("🚀 ~ off ~ callback:",n,E)}function t(){S.all.clear()}return(n,i)=>{const l=ae,f=le;return p(),k("div",null,[d(" 派发： "),ot,c(l,{type:"primary",onClick:i[0]||(i[0]=m=>s("message-A","A的数据-mitt全局通讯模块"))},{default:g(()=>[d("派发：.emit('message-A', 'A的数据-mitt全局通讯模块')")]),_:1}),c(l,{type:"primary",onClick:i[1]||(i[1]=m=>s("message-B","B的数据-mitt全局通讯模块"))},{default:g(()=>[d("派发：.emit('message-B', 'B的数据-mitt全局通讯模块')")]),_:1}),c(f),c(l,{type:"warning",onClick:i[2]||(i[2]=m=>e("message-A"))},{default:g(()=>[d("取消单个监听：emitter.off(''message-A', onFoo) ")]),_:1}),c(l,{type:"warning",onClick:i[3]||(i[3]=m=>e("message-B"))},{default:g(()=>[d("取消单个监听：emitter.off(''message-B', onFoo) ")]),_:1}),c(f),c(l,{type:"danger",onClick:t},{default:g(()=>[d("取消全部监听emitter.all.clear()")]),_:1})])}}}),at=h("br",null,null,-1),lt=b({__name:"watch",setup(o){x("Hello Vue 3 + TypeScript + Vite");function s(e){console.log("🚀 ~ off ~ type:",e,E);try{S.off(e,E)}catch(t){console.log("🚀 ~ off ~ err:",t)}}return S.on("message-A",E),S.on("message-B",e=>{L({message:e,type:"success"}),setTimeout(()=>{s("message-B")},2e3)}),S.on("*",(e,t)=>{L.error(`监听全部事件,事件名：${e},参数：${t}`)}),(e,t)=>{const n=ae;return p(),k("div",null,[d(" 监听：监听通过ElMessage进行提示！ "),at,d(" 取消: "),c(n,{onClick:t[0]||(t[0]=i=>s("message-A"))},{default:g(()=>[d("off :'message-A'")]),_:1}),c(n,{onClick:t[1]||(t[1]=i=>s("message-B"))},{default:g(()=>[d("off :'message-B'")]),_:1})])}}}),it=h("pre",null,[d("      "),h("code",null,`
        Install
        This project uses node and npm. Go check them out if you don't have them locally installed.
        $ npm install --save mitt

        Then with a module bundler like rollup or webpack, use as you would anything else:

        // using ES6 modules
        import mitt from 'mitt'
        // using CommonJS modules
        var mitt = require('mitt')

        The UMD build is also available on unpkg:
        script src="https://unpkg.com/mitt/dist/mitt.umd.js" 
        You can find the library on window.mitt.
        `),d(`
    `)],-1),rt=h("pre",null,[h("code",null,`
      import mitt from 'mitt'
      const emitter = mitt()

      // listen to an event
      emitter.on('foo', e => console.log('foo', e) )
      // listen to all events
      emitter.on('*', (type, e) => console.log(type, e) )
      // fire an event
      emitter.emit('foo', { a: 'b' })
      // clearing all events
      emitter.all.clear()
      // working with handler references:
      function onFoo() {}
      emitter.on('foo', onFoo)   // listen
      emitter.off('foo', onFoo)  // unlisten

    `)],-1),ft=b({__name:"index",setup(o){return(s,e)=>{const t=xe,n=le;return p(),k("div",null,[d(" mitt全局通讯模块，on监听和off结束监听的回调需要一致 "),c(t,{type:"primary",target:"_blank",href:"https://github.com/developit/mitt/blob/main/src/index.ts"},{default:g(()=>[d("mitt github")]),_:1}),c(n),d(" 安装： "),it,d(" 使用： "),rt,c(n),c(st),c(n),c(lt)])}}});export{ft as default};