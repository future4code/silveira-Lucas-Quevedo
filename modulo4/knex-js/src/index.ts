import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";


 


app.get("/actor", async (req:Request, res:Response)=>{
    try {
       const resultado = await connection.raw(`SELECT * FROM Actor`)
        res.status(200).send({message: resultado[0]})
    } catch (error: any) {
        res.status(404).send(error.sqlMessage)
    }
})

//1.----------------------------------------------------------------------------------------------------------------------------------------------
//a)Ele devolve pra gente o resultado da query e outras informações

//b)
const nome = async (name:string) =>{
    const resultado = await connection.raw(`SELECT * FROM Actor WHERE name = "${name}"`)
    return resultado
    }

app.get("/actor/:name", async (req:Request, res:Response)=>{
    try {
        let resultado = await nome(req.params.name)
        res.status(200).send(resultado[0])
    } catch (error: any) {
        res.status(404).send(error.sqlMessage)
    }
})

//c)
const gender = async (gender:string) =>{
    const resultado =  connection.raw(`SELECT COUNT(*) FROM Actor WHERE gender = "${gender}"`)
    return resultado 

 }




app.get("/actor/count/:gender", async (req:Request, res:Response)=>{
    try {
        let resultado = await gender(req.params.gender)
        res.status(200).send(resultado[0])
        
    } catch (error:any) {
        res.status(404).send(error.sqlMessage)
        
    } 
})
//2.---------------------------------------------------------------------------------------------------------------------------------------------------
//a)
app.put("/actor/:id", async (req:Request, res:Response)=>{
    try {
       await connection("Actor")
        .update({
            salary: req.body.salary,
        }).where({id: req.params.id})
        res.status(200).send({id: req.params.id})
        
    } catch (error:any) {
        res.status(500).send(error.sqlMessage)
        
    }
})



//b)
 app.delete("/actor/:id", async (req:Request, res:Response)=>{
    try {
        await connection("Actor").where({id:req.params.id}).delete()
        res.status(200).send("Ator deletado")
    } catch (error: any) {
        res.status(500).send(error.sqlMessage)
    }
 })

//c)

const media = async (gender:string) =>{
    let resultado = await connection("Actor")
    .avg("salary")
    .where({gender})
    return resultado
}
app.get("/actor/media/:gender", async (req:Request, res:Response)=>{
    try {
        const resultado = await media(req.params.gender)
        res.status(200).send(resultado)
       
        
    } catch (error:any) {
        res.status(404).send(error.sqlMessage)
        
    }
})
//3.--------------------------------------------------------------------------------------------------------------------------------------------
//a)
const id = async (id:string) =>{
    let resultado = await connection("Actor")
    .where({id})
    return resultado
}
app.get("/actor/id/:id", async (req:Request, res:Response)=>{
    try {
       const resultado = await id(req.params.id)
        res.status(200).send({message: resultado[0]})
    } catch (error: any) {
        res.status(404).send(error.sqlMessage)
    }
})

 app.post("/actor", async (req:Request, res:Response)=>{
    try {
        await connection.raw(`
        INSERT INTO Actor (id,name,salary,birth_date,gender)
        VALUES(
         "${Date.now().toString()}",
       "${req.body.name}",
       ${req.body.salary},
      "${req.body.birth_date}",
       "${req.body.gender}");
        `)
        res.status(201).send("ator criado com sucesso!")
        
    } catch (error: any) {
        res.status(500).send(error.sqlMessage)
        
    }
})