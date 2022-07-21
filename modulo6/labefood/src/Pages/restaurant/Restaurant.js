import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {BASE_URL} from "../../Constants/Url"
import {useParams} from"react-router-dom"
import { ContainerRestaurant, cardRestaurantDetails } from './Styled'

const Restaurant = () => {
  const {restaurantId} = useParams()
  const [restaurant, setRestaurant] = useState({})
  console.log(restaurantId)
  const getRestaurantId = () =>{
    axios.get(`${BASE_URL}/restaurants/${restaurantId}`,{
      headers:{
        auth: window.localStorage.getItem("token")
      }
      })
      .then((res)=>{
        setRestaurant(res.data.restaurant)
        console.log(res.data)
      })
      .catch((err)=>{
        console.log(err.response)
      })
    }
  
    useEffect(()=>{
      getRestaurantId()
    },[])
  return (
    <ContainerRestaurant>
      <cardRestaurantDetails restaurant={restaurant}/>
     
      
      </ContainerRestaurant>
  )
  }

export default Restaurant