import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { IdGenerator } from "./services/IdGeneretor"
import { Authenticator } from "./services/Authenticator"
import { AuthenticationData } from "./types"
import { login } from "./endpoints/login"

// const genrator = new IdGenerator().generatorId()

// console.log(genrator)

// const authenticator = new Authenticator()

// const payload:AuthenticationData = {
//     id:"id-bananinha"
// }

// console.log(authenticator.generationToken(payload))
app.post("/user/login", login)
app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)

