const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: '#source-map',
  entry: {
    app: './src/entry/index.js',
    vendor: ['vue'/*, 'vue-router', 'vuex', 'firebase', 'lru-cache', 'es6-promise'*/]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'js/[name].[chunkhash:8].js'
  },
  plugins:[
    new HtmlWebpackPlugin({
        filename: 'html/index.html',
        template: './src/template/index.html',
        inject:'body',
        // hash:true,
        // chunks:['vendor', 'app']   // 这个模板对应上面那个节点
    }),
  ]
  /*,
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue',
        options: vueConfig
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        options: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  }*/
}
