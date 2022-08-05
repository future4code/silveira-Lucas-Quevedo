import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { getId, inpuCreateCompetition } from "../Types/inputCreateCompetition";

export class CompetitionController {
    createCompetition = async (req:Request, res:Response) =>{
        try {
            const {competicao, condicao }:inpuCreateCompetition = req.body

            const input:inpuCreateCompetition = {
                competicao,
                condicao
            }
           
           await new CompetitionBusiness().Competition(input)
            res.status(201).send({message:"Competition was created successfully!"})
        } catch (error:any) {
            res.status(400).send({message:error.message})
        }
    }

    putCompetitionId = async (req:Request, res:Response) =>{
        try {
            const id = req.body
            console.log(id)

            // const input:getId={
            //     id
            // }
             await new CompetitionBusiness().putCompetition(id)
            res.status(200).send({message:"competition finish"})
        } catch (error:any) {
            res.status(400).send({message:error.message || error.sqlMessage})
        }
    }
}


