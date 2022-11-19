import React from 'react';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea
} from '@chakra-ui/react'


export default function IdeaForm() {


    return (
        <FormControl>
            <FormLabel>Title</FormLabel>
            <Input type='text'></Input>
            <FormLabel>Description</FormLabel>
            <Textarea 
                placeholder='Tell us about your idea!'
                size='lg'
            />

        </FormControl>
    )

};