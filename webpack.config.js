const path = require('path');

const SOURCE_DIR = path.resolve(__dirname, 'src');

module.exports = {

  entry: `${SOURCE_DIR}/index.js`,
  output: {

    filename: 'jake.min.js',
    library: 'jake',
    libraryTarget: 'umd'

  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: path.resolve(__dirname, '.'),
      },
      {
        test: /\.(js|jsx)$/,
        include: SOURCE_DIR,
        loader: 'babel-loader'
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'react-svg-loader',
            options: {
              svgo: {
                plugins: [{ removeTitle: false }],
                floatPrecision: 2
              }
            }
          }
        ]
      },
    ],
  },

  plugins: [],
};
