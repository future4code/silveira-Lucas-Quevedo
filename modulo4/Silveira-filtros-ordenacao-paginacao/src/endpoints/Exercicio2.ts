import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"
export const getTypeUsers = async (req:Request, res:Response) => {
    
    try {
        const table = "aula49_exercicio"
        const type = req.query.type as string
        let sort =req.query.sort as string
        let order = req.query.order as string

        const users2 = await connection(table)
        .select("*")
        .where('type','LIKE',`%${type}%`)
        .orderBy(sort, order)

        const result = users2.map(mapa)
        if(sort !== "type" && sort !== "name"){
          return sort = "email"
        
        }
        if(order.toLocaleUpperCase() !== "ASC" && order.toLocaleUpperCase() !== "DESC"){
             order = "ASC"
        } 

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
