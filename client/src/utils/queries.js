import { gql } from '@apollo/client';
//WORKS DO NOT TOUCH 11/22
export const QUERY_POSTINGS = gql`
query allPostings {
    postings {
        _id
        title
        description
        owners_id {
            _id
            email
            firstName
            avatar
        }
    }
}
`;

export const QUERY_ME = gql`
query me($_id: ID!){
  me(_id: $_id){
    _id
    firstName
    lastName
    email
    postings{
      _id
      title
      description
    }
  }
}
`
//no longer works 11/22
export const QUERY_SINGLE_POSTING = gql`
query getSinglePosting ($_id: ID!) {
  singlePost(_id: $_id) {
    _id
    title
    description
    comments {
      _id
      content
      date_created
          }
      }
}
`
//WORKS DO NOT TOUCH 11/22
export const QUERY_USERS = gql`
query getUsers{
    users {
        _id
        firstName
        lastName
        email
        postings {
          _id
          title
          description
        }
    }
}
`

export const QUERY_SINGLE_USER = gql`
query User($id: ID!) {
  user(_id: $id) {
    _id
    email
    firstName
    lastName
    avatar
    postings {
      _id
      title
      description
    }
  }
}
`

//works 11/22 do not touch
export const QUERY_COMMENTS = gql`
  query allComments {
    comments {
      _id
      content
      date_created
    }
  }
`;

export const REGISTERED = gql`
query Registered($_id: ID!) {
  registered(_id: $_id) {
    _id
    title
    owners_id {
      _id
    }
  }
}
`

export const POSTINGCOMMENTS = gql`
query postComments($_id: ID!) {
  postComments(_id: $_id) {
    _id
    comments {
      _id
      content
      date_created
    }
  }
}
`