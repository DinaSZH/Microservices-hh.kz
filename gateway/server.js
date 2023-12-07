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

//resume
app.use("/api/resume", proxy("http://localhost:3003") );
app.use("/api/resume", proxy("http://localhost:3003"));
app.use("/api/resume/search", proxy("http://localhost:3003"));
app.use("/api/resume/:id", proxy("http://localhost:3003"));
app.use("/api/resume/:id",proxy("http://localhost:3003"));
app.use("/api/resume", proxy("http://localhost:3003"));

//vacancy
app.use("/api/vacancy",   proxy("http://localhost:3004") );
app.use("/api/vacancy",  proxy("http://localhost:3004") );
app.use("/api/vacancy/search",  proxy("http://localhost:3004") );
app.use("/api/vacancy/:id",  proxy("http://localhost:3004") );
app.use("/api/vacancy/:id",  proxy("http://localhost:3004") );
app.use("/api/vacancy",  proxy("http://localhost:3004") );

//aplies
app.use("/api/applies", proxy("http://localhost:3005"));
app.use("/api/applies/employee", proxy("http://localhost:3005"));
app.use("/api/applies/:id", proxy("http://localhost:3005"));

app.use("/api/applies/accept/employee", proxy("http://localhost:3005"));
app.use("/api/applies/decline/employee", proxy("http://localhost:3005"));

app.use("/api/applies/vacancy/:id", proxy("http://localhost:3005"));



app.listen(8000, () => {
    console.log("Gateway is listening on port 3000");
  });