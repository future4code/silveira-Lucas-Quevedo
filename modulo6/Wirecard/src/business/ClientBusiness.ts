import { ClientDataBase } from "../data/ClientDataBase";
import { authenticationDataId } from "../model/AuthenticationData";
import { Client, inputLoginDTO } from "../model/Client";
import Authenticator from "../services/Authenticator";
import { HashGenerator } from "../services/hashGenerator";
import { IdGenerator } from "../services/idGenerator";

export class ClientBusiness{
    create = async (input:any) =>{
       try {
        const {name, email, cpf, password} = input
        if(!name || !email || !cpf || !password){
            throw new Error("fill in the fields correctly!");
        }
        if (email.indexOf("@") === -1) {
            throw new Error("Email invalid");
        }
        if (password.length < 6) {
            throw new Error("Password should have at least 6 characters");
        }
        const id = new IdGenerator().generate()

        const hashPassword = new HashGenerator().hash(password)

        const inputBusiness =  new Client(
            id,
            name, 
            email,
            hashPassword as any,
            cpf
        )

        await new ClientDataBase().insertClient(inputBusiness)
        const token = new Authenticator().generateToken({id}) 
       return token
        
       } catch (error:any) {
        throw new Error(error.message || error.sqlMessage);
        
       }
        
    }

    login = async (input:inputLoginDTO) =>{
        try {
            const {email, password} = input
            if(!email || !password){
            throw new Error("fill in the fields correctly!");
            
        }

        const loginBusiness = await new ClientDataBase().login(email) 

        if(!loginBusiness){
            throw new Error("Invalid credentials!")
        }
        
            if (email.indexOf("@") === -1) {
            throw new Error("Email invalid");
            
        }
            if (password.length < 6) {
            throw new Error("Password should have at least 6 characters");
            
        }

    

        const hash = new HashGenerator().compareHash(password, loginBusiness.getPassword() )

        if (!hash) {
            throw new Error("Invalid Password!");
        }

        const token = new Authenticator().generateToken({id:loginBusiness.getId()})
        return token
        } catch (error:any) {
        throw new Error(error.message || error.sqlMessage);
        
        }
    }
}