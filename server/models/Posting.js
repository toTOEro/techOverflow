const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("./User");

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
  owners_id: {
    type: String,
    required: true,
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],
});

const Posting = mongoose.model("Posting", postingSchema);

module.exports = Posting;
