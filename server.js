// var webpack = require('webpack');
// var WebpackDevServer = require('webpack-dev-server');
// var config = require('./webpack.config');

// new WebpackDevServer(webpack(config), {
//     publicPath: config.output.publicPath,
//     hot: true,
//     historyApiFallback: true,
//     // It suppress error shown in console, so it has to be set to false.
//     quiet: false,
//     // It suppress everything except error, so it has to be set to false as well
//     // to see success build.
//     noInfo: false,
//     stats: {
//       // Config for minimal console.log mess.
//       assets: false,
//       colors: true,
//       version: false,
//       hash: false,
//       timings: false,
//       chunks: false,
//       chunkModules: false
//     }
// }).listen(3000, 'localhost', function (err) {
//     if (err) {
//         console.log(err);
//     }

//   console.log('Listening at localhost:3000');
// });

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Listening at localhost:3000\n');
});