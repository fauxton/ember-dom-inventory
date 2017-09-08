/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-dom-inventory',

  setupPreprocessorRegistry(type, registry) {
    if (type === 'parent') {
      var DomInventory = require('./lib/dom-inventory');

      registry.add('htmlbars-ast-plugin', {
        name: 'ember-dom-inventory',
        plugin: DomInventory,
        baseDir: function() { return __dirname; }
      });
    }
  },

  postBuild(result) {
    var exec = require('child_process').exec;
    function puts(error, stdout, stderr) { console.log(stdout); }
    exec("rm -rf ./node-persist", puts);
    return result;
  }
};
