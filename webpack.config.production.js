const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
      'index': ['./src/index/index.js'],
      'login': ['./src/login/login.js']
    },
    resolve: {
      modules: ['node_modules']
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
      publicPath: `http://${process.env.PROD_HOST}:3000/`,
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel-loader'], // 'babel-loader' is also a legal name to reference
        },
        {
          test: /\.scss|css$/,
          loaders: ['style', 'css?sourceMap', 'postcss', 'sass?&sourceMap&includePaths[]=./src/asset/style'],
        },
        {
          test: /\.png|jpg|jpeg|eot|ttf|svg|woff2|woff$/,
          loaders: ['url-loader', 'url?name=asset/img/[hash].[ext]'],
        },
        {
          test: /\.json$/,
          loaders: ['json'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin(
        {
          title: 'IndexApplication',
          filename: 'index.html',
          chunks: ['common', 'index'],
          inject: 'body', template: './src/index/index.html',
        }
      ),
      new HtmlWebpackPlugin(
        {
          title: 'LoginApplication',
          filename: 'login.html',
          chunks: ['common', 'login'],
          inject: 'body', template: './src/login/login.html',
        }
      ),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        filename: 'common.js',
      }),
      new webpack.EnvironmentPlugin(['NODE_ENV', 'PROD_HOST']),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        },
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      })  
    ],
  };
  