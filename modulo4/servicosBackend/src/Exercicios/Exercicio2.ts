import { Request, Response } from "express";
import inserirEndereco2 from "../data/inserirEndereco2";
import { pegarEndereco2 } from "../services/pegarEndereco";

export const InserirBanco = async (req: Request, res: Response) => {
    try {
        const cep = req.params.cep
        const inserirEndereco = await pegarEndereco2(cep)
        if(!inserirEndereco){
            throw new Error("Erro ao criar!");
        }   
        await inserirEndereco2(inserirEndereco)
          
            
            
            res.status(201).send("Endereço inserido com sucesso!")
    } catch (error:any) {
        res.status(400).send(error.message || error.sqlMessage)
    }

}


