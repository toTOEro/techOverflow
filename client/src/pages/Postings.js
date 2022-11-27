import React from 'react';
import { Heading, Stack, Text } from '@chakra-ui/react'
import Posting from '../components/Posting'
import { useQuery } from '@apollo/client';
import { QUERY_POSTINGS } from '../utils/queries';




// Presents all software development idea postings for users to browse through.
export default function Postings() {
    const { loading, data } = useQuery(QUERY_POSTINGS);
    const postings = data?.postings || [];


    return (
        <div>
            <Heading size='2xl' py='15'>Project Postings</Heading>
            <Stack spacing="4" alignItems="center">
                {loading ? (
                    <div> Loading... </div>
                ) : (
                    postings.map(({ _id, title, description, owners_id, registered }) => (
                        <Posting
                            key={_id}
                            _id={_id}
                            title={title}
                            description={description}
                            email={owners_id.email}
                            owner={owners_id.firstName}
                            avatar={owners_id.avatar}
                            registered={registered}
                        />
                    )))
                }
            </Stack>

        </div>


    )


}
