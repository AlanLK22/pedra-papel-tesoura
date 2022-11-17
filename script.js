const computador = document.getElementById('computador');
const usuario = document.getElementById('usuario');
const btn = document.querySelectorAll('button');
const resultado = document.getElementById('resultado');
const placarDoComputador = document.getElementById('resultado-computador');
const placarDoJogador = document.getElementById('resultado-jogador');
let acumulaPlacarComputador = 0;
let acumulaPlacarJogador = 0;
let escolhaUsuario;
let ComputadorEscolhe;
let resultadoDoGame;




btn.forEach(btn => btn.addEventListener('click', e => {
    escolhaUsuario = e.target.id
    usuario.innerHTML = escolhaUsuario;
     usuario.style.color = 'blue';
     computador.style.color = 'red';  
    gerarEscolhaComputador();
    obterResultado();
    placar();
    
}
))

function gerarEscolhaComputador() {
    const randomNumber = Math.floor(Math.random() * btn.length) + 1;

    
    if (randomNumber === 1) {
        ComputadorEscolhe = 'pedra';
    }
    if (randomNumber === 2) {
        ComputadorEscolhe = 'tesoura';
    }
    if (randomNumber === 3) {
        ComputadorEscolhe = 'papel';
    }
    computador.innerHTML = ComputadorEscolhe;
}

function obterResultado() {
    if (ComputadorEscolhe === escolhaUsuario) {
        resultadoDoGame = 'Empate😐'
    }
    if (ComputadorEscolhe === 'pedra' && escolhaUsuario === 'papel') {
        resultadoDoGame = 'Você venceu!😄'
    }
    if (ComputadorEscolhe === 'pedra' && escolhaUsuario === 'tesoura') {
        resultadoDoGame = 'Você perdeu😢'
    }
    if (ComputadorEscolhe === 'papel' && escolhaUsuario === 'tesoura') {
        resultadoDoGame = 'Você venceu!😄'
    }
    if (ComputadorEscolhe === 'papel' && escolhaUsuario === 'pedra') {
        resultadoDoGame = 'Você perdeu😢'
    }
    if (ComputadorEscolhe === 'tesoura' && escolhaUsuario === 'pedra') {
        resultadoDoGame = 'Você venceu!😄'
    }
    if (ComputadorEscolhe === 'tesoura' && escolhaUsuario === 'papel') {
        resultadoDoGame = 'Você perdeu😢'
    }
    resultado.innerHTML = resultadoDoGame;
}

const placar = () => {
    if(resultadoDoGame === 'Você venceu!😄'){
        acumulaPlacarJogador++;
    }if(resultadoDoGame === 'Você perdeu😢'){
        acumulaPlacarComputador++;
    }
    placarDoJogador.innerHTML = acumulaPlacarJogador;
    placarDoComputador.innerHTML = acumulaPlacarComputador;
}
