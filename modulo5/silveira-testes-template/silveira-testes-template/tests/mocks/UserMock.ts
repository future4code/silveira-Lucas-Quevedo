import { User, USER_ROLES } from "../../src/model/User";

export const userMock = new User(
    "idUser1",
    "lucas",
    "lucas@gmail.com",
    "123456",
    USER_ROLES.NORMAL
)

export const adminMock = new User(
    "idUser2",
    "luizinho",
    "luizinho@gmail.com",
    "123456",
    USER_ROLES.ADMIN
)