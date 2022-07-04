import express from 'express'
import knex from 'knex'
import cors from 'cors'
import dotenv from 'dotenv'
import { singup } from './CreateUser'
import { login } from './login'
import { getAllUsers } from './getAllUsers'


dotenv.config()

export const connection = knex({
   client: 'mysql',
   connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
      port: 3306
   }
})


const app = express()
app.use(express.json())
app.use(cors())

app.get("/", async function(req,res){
   res.send(await connection.raw('show tables'))
})

app.post("/signup", singup)
app.post("/login", login)
app.get("/users", getAllUsers)
app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})

