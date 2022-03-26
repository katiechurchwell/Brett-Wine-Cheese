const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: [
    new CopyWebpackPlugin({
        patterns: [
          "relative/path/to/file.ext",
          "relative/path/to/dir",
          path.resolve(__dirname, "src", "file.ext"),
          path.resolve(__dirname, "src", "dir"),
          "**/*",
          {
            from: 'images/baking', 
            to: "src/dist/images",
            context: "/" 
          },
        ],
      }),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i })
  ],
  module: {
    rules: [
      {
        // convert all imported images to have max width 1000px
        test: /\.(png|jpe?g|webp|tiff?)$/i,
        include: [
          // will include any paths relative to the current directory starting with 'src/dist/assets/images'
          path.resolve(__dirname, 'src/dist/assets/'),
        ],
        use: [
          "file-loader",
          {
            loader: "webpack-image-resize-loader",
            options: {
              width: 1000,
            },
          },
        ],
      },
    ],
  },
}