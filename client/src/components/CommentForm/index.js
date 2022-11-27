import React, { useReducer, useState } from 'react'
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Button, Container, Input } from "@chakra-ui/react"
import { ADD_COMMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';



import Auth from '../../utils/auth';

export default function CommentForm(Posting) {



    const [newComment, setNewComment] = useState({
        content: ''
    });

    const [addComment, { error }] = useMutation(ADD_COMMENT)

    const { postingId, refetch } = Posting
    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = addComment({
                variables: { ...newComment, creator: Auth.getProfile().data._id, postingId: postingId },
            });
            refetch()
            // window.location.reload();
        } catch (err) {
            console.error(err)
        }
        
    }

    const handleCommentChange = (e) => {
        const { name, value } = e.target;

        setNewComment({ ...newComment, [name]: value });
    }


    return (


        <FormControl >

            <Input
                name='content'
                placeholder="Your Comment Here"
                onChange={handleCommentChange}
                value={newComment.content}
            />
            <Button onClick={handleCommentSubmit} mt='2'>Submit Comment</Button>
        </FormControl>
    )
}