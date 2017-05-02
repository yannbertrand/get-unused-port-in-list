# get-unused-port-in-list
**Stability: 2 - Stable**

[![npm](https://img.shields.io/npm/v/get-unused-port-in-list.svg)](https://www.npmjs.com/package/get-unused-port-in-list) [![Build Status](https://travis-ci.org/yannbertrand/get-unused-port-in-list.svg?branch=master)](https://travis-ci.org/yannbertrand/get-unused-port-in-list)

## Description
Run through a list of TCP ports and return one that is not busy

## Usage
```javascript
require('get-unused-port-in-list')([7000, 8000, 9000])
  .then((unusedPort) => {
  	// unusedPort port is free (first caught)
  })
  .catch(() => {
  	// All ports are busy
  })
```
