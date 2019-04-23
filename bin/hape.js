const program = require('commander');
const {
  console_normal,
  console_warn,
  console_ok,
  version
} = require('../lib/tools')

program.version(version);

program
  .command('help')
  .description('显示使用帮助')
  .action(function () {
    program.outputHelp();
  })