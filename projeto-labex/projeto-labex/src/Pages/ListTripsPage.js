import React from 'react'
import { useNavigate } from 'react-router-dom'
import {irParaApplicationForm, irParaHome} from '../Rotas/coordinator'
import axios from 'axios'
import {useState ,useEffect } from 'react'
import  styled  from 'styled-components'


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
    <h1>ListTripsPage</h1>
    <button onClick={() =>irParaApplicationForm(navigate)}>Apilcar</button>
    <button onClick={() => irParaHome(navigate)}>Voltar</button>
    {listaViagens}
    
    </Container>
  )
}
