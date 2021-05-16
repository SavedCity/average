// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const moment = require("moment");
const session = require("express-session");

// Configuration
const app = express();
require("dotenv").config();
const PORT = process.env.PORT;
const PROJECT3_DB = process.env.PROJECT3_DB;

// Controllers and Middleware
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const articlesController = require("./controllers/articles_controller.js");
app.use("/articles", articlesController);
const sessionsController = require("./controllers/sessions_controller.js");
app.use("/sessions", sessionsController);
const usersController = require("./controllers/users_controller.js");
app.use("/users", usersController);

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
