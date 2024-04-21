/*
 * @Author: 16651618507@163.com
 * @Date: 2024-04-17 21:02:52
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-18 14:36:19
 * @FilePath: \new-plus\src\router\ecology.ts
 * @Description:
 *
 */
import layout from '../views/layout/index.vue'

export default [
  {
    path: '/ecology',
    name: 'ecology',
    component: layout,
    meta: {
      title: '生态工具',
      isShow: true
    },
    children: [
      {
        path: 'all',
        name: 'all',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/ecology/index.vue'),
        meta: {
          title: '总览',
          isShow: true
        }
      },
      {
        path: 'drag',
        name: 'drag',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/ecology/drag/index.vue'),
        meta: {
          title: '拖拽组件',
          isShow: true
        }
      },
      {
        path: 'mitt',
        name: 'mitt',
        meta: {
          title: '通讯组件',
          isShow: true
        },
        component: () => import('../views/ecology/mitt/index.vue')
      },
      {
        path: 'pinia',
        name: 'pinia',
        meta: {
          title: '数据持久化',
          isShow: true
        },
        component: () => import('../views/ecology/pinia/index.vue')
      }
    ]
  }
]
