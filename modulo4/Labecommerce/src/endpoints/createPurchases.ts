import { Request, Response } from "express";
import { insertPurchase } from "../data/insertPurchases";
import { selectProduct } from "../data/selectProduct";
import { selectUser } from "../data/selectUser";
import { purchaseData } from "../types/types";

export const createPurchases = async (req:Request, res:Response) =>{
    try {
        const {userId, productId, quantity} = req.body
        if(!userId || !productId || !quantity){
            throw new Error("As informções devem ser passads corretamente!");
           
        }
        const exist = await selectUser(userId)
        if(!exist){
            throw new Error(`Id ${userId} não encontrado!`);
            
        }

        const productIdExist = await selectProduct(productId)
        if(!productIdExist){
            throw new Error(`Produto ${productId} não encontrado!`);
        }
        const totalPrice = productIdExist.price * quantity
        
        const purchases:purchaseData ={
            id:Date.now().toString(),
            user_Id:userId,
            product_Id:productId,
            quantity,
            total_Price:totalPrice

        }
        const result = await insertPurchase(purchases)
        res.status(201).send(result)
    } catch (error:any) {
        res.status(500).send(error.message)
        
    }
}