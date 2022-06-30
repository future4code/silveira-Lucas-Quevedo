import { Request, Response } from "express";
import connection from "../Data/connection";

export const getUser = async (email:string):Promise<any> =>{
    
        const result = connection.select("*")
        .from("User")
        .where({email})
        return result
    
}