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


  const { setItemSync } = process.emberAddonStateBucket;

  setItemSync('ember-dom-inventory:htmlElements', Array.from(htmlElements));
  setItemSync('ember-dom-inventory:htmlClasses', Array.from(classes));

  return ast;
};

module.exports = DomInventory;
