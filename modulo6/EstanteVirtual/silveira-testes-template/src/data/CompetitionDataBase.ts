import { connection } from "..";
import BaseDataBase from "./BaseDataBase"

export class CompetitionDataBase {
    CreateCompetition = async (input:any) =>{
        try {
            console.log("DataBase",input)
            await connection("createCompetition")
            .insert({
                id:input.id,
                competicao:input.competicao,
                atleta:input.atleta,
                value:input.value,
                unidade:input.unidade
            })
            // .into("createCompetition")
            
            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}