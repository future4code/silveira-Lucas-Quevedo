import { Request, Response } from "express";
import { ProductsBusiness } from "../business/ProductsBusiness";
import { inputCreateProductDTO } from "../types/inputCreateProductsDTO";


export class ProductsController  {
 signupProducts = async (req:Request, res:Response) =>{
    try {
        const { name, price, type, quantity }: inputCreateProductDTO= req.body

        const input = {
            name, 
            price, 
            type,
            quantity
        }
        
        await new ProductsBusiness().product(input)
    } catch (error: any) {
        res.status(400).send({message:error.message})
    }
 }
}
