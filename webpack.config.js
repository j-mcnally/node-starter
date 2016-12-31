module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      }
    ]
  },
  entry: './static/src/js/app.js',
  output: {
    filename: './static/dist/bundle.js'
  }
}
