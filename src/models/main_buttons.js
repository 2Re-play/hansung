// 최초 로그인시 메인버튼
exports.main = (connection) => {
  return new Promise((resolve, reject) => {
    const menu = []
    const Query = ` 
    SELECT buttons_name FROM Mainbuttons
    `
    connection.query(Query, (err, result) => {
      for (const i in result) {
        menu.push(result[i].buttons_name)
      }
      console.log(menu)
      err && reject(err)
      resolve(menu)
    })
  })
} 
// function mb(callback) {
//   pool.getConnection((err, connection) => {
//     if (err) {
//       res.status(500).send({
//         message: 'database connection error',
//       })
//       connection.release()
//     } else {
//       const sql = 'SELECT buttons_name FROM Mainbuttons'
//       connection.query(sql, (err, rows, result) => {
//         if (err) {
//           res.status(500).send({
//             message: 'mainbuttons select error',
//           })
//           connection.release()
//         } else {
//           const menu = []
//           for (let i = 0; i < rows.length; i++) {
//             menu.push(rows[i].buttons_name)
//           }
//           callback(null, menu)
//           connection.release()
//         }
//       })
//     }
//   })
// }
