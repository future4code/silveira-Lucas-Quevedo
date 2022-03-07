// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    array = array.length
    return array
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
 
    array1 =  array.reverse()
  
  return array
}
console.log(retornaArrayInvertido([8, 23, 16, 10]))
// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array1 = array.sort()
    return array
}
console.log(retornaArrayOrdenado([3, 2, 1, 4, 7]))
// EXERCÍCIO 04
let array1 =  [10, 5, 15, 20, 40]
function retornaNumerosPares(array) {
let  novoArray = []
for(let num of array){
    if(num % 2 === 0){
        novoArray.push(num) 
    }
    return novoArray
}



// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    for(let num of array){
        if(num % 2 === 0){
            novoArray.push(num)
        }
        return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
        for(let i = 0; i < array.length; i++){
           if(maiorNumero < array[i]){
               maiorNumero = array[i]
           }
        } return maiorNumero
    }
    
    const result = retornaMaiorNumero([1, 2, 3, 4, 5, 6, 7])
    console.log(result)
    


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    return objeto = {
        maiorNumero: num1 || num2,
        maiorDivisivelPorMenor: num1 >= num2,
        diferenca:num1 - num2
      }
    }
   
    let num1 = Number(prompt("Digite um número:"))
    let num2 = Number(prompt("Digite outro número:"))
    const result = retornaObjetoEntreDoisNumeros(num1,num2)
    console.log(result)


// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    for(let num of n){
    if(num % 2 === 0){
        n.push(num)
        return n
    }
const result = retornaNumerosPares([0, 2, 4, 6, 8])
console.log(result)

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
let ladoA = Number(prompt("Digite um número:"))
let ladoB = Number(prompt("Digite um número:"))
let ladoC = Number(prompt("Digite um número:"))
if(ladoA = ladoB = ladoC){
    return "Equilátero"
}else if(ladoA != ladoB != ladoC){
    return "Escaleno"
}else{
    return "Isósceles"
}
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}