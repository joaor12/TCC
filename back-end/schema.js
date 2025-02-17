const mongoose = require("mongoose");

const QuimeraSchema = new mongoose.Schema({
    
    Animal:String,
    Ordem:String,
    Família:String,
    Genero:String,
    Especie:String,
    Qntd_aberturas_branquiais:String,
    Focinho:String,
    Proboscide:String,
    Nadadeira_anal:String,
    Nadadeira_caudal:String,
    Clasper_bifurcado:String,
    Margem_seg_nad_dorsal:String

}, { collection: "tbl_quimera" });

const QuimeraModel = mongoose.model("tbl_quimera", QuimeraSchema);

module.exports = { QuimeraModel };  