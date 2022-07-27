import BaseDatabase from "./BaseDatabase";
import BaseDataBase from "./BaseDatabase"


export class ProductDataBase extends BaseDataBase {
    private static TABLE_NAME = "productss_amaro"
    createProduct = async (input:any) =>{
        try {
            await BaseDatabase.connection
                .insert(input)
                .into(ProductDataBase.TABLE_NAME)
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}

