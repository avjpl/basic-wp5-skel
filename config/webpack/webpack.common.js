const { merge } = require('webpack-merge');

const {
  javaScript,
  svg,
  fonts,
  page,
  clean,
  defineEnvVars,
} = require('./parts');

const commonConfig = (mode) =>
  merge([
    { entry: ['./src'] },
    page({ title: 'Demo' }),
    svg(),
    javaScript(),
    fonts(),
    clean(),
    defineEnvVars(mode),
  ]);

module.exports = commonConfig;
