import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
  Avatar,
  Box,
  Center,
  Heading,
  HStack,
  Stack
} from '@chakra-ui/react'

import Posting from '../components/Posting';

import { QUERY_SINGLE_USER } from '../utils/queries';

const User = () => {
  const { userId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { id: userId },
  });

  const user = data?.user || {};
  let { email, firstName, lastName, postings, avatar } = user

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Center pt='5rem'>
        <Stack>
          <Box outline={'solid'} p={'2rem'} borderRadius='50' mb='2rem'>
            <Center>
              <Avatar src={avatar} />
              <Heading px={'1.25rem'}>{`${firstName} ${lastName}`}</Heading>
            </Center>
          </Box>

          <Heading>Postings:</Heading>
          {postings.length > 0 && postings.map(({ _id, title, description, owners_id }) => (
            <Posting
              key={_id}
              _id={_id}
              title={title}
              description={description}
              email={email}
              owner={firstName}
              avatar={avatar}
            />
          ))}
        </Stack>
      </Center>
    </>
  );
};

export default User;
