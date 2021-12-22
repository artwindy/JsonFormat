'use strict'
// const path = require('path')
// const webpack = require('webpack')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    // resolve: {
    //     alias: {
    //         '@': resolve('packages')
    //     }
    // },

    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        config.module
            .rule('js')
            .include
            .add('/packages')
            .add('/styles')
            .end()
            .use('babel')
            .loader('babel-loader')
    }
}