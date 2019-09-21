const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { isDev } = require("./env");

const getBabelLoader = () => ({
  test: /\.js$/,
  exclude: /node_modules/,
  use: ["cache-loader", "babel-loader?cacheDirectory", "thread-loader"]
});

const getTsLoader = () => ({
  test: /\.tsx?$/,
  loader: "ts-loader"
});

const getCssLoader = env => ({
  test: /\.css$/,
  use: [isDev(env) ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"]
});

const getImageLoader = () => ({
  test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|)$/,
  loader: "url-loader"
});

const getGraphqlLoader = () => ({
  test: /\.(graphql|gql)$/,
  exclude: /node_modules/,
  loader: "graphql-tag/loader"
});

const getRules = env =>
  [
    getBabelLoader(),
    getTsLoader(),
    getCssLoader(env),
    getImageLoader(),
    getGraphqlLoader()
  ].filter(loader => loader);

module.exports.getRules = getRules;
