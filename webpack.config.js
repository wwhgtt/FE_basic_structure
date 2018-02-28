const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    'index': ['./src/index/index.js'],
    'login': ['./src/login/login.js']
  },
  // 配置模块如何解析。例如，当在 ES2015 中调用 import "lodash"，resolve 选项能够对 webpack 查找 "lodash" 的方式去做修改
  resolve: {
    // 告诉 webpack 解析模块时应该搜索的目录。
    // 如果你想要添加一个目录到模块搜索目录，此目录优先于 node_modules/ 搜索：
    // modules: [path.resolve(__dirname, "src"), "node_modules"]
    modules: ['node_modules']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    // 公共路径
    // 此路径下的打包文件可在浏览器中访问。
    // 假设服务器运行在 http://localhost:8080 并且 output.filename 被设置为 bundle.js。
    // 默认 publicPath 是 "/"，所以你的包(bundle)可以通过 http://localhost:8080/bundle.js 访问。
    publicPath: `http://${process.env.DEV_HOST}:3000/`,
  },
  devtool: ['source-map'],
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
  postcss() {
    return [autoprefixer({ browsers: ['last 5 versions'] })];
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
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
    // 这句没什么卵用
    new webpack.EnvironmentPlugin(['NODE_ENV', 'DEV_HOST']),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
};
