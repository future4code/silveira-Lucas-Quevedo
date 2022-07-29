import { ProductDataBase } from "../data/ProductDataBase";
import { IdGenerator } from "../services/idGenerator";
import { inputCreateProductDTO } from "../types/inputCreateProductsDTO"


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
}

