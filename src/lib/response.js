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

const message_respondJson = (obj, res, status) => {
  console.log(status)
  res
    .status(status)
    .json({
      message: {
        text: obj,
        message_button: {
          label: '메뉴 자세히 보기',
          url: 'http://www.hansung.ac.kr/web/www/life_03_01_t1',
        },
      },
    //   keyboard: {
    //     type: 'buttons',
    //     buttons: day,
    //   },
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
  message_respondJson,
  storename_respondJson,
  respondOnError,
}
