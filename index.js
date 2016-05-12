#!/usr/bin/env node

const
  spawn = require('child_process').spawn
, nw    = require('nwjs')
, child = spawn(nw, ['.', {cwd : __dirname}])


// var args  = ['-r', '.']
// args = args.concat(process.argv.slice(2))
// spawn('./node_modules/.bin/nwbuild', args, {cwd: __dirname, stdio: [0, 1, 2]})

