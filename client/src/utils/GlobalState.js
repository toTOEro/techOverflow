import React, { createContext, useContext } from "react";
import { usePostingReducer } from "./reducers";

const PostingContext = createContext();
const { Provider } = PostingContext;

const PostingProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = usePostingReducer({
        postings: [],
        comments: []
    })

    return <Provider value={[state, dispatch]} {...props} />;
}

const usePostingContext = () => {
    return useContext(PostingContext);
};

export { PostingProvider, usePostingContext };