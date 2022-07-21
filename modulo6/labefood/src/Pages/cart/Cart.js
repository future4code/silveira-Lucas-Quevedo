import React, { useEffect, useState } from 'react'
import { CartConfig, InfoProfile, Main, MainCart } from './Styled'
// import { useRequestData } from '../../Hooks/useRequestData'
import { BASE_URL } from '../../Constants/Url'
import axios from 'axios'
const Cart = () => {
  const [profile, setProfile] = useState([])
  const getProfile = async () =>{
    await axios.get(`${BASE_URL}/profile`, {
        headers:{
            auth: window.localStorage.getItem("token")
        }
    })
    .then((res)=>{
        setProfile(res.data)
    })
    .catch((err)=>{
        console.log(err.response.data.message)
    })
    getProfile()
    // useEffect(()=>{
    //     getProfile()
    // },[])
}
  return (
    <Main>
      <MainCart>
        <h1>Meu carrinho</h1>
      </MainCart>
      <CartConfig>
        <InfoProfile>
        <p>endereço de entrega</p>
        <p>{profile.user}</p>
        </InfoProfile>
      </CartConfig>
      <div>
        <p>Frete R$ 00,00</p>
      </div>
      <div>
        <p>Subtotal</p>
        <p>R$ 00,00</p>
      </div>
      <>
        <h1>Forma de pagamento</h1>
        <form>
        <label>Dinheiro</label>
        <input  type={'checkbox'}></input>
        <label>Cartão de crédito</label>
        <input type={'checkbox'}></input>
        <button>Confirmar</button>
        </form>
      </>
      </Main>
  )
}

export default Cart