import layout from '../views/layout/index.vue'

export default [
  // echarts
  {
    // echarts
    path: '/echarts',
    name: 'echarts',
    component: layout,
    meta: {
      isShow: true,
      title: 'echarts'
      // icon: 'el-icon-s-data'
    },
    children: [
      // {
      //   path: 'echarts-basic',
      //   name: 'echartsBasic',
      //   component: () => import('@/views/echarts/Basic/index.vue'),
      //   meta: {
      //     navState: true,
      //     title: '基础',
      //     icon: 'el-icon-s-shop'
      //   },
      //   children: [
      //     {
      //       path: 'echarts-Stated',
      //       name: 'echartsStated',
      //       component: () => import('@/views/echarts/Basic/pages/Stated/Stated.vue'),
      //       meta: {
      //         navState: true,
      //         title: '起步'
      //       }
      //     },
      //     {
      //       path: 'echarts-ThemeBuilderJS',
      //       name: 'echartsThemeBuilderJS',
      //       component: () => import('@/views/echarts/Basic/pages/ThemeBuilder/ThemeBuilderJS.vue'),
      //       meta: {
      //         navState: true,
      //         title: '自定义主题 JS版'
      //       }
      //     },
      //     {
      //       path: 'echarts-ThemeBuilderJSON',
      //       name: 'echartsThemeBuilderJSON',
      //       component: () =>
      //         import('@/views/echarts/Basic/pages/ThemeBuilder/ThemeBuilderJSON.vue'),
      //       meta: {
      //         navState: true,
      //         title: '自定义主题 JSON版'
      //       }
      //     },
      //     {
      //       path: 'echarts-RendererSVG',
      //       name: 'echartsRendererSVG',
      //       component: () => import('@/views/echarts/Basic/pages/RendererSVG/RendererSVG.vue'),
      //       meta: {
      //         navState: true,
      //         title: 'SVG渲染'
      //       }
      //     },
      //     {
      //       path: 'echarts-Dataset',
      //       name: 'echartsDataset',
      //       component: () => import('@/views/echarts/Basic/pages/Dataset/Dataset.vue'),
      //       meta: {
      //         navState: true,
      //         title: 'Dataset'
      //       }
      //     },
      //     {
      //       path: 'echarts-Plugins',
      //       name: 'echartsPlugins',
      //       component: () => import('@/views/echarts/Basic/pages/Plugins/Plugins.vue'),
      //       meta: {
      //         navState: true,
      //         title: '插件'
      //       }
      //     },
      //     {
      //       path: 'echarts-Absolute',
      //       name: 'echartsAbsolute',
      //       component: () => import('@/views/echarts/Basic/pages/Absolute/Absolute.vue'),
      //       meta: {
      //         navState: true,
      //         title: '定位'
      //       }
      //     },
      //     {
      //       path: 'echarts-Scatter',
      //       name: 'echartsScatter',
      //       component: () => import('@/views/echarts/Basic/pages/Axis/Scatter.vue'),
      //       meta: {
      //         navState: true,
      //         title: '坐标系 - 散点图'
      //       }
      //     },
      //     {
      //       path: 'echarts-Double',
      //       name: 'echartsDouble',
      //       component: () => import('@/views/echarts/Basic/pages/Axis/Double.vue'),
      //       meta: {
      //         navState: true,
      //         title: '坐标系 - 双坐标系'
      //       }
      //     },
      //     {
      //       path: 'echarts-More',
      //       name: 'echartsMore',
      //       component: () => import('@/views/echarts/Basic/pages/Axis/More.vue'),
      //       meta: {
      //         navState: true,
      //         title: '坐标系 - 多坐标系'
      //       }
      //     },
      //     {
      //       path: 'echarts-BarYCategory',
      //       name: 'echartsBarYCategory',
      //       component: () => import('@/views/echarts/Basic/pages/BarYCategory/BarYCategory.vue'),
      //       meta: {
      //         navState: true,
      //         title: '条形图'
      //       }
      //     },
      //     {
      //       path: 'echarts-AreaFill',
      //       name: 'echartsAreaFill',
      //       component: () => import('@/views/echarts/Basic/pages/AreaFill/Fill.vue'),
      //       meta: {
      //         navState: true,
      //         title: '面积填充'
      //       }
      //     },
      //     {
      //       path: 'echarts-AreaFillGradient',
      //       name: 'echartsAreaFillGradient',
      //       component: () => import('@/views/echarts/Basic/pages/AreaFill/Gradient.vue'),
      //       meta: {
      //         navState: true,
      //         title: '渐变填充'
      //       }
      //     },
      //     {
      //       path: 'echarts-TypeCustom',
      //       name: 'echartsTypeCustom',
      //       component: () => import('@/views/echarts/Basic/pages/TypeCustom/Icon.vue'),
      //       meta: {
      //         navState: true,
      //         title: '自定义 - 图标'
      //       }
      //     },
      //     {
      //       path: 'map',
      //       name: 'Map',
      //       component: () => import('@/views/echarts/Basic/pages/Map/Map.vue'),
      //       meta: {
      //         navState: true,
      //         title: 'echarts绘制地图'
      //       }
      //     },
      //     {
      //       path: 'liquidFill',
      //       name: 'LiquidFill',
      //       component: () => import('@/views/echarts/Basic/pages/LiquidFill/LiquidFill.vue'),
      //       meta: {
      //         navState: true,
      //         title: '水球图'
      //       }
      //     },
      //     {
      //       path: 'wordCloud',
      //       name: 'WordCloud',
      //       component: () => import('@/views/echarts/Basic/pages/WordCloud/WordCloud.vue'),
      //       meta: {
      //         navState: true,
      //         title: '词云'
      //       }
      //     }
      //   ]
      // },
      {
        path: 'datavReportDev',
        name: 'DatavReportDev',
        component: () => import('@/views/echarts/DatavReportDev/index.vue'),
        meta: {
          isShow: true,
          title: '数据报表'
          // icon: 'el-icon-s-grid'
        }
      }
    ]
  }
]
