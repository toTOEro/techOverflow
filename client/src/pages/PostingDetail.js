import {
    Heading,
    Text,
    Box,
    Container,
    Divider
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client";
import { usePostingContext } from "../utils/GlobalState";
import { ADD_COMMENT } from "../utils/actions";

import Comment from "../components/Comment/index"
import CommentForm from "../components/CommentForm";
import { QUERY_SINGLE_POSTING } from "../utils/queries";



const PostingDetail = () => {



    let { id } = useParams();

    const { loading, error, data, refetch } = useQuery(QUERY_SINGLE_POSTING, { variables: { _id: id } });

    const singlePost = data?.singlePost || [];


    let { title, description, owners_id, comments } = singlePost;

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
                        <CommentForm postingId={id} refetch={refetch} />

                    </>
                )
                }

                {/* <Heading size='4xl' paddingBottom='10'> {title} </Heading>
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
                <CommentForm postingId={id} /> */}
            </Container>

        </>
    )
}


export default PostingDetail