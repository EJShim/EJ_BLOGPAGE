const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  // Entry points to the project
  entry: {
    main: [
      // only- means to only hot reload for successful updates
      'webpack/hot/only-dev-server',
      './src/app/index.js',
    ],
  },
  // Server Configuration options
  devServer: {
    contentBase: 'src/www', // Relative directory for base of server
    hot: true, // Live-reload
    inline: true,
    port: 3000, // Port Number
    host: 'localhost', // Change to '0.0.0.0' for external facing server
  },
  resolve: {
    modules: [__dirname, 'node_modules', 'src'],
  },
  devtool: 'eval',
  output: {
    path: path.resolve(__dirname, 'build'), // Path of output file
    filename: 'index.js',
  },
  plugins: [
    // Enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // Moves files
    new TransferWebpackPlugin([{
      from: 'www'
    }, ], path.resolve(__dirname, 'src')),
  ],
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[path][name]__[local]--[hash:base64:5]'
            },
          },
          {
            loader: require.resolve('postcss-loader'),
            options: {
              ident: 'postcss',
              plugins: () => [
                require('postcss-flexbugs-fixes'),
                autoprefixer({
                  browsers: [
                    '>1%',
                    'last 4 versions',
                    'Firefox ESR',
                    'not ie < 9', // React doesn't support IE8 anyway
                  ],
                  flexbox: 'no-2009',
                }),
              ],
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;