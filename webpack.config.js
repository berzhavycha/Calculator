const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      process: "process/browser",
      '@config': path.resolve(__dirname, 'src/config/operations.ts'),
      '@controller': path.resolve(__dirname, 'src/controller/'),
      '@model': path.resolve(__dirname, 'src/model/'),
      '@observer': path.resolve(__dirname, 'src/observer/'),
      '@regex': path.resolve(__dirname, 'src/regex/'),
      '@services': path.resolve(__dirname, 'src/services/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@view': path.resolve(__dirname, 'src/view/')

    }
  },
  output: {
    publicPath: "public",
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "development",
};
