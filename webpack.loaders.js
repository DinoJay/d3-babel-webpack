const path = require('path');

module.exports = [
  {
    // global css
    test: /\.css$/,
    exclude: /[/\\]node_modules[/\\]/,
    // include: /[\/\\](globalStyles)[\/\\]/,
    loaders: [
      'style-loader?sourceMap',
      'css-loader'
    ]
  },
  // global scss
  {
    test: /\.scss$/,
    exclude: /[\/\\]node_modules[\/\\]/,
    // include: /[/\\](layouts)[/\\]/,
    loaders: [
      'style-loader?sourceMap',
      'css-loader',
      'sass-loader'
    ]
  },
  {
    enforce: 'pre',
    test: /\.js$/,
    loader: 'remove-flow-types-loader',
    include: [/node_modules\/mapbox-gl\/js/]
  },
  {
    test: /\.jsx?$/,
    exclude: /(node_modules|bower_components|public)/,
    loader: 'babel-loader'
  },
  {
    test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    // exclude: /(node_modules|bower_components)/,
    loader: 'file-loader'
  },
  {
    test: /\.(woff|woff2)$/,
    // exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?prefix=font/&limit=5000'
  },
  {
    test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    // exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
  },
  {
    test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
    // exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
  },
  {
    test: /\.gif/,
    // exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=image/gif'
  },
  {
    test: /\.jpg/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=image/jpg'
  },
  {
    test: /\.png/,
    exclude: /(node_modules|bower_components)/,
    loader: 'url-loader?limit=10000&mimetype=image/png'
  },
  {
    test: /\.csv/,
    exclude: /(node_modules|bower_components)/,
    loader: 'dsv-loader'
  },
  {
    test: /\.json/,
    exclude: /(node_modules|bower_components)/,
    loader: 'json-loader'
  }
];
