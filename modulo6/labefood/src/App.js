import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalState } from "./Global/GlobalState";
import { GlobalStyled } from "./GlobalStyled";
import { Router } from "./Routes/Router";
import {Theme} from "./Constants/Theme"
function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyled>
        {/* <GlobalState> */}
          <Router />
        {/* </GlobalState> */}
      </GlobalStyled>

    </ThemeProvider>
  );
}

export default App;
