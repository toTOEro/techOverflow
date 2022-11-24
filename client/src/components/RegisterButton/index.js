import React from "react";
import { Button } from "@chakra-ui/react";
import { IoIosAddCircle } from "react-icons/io";

import { useMutation } from "@apollo/client";




export default function Register(postId) {




    return (
        <Button colorScheme='teal' leftIcon={<IoIosAddCircle />}>
            Register
        </Button>
    )
}
