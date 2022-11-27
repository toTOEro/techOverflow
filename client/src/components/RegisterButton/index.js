import React from "react";
import { Button } from "@chakra-ui/react";
import { IoIosAddCircle } from "react-icons/io";

import { useMutation } from "@apollo/client";
import { REGISTER } from "../../utils/mutations";

import Auth from '../../utils/auth';



export default function Register(postId) {

    const [register] = useMutation(REGISTER);


    const handleRegisterSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await register({

                variables: { ...postId, userId: Auth.getProfile().data._id }
            })
            if (data) {
                window.location.reload();
            };
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
