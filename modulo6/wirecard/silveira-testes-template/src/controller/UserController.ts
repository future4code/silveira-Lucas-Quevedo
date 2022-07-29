import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { inputCreateUserDTO } from "../types/inputCreateUserDTO";

export class UserController{
    signupUser = async (req:Request, res:Response) =>{
    try {
       
            const {name, email, password} = req.body
    
            const input:inputCreateUserDTO ={
                name, 
                email, 
                password
            }
    
            const token = await new UserBusiness().createUser(input)
        res.status(201).send({message:"Usuário criado com sucesso!", token})
    } catch (error:any) {
        res.status(400).send({message: error.message})
    }

}
    
}