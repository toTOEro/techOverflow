import React from "react";
// import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { FaUser, FaEdit } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import { HamburgerIcon } from "@chakra-ui/icons";

import Donate from "../Donate";

import IdeaForm from "../IdeaForm";

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {/* <IconButton onClick={onOpen} icon={<HamburgerIcon />} /> */}
      <Button onClick={onOpen}>
        <HamburgerIcon />
        Navigation
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <Box>
              <Button as="a" href="/">
                <AiTwotoneHome />
                Home
              </Button>
            </Box>
            <Box>
              <IdeaForm />
            </Box>
            <Box>
              <Button as="a" href="/Signup" colorScheme="blue">
                <FaEdit />
                Signup
              </Button>
            </Box>
            <Box>
              <Button as="a" href="/Login" colorScheme="blue">
                <FaUser />
                Login
              </Button>
            </Box>
          </DrawerBody>
          <DrawerFooter>
            <Donate />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
