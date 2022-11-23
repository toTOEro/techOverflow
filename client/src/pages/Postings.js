// import { useQuery } from '@apollo/client';
import React from 'react';
import { Heading, Stack, Text } from '@chakra-ui/react'
import Posting from '../components/Posting'
import { useQuery } from '@apollo/client';
import { QUERY_POSTINGS } from '../utils/queries';




// Presents all software development idea postings for users to browse through.
export default function Postings() {
    // const { data } = useQuery(GET_POSTINGS);
    const { loading, data } = useQuery(QUERY_POSTINGS);
    const postings = data?.postings || [];

    //Temporary Data to design page
    // let data = [
    //     {
    //         _id: 0,
    //         title: "Test Title",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
    //         owner: "TestOwner",
    //         email: "testemail@test.com"

    //     },
    //     {
    //         _id: 1,
    //         title: "Test TitlHEHEHEe 2",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
    //         owner: "TestOwner",
    //         email: "testemail@test.com"
    //     },
    //     {
    //         _id: 2,
    //         title: "Test Title 3",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
    //         owner: "TestOwasdfasdfner",
    //         email: "testemail@test.com"
    //     },
    //     {
    //         _id: 3,
    //         title: "Test Title 4",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
    //         owner: "TestOasdfasdfwner",
    //         email: "testemail@test.com"
    //     },
    //     {
    //         _id: 4,
    //         title: "Test Title 5",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
    //         owner: "TestOdfasdfasdfasdfasdfwner",
    //         email: "testemail@test.com"
    //     },
    //     {
    //         _id: 5,
    //         title: "Test Title 66",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
    //         owner: "TestOwnasdfasdfer",
    //         email: "testemail@test.com"
    //     },
    //     {
    //         _id: 6,
    //         title: "Test Title 7",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
    //         owner: "TestOwnasdfsdfer",
    //         email: "testemail@test.com"
    //     },
    //     {
    //         _id: 7,
    //         title: "Test Title 8",
    //         description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ante. Nulla nec nunc ut lorem vehicula hendrerit id pulvinar leo. Suspendisse potenti. Quisque semper dolor sit amet lacus posuere ullamcorper. Pellentesque finibus maximus turpis, vitae lacinia elit placerat at. Sed consectetur magna leo, aliquam blandit leo dictum at. Nulla augue quam, lacinia in tempor molestie, tincidunt ut nisi. Donec elementum condimentum tellus ac blandit. Sed justo ipsum, pretium a tincidunt sit amet, commodo vel purus.",
    //         owner: "TestOwneasdfr",
    //         email: "testemail@test.com"
    //     },
    // ]

    console.log(postings)
    return (
        <div>
            <Heading size='2xl' py='15'>Project Postings</Heading>
            <Stack spacing="4" alignItems="center">
                {loading ? (
                    <div> Loading... </div>
                ) : (
                    postings.map(({ _id, title, description, owner }) => (
                        <Posting
                            key={_id}
                            _id={_id}
                            title={title}
                            description={description}
                            email={owner.email}
                            owner={owner.firstName}
                        />
                    )))
                }
            </Stack>

        </div>


    )


}
