import React, {useState, useEffect} from "react"
import axios from "axios"
import { Container, Button, Button1,Imagem} from "./stylesMatches"
import { AstroMatch} from "../paginaHome/Styles"
import Logo from "../imagens/astroMatch.png"


const urlClear =" https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Lucas-Quevedo-Silveira/clear"
const urlMatches = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Lucas-Quevedo-Silveira/matches"


function Matches(props) {
    const [matches, setMatches] = useState([])


    const getMatches = () => {
        axios
            .get(urlMatches)
            .then((res) => {
                setMatches(res.data.matches)
                
            })
            .catch((err) => {
                alert("Erro na página!")
            })
    }

    useEffect(() => {
        getMatches()
        console.log("estou sendo chamado")
    }, [])

    const clearApp = () => {
        const headers = {
          headers: {"Content-Type": "application/json"}
        }
    
        axios
          .put(urlClear, headers)
          .then((res) => {
            alert("Clear com sucesso!")
            getMatches()
          })
          .catch((err) => {
            alert("Erro na página ):")
          })
    
      }
   
const listaDeMatches = matches.map((match)=>{
    return(
        <div>
            <Imagem src={match.photo}/>
            <p>{match.name}</p>
            
        </div>
    )
})

    return (
       <Container>
           <AstroMatch src={Logo}></AstroMatch>
                <div>
                   <ul>{listaDeMatches}</ul> 

                    {/* {listaDeMatches.length > 0 ? listaDeMatches :
                        <div>
                          <p>Você não possui matches</p> */}

                        {/* </div>} */}
                        <Button1 onClick={props.paginaHome}>Home</Button1>
                        <Button1 onClick={clearApp}>Limpar</Button1>
                </div>
                </Container>
        
    )

}

export default Matches;