import React from 'react';
import { useQuery } from '@apollo/client';

import PostingList from `../components/PostList`;
import PostingForm from `../components/PostingForm`;

import {QUERY_POSTINGS} from `../utils/queries`;

const Home = () => {
    const {loading, data} = useQuery(QUERY_POSTINGS);
    const postings = data?.postings || [];

    return (
        <main> 
            <div className="flex-row justify-center">
                <div 
                className="col-12 col-md-10 mb-3 p-3" 
                style={{ border: `1px dotted #1a1a1a` }}
                >
                    <PostingForm />
                </div>

                <div className="col-12">
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