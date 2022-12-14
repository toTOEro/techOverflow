const { gql } = require("apollo-server-express");
const typeDefs = gql`
  type User {
    _id: ID
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    postings: [Posting]
    avatar: String
  }
  type Posting {
    _id: ID
    title: String!
    description: String
    date_created: String
    owners_id: User!
    comments: [Comment]
    registered: [User]
  }
  type Comment {
    _id: ID
    content: String!
    date_created: String
    creator: User!
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
    registered(_id: ID!): [Posting]
    postComments(_id: ID!): Posting
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
    ): Auth
    deleteUser(_id: ID!): Auth
    addPosting(title: String!, description: String, owners_id: ID!): Posting
    updatePosting(_id: ID!, title: String, description: String): Posting
    deletePosting(_id: ID!): Posting
    addComment(content: String!, creator: String!, postingId: ID!): Comment
    updateComment(_id: ID!, content: String): Comment
    deleteComment(_id: ID!): Comment
    login(email: String!, password: String!): Auth
    register(postId: ID!, userId: ID!): Posting
    changeAvatar(url: String!): User
  }
`;

module.exports = typeDefs;