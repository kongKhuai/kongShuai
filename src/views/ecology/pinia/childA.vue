<!--
 * @Author: 16651618507@163.com
 * @Date: 2024-04-26 11:39:37
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-26 12:02:44
 * @FilePath: \new-plus\src\views\ecology\pinia\childA.vue
 * @Description: 
 * 
-->
<template>
  <div class="child">
    pinia_child-1
    <p>{{ count.count }}</p>
    <p>{{ count.doubleCountVal }}</p>
    <el-button type="primary" @click="add">+</el-button>
    <el-button type="primary" @click="double">*2</el-button>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useCount } from '@/stores/testPinia'
const count = useCount()
console.log(count)
function add() {
  count.addCount()
}
function double() {
  count.doubleCount()
}
</script>

<style scoped>
.child {
  border-radius: 10px;
  border: 1px solid #c9eef3;
  height: 200px;
  background-color: #d8f1f4;
  margin: 10px;
  padding: 10px;
}
</style>
