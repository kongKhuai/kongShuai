/*
 * @Author: 16651618507@163.com
 * @Date: 2024-04-01 21:52:49
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-16 11:03:18
 * @FilePath: \new-plus\src\main.ts
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

import App from './App.vue'
import router from './router'

const app = createApp(App)
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }

app.use(createPinia())
// app.use(ElementPlus)
app.use(router)

app.mount('#app')
