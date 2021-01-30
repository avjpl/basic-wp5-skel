module.exports = () => ({
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset',
        use: 'raw-loader',
      },
    ],
  },
});
