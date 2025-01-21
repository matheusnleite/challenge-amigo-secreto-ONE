//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaDeAmigos = [];
let nome;

function adicionarAmigo(nome){
    nome = document.getElementById('amigo').value // lendo o nome digitado

    if(nome == ''){
        alert('Por favor, insira um nome válido.');
    }
    else{
        listaDeAmigos.push(nome);
        limparCampo();
    }    
}

function limparCampo(){
    nome = document.getElementById('amigo');
    nome.value = '';
}
