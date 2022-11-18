import {
    Heading,
    Text,
    Box,
    Container
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom"

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
        email: "testemail@test.com"
    }

    let { _id, title, description, owner, email } = data

    return (
        <>
            <Container paddingTop='20'>
                <Heading size='4xl'  paddingBottom='10'> {title} </Heading>
                <Box>
                    <Text>{description}</Text>
                </Box>
            </Container>
        </>
    )
}


export default PostingDetail