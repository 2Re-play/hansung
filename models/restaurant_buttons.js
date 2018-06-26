const pool = require('../config/dbPool');

//식당선택
 function RN(content,callback){
    console.log('3')
    pool.getConnection(function(err, connection){
        if(err){
            res.status(500).send({
                message : "database connection error"
            });
            connection.release();
        }else{
            var sql = "SELECT menu,price  FROM restraurant WHERE store_name = ?";
            connection.query(sql,content,function(err,result){
                console.log('result',result);
                var temp1;
                for(let i=0; i<result.length; i++){
                   JSON.stringify( '메뉴 : '+temp1.push(result[i].menu));
                   JSON.stringify( ' 가격 : '+temp1.push(result[i].price));
                }
                console.log(temp1);
                const menu = "*"+content+" 메뉴*\n" + temp1;
                if(err){
                    res.status(500).send({
                        message : "mainbuttons select error"
                    });
                    connection.release();
                }else{
                    // var data = [];
                    // for(var i=0; i<result.buttons[i].length; i++){
                    //     data.push(result.buttons[i]);
                    // }
                    const data = {
                        message : {
                        text : menu
                        },
                        keyboard : {
                            type : "buttons",
                            buttons : [
                                "처음으로"
                            ]
                        }
                      }
                    callback(null,data);
                    // food.storename(callback,function(err, result){
                    //     callback(null,result);
                    //  })
                    console.log('data',)
                          connection.release();
                }
            })
        }
    })
}
//store_name 
function storename(callback){
    pool.getConnection(function(err, connection){
        if(err){
            res.status(500).send({
                message : "database connection error"
            });
            connection.release();
        }else{
            var sql = 'SELECT DISTINCT store_name FROM restraurant';
            connection.query(sql,function(err,result){
                if(err){
                    res.status(500).send({
                        message : "store_name select error"
                    });
                    connection.release();
                }else{
                    var store_name = [];
                    for(var i=0; i<result.length; i++){
                        store_name.push(result[i].store_name);
                    }
                    const data = 
                        {
                        message : {
                            text : "식당을 선택해주세요!"
                        },
                        keyboard : {
                        type : "buttons",
                        buttons : store_name
                        }
                      }
                    callback(null,data);
                    console.log('store_name', store_name)
                          connection.release();
                }
            })
        }
    })
}





module.exports.RN = RN;
module.exports.storename = storename;
