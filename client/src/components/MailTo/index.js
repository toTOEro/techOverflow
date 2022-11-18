import React from "react";
import { Button } from "@chakra-ui/react";
import { HiOutlineMail } from 'react-icons/hi';


const MailTo = ({ email, label }) => {
    return (
        <Button
            leftIcon={<HiOutlineMail />}
            colorScheme='teal'
            to="#"
            onClick={(e) => {
                e.preventDefault()
                window.open(`mailto:${email}`, '_blank')
            }}
        >
            {label}
        </Button>
    )
}

export default MailTo