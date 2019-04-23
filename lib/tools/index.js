const chalk = require('chalk');

const package = require('../../package.json')



module.exports =  {
  console_normal (msg) {
    console.log(chalk.green(msg))
  },
  console_warn (msg) {
    console.log(chalk.yellow(msg))
  },
  console_ok (msg) {
    console.log(chalk.bgGreen(msg))
  },
  version: package.version
}