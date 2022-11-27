 import React, {useState} from 'react';
 import { Link } from 'react-router-dom';
 import { useMutation } from '@apollo/client';
 import { LOGIN_USER } from '../utils/mutations';
 import {
     Box,
     Button,
     FormControl,
     FormLabel,
     Input,
     Center

 } from '@chakra-ui/react'
   import Auth from '../utils/auth';
  const Login = (props) => {
     const [formState, setFormState] = useState({
        email: '',
         password: ''
        });
     const [login, {error, data}] = useMutation(LOGIN_USER);

     const changeHandler = (event) => {
         const {name, value} = event.target;
         setFormState({
             ...formState,
             [name]: value,
         });
     };

      const handleFormSubmit = async(event) => {
          event.preventDefault();
          try {
              const {data} = await login({
                  variables: {...formState},
              });
              
        Auth.login(data.login.token);
          } catch(err) {
              console.error(err);
          }
          setFormState({
              email: '',
              password: '',
          })
      }

     return (
         <div className='outerContainer'>
              {data ? (
                 <p> Success! Let's bring you home! <Link to="/"></Link> </p>
             ) : ( 
                <Center>
                <Box width='100%' bg='gray' py='4' marginBottom='20px' px='10px'>
                <form>
                 <FormControl isRequired onSubmit={handleFormSubmit}>
                     <FormLabel>
                         Login
                     </FormLabel>
                     <FormLabel>Email:</FormLabel>
                     <Input
                       placeholder="Your email"
                       type="email"
                       name="email"
                       value={formState.email}
                        onChange={changeHandler}
                       />
                    </FormControl>
                    <FormControl onSubmit={handleFormSubmit}>

                     <FormLabel>Password:</FormLabel>
                     <Input 
                     type="password"
                     name="password"
                     value={formState.password}
                      onChange={changeHandler}
                     placeholder='Enter your password'
                     size='lg'
                     />
                 </FormControl>
                 <Button 
                 as='a'
                 href='/'
                 color='Red' mr={3} >Back to Home!</Button>
                 <Button onClick={handleFormSubmit} type="submit" color='Green'>Let's get coding!</Button>
                 </form>
             </Box>
             </Center>
              )} 

              {error && (
                 <div className = 'add styling'>
                     {error.message}
                 </div>
             )} 
         </div>
     )
 }

 export default Login;