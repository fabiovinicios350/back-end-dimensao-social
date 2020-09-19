const routes = require('express').Router();
const userController = require('./app/controllers/UserController');
const pedidoController = require('./app/controllers/PedidoController');

routes.post('/enviarCadastro',userController.cadastro);
routes.post('/enviarPedido',pedidoController.enviarPedido);

module.exports = routes ;