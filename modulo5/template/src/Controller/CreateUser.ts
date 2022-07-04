import { Request, Response } from "express";
import { userBusiness } from "../Business/userBusiness";
 export const singup = async(req:Request, res:Response) =>{
    try {
        const input ={
            email:req.body.email,
            name:req.body.name,
            password:req.body.password,
            role:req.body.role
        }
        const token = await new userBusiness().createUser(input)
        res.status(201).send("usuario criado com sucesso!")
        return token
        
    } catch (error:any) {
        res.status(400).send(error.message)
    }
}
