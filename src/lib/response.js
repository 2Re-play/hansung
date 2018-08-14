const _ = require('lodash')
// Home Keyboard API
const firstRespondJson = (obj, res, status) => {

  console.log(status)
  res
    .status(status)
    .json({
      type: 'buttons',
      buttons: _.isEmpty(obj) ? [] : obj,
    })

}
// store_name 메뉴 버튼 선택
const storeNameRespondJson = (message, obj, res, status) => {

  console.log(status)
  res
    .status(status)
    .json({
      message: {
        text: message,
      },
      keyboard: {
        type: 'buttons',
        buttons: _.isEmpty(obj) ? [] : obj,
      },
    }) 
}
// store_name 메뉴 버튼 선택
const shuttlBus = (message, obj, res, status) => {

  console.log(status)
  res
    .status(status)
    .json({
      message: {
        text: message,
      },
      keyboard: {
        type: 'buttons',
        buttons: _.isEmpty(obj) ? [] : obj,
      },
    }) 
}
// 처음으로 기능 응답
const backToFirstRespondJson = (message, obj, res, status) => {

  console.log(status)
  res
    .status(status)
    .json({
      message: {
        text: message,
      },
      keyboard: {
        type: 'buttons',
        buttons: _.isEmpty(obj) ? [] : obj,
      },
    }) 
}
// store_name 메뉴 버튼 선택
const menuListRespondJson = (message, obj, obj2, res, status) => {

  console.log(status)
  res
    .status(status)
    .json({
      message: {
        text: `${message}\n${obj}`,
      },
      keyboard: {
        type: 'buttons',
        buttons: _.isEmpty(obj2) ? [] : obj2,
      },
    }) 
}

const outRespondJson = (message, res, status) => {
  console.log(status)
  res
    .status(status)
    .json({
      message,
    })
  
}

const respondOnError = (message, res, status) => {
  console.log(status)

  res
    .status(status)
    .json({
      message,
    })
  
}
  
const expectBusRespondJson = (message, obj, obj2, res, status) => {

  console.log(status)
  res
    .status(status)
    .json({
      message: {
        text: `${message}\n${obj.busNum} : 첫번째 도착버스 ${obj.time1} 두번째 도착버스 : ${obj.time2}`, // 수정
      },
      keyboard: {
        type: 'buttons',
        buttons: _.isEmpty(obj2) ? [] : obj2,
      },
    }) 
}

// store_name 메뉴 버튼 선택
const arriveBuslistRespondJson = (message, obj, res, status) => {

  console.log(status)
  res
    .status(status)
    .json({
      message: {
        text: `${message}\n${obj}`,
      },
      keyboard: {
        type: 'buttons',
        buttons: [
          '한성대입구역 -> 한성대 정문',
          '한성대 정문 -> 삼선교, 한성대입구역',
          '창신역 -> 한성대 후문',
          '한성대 후문 -> 창신역',
          '처음으로',
        ],
      },
    }) 
}

// 미세먼지 응답메시지
const fineDustRespondJson = (message, obj, obj2, res, status) => {

  console.log(status)
  res
    .status(status)
    .json({
      message: {
        text: `${message}\n미세먼지 농도: ${obj.dust}㎍/㎥ (${obj.dustStatus})\n ${obj.time}기준`, // 수정
      },
      keyboard: {
        type: 'buttons',
        buttons: _.isEmpty(obj2) ? [] : obj2,
      },
    })
}


module.exports = {  
  firstRespondJson,
  outRespondJson,
  storeNameRespondJson,
  shuttlBus,
  menuListRespondJson,
  backToFirstRespondJson,
  respondOnError,
  expectBusRespondJson,
  arriveBuslistRespondJson,
  fineDustRespondJson,
}
