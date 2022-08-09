import { Request, Response } from "express";
import { ClientBusiness } from "../business/ClientBusiness";
import { ClientInputDTO, inputLoginDTO } from "../model/Client";

export class ClientController {
    createClient = async (req:Request, res:Response) =>{
        try {
            const {name, email, password, cpf} = req.body

            const input:ClientInputDTO={
                name, 
                email,  
                password,
                cpf,
            }

            const token = await new ClientBusiness().create(input)
            res.status(201).send({message:"customer registered successfully!", token:token})
        } catch (error:any) {
            res.status(400).send({message:error.message || error.sqlMessage})
        }
    }

    login = async (req:Request, res:Response) =>{
        try {
            const {email, password} = req.body

            const input:inputLoginDTO ={
                email,
                password
            }
            const result = await new ClientBusiness().login(input)
        res.status(200).send({message:"logged in user!", result})
        } catch (error:any) {
        res.status(400).send({message:error.message || error.sqlMessage})
        }
    }
}