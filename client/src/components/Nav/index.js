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
  Text,
} from "@chakra-ui/react";
import { FaUser, FaEdit, FaSignOutAlt } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import IdeaForm from '../IdeaForm'
import Auth from "../../utils/auth";

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
        <DrawerContent pt="20px" bgGradient="linear(to-br, #FFFFFF, #F6F2E6)">
          <DrawerCloseButton />
          <DrawerBody>
            {Auth.loggedIn() ? (
              <Stack>
                <Text>Welcome {Auth.getProfile().data.firstName}!</Text>
                <Box>
                  <Button as="a" href="/" bg="#B5514D" color="white">
                    <AiTwotoneHome />
                    Home
                  </Button>
                </Box>
                <Box>
                  <Button as="a" href="/Postings" bg="#21467A" color="white">
                    All Posts
                  </Button>
                </Box>
                <Box>
                  <Button onClick={logout} bg="#21467A" color="white">
                    <FaSignOutAlt />
                    logout
                  </Button>
                </Box>
              </Stack>
            ) : (
              <Stack>
                <Box>
                  <Button as="a" href="/" bg="#B5514D" color="white">
                    <AiTwotoneHome />
                    Home
                  </Button>
                </Box>
                <Box>
                  <Button as="a" href="/Signup" bg="#21467A" color="white">
                    <FaEdit />
                    Signup
                  </Button>
                </Box>
                <Box>
                  <Button as="a" href="/Login" bg="#21467A" color="white">
                    <FaUser />
                    Login
                  </Button>
                </Box>
                <Box>
                  <Button onClick={logout} bg="#21467A" color="white">
                    <FaSignOutAlt />
                    Logout
                  </Button>
                </Box>
              </Stack>
            )}
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
