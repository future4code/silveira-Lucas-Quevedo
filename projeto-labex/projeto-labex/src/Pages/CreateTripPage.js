import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaApplicationForm } from '../Rotas/coordinator'
import useForm from '../hooks/useForm'
import axios from 'axios'


const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
/* width: 500px; */
margin: 0 auto;
flex-direction: column;
padding: 20px;
background-color: beige;
width: 1500px;
height: 800px;
color: #000080;

`
const Button = styled.button`
background-color: #000080;
color: beige;
font-family: 'Bebas Neue', cursive;
font-size: large;
border-radius: 20px;
height: 40px;
`

const Input = styled.input`
width: 500px;
padding: 30px;
background-color: beige;
color:#000080;
font-family: 'Bebas Neue', cursive;
font-size: larger;
`
const Select = styled.select`
width: 564px;
padding: 30px;
background-color: beige;
color:#000080;
font-family: 'Bebas Neue', cursive;
font-size: larger;
`
export const CreateTripPage = () => {
  const navigate= useNavigate()

  const{form, onChange, cleanFields} = useForm({
    name:"",
    planet:"",
    date:"",
    description:"",
    durationDays:""
  })
  const Criar = (event) =>{
    event.preventDefault()
    criarViagem()
    cleanFields()
  }

  const criarViagem = () =>{
    const headers={
      headers:{
        "Content-Type": "application/json",
        "auth": localStorage.getItem("token")
      }
     
    }
    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lucas-Quevedo-Silveira/trips", form, headers)
    .then((response)=>{
      console.log(response)
      alert("Cadastrado")
    })
    .catch((error) =>{
      cleanFields()
      console.log(error)
      alert("Erro")

    })
  }
  
  return (
  <Div>
    <h1>Criar Viagem</h1>
    
    <form onSubmit={Criar}>
    <Input 
    name='name'
    placeholder='Nome'
    onChange={onChange}
    value={form.name}
    ></Input>
    <br></br>
      <Select
      value={form.planet}
      onChange={onChange}
      name='planet'
      >
        <option value={""} disabled>Escolha Um Planeta</option>
        
        <option>Venûs</option>
        <option>Terra</option>
        <option>Mercúrio</option>
        <option>Marte</option>
        <option>Jupter</option>
        <option>Saturno</option>
        <option>Urano</option>
        <option>Netuno</option>
        <option>Plutão</option> 
      </Select>
      <br></br>
      <Input 
      type={"date"}
      value={form.date}
      onChange={onChange}
      name='date'
      ></Input>
      <br></br>
      <Input placeholder='Descrição'
      onChange={onChange} 
      type={"text"} 
      name='description'
      value={form.description}
      ></Input>
      <br></br>
      <Input placeholder='Duração de dias'
      onChange={onChange} 
      type={'number'}
      name='durationDays'
      value={form.durationDays}
      

      ></Input>
      <br></br>

    
    <Button>Criar</Button>
    <Button onClick={()=>irParaApplicationForm(navigate)}>Voltar</Button>
    </form>
    </Div>
  )
}
