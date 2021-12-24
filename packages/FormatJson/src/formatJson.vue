<template>
  <div :class="`formatJson ${className}`">
    <div v-if="!data">--</div>
        <!-- <a v-if="root && JSON.stringify(data) !== '[]' && JSON.stringify(data) !== '{}'" @click="isOpen">{{is_open ? "全部关闭" : "全部展开"}}</a> -->

        <span v-if="Object.prototype.toString.call(data) === '[object Array]'"  class="v-object">
            <i v-if="data.length > 0" @click="is_open=!is_open" :class="is_open ? 'v-toggle v-open' : 'v-toggle'"></i>
            <i class="v-operator">[</i>
        </span>
        <span v-if="Object.prototype.toString.call(data) === '[object Object]'" class="v-object">
            <i v-if="Object.keys(data).length > 0" @click="is_open=!is_open" :class="is_open ? 'v-toggle v-open' : 'v-toggle'"></i>
            <i class="v-operator">{</i>
        </span>

        <div v-for="(val, key, index) in data" :key="index" class="v-pre" v-show="is_open">

            <span v-if="Object.prototype.toString.call(data) !== '[object Array]'" class="v-key">"{{key}}"</span>
            <i v-if="Object.prototype.toString.call(data) !== '[object Array]'" class="v-operator">:</i>
            <format-json v-if="val && typeof(val) === 'object'" :value="val" :root="false" :open="open" :parentIndex="index" className="v-children">
                <template v-slot:comma="scope">
                    <i v-if="Object.prototype.toString.call(data) === '[object Array]' && Object.keys(data).length - 1 >= (key+1) && typeof(val) === 'object'" class="v-comma">,</i>
                    <i v-if="Object.prototype.toString.call(data) === '[object Object]' && Object.keys(data).length - 1 > scope.slotIndex && typeof(val) === 'object'" class="v-comma">,</i>
                </template>
            </format-json>
            <span v-else-if="typeof(val) === 'string'" :class="`v-all v-${typeof(val)}`">
                "{{val}}"
            </span>
            <span v-else-if="val == null || val == undefined" :class="`v-all v-${String(val)}`">
                {{String(val)}}
            </span>
            <span v-else :class="`v-all v-${typeof(val)}`">
                {{val}}
            </span>
            <!---当数组里面是数字或者字符串key是索引。否则就是index-->
            <i v-if="Object.keys(data).length - 1 > (index || key) && ((val && typeof(val)) !== 'object')" class="v-comma">,</i>
        </div>

        <span v-if="Object.prototype.toString.call(data) === '[object Array]'" class="v-object">
            <span v-if="!is_open && data.length > 0" @click="is_open=!is_open" class="v-ellipsis">...</span>
            <i class="v-operator">]</i>
            <slot name="comma" :slotIndex="parentIndex"></slot>
        </span>
        <span v-if="Object.prototype.toString.call(data) === '[object Object]'" class="v-object">
            <span v-if="!is_open && Object.keys(data).length > 0" @click="is_open=!is_open" class="v-ellipsis">...</span>
            <i class="v-operator">}</i>
            <slot name="comma" :slotIndex="parentIndex"></slot>
        </span>
  </div>
</template>

<script>
import formatJson from 'art-windy-test'
import './formatJson.scss'
import { reactive, computed, ref, watch, defineComponent, defineAsyncComponent, getCurrentInstance, onMounted, onUnmounted, toRef, toRefs } from 'vue'
export default {
    name: 'formatJson',
    emits: ['open'],
    props: {
        className: {
            type: String,
            default: ''
        },
        value: {
            type: null,
            default: ''
        },
        parentIndex: {
            type: Number,
            default: 0
        },
        root: { //是否根节点
            type: Boolean,
            default: true
        },
        open: {
            type: Boolean,
            default: false
        }
    },
    components: {
        formatJson
    },
    setup(props, ctx) {
        const { proxy } = getCurrentInstance();
        const renderData = reactive({
            is_open: props.open
        })
        const isOpen = ()=> {
            renderData.is_open = !renderData.is_open
        }
        const data = computed({
            get: () => {
                let data = props.value
                if(data == '' || data == undefined || data == null) {
                    return data
                }

                if(typeof(data) != "string") {
                    console.log(data, typeof(data), 'object===format')
                    return data
                }
                //data = this.filter(data)
                console.log(data, typeof(data), 'string===format')
                try{
                    data = JSON.parse(data)
                } catch(error) {
                    console.log(error, '=============')
                }
                return data
            },
            set: val => {
                proxy.$emit('update:modelValue', val)
            }
        })


        return {
            ...toRefs(renderData),
            data,
            isOpen
        }
    },

    // data() {
    //     return {
    //         is_open: false
    //     }
    // },
    // watch: {
    //     open: {
    //         immediate: true,  // 初始值执行handler的函数
    //         //deep: true,       //深度监听
    //         handler(newValue, oldValue) {
    //             this.is_open = this.open
    //         }
    //     }
    // },
    // computed: {
    //     data: {
    //         get(){
    //             let data = this.value
    //             if(data == '' || data == undefined || data == null) {
    //                 return data
    //             }

    //             if(typeof(data) != "string") {
    //                 console.log(data, typeof(data), 'object===format')
    //                 return data
    //             }
    //             //data = this.filter(data)
    //             console.log(data, typeof(data), 'string===format')
    //             try{
    //                 data = JSON.parse(data)
    //             } catch(error) {
    //                 console.log(error, '=============')
    //             }
    //             return data
    //         },
    //         set(val){
    //             //this.$emit('value', val)
    //         }
    //     }
    // },
    // methods: {
    //     isOpen() {
    //         this.is_open = !this.is_open
    //     }
    // }
}
</script>
