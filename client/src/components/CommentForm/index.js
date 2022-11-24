import React, { useReducer, useState } from 'react'
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Button, Container, Input } from "@chakra-ui/react"
import { ADD_COMMENT } from '../../utils/mutations';
import { useMutation } from '@apollo/client';




export default function CommentForm(Posting) {



    const [newComment, setNewComment] = useState({
        content: ''
    });

    const [addComment, { error }] = useMutation(ADD_COMMENT)

    const { postingId } = Posting

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = addComment({
                variables: { ...newComment, creator: '637d9fb14f58788dae6b8638' },
            });

            window.location.reload();
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