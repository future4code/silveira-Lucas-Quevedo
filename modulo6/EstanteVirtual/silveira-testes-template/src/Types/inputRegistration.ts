import { TypeCompetition, UNITY } from "./inputCompetition"

export type inputRegistration={
    id_competition:string,
    id_athlete:string
    value:number,
    unity:TypeCompetition 
}  
 export type Resgitration ={
    id:string
    id_competition:string,
    id_athlete:string
    value:number,
    unity:TypeCompetition 
 }

 export type competitionId ={
    id_competition:string,
    
 }
export type resultCompetitionById={
   id: string
   competicao: string,
   value: number,
   unity: UNITY
}
 
