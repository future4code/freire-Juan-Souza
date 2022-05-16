// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  somaFinal = num1 + num2
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const alturaTri = Number(prompt("Digite a altura:"))
  const larguraTri = Number(prompt("Digite a largura:"))
  const areaTri = Number(alturaTri * larguraTri)
  console.log(areaTri)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Digite o ano atual:"))
  const anoNascimento = Number(prompt("Digite o ano em que você nasceu:"))
  const idade = Number(anoAtual - anoNascimento)
  console.log(idade)
}



// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc.toFixed(1)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nomeUser = prompt("Por favor, digite seu nome:")
  const idadeUser = prompt("Favor digitar sua idade:")
  const emailUser = prompt("Agora digite seu email:")
  console.log(`Meu nome é ${nomeUser}, tenho ${idadeUser} anos, e o meu email é ${emailUser}.`);
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const corUm = prompt("Diga uma cor favorita:")
  const corDois = prompt("Digite mais uma cor:")
  const corTres = prompt("Digite uma última cor:")
  const listaCores = [corUm, corDois, corTres]
  console.log(listaCores)
  

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
const valorTotal = custo / valorIngresso
return valorTotal
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const stringTamanhoUm = string1.length
  const stringTamanhoDois = string2.length
    const comparacao = stringTamanhoUm === stringTamanhoDois
    return comparacao

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const listaNove = array
  return listaNove[0]


}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const listaDez = array
  return listaDez[array.length-1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const listaOnze = array
  const primeiro = array[0]
  const ultimo = array[array.length-1]
  array[0] = ultimo
  array[array.length-1] = primeiro
  return array
  
  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const varUm = string1.toUpperCase()
  const varDois = string2.toUpperCase()
  const resultadoIgualdade = varUm === varDois
  return resultadoIgualdade

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}