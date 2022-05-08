import styled from "styled-components"

export const Imagem= styled.img`
display: flex;
width: 400px;
height: 300px;
border-radius: 20px;

`
export const AstroMatch = styled.img`
display: flex;
width: 402px;
height: 100px;
border-radius: 10px;
`
export const Matches = styled.div`
display: flex;
margin-top:-1px;

`

export const Container = styled.div`
border: 2px ridge black;
width: 403px;
height: 720px;
border-radius: 10px;
box-shadow: 2px 2px 6px silver;
background-color: ghostwhite;
margin-bottom: 40px;
margin-top: 10px;
/* display: flex; */
align-items: center;
margin: 0 auto;
position: relative;
`

export const Button = styled.button`
display: flex;
flex-direction: center;
align-items: center;
justify-content: row;
margin: 0 auto;
margin-top: 15px;
border-radius:10px;
background-color: #ff0058 ;
color: white;
font-family: Arial, Helvetica, sans-serif;
font-size: medium;
`
export const MatchBotao = styled.img`
    width: 40px;
    margin-left: 80px;
    margin-top: 10px;
    &:hover{
            transform: scale(1.2);
            transition: 0.2s linear;
        }

`