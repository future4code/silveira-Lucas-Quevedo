import { Exercicio2 } from "../types/type2";
import { connection } from "./connection";

export async function inserirEndereco2(endereco:Exercicio2) {

    const { cep, logradouro, numero, complemento, bairro, cidade , estado} = endereco

    await connection("adress10").insert({
        cep,
        logradouro,
        bairro,
        cidade,
        estado,
        numero,
        complemento
    })

}