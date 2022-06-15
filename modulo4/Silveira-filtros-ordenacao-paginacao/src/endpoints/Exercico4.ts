import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"
export const getAll = async (req:Request, res:Response) => {
 
    try {
        const table = "aula49_exercicio"
        let sort =req.query.sort as string
        let order = req.query.order as string
        let limite = 5
        let pagina =  Number(req.query.pagina) 
        let offset = limite * (pagina -1) 
        if(pagina<1 || isNaN(pagina)){
            pagina = 1
        }
      

        const users2 = await connection(table)
        .select("*")
        .from(table)
        .orderBy(sort, order)
        .limit(limite)
        .offset(offset)

        const result = users2.map(mapa)
        

        res.status(200).send(result)
        
    } catch (error:any) {
        res.send(error.message || error.sqlMessage)
        
    }
}
    const mapa = (result:any):user =>{
       return{
        id: result.id,
        name:result.name,
        email: result.email,
        type: result.type
    }

    }