const express = require('express');
const { request, response } = require('express');
const CursosController = require('./controllers/CursoController');
const ProdutosController = require('./controllers/ProdutosController');
const NoticiasController = require('./controllers/NoticiasController');
const AdminController = require('./controllers/AdminController');
const routes = express.Router();
//READ, CREATE dos cursos
routes.get('/cursos', CursosController.index);
routes.post('/cursos', CursosController.create); 

//READ, CREATE dos produtos
routes.get('/produtos', ProdutosController.index);
routes.post('/produtos', ProdutosController.create); 

//READ, CREATE noticias
routes.get('/noticias', NoticiasController.index);
routes.post('/noticias', NoticiasController.create); 

//READT admin
routes.post('/admin', AdminController.index);
routes.post('/auth-admin', AdminController.authadm);
module.exports = routes;