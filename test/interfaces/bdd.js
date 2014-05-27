var common = require('../common');
var assert = require('assert');

var bdd = require(common.libDir +'/interfaces/bdd');
var instance = bdd();
var staged = instance.stage({});

'describe it before after beforeEach afterEach'.split(' ')
    .forEach(function (name) {
        assert.equal(typeof staged[name], 'function');
    });

