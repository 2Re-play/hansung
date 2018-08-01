const common_buttons = require('../models/common_buttons')
const dbConnection = require('../lib/dbConnection')

// 최상위 버튼 선택 
exports.selectmessage = async (content, err) => {
  let result 
  await new Promise(async (resolve, reject) => {
    const connection = await dbConnection()
    if (content === '학생식당 메뉴') result = await selectstore()
    else if (content === '열람실') result = await common_buttons.storename(connection)
    else if (content === '버스 도착시간')result = await common_buttons.storename(connection)
    else if (content === '학교날씨') result = await common_buttons.storename(connection)
    else if (err) reject(err)
    resolve(result)
    connection.release()
  })
  return result
}

const selectstore = async () => {
  const connection = await dbConnection()
  try {
    const result = await common_buttons.storename(connection)
    return result
  } catch (e) {
    console.log(e.message)
    return e.message
  } finally {
    connection.release()
  }
}
