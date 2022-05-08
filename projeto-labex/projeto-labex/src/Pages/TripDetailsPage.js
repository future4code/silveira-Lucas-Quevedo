import React from 'react'
import axios from 'axios'
import { useEffect, useState, useNavigate } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import {irParaApplicationForm, irParaHome} from '../Rotas/coordinator'
const Container = styled.div`
min-height: 900px;
align-items: center;
background-color: beige;
color: 	#000080;
font-family: 'Bebas Neue', cursive;
font-size: larger;
display: flex;
justify-content: center;
flex-direction: column;
margin: 0 auto;
`
const Borda = styled.div`
border: 5px solid beige ;
background-color:#000080 ;
color: beige;
height: 300px;
width: 600px;
font-size: large;
margin: 0 auto;
`
const Button = styled.button`
background-color: #000080;
color: beige;
font-family: 'Bebas Neue', cursive;
font-size: large;
border-radius: 20px;
height: 40px;
`
export const TripDetailsPage = () => {
  // const navigate = useNavigate()
const [detalhes, setDetalhes] = useState([])
const [candidate, setCandidate] = useState([])


  useEffect(() =>{
    // candidato()
   getTriDetails()
  },[])
  const params = useParams()
  const getTriDetails = () =>{
    const token =localStorage.getItem('token')
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lucas-Quevedo-Silveira/trip/${params.id}`,{
      headers:{
        auth:token
      }
    })
    .then((res) => {
      // console.log('deu certo:',res.data.token)
      setDetalhes(res.data.trip)
      setCandidate(res.data.trip.candidates)
      // console.log(res.data.trip)
    })
    .catch((err) =>{
      console.log('deu errado:',err.response)
  
    })
  }

  const candidato = ((id, choice) =>{
    const token = localStorage.getItem("token")

    const body = {approve: choice}
    axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lucas-Quevedo-Silveira/trips/${detalhes.id}/candidates/${id}/decide`,body,
    {
      headers:{
       auth: token
      }
    }
    )
    .then((response) =>{
      console.log(response.data)
      if(choice === true){
        alert("Aprovado")
      }else{
        alert("Reprovado")
      }
    })
    .catch((err)=>{
      console.log(err.response.data.menssage)
      alert("erro")
    })

  })


   

    const listaCandidatos = candidate.map((list) => {
      return (
        <Borda>
          <p>Nome: {list.name}</p>
          <p>Idade: {list.age}</p>
          <p>País: {list.country}</p>
          <p>Texto de candidatura: {list.applicationText}</p>
          <p>Profissão:{list.profession}</p>
          <Button onClick={() => candidato(list.id, true)}>Aprovar</Button>
          <Button onClick={() => candidato(list.id, false)}>Reprovar</Button>
        </Borda>
      )
    })
  
    const candidatosAprovados= detalhes.approved && detalhes.approved.map((candidate)=>{
      return(
        <div key={candidate.id}><p>{candidate.name}</p></div>
      )
    })
  
  return (
  <Container>
    <h1>Detalhes da Viagem</h1>
    <p>{detalhes.name}</p>
    <p>{detalhes.planet}</p>
    <p>{detalhes.description}</p>
    <p>{detalhes.durationInDays}</p>
    {/* <p>{detalhes.candidates}</p> */}

    <h1>Lista de candidatos</h1>
    {listaCandidatos}
    <h1>Candidatos Aprovados</h1>
    {candidatosAprovados}
    {/* <Button onClick={() => irParaHome(navigate)}>Voltar</Button> */}
    </Container>
  )
}
