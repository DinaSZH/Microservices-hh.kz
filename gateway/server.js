const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

//auth-service
app.use("/api/auth/sendmail", proxy("http://localhost:3001"));
app.use("/api/auth/verifycode", proxy("http://localhost:3001"));
app.use("/api/auth/signup", proxy("http://localhost:3001"));
app.use("/api/auth/login", proxy("http://localhost:3001"));


//common-service
app.use("/api/employment-types", proxy("http://localhost:3002"));
app.use("/api/region/countries", proxy("http://localhost:3002"));
app.use("/api/region/cities", proxy("http://localhost:3002"));
app.use("/api/skills", proxy("http://localhost:3002"));
app.use("/api/skills/:key", proxy("http://localhost:3002"));



app.listen(3000, () => {
    console.log("Gateway is listening on port 3000");
  });