const path = require("path");

const getDevServer = () => ({
  contentBase: path.join(__dirname, "..", "src/public"),
  compress: true,
  port: 9000,
  hot: true,
  historyApiFallback: true,
  overlay: {
    warnings: true,
    errors: true
  }
});

module.exports.getDevServer = getDevServer;
