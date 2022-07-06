import { Request, Response } from "express";
import { send } from "process";
import UserBusiness from "../business/UserBusiness";

export default class useController {
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
      res.status(200).send({ message: "Usuário logado com sucesso!", token })
        
      } catch(error: any) {
    res.status(500).send(error.message)

  }

  }
}