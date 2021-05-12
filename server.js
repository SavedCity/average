// Dependencies
const express = require("express");
const mongoose = require("mongoose");

// Configuration
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const PROJECT3_DB = process.env.PROJECT3_DB;

// Controllers and Middleware
app.use(express.static("public"));
app.use(express.json());
const articlesController = require("./controllers/articles_controller.js");
app.use("/articles", articlesController);

// Listener
app.listen(PORT, () => {
  console.log(`（っ＾▿＾） listening on port ${PORT} ☜(ˆ▿ˆc)`);
});

mongoose.connect(PROJECT3_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

// Error / success
mongoose.connection.on("error", (err) =>
  console.log(
    err.message,
    " is Mongod not running?/Problem with Atlas Connection?"
  )
);
mongoose.connection.on("connected", () => console.log("mongo connected"));
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));
