
const fs = require('fs')


/**
 * 读取json 文件
 */
function readJson(url) {
  try{
    return JSON.parse(fs.readFileSync(url).toString())
  }catch(err) {
    console.error(err)
  }
}

module.exports = readJson