/* Ativade Leitura 1

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) 
Entrega resultado FALSE pois operador "&&" não encontrou apenas valores TRUE.

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
Entrega resultado FALSE pois operador "&&" requer todas as variáveis TRUE para entregar TRUE.

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) Entrega resultado TRUE pois operador "||" o entrega com apenas um TRUE presente e, em seguida, "!resultado"
se converte em TRUE, garantido final TRUE.

console.log("d. ", typeof resultado) Resultado se mostra boolean, pois é o tipo de variável que contém apenas dois valores, sendo eles
TRUE ou FALSE

 Atividade Leitura 2

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) 
Na formatação atual do código os valores de primeiroNumero e segundoNumero são do tipo string, portanto, concatena ao invés de
somar.

 Atividade Leitura 3

let primeiroNumero = prompt("Digite um numero!")
let primeiroValor = Number(primeiroNumero)
let segundoNumero = prompt("Digite outro numero!")
let segundoValor = Number(segundoNumero)

const soma = primeiroValor + segundoValor

console.log(soma)   

Recomendar ao colega a converter os valores inseridos pelo usuário para Number, assim a soma pode ocorrer da forma desejada ao invés
de concatenar.
*/

//Atividade de Escrita 1//

let idadeUsuario = Number(prompt("Qual a sua idade?"))
let idadeMelhorA = (prompt("Qual a idade do seu melhor amigo(a)?"))
const maisVelho = idadeUsuario >= idadeMelhorA
console.log("Você é o mais velho entre os dois?", maisVelho)
const diferencaIdade = idadeUsuario % idadeMelhorA
console.log("A diferença é de", diferencaIdade, "anos.")

// Atividade de Escrita 2//

let numeroPar = Number(prompt("Digite um número par"))
const condicaoPar = numeroPar % 2
console.log(condicaoPar)

// Se usuário digitar valor Par, é impresso 0 para o usuário. Caso ele insira valor ímpar, ele imprimi 1.//

// Atividade 3 //

let idadeAnos = Number(prompt("Quantos anos você tem?"))
let idadeMeses = idadeAnos * 12
let idadeDias = idadeMeses * 30
let idadeHoras = idadeDias * 24
console.log("Você tem", idadeMeses, "meses,", idadeDias, "dias e", idadeHoras, "de vida." )

// Atividade 4 //

let valor1 = Number(prompt("Insira um valor:"))
let valor2 = Number(prompt("Insira mais um valor:"))
const maior1 = valor1 > valor2
console.log("O primeiro valor é maior que o segundo?", maior1)
const igual1 = valor1 == valor2
const divisivel1 = valor1 % valor2 == 0
const divisivel2 = valor2 % valor1 == 0
console.log("O primeiro valor é igual ao segundo?", igual1)
console.log("O primeiro número é divisível pelo segundo?", divisivel1)
console.log("O segundo número é divisível pelo primeiro?", divisivel2)




