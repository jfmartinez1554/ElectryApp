const { sequelize, EstadoMaquinas } = require('../routes/db');

const getEstadosMaquinas = (req, res) => {
    EstadoMaquinas.findAll()
    .then(EstadoMaquinas => res.status(200).json(EstadoMaquinas))
    .catch(error => res.json({
        error: true,
        error: error
    }));
}

const getEstadosMaquinasByDate = (req, res) => {
    console.log(req.params.timestamp);
    sequelize.query("SELECT * FROM Public.\"EstadoMaquinas\" WHERE timestamp >= :timestamp",
        { replacements: { timestamp: '2018-01-01 00:00:00' },
        model: EstadoMaquinas,
        mapToModel: true 
    })
    .then(EstadoMaquinas => res.status(200).json(EstadoMaquinas))
    .catch(error => res.json({
        error: true,
        error: error
    }));
}

module.exports = {
    getEstadosMaquinas,
    getEstadosMaquinasByDate
}