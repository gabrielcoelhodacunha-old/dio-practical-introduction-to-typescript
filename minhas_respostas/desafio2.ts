interface IPessoa {
  nome: string,
  idade: number,
  profissao: EProfissao
};

enum EProfissao {
  Atriz,
  Padeiro,
};

let pessoa1 = {} as IPessoa;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = EProfissao.Atriz;

let pessoa2 = {} as IPessoa;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = EProfissao.Padeiro;

let pessoa3 : IPessoa = {
    nome: "laura",
    idade: 32,
    profissao: EProfissao.Atriz
};

let pessoa4 : IPessoa = {
    nome: "carlos",
    idade: 19,
    profissao: EProfissao.Padeiro
}