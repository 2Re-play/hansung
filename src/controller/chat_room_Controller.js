const dbConnection = require('../lib/dbConnection')
const main_buttons = require('../models/main_buttons')
const { first_respondJson, out_respondJson, respondOnError } = require('../lib/response')


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
/*
// 사용자가 친구추가 했을 경우
router.post('/friend', function(req, res){
  var user_key = req.body.user_key;

  res.status(200).json();
});

// 사용자가 친구삭제 했을 경우
router.delete('/friend/:user_key', function(req, res){
  var user_key = req.params.user_key;
  //console.log(user_key + "가 친구 삭제");

  res.status(200).json();
});

// 사용자가 채팅방을 나갔을 경우
router.delete('/chat_room/:user_key', function(req, res){
  var user_key = req.params.user_key;
  //console.log(user_key + "가 채팅방 나감");

  res.status(200).json();
});
*/
