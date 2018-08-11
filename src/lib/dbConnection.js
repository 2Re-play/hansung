const mysql = require('promise-mysql')
const dbpool = require('../../config/dbPool')

module.exports = function dbConnection() {
  return new Promise((resolve, reject) => {
    const pool = mysql.createPool(dbpool)
    pool.getConnection((err, connection) => {
      err && reject(err)
      resolve(connection)
    })
  })
}
