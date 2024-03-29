import React, { useEffect, useState } from 'react'
import { ButtonCart, CartConfig, CartInfo, EmptyCart, Form, InfoProfile, InfoRestaurant, Main, MainCart } from './Styled'
import { BASE_URL } from '../../Constants/Url'
import { useRequestData } from '../../Hooks/useRequestData'
import { Header } from '../../Components/Header/CardHeader'
import { CardProduct } from '../../Components/CardProduct/CardProduct'
import { useGlobal } from '../../Global/GlobalStateContext'
import axios from 'axios'
import { ImageRestaurant } from '../../Components/CardRestaurants/Styled'
import { goToFeed } from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../../Components/Footer/Footer'

const Cart = () => {
  const [payment, setPayment] = useState("")
  const [paymentMethod] = useState(["money", "creditCard"])
  const [fullPrice, setFullPrice] = useState(0)
  const { states, setters } = useGlobal()
  const { cart, restaurant,  } = states
  const {setOrder} = setters
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()
 
  const onchangePayment = (event) =>{
    setPayment(event.target.value)
    
  } 

 
  const TotalPrice = () =>{
    let total = 0
    if(restaurant && restaurant.shipping ){
    for (const product of cart){
      
        total += product.price * product.quantity
      }
     
    }
    setFullPrice(total)
  }

  

const getProfile = async () =>{
  await axios.get(`${BASE_URL}/profile`, {

  headers:{

    auth: window.localStorage.getItem("token")

  }
})
  .then((res) =>{
    console.log(res.data)
    setProfile(res.data)
  })
  .catch((err) =>{
    console.log(err.response)
  })
}

  const placeOrder = async () =>{
  
    const body = {
      products: cart.map((product)=>{
        return({
          id:product.id,
          quantity: product.quantity
      })
      
      }),
      paymentMethod:payment
    }
    console.log(body)
    await axios.post(`${BASE_URL}/restaurants/${restaurant.id}/order`, body,{
      headers:{
        auth: window.localStorage.getItem("token")
      }
    })
    .then((res)=>{
      console.log(res.data)
      setters.setOrder(res.data)
      setters.setCart([])
    })
    .catch((err) =>{
      console.log(err.response)
      alert(err.response.message)
    })
  }

  useEffect(()=>{
    TotalPrice()
    getProfile()
  },[])

  const onSubmitPlaceOrder = () =>{
    console.log("entrei")
    placeOrder()
    
  }
  
  return (
    <Main>
      <MainCart >
        <Header title={"Meu carrinho"}back={true}/>
      </MainCart>
      <CartConfig>
        <InfoProfile>
        <p>endereço de entrega</p>
        <p>{profile.user && profile.user.address}</p>
        </InfoProfile>
        </CartConfig> 
        <InfoRestaurant>
          <ImageRestaurant src={restaurant.logoUrl}/>
          <p>{restaurant.name}</p>
          <p>{restaurant.address}</p>
          <p>{restaurant.deliveryTime} min</p>
        </InfoRestaurant>
        <CartInfo>
          {restaurant.shipping && cart.length > 0 ? cart.map((product)=>{
        return (<CardProduct
        key={product.id}
        product={product}
        restaurant={restaurant}
        />
          )
        }): 
        <EmptyCart><p>Carrinho vazio :/</p> </EmptyCart>}
        </CartInfo>
        
     
      <div>
        <p>Frete R$ {restaurant.shipping ? restaurant.shipping : 0}</p>
      </div>
      <div>
        <p>Subtotal</p>
        <p>{fullPrice}</p>
      </div>
     
      
      <>
        <h1>Forma de pagamento</h1>
        <Form >
          {paymentMethod.map((key)=>{
            return(
              <div
              key={key}
              ><input
              checked={payment === key}
              name={key}
              id={key}
              type={'radio'}
              onChange={onchangePayment}
              value={key}
              ></input>
              <label htmlfor={key}>{key}</label>
              </div>
            )
          })}
      
        <ButtonCart onClick={() => onSubmitPlaceOrder()}>Confirmar</ButtonCart>
        </Form>
      </>
      </Main>
  )
}

export default Cart