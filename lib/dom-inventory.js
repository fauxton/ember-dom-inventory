/*jshint node:true*/
const fs = require('fs');

function DomInventory() {
  this.syntax = null;
}

DomInventory.prototype.transform = function(ast) {
  var walker = new this.syntax.Walker();
  const htmlElements = new Set();
  const classes = new Set();

  walker.visit(ast, function(node) {
    if (node.type === 'ElementNode') {
      htmlElements.add(node.tag);
      node.attributes.map(attr => {
        if (attr.name == 'class') {
          attr.value.chars.split(' ').forEach(className => classes.add(className));
        }
      });
    }
  });


  const eventName = 'ember-addon-state-bucket:set';
  let key = 'ember-dom-inventory:htmlClasses';
  process.emit(eventName, key, classes);
  process.emit('ember-addon-state-bucket:get', key);

  key = 'ember-dom-inventory:htmlElements';
  process.emit(eventName, key, htmlElements);
  process.emit('ember-addon-state-bucket:get', key);

  return ast;
};

module.exports = DomInventory;
