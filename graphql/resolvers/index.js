const usersResolver = require("./users");
const hello = require("./hello");

module.exports = {
  Query: {
    ...usersResolver.Query,
    ...hello.Query
  },

  Mutation: {
    ...usersResolver.Mutation
  }
};
