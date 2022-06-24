/* Para testar e necessario copiar esse codigo para app.ts
    e copiar o codigo HTML abaixo para dentro da tag body de index.html.
    
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: <span id="campo-saldo"></span>"</h1>
*/

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