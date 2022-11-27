
import { gql } from "@apollo/client";

//works 11/22 this is signup
export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!){
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password ){
        _id
    }
}
`;

export const ADD_POSTING = gql`
  mutation addPosting($title: String!, $ownersId: ID!, $description: String) {
    addPosting(title: $title, owners_id: $ownersId, description: $description) {
      _id
      title
      description
    }
}
`
//works 11/22... not on FE 11/23
export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
       token
        user {
            _id
            email
        }
    }
}
`
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
`;

export const DELETE_USER = gql`
mutation DeleteUser($id: ID!) {
  deleteUser(_id: $id)
}
`;

export const UPDATE_POSTING = gql`
  mutation updatePosting($id: ID!, $title: String, $description: String) {
    updatePosting(_id: $id, title: $title, description: $description) {
      _id
      date_created
      description
      title
    }
  }
`;

export const DELETE_POSTING = gql`
mutation deletePosting($_id: ID!){
  deletePosting(_id: $_id)
}
`;

//for the addComment, returning info in case we want to show a screen that shows the commenter's other posts, or if we want to email them a copy of their comment.
export const ADD_COMMENT = gql`
  mutation addComment($content: String!, $creator: String!, $postingId: ID!) {
    addComment(content: $content, creator: $creator, postingId: $postingId) {
      _id
      date_created
      creator {
        _id
      }
      content
    }
  }
`;

export const UPDATE_COMMENT = gql`
  mutation updateComment($id: ID!, $content: String) {
    updateComment(_id: $id, content: $content) {
      _id
      content
      date_created
      creator {
        _id
      }
    }
  }
`;

export const DELETE_COMMENT = gql`
  mutation deleteComment($id: ID!) {
    deleteComment(_id: $id) {
      _id
      content
      creator {
        _id
      }
      date_created
    }
  }
`;

export const REGISTER = gql`
  mutation register($postId: ID!, $userId: ID!) {
    register(postId: $postId, userId: $userId) {
      _id
      registered {
        _id
      }


    }
  }

`