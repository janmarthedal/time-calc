var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'index.tsx'),
  mode: 'development',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  devtool: 'source-map',
  externals: {
    luxon: 'luxon'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: 'awesome-typescript-loader'
      }]
    }]
  },
  devServer: {
    port: 4200
  }
};
