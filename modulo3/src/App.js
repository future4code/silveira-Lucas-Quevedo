import React, {useState, useEffect} from "react"
import PaginaMatches from "./paginaMatchs/PaginaMatches";
import axios from "axios"
import PaginaHome from "./paginaHome/PaginaHome"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
`

function App() {
 
 
  const [paginaAtual, setPaginaAtual] = useState("paginaHome")

  const paginaMatches = () =>{
    setPaginaAtual("paginaMatchs")
  }

  const paginaHome = () =>{
    setPaginaAtual("paginaHome")
  }

  const mudarPagina = (props) =>{
  switch(paginaAtual){
  case "paginaHome":
    return <PaginaHome paginaMatches={paginaMatches}/> 
    case "paginaMatchs":
      return <PaginaMatches paginaHome={paginaHome}  />
      default:
        return alert("Ocorreu um erro ):")
      }
    }

    
   

   
    return(
    <div >

      <GlobalStyle/>
    
{mudarPagina()}
     
      
      
    </div>
  );
}

export default App;
