/*
 * @Author: 16651618507@163.com
 * @Date: 2024-04-01 21:52:49
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-18 00:00:21
 * @FilePath: \new-plus\vite.config.ts
 * @Description:
 *
 */
import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import UnoCSS from 'unocss/vite'

import path from 'path'
const pathSrc = path.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    VueDevTools(),
    UnoCSS(),
    vueSetupExtend(),
    AutoImport({
      // Auto import functions from Vue, e.g. ref, reactive, toRef...
      // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
      imports: ['vue'],
      // Auto import functions from Element Plus, e.g. ElMessage, ElMessageBox... (with style)
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon'
        })
      ]
    }),
    Components({
      resolvers: [
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep']
        }),
        // Auto register Element Plus components
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ],

      dts: path.resolve(pathSrc, 'components.d.ts')
    }),

    Icons({
      autoInstall: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // compilerOptions: {
  //   moduleResolution: 'node'
  //   // 其他配置...
  // },
  // include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue', 'tests/**/*.ts', 'tests/**/*.tsx'],
  // exclude: ['node_modules']
})
