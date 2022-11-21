import {
    Heading,
    Text,
    Box,
    Container,
    Divider
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import Comment from "../components/Comment/index"
import CommentForm from "../components/CommentForm";

const PostingDetail = () => {
    const { id } = useParams();


    // Need function to query DB
    // const [state, dispatch] = useBoardContext();
    // const { loading, data } = useQuery(QUERY_POSTING);

    let data = {
        _id: id,
        title: "The Magic Kekw",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
        owner: "TestOwner",
        email: "testemail@test.com",
        comments: [
            {
                _id: 1,
                content: 'woohoo',
                date_created: 'November 16th, 2020'
            },

            {
                _id: 13,
                content: 'woohoo',
                date_created: 'November 16th, 2020'
            },

        ]
    }

    let { _id, title, description, owner, email, comments } = data

    return (
        <>
            <Container paddingTop='20' paddingX='5' minWidth={['25vw', '50vw', '80vw']}>
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
                <CommentForm />
            </Container>

        </>
    )
}


export default PostingDetail