document.addEventListener("DOMContentLoaded", function () {
    const homeButton = document.querySelector(".home-button");

    if (homeButton) {
        homeButton.addEventListener("click", function () {
            location.reload();
        });
    }
});

const questionPrincipais = [
    {
        pergunta: "Qual é a quantidade de fendas brânquias?",
        resposta: ["1", "5 à 7"]
    },
    {
        pergunta: "Selecione a posição das brânquias?",
        resposta: ["Ventrais a cabeça", "Laterais a cabeça"]

    }
];

const perguntasQuimera = [
    {
        pergunta: "Selecione o formato do focinho.",
        resposta: ["Alongado e Comprimido", "Curto, rombico ou conico"],
        coluna: "Focinho"
    },
    {
        pergunta: "Seu animal possui proboscide?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Proboscide"

    },
    {
        pergunta: "Seu animal possui nadadeira anal?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Nadadeira_anal"
    },
    {
        pergunta: "Seu animal possui nadadeira caudal?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Nadadeira_caudal"
    },
    {
        pergunta: "Seu animal possui o clasper bifurcado?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Clasper_bifurcado"
    },
    {
        pergunta: "Selecione o formato da margem da segunda nadadeira dorsal",
        resposta: ["Reta", "Ondulada", "Nulo"],
        coluna: "Margem_seg_nad_dorsal"
    }
];

const respostaQuimera = [];

const perguntasTubarao = [
    {
        pergunta: "Seu animal possui nadadeira anal ausente?",
        resposta: ["Não", "Sim"], //se  não então hexanchiformes
        coluna: "Nadadeira_anal_ausente"
    },
    {
        pergunta: "Qual é o formato do corpo do seu animal",
        resposta: ["Fusiforme", "Achatado dorsoventralmente"],//se fusiforme entao squaliformes se achatado dorsoventralmente então sqatiniforme
        coluna: "Formato_corpo"
    },
    {
        pergunta: "Quantas nadadeiras dorsais seu animal possui?",
        resposta: ["1", "2"],
        coluna: "Qtd_nadadeira_dorsal"
    },
    {
        pergunta: "Seu animal possui Membranas nictitantes nos olhos?",
        resposta: ["Não", "Sim"],
        coluna: "Membranas_nictitantes_olhos"
    },
    {
        pergunta: "Selecione o formato do focinho do seu animal",
        resposta: ["Arredondado", "Estreita e Pontiaguda", "Cabeça larga e comprimida", "Curto e arredondado", "Longo e Arredondao", "Nulo"],
        coluna: "Focinho"
    },
    {
        pergunta: "Seu animal possui espinhos dorsais?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Espinhos_dorsais"
    },
    {
        pergunta: "Seu animal possui orgãos produtores de luz? ",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Orgaos_produtores_luz"
    },
    {
        pergunta: "Seu animal possui olhos grandes e arredondados?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Olho_grandes_arredondados"
    },
    {
        pergunta: "Seu animal possui um corpo robusto?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Corpo_robusto"
    },
    {
        pergunta: "Seu animal possui uma fileira de tuberculos dorsais medianos?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Fileira_tuberculos_dorsais_medianos"
    },
    {
        pergunta: "Seu animal possui um par de denticulos dermicos desenvolvidos?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Par_denticulos_dermicos_desenvolvidos"
    },
    {
        pergunta: "Seu animal possui uma boca redonda e dentição adaptada?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Boca_redonda_denticao_adaptada"
    },
    {
        pergunta: "Seu animal possui espinho em ambas nadadeiras dorsais?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Espinho_ambas_nadadeiras_dorsais"
    },
    {
        pergunta: "Seu animal possui a ponta da nadadeira caudal branca?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Ponta_nadadeira_caudal_branca"
    },
    {
        pergunta: "Seu animal possui focinho curto e arredondado?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Focinho_curto_arredondado"
    },
    {
        pergunta: "Seu animal possui a segunda nadadeira dorsal menor que a primeira?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Segunda_nadadeira_dorsal_menor_primeira"
    },
    {
        pergunta: "Seu animal possui focinho curto e largo?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Focinho_curto_largo"
    },
    {
        pergunta: "Seu animal possui uma linha de fotóforos inferior padronizada?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Linha_fotóforos_inferior_padronizada"
    }
];

