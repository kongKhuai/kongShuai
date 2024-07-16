/*
 * @Author: 16651618507@163.com
 * @Date: 2024-04-01 21:52:49
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-07-16 18:53:08
 * @FilePath: \kongShuai\src\main.ts
 * @Description:
 *
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'virtual:uno.css'
import 'uno.css'
//重置浏览器默认样式
import '@unocss/reset/tailwind.css'
import App from './App.vue'
import router from './router'
// E:\study\vue3\new\new-plus\src\
import '@/assets/iconfont/iconfont.css'

const app = createApp(App)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }

app.use(createPinia())
// app.use(ElementPlus)
app.use(router)

app.mount('#app')
