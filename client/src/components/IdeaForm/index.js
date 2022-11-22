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

import { FcIdea } from 'react-icons/fc'

import { usePostingContext } from "../../utils/GlobalState"

import { ADD_POSTING } from '../../utils/actions';



export default function IdeaForm() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [state, dispatch] = usePostingContext();
    const [newPostTitle, setNewPostTitle] = useState('');
    const [newPostDescription, setNewPostDescription] = useState('');



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
                                type='text'
                                value={newPostTitle}
                                onChange={(e) => setNewPostTitle(e.target.value)}

                            />
                            <FormLabel>Description</FormLabel>
                            <Textarea
                                placeholder='Tell us about your idea!'
                                size='lg'
                                value={newPostDescription}
                                onChange={(e) => setNewPostDescription(e.target.value)}
                            />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='green' onClick={() => {
                            console.log(`Dispatched Title: ${newPostTitle} description: ${newPostDescription}`)
                          return dispatch({
                            type: ADD_POSTING,
                            posting: {
                                title: newPostTitle,
                                description: newPostDescription
                            }
                          })  
                        }
                            
                        }>Submit</Button>
                    </ModalFooter>

                </ModalContent>

            </Modal>
        </>
    )

};