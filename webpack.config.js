const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    app: './src/javascript/index.js',
    print: './src/javascript/utils/print.js',
  },
  plugins: [
      new HtmlWebpackPlugin({
        title: 'Output Management',
        filename: '../html/index.html'
      })
   ],
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('dist', 'javascript')
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
       },
       {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
       },
       {
          test: /\.(csv|tsv)$/,
          use: [
            'csv-loader'
          ]
       },
       {
          test: /\.xml$/,
          use: [
            'xml-loader'  
          ]
       }
    ]
  }
};
