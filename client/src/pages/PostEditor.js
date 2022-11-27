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
import { useParams, Navigate } from "react-router-dom"
import { useQuery } from "@apollo/client";
import { UPDATE_POSTING } from "../utils/mutations";
import { QUERY_SINGLE_POSTING } from "../utils/queries";
import { useMutation } from "@apollo/client";
import Auth from '../utils/auth'




// Handles posting and comment rendering
const PostingEditor = () => {

    // Pulls posting ID from url params
    let { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);


    // Loads post
    const { loading, error, data } = useQuery(
        QUERY_SINGLE_POSTING,
        {
            variables: { _id: id},
        }
    );


    const singlePost = data?.singlePost || [];
    let { title, description, owners_id, _id } = singlePost;
    owners_id = Auth.getProfile().data._id;

    const [updatePosting] = useMutation(UPDATE_POSTING)

    const [postEdits, setPostEdits] = useState({
        title: "",
        description: ""
    })
    const handlePostEdit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            await updatePosting({
                variables: { ...postEdits, id: _id, owners_id},
            });
        } catch (err) {
            console.error(err)
        }
        console.log(`Author ID with the Auth function in console.log: ${Auth.getProfile().data._id}`)
        console.log(`postId: ${id} and owners_id: ${owners_id}`)
        console.log(postEdits)
        setIsLoading(false);
        if (test){ <Navigate to={`/posting/${_id}`}/> };

    }

    const handlePostChange = (e) => {
        const { name, value } = e.target;

        setPostEdits({ ...postEdits, [name]: value });
    }

    return (
        <>

            <Container paddingTop='20' paddingX='5' minWidth={['25vw', '50vw', '80vw']}>
                {loading ? (
                    <div> Loading... </div>
                ) : (
                    <>
                        <Heading size='4xl' paddingBottom='10'> Edit below  </Heading>
                        <Divider my='3' />
                        <form onSubmit={handlePostEdit} >
                            <FormControl>
                            <Input
                                    name='title'
                                    placeholder={title}
                                    onChange={handlePostChange}
                                    value={postEdits.title}
                                />
                                <Input
                                    name='description'
                                    placeholder={description}
                                    onChange={handlePostChange}
                                    value={postEdits.description}
                                />
                                <Button
                                    isLoading={isLoading}
                                    type='submit'
                                    mt='2'
                                    loadingText="Submitting Edits..."
                                >
                                    Submit Edit
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


export default PostingEditor
