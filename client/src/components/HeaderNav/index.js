import React from "react";
import Nav from "../Nav";
import Donate from "../Donate";
import IdeaForm from "../IdeaForm";
import { Stack, Text } from "@chakra-ui/react";
import Auth from "../../utils/auth";
export default function HeaderNav() {
  return (
    <>
      <Stack direction={["row"]} justify="space-between">
        <Nav />
        {Auth.loggedIn() ? (
          <>
            <IdeaForm />
          </>
        ) : (
          <>
            <Text
              bgGradient="linear(to-r, #FF3F00, #ECAA4D)"
              bgClip="text"
              fontSize="5xl"
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
