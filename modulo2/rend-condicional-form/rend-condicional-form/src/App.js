import React from 'react';
import './App.css';
import styled from 'styled-components'
import Etapa1 from './components/PaginaUm';
import Etapa2 from './components/2semCursoSuperior';
import Etapa3 from './components/3temCursoSuperior';
import Final from './components/finalAgradecimento';
const Div = styled.div`


  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: orange;
  color:white;
  border: solid 150px;
  button {
    background-color: brown;
    color:white;
    border-radius: 70px;

  }
  
  input {
    width: 300px;
    border-radius: 70px;
  }
`
class App extends React.Component {
  state = {
    etapa: 1
  }

  renderizaEtapa = () => {
   
    switch (this.state.etapa) {
      case 1:
        return <>
                <Etapa1/>
                <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
              </>
      case 2:
        return <>
                <Etapa2/>
                <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
              </>
      case 3:
        return <>
                <Etapa3/>
                <button onClick={this.irParaProximaEtapa}>Próxima Etapa</button>
              </>
      case 4:
        return <>
                <Final/>
              </>
    }
  }

  irParaProximaEtapa = () => this.setState({etapa: this.state.etapa + 1});

  render() {
    return (
      <Div>
        {this.renderizaEtapa()}
      </Div>
    );
  }
}

export default App;