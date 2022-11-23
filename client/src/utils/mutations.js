
import { gql } from "@apollo/client";

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!){
    addUser(name: $name, email: $email, password: $password){
        token
        
    }
}
`




export const ADD_POSTING = gql`
mutation addPosting($title: String!, $ownersId: ID!, $description: String) {
    addPosting(title: $title, owners_id: $ownersId, description: $description) {
        _id
        title
        description
    
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

export const UPDATE_USER = gql`
mutation updateUser($id: ID!, $firstName: String, $lastName: String, $email: String, $password: String) {
    updateUser(_id: $id, firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      lastName
      firstName
      email
    }
  }
`
