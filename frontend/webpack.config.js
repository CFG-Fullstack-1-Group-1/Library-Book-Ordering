const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DEV_SERVER_PORT = 3001;

module.exports = {
  entry: path.resolve(__dirname, "./src/index.js"),
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: DEV_SERVER_PORT,
  },
  output: {
    publicPath: "auto",
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
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      manifest: "./public/manifest.json",
      favicon: "./public/favicon.ico",
      template: "./public/index.html",
    }),
  ],
};
