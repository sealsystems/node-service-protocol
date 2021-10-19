'use strict';

const assert = require('assertthat');

const serviceProtocol = require('../lib');

suite('index', () => {
  test('is an object.', async () => {
    assert.that(serviceProtocol).is.ofType('object');
  });

  test('contains getProtocol function', async () => {
    assert.that(serviceProtocol.getProtocol).is.ofType('function');
  });

  test('contains isLocal function', async () => {
    assert.that(serviceProtocol.isLocal).is.ofType('function');
  });
});
