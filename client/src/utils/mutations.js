import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!){
    addUser(name: $name, email: $email, password: $password){
        token
        
    }
}
`



export const ADD_POSTING = gql`
mutation addPosting($title: String!, $ownersId: String!, $description: String) {
    addPosting(title: $title, owner: $ownersId, description: $description) {
        _id
        title
    
    }
  }
`


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