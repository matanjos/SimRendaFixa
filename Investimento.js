const mongoose = require('mongoose')
const InvestimentoSchema = new mongoose.Schema({
    tipo: String,
    rendimentos: [
        {   
            rendimento: Number,
            mes: Number,
            ano: Number
        }
    ],
})
module.exports = mongoose.model('investimento', InvestimentoSchema)