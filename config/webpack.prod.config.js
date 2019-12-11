const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.js'); // 引用公共的配置
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 用于将组件的css打包成单独的文件输出到`lib`目录中
const autoprefixer = require('autoprefixer');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const prodConfig = {
  mode: 'production', // 开发模式
  entry: path.join(__dirname, "../src/index.js"),
  output: {
    path: path.join(__dirname, "../dist/"),
    filename: "index.js",
    libraryTarget: 'umd', // 采用通用模块定义
    libraryExport: 'default', // 兼容 ES6 的模块系统、CommonJS 和 AMD 模块规范
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader' ],
      },
      {
        test: /\.less$/,
        loader: [ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', 'postcss-loader' ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "colorpicker.min.css" // 提取后的css的文件名
    }),

    new webpack.LoaderOptionsPlugin({
        options: {
            context: __dirname,
            postcss: [autoprefixer]
        }
    }),
    
    new BundleAnalyzerPlugin()
  ],
  externals: { // 定义外部依赖，避免把react和react-dom打包进去
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  },
};

module.exports = merge(prodConfig, baseConfig); // 将baseConfig和prodConfig合并为一个配置