import logo from './logo.svg';
import './App.css';
import React from 'react';
import {ApolloClient, InMemoryCache, ApolloProvider } from `@apollo/client`;

import {BrowserRouter as Router, Routes, Route} from `react-router-dom`;


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

function App() {
  return (
 <ApolloProvider client={client}>
  <Router>
    {/*TBD*/}
    <div className= "flex-column"  >
      <Header/>
      <div className="container">
        <Routes> 
        <Route 
        path="/"
        element={<Home/>}
        />
        <Route
        path="/profiles/:profileID"
        element={<Profile/>}
        />
      </Routes>
    </div>
    <Footer/>
    </div>

  </Router>
 </ApolloProvider>
  );
}

export default App;
