const path = require("path");
const webpack = require("webpack");

const DEV_SERVER_PORT = 8080;

// Debugged using {https://stackoverflow.com/questions/66772358/webpack-warning-warning-in-defineplugin-conflicting-values-for-process-env-no}
// and https://stackoverflow.com/questions/55652077/css-file-causing-error-in-react-webpack-configuration

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  devServer: {
    static: path.join(__dirname, "dist"),
    port: DEV_SERVER_PORT,
  },
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: ["@svgr/webpack", "url-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
};
