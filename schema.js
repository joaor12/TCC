const mongoose = require("mongoose");

const QuimeraSchema = new mongoose.Schema({
    
    Animal: String,
    Ordem: String,
    Família: String,
    Genero: String,
    Especie: String,
    Focinho: String,
    Proboscide: String,
    "Nadadeira Anal": String,
    "Nadadeira Caudal": String,
    "Clasper bifurcado": String,
    "Margem da segunda nadadeira dorsal": String
});

const QuimeraModel = mongoose.model("tbl_animais", QuimeraSchema);

module.exports = { QuimeraModel };  