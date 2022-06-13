import React from "react";
import AppBar from '@material-ui/core/AppBar';
import {StyledToolbar, Fonte} from "./Styled"
import Button from '@material-ui/core/Button';
import  {neutralColor}  from "../constatnts/Color";
import { irParaLista, irParaLogin } from "../routes/Cordinator";
import { useNavigate } from "react-router-dom";


 const Header = () =>{
    const navigate = useNavigate()
    return(
    <AppBar position="static">
        <StyledToolbar>
            <Button color={neutralColor} onClick={() => irParaLista(navigate)}><Fonte>cookenu</Fonte></Button>
            <Button color={neutralColor} onClick={() => irParaLogin(navigate)}><Fonte>Login</Fonte></Button>
        </StyledToolbar>
    </AppBar>
    )
}
export default Header