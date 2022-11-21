
import React from "react"
import { Card, CardBody, CardFooter, Divider } from "@chakra-ui/react"

const Comment = (data) => {


    let {
        _id,
        content,
        date_created
    } = data

    return (
        <>
            <Card key={_id} variant='outline' my='4'>
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