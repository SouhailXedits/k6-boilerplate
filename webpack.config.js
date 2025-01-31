const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'example.test': './src/endpoints/example.test.ts',
    'new-endpoint.test': './src/endpoints/new-endpoint.test.ts'
  },
  output: {
    path: path.join(__dirname, 'dist/endpoints'),
    libraryTarget: 'commonjs',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  target: 'web',
  externals: /k6(\/.*)?/,
  optimization: {
    minimize: false
  }
}; 