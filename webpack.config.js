const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'src/dist')
  },
  plugins: [
    new CopyWebpackPlugin(
      {
        patterns: [
          { from: 'src/assets/images/baking',
          to: path.resolve(__dirname, 'src/dist/assets/images') }
        ]
      }
    ),
    new ImageminPlugin()
  ]
}