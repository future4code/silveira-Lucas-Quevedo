import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import Post2 from './components/Post/Post2';
import Post3 from'./components/Post/Post3';
import img from './img/flamengo.jpg';
import lucas from './img/lucas.jpg';

const MainContainer = styled.div`
  display: flex;
  justify-content:flex-end;
  flex-direction: column;
  align-items: center;
  /* background-color: red; */
`

class App extends React.Component {
  render() {
    return (
      
      <MainContainer>
        <h1>Insta4</h1>
        <Post
          nomeUsuario={'paulo'}
          fotoUsuario={img}
          fotoPost={'https://picsum.photos/200/151'}
        />
        <Post2
        nomeUsuario={'lucas'}
        fotoUsuario={lucas}
        fotoPost={'https://picsum.photos/200/150'}
      />
        <Post3
        nomeUsuario={'joão'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/152'}
      />
       
        
      </MainContainer>
    );
  }
}

export default App;
