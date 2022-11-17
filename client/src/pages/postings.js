import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading } from '@chakra-ui/react'
import MailTo from '../components/MailTo';
// import {GET_POSTINGS} from '../utils/queries';



// Presents all software development idea postings for users to browse through.
export default function Postings() {
    // const { data } = useQuery(GET_POSTINGS);

    //Temporary Data to design page
    let data = [
        {
            title: "Test Title",
            description: "Coolest Project",
            owner: "TestOwner",
            email: "testemail@test.com"

        },
        {
            title: "Test Title 2",
            description: "Not the coolest project",
            owner: "TestOwner",
            email: "testemail@test.com"
        }
    ]

    return (
        <>
            <div className=''>
                <Heading size='2xl'>Project Postings</Heading>
                {data.map((posting) => (
                    <Card>
                        <CardHeader><Heading size='lg'>{posting.title}</Heading></CardHeader>
                        <CardBody>
                            <Text>{posting.description}</Text>
                        </CardBody>
                        <CardFooter>
                            <MailTo email={posting.email} label="Contact Me at asdfkja"></MailTo>    
                        </CardFooter>
                    </Card>
                ))}

                <br />
                <footer className='credits'><a target="_blank" href="https://icons8.com/icon/22396/user" rel="noreferrer">User icons by Icons8</a></footer>
            </div>

        </>

    )


}