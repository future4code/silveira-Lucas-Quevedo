// import { connection } from "..";
import { getId } from "../Types/inputCreateCompetition";
import BaseDataBase from "./BaseDataBase";


export class CompetitionDataBase extends BaseDataBase {
    CreateCompetition = async (input:any) =>{
        try {
            
            await BaseDataBase.connection("createCompetition")
            .insert({
                id:input.id,
                competicao:input.competicao,
                condicao:input.condicao
            })
            
            
            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    getCompetition = async (id:string) =>{
        try {
           const result = await BaseDataBase.connection
            .select("*")
            .from("createCompetition")
            .where({ id })
           return result[0]
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
    updateCompetition = async (id:string) =>{
        try {
             await BaseDataBase.connection("createCompetition")
            .update({condicao:"Competição terminou"})
            .where({ id })
            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}