import React from 'react'
import { useNavigate } from 'react-router-dom'
import { irParaCreateTrip, irParaTripDetails } from '../Rotas/coordinator'
import { useEffect, useState } from 'react'
import  axios  from 'axios'
import styled from 'styled-components'

const Container = styled.div`
margin: 0 auto;
align-items: center;
display: flex;
flex-direction: column;
background-color: beige;
color:#000080;
`
const Borda = styled.div`
border: 5px solid beige;
height: 200px;
width: 500px;
font-family: 'Bebas Neue', cursive;
background-color: #000080;
color: beige;
padding: 20px;
`
const Button = styled.button`
background-color: #000080;
color: beige;
font-family: 'Bebas Neue', cursive;
font-size: large;
border-radius: 20px;
height: 40px;
`


export const AdminHomePage = () => {
  const [tripPage, setTripPage] = useState([])
  const navigate = useNavigate()

  

  useEffect(() =>{
    const token =localStorage.getItem('token')
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lucas-Quevedo-Silveira/trips/',{
      headers:{
        auth:token
      }
    })
    .then((res) => {
      console.log('deu certo:',res.data.token)
    })
    .catch((err) =>{
      console.log('deu errado:',err.response)
  
    })
    getViagens()
  },[])

  const getViagens = () =>{
    
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lucas-Quevedo-Silveira/trips"
  axios.get(url)
  .then((res) =>{
    
    setTripPage(res.data.trips)
    console.log(res.data)
  })
  .catch((err) =>{
    
  console.log(err.response)  

  })
   
  
}
const listaViagens = tripPage.map((detalhes) =>{
  return <div key={detalhes.id}>
    <Borda>
<h3>{detalhes.name}</h3>
<Button onClick={() =>irParaTripDetails(navigate, detalhes.id)}>Detalhes</Button>
<p>{detalhes.planet}</p>
<p>Dias: {detalhes.durationInDays}</p>
<p>{detalhes.description}</p>
</Borda>
  </div>

})
  
  return (
  <Container>
     <h1>Pagina de Administração</h1>
     <Button onClick={() =>irParaCreateTrip (navigate)}> Criar Viagens</Button>
    
    {listaViagens}
   
    
    </Container>
  )
}

