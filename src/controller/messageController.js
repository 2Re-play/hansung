const message_logic = require('../logic/messageLogic')
const { storename_respondJson, respondOnError } = require('../lib/response')

// 최상위 버튼 요청들어왔을때
exports.message = async (req, res) => {
  const { content } = req.body
  try {
    const result = await message_logic.selectmessage(content)
    console.log('1', result)
    storename_respondJson(result, res, 200) 
  } catch (e) {
    respondOnError(e.message, res, 500)
  }
}
