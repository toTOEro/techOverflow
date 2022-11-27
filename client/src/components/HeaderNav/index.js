import React from "react";
import Nav from "../Nav";
import Donate from "../Donate";
import IdeaForm from "../IdeaForm";
import { Button, Stack, Flex, Text } from "@chakra-ui/react";
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
            <Text>Log in to submit ideas!</Text>
          </>
        )}
        <Donate />
      </Stack>
    </>
  );
}
