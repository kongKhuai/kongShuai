/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  // https://blog.csdn.net/u013078755/article/details/123581070
  // 添加组件命名忽略规则
  'vue/multi-word-component-names': [
    'error',
    {
      ignores: ['index'] //需要忽略的组件名
    }
  ]
}
