import { purchaseData } from "../types/types";
import { connection } from "./connection";

export const insertPurchase = async(purchase:purchaseData) =>{
    const {id, user_Id, product_Id, quantity, total_Price} = purchase
    await connection("labecommerce_purchases").insert({
        id:id,
        user_Id:user_Id,
        product_id:product_Id,
        quantity:quantity,
        total_Price:total_Price
    })
    return `Compra de  realizada com sucesso!`
}