import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/Urls'
import useProtectPage from '../../Hooks/UseProtectPage'
import useRequestData from '../../Hooks/useRequestData'
import { irParaPost } from '../routes/Cordinator'
import { BotaoCriarPost, CardFeed, Form, PlaceButton, Placecard } from './StylesFeed'
import {Button, TextField} from '@material-ui/core/'
import useForm from '../../Hooks/Hooks'
import axios from 'axios'


const PaginaFeed = () => {
    useProtectPage()
    const navigate = useNavigate()
    const [feed, getPost] = useRequestData([], `${BASE_URL}/posts`)
    const [form, onChange, clear] = useForm({title:"", body:""})

    const token = localStorage.getItem("token")

    const createPost = () =>{
        axios.post(`${BASE_URL}/posts`, form,{
            headers:{
                Authorization: token

            }
           
        })
        .then((res) =>{ 
            getPost()
            clear ()
        })

        .catch((err) => alert(err.response.message))
    
    }
    
    const onSubmitPost = (event) =>{
        event.preventDefault()
         createPost()
      
    }
    

    const onClickCard = (id) =>{
        irParaPost(navigate, id)
    }

    const mostrarFeed =feed && feed.map((mostrar) =>{
        return (<CardFeed key={mostrar.id} onClick={() => onClickCard(mostrar.id)}>
            
            <p>Enviado por:   {mostrar.username}</p>
            <h3>{mostrar.body}</h3>
         
            <p>Comentario:{mostrar.commentCount}</p>
            <PlaceButton>
                               

            <BotaoCriarPost color='primary'>+</BotaoCriarPost>
            <BotaoCriarPost color='primary'>-</BotaoCriarPost>
           <h4> {mostrar.voteSum} </h4>
            </PlaceButton>
             </CardFeed>
        )

    }) 

    


  return (
   
    <Placecard>
        <Form onSubmit={onSubmitPost}>
        <TextField
       name={'title'}
       value={form.title}
       onChange={onChange}
       label="Titulo"
       required
       autoFocus
       variant='outlined'
       color='primary'
       fullWidth
    //    type={'text'}
       
        />

<TextField
       name={'body'}
       value={form.body}
       onChange={onChange}
       label="Post"
       required
       autoFocus
       variant='outlined'
       color='primary'
       fullWidth
    //    type={'text'}
        />
       
        <Button 
         variant='contained' 
        color="primary" 
        fullWidth
        type={"submit"}>Post</Button>
           </Form>
           {/* <br></br>
           <br></br>
           <br></br> */}

          {mostrarFeed}
       
    </Placecard>
  
  )
}



export default PaginaFeed