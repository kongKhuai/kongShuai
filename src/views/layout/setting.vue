<!--
 * @Author: 16651618507@163.com
 * @Date: 2024-04-08 13:29:16
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-15 23:44:22
 * @FilePath: \new-plus\src\views\layout\setting.vue
 * @Description: 
 * 
-->
<template>
  <el-button class="" type="primary" @click="showSetting" :icon="Setting" circle />
  <!-- <el-icon><Setting /></el-icon> -->
  <el-drawer v-model="drawer" direction="rtl">
    <template #header>
      <h4>系统设置</h4>
    </template>
    <template #default>
      <div>
        <!-- <el-button type="primary" plain @click="toggleDark()">
          <i inline-block align-middle i="dark:carbon-moon carbon-sun" />
          <span class="ml-2">{{ isDark ? 'Dark' : 'Light' }}</span>
        </el-button> -->
        <el-form :model="form" label-width="auto" style="max-width: 600px">
          <!-- <el-form-item label="Activity name">
            <el-input v-model="form.name" />
          </el-form-item>
          <el-form-item label="Activity zone">
            <el-select v-model="form.region" placeholder="please select your zone">
              <el-option label="Zone one" value="shanghai" />
              <el-option label="Zone two" value="beijing" />
            </el-select>
          </el-form-item>
          <el-form-item label="Activity time">
            <el-col :span="11">
              <el-date-picker
                v-model="form.date1"
                type="date"
                placeholder="Pick a date"
                style="width: 100%"
              />
            </el-col>
            <el-col :span="2" class="text-center">
              <span class="text-gray-500">-</span>
            </el-col>
            <el-col :span="11">
              <el-time-picker v-model="form.date2" placeholder="Pick a time" style="width: 100%" />
            </el-col>
          </el-form-item> -->
          <el-form-item label="暗黑模式">
            <el-switch @change="changeDark(form.isDart)" v-model="form.isDart" />
          </el-form-item>
          <!-- <el-form-item label="Activity type">
            <el-checkbox-group v-model="form.type">
              <el-checkbox value="Online activities" name="type"> Online activities </el-checkbox>
              <el-checkbox value="Promotion activities" name="type">
                Promotion activities
              </el-checkbox>
              <el-checkbox value="Offline activities" name="type"> Offline activities </el-checkbox>
              <el-checkbox value="Simple brand exposure" name="type">
                Simple brand exposure
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item> -->
          <el-form-item label="布局模式">
            <el-radio-group @change="changeLayout(form.layout)" v-model="form.layout">
              <el-radio value="one">one</el-radio>
              <el-radio value="two">two</el-radio>
            </el-radio-group>
          </el-form-item>
          <!-- <el-form-item label="Activity form">
            <el-input v-model="form.desc" type="textarea" />
          </el-form-item> -->
        </el-form>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">cancel</el-button>
        <el-button type="primary" @click="confirmClick">confirm</el-button>
      </div>
    </template>
  </el-drawer>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { ElMessageBox } from 'element-plus'
import { Setting } from '@element-plus/icons-vue'
import { useSettingInfo } from '@/stores/setting'
const settingInfo = useSettingInfo()
// do not use same name with ref
const form = reactive({
  layout: 'one',
  isDart: false
})
Object.assign(form, settingInfo)
const isDark = useDark({
  selector: 'body',
  // attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light'
})
const toggleDark = useToggle(isDark)
function changeDark(val: any) {
  settingInfo.handleIsDark(val)
  toggleDark()
}
function changeLayout(val: any) {
  settingInfo.handleLayout(val)
}
const drawer = ref(false)
// const direction = ref('rtl')

const handleClose = (done: () => void) => {
  ElMessageBox.confirm('Are you sure you want to close this?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
function showSetting() {
  drawer.value = true
}
function cancelClick() {
  drawer.value = false
}
function confirmClick() {
  ElMessageBox.confirm(`Are you confirm to chose ?`)
    .then(() => {
      drawer.value = false
    })
    .catch(() => {
      // catch error
    })
}
</script>
