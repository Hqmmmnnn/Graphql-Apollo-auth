module.exports = api => {
  api.cache(true);

  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      "react-hot-loader/babel",
      "@babel/plugin-proposal-object-rest-spread",
      "@babel/plugin-transform-async-to-generator",
      "@babel/plugin-proposal-export-namespace-from"
    ]
  };
};
