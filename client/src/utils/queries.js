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
//How can I implement this? If uncommented breaks run develop command 

// export const QUERY_USER_POSTINGS = gql`
// query userPostings($_id: ID!){


// }
// `
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
query Registered($id: ID!) {
  registered(_id: $id) {
    _id
    title
    owners_id {
      _id
    }
  }
}
`