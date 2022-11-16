import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'
// import {GET_POSTINGS} from '../utils/queries';

export default function Postings() {
    const { data } = useQuery(GET_POSTINGS);

    return (
        <>
            <div className=''>
                {data.map((posting) => {
                    <Card>
                        <CardBody>
                            <Text>{posting.description}</Text>
                        </CardBody>
                    </Card>
                })}



            </div>

        </>

    )


}