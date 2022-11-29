import React from "react";
import { Button, Text } from "@chakra-ui/react";
import { HiOutlineMail } from 'react-icons/hi';


const MailTo = ({ email }) => {
    return (
        <Button
            colorScheme='teal'
            to="#"
            onClick={(e) => {
                e.preventDefault()
                window.open(`mailto:${email}`, '_blank')
            }}


        >
            <HiOutlineMail />
        </Button>
    )
}

export default MailTo