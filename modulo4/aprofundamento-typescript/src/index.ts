// // const pessoa : {name:string, age:number, class:{name:string, modulo:number}}={
// //     name:"lucas",
// //     age:28,
// //     class:{
// //         name:"luiza",
// //         modulo:0
// //     }
// // }

// // // console.log(pessoa.class)
// // let mensagem: string | undefined | number = 'olá silveira'
// // // console.log(mensagem)

// // mensagem = 2022
// // // console.log(mensagem)

// // type Mensagem = string | undefined |number 

// // const message : Mensagem =2022
// // const message1 : Mensagem ='Olá turma silveira'

// // // console.log(message1)

// type Account ={
//     id:string,
//     name:string,
//     password:number,
//     role:"admin"|"normal"
// }

// type AdminAccount={
//     account:string,
//     permission:boolean
// }

// type NormalAccount ={
//     account:string,
//     permission:boolean
// }
// type User =  NormalAccount & AdminAccount

// const conta: User={
//     account:"lucas",
//     permission:true

// }

// // console.log(conta)
// const labenu = "labenu"

// // console.log(labenu)


// enum Estados{
// SP="São Paulo",
// RS="Rio Grande do Sul",
// SC="Santa Catarina"
// }

// const estados : Estados = Estados.SP
// // console.log(estados)



//exercicios-----------------------------------------------------------\\
//1.
//a)Não é permitdo atribuir número a está variável 
const minhaString: string= "lucas"
//b)
const meuNumero:number| string= 25 

//c)
const pessoa:{nome:string, idade:number, corFavorita:string }={
    nome:"lucas",
    idade:28,
    corFavorita:"vermelho"
}

// console.log(pessoa)

type Pessoa={
    nome:string,
    idade:number,
    corFavorita:CorFavorita | string
    
}

const pessoa1 :Pessoa ={
    nome:"joão",
    idade:30,
    corFavorita:"branco"
}

const pessoa2 :Pessoa ={
    nome:"Manuela",
    idade:30,
    corFavorita:"Amarelo"
}

const pessoa3 :Pessoa ={
    nome:"joana",
    idade:30,
    corFavorita:"rosa"
}

enum CorFavorita{
    VERMELHO= 'VERMELHO',
    AZUL="AZUL",
    AMARELO="AMARELO",
    ROSA="ROSA",
    LARANJA="LARANJA"
}

type User = Pessoa & {corFavorita:CorFavorita}

const pessoa4:User = {
    nome:"joaquim",
    idade:25,
    corFavorita:CorFavorita.AMARELO
}

// console.log(pessoa)
// console.log(pessoa1)
// console.log(pessoa2)
// console.log(pessoa3)
// console.log(pessoa4)

//2.
//a)


//b)
type Statics={
    maior:number,
    menor:number,
    media:number
}

function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//c)
type AMOSTRADEDADOS = {

    numeros:number[],

    obterEstatisticas: (numeros:number[]) => Statics
}
// console.log(obterEstatisticas([21, 18, 65, 44, 15, 18]))

//3.
//a)

type Person = {
    autor:string,
    texto:string
}
const posts: Person[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]
 
  
  function buscarPostsPorAutor(posts:Person[], autorInformado:string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }
  console.log(buscarPostsPorAutor(posts, "Lord Voldemort"))