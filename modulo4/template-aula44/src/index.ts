import express, { Request, Response } from 'express'
import cors from 'cors'

type User = {
  id: number,
  name: string,
  email: string,
  type: Tipo,
  age: number
}

enum Tipo {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: Tipo.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: Tipo.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: Tipo.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: Tipo.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: Tipo.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: Tipo.ADMIN,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

//Exercicio 1 ------------------------------------------------------------------------------------------------------------------------------------
app.get("/users", (req:Request, res:Response)=>{
  let codeError=400
    try{
      if(users){
        res.status(200).send(users)
      }
      codeError=404
      throw new Error("Not found");
      
    
    }catch(erro: any){
      res.status(codeError).send({message: erro.message})
    }
})
//Utilizei o método Get para buscar informações
//Utilizei a entidade path, nesse caso é a "/users"

//Exercicio 2 --------------------------------------------------------------------------------------------------------------------------------------
app.get("/usersType",(req:Request, res:Response)=>{
  let codeError= 400
  try{
    const tipar:string = req.query.type as string
    const tipo: User[] = users.filter((filter)=> filter.type === tipar )
    if(!tipo){
      codeError= 404
      throw new Error("Não encontrado");
      
    }
    res.status(200).send(tipo)
  }catch(erro: any){
    res.status(codeError).send({message:erro.message})
  }
})
//Retorna os dois tipos de type ADMIN e NORMAL

app.get("/usersType200", (req:Request, res: Response)=>{
  let codeError = 400
  try{
    const type:string = req.query.type as string
    const types: User | undefined = users.find((find)=> find.type === type)
    if(!types){
      codeError=404
      throw new Error("Not found");
      
    }
    res.status(200).send(types)

  }catch(erro: any){
    res.status(codeError).send({message: erro.message})
  }
})
// Retorna o primeiro do type NORMAL e do type ADMIN.

//a) Usei query params, para que o type digitado seja o mesmo type no array de users.


//b) Fiz a tipagem do array users no começo do index, retornando apenas os tipos corretos e uma messagem de erro caso contrario

//Exercicio 3 ----------------------------------------------------------------------------------------------------------------------------------------
app.get("/users3", (req:Request, res:Response)=>{
  let codeError = 400
  try{
    const nome:string = req.query.name as string
    const serach: User | undefined = users.find((name)=> name.name.toLocaleLowerCase() === nome.toLocaleLowerCase())
    if(!serach){
      codeError=404
      throw new Error("Not found");
      
    }
    res.status(200).send(serach)
  }catch(erro:any){
    res.status(codeError).send({message: erro.message})
  }
})
//a) utilizei query params para buscar o nome.
//b) mensagem de erro ok!

//Exercicio 4 --------------------------------------------------------------------------------------------------------------------------------------
app.post("/users", (req:Request, res: Response)=>{
  let codeError = 400
  try{
    const {id, name, age, type, email} = req.body
    if(!id || !name || !age || !type || !email){
      codeError = 422
      throw new Error("Not created");
    }
    const novosUsuarios: User={
      id,
      name, 
      age,
      type,
      email
    }

    users.push(novosUsuarios)
    res.status(201).send(novosUsuarios)
  }catch(erro:any){
    res.status(codeError).send({message: erro.message})
  }
})
//a)Mudei para o métotdo Put, porém não vi diferença posso ter feito algo errado.
//b)Creio que quando aprendermos o banco de dados fará mais sentido

