import express, { Request, Response } from 'express'
import cors from 'cors'
import  request from 'http'
import  send from 'process'

const app = express()
app.use(cors())
app.use(express.json())
app.listen(3003, () =>{
    app.get("/", (req:Request, res:Response) => {          
		res.send("Hello from Express")
})

    app.post('/post/:id', (req:Request, res:Response)=>{
        // const token = req.headers.authorization
        // console.log("Aqui está o token",token)
        // const body= req.body
        // const acharProduto= ["teclado", "mouse", "monitor"]
        // const {nomeProduto} = req.query
        // const [encontrar] = acharProduto.filter((find)=>{
        //     return find === nomeProduto
        // })
        // console.log(encontrar)
    //     const id = Number(req.params.id)
    //     const arrayId = [{id:1, nome:"lucas"},{id:2, nome:"pai"}]
    //     const encontrar = arrayId.find((nameIde)=>{
    //         return nameIde.id === id

    //     })
    //     res.status(200).send(`o produto é ${encontrar?.nome}`)
        

    })
})