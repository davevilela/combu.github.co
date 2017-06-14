var api = require('../api/main');
var path = require('path');

module.exports = function(app){


    app.route('/history')
        .get(api.listAll)
        .post(api.insert)
        .delete(api.delete);

    app.route('/main')
      .get(function(req, res){
          res.render('frontpage');
      })
      .post(function(req, res){
          console.log(req.body);
          res.render('dashboard');
      });
    
    app.route('/dashboard')
        .get(function(req, res){
            
           res.render('dashboard');
    })
        .post(api.insert);
    
    app.route('/user')
        .get(function(req, res)
        {
            res.render('user');
        })
        .post(api.insert);

    app.get('/', function(req, res){
        
        res.redirect('/main');
    });
    
};


