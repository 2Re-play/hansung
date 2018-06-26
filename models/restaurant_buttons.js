const pool = require('../config/dbPool');

//ROll&Noodles
 function RN(store_name,callback){
    console.log('3')
    pool.getConnection(function(err, connection){
        if(err){
            res.status(500).send({
                message : "database connection error"
            });
            connection.release();
        }else{
            var sql = "SELECT menu,price  FROM restraurant WHERE store_name = ?";
            connection.query(sql,store_name,function(err,result){
                console.log(result)
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
                        type : "buttons",
                        text : store_name+"/n"+result
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
                        keyboard :{
                        type : "buttons",
                        buttons : store_name
                        }
                      }
                    callback(null,data);
                    store_name_birdge(data,function(err, result){
                        callback(null,result);
                     })
                    console.log('store_name', store_name)
                          connection.release();
                }
            })
        }
    })
}
function store_name_birdge(data,callback){
    if(data.store_name === 'ROll&Noodels'){
        RN(function(err, result){
            if(err){
                console.log(err);
                callback(err);
            }else {
                callback(null,result);
            }
        })
    }

}




module.exports.RN = RN;
module.exports.storename = storename;
module.exports.store_name_birdge = store_name_birdge;