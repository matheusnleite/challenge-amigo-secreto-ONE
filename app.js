//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let nome;
let quantidadeAmigos = amigos.length;

function adicionarAmigo(nome){
    nome = document.getElementById('amigo').value // lendo o nome digitado

    if(nome == ''){
        alert('Por favor, insira um nome válido.');
    }
    else{
        amigos.push(nome);
        limparCampo();
        atualizarLista();
    }    
}

function limparCampo(){
    nome = document.getElementById('amigo');
    nome.value = '';
}

function atualizarLista(){
    quantidadeAmigos = amigos.length;
    let lista = document.getElementById('listaAmigos'); //aponta para a lista nao ordenada UL
    lista.innerHTML = ''; // limpa a lista para nao duplicar nomes

    for(let i = 0; i<quantidadeAmigos;i++){ //percorre a lista de amigos
        let itemLista = document.createElement('li'); //cria o elemento li
        itemLista.innerHTML = amigos[i]; //inseere o conteudo dentro do elemento li
        lista.appendChild(itemLista); //insere o elemento li a lista ul
    }
}

function sortearAmigo(){    
    if(quantidadeAmigos != 0){
        let indiceAleatorio = Math.floor(Math.random() * quantidadeAmigos);
        let amigoSorteado = document.getElementById('resultado');
        amigoSorteado.innerHTML = 'O amigo secreto sorteado é: ' + amigos[indiceAleatorio];
    }
}