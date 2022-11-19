const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    postings: [Posting]
  }

  type Posting {
    _id: ID
    title: String!
    description: String
    date_created: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    content: String!
    date_created: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    users: [User]
    me: User
    user: User
    postings: [Posting]
    singlePost(_id: ID): Posting
    comment: [Comment]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    addPosting(title: String!, description: String): Posting
    addComment(content: String!): Comment
    deletePosting(_id: ID!): Posting
    deleteComment(_id: ID!): Comment
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
