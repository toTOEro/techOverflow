const db = require("./connection");

const { User, Posting, Comment } = require("../models");

db.once("open", async () => {
  //Comment Section
  await Comment.deleteMany();

  const comment = await Comment.insertMany([
    {
      content: "that's such a cool idea! Count me in! What's your email?",
      date_created: "June 5, 2009",
    },
    {
      content: "wouldn't it just be easier to use your mouse? just saying.",
      date_created: "May 23, 2020",
    },
    {
      content:
        "this sounds illegal. users would be able to use their phones to intercept rf traffic from cars fobs and break into someone's car. I'M IN!",
      date_created: "January 21, 2022",
    },
  ]);

  console.log("comments seeded");

  //Postings Section
  await Posting.deleteMany();

  const posting = await Posting.insertMany([
    {
      title: "Club Penguin Meta-verse",
      description: "Let's create a metaverse version of club penguin!",
      date_created: "April 20, 2009",
      comments: [comment[0]._id],
      owner: null
    },
    {
      title: "HackRF Mobile App",
      description:
        "The purpose of this project is to create a mobile app version of the linux software for HackRF. This would allow capture the flag events to be more mobile during a Hack-a-thon",
      date_created: "January 21, 2022",
      comment: [comment[2]._id],
      owner: null

    },
    {
      title: "Drawio Hack",
      description:
        "I want to code a hack where I can use my voice to create CAD drawings.",
      date_created: "May 5, 2020",
      comment: [comment[1]._id],
      owner: null

    },
  ]);

  console.log("postings seeded");

  //User Section
  await User.deleteMany();

  await User.create({
    firstName: "Hector",
    lastName: "De La Cruz",
    email: "hbomb@dabomb.com",
    password: "test1234",
    postings: [posting[1]._id],
  });

  await User.create({
    firstName: "Anthony",
    lastName: "To",
    email: "ToDaMoon@totoro.com",
    password: "test1234",
    postings: [posting[0]._id],
  });

  await User.create({
    firstName: "Margot",
    lastName: "Gruen Cooper",
    email: "iamGruen@treespot.com",
    password: "test1234",
    postings: [posting[2]._id],
  });

  console.log("users seeded");

  process.exit();
});
