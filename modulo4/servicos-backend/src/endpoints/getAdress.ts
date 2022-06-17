import axios from "axios";
import { Request, Response } from "express";
import { BASE_URL } from "../BASE_URL/BASE_URL";

 export const getAdress = async (req:Request, res:Response) =>{
    try {
        const cep =req.params.cep
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        console.log(result)
        res.status(200).send(result)
    } catch (error) {
        
    }
 }