import BaseDataBase from "./BaseDatabase"


export class ProductDataBase extends BaseDataBase {
    
    createProduct = async (input:any) =>{
        try {
            await BaseDataBase.connection("productsss_amaro")
                .insert(input)
                
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}

