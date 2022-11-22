import { useReducer } from "react";
import {
    ADD_POSTING,
    ADD_COMMENT
} from './actions';



export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_POSTING:
            return {
                ...state,
                postings: [...state.postings, action.posting]
            };

        case ADD_COMMENT:
            return {
                ...state,
                comments: [...state.comments, action.comment]
            };

        default:
            return state;
    }
};

export function usePostingReducer(initialState) {
    return useReducer(reducer, initialState);
}