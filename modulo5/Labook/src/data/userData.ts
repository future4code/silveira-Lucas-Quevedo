import User from "../model/User"
import connection from "../data/BaseDataBase"

export default class UserData  {
    insert = async (user: any) => {
        const user2 = await connection("labook_users")
            .insert(user)
            if(!user2){
                throw new Error("Sem conexão com o banco");
                
            }
        return user2
    }

    findUserByEmail = async (email: string): Promise<User> => {
        try {
            const user1 = await connection("labook_users")
                .select("*")
                .where({ email })
            return user1[0]
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage)

        }
    

    }

    login = async (email:string):Promise<User> =>{
        try {
            const user3 = await connection("labook_users")
            .select("*")
            .where({email})
            return user3[0]
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
            
            
        }
    }
}