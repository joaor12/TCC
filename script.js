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
        resposta: ["Alongado e Comprimido", "Curto, rombico ou conico", "Sem informação"],
        coluna: "Focinho"
    },
    {
        pergunta: "Seu animal possui proboscide?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Proboscide"

    },
    {
        pergunta: "Seu animal possui nadadeira anal?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Nadadeira_anal"
    },
    {
        pergunta: "Seu animal possui nadadeira caudal?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Nadadeira_caudal"
    },
    {
        pergunta: "Seu animal possui o clasper bifurcado?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Clasper_bifurcado"
    },
    {
        pergunta: "Selecione o formato da margem da segunda nadadeira dorsal",
        resposta: ["Reta", "Ondulada", "Sem informação"],
        coluna: "Margem_seg_nad_dorsal"
    }
];

const respostaQuimera = [];


const respostaTubarao = [];



//se o Usuario responder Sim na pergunta ("Seu animal possui orgãos eletricos na cabeça?") Vai direto pra pergunta (A coloração dorsal do seu animal é castanha escura?);

//se o Usuario responder Sim na pergunta ("A origem da primeira nadadeira dorsal está alinhada com a origem da nadadeira pelvica?") ja acha a resposta
//


function voltar() {
    const listaPergunta = document.querySelector(".voltar-button").id;


    if (listaPergunta == "sistema") {
        if (currentQuestion > 0) {
            currentQuestion--;
            startSystem()
        } else {
            document.querySelector(".voltar-button").style.display = "none";
        }

    } else if (listaPergunta == "quimera") {
        if (currentQuestionQuimera > 0) {
            respostaQuimera.pop();
            currentQuestionQuimera--;
            carregarPerguntasQuimera()
        } else {
            document.querySelector(".voltar-button").style.display = "none";
        }
    } else if (listaPergunta == "tubarao") {
        if (currentQuestionTubarao > 0) {
            respostaTubarao.pop();
            currentQuestionTubarao--;
            carregarPerguntasTubarao()
        } else {
            document.querySelector(".voltar-button").style.display = "none";
        }

    } else if (listaPergunta == "squaliformes") {
        if (currentQuestionSqualiformes > 0) {
            respostaTubarao.pop();
            currentQuestionSqualiformes--;
            carregaPerguntasSqualiformes()
        } else {
            document.querySelector(".voltar-button").style.display = "none";
        }
    } else if (listaPergunta == "lamniformes") {
        if (currentQuestionSqualiformes > 0) {
            respostaTubarao.pop();
            currentQuestionSqualiformes--;
            carregaPerguntasLamniformes()

        } else {
            document.querySelector(".voltar-button").style.display = "none";
        }
    } else if (listaPergunta == "cacharhiniformes") {
        if (currentQuestionCarcharhiniformes > 0) {
            respostaTubarao.pop();
            currentQuestionCarcharhiniformes--;
            carregaPerguntasCarcharhiniformes()

        } else {
            document.querySelector(".voltar-button").style.display = "none";
        }
    } else if (listaPergunta == "3ordens") {
        if (currentQuestion3Ordens > 0) {
            respostaTubarao.pop();
            currentQuestion3Ordens--;
            carregaPergunta3Ordens()

        } else {
            document.querySelector(".voltar-button").style.display = "none";
        }
    } else if (listaPergunta == "questionarioTubarao") {
        if (currentQuestionQuestionario > 0) {
            respostaTubarao.pop();
            currentQuestionQuestionario--;
            carregaQuestionarioTubarao()

        } else {
            document.querySelector(".voltar-button").style.display = "none";
        }

    } else if (listaPergunta == "raia") {
        if (currentQuestionRaia > 0) {
            respostaRaia.pop();
            currentQuestionRaia--;
            carregarPerguntasRaia()
        } else {
            document.querySelector(".voltar-button").style.display = "none";
        }
    } else if (listaPergunta == "raiaOrdem1") {
        if (currentQuestionRaiaOrdem1 > 0) {
            respostaRaia.pop();
            currentQuestionRaiaOrdem1--;
            carregarPerguntasOrdem1Raia()
        } else {
            document.querySelector(".voltar-button").style.display = "none";
        }

    } else if (listaPergunta == "raiaOrdem2") {
        if (currentQuestionRaiaOrdem2 > 0) {
            respostaRaia.pop();
            currentQuestionRaiaOrdem2--;
            carregarPerguntasOrdem2Raia()
        } else {
            document.querySelector(".voltar-button").style.display = "none";
        }


    } else if (listaPergunta == "raiaOrdem3") {
        if (currentQuestionRaiaOrdem3 > 0) {
            respostaRaia.pop();
            currentQuestionRaiaOrdem3--;
            carregarPerguntasOrdem3Raia()
        } else {
            document.querySelector(".voltar-button").style.display = "none";
        }

    } else if (listaPergunta == "raiaOrdem4") {

        if (currentQuestionRaiaOrdem4 > 0) {
            respostaRaia.pop();
            currentQuestionRaiaOrdem4--;
            carregarPerguntasOrdem4Raia()
        } else {
            document.querySelector(".voltar-button").style.display = "none";
        }
    } else if (listaPergunta == "todasPerguntasRaia") {
        if (currentQuestionTodasPerguntas > 0) {
            respostaRaia.pop();
            currentQuestionTodasPerguntas--;
            carregarTodasPerguntasRaia()
        } else {
            document.querySelector(".voltar-button").style.display = "none";
        }
    } else if (listaPergunta == "raiaFamiliaArhynchobatidae") {
        if (currentQuestionFamiliaArhynchobatidae > 0) {
            respostaRaia.pop();
            currentQuestionFamiliaArhynchobatidae--;
            carregarPerguntasFamiliaArhynchobatidae()
        } else {
            document.querySelector(".voltar-button").style.display = "none";
        }
    }

}
const perguntasRaia = [
    {
        pergunta: "O disco frontal é arredondado?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Disco_frontal_arredondado"
    },
    {
        pergunta: "Orgão elétricos ausentes?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Orgaos_eletricos_ausentes"
    },
    {
        pergunta: "A cauda termina em formato de chicote?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Cauda_chicote"
    },

];

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
    if (currentQuestion > 0) {
        document.querySelector(".voltar-button").removeAttribute("style");
        document.querySelector(".voltar-button").id = "sistema";
    } else {
        document.querySelector(".voltar-button").style.display = "none";
    }
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
        currentQuestion++;
        carregarPerguntasQuimera();

    } else if (resposta == "5 à 7") {

        document.querySelector(".voltar-button").removeAttribute("style");
        currentQuestion++;
        startSystem();

    } else if (resposta == "Ventrais a cabeça") {
        currentQuestion++;
        carregarPerguntasRaia();

    } else if (resposta == "Laterais a cabeça") {
        currentQuestion++;
        carregarPerguntasTubarao();

    }

}


