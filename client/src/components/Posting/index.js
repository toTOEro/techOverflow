import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import MailTo from '../MailTo';
import {
    Box,
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
    Button,
    AvatarGroup
} from '@chakra-ui/react'
import Register from '../RegisterButton';
import Auth from '../../utils/auth';
import PostDeleteConfirmation from '../PostDeletionConfirmation/index'
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
                <Link to={`/profile/${creator}`}><Avatar src={avatar} size={'xl'}/></Link>

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
            <CardFooter py='1' justifyContent='end' >
                <Flex>
                    <HStack >
                        {Auth.loggedIn() && Auth.getProfile().data._id === creator ? (
                            <>
                                <Link
                                    to={`/PostEditor/${_id}`}
                                >
                                    <Button label="edit">Edit Post</Button>
                                </Link>
                                <PostDeleteConfirmation
                                    id={_id}
                                />
                            </>
                        ) : ('')}
                        {registered.map(({ _id, avatar }) => (
                            <Avatar key={_id} src={avatar} size={'sm'} />
                        ))}
                        <ButtonGroup>
                            <Register postId={_id} />
                        </ButtonGroup>
                        <HStack>

                            <MailTo email={email} label={owner} />
                            
                        </HStack>
                    </HStack>
                </Flex>
            </CardFooter>
        </Card>
    )
}