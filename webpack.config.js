const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '8888';


// local css modules
// loaders.push({
//   test: /\.css$/,
//   exclude: /[\/\\](node_modules|bower_components|public)[\/\\]/,
//   loaders: [
//     'style?sourceMap',
//     'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
//   ]
// });

module.exports = {
  entry: [
    // "react-hot-loader/patch",
    './src/index.js' // your app's entry point
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders
  },
  devServer: {
    contentBase: './public',
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST,
    proxy: {
      '**': {
        target: 'http://localhost:8000/',
        secure: false
      }
    }
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
    // new webpack.ProvidePlugin({
    // $: 'jquery',
    // jQuery: 'jquery',
    // 'window.jQuery': 'jquery',
    // Tether: 'tether',
    // 'window.Tether': 'tether'
    // Tooltip: 'exports-loader?Tooltip!bootstrap/js/dist/tooltip',
    // Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
    // Button: 'exports-loader?Button!bootstrap/js/dist/button',
    // Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
    // Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
    // Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
    // Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
    // Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
    // Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
    // Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
    // Util: 'exports-loader?Util!bootstrap/js/dist/util'
    // })
  ]
};
