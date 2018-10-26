const CleanWebpackPlugin = require(`clean-webpack-plugin`)

module.exports = {
  entry: {
    HomePagePanel: [`babel-polyfill`, `whatwg-fetch`, `./html/render.js`]
  },

  plugins: [
    new CleanWebpackPlugin([`dist`])
  ],

  output: {
    library: `[name]`,
    filename: `[name].bundle.js`
  },

  optimization: {
    splitChunks: {
      chunks: `all`,
      minSize: 1,
      cacheGroups: {
        facetedSearch: {
          test: /[\\/]src[\\/]/,
          name: `HomePagePanel`,
          priority: -20
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: `vendors`,
          priority: -10
        }
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules\//,
        use: `babel-loader`
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: `url-loader?limit=100000`
      },
      {
        test: /\.css$/,
        use: [
          `style-loader`, 'css-loader'
        ]
      }
    ]
  }
}
