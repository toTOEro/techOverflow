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
import { useNavigate } from "react-router-dom"

import { DELETE_POSTING } from "../../utils/mutations";
import { QUERY_SINGLE_POSTING } from "../../utils/queries";
import { useMutation } from "@apollo/client";
import Auth from '../../utils/auth'



export default function  NukePosting(postId)  {
const { isOpen, onOpen, onClose } = useDisclosure();
const [isLoading, setIsLoading] = useState(false);
const navigate = useNavigate();
const cancelRef = React.useRef();


const { loading, error, data } = useQuery(
    QUERY_SINGLE_POSTING,
    {
        variables: { _id: postId },
    }
);
const singlePost = data?.singlePost || [];

    let { owners_id, _id } = singlePost;
    owners_id = Auth.getProfile().data._id;

const [deletePosting] = useMutation(DELETE_POSTING);

const handePostDelete = async (e) => {
    e.preventDefault();
    try{
        setIsLoading(true);
       await deletePosting({
            variables: {id: _id, owners_id},
        })
    } catch(err){
        console.error(err);
    }
    setIsLoading(false);
    navigate( `/`)

}

return (
    <>
        <Button onClick={onOpen}>Discard</Button>
        <AlertDialog
        motionPreset='slideInBottom'
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        >
            <AlertDialogOverlay/>

        <AlertDialogContent>
            <AlertDialogHeader>Delete post?</AlertDialogHeader>
            <AlertDialogCloseButton/>
            <AlertDialogBody>
            Are you sure you want to delete this post? This cannot be reversed.
            </AlertDialogBody>
            <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                    No
                </Button>
                <Button colorScheme='red' ml={3} onClick={handePostDelete}>
                    Yes
                </Button>
            </AlertDialogFooter>
        </AlertDialogContent>



        </AlertDialog>
    </>

)
}

