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
    sequelize.query("SELECT * FROM Public.\"EstadoMaquinas\" WHERE datetime >= :datetime",
        { replacements: { datetime: req.params.datetime },
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