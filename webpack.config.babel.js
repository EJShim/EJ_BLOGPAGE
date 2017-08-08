import path from 'path';
import webpack from 'webpack';

export default {
  entry: './src/index.js',
  output: {
    path: path.resolve('./build/public'),
    filename: 'index.js'
  },
  resolve: {
    modules: ["node_modules", "src"],
    extensions: ['.js', '.scss', '.css', '.json']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js/,
        use: [
          { loader: 'babel-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader', options: {
              includePaths: ['./node_modules']
            }
          }
        ]
      },
    ]
  }
};