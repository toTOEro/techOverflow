import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Center

} from '@chakra-ui/react'
 import {useMutation} from '@apollo/client';
 import {ADD_USER} from '../utils/mutations';
 import Auth from '../utils/auth';
const Signup = () => {
     const [formState, setFormState] = useState({
         firstName: '',
         lastName: '',
         email: '',
         password:'',
     });

     const [addUser, {error, data}] = useMutation(ADD_USER);

     const changeHandler = (event) => {
         const {name, value} = event.target;
         setFormState({
             ...formState,
             [name]: value,
         });
     };

     const signUpHandler = async (event) => {
         event.preventDefault();
         console.log(formState);

         try {
             const {data} = await addUser({
                 variables: {...formState},
             });
             Auth.login(data.addUser.token);

         } catch (err) {
             console.error(err);
         }
     };

    return (
        <div className ='outerContainer'>
            {data ? (
                <p> Success! Sending you back now! <Link to='/'></Link> </p>
            ) : (
                <Center>
                <Box width='100%' bg='gray' py='4' marginBottom='20px' px='10px'>
                    <form onSubmit={signUpHandler}>
                    <FormControl isRequired >
                        <FormLabel>
                            New user? Signup today!
                        </FormLabel>
                        <FormLabel>First Name:</FormLabel>
                        < Input
                        placeholder="What's your first name?"
                        name="firstName"
                        type='firstName'
                        value ={formState.firstName}
                        onChange={changeHandler}
                       />
                        <FormLabel>Last Name:</FormLabel>
                        <Input 
                        name="lastName"
                        value ={formState.lastName}
                        onChange={changeHandler}
                        type='lastName'
                        />
                        <FormLabel>Email:</FormLabel>
                        <Input 
                        name="email"
                        value ={formState.email}
                        onChange={changeHandler}
                        type='email'
                        />
                        <FormLabel>Password:</FormLabel>
                        <Input                   
                        name="password"
                        value ={formState.password}
                        onChange={changeHandler}
                        type='password'
                        placeholder='Must be 8-24 characters long'
                        size='lg'
                        />
                    </FormControl>
                    <Button
                        as='a'
                        href='/'
                        color='Red' mr={3} >Back to Home!</Button>
                    <Button onClick={signUpHandler} color='Green'>Let's get coding!</Button>
                    </form>
                </Box>
            </Center>
            )}
            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
        </div>
       
    )


}

export default Signup;