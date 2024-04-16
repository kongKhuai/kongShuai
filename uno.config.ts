/*
 * @Author: 16651618507@163.com
 * @Date: 2024-04-14 15:37:35
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-14 15:37:40
 * @FilePath: \new-plus\uno.config.ts
 * @Description:
 *
 */
// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup
} from 'unocss'

export default defineConfig({
  rules: [
    // ['rotate-0.3', {transform: 'rotate(0.3turn)'}],
    [/^rotate-0.([\.\d]+)$/, ([_, num]) => ({ transform: `rotate(0.${num}turn)` })]
  ],
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      // ...
    }
  },
  presets: [
    presetUno(),
    presetAttributify(),
    /*presetIcons({
        collections: {
            carbon: () => import('@iconify-json/twe')
        }
      }),*/
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      }
    })
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()]
})
