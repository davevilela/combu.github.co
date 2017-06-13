var mysql = require('mysql');

var connection = mysql.createConnection({
        
        host: 'localhost',
        user: 'root',
        password: 'combudb',
        database: 'gestao_combu'
        
    });

module.exports = connection;