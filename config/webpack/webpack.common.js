const webpack = require('webpack');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');

const { ENV_NAME } = process.env;

const { javaScript, svg, fonts, page, clean } = require('./parts');

const commonConfig = (mode) =>
  merge([
    {
      entry: ['./src'],
      plugins: [
        new Dotenv(),
        new webpack.DefinePlugin({
          'process.env.ENV_NAME': JSON.stringify(
            ENV_NAME || 'NO_ENV_NAME_PROVIDED',
          ),
        }),
      ],
    },
    page({ title: 'Demo', mode }),
    svg(),
    javaScript(),
    fonts(),
    clean(),
  ]);

module.exports = commonConfig;
