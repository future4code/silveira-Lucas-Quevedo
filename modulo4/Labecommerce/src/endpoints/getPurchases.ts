import { Request, Response } from "express";
import { selectUser } from "../data/selectUser";

export const getPurchases = async (req:Request, res:Response) =>{
    try {
        const userId = req.params.userId
        
        const exist = await selectUser(userId)
        if(!exist){
            throw new Error(`Id ${userId} não encontrado!`)
            
        }
        console.log(exist)
    } catch (error:any) {
        res.status(200).send(error.message)
        
    }
}