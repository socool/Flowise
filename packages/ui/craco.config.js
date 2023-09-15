const { ModuleFederationPlugin } = require('webpack').container
module.exports = {
  devServer: {
    port: 3001
  },
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: 'ui',
          filename: 'remoteEntry.js',
          exposes: {
            './UiComponent': './src/index'
          },
          shared: ['react', 'react-dom']
        })
      ]
    },
    configure: {
      module: {
        rules: [
          {
            test: /\.m?js$/,
            resolve: {
              fullySpecified: false
            }
          }
        ]
      }
    }
  }
}
