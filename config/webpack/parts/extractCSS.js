const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = () => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: true,
              },
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: 1,
                esModule: true,
                modules: {
                  localIdentName: '[name]__[local]--[contenthash:base64:5]',
                  exportLocalsConvention: 'camelCaseOnly'
                },
              },
            },
            'postcss-loader',
          ],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'widget.css',
        ignoreOrder: false,
      }),
    ],
  };
};
