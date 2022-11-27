import React from "react";

import { Heading, Text, Link, Stack, Center} from "@chakra-ui/react";



export default function Error() {

    return (
        <>
            <Center>
                <Stack textAlign={'center'}>
                    <Heading>Error 404! Page not found</Heading>
                    <Link href="/"><Text>Return to home?</Text></Link>
                </Stack>
            </Center>

        </>
    )

}