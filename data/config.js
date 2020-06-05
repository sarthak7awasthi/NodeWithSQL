const mysql = require("mysql");
// Set database connection credentials
const config = {
  host: "localhost",
  user: "username",
  password: "4Moneyin$",
  database: "api"
};
// Create a MySQL pool
const pool = mysql.createPool(config);
// Export the pool
module.exports = pool;
