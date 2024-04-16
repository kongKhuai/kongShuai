<!--
 * @Author: 16651618507@163.com
 * @Date: 2024-04-08 14:01:29
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-15 23:52:59
 * @FilePath: \new-plus\src\views\layout\layoutTwo.vue
 * @Description: 
 * 
-->
<template>
  <el-container class="el-page-container">
    <el-aside width="200px">
      <img :src="logo" class="h-60px text-center m-0-auto b-rd-8px" alt="" style="width: 100%" />
      <menu-list />
    </el-aside>
    <el-container>
      <el-header class="flex flex-justify-end flex-items-center">
        <!-- 设置 -->
        <layoutSetting />
        <img :src="userImg" alt="" class="w-3rem h-3rem ml-0.5rem border-rd" />
      </el-header>
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router'
import logo from '@/assets/logo.png'
import layoutSetting from './setting.vue'
import menuList from '@/components/layout/menu.vue'
import userImg from '@/assets/user/avatar.png'
</script>

<style scoped>
.common-layout {
  height: 100vh;
}
.el-aside,
.el-header,
.el-main {
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--ba-bg-color-overlay);
}
/* html .dark :where(.el-aside, .el-header, .el-main) {
  background-color: var(--el-color-black) !important;
} */
.el-header {
  margin-bottom: 10px;
  border-radius: 8px;
}
.el-aside {
  margin-right: 10px;
}
</style>
