const path = require('path');
const custom = require('../webpack.config.js');

const SOURCE_DIR = path.resolve(__dirname, 'src');
module.exports = {
  module: custom.module,
  plugins: custom.plugins,
};
