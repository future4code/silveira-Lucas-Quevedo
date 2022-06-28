import { Request, Response } from "express";
import { send } from "process";
import connection from "../Data/connection";
import { Authenticator } from "../services/Authenticator";
import { AuthenticationData } from "../types";

export const login = async (req:Request, res:Response):Promise<void> =>{
    try {
        const {email, password} = req.body
        if(!email || !password){
            throw new Error("Email ou password invalidos!");
            }

        const [user] = await connection("User2").where({email})

            if(!user || user.password !== password){
                throw new Error("Usuário não autorizado!");
                
            }
            const payload:AuthenticationData={
                id:user.id
            }

            const token = new Authenticator().generationToken(payload)
            res.status(200).send({token})

        
    } catch (error:any) {
        res.status(500).send(error.message || error.sqlMessage)
    }
}