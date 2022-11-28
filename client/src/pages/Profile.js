import React, { useState } from 'react';

// Import the `useParams()` hook
import { Navigate, useParams, Link as ReactLink } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import {
  Avatar,
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
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
  useDisclosure,
  List
} from '@chakra-ui/react'


import { QUERY_ME, QUERY_SINGLE_USER, REGISTERED } from '../utils/queries';
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

  let regiId = userId || (Auth.loggedIn() && Auth.getProfile().data._id) || [];
  const {  data: regiData } = useQuery(
    REGISTERED,
    { variables: { _id: regiId } }
  )

  const registered = regiData?.registered || [];



  const user = data?.me || data?.user || {};
  let { firstName, lastName, postings, avatar, _id } = user

  const [newAvatar, setNewAvatar] = useState({
    url: ''
  })

  const [updateAvatar] = useMutation(UPDATE_AVATAR)

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

      if (data) {
        window.location.reload()
      }
      
    } catch (err) {
      console.error(err)
    }
  }


  if (Auth.loggedIn() && Auth.getProfile().data._id === _id) {
    isUser = true;
  };

  if (!Auth.loggedIn()) {
    return <Heading>You must be logged in!</Heading>
  }

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
          <Grid templateColumns={"repeat(2, 1fr)"}>
            <GridItem>
              <Heading>Registered:</Heading>
              <List>
                {registered.length > 0 ? registered.map(({ _id, title }) => (
                  <ul key={_id} ><ReactLink to={`../posting/${_id}`} target={'_blank'}>{title}</ReactLink></ul>
                )) :
                  <Text>Not Registered Yet</Text>
                }
              </List>
            </GridItem>
            <GridItem>
              <Heading>Postings:</Heading>
              {postings.length > 0 ? postings.map(({ _id, title, description }) => (
                <ul key={_id}><ReactLink to={`../posting/${_id}`} target={'_blank'}>{title}</ReactLink></ul>
              )) : <Text>No postings yet.. make one?</Text>}
            </GridItem>
          </Grid>
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
