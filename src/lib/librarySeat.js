const request = require('request')
const cheerio = require('cheerio')


exports.libStatus = async (roomId) => {
  let status
  const url = 'http://113.198.91.9/domianweb/roomview5.asp'
  const queryParams = `?room_no=${roomId}` /* 정류소고유번호 */
  const option = {
    uri: url + queryParams,
    method: 'GET',
  }
  await new Promise(async (resolve, reject) => {
    request(option, (e, response, body) => {
      const $ = cheerio.load(body, {
        decodeEntities: false,
      })
      $('body > center > table:nth-child(3) > tbody > tr > td > table > tbody > tr:nth-child(2) > td > table > tbody > tr').each(function () {
        const remainder = $(this).find('td:nth-child(4) > font:nth-child(2) > b').text()
        const desk = $(this).find('td:nth-child(3) > font:nth-child(2) > b').text()
        const total = $(this).find('td:nth-child(2) > font:nth-child(2) > b').text()
        status = {
          total,
          desk,
          remainder,
        }
        if (e) reject(e)
        else resolve(status)
      })
    })
  })
  return status
}
