const Generator = require('./generator');


function Init(key) {
  const generator = new Generator(key,options={name: 'hahahahah'},arr=[]);
  generator.initManifest();
  generator.initPage("page1");
}

module.exports = {
  Init: Init
}