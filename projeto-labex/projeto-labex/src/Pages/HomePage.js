import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { irParaListTrip, irParaAdminHome, irParaLoginPage } from '../Rotas/coordinator'
import Marte from "../img/marte.jpg"
import Nasa from "../img/nasa.avif"
import Facebook from "../img/facebook.png"
import Instagram from '../img/instagram.png'
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';

const Header= styled.header`
background-color: #000080;
color: beige;
font-family: 'Bebas Neue', cursive;
font-size: larger;
margin-left: 481px;
width: 2000px;
`
const Container = styled.div`
height: 900px;
align-items: center;
background-color: beige;
color: 	#000080;
font-family: 'Bebas Neue', cursive;
display: flex;
justify-content: center;
flex-direction: column;
margin: 0 auto;
`
const Footer = styled.footer`
background-color: #000080;
margin-top: 0px;
color: beige;
height: 80px;
font-family: 'Bebas Neue', cursive;
display: flex;
flex-direction: row;
justify-content: space-around;
margin-left: -1380px;
`
const ButtonPlace = styled.div`
margin-top: 50px;
display: flex;
margin-left: 0%;
/* justify-content: space-between ; */
/* justify-content: space-around; */
flex-direction: row;
align-items: center;
margin-bottom:80px;
`

const Button = styled.button`
background-color: #000080;
color: beige;
font-family: 'Bebas Neue', cursive;
font-size: large;
border-radius: 20px;
height: 40px;
`
const Titulo= styled.h1`
color:#000080;
font-family: 'Bebas Neue', cursive;
`
const Img = styled.img`
width: 700px;
height: 400px;
`
const H2 = styled.h2`
font-family: 'Roboto', sans-serif;
`


export const HomePage = () => {
  const navigate = useNavigate()

 
  
    return (
      <>
      <Container>
       <Header><h2>LX</h2></Header>
    
     
    <Titulo><h1>Labe X</h1></Titulo>
    <H2> Viajar é colecionar memórias sobre o universo!</H2>
    <Img src={Marte}></Img>
    <ButtonPlace>
    <Button onClick={() =>irParaListTrip(navigate)}>Viagens</Button>
    <Button onClick={() =>irParaLoginPage(navigate)} >Adiministração</Button>
   
    </ButtonPlace>
    {/* <Button variant="contained">Contained</Button> */}
    </Container>
    <Footer><h2>LX</h2></Footer>
    </>
  )
}
