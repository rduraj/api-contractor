const path = require('path');

module.exports = {
  entry: './src/contractor-app/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.app.json',
          }
        }],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'contractor-app/contractor.js',
    path: path.resolve(__dirname, 'build')
  }
};
