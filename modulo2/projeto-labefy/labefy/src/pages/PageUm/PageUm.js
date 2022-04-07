import React from "react";
import axios from "axios"
import { BASE_URL } from "../../constants/Url";

export default class PageUm extends React.Component{
state ={
    playlist:[],
    genero:""
}
    adcionaGenero = () =>{
      const add =  [...this.state.playlist, this.state.genero]
      this.setState({playlist: add})
    }
   
   
    onChangeInput = (event) =>{
    this.setState({genero:event.target.value})
   }


    render(){
       const componenteGenero = this.state.playlist.map((list) =>{
           return <li key={list}>{list}</li>
       })
    
        return(<div>
            <h1>Labefy</h1>
            <button>Playlist</button>
            <br></br>
            <br></br>
            <input placeholder="Nome Playlist"  onChange={this.onChangeInput} value={this.state.genero}></input>
            <button onClick={this.adcionaGenero}>Adicionar</button>
           
            
           {/* <h1>{this.state.genero}</h1>  */}
        </div>)
    }
}