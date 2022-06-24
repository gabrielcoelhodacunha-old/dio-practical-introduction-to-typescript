let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLButtonElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLButtonElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLSpanElement;

campoSaldo.innerHTML = String(0);

function somarAoSaldo(soma : number) : void {
  let valor = Number(campoSaldo.innerHTML);
  campoSaldo.innerHTML = String(valor + soma);
}

function limparSaldo() : void {
    campoSaldo.innerHTML = String(0);
}

botaoAtualizar.addEventListener('click', function () {
    somarAoSaldo(Number(soma.value));
});

botaoLimpar.addEventListener('click', function () {
    limparSaldo();
});