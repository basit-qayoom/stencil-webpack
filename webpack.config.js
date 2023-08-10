const path = require('path');

module.exports = {
  entry: './dist/stencil-pw/stencil-pw.esm.js', // Entry point of your application
  output: {
    filename: 'bundle.js', // Name of the output bundle
    path: path.resolve(__dirname, 'WEBPACK_BUNDLE'), // Output directory
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
