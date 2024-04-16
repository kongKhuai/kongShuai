<!--
 * @Author: 16651618507@163.com
 * @Date: 2024-04-08 14:00:17
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-15 14:15:08
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
        <menu-list modeType="horizontal" />
      </div>
      <div class="flex flex-items-center">
        <!-- 设置 -->
        <layoutSetting />
        <img :src="userImg" alt="" class="userImg ml-0.5rem border-rd" />
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
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
}
/* html .dark :where(.el-aside, .el-header, .el-main) {
  background-color: var(--el-color-black) !important;
} */
.el-header {
  margin-bottom: 10px;
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
.userImg {
  width: 3rem;
  height: 3rem;
  /* border-radius: 50%; */
}
.userImg:hover {
  transform: rotate(666turn);
  transition-delay: 1s;
  transition-property: all;
  transition-duration: 59s;
  transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
}
</style>
