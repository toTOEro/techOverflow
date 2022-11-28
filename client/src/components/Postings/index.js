// import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Divider, Stack, Avatar, HStack, Flex, ButtonGroup, Button } from '@chakra-ui/react'
import MailTo from '../MailTo';
import { useQuery } from '@apollo/client';
import { QUERY_POSTINGS } from '../../utils/queries.js';
import Register from '../RegisterButton';
import Auth from '../../utils/auth';


// Presents all software development idea postings for users to browse through.
export default function Postings() {
    const { loading, data } = useQuery(QUERY_POSTINGS);
    const postings = data?.postings || [];

    return (
        <div>
            <Stack spacing="4" alignItems="center">
                <Heading size='3xl' py='15'>Recent postings:</Heading>

                {
                    loading ? (
                        <div> Loading... </div>
                    ) : (
                        postings.slice(0, 5).map(({ _id, title, description, email, owners_id }) => (
                            <Card key={_id} maxW='85vw' minW='85vw' size='lg' border='thick' borderColor='black' borderStyle='solid' >
                                <Link
                                    to={`/posting/${_id}`}
                                >
                                    <CardHeader>
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
                                            {Auth.loggedIn() && Auth.getProfile().data._id === owners_id._id ? (
                                                <>
                                                <Link
                                                to={`/PostEditor/${_id}`}
                                                >
                                               <Button label="edit"> Edit</Button>
                                                </Link>

                                            <ButtonGroup>
                                                <Register postId={_id} />
                                            </ButtonGroup>
                                                {/* Show the user avatars that signed up for this project */}


                                                <MailTo email={owners_id.email} label={`${owners_id.firstName}`} />
                                                <Avatar name='test' src={'./icons8-user-32.png'} />
                                                </>
                                            ) : (
                                                <>
                                            <ButtonGroup>
                                                <Register postId={_id} />
                                            </ButtonGroup>
                                                {/* Show the user avatars that signed up for this project */}


                                                <MailTo email={owners_id.email} label={`${owners_id.firstName}`} />
                                                <Avatar name='test' src={'./icons8-user-32.png'} />
                                                </>
                                            )}

                                        </HStack>
                                    </Flex>

                                </CardFooter>
                            </Card>
                        ))
                    )
                }
            </Stack>

        </div>
    )
}