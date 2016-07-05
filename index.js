#!/usr/bin/env node

'use strict'

const
  nw   = require('nwjs')
, proc = require('child_process')
, path = require('path')
, args = [path.join(__dirname)]

proc.spawn(nw, args)
