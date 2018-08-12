// 최초 로그인시 메인버튼
exports.main = (connection) => {
  return new Promise((resolve, reject) => {
    const menu = []
    const Query = ` 
    SELECT buttons_name FROM Mainbuttons
    `
    connection.query(Query, (err, result) => {
      for (const i in result) {
        menu.push(result[i].buttons_name)
      }
      console.log(menu)
      err && reject(err)
      resolve(menu)
    })
    connection.release()
  })
}
