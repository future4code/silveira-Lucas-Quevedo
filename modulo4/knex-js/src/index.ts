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

const pegarNome =async (name:string) => {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
    `)
    return result
    
}

    console.log(pegarNome)




