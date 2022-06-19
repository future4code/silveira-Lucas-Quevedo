import { getUser } from "../types/types"
import { connection } from "./connection"

export const select = async ():Promise <getUser[] | undefined> =>{
    
    const result = await connection("labecommerce_users")
    
    const user = result.map((users):getUser=>{
        return {
            id:users.id,
            name:users.name,
            email:users.email,
            password:users.password
        }
    })
    
    return user
}