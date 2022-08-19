import { CompetitionDataBase } from "../data/CompetitionDataBase";
import { IdGenerator } from "../services/IdGenerator";
import { Competition, getId, inpuCreateCompetition, inputCreateCompetitionData } from "../Types/inputCompetition";

export class CompetitionBusiness {
    Competition = async (input: inpuCreateCompetition) => {
        try {
            const { competicao, condicao } = input

            if (!competicao) {
                throw new Error("Competition icorrect!")
            }
            if (!condicao) {
               throw new Error(Competition.TERMINOU);
            }
            
            
            if (!competicao || !condicao) {
                throw new Error("Please, fill in all the fiels!");
            }

            const id = new IdGenerator().generateId()
           const index: inputCreateCompetitionData = {
                id,
                competicao,
                condicao
            }


           await new CompetitionDataBase().CreateCompetition(index)

        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);

        }
    }

    putCompetition = async (input:getId) =>{
        try {
            const { id } = input 
           
        if(!id){
            throw new Error("Id incorrect!");
        }
      const competitonDB = await new CompetitionDataBase().getCompetition(id)
        if(!competitonDB){
            throw new Error("invalid competition!");
        }
        await new CompetitionDataBase().updateCompetition(id) 
            return competitonDB
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
        }
        
    }
}