import layout from '../views/layout/index.vue'

export default [
  {
    path: '/svg',
    name: 'svg',
    component: layout,
    meta: {
      isShow: true,
      title: 'svg'
      //icon: 'el-icon-picture'
    },
    children: [
      // {
      //   path: 'svg-basic',
      //   name: 'svgBasic',
      //   component: () => import('@/views/svg/Basic/index.vue'),
      //   meta: {
      //     isShow: true,
      //     title: '基础'
      //     //icon: 'el-icon-s-shop'
      //   },
      //   children: [
      {
        path: 'svg-viewportAndViewBox',
        name: 'svgStated',
        component: () =>
          import('@/views/svg/Basic/pages/ViewportAndViewBox/ViewportAndViewBox.vue'),
        meta: {
          isShow: true,
          title: 'Viewport 和 ViewBox'
        }
      },
      {
        path: 'svg-basicShapeLine',
        name: 'svgShapeLine',
        component: () => import('@/views/svg/Basic/pages/BasicShape/Line.vue'),
        meta: {
          isShow: true,
          title: '基础形状 - 线段 line'
        }
      },
      {
        path: 'svg-basicShapeRect',
        name: 'svgShapeRect',
        component: () => import('@/views/svg/Basic/pages/BasicShape/Rect.vue'),
        meta: {
          isShow: true,
          title: '基础形状 - 矩形 rect'
        }
      },
      {
        path: 'svg-basicShapeCircle',
        name: 'svgShapeCircle',
        component: () => import('@/views/svg/Basic/pages/BasicShape/Circle.vue'),
        meta: {
          isShow: true,
          title: '基础形状 - 圆 circle'
        }
      },
      {
        path: 'svg-basicShapeEllipse',
        name: 'svgShapeEllipse',
        component: () => import('@/views/svg/Basic/pages/BasicShape/Ellipse.vue'),
        meta: {
          isShow: true,
          title: '基础形状 - 椭圆 ellipse'
        }
      },
      {
        path: 'svg-basicShapePolygon',
        name: 'svgShapePolygon',
        component: () => import('@/views/svg/Basic/pages/BasicShape/Polygon.vue'),
        meta: {
          isShow: true,
          title: '基础形状 - 多边形 polygon'
        }
      },
      {
        path: 'svg-basicShapePolyline',
        name: 'svgShapePolyline',
        component: () => import('@/views/svg/Basic/pages/BasicShape/Polyline.vue'),
        meta: {
          isShow: true,
          title: '基础形状 - 折线 polyline'
        }
      },
      {
        path: 'svg-basicShapeLinecap',
        name: 'svgShapeLinecap',
        component: () => import('@/views/svg/Basic/pages/BasicShape/Linecap.vue'),
        meta: {
          isShow: true,
          title: '基础形状 - 线帽 Linecap'
        }
      },
      {
        path: 'svg-basicShapeLinejoin',
        name: 'svgShapeLinejoin',
        component: () => import('@/views/svg/Basic/pages/BasicShape/Linejoin.vue'),
        meta: {
          isShow: true,
          title: '基础形状 - 线连接 Linejoin'
        }
      }
      //   ]
      // }
    ]
  }
]
