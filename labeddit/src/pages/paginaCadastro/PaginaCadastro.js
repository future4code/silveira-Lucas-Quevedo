import React from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaCadastro, irParaFeed, irParaLogin, irParaPost } from '../routes/Cordinator'
import {Button} from '@material-ui/core'
import { InputsContainer, LoginFormContainer, LogoImage, ScreenContainer } from './StylesCadastro'
import TextField from "@material-ui/core/TextField"
import useForm from '../../Hooks/Hooks'
import Logo from '../../img/logo.png'
import axios from 'axios'
import {BASE_URL} from '../../constants/Urls'

const PaginaCadastro = () => {
    const navigate = useNavigate()
    const [form, onChange, clear] = useForm({username: "",email:"", password:""})
    

    const cadastrar = (body, clear, navigate) =>{
        axios.post(` https://labeddit.herokuapp.com/users/signup`, body)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clear()
            irParaFeed(navigate)

        })
        .catch((err) => alert(err.response.data.message))
    }

   
   
    const OnsubmitInput = (event) =>{
        event.preventDefault()
        cadastrar(form, clear, navigate)
        console.log(form)
        // console.log(cadastrar)

    }

    
  return (
    <ScreenContainer>
        <LoginFormContainer>
        <LogoImage src={Logo}></LogoImage>
        </LoginFormContainer>
       <h2>Cadastrar</h2>
       <InputsContainer>

       <form onSubmit={OnsubmitInput}>
       <TextField
           name={'username'}
           value={form.username}
           onChange={onChange}
            label="Nome"
            fullWidth
            type={"name"}
            required
           />

        <TextField
           name={'email'}
           value={form.email}
           onChange={onChange}
            label="Email"
            fullWidth
            type={"email"}
            required
           />
            <TextField
           name='password'
           value={form.password}
           onChange={onChange}
           label="Senha"
           fullWidth
           margin={"normal"}
           type={"password"}
           required

           />
           <Button 
           variant='contained' 
           color="primary" 
           fullWidth
           type={"submit"}
           >
          
               Enviar
               
            </Button>

        
       </form>
       </InputsContainer>

        
    
    
    </ScreenContainer>
  )
}

export default PaginaCadastro