import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { PostingProvider } from "./utils/GlobalState";

import Home from "./pages/Home";
import Postings from "./pages/Postings";
import PostingDetail from "./pages/PostingDetail";
import Error from "./pages/Error";
import Profile from "./pages/Profile";
import PostEditor from "./pages/PostEditor";
import Footer from "./components/Footer";

// import Profile from './pages/Profile';
import Signup from "./pages/Signup";
import Login from "./pages/Login";

// import logo from './logo.svg';
import "./App.css";
import Nav from "./components/Nav";

const httpLink = createHttpLink({
  uri: "/graphql",
});

//we haven't logged a user in so the token error is coming from here
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const theme = extendTheme({
  styles: {
    global: {
      p: {
        fontSize: { base: "14px", md: "20px", lg: "25px" },
      },
      a: {
        fontSize: { base: "8px", md: "20px", lg: "20px" },
      },
      comment: { base: "8px", md: "20px", lg: "20px" },
    },
  },
  components: {
    Comment: {
      baseStyle: {},
    },
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <div className="content-container">
          <Router>
            <PostingProvider>
              <Nav />

              <Routes>
                <Route
                  path="/"
                  element={<Home />}
                />
                <Route
                  path="/login"

                  element={<Login />}
                />
                <Route
                  path="/Signup"
                  element={<Signup />}
                />
                <Route
                  path="/profile/:userId"
                  element={<Profile />}
                />
                <Route
                  path="/postings"
                  element={<Postings />}
                />
                <Route
                  path="/posting/:id"
                  element={<PostingDetail />}
                />
                <Route 
                path="/PostEditor/:id"
                element={<PostEditor/>}
                />
                <Route
                  path="/*"
                  element={<Error />}
                />
              </Routes>
            </PostingProvider>
          </Router>
        </div>
        <div className="footer--pin">
          <Footer />
        </div>
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default App;
