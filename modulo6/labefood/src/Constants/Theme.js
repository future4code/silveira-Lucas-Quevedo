import { createTheme } from "@mui/material/styles";
// import purple from '@material-ui/core/colors/purple';


const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error:{
        // main:purple.A400
    }
  },
});

export default theme