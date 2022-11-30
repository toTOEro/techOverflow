import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import MailTo from '../MailTo';
import {
    Box,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Container,
    Heading,
    Divider,
    Text,
    Avatar,
    HStack,
    Flex,
    ButtonGroup,
    Button,
    AvatarGroup
} from '@chakra-ui/react'
import Register from '../RegisterButton';
import Auth from '../../utils/auth';
import PostDeleteConfirmation from '../PostDeletionConfirmation/index'
import { FiEdit } from 'react-icons/fi'

export default function Posting(details) {
    const {
        _id,
        title,
        description,
        email,
        owner,
        avatar,
        registered,
        creator
    } = details
    return (
        <Card key={_id} maxW='85vw' minW='85vw' minH='15vh' size='lg' border='thick' borderColor='black' borderStyle='solid' >
            <HStack>
                <Link to={`/profile/${creator}`} ><Avatar src={avatar} size={'xl'} paddingLeft='10px' /></Link>

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
            </HStack>
            <Divider />
            <CardFooter py='1' justifyContent={{ base: 'center', lg: 'end' }} >
                <Flex>
                    <HStack >
                        {Auth.loggedIn() && Auth.getProfile().data._id === creator ? (
                            <>
                                <Link
                                    to={`/PostEditor/${_id}`}
                                >
                                    <Button label="edit" px='0'>
                                        <Container><FiEdit /></Container>
                                        <Container display={{ base: 'none', md: 'block' }} px='0'>Edit Post</Container>
                                    </Button>
                                </Link>
                                <PostDeleteConfirmation
                                    id={_id}
                                />
                                <AvatarGroup display={{ base: 'none', md: 'flex' }} marginRight={'5px'} id='avatargroup'>
                                    {registered.map(({ _id, avatar }) => (
                                        <Avatar key={_id} src={avatar} size={'sm'} />
                                    ))}
                                </AvatarGroup>
                                <ButtonGroup>
                                    <Register postId={_id} />
                                </ButtonGroup>

                            </>
                        ) : ('')}
                        <AvatarGroup display={{ base: 'none', md: 'flex' }} marginRight={'5px'} id='avatargroup'>
                            {registered.map(({ _id, avatar }) => (
                                <Avatar key={_id} src={avatar} size={'sm'} />
                            ))}
                        </AvatarGroup>

                       
                        <ButtonGroup>

                            <MailTo email={email} label={owner} />

                        </ButtonGroup>
                    </HStack>
                </Flex>
            </CardFooter>
        </Card >
    )
}