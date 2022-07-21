import React from "react";
import { GlobalStyled } from "./GlobalStyled";
import { Router } from "./Routes/Router";

function App() {
  return (
    <div>
      <GlobalStyled/>
      <Router/>
   </div>
  );
}

export default App;
