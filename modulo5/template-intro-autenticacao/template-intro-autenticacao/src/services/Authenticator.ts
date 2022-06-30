import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types"

export class Authenticator{
    generationToken = (payload:AuthenticationData) =>{
      return jwt.sign(payload, "senhaSuperSegura", {expiresIn: "5h"})
    }

    getTokenData = (token:string) =>{
       const tokenData = jwt.verify(token, "senhaSuperSegura")
       return tokenData
    }
}