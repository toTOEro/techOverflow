import { gql } from "@apollo/client";

export const QUERY_POSTINGS = gql`
  query allPostings {
    postings {
      _id
      title
      description
      owner {
        email
        firstName
      }
    }
  }
`;

export const QUERY_SINGLE_POSTING = gql`
  query getSinglePosting($id: ID!) {
    singlePost(_id: $id) {
      _id
      title
      description
      owner {
        _id
        firstName
        email
      }
      comments {
        _id
        content
        date_created
      }
    }
  }
`;

export const QUERY_USER_INFO = gql`
  query currentUser {
    me {
      firstName
      lastName
      email
      postings
    }
  }
`;

export const QUERY_USERS = gql`
  query allUsers {
    users {
      firstName
      lastName
      email
    }
  }
`;
