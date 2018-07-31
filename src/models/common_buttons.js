

// // 식당선택
// function RN(content, callback) {
//   pool.getConnection((err, connection) => {
//     if (err) {
//       res.status(500).send({
//         message: 'database connection error',
//       })
//       connection.release()
//     } else {
//       const sql = 'SELECT menu,price  FROM restraurant WHERE store_name = ?'
//       connection.query(sql, content, (err, result) => {
//         if (err) {
//           res.status(500).send({
//             message: 'mainbuttons select error',
//           })
//           connection.release()
//         } else {
//           let temp 
//           for (let i = 0; i <= result.length; i++) {
//             console.log(temp = `${result[i].menu} :  ${result[i].price}\n`)
//           }
//           const form = `*${content} 메뉴*\n${temp}` 
//           // console.log('temp : ',temp);
//           // console.log('menu : ', menu);
//           const data = {
//             message: {
//               text: form,
//             },
//             keyboard: {
//               type: 'buttons',
//               buttons: [
//                 '처음으로',
//               ],
//             },
//           }
//           callback(null, data)
//           // food.storename(callback,function(err, result){
//           //     callback(null,result);
//           //  })
//           console.log('data')
//           connection.release()
//         }
//       })
//     }
//   })
// }

exports.storename = (connection) => {
  return new Promise((resolve, reject) => {
    const store_name = []
    const Query = ` 
    SELECT DISTINCT store_name FROM restraurant
    `
    connection.query(Query, (err, result) => {
      for (const i in result) {
        store_name.push(result[i].store_name)
      }
      console.log(store_name)
      err && reject(err)
      resolve(store_name)
    })
  })
} 


// module.exports.RN = RN
