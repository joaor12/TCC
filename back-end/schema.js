const mongoose = require("mongoose");

const QuimeraSchema = new mongoose.Schema({

    Animal: String,
    Ordem: String,
    Família: String,
    Genero: String,
    Especie: String,
    Qntd_aberturas_branquiais: String,
    Focinho: String,
    Proboscide: String,
    Nadadeira_anal: String,
    Nadadeira_caudal: String,
    Clasper_bifurcado: String,
    Margem_seg_nad_dorsal: String,
    ID_fishbase: String

}, { collection: "tbl_quimera" });

const QuimeraModel = mongoose.model("tbl_quimera", QuimeraSchema);

const allAnimalsSchema = new mongoose.Schema({

    Animal: String,
    Ordem: String,
    Família: String,
    Genero: String,
    Especie: String,
    ID_fishbase: String

}, { collection: "tbl_animais" });

const allAnimalsModel = mongoose.model("tbl_animais", allAnimalsSchema);

const TubaraoSchema = new mongoose.Schema({

    Animal: String,
    Ordem: String,
    Família: String,
    Genero: String,
    Especie: String,
    Qntd_aberturas_branquiais: String,
    Pos_branquias: String,
    Ordem_1_difencial: String,
    Ordem_2_difencial: String,
    Ordem_3_4_diferncial: String,
    Primeira_nad_dorsal: String,
    Possui_espinhos_dorsais: String,
    Dentes_superiores: String,
    Orgão_luminoso: String,
    Microarranhuras_transversais: String,
    Focinh_conico: String,
    Espinho_primeira_nad_dorsal: String,
    Corpo_coloracao: String,
    Segunda_nad_dorsal_maior: String,
    Crista_dermica: String,
    Sulcos_pre_caudais: String,
    Dentes_pequenos_numerosos: String,
    Nad_lobo_superior: String,
    Prim_dorsal_peitoral: String,
    focinho_diferenciacao: String,
    Boca_terminal_subterminal: String,
    Olhos_proporcionalmente_grandes: String,
    Estrias_dobras: String,
    Quilhas_secundarias: String,
    Focinho_pontiagudo_arredondado: String,
    Cabeça_martelo: String,
    Focinho_longo_pontiagudo: String,
    Nad_caudal_lobo_muito_longo: String,
    Prim_dorsal_pelvica: String,
    Sulcos_pre_caudais_visiveis: String,
    Coloração_Dorsal_contrastante: String,
    Nad_anal_presente: String,
    Mancas_padroes_corpo: String,
    Calombo_borda_superior: String,
    Achatado_como_raia: String,
    ID_fishbase: String


}, { collection: "tbl_tubarao" });

const TubaraoModel = mongoose.model("tbl_tubarao", TubaraoSchema);

const RaiaSchema = new mongoose.Schema({

    Animal: String,
    Ordem: String,
    Família: String,
    Genero: String,
    Especie: String,
    Qntd_aberturas_branquiais: String,
    Pos_branquias: String,
    Disco_frontal_arredondado: String,
    Orgaos_eletricos_ausentes: String,
    Cauda_chicote: String,
    Focinho_alongado_achatado: String,
    Pares_dentes_laterais: String,
    Cristas_dermicas: String,
    Coloracao_dorsal_uniforme: String,
    Coloracao_dorsal_castanha_escura: String,
    Detalhe_nadadeiras_pelvica: String,
    Ocelos_dorsal: String,
    Ocelo_centro_claro: String,
    Regiao_ventral_negra: String,
    Superficie_ventral_uniforme: String,
    Manchas_circular: String,
    Aguilhao_medio: String,
    Focinho_longo_largura_boca: String,
    Nad_dorsal_separada_caudal: String,
    Disco_largo_entalhe: String,
    Dorsal_manchas_claras_ponta_arredondada: String,
    Ventre_escuro: String,
    Focinho_curto_dorsais_unidas: String,
    Espinhos_focinho_escura_uniforme: String,
    Aguilhões_contínuos_nuca: String,
    Ferrao_caudal: String,
    Nadadeiras_cefalicas: String,
    boca_terminal_subterminal: String,
    Coloração_dorsal_uniforme: String,
    Tuberculos_dorsais: String,
    Cauda_longa_fina: String,
    Placa_dentaria: String,
    Formato_disco: String,
    Nad_dorsal_presente: String,
    Sulco_W: String,
    Turb_orbital: String,
    Faixa_denticulos: String,
    Tubs_medianos: String,
    Tubs_aleatorios: String,
    Coloracao_dorsal: String,
    Nad_dorsal_ponta_branca: String,
    Sulco_frontal_profundo: String,
    Mandibula_superior: String,
    Nad_dorsal_pelv: String,
    Disco_asa_pontiaguda: String,
    ID_fishbase: String,

}, { collection: "tbl_raia" });

const RaiaModel = mongoose.model("tbl_raia", RaiaSchema);

module.exports = { QuimeraModel, TubaraoModel, RaiaModel, allAnimalsModel };