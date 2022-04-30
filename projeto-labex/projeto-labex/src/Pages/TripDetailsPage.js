import React from 'react'
import axios from 'axios'
import { useEffect, useState,  } from 'react'
import { useParams } from 'react-router-dom'

export const TripDetailsPage = () => {
const [detalhes, setDetalhes] = useState({})
const [candidates, setCandidates] = useState([])
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
  


const approvedCandidates = trip.approved.map((candidate) =>{
  const approvedCandidates = trip.approved && trip.approved.map((candidate) =>{
    return(
      <div key={candidate.id}>
        {candidate.name}
        
      </div>
    )
  })
})


const listcandidadtes = candidates.map((list) =>{
  return(
    <div>
      <p>{list.name}</p>
      <p>{list.age}</p>
      <p>{list.country}</p>
      <p>{list.applicationText}</p>
      <p>{list.profession}</p>
      <button onClick={() => candidates(list.id, false)}>Aprovar</button>
      <button onClick={() => candidates(list.id, false)}>Reprovar</button>
    </div>
  )
})

  return (
  <div>
    <div>TripDetailsPage</div>
    <p>{detalhes.name}</p>
    <p>{detalhes.planet}</p>
    <p>{detalhes.description}</p>
    <p>{detalhes.durationInDays}</p>

    <h1>Lista de candidatos</h1>
    {listcandidadtes}
    </div>
  )
}
