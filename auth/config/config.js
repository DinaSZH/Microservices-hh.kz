// config.js
const fs = require('fs');
const path = require('path')

module.exports = {
  development: {
    username: "authadmin",
    password: "authroot",
    database: "hh_auth",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: "doadmin",
    password: "AVNS_r2qG_PlxwZX4Zf7y3_9",
    database: "defaultdb",
    host: "db-postgresql-sgp1-18324-do-user-14539456-0.b.db.ondigitalocean.com",
    dialect: "postgres",
    port: 25060,
    dialectOptions: {
      ssl: {
        ca: fs.readFileSync(path.resolve("config", "ca-certificate.crt"))
      }
    }
  },
};
