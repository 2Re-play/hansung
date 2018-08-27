
const commonButtons = require('../dao/commonButtons')
const { getConnection } = require('../lib/dbConnection')
const busData = require('../lib/arriveBus')
const mainButtons = require('../dao/mainButtons')
const fineDust = require('../lib/fineDust')
const lib = require('../lib/librarySeat')


// 최상위 버튼 선택 
exports.selectMessage = async (content, err) => {
  let result 
  await new Promise(async (resolve, reject) => {

    const connection = await getConnection()

    if (content === '학생식당 메뉴') result = await selectStore(connection)
    else if (content === '셔틀버스 시간') result = await season(connection)
    else if (content === '학 기 중') result = await shuttleBus(connection, content)
    else if (content === '방 학 중') result = await shuttleBus(connection, content)
    else if (content === '마을버스 시간')result = await busKind(connection)
    else if (content === '한성대입구역 -> 한성대 정문') result = await busInfo2(connection, content)
    else if (content === '한성대 정문 -> 삼선교, 성북문화원 정류장') result = await busInfo2(connection, content)
    else if (content === '창신역 -> 한성대 후문') result = await busInfo1(connection, content)
    else if (content === '한성대 후문 -> 창신역,동묘역,동대문역') result = await busInfo1(connection, content)
    else if (content === '동묘역 -> 한성대 후문') result = await busInfo1(connection, content)
    else if (content === '동대문역 -> 한성대 후문') result = await busInfo3(connection, content)
    else if (content === '한성대 미세먼지') result = await air(connection)
    else if (content === 'ROll&Noodles') result = await menuList(content)
    else if (content === 'The bab') result = await menuList(content)
    else if (content === '열람실 좌석현황') result = await libName(connection)
    else if (content === '제1열람실 (3층)') result = await libStatus(connection, content)
    else if (content === '제2열람실 (4층)') result = await libStatus(connection, content)
    else if (content === '우촌관열람실(101호)') result = await libStatus(connection, content)
    else if (content === '처음으로') result = await main(connection)
    else if (err) reject(err)
    resolve(result)
  })
  return result
}


const main = async (connection) => {
  try {
    const result = await mainButtons.main(connection)
    return result
  } catch (e) {
    console.log(e.message)
    return e.message
  } finally {
    connection.release()
  }
}
// 학생식당  디비
const selectStore = async (connection) => {
  try {
    const result = await commonButtons.storeName(connection)
    result.push('처음으로')
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
  const connection = await getConnection()
  try {
    let data1 = ''
    const temp = await commonButtons.menuName(connection, content)
    const data2 = await commonButtons.storeName(connection)
    temp.forEach(item => {
      data1 += item
    })
    const info = {
      data1,
      data2,
    }
    info.data2.push('처음으로')
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
    let data1 = ''
    const temp = await commonButtons.shuttle(connection, content)
    const data2 = await commonButtons.season(connection)
    temp.forEach(item => {
      data1 += item
    })
    const info = {
      data1,
      data2,
    }
    info.data2.push('처음으로')
    return info
  } catch (e) {
    console.log(e.message)
    return e.message
  } finally {
    connection.release()
  }
}

// 시즌
const season = async (connection) => {
  try {
    const result = await commonButtons.season(connection)
    result.push('처음으로')
    return result
  } catch (e) {
    console.log(e.message)
    return e.message
  } finally {
    connection.release()
  }
}

const busKind = async (connection) => {
  try {  
    const result = await commonButtons.busKind(connection)
    result.push('처음으로')
    return result
  } catch (e) {
    console.log(e.message)
    return e.message
  } finally {
    connection.release()
  }
}

// 시즌
const busInfo1 = async (connection, content) => {
  try {  
    const result1 = await commonButtons.busId(connection, content)
    const bus = await busData.busData1(result1)
    const buttons = await commonButtons.busKind(connection)
    buttons.push('처음으로')

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
    buttons.push('처음으로')

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

const busInfo3 = async (connection, content) => {
  try {
    const result1 = await commonButtons.busId(connection, content)
    const bus = await busData.busData3(result1)
    const buttons = await commonButtons.busKind(connection)
    buttons.push('처음으로')

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

// 한성대 미세먼지
const air = async (connection) => {
  try {
    const data = await mainButtons.main(connection)
    const dust = await fineDust.air()
    const result = {
      data,
      dust,
    }
    return result
  } catch (e) {
    console.log(e.message)
    return e.message
  } finally {
    connection.release()
  }
}

// 열람실 이름
const libName = async (connection) => {
  try {
    const buttons = await commonButtons.lib(connection)
    buttons.push('처음으로')

    const data = {
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

// 열람실 현황

const libStatus = async (connection, content) => {
  try {
    const result1 = await commonButtons.libDetail(connection, content)
    const libData = await lib.libStatus(result1[0])
    const buttons = await commonButtons.lib(connection)
    buttons.push('처음으로')
    const data = {
      libData,
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
