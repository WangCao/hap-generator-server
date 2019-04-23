
const EventEmitter = require('events')
const ejs = require('ejs')
const fs = require('fs')
const path = require('path')

/**
 * 
 * @options 配置文件
 * @arr 组件列表
 */

module.exports = class Generator extends EventEmitter {

  constructor(options,arr) {
    super()
    this.options = Object.assign({},{
      package: 'com.application.demo',
      name: 'demo',
      versionName: '0.0.1',
      versionCode: '1',
      features: ['prompt','router','shortcut'],
      type: 'list'
    },options)
    this.arr = arr
  }

  // 初始化manifest

  initManifest () {
    let t = fs.readFileSync(path.resolve(__dirname,'./template/manifest.txt'),'utf-8');
    let a = ejs.render(t,this.options);
    fs.writeFileSync(path.resolve(__dirname,'../quickapp/src/manifest.json'),a)
  }
}