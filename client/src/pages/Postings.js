import React from "react";
import { Heading, Stack } from "@chakra-ui/react";
import Posting from "../components/Posting";
import { useQuery } from "@apollo/client";
import { QUERY_POSTINGS } from "../utils/queries";

// Presents all software development idea postings for users to browse through.
export default function Postings() {
  const { loading, data } = useQuery(QUERY_POSTINGS);
  const postings = data?.postings || [];

  return (
    <div>
      <Heading
        bgGradient="linear(to-r, #006361, #00899B)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        textAlign="center"
        py="5vh"
      >
        Project Postings
      </Heading>
      <Stack spacing="4" alignItems="center">
        {loading ? (
          <div> Loading... </div>
        ) : (
          postings.map(({ _id, title, description, owners_id, registered, creator }) => (
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
        )}
      </Stack>
    </div>
  );
}
