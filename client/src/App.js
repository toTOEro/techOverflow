import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ChakraProvider } from '@chakra-ui/react';

import Postings from './pages/Postings';
import PostingDetail from './pages/PostingDetail';
import Footer from './components/Footer';

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

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Router>
          <Routes>
            {/* <Route
              path="/"
              element={<Home />}
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
        <Footer />

      </ChakraProvider>

    </ApolloProvider>

  );
}

export default App;
