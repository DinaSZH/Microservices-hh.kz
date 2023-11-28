const fs = require('fs');
const path = require('path');

const {DB_ADMIN, DB_PASSWORD} = require('../env-config')


module.exports = {
  development: {
    username: DB_ADMIN,
    password:DB_PASSWORD, 
    database: "hh_common_service",
    host: "127.0.0.1",
    dialect: "postgres",
    port: 5433,
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
        ca: fs.readFileSync(path.resolve("config", "ca-certificate.crt")),
      },
    },
  },
};
