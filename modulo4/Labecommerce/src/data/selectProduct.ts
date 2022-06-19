import {  postProducts, productsData } from "../types/types"
import { connection } from "./connection"

export const selectProduct = async (productId:string):Promise<productsData | undefined> =>{
    const [result] = await connection("labecommerce_products").select("*").where({id:productId})
   if(result){
    const typePurchases:productsData = {
        id:result.id,
        name:result.name,
        price:result.price,
        image_url:result.image_url
    }
    console.log(typePurchases)
    return typePurchases
   }
    
   
}