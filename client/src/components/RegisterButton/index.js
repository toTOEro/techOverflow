import React from "react";
import { Button } from "@chakra-ui/react";
import { IoIosAddCircle } from "react-icons/io";

import { useMutation } from "@apollo/client";
import { REGISTER } from "../../utils/mutations";




export default function Register(postId) {

    const [register, { error }] = useMutation(REGISTER);


    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = register({
                variables: { ...postId, userId: '637d9fb14f58788dae6b8638' }
            })

            window.location.reload();
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Button
            colorScheme='teal'
            leftIcon={<IoIosAddCircle />}
            onClick={handleRegisterSubmit}
        >
            Register
        </Button>
    )
}
