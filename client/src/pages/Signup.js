import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Stack,
  FormHelperText,
  ButtonGroup,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";
const Signup = () => {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const signUpHandler = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="outerContainer">
      {data ? (
        <p>
          {" "}
          Success! Sending you back now! <Link to="/"></Link>{" "}
        </p>
      ) : (
        <Flex
          flexDirection="column"
          width="100wh"
          height="100vh"
          backgroundColor="gray.200"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            borderWidth="2px"
            borderRadius="lg"
            minW={{ base: "90%", md: "468px" }}
          >
            <form onSubmit={signUpHandler}>
              <Stack
                spacing={5}
                p="1rem"
                backgroundColor="whiteAlpha.900"
                boxShadow="xl"
              >
                <FormControl isRequired>
                  <FormHelperText textAlign="center" pb="2vh">
                    New user? Signup today!
                  </FormHelperText>
                  <FormLabel>First Name:</FormLabel>
                  <Input
                    name="firstName"
                    type="firstName"
                    value={formState.firstName}
                    onChange={changeHandler}
                  />
                  <FormLabel>Last Name:</FormLabel>
                  <Input
                    name="lastName"
                    value={formState.lastName}
                    onChange={changeHandler}
                    type="lastName"
                  />
                  <FormLabel>Email:</FormLabel>
                  <Input
                    name="email"
                    value={formState.email}
                    onChange={changeHandler}
                    type="email"
                  />
                  <FormLabel>Password:</FormLabel>
                  <Input
                    name="password"
                    value={formState.password}
                    onChange={changeHandler}
                    type="password"
                    placeholder="Must be 8-24 characters long"
                    size="lg"
                  />
                </FormControl>
                <Flex justify="center">
                  <ButtonGroup>
                    <Button
                      as="a"
                      href="/"
                      color="white"
                      bg="red"
                      type="submit"
                      size="lg"
                    >
                      Back to Home!
                    </Button>
                    <Button
                      onClick={signUpHandler}
                      bg="green"
                      color="white"
                      type="submit"
                      size="lg"
                    >
                      Let's get coding!
                    </Button>
                  </ButtonGroup>
                </Flex>
              </Stack>
            </form>
          </Box>
        </Flex>
      )}
      {error && (
        <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
      )}
    </div>
  );
};

export default Signup;
