import { gql } from '@apollo/client';
//works 11/22 this is signup
 export const ADD_USER = gql`
 mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!){
     addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password ){
         _id
     }
 }
 `;
 //running into auth error. need to test on actual site. 11/22
 export const UPDATE_USER = gql`
 mutation updateUser($_id: ID!, $firstName: String!, $lastName: String!, $email: String!, $password: String!){
    updateUser(_id: $_id, firstName: $firstName, lastName: $lastName, email: $email, password: $password){
        _id
        firstName
        lastName
        email
        password
    }
 }
 `
 //needs to implement checking if owners ID matches the current user ID?
  //running into auth error. need to test on actual site. 11/22
 export const DELETE_USER = gql`
 mutation deleteUser($_id: ID!){
    deleteUser(_id: $_id)
 }
 `
 //running into owners_id error. need to test on actual site. 11/22
export const ADD_POSTING = gql `
mutation addPosting( $title: String!, $description: String!, $owner: ID! ){
    addPosting(title: $title, description: $description, owner: $owner){
        _id
        title
        description
        owner {
            _id
            firstName
            lastName
        }
    }
}
`
 //needs to implement checking if owners ID matches the current user ID?
export const UPDATE_POSTING = gql`
mutation updatePosting($_id: ID!, $title: String!, $description: String!){
    updatePosting(_id: $_id, title: $title, description: $description){
        _id
        title
        description
    }
}
 `
//needs to implement checking if owners ID matches the current user ID?
 export const DELETE_POSTING = gql`
 mutation deletePosting($_id: ID!){
    deletePosting(_id: $_id)
 }
 `

// export const ADD_COMMENT = gql `
    


// `;




//works 11/22
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
       token
        User {
            _id
            email
        }
    }
}
`