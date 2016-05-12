#!/usr/bin/env node

const
  spawn = require('child_process').spawn
, nw    = require('nwjs')
, child = spawn(nw, ['.'])

