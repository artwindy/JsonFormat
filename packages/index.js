import FormatJson from './FormatJson'
//存在所有组件
const components = [FormatJson]

// 定义 install 方法，接收app作为参数。如果使用use注册插件，则所有的组件都将被注册
const install = function (app, opts = {}) {
    if (install.installed)  {
        return
    }

    components.map((component) => {
        app.component(component.name, component) //此处的使用的组件app文件中的name属性
    })

	// 判断是否是直接引入文件
    if (typeof window != 'undefined' && window.app) {
        install(window.app)
    }
}

export {
    install,
    FormatJson
}
