import { Request, Response } from "express";
import { ProductsBusiness } from "../business/ProductsBusiness";
import { inputCreateProductDTO } from "../types/inputCreateProductsDTO";
import { inputGetProductsByIdDTO } from "../types/inputGetProductsDTO";


export class ProductsController  {
 signupProducts = async (req:Request, res:Response) =>{
    try {
        
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
 getProducts = async (req:Request, res:Response) =>{
    try {
        const { id } = req.body
        //const name  = req.body
        //const tags  = req.body
        const getId: inputGetProductsByIdDTO ={
            id
        }
        const resultId = await new ProductsBusiness().getProductById(getId)  
       // const resultName = await new ProductsBusiness().getProductByName(name)
        //const resultTags = await new ProductsBusiness().getProductByTags(tags)
        console.log("controller",resultId)
        res.status(200).send({message: resultId})
        //res.status(200).send({message: resultName})
        //res.status(200).send({message: resultTags})
    } catch (error:any) {
        res.status(404).send({message: error.message })
    }
    
 }
}

