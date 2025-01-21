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
        atualizarLista();
    }    
}

function limparCampo(){
    nome = document.getElementById('amigo');
    nome.value = '';
}

function atualizarLista(){
    let lista = document.getElementById('listaAmigos'); //aponta para a lista nao ordenada UL
    lista.innerHTML = ''; // limpa a lista para nao duplicar nomes

    for(let i = 0; i<listaDeAmigos.length;i++){ //percorre a lista de amigos
        let itemLista = document.createElement('li'); //cria o elemento li
        itemLista.innerHTML = listaDeAmigos[i]; //inseere o conteudo dentro do elemento li
        lista.appendChild(itemLista); //insere o elemento li a lista ul
    }
}