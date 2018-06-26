const pool = require('../config/dbPool');

function mb(callback){
    pool.getConnection(function(err, connection){
        if(err){
            res.status(500).send({
                message : "database connection error"
            });
            connection.release();
        }else{
            var sql = 'SELECT buttons_name FROM Mainbuttons';
            connection.query(sql,function(err,rows,result){
                if(err){
                    res.status(500).send({
                        message : "mainbuttons select error"
                    });
                    connection.release();
                }else{
                    var menu = [];
                    for(var i=0; i<rows.length; i++){
                        menu.push(rows[i].buttons_name);
                    }
                    callback(null,menu);
                          connection.release();
                }
            })
        }
    })
}


module.exports.mb = mb;