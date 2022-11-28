import React from 'react';
import { useQuery } from '@apollo/client';
import Posting from '../components/Posting/index';
import { Stack, Container, Center, Text, Heading } from '@chakra-ui/react'
import { QUERY_POSTINGS } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_POSTINGS);
    const postings = data?.postings || [];

    return (
        <main>
            <div >
                <div >
                    <Center h='100px'>
                        <Stack>
                            <Text fontSize='2xl'>Welcome to TechOverflow!</Text>
                            <Text fontSize='1x1'>All positions should be considered remote unless otherwise stated.</Text>
                        </Stack>
                    </Center>
                    <Container>
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <Stack spacing="4" alignItems="center">
                                <Heading size='3xl' py='15'>Recent postings:</Heading>

                                {
                                    loading ? (
                                        <div> Loading... </div>
                                    ) : (
                                        postings.slice(0, 5).map(({ _id, title, description, email, owners_id, registered }) => (
                                            <Posting
                                                key={_id}
                                                _id={_id}
                                                title={title}
                                                description={description}
                                                email={owners_id.email}
                                                owner={owners_id.firstName}
                                                avatar={owners_id.avatar}
                                                creator={owners_id._id.toString()}
                                                registered={registered}

                                            />
                                        ))
                                    )
                                }
                            </Stack>
                        )}
                    </Container>
                </div>
            </div>
        </main>
    );
};
export default Home;