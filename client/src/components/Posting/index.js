import React from 'react';
import { Link } from 'react-router-dom';
import MailTo from '../MailTo';
import { IoIosAddCircle } from 'react-icons/io'


import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Divider,
    Text,
    Avatar,
    HStack,
    Flex,
    ButtonGroup,
} from '@chakra-ui/react'
import Register from '../RegisterButton';

export default function Posting(details) {
    const {
        _id,
        title,
        description,
        email,
        owner
    } = details

    return (
        <Card key={_id} maxW='85vw' minW='85vw' size='lg' border='thick' borderColor='black' borderStyle='solid' >
            <Link
                to={`/posting/${_id}`}
            >
                <CardHeader as='button'>
                    <Heading size='lg'>{title}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{description}</Text>
                </CardBody>
            </Link>
            <Divider />
            <CardFooter py='1' justifyContent='end' >
                <Flex>
                    <HStack >
                        <ButtonGroup>
                            <Register postId={_id} />
                        </ButtonGroup>
                        <HStack>
                            {/* Show the user avatars that signed up for this project */}


                            <MailTo email={email} label={`${owner}`} />
                            <Avatar name='test' src={'./icons8-user-32.png'} />
                        </HStack>
                    </HStack>
                </Flex>
            </CardFooter>
        </Card>
    )
}