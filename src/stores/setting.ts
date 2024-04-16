/*
 * @Author: 16651618507@163.com
 * @Date: 2024-04-15 23:10:09
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-15 23:34:56
 * @FilePath: \new-plus\src\stores\setting.ts
 * @Description:
 *
 */
import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
type LayoutType = 'one' | 'two' | 'three'

export const useSettingInfo = defineStore('setting', {
  //   const settingData = reactive({
  //     layout: 'one',
  //     isDart: false
  //   }) as any
  //   type KeyType = 'layout' | 'isDart'

  //   function setVal(key: KeyType, val: any) {
  //     settingData[key] = val
  //   }

  //   return { settingData, setVal }
  state: () => {
    return {
      layout: localStorage.getItem('setting-layout') || 'one',
      isDart: localStorage.getItem('setting-is-dart') === 'true' ? true : false
      //   collapse: false,
      //   textColor: localStorage.getItem('sidebar-text-color') || '#bfcbd9'
    }
  },
  getters: {
    layoutNmae: (state) => '布局：' + state.layout
  },
  actions: {
    handleLayout(val: LayoutType) {
      this.layout = val
      localStorage.setItem('setting-layout', val)
    },
    handleIsDark(isDart: boolean) {
      this.isDart = isDart
      localStorage.setItem('setting-is-dart', String(isDart))
    }
  }
})
