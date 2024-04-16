/*
 * @Author: 16651618507@163.com
 * @Date: 2024-04-01 21:52:49
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-16 08:27:16
 * @FilePath: \new-plus\src\router\index.ts
 * @Description:
 *
 */
import { createRouter, createWebHistory } from 'vue-router'
import layout from '../views/layout/index.vue'
import login from '../views/login/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    {
      path: '/',
      name: 'home',
      component: layout,
      meta: {
        title: '/',
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
          path: 'svg',
          name: 'svg',
          meta: {
            title: 'svg测试',
            isShow: true
          },
          component: () => import('../views/svg/index.vue')
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
