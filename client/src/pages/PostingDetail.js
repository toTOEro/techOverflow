import { Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom"

const PostingDetail = () => {
    const { id } = useParams();


    // Need function to query DB
    // const [state, dispatch] = useBoardContext();
    // const { loading, data } = useQuery(QUERY_POSTING);

    useEffect(() => {

    })



    return (
        <>
            <Heading> </Heading>
            This is details about the posting with ID {id}!
        </>
    )
}


export default PostingDetail