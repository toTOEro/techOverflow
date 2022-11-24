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
    // const [state, dispatch] = usePostingContext();
    const { id } = useParams();
    // const [currentPosting, setCurrentPosting] = useState({});

    const { loading, error, data } = useQuery(QUERY_SINGLE_POSTING, { variables: { _id: id } });
    // const { posting, comments } = state;

    // let data = {
    //     _id: id,
    //     title: "The Magic Kekw",
    //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
    //     owner: "TestOwner",
    //     email: "testemail@test.com",
    //     comments: [
    //         {
    //             _id: 1,
    //             content: 'woohoo',
    //             date_created: 'November 16th, 2020'
    //         },

    //         {
    //             _id: 13,
    //             content: 'woohoo',
    //             date_created: 'November 16th, 2020'
    //         },

    //     ]
    // }

    const singlePost = data?.singlePost || [];


    let { title, description, owner, email, comments } = singlePost;

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
                        <CommentForm postingId={id} />

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
