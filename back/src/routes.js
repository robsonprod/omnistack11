const express = require('express');
const connection = require('../database/connection');

const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.list);
routes.post('/ongs', OngController.create);

routes.get('/incidents', IncidentsController.list);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', IncidentsController.list);

module.exports = routes;