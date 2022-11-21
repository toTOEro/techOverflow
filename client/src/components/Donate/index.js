import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { Button } from '@chakra-ui/react';
import { FaDonate } from 'react-icons/fa'

export default function Donate() {
    const donoLink = 'https://buy.stripe.com/cN2aETdsXabF74s5kk';

    return (
        <>
            <Button as={'a'} href={donoLink} target='_blank' colorScheme='blue'><FaDonate /></Button>
        </>
    )
}