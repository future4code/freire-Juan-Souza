// Atividade Leitura 1

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

/*  a) O código pede ao usuário um número no tipo string, o converte para Number e, em seguida, faz um teste de comparação
para ver se o mesmo divisível por 2 tem como resultado zero. Caso sim, imprimi "Passou no teste", caso contrário, 
imprime "Não passou no teste"
    b) Números que, divididos por 2, tem como resultado 0.
    c) Números que, divididos por 2, não tem 0 como resultado.*/

// Atividade de Leitura 2

/*  a) O código pede ao usuário o nome de uma fruta para poder classificar o seu preço já definido no sistema.
    b) "O preço da fruta maçã é R$2.25"
    c) "O preço da fruta pêra é R$5"*/

// Atividade de Leitura 3

//  a) A primeira linha declara uma variável Number e solicita seu valor ao usuário.
//  b) "Esse número passou no teste". Ocorre erro por mensagem estar indefinida.
//  c) 

// Atividade de Escrita 1

const idadeUser = Number(prompt("Insira sua idade:"))
    if (idadeUser >= 18){
    console.log("Você pode dirigir")
    } else {
      console.log("Você não pode dirigir")
    }
 
     
// Atividade de Escrita 2


 let turnoAluno = prompt(`Digite seu período com M, V ou N:`)
 if (turnoAluno === `M` ){
         console.log(`Bom dia!`)
 } else if (turnoAluno === `V`){
         console.log(`Boa tarde!`)
 } else if (turnoAluno === `N`){
         console.log(`Boa noite!`)
 }

// // Atividade de Escrita 3

 let turnoEstudo = prompt(`Digite seu período com M, V ou N:`)
 switch (turnoEstudo){
    case `M`:
        console.log(`Bom dia!`)
        break
    case `V`:
         console.log(`Boa tarde!`) 
        break
    case `N`:
        console.log(`Boa noite!`)
        break
 }

// Atividade de Escrita 4

 const generoFilme = prompt(`Qual gênero você quer assistir?`)
 const valorIngresso = Number(prompt(`Qual o valor do ingresso?`))
      if (generoFilme === `fantasia` && valorIngresso     <= 15){
          console.log("Bom filme!")
      } else {
          console.log(`Escolha outro filme :(`)
      }