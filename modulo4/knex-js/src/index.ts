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

app.get("/actor", (req:Request, res:Response)=>{
    try {
        const resultado = await connection.raw(`
        SELECT * FROM Actor
        `)
        res.status(200).send(resultado)
    } catch (error) {
        
    }
})

   




