import { Request, Response } from "express";
import UserBusiness from "../business/UserBusiness";
import UserData from "../data/userData";
import { Authenticator } from "../services/Authenticator";


export default class useController{
  signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body

      const input = {
        name,
        email,
        password
      }
      const token = await new UserBusiness().signup(input)
      res.status(201).send({ message: "Usuário criado com sucesso", token })

    } catch (error: any) {
      res.status(400).send(error.message)

    }

  }

  login = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body
      const user = {

        email,
        password
      }
      const token = await new UserBusiness().login(user)
      res.status(200).send({ message: "Usuário logado com sucesso!", token})
        
      } catch(error: any) {
    res.status(500).send(error.message)

  }

  }

  friends = async (req:Request, res:Response) =>{
    try {
      const {id} = req.body
     const token = req.headers.authorization as string

     const tokenData = new Authenticator().getTokenData(token).id
      if(!tokenData){
        throw new Error("Não autorizado!");
        
      }


      const friend1 = await new UserData().friends(id)
      const friend2 = await new UserData().friends(tokenData)
      await new UserBusiness().friend(friend1.id, friend2.id)
      
      res.status(200).send({message: "Conexção conectada com suceeso!"})
    } catch (error:any) {
      res.status(404).send(error.message)
    }
  }
}