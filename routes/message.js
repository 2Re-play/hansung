var express = require('express');
var router = express.Router();

router.post('/message', function(req, res){
    const content = req.body.content;

    console.log('입력된 메세지 : ',content);
    var send = {};
  switch(content){
      case "학생식당 메뉴" : 
      send = {
        "message": {
          "text": "한성대학교 학생식당 메뉴입니다.",
          "photo": {
            "url": "https://d1nby6wa4kk2z9.cloudfront.net/food.png",
            "width": 640,
            "height": 480
          },
          "message_button": {
            "label": "링크로 이동하기",
            "url": "http://www.hansung.ac.kr/web/www/life_03_01_t1"
          }
        },
        "keyboard": {
          "type": "buttons",
          "buttons": [
            "처음으로"
          ]
        }
      }
      break;
      case "열람실" : 
        send = {
            "message": {
                "text": "서비스 준비 중 입니다."
            },
            "keyboard": {
                "type": "buttons",
                "buttons": [
                    "처음으로"
                ]
            }
        }
        break;
        case "버스 도착시간" : 
        ssend = {
            "message": {
                "text": "서비스 준비 중 입니다."
            },
            "keyboard": {
                "type": "buttons",
                "buttons": [
                    "처음으로"
                ]
            }
        }
        break;
        case "학교날씨" : 
        send = {
            "message": {
                "text": "서비스 준비 중 입니다."
            },
            "keyboard": {
                "type": "buttons",
                "buttons": [
                    "처음으로"
                ]
            }
        }
        break;

  }
    res.json(send);
  })
  
  module.exports = router;
  