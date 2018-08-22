const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   context: path.join(__dirname, 'src'),
   entry: './index.js',
   output:{
      path : path.resolve(__dirname, 'dist'),
      filename: './bundle.js'
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html',
         inject: 'body'
      })
   ]
};
