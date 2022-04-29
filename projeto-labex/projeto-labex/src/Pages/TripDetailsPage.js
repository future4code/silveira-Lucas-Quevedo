import React from 'react'
import axios from 'axios'
import { useEffect, useState,  } from 'react'
import { useParams } from 'react-router-dom'

export const TripDetailsPage = () => {
const [detalhes, setDetalhes] = useState({})
  useEffect(() =>{
    
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
      // console.log(res.data.trip)
    })
    .catch((err) =>{
      console.log('deu errado:',err.response)
  
    })
  }
  


  return (
  <div>
    <div>TripDetailsPage</div>
    <p>{detalhes.name}</p>
    <p>{detalhes.planet}</p>
    <p>{detalhes.description}</p>
    <p>{detalhes.durationInDays}</p>
    </div>
  )
}
