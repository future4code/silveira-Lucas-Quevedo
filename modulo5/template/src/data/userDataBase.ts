import { connection } from "../Controller";
import { userLogin } from "../types/types";
export class userDataBase {
     createUser = async (id:string, email:string, name:string, password:string, role:string)=>{
        try {
            await connection("User_Arq").insert({
                id,
                email,
                name,
                password,
                role
            })
            
           
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
            
            
        }
        
    }

    loginById = async (login:userLogin) =>{
        try {
            const {email, password} = login
           const result = await connection("User_Arq")
            .select("*")
            .where({email})
            return result[0]
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
            
            
        }

    }
    getPassword = async (password:string):Promise<any> =>{
       try {
        const result = await connection("User_Arq")
        .where({password})
        return result[0]
        
       } catch (error:any) {
        throw new Error(error.message || error.sqlMessage);
        
       }
        

    }
    getAll = async ():Promise<any> =>{
        try {
            const result = await connection()
            .select("*")
            .from("User_Arq")

            return result
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
            
            
        }
    }
}