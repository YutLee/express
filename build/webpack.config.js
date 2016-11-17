const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


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
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  plugins:[
    //清空目录
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),// 一个根的绝对路径.
      // verbose: true,// 将log写到 console.
      // dry: false,// 不要删除任何东西，主要用于测试.
      // exclude: ['shared.js']//排除不删除的目录，主要用于避免删除公用的文件
    }),
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
