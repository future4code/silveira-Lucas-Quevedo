import { Request, Response } from "express"
import { connection } from "../data/connection"
import { user } from "../types"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   
   try {
      const table = "aula49_exercicio"
      const name = req.query.name
      const users = await connection(table)
      .where('name','LIKE',`%${name}%`)
      
      
      
      const result = users.map(toRecipe)
      if(!result.length){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(result)
      

   } catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}
      //verificação antes de fazer o calculo do offset. 
      // let size = 2
      // let offset = size*(page -1)

      // if(sort!=="title"&& sort !== "created_at"){
      //    sort="title"
      // }

      // if(order.toUpperCase()!== "ASC" && order.toUpperCase()!== "DESC"){
      //    order = "DESC"
      // }

      //USANDO O QUERY BUILDER
      // const result = await connection(table)
      // .where('title','LIKE',`%${title}%`)
      // .orderBy(sort, order)
      // .limit(size)
      // .offset(offset)

      

      //USANDO O RAW
      // const result = await connection.raw(`
      //    SELECT * FROM ${table}
      //    WHERE title LIKE '%${title}%'
      //    ORDER BY ${sort} ${order};
         
      // `)
      // console.log(result[0])
      // const recipes = result[0].map(toRecipe)

      
//       if(recipes.length<1){
//          errorCode = 422
//          throw new Error("título não encontrado ou acabaram as receitas.",);
//       }

//       res.status(200).send(recipes)

//    } catch (error:any) {
//       res.status(errorCode).send(error.message)
//    }
// }

const toRecipe = (input: any):user => {
   return {
      id: input.id,
      name: input.name,
      email: input.email,
      type: input.type,
   
   }
}