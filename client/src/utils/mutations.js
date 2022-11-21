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
mutation addPosting($userId: ID!, $posting.title: String!, $posting.description: String! ){
    addPosting(userId: $userId, posting.title: $posting.title, posting.description: $posting.description){
        _id
        firstName
        lastName
        postings
    }
}
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
        profile {
            _id
            name
        }
    }
}
`