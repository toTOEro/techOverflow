import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogCloseButton,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure,
    Card
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Navigate } from 'react-router-dom';

import { DELETE_POSTING } from "../../utils/mutations";
import { QUERY_SINGLE_POSTING } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import Auth from '../../utils/auth'



export default function PostDeleteConfirmation(postId) {

    const { id } = postId
  


    const { loading, error, data } = useQuery(
        QUERY_SINGLE_POSTING,
        {
            variables: { _id: id },
        }
    );
    const singlePost = data?.singlePost || [];
    
    let { title, description, owners_id, _id } = singlePost;
    owners_id = Auth.getProfile().data._id;

    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = React.useRef();

    const [deletePosting] = useMutation(DELETE_POSTING);

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await deletePosting({
                variables: { id: _id, owners_id },
            })
        } catch (err) {
            console.error(err);
        }
        window.location.reload();
    }


    return (
        <>
            <Button onClick={onOpen}>Delete</Button>
            <AlertDialog
                motionPreset='slideInBottom'
                // leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Delete post?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Are you sure you want to delete this post? This cannot be reversed.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            No
                        </Button>
                        <Button colorScheme='red' ml={3} onClick={handleDelete}>
                            Yes
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>



            </AlertDialog>
        </>

    )
}

