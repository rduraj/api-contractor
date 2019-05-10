const webpack = require('webpack')
const path = require('path');

module.exports = {
  entry: './src/contractor-parser/index.ts',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.parser.json',
          }
        }],
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
  output: {
    filename: 'contractor-parser/parser.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true }),
  ]
};
