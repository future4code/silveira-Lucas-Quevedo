import express, { Request, Response } from 'express'
import cors from 'cors'
import  send from 'process'

const app = express()
app.use(cors())
app.use(express.json())
app.listen(3003, () =>{
    app.get("/user/:id", (request:Request, response:Response)=>{
        const id = Number(request.params.id)
        const arrayId = [{id:1, nome:"lucas", telefone:53888888, email:"lucas@silveira.gmail.com", site:"www.lucas.com.br"}]
        const encontrarId = arrayId.find((encontrar) =>{
            return encontrar.id === id
        })
        response.status(200).send(encontrarId)

    })

})