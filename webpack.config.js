const webpack = require("webpack");
const path = require("path");

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      process: "process",
    }),
    new webpack.EnvironmentPlugin({
      FOURSQUARE_PLACES_API_BASE_URL:
        "https://api.foursquare.com/v3/places/search",
      FOURSQUARE_PLACES_API_KEY:
        "fsq3C1EEWYk0pgVweHJQ0mELQHwD+jCkfg5zE4y5LV5T/x0=",
    }),
  ],
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
      '@controller': path.resolve(__dirname, 'src/controller/index.ts'),
      '@model': path.resolve(__dirname, 'src/model/index.ts'),
      '@observer': path.resolve(__dirname, 'src/Observer/index.ts'),
      '@regex': path.resolve(__dirname, 'src/regex/index.ts'),
      '@services': path.resolve(__dirname, 'src/services/index.ts'),
      '@utils': path.resolve(__dirname, 'src/utils/index.ts'),
      '@view': path.resolve(__dirname, 'src/view/index.ts')
    }
  },
  output: {
    publicPath: "public",
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  mode: "development",
};
