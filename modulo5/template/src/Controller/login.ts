import { Request, Response } from "express";
import { userBusiness } from "../Business/userBusiness";
import { userDataBase } from "../data/userDataBase";
import { userLogin } from "../types/types";

export const login = async (req: Request, res: Response) => {

    try {

        const loginData:userLogin = {
            email: req.body.email,
            password: req.body.password
        };

       const userDB = new userBusiness()
        const token = await userDB.login(loginData)

        res.status(200).send( token );

    } catch (error:any) {
        res.status(400).send({ error: error.message });
    }
}