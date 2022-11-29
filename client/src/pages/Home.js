import React from "react";
import { useQuery } from "@apollo/client";
import Posting from "../components/Posting/index";
import { Stack, Container, Center, Heading, HStack } from "@chakra-ui/react";
import { QUERY_POSTINGS } from "../utils/queries";
import { IoMdClock } from "react-icons/io";

const Home = () => {
  const { loading, data } = useQuery(QUERY_POSTINGS);
  const postings = data?.postings || [];

  return (
    <main>
      <div>
        <div>
          <Center pt="5vh">
            <Stack textAlign="center">
              <Heading
                bgGradient="linear(to-r, #006361, #00899B)"
                bgClip="text"
                fontSize="6xl"
                fontWeight="extrabold"
              >
                Welcome to TechOverflow!
              </Heading>
              <Heading as="i" size="xl">
                All positions should be considered remote unless otherwise
                stated.
              </Heading>
            </Stack>
          </Center>
          <Container pt="5vh">
            {loading ? (
              <div>Loading...</div>
            ) : (
              <Stack spacing="4" alignItems="center">
                <HStack>
                  <IoMdClock size={42} />
                  <Heading size="xl" py="15">
                    Recent postings:
                  </Heading>
                </HStack>
                                {
                                    loading ? (
                                        <div> Loading... </div>
                                    ) : (
                                        postings.slice(0, 5).map(({ _id, title, description, owners_id, registered }) => (
                                            <Posting
                                                key={_id}
                                                _id={_id}
                                                title={title}
                                                description={description}
                                                email={owners_id.email}
                                                owner={owners_id.firstName}
                                                avatar={owners_id.avatar}
                                                creator={owners_id._id.toString()}
                                                registered={registered}

                                            />
                                        ))
                                    )
                                }
                            </Stack>
                        )}
                    </Container>
                </div>
            </div>
        </main>
    );
};
export default Home;
