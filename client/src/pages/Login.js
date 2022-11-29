import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Center

import Auth from "../utils/auth";
const Login = (props) => {
    const [formState, setFormState] = useState({
        email: "",
        password: "",
    });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
        }
        setFormState({
            email: '',
            password: '',
        })
    }


    return (
        <div className="outerContainer">
            {data ? (
                <p>
                    {" "}
                    Success! Let's bring you home! <Link to="/"></Link>{" "}
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
                    <Box borderWidth="2px" minW={{ base: "90%", md: "468px" }}>
                        <form onSubmit={handleFormSubmit}>
                            <Stack
                                spacing={5}
                                p="1rem"
                                backgroundColor="whiteAlpha.900"
                                boxShadow="xl"
                            >
                                <FormControl isRequired>
                                    <Heading size="xl" textAlign="center" pb="1vh">
                                        Login
                                    </Heading>
                                    <FormHelperText>
                                        <HStack justifyContent="center">
                                            <Link as="a" to="/Signup">
                                                New user? Signup today!
                                            </Link>
                                        </HStack>
                                    </FormHelperText>
                                    <FormLabel>Email:</FormLabel>
                                    <Input
                                        placeholder="Your email"
                                        type="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={changeHandler}
                                    />
                                </FormControl>
                                <FormControl isRequired onSubmit={handleFormSubmit}>
                                    <FormLabel>Password:</FormLabel>
                                    <Input
                                        type="password"
                                        name="password"
                                        value={formState.password}
                                        onChange={changeHandler}
                                        placeholder="Enter your password"
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
                                            onClick={handleFormSubmit}
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
                <Heading textAlign='center' color='#8A101E'>
                    {error.message}
                </Heading>
            )}
        </div>
    )
}

export default Login;
