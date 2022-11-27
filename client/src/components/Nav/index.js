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
} from "@chakra-ui/react";
import { FaUser, FaEdit } from "react-icons/fa";
import { AiTwotoneHome } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Donate from "../Donate";

import IdeaForm from "../IdeaForm";

export default function Nav() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label="nav"
        onClick={onOpen}
        icon={<GiHamburgerMenu />}
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody alignItems="center" justifyContent="space-between">
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
