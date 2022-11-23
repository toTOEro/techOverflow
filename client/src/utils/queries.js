import { gql } from '@apollo/client';
//WORKS DO NOT TOUCH 11/22
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
//WORKS DO NOT TOUCH 11/22
export const QUERY_SINGLE_POSTING = gql`
query getSinglePosting ($_id: ID!) {
    singlePost(_id: $_id) {
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
`
//WORKS DO NOT TOUCH 11/22
export const QUERY_USERS = gql`
query getUsers{
    users {
        _id
        firstName
        lastName
        email
    }
}
`
//How can I implement this? If uncommented breaks run develop command 

// export const QUERY_USER_POSTINGS = gql`
// query userPostings($_id: ID!){


// }
// `

