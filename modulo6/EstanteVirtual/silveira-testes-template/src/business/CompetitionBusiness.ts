import { CompetitionDataBase } from "../data/CompetitionDataBase";
import { IdGenerator } from "../services/IdGenerator";
import { inpuCreateCompetition, inputCreateCompetitionData } from "../Types/inputCreateCompetition";

export class CompetitionBusiness {
    Competition = async (input: inpuCreateCompetition) => {
        try {
            const { competicao, atleta, value, unidade } = input

            if (!competicao || !atleta || !value || !unidade) {
                throw new Error("Please, fill in all the fiels!");
            }

            const id = new IdGenerator().generateId()
           const index: inputCreateCompetitionData = {
                id,
                competicao,
                atleta,
                value,
                unidade
            }


            await new CompetitionDataBase().CreateCompetition(index)
        } catch (error: any) {
            throw new Error(error.message || error.sqlMessage);

        }
    }
}