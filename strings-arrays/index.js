//Exemplos

const frase1 = "Bom dia Silveira"
const frase2 = 'Bom dia Silveirinhas'
const frase3 = `Bom dia @Silveiras`

console.log(frase3)

//Strings
// propriedade .length

// const nomeSilveirinhos = "Alessandra Sandeski"
// console.log(nomeSilveirinhos.length)

// Metodos
//.toLowerCase()

// const nomeSilveirinhos = "Guilherme Arruda"
// console.log(nomeSilveirinhos.toLowerCase())

//.toUpperCase()

// const nomeSilveirinhos = "Eduardo Boucault"
// console.log(nomeSilveirinhos.toUpperCase())

//trim()

// const nomeSilveirinhos = "     Brenno Ambrozino "
// console.log(nomeSilveirinhos.length)
// const nomeSemEspacos = nomeSilveirinhos.trim()

// console.log( nomeSilveirinhos.trim().length)

//includes( 'string')

// const nomeSilveirinhos = "Juan Praxedes"
// console.log(nomeSilveirinhos.includes('uan'))

//replaceAll(oQue, peloOQue)

// const nomeSilveirinhos = "Ariane Tier"
// const frase = `A ${nomeSilveirinhos} está amando java, ela não para de aprender coisas sobre java`
// const fraseComSubstituicao = frase.replaceAll('java', 'javascript')
// console.log(frase)
// console.log(fraseComSubstituicao)
// ----------------------------------------------------------------------------
// Arrays

// const listaDeAlunos=['Adeir', 'Adernam', 'Alessandra', 'Alex', 'Vinicius', 'Kallyene', 'Italo']
//index                0          1           2          3         4

// console.log(listaDeAlunos)

// const apenasUmAluno = listaDeAlunos[2]
// console.log(apenasUmAluno)

//protótipos de arrays

// propriedade .length
// console.log(listaDeAlunos.length)

//includes(elemento) procura elementos na lista e retorna 'true' ou 'false'

// console.log(listaDeAlunos.includes('Adeir'))

//pop() retira o último elemento da lista
// console.log(listaDeAlunos.pop())
// console.log(listaDeAlunos)


//splice(indice, quantidade)

// console.log(listaDeAlunos.splice(4, -3))
// console.log(listaDeAlunos)


//push( o que quer enviar para a lista)

// listaDeAlunos.push('Eduardo', 'Bernardo', 'João')
// console.log(listaDeAlunos)
//----------------------------------------------------------------------------


//EXERCÍCIO 1

// const nome = prompt("Qual seu nome?")
// const corFavoita = prompt("Qual sua cor favorita?")
// const idade = Number(prompt("Qual sua idade?"))
// const anoAtual = Number(prompt("Qual o ano atual?"))
// const calculo = idade + anoAtual
// const fraseConcat = 'A cor favorita de ' + nome + ' é ' + corFavoita + '.'

// const fraseTemplateString = `A cor favorita de ${nome} é ${corFavoita} daqui a 38 anos o ano será ${calculo}.`

// console.log(fraseTemplateString)

//EXERCÍCIO 2 

// const fraseDoUsuario = prompt('Escreva uma frase')
// const fraseMaiuscula = fraseDoUsuario.toUpperCase().replaceAll('A','I').replaceAll('E','I').replaceAll('O', 'I').replaceAll('U','I')



// const fraseMaiuscula = fraseDoUsuario.toUpperCase()
// const fraseSemA = fraseMaiuscula.replaceAll('A','I')
// const fraseSemE = fraseSemA.replaceAll('E','I')
// const fraseSemO = fraseSemE.replaceAll('O', 'I')
// const fraseSemU = fraseSemO.replaceAll('U','I')

// const fraseAlterada = fraseSemU

// console.log(fraseAlterada)

//EXERCÍCIO 3

// const racaDeCachorros = ['vira-lata', 'Sharpai', 'Pitbull','Buldogue', 'Golden']
// // index                      0          1           2        3          4         
// const numeroDoCachorro = Number(prompt('Escreva um número de 1 a 5 para encolher o cachorro'))
// console.log(racaDeCachorros)
// console.log(`Eu amo ${racaDeCachorros[numeroDoCachorro-1]}`)

//Exercício 4

let listaDeNumeros = [1, 2, 3, 4, 5, 6]
//index              0   1  2  3  4  5

const tamanhoLista = listaDeNumeros.length
console.log(tamanhoLista)
listaDeNumeros.push(7)
console.log(listaDeNumeros)
listaDeNumeros.splice(3, 2)
console.log(listaDeNumeros)
console.log(listaDeNumeros.length)