<!--
 * @Author: 16651618507@163.com
 * @Date: 2024-04-17 17:51:52
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-26 11:46:33
 * @FilePath: \new-plus\src\views\ecology\pinia\index.vue
 * @Description: 
 * 
-->
<template>
  <div>
    pinia-plugin-persistedstate 是一个 Pinia 的持久化插件，看这个库的源码主要是好奇它是怎么给 Pinia
    做持久化的，并且学习怎么去开发一个 Pinia 插件，源码很少，就几个文件
    <child-a />
    <child-b />
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import childA from './childA.vue'
import childB from './childB.vue'
</script>
<style scoped></style>
