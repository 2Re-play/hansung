const mysql = require('promise-mysql')
const dbpool = require('../../config/dbPool')

const pool = mysql.createPool(dbpool)

module.exports = {
  getConnection() {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err)
          console.log(err)
        } else {
          resolve(connection)
        }
      })
    })
  },
}
