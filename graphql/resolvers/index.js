const usersResolver = require("./users");
const hello = require("./hello");

module.exports = {
  Query: {
    ...hello.Query
  },

  Mutation: {
    ...usersResolver.Mutation
  }
};
