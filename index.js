const { ApolloServer, PubSub } = require("apollo-server");
const { mongoose } = require("./config/mongoose");
const { MONGODB } = require("./keys/keys");

const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers/index");

// for subscribers query (like a Mutation, Query)
//const pubSub = new PubSub();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({
    req
    //pubSub
  })
});

mongoose
  .connect(MONGODB, {
    poolSize: 5,
    useNewUrlParser: true
  })
  .then(() => {
    console.log("🚀 MONGODB connected");
    return server.listen({ port: 5000 });
  })
  .then(res => console.log(`🚀 Server ready at ${res.url}`));
