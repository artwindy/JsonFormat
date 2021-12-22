# json 格式化
```
yarn add art-format-json
npm install art-format-json

<format-json :value="data"></format-json>

data = {
    empty: '',
    string: "string",
    "test-number": 0,
    "test-null": null,
    bool: true,
    undefined: undefined,
    array: ["1", "2", "3"],
    json: {
        one: "这是一个例子",
        tow: "测试的例子",
        tree: "非常好的例子",
        array: [4, 5, 6],
    }, 
    function: function(){}
}
```
## 技术栈
```
Vue3.0
TypeScript
sass
Eslint
```

## 依赖安装
```
yarn install
npm install
```

### 运行
```
yarn serve
npm run serve
```

### 开生产环境
```
yarn build
npm run build
```

### 代码校验和修复
```
yarn lint
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
