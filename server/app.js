const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const todo = require("./route/todo.js");
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "100mb", extended: true }));
app.use(cors());
app.use(express.static("images"));

const PORT = 8000;
const CONNECTION_URL =
  "mongodb+srv://anirban00537:anirban00537@cluster0.rsvp4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully");
    app.listen(PORT, () => {
      console.log("Connected successfully at localhost:8000");
    });

    app.use("/", todo);
  });
