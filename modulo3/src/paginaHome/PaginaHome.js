import React,{useState, useEffect} from "react";
import Styles,{AstroMatch, Button, Container, Imagem, Matches, MatchesBotao} from "./Styles"
import { createGlobalStyle } from "styled-components";
import axios from "axios";
import Logo from '../imagens/astroMatch.png'
import coracao from"../imagens/coração.png"

const GlobalStyle = createGlobalStyle`
* {box-sizing: border-box;}
`

const urlPessoa = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Lucas-Quevedo-Silveira/person"
const urlEscolha = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Lucas-Quevedo-Silveira/choose-person"
// const urlPessoa = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/person?Lucas-Quevedo-Silveira"
// const urlEscolha = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/choose-person?Lucas-Quevedo-Silveira"
function PaginaHome(props){
    const [perfil, setPerfil] = useState({})

    useEffect(() =>{
        console.log("estou sendo chamado")
        getEscolhePerfil()
    }, [])

    const getEscolhePerfil = () => {
        axios
            .get(urlPessoa)
            .then((res) => {
                if(res.data.profile){
                    setPerfil(res.data.profile)
                    console.log(res)
                }
                 })
            .catch((err) => {
                alert("Erro na Página1!")
                console.log(err.response)
            })
    }

    const escolhePessoas = (booleano) =>  { 
        const headers = {"Content-Type": "application/json"}
        const body = {"id": perfil.id, "choice": booleano}

        axios
            .post(urlEscolha, body, headers)
            .then((res) => {
                getEscolhePerfil()
                console.log(res.data)
            })
            .catch((err) => {
                alert("Erro na Página2!")
            })

    }
   
      
  
    

    return(
        <Container>

            <GlobalStyle></GlobalStyle>
            <AstroMatch src={Logo} alt="Logo" />
            <Matches>
                <Button onClick={props.paginaMatches}>Matches</Button>
            </Matches>
             <Imagem src={perfil.photo} alt="foto" />
             <br></br>
                <div>
                 <h3>{perfil.name}</h3>
                <h3>{perfil.age}</h3>
                <p>{perfil.bio}</p>
            
                </div>
        
        <Button onClick={() => escolhePessoas(true)}>sim</Button>
        <Button onClick={() =>escolhePessoas(false)}>Não</Button>
            
        </Container>
    )
}
export default PaginaHome