import { Request, Response } from "express";
import { select } from "../data/select";



export const getUsers = async (req:Request, res:Response) =>{
    try {
        
       const result = await select()
       if(!result?.length){
        throw new Error("Usuários não encontrados");
        
       }
       res.status(200).send(result)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}