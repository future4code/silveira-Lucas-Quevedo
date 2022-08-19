import { TypeCompetition } from "../Types/inputCompetition";
import { resultCompetitionById } from "../Types/inputRegistration";
import BaseDataBase from "./BaseDataBase";

export class ResgitrationDataBase extends BaseDataBase{
     table1= "registration"
    registrationData = async(input:any) =>{
        try {
           await BaseDataBase.connection
            .insert(input)
            .into("registration")
           
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
            
        }
    }

    getIdData = async(id_competition:string) =>{
        try {
           
           const [result]:resultCompetitionById[] =await BaseDataBase.connection
            .select("*")
            .from("registration")
            .where({ id_competition }) 
            .join("createCompetition","registration.id_competition", "createCompetition.id")
            
          
            
            if(result.competicao === TypeCompetition.DARDO){
                const result:resultCompetitionById[] = await BaseDataBase.connection("registration")
                .select("registration.id", "athlete.name", "registration.value", "registration.unity")
                .where({id_competition})
                .join("athlete", "registration.id_athlete", "athlete.id")
                return result
            }else if(result.competicao === TypeCompetition.CEM_METROS){
                const result:resultCompetitionById[] = await BaseDataBase.connection("registration")
                .select("registration.id", "athlete.name", "registration.value", "registration.unity")
                .where({id_competition})
                .join("athlete", "registration.id_athlete", "athlete.id")
                .orderBy("resgitration.value")
                    return result
                    
            }
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
        }
    }
}