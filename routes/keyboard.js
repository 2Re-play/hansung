var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/keyboard', function(req, res) {
 const data = {
   'type': 'buttons',
   'buttons': ['학생식당 메뉴', '열람실', '버스 도착시간','학교날씨']
 };
 res.json(data);
});



module.exports = router;
