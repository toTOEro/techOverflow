import React, { useState } from 'react';

// Import the `useParams()` hook
import { Navigate, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import {
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Input,
  Link,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react'

import Posting from '../components/Posting';

import { QUERY_ME, QUERY_SINGLE_USER } from '../utils/queries';
import { UPDATE_AVATAR } from '../utils/mutations';

import Auth from '../utils/auth';

const Profile = () => {
  const { userId } = useParams();
  const { isOpen: avatarOpen, onOpen: avatarOnOpen, onClose: avatarOnClose } = useDisclosure();
  let isUser = false;

  const { loading, data, error } = useQuery(
    userId ? QUERY_SINGLE_USER : QUERY_ME, {
    variables: { id: userId },
  });

  const user = data?.me || data?.user || {};
  let { email, firstName, lastName, postings, avatar, _id } = user

  const [newAvatar, setNewAvatar] = useState({
    url: ''
  })

  const [updateAvatar, { error: avatarError }] = useMutation(UPDATE_AVATAR)

  const handleAvatarChange = (e) => {
    const { name, value } = e.target;

    setNewAvatar({ ...newAvatar, [name]: value });
  }

  const handleAvatarSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await updateAvatar({
        variables: { ...newAvatar }
      })

      console.log(data)
    } catch (err) {
      console.error(err)
    }
  }


  if (Auth.loggedIn() && Auth.getProfile().data._id === _id) {
    isUser = true;
  };

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
              <Stack>
                <Avatar src={avatar} />
                {isUser && <Link fontSize='0.5rem' fontWeight={"bold"} textAlign='center' onClick={avatarOnOpen}>Change</Link>}
              </Stack>
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


      {isUser && (
        <Modal isOpen={avatarOpen} onClose={avatarOnClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Change Avatar?</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleAvatarSubmit}>

              <ModalBody>
                <Input
                  name='url'
                  onChange={handleAvatarChange}
                  placeholder='Input URL here'
                />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={avatarOnClose}>
                  Close
                </Button>
                <Button colorScheme='green' variant='solid' type='submit'>Submit</Button>
              </ModalFooter>
            </form>

          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Profile;
