// import { useQuery } from '@apollo/client';
import React from 'react';
import { Heading, Stack } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
// import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Divider, Stack, Avatar, extendTheme } from '@chakra-ui/react'
// import MailTo from '../components/MailTo';
// import {GET_POSTINGS} from '../utils/queries';
export default function postingsList() {

     let postings =  [
        {
            _id: 0,
            title: "Test Title",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
            owner: "TestOwner",
            email: "testemail@test.com"

        },
        {
            _id: 1,
            title: "Test Title 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
            owner: "TestOwner",
            email: "testemail@test.com"
        },
        {
            _id: 2,
            title: "Test Title 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
            owner: "TestOwner",
            email: "testemail@test.com"
        },
        {
            _id: 3,
            title: "Test Title 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
            owner: "TestOwner",
            email: "testemail@test.com"
        },
        {
            _id: 4,
            title: "Test Title 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
            owner: "TestOwner",
            email: "testemail@test.com"
        },
        {
            _id: 5,
            title: "Test Title 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
            owner: "TestOwner",
            email: "testemail@test.com"
        },
        {
            _id: 6,
            title: "Test Title 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
            owner: "TestOwner",
            email: "testemail@test.com"
        },
        {
            _id: 7,
            title: "Test Title 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
            owner: "TestOwner",
            email: "testemail@test.com"
        },
    ]

    if(!postings.length){
        return <h3> No postings yet, will you make the first one?</h3>;
    }

    return(
        <div>
            <Heading size='2xl' py='15'>Tech helper Postings</Heading>
            <Stack spacing="4" alignItems="center">
                {postings.map(({_id, title, description, email, owner}) => (
                        <div >
                            <postingsList 
                            key={_id}
                            _id={_id}
                            title={title}
                            description={description}
                            />
                            <Link 
                            to={`/postings/${postings._id}`}>
                                Help out a friend today!
                            </Link>
                        </div>   ))}
                        </Stack>
        </div>
    )
};

