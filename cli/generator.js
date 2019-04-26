
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

  constructor(key,options,pagearr) {
    super()
    this.options = Object.assign({},{
      package: 'com.application.demo',
      name: 'demo',
      versionName: '0.0.1',
      versionCode: '1',
      features: ['prompt','router','shortcut'],
      type: 'list'
    },options)
    this.pagearr = pagearr
    this.key = key
  }

  // 初始化manifest

  initManifest () {
    let t = fs.readFileSync(path.resolve(__dirname,'./template/manifest.txt'),'utf-8');
    let a = ejs.render(t,this.options);
    fs.writeFileSync(path.resolve(__dirname,`../quickapps/qk_${this.key}/src/manifest.json`),a)
  }

  initPage (pagename='') {
    let t = fs.readFileSync(path.resolve(__dirname,'./template/page.txt'),'utf-8');
    let a = ejs.render(t,this.pagearr);
    fs.writeFileSync(path.resolve(__dirname,`../quickapps/qk_${this.key}/src/${pagename}/manifest.json`),a)
  }
}