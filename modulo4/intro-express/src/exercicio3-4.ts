import express, { Request, Response } from 'express'
import cors from 'cors'
import  send from 'process'
type Array ={
  nome:string,
  estadio:string,
  id:number

}
const app = express()
app.use(cors())
app.use(express.json())
app.listen(3003, () =>{
    app.get("/times/:id",(request:Request, response:Response)=>{
        const arrayTimes: Array[] = [{nome:"internacional", estadio:"beira rio", id:1}, 
        {nome:"palmeiras", estadio:"alinaz park", id:2}, 
        {nome:"atlético-mg", estadio:"mineirão", id:3}, 
        {nome:"fluminense", estadio:"maracanã", id:4}]
     const times = Number(request.params.id)
    const encontrarTimes = arrayTimes.find((time)=>{
        return time.id === times
       
    })
    response.status(200).send(encontrarTimes)
   
    console.log(encontrarTimes?.nome)
  })
  
})