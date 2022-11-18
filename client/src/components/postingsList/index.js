// import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
// import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Divider, Stack, Avatar, extendTheme } from '@chakra-ui/react'
// import MailTo from '../components/MailTo';
// import {GET_POSTINGS} from '../utils/queries';
const postingsList = ({postings, title}) => {
    if(!postings.length){
        return <h3> No postings yet, will you make the first one?</h3>;
    }

    return(
        <div>
            <h3 >{title}</h3>
            <div >
                {postings &&
                postings.map((posting) => (
                    <div key={posting._id} >
                        <div >
                            <h4 >
                                {posting.title} <br />
                                <span  style={{fontSize: '1rem' }}>
                                    {posting.description}
                                </span>
                            </h4>
                            <Link 
                            to={`/postings/${postings._id}`}>
                                Help out a friend today!
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default postingsList;