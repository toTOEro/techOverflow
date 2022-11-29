import React from "react";
import Nav from "../Nav";
import Donate from "../Donate";
import IdeaForm from "../IdeaForm";
import { Stack, Text } from "@chakra-ui/react";
import Auth from "../../utils/auth";
export default function HeaderNav() {
  return (
    <>
      <Stack direction={["row"]} justify="space-between" padding={'0.5rem'} background='#132C33'>
        <Nav />
        {Auth.loggedIn() ? (
          <>
            <IdeaForm />
          </>
        ) : (
          <>
            <Text
              bgGradient="linear(to-r, #CE1226, #D21D26)"
              bgClip="text"
              fontSize="3xl"
              fontWeight="extrabold"
            >
              Log in to submit ideas!
            </Text>
          </>
        )}
        <Donate />
      </Stack>
    </>
  );
}
