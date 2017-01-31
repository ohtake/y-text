/* eslint import/no-extraneous-dependencies: [error, {devDependencies: true}] */

import path from 'path';
import webpack from 'webpack';

const isProduction = process.env.NODE_ENV === 'production';

const js = {
  entry: [
    './src/brace.js',
  ],
  output: {
    publicPath: 'build/',
    path: 'build/',
    filename: 'brace.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  devtool: 'source-map',
  plugins: [
    ...(isProduction ? [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
    ] : []),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015'],
          },
        },
      },
    ],
  },
};

export default js;
