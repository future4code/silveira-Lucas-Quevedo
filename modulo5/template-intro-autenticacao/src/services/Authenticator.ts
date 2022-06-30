import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types"
import dotenv from "dotenv"

dotenv.config()
const expiresIn ="5h"
export default class Authenticator {
    generateToken = (payoad:authenticationData) =>{
      return jwt.sign(
            payoad,
            process.env.DB_JWK_KEY as string,
            {
                expiresIn
            }
        )
        
    }
    getTokenData = (token:string) =>{
        const tokenData = jwt.verify(
            token, process.env.DB_JWK_KEY as string
        )
        return tokenData
    }
}

