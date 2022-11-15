const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/typ-def");
const { resolvers } = require("./schema/resolver");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const graphql = require("graphql");
const url = process.env.MONGO_URL;

const server = new ApolloServer({ typeDefs, resolvers });

mongoose.connect(url, (err) => {
  err ? console.log(err.message) : console.log("connect to DB!!!");
});

server.listen().then(({ url }) => {
  console.log(`API Is working on ${url}`);
});
