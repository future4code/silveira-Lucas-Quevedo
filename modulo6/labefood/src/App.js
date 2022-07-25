import React from "react";
import { GlobalState } from "./Global/GlobalState";
import { GlobalStyled } from "./GlobalStyled";
import { Router } from "./Routes/Router";
// import {Theme} from "./Constants/Theme"
function App() {
  return (
    <div>
       
        <GlobalState >
          <GlobalStyled/>
          <Router />
          
        </GlobalState>
        

     </div>
  );
}

export default App;
