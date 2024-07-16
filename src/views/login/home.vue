<!--
 * @Author: 16651618507@163.com
 * @Date: 2024-04-17 21:38:47
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-17 21:57:05
 * @FilePath: \new-plus\src\views\login\home.vue
 * @Description: 
 * 
-->
<template>
  <el-row>
    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"
      ><div class="grid-content bg-purple">生态工具</div></el-col
    >
    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"
      ><div class="grid-content bg-green">数据持久化工具</div></el-col
    >
    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"
      ><div class="grid-content bg-pink">安全性能等</div></el-col
    >
    <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4"
      ><div class="grid-content bg-orange">待加入</div></el-col
    >
  </el-row>
</template>
<script lang="ts" setup></script>
<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
