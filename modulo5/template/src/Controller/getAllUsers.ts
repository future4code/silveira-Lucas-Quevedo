import { userDataBase } from "../data/userDataBase"
import { getTokenData } from "../services/authenticator"

export const getAllUsers = async(token:string) =>{
    getTokenData(token)
    return await new userDataBase().getAll()

}