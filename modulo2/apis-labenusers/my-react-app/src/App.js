import React from "react"
import TelaDeCadastro from "./components/TelaDeCadastro"
import TelaDeUsuarios from "./components/TelaDeUsuarios"
import styled from "styled-components"
const Tela = styled.div`
display: flex;
justify-content: center;
background-color: beige;
color: brown;

`

export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaDeCadastro irParaLista={this.irParaLista}/>
      case "lista":
        return <TelaDeUsuarios irParaCadastro={this.irParaCadastro}/>
      default:
        return <h1> Página não encontrada :(</h1>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  render(){
    return (
      <Tela >
        {this.escolheTela()}
      </Tela>
    )
  }
}
