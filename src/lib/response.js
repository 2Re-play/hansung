const _ = require('lodash')
// Home Keyboard API
const first_respondJson = (obj, res, status) => {

  console.log(status)
  res
    .status(status)
    .json({
      type: 'buttons',
      buttons: _.isEmpty(obj) ? [] : obj,
    })

}
// store_name 메뉴 버튼 선택
const storename_respondJson = (message, obj, res, status) => {

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
const backTofirst_respondJson = (message, obj, res, status) => {

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
const menulist_respondJson = (message, obj, obj2, res, status) => {

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

const out_respondJson = (message, res, status) => {
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
  
module.exports = {  
  first_respondJson,
  out_respondJson,
  storename_respondJson,
  menulist_respondJson,
  backTofirst_respondJson,
  respondOnError,
}
