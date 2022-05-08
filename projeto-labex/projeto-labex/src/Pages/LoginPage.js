import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { irParaAdminHome } from '../Rotas/coordinator'
import  styled  from 'styled-components'
import useForm from '../hooks/useForm'

const Borda = styled.div`
border: 200px solid #000080;
height: 200px;
width: 500px;
font-family: 'Bebas Neue', cursive;
background-color: beige;
color:  #000080;
padding: 20px;
`
const Container = styled.div`
margin: 0 auto;
align-items: center;
display: flex;
flex-direction: column;
background-color: #000080;
height: 700px;
`
const Input = styled.input`
background-color: beige;
border: 10px solid beige;
font-family: 'Bebas Neue', cursive;
color:#000080 ;
`
const Button = styled.button`
background-color: #000080;
color: beige;
font-family: 'Bebas Neue', cursive;
font-size: large;
border-radius: 20px;
height: 40px;
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
   <Button>Enviar</Button>
   </form>
   </Borda>
    </Container>
  )
}
