import express, { Request, Response } from 'express'
import cors from 'cors'
import  send from 'process'
type Posts = {
    id: number,
    title: string,
    body: string,
    userId: number
}
const arrayDePosts: Posts[]=[
    {userId: 1, id: 5, title: "nesciunt quas odio", body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"},
    {userId: 2, id: 6, title: "dolorem eum magni eos aperiam quia",body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"},
]

const app = express()
app.use(cors())
app.use(express.json())
app.listen(3003, () =>{
    app.post('/posts', (request: Request, response: Response) => {
        response.status(201).send({ message: arrayDePosts })
    })
    app.post('/posts/:id', (request: Request, response: Response) => {
        const idPessoa = Number(request.params.id)
    
        const acharId = arrayDePosts.find((person) => {
            if (person.userId === idPessoa) {
                return person;
            }
        })
        response.status(201).send({ acharId })
    })
  })
  

