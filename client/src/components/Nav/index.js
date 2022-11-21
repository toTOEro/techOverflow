import React from 'react';
import {
    Box,
    HStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Icon
} from '@chakra-ui/react'
import {FaDonate} from 'react-icons/fa'
import {FcIdea} from 'react-icons/fc'

import IdeaForm from '../IdeaForm';

export default function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box width='100%' bg='black' py='4' marginBottom='20px' px='10px'>
                <HStack justifyContent='space-between'>
                    <Button as='a' href='/'><Icon src='./icons8-engineering-64.png'></Icon>LOGO HERE </Button>


                    <Button onClick={onOpen} colorScheme='whatsapp' rightIcon={<FcIdea />} leftIcon={<FcIdea />}>Submit an Idea!</Button>
                    <Button colorScheme='green' rightIcon={<FaDonate />}>Buy us a meal</Button>

                </HStack>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} size='4xl' isCentered='true'>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>A new project awaits...</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <IdeaForm />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button colorScheme='green'>Submit</Button>
                    </ModalFooter>

                </ModalContent>

            </Modal>
        </>

    )

}