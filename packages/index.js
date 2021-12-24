import FormatJson from './FormatJson'

const components = [FormatJson]

const install = function (Vue, opts = {}) {
    if (install.installed)  {
        return
    }

    components.map((component) => {
        Vue.component(component.name, component)
    })

    if (typeof window != 'undefined' && window.Vue) {
        install(window.Vue)
    }
}

export default {
    install,
    FormatJson
}

export {
    FormatJson
}