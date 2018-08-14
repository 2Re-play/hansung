// 특정식당 메뉴 리스트
// SELECT CONCAT( menu,' : ',price) AS packaging FROM kakao.restraurant WHERE store_name = ?
exports.menuName = (connection, content) => {
  return new Promise((resolve, reject) => {
    const menuList = []
    console.log('content', content)
    const Query = ` 
    SELECT CONCAT(menu,' : ',price,'\n') as packaging FROM restraurant WHERE store_name = '${content}'
    `
    connection.query(Query, (err, result) => {
      console.log(Query)
      for ( let i in result) {
        menuList.push(result[i].packaging)
      }
      console.log(menuList)
      err && reject(err)
      resolve(menuList)
    })
  })
} 

// 식당 리스트
exports.storeName = (connection) => {
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
// SELECT from_to, CONCAT('\n',time,'    ', running_time,'  ', datail,'\n' ) as packaging FROM shuttleBus WHERE season = '학 기 중' 
// 셔틀버스 운행시간
exports.shuttle = (connection, content) => {
  return new Promise((resolve, reject) => {
    const shuttleBus = []
    const Query = ` 
    SELECT CONCAT(from_to,'\n',time,'    ', running_time,'  ', datail,'\n' ) as packaging FROM shuttle_bus WHERE season = '${content}' 
    `
    connection.query(Query, (err, result) => {
      for (const i in result) {
        shuttleBus.push(result[i].packaging)
      }
      console.log(shuttleBus)
      err && reject(err)
      resolve(shuttleBus)
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

// 마을버스 arsId 검색
exports.busId = (connection, content) => {
  return new Promise((resolve, reject) => {
    const Query = ` 
    SELECT bus_arsId FROM village_bus WHERE bus_path = '${content}'
    `
    connection.query(Query, (err, result) => {
      console.log(result)
      err && reject(err)
      resolve(result)
    })
  })
} 

// 버스 리스트 버튼 검색
// SELECT bus_path FROM village_bus;
exports.busKind = (connection) => {
  return new Promise((resolve, reject) => {
    const busKind = []
    const Query = ` 
    SELECT bus_path FROM village_bus
    `
    connection.query(Query, (err, result) => {
      for (const i in result) {
        busKind.push(result[i].bus_path)
      }
      console.log(busKind)
      err && reject(err)
      resolve(busKind)
    })
  })
} 
