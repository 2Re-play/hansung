const request = require('request')
/*
    미세먼지 기준
    0~30 좋음
    30~80 보통
    80~150 나쁨
    150~ 매우나쁨
*/

exports.air = async () => {
  let info
  let data
  const url = 'http://113.198.91.9/domianweb/roomview5.asp?room_no=1' // 제 1열람실(3층)
  const option = {
    uri: url,
    method: 'GET',
  }
  await new Promise(async (resolve, reject) => {
    request(option, (e, response, body) => {
      console.log('body', body)
      if (e) {
        reject(e)
      } else {
        resolve(info)
      }
    })
  })
  return info
}
