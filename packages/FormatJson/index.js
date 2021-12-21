import FormatJson from './src/formatJson.vue' // 导入组件

FormatJson.install = app => {
  // 组件install属性
  app.component(FormatJson.name, FormatJson) // 定义组件-vue3的写法
}

export default FormatJson
