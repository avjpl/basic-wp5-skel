const webpack = require('webpack');

module.exports = (mode) => {
  const environments = {
    production: 'production',
    development: 'development',
  };

  console.log(' - - - - - - - - - - - - - - - - - - - - - ');
  console.log({ mode });
  console.log({
    'process.env.MODE': environments[mode],
  });
  console.log(' - - - - - - - - - - - - - - - - - - - - - ');

  return {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.mode': environments[mode],
      }),
      new webpack.EnvironmentPlugin({'MODE': 'sdfsdf'}),
    ]
  };
};
