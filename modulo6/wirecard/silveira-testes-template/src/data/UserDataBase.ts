import User from "../model/User";
import BaseDataBase from "./BaseDatabase";

export class UserDataBase extends BaseDataBase{
    signupUser = async (input:User):Promise<any> =>{
        try {
            await BaseDataBase.connection("users_amaro")
                .insert(input)
                
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}
    