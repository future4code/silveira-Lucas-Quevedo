import { Request, Response } from "express";
import { RegistrationBusiness } from "../business/RegistrationBusiness";

import { inputRegistration } from "../Types/inputRegistration";

export class RegistrationController {
    resultCompetition = async (req:Request, res:Response) =>{
       try {
        
        const {id_competition, id_athlete, value, unity } = req.body
        const input:inputRegistration={
            id_competition,
            id_athlete,
            value,
            unity
            
        }
        
         await new RegistrationBusiness().createRegistration(input)
        res.status(201).send({message:"registration created successfully"})
       } catch (error:any) {
        res.status(400).send({message:error.message || error.sqlMessage})
       }
    }

    getResult = async (req:Request, res:Response) =>{
        try {
            const id_competition  = req.body
            const result = await new RegistrationBusiness().getResultById(id_competition)
            console.log(result)
            res.status(200).send({message:result})
        } catch (error:any) {
            res.status(400).send({message:error.message || error.sqlMessage})
        }
    }
}