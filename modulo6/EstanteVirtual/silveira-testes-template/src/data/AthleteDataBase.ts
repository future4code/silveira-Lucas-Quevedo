import { Athlete } from "../Types/inputAthlete";
import BaseDataBase from "./BaseDataBase";

export class AthleteDataBase extends BaseDataBase{
    createAthlete = async (input:Athlete) =>{
       try {
        await BaseDataBase.connection
        .insert({
            id:input.id,
            name:input.name
        })
        .into("athlete")

       } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
       }
}

}