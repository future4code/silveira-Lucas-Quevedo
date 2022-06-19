import { Request, Response } from "express";
import { labeUsers } from "../data/labeUsers";
import { postUser, userInsert } from "../types/types";

export const createUser = async (req:Request, res:Response) => {
    try {
        const {name, email, password}:postUser = req.body
        if(!name || !email || !password){
            throw new Error("Todos os campos devem ser devidamente inseridos");
            
        }

        const insert:userInsert ={
            id: Date.now().toString(),
            name,
            email,
            password
        }

        const result = await labeUsers(insert)
        res.status(201).send(result)
     
    } catch (error: any) {
       res.status(500).send(error.message) 
    }
}