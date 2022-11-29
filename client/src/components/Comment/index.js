
import React from "react"
import { Card, CardBody, CardFooter, Divider } from "@chakra-ui/react"
import date from '../../utils/helpers'

const Comment = (data) => {


    let {
        _id,
        content,
        date_created
    } = data


    date_created = date(date_created)

    return (
        <>
            <Card key={_id} variant='outline' my='4' borderColor='teal' borderWidth='2px'>
                <CardBody>
                    {content}
                </CardBody>
                <Divider />
                <CardFooter justifyContent={'end'} py='1.5' as='i'>
                    Commented on {date_created}
                </CardFooter>
            </Card>


        </>
    )

}


export default Comment