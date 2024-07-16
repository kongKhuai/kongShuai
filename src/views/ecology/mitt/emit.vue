<!--
 * @Author: 16651618507@163.com
 * @Date: 2024-04-18 11:02:27
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-18 20:27:32
 * @FilePath: \new-plus\src\views\ecology\mitt\emit.vue
 * @Description: 
 * 
-->
<template>
  <div>
    派发：
    <br />
    <el-button type="primary" @click="emit('message-A', 'A的数据-mitt全局通讯模块')"
      >派发：.emit('message-A', 'A的数据-mitt全局通讯模块')</el-button
    >
    <el-button type="primary" @click="emit('message-B', 'B的数据-mitt全局通讯模块')"
      >派发：.emit('message-B', 'B的数据-mitt全局通讯模块')</el-button
    >
    <el-divider />

    <el-button type="warning" @click="off('message-A')"
      >取消单个监听：emitter.off(''message-A', onFoo)
    </el-button>
    <el-button type="warning" @click="off('message-B')"
      >取消单个监听：emitter.off(''message-B', onFoo)
    </el-button>
    <el-divider />

    <el-button type="danger" @click="allClear">取消全部监听emitter.all.clear()</el-button>
  </div>
</template>
<script lang="ts" setup>
import emitter from '@/utils/mitt'
import callback from './callback'
// const mitt = emitter()
/**
 * 派发数据
 * ---
 * @description:
 * @param {string} emitName string 派发名称
 * @param {*} val string
 * @return {*}
 */
function emit(emitName: string, val: string) {
  emitter.emit(emitName, val)
}
/**
 * @description: 取消单个监听
 * @param {*} emitName
 * @return {*}
 */
function off(emitName: string) {
  try {
    emitter.off(emitName, callback)
  } catch (err) {
    console.log('🚀 ~ off ~ err:', err)
  }
  console.log('🚀 ~ off ~ callback:', emitName, callback)
}
/**
 * @description: 取消全部监听
 */
function allClear() {
  emitter.all.clear()
}
</script>
<style scoped></style>
