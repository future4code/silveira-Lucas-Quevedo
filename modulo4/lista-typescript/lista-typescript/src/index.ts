//escreva o seu código aqui
//1.
 const data = (nome:string, data:string) =>{
     const data2 = data.split("/")
     return`Olá me chamo ${nome}, nasci no dia ${data2[0]} do mês de ${data2[1]} do ano de ${data2[2]}`
 }

// console.log(data("lucas", "08/06/1993"))


//2.
// const funçao =(nome) =>{
//    const nome1 = nome
// return nome1
// }
// console.log(funçao(""))

//3.
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

//4.

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

//5.
enum ROLE{
    ADIMIN="admin",
    USER="user"
}

type Lista={
    name:string,
    email:string,
    role:ROLE
}


const list=[
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADIMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADIMIN}      
] 


const email = (emails:Lista[]):Lista[] =>{
   
    return emails.filter((admin)=>{
        return admin.email && admin.role === ROLE.ADIMIN 
    })
}




console.log(email(list))