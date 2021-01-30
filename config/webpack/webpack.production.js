const { merge } = require('webpack-merge');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const { extractCSS, generateSourceMaps, minifyJavaScript } = require('./parts');

const productionConfig = merge([
  {
    optimization: {
      minimize: true,
      minimizer: [new CssMinimizerPlugin()],
    },
  },
  extractCSS(),
  minifyJavaScript(),
  generateSourceMaps({ type: 'source-map' }),
]);

module.exports = productionConfig;
