import react from "react"
import PageUm from "./pages/PageUm/PageUm";
import PageDois from "./pages/PageDois/PageDois";
import React from "react";
import axios from "axios";


export default class App extends React.Component{
  state ={
    telaAtual:"PageDois"
  }

  
   
  selecionaPage = () =>{
    switch(this.state.telaAtual){
      case "PageUm":
        return  <PageUm/>
        case "PageDois":
          return <PageDois/>
    }
  }
  
  render(){
    return (
      <div>
       {this.selecionaPage()}
       
      </div>
    )
  }
  

}
