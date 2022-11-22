const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require('./User')

const postingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  date_created: {
    type: Date,
    default: Date.now,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  registered: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const Posting = mongoose.model("Posting", postingSchema);

module.exports = Posting;
