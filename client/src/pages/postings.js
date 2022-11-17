// import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Divider, Stack, Avatar } from '@chakra-ui/react'
import MailTo from '../components/MailTo';
// import {GET_POSTINGS} from '../utils/queries';



// Presents all software development idea postings for users to browse through.
export default function Postings() {
    // const { data } = useQuery(GET_POSTINGS);

    //Temporary Data to design page
    let data = [
        {
            _id: 0,
            title: "Test Title",
            description: "Coolest Project",
            owner: "TestOwner",
            email: "testemail@test.com"

        },
        {
            _id: 1,
            title: "Test Title 2",
            description: "Not the coolest project",
            owner: "TestOwner",
            email: "testemail@test.com"
        }
    ]

    return (
        <>
            <div className='postings'>
                <Heading size='2xl'>Project Postings</Heading>
                <Stack spacing="4" alignItems="center">
                    {data.map(({_id, title, description, email, owner}) => (
                        <Card key={_id} maxW='3xl' minW='xl'>
                            <Link
                                to={`/posting/${_id}`}
                            >
                                <CardHeader><Heading size='lg'>{title}</Heading></CardHeader>
                                <CardBody>
                                    <Text>{description}</Text>
                                </CardBody>
                            </Link>
                            <Divider />
                            <CardFooter>
                                <MailTo email={email} label="Email me" />
                                <Avatar name='test' src={'./icons8-user-32.png'} />
                            </CardFooter>
                        </Card>
                    ))}
                    <br />
                    <Text className='credits' fontSize='sm'><a target="_blank" href="https://icons8.com/icon/22396/user" rel="noreferrer">User icons by Icons8</a></Text>
                </Stack>

            </div>

        </>

    )


}