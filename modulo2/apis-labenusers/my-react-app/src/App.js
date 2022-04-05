import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';

const headers = 
 {
  headers:{
    Authorization:"lucas-quevedo-silveira"
  }
}

const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
export default class App extends React.Component  {
  state = {
    nome:'',
    email:'',
    listaUsuarios:[]
  }
  componentDidMount() {
    this.getAllUsers()
  }
  getAllUsers() {
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
    axios
    .get(url,headers)
    .then((res) =>{
      this.setState({
        listaUsuarios: res.data
      })
    })
    .catch((err)=>{
      
      console.log(err.response.data)
    })
  }
  createUser = () =>{
    const body = {
      name: this.state.nome,
      email:this.state.email
    } 
    console.log(body)
    axios
    .post(url,body,headers)
    .then((res)=>{
      console.log(res)
    this.getAllUsers()
    this.setState({
      nome:"",
      email:""
    })
    
      
    })
    .catch((err)=>{
      console.log(err.response)
    })
  }
  onChangeNome = (event) =>{
    this.setState({
      nome: event.target.value
    })
  }
  onChangeEmail = (event) =>{
     this.setState({
        email: event.target.value
  })
}
  

  render(){
    const componentelistaNomes = this.state.listaUsuarios.map((listaNomes) =>{
      return ( <li>{listaNomes.name}</li>)
    })
    return(
      <div>
        <label>
          Usuario
          <input value={this.state.nome} onChange={this.onChangeNome} placeholder = 'Nome'></input>
          <input value={this.state.email} onChange={this.onChangeEmail} placeholder = 'Email'></input>
        </label>
        <button onClick={this.createUser}>Enviar</button>
        
        <ul>{componentelistaNomes}</ul>
    </div>
    )
  }

}
  

