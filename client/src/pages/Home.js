import React from 'react';
import { useQuery } from '@apollo/client';
import PostingsList from '../components/Postings/index';
import { Link } from 'react-router-dom';
import { Container, Center, Text } from '@chakra-ui/react'
import { QUERY_USERS } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(QUERY_USERS);
    console.log(data);
    const postings = data?.users.postings || [];
    console.log(`Postings on Home.js is ${postings.length} long and is of type ${typeof(postings)}`)

    return (
        <main>
            <div >
                <div >
                    <Center h='100px'>
                        <Text fontSize='2xl'>Welcome to TechOverflow!</Text>
                    </Center>
                    <Container>
                        {/* {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <PostingsList
                                postings={postings}
                                title="Here's the current list of postings"
                            />
                        )} */}
                    </Container>
                </div>
            </div>
        </main>
    );
};
export default Home;