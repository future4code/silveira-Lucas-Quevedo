import { ProductDataBase } from "../data/ProductDataBase";
import { IdGenerator } from "../services/idGenerator";
import { inputCreateProductDTO } from "../types/inputCreateProductsDTO"


export  class ProductsBusiness  {
    product = async (input:inputCreateProductDTO) =>{
    try {
            const { name, price, type, quantity} = input
            if(!name || !price || !type || !quantity){
                throw new Error("Please, fill in all the fiels!")
            }
            const id = new IdGenerator().generate();
    
            const product = {
                id,
                name, 
                price,
                type,
                quantity
            }
            await new ProductDataBase().createProduct(product)
        
       
    } catch (error: any) {
        throw new Error(error.sqlMessage || error.message);
    }
}
}

