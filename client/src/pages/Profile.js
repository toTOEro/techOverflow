import React from 'react';

// Import the `useParams()` hook
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
  Avatar,
  Box,
  Center,
  Heading,
  HStack,
  Stack,
  Text
} from '@chakra-ui/react'

import Posting from '../components/Posting';

import { QUERY_ME, QUERY_SINGLE_USER } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { userId } = useParams() ;

  let test = userId ? QUERY_SINGLE_USER : QUERY_ME;
  
  const { loading, data, error } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME, {
    variables: { id: userId },
  });

  const user = data?.me || data?.user || {};
  let { email, firstName, lastName, postings, avatar } = user


  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <Navigate to='/error' />
  }
  return (
    <>
      <Center pt='5rem'>
        <Stack>
          <Box outline={'solid'} p={'2rem'} borderRadius='50' mb='2rem' maxW='85vw' minW='85vw'>
            <Center>
              <Avatar src={avatar} />
              <Heading px={'1.25rem'}>{`${firstName} ${lastName}`}</Heading>
            </Center>
          </Box>

          <Heading>Postings:</Heading>
          {postings.length > 0 ? postings.map(({ _id, title, description }) => (
            <Posting
              key={_id}
              _id={_id}
              title={title}
              description={description}
              email={email}
              owner={firstName}
              avatar={avatar}
            />
          )) : <Text>No postings yet.. make one?</Text>}
        </Stack>
      </Center>
    </>
  );
};

export default Profile;
