import axios from "axios";
import { Request, Response } from "express";
import { Exercicio2 } from "../types/type2";

export const pegarEndereco = async (req:Request, res:Response) =>{
    try {
        const cep = req.params.cep
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            const data :Exercicio2 = {
                cep:result.data.cep,
                logradouro:result.data.logradouro,
                bairro:result.data.bairro,
                cidade:result.data.localidade,
                estado:result.data.uf,
                complemento:result.data.complemento,
                numero:result.data.numero
            }
            console.log(result)
        res.status(200).send(data)
    } catch (error:any) {
        res.status(400).send("deu ruim")
    }
}