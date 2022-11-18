import {
    Heading,
    Text,
    Box,
    Container,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom"
import Comment from "../components/Comment/index"

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
                content: 'woohoo'
            },

            {
                _id: 13,
                content: 'woohoo'
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
            </Container>
            
            <Container mt='10'>
                {comments.map(({ _id, content }) => (
                    <Comment key={_id} content={content} />
                ))}
            </Container>
        </>
    )
}


export default PostingDetail