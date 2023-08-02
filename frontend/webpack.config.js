const path = require('path');

/* html-webpack-plugin: simplifies creation of HTML files
https://webpack.js.org/plugins/html-webpack-plugin/ */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode – either 'production' or 'development'
  mode: 'development',
  // set up entry point
  entry: {
    // (multiple entry points are possible)
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  // set up output folder
  output: {
    path: path.resolve(__dirname, 'dist'),
    // [name] will evaluate to key name in 'entry'
    // [contenthash] creates unique hash code
    filename: '[name].[contenthash].js',
    // refresh new bundle.js file in '/dist' => 'npm run dev'
    clean: true,
    // set name for asset created in '/dist'
    assetModuleFilename: '[name][ext]',
  },
  // 'npm run build' => create map source file in '/dist'
  devtool: 'source-map',
  // set up development server
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 8080,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  // LOADERS
  module: {
    rules: [
      // set up style, css, and sass loaders
      {
        // (RegEx expression)
        // rule will apply to any file that ends in .scss
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // set up babel loader
      {
        // (RegEx expression)
        // rule will apply to any file that ends in .js
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // set up resource loader (native)
      {
        // (RegEx expression)
        // rule will apply to any file that ends in .png/svg/jpg/jpeg/gif
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'assets/resource',
      },
    ],
  },
  // set up plugins
  plugins: [
    new HtmlWebpackPlugin({
      title: 'untitled',
      filename: 'index.html',
      template: 'src/template.html',
    }),
  ],
};
