<!--
 * @Author: 16651618507@163.com
 * @Date: 2024-04-14 22:10:10
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-15 14:14:40
 * @FilePath: \new-plus\src\components\layout\menu.vue
 * @Description: 
 * 
-->
<template>
  <div class="sidebar">
    <el-menu
      :mode="modeType === 'horizontal' ? 'horizontal' : 'vertical'"
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="sidebar.collapse"
      :text-color="sidebar.textColor"
      router
    >
      <!-- :background-color="sidebar.bgColor" -->
      <template v-for="(item, index) in menulist">
        <template v-if="item.children">
          <el-sub-menu :index="item.path" :key="index" v-permiss="item.name">
            <template #title>
              <el-icon v-if="item?.meta?.icon">
                <component :is="item?.meta.icon"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="(subItem, subItemIndex) in item.children">
              <el-sub-menu
                v-if="subItem.children"
                :index="item.path + subItem.path"
                :key="index + '-' + subItemIndex"
                v-permiss="item.name"
              >
                <template #title>{{ subItem.name }}</template>
                <el-menu-item
                  v-for="(threeItem, i) in subItem.children"
                  :key="i"
                  :index="item.path + subItem.path + threeItem.path"
                >
                  {{ threeItem.name }}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="item.path + subItem.path" v-permiss="item.name">
                {{ subItem.meta?.title }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="item.path" :key="index" v-permiss="item.name">
            <!-- <el-icon>
              <component :is="item.icon"></component>
            </el-icon> -->
            <template #title>{{ item?.meta?.title || item?.name }}</template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts" setup name="menus">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useSidebarStore } from '@/stores/sidebar'
type ModeType = 'vertical' | 'horizontal'
// EpPropMergeType<StringConstructor>
const props = defineProps({
  mode: {
    type: String,
    default: 'vertical',
    validator(value: string) {
      return value === 'vertical' || value === 'horizontal'
      // return ['vertical', 'horizontal'].includes(value) // ? value : 'vertical'
    }
  },
  modeType: {
    type: String,
    default: 'vertical'
  }
})
const router = useRouter()
const route = useRoute()
const menulist = computed(() => {
  return router.options.routes.filter((v: any) => {
    return v.meta.isShow
  })
})
console.log('%c Line:9 🍪 menulist', 'color:#3f7cff', router)
console.log('%c Line:9 🍪 menulist', 'color:#3f7cff', route)
console.log('%c Line:9 🍪 menulist', 'color:#3f7cff', menulist)
const onRoutes = computed(() => {
  return route.path
})
const sidebar = useSidebarStore()
</script>
