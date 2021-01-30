const { WebpackPluginServe } = require('webpack-plugin-serve');
const { WebpackPluginRamdisk } = require('webpack-plugin-ramdisk');

module.exports = () => ({
  watch: true,
  plugins: [
    new WebpackPluginServe({
      port: process.env.PORT || 3900,
      static: '/Volumes/wpr/dist',
      liveReload: true,
      waitForBuild: true,
      historyFallback: true,
    }),
    new WebpackPluginRamdisk(),
  ],
});
