<!--
 * @Author: 16651618507@163.com
 * @Date: 2024-04-18 11:02:37
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-18 11:27:57
 * @FilePath: \new-plus\src\views\ecology\mitt\watch.vue
 * @Description: 
 * 
-->
<template>
  <div>
    监听：监听通过ElMessage进行提示！
    <br />
    取消:
    <el-button @click="off('message-A')">off :'message-A'</el-button>
    <el-button @click="off('message-B')">off :'message-B'</el-button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import emitter from '@/utils/mitt'
import { ElMessage } from 'element-plus'
import callback from './callback'
const msg = ref('Hello Vue 3 + TypeScript + Vite')

// const callback = (val?: any) => {
//   console.log(val)
//   msg.value += 'ppp'
// }
function off(type: string) {
  console.log('🚀 ~ off ~ type:', type, callback)
  try {
    emitter.off(type, callback)
  } catch (err) {
    console.log('🚀 ~ off ~ err:', err)
  }
}
emitter.on('message-A', callback)
// emitter.on('message-A', (data: any) => {
//   ElMessage(data)
//   setTimeout(() => {
//     off('message-A')
//   }, 1000)
// })
emitter.on('message-B', (data: any) => {
  ElMessage({
    message: data,
    type: 'success'
  })
  setTimeout(() => {
    off('message-B')
  }, 2000)
})
emitter.on('*', (type: any, e: any) => {
  ElMessage.error(`监听全部事件,事件名：${type},参数：${e}`)
})
</script>
<style scoped></style>
