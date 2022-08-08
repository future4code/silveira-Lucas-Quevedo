import { ResgitrationDataBase } from "../data/ResgitrationDataBase";
import { IdGenerator } from "../services/IdGenerator";
import { Competition } from "../Types/inputCompetition";
import { competitionId, inputRegistration, Resgitration } from "../Types/inputRegistration";

export class RegistrationBusiness{
    createRegistration = async (input:inputRegistration) =>{
        try {
            const { id_competition, id_athlete, value, unity } = input
            if(!id_competition || !id_athlete || !value || !unity){
                throw new Error("fill in the fields correctly");
            }

            if(id_competition === Competition.TERMINOU){
                throw new Error("competition ended");
            }

                
                const id = new IdGenerator().generateId()
                const registration:Resgitration={
                    id,
                    id_competition,
                    id_athlete,
                    value,
                    unity
                    }
        
            const result =await new ResgitrationDataBase().registrationData(registration)
            return result
            
                
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
            
        }
    }

    getResultById = async (input:competitionId) =>{
        try {
            const { id_competition } = input
            if(!id_competition){
                throw new Error("fill in the fields correctly")
            }
          
            const result = await new ResgitrationDataBase().getIdData(id_competition)
           
            return result
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
        }
    }
}
