import { Request, Response } from "express";
import app from "./app";
import connection from "./connection";

const getActorById = async (id:string) =>{
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = ${id}
    `)
    return result [1]
}


// })

//1.a)Ele devolve pra gente o resultado da query e outras informações

//b)

app.get("/actor",async (req:Request, res:Response)=>{
    try {
        const resultado = await connection.raw(`
        SELECT * FROM Actor 
        `)
        res.status(200).send({message: resultado[0]})
    } catch (error) {
        
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

app.put("/actor/:id", async (req:Request, res:Response)=>{
    try {
       await connection("Actor")
        .update({
            name: req.body.name,
            salary: req.body.salary,
            birth_date: req.body.birth_date,
            gender:req.body.gender
        }).where({id: req.params.id})
        res.status(200).send({id: req.params.id})
        
    } catch (error:any) {
        res.status(500).send(error.sqlMessage)
        
    }
})
 app.delete("/actor/:id", async (req:Request, res:Response)=>{
    try {
        await connection("Actor").where({id:req.params.id}).delete()
        res.status(200).send("Ator deletado")
    } catch (error: any) {
        res.status(500).send(error.sqlMessage)
    }
 })



