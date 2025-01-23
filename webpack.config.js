import { resolve } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export const mode = 'development'
export const entry = {
  bundle: resolve(__dirname, 'src/dropdown-menu.js'),
}
export const output = {
  path: resolve(__dirname, 'dist'),
  filename: '[name][contenthash].js',
  clean: true,
  assetModuleFilename: '[name][ext]',
}
export const devtool = 'source-map'
export const devServer = {
  static: {
    directory: resolve(__dirname, 'dist'),
  },
  port: 3000,
  open: true,
  hot: true,
  compress: true,
  historyApiFallback: true,
}
export const module = {
  rules: [
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
  ],
}
export const plugins = [
  new HtmlWebpackPlugin({
    title: 'Webpack App',
    filename: 'index.html',
    template: 'src/template.html',
  }),
  new BundleAnalyzerPlugin({
    analyzerPort: 8889, // Use a different port
  }),
]
