import React from 'react'
import { ThemeProvider } from '@material-ui/core'
import theme from './constatnts/Theme'
import Router from "./routes/Router"


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    
     <Router/>
    </ThemeProvider>
  )
}

export default App
