import { AthleteDataBase } from "../data/AthleteDataBase";
import { IdGenerator } from "../services/IdGenerator";
import { Athlete, createAthlete } from "../Types/inputAthlete";

export class AthleteBusiness{
    athlete = async (input:createAthlete) =>{
        try {
            const name = input.name
        if(!name){
            throw new Error("fill in the name field correctly");
            
        }
        const id = new IdGenerator().generateId()
        const inputAthlete:Athlete={
            id,
            name
        }

        await new AthleteDataBase().createAthlete(inputAthlete)
            
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage);
            
        }
        
    }
}