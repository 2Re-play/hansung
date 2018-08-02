const dbConnection = require('../lib/dbConnection')
const main_buttons = require('../models/main_buttons')
const { first_respondJson, respondOnError } = require('../lib/response')


// 사용자가 최초로 채팅방에 들어올 때 키보드 영역에 표시될 자동 응답 명령어 목록 호출
exports.main_buttons = async (req, res) => {
  let main_ = []
  const connection = await dbConnection()
  try {
    main_ = await main_buttons.main(connection)

    console.log('디비 메인 버튼 : ', main_)
    first_respondJson(main_, res, 200)
  } catch (e) {
    respondOnError(e.message, res, 500)
  } finally {
    connection.release()
  }
}