const respostaTubarao = [];

const perguntasRaia = [
    {
        pergunta: "Seu animal possui orgãos eletricos na cabeça?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Orgaos_eletricos_cabeca"
    },
    {
        pergunta: "Seu animal possui rosto alongado e dentado?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Rosto_alongado_dentado"
    },
    {
        pergunta: "A origem da primeira nadadeira dorsal está alinhada com a origem da nadadeira pelvica?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Origem_prim_nad_dorsal_alinhada_origem_nad_pelvica"
    },
    {
        pergunta: "O dorso do seu animal possui manchas simetricas?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Dorso_manchas_simetricas"
    },
    {
        pergunta: "Seu animal possui orgaos eletricos?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Possui_orgaos_eletricos"
    },
    {
        pergunta: "A coloração dorsal do seu animal é castanha escura?",
        resposta: ["Sim", "Não", "Nulo"],
        coluna: "Coloracao_dorsal_castanha_escura"
    }
];



//se o Usuario responder Sim na pergunta ("Seu animal possui orgãos eletricos na cabeça?") Vai direto pra pergunta (A coloração dorsal do seu animal é castanha escura?);

//se o Usuario responder Sim na pergunta ("A origem da primeira nadadeira dorsal está alinhada com a origem da nadadeira pelvica?") ja acha a resposta
//


function voltar() {
    if (currentQuestionQuimera > 0) {
        respostaQuimera.pop();
        currentQuestionQuimera--;
        carregarPerguntasQuimera();

    } else if (currentQuestionTubarao > 0) {

        currentQuestionTubarao--;
        carregarPerguntasTubarao();

    } else if (currentQuestionRaia > 0) {

        currentQuestionRaia--;
        carregarPerguntasRaia();
        
    } else {
        document.querySelector(".voltar-button").style.display = "none";
    }

}


const respostaRaia = [];


let currentQuestion = 0;

function selectOption(pagina) {
    if (pagina == 'sistema') {

        window.location.href = `../../../index.html`;
    } else if (pagina == 'banco') {

        window.location.href = `../../../index.html`;

    }
}

function startSystem() {
    document.getElementById("start-button").style.display = "none";
    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";


    questionPrincipais[currentQuestion].resposta.forEach(resposta => {
        let answerButton = document.createElement("button");
        answerButton.classList.add("answer-button");
        answerButton.innerText = resposta;
        answerButton.addEventListener("click", () => {
            answer(resposta);
        })

        document.getElementById("answer-buttons").appendChild(answerButton);
    })

    document.getElementById("question").innerText = questionPrincipais[currentQuestion].pergunta;
}

function answer(resposta) {
    if (resposta == "1") {
        carregarPerguntasQuimera();

    } else if (resposta == "5 à 7") {
        currentQuestion++;
        startSystem();

    } else if (resposta == "Ventrais a cabeça") {
        carregarPerguntasRaia();

    } else if (resposta == "Laterais a cabeça") {
        carregarPerguntasTubarao();

    }

}


let currentQuestionQuimera = 0;
function carregarPerguntasQuimera() {
    if(currentQuestionQuimera == 0){
        document.querySelector(".voltar-button").style = "display: none";
        
    } else{ 
        document.querySelector(".voltar-button").removeAttribute("style");

    }


    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";



    if (perguntasQuimera.length > currentQuestionQuimera) {

        perguntasQuimera[currentQuestionQuimera].resposta.forEach(resposta => {
            const pergunta = perguntasQuimera[currentQuestionQuimera].pergunta;
            const coluna = perguntasQuimera[currentQuestionQuimera].coluna;


            let answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.innerText = resposta;
            answerButton.addEventListener("click", () => {
                respostaQuimera.push({
                    coluna: coluna,
                    resposta: resposta
                });

                currentQuestionQuimera++;
                //carregaSugestaoQuimera(respostaQuimera);
                carregarPerguntasQuimera();
            })

            document.getElementById("answer-buttons").appendChild(answerButton);
        })

        document.getElementById("question").innerText = perguntasQuimera[currentQuestionQuimera].pergunta;


    } else {
        const respostaQuimeraString = encodeURIComponent(JSON.stringify(respostaQuimera))
        fetch(`http://localhost:3000/quimera?respostaQuimera=${ respostaQuimeraString }`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            data: respostaQuimera
        })
            .then(response => response.text())
            .then(data => {
                window.location.href = `/front-end/paginaEspecie/paginaEspecie.html?resultado=${ encodeURIComponent(data) }`;
                document.getElementById("question").innerText = `Carregando...`
            })
            .catch(error => console.error("Erro:", error));

    }

}

