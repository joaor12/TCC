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
        resposta: ["Alongado e Comprimido", "Curto, rombico ou conico"]
    }, 
    {
        pergunta: "Seu animal possui proboscide?", 
        resposta: ["Sim", "Nao", "Nulo"]    

    }, 
    {
        pergunta: "Seu animal possui nadadeira anal?",
        resposta: ["Sim", "Nao", "Nulo"]
    },
    {
        pergunta: "Seu animal possui nadadeira caudal?",
        resposta: ["Sim", "Nao", "Nulo"]
    },
    {
        pergunta: "Seu animal possui o clasper bifurcado?",
        resposta: ["Sim", "Nao", "Nulo"]
    },
    {
        pergunta: "Selecione o formato da margem da segunda nadadeira dorsal",
        resposta: ["Reto", "Ondulado", "Nulo"] 
    }
];

const respostaQuimera = [];

const perguntasTubarao = [
    {
        pergunta: "Selecione o formato do focinho.", 
        resposta: ["Arredondado", "Estreito e Pontiagudo", "Largo e comprimido"]
    }, 
];

const respostaTubarao = [];

const perguntasRaia = [
    {
        pergunta: "Selecione o formato do corpo.", 
        resposta: ["Alongado", "Achatado"]
    },
    {
        pergunta: "Selecione o lobo inferior na nadadeira dorsal?",
        resposta: ["Com lobo inferior definido", "Sem lobo inferior definido"]
    },
    {
        pergunta: "Selecione o Comprimento da órbita",
        resposta: ["Cabe entre 1,1 a 1,5 vezes na distancia internasal", "Cabe entre 1,4 a 2,6 vezes na distancia internasal"] 
    } 
];

const respostaRaia = [];


let currentQuestion = 0;

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
  

    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";



    if (perguntasQuimera.length > currentQuestionQuimera) {

        perguntasQuimera[currentQuestionQuimera].resposta.forEach(resposta => {
            const pergunta = perguntasQuimera[currentQuestionQuimera].pergunta;


            let answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.innerText = resposta;
            answerButton.addEventListener("click", () => {
                respostaQuimera.push({
                    pergunta:pergunta,
                    resposta:resposta
                });

                currentQuestionQuimera++;
                carregarPerguntasQuimera();
                console.log("respostaQuimera ==> ", respostaQuimera);
            })

            document.getElementById("answer-buttons").appendChild(answerButton);
        })

    document.getElementById("question").innerText = perguntasQuimera[currentQuestionQuimera].pergunta;

        
    } else { 

        fetch("http://localhost:3000/quimera", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error("Erro:", error));






    }

       
 
    
}

let currentQuestionTubarao = 0;
function carregarPerguntasTubarao() {


    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";



    if (perguntasTubarao.length > currentQuestionTubarao) {

        perguntasTubarao[currentQuestionTubarao].resposta.forEach(resposta => {
            const pergunta = perguntasTubarao[currentQuestionTubarao].pergunta;

            let answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.innerText = resposta;
            answerButton.addEventListener("click", () => {
                respostaTubarao.push({
                    pergunta:pergunta,
                    resposta:resposta
                });

                currentQuestionTubarao++;
                carregarPerguntasTubarao();
                console.log("respostaTubarao ==> ", respostaTubarao);
            })

            document.getElementById("answer-buttons").appendChild(answerButton);
        })

        document.getElementById("question").innerText = perguntasTubarao[currentQuestionTubarao].pergunta;

    } else { 

        fetch("http://localhost:3000/quimera", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error("Erro:", error));

    }

       

    
}

let currentQuestionRaia = 0;
function carregarPerguntasRaia() {


    const div_buttons = document.getElementById("answer-buttons");
    div_buttons.style.display = "block";
    div_buttons.innerHTML = "";



    if (perguntasRaia.length > currentQuestionRaia) {

        perguntasRaia[currentQuestionRaia].resposta.forEach(resposta => {
            const pergunta = perguntasRaia[currentQuestionRaia].pergunta;

            let answerButton = document.createElement("button");
            answerButton.classList.add("answer-button");
            answerButton.innerText = resposta;
            answerButton.addEventListener("click", () => {
                respostaRaia.push({
                    pergunta:pergunta,
                    resposta:resposta
                });

                currentQuestionRaia++;
                carregarPerguntasRaia();
                console.log("respostaRaia ==> ", respostaRaia);
            })

            document.getElementById("answer-buttons").appendChild(answerButton);
        })

        document.getElementById("question").innerText = perguntasRaia[currentQuestionRaia].pergunta;

    } else { 

        fetch("http://localhost:3000/quimera", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(error => console.error("Erro:", error));

    }

 
}