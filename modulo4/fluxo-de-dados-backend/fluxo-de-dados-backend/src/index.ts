import express, { Request, response, Response } from 'express'
import cors from "cors"
import { produtos } from './data'

const app = express()
app.use(express.json())
app.use(cors())
app.listen(3003, () =>{
    console.log("Server is running in http://localhost:3003")

//Exercicio 1 ----------------------------------------------------------------------------------------------------------------------------------------------
app.get("/test", (req:Request, res:Response)=>{
 res.status(200).send("Deu certo!")
})
//Exercicio 2---------------------------------------------------------------------------------------------------------------------------------------
//Array criado em data.ts
//Exercicio 3 --------------------------------------------------------------------------------------------------------------------------------------
type Product={
    id:string,
    name:string,
    price:number
}
app.post("/criarNovosProdutos", (req:Request, res:Response)=>{
    const id=String(req.body.id)
    const name= String(req.body.name)
    const price= Number(req.body.price)




const newProduct: Product={
   id:id,
   name:name,
   price:price
}

produtos.push(newProduct)
res.status(200).send(produtos)
})
//Exercicio 4 -----------------------------------------------------------------------------------------------------------------------------------
app.get("/produtos", (req:Request, res:Response)=>{
    res.status(200).send(produtos)
})
//Exercicio 5 ---------------------------------------------------------------------------------------------------------------------------------------
app.put("/produtod/:id", (req:Request, res:Response)=>{
    const produto2 = String(req.params.id)

    const editaPreco = produtos.map((preco)=>{
        if(preco.id === produto2){
            return preco.price = req.body.price
        }
    })
    res.status(201).send(editaPreco)
})
//Exercicio 6 ------------------------------------------------------------------------------------------------------------------------------------
app.delete("/produtod/:id", (req:Request, res:Response)=>{
    const id=String(req.params.id)
  

    const deletar = produtos.filter((filtrar)=>{
        if(filtrar.id !== id ){
            return produtos
        }
    })
    res.status(201).send(deletar)

})

//Exercicio 7 -------------------------------------------------------------------------------------------------------------------------------------
type Product2={
    id:string,
    name:string,
    price:number
}
app.post("/criarNovosProdutos", (req:Request, res:Response)=>{
    const id=String(req.body.id)
    const name= String(req.body.name)
    const price= Number(req.body.price)




const newProduct: Product2={
   id:id,
   name:name,
   price:price
}
if(name && price){
    produtos.push(newProduct)
    res.status(200).send(produtos)
}else if(!name && price === 0){
    res.status(500).send("Erro no servidor")

}

if(name !== "string" && price){
    res.status(400).send("Erro do cliente")
}

if (price < 0) {
    response.status(400).send("Preço inválido")
} else {
    response.status(201).send( produtos )
}
response.status(200).send( produtos )
})


})
