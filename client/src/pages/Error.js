import React from "react";

import { Heading, Text, Link, Stack } from "@chakra-ui/react";



export default function Error() {

    return (
        <>
            <Stack as='Center'>
                <Heading>Error 404! Page not found</Heading>
                <Link href="/"><Text>Return to home?</Text></Link>
            </Stack>
        </>
    )

}