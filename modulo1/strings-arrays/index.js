/*Atividade Leitura 1

let array
console.log('a. ', array) - Array sem valor atribuido, impressão de "undefined" na tela.

array = null
console.log('b. ', array) - Array com valor nulo, impressão de "null" na tela.

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] - Será impresso na tela o número de caracteres presentes na array.
console.log('c. ', array.length)

let i = 0
console.log('d. ', array[i]) - Imprimi a informação presente na posição 0 da array acima.

array[i+1] = 19
console.log('e. ', array) - Será impresso toda a array e a informação de posição 1 será trocada de 4 para 19.

const valor = array[i+6]
console.log('f. ', valor) - Tela irá imprimir do valor 0 ao valor 6 da lista.

/*Atividade Leitura 2

const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) - SUBI NUM ÔNIBUS EM MIRROCOS "27" */

// Atividade de Escrita 1 //

const nomeUsuario = prompt("Por favor, insira seu nome:")
const emailUsuario = prompt("Favor inserir seu email:")
const emailMinusculo = emailUsuario.toLowerCase()
console.log(`O email ${emailMinusculo} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeUsuario}`)

// Atividade de Escrita 2 //

let comidasFav = ["Sushi", "saladas", "churrasco", "açaí", "frutas"]
console.log(comidasFav)
console.log(`Essas são minhas comidas favoritas:
${comidasFav[0]}
${comidasFav[1]}
${comidasFav[2]}
${comidasFav[3]}
${comidasFav[4]}`)
let comidaUsuario = prompt("Qual sua comida favorita?")
let respostaUsuario = 0
comidasFav[respostaUsuario+1] = comidaUsuario
console.log(comidasFav)

//Atividade de Escrita 3//

let listaDeTarefas = []
let tarefaUm = prompt("Qual a primeira tarefa do dia?")
listaDeTarefas.push(tarefaUm)
let tarefaDois = prompt("Qual a segunda tarefa?")
listaDeTarefas.push(tarefaDois)
let tarefaTres = prompt("Qual a terceira tarefa?")
listaDeTarefas.push(tarefaTres)
console.log(listaDeTarefas)
let removerItem = prompt("Digite um valor de 0 a 2:")
listaDeTarefas.splice(removerItem, 1)
console.log(listaDeTarefas)

