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

import Auth from "../utils/auth";

// Handles posting and comment rendering
const PostingDetail = () => {

    // Pulls posting ID from url params
    let { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);


    // Posting handling
    const { loading, error, data } = useQuery(
        QUERY_SINGLE_POSTING,
        {
            variables: { _id: id },
        }
    );


    const singlePost = data?.singlePost || [];
    let { title, description, owners_id } = singlePost;


    // Comment handling
    const { loading: comLoading, error: comError, data: comData, refetch } = useQuery(
        POSTINGCOMMENTS,
        {
            variables: { _id: id },
            notifyOnNetworkStatusChange: true
        }
    );

    const { comments } = comData?.postComments || [];

    const [newComment, setNewComment] = useState({
        content: ''
    });

    const [addComment] = useMutation(ADD_COMMENT)

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            const data = await addComment({
                variables: { ...newComment, creator: Auth.getProfile().data._id, postingId: id },
            });

            await refetch()

        } catch (err) {
            console.error(err)
        }
        setIsLoading(false);
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
                        <form onSubmit={handleCommentSubmit}>
                            <FormControl>
                                <Input
                                    name='content'
                                    placeholder="Your Comment Here"
                                    onChange={handleCommentChange}
                                    value={newComment.content}
                                />
                                <Button
                                    isLoading={isLoading}
                                    type='submit'
                                    mt='2'
                                    loadingText="Submitting Comment..."
                                >
                                    Submit Comment
                                </Button>
                            </FormControl>
                        </form>
                    </>
                )
                }
            </Container>
        </>
    )
}


export default PostingDetail
