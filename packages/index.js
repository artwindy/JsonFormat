import formatJson from './FormatJson'

console.log(formatJson)
const components = [
    formatJson
]

var install = (app, opts = {}) => {
  components.forEach(item => {
    app.component(item.name, item)
  })
}

export default {
  // 全局导出
  version: '1.0.0',
  install,
  formatJson
}