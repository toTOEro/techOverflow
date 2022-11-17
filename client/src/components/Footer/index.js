import React from "react";
import { Box, Heading, List, ListItem, Divider, Stack, Center } from "@chakra-ui/react";

const Footer = () => {
    return (

        <Box position='absolute' bottom='0' width='100%' bg='black' py='1' color='white'>
            <Stack alignItems='center'>
                {/* <Heading size='sm'>Happy Coding</Heading> */}
                <List textAlign='center'>
                    <Heading size='xs' fontStyle='italic' >Created By:</Heading>
                    {/* <Divider maxWidth='6rem' /> */}
                    <Center gap='3' height='20px'>
                        <ListItem as='a' target='_blank' href="https://github.com/toTOEro">
                            Anthony To
                        </ListItem>
                        <Divider orientation="vertical" />
                        <ListItem as='a' target='_blank' href="https://github.com/Hdela99">
                            Hector De La Cruz
                        </ListItem>
                        <Divider orientation="vertical" />
                        <ListItem as='a' target='_blank' href="https://github.com/MargotCooper">
                            Margot Cooper Gruen
                        </ListItem>
                        <Divider orientation="vertical" />
                        <ListItem as='a' target='_blank' href="https://github.com/MarioArmstrong">
                            Mario Armstrong
                        </ListItem>
                    </Center>
                </List>
            </Stack>
        </Box>

    )
}


export default Footer