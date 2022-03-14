
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

// function checarDesigualdade(a, b) {

//     return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
// }
// console.log(checarDesigualdade(1, 3));

// // b-)Compare a igualdade entre a===b

// function checarIgualdade(a, b) {
//     return `No comparador de igualdade ${a} === ${b} é ${a === b}`
// }
// console.log(checarIgualdade(1, 3))

// function verificaSeEMaior (a, b){
// // c-)Faça uma função chamada "verificaSeEMaior"
// return`No comparadoe se é maior ${a} > ${b} É ${a > b}`
// }
// console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false;
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

// const cadastro = () => {
//     const usuario = []
//     let nome = prompt("Digite seu nome:");
//     let idade = Number(prompt("Digite sua idade:"));
//     let nacionalidade = prompt("Qual seu país de origem:");
//     let senha = prompt("Digite uma senha com 6 caracteres:");
    

//     if( idade < 18 ){
//         return "erro no cadastro"
   
//     }
//     if(senha.length < 6){
//         return "erro no cadastro"
//     }
//     if(nacionalidade !== "Brasil"){
//         return "erro no cadastro"
//     }
  
// const pessoa = {
//     nomeDoUsuario : nome,
//     idade: idade,
//     senhaDoUsuario: senha,
//     nacionalidade: nacionalidade

// }
// usuario.push(pessoa)
// return usuario


//     //  Sua lógica aqui

// }
// console.log(cadastro());

// // Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = "labenu"
//     //  Sua lógica aqui
//     let senha = prompt("Digite sua senha:")
//     if(senha === "labenu"){
//         return "Usuario logado"
//     }else{
//         return "Senha invalida"
//     }
// }

// console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {
    //  Sua lógica aqui
  let nome = prompt("Digite seu nome:");
  let vacina = prompt("Que vacina você tomou:Coronavac, Astrazenica, Pfizer");
  let tempo =""
  let data = ""
if(vacina === "Coronavac"){
    tempo = 28
    return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
}
if(vacina === "Astrazenica"){
   tempo = 90
    return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
}
if(vacina === "Pfizer"){
   tempo = 90
    return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
}


}


console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui


}
console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());