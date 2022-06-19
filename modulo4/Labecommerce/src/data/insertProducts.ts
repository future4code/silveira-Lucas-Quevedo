import { connection } from "./connection";
import { productsData } from "../types/types";

export const insertProducts = async (result:productsData):Promise<string> =>{
    const{id, name, price, image_url} = result

     await connection("labecommerce_products").insert({
        id,
        name,
        price,
        image_url
    })
    return `O produto ${name} foi criado com sucesso!`
}
