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

// const selectstore = async (callback) => {
//   const connection = await dbConnection()
//   try {
//     const result = await common_buttons.storename(connection)
//     callback(result)
//   } catch (e) {
//     callback(e.message)
//   } finally {
//     connection.release()
//   }
// }

const selectstore = async () => {
  const menu = []
  const result = await new Promise(async (resolve, reject) => {
    const connection = await dbConnection()
    const temp = await common_buttons.storename(connection)
    for (const i in temp) {
      menu.push(temp[i].store_name)
    }
    connection.release()
    console.log(menu)
    resolve(menu)  
  })
  console.log('result', result)
  return result
}
  
module.exports = {
  selectstore,
}
