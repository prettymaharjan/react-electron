const path = require("path");

module.exports = {
  entry: "./src/main/preload.ts",
  target: "electron-preload",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "preload.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
};
