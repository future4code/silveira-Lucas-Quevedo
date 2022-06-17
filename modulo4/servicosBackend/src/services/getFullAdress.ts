import axios from "axios"
import { Address } from "../types/type2"

export const getFullAdress = async (cep: string): Promise<Address | undefined> => {
    try {

        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)


        const address: Address = {
            logradouro: result.data.logradouro,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf
        }

        return address
    } catch (error) {
        return undefined
    }
}