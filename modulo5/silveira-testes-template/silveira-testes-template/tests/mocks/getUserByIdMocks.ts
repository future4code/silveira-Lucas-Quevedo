import { USER_ROLES } from "../../src/model/User"
import { adminMock, userMock } from "./UserMock"
export class getUserByIdMocks {
     getUserById = async (id:string) =>{
        switch(id){
            case "idUser1":
                return userMock
            case "idUser2":
                return adminMock
                default:
                    return undefined
        }
    }
}
