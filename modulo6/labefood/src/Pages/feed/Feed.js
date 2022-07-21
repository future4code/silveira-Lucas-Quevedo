import axios from "axios"
import React, { useEffect, useState } from "react"
import {CardRestaurant} from "../../Components/CardRestaurants/CardRestaurant"
import { Header } from "../../Components/Header/CardHeader"
import { BASE_URL } from '../../Constants/Url'
import  { ContainerFeed, CardsRestaurants, InputSearch, Menu, MenuItem }  from "./Styled"

const Feed = () => {
  const [restaurants, setRestaurants] = useState([])
  const [inputText, setInputText] = useState("")
  const [categoryRestaurant, setCategoryRestaurant] = useState([])
  const [buttonCategory, setButtonCategory] = useState("")
 
  const getRestaurants =  () =>{
      
      axios.get(`${BASE_URL}/restaurants`,{
      headers: {
        auth:localStorage.getItem("token")
      }
    })
    .then((res)=>{
      console.log(res.data)
      setRestaurants(res.data.restaurants)
      catogoryFilter(res.data.restaurants)
    })
    .catch((err)=>{
      console.log(err)
    })
    
  }
 const restaurantsFilter = restaurants.filter((restaurant)=>
  inputText ? restaurant.name.toLowerCase().includes(inputText.toLocaleLowerCase()):true
 )
 .filter((restaurant)=>
  buttonCategory ? restaurant.category.toLowerCase().includes(buttonCategory.toLowerCase()):true
 )
 .map((restaurant)=>{
  return <CardRestaurant restaurant={restaurant}></CardRestaurant>
 })
  
 const catogoryFilter = (res) =>{
  const array = []
  res && res.map((cat) =>{
    array.push(cat.category)
  })
  const itemDuplicate = [...new Set(array)]
  setCategoryRestaurant(itemDuplicate)
 }


  useEffect (() =>{
    getRestaurants()
  }, [])

  const onChangeInputText = (event) =>{
    setInputText(event.target.value)
  } 

  
  
  return (
    <ContainerFeed>
      <Header title={"Ifuture"}/>
      <CardsRestaurants>
      
      <InputSearch
      value={inputText}
      onChange={onChangeInputText}
      />
      <Menu>
        <MenuItem onClick={() => setButtonCategory("")}>
        Todos
        </MenuItem>
        {categoryRestaurant.map((category)=>{
          return (<MenuItem 
          select={false}
          onClick={() => setButtonCategory(category)}
          >
            {category}
            </MenuItem>)
        })}
      </Menu>
      {restaurantsFilter}
      </CardsRestaurants>
      </ContainerFeed>
  )
}

export default Feed