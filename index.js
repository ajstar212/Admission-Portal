const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://Ajstar212:Iamtheadmin@cluster0.th4j9.mongodb.net/AdmissionCoaching?retryWrites=true&w=majority";

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const middleware = [
  morgan("dev"),
  express.static("public"),
  express.urlencoded({ extended: true }),
  express.json(),
];

app.use(middleware);

app.get("/", (req, res) => {
  res.render("QuestionStart");
});

const PORT = process.env.PORT || 8080;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected");
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((e) => {
    return console.log(e);
  });
