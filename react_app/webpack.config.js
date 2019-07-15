const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx$/,
        use: [{
          loader: 'ts-loader'
        }]
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'source-map-loader',
          options: {
            enforce: 'pre',
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }]
      },
      {
        test: /favicon\.ico$/,
        loader: 'file-loader',
        options: { name: '[name].[ext]' }
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve('./src'),
    ],
    extensions: ['.tsx', '.js', '.ts', 'json']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true,
    contentBase: './dist'
  }
};
