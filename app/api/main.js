//DAO/API -- arquivo de conexão: db/database.js
//table: table_historico
//database: gestao_combu

var api = {};

api.listAll = function(req, res){
    
    var connection = require('../db/database');
    console.log(this.connection);
    
        connection.query('select * from table_historico', function(err, results){
        
        if(err){
            return console.log('erro ao buscar lista');
        }
        if(results){
            res.json(results);
        }
        connection.end();
    });
};

api.insert = function(req, res){
    
        var connection = require('../db/database');
        connection.query('insert into table_historico ?', req.body, function(err, results){
        if(err){
            return console.log(err);
        }
        if(result){
            res.json(results);
        }
         connection.end();
    });
};

api.delete = function(req, res){
    
        var connection = require('../db/database');
        connection.query('delete from table_historico where id ?', req.body.history.id, function(err, results){
        
        if(err){
            return console.log(err);
        }
        if(results){
            res.json(results)
        }
         connection.end();    
    });
    
};

api.update = function(id, history, callback){
    
    var connection = require('../db/database');
    this.connection.query('update table_historico set ? where id ?', history, id, callback);
     connection.end();
}

module.exports = api;