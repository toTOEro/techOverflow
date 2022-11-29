import {
  Heading,
  Text,
  Box,
  Container,
  Divider,
  FormControl,
  Input,
  Button,
  Avatar,
  AvatarGroup,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
// import { usePostingContext } from "../utils/GlobalState";
import { ADD_COMMENT } from "../utils/mutations";
import Auth from "../utils/auth";
import Comment from "../components/Comment/index";

// Temporary disabled commentform
// import CommentForm from "../components/CommentForm";

import { QUERY_SINGLE_POSTING, POSTINGCOMMENTS } from "../utils/queries";
import { useMutation } from "@apollo/client";
import RegisterButton from "../components/RegisterButton";

// Handles posting and comment rendering
const PostingDetail = () => {
  // Pulls posting ID from url params
  let { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  // Posting handling
  const { loading, data } = useQuery(QUERY_SINGLE_POSTING, {
    variables: { _id: id },
  });

  const singlePost = data?.singlePost || [];
  let { title, description, registered } = singlePost;

  // Comment handling
  const { data: comData, refetch } = useQuery(POSTINGCOMMENTS, {
    variables: { _id: id },
    notifyOnNetworkStatusChange: true,
  });

  const { comments } = comData?.postComments || [];

  const [newComment, setNewComment] = useState({
    content: "",
  });

  const [addComment] = useMutation(ADD_COMMENT);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const data = await addComment({
        variables: {
          ...newComment,
          creator: Auth.getProfile().data._id,
          postingId: id,
        },
      });
      if (data) {
        await refetch();
      }
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
    setNewComment({ content: "" });
  };

  const handleCommentChange = (e) => {
    const { name, value } = e.target;

    setNewComment({ ...newComment, [name]: value });
  };

  return (
    <>
      <Container
        paddingTop="20"
        paddingX="5"
        minWidth={["25vw", "50vw", "80vw"]}
      >
        {loading ? (
          <div> Loading... </div>
        ) : (
          <>
            <Box
              padding="10"
              border="1px"
              borderColor="teal.100"
              borderRadius="10"
            >
              <Heading size="3xl" paddingBottom="5vh">
                {" "}
                {title}{" "}
              </Heading>
              <Text fontSize="xl" textAlign="start">
                {description}
              </Text>
            </Box>
            {registered.length !== 0 && (
              <Heading
                as={"h6"}
                textAlign={"end"}
                fontStyle={"italic"}
                fontSize={"1rem"}
                my={"0.5rem"}
              >
                Registered Users
              </Heading>
            )}
            <Box id="box">
              <AvatarGroup justifyContent={"end"}>
                {registered
                  ? registered.map(({ _id, avatar }) => (
                      <Avatar key={_id} src={avatar} />
                    ))
                  : ""}
              </AvatarGroup>
            </Box>
            <Flex justify={"end"}>
              <RegisterButton postId={id} />
            </Flex>
            <Divider my="3vh" />
            <Heading size="md" my="2vh">
              Comments
            </Heading>
            {comments
              ? comments.map(({ _id, content, date_created }) => (
                  <Comment
                    key={_id}
                    content={content}
                    date_created={date_created}
                  />
                ))
              : ""}
            <form onSubmit={handleCommentSubmit}>
              <FormControl>
                <Input
                  name="content"
                  placeholder="Your Comment Here"
                  onChange={handleCommentChange}
                  value={newComment.content}
                />
                <Button
                  isLoading={isLoading}
                  type="submit"
                  mt="2"
                  loadingText="Submitting Comment..."
                >
                  Submit Comment
                </Button>
              </FormControl>
            </form>
          </>
        )}
      </Container>
    </>
  );
};

export default PostingDetail;
