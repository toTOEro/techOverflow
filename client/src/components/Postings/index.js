// import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Divider, Stack, Avatar, HStack, Flex, ButtonGroup } from '@chakra-ui/react'
import MailTo from '../MailTo';
import { useQuery } from '@apollo/client';
import { QUERY_POSTINGS } from '../../utils/queries.js';
import Register from '../RegisterButton';



// Presents all software development idea postings for users to browse through.
export default function Postings() {
    // const { data } = useQuery(QUERY_POSTINGS);
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
                                            <ButtonGroup>
                                                <Register postId={_id} />
                                            </ButtonGroup>
                                            <HStack>
                                                {/* Show the user avatars that signed up for this project */}


                                                <MailTo email={owners_id.email} label={`${owners_id.firstName}`} />
                                                <Avatar name='test' src={'./icons8-user-32.png'} />
                                            </HStack>
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