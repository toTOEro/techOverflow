import React, { useState } from 'react';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Center

} from '@chakra-ui/react'
// import {useMutation} from '@apollo/client';
// import {ADD_USER} from '../utils/mutations';
// import Auth from '../utils/auth';


const Signup = () => {
    // const [formState, setFormState] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password:'',
    // });

    // const [addProfile, {error, data}] = useMutation(ADD_USER);

    // const changeHandler = (event) => {
    //     const {email, value} = event.target;

    //     setFormState({
    //         ...formState,
    //         [email]: value,
    //     });
    // };

    // const signUpHandler = async (event) => {
    //     event.preventDefault();
    //     console.log(formState);

    //     try {
    //         const {data} = await addProfile({
    //             variables: {...formState},
    //         });
    //         Auth.login(data.addProfile.token);

    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    return (
        <Center>
            <Box width='100%' bg='gray' py='4' marginBottom='20px' px='10px'>
                <FormControl>
                    <FormLabel>
                        New user? Signup today!
                    </FormLabel>
                    <FormLabel>Email:</FormLabel>
                    <Input type='text'></Input>
                    <FormLabel>Password:</FormLabel>
                    <Textarea
                        placeholder='Must be 8-24 characters long'
                        size='lg'
                    />
                </FormControl>
                <Button
                    as='a'
                    href='/'
                    color='Red' mr={3} >Back to Home!</Button>
                <Button color='Green'>Let's get coding!</Button>
            </Box>
        </Center>
    )


}

export default Signup;