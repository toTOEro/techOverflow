import { gql } from "@apollo/client";
//WORKS DO NOT TOUCH 11/22
export const QUERY_POSTINGS = gql`
query allPostings {
  postings {
    _id
    title
    description
  
    owners_id {
      email
      firstName
      lastName
      password
    }
  }

}
`;
//WORKS DO NOT TOUCH 11/22
export const QUERY_SINGLE_POSTING = gql`
  query getSinglePosting($id: ID!) {
    singlePost(_id: $id) {
      _id
      title
      description
      owners_id {
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
`
//WORKS DO NOT TOUCH 11/22
export const QUERY_USERS = gql`
query getUsers{
    users {
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
//How can I implement this? If uncommented breaks run develop command 

// export const QUERY_USER_POSTINGS = gql`
// query userPostings($_id: ID!){


// }
// `

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
export const QUERY_COMMENTS = gql`
  query allComments {
    comments {
      _id
      content
      date_created
    }
  }
`;
