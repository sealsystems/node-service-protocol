# node-service-protocol

Determine protocol for connecting to a service using consul for resolving local hostname if necessary.

The environment variable `TLS_UNPROTECTED` is used with the folowing values:

- `none` No unprotected connections are used and `getProtocol` always returns `https`
- `world` All connections are unprotected and `getProtocol` always returns `http`
- `loopback` (default) Connections to localhost are unprotected and `getProtocol` returns `http`, external connections are protected and `getProtocol` return `https`.

## Installation

```bash
npm install @sealsystems/service-protocol
```

## Usage

```javascript
const serviceProtocol = require('@sealsystems/service-protocol');

const consul = ... // get consul from somewhere

const protocol = serviceProtocol.getProtocol(consul, 'localhost');
// --> 'http'

const isLocal = serviceProtocol.isLocal(consul, 'localhost');
// --> true
```

### getProtocol

```javascript
getProtocol(consul, hostname);
```

Returns the protocol for connection to a service on host `hostname`.

### isLocal

```javascript
isLocal(consul, hostname);
```

Returns `true` if `hostname` is identical to the local host.
