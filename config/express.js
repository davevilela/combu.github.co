var express = require('express');
var bodyParser = require('body-parser');
var load = require('express-load');
var cons = require('consolidate');
var validator = require('express-validator');
var path = require('path');
    
    
    var app = express();
    
    app.use(express.static('./'));

    app.engine('html', cons.swig);
    app.set('view engine', 'html');
    app.set('views', './views');
    app.use(bodyParser.json());
    app.use(validator());
    
    load('routes', {cwd: './app/'}) //cwd current working directory
        .then('db', {cwd: './app/'})
        .then('api', {cwd: '../app/'})
        .into(app);
    
module.exports = function(){
    return app;
}