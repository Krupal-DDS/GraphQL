const { gql } = require("apollo-server");

const typeDefs = gql`
  type Friends {
    name: String!
  }
  type User {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends:[User]
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
  }
  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = India
                        
  }
  input UpdateUserInput {
    id: ID!
    name: String
    username: String
    age: Int
    nationality: Nationality = India
  }
  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(input: UpdateUserInput!): User
    deleteUser(id: ID!): Boolean
  }
  enum Nationality {
    China
    Brazil
    Canada
    USA
    India
  }
`;

module.exports = { typeDefs };
