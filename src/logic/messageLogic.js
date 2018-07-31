const common_buttons = require('../models/common_buttons')
const dbConnection = require('../lib/dbConnection')

// 최상위 버튼 선택 
exports.selectmessage = async (content, callback) => {
  const connection = await dbConnection()
  try {
    if (content === '학생식당 메뉴') callback(selectstore())
    else if (content === '열람실') callback(await common_buttons.storename(connection))
    else if (content === '버스 도착시간') callback(await common_buttons.storename(connection))
    else if (content === '학교날씨') callback(await common_buttons.storename(connection))
  } catch (e) {
    callback(e.message)
  } finally {
    connection.release()
  }
}

const selectstore = async (callback) => {
  const connection = await dbConnection()
  try {
    const result = await common_buttons.storename(connection)
    callback(result)
  } catch (e) {
    callback(e.message)
  } finally {
    connection.release()
  }
}
