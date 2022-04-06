import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardUsuario = styled.div`
    border: 1px solid brown;
    padding: 10px;
    margin: 10px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    background-color: beige;
`
const Botao = styled.button`
background-color: brown;
color: white;
`


export default class TelaDeUsuarios extends React.Component {
    state = {
        usuarios: []
    }

    componentDidMount() {
        this.pegarUsuarios()
    }

    pegarUsuarios = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "chijo-paiva"
            }
        }).then((res) => {
            this.setState({ usuarios: res.data })
        })
        .catch((err) => {
            alert("Ocorreu um problema, tente novamente")
        })
    }
        

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "lucas-quevedo-silveira"
            }
        })
            .then((res) => {
                alert("Usuário(a) deletado(a) com sucesso!")
                this.pegarUsuarios()
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente")
            })
    }

    render() {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return (
                <CardUsuario key={user.id}>
                    {user.name}
                    <Botao onClick={() => this.deletarUsuario(user.id)}>X</Botao>
                </CardUsuario>
            )
        })

        return (
            <div>
                <Botao onClick={this.props.irParaCadastro}>Ir para Cadastro</Botao>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}