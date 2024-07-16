/*
 * @Author: 16651618507@163.com
 * @Date: 2024-04-18 20:30:42
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-18 22:31:04
 * @FilePath: \new-plus\src\router\canvas.ts
 * @Description:
 *
 */
import layout from '../views/layout/index.vue'

// canvas
export default [
  {
    path: '/canvas',
    name: 'canvas',
    component: layout,
    meta: {
      isShow: true,
      title: 'canvas'
      // icon: 'el-icon-data-board'
    },
    children: [
      {
        path: 'canvas-demo-bubble',
        name: 'canvasDemoBubble',
        component: () => import('@/views/canvas/Demo/pages/Bubble/Bubble.vue'),
        meta: {
          isShow: true,
          title: '泡泡'
        }
      }
    ]
  }
]
