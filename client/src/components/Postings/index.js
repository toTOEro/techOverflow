// import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Divider, Stack, Avatar } from '@chakra-ui/react'
import MailTo from '../MailTo';
// import { useQuery } from '@apollo/client';
// import {QUERY_POSTINGS} from '../../utils/queries.js';



// Presents all software development idea postings for users to browse through.
export default function Postings(postings) {
    const {_id, title, description, email, ...owner} = postings
    let data = postings.postings;
    console.log(`data is ${data.length} long and is of type ${typeof(data)}`)
    console.log(`postings is ${postings.length} long and is of tpye ${typeof(postings)}`)
    const postingsArray = Object.entries(data);
    console.log(postingsArray);
    let mappedpostings = postingsArray.map()
if(!postings.length) {
    return <h3>No postings yet</h3>
}
  //  return (
        // <div>
        //     <Stack spacing="4" alignItems="center">
        //         <Heading size='2xl' py='15'>Project Postings</Heading>

        //         {postings.map(() => (
        //             <Card key={_id} maxW='65vw' minW='50vw' size='lg' border='thick' borderColor='black' borderStyle='solid' >
        //                 <Link
        //                     to={`/posting/${_id}`}
        //                 >
        //                     <CardHeader>
        //                         <Heading size='lg'>{title}</Heading>
        //                     </CardHeader>
        //                     <CardBody>
        //                         <Text>{description}</Text>
        //                     </CardBody>
        //                 </Link>
        //                 <Divider />
        //                 <CardFooter py='1'>
        //                     <MailTo email={email} label={`Email`} />
        //                     <Avatar name='test' src={'./icons8-user-32.png'} />
        //                 </CardFooter>
        //             </Card>
        //         ))}
        //     </Stack>

        // </div>
   // )
}