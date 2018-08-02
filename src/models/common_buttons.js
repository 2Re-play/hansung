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
// SELECT from_to, CONCAT('\n',time,'    ', running_time,'  ', datail,'\n' ) as packaging FROM shuttle_bus WHERE season = '학 기 중' 
// 셔틀버스 운행시간
exports.shuttle = (connection, content) => {
  return new Promise((resolve, reject) => {
    const shuttle_bus = []
    const Query = ` 
    SELECT CONCAT(from_to,'\n',time,'    ', running_time,'  ', datail,'\n' ) as packaging FROM shuttle_bus WHERE season = '${content}' 
    `
    connection.query(Query, (err, result) => {
      for (const i in result) {
        shuttle_bus.push(result[i].packaging)
      }
      console.log(shuttle_bus)
      err && reject(err)
      resolve(shuttle_bus)
    })
  })
} 
// 셔틀버스 기간
exports.season = (connection) => {
  return new Promise((resolve, reject) => {
    const season = []
    const Query = ` 
    SELECT DISTINCT season FROM shuttle_bus
    `
    connection.query(Query, (err, result) => {
      for (const i in result) {
        season.push(result[i].season)
      }
      console.log(season)
      err && reject(err)
      resolve(season)
    })
  })
} 

// module.exports.RN = RN
