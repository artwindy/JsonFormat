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
## Project setup
```
yarn install
npm install
```

### Compiles and hot-reloads for development
```
yarn serve
npm run serve
```

### Compiles and minifies for production
```
yarn build
npm run build
```

### Lints and fixes files
```
yarn lint
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
