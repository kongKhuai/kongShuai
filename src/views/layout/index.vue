<!--
 * @Author: 16651618507@163.com
 * @Date: 2024-04-01 22:14:11
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-15 23:48:31
 * @FilePath: \new-plus\src\views\layout\index.vue
 * @Description: 
 * 
-->

<template>
  <div class="common-layout">
    <!-- 页面 -->
    <component :data-layout="settingInfo.layoutNmae" :is="layoutTheme"></component>
  </div>
</template>
<script lang="ts" setup name="plusLayout">
import layoutOne from './layoutOne.vue'
import layoutTwo from './layoutTwo.vue'
import { ref, reactive, computed, watch } from 'vue'
import { useSettingInfo } from '@/stores/setting'
const settingInfo = useSettingInfo()
watch(
  () => settingInfo.layout,
  (newVal, oldVal) => {
    console.log('🚀 ~ watch ~ newVal, oldVal:', newVal, oldVal)
    layout.value = newVal
  }
)
const layout = ref('two')
type TabsType = {
  [key: string]: any
}
const state = reactive({
  tabs: {
    one: layoutOne,
    two: layoutTwo
  } as TabsType
})
const layoutTheme = computed(() => {
  return state.tabs[layout.value.toString()]
})
</script>

<style scoped>
.common-layout {
  height: 100vh;
}
.el-page-container {
  height: 100%;
  padding: 10px;
  overflow: hidden;
  background-color: var(--ba-bg-color);
}
</style>
