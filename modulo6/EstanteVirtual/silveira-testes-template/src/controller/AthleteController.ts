import { Request, Response } from "express";
import { AthleteBusiness } from "../business/AthleteBusiness";
import { createAthlete } from "../Types/inputAthlete";

export class AthleteController {
createAthlete = async (req:Request, res:Response) =>{
        try {
            const name = req.body

            const input:createAthlete ={
                name
            }
            await new AthleteBusiness().athlete(input)
            res.status(201).send({message:"athlete created successfully!"})
        } catch (error:any) {
            res.status(400).send({message:error.message || error.sqlMessage})
        }
    } 
}
