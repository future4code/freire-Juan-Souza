/*Atividade Interpretação 1: Ele irá imprimir número 10.
Será impresso número 10 seguido de 5. */

//Atividade Interpretação 2: Programa não irá imprimir nenhum valor pois existe conflito na atribuição de valores no código.//

/*Atividade Interpretação 3: É solicitado ao usuário atribuir valores as duas primeiras variáveis para informar o mesmo um 
terceiro valor usando as duas em fórmula matemática.
Nomes mais adequados para as variáveis seriam, respectivamente, horarioTrabalho e pagamentoDia*/

//Atividade 1//

console.log("Atividade de escrita")

let nome
console.log (typeof nome)
let idade
console.log (typeof idade)
//As variáveis foram classificadas como indefinidas, pois não possuem valor atribuido a elas.//

const nomeUsuario = prompt("Qual o seu nome?")
console.log (typeof nomeUsuario)
const idadeUsuario = prompt("Qual a sua idade?")
console.log (typeof idadeUsuario)
//As variáveis foram classificadas como strings, pois são variáveis com base em caracteres.//

console.log("Olá", nomeUsuario, "você tem", idadeUsuario, "anos")

//Atividade 2//

let respostaCor = prompt("Você está vestindo vermelho hoje?")
console.log("Você está vestindo vermelho hoje?", respostaCor)
let respostaAluno = prompt("Você é aluno Labenu?")
console.log("Você é aluno Labenu?", respostaAluno)
let respostaMotivacao = prompt ("Você está motivado com o curso?")
console.log("Você está motivado com o curso?", respostaMotivacao)

//Atividade 3//

let valorA = 10
let valorB = 25
let valorC
valorC = valorA
valorA = valorB
valorB = valorC
console.log("O primeiro valor é:", valorA, "e o segundo valor é:", valorB)


