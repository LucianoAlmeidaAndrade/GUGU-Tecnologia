'use scrict';

const selectVagas = document.querySelector("#vaga");

// AJAX
// Técnica de Comunicação e Transmissão de Dados

// Etapa 1)
// Acessando a URL da API que queremos consulta
fetch("http://localhost:3000/vagas")

// Etapa 2)
// .. e então (then) capture a resposta da API no formato json
.then( resposta => resposta.json())

// Etapa 3)
//  ... e entao(then) capture os Dados da resposta e faça o que quiser com eles (console, colocar no HTML etc)
.then( dados => {

    selectVagas.innerHTML - ""
    for(let vaga of dados){
        let opcao = document.createElement("option");
        opcao.value = vaga.id;
        opcao.textContent = vaga.titulo;
        selectVagas.appendChild(opcao);
    }
});
