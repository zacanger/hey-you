#!/usr/bin/env node

const words = require('./words')
console.log(`hey, you! you're ${words[~~(Math.random() * words.length)]}!`)
