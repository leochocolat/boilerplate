const path = require('path');

module.exports = {
  entry: './src/javascript/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist', 'javascript')
  }
};
