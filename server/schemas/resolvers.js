const { AuthenticationError } = require("apollo-server-express");
const { User, Posting, Comment } = require("../models");
const { signToken } = require("../utils/auth");
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    postings: async () => {
      return await Posting.find().populate("owners_id").populate("registered");
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("postings");
      }
    },
    singlePost: async (parent, { _id }, context) => {
      return Posting.findOne({ _id }).populate("comments").populate("owners_id");
    },
    users: async () => {
      return User.find().populate("postings");
    },
    comments: async () => {
      return Comment.find().populate("creator");
    },
  },
  Mutation: {
    login: async (parent, { email, password }, context) => {
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
      console.log(args);
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (
      parent,
      { _id, firstName, lastName, email, password },
      context
    ) => {
      if (context.user._id === _id) {
        return User.findByIdAndUpdate(
          _id,
          { firstName, lastName, email, password },
          {
            new: true,
          }
        );
      }
      throw new AuthenticationError("You can't do that! You aren't allowed!");
    },

    deleteUser: async (parent, { _id }, context) => {
      if (context.user._id === _id) {
        return User.findByIdAndDelete({ _id });
      }
      throw new AuthenticationError("You can't do that! You aren't allowed!");
    },
    addPosting: async (parent, args, context) => {
      return Posting.create(args);
    },
    updatePosting: async (parent, { _id, title, description }, context) => {
      const postToBeUpdated = await Posting.findById(_id);
      if (context.user._id === postToBeUpdated.owners_id.toString()) {
        return Posting.findByIdAndUpdate(
          _id,
          { title, description },
          { new: true }
        );
      }
      throw new AuthenticationError("You can't do that! You aren't allowed!");
    },
    deletePosting: async (parent, { _id }, context) => {
      const postToBeDeleted = await Posting.findById(_id);
      if (context.user._id === postToBeDeleted.owners_id.toString()) {
        return Posting.findByIdAndDelete({ _id });
      }
      throw new AuthenticationError("You can't do that! You aren't allowed!");
    },
    addComment: async (parent, { content, creator, postingId }, context) => {
      // const comment = new Comment({ content, creator })

      const comment = await Comment.create({ content, creator })

      await Posting.findByIdAndUpdate(postingId, { $push: { comments: comment } })

      return comment;
    },
    updateComment: async (parent, { _id, content }, context) => {
      const commentToBeUpdated = await Comment.findById(_id);

      if (
        context.user &&
        context.user._id === commentToBeUpdated.creator.toString()
      ) {
        return Comment.findByIdAndUpdate(_id, { content }, { new: true });
      }
      throw new AuthenticationError("You can't do that! You aren't allowed!");
    },
    deleteComment: async (parent, { _id }, context) => {
      const commentToBeDeleted = await Comment.findById(_id);
      if (
        context.user &&
        context.user._id === commentToBeDeleted.creator.toString()
      ) {
        return Comment.findByIdAndDelete({ _id });
      }
      throw new AuthenticationError("You can't do that! You aren't allowed!");
    },
  },
};
module.exports = resolvers;
