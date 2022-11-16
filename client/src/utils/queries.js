import { gql } from '@apollo/client';

export const QUERY_POSTINGS = gql`
query getPostings {
    postings {
        _id
        postingText
        postingAuthor
        createdAt
    }
}
`;

export const QUERY_SINGLE_POSTING = gql`
query getSinglePosting ($postingId: ID!) {
    posting(postId: $postingId) {
        _id
        postingText
        postingAuthor
        createdAt
        comments {
            _id
            commentText
            createdAt
        }
    }
}
`