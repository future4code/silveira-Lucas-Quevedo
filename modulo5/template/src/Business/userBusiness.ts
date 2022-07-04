import { connection } from "../Controller";
import { userDataBase } from "../data/userDataBase";
import { generateToken } from "../services/authenticator";
import { compare, hash } from "../services/hashManager";
import { generateId } from "../services/idGenerator";
import { User, userLogin } from "../types/types";

export class userBusiness{
    createUser = async (user:User) =>{
        try {
            if(!user.email || !user.name || !user.password || !user.role ){
                throw new Error("Preencha todos os campos!");
            }
            if(user.email.indexOf("@") === -1){
                throw new Error("email invalido"); 
            }

            if(user.password.length < 6){
                throw new Error("Senha deve ser maior que 6 caracteres!");
            }
            const id = generateId()
            const hahsPassword = await hash(user.password)
            await new userDataBase().createUser(id, user.email, user.name, hahsPassword, user.role)
            const token = generateToken({id:id, role:user.role});
            return token
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
            
        }
    }

    async login(user:userLogin){
        try {
            if(!user.email || !user.password ){
                throw new Error("Preencha todos os campos!");
            }
            if(user.email.indexOf("@") === -1){
                throw new Error("email invalido"); 
            }

            if(user.password.length < 6){
                throw new Error("Senha deve ser maior que 6 caracteres!");
            }
            
            const userDB = new userDataBase()
            const pass = await userDB.loginById(user);
            const hash = await compare(user.password, pass.password)
            // 
            if(!hash){
                throw new Error("Senha incorreta");
                
            }

            const token = generateToken({id:pass.id,role:pass.password})

            return (pass && token)
            
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
            
        }


    }
    


}