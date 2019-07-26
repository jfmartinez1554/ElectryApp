var express = require('express');
var router = express.Router();
var db = require('./db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Scheduled Tasks
var cron = require('../ScheduledTasks/scheduled-tasks')
router.put('/task_1', cron.updateTask_1);
router.put('/task_2', cron.updateTask_2);
router.put('/task_3', cron.updateTask_3);

// REST API
var EstadosMaquinas = require('../API/EstadoMaquinas');
router.get('/EstadoMaquinas', EstadosMaquinas.getEstadosMaquinas);
router.get('/EstadoMaquinas/:timestamp', EstadosMaquinas.getEstadosMaquinasByDate)

module.exports = router;
