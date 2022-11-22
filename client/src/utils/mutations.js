import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!){
    addUser(name: $name, email: $email, password: $password){
        _id
        firstName
        lastName
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

`

export const ADD_COMMENT = gql `
    


`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
        profile {
            _id
            firstName
            lastName
        }
    }
}
`