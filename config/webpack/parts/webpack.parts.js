const webpack = require('webpack');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

exports.minifyJavaScript = () => ({
  optimization: { minimizer: [new TerserPlugin()] },
});

exports.generateSourceMaps = ({ type }) => ({ devtool: type });

exports.clean = () => ({ plugins: [new CleanWebpackPlugin()] });

exports.defineEnvVars = (mode) => {
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
