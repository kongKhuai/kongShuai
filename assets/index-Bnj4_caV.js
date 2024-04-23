import{d as A,e as B,m as P,U as K,C as q,i as G,f as W,g as $,h as z,j as M,k as O,p as Z,u as D,l as v,n as k,o as p,c as f,q as E,s as d,t as e,v as H,x as R,y as Q,a as g,b as y,w as x,z as Y,E as X,A as ee,B as te,D as ue,F as ie,G as oe,H as V,I,J as le,K as se,L as ae,M as _,N,O as he}from"./index-CpEHNvOP.js";import{E as re}from"./el-link-C92YdR1P.js";const F=u=>G(u)||W(u)||$(u),ve=A({accordion:Boolean,modelValue:{type:B([Array,String,Number]),default:()=>P([])}}),ce={[K]:F,[q]:F},T=Symbol("collapseContextKey"),ne=(u,l)=>{const o=z(M(u.modelValue)),a=i=>{o.value=i;const s=u.accordion?o.value[0]:o.value;l(K,s),l(q,s)},t=i=>{if(u.accordion)a([o.value[0]===i?"":i]);else{const s=[...o.value],h=s.indexOf(i);h>-1?s.splice(h,1):s.push(i),a(s)}};return O(()=>u.modelValue,()=>o.value=M(u.modelValue),{deep:!0}),Z(T,{activeNames:o,handleItemClick:t}),{activeNames:o,setActiveNames:a}},me=()=>{const u=D("collapse");return{rootKls:v(()=>u.b())}},pe=k({name:"ElCollapse"}),ge=k({...pe,props:ve,emits:ce,setup(u,{expose:l,emit:o}){const a=u,{activeNames:t,setActiveNames:i}=ne(a,o),{rootKls:s}=me();return l({activeNames:t,setActiveNames:i}),(h,c)=>(p(),f("div",{class:d(e(s))},[E(h.$slots,"default")],2))}});var be=H(ge,[["__file","collapse.vue"]]);const de=A({title:{type:String,default:""},name:{type:B([String,Number]),default:void 0},disabled:Boolean}),fe=u=>{const l=R(T),{namespace:o}=D("collapse"),a=z(!1),t=z(!1),i=Q(),s=v(()=>i.current++),h=v(()=>{var j;return(j=u.name)!=null?j:`${o.value}-id-${i.prefix}-${e(s)}`}),c=v(()=>l==null?void 0:l.activeNames.value.includes(e(h)));return{focusing:a,id:s,isActive:c,handleFocus:()=>{setTimeout(()=>{t.value?t.value=!1:a.value=!0},50)},handleHeaderClick:()=>{u.disabled||(l==null||l.handleItemClick(e(h)),a.value=!1,t.value=!0)},handleEnterClick:()=>{l==null||l.handleItemClick(e(h))}}},xe=(u,{focusing:l,isActive:o,id:a})=>{const t=D("collapse"),i=v(()=>[t.b("item"),t.is("active",e(o)),t.is("disabled",u.disabled)]),s=v(()=>[t.be("item","header"),t.is("active",e(o)),{focusing:e(l)&&!u.disabled}]),h=v(()=>[t.be("item","arrow"),t.is("active",e(o))]),c=v(()=>t.be("item","wrap")),r=v(()=>t.be("item","content")),n=v(()=>t.b(`content-${e(a)}`)),w=v(()=>t.b(`head-${e(a)}`));return{arrowKls:h,headKls:s,rootKls:i,itemWrapperKls:c,itemContentKls:r,scopedContentId:n,scopedHeadId:w}},ye=["id","aria-expanded","aria-controls","aria-describedby","tabindex"],Ve=["id","aria-hidden","aria-labelledby"],ke=k({name:"ElCollapseItem"}),we=k({...ke,props:de,setup(u,{expose:l}){const o=u,{focusing:a,id:t,isActive:i,handleFocus:s,handleHeaderClick:h,handleEnterClick:c}=fe(o),{arrowKls:r,headKls:n,rootKls:w,itemWrapperKls:j,itemContentKls:L,scopedContentId:C,scopedHeadId:J}=xe(o,{focusing:a,isActive:i,id:t});return l({isActive:i}),(S,m)=>(p(),f("div",{class:d(e(w))},[g("button",{id:e(J),class:d(e(n)),"aria-expanded":e(i),"aria-controls":e(C),"aria-describedby":e(C),tabindex:S.disabled?-1:0,type:"button",onClick:m[0]||(m[0]=(...b)=>e(h)&&e(h)(...b)),onKeydown:m[1]||(m[1]=ee(te((...b)=>e(c)&&e(c)(...b),["stop","prevent"]),["space","enter"])),onFocus:m[2]||(m[2]=(...b)=>e(s)&&e(s)(...b)),onBlur:m[3]||(m[3]=b=>a.value=!1)},[E(S.$slots,"title",{},()=>[V(I(S.title),1)]),y(e(X),{class:d(e(r))},{default:x(()=>[y(e(Y))]),_:1},8,["class"])],42,ye),y(e(oe),null,{default:x(()=>[ue(g("div",{id:e(C),role:"region",class:d(e(j)),"aria-hidden":!e(i),"aria-labelledby":e(J)},[g("div",{class:d(e(L))},[E(S.$slots,"default")],2)],10,Ve),[[ie,e(i)]])]),_:3})],2))}});var U=H(we,[["__file","collapse-item.vue"]]);const je=le(be,{CollapseItem:U}),Se=se(U),ze=g("pre",null,[g("code",null,`
    Array.from($0.children).filter(v=>{
        return v.tagName=='OL'
    }).map(v=>{
        var nextSibling = v.previousSibling
        return {
            title:nextSibling.innerText,
            list:Array.from( v.children).map((v2)=>{
                var link = v2.querySelector('a');  
                var linkp = v2.querySelector('p');  
                return {          
                    href:link?.href,
                    title:link.innerText,
                    text:linkp?.innerText
                }
            })
        }
    })
    `)],-1),Ee=k({__name:"index",setup(u){const l=z([]),o=t=>{console.log(t)},a=ae({list:[{title:"一、UI组件及框架",list:[{href:"https://github.com/ElemeFE/element",title:"element",text:"element - 饿了么出品的Vue2的web UI工具套件"},{href:"https://github.com/ElemeFE/mint-ui",title:"mint-ui",text:"mint-ui - Vue 2的移动UI元素"},{href:"https://github.com/iview/iview",title:"iview",text:"iview - 基于 Vuejs 的开源 UI 组件库"},{href:"https://github.com/JosephusPaye/Keen-UI",title:"Keen-UI",text:"Keen-UI - 轻量级的基本UI组件合集"},{href:"https://github.com/marcosmoura/vue-material",title:"vue-material",text:"vue-material - 通过Vue Material和Vue 2建立精美的app应用"},{href:"https://github.com/museui/muse-ui",title:"muse-ui",text:"muse-ui - 三端样式一致的响应式 UI 库"},{href:"https://github.com/vuetifyjs/vuetify",title:"vuetify",text:"vuetify - 为移动而生的Vue JS 2组件框架"},{href:"https://github.com/wangdahoo/vonic",title:"vonic",text:"vonic - 快速构建移动端单页应用"},{href:"https://github.com/chenz24/vue-blu",title:"vue-blu",text:"vue-blu - 帮助你轻松创建web应用"},{href:"https://github.com/monterail/vue-multiselect",title:"vue-multiselect",text:"vue-multiselect - Vue.js选择框解决方案"},{href:"https://github.com/OYsun/VueCircleMenu",title:"VueCircleMenu",text:"VueCircleMenu - 漂亮的vue圆环菜单"},{href:"https://github.com/Coffcer/vue-chat",title:"vue-chat",text:"vue-chat - vuejs和vuex及webpack的聊天示例"},{href:"https://github.com/luojilab/radon-ui",title:"radon-ui",text:"radon-ui - 快速开发产品的Vue组件库"},{href:"https://github.com/MopTym/vue-waterfall",title:"vue-waterfall",text:"vue-waterfall - Vue.js的瀑布布局组件"},{href:"https://github.com/myronliu347/vue-carbon",title:"vue-carbon",text:"vue-carbon - 基于 vue 开发MD风格的移动端"},{href:"https://github.com/FE-Driver/vue-beauty",title:"vue-beauty",text:"vue-beauty - 由vue和ant design创建的优美UI组件"},{href:"https://github.com/pi0/bootstrap-vue",title:"bootstrap-vue",text:"bootstrap-vue - 应用于Vuejs2的Twitter的Bootstrap 4组件"},{href:"https://github.com/taylorchen709/vueAdmin",title:"vueAdmin",text:"vueAdmin - 基于vuejs2和element的简单的管理员模板"},{href:"https://github.com/lisiyizu/vue-ztree",title:"vue-ztree",text:"vue-ztree - 用 vue 写的树层级组件"},{href:"https://github.com/weibangtuo/vue-tree",title:"vue-tree",text:"vue-tree - vue树视图组件"},{href:"https://github.com/alexqdjay/vue-tabs",title:"vue-tabs",text:"vue-tabs - 多tab页轻型框架"}]},{title:"二、滚动scroll组件",list:[{href:"https://github.com/wangdahoo/vue-scroller",title:"vue-scroller",text:"vue-scroller - Vonic UI的功能性组件"},{href:"https://github.com/egoist/vue-mugen-scroll",title:"vue-mugen-scroll",text:"vue-mugen-scroll - 无限滚动组件"},{href:"https://github.com/PeachScript/vue-infinite-loading",title:"vue-infinite-loading",text:"vue-infinite-loading - VueJS的无限滚动插件"},{href:"https://github.com/Akryum/vue-virtual-scroller",title:"vue-virtual-scroller",text:"vue-virtual-scroller - 带任意数目数据的顺畅的滚动"},{href:"https://github.com/ElemeFE/vue-infinite-scroll",title:"vue-infinite-scroll",text:"vue-infinite-scroll - VueJS的无限滚动指令"},{href:"https://github.com/BosNaufal/vue-scrollbar",title:"vue-scrollbar",text:"vue-scrollbar - 最简单的滚动区域组件"},{href:"https://github.com/suguangwen/vue-scroll",title:"vue-scroll",text:"vue-scroll - vue滚动"},{href:"https://github.com/bajian/vue-pull-to-refresh",title:"vue-pull-to-refresh",text:"vue-pull-to-refresh - Vue2的上拉下拉"},{href:"https://github.com/mint-ui/mint-loadmore",title:"mint-loadmore",text:"mint-loadmore - VueJS的双向下拉刷新组件"},{href:"https://github.com/Teddy-Zhu/vue-smoothscroll",title:"vue-smoothscroll",text:"vue-smoothscroll - smoothscroll的VueJS版本"}]},{title:"三、slider组件",list:[{href:"https://github.com/surmon-china/vue-awesome-swiper",title:"vue-awesome-swiper",text:"vue-awesome-swiper - vue.js触摸滑动组件"},{href:"https://github.com/staskjs/vue-slick",title:"vue-slick",text:"vue-slick - 实现流畅轮播框的vue组件"},{href:"https://github.com/ElemeFE/vue-swipe",title:"vue-swipe",text:"vue-swipe - VueJS触摸滑块"},{href:"https://github.com/weilao/vue-swiper",title:"vue-swiper",text:"vue-swiper - 易于使用的滑块组件"},{href:"https://github.com/littlewin-wang/vue-images",title:"vue-images",text:"vue-images - 显示一组图片的lightbox组件"},{href:"https://github.com/Wlada/vue-carousel-3d",title:"vue-carousel-3d",text:"vue-carousel-3d - VueJS的3D轮播组件"},{href:"https://github.com/hilongjw/vue-slide",title:"vue-slide",text:"vue-slide - vue轻量级滑动组件"},{href:"https://github.com/warpcgd/vue-slider",title:"vue-slider",text:"vue-slider - vue 滑动组件"},{href:"https://github.com/shiye515/vue-m-carousel",title:"vue-m-carousel",text:"vue-m-carousel - vue 移动端轮播组件"},{href:"https://github.com/ibufu/dd-vue-component",title:"dd-vue-component",text:"dd-vue-component - 订单来了的公共组件库"},{href:"https://github.com/shhdgit/vue-easy-slider",title:"vue-easy-slider",text:"vue-easy-slider - Vue 2.x的滑块组件"}]},{title:`四、编辑器
`,list:[{href:"https://github.com/jrainlau/markcook",title:"markcook",text:"markcook - 好看的markdown编辑器"},{href:"https://github.com/egoist/eme",title:"eme",text:"eme - 优雅的Markdown编辑器"},{href:"https://github.com/vuejs/vue-syntax-highlight",title:"vue-syntax-highlight",text:"vue-syntax-highlight - Sublime Text语法高亮"},{href:"https://github.com/surmon-china/vue-quill-editor",title:"vue-quill-editor",text:"vue-quill-editor - 基于Quill适用于Vue2的富文本编辑器"},{href:"https://github.com/hifarer/Vueditor",title:"Vueditor",text:"Vueditor - 所见即所得的编辑器"},{href:"https://github.com/PeakTai/vue-html5-editor",title:"vue-html5-editor",text:"vue-html5-editor - html5所见即所得编辑器"},{href:"https://github.com/davidroyer/vue2-editor",title:"vue2-editor",text:"vue2-editor - HTML编辑器"},{href:"https://github.com/F-loat/vue-simplemde",title:"vue-simplemde",text:"vue-simplemde - VueJS的Markdown编辑器组件"},{href:"https://github.com/CroudSupport/vue-quill",title:"vue-quill",text:"vue-quill - vue组件构建quill编辑器"}]},{title:`五、图表
`,list:[{href:"https://github.com/ratiw/vue-table",title:"vue-table",text:"vue-table - 简化数据表格"},{href:"https://github.com/apertureless/vue-chartjs",title:"vue-chartjs",text:"vue-chartjs - vue中的Chartjs的封装"},{href:"https://github.com/hchstera/vue-charts",title:"vue-charts",text:"vue-charts - 轻松渲染一个图表"},{href:"https://github.com/miaolz123/vue-chart",title:"vue-chart",text:"vue-chart - 强大的高速的vue图表解析"},{href:"https://github.com/weizhenye/vue-highcharts",title:"vue-highcharts",text:"vue-highcharts - HighCharts组件"},{href:"https://github.com/vue-bulma/chartjs",title:"chartjs",text:"chartjs - Vue Bulma的chartjs组件"},{href:"https://github.com/ankane/vue-chartkick",title:"vue-chartkick",text:"vue-chartkick - VueJS一行代码实现优美图表"}]},{title:"六、日历",list:[{href:"https://github.com/jinzhe/vue-calendar",title:"vue-calendar",text:"vue-calendar - 日期选择插件"},{href:"https://github.com/hilongjw/vue-datepicker",title:"vue-datepicker",text:"vue-datepicker - 日历和日期选择组件"},{href:"https://github.com/Haixing-Hu/vue-datetime-picker",title:"vue-datetime-picker",text:"vue-datetime-picker - 日期时间选择控件"},{href:"https://github.com/icai/vue2-calendar",title:"vue2-calendar",text:"vue2-calendar - 支持lunar和日期事件的日期选择器"},{href:"https://github.com/Wanderxx/vue-fullcalendar",title:"vue-fullcalendar",text:"vue-fullcalendar - 基于vue.js的全日历组件"},{href:"https://github.com/weifeiyue/vue-datepicker",title:"vue-datepicker",text:"vue-datepicker - 漂亮的Vue日期选择器组件"},{href:"https://github.com/vue-bulma/datepicker",title:"datepicker",text:"datepicker - 基于flatpickr的时间选择组件"},{href:"https://github.com/phoenixwong/vue2-timepicker",title:"vue2-timepicker",text:"vue2-timepicker - 下拉时间选择器"},{href:"https://github.com/Bubblings/vue-date-picker",title:"vue-date-picker",text:"vue-date-picker - VueJS日期选择器组件"},{href:"https://github.com/dai-siki/vue-datepicker-simple",title:"vue-datepicker-simple",text:"vue-datepicker-simple - 基于vue的日期选择器"}]},{title:"七、地址选择",list:[{href:"https://github.com/xinxingyu/vue-city",title:"vue-city",text:"vue-city - 城市选择器"},{href:"https://github.com/QingWei-Li/vue-region-picker",title:"vue-region-picker",text:"vue-region-picker - 选择中国的省份市和地区"}]},{title:"八、地图",list:[{href:"https://github.com/ElemeFE/vue-amap",title:"vue-amap",text:"vue-amap - 基于Vue 2和高德地图的地图组件"},{href:"https://github.com/GuillaumeLeclerc/vue-google-maps",title:"vue-google-maps",text:"vue-google-maps - 带有双向数据绑定Google地图组件"},{href:"https://github.com/Dafrok/vue-baidu-map",title:"vue-baidu-map",text:"vue-baidu-map- 基于 Vue 2的百度地图组件库"},{href:"https://github.com/doodlewind/vue-cmap",title:"vue-cmap",text:"vue-cmap - Vue China map可视化组件"}]},{title:"九、播放器",list:[{href:"https://github.com/surmon-china/vue-video-player",title:"vue-video-player",text:"vue-video-player - VueJS视频及直播播放器"},{href:"https://github.com/hilongjw/vue-video",title:"vue-video",text:"vue-video - Vue.js的HTML5视频播放器"},{href:"https://github.com/yunyi1895/vue-music-master",title:"vue-music-master",text:"vue-music-master - vue手机端网页音乐播放器"}]},{title:"十、文件上传",list:[{href:"https://github.com/lian-yue/vue-upload-component",title:"vue-upload-component",text:"vue-upload-component - Vuejs文件上传组件"},{href:"https://github.com/Vanthink-UED/vue-core-image-upload",title:"vue-core-image-upload",text:"vue-core-image-upload - 轻量级的vue上传插件"},{href:"https://github.com/rowanwins/vue-dropzone",title:"vue-dropzone",text:"vue-dropzone - 用于文件上传的Vue组件"}]},{title:"十一、图片处理",list:[{href:"https://github.com/JALBAA/vue-lazyload-img",title:"vue-lazyload-img",text:"vue-lazyload-img - 移动优化的vue图片懒加载插件"},{href:"https://github.com/dai-siki/vue-image-crop-upload",title:"vue-image-crop-upload",text:"vue-image-crop-upload - vue图片剪裁上传组件"},{href:"https://github.com/MMF-FE/vue-svgicon",title:"vue-svgicon",text:"vue-svgicon - 创建svg图标组件的工具"},{href:"https://github.com/JackGit/vue-img-loader",title:"vue-img-loader",text:"vue-img-loader - 图片加载UI组件"},{href:"https://github.com/legeneek/vue-image-clip",title:"vue-image-clip",text:"vue-image-clip- 基于vue的图像剪辑组件"},{href:"https://github.com/MatteoGabriele/vue-progressive-image",title:"vue-progressive-image",text:"vue-progressive-image - Vue的渐进图像加载插件"}]},{title:"十二、提示",list:[{href:"https://github.com/ElemeFE/vue-toast-mobile",title:"vue-toast-mobile",text:"vue-toast-mobile - VueJS的toast插件"},{href:"https://github.com/ElemeFE/vue-msgbox",title:"vue-msgbox",text:"vue-msgbox - vuejs的消息框"},{href:"https://github.com/Akryum/vue-tooltip",title:"vue-tooltip",text:"vue-tooltip - 带绑定信息提示的提示工具"},{href:"https://github.com/aweiu/vue-verify-pop",title:"vue-verify-pop",text:"vue-verify-pop - 带气泡提示的vue校验插件"}]},{title:"十三、进度条",list:[{href:"https://github.com/wyzant-dev/vue-radial-progress",title:"vue-radial-progress",text:"vue-radial-progress - Vue.js放射性进度条组件"},{href:"https://github.com/hilongjw/vue-progressbar",title:"vue-progressbar",text:"vue-progressbar - vue轻量级进度条"},{href:"https://github.com/BosNaufal/vue2-loading-bar",title:"vue2-loading-bar",text:"vue2-loading-bar - 最简单的仿Youtube加载条视图"}]},{title:"十四、开发框架汇总",list:[{href:"https://github.com/fundon/vue-admin",title:"vue-admin",text:"vue-admin - Vue管理面板框架"},{href:"https://github.com/SimulatedGREG/electron-vue",title:"electron-vue",text:"electron-vue - Electron及VueJS快速启动样板"},{href:"https://github.com/petervmeijgaard/vue-2.0-boilerplate",title:"vue-2.0-boilerplate",text:"vue-2.0-boilerplate - Vue2单页应用样板"},{href:"https://github.com/rodzzlessa24/vue-webgulp",title:"vue-webgulp",text:"vue-webgulp - 仿VueJS Vue loader示例"},{href:"https://github.com/wangxg2016/vue-bulma",title:"vue-bulma",text:"vue-bulma - 轻量级高性能MVVM Admin UI框架"},{href:"https://github.com/hanan198501/vue-spa-template",title:"vue-spa-template",text:"vue-spa-template - 前后端分离后的单页应用开发"},{href:"https://github.com/nolimits4web/Framework7-Vue",title:"Framework7-Vue",text:"Framework7-Vue - VueJS与Framework7结合"},{href:"https://github.com/Metnew/vue-element-starter",title:"vue-element-starter",text:"vue-element-starter - vue启动页"}]},{title:"十五、实用库汇总",list:[{href:"https://github.com/monterail/vuelidate",title:"vuelidate",text:"vuelidate - 简单轻量级的基于模块的Vue.js验证"},{href:"https://github.com/zerqu/qingcheng",title:"qingcheng",text:"qingcheng - qingcheng主题"},{href:"https://github.com/vuejs/vuex",title:"vuex",text:"vuex - 专为 Vue.js 应用程序开发的状态管理模式"},{href:"https://github.com/imcvampire/vue-axios",title:"vue-axios",text:"vue-axios - 将axios整合到VueJS的封装"},{href:"https://github.com/ElemeFE/vue-desktop",title:"vue-desktop",text:"vue-desktop - 创建管理面板网站的UI库"},{href:"https://github.com/declandewet/vue-meta",title:"vue-meta",text:"vue-meta - 管理app的meta信息"},{href:"https://github.com/eddyerburgh/avoriaz",title:"avoriaz",text:"avoriaz - VueJS测试实用工具库"},{href:"https://github.com/lmk123/vue-framework7",title:"vue-framework7",text:"vue-framework7 - 结合VueJS使用的Framework7组件"},{href:"https://github.com/yeyuqiudeng/vue-lazy-render",title:"vue-lazy-render",text:"vue-lazy-render - 用于Vue组件的延迟渲染"},{href:"https://github.com/cenkai88/vue-svg-icon",title:"vue-svg-icon",text:"vue-svg-icon - vue2的可变彩色svg图标方案"},{href:"https://github.com/Sopamo/vue-online",title:"vue-online",text:"vue-online - reactive的在线和离线组件"},{href:"https://github.com/apertureless/vue-password-strength-meter",title:"vue-password-strength-meter",text:"vue-password-strength-meter - 交互式密码强度计"},{href:"https://github.com/QingWei-Li/vuep",title:"vuep",text:"vuep - 用实时编辑和预览来渲染Vue组件"},{href:"https://github.com/Coffcer/vue-bootstrap-modal",title:"vue-bootstrap-modal",text:"vue-bootstrap-modal - vue的Bootstrap样式组件"},{href:"https://github.com/lynzz/element-admin",title:"element-admin",text:"element-admin - 支持 vuecli 的 Element UI 的后台模板"},{href:"https://github.com/iFgR/vue-shortkey",title:"vue-shortkey",text:"vue-shortkey - 应用于Vue.js的Vue-ShortKey 插件"},{href:"https://github.com/vue-bulma/cleave",title:"cleave",text:"cleave - 基于cleave.js的Cleave组件"},{href:"https://github.com/cklmercer/vue-events",title:"vue-events",text:"vue-events - 简化事件的VueJS插件"},{href:"https://github.com/FranckFreiburger/http-vue-loader",title:"http-vue-loader",text:"http-vue-loader - 从html及js环境加载vue文件"},{href:"https://github.com/SimulatedGREG/vue-electron",title:"vue-electron",text:"vue-electron - 将选择的API封装到Vue对象中的插件"},{href:"https://github.com/weinot/vue-router-transition",title:"vue-router-transition",text:"vue-router-transition - 页面过渡插件"},{href:"https://github.com/gocanto/vuemit",title:"vuemit",text:"vuemit - 处理VueJS事件"},{href:"https://github.com/kartsims/vue-cordova",title:"vue-cordova",text:"vue-cordova - Cordova的VueJS插件"},{href:"https://github.com/superman66/vue-qart",title:"vue-qart",text:"vue-qart - 用于qartjs的Vue2指令"},{href:"https://github.com/icebob/vue-websocket",title:"vue-websocket",text:"vue-websocket - VueJS的Websocket插件"},{href:"https://github.com/mlyknown/vue-gesture",title:"vue-gesture",text:"vue-gesture - VueJS的手势事件插件"},{href:"https://github.com/pinguinjkeke/vue-local-storage",title:"vue-local-storage",text:"vue-local-storage - 具有类型支持的Vuejs本地储存插件"},{href:"https://github.com/gocanto/lazy-vue",title:"lazy-vue",text:"lazy-vue - 懒加载图片"},{href:"https://github.com/yodfz/vue-lazyloadImg",title:"vue-lazyloadImg",text:"vue-lazyloadImg - 图片懒加载插件"},{href:"https://github.com/yangmingshan/vue-bus",title:"vue-bus",text:"vue-bus - VueJS的事件总线"},{href:"https://github.com/Akryum/vue-observe-visibility",title:"vue-observe-visibility",text:"vue-observe-visibility - 当元素在页面上可见或隐藏时检测"},{href:"https://github.com/se-panfilov/vue-notifications",title:"vue-notifications",text:"vue-notifications - 非阻塞通知库"},{href:"https://github.com/AStaroverov/v-media-query",title:"v-media-query",text:"v-media-query - vue中添加用于配合媒体查询的方法"},{href:"https://github.com/xanf/vuex-shared-mutations",title:"vuex-shared-mutations",text:"vuex-shared-mutations - 分享某种Vuex mutations"},{href:"https://github.com/Coffcer/vue-lazy-component",title:"vue-lazy-component",text:"vue-lazy-component - 懒加载组件或者元素的Vue指令"},{href:"https://github.com/ropbla9/vue-reactive-storage",title:"vue-reactive-storage",text:"vue-reactive-storage - vue插件的Reactive层"},{href:"https://github.com/HerringtonDarkholme/vue-ts-loader",title:"vue-ts-loader",text:"vue-ts-loader - 在Vue装载机检查脚本"},{href:"https://github.com/matfish2/vue-pagination-2",title:"vue-pagination-2",text:"vue-pagination-2 - 简单通用的分页组件"},{href:"https://github.com/dkfbasel/vuex-i18n",title:"vuex-i18n",text:"vuex-i18n - 定位插件"},{href:"https://github.com/David-Desmaisons/Vue.resize",title:"Vue.resize",text:"Vue.resize - 检测HTML调整大小事件的vue指令"},{href:"https://github.com/vue-comps/vue-zoombox",title:"vue-zoombox",text:"vue-zoombox - 一个高级zoombox"},{href:"https://github.com/LeoHuiyi/leo-vue-validator",title:"leo-vue-validator",text:"leo-vue-validator - 异步的表单验证组件"},{href:"https://github.com/vue-bulma/modal",title:"modal",text:"modal - Vue Bulma的modal组件"},{href:"https://github.com/irwansyahwii/Famous-Vue",title:"Famous-Vue",text:"Famous-Vue - Famous库的vue组件"},{href:"https://github.com/syropian/vue-input-autosize",title:"vue-input-autosize",text:"vue-input-autosize - 基于内容自动调整文本输入的大小"},{href:"https://github.com/BosNaufal/vue-file-base64",title:"vue-file-base64",text:"vue-file-base64 - 将文件转换为Base64的vue组件"},{href:"https://github.com/MetinSeylan/Vue-Easy-Validator",title:"Vue-Easy-Validator",text:"Vue-Easy-Validator - 简单的表单验证"},{href:"https://github.com/imcvampire/vue-truncate-filter",title:"vue-truncate-filter",text:"vue-truncate-filter - 截断字符串的VueJS过滤器"}]},{title:"十六、服务端",list:[{href:"https://github.com/hilongjw/vue-ssr",title:"vue-ssr",text:"vue-ssr - 结合Express使用Vue2服务端渲染"},{href:"https://github.com/nuxt/nuxt.js",title:"nuxt.js",text:"nuxt.js - 用于服务器渲染Vue app的最小化框架"},{href:"https://github.com/ccforward/vue-ssr",title:"vue-ssr",text:"vue-ssr - 非常简单的VueJS服务器端渲染模板"},{href:"https://github.com/leaves4j/vue-easy-renderer",title:"vue-easy-renderer",text:"vue-easy-renderer - Nodejs服务端渲染"},{href:"https://github.com/danmademe/express-vue",title:"express-vue",text:"express-vue - 简单的使用服务器端渲染vue.js"}]},{title:"十七、辅助工具",list:[{href:"https://github.com/MiCottOn/DejaVue",title:"DejaVue",text:"DejaVue - Vuejs可视化及压力测试"},{href:"https://github.com/NetanelBasal/vue-generate-component",title:"vue-generate-component",text:"vue-generate-component - 轻松生成Vue js组件的CLI工具"},{href:"https://github.com/OYsun/vscode-VueHelper",title:"vscode-VueHelper",text:"vscode-VueHelper - 目前vscode最好的vue代码提示插件"},{href:"https://github.com/vue-play/vue-play",title:"vue-play",text:"vue-play - 展示Vue组件的最小化框架"},{href:"https://github.com/MetinSeylan/VuejsStarterKit",title:"VuejsStarterKit",text:"VuejsStarterKit - vuejs starter套件"},{href:"https://github.com/xwpongithub/vue-multipage-cli",title:"vue-multipage-cli",text:"vue-multipage-cli - 简单的多页CLI"}]},{title:"十八、应用实例",list:[{href:"https://github.com/pagekit/pagekit",title:"pagekit",text:"pagekit - 轻量级的CMS建站系统"},{href:"https://github.com/Vuedo/vuedo",title:"vuedo",text:"vuedo - 博客平台"},{href:"https://github.com/phanan/koel",title:"koel",text:"koel - 基于网络的个人音频流媒体服务"},{href:"https://github.com/ycwalker/CMS-of-Blog",title:"CMS-of-Blog",text:"CMS-of-Blog - 博客内容管理器"},{href:"https://github.com/lzxb/vue-cnode",title:"vue-cnode",text:"vue-cnode - 重写vue版cnode社区"},{href:"https://github.com/viko16/vue-ghpages-blog",title:"vue-ghpages-blog",text:"vue-ghpages-blog - 依赖GitHub Pages无需本地生成的静态博客"},{href:"https://github.com/wh469012917/swoole-vue-webim",title:"swoole-vue-webim",text:"swoole-vue-webim - Web版的聊天应用"},{href:"https://github.com/sapjax/fewords",title:"fewords",text:"fewords - 功能极其简单的笔记本"},{href:"https://github.com/jackhutu/jackblog-vue",title:"jackblog-vue",text:"jackblog-vue - 个人博客系统"},{href:"https://github.com/surmon-china/vue-blog",title:"vue-blog",text:"vue-blog - 使用Vue2.0 和Vuex的vue-blog"},{href:"https://github.com/thelinuxlich/vue-dashing-js",title:"vue-dashing-js",text:"vue-dashing-js - nuvo-dashing-js的fork"},{href:"https://github.com/mrgodhani/rss-reader",title:"rss-reader",text:"rss-reader - 简单的rss阅读器"}]},{title:"十九、Demo示例",list:[{href:"https://github.com/liangxiaojuan/eleme",title:"eleme",text:"eleme - 高仿饿了么app商家详情"},{href:"https://github.com/javaSwing/NeteaseCloudWebApp",title:"NeteaseCloudWebApp",text:"NeteaseCloudWebApp - 高仿网易云音乐的webapp"},{href:"https://github.com/hilongjw/vue-zhihu-daily",title:"vue-zhihu-daily",text:"vue-zhihu-daily - 知乎日报 with Vuejs"},{href:"https://github.com/shinygang/Vue-cnodejs",title:"Vue-cnodejs",text:"Vue-cnodejs - 基于vue重写Cnodejs.org的webapp"},{href:"https://github.com/lzxb/vue2-demo",title:"vue2-demo",text:"vue2-demo - 从零构建vue2 + vue-router + vuex 开发环境"},{href:"https://github.com/useryangtao/vue-wechat",title:"vue-wechat",text:"vue-wechat - vue.js开发微信app界面"},{href:"https://github.com/Sioxas/vue-music",title:"vue-music",text:"vue-music - Vue 音乐搜索播放"},{href:"https://github.com/zhengguorong/maizuo",title:"maizuo",text:"maizuo - vue/vuex/redux仿卖座网"},{href:"https://github.com/kenberkeley/vue-demo",title:"vue-demo",text:"vue-demo - vue简易留言板"},{href:"https://github.com/codecasts/spa-starter-kit",title:"spa-starter-kit",text:"spa-starter-kit - 单页应用启动套件"},{href:"https://github.com/yatessss/zhihudaily-vue",title:"zhihudaily-vue",text:"zhihudaily-vue - 知乎日报web版"},{href:"https://github.com/jiakeqi/douban",title:"douban",text:"douban - 模仿豆瓣前端"},{href:"https://github.com/liangxiaojuan/vue-Meizi",title:"vue-Meizi",text:"vue-Meizi - vue最新实战项目"},{href:"https://github.com/lavyun/vue-demo-kugou",title:"vue-demo-kugou",text:"vue-demo-kugou - vuejs仿写酷狗音乐webapp"},{href:"https://github.com/canfoo/vue2.0-taopiaopiao",title:"vue2.0-taopiaopiao",text:"vue2.0-taopiaopiao - vue2.0与express构建淘票票页面"},{href:"https://github.com/yjj5855/node-vue-server-webpack",title:"node-vue-server-webpack",text:"node-vue-server-webpack - Node.js+Vue.js+webpack快速开发框架"},{href:"https://github.com/SimonZhangITer/VueDemo_Sell_Eleme",title:"VueDemo_Sell_Eleme",text:"VueDemo_Sell_Eleme - Vue2高仿饿了么外卖平台"},{href:"https://github.com/jiangjiu/vue-leancloud-blog",title:"vue-leancloud-blog",text:"vue-leancloud-blog - 一个前后端完全分离的单页应用"},{href:"https://github.com/okoala/vue-fis3",title:"vue-fis3",text:"vue-fis3 - 流行开源工具集成demo"},{href:"https://github.com/wendaosanshou/mi-by-vue",title:"mi-by-vue",text:"mi-by-vue - VueJS仿小米官网"},{href:"https://github.com/ChuckCZC/vue-demo-maizuo",title:"vue-demo-maizuo",text:"vue-demo-maizuo - 使用Vue2全家桶仿制卖座电影"},{href:"https://github.com/superman66/vue2.x-douban",title:"vue2.x-douban",text:"vue2.x-douban - Vue2实现简易豆瓣电影webApp"},{href:"https://github.com/liujians/vue-adminLte-vue-router",title:"vue-adminLte-vue-router",text:"vue-adminLte-vue-router - vue和adminLte整合应用"},{href:"https://github.com/iHaPBoy/vue-zhihudaily",title:"vue-zhihudaily",text:"vue-zhihudaily - 知乎日报 Web 版本"},{href:"https://github.com/pomelo-chuan/Zhihu-Daily-Vue.js",title:"Zhihu-Daily-Vue.js",text:"Zhihu-Daily-Vue.js - Vuejs单页网页应用"},{href:"https://github.com/superman66/vue-axios-github",title:"vue-axios-github",text:"vue-axios-github - 登录拦截登出功能"},{href:"https://github.com/vincentSea/vue2.x-Cnode",title:"vue2.x-Cnode",text:"vue2.x-Cnode - 基于vue全家桶的Cnode社区"},{href:"https://github.com/rokups/hello-vue-django",title:"hello-vue-django",text:"hello-vue-django - 使用带有Django的vuejs的样板项目"},{href:"https://github.com/secreter/websocket_chat",title:"websocket_chat",text:"websocket_chat - 基于vue和websocket的多人在线聊天室"},{href:"https://github.com/CommanderXL/x-blog",title:"x-blog",text:"x-blog - 开源的个人blog项目"},{href:"https://github.com/wszgxa/vue-cnode",title:"vue-cnode",text:"vue-cnode - vue单页应用demo"},{href:"https://github.com/xrr2016/vue-express-mongodb",title:"vue-express-mongodb",text:"vue-express-mongodb - 简单的前后端分离案例"},{href:"https://github.com/beidan/photoShare",title:"photoShare",text:"photoShare - 基于图片分享的社交平台"},{href:"https://github.com/lin-xin/notepad",title:"notepad",text:"notepad - 本地存储的记事本"},{href:"https://github.com/cs1707/vue-zhihudaily-2.0",title:"vue-zhihudaily-2.0",text:"vue-zhihudaily-2.0 - 使用Vue2.0+vue-router+vuex创建的zhihudaily"},{href:"https://github.com/elva2596/vueBlog",title:"vueBlog",text:"vueBlog - 前后端分离博客"},{href:"https://github.com/littlewin-wang/Zhihu_Daily",title:"Zhihu_Daily",text:"Zhihu_Daily - 基于Vue和Nodejs的Web单页应用"},{href:"https://github.com/hql123/vue-ruby-china",title:"vue-ruby-china",text:"vue-ruby-china - VueJS框架搭建的rubychina平台"},{href:"https://github.com/Molunerfinn/vue-koa-demo",title:"vue-koa-demo",text:"vue-koa-demo - 使用Vue2和Koa1的全栈demo"},{href:"https://github.com/shaqihe/life-app-vue",title:"life-app-vue",text:"life-app-vue - 使用vue2完成多功能集合到小webapp"},{href:"https://github.com/wenye123/vue-trip",title:"vue-trip",text:"vue-trip - vue2做的出行webapp"},{href:"https://github.com/SidKwok/github-explorer",title:"github-explorer",text:"github-explorer - 寻找最有趣的GitHub库"},{href:"https://github.com/albertchan/vue-ssr-boilerplate",title:"vue-ssr-boilerplate",text:"vue-ssr-boilerplate - 精简版的ofvue-hackernews-2"},{href:"https://github.com/nswbmw/vue-bushishiren",title:"vue-bushishiren",text:"vue-bushishiren - 不是诗人应用"},{href:"https://github.com/peng1992/houtai",title:"houtai",text:"houtai - 基于vue和Element的后台管理系统"},{href:"https://github.com/QRL909109/ios7-vue",title:"ios7-vue",text:"ios7-vue - 使用vue2.0 vue-router vuex模拟ios7"},{href:"https://github.com/tyllo/Framework7-VueJS",title:"Framework7-VueJS",text:"Framework7-VueJS - 使用移动框架的示例"},{href:"https://github.com/BubblyPoker/cnode-vue",title:"cnode-vue",text:"cnode-vue - 基于vue和vue-router构建的cnodejs web网站SPA"},{href:"https://github.com/zhoou/vue-cli-multipage-bootstrap",title:"vue-cli-multipage-bootstrap",text:"vue-cli-multipage-bootstrap - 将vue官方在线示例整合到组件中"},{href:"https://github.com/jiananle/vue-cnode",title:"vue-cnode",text:"vue-cnode - 用 Vue 做的 CNode 官网"},{href:"https://github.com/Alex-xd/seeMusic",title:"seeMusic",text:"seeMusic - 跨平台云音乐播放器"},{href:"https://github.com/GitaiQAQ/HyaReader",title:"HyaReader",text:"HyaReader - 移动友好的阅读器"},{href:"https://github.com/xrr2016/zhihu-daily",title:"zhihu-daily",text:"zhihu-daily - 轻松查看知乎日报内容"},{href:"https://github.com/Damonlw/vue-cnode",title:"vue-cnode",text:"vue-cnode - 使用cNode社区提供的接口"},{href:"https://github.com/moonou/zhihu-daily-vue",title:"zhihu-daily-vue",text:"zhihu-daily-vue - 知乎日报"},{href:"https://github.com/ITCNZ/vue-dropload",title:"vue-dropload",text:"vue-dropload - 用以测试下拉加载与简单路由"},{href:"https://github.com/soulcm/vue-cnode-mobile",title:"vue-cnode-mobile",text:"vue-cnode-mobile - 搭建cnode社区"},{href:"https://github.com/fishenal/Vuejs-SalePlatform",title:"Vuejs-SalePlatform",text:"Vuejs-SalePlatform - vuejs搭建的售卖平台demo"},{href:"https://github.com/youknowznm/vue-memo",title:"vue-memo",text:"vue-memo - 用 vue写的记事本应用"},{href:"https://github.com/sailengsi/sls-vuex2-demo",title:"sls-vuex2-demo",text:"sls-vuex2-demo - vuex2商城购物车demo"},{href:"https://github.com/Halfeld/v-notes",title:"v-notes",text:"v-notes - 简单美观的记事本"},{href:"https://github.com/BosNaufal/vue-starter",title:"vue-starter",text:"vue-starter - VueJs项目的简单启动页"}]},{title:"二十、其他实用插件汇总",list:[{href:"https://github.com/hilongjw/vue-dragging",title:"vue-dragging",text:"vue-dragging- 使元素可以拖拽"},{href:"https://github.com/David-Desmaisons/Vue.Draggable",title:"Vue.Draggable",text:"Vue.Draggable- 实现拖放和视图模型数组同步"},{href:"https://github.com/alessiomaffeis/vue-picture-input",title:"vue-picture-input",text:"vue-picture-input- 移动友好的图片文件输入组件"},{href:"https://github.com/ccforward/rubik",title:"rubik",text:"rubik- 基于Vuejs2的开源 UI 组件库"},{href:"https://github.com/OYsun/VueStar",title:"VueStar",text:"VueStar- 带星星动画的vue点赞按钮"},{href:"https://github.com/matfish2/vue-tables-2",title:"vue-tables-2",text:"vue-tables-2- 显示数据的bootstrap样式网格"},{href:"https://github.com/SimonZhangITer/DataVisualization",title:"DataVisualization",text:"DataVisualization- 数据可视化"},{href:"https://github.com/Alex-fun/vue-drag-and-drop-list",title:"vue-drag-and-drop-list",text:"vue-drag-and-drop-list- 创建排序列表的Vue指令"},{href:"https://github.com/vuwe/vuwe",title:"vuwe",text:"vuwe- 基于微信WeUI所开发的专用于Vue2的组件库"},{href:"https://github.com/cngu/vue-typer",title:"vue-typer",text:"vue-typer- 模拟用户输入选择和删除文本的Vue组件"},{href:"https://github.com/NewDadaFE/vue-impression",title:"vue-impression",text:"vue-impression- 移动Vuejs2 UI元素"},{href:"https://github.com/galenyuan/vue-datatable",title:"vue-datatable",text:"vue-datatable- 使用Vuejs创建的DataTableView"},{href:"https://github.com/santiblanko/vue-instant",title:"vue-instant",text:"vue-instant- 轻松创建自动提示的自定义搜索控件"},{href:"https://github.com/NightCatSama/vue-slider-component",title:"vue-slider-component",text:"vue-slider-component- 在vue1和vue2中使用滑块"},{href:"https://github.com/surmon-china/vue-touch-ripple",title:"vue-touch-ripple",text:"vue-touch-ripple- vuejs的触摸ripple组件"},{href:"https://github.com/Kocisov/coffeebreak",title:"coffeebreak",text:"coffeebreak- 实时编辑CSS组件工具"},{href:"https://github.com/coderdiaz/vue-datasource",title:"vue-datasource",text:"vue-datasource- 创建VueJS动态表格"},{href:"https://github.com/vue-bulma/handsontable",title:"handsontable",text:"handsontable- 网页表格组件"},{href:"https://github.com/jbaysolutions/vue-bootstrap-table",title:"vue-bootstrap-table",text:"vue-bootstrap-table- 可排序可检索的表格"},{href:"https://github.com/phanan/vue-google-signin-button",title:"vue-google-signin-button",text:"vue-google-signin-button- 导入谷歌登录按钮"},{href:"https://github.com/bkzl/vue-float-label",title:"vue-float-label",text:"vue-float-label- VueJS浮动标签模式"},{href:"https://github.com/Ginhing/vue-tagsinput",title:"vue-tagsinput",text:"vue-tagsinput- 基于VueJS的标签组件"},{href:"https://github.com/nicolasbeauvais/vue-social-sharing",title:"vue-social-sharing",text:"vue-social-sharing- 社交分享组件"},{href:"https://github.com/myronliu347/vue-popup-mixin",title:"vue-popup-mixin",text:"vue-popup-mixin- 用于管理弹出框的遮盖层"},{href:"https://github.com/fangyongbao/cubeex",title:"cubeex",text:"cubeex- 包含一套完整的移动UI"},{href:"https://github.com/CroudSupport/vue-fullcalendar",title:"vue-fullcalendar",text:"vue-fullcalendar- vue FullCalendar封装"},{href:"https://github.com/loujiayu/vue-material-design",title:"vue-material-design",text:"vue-material-design- Vue MD风格组件"},{href:"https://github.com/bbonnin/vue-morris",title:"vue-morris",text:"vue-morris- Vuejs组件封装Morrisjs库"},{href:"https://github.com/tianyong90/we-vue",title:"we-vue",text:"we-vue- Vue2及weui1开发的组件"},{href:"https://github.com/matfish2/vue-form-2",title:"vue-form-2",text:"vue-form-2- 全面的HTML表单管理的解决方案"},{href:"https://github.com/vue-comps/vue-side-nav",title:"vue-side-nav",text:"vue-side-nav- 响应式的侧边导航"},{href:"https://github.com/mint-ui/mint-indicator",title:"mint-indicator",text:"mint-indicator- VueJS移动加载指示器插件"},{href:"https://github.com/BosNaufal/vue-ripple",title:"vue-ripple",text:"vue-ripple- 制作谷歌MD风格涟漪效果的Vue组件"},{href:"https://github.com/icebob/vue-touch-keyboard",title:"vue-touch-keyboard",text:"vue-touch-keyboard- VueJS虚拟键盘组件"},{href:"https://github.com/vue-comps/vue-parallax",title:"vue-parallax",text:"vue-parallax- 整洁的视觉效果"},{href:"https://github.com/eduardostuart/vue-typewriter",title:"vue-typewriter",text:"vue-typewriter- vue组件类型"},{href:"https://github.com/Treri/vue-ios-alertview",title:"vue-ios-alertview",text:"vue-ios-alertview- iOS7+ 风格的alertview服务"},{href:"https://github.com/yeseason/paco-ui-vue",title:"paco-ui-vue",text:"paco-ui-vue- PACOUI的vue组件"},{href:"https://github.com/steven5538/vue-button",title:"vue-button",text:"vue-button- Vue按钮组件"}]}]});return l.value=a.list.map(t=>t.title),(t,i)=>{const s=re,h=Se,c=je;return p(),f(_,null,[y(s,{type:"primary",target:"_blank",href:"https://tangjiusheng.com/vue/155.html"},{default:x(()=>[V("原文链接")]),_:1}),y(c,{modelValue:l.value,"onUpdate:modelValue":i[0]||(i[0]=r=>l.value=r),onChange:o},{default:x(()=>[(p(!0),f(_,null,N(a.list,r=>(p(),he(h,{key:r.title,title:r.title,name:r.title},{default:x(()=>[g("div",null,[g("ul",null,[(p(!0),f(_,null,N(r.list,n=>(p(),f("li",null,[y(s,{type:"primary",target:"_blank",href:n.href},{default:x(()=>[V(I(n.title),1)]),_:2},1032,["href"]),V(" "+I(n.text.replace(n.title,"")),1)]))),256))])])]),_:2},1032,["title","name"]))),128))]),_:1},8,["modelValue"]),V(" 数据获取方式 "),ze],64)}}});export{Ee as default};