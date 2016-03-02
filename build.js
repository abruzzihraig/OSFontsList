'use strict';

const macFont = require('./mac');
const winFont = require('./windows');

const fs = require('fs');

try {
  fs.writeFileSync('index.json', JSON.stringify({
    mac: macFont,
    win: winFont
  }));
  console.log('build successfully');
} catch (e) {
  console.error(e);
  process.exit(1);
}
