const response = require('../lib/response')


// 사용자가 친구삭제 했을 경우
exports.deleteFriend = async (req, res) => {
  const { user_key } = req.params
  try {
    response.outRespondJson('SUCCESS', res, 200)
  } catch (e) {
    response.respondOnError(e.message, res, 500)
  } finally {
    console.log(user_key, ' 가 차단했음')
  }
}
// 사용자가 친구추가 했을 경우
exports.plusFriend = async (req, res) => {
  const { user_key } = req.body
  try {
    response.outRespondJson('SUCCESS', res, 200)
  } catch (e) {
    response.respondOnError(e.message, res, 500)
  } finally {
    console.log(user_key, ' 가 친구추가함')
  }
}
