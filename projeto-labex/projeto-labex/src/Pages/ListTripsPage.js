import React from 'react'
import { useNavigate } from 'react-router-dom'
import {irParaApplicationForm, irParaHome} from '../Rotas/coordinator'
import axios from 'axios'
import {useState ,useEffect } from 'react'
import  styled  from 'styled-components'


const Borda = styled.div`
border: 5px solid #000080;
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
`

const H1 = styled.h1`
color:beige;
`
const Button = styled.button`
background-color: #000080;
color: beige;
font-family: 'Roboto', sans-serif,Regular 400 Italic;
font-size: large;
border-radius: 20px;
height: 40px;
`
const ButtonPlace = styled.div`
margin-top: 50px;
display: flex;
margin-left: 0%;
/* justify-content: space-between ; */
/* justify-content: space-around; */
flex-direction: row;
align-items: center;
margin-bottom:80px;
`
export const ListTripsPage = () => {
  const navigate = useNavigate()
  const [viagem, setViagem] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() =>{
    getViagens()
  },[])

  const getViagens = () =>{
    setIsLoading(true)
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/Lucas-Quevedo-Silveira/trips"
  axios.get(url)
  .then((res) =>{
    setIsLoading(false)
    setViagem(res.data.trips)
    console.log(res.data)
  })
  .catch((err) =>{
    setIsLoading(false)
  console.log(err.response)  

  })
   
  
}
const listaViagens = viagem.map((detalhes) =>{
  return <div key={detalhes.id}>
    <Borda>
<h2>{detalhes.name}</h2>
<p>{detalhes.planet}</p>
<p>{detalhes.durationInDays}</p>
<p>{detalhes.description}</p> 


</Borda>
  </div>

})
  return (
  <Container>
    <H1>Lista de Viagens</H1>
    <ButtonPlace>
    <Button onClick={() =>irParaApplicationForm(navigate)}>Apilcar</Button>
    <Button onClick={() => irParaHome(navigate)}>Voltar</Button>
    </ButtonPlace>
    {listaViagens}
    
    </Container>
  )
}
