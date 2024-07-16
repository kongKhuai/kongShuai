/*
 * @Author: 16651618507@163.com
 * @Date: 2024-04-01 21:52:49
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-18 22:30:11
 * @FilePath: \new-plus\src\router\index.ts
 * @Description:
 *
 */
import { createRouter, createWebHistory } from 'vue-router'
import layout from '../views/layout/index.vue'
import login from '../views/login/index.vue'
import home from '../views/login/home.vue'
import ecology from './ecology'
import canvas from './canvas'
import echarts from './echarts'
import svg from './svg'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/eCharts/datavReportDev',
      component: layout,
      meta: {
        title: '首页',
        isShow: true
      },
      children: [
        {
          path: 'home',
          name: 'homePage',
          component: home,
          meta: {
            title: '首页',
            isShow: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: '登录',
        isShow: false
      },
      children: []
    },
    ...ecology,
    ...canvas,
    ...echarts,
    ...svg,
    {
      path: '/other',
      name: 'other',
      component: layout,
      meta: {
        title: '其他',
        isShow: true
      },
      children: [
        {
          path: 'about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue'),
          meta: {
            title: '关于',
            isShow: true
          }
        },
        {
          path: 'icon',
          name: 'icon',
          meta: {
            title: 'icon测试',
            isShow: true
          },
          component: () => import('../views/test/icon/index.vue')
        }
      ]
    }
  ]
})

export default router
