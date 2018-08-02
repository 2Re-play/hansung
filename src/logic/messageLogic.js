const common_buttons = require('../models/common_buttons')
const dbConnection = require('../lib/dbConnection')
const main_buttons = require('../models/main_buttons')

// 최상위 버튼 선택 
exports.selectmessage = async (content, err) => {
  let result 
  await new Promise(async (resolve, reject) => {
    const connection = await dbConnection()
    if (content === '학생식당 메뉴') result = await selectstore(connection)
    else if (content === '셔틀버스 시간') result = await season(connection)
    else if (content === '학 기 중') result = await shuttle_bus(connection, content)
    else if (content === '방     중') result = await shuttle_bus(connection, content)
    else if (content === '마을버스 시간')result = await common_buttons.storename(connection)
    else if (content === '한성대 미세먼지') result = await common_buttons.storename(connection)
    else if (content === 'ROll&Noodles') result = await menu_list(content)
    else if (content === 'The bab') result = await menu_list(content)
    else if (content === '처음으로') result = await main_buttons.main(connection)
    else if (err) reject(err)
    resolve(result)
  })
  return result
}
// 학생식당  디비
const selectstore = async (connection) => {
  try {
    const result = await common_buttons.storename(connection)
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
const menu_list = async (content) => {
  const connection = await dbConnection()
  try {
    const info = {
      data1: await common_buttons.menuname(connection, content),
      data2: await common_buttons.storename(connection),
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
const shuttle_bus = async (connection, content) => {
  try {
    const info = {
      data1: await common_buttons.shuttle(connection, content),
      data2: await common_buttons.season(connection),
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

// 시즌
const season = async (connection) => {
  try {
    const result = await common_buttons.season(connection)
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
