import express, {Request, Response} from 'express'
import cors from 'cors'
import { Users } from './data'

const app = express()
app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("servidor disponivél 3003"))


app.get("/test/hello",(req:Request, res: Response)=>{
    res.send("Olá mundo!")
})

app.get("/test/:number", (req:Request, res:Response)=>{
    res.send(`Seu número da sorte é ${Number(req.params.number) + 3}`)

  
})

app.get('/playlists/search',(req:Request, res:Response)=>{
    const userAuthoriazation = req.headers.authorization
    const nomePlaylist = req.query.name
   
    if(!nomePlaylist){
        return res.status(404).send("digite uma playlist")
    }
    const find = Users.filter((usuario)=>{
        return usuario.id === userAuthoriazation
    })
    
   const playlists = find[0].playlist.filter((playlist) =>{
       return playlist.name.toLocaleLowerCase() === String(nomePlaylist).toLocaleLowerCase()
   })
   res.send({playlists})
   console.table(playlists)

   const mapear = playlists.map((play) =>{
       return{
           id:play.id,
           name:play.name,
           tracks:{id:play.tracks[0]}
       }
   })
   console.table(mapear)
   res.send({mapear})
    })
   


