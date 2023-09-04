//1 Questão -crie uma condição composta com uma variável dia e a condição verifica se está de dia mostre 'claro' senão mostre está 'de noite'
var dia = false;

if (dia) {
  console.log("É dia lindo lá fora, está claro");
} else {
  console.log("Está de noite, está na hora de dormir");
}

//2 Questão -  Crie um loop for() que exiba apenas números pares até o 20 no console.log()
for (let i =0; i <= 20; i += 2) {
  console.log(i);
}

//3 Questão - crie uma função que exiba uma mensagem no console
function mostrarMensagem(){
    console.log("Olá mundo!Esta é a minha mensagem.")
}
mostrarMensagem();

//4 Questão - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function mostreMeuNome(nome){
    console.log("Meu nome é " + nome);
}

mostreMeuNome("Amanda");

//5 Questão - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function mostreInformações(nome, idade, estiloMusical){
    console.log("Nome: " + nome);
    console.log("Idade: " + idade);
    console.log("Estilo musical preferido é: " + estiloMusical);
}
mostreInformações("Amanda", 20, "mpb");
//6 Questão crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function mostrePreferencias(filme, musica){
    console.log("Filme: "+ filme);
    console.log("Música: " + musica);
}
mostrePreferencias("A cinco passos de você", "Amarelo, azul e branco");
// 7 Questão - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triploDoNumeral(numero) {
  return numero * 3;
}

const numeral= 10;
const resultado = triploDoNumeral(numeral);
console.log(`O triplo de ${numeral} é ${resultado}`);

//8 Questão - crie uma função que  verifique se uma  variável é true ou false
function verificarValor(valor) {
  return typeof valor === 'boolean';
}

const variavel = true;
const resultancia = verificarValor(variavel);
console.log(`A variável é booleana? ${resultancia}`);

//9 Questão - crie um array que receba 5 itens e exiba no console.
const listaCompras = [
  "copo quencher stanley",
  "protetor solar bioré",
  "cicaplast",
  "niacinamida",
  "carmed fini"
];
console.log(listaCompras);

//10 Questão - Utilize um método para adicionar um nome ao inicio do array.
listaCompras.unshift("Alexa");

console.log(listaCompras);
//11 Questão - Utilize um método para remover o último nome do array.
listaCompras.pop();
console.log(listaCompras);

//12 Questão - Utilize um método para adicionar dois nomes ao fim do array
listaCompras.push("macbook", "smartwatch");

console.log(listaCompras);
//13 Questão -  Utilize um método para remover o primeiro nome do array.

listaCompras.shift();

console.log(listaCompras);
//14 Questão - Utilize um método para organizar em ordem crescente o seguinte let numbers = [7,5,6,3,8,9,2,1,4]
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];

numbers.sort(function(a, b) {
  return a - b;
});

console.log(numbers);
//15 Questão - Crie um objeto que receba ao menos três propriedades sobre você
const meuperfil = {
  nome: "Amanda Emanuele",
  idade: 20,
  ocupacao: "Estudante"
};

console.log(meuperfil);
//16 Questão - Adicione uma nova propriedade sem alterar seu objeto inicial.
const meuPerfil = {
  nome: "Amanda Emanuele",
  idade: 20,
  ocupacao: "Estudante"
};
const novoPerfil =  Object.assign({}, meuPerfil);

novoPerfil.area = "Front-end";

console.log(meuPerfil);
console.log(novoPerfil);
//17 Questão - Remova uma propriedade desse objeto.
delete meuPerfil.idade;

console.log(meuPerfil);

//18 Questão - Mostre no console todas as propriedades desse objeto.
for(let chave in meuPerfil) {
  console.log(chave + ": " + meuPerfil[chave]);
}

meuPerfil.idade = 20;
console.log(meuPerfil);

/*19 Questão - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
Na propriedade amigos, adicione ao menos 4 amigos.*/

const cadastro =[
  {
    nome: "Amanda",
    idade: 20,
    telefone: "9811-438-2389",
    amigos:["Ronald", "Bruno", "Romulo", "Marcelo"]
    },
    {
      nome: "Ronald",
      idade: 20,
      telefone: "123-456-7890",
      amigos: ["Bruno", "Amanda", "David", "Eve"] 
    },
    {
    nome: "Bruno",
    idade: 21,
    telefone: "987-654-3210",
    amigos: ["Alice", "Carol", "Eve", "Frank"]
    },
    {
    nome: "Romulo",
    idade: 20,
    telefone: "555-123-4567",
    amigos: ["Antonio", "Bob", "David", "Grace"]
    },
    {
    nome: "Marcelo",
    idade: 35,
    telefone: "111-222-3333",
    amigos:["Saulo", "Bruno", "Romulo", "Laura"]
    },
    {
    nome: "Saulo",
    idade: 22,
    telefone: "999-888-7777",
    amigos: ["Aline", "Bob", "Carol", "David"]
    }
];
console.log(cadastro);
//20 Questão - Mostre no console o nome de um amigo de cada lista.
for (let i = 0; i < cadastro.length; i++) {
  const amigo = cadastro[i].amigos[0];
  console.log(`Amigo de ${cadastro[i].nome}: ${amigo}`);
}