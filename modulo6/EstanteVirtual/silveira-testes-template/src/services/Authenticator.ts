import * as jwt from "jsonwebtoken";
export class Authenticator {

    generateToken(info: any): string{

        const token = jwt.sign(
            {id: info.id,
            role: info.role},
            process.env.JWT_KEY as string,
            {expiresIn: process.env.JWT_EXPIRATION_TIME}
        )
        return token;
    }

    getTokenData(token: string) {

        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        );

        return payload 

    }
}