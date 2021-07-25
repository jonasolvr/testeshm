// - Ao carregar a página, determinar se é cadastro ou edição:
//   Para isso, observar se a url atual contém algo depois de catalogo/{id?}
//   Se for edição, preencher campos do formulário com os dados do herói
// - Ao clicar em Salvar, devemos criar ou atualizar o herói preenchido no formulário
window.addEventListener("load", (event) => {
  const urlAtual = window.location.href;
  if (urlAtual.endsWith("/cadastro")) {
    // quer dizer que não termina com número, ou seja, é um cadastro novo
  } else {
    // quer dizer que é uma edição
    // urldaaplicacao.com/cadastro/1
    // ['urldaaplicacao.com', '1']
    // const array = [1, 2, 3, 4, "quatro"];
    // const texto = array[4];

    const idHeroi = urlAtual.split("/cadastro/")[1];
  }

  console.log("page is fully loaded");
});
// const numero = 1;
// let numeroPar = 2;
// numeroPar = 4;
// // numero = 2 nao funciona

// const texto = "oi tudo bem?";
// const ehHetero = true; // false
// const lista = [1, 2, 3, 4]; // ['lucas', 'ricardo', 'cruz']
// const pessoa = {
//   nome: "Lucas",
//   idade: 21,
// };

// const idadeDoLucas = pessoa.idade;

// const somarDoisValores = function (numeroUm, numeroDois) {
//   const soma = numeroUm + numeroDois;
//   return soma;
// };

// const resultadoDaSoma = somarDoisValores(2, 4);
