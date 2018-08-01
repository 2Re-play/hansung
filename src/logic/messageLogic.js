const common_buttons = require('../models/common_buttons')
const dbConnection = require('../lib/dbConnection')
const main_buttons = require('../models/main_buttons')

// 최상위 버튼 선택 
exports.selectmessage = async (content, err) => {
  let result 
  await new Promise(async (resolve, reject) => {
    const connection = await dbConnection()
    if (content === '학생식당 메뉴') result = await selectstore()
    else if (content === '열람실') result = await common_buttons.storename(connection)
    else if (content === '버스 도착시간')result = await common_buttons.storename(connection)
    else if (content === '학교날씨') result = await common_buttons.storename(connection)
    else if (content === 'ROll&Noodles') result = await menu_list(content)
    else if (content === 'The bab') result = await menu_list(content)
    else if (content === '처음으로') result = await main_buttons.main(connection)
    else if (err) reject(err)
    resolve(result)
    connection.release()
  })
  return result
}
// 학생식당  디비
const selectstore = async () => {
  const connection = await dbConnection()
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
    const result = await common_buttons.menuname(connection, content)
    result.push('처음으로')
    return result
  } catch (e) {
    console.log(e.message)
    return e.message
  } finally {
    connection.release()
  }
}
