let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroSecreto();
let tentativas = 1;


/*let titulo = document.querySelector('h1');
titulo.innerHTML = ' Jogo do Numero Secreto ';

let paragrafo HTML = 'Escolha um numero entre 1 a 100';*/

function exibirtextoNaTela (tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirtextoNaTela('h1' , 'Jogo do Numero Secreto');
    exibirtextoNaTela('p' , 'Escolha um numero entre 1 a 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirtextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'Tentativas' : 'Tentativa';
        let mensagenTentativas = `Voce Descobriu o numero secreto com ${tentativas} ${palavraTentativa}!`;
        exibirtextoNaTela('p', mensagenTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(chute > numeroSecreto){
            exibirtextoNaTela('p', 'o numero secreto é menor');
        } else{
            exibirtextoNaTela('p', 'o numero secreto é maior');
        }
        tentativas++;

        limparCampo();
    }
}

function gerarNumeroSecreto (){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroSecreto();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('disabled').setAttribute('disabled',true);
}

