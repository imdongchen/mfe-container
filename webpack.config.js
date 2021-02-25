const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("./package.json");

const isProd = process.env.NODE_ENV === "production";

const port = 8089;

module.exports = {
  mode: isProd ? "production" : "development",
  devServer: {
    port,
    historyApiFallback: true,
  },
  output: {
    filename: "[name].[contenthash].js",
    publicPath: isProd ? "/container/latest/" : `http://localhost:${port}/`,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        market: "market@http://localhost:8081/remoteEntry.js",
        p2p: "p2p@http://localhost:8082/remoteEntry.js",
        unifiedLogin: "unifiedLogin@http://localhost:8083/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};
