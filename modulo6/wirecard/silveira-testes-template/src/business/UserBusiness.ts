import { UserDataBase } from "../data/UserDataBase";
import User from "../model/User";
import Authenticator from "../services/Authenticator";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";
import { inputCreateUserDTO } from "../types/inputCreateUserDTO";

export class UserBusiness{
    createUser = async (input:inputCreateUserDTO):Promise<any> =>{
       try {
        const {name, email, password} = input

        if(!name || !email || !password){
            throw new Error("Please, fill in all the fiels!");
            
        }

        if(email.indexOf("@") === -1){
            throw new Error("email invalid!");
        }

        if(password.length < 6){
            throw new Error("Password invalid, minimum password of 6 characters!");
        }

        const id = new IdGenerator().generate()

        const hashPassword = new HashGenerator().hash(password)

        const user:User= new User(
            id,
            name,
            email,
            password
        )

        await new UserDataBase().signupUser(user) 

        const token = new Authenticator().generateToken({id})
        return token
       } catch (error:any) {
        throw new Error(error.message || error.sqlMessage);
        
       }
        
    }
}