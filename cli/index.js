const Generator = require('./generator');


function Init() {
  const generator = new Generator(options={name: 'hahahahah'},arr=[]);
  generator.initManifest();
}

module.exports = {
  Init: Init
}