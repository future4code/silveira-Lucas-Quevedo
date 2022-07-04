import { Request, Response } from "express";
import { getAllUsers } from "../Controller/getAllUsers";


export const getAllUsersBusiness = async (req:Request, res:Response) =>{
    try {
        const token = req.headers.authorization as string
        const users = getAllUsers(token)
        return users
    } catch (error:any) {
        res.status(404).send(error.message || error.sqlMessage)
        
    }

}