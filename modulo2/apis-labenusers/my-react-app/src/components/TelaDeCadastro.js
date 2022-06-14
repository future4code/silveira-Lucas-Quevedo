import React from "react"
import axios from "axios"
import styled from "styled-components"
const Botao = styled.button`
background-color: brown;
color: white;
`

const headres ={  headers: {
    Authorization: "lucas-quevedo-silveira"
}
}
export default class TelaDeCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
    }

    inputNome = (event) => {
        this.setState({nome: event.target.value})
    }

    inputEmail = (event) => {
        this.setState({email: event.target.value})
    }

    cadastro = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        const body = {
            name: this.state.nome,
            email: this.state.email
        }

        axios.post(url, body, headres)
        .then((res) => {
            alert("cadastro realizado com sucesso!")
            this.setState({nome: "", email: ""})
        })
        .catch((err) => {
            alert(err.response.data.message)
        })
    }

    render(){
        return(
            <div>
                <Botao onClick={this.props.irParaLista}>Ir para Lista de Usuários</Botao>
                <h2>Cadastro</h2>
                <input placeholder={"Nome"}value={this.state.nome}onChange={this.inputNome}/>
                <input placeholder={"Email"} value={this.state.email} onChange={this.inputEmail}
                />
                <Botao onClick={this.cadastro}>Cadastrar</Botao>
            </div>
        )
    }
}