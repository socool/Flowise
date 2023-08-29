const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  webpack: {
    plugins: {
      add: [
        new ModuleFederationPlugin({
          name: "host",
          remotes: {
            app1: "app1@http://localhost:3001/remoteEntry.js",
            app2: "app2@http://localhost:3002/remoteEntry.js",
            app3: "app3@http://localhost:3003/remoteEntry.js",
          },
          shared: {
            react: { singleton: true },
            "react-dom": { singleton: true },
          },
        }),
      ],
    },
  },
};
