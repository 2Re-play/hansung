const message_logic = require('../logic/messageLogic')
const { storename_respondJson, menulist_respondJson, respondOnError, first_respondJson } = require('../lib/response')

// 최상위 버튼 요청들어왔을때
exports.message = async (req, res) => {
  const { content } = req.body
  try {
    const result = await message_logic.selectmessage(content)
    if (content === '학생식당 메뉴') storename_respondJson('식당을 선택해주세요.\n', result, res, 200) 
    else if (content === '열람실') storename_respondJson('열람실 현황입니다.\n', result, res, 200) 
    else if (content === '버스 도착시간') storename_respondJson('버스 예상 도착 시간입니다.\n', result, res, 200) 
    else if (content === '학교날씨') storename_respondJson('한성대학교 날씨입니다.\n', result, res, 200) 
    else if (content === 'ROll&Noodles') menulist_respondJson(`${content}의 메뉴입니다.\n`, result, res, 200)
    else if (content === 'The bab') menulist_respondJson(`${content}의 메뉴입니다.\n`, result, res, 200)
    else if (content === '처음으로') first_respondJson(result, res, 200)
  } catch (e) {
    respondOnError(e.message, res, 500)
    console.log(e.message)
  }
}
