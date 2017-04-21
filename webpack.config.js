'use strict';

var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    path: 'dist/assets',
    filename: 'bundle.js',
    publicPath: 'assets'
  },
  devServer: {
    inline: true,
    contentBase: './dist',
    port: 8080
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader'],
        query: {
          presets: ['latest', 'es2015', 'react']
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react']
         }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
      },
      {
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /\.(jpg|gif|png)$/,
        loader: 'file?name=img/[hash].[ext]',
      },
      {
        test: /\.svg.*/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]',
      },
      {
        test: /\.woff.*/,
        loader: 'file?name=fonts/[name].[ext]',
      },
      {
        test: /\.[ot]tf.*/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]',
      },
      {
        test: /\.eot.*/,
      loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]',
    },
    {
    test: /\.scss$/,
    loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
    }
    ]
  }
}




// var webpack = require('webpack');
// var path = require("path");
//
// var DIST_DIR = path.resolve(__dirname, "dist");
// var SRC_DIR = path.resolve(__dirname, "src");
//
// const CleanPlugin = require('clean-webpack-plugin');
// const ExtractText = require('extract-text-webpack-plugin');
// const apiURL = process.env.API_URL || 'http://localhost:3000';
// const production = process.env.NODE_ENV ==='production';
//
// var plugins = [
//   new ExtractText('bundle.css'),
//   new webpack.DefinePlugin({
//     __API_URL__: JSON.stringify(apiURL)
//   }),
// ];
// if (production){
//   plugins = plugins.concat([
//     new webpack.optimize.UglifyJsPlugin({
//       mangle: true,
//       compress: {
//         warnings: false
//       }
//     })
//   ]);
// }
//
// var config = {
//     entry: SRC_DIR + "/app/index.js",
//     output: {
//         path: DIST_DIR + "/app",
//         filename: "bundle.js",
//         publicPath: "/app/"
//     },
//     module: {
//         loaders: [
//             {
//                 test: /\.js?/,
//                 include: SRC_DIR,
//                 loader: "babel-loader",
//                 exclude: "/node_modules",
//                 query: {
//                     presets: ["react", "es2015", "stage-2"]
//                 }
//             },
//             {
//                 test: /\.jsx?$/,
//                 exclude: /(node_modules|bower_components)/,
//                 loader: 'babel',
//                 query: {
//                   presets: ['react']
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 loader: "style-loader!css-loader"
//             },
//             {
//               test: /\.html$/,
//               loader: 'html',
//             },
//             {
//               test: /\.(jpg|gif|png)$/,
//               loader: 'file?name=img/[hash].[ext]',
//             },
//             {
//               test: /\.svg.*/,
//               loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]',
//             },
//             {
//               test: /\.woff.*/,
//               loader: 'file?name=fonts/[name].[ext]',
//             },
//             {
//               test: /\.[ot]tf.*/,
//               loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]',
//             },
//             {
//               test: /\.eot.*/,
//               loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]',
//             }
//         ]
//     }
// };
//
// module.exports = config;
