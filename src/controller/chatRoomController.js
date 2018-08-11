const response = require('../lib/response')


// 사용자가 채팅방을 나갔을 경우
exports.outChat = async (req, res) => {
  const { user_key } = req.params
  try {
    response.outRespondJson('SUCCESS', res, 200)
  } catch (e) {
    response.respondOnError(e.message, res, 500)
  } finally {
    console.log(user_key, ' 가 채팅방을 나감')
  }
}
