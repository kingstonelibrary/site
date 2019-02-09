const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const paths = {
  DIST: path.resolve(__dirname, 'dist'),
  SRC: path.resolve(__dirname, 'src'),
  JS: path.resolve(__dirname, 'src/js'),
};

module.exports = (env, argv) => {
  const IS_DEVELOPMENT = argv.mode === 'development';
  return {
    devtool: IS_DEVELOPMENT ? 'source-map' : 'none',
    entry: path.join(paths.SRC, 'index.js'),
    output: {
      path: paths.DIST,
      filename: 'app.bundle.js',
    },
    devServer: {
      contentBase: 'dist',
      open: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(paths.SRC, 'index.html'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          include: /test/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-env',
                ]
              }
            }
          ]
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    optimization: {
      minimizer: IS_DEVELOPMENT
        ? []
        : [
            new UglifyJSPlugin({
              uglifyOptions: {
                compress: {
                  drop_console: true
                }
              }
            })
          ]
    }
  };
}

