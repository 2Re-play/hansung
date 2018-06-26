const pool = require('../config/dbPool');
const food = require('./restaurant_buttons')

function bridge(content, callback){
    if(content === "학생식당 메뉴"){
        food.storename(callback,function(err, result){
           callback(null,result);
        })
    }
    else if(content === "셔틀버스 시간"){
        
    }
    else if(content === "마을버스 시간"){

    }
    else if(content === "한성대 미세먼지"){

    }else if(content === "처음으로"){
        const main = require('./main_buttons');
    }else if(content === "Roll&Noodels"){
        food.RN(content, function(err, result){
            callback(null,result);
        });
    }else if(content === "The bab"){
        food.RN(content, function(err, result){
            callback(null, result);
        });
    }else{

    }
}



module.exports.bridge = bridge;