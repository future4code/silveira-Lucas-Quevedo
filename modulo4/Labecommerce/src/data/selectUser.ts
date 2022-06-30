import { getUser } from "../types/types"
import { connection } from "./connection"

export const selectUser = async (userId:string):Promise<getUser | undefined> =>{
    const [result] = await connection("labecommerce_users").select("*").where({id:userId})
   if(result){
    const typePurchases:getUser = {
        id:result.id,
        name:result.name,
        email:result.email,
        password:result.password
    }
     return typePurchases
   }
    
   
}