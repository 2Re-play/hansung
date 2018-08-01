// 특정식당 메뉴 리스트
// SELECT CONCAT( menu,' : ',price) AS packaging FROM kakao.restraurant WHERE store_name = ?
exports.menuname = (connection, content) => {
  return new Promise((resolve, reject) => {
    const menu_list = []
    console.log('content', content)
    const Query = ` 
    SELECT CONCAT(menu,' : ', price,'\n') as packaging FROM restraurant WHERE store_name = '${content}'
    `
    connection.query(Query, (err, result) => {
      console.log(Query)
      for ( let i in result) {
        menu_list.push(result[i].packaging)
      }
      console.log(menu_list)
      err && reject(err)
      resolve(menu_list)
    })
  })
} 

// 식당 리스트
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
