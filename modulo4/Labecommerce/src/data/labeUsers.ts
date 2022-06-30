import { userInsert } from "../types/types";
import { connection } from "./connection";

export const labeUsers = async (result:userInsert):Promise<string> =>{
    const {id, name, email, password} = result
    await connection("labecommerce_users").insert({
        id,
        name,
        email,
        password
    })
    return `Usuário ${name} criado com sucesso`
}