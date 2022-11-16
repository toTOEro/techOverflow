import { useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';

// import {GET_POSTINGS} from '../utils/queries';

export default function Postings() {
    const { data } = useQuery(GET_POSTINGS);

    return (
        <>
            <div className=''>
                {data.map((posting) => {
                    <div key={posting._id}>

                    </div>

                })}



            </div>
        
        </>

            )


}