import { Request, Response } from "express";
import { ProductsBusiness } from "../business/ProductsBusiness";
import { inputCreateProductDTO } from "../types/inputCreateProductsDTO";


export class ProductsController  {
 signupProducts = async (req:Request, res:Response) =>{
    try {
        // const auth = req.headers.authorization as string
        const { name, tags }: inputCreateProductDTO = req.body

        const input = {
            name, 
            tags
        }
        
        await new ProductsBusiness().product(input)
        res.status(201).send({message: "Produto cadastrado com sucesso"})
    } catch (error: any) {
        res.status(400).send({message:error.message})
    }
 }
}
