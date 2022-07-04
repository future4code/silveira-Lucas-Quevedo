import { compare } from "bcryptjs";
import { userDataBase } from "../data/userDataBase";
import { generateToken } from "../services/authenticator";
import { User } from "../types/types";

// export const loginById = async (user:User) =>{
//     try {
//         const userDB = new userDataBase()
//         userDB.loginById(user.email);
//         const hash = await compare(user.password, userDB.getPassword())
//         const token = generateToken(userDB.loginById(hash))
        
//     } catch (error:any) {
        
    // }
// }