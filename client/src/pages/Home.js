import React from 'react';
import { useQuery } from '@apollo/client';
import PostingList from '../components/PostingsList/index';
import Footer from '../components/Footer/index';

 import {QUERY_POSTINGS} from '../utils/queries';

const Home = () => {
     const {loading, data} = useQuery(QUERY_POSTINGS);
     const postings = data?.postings || [];

    return (
        <main> 
            <div >
                <div >
                    <h1>Welcome to the homePage(This is for development purposes take this out of production)</h1>
                    {loading ? (
                        <div>Loading...</div>
                    ): (
                        <PostingList 
                        postings={postings}
                        title="Here's the current list of postings"
                        />
                    )}
                </div>
            </div>
        </main>
    );
};
export default Home;