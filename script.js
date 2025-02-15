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
        pergunta: "Focinho", 
        resposta: ["Alongado e Comprimido", "Curto, rombico ou conico"]
    }, 
    {
        pergunta: "Proboscide", 
        resposta: ["Sim", "Nao", "Nulo"]    

    }, 
    {
        pergunta: "Nadadeira Anal",
        resposta: ["Sim", "Nao", "Nulo"]
    },
    {
        pergunta: "Nadadeira Caudal",
        resposta: ["Sim", "Nao", "Nulo"]
    },
    {
        pergunta: "Clasper Bifurcado",
        resposta: ["Sim", "Nao", "Nulo"]
    },
    {
        pergunta: "Margem Segunda Nadadeira Dorsal",
        resposta: ["Reto", "Ondulado", "Nulo"]
    }
];

const respostaQuimera = [];

const perguntasTubarao = [
    {
        pergunta: "Focinho", 
        resposta: ["Alongado e Comprimido", "Curto, rombico ou conico"]
    }, 
];

const respostaTubarao = []; 


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
        carregaPerguntasQuimera();

    } else if (resposta == "5 à 7") {
        currentQuestion++;
        startSystem();

    } else if (resposta == "Ventrais a cabeça") {
        carregarPerguntasRaia();

    } else if (resposta == "Laterais a cabeça") {
        carregarPerguntasTubarao();

    }

}

//fazer igual para tubarao e raia
let currentQuestionQuimera = 0;
function carregaPerguntasQuimera() {
  

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
                carregaPerguntasQuimera();
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


function carregarPerguntasRaia() {
console.log("carregarPerguntasRaia ==> ", "carregarPerguntasRaia");



}

function carregarPerguntasTubarao() {
console.log("carregarPerguntasTubarao ==> ", "carregarPerguntasTubarao");



}
