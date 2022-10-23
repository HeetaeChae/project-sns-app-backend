const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const product = require("./routes/product");
const post = require("./routes/post");

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
    origin: true,
    credentials: true,
  })
);
app.use("/", express.static("./public"));

app.use("/api/product", product);
app.use("/api/post", post);

app.listen(PORT, () => {
  console.log(`Server is running in ${PORT}`);
});
