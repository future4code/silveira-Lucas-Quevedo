import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { irParaAdminHome } from '../Rotas/coordinator'
import  styled  from 'styled-components'
import useForm from '../hooks/useForm'

const Borda = styled.div`
border: 5px solid white;
height: 200px;
width: 500px;
font-family: 'Bebas Neue', cursive;
background-color: black;
color: white;
padding: 20px;
`
const Container = styled.div`
margin: 0 auto;
align-items: center;
display: flex;
flex-direction: column;
`
const Input = styled.input`
background-color: white;
border: 10px solid black;
`

export const LoginPage = () => {
  const navigate = useNavigate()
  //  const [email, setEmail] = useState("")
  //  const [senha, setSenha] = useState("")
  const {form, onChange, cleanFields} = useForm({email:"", password:""})
//    const onChangeEmail= (event) =>{
//       setForm({... form, email: event.target.value})
      
//    }

//    const onChangeSenha = (event) =>{
//     setForm({... form, password: event.target.value})
    
    
//  }

// const onChange = (event) =>{
//   const {name, value} = event.target
//   setForm({...form, [name]: value})
// }

 const onSubmitLogin = (event) =>{
   event.preventDefault()
   cleanFields()
  // console.log(email, senha)
  //  const body = {
  //    email: email,
  //    password: senha
  //  }
   axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lucas-Quevedo-Silveira/login",form)
   .then((response) =>{
    console.log("deu certo:",response.data.token)
    localStorage.setItem('token', response.data.token)
    irParaAdminHome(navigate)

   })
  
   .catch((error) =>{
    console.log("deu errado",error.response)
   })
  

 }

  return (
  <Container>
    <Borda>

    <h1>Login</h1>
    <form onSubmit={onSubmitLogin}>
    <Input
    name='email'
    placeholder='Email'
    type={'email'}
    value={form.email}
    onChange={onChange}
    required
    />
    <Input
    name='password'
    placeholder='Senha'
    type={'password'}
    value={form.password}
    onChange={onChange}
    required
    pattern={"^.{3,}"}
    title={"Senha deve ter no mínimo 3 caracteres"}
    />
   <button>Enviar</button>
   </form>
   </Borda>
    </Container>
  )
}
