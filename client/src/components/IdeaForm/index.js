import React, { useState } from 'react';

import {
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
    useDisclosure
} from '@chakra-ui/react'
import Auth from '../../utils/auth';

import { useMutation } from '@apollo/client';

import { FcIdea } from 'react-icons/fc'

// import { usePostingContext } from "../../utils/GlobalState"
// import { ADD_POSTING } from '../../utils/actions';
import { ADD_POSTING } from '../../utils/mutations';



export default function IdeaForm() {
    const { isOpen, onOpen, onClose } = useDisclosure();


    // const [state, dispatch] = usePostingContext();
    const [formState, setFormState] = useState({
        title: '',
        description: ''
    })
    // const [newPostTitle, setNewPostTitle] = useState('');
    // const [newPostDescription, setNewPostDescription] = useState('');
    const [addPosting, { error }] = useMutation(ADD_POSTING)

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = addPosting({
                variables: { ...formState, ownersId: Auth.getProfile().data._id },
            });

            window.location.reload();
        } catch (err) {
            console.error(err)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        name === 'title' ? setFormState({ ...formState, [name]: value }) : setFormState({ ...formState, [name]: value });
    }



    return (
        <>
            <Button onClick={onOpen} colorScheme='whatsapp' rightIcon={<FcIdea />} leftIcon={<FcIdea />}>Submit an Idea!</Button>

            <Modal isOpen={isOpen} onClose={onClose} size='4xl' isCentered='true'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>A new project awaits...</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input

                                name='title'
                                type='text'
                                value={formState.title}
                                onChange={handleChange}
                            />
                            <FormLabel>Description</FormLabel>
                            <Textarea
                                name='description'
                                placeholder='Tell us about your idea!'
                                size='lg'
                                value={formState.description}
                                onChange={handleChange}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>

                        <Button
                            colorScheme='green'
                            type='submit'
                            onClick={handleFormSubmit}
                        // onClick={() => {
                        //     console.log(`Dispatched Title: ${newPostTitle} description: ${newPostDescription}`)
                        //     return dispatch({
                        //         type: ADD_POSTING,
                        //         posting: {
                        //             title: newPostTitle,
                        //             description: newPostDescription
                        //         }
                        //     })
                        // }}
                        >Submit</Button>
                    </ModalFooter>

                </ModalContent>

            </Modal>
        </>
    )

};