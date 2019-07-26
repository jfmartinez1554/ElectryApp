const Sequelize = require('sequelize');

const EstadoMaquinasModel = require('../Models/EstadoMaquinas')

const sequelize = new Sequelize('postgres', 'postgres', 'electry2019', {
    host: 'electryapp.chnk1n7hjbob.us-east-2.rds.amazonaws.com',
    dialect: 'postgres'
  });

  sequelize.authenticate().then(()=>{
  console.log('Connection to the DB established successfully!');
})
.catch(err => {
  console.error('Unable to connect to the database: ', err);
});

const EstadoMaquinas = EstadoMaquinasModel(sequelize, Sequelize);

module.exports = {
    sequelize,
    EstadoMaquinas
}