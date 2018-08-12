const commonButtons = require('../dao/commonButtons')
const dbConnection = require('../lib/dbConnection')
const busData = require('../lib/arriveBus')
const mainButtons = require('../dao/mainButtons')
/*
    창신역 - > 한성대 후문
        종로 03번
        창신쌍용1단지, 종로센트레빌 아파트 정류장(01844)
    한성대 후문 -> 창신역
        종로 03번
        창신쌍용2단지, 한성대후문(01524)
    한성대입구역 -> 한성대
        성북 02번
        삼선교 2번출구 정류장 (08718)
    한성대 정문 -> 삼선교, 성북문화원 정류장
        성북02번
        한성대 정문(08459)
    */

// 최상위 버튼 선택 
exports.selectMessage = async (content, err) => {
  let result 
  await new Promise(async (resolve, reject) => {
    const connection = await dbConnection()
    if (content === '학생식당 메뉴') result = await selectStore(connection)
    else if (content === '셔틀버스 시간') result = await commonButtons.season(connection)
    else if (content === '학 기 중') result = await shuttleBus(connection, content)
    else if (content === '방 학 중') result = await shuttleBus(connection, content)
    else if (content === '마을버스 시간')result = await commonButtons.busKind(connection)
    else if (content === '한성대입구역 -> 한성대') result = await busInfo2(connection, content)
    else if (content === '한성대 정문 -> 삼선교, 성북문화원 정류장') result = await busInfo2(connection, content)
    else if (content === '창신역 -> 한성대 후문') result = await busInfo1(connection, content)
    else if (content === '한성대 후문 -> 창신역') result = await busInfo1(connection, content)
    else if (content === '한성대 미세먼지') result = await commonButtons.storeName(connection)
    else if (content === 'ROll&Noodles') result = await menuList(content)
    else if (content === 'The bab') result = await menuList(content)
    else if (content === '처음으로') result = await mainButtons.main(connection)
    else if (err) reject(err)
    resolve(result)
  })
  return result
}
// 학생식당  디비
const selectStore = async (connection) => {
  try {
    const result = await commonButtons.storeName(connection)
    result.push('처음으로')
    console.log(result)
    return result
  } catch (e) {
    console.log(e.message)
    return e.message
  } finally {
    connection.release()
  }
}
// 메뉴리스트 디비
const menuList = async (content) => {
  const connection = await dbConnection()
  try {
    const info = {
      data1: await commonButtons.menuName(connection, content),
      data2: await commonButtons.storeName(connection),
    }
    info.data2.push('처음으로')
    console.log(info)
    return info
  } catch (e) {
    console.log(e.message)
    return e.message
  } finally {
    connection.release()
  }
}

// 셔틀버스
const shuttleBus = async (connection, content) => {
  try {
    const info = {
      data1: await commonButtons.shuttle(connection, content),
      data2: await commonButtons.season(connection),
    }
    console.log(info)
    return info
  } catch (e) {
    console.log(e.message)
    return e.message
  } finally {
    connection.release()
  }
}

// // 시즌
// const season = async (connection) => {
//   try {
//     const result = await commonButtons.season(connection)
//     result.push('처음으로')
//     console.log(result)
//     return result
//   } catch (e) {
//     console.log(e.message)
//     return e.message
//   } finally {
//     connection.release()
//   }
// }

// 시즌
const busInfo1 = async (connection, content) => {
  try {  
    const result1 = await commonButtons.busId(connection, content)
    const bus = await busData.busData1(result1)
    const buttons = await commonButtons.busKind(connection)
   
    const data = {
      bus,
      buttons,
    }
    return data
  } catch (e) {
    console.log(e.message)
    return e.message
  } finally {
    connection.release()
  }
}

const busInfo2 = async (connection, content) => {
  try {  
    const result1 = await commonButtons.busId(connection, content)
    const bus = await busData.busData2(result1)
    const buttons = await commonButtons.busKind(connection)
   
    const data = {
      bus,
      buttons,
    }
    return data
  } catch (e) {
    console.log(e.message)
    return e.message
  } finally {
    connection.release()
  }
}
/*
    창신역 - > 한성대 후문
        종로 03번
        창신쌍용1단지, 종로센트레빌 아파트 정류장(01844)
    한성대 후문 -> 창신역
        종로 03번
        창신쌍용2단지, 한성대후문(01524)
    한성대입구역 -> 한성대
        성북 02번
        삼선교 2번출구 정류장 (08718)
    한성대 정문 -> 삼선교, 성북문화원 정류장
        성북02번
        한성대 정문(08459)
*/
