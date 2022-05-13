import React from 'react'
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/Urls';
import useProtectPage from '../../Hooks/UseProtectPage';
import useRequestData from '../../Hooks/useRequestData';
import { CardFeed } from '../paginaFeed/StylesFeed';
import {Button, TextField} from '@material-ui/core/'
import { Form, Placecard } from './StylesPost';
import useForm from '../../Hooks/Hooks';
import axios from 'axios';

const PaginaPost = () => {
    useProtectPage()
    const params = useParams()
    const [post, getPost] = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    const [form, onChange, clear] = useForm({body:""})
    
    const token = localStorage.getItem("token")

    const createComments = () =>{
      axios.post (`${BASE_URL}/posts/${params.id}/comments`, form,{
        headers:{
          Authorization: token

      }
     
  })
  .then((res) =>{ 
      
      clear ()
  })

  .catch((err) => alert(err.response.message))

}

const onSubmitComments = (event) =>{
  event.preventDefault()
   createComments()
}
    const mostrarPost = post && post.map((detail) =>{
        return (<div>
       
        <p>Enviado por:  {detail.username}</p>
        <h2>{detail.body}</h2>
        
        </div>
        )

    })
  
  return (<Placecard>
      <Form onSubmit={onSubmitComments}>

    <CardFeed>{mostrarPost}</CardFeed>
    <TextField
      autoFocus
      variant='outlined'
      color='primary'
      fullWidth
      name='body'
      value={form.body}
      onChange={onChange}
      required
      type={'text'}
      
    ></TextField>
        <Button  
          fullWidth
          variant='contained' 
          color="primary" 
          type={"submit"}>Enviar</Button>
           </Form>
    </Placecard>
  )
}

export default PaginaPost