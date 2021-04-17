const { execSync } = require('child_process');
const path = require('path');
const { DefinePlugin } = require('webpack');
const { BannerPlugin } = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js',
    main1: './src/app.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
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
        Build Date: ${new Date().toDateString}
        Commit Version: ${execSync('git rev-parse --short HEAD')}
        Author: ${execSync('git config user.name')}
      `,
    }),
    new DefinePlugin({
      TWO: 1 + 1,
      TWOString: JSON.stringify('1+1'),
      'api.domain': JSON.stringify('http://dev.api.domain.com'),
    }),
  ],
};
