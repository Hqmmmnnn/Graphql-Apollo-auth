const { getEntry } = require("./config/entry");
const { getOutput } = require("./config/output");
const { getRules } = require("./config/rules");
const { getPlugins } = require("./config/plugins");
const { getResolve } = require("./config/resolve");
const { getOptimization } = require("./config/optimization");
const { getDevServer } = require("./config/devServer");

const { isDev } = require("./config/env");

module.exports = env => {
  const config = {
    mode: isDev(env) ? "development" : "production",
    entry: getEntry(env),
    output: getOutput(env),
    module: { rules: getRules(env) },
    plugins: getPlugins(env),
    resolve: getResolve(env),
    optimization: getOptimization(),
    devtool: isDev(env) ? "cheap-module-eval-source-map" : "source-map"
  };

  if (isDev(env)) {
    config.devServer = getDevServer();
  }

  return config;
};
