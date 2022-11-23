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
    owners_id: String!
    comments: [Comment]
    owner: User
    registered: [User]
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
    user(_id: ID!): User
    postings: [Posting]
    singlePost(_id: ID!): Posting
    comments: [Comment]
  }

  type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateUser(
      _id: ID!
      firstName: String
      lastName: String
      email: String
      password: String
    ): User
    deleteUser(_id: ID!): User
    addPosting(title: String!, description: String, owners_id: String!): Posting
    updatePosting(_id: ID!, title: String, description: String): Posting
    deletePosting(_id: ID!): Posting
    addComment(content: String!): Comment
    updateComment(_id: ID!, content: String): Comment
    deleteComment(_id: ID!): Comment
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
