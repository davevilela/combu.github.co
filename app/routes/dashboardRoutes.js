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
            
            var results = api.listAll;
    })
        .post(api.insert);
    
    app.route('/user')
        .get(function(req, res)
        {
            res.render('user');
        })
        .post(api.insert);

};


/*var api = require('../api'),
    path = require('path');

module.exports  = function(app) {

    app.route('/v1/fotos')
        .post(api.adiciona)
        .get(api.lista);

    app.route('/v1/fotos/:fotoId')
        .delete(api.remove)
        .get(api.busca)
        .put(api.atualiza);

    app.get('/v1/grupos', api.listaGrupos)
    app.get('/v1/fotos/grupo/:grupoId', api.listaPorGrupo);


    // habilitando HTML5MODE
    app.all('/*', function(req, res) {
        res.sendFile(path.resolve('public/index.html'));
    });
};*/
