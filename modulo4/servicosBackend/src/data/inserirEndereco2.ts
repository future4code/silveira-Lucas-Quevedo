import { Exercicio2 } from "../types/type2";
import { connection } from "./connection";

export default async function inserirEndereco2(endereco:Exercicio2) {

    const { cep, logradouro, numero, complemento, bairro, cidade , estado} = endereco

    await connection("endereco").insert({
        cep,
        logradouro,
        bairro,
        cidade,
        estado,
        numero,
        complemento
    })

}