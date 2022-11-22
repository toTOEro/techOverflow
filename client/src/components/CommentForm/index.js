import React, { useReducer, useState } from 'react'
import { FormControl, FormLabel, FormHelperText, FormErrorMessage, Button, Container, Input } from "@chakra-ui/react"
import { usePostingContext } from "../../utils/GlobalState"
import { reducer, usePostingReducer } from "../../utils/reducers";
import { ADD_COMMENT } from '../../utils/actions';




export default function CommentForm(Posting) {
    const initialState = usePostingContext();
    const [state, dispatch] = usePostingReducer(reducer, initialState);
    const [newComment, setNewComment] = useState('');
    const { postingId } = Posting


    const { posting } = state

    const addComment = () => {

        console.log(postingId)

        return dispatch({
            type: ADD_COMMENT,
            payload: { content: newComment }
        })

    }

    return (



        <FormControl >
            <Input
                placeholder="Your Comment Here"
                onChange={(e) => setNewComment(e.target.value)}
                value={newComment}
            />
            <Button onClick={addComment} mt='2'>Submit Comment</Button>
        </FormControl>
    )
}