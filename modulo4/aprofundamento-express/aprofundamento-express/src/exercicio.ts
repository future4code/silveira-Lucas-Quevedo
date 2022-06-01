import express, {Request, Response} from 'express'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("servidor disponivél 3003"))
//Exercicio 1------------------------------------------------------------------------------------------------------------------------------------
app.get("/ping", (req:Request, res:Response) => {          
    res.send("Pong! 🏓")
})

//Exercicio 2 --------------------------------------------------------------------------------------------------------------------------------
type ListaDeTarefas = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}
//Exercicio 3 --------------------------------------------------------------------------------------------------------------------------------
const lista: ListaDeTarefas[] = [
    { userId: 1, id: 1, title: "Lavar roupa", completed: false },
    { userId: 2, id: 2, title: "Academia", completed: true },
    { userId: 3, id: 3, title: "Estudar", completed: true },
    { userId: 4, id: 4, title: "Fazer o jantar", completed: true },
    { userId: 5, id: 5, title: "Leitura", completed: true },
]
//Exercicio 4 ------------------------------------------------------------------------------------------------------------------------------------
app.get("/lista", (req:Request, res:Response)=>{
    const completo = lista.filter((find)=>{
      return  find.completed === true
    })
    res.status(200).send(completo)
})
//Exercicio 5 --------------------------------------------------------------------------------------------------------------------------------------------------
type Afazeres = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


app.post("/novos-afazeres", (req:Request,res:Response)=>{
    const userId =Number(req.body.userId)
    const id = Number(req.body.id)
    const title = String(req.body.title)
    const completed = Boolean(req.body.completed)

    const afazeresNovos :Afazeres={
    userId: userId,
    id: id,
    title: title,
    completed: completed

    }

    lista.push(afazeresNovos)
    res.status(200).send(lista)
    console.table(lista)
})
//Exercicio 6 ---------------------------------------------------------------------------------------------------------------------------------------
app.put('/tarefas/:id', (request: Request, response: Response) => {
    const params = Number(request.params.id)

    const filtrando = lista.filter((find) => {
        if (find.id === params) {
            find.completed !== find.completed
        }
    })

    response.status(201).send(lista)
})


//Exercício 7 ------------------------------------------------------------------------------------------------------------------------------------

app.delete('/tarefas/:id', (request: Request, response: Response) => {
    const params = Number(request.params.id)

    const deletar = lista.filter((deletar) => {
        return deletar.id !== params
            
        
    })
    response.status(201).send(deletar)
})

//Exercicio 8----------------------------------------------------------------------------------------------------------------------------

app.get('/tarefas/:userId', (request: Request, response: Response) => {
    const params = Number(request.params.userId)

    const afazeres = lista.filter((afazeres) => {
        return afazeres.userId === params
    })
        const tarefas = lista.filter((tarefas) => {
           return tarefas.userId !== params
               
            
    })
    response.status(201).send({tarefas: {selectedUser: afazeres, others: tarefas} })
})