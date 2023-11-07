const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const route = require("./routes/route");
const { port, database } = require("./config/keys").host;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
mongoose
  .connect(database, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Mongodb is conected"))
  .catch((err) => console.log(err));
app.use("/api", route);
app.listen(port, () => {
  console.log(`Server is connected on ${port}`);
});
