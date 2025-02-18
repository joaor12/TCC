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

const TubaraoSchema = new mongoose.Schema({
    
    Animal:String,
    Ordem:String,
    Família:String,
    Genero:String,
    Especie:String,
    Qntd_aberturas_branquiais:String,
    Pos_branquias:String,
    Nadadeira_anal_ausente:String,
    Formato_corpo:String,
    Qtd_nadadeira_dorsal:String,
    Membranas_nictitantes_olhos:String,
    Focinho:String,
    Espinhos_dorsais:String,
    Orgaos_produtores_luz:String,
    Olho_grandes_arredondados:String,
    Corpo_robusto:String,
    Fileira_tuberculos_dorsais_medianos:String,
    Par_denticulos_dermicos_desenvolvidos:String,
    Boca_redonda_denticao_adaptada:String,
    Espinho_ambas_nadadeiras_dorsais:String,
    Ponta_nadadeira_caudal_branca:String,
    Focinho_curto_arredondado:String,
    Segunda_nadadeira_dorsal_menor_primeira:String,
    Focinho_curto_largo:String


}, { collection: "tbl_tubarao" });

const TubaraoModel = mongoose.model("tbl_tubarao", TubaraoSchema);

const RaiaSchema = new mongoose.Schema({
    
    Animal:String,
    Ordem:String,
    Família:String,
    Genero:String,
    Especie:String,
    Qntd_aberturas_branquiais:String,
    Pos_branquias:String,
    Orgaos_eletricos_cabeca:String,
    Rosto_alongado_dentado:String,
    Origem_prim_nad_dorsal_alinhada_origem_nad_pelvica:String,
    Dorso_manchas_simetricas:String,
    Possui_orgaos_eletricos:String,
    Coloracao_dorsal_castanha_escura:String,


}, { collection: "tbl_raia" });

const RaiaModel = mongoose.model("tbl_raia", RaiaSchema);











module.exports = { QuimeraModel};