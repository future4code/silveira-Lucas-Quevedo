import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { inpuCreateCompetition } from "../Types/inputCompetition";

export class CompetitionController {
    createCompetition = async (req:Request, res:Response) =>{
        try {
            const { competicao, condicao }:inpuCreateCompetition = req.body

            const input:inpuCreateCompetition = {
                competicao,
                condicao
            }
           
           const result = await new CompetitionBusiness().Competition(input)
            res.status(201).send({message:"Competition was created successfully!",result:result})
        } catch (error:any) {
            res.status(400).send({message:error.message})
        }
    }

    putCompetitionId = async (req:Request, res:Response) =>{
        try {
            const id = req.body
            
             await new CompetitionBusiness().putCompetition(id)
            res.status(200).send({message:"competition finish"})
        } catch (error:any) {
            res.status(400).send({message:error.message || error.sqlMessage})
        }
    }
}


