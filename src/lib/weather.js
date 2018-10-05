const request = require('request')
const cheerio = require('cheerio')

exports.weatherData = async () => {
  let data
  let result = []
  const url = 'http://www.kma.go.kr/wid/queryDFSRSS.jsp?zone=1129055500'
  const option = {
    uri: url,
    method: 'GET',
  }
  await new Promise(async (resolve, reject) => {
    await request(option, (e, response, body) => {
      const $ = cheerio.load(body)
      $('body').find('data').each(function () {
        const day = $(this).find('day').text().trim()
        // 날짜 (오늘, 내일, 모래)
        const hour = $(this).find('hour').text().trim()
        // 현재온도
        const temp = $(this).find('temp').text().trim()
        // 날씨 한국어( ① 맑음, ② 구름 조금, ③ 구름 많음, ④ 흐림, ⑤ 비, ⑥ 눈/비, ⑦ 눈)
        const wfKor = $(this).find('wfKor').text().trim()
        // 강수 확률
        const pop = $(this).find('pop').text().trim()
        // 풍속
        const ws = $(this).find('ws').text().trim()
        // 습도
        const reh = $(this).find('reh').text().trim()
        if (day === '0') {
          data = {
            day,
            hour,
            temp,
            wfKor,
            pop,
            ws,
            reh,
          }
          result.push(data)
        } else return


        if (e) reject(e)
        else resolve(result)

      })
    })
  })
  return result
}
