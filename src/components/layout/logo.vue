<!--
 * @Author: 16651618507@163.com
 * @Date: 2024-04-14 22:11:18
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-14 23:25:54
 * @FilePath: \new-plus\src\components\layout\logo.vue
 * @Description: 
 * 
-->
<template>
  <div class="flex items-center w-15rem">
    <div class="mr-0.5rem w-5rem h-3rem border-rd overflow-hidden background-image">
      <!-- <el-image class="border-rd" style="width: 5rem; height: 3rem" :src="logo" fit="fill" /> -->
    </div>
    <div class="flex-1">
      <h1 class="text-3xl font-bold">墨白守正</h1>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style scoped>
.background-image {
  background-image: url('@/assets/logo.png');
  background-size: 100% 90%;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #7633ff;
}
</style>
