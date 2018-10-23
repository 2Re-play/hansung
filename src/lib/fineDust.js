const request = require('request')
const qs = require('querystring')
const opendata = require('../../config/serviceKey')
/*
    미세먼지 기준
    0~30 좋음
    30~80 보통
    80~150 나쁨
    150~ 매우나쁨
*/

exports.air = async () => {
  let info = {}
  let data
  const str = '서울'
  const encodedStr = qs.escape(str)
  const url = 'http://openapi.airkorea.or.kr/openapi/services/rest/ArpltnInforInqireSvc/getCtprvnMesureSidoLIst'
  const queryParams = `?sidoName=${encodedStr}&searchCondition=DAILY&pageNo=17&numOfRows=1&ServiceKey=${opendata.serviceKey}&_returnType=json` /* 정류소고유번호 */
  const option = {
    uri: url + queryParams,
    method: 'GET',
  }
  await new Promise(async (resolve, reject) => {
    request(option, (e, response, body) => {
      data = body
      data = JSON.parse(body)
      console.log(data)
      const time = data.list[0].dataTime
      const dust = data.list[0].pm10Value
      const tinyDust = data.list[0].pm25Value
      let dustStatus
      let tinyDustStatus
      console.log('zzzzzzzzzz', tinyDust)


      if (dust < 30) dustStatus = '좋음😆'
      else if (dust > 30 && dust < 80) dustStatus = '보통🙂'
      else if (dust > 80 && dust < 150) dustStatus = '나쁨😫'
      else if (dust > 150) dustStatus = '매우나쁨😡'

      if (tinyDust < 15) tinyDustStatus = '좋음😆'
      else if (tinyDust > 15 && tinyDust < 35) tinyDustStatus = '보통🙂'
      else if (tinyDust > 35 && tinyDust < 75) tinyDustStatus = '나쁨😫'
      else tinyDustStatus = '매우나쁨😡'

      info = {
        time,
        dust,
        dustStatus,
        tinyDust,
        tinyDustStatus,
      }
      console.log(info)
      if (e) reject(e)
      else resolve(info)
    })
  })
  return info
}
