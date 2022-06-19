import { Request, Response } from "express";
import { insertProducts } from "../data/insertProducts";
import { postProducts, productsData } from "../types/types";

export const createProducts = async (req:Request, res:Response) =>{
    try {
        const {name, price, image_url}:postProducts = req.body
        if(!name || !price || !image_url){
            throw new Error("Produto não cadastrado");
            
        }
        const productsData:productsData = {
            id: Date.now().toString(),
            name,
            price,
            image_url
        }

        const result = await insertProducts(productsData)
        res.status(201).send(result)
    } catch (error:any) {
       res.status(400).send(error.message)
    }
}