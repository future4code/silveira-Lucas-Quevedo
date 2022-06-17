import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"
export const getUsers =async (req:Request, res:Response):Promise<void> => {
    try {
        const name = req.query.name
        let sort =req.query.sort as string
        let order = req.query.order as string
        let limite = 5
        let pagina =  Number(req.query.pagina) 
        let offset = limite * (pagina -1) 
        if(pagina<1 || isNaN(pagina)){
            pagina = 1
        }
         const user = await users()
         if(user !== order && user !== offset ){
            return user
         }

        res.status(200).send(user)
    } catch (error:any) {
        res.status(error.message).send(error.sqlMessage)
    }   
}
const table = "aula49_exercicio"
     async function users():Promise<any>  {  
        const usuarios = await connection.raw(`
        SELECT id, name, email, type
         FROM ${table}`)
        return usuarios[0]
    }   
