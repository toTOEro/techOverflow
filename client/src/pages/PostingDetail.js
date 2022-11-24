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
import { usePostingContext } from "../utils/GlobalState";
import { ADD_COMMENT } from "../utils/mutations";

import Comment from "../components/Comment/index"
import CommentForm from "../components/CommentForm";
import { QUERY_SINGLE_POSTING } from "../utils/queries";
import { useMutation } from "@apollo/client";


const PostingDetail = () => {



    let { id } = useParams();

    const { loading, error, data, refetch } = useQuery(
        QUERY_SINGLE_POSTING,
        {
            variables: { _id: id },
            notifyOnNetworkStatusChange: true,
        }

    );
    const singlePost = data?.singlePost || [];


    let { title, description, owners_id, comments } = singlePost;

    const [newComment, setNewComment] = useState({
        content: ''
    });

    const [addComment, { error: comError }] = useMutation(ADD_COMMENT)

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = addComment({
                variables: { ...newComment, creator: '637d9fb14f58788dae6b8638', postingId: id },
            });
            // window.location.reload();
        } catch (err) {
            console.error(err)
        }
        refetch()

        setNewComment({ content: '' })

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
                            <Button onClick={handleCommentSubmit} mt='2'>Submit Comment</Button>
                        </FormControl>


                        {/* <CommentForm postingId={id} refetch={refetch} /> */}

                    </>
                )
                }
            </Container>

        </>
    )
}


export default PostingDetail