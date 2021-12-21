import { createApp } from 'vue'
import App from './App.vue'

// 全局导入
import formatJson from '../packages/FormatJson/index.js'
console.log(formatJson)

// 按需导入
// import { GjfIcon } from 'packages/index'
// console.log(GjfIcon)
// 注册
let app = createApp(App)
app.use(formatJson)
// app.use(GjfIcon)
app.mount('#app')