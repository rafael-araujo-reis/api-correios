var mongoose = require("../../database");

const EncomendasSchema = new mongoose.Schema({
  codigo_rastreamento: {
    type: String,
    unique: true,
    required: true,
  },
  descricao_encomenda: {
    type: String,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const Encomendas = mongoose.model("Encomendas", EncomendasSchema);
module.exports = Encomendas;
