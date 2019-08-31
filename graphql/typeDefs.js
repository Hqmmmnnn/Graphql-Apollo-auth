const { gql } = require("apollo-server");

// The GraphQL schema
module.exports = gql`
  input RegisterInput {
    firstName: String!
    lastName: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  type User {
    id: ID!
    email: String!
    token: String!
    firstName: String!
    lastName: String!
    createdAt: String!
  }

  type Mutation {
    register(registerInput: RegisterInput): User!
    login(firstName: String!, lastName: String!, password: String!): User!
  }

  type Query {
    whoIsSyka: String!
  }
`;
