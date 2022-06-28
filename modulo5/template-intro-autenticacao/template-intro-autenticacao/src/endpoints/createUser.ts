import { Request, Response } from "express";
import connection from "../Data/connection";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGeneretor";
import { AuthenticationData, user2 } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {
      const {email, password} = req.body
      // const { name, nickname, email, password } = req.body

      // if (!name || !nickname || !email || !password) {
      //    res.statusCode = 422
      //    throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      // }

      if(!email || email.indexOf("@") === -1){
         throw new Error("Email invalido");
         
      }

      if(!password || password < 6){
         throw new Error("Senha invalida");
         
      }

      const [user] = await connection('User2')
         .where({ email })

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

      const id: string = new IdGenerator().generatorId()

      const newUser: user2 = { id, email, password }

      await connection('User2')
         .insert(newUser)

      const payload:AuthenticationData ={
         id:newUser.id
      }

      const token = new Authenticator().generationToken(payload)

      res.status(201).send({ token })

   } catch (error:any) {
      console.log(error)
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}