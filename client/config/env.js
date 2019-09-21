const isDev = env => env.NODE_ENV === "development";
const isProd = env => env.NODE_ENV === "production";

module.exports = { isDev, isProd };
