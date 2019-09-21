const path = require("path");
const { isDev } = require("./env");

const enableHotLoader = env => {
  if (isDev(env)) {
    return {
      "react-dom": "@hot-loader/react-dom"
    };
  }
};

const getResolve = env => ({
  alias: {
    "@ui": path.resolve(__dirname, "..", "src/ui"),
    "@features": path.resolve(__dirname, "..", "src/features"),
    "@lib": path.resolve(__dirname, "..", "src/lib"),
    "@graphql": path.resolve(__dirname, "..", "src/graphql"),
    ...enableHotLoader(env)
  },
  extensions: [".js", ".ts", ".tsx"],
  modules: [
    path.resolve(__dirname, "..", "node_modules"),
    path.resolve(__dirname, "..", "src")
  ]
});

module.exports.getResolve = getResolve;
