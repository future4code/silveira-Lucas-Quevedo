import axios from "axios"
import { baseURL } from "./baseURL"
//1.a) O end point get
//b) Com any




//C)
async function pegarInscritos1(): Promise<any[]> {
    const result = await axios.get(`${baseURL}/subscibers`)
    return result.data
}




//2.a)
//b)
const pegarInscritos = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`)
    return response.data

}

//3.a)Nenhum erro de tipagem
//b)
//c)
type user = {
    id: string;
    name: string;
    email: string;
}


const pegarInscritos2 = async (): Promise<user[]> => {
    const result = await axios.get(`${baseURL}/subscribers`)
    return result.data.map((result: any) => {
        return {
            id: result.id,
            name: result.name,
            email: result.email
        }
    })
}

//4.a)
//b)
const noticia = {
    title: "Salario minímo aumenta 10%",
    content: "Salário minímo passa de R$ 1.200,00, para, R$ 1.320,00 apartir de agosto",
    date: Date.now()
}
const criarNoticia = async (noticia: any): Promise<void> => {
     await axios.put(`${baseURL}/news`, noticia)
    // console.log(result)


}
//5.a)

const pegarId =  (inscritos: any): string[] => {
    return inscritos.map((inscritos: any) => {
        return inscritos.id
    })
}

const notificarUsuarios = async (id: string[]): Promise<void> => {
    for (const user of id) {
        try {
            
            const usuario = {
                subscriberId:user,
                message: "Noticía urgente clique e veja!"
            }
            console.log(usuario)

            
            axios.post(`${baseURL}/notifications`, usuario
            )
            // console.log(notificar)
            

        } catch (error:any) {
            throw new Error(error.message);
            
        }

    }
    console.log('Notificações enviadas')
}




const main = async (): Promise<void> => {
    try {
        criarNoticia(noticia)

        const inscritos = await pegarInscritos2()
        // console.log(inscritos)
        const inscrito = await pegarId(inscritos)
        // console.log(inscrito)
        await notificarUsuarios(inscrito)
       
    } catch (error: any) {
        const resp = error.response?.data || error.message
        console.log(resp)
    }

}


main()