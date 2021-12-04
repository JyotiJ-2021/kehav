const { createPool } = require("mysql");

const pool = createPool({
  host: "localhost",
  database: "keshavsamvad_db",
  user: "keshavsamvad_db",
  password: "iFfqGTQDI2B91mMt@WR%gtr%767G",
  port: 3306,
  debug: false,
});

pool.getConnection((err) => {
  if (err) {
    console.log("Error occurs while connecting with db!");
  }
  console.log("connected with db");
});

const executeQuery = (query, params) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, params, (err, data) => {
        if (err) {
          console.log("error ");
          reject(err);
        } else {
          resolve({ Success: true, Message: "fetching details", Data: data });
        }
      });
    } catch (err) {
      reject({ Success: false, Message: "Data are not fetched", Data: data });
    }
  });
};

const executeAddQuery = (query, params) => {
  return new Promise((resolve, reject) => {
    try {
      pool.query(query, params, (err, data) => {
        if (err) {
          console.log("error ");
          reject(err);
        } else {
          resolve({ Success: true, Message: "Data Inserted Successfully" });
        }
      });
    } catch (err) {
      reject({ Success: false, Message: "Data not inserted successfully" });
    }
  });
};

module.exports = { executeQuery, executeAddQuery };
