function selectOption(option) {
    alert("Você selecionou " + option);
}

const questions = [
    "Seu personagem é real?",
    "Seu personagem é um homem?",
    "Seu personagem é famoso na TV?",
    "Seu personagem é brasileiro?"
];

let currentQuestion = 0;

function startSystem() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("answer-buttons").style.display = "block";
    document.getElementById("question").innerText = questions[currentQuestion];
}

function answer(response) {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        document.getElementById("question").innerText = questions[currentQuestion];
    } else {
        document.getElementById("question").innerText = "Estou pensando na resposta...";
        setTimeout(() => {
            document.getElementById("question").innerText = "Adivinhei! Seu personagem é seu pai de calcinha";
        }, 2000);
    }
}

questionTubarao = [{
    pergunta: "Qual é a posição das branquias?", alternativas: ["Sim, Nao, Nulo"],
    pergunta: "Qual o formato do focinho?", alternativas: ["Arredondado, Estreito e Pontiagudo, Largo e Comprimido"]
    
    
    }]
    
    questionTubarao.forEach(question => {
        let questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = question.pergunta;
    
        question.alternativas.forEach(alternativa => {
            let alternativaDiv = document.createElement("button");
            alternativaDiv.classList.add("alternativa");
            alternativaDiv.innerHTML = alternativa;
            questionDiv.appendChild(alternativaDiv);
        });
        document.getElementById("questions1").appendChild(questionDiv);
    
    });