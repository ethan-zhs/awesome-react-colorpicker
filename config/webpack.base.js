const path = require('path');

module.exports = {
    module: {
      rules: [
        {
          // 使用 babel-loader 来编译处理 js 和 jsx 文件
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          exclude: /node_modules/
        },
        {
          // 使用 babel-loader 来编译处理color-convert
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          include: path.join(__dirname, '../node_modules/color-convert/'),
        }
      ]
    },
  };