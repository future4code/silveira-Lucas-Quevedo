import { connection } from "..";
import BaseDataBase from "./BaseDataBase"

export class CompetitionDataBase {
    CreateCompetition = async (input:any):Promise<any> =>{
        try {
           const result = await connection("createCompetition")
            .insert({
                id:input.id,
                competicao:input.competicao,
                atleta:input.atleta,
                value:input.value,
                unidade:input.unidade
            })
            // .into("createCompetition")
            return result
            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}