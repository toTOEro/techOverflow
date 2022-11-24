// import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Divider, Stack, Avatar } from '@chakra-ui/react'
import MailTo from '../MailTo';
//import { useQuery } from '@apollo/client';
//import {QUERY_POSTINGS} from '../../utils/queries.js';



// Presents all software development idea postings for users to browse through.
export default function Postings() {
    // const { data } = useQuery(QUERY_POSTINGS);

    //Temporary Data to design page
    let data = [
        {
            _id: 0,
            title: "Test Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
            owner: "Bobby",
            email: "testemail@test.com"

        },
        {
            _id: 1,
            title: "Test TitlHEHEHEe 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
            owner: "Bobby",
            email: "testemail@test.com"
        },
        {
            _id: 2,
            title: "Test Title 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
            owner: "Bobby",
            email: "testemail@test.com"
        },
        {
            _id: 3,
            title: "Test Title 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
            owner: "Bobby",
            email: "testemail@test.com"
        },
        {
            _id: 4,
            title: "Test Title 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
            owner: "Bobby",
            email: "testemail@test.com"
        },
        {
            _id: 5,
            title: "Test Title 66",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
            owner: "Bobby",
            email: "testemail@test.com"
        },
        {
            _id: 6,
            title: "Test Title 7",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
            owner: "Bobby",
            email: "testemail@test.com"
        },
        {
            _id: 7,
            title: "Test Title 8",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
            owner: "Bobby",
            email: "testemail@test.com"
        },
    ]

    return (
        <div>
            <Stack spacing="4" alignItems="center">
                <Heading size='2xl' py='15'>Project Postings</Heading>

                {data.slice(0, 4).map(({ _id, title, description, email, owner }) => (
                    <Card key={_id} maxW='65vw' minW='50vw' size='lg' border='thick' borderColor='black' borderStyle='solid' >
                        <Link
                            to={`/posting/${_id}`}
                        >
                            <CardHeader>
                                <Heading size='lg'>{title}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>{description}</Text>
                            </CardBody>
                        </Link>
                        <Divider />
                        <CardFooter py='1'>
                            <MailTo email={email} label={`Email ${owner}`} />
                            <Avatar name='test' src={'./icons8-user-32.png'} />
                        </CardFooter>
                    </Card>
                ))}
            </Stack>

        </div>
    )
}