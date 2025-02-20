const params = new URLSearchParams(window.location.search);
const resultado = JSON.parse(params.get("resultado"));
console.log("resultado ==> ", resultado);
const{animais, mensagem} = resultado
typeof(animais)
console.log("animais ==> ", animais);
document.getElementById("resultado").innerText = mensagem;
let contadorAnimais = 0
if (animais.length > 0) {
    animais.forEach(animal => {
        const {_id,Animal,Ordem,Família,Genero,Especie,Qntd_aberturas_branquiais,Focinho,Proboscide,Nadadeira_anal,Nadadeira_caudal,Clasper_bifurcado,Margem_seg_nad_dorsal, 
            ID_fishbase} = animal
        contadorAnimais++
        let tr = document.createElement('tr')
        const tbody = document.querySelector('.game-container table tbody')
        tbody.appendChild(tr)


        //Coluna Animal
        td = document.createElement('td'); 
        tr.appendChild(td); 
        td.className = "coluna_animal"; 

        p = document.createElement("p");
        td.appendChild(p); 
        p.innerHTML = Animal
        
        //Coluna Ordem
        td = document.createElement('td'); 
        tr.appendChild(td); 
        td.className = "coluna_ordem"; 

        p = document.createElement("p");
        td.appendChild(p); 
        p.innerHTML = Ordem

        //Coluna Família
        td = document.createElement('td'); 
        tr.appendChild(td); 
        td.className = "coluna_familia"; 

        p = document.createElement("p");
        td.appendChild(p); 
        p.innerHTML = Família

        //Coluna Genero
        td = document.createElement('td'); 
        tr.appendChild(td); 
        td.className = "coluna_genero"; 

        p = document.createElement("p");
        td.appendChild(p); 
        p.innerHTML = Genero

        //Coluna Especie
        td = document.createElement('td'); 
        tr.appendChild(td); 
        td.className = "coluna_especie"; 

        p = document.createElement("p");
        td.appendChild(p); 
        p.innerHTML = Especie

    });
}

if(contadorAnimais > 1){ 
    document.getElementById("resultado").innerText = `Aqui estão algumas sugestões`;
    
    document.getElementById("fishbase").href = `https://www.fishbase.se/search.php`;
} else { 

    
    document.getElementById("fishbase").href = `https://www.fishbase.se/summary/${animais[0].ID_fishbase}`;



}