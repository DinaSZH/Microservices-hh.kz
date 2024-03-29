const express = require("express");
const logger = require("morgan");
const passport = require('passport');
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(cors())
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(__dirname + "/public"));

app.use(passport.initialize());

// require('./app/passport')

// app.use(require("./app/routes"));
app.use(require("./app/region/routes"));
app.use(require("./app/skills/routes"));
app.use(require("./app/employment-type/routes"));
// app.use(require("./app/languages/routes"));
// app.use(require("./app/resume/routes"));
// app.use(require("./app/specializations/routes"));
// app.use(require("./app/vacancy/routes"));
// app.use(require("./app/applies/routes"));

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(3002, () => {
  console.log("Server is listening on port 3002");
});
