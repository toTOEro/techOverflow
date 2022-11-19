const { ModalContent } = require("@chakra-ui/react");
const { AuthenticationError } = require("apollo-server-express");
const { User, Posting, Comment } = require("../models");
const { signToken } = require("../utils/auth");
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    postings: async () => {
      return await Posting.find();
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("posting");
      }
    },
    singlePost: async (parent, { _id }, context) => {
      return Posting.findOne({ _id }).populate("comments");
    },
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addUser: async (parent, args, context) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      // if (context.user) {
      return await User.findByIdAndUpdate(context.user._id, args, {
        new: true,
      });
      // }

      // throw new AuthenticationError("Error: unable to do that!");
    },

    deleteUser: async (parent, args, context) => {
      // if (context.user) {
      return User.findOneAndDelete({ _id: context.user._id });
      // }
      // throw new AuthenticationError("Error: unable to do that!");
    },

    addPosting: async (parent, args, context) => {
      // if (context.user) {
      return Posting.create(args);
      // }
      // throw new AuthenticationError("You need to be logged in to make a post!");
    },
    updatePosting: async (parent, { _id, title, description }, context) => {
      // if (context.user) {
      return Posting.findByIdAndUpdate(
        _id,
        { title, description },
        { new: true }
      );
      // }
      // throw new AuthenticationError("You cannot do that!");
    },
    deletePosting: async (parent, { _id }, context) => {
      // if (context.user) {
      return Posting.findByIdAndDelete({ _id });
      // }
      // throw new AuthenticationError("You can't do that!");
    },
    addComment: async (parent, args, context) => {
      // if (context.user) {
      return Comment.create(args);
      // }
      // throw new AuthenticationError("You need to be logged in to comment!");
    },
    updateComment: async (parent, { _id, content }, context) => {
      // if (context.user) {
      return Comment.findByIdAndUpdate(_id, { content }, { new: true });
      // }
    },
    deleteComment: async (parent, { _id }, context) => {
      // if (context.user) {
      return Comment.findByIdAndDelete({ _id });
      // }
      // throw new AuthenticationError("You can't do that!");
    },
  },
};
module.exports = resolvers;
