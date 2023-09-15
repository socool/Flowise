const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports = {
  webpack: {
    plugins: {
      add: [
        new HtmlWebpackPlugin({
          template: './public/index.html',
        }),
        new ModuleFederationPlugin({
          name: 'ui',
          filename: 'remoteEntry.js',
          exposes: {
            './UiComponent': './src/index',
          },
        }),
      ],
    },
  },
};
