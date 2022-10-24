const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const user = require("./routes/user");
const post = require("./routes/post");
const comment = require("./routes/comment");
const like = require("./routes/like");
const follow = require("./routes/follow");
const scrap = require("./routes/scrap");

const app = express();

const PORT = process.env.PORT || 3060;

mongoose
  .connect(
    "mongodb+srv://HeetaeChae:1234@cluster0.4sz9uja.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("mongoDB is connected"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "https://project-sns-app-frontend-35sx1dc36-heetaechae.vercel.app/",
    credentials: true,
  })
);
app.use("/", express.static("./public"));

app.use("/api/user", user);
app.use("/api/post", post);
app.use("/api/comment", comment);
app.use("/api/like", like);
app.use("/api/follow", follow);
app.use("/api/scrap", scrap);

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
