import React from 'react';
import { Link } from 'react-router-dom'
import {
    Box,
    HStack,

    Button,
    Icon,
   
} from '@chakra-ui/react'

import Donate from '../Donate'

import IdeaForm from '../IdeaForm';

export default function Nav() {

    return (
        <>
            <Box width='100%' bg='black' py='4' marginBottom='20px' px='10px'>
                <HStack justifyContent='space-between'>
                    <Button as='a' href='/'><Icon src='./icons8-engineering-64.png'></Icon>LOGO HERE </Button>

                    <IdeaForm />

                    <Button
                        as="a"
                        href="/Signup"
                        target="_blank"
                        colorScheme='blue'>Signup</Button>
                    <Button
                        as="a"
                        href="/Login"
                        target="_blank"
                        colorScheme='blue'>Login</Button>
                    <Donate />

                </HStack>
            </Box>


        </>

    )

}




