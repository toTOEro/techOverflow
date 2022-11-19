import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Postings from './pages/Postings';
import PostingDetail from './pages/PostingDetail';
import Footer from './components/Footer';
import Home from './pages/Home';
// import Profile from './pages/Profile';
// import Signup from './pages/Signup';
// import Login from './pages/Login'

import logo from './logo.svg';
import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

// const theme = extendTheme({
//   styles: {
//     global: {
//       body: {
//         height: 'fit-content',
//       }
//     }
//   }
// })


function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider >
        <div className='content-container'>
          <Router>
            <Routes>
               <Route
              path="/"
              element={<Home />}
               /> 
               {/* <Route 
              path="/login"
              element={<Login/>}
              />
              <Route 
              path="/signup"
              element={<Signup/>}
              /> 
              <Route 
              path="/me"
              element={<Profile/>}
              /> */}
            <Route
                path="/postings"
                element={<Postings />}
              />
              <Route
                path="/posting/:id"
                element={<PostingDetail />}
              />
            </Routes>
          </Router>
        </div>
        <div className='footer--pin'>
          <Footer />
        </div>
      </ChakraProvider>

    </ApolloProvider >

  );
}

export default App;
