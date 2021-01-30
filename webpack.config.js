const { merge } = require('webpack-merge');
const { mode } = require('webpack-nano/argv');

const commonConfig = require('./config/webpack/webpack.common');

const getConfig = (mode) => {
  process.env.NODE_ENV = mode;

  switch (mode) {
    case 'production': {
      const productionConfig = require('./config/webpack/webpack.production');
      return merge(commonConfig(mode), productionConfig, { mode });
    }
    case 'development': {
      const developmentConfig = require('./config/webpack/webpack.development');
      return merge(commonConfig(mode), developmentConfig, { mode });
    }
    default:
      throw new Error(`Trying to use an unknown mode, ${mode}`);
  }
};

module.exports = getConfig(mode);
