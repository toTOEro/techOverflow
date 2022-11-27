import React from "react";
// import { Link } from "react-router-dom";
import {
  Box,
  Button,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
  Flex,
} from "@chakra-ui/react";
import { FaUser, FaEdit } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Donate from "../Donate";
import Auth from "../../utils/auth";

import IdeaForm from "../IdeaForm";

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <>
      <IconButton
        aria-label="nav"
        onClick={onOpen}
        icon={<GiHamburgerMenu />}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent pt="20px" bgGradient="linear(to-b, #FFFFFF, #E5DED4)">
          <DrawerCloseButton />
          <DrawerBody>
            <Stack>
              <Box>
                <Button as="a" href="/" bg="#B5514D" color="white">
                  <AiTwotoneHome />
                  Home
                </Button>
              </Box>
              <Box>
                <IdeaForm />
              </Box>
              <Box>
                <Button as="a" href="/Signup" bg="#21467A" color="white">
                  <FaEdit />
                  Signup
                </Button>
              </Box>
              <Box>
                <Button as="a" href="/Login" bg="#025880" color="white">
                  <FaUser />
                  Login
                </Button>
              </Box>
              <Box>
                <Button onClick={logout}>Logout</Button>
              </Box>
              <Box>
                <Button
                as="a" href="/Postings"
                bg="#21467A" color="white"
                >
                  All Posts
                </Button>
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Donate />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
