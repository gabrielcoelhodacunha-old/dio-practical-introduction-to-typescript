"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = String(0);
function somarAoSaldo(soma) {
    let valor = Number(campoSaldo.innerHTML);
    campoSaldo.innerHTML = String(valor + soma);
}
function limparSaldo() {
    campoSaldo.innerHTML = String(0);
}
botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});
botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});
