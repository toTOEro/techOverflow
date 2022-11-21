import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($name: String!){
    addUser(name: $name){
        _id
        name
        email
        postings
    }
}
`;

export const ADD_POSTING = gql `
mutation addPosting($profileId: ID!, $posting.title: String!, $posting.description: String! ){
    addPosting(profileId: $profileId, posting.title: $posting.title, posting.description: $posting.description){
        _id
        firstName
        lastName
        postings
    }
}
`