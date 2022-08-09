const mongoose = require('mongoose')
const SimulacaoSchema = new mongoose.Schema({
    prazo: String,
    valor_inicial: String,
    valor_final: String,
    rendimento: String,
    imposto: String,
})
module.exports = mongoose.model('simulacao', SimulacaoSchema)