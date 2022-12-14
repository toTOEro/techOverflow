const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");

const generateAvatar = () => {
  let rng = Math.floor(Math.random() * 100000)
  return `https://avatars.dicebear.com/api/bottts/${rng}.svg`
}

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  avatar: {
    type: String,
    default: generateAvatar(),
  }
});

userSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.virtual("postings", {
  ref: "Posting",
  localField: "_id",
  foreignField: "owners_id",
});

const User = mongoose.model("User", userSchema);

module.exports = User;
