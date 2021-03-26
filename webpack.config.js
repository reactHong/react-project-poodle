const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js',
    main1: './src/app.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
  }
}