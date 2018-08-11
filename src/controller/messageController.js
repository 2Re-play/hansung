const message_logic = require('../service/messageService')
const response = require('../lib/response')

// 최상위 버튼 요청들어왔을때
exports.message = async (req, res) => {
  const { content } = req.body
  try { 
    const result = await message_logic.selectMessage(content)
    console.log('xxxxxxxxx', result)
    if (content === '학생식당 메뉴') response.storeNameRespondJson('식당을 선택해주세요.\n', result, res, 200) 
    else if (content === '열람실') response.storeNameRespondJson('열람실 현황입니다.\n', result, res, 200) 
    else if (content === '셔틀버스 시간') response.expectBusRespondJson('가고자 하는 방향을 선택해주세요\n', res, 200)
    else if (content === '한성대입구역 -> 한성대 정문') response.expectBusRespondJson('창신역 -> 한성대 후문 방향 마을버스 도착예정 시간입니다.\n', result.bus, result.buttons, res, 200)
    else if (content === '한성대 정문 -> 삼선교, 한성대입구역') response.expectBusRespondJson('창신역 -> 한성대 후문 방향 마을버스 도착예정 시간입니다.\n', result.bus, result.buttons, res, 200)
    else if (content === '창신역 -> 한성대 후문') response.expectBusRespondJson('창신역 -> 한성대 후문 방향 마을버스 도착예정 시간입니다.\n', result.bus, result.buttons, res, 200)
    else if (content === '한성대 후문 -> 창신역') response.expectBusRespondJson('창신역 -> 한성대 후문 방향 마을버스 도착예정 시간입니다.\n', result.bus, result.buttons, res, 200)
    else if (content === '학 기 중') response.menuListRespondJson(`${content} 기간의 셔틀버스 운영시간입니다.\n`, result.data1, result.data2, res, 200)
    else if (content === '방     중') response.menuListRespondJson(`${content} 기간의 셔틀버스 운영시간입니다.\n`, result.data1, result.data2, res, 200)
    else if (content === '마을버스 시간') response.storeNameRespondJson('버스경로를 선택해주세요!\n', result, res, 200) 
    else if (content === 'ROll&Noodles') response.menuListRespondJson(`${content}의 메뉴입니다.\n`, result.data1, result.data2, res, 200)
    else if (content === 'The bab') response.menuListRespondJson(`${content}의 메뉴입니다.\n`, result.data1, result.data2, res, 200)
    else if (content === '처음으로') response.backToFirstRespondJson('이용하실 서비스를 선택해주세요!', result, res, 200)
  } catch (e) {
    response.respondOnError(e.message, res, 500)
    console.log(e.message)
  }
}
