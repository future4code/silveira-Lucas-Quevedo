import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import { IdGenerator } from "./services/generateId"
import Authenticator from "./services/Authenticator"
import { authenticationData } from "./types"

const generator = new IdGenerator().generateId()

console.log(generator)

const autenticacao = new Authenticator()

const payoads:authenticationData ={
    id:"id-bananinha"
}
console.log(autenticacao.generateToken(payoads))
app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)