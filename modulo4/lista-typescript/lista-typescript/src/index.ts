//escreva o seu código aqui
//1.-----------------------------------------------------------------------------------------------------------------------------------------
 const data = (nome:string, data:string) =>{
     const data2 = data.split("/")
     return`Olá me chamo ${nome}, nasci no dia ${data2[0]} do mês de ${data2[1]} do ano de ${data2[2]}`
 }

// console.log(data("lucas", "08/06/1993"))


//2.--------------------------------------------------------------------------------------------------------------------------------------------
// const funçao =(nome) =>{
//    const nome1 = nome
// return nome1
// }
// console.log(funçao(""))

//3.----------------------------------------------------------------------------------------------------------------------------------------------
enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}


type Filme={
    nome:string,
    ano:number|string,
    genêro:GENERO,
    metatritic?:number

}

const filme2 : Filme= {nome:"tropa de elite", ano:2007, genêro:GENERO.ACAO, metatritic:100}
// console.log(filme2)

//4.------------------------------------------------------------------------------------------------------------------------------------------------

enum SETORES{
    MARKETING="marketing",
    VENDAS="vendas",
    FINANCEIRO="finaceiro"

}

type Pessoas={
    nome:string,
    salário:number,
    setor:SETORES ,
    presencial:boolean
}

const empresa = 
    [
        	{ nome: "Marcos", salário: 2500, setor: SETORES.MARKETING, presencial: true },
        	{ nome: "Maria" ,salário: 1500, setor: SETORES.VENDAS, presencial: false},
        	{ nome: "Salete" ,salário: 2200, setor: SETORES.FINANCEIRO, presencial: true},
        	{ nome: "João" ,salário: 2800, setor: SETORES.MARKETING, presencial: false},
        	{ nome: "Josué" ,salário: 5500, setor: SETORES.FINANCEIRO, presencial: true},
        	{ nome: "Natalia" ,salário: 4700, setor: SETORES.VENDAS, presencial: true},
        	{ nome: "Paola" ,salário: 3500, setor: SETORES.MARKETING, presencial: true }
    ]
    
const empresa2 = (array:Pessoas[]):Pessoas[] =>{
    return array.filter((array2)=>{
        return array2.setor === SETORES.MARKETING && array2.presencial === true
    })
    
}
// console.log(empresa2(empresa))

//5.---------------------------------------------------------------------------------------------------------------------------------------------
type Lista={
    name:string,
    email:string,
    role:string
}


const list=[
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 


const email1 = ((emails:Lista[]):string[]=>{
   
    return emails.filter((admin)=>{
        return admin.role ==="admin"
    }).map((user)=>{
        return user.email
    })
})




// console.log(email1(list))

//6.---------------------------------------------------------------------------------------------------------------------------------------------
type Cliente={
    cliente:string,
    saldoTotal:number,
    debitos?:number[]
}



const listaClientes=
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]
const emprestimos = ((saldo:Cliente[]):Cliente[] =>{
   return saldo.filter((debito)=>{
       let somar:number = debito.debitos.reduce((somatorio:number, item)=>{
           somatorio += item
           return somatorio
        },0)
       const saldo2:number = debito.saldoTotal - somar
       return saldo2 < 0
   }).map((debito)=>{
    let somar:number = debito.debitos.reduce((somatorio:number, item)=>{
        somatorio += item
        return somatorio

    },0)
    const novoSaldo = debito.saldoTotal - somar
        const novoDebito:number[] = []
        return {...debito, saldoTotal:novoSaldo, debitos:novoDebito}
   })
   
  
       

   })
// console.log(emprestimos(listaClientes))
//7.-------------------------------------------------------------------------------------------------------------------------------------------------
type Produtos ={
    nome:string,
    quantidade: number,
    valorUnitario:number | string
}

const estoque=
[
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]
const ajustaPreco = (preco :Produtos[]):Produtos[] => {
    return preco.map((estoque) =>{
        const valor = estoque.valorUnitario as number
        const valorAjustado: string = valor.toFixed(2).replace('.', ',')
	return{...estoque, valorUnitario:  `R$${valorAjustado}`}
    }).sort((quantidade1, quantidade2)=>
    quantidade1.quantidade - quantidade2.quantidade

    )
	
}
console.log(ajustaPreco(estoque))