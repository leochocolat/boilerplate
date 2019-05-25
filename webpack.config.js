const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/javascript/index.js',
  watch: true,
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist', 'javascript')
  }
};
