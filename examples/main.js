import { createApp } from 'vue'
import App from './App.vue'

// 全局导入
//import FormatJson from 'art-windy-test'
//console.log(FormatJson)

// 按需导入
//import { FormatJson } from '../packages/index.js'
//console.log(FormatJson)
// 注册
let app = createApp(App)
//app.use(FormatJson)
// app.use(GjfIcon)
app.mount('#app')