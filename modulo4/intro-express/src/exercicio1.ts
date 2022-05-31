import express, { Request, Response } from 'express'
import cors from 'cors'
import  request from 'http'
import  send from 'process'

const app = express()
app.use(cors())
app.use(express.json())
app.listen(3003, () =>{
    app.get("/", (req:Request, res:Response) => {          
		res.status(200).send("Hello from Express")
})

    
    })
