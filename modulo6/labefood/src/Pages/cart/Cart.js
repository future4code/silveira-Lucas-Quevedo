import React, { useState } from 'react'
import { ButtonCart, CartConfig, CartInfo, Form, InfoProfile, InfoRestaurant, Main, MainCart } from './Styled'
import { BASE_URL } from '../../Constants/Url'
import { useRequestData } from '../../Hooks/useRequestData'
import { Header } from '../../Components/Header/CardHeader'

const Cart = () => {
  const profile = useRequestData({}, `${BASE_URL}/profile`)
  const [payment, setPayment] = useState([])
  const [paymentMethod, setPaymentMethod] = useState({
    'money':false,
    'creditCard':false
  })

  const onchangePayment = (event) =>{
    const newCheck = {...paymentMethod}
    newCheck[event.target.name] = event.target.checked

    const result = Object.keys(newCheck).filter((pay)=>{
      if(newCheck[pay]){
        return[pay, ...payment]
      }
    })
    setPayment(result)
    setPaymentMethod(newCheck)
  } 
  

  return (
    <Main>
      <MainCart>
        <Header title={"Meu carrinho"}back={true}/>
        
      </MainCart>
      <CartConfig>
        <InfoProfile>
        <p>endereço de entrega</p>
        {/* <p>{profile[0].user.address}</p> */}
        </InfoProfile>
        </CartConfig> 
        <InfoRestaurant>
          <p>Nome Restaurante</p>
          <p>Rua restaurante</p>
          <p>30 - 45 min</p>
        </InfoRestaurant>
        <CartInfo>

        </CartInfo>
        
     
      <div>
        <p>Frete R$ 00,00</p>
      </div>
      <div>
        <p>Subtotal</p>
        <p>R$ 00,00</p>
      </div>
      
      
      <>
        <h1>Forma de pagamento</h1>
        <Form>
          {Object.keys(paymentMethod).map((key)=>{
            const checked = paymentMethod[key]
            return(
              <div
              key={key}
              ><input
              checked={checked}
              name={key}
              id={key}
              type={'checkbox'}
              onChange={onchangePayment}
              ></input>
              <label>{key}</label>
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