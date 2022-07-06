import UserData from "../data/userData";
import { Login } from "../model/types";
import User from "../model/User"
import { Authenticator } from "../services/Authenticator";
import { GeneratorId } from "../services/GeneratorId";
import { HashManager } from "../services/HashManager";

export default class UserBusiness{
    signup = async (input:any) =>{
        
        const {name, email, password} = input
        if(!name || !email || !password){
            throw new Error("Preencha todos os campos!");
            
        }

        const user = await new UserData().findUserByEmail(email)
        if(user){
            throw new Error("Usuário já cadstrado!");
            
        }

        const id = new GeneratorId().generator()

        const hash = new HashManager().createHash(password)

        const newUser = new User(id, name, email, hash)
        const userDB = new UserData()
        await userDB.insert(newUser)
        const authenticator = new Authenticator()
        const token = authenticator.generate({id})
       
        
        return token
        
    }

    login = async (login:Login) =>{
        const {email, password} = login 
        if(!email || !password){
            throw new Error("Email e senha invalidos!");
            
        }

        const user = await new UserData().findUserByEmail(login.email)
        if(!user){
            throw new Error("Email não cadastrado!");
            
        }

        const hash = new HashManager()
        const correctPass= hash.compareHash(password, user.password)
        console.log(correctPass)
        if(!correctPass){
            throw new Error("Senha invalida!");
            
        }
        const authenticator =  new Authenticator()
        const token = authenticator.generate({id:user.id})
        return token
    }
}