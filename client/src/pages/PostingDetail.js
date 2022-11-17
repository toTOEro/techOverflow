import React from "react";
import { useParams } from "react-router-dom"

const PostingDetail = () => {

    const { id } = useParams();

    return (
        <>
            This is details about the posting with ID {id}!
        </>
    )
}


export default PostingDetail