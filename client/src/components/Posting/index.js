import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import MailTo from '../MailTo';
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
    Button
} from '@chakra-ui/react'
import Register from '../RegisterButton';
import Auth from '../../utils/auth';
import { DELETE_POSTING } from '../../utils/mutations';
import { useMutation } from "@apollo/client";

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
    const [deletePosting] = useMutation(DELETE_POSTING);
    const handleDelete = async (e) => {
        e.preventDefault();
        const owners_id = Auth.getProfile().data._id;
        try {
            await deletePosting({
                variables: {id: _id, owners_id},
            })
        }catch(err){
            console.error(err);
        }
        Navigate('/');
    }


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
                    {Auth.loggedIn() && Auth.getProfile().data._id === creator ? (
                                <>
                                <Link 
                                to={`/PostEditor/${_id}`} 
                                >
                                    <Button label="edit">Edit Post</Button>
                                </Link>
                                <Button type="delete" onClick={ handleDelete }>Delete Post</Button>
                                </>
                            ): ('')}
                        {registered.map(({ _id, avatar }) => (
                            <Avatar key={_id} src={avatar} size={'sm'}/>
                        ))}
                        <ButtonGroup>
                            <Register postId={_id} />
                        </ButtonGroup>
                        <HStack>

                            <MailTo email={email} label={owner} />
                            <Avatar src={avatar} />
                        </HStack>
                    </HStack>
                </Flex>
            </CardFooter>
        </Card>
    )
}