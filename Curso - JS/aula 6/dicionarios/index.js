// nome
// autor
// editora
// numero de páginas
// edição
// data de publicação
// orelha
// capa dura
// cores

const livro1 = {
  nome: "O Nome do Vento",
  autor: "Patrick Rothfuss",
  orelha: true,
  cores: ['amarelo', 'vermelho']
};

// const livro2 = {  // primeira forma
//   nome: livro1.nome,
//   autor: livro1.autor,
//   orelha: livro1.orelha
// }; 

// const livro2 = {  // segunda forma
//   ...livro1
// }; 

// const livro2 = JSON.parse(JSON.stringify(livro1)); // terceira forma

// livro2.nome = "O Temor do Sábio";
// livro2.cores.push('preto');

const nome = "As Origens do Totalitarismo";
const autor = "Hannah Arendt";
const orelha = false;
const cores = ['azul', 'amarelo'];

const livro3 = {
  nome,
  autor,
  orelha,
  cores
};

// livro3.nome = nome;
// livro3.autor = autor;
// livro3.orelha = orelha;
// livro3.cores = cores;

console.log(livro3);
