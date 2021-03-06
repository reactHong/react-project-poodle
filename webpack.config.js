const path = require('path');
const { execSync } = require('child_process');
const { DefinePlugin } = require('webpack');
const { BannerPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js',
    // main1: './src/app.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)/i,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]',
          limit: 10000,
        },
      },
    ],
  },
  plugins: [
    new BannerPlugin({
      banner: `
        Build Date: ${new Date().toDateString()}
        Commit Version: ${execSync('git rev-parse --short HEAD')}
        Author: ${execSync('git config user.name')}
      `,
    }),
    new DefinePlugin({
      TWO: 1 + 1,
      TWOString: JSON.stringify('1+1'),
      'api.domain': JSON.stringify('http://dev.api.domain.com'),
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      templateParameters: {
        env: process.env.NODE_ENV === 'development' ? '(개발용)' : '',
      },
    }),
    new CleanWebpackPlugin(),
    ...(process.env.NODE_ENV === 'production'
      ? [
          new MiniCssExtractPlugin({
            filename: '[name].css',
          }),
        ]
      : []),
  ],
};

console.log('webpack.config.js:', process.env.NODE_ENV);
