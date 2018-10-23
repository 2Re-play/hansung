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

// 미세먼지 응답메시지
const fineDustRespondJson = (message, obj, obj2, res, status) => {

  console.log(status)
  res
    .status(status)
    .json({
      message: {
        text: `${message}\n미세먼지 농도: ${obj.dust}㎍/㎥ (${obj.dustStatus})\n초미세먼지 농도: ${obj.tinyDust}㎍/㎥ (${obj.tinyDustStatus})\n ${obj.time}기준`, // 수정
      },
      keyboard: {
        type: 'buttons',
        buttons: _.isEmpty(obj2) ? [] : obj2,
      },
    })
}

const libRespondJson = (message, obj, res, status) => {

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

const libStatusRespondJson = (message, obj, obj2, obj3, res, status) => {

  console.log(status)
  res
    .status(status)
    .json({
      message: {
        text: `${message}\n\n 총 좌석 : ${obj.total} \n 사용 좌석 : ${obj.desk}\n 잔여 좌석 : ${obj.remainder}`, // 수정
        message_button: {
          label: message,
          url: obj3.address,
        },
      },
      keyboard: {
        type: 'buttons',
        buttons: _.isEmpty(obj2) ? [] : obj2,
      },
    })
}


// 미세먼지 응답메시지
const weatherRespondJson = (message, obj, obj2, res, status) => {

  console.log(status)
  res
    .status(status)
    .json({
      message: {
        text: `${message}\n 날씨 : ${obj.wfKor} \n 기온 : ${obj.temp}°C \n 강수확률 : ${obj.pop}% \n 습도 : ${obj.reh}% `, // 수정
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
  fineDustRespondJson,
  libRespondJson,
  libStatusRespondJson,
  weatherRespondJson,
}
