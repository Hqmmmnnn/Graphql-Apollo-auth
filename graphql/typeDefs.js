const { gql } = require("apollo-server");

// The GraphQL schema
module.exports = gql`
  input RegisterInput {
    email: String!
    password: String!
    confirmPassword: String!
  }

  type User {
    id: ID!
    email: String!
    token: String!
    createdAt: String!
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(email: String!, password: String!): User!
  }

  type Query {
    whoIsSyka: String!
    currentUser: User
  }
`;
