
module.exports = (sequelize, type) => {
    return sequelize.define('EstadoMaquina', {
      index: {
        type: type.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      estado: {
        type: type.STRING
      },
      datetime: {
        type: type.DATE
      }
    }, {
      timestamps: false
    });
  }