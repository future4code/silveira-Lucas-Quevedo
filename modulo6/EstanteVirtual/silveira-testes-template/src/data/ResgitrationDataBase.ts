import { TypeCompetition } from "../Types/inputCompetition";
import { competitionId } from "../Types/inputRegistration";
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

    getIdData = async(id_competition:competitionId) =>{
        try {
           const [result] =await BaseDataBase.connection("registration")
            .select("*")
            .where({id_competition})
            // .join("registration","registration.id_competition", "createCompetition")

            if(result.name === TypeCompetition.DARDO){
                const result = await BaseDataBase.connection("registration")
                .select("registration.id", "athlete.name", "registration.value", "registration.unity")
                .where({id_competition})
                return result
            }else if(result.name === TypeCompetition.CEM_METROS){
                const result = await BaseDataBase.connection("registration")
                .select("registration.id", "athlete.name", "registration.value", "registration.unity")
                .where({id_competition})
                .join("athlete", "registration.id_athelete", "athlete.id")
                .orderBy("resgitration.value")
                return result
            }
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
        }
    }
}