/* function carregaSugestaoQuimera (respostaQuimera){


} */

let currentQuestionTubarao = 0;
function carregarPerguntasTubarao() {
    document.querySelector(".voltar-button").removeAttribute("style");

    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";



    if (perguntasTubarao.length > currentQuestionTubarao) {

        perguntasTubarao[currentQuestionTubarao].resposta.forEach(resposta => {
            const pergunta = perguntasTubarao[currentQuestionTubarao].pergunta;
            const coluna = perguntasTubarao[currentQuestionTubarao].coluna;

            let answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.innerText = resposta;
            answerButton.addEventListener("click", () => {

                if (pergunta == "Qual é o formato do corpo do seu animal" && resposta == "Achatado dorsoventralmente") {
                    currentQuestionTubarao = 8;
                }

                respostaTubarao.push({
                    coluna: coluna,
                    resposta: resposta
                });

                currentQuestionTubarao++;
                carregarPerguntasTubarao();
            })

            document.getElementById("answer-buttons").appendChild(answerButton);
        })

        document.getElementById("question").innerText = perguntasTubarao[currentQuestionTubarao].pergunta;

    } else {

        const respostaTubaraoString = encodeURIComponent(JSON.stringify(respostaTubarao))
        fetch(`http://localhost:3000/tubarao?respostaTubarao=${ respostaTubaraoString }`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            data: respostaTubarao
        })
            .then(response => response.text())
            .then(data => {

                window.location.href = `/front-end/paginaEspecie/paginaEspecie.html?resultado=${ encodeURIComponent(data) }`;
                document.getElementById("question").innerText = `Carregando...`

            })
            .catch(error => console.error("Erro:", error));

    }

}

let currentQuestionRaia = 0;
function carregarPerguntasRaia() {
    document.querySelector(".voltar-button").removeAttribute("style");
    
    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";



    if (perguntasRaia.length > currentQuestionRaia) {

        perguntasRaia[currentQuestionRaia].resposta.forEach(resposta => {
            const pergunta = perguntasRaia[currentQuestionRaia].pergunta;
            const coluna = perguntasRaia[currentQuestionRaia].coluna;

            let answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.innerText = resposta;
            answerButton.addEventListener("click", () => {

                if (pergunta == "Seu animal possui orgãos eletricos na cabeça?" && resposta == "Sim") {
                    //se o Usuario responder Sim na pergunta ("Seu animal possui orgãos eletricos na cabeça?") Atualiza o contador, para ir direto para a ultima pergunta
                    const ultimaPergunta = (perguntasRaia.length - 2)
                    currentQuestionRaia = ultimaPergunta

                }


                respostaRaia.push({
                    coluna: coluna,
                    resposta: resposta
                });

                currentQuestionRaia++;
                carregarPerguntasRaia();
            })

            document.getElementById("answer-buttons").appendChild(answerButton);
        })

        document.getElementById("question").innerText = perguntasRaia[currentQuestionRaia].pergunta;

    } else {

        const respostaRaiaString = encodeURIComponent(JSON.stringify(respostaRaia))
        fetch(`http://localhost:3000/raia?respostaRaia=${ respostaRaiaString }`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            data: respostaRaia
        })
            .then(response => response.text())
            .then(data => {

                window.location.href = `/front-end/paginaEspecie/paginaEspecie.html?resultado=${ encodeURIComponent(data) }`;
                document.getElementById("question").innerText = `Carregando...`
            })
            .catch(error => console.error("Erro:", error));

    }

}

