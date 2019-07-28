const { EstadoMaquinas } = require('./routes/db');

const populateEstadoMaquinas = (req, res) => {
    estados = ['Apagado','Encendido','Reparacion','Normal','Anormal'];
    var d1 = new Date(2019, 01, 01, 01, 00, 00);
    var d2 = new Date(2019, 07, 31, 11, 59, 59);
    for(var i = 0; i < req.params.num; i++){
        random = Math.floor(Math.random()*5);
        EstadoMaquinas.create({estado: estados[random], datetime: randomDate(d1,d2)});
    }
    res.status(200).send('Success!');
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

module.exports = {
    populateEstadoMaquinas
}