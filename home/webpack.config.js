const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    index: './src/index.js'
  },


  devServer: {
    port: 8080
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html',
      inject: true,
      chunks: ['index'],
      filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
          template: './src/html/home.html',
          inject: true,
          chunks: ['home'],
          filename: 'home.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/html/approach.html',
        inject: true,
        chunks: ['approach'],
        filename: 'approach.html'
      }),
      new HtmlWebpackPlugin({
        template: './src/html/feature.html',
        inject: true,
        chunks: ['feature'],
        filename: 'feature.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },

};

