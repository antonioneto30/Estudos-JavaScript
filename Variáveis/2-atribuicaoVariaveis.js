console.log("Trabalhando com atribuição de variáveis")


//varável: qualquer coisa guardada na memória, pode mudar
//não muda
//Boas práticas usar const

const idade = 23;
let nome = "Antonio"; //se usar const ao invés de let ele não funciona
let sobrenome = "Neto"; //se usar const ao invés de let ele não funciona

console.log(nome,sobrenome);
console.log(nome + " " + sobrenome);
console.log(`Meu nome é ${nome} ${sobrenome}`)

nome = nome + sobrenome;
console.log(nome);

let contador = 0
contador = contador + 1

let numero; //declarando variável
numero = 5; //atribuindo valor
numero = numero+1;
console.log(numero);