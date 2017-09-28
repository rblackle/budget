var packageJSON = require('./package.json');
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
  build: path.join(__dirname, 'target', 'classes', 'META-INF', 'resources',
    'webjars', packageJSON.name, packageJSON.version)
};

module.exports = {
  entry: './app/index.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'react-hot-loader!babel-loader'

      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: "style-loader!css-loader"
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: PATHS.build,
    publicPath: '/',
    filename: 'app-bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'App',
      template: 'app/html-templates/index.ejs',
    })
  ]
};
