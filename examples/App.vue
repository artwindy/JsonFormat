<template>

    <format-json :value="data" :open="true"></format-json>

</template>

<script>
import {FormatJson} from 'art-windy-test'
//console.log(FormatJson)
export default {
    name: 'App',
    data() {
        return {
            data: {
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
        }
    },
    components: {
        FormatJson
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
