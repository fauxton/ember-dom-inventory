/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-dom-inventory',

  setupPreprocessorRegistry(type, registry) {
    var DomInventory = require('./lib/class-counter');

    registry.add('htmlbars-ast-plugin', {
      name: 'inventory-dom-elements-and-classes',
      plugin: DomInventory,
      baseDir: function() { return __dirname; }
    });
  },
};
