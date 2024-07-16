<!--
 * @Author: 16651618507@163.com
 * @Date: 2024-04-08 14:00:17
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-19 10:46:09
 * @FilePath: \new-plus\src\views\layout\layoutOne.vue
 * @Description: 
 * 
-->
<template>
  <el-container class="el-page-container">
    <el-header>
      <div>
        <logo></logo>
      </div>
      <div class="menu flex-1 pb-2">
        <!-- <el-scrollbar height="calc(100vh - 100px)"> -->
        <menu-list modeType="horizontal" />
        <!-- </el-scrollbar> -->
      </div>
      <div class="flex flex-items-center">
        <!-- 设置 -->
        <layoutSetting />
        <img :src="userImg" alt="user头像" class="userImg w-3rem h-3rem ml-0.5rem border-rd" />
      </div>
    </el-header>
    <el-container>
      <!-- <el-aside width="200px">Aside</el-aside> -->
      <el-main>
        <RouterView />
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup>
import { RouterView } from 'vue-router'
import userImg from '@/assets/user/avatar.png'
import logo from '@/components/layout/logo.vue'
import menuList from '@/components/layout/menu.vue'
import layoutSetting from './setting.vue'
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
  margin: 10px 0;
}
/* html .dark :where(.el-aside, .el-header, .el-main) {
  background-color: var(--el-color-black) !important;
} */
.el-header {
  margin: 10px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  /* justify-content: flex-end; */
  padding: 0 10px;
  .menu {
    flex: 1;
  }
}
.el-aside {
  margin-right: 10px;
}
.el-main {
  padding: 10px;
  margin: 0 10px;
  height: calc(100vh - 90px);
  overflow-y: auto;
}
.el-page-container {
  height: 100%;
  overflow: hidden;
}
.userImg {
  border-radius: 50%;
  border: 2px solid var(--ba-bg-color-overlay);
  cursor: pointer;
  transition: all 0.5s;
}
.el-page-container {
  overflow-y: auto;
}
.userImg:hover {
  transform: rotate(666turn);
  transition-delay: 1s;
  transition-property: all;
  transition-duration: 59s;
  transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
}
</style>