let currentQuestionQuimera = 0;
function carregarPerguntasQuimera() {
    document.querySelector(".voltar-button").removeAttribute("style");
    if (currentQuestionQuimera > 0) {
        document.querySelector(".voltar-button").id = "quimera";
    } else {
        document.querySelector(".voltar-button").id = "sistema";
        //document.querySelector(".voltar-button").style.display = "none";
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



const perguntasTubarao = [
    {
        pergunta: "O animal possui nadadeira anal ausente, com duas nadadeiras dorsais, podendo haver espinhos e espiráculos presentes?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Ordem_1_difencial"
    },
    {
        pergunta: "O tubarão possui cinco fendas branquiais, duas nadadeiras dorsais e não possui barbeias nem focinho espatulado?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Ordem_2_difencial"
    },
    {
        pergunta: "Possui barbelas nas narinas?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Ordem_3_4_diferncial"
    },

];


let currentQuestionTubarao = 0;
function carregarPerguntasTubarao() {

    if (currentQuestionTubarao > 0) {
        document.querySelector(".voltar-button").removeAttribute("style");
        document.querySelector(".voltar-button").id = "tubarao";
    } else {
        document.querySelector(".voltar-button").id = "sistema";
        //document.querySelector(".voltar-button").style.display = "none";
    }

    //document.querySelector(".voltar-button").removeAttribute("style");

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

                if (pergunta == "O animal possui nadadeira anal ausente, com duas nadadeiras dorsais, podendo haver espinhos e espiráculos presentes?" && resposta == "Sim") {
                    currentQuestionTubarao++;
                    carregaPerguntasSqualiformes();
                    respostaTubarao.push({
                        coluna: coluna,
                        resposta: resposta
                    });
                    return


                }


                if (pergunta == "O tubarão possui cinco fendas branquiais, duas nadadeiras dorsais e não possui barbeias nem focinho espatulado?" && resposta == "Sim") {
                    currentQuestionTubarao++;
                    carregaPerguntasLamniformes();
                    respostaTubarao.push({
                        coluna: coluna,
                        resposta: resposta
                    });
                    return


                }
                if (pergunta == "Possui barbelas nas narinas?" && resposta == "Sim") {
                    currentQuestionTubarao++;
                    carregaPerguntasCarcharhiniformes();
                    respostaTubarao.push({
                        coluna: coluna,
                        resposta: resposta
                    });
                    return


                }
                if (pergunta == "Possui barbelas nas narinas?" && resposta == "Não") {
                    currentQuestionTubarao++;
                    carregaPergunta3Ordens();
                    respostaTubarao.push({
                        coluna: coluna,
                        resposta: resposta
                    });
                    return


                }
                if (pergunta == "Possui barbelas nas narinas?" && resposta == "Sem informação") {
                    currentQuestionTubarao++;
                    carregaQuestionarioTubarao();
                    respostaTubarao.push({
                        coluna: coluna,
                        resposta: resposta
                    });
                    return


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


//#region Squaliformes
let perguntasSqualiformes = [
    {
        pergunta: "A primeira nadadeira dorsal nasce atrás da linha vertical das nadadeiras pélvicas?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Primeira_nad_dorsal"
    },

    {
        pergunta: "Possui espinhos dorsais visíveis com sulcos?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Possui_espinhos_dorsais"
    },

    {
        pergunta: "Dentes superiores possuem várias cúspides??",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Dentes_superiores"
    },

    {
        pergunta: "Possui órgãos luminosos (fotóforos)?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Orgão_luminoso"
    },

    {
        pergunta: "Dentículos dérmicos com microranhuras transversais?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Microarranhuras_transversais"
    },

    {
        pergunta: "Focinho cônico e cabeça estreita?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Focinh_conico"
    },

    {
        pergunta: "Presença de espinho na primeira nadadeira dorsal?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Espinho_primeira_nad_dorsal"
    },

    {
        pergunta: "Corpo com coloração contrastante dorsal/ventral?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Corpo_coloracao"
    },

    {
        pergunta: "Segunda dorsal maior que a primeira?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Segunda_nad_dorsal_maior"
    },

    {
        pergunta: "Crista dérmica anterior à primeira dorsal?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Crista_dermica"
    },
]

let currentQuestionSqualiformes = 0;
function carregaPerguntasSqualiformes() {

    if (currentQuestionSqualiformes > 0) {
        document.querySelector(".voltar-button").id = "squaliformes";
    } else {
        document.querySelector(".voltar-button").id = "tubarao";
        //document.querySelector(".voltar-button").style.display = "none";
    }
    /* 
    
    
        document.querySelector(".voltar-button").id = "raiaOrdem1"
        document.querySelector(".voltar-button").style = "display: none"; */


    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";



    if (perguntasSqualiformes.length > currentQuestionSqualiformes) {

        perguntasSqualiformes[currentQuestionSqualiformes].resposta.forEach(resposta => {
            const pergunta = perguntasSqualiformes[currentQuestionSqualiformes].pergunta;
            const coluna = perguntasSqualiformes[currentQuestionSqualiformes].coluna;

            let answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.innerText = resposta;
            answerButton.addEventListener("click", () => {

                respostaTubarao.push({
                    coluna: coluna,
                    resposta: resposta
                });


                currentQuestionSqualiformes++;
                carregaPerguntasSqualiformes();
            })

            document.getElementById("answer-buttons").appendChild(answerButton);
        })

        document.getElementById("question").innerText = perguntasSqualiformes[currentQuestionSqualiformes].pergunta;

    } else {

        const respostaTubaraoString = encodeURIComponent(JSON.stringify(respostaTubarao))
        fetch(`http://localhost:3000/tubarao?respostaTubarao=${ respostaTubaraoString }`, {
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
//#endregion

//#region Lamniformes
let perguntasLamniformes = [
    {
        pergunta: "Possui sulcos pré-caudais visíveis?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Sulcos_pre_caudais"
    },

    {
        pergunta: "Possui dentes pequenos e numerosos (mais de 100 por arcada)?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Dentes_pequenos_numerosos"
    },

    {
        pergunta: "A nadadeira caudal tem lobo superior muito longo (metade do corpo)?",
        resposta: ["Antes", "Depois", "Sem informação"],
        coluna: "Nad_lobo_superior"
    },

    {
        pergunta: "A primeira dorsal nasce antes ou depois das peitorais?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Prim_dorsal_peitoral"
    },

    {
        pergunta: "O focinho é longo e cônico ou curto e arredondado?",
        resposta: ["Curto e arredondado", "Moderado", "Achatado", "Muito Alongado", "Sem informação"],
        coluna: "focinho_diferenciacao"
    },

    {
        pergunta: "A boca é terminal ou subterminal?",
        resposta: ["Terminal", "Subterminal", "Sem informação"],
        coluna: "Boca_terminal_subterminal"
    },

    {
        pergunta: "Os olhos são proporcionalmente grandes?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Olhos_proporcionalmente_grandes"
    },

    {
        pergunta: "Possui estrias ou dobras na garganta?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Estrias_dobras"
    },

    {
        pergunta: "Possui quilha secundária?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Quilhas_secundarias"
    },

    {
        pergunta: "Focinho pontiagudo ou arredondado?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Focinho_pontiagudo_arredondado"
    },
]

let currentQuestionLamniformes = 0;


function carregaPerguntasLamniformes() {

    if (currentQuestionLamniformes > 0) {
        document.querySelector(".voltar-button").id = "lamniformes";
    } else {
        document.querySelector(".voltar-button").id = "tubarao";
    }


    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";



    if (perguntasLamniformes.length > currentQuestionLamniformes) {

        perguntasLamniformes[currentQuestionLamniformes].resposta.forEach(resposta => {
            const pergunta = perguntasLamniformes[currentQuestionLamniformes].pergunta;
            const coluna = perguntasLamniformes[currentQuestionLamniformes].coluna;

            let answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.innerText = resposta;
            answerButton.addEventListener("click", () => {

                respostaTubarao.push({
                    coluna: coluna,
                    resposta: resposta
                });


                currentQuestionLamniformes++;
                carregaPerguntasLamniformes();
            })

            document.getElementById("answer-buttons").appendChild(answerButton);
        })

        document.getElementById("question").innerText = perguntasLamniformes[currentQuestionLamniformes].pergunta;

    } else {

        const respostaTubaraoString = encodeURIComponent(JSON.stringify(respostaTubarao))
        fetch(`http://localhost:3000/tubarao?respostaTubarao=${ respostaTubaraoString }`, {
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

//#endregion


//#region Carcharhiniformes
let perguntasCarcharhiniformes = [

{
        pergunta: "Cabeça em formato de martelo (cefalofólio)?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Cabeça_martelo"
},

{
        pergunta: "Focinho longo e pontiagudo?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Focinho_longo_pontiagudo"
},

{
        pergunta: "Nadadeira caudal com lobo superior muito longo?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Nad_caudal_lobo_muito_longo"
},

{
        pergunta: "Primeira dorsal antes das pélvicas?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Prim_dorsal_pelvica"
},

{
        pergunta: "Possui sulcos pré-caudais visíveis?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Sulcos_pre_caudais_visiveis"
},

{
        pergunta: "Dentes pequenos e numerosos?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Dentes_pequenos_numerosos"
},

{
        pergunta: "Coloração dorsal/ventral contrastante?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Coloração_Dorsal_contrastante"
},

{
        pergunta: "A boca é terminal ou subterminal?",
        resposta: ["Terminal", "Subterminal", "Sem informação"],
        coluna: "Boca_terminal_subterminal"
},

{
        pergunta: "Os olhos são proporcionalmente grandes?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Olhos_proporcionalmente_grandes"
},

{
        pergunta: "Possui estrias ou dobras na garganta?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Estrias_dobras"
},

{
        pergunta: "Possui quilha secundária?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Quilhas_secundarias"
},

{
        pergunta: "Nadadeira anal presente?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Nad_anal_presente"
},
{
        pergunta: "Corpo com manchas ou padrões?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "focinho_diferenciacao"
},

{
        pergunta: "Como é o formato do focinho?",
        resposta: ["Arredondado", "Pontiagudo", "Martelo", "Sem informação"],
        coluna: "focinho_diferenciacao"
},

{
        pergunta: "O tubarão possui uma saliência mediana (calombo) na borda anterior do cefalofólio (cabeça em martelo)?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Calombo_borda_superior"
},

]

let currentQuestionCarcharhiniformes = 0;
function carregaPerguntasCarcharhiniformes() {

    if (currentQuestionCarcharhiniformes > 0) {
        document.querySelector(".voltar-button").id = "cacharhiniformes";
    } else {
        document.querySelector(".voltar-button").id = "tubarao";
    }


    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";



    if (perguntasCarcharhiniformes.length > currentQuestionCarcharhiniformes) {

        perguntasCarcharhiniformes[currentQuestionCarcharhiniformes].resposta.forEach(resposta => {
            const pergunta = perguntasCarcharhiniformes[currentQuestionCarcharhiniformes].pergunta;
            const coluna = perguntasCarcharhiniformes[currentQuestionCarcharhiniformes].coluna;

            let answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.innerText = resposta;
            answerButton.addEventListener("click", () => {

                respostaTubarao.push({
                    coluna: coluna,
                    resposta: resposta
                });


                currentQuestionCarcharhiniformes++;
                carregaPerguntasCarcharhiniformes();
            })

            document.getElementById("answer-buttons").appendChild(answerButton);
        })

        document.getElementById("question").innerText = perguntasCarcharhiniformes[currentQuestionCarcharhiniformes].pergunta;

    } else {

        const respostaTubaraoString = encodeURIComponent(JSON.stringify(respostaTubarao))
        fetch(`http://localhost:3000/tubarao?respostaTubarao=${ respostaTubaraoString }`, {
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
//#endregion

//#region 3 ordem
let perguntas3Ordens = [ 
    {
        pergunta: "O corpo do animal é achatado dorsoventralmente, com aparência semelhante à de uma raia?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Achatado_como_raia"
},

{
        pergunta: "O tubarão possui barbelas (pequenas projeções) nas narinas ou se alimenta por filtração?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Barbelas_narinas"
},

{
        pergunta: "A região interorbital apresenta fileiras de dentículos dérmicos bem desenvolvidos e dispostos em faixas?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Crista_dermica"
},


{
        pergunta: "Primeira dorsal antes das pélvicas?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Prim_dorsal_pelvica"
},

{
        pergunta: "Possui sulcos pré-caudais visíveis?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Sulcos_pre_caudais_visiveis"
},

{
        pergunta: "Dentes pequenos e numerosos?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Dentes_pequenos_numerosos"
},

{
        pergunta: "Coloração dorsal/ventral contrastante?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Coloração_Dorsal_contrastante"
},

{
        pergunta: "A boca é terminal ou subterminal?",
        resposta: ["Terminal", "Subterminal", "Sem informação"],
        coluna: "Boca_terminal_subterminal"
},

{
        pergunta: "Os olhos são proporcionalmente grandes?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Olhos_proporcionalmente_grandes"
},


{
        pergunta: "Como é o formato do focinho?",
        resposta: ["Arredondado", "Pontiagudo", "Martelo"],
        coluna: "focinho_diferenciacao"
},
]

let currentQuestion3Ordens = 0;
function carregaPergunta3Ordens() {

    if (currentQuestion3Ordens > 0) {
        document.querySelector(".voltar-button").id = "questionarioTubarao";
    } else {
        document.querySelector(".voltar-button").id = "tubarao";
    }


    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";



    if (perguntas3Ordens.length > currentQuestion3Ordens) {

        perguntas3Ordens[currentQuestion3Ordens].resposta.forEach(resposta => {
            const pergunta = perguntas3Ordens[currentQuestion3Ordens].pergunta;
            const coluna = perguntas3Ordens[currentQuestion3Ordens].coluna;

            let answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.innerText = resposta;
            answerButton.addEventListener("click", () => {

                respostaTubarao.push({
                    coluna: coluna,
                    resposta: resposta
                });


                currentQuestion3Ordens++;
                carregaPergunta3Ordens();
            })

            document.getElementById("answer-buttons").appendChild(answerButton);
        })

        document.getElementById("question").innerText = perguntas3Ordens[currentQuestion3Ordens].pergunta;

    } else {

        const respostaTubaraoString = encodeURIComponent(JSON.stringify(respostaTubarao))
        fetch(`http://localhost:3000/tubarao?respostaTubarao=${ respostaTubaraoString }`, {
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


let currentQuestionQuestionario = 0;
function carregaQuestionarioTubarao() {

    if (currentQuestionQuestionario > 0) {
        document.querySelector(".voltar-button").id = "3ordens";
    } else {
        document.querySelector(".voltar-button").id = "tubarao";
    }


    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";

    const arrayTemporarioPerguntas = Array.from(arrayTodasPerguntasTubarao);
    if (arrayTemporarioPerguntas.length > currentQuestionQuestionario) {

        arrayTemporarioPerguntas[currentQuestionQuestionario].resposta.forEach(resposta => {
            const pergunta = arrayTemporarioPerguntas[currentQuestionQuestionario].pergunta;
            const coluna = arrayTemporarioPerguntas[currentQuestionQuestionario].coluna;

            let answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.innerText = resposta;
            answerButton.addEventListener("click", () => {

                respostaTubarao.push({
                    coluna: coluna,
                    resposta: resposta
                });


                currentQuestionQuestionario++;
                carregaQuestionarioTubarao();
            })

            document.getElementById("answer-buttons").appendChild(answerButton);
        })

        document.getElementById("question").innerText = arrayTemporarioPerguntas[currentQuestionQuestionario].pergunta;

    } else {

        const respostaTubaraoString = encodeURIComponent(JSON.stringify(respostaTubarao))
        fetch(`http://localhost:3000/tubarao?respostaTubarao=${ respostaTubaraoString }`, {
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














//#endregion













let arrayTodasPerguntasTubarao = new Set([
  ...perguntasCarcharhiniformes,
  ...perguntasLamniformes,
  ...perguntasSqualiformes
]);

















//#region Raia
let currentQuestionRaia = 0;
function carregarPerguntasRaia() {
    if (currentQuestionRaia > 0) {
        document.querySelector(".voltar-button").removeAttribute("style");
        document.querySelector(".voltar-button").id = "raia";
    } else {
        document.querySelector(".voltar-button").id = "sistema";
        //document.querySelector(".voltar-button").style.display = "none";
    }

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

                if (pergunta == "O disco frontal é arredondado?" && resposta == "Sim") {
                    currentQuestionRaia++;
                    carregarPerguntasOrdem1Raia()

                    respostaRaia.push({
                        coluna: coluna,
                        resposta: resposta
                    });
                    return
                }
                if (pergunta == "Orgão elétricos ausentes?" && resposta == "Sim") {
                    currentQuestionRaia++;
                    carregarPerguntasOrdem2Raia()

                    respostaRaia.push({
                        coluna: coluna,
                        resposta: resposta
                    });
                    return
                }
                if (pergunta == "A cauda termina em formato de chicote?" && resposta == "Sim") {
                    currentQuestionRaia++;
                    carregarPerguntasOrdem3Raia()

                    respostaRaia.push({
                        coluna: coluna,
                        resposta: resposta
                    });
                    return
                }
                if (pergunta == "A cauda termina em formato de chicote?" && resposta == "Não") {
                    currentQuestionRaia++;
                    carregarPerguntasOrdem4Raia()

                    respostaRaia.push({
                        coluna: coluna,
                        resposta: resposta
                    });
                    return
                }

                if (pergunta == "A cauda termina em formato de chicote?" && resposta == "Sem informação") {
                    currentQuestionRaia++;
                    carregarTodasPerguntasRaia()

                    respostaRaia.push({
                        coluna: coluna,
                        resposta: resposta
                    });
                    return
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
//#region TORPEDINIFORMES
const perguntasRaiaOrdem1 = [
    //TORPEDINIFORMES
    {
        pergunta: "A coloração dorsal do seu animal é castanha escura?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Coloracao_dorsal_castanha_escura"
    }
]

let currentQuestionRaiaOrdem1 = 0
function carregarPerguntasOrdem1Raia() {

    if (currentQuestionRaiaOrdem1 > 0) {
        document.querySelector(".voltar-button").id = "raiaOrdem1";
    } else {
        document.querySelector(".voltar-button").id = "raia";
        //document.querySelector(".voltar-button").style.display = "none";
    }
    /* 
    
    
        document.querySelector(".voltar-button").id = "raiaOrdem1"
        document.querySelector(".voltar-button").style = "display: none"; */


    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";



    if (perguntasRaiaOrdem1.length > currentQuestionRaiaOrdem1) {

        perguntasRaiaOrdem1[currentQuestionRaiaOrdem1].resposta.forEach(resposta => {
            const pergunta = perguntasRaiaOrdem1[currentQuestionRaiaOrdem1].pergunta;
            const coluna = perguntasRaiaOrdem1[currentQuestionRaiaOrdem1].coluna;

            let answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.innerText = resposta;
            answerButton.addEventListener("click", () => {

                respostaRaia.push({
                    coluna: coluna,
                    resposta: resposta
                });


                currentQuestionRaiaOrdem1++;
                carregarPerguntasOrdem1Raia();
            })

            document.getElementById("answer-buttons").appendChild(answerButton);
        })

        document.getElementById("question").innerText = perguntasRaiaOrdem1[currentQuestionRaiaOrdem1].pergunta;

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
//#endregion

//#region RHINOPRISTIFORMES
let currentQuestionRaiaOrdem2 = 0
function carregarPerguntasOrdem2Raia() {
    document.querySelector(".voltar-button").removeAttribute("style");

    if (currentQuestionRaiaOrdem2 > 0) {
        document.querySelector(".voltar-button").id = "raiaOrdem2"
    } else {
        document.querySelector(".voltar-button").id = "raia";
        //document.querySelector(".voltar-button").style.display = "none";
    }


    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";



    if (perguntasRaiaOrdem2.length > currentQuestionRaiaOrdem2) {

        perguntasRaiaOrdem2[currentQuestionRaiaOrdem2].resposta.forEach(resposta => {
            const pergunta = perguntasRaiaOrdem2[currentQuestionRaiaOrdem2].pergunta;
            const coluna = perguntasRaiaOrdem2[currentQuestionRaiaOrdem2].coluna;

            let answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.innerText = resposta;
            answerButton.addEventListener("click", () => {

                respostaRaia.push({
                    coluna: coluna,
                    resposta: resposta
                });

                currentQuestionRaiaOrdem2++;
                carregarPerguntasOrdem2Raia();
            })

            document.getElementById("answer-buttons").appendChild(answerButton);
        })

        document.getElementById("question").innerText = perguntasRaiaOrdem2[currentQuestionRaiaOrdem2].pergunta;

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
                console.log("data ==> ", data);

                window.location.href = `/front-end/paginaEspecie/paginaEspecie.html?resultado=${ encodeURIComponent(data) }`;
                document.getElementById("question").innerText = `Carregando...`
            })
            .catch(error => console.error("Erro:", error));

    }

}


const perguntasRaiaOrdem2 = [
    //RHINOPRISTIFORMES
    {
        pergunta: "O focinho é extremamente alongado e achatado, formando uma “serra” com dentes laterais visíveis?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Focinho_alongado_achatado"
    },
    {
        pergunta: "Quantos pares de dentes laterais há na serra?",
        resposta: ["20 à 30 pares", "17 a 20 pares", "Sem informação"],
        coluna: "Pares_dentes_laterais"
    },
    {
        pergunta: "Quantas cristas dérmicas estão presentes na margem posterior do espiráculo?",
        resposta: ["Uma crista dérmica", "Duas cristas dérmicas", "Sem informação"],
        coluna: "Cristas_dermicas"
    },
    {
        pergunta: "A coloração dorsal é uniforme ou apresenta manchas claras simétricas?",
        resposta: ["Uniforme, sem manchas claras", "Com manchas claras no dorso", "Sem informação"],
        coluna: "Coloracao_dorsal_uniforme"
    },
]

const perguntasRaiaOrdem3 = [
    //RAJIFORMES
    {
        pergunta: "As nadadeiras pélvicas apresentam um entalhe profundo, formando dois lobos distintos (um anterior e outro posterior)?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Detalhe_nadadeiras_pelvica"
    },

    //SE ACIMA FOR NAO SEGUE AS PERGUNTAS ABAIXO

    {
        pergunta: "A espécie possui uma única nadadeira dorsal separada da nadadeira caudal?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Nad_dorsal_separada_caudal"
    },
    {
        pergunta: "O disco é extraordinariamente largo, mais largo do que comprido, com cauda curta e corpo com espínulas minúsculas e poros sensoriais enegrecidos?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Disco_largo_entalhe"
    },
    {
        pergunta: "A espécie tem o focinho muito curto, disco rombóide, nadadeiras dorsais fusionadas na base, com coloração violeta acinzentada e pontuações negras nas peitorais?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Focinho_curto_dorsais_unidas"
    },
    {
        pergunta: "A espécie apresenta manchas brancas pequenas e desbotadas no dorso e coloração ventral uniformemente castanha escura?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Dorsal_manchas_claras_ponta_arredondada"
    },
    /*     
    {
        pergunta: "A nadadeira peitoral apresenta entalhe profundo, formando dois lóbulos distintos, e o disco é muito largo?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Disco_largo_entalhe"
    },
     */
    {
        pergunta: "O disco é largo, mas as extremidades das nadadeiras peitorais são mais pontiagudas, com coloração dorsal mais uniforme e menos manchas?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Espinhos_focinho_escura_uniforme"
    },

    {
        pergunta: "A série de aguilhões dorsais se apresenta como linha contínua da nuca até a nadadeira dorsal?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Aguilhões_contínuos_nuca"
    },


]

let currentQuestionRaiaOrdem3 = 0
function carregarPerguntasOrdem3Raia() {

    document.querySelector(".voltar-button").removeAttribute("style");

    if (currentQuestionRaiaOrdem3 > 0) {
        document.querySelector(".voltar-button").id = "raiaOrdem3"
    } else {
        document.querySelector(".voltar-button").id = "raia";
        //document.querySelector(".voltar-button").style.display = "none";
    }



    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";



    if (perguntasRaiaOrdem3.length > currentQuestionRaiaOrdem3) {

        perguntasRaiaOrdem3[currentQuestionRaiaOrdem3].resposta.forEach(resposta => {
            const pergunta = perguntasRaiaOrdem3[currentQuestionRaiaOrdem3].pergunta;
            const coluna = perguntasRaiaOrdem3[currentQuestionRaiaOrdem3].coluna;

            let answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.innerText = resposta;
            answerButton.addEventListener("click", () => {

                if (pergunta == "As nadadeiras pélvicas apresentam um entalhe profundo, formando dois lobos distintos (um anterior e outro posterior)?" && resposta == "Sim") {
                    carregarPerguntasFamiliaArhynchobatidae();

                    currentQuestionRaiaOrdem3++;
                    respostaRaia.push({
                        coluna: coluna,
                        resposta: resposta
                    });
                    return
                }

                respostaRaia.push({
                    coluna: coluna,
                    resposta: resposta
                });

                currentQuestionRaiaOrdem3++;
                carregarPerguntasOrdem3Raia();
            })

            document.getElementById("answer-buttons").appendChild(answerButton);
        })

        document.getElementById("question").innerText = perguntasRaiaOrdem3[currentQuestionRaiaOrdem3].pergunta;

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

let perguntasOrdem4Raia = [
    {
        pergunta: "Possui ferrão caudal?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Ferrao_caudal"
    },
    {
        pergunta: "Possui nadadeiras cefálicas?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Nadadeiras_cefalicas"
    },
    {
        pergunta: "Boca terminal ou subterminal?",
        resposta: ["Subterminal", "Terminal", "Sem informação"],
        coluna: "boca_terminal_subterminal"
    },
    {
        pergunta: "Coloração dorsal uniforme?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Coloração_dorsal_uniforme"
    },
    {
        pergunta: "Possui tubérculos dorsais?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Tuberculos_dorsais"
    },
    {
        pergunta: "Cauda longa e fina?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Cauda_longa_fina"
    },
    {
        pergunta: "Placa dentária em qual arcada?",
        resposta: ["Inferior", "Ambas", "Sem informação"],
        coluna: "Placa_dentaria"
    },
    {
        pergunta: "Forma do disco?",
        resposta: ["Diamante", "Alado", "Arredondado", "Sem informação"],
        coluna: "Formato_disco"
    },
    {
        pergunta: "Nadadeira dorsal presente?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Nad_dorsal_presente"
    },
    {
        pergunta: "Sulco em W na face ventral?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Sulco_W"
    },
    {
        pergunta: "Tubérculo orbital em machos?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Turb_orbital"
    },
    {
        pergunta: "Faixa de dentículos dorsais?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Faixa_denticulos"
    },
    {
        pergunta: "Tubs. medianos da nuca à cauda?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Tubs_medianos"
    },
    {
        pergunta: "Tubs. aleatórios e cicatrizes?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Tubs_aleatorios"
    },
    {
        pergunta: "Qual é a coloração dorsal?",
        resposta: ["Violeta", "Marrom", "Preta", "Sem informação"],
        coluna: "Coloracao_dorsal"
    },
    {
        pergunta: "Nadadeira dorsal com ponta branca e peitorais duplamente curvadas?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Nad_dorsal_ponta_branca"
    },
    {
        pergunta: "Sulco frontal profundo e focinho bilobado?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Sulco_frontal_profundo"
    },
    {
        pergunta: "Mandíbula superior com 9 séries de dentes?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Mandibula_superior"
    },
    {
        pergunta: "Nadadeira dorsal atrás das pélvicas e disco arredondado?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Nad_dorsal_pelv"
    },
    {
        pergunta: "Disco largo com asas pontiagudas e focinho projetado?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Disco_asa_pontiaguda"
    },
]

let currentQuestionRaiaOrdem4 = 0;
function carregarPerguntasOrdem4Raia() {

    document.querySelector(".voltar-button").removeAttribute("style");

    if (currentQuestionRaiaOrdem4 > 0) {
        document.querySelector(".voltar-button").id = "raiaOrdem4"
    } else {
        document.querySelector(".voltar-button").id = "raia";
        //document.querySelector(".voltar-button").style.display = "none";
    }

    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";



    if (perguntasOrdem4Raia.length > currentQuestionRaiaOrdem4) {

        perguntasOrdem4Raia[currentQuestionRaiaOrdem4].resposta.forEach(resposta => {
            const pergunta = perguntasOrdem4Raia[currentQuestionRaiaOrdem4].pergunta;
            const coluna = perguntasOrdem4Raia[currentQuestionRaiaOrdem4].coluna;

            let answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.innerText = resposta;
            answerButton.addEventListener("click", () => {

                respostaRaia.push({
                    coluna: coluna,
                    resposta: resposta
                });
                currentQuestionRaiaOrdem4++;
                carregarPerguntasOrdem4Raia();
            })

            document.getElementById("answer-buttons").appendChild(answerButton);
        })

        document.getElementById("question").innerText = perguntasOrdem4Raia[currentQuestionRaiaOrdem4].pergunta;

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


let perguntasFamiliaArhynchobatidae = [
    {
        pergunta: "A superfície dorsal do corpo apresenta ocelos no centro das nadadeiras peitorais?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Ocelos_dorsal"
    },
    {
        pergunta: "Caso possua ocelos dorsais possuem centro claro e dois anéis concêntricos bem definidos?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Ocelo_centro_claro"
    },
    {
        pergunta: "A região ventral do focinho possui uma mancha negra?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Regiao_ventral_negra"
    },
    {
        pergunta: "A superfície ventral do disco é uniformemente escura e a dorsal também?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Superficie_ventral_uniforme"
    },
    {
        pergunta: "A coloração dorsal tem manchas circulares unidas formando um padrão reticulado?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Manchas_circular"
    },
    {
        pergunta: "Há presença de aguilhão médio-peitoral visível e fileiras contínuas de aguilhões médio-dorsais?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Aguilhao_medio"
    },
    {
        pergunta: "Focinho é longo e a largura da boca cabe de 2,5 a 3x no comprimento pré-oral?",
        resposta: ["Sim", "Não", "Sem informação"],
        coluna: "Focinho_longo_largura_boca"
    },

]

let currentQuestionFamiliaArhynchobatidae = 0;
function carregarPerguntasFamiliaArhynchobatidae() {


    document.querySelector(".voltar-button").removeAttribute("style");

    if (currentQuestionFamiliaArhynchobatidae > 0) {
        document.querySelector(".voltar-button").id = "raiaFamiliaArhynchobatidae"
    } else {
        document.querySelector(".voltar-button").id = "raiaOrdem3";
        //document.querySelector(".voltar-button").style.display = "none";
    }

    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";

    if (perguntasFamiliaArhynchobatidae.length > currentQuestionFamiliaArhynchobatidae) {

        perguntasFamiliaArhynchobatidae[currentQuestionFamiliaArhynchobatidae].resposta.forEach(resposta => {
            const pergunta = perguntasFamiliaArhynchobatidae[currentQuestionFamiliaArhynchobatidae].pergunta;
            const coluna = perguntasFamiliaArhynchobatidae[currentQuestionFamiliaArhynchobatidae].coluna;

            let answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.innerText = resposta;
            answerButton.addEventListener("click", () => {


                respostaRaia.push({
                    coluna: coluna,
                    resposta: resposta
                });

                currentQuestionFamiliaArhynchobatidae++;
                carregarPerguntasFamiliaArhynchobatidae();
            })

            document.getElementById("answer-buttons").appendChild(answerButton);
        })

        document.getElementById("question").innerText = perguntasFamiliaArhynchobatidae[currentQuestionFamiliaArhynchobatidae].pergunta;

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

//#endregion



arrayTodasPerguntas = []

arrayTodasPerguntas.push(...perguntasRaiaOrdem1);
arrayTodasPerguntas.push(...perguntasRaiaOrdem2);
arrayTodasPerguntas.push(...perguntasRaiaOrdem3);
arrayTodasPerguntas.push(...perguntasOrdem4Raia);
let currentQuestionTodasPerguntas = 0;


function carregarTodasPerguntasRaia() {
    document.querySelector(".voltar-button").removeAttribute("style");
    document.querySelector(".voltar-button").id = "todasPerguntasRaia"

    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";

    if (arrayTodasPerguntas.length > currentQuestionTodasPerguntas) {

        arrayTodasPerguntas[currentQuestionTodasPerguntas].resposta.forEach(resposta => {
            const pergunta = arrayTodasPerguntas[currentQuestionTodasPerguntas].pergunta;
            const coluna = arrayTodasPerguntas[currentQuestionTodasPerguntas].coluna;

            let answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.innerText = resposta;
            answerButton.addEventListener("click", () => {


                respostaRaia.push({
                    coluna: coluna,
                    resposta: resposta
                });

                currentQuestionTodasPerguntas++;
                carregarTodasPerguntasRaia();
            })

            document.getElementById("answer-buttons").appendChild(answerButton);
        })

        document.getElementById("question").innerText = arrayTodasPerguntas[currentQuestionTodasPerguntas].pergunta;

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

//#endregion

