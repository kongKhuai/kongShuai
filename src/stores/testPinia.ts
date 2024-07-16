/*
 * @Author: 16651618507@163.com
 * @Date: 2024-04-15 23:10:09
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-26 11:55:44
 * @FilePath: \new-plus\src\stores\testPinia.ts
 * @Description:
 *
 */
import { defineStore } from 'pinia'

export const useCount = defineStore('useCount', {
  state: () => {
    return {
      count: 0
    }
  },
  getters: {
    doubleCountVal: (state) => state.count * 2
  },
  actions: {
    addCount(num: number = 1) {
      this.count += num
    },
    doubleCount() {
      this.count = this.count * 2
    }
  }
})
