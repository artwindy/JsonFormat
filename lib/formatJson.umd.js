(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["formatJson"] = factory(require("vue"));
	else
		root["formatJson"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "3a74":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "6563":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_formatJson_vue_vue_type_style_index_0_id_56c706b7_lang_scss_scope_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3a74");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_formatJson_vue_vue_type_style_index_0_id_56c706b7_lang_scss_scope_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_v16_dist_index_js_ref_1_1_formatJson_vue_vue_type_style_index_0_id_56c706b7_lang_scss_scope_true__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "6b0d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.default = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "FormatJson", function() { return /* reexport */ FormatJson; });

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");

// CONCATENATED MODULE: ./node_modules/vue-loader-v16/dist/templateLoader.js??ref--5!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./packages/FormatJson/src/formatJson.vue?vue&type=template&id=56c706b7


const _hoisted_1 = { key: 0 }
const _hoisted_2 = {
  key: 1,
  class: "v-object"
}
const _hoisted_3 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", { class: "v-operator" }, "[", -1)
const _hoisted_4 = {
  key: 2,
  class: "v-object"
}
const _hoisted_5 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", { class: "v-operator" }, "{", -1)
const _hoisted_6 = {
  key: 0,
  class: "v-key"
}
const _hoisted_7 = {
  key: 1,
  class: "v-operator"
}
const _hoisted_8 = {
  key: 0,
  class: "v-comma"
}
const _hoisted_9 = {
  key: 1,
  class: "v-comma"
}
const _hoisted_10 = {
  key: 6,
  class: "v-comma"
}
const _hoisted_11 = {
  key: 3,
  class: "v-object"
}
const _hoisted_12 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", { class: "v-operator" }, "]", -1)
const _hoisted_13 = {
  key: 4,
  class: "v-object"
}
const _hoisted_14 = /*#__PURE__*/Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementVNode"])("i", { class: "v-operator" }, "}", -1)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_format_json = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["resolveComponent"])("format-json", true)

  return (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
    class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`formatJson ${$props.className}`)
  }, [
    (!$setup.data)
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", _hoisted_1, "--"))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
    (Object.prototype.toString.call($setup.data) === '[object Array]')
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_2, [
          ($setup.data.length > 0)
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("i", {
                key: 0,
                onClick: _cache[0] || (_cache[0] = $event => (_ctx.is_open=!_ctx.is_open)),
                class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(_ctx.is_open ? 'v-toggle v-open' : 'v-toggle')
              }, null, 2))
            : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
          _hoisted_3
        ]))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
    (Object.prototype.toString.call($setup.data) === '[object Object]')
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_4, [
          (Object.keys($setup.data).length > 0)
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("i", {
                key: 0,
                onClick: _cache[1] || (_cache[1] = $event => (_ctx.is_open=!_ctx.is_open)),
                class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(_ctx.is_open ? 'v-toggle v-open' : 'v-toggle')
              }, null, 2))
            : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
          _hoisted_5
        ]))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
    (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(true), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])(external_commonjs_vue_commonjs2_vue_root_Vue_["Fragment"], null, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderList"])($setup.data, (val, key, index) => {
      return Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withDirectives"])((Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("div", {
        key: index,
        class: "v-pre"
      }, [
        (Object.prototype.toString.call($setup.data) !== '[object Array]')
          ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_6, "\"" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(key) + "\"", 1))
          : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
        (Object.prototype.toString.call($setup.data) !== '[object Array]')
          ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("i", _hoisted_7, ":"))
          : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
        (val && typeof(val) === 'object')
          ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createBlock"])(_component_format_json, {
              key: 2,
              value: val,
              root: false,
              open: $props.open,
              parentIndex: index,
              className: "v-children"
            }, {
              comma: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["withCtx"])((scope) => [
                (Object.prototype.toString.call($setup.data) === '[object Array]' && Object.keys($setup.data).length - 1 >= (key+1) && typeof(val) === 'object')
                  ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("i", _hoisted_8, ","))
                  : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
                (Object.prototype.toString.call($setup.data) === '[object Object]' && Object.keys($setup.data).length - 1 > scope.slotIndex && typeof(val) === 'object')
                  ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("i", _hoisted_9, ","))
                  : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
              ]),
              _: 2
            }, 1032, ["value", "open", "parentIndex"]))
          : (typeof(val) === 'string')
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
                key: 3,
                class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`v-all v-${typeof(val)}`)
              }, " \"" + Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(val) + "\" ", 3))
            : (val == null || val == undefined)
              ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
                  key: 4,
                  class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`v-all v-${String(val)}`)
                }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(String(val)), 3))
              : (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
                  key: 5,
                  class: Object(external_commonjs_vue_commonjs2_vue_root_Vue_["normalizeClass"])(`v-all v-${typeof(val)}`)
                }, Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toDisplayString"])(val), 3)),
        (Object.keys($setup.data).length - 1 > (index || key) && ((val && typeof(val)) !== 'object'))
          ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("i", _hoisted_10, ","))
          : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
      ])), [
        [external_commonjs_vue_commonjs2_vue_root_Vue_["vShow"], _ctx.is_open]
      ])
    }), 128)),
    (Object.prototype.toString.call($setup.data) === '[object Array]')
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_11, [
          (!_ctx.is_open && $setup.data.length > 0)
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
                key: 0,
                onClick: _cache[2] || (_cache[2] = $event => (_ctx.is_open=!_ctx.is_open)),
                class: "v-ellipsis"
              }, "..."))
            : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
          _hoisted_12,
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "comma", { slotIndex: $props.parentIndex })
        ]))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
    (Object.prototype.toString.call($setup.data) === '[object Object]')
      ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", _hoisted_13, [
          (!_ctx.is_open && Object.keys($setup.data).length > 0)
            ? (Object(external_commonjs_vue_commonjs2_vue_root_Vue_["openBlock"])(), Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createElementBlock"])("span", {
                key: 0,
                onClick: _cache[3] || (_cache[3] = $event => (_ctx.is_open=!_ctx.is_open)),
                class: "v-ellipsis"
              }, "..."))
            : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true),
          _hoisted_14,
          Object(external_commonjs_vue_commonjs2_vue_root_Vue_["renderSlot"])(_ctx.$slots, "comma", { slotIndex: $props.parentIndex })
        ]))
      : Object(external_commonjs_vue_commonjs2_vue_root_Vue_["createCommentVNode"])("", true)
  ], 2))
}
// CONCATENATED MODULE: ./packages/FormatJson/src/formatJson.vue?vue&type=template&id=56c706b7

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader-v16/dist??ref--1-1!./packages/FormatJson/src/formatJson.vue?vue&type=script&lang=js


