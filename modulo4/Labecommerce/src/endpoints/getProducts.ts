import { Request, Response } from "express";
import { selectProducts } from "../data/selectProducts";

export const getProducts = async (req:Request, res:Response) =>{
    try {
        const result = await selectProducts()
        if(!result?.length){
            throw new Error("Produtos não encontrados!");
            
        }
        res.status(200).send(result)
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}