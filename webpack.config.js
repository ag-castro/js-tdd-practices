const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    path: path.resolve(__dirname, './src/dist'),
    filename: 'js/bundle.js',
  },
  devServer: {
    contentBase: './src/dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
