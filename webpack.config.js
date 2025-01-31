const path = require('path');
const glob = require('glob');

module.exports = {
  mode: 'production',
  entry: () => {
    const testFiles = glob.sync('./src/endpoints/**/*.test.ts');
    return testFiles.reduce((entries, file) => {
      const name = path.basename(file, '.ts');
      entries[name] = file;
      entries[name] = './' + file;
      return entries;
    }, {});
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