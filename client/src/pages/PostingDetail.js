import {
    Heading,
    Text,
    Box,
    Container,
    Divider,
    FormControl,
    Input,
    Button
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client";
// import { usePostingContext } from "../utils/GlobalState";
import { ADD_COMMENT } from "../utils/mutations";

import Comment from "../components/Comment/index";

// Temporary disabled commentform
// import CommentForm from "../components/CommentForm";

import { QUERY_SINGLE_POSTING, POSTINGCOMMENTS } from "../utils/queries";
import { useMutation } from "@apollo/client";



//Current status of this code is that it works, but the comments don't properly refresh with page.
// NEed to refactor the code to separate the posting and comments queries
// 1. Develop query only comments, 2. Implement refetch for just those comments

const PostingDetail = () => {


    let { id } = useParams();
    const { loading, error, data } = useQuery(
        QUERY_SINGLE_POSTING,
        {
            variables: { _id: id },
        }
    );
    const singlePost = data?.singlePost || [];
    let { title, description, owners_id, comments } = singlePost;


    const { loading: comLoading, error: comError, data: comData, refetch } = useQuery(
        POSTINGCOMMENTS,
        {
            variables: { _id: id },
            notifyOnNetworkStatusChange: true
        }
    );

    const postComments = comData?.postComments || [];
    

    const [newComment, setNewComment] = useState({
        content: ''
    });

    const [addComment] = useMutation(ADD_COMMENT)


    // Need to refactor this code
    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = addComment({
                variables: { ...newComment, creator: '637d9fb14f58788dae6b8638', postingId: id },
            });
            await refetch();

            // window.location.reload();
        } catch (err) {
            console.error(err)
        }
        setNewComment({ content: '' });
    }

    const handleCommentChange = (e) => {
        const { name, value } = e.target;

        setNewComment({ ...newComment, [name]: value });
    }

    return (
        <>

            <Container paddingTop='20' paddingX='5' minWidth={['25vw', '50vw', '80vw']}>
                {loading ? (
                    <div> Loading... </div>
                ) : (
                    <>
                        <Heading size='4xl' paddingBottom='10'> {title} </Heading>
                        <Box>
                            <Text>{description}</Text>
                        </Box>
                        <Heading size='md' mt='10'>Comments</Heading>
                        {comments ? (comments.map(({ _id, content, date_created }) => (
                            <Comment
                                key={_id}
                                content={content}
                                date_created={date_created}
                            />
                        ))) : ''
                        }
                        <Divider my='3' />
                        <FormControl >
                            <Input
                                name='content'
                                placeholder="Your Comment Here"
                                onChange={handleCommentChange}
                                value={newComment.content}
                            />
                            <Button type='submit' onClick={handleCommentSubmit} mt='2'>Submit Comment</Button>
                        </FormControl>
                    </>
                )
                }
            </Container>
        </>
    )
}


export default PostingDetail