import axios from 'axios'
import { Exercicio2 } from '../types/type2'

export const pegarEndereco2 =async (cep:string):Promise<Exercicio2 | undefined> => {
    try {
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        const endereco : Exercicio2 = {
            cep:result.data.cep,
            logradouro:result.data.logradouro,
            numero:result.data.numero,
            complemento:result.data.complemento,
            bairro:result.data.bairro,
            cidade:result.data.localidade,
            estado:result.data.uf
        }
        return endereco
    } catch (error) {
        return undefined
    }
}