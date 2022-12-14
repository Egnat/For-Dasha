const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: 'main.js',
      assetModuleFilename: 'src/images/[name].[ext]',///assets
      path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
      alias: {
        aliasName: path.resolve(__dirname, "src/images"),
      }
    },
    plugins: [
    new MiniCssExtractPlugin(), 
    new HtmlWebpackPlugin({template: 'src/index.html',}),
    //new CleanWebpackPlugin(), 
    ],
    //devtool: 'inline-source-map',// для клина
    devServer: {
      static: {
        directory: path.join(__dirname, "./dist")
      }, /*можно так писать*/
       //port: 8080 /*3000,*/ //можно так, только убрать статик и директорию
       //hot: true/*для работы с реактом*/
    },
    /*optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.squooshMinify,
          options: {
            encodeOptions: {
              mozjpeg: {
                // That setting might be close to lossless, but it’s not guaranteed
                // https://github.com/GoogleChromeLabs/squoosh/issues/85
                quality: 100,
              },
              webp: {
                lossless: 1,
              },
              avif: {
                // https://github.com/GoogleChromeLabs/squoosh/blob/dev/codecs/avif/enc/README.md
                cqLevel: 0,
              },
            },
          },
        },
      }),
    ],
  },*/
  module: {
    rules: [
      /*{
        test: /\.html$/,
        use: 'html-loader'
      },*/
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i, //из видео youtub. расширение фото
        type: 'asset/resource',//
      },
      {
         test: /\.(mp4|mov|3gp)$/i, //расширение видео
         type: 'asset/resource',
      },
      {
         test: /\.(eot|ttf|woff|woff2)$/i, //из видео youtub. расширения шрифтов
         type: 'asset/resource',
      },
      { 
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: true,
            },
          }, 'css-loader',
        ], 
      },
    ],
  },
};
