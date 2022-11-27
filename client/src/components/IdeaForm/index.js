import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

import {
    Button,
    FormControl,
    FormLabel,
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
    const navigate = useNavigate();

    // const [state, dispatch] = usePostingContext();
    const [formState, setFormState] = useState({
        title: '',
        description: ''
    })
    // const [newPostTitle, setNewPostTitle] = useState('');
    // const [newPostDescription, setNewPostDescription] = useState('');
    const [addPosting, ] = useMutation(ADD_POSTING)


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await addPosting({
                variables: { ...formState, ownersId: Auth.getProfile().data._id },
            });
            // return <Navigate to={`/posting/${data.addPosting._id}`} replace={true}/>
            if (data) {
                onClose();
                navigate(`/posting/${data.addPosting._id}`)
            }
            setFormState({
                title: '',
                description: ''
            })
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
                                placeholder='A wonderful idea must have a title!'
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
                        >Submit</Button>
                    </ModalFooter>

                </ModalContent>

            </Modal>
        </>
    )

};