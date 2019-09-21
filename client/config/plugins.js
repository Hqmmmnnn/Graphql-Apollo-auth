const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { isDev, isProd } = require("./env");

const getMiniCssExtractPlugin = env => {
  if (isProd(env)) {
    return new MiniCssExtractPlugin({
      filename: "css/[name].[chunkhash:8].css"
    });
  }
};

const getCleanWebpackPlugin = env => {
  if (isProd(env)) {
    return new CleanWebpackPlugin();
  }
};

const getHMR = env => {
  if (isDev(env)) {
    return new webpack.HotModuleReplacementPlugin();
  }
};

const getBundleAnalyzerPlugin = env => {
  return env.analyze && new BundleAnalyzerPlugin();
};

const getHtmlWebpackPlugin = env =>
  new HtmlWebpackPlugin(
    Object.assign(
      {
        filename: "index.html",
        template: path.join(__dirname, "..", "src/public", "index.html"),
        inject: true,
        chunks: ["app", "vendors"]
      },
      isProd(env) && {
        minify: {
          removeComments: true,
          collapseWhitespace: true
        }
      }
    )
  );

const getPlugins = env =>
  [
    getHtmlWebpackPlugin(env),
    getBundleAnalyzerPlugin(env),
    getMiniCssExtractPlugin(env),
    getHMR(env),
    getCleanWebpackPlugin(env)
  ].filter(plugin => plugin);

module.exports = { getPlugins };
