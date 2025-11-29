const mongoose = require('mongoose');
const Clinica = mongoose.model('Clinica', {
    nome: String,
    endereco: String,
    telefone: String,
    especialidades: [String],
    Medicos: [String]
}, 'clinicas');

module.exports = Clinica;