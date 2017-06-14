var express = require('express');
var bodyParser = require('body-parser');
var load = require('express-load');
var cons = require('consolidate');
var expressValidator = require('express-validator');
var path = require('path');
    
module.exports = function(){    
    var app = express();
    
    //engine, views, e arquivos estaticos
    app.use(express.static('./'));
    app.engine('html', cons.swig);
    app.set('view engine', 'html');
    app.set('views', './views');
    
    //middlewares
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidator());
    
    load('routes', {cwd: './app'}) //cwd current working directory
        .then('db', {cwd: './app/'})
        .then('api', {cwd: '../app/'})
        .into(app);
//middlewares 404, 500
    app.use(function(req, res, next){
            res.status(404).render('404.html');
    });
    
    app.use(function(error, req, res, next){
            res.status(500).render('500.html');
       
        next();
    });
    

    return app;
}