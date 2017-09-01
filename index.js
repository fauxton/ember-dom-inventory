/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-dom-inventory',

  afterInstall() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-addon-state-bucket' }
      ]
    });
  },

  setupPreprocessorRegistry(type, registry) {
    var DomInventory = require('./lib/dom-inventory');

    registry.add('htmlbars-ast-plugin', {
      name: 'inventory-dom-elements-and-classes',
      plugin: DomInventory,
      baseDir: function() { return __dirname; }
    });
  },
};
