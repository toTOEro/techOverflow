const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("./User");

const postingSchema = new Schema(
  {
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
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    registered: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        unique: true
      },
    ],
  },

  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

postingSchema.virtual("ownersId").get(function () {
  return this.owners_id.length;


});
const Posting = mongoose.model("Posting", postingSchema);

module.exports = Posting;
