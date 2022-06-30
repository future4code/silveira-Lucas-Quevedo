import { productsData } from "../types/types";
import { connection } from "./connection";

export const selectProducts = async ():Promise<productsData[] | undefined> =>{
    
        const result = await connection("labecommerce_products")
        const mapProducts = result.map((product)=>{
           return {
            id:product.id,
            name:product.name,
            price:product.price,
            image_url:product.image_url
        }
        })
        return mapProducts
}