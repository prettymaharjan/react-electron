const path = require("path");

module.exports = {
  entry: "./src/main/main.ts",
  target: "electron-main",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [{ test: /\.ts$/, exclude: /node_modules/, use: "ts-loader" }],
  },
  node: {
    __dirname: false,
    __filename: false,
  },
};
