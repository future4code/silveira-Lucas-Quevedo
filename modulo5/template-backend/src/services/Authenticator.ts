import * as jwt from "jsonwebtoken"
import { USER_ROLES } from "../entities/User"

export interface AuthenticatorData {
    id:string,
    role:USER_ROLES
}

export class Authenticator {
    generate(payload:AuthenticatorData):string{
        const token = jwt.sign(payload, process.env.JWK_KEY as string, {
            expiresIn:"300h"
        })
        return token
    }

    getTokenData(token:string){
        const data =jwt.verify(token, process.env.JWK_KEY as string)
        return data as AuthenticatorData
    }
    
}