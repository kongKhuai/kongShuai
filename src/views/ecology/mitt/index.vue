<!--
 * @Author: 16651618507@163.com
 * @Date: 2024-04-17 21:07:22
 * @LastEditors: 16651618507@163.com
 * @LastEditTime: 2024-04-18 13:31:54
 * @FilePath: \new-plus\src\views\ecology\mitt\index.vue
 * @Description: 
 * 
-->
<template>
  <div>
    mitt全局通讯模块，on监听和off结束监听的回调需要一致
    <el-link
      type="primary"
      target="_blank"
      href="https://github.com/developit/mitt/blob/main/src/index.ts"
      >mitt github</el-link
    >
    <el-divider />
    安装：

    <pre>
      <code>
        Install
        This project uses node and npm. Go check them out if you don't have them locally installed.
        $ npm install --save mitt

        Then with a module bundler like rollup or webpack, use as you would anything else:

        // using ES6 modules
        import mitt from 'mitt'
        // using CommonJS modules
        var mitt = require('mitt')

        The UMD build is also available on unpkg:
        script src="https://unpkg.com/mitt/dist/mitt.umd.js" 
        You can find the library on window.mitt.
        </code>
    </pre>
    使用：
    <pre><code>
      import mitt from 'mitt'
      const emitter = mitt()

      // listen to an event
      emitter.on('foo', e => console.log('foo', e) )
      // listen to all events
      emitter.on('*', (type, e) => console.log(type, e) )
      // fire an event
      emitter.emit('foo', { a: 'b' })
      // clearing all events
      emitter.all.clear()
      // working with handler references:
      function onFoo() {}
      emitter.on('foo', onFoo)   // listen
      emitter.off('foo', onFoo)  // unlisten

    </code></pre>
    <el-divider />
    <emit-el></emit-el>
    <el-divider />
    <watch-el></watch-el>
  </div>
</template>
<script lang="ts" setup>
import emitEl from './emit.vue'
import watchEl from './watch.vue'
</script>
<style scoped></style>
