
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
//     //  Sua lógica aqui
//     return `No comparador de igualdade ${a} === ${b} é ${a === b}`
// }

// // c-)Faça uma função chamada "verificaSeEMaior"
// function verificaSeEMaior (a, b){
// return`No comparadoe se é maior ${a} > ${b} É ${a > b}`
// }
// console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= true
// c-) 'a'==='b'= false
// d-) 'b'>'a'= true
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------

// const cadastro = () => {
//     const usuario = []

    //  Sua lógica aqui
    
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
// }
// console.log(cadastro());

// // Exercício 4-----------------------------------------------------------------------------------------------

// const login = () => {
//     const login = "labenu"
    //  Sua lógica aqui
 //  Sua lógica aqui
//     let senha = prompt("Digite sua senha:")
//     if(senha === "labenu"){
//         return "Usuario logado"
//     }else{
//         return "Senha invalida"
//     }
// }

// }

// console.log(login());

// // Exercício 5----------------------------------------------------------------------------------------------------

// const primeiraDose = () => {

    //  Sua lógica aqui
    // let nome = prompt("Digite seu nome:");
    //   let vacina = prompt("Que vacina você tomou:Coronavac, Astrazenica, Pfizer");
    //   let tempo =""
    //   let data = ""
        
      
    
    // if(vacina === "Coronavac"){
    //     tempo = 28 
    //     dataAtual = "15/03/2022"
    //     data = "12/04/2022"
    //      return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    // }
    // if(vacina === "Astrazenica"){
    //    tempo = 90
    //    dataAtual = "15/03/2022"
    //    data = "13/06/2022"
    //     return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    // }
    // if(vacina === "Pfizer"){
    //    tempo = 90
    //    dataAtual = "15/03/2022"
    //    data= "13/06/2022"
    //     return `Olá ${nome}! A próxima dose da ${vacina} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`
    // }
    
    
    // }

// }
// console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

// const segundaDose = (nomeDoUsuario) => {
//     const usuarios = [
//         { nome: "Artur", imunizacao: "incompleta" },
//         { nome: "Barbara", imunizacao: "incompleta" },
//         { nome: "Carlos", imunizacao: "incompleta" }
//     ]
//     for(nomeDoUsuario of usuarios){
//         nomeDoUsuario.imunizacao === "incompleta"
//         return nomeDoUsuario = "completa"
//     }

//     //  Sua lógica aqui


// }
// console.log(segundaDose("Artur"));

// Exercício 7 --------------------------------------------------------------------------------------

const avisoAosAtrasados = () => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "completa" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]
        let usuario = []
    //  Sua lógica aqui
    for(usuario of usuarios){
       if (usuario.imunizacao === "incompleta"){
        console.log (`Olá ${usuario.nome}! Sua imunização está ${usuario.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`)
    }
}

}
console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidade: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidade: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    // Sua lógica aqui
        
        let nome = prompt("Digite seu nome:");
        let idade = Number(prompt("Digite sua idade:"));
        let nacionalidade = prompt("Qual seu país de origem:");
        
        let senha = prompt("Digite uma senha com 6 caracteres:");
        let object ={
            nome: nome,
            idade: idade,
            nacionalidade: nacionalidade,
            senha: senha,
            
        }
        usuarios.push(object)
        return usuarios
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
    let mensagem
    const senhaDigitada = prompt("Digite sua senha:")
    for(let pessoa of usuarios){
        if (senhaDigitada === pessoa.senha){
            mensagem = "Logado"
            return mensagem
        }
        if(mensagem === undefined){
            console.log("Erro")
        }
    }
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
let vacina = prompt("Qual vacina você tomou:")
let imunizacao = "incompleta"
usuarios[usuarios.length-1]={
    ...usuarios[usuarios.length-1],
    vacina: vacina,
    imunizacao: imunizacao
}
return usuarios

}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
   
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui 
    const vacinaIcopmpleta = usuarios.filter((item)=>{
        return item.imunizacao === "incompleta"
    })
    const mensagemIcompleta = vacinaIcopmpleta.map((pessoa)=>{
        return `Olá ${pessoa.nome}! Sua imunização está ${pessoa.imunizacao}, por favor volte ao postinho para tomar a segunda dose.`
    })
    return mensagemIcompleta
}
console.log(avisoAosAtrasadosDesafio());