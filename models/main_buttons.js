const pool = require('../config/dbPool');

function main_buttons(content, res){
    pool.getConnection(function(err, conn){
        if(err){
            res.status(500).send({
                message : "database connection error"
            });
            conn.release();
        }else{
            console.log("slect");
            var sql = 'SELECT buttons_name FROM Mainbuttons';
            conn.query(sql,function(err,rows, result){
                if(err){
                    res.status(500).send({
                        message : "mainbuttons select error"
                    });
                    conn.release();
                }else{
                    console.log("push rows",rows);
                    var menu = [];
                    for(var i=0; i<rows.length; i++){
                        menu.push(rows[i].buttons_name);
                    }
                    if(content == '처음으로'){
                        res.status(200).json({
                            message: {
                              text: "원하시는 서비스를 선택하세요."
                            },
                            keyboard: {
                              type: "buttons",
                              buttons: menu
                            }
                          });
                    }else if(content == "keyboard"){
                        res.status(200).json({
                          type : "buttons",
                          buttons : menu
                        });
                        conn.release();
                      }
                }
            })
        }
    })
}





module.exports.main_buttons = main_buttons;