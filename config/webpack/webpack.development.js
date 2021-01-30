const { merge } = require('webpack-merge');

const { devServer, css, images } = require('./parts');

const developmentConfig = merge([
  {
    entry: ['webpack-plugin-serve/client'],
  },
  devServer(),
  css(),
  images({ limit: 15000 }),
]);

module.exports = developmentConfig;
