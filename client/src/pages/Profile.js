import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import PostingList from '../components/Postings/index';

import { QUERY_SINGLE_USER } from '../utils/queries';

const User = () => {
  const { userId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_USER, {
    variables: { userId: userId },
  });

  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2 className="card-header">
        {user.firstName}'s friends have endorsed these skills...
      </h2>

      {user.postings?.length > 0 && <PostingList postings={user.postings} />}
    </div>
  );
};

export default User;
