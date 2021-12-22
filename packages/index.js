import FormatJson from './FormatJson'

const version = '0.0.1'
console.log(FormatJson)

var install = (app, opts = {}) => {
  [ FormatJson ].forEach(item => {
    app.component(item.name, item)
  })
}

export {
  version,
  install,
  FormatJson
}