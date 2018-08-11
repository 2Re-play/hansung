const request = require('request')
const cheerio = require('cheerio')
const opendata = require('../../config/serviceKey')

exports.busData = async (arsId) => {
  let busInfo
  console.log('잘 들어온다', arsId[0].bus_arsId)
  const url = 'http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid'
  const queryParams = `?ServiceKey=${opendata.serviceKey}&arsId=${arsId[0].bus_arsId}` /* 정류소고유번호 */    
  const option = {
    uri: url + queryParams,
    method: 'GET',
  }
  await new Promise(async (resolve, reject) => {
    request(option, (e, response, body) => {
      const $ = cheerio.load(body, {
        decodeEntities: false,
      })
      $('itemList').each(function () {
        const time1 = $(this).find('arrmsg1').text()
        const time2 = $(this).find('arrmsg2').text()
        const busNum = $(this).find('rtNm').text()
        busInfo = {
          time1,
          time2,
          busNum,
        }
        if (e) reject(e)
        else resolve(busInfo)
        console.log(busInfo)
      })
    })
  })
  return busInfo
}


/*
    창신역 - > 한성대 후문
        종로 03번
        창신쌍용1단지, 종로센트레빌 아파트 정류장(01844)
    한성대 후문 -> 창신역
        종로 03번
        창신쌍용2단지, 한성대후문(01524)
    한성대입구역 -> 한성대
        성북 02번
        삼선교 2번출구 정류장 (08718)
    한성대 정문 -> 삼선교, 성북문화원 정류장
        성북02번
        한성대 정문(08459)
*/
