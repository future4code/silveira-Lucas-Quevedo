import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { irParaListTrip, irParaAdminHome, irParaLoginPage } from '../Rotas/coordinator'
import Marte from "../img/marte.jpg"
import Facebook from "../img/facebook.png"
import Instagram from '../img/instagram.png'
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

const Header= styled.header`
background-color: black;
color: white;
font-family: 'Bebas Neue', cursive;
font-size: larger;

`
const Container = styled.div`
min-height: 550px;
align-items: center;
background-color: white;
font-family: 'Bebas Neue', cursive;
display: flex;
justify-content: center;
flex-direction: column;
margin: 0 auto;
`
const Footer = styled.footer`
background-color: black;
margin-top: 290px;
color: white;
height: 100px;
font-family: 'Bebas Neue', cursive;
display: flex;
flex-direction: row;
justify-content: space-around;
`
const ButtonPlace = styled.div`
margin-top: 50px;
display: flex;
margin-left: 0%;
/* justify-content: space-between ; */
/* justify-content: space-around; */
flex-direction: row;
align-items: center;
`

const Button = styled.button`
background-color: black;
color: white;
font-family: 'Bebas Neue', cursive;
font-size: larger;
border-radius: 20px;
height: 40px;
`
const Titulo= styled.h1`
color:black;
font-family: 'Bebas Neue', cursive;
`
const Img = styled.img`
width: 700px;
height: 400px;
`
const Redes = styled.img`
height: 50px;
width: 50px;
border-radius: 30px;
`

export const HomePage = () => {
  const navigate = useNavigate()

 
  
    return (
      <>
       <Header><h2>LX</h2></Header>
    <Container>
     
    <Titulo><h1>Labe X</h1></Titulo>
    <p> Sua melhor experiência de viagens é aqui!</p>
    <Img src={Marte}></Img>
    <ButtonPlace>
    <Button onClick={() =>irParaListTrip(navigate)}>Viagens</Button>
    <Button onClick={() =>irParaLoginPage(navigate)} >Adiministração</Button>
   
    </ButtonPlace>
    {/* <Button variant="contained">Contained</Button> */}
    </Container>
    <Footer> <h2>LX</h2> <Redes src={Facebook} ></Redes> <Redes src={Instagram}></Redes></Footer>
    </>
  )
}
