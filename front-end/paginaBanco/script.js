function carregaAnimais(){

    fetch(`http://localhost:3000/listaAnimais`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
    .then(response => response.text())
    .then(data =>{
        
    const animais = JSON.parse(data);
        renderTabelaAnimais(animais)
        
    })
    .catch(error => console.error("Erro:", error));

}

carregaAnimais();


function renderTabelaAnimais(animais) {
    animais.forEach(animal => {
        const {_id,Animal,Ordem,Família,Genero,Especie, ID_fishbase } = animal;
        let tr = document.createElement('tr');
        tr.id = _id;
        const tbody = document.querySelector('.game-container table tbody');
        tbody.appendChild(tr);

        //Coluna Animal
        td = document.createElement('td'); 
        tr.appendChild(td); 
        td.className = "coluna_animal"; 

        p = document.createElement("p");
        td.appendChild(p); 
        p.innerHTML = Animal;
        
        //Coluna Ordem
        td = document.createElement('td'); 
        tr.appendChild(td); 
        td.className = "coluna_ordem"; 

        p = document.createElement("p");
        td.appendChild(p); 
        p.innerHTML = Ordem;

        //Coluna Família
        td = document.createElement('td'); 
        tr.appendChild(td); 
        td.className = "coluna_familia"; 

        p = document.createElement("p");
        td.appendChild(p); 
        p.innerHTML = Família;

        //Coluna Genero
        td = document.createElement('td'); 
        tr.appendChild(td); 
        td.className = "coluna_genero"; 

        p = document.createElement("p");
        td.appendChild(p); 
        p.innerHTML = Genero;

        //Coluna Especie
        td = document.createElement('td'); 
        tr.appendChild(td); 
        td.className = "coluna_especie"; 

        p = document.createElement("p");
        td.appendChild(p); 
        p.innerHTML = Especie;

        td = document.createElement('td'); 
        tr.appendChild(td); 
        td.className = "coluna_fishbase"; 

        const a = document.createElement('a'); 
        td.appendChild(a); 

        let button = document.createElement('button');
        a.appendChild(button); 
        button.className = "button-peixe"
        button.addEventListener('click', () =>{ 
            a.href = `https://www.fishbase.se/summary/${ID_fishbase}`;
            a.target = '_blank'
        }) 

        let i = document.createElement('i')
        button.appendChild(i); 

        i.className = "fa-solid fa-fish"



    });
    
}