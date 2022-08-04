import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { inpuCreateCompetition } from "../Types/inputCreateCompetition";

export class CompetitionController {
    createCompetition = async (req:Request, res:Response) =>{
        try {
            const {competicao, atleta, value, unidade } = req.body

            const input:inpuCreateCompetition = {
                competicao,
                atleta,
                value,
                unidade
            }
           
          const result = await new CompetitionBusiness().Competition(input)
          console.log("controller", result)
            res.status(201).send({message:"Competition was created successfully!"})
        } catch (error:any) {
            res.status(400).send({message:error.message})
        }
    }
}


