const { out_respondJson, respondOnError } = require('../lib/response')


// 사용자가 채팅방을 나갔을 경우
exports.out_chat = async (req, res) => {
  const { user_key } = req.params
  try {
    out_respondJson('SUCCESS', res, 200)
  } catch (e) {
    respondOnError(e.message, res, 500)
  } finally {
    console.log(user_key, ' 가 채팅방을 나감')
  }
}
