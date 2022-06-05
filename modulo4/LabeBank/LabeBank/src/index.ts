import express, { Request, Response } from "express"
import cors from "cors"
import { users } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))



 
type Conta={
  nome:string,
  cpf:string,
  saldo:number,
  balanco:Extrato[],
  dataDeNascimento:string
}

type Extrato={
  dataExtrato:string,
  valorExtrato:number,
  descricaoExtrato:string

}

const usuarios :Conta[]=[
  {nome:"lucas", 
  cpf:"000-000-000-00",
   saldo:5000,
   balanco:[], 
   dataDeNascimento:"02/07/1999" 
  },
  {nome:"luiza", 
  cpf:"111-222-333-44",
   saldo:2000,
   balanco:[], 
   dataDeNascimento:"07/02/1991" 
  },
  {nome:"josé", 
  cpf:"111-111-111-11",
   saldo:10000,
   balanco:[], 
   dataDeNascimento:"03/08/1993" 
  },
]
// let array : Conta[]=[]

app.post("/users/conta", (req: Request, res: Response) => {
  let codeError = 400
  try{
  let conta = req.body as Conta
  let compara = usuarios.find((contas) => {
      return conta.cpf == contas.cpf
  })
 
  if (compara == null || compara == undefined) {
      usuarios.push(conta)
      res.status(201).send(`Conta criada com sucesso`)

      codeError = 404
      throw new Error("Erro ao criar a conta!");
    }
      
  } catch(erro: any) {
      res.status(codeError).send({message: erro.message})
  }
});

app.get("/users/saldo", (req:Request, res:Response)=>{
  let codeError = 400
  try{
    const nome = req.query.nome
    
    

    const acharConta = usuarios.find((find)=>
    find.nome === nome 
    )

    if(acharConta !== null && acharConta !== undefined){
      acharConta.saldo = Number(acharConta.saldo) 
      res.status(201).send(`Seu saldo é: ${acharConta.saldo}`)
    }
    codeError= 404
    throw new Error("Conta não encontrada");
    

  }catch(erro: any){
    res.status(codeError).send({message: erro.message})
  }
})

app.get("/users", (req:Request, res: Response)=>{
  let codeError =400 
  try{
    res.status(200).send(usuarios)
    codeError = 404
    throw new Error("Not Found!");
    
  }catch(erro:any){
    res.status(codeError).send({message: erro.message})
  }
})