import Authenticator from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";
import { inputGetProductsByIdDTO, inputGetProductsByNameDTO, inputGetProductsByTagsDTO } from "../types/inputGetProductsDTO";
import BaseDataBase from "./BaseDatabase"


export class ProductDataBase extends BaseDataBase {
    
    createProduct = async (input:any) =>{
        try {
            await BaseDataBase.connection()
                .insert({
                    id:input.id,
                    name:input.name
                })
                .into("amaro10")

                const tags = input.tags
                console.log(tags)
                

                const productsId = input.id

                for(const tag of tags){
                    const tagsid = new IdGenerator().generate()
                    await BaseDataBase.connection()
                    .insert({
                       id:tagsid,
                        tags:tag,
                        products_id:productsId
                    })
                    .into("amaro_search10")
                }
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    GetProductById = async (id:inputGetProductsByIdDTO) =>{
        try {
            console.log("id data",{id})
            const result = await BaseDataBase.connection("amaro10")
            .select("*")
            .where({id})
            console.log("result data",result[0])
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    GetProductByName = async (name:inputGetProductsByNameDTO) =>{
        try {
            console.log(name)
            await BaseDataBase.connection("amaro10")
            .select("*")
            .where({name})
            
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message);
        }
}
GetProductByTags = async (tags:inputGetProductsByTagsDTO) =>{
    try {
        const data = await BaseDataBase.connection
        .select("*")
        .from("amaro_search10")
        .where({ tags })
        return data
    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
    }
}
}