/* harmony default export */ var formatJsonvue_type_script_lang_js = ({
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
    setup(props, ctx) {
        const { proxy } = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["getCurrentInstance"])();
        const renderData = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["reactive"])({
            is_open: props.open
        })
        const isOpen = ()=> {
            renderData.is_open = !renderData.is_open
        }
        const data = Object(external_commonjs_vue_commonjs2_vue_root_Vue_["computed"])({
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
            ...Object(external_commonjs_vue_commonjs2_vue_root_Vue_["toRefs"])(renderData),
            data,
            isOpen
        }
    }
});

// CONCATENATED MODULE: ./packages/FormatJson/src/formatJson.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./packages/FormatJson/src/formatJson.vue?vue&type=style&index=0&id=56c706b7&lang=scss&scope=true
var formatJsonvue_type_style_index_0_id_56c706b7_lang_scss_scope_true = __webpack_require__("6563");

// EXTERNAL MODULE: ./node_modules/vue-loader-v16/dist/exportHelper.js
var exportHelper = __webpack_require__("6b0d");
var exportHelper_default = /*#__PURE__*/__webpack_require__.n(exportHelper);

// CONCATENATED MODULE: ./packages/FormatJson/src/formatJson.vue







const __exports__ = /*#__PURE__*/exportHelper_default()(formatJsonvue_type_script_lang_js, [['render',render]])

/* harmony default export */ var formatJson = (__exports__);
// CONCATENATED MODULE: ./packages/FormatJson/index.js
 // 导入组件

formatJson.install  = app => app.component(formatJson.name,formatJson)

/* harmony default export */ var FormatJson = (formatJson);


// CONCATENATED MODULE: ./packages/index.js


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

/* harmony default export */ var packages_0 = ({
    install,
    FormatJson: FormatJson
});


// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=formatJson.umd.js.map