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
  let info
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
    await request(option, async (e, response, body) => {
      request(option, function (e, response, body) {
        data = body
        data = JSON.parse(body)
        const time = data.list[0].dataTime
        const dust = data.list[0].pm10Value
        let dustStatus

        if (dust < 30) dustStatus = '좋음😆'
        else if (dust > 30 && dust < 80) dustStatus = '보통🙂'
        else if (dust > 80 && dust < 150) dustStatus = '나쁨😫'
        else if (dust > 150) dustStatus = '매우나쁨😡'
        info = {
          time,
          dust,
          dustStatus,
        }
        console.log(info)
        if (e) reject(e)
        else resolve(info)
      })
    })
  })
  return info
}
