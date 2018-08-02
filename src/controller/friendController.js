const { out_respondJson, respondOnError } = require('../lib/response')


// 사용자가 친구삭제 했을 경우
exports.delete_friend = async (req, res) => {
  const { user_key } = req.params
  try {
    out_respondJson('SUCCESS', res, 200)
  } catch (e) {
    respondOnError(e.message, res, 500)
  } finally {
    console.log(user_key, ' 가 차단했음')
  }
}
// 사용자가 친구추가 했을 경우
exports.plus_friend = async (req, res) => {
  const { user_key } = req.body
  try {
    out_respondJson('SUCCESS', res, 200)
  } catch (e) {
    respondOnError(e.message, res, 500)
  } finally {
    console.log(user_key, ' 가 친구추가함')
  }
}
