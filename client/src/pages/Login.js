 import React, {useState} from 'react';
 import { useMutation } from '@apollo/client';
 import { LOGIN_USER } from '../utils/mutations';
 import {
     Box,
     Button,
     FormControl,
     FormLabel,
     Input,
     Textarea,
     Center

 } from '@chakra-ui/react'
   import Auth from '../utils/auth';

  const Login = (props) => {
//     const [formState, setFormState] = useState({email: '', password: ''});
//     const [login, {error, data}] = useMutation(LOGIN_USER);

//     const changeHandler = (event) => {
//         const {email, value} = event.target;

//         setFormState({
//             ...formState,
//             [email]: value,
//         });
//     };

//     // const handleFormSubmit = async(event) => {
//     //     event.preventDefault();
//     //     console.log(formState);
//     //     try {
//     //         const {data} = await login({
//     //             variables: {...formState},
//     //         });

//     //         Auth.login(data.login.token);
//     //     } catch(err) {
//     //         console.error(err);
//     //     }

//     //     setFormState({
//     //         email: '',
//     //         password: '',
//     //     })

//     // }

     return (
         <div className='outerContainer'>
             {/* {data ? (
                 <p> Success! </p>
             ) : ( */}
                 <Center>
                 <Box width='100%' bg='gray' py='4' marginBottom='20px' px='10px'>
                 <FormControl>
                     <FormLabel>
                         Login
                     </FormLabel>
                     <FormLabel>Email:</FormLabel>
                     <Input type='text'></Input>
                     <FormLabel>Password:</FormLabel>
                     <Textarea 
                     placeholder='Enter your password'
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
             {/* )} */}

             {/* {error && (
                 <div className = 'add styling'>
                     {error.message}
                 </div>
             )} */}
         </div>
     )
 }

 export default Login;