import React, { useEffect, useState } from 'react'
import { ButtonCart, CartConfig, CartInfo, EmptyCart, Form, InfoProfile, InfoRestaurant, Main, MainCart } from './Styled'
import { BASE_URL } from '../../Constants/Url'
import { useRequestData } from '../../Hooks/useRequestData'
import { Header } from '../../Components/Header/CardHeader'
import { CardProduct } from '../../Components/CardProduct/CardProduct'
import { useGlobal } from '../../Global/GlobalStateContext'
import axios from 'axios'
import { ImageRestaurant } from '../../Components/CardRestaurants/Styled'

const Cart = () => {
  const profile = useRequestData({},`${BASE_URL}/profile`)
  const [payment, setPayment] = useState("")
  const [paymentMethod] = useState(["money", "creditCard"])
  const [fullPrice, setFullPrice] = useState(0)
  const { states, setters } = useGlobal()
  const { cart, restaurant } = states
  const {setOrder} = setters
  
  
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

  useEffect(()=>{
    TotalPrice()
  },[])
  const placeOrder = async () =>{
    const body = {
      products: cart.map((product)=>{
        return([{
          id:product.id,
          quantity: product.quantity
      }])
      
      }),
      paymentMethod:payment
    }
    await axios.post(`${BASE_URL}/restaurants/${restaurant.id}/order`, body,{
      headers:{
        auth: window.localStorage.getItem("token")
      }
    })
    .then((res)=>{
      console.log(res.data)
      setOrder(res.data.order)
    })
    .catch((err) =>{
      console.log(err.response)
      alert(err.data.message)
    })
  }
  const onSubmitPlaceOrder = (event) =>{
    event.preventDefault()
    placeOrder()
  }
  console.log(profile)
  return (
    <Main>
      <MainCart >
        <Header title={"Meu carrinho"}back={true}/>
        
      </MainCart>
      <CartConfig>
        <InfoProfile>
        <p>endereço de entrega</p>
        <p>{profile[0].user && profile[0].user.address}</p>
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
        // name={product.name}
        // price={product.price}
        // photoUrl={product.photoUrl}
        key={product.id}
        product={product}
        restaurant={restaurant}
        />
          )
        }): 
        <EmptyCart><p>Carrinho vazio :/</p> </EmptyCart>}
        </CartInfo>
        
     
      <div>
        <p>Frete R$ 00,00</p>
      </div>
      <div>
        <p>Subtotal</p>
        <p>{fullPrice}</p>
      </div>
      
      
      <>
        <h1>Forma de pagamento</h1>
        <Form onSubmit={onSubmitPlaceOrder}>
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
      
        <ButtonCart>Confirmar</ButtonCart>
        </Form>
      </>
      </Main>
  )
}

export default Cart