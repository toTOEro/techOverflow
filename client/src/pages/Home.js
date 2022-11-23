import React from 'react';
import { useQuery } from '@apollo/client';
import PostingsList from '../components/PostingsList/index';
import { Link } from 'react-router-dom';
import { Container, Center, Text } from '@chakra-ui/react'
import { QUERY_POSTINGS } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_POSTINGS);
    const postings = data?.postings || [];

    return (
        <main>
            <div >
                <div >
                    <Center h='100px'>
                        <Text fontSize='2xl'>Welcome to TechOverflow!</Text>
                    </Center>
                    <Container>
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <PostingsList
                                postings={postings}
                                title="Here's the current list of postings"
                            />
                        )}
                    </Container>
                </div>
            </div>
        </main>
    );
};
export default Home;