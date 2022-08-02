import { ProductDataBase } from "../data/ProductDataBase";
import Authenticator from "../services/Authenticator";
import { IdGenerator } from "../services/idGenerator";
import { inputCreateProductDTO } from "../types/inputCreateProductsDTO"
import { inputGetProductsByIdDTO, inputGetProductsByNameDTO, inputGetProductsByTagsDTO } from "../types/inputGetProductsDTO";


export  class ProductsBusiness  {
    product = async (input:inputCreateProductDTO) =>{
    try {
            const { name, tags } = input
            if(!name || !tags){
                throw new Error("Please, fill in all the fiels!")
            }
            const id = new IdGenerator().generate();
    
            const product = {
                id,
                name, 
                tags
            }
            await new ProductDataBase().createProduct(product)
        
       
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message);
    }
}

getProductById = async (input:inputGetProductsByIdDTO) =>{
 try {
    const { id } = input
 if(!id){
    throw new Error("Id incorrect!")
}

console.log(id)
const result = await new ProductDataBase().GetProductById({id:id}) 
// return result
console.log("business",result)
} catch (error:any) {
    throw new Error( error.messgae || error.sqlMessage);
    
 }
    
}

getProductByName = async (input:inputGetProductsByNameDTO) =>{
    try {
        const name = input
        if(!name){
           throw new Error("Name incorrect!")
       }

        await new ProductDataBase().GetProductByName(name)
    
    } catch (error:any) {
        throw new Error( error.messgae || error.sqlMessage);
    }
}

getProductByTags = async (input:inputGetProductsByTagsDTO) =>{
    try {
        const tags = input
        if(!tags){
           throw new Error("tags incorrect!")
       }

       const result = await new ProductDataBase().GetProductByTags(tags)
       return result[0]
    } catch (error:any) {
        throw new Error( error.messgae || error.sqlMessage);
    }
}
}