'use strict';

const getenv = require('@sealsystems/seal-getenv');

const isLocal = require('./isLocal');

const unprotectedLoopback = async function (consul, hostname) {
  if (!consul) {
    throw new Error('Consul is missing.');
  }
  if (!hostname) {
    throw new Error('Host is missing.');
  }

  const isLocalhost = await isLocal(consul, hostname);

  return isLocalhost ? 'http' : 'https';
};

const getProtocol = async function (consul, hostname) {
  const tlsUnprotected = getenv('TLS_UNPROTECTED', 'loopback');

  switch (tlsUnprotected) {
    case 'none':
      return 'https';
    case 'loopback':
      return await unprotectedLoopback(consul, hostname);
    case 'world':
      return 'http';
    default:
      throw new Error('TLS_UNPROTECTED invalid.');
  }
};

module.exports = getProtocol